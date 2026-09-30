import {S,on,chronicle,clampRealm,delta} from './core.js';
import {chance,rnd,rr,clamp} from '../util.js';

function power(id){return S.powers[id]}
export function relation(id,amount,reason){
  const p=power(id);if(!p)return;p.rel=clamp(p.rel+amount,-100,100);if(reason)chronicle(reason,'diplomacy');
}
export function treaty(id,type,on=true){
  const p=power(id);if(!p)return false;p.treaties[type]=on;if(on)S.stats.treaties++;relation(id,on?8:-5,(on?'Treaty signed with ':'Treaty ended with ')+p.name);return true;
}
export function declareWar(id){
  const p=power(id);if(!p||p.war||p.defeated||p.vassal)return false;p.war=true;p.rel=Math.min(p.rel,-60);S.war.state='war';S.war.host=id;S.war.lastWar=S.clock;chronicle('War declared between the Crownlands and '+p.name+'.','war');return true;
}
export function makePeace(id){
  const p=power(id);if(!p||!p.war)return false;p.war=false;p.rel=Math.max(p.rel,-15);if(S.war.host===id){S.war.state='peace';S.war.host=null}chronicle('Peace concluded with '+p.name+'.','diplomacy');return true;
}
export function conquerPower(id){
  const p=power(id);if(!p)return false;
  p.war=false;p.defeated=true;p.vassal=true;p.mobilized=false;p.army=0;p.aggression=0;p.rel=Math.max(-20,p.rel);
  p.mood='subjugated';p.cool=9999;
  if(S.war.host===id)S.war.host=null;
  S.war.state='victory';
  chronicle(p.name+' has submitted to the Crownlands.','war');
  return true;
}
on('day',()=>{
  for(const p of Object.values(S.powers)){
    p.cool=Math.max(0,(p.cool||0)-1);
    if(p.id==='valemar'){
      if(p.war){p.mood='hostile';p.mobilized=true}
      else if(p.rel<-35||S.realm.security<35){p.mood='threatening';p.mobilized=chance(.35)}
      else if(p.rel>35){p.mood='conciliatory';p.mobilized=false}
      else p.mood='watchful';
      if(!p.war&&p.cool<=0&&p.rel<-55&&p.aggression>.55&&chance(.18)){declareWar(p.id);p.cool=5}
    } else if(p.rel>25)p.mood='friendly';
  }
  const v=power('valemar');
  if(v.war){
    const crown=Math.max(1,S.army.size||20)*(S.realm.security/60),enemy=v.army*(.8+Math.random()*.4);
    if(enemy>crown*1.18){S.realm.security-=4;S.realm.favor-=2;chronicle('Valemar raiders pressure the eastern road.','war')}
    else{v.wealth=Math.max(0,v.wealth-12);S.realm.renown+=1}
  }
  clampRealm();
});
export const diplomacySummary=()=>Object.fromEntries(Object.entries(S.powers).map(([id,p])=>[id,{name:p.name,rel:Math.round(p.rel),army:p.army,mood:p.mood,war:p.war,treaties:{...p.treaties}}]));
