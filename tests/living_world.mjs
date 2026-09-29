import assert from 'node:assert/strict';
import {S,defaultState,hydrateState,advanceTime} from '../src/sim/core.js';
import {actors,planners,simActor,player} from '../src/sim/actors.js';
import '../src/sim/schedules.js';
import '../src/sim/military.js';
import '../src/sim/economy.js';
import {diplomacySummary,relation,treaty,declareWar,makePeace} from '../src/sim/strategy.js';
import {populateWorld,snapshotActors} from '../src/sim/population.js';

hydrateState(defaultState());populateWorld();
assert.ok(actors.length>=90,'expected persistent realm population');
assert.equal(actors.filter(a=>a.role==='royalguard').length,18);
assert.ok(actors.filter(a=>a.role==='soldier').length>=20);
assert.equal(actors.filter(a=>a.role==='marshal').length,1);
assert.equal(actors.filter(a=>a.team==='valemar'&&a.role==='vguard').length,8);
assert.ok(planners.royalguard&&planners.soldier&&planners.marshal&&planners.vguard);
for(const h of [0,7.9,8,15.9,16,23.9]){
  S.clock=h;for(const a of actors){a.tPlan=0;simActor(a,.05)}
  const on=actors.filter(a=>a.role==='royalguard'&&a.plan&&/Guarding|watch|wall|Patrolling/.test(a.plan.seq[0]?.label||''));
  assert.ok(on.length>=5&&on.length<=7,'guard shift should keep roughly six on duty at '+h+' got '+on.length);
}
snapshotActors();assert.equal(Object.keys(S.actors).length,actors.length);
const before=S.realm.coin;
for(let t=0;t<650;t+=.5){advanceTime(.5);for(const a of actors)simActor(a,.5)}
assert.ok(S.ledger.hist.length>=1,'daily economy did not close ledger');
assert.notEqual(S.realm.coin,before,'economy should change coin');
assert.ok(S.ledger.last.production.grain>0,'farms should produce grain');
assert.ok(S.ledger.last.production.wood>0,'woodcutters should produce wood');
assert.ok(S.ledger.last.production.iron>0,'miners should produce iron');
assert.ok(S.ledger.last.production.arms>0,'smiths should produce arms');

const rel0=S.powers.valemar.rel;relation('valemar',10,'test');assert.equal(S.powers.valemar.rel,rel0+10);
assert.ok(treaty('kestrel','trade',true));assert.equal(S.powers.kestrel.treaties.trade,true);
assert.ok(declareWar('valemar'));assert.equal(S.war.state,'war');assert.ok(makePeace('valemar'));assert.equal(S.war.state,'peace');
console.log(JSON.stringify({ok:true,actors:actors.length,guards:18,soldiers:actors.filter(a=>a.role==='soldier').length,ledger:S.ledger.last,powers:diplomacySummary()},null,2));