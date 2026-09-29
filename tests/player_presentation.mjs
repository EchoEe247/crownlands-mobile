import assert from 'node:assert/strict';
import {NPC_HEIGHT_M,KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA} from '../src/presentation.js';

const ratio=KING_HEIGHT_M/NPC_HEIGHT_M;
assert.ok(ratio>=1.03&&ratio<=1.07,'king must be only slightly taller than living NPCs');
assert.ok(KING_HEIGHT_M<=1.82,'king may not regress to oversized world scale');
assert.ok(Math.abs(KING_REGALIA_SCALE-1)<.01,'regalia is authored directly for the NPC-family king');
assert.ok(KING_CAMERA.fov>=64&&KING_CAMERA.fov<=70,'camera FOV must retain useful environment context');
assert.equal(KING_CAMERA.defaultMode,'third','mobile gameplay must start in third person');
assert.ok(KING_CAMERA.third.standingDistance>=4.4&&KING_CAMERA.third.standingDistance<=5.4,'third-person camera must be close enough for play without crowding the king');
assert.ok(KING_CAMERA.third.seatedDistance>=3.7,'seated third-person view must retain throne context');
assert.ok(KING_CAMERA.first.eyeHeight>=1.55&&KING_CAMERA.first.eyeHeight<=1.68,'first-person eye height must sit inside a normal adult head range');
const nominalBodyFraction=KING_HEIGHT_M/(2*KING_CAMERA.third.standingDistance*Math.tan((KING_CAMERA.fov*Math.PI/180)/2));
assert.ok(nominalBodyFraction>=.24&&nominalBodyFraction<=.34,'third-person full body should occupy a useful but non-clipped portion of the screen');

console.log(JSON.stringify({ok:true,NPC_HEIGHT_M,KING_HEIGHT_M,ratio,nominalBodyFraction,KING_REGALIA_SCALE,KING_CAMERA},null,2));
