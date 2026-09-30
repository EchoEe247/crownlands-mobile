// Core simulation state, calendar, weather, event bus. No rendering dependencies.
import {clamp,rnd,chance,rr,pick} from '../util.js';

export const HOUR_SECONDS=22;           // real seconds per game hour
export const SEASONS=['Spring','Summer','Autumn','Winter'];
export const YEAR_DAYS=96;
export const START_HOUR=8;

export function defaultState(){return{
  ver:3,clock:START_HOUR,
  realm:{coin:600,debt:0,favor:55,security:62,prosperity:50,renown:10,tax:1,ration:1,farmFocus:1,unrestDays:0},
  stock:{grain:520,wood:80,iron:36,arms:26},
  build:{walls:0,granary:0,forge:0,barracks:0,market:0,watchtowers:0,farms:0},
  ledger:{today:{in:{},out:{}},productionToday:{grain:0,wood:0,iron:0,arms:0,trade:0,meals:0},last:{in:{},out:{},net:0,day:0},hist:[]},
  guard:{mode:'routine',until:0,recall:0,alarm:0},
  army:{directive:'routine',until:0,size:0,formation:'column',relay:''},
  king:{hp:100,maxhp:100,x:0,z:9,yaw:Math.PI,mounted:false,falls:0,seated:false,sleeps:0},
  weather:{type:'clear',until:10,intensity:0},
  powers:{
    valemar:{id:'valemar',name:'House Valemar',ruler:'Lord Maren Valemar',seat:'Blackmere Keep',rel:-12,army:34,wealth:520,food:400,aggression:.62,treaties:{},war:false,vassal:false,defeated:false,intel:0,mood:'watchful',cool:0,mobilized:false,tribute:0},
    kestrel:{id:'kestrel',name:'House Kestrel',ruler:'Duchess Ilse Kestrel',seat:'Highmoor',rel:8,army:46,wealth:700,food:500,aggression:.25,treaties:{},war:false,vassal:false,intel:0,mood:'courteous',cool:0,tribute:0},
    guild:{id:'guild',name:'Stonehollow Guild',ruler:'Guildmaster Torvik',seat:'Stonehollow',rel:14,army:6,wealth:400,food:200,aggression:0,treaties:{},war:false,vassal:false,intel:0,mood:'mercantile',cool:0,tribute:0},
    ashwood:{id:'ashwood',name:'Ashwood Company',ruler:'Captain Vex',seat:'Ashwood Camp',rel:-8,army:12,wealth:120,food:60,aggression:.5,treaties:{},war:false,vassal:false,intel:0,mood:'hungry',cool:0,tribute:0}
  },
  war:{state:'peace',host:null,siege:null,campaign:null,lastWar:0,victories:0,defeats:0},
  events:{pending:[],cool:0,flags:{},petitions:{},seen:{}},
  court:{queue:[],heard:0,dayHeard:0,unheard:0},
  goals:{done:{},progress:{}},
  chronicle:[],
  stats:{days:1,kills:0,raidsHeld:0,petitions:0,feasts:0,built:0,treaties:0},
  over:null,
  actors:{}
}}
export let S=defaultState();
export function replaceState(n){S=n;return S}
export const setState=(n)=>{Object.assign(S,n)};

// ---- calendar ---------------------------------------------------------------------------------
export const hour=()=>S.clock%24;
export const day=()=>Math.floor(S.clock/24)+1;
export const dayOfYear=()=>(day()-1)%YEAR_DAYS;
export const season=()=>Math.floor(dayOfYear()/24);
export const year=()=>Math.floor((day()-1)/YEAR_DAYS)+1;
export const seasonName=()=>SEASONS[season()];
export const isNight=()=>{const h=hour();return h>=21||h<5.5};
export const daylight=()=>{const h=hour();if(h<5||h>=21)return 0;if(h<7)return(h-5)/2;if(h>19)return(21-h)/2;return 1};
export const calLabel=()=>seasonName()+' · Day '+day()+', Year '+year();

// ---- event bus --------------------------------------------------------------------------------
const L={};
export const on=(e,f)=>{(L[e]||(L[e]=[])).push(f);return()=>{L[e]=L[e].filter(x=>x!==f)}};
export const emit=(e,p)=>{const a=L[e];if(a)for(const f of a)try{f(p)}catch(err){console.error('handler',e,err)}};
export const notify=(msg,kind='info')=>emit('toast',{msg,kind});
export function chronicle(msg,kind='note'){S.chronicle.push({day:day(),h:hour(),msg,kind});if(S.chronicle.length>240)S.chronicle.shift();emit('chronicle',msg)}

// ---- realm helpers ----------------------------------------------------------------------------
export function clampRealm(){const r=S.realm;r.coin=Math.max(0,Math.round(r.coin));for(const k of['favor','security','prosperity'])r[k]=clamp(Math.round(r[k]),0,100);r.renown=clamp(r.renown,0,100);
  for(const k of['grain','wood','iron','arms'])S.stock[k]=Math.max(0,Math.round(S.stock[k]))}
