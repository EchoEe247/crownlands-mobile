import assert from 'node:assert/strict';
import {NPC_HEIGHT_M,KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA} from '../src/presentation.js';

const ratio=KING_HEIGHT_M/NPC_HEIGHT_M;
assert.ok(ratio>=1.03&&ratio<=1.07,'king must be only slightly taller than living NPCs');
assert.ok(KING_HEIGHT_M<=1.82,'king may not regress to oversized world scale');
assert.ok(Math.abs(KING_REGALIA_SCALE-1)<.01,'regalia is authored directly for the NPC-family king');
assert.ok(KING_CAMERA.standingDistance>=18,'player must not dominate the phone frame');
assert.ok(KING_CAMERA.fov>=64&&KING_CAMERA.fov<=70,'camera FOV must retain useful environment context');

console.log(JSON.stringify({ok:true,NPC_HEIGHT_M,KING_HEIGHT_M,ratio,KING_REGALIA_SCALE,KING_CAMERA},null,2));
