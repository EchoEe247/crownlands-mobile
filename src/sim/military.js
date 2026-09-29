import {S} from './core.js';
import {plan,registerPlanner} from './actors.js';
import {sched,stayPlan,eatPlan,sleepPlan,nm} from './schedules.js';
import {ROUTES} from '../layout.js';

const K=(s,a)=>s+'#'+a.id;
const routePlan=(a,key,route,label,pose='walk')=>plan(K(key,a),()=>({seq:route.map(([x,z],i)=>({pos:{x,z},dur:10+(i%3)*3,pose,label}))}));
const drillPlan=a=>plan(K('drill',a),()=>({seq:[
  {place:'yard',spot:'drill',i:a.idx,dur:34,pose:'drill',label:'Formation drill in the training yard'},
  {place:'yard',spot:'dummy',i:a.idx,dur:28,pose:'hammer',label:'Weapons practice'},
  {place:'yard',spot:'rest',i:a.idx,dur:18,pose:'stand',label:'Recovering between drills'}
]}));
const maintenance=a=>plan(K('maint',a),()=>({seq:[
  {place:'armory',spot:'rack',i:a.idx,dur:28,pose:'stand',label:'Inspecting weapons and armor'},
  {place:'guardQ',spot:'maint',i:a.idx,dur:28,pose:'hammer',label:'Maintaining guard equipment'}
]}));
const soldierMeal=a=>eatPlan(a,'garrisonMess');
const guardMeal=a=>eatPlan(a,'greatHall');
const shiftOf=h=>Math.floor(((h%24)+24)%24/8);
const isGuardDuty=(a,h)=>a.shift===shiftOf(h);

function guardPost(a){
  const cycle=(Math.floor(S.clock/2)+a.idx)%5;
  if(cycle===0)return stayPlan(a,'plaza','guard','post','Guarding the Royal Court',{i:a.idx});
  if(cycle===1)return stayPlan(a,'gate','guard','post','Standing watch at the main gate',{i:a.idx});
  if(cycle===2)return stayPlan(a,'wall','post','post','Walking a wall post',{i:a.idx});
  if(cycle===3)return routePlan(a,'guardPatrol',ROUTES.castle,'Patrolling the inner castle');
  return stayPlan(a,'aptDoor','guard','post','Guarding the royal apartments',{i:a.idx});
}
registerPlanner('royalguard',(a,h)=>{
  if(isGuardDuty(a,h))return guardPost(a);
  const rel=((h-a.shift*8)+24)%24;
  if(rel<1)return guardMeal(a);
  if(rel<3)return maintenance(a);
  if(rel<5)return drillPlan(a);
  return sleepPlan(a);
});

registerPlanner('marshal',(a,h)=>sched(h,[
  [22,6,()=>sleepPlan(a)],
  [6,7,()=>soldierMeal(a)],
  [7,10,()=>plan(K('marshal-am',a),()=>({seq:[
    {place:'warRoom',spot:'map',i:0,dur:45,pose:'talk',label:'Reviewing realm defenses'},
    {place:'yard',spot:'muster',i:0,dur:35,pose:'talk',label:'Inspecting the garrison'},
    {place:'gate',spot:'guard',i:0,dur:30,pose:'post',label:'Inspecting the main gate'}
  ]}))],
  [10,12,()=>stayPlan(a,'warRoom','map','write','Planning patrols and campaigns',{i:1})],
  [12,13,()=>soldierMeal(a)],
  [13,18,()=>routePlan(a,'marshal-patrol',ROUTES.road,'Inspecting the Royal Road')],
  [18,19,()=>soldierMeal(a)],
  [19,22,()=>stayPlan(a,'warRoom','map','talk','Holding the evening war council',{i:2})]
])());

registerPlanner('captain',(a,h)=>sched(h,[
  [22,5.5,()=>sleepPlan(a)],[5.5,6.5,()=>soldierMeal(a)],
  [6.5,10,()=>drillPlan(a)],[10,12,()=>routePlan(a,'captain-patrol',ROUTES.castle,'Inspecting guard posts')],
  [12,13,()=>soldierMeal(a)],[13,17,()=>drillPlan(a)],
  [17,19,()=>routePlan(a,'captain-gate',ROUTES.village,'Inspecting the village watch')],
  [19,20,()=>soldierMeal(a)],[20,22,()=>stayPlan(a,'warRoom','map','talk','Reporting to the Lord Marshal',{i:a.idx})]
])());

registerPlanner('sergeant',(a,h)=>sched(h,[
  [22,5,()=>sleepPlan(a)],[5,6,()=>soldierMeal(a)],[6,12,()=>drillPlan(a)],
  [12,13,()=>soldierMeal(a)],[13,18,()=>drillPlan(a)],[18,20,()=>maintenance(a)],[20,22,()=>sleepPlan(a)]
])());

registerPlanner('soldier',(a,h)=>{
  if(S.army.directive==='drill')return drillPlan(a);
  if(S.army.directive==='follow')return stayPlan(a,'yard','muster','stand','Awaiting the King’s marching column',{i:a.idx});
  if(S.army.directive==='gate')return stayPlan(a,'gate','defend','post','Reinforcing the main gate',{i:a.idx});
  if(S.army.directive==='muster')return stayPlan(a,'yard','muster','post','Mustered under royal orders',{i:a.idx});
  return sched(h,[
    [21.5,5.5,()=>sleepPlan(a)],[5.5,6.5,()=>soldierMeal(a)],[6.5,11.5,()=>drillPlan(a)],
    [11.5,12.5,()=>soldierMeal(a)],[12.5,15,()=>maintenance(a)],
    [15,18.5,()=>routePlan(a,'soldier-patrol',a.company%2?ROUTES.village:ROUTES.castle,'Patrolling Crown lands')],
    [18.5,19.5,()=>soldierMeal(a)],[19.5,21.5,()=>stayPlan(a,'barracksA','rest','sit','Off duty in barracks',{i:a.idx})]
  ])();
});

registerPlanner('vguard',(a,h)=>{
  if(S.powers.valemar.war)return stayPlan(a,'bmGate','defend','post','Defending Blackmere from the Crown',{i:a.idx});
  return sched(h,[
    [22,6,()=>stayPlan(a,'bmBarracks','bed','sleep','Sleeping in Blackmere barracks',{i:a.idx,y:.45})],
    [6,7,()=>eatPlan(a,'bmHall')],[7,19,()=>stayPlan(a,a.idx%2?'bmGate':'bmWall',a.idx%2?'guard':'post','post','Standing Blackmere watch',{i:a.idx})],
    [19,20,()=>eatPlan(a,'bmHall')],[20,22,()=>stayPlan(a,'bmYard','stand','talk','Off duty in Blackmere yard',{i:a.idx})]
  ])()
});
registerPlanner('vsoldier',(a,h)=>{
  if(S.powers.valemar.war)return stayPlan(a,'bmYard','drill','post','Mustered to defend Blackmere',{i:a.idx});
  return sched(h,[
    [22,6,()=>stayPlan(a,'bmBarracks','bed','sleep','Sleeping in Blackmere barracks',{i:a.idx,y:.45})],
    [6,7,()=>eatPlan(a,'bmHall')],[7,12,()=>stayPlan(a,'bmYard','drill','drill','Drilling for House Valemar',{i:a.idx})],
    [12,13,()=>eatPlan(a,'bmHall')],[13,18,()=>stayPlan(a,'bmYard','drill','drill','Training in Blackmere yard',{i:a.idx+3})],
    [18,19,()=>eatPlan(a,'bmHall')],[19,22,()=>stayPlan(a,'bmYard','stand','talk','Resting in Blackmere yard',{i:a.idx})]
  ])()
});

export const guardShift=shiftOf;
export const guardOnDuty=(a,h)=>a.role==='royalguard'&&isGuardDuty(a,h);