import {S,on,delta,earn,spend,chronicle,clampRealm,day} from './core.js';
import {registerHook} from './actors.js';

const daily={grain:0,wood:0,iron:0,arms:0,trade:0,meals:0};
const add=(k,n=1)=>daily[k]=(daily[k]||0)+n;
registerHook('pickGrain',()=>{});
registerHook('dropGrain',(_a,_s,phase)=>{if(phase==='done')add('grain',3)});
registerHook('pickWood',()=>{});
registerHook('dropWood',(_a,_s,phase)=>{if(phase==='done')add('wood',2)});
registerHook('eat',(_a,_s,phase)=>{if(phase==='arrive'&&S.stock.grain>0){S.stock.grain=Math.max(0,S.stock.grain-.12);add('meals')}});
registerHook('social',(a,_s,phase)=>{if(phase==='done')a.morale=Math.min(100,a.morale+.6)});
registerHook('heal',(a,_s,phase)=>{if(phase==='done')a.hp=Math.min(a.maxhp,a.hp+18)});

on('workDone',({a,step})=>{
  if(step.prod==='grain')add('grain',1.4);
  else if(step.prod==='wood')add('wood',1.2);
  else if(step.prod==='ore')add('iron',.7);
  else if(step.prod==='arms')add('arms',.5);
  else if(step.prod==='trade')add('trade',1);
  else if(step.prod==='meals')add('meals',1);
});
on('day',()=>{
  const r=S.realm,st=S.stock;
  const produced={grain:Math.round(daily.grain*4*S.realm.farmFocus),wood:Math.round(daily.wood*2),iron:Math.round(daily.iron*1.5),arms:Math.round(daily.arms)};
  st.grain+=produced.grain;st.wood+=produced.wood;st.iron+=produced.iron;st.arms+=Math.min(produced.arms,st.iron);
  st.iron=Math.max(0,st.iron-produced.arms*.5);
  const population=Object.keys(S.actors||{}).length||80,foodUse=Math.max(18,Math.round(population*.34*S.realm.ration));
  st.grain=Math.max(0,st.grain-foodUse);
  const tax=Math.round((28+r.prosperity*.65+daily.trade*1.8)*r.tax),wages=Math.round(18+(S.army.size||20)*1.15);
  earn(tax,'Taxes & market dues');spend(wages,'Garrison wages',true);
  if(st.grain<60){r.favor-=4;r.prosperity-=2;chronicle('The granary is running dangerously low.','warning')}
  else if(st.grain>500){r.prosperity+=1}
  if(daily.meals>=8)r.favor+=1;
  r.security+=Math.min(2,(S.army.size||0)/30);
  clampRealm();
  S.ledger.last={in:{'Taxes & market dues':tax},out:{'Garrison wages':wages},net:tax-wages,day:day()-1,production:produced,foodUse};
  S.ledger.hist.push(S.ledger.last);if(S.ledger.hist.length>32)S.ledger.hist.shift();
  for(const k in daily)daily[k]=0;
});
export const economyToday=()=>({...daily});