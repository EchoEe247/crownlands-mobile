import assert from 'node:assert/strict';
import {defaultState,hydrateState,S} from '../src/sim/core.js';
import {actors,A,simActor,issueOrder,activityOf} from '../src/sim/actors.js';
import '../src/sim/schedules.js';
import '../src/sim/military.js';
import '../src/sim/economy.js';
import {declareWar} from '../src/sim/strategy.js';
import {populateWorld} from '../src/sim/population.js';
import {findPath,segClear} from '../src/nav.js';

hydrateState(defaultState());populateWorld();S.clock=10;
assert.ok(declareWar('valemar'),'war should start');
for(const a of actors.filter(a=>a.team==='valemar')){a.tPlan=0;simActor(a,.1)}
const vg=A.get('vguard0'),vs=A.get('vsoldier0');
assert.match(activityOf(vg),/Defending Blackmere/);
assert.match(activityOf(vs),/Mustered to defend Blackmere/);

const path=findPath(0,9,415,255);
assert.ok(path.length>0,'Blackmere must be reachable from Crownlands');
let px=0,pz=9;
for(const q of path){assert.ok(segClear(px,pz,q.x,q.z,.28),'campaign path crosses a solid');px=q.x;pz=q.z}

const soldier=A.get('soldier0');
issueOrder(soldier,{type:'post',place:'bmYard',spot:'drill',i:0,hours:8,label:'Marching on Blackmere'});
for(let i=0;i<700&&!soldier.arrived;i++)simActor(soldier,.5);
assert.ok(soldier.x>398&&soldier.z>230,'campaign order should reach Blackmere yard');
console.log(JSON.stringify({ok:true,pathPoints:path.length,valemarGuard:activityOf(vg),valemarSoldier:activityOf(vs),crownSoldier:{x:+soldier.x.toFixed(1),z:+soldier.z.toFixed(1),activity:activityOf(soldier)}},null,2));