import assert from 'node:assert/strict';
import {defaultState,hydrateState,S} from '../src/sim/core.js';
import {A} from '../src/sim/actors.js';
import '../src/sim/schedules.js';
import '../src/sim/military.js';
import '../src/sim/economy.js';
import '../src/sim/strategy.js';
import {populateWorld} from '../src/sim/population.js';

const saved=defaultState();
saved.clock=19.5;
saved.king={...saved.king,x:12.5,z:-7.25,yaw:1.2,seated:false};
saved.actors={
  steward:{x:14.2,z:3.1,y:0,yaw:.4,hp:88,alive:true,morale:81,loyalty:73,
    order:{status:'active',type:'goto',place:'plaza',spot:'petition',label:'Report to King',until:22}}
};
hydrateState(saved);
populateWorld();
const a=A.get('steward');
assert.ok(a,'steward missing');
assert.equal(a.hp,88);assert.equal(a.morale,81);assert.equal(a.loyalty,73);
assert.ok(a.order&&a.order.status==='active','active royal order should restore');
assert.equal(a.order.label,'Report to King');
assert.equal(S.king.x,12.5);assert.equal(S.king.z,-7.25);
console.log(JSON.stringify({ok:true,actor:{id:a.id,x:a.x,z:a.z,order:a.order.label},king:S.king},null,2));