export function addLedger(kind,label,amt){const b=S.ledger.today[kind];b[label]=(b[label]||0)+amt}
export function earn(amt,label='Misc'){S.realm.coin+=amt;addLedger('in',label,amt)}
export function spend(amt,label='Misc',force=false){if(!force&&S.realm.coin<amt)return false;S.realm.coin-=amt;addLedger('out',label,amt);return true}
export function delta(d){for(const k in d){if(k==='coin')S.realm.coin+=d[k];else if(k in S.realm)S.realm[k]+=d[k];else if(k in S.stock)S.stock[k]+=d[k]}clampRealm();emit('realm')}
export const canAfford=c=>S.realm.coin>=c;

// ---- weather -----------------------------------------------------------------------------------
export function tickWeather(){
  if(S.clock<S.weather.until)return;
  const s=season(),w=S.weather;let t='clear';const r=rnd();
  if(s===3)t=r<.35?'snow':r<.6?'fog':r<.8?'cloudy':'clear';else if(s===2)t=r<.3?'rain':r<.5?'fog':r<.7?'cloudy':'clear';else if(s===0)t=r<.3?'rain':r<.5?'cloudy':r<.6?'fog':'clear';else t=r<.12?'rain':r<.35?'cloudy':'clear';
  w.type=t;w.intensity=rr(.5,1);w.until=S.clock+rr(5,14);emit('weather',t)}
let _lastHour=Math.floor(S.clock),_lastDay=day();
export function advanceTime(realSeconds){
  if(!Number.isFinite(realSeconds)||realSeconds<=0||S.over)return {hours:0,dayChanged:false};
  const before=S.clock,oldDay=day();
  S.clock+=realSeconds/HOUR_SECONDS;
  const nh=Math.floor(S.clock);
  if(nh!==_lastHour){_lastHour=nh;tickWeather();emit('hour',{hour:hour(),day:day()})}
  const nd=day(),changed=nd!==oldDay;
  if(changed){_lastDay=nd;emit('day',{day:nd,previous:oldDay})}
  return {hours:S.clock-before,dayChanged:changed}
}
export function serializeState(){return JSON.parse(JSON.stringify(S))}
export function hydrateState(saved){
  const base=defaultState();
  if(!saved||typeof saved!=='object')return replaceState(base);
  const finite=(v,fallback)=>Number.isFinite(Number(v))?Number(v):fallback;
  const n={...base,...saved};
  n.ver=base.ver;n.clock=finite(saved.clock,base.clock);
  n.realm={...base.realm,...saved.realm};n.stock={...base.stock,...saved.stock};n.build={...base.build,...saved.build};
  n.guard={...base.guard,...saved.guard};n.army={...base.army,...saved.army};n.king={...base.king,...saved.king};
  n.weather={...base.weather,...saved.weather};n.war={...base.war,...saved.war};
  n.ledger={...base.ledger,...saved.ledger,
    today:{...base.ledger.today,...saved.ledger?.today,
      in:{...base.ledger.today.in,...saved.ledger?.today?.in},
      out:{...base.ledger.today.out,...saved.ledger?.today?.out}},
    productionToday:{...base.ledger.productionToday,...saved.ledger?.productionToday},
    last:{...base.ledger.last,...saved.ledger?.last},
    hist:Array.isArray(saved.ledger?.hist)?saved.ledger.hist:base.ledger.hist};
  n.events={...base.events,...saved.events,
    flags:{...base.events.flags,...saved.events?.flags},
    petitions:{...base.events.petitions,...saved.events?.petitions},
    seen:{...base.events.seen,...saved.events?.seen}};
  n.court={...base.court,...saved.court};
  n.goals={...base.goals,...saved.goals,done:{...base.goals.done,...saved.goals?.done},progress:{...base.goals.progress,...saved.goals?.progress}};
  n.stats={...base.stats,...saved.stats};
  n.powers={};
  for(const [id,p] of Object.entries(base.powers))n.powers[id]={...p,...saved.powers?.[id],treaties:{...p.treaties,...saved.powers?.[id]?.treaties}};
  for(const [id,p] of Object.entries(saved.powers||{}))if(!n.powers[id])n.powers[id]={...p,treaties:{...(p.treaties||{})}};
  n.realm.coin=Math.max(0,finite(n.realm.coin,base.realm.coin));n.realm.debt=Math.max(0,finite(n.realm.debt,0));
  n.king.x=finite(n.king.x,base.king.x);n.king.z=finite(n.king.z,base.king.z);n.king.yaw=finite(n.king.yaw,base.king.yaw);
  replaceState(n);_lastHour=Math.floor(S.clock);_lastDay=day();return S
}
export const weatherFarmMod=()=>({clear:1,cloudy:1,rain:1.12,fog:.95,snow:.5}[S.weather.type]||1);
export const seasonFarmYield=()=>[4.2,7,12.5,.6][season()];

// ---- misc helpers used by many modules ---------------------------------------------------------
export function realmSummary(){const r=S.realm,st=S.stock;return{coin:r.coin,favor:r.favor,security:r.security,prosperity:r.prosperity,grain:st.grain}}
export function killGame(kind,text){if(S.over)return;S.over={kind,text,day:day()};chronicle(text,kind==='win'?'win':'loss');emit('gameover',S.over)}