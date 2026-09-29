import assert from 'node:assert/strict';
import {KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA} from '../src/presentation.js';

assert.ok(KING_HEIGHT_M>=1.85&&KING_HEIGHT_M<=1.98,'king should be tall but human-scale');
assert.ok(KING_REGALIA_SCALE<1&&KING_REGALIA_SCALE>.8,'regalia must follow normalized king scale');
assert.ok(KING_CAMERA.standingDistance>=6.5,'standing third-person camera must frame the full king');
assert.ok(KING_CAMERA.standingDistance<=8,'standing camera must stay close enough for character readability');
assert.ok(KING_CAMERA.seatedDistance>=5,'seated camera must not crowd the throne pose');
assert.ok(KING_CAMERA.standingTargetY<KING_HEIGHT_M,'camera target must remain below the crown');

console.log(JSON.stringify({ok:true,KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA},null,2));
