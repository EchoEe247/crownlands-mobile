import assert from 'node:assert/strict';
import {defaultState,hydrateState,S,advanceTime,HOUR_SECONDS,serializeState} from '../src/sim/core.js';
import {seedRandom} from '../src/util.js';
import {declareWar,conquerPower} from '../src/sim/strategy.js';
import {populateWorld} from '../src/sim/population.js';
import {stepAll} from '../src/sim/actors.js';
import {safePersist,fastForwardSimulation} from '../src/runtime.js';
import '../src/sim/schedules.js';
import '../src/sim/military.js';
import '../src/sim/economy.js';

seedRandom(7);
hydrateState(defaultState());
assert.ok(declareWar('valemar'));
assert.ok(conquerPower('valemar'));
assert.equal(S.powers.valemar.defeated,true);
assert.equal(S.powers.valemar.vassal,true);
assert.equal(S.powers.valemar.army,0);
for(let i=0;i<200;i++)advanceTime(HOUR_SECONDS*24+.01);
assert.equal(S.powers.valemar.war,false,'defeated Valemar must not automatically re-declare war');
assert.equal(declareWar('valemar'),false,'defeated Valemar must reject manual re-declaration');

const legacy=defaultState();legacy.ver=2;delete legacy.powers.valemar.defeated;legacy.clock='corrupt';legacy.ledger.productionToday.grain=7.5;
hydrateState(legacy);
assert.equal(S.ver,3);
assert.equal(S.clock,8,'corrupt clock must fall back to a valid value');
assert.equal(S.powers.valemar.defeated,false,'old per-power saves must receive new fields');
assert.equal(S.ledger.productionToday.grain,7.5,'partial-day production must survive hydration');

let stored='';
assert.equal(safePersist({setItem(_k,v){stored=v}},'k',{ok:true}),true);
assert.equal(JSON.parse(stored).ok,true);
let reported=false;
assert.equal(safePersist({setItem(){throw new Error('blocked')}},'k',{ok:true},()=>{reported=true}),false);
assert.equal(reported,true,'save failure callback must run without throwing');

hydrateState(defaultState());populateWorld();seedRandom(7);
fastForwardSimulation(HOUR_SECONDS*25,advanceTime,stepAll);
assert.ok(S.ledger.hist.length>=1,'fast-forward must close at least one daily ledger');
assert.ok(S.ledger.last.production.grain>0,'fast-forward must simulate worker production instead of skipping it');
const partial=S.ledger.productionToday.grain;
const saved=serializeState();hydrateState(saved);
assert.equal(S.ledger.productionToday.grain,partial,'partial-day production must persist across save/reload');

console.log(JSON.stringify({ok:true,valemar:S.powers.valemar,ledger:S.ledger.last,partialProduction:S.ledger.productionToday},null,2));
