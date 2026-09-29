import assert from 'node:assert/strict';
import * as L from '../src/layout.js';
import {findPath,segClear,navStats} from '../src/nav.js';
import {S,advanceTime,hydrateState,serializeState,defaultState} from '../src/sim/core.js';
import {makeActor,actors,player,issueOrder,simActor,activityOf,planners} from '../src/sim/actors.js';
import {stayPlan} from '../src/sim/schedules.js';

assert.ok(L.BUILDINGS.length>=39);
for(const id of ['lodgings','villageSquare','mbfield','f1','f2','f3','f4']) assert.ok(L.byId[id]||L.AREAS[id],id+' missing');
assert.ok(navStats.nodes>1000&&navStats.edges>3000);
for(const [x0,z0,x1,z1] of [[0,9,80,0],[0,9,190,30],[0,9,236,62],[0,9,430,255]]){
  const p=findPath(x0,z0,x1,z1); assert.ok(p.length>0,'no path');
  let px=x0,pz=z0; for(const q of p){assert.ok(segClear(px,pz,q.x,q.z,.3),'blocked path segment');px=q.x;pz=q.z}
}
const wallTarget={x:L.WALL.x0+.1,z:0};
const bad=findPath(0,9,wallTarget.x,wallTarget.z);
assert.ok(bad.length===0 || !segClear(bad.at(-1)?.x??0,bad.at(-1)?.z??9,wallTarget.x,wallTarget.z,.3),'unsafe impossible fallback');

const memo=makeActor({id:'memo',home:'vh0',role:'villager'});
const p1=stayPlan(memo,'greatHall','stand','talk','FIRST',{i:1,hook:'one'});
const p2=stayPlan(memo,'greatHall','stand','talk','SECOND',{i:1,hook:'two'});
assert.notEqual(p1,p2); assert.equal(p2.seq[0].label,'SECOND'); assert.equal(p2.seq[0].hook,'two');

const steward=makeActor({id:'stew-test',role:'steward',home:'apartments'});
S.clock=8; steward.tPlan=0; simActor(steward,.1);
const before=activityOf(steward); assert.notEqual(before,'Idle');
issueOrder(steward,{type:'goto',place:'plaza',spot:'petition',i:0,label:'Report to King',dur:1});
for(let i=0;i<2000&&steward.order;i++) simActor(steward,.1);
assert.equal(steward.order,null,'order should complete');
for(let i=0;i<20;i++) simActor(steward,.1);
assert.notEqual(activityOf(steward),'Idle','routine should resume');

hydrateState(defaultState()); const d0=Math.floor(S.clock/24)+1; advanceTime(22*24+.1); assert.equal(Math.floor(S.clock/24)+1,d0+1);
const saved=serializeState(); saved.realm.coin=1234; hydrateState(saved); assert.equal(S.realm.coin,1234);

console.log(JSON.stringify({ok:true,buildings:L.BUILDINGS.length,areas:Object.keys(L.AREAS).length,navStats,planners:Object.keys(planners).length,actors:actors.length},null,2));