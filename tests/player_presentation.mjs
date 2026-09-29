import assert from 'node:assert/strict';
import {KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA} from '../src/presentation.js';

assert.ok(KING_HEIGHT_M>=1.82&&KING_HEIGHT_M<=1.90,'king should be tall but close to ordinary adult scale');
assert.ok(KING_HEIGHT_M/1.72<=1.12,'king must stay close to the 1.72 m living-NPC baseline');
assert.ok(KING_REGALIA_SCALE<.9&&KING_REGALIA_SCALE>.8,'regalia must track the normalized king body');
assert.ok(KING_CAMERA.fov>=62&&KING_CAMERA.fov<=68,'camera FOV should avoid oversized close framing');
assert.ok(KING_CAMERA.standingDistance>=11.5&&KING_CAMERA.standingDistance<=13,'standing camera must frame the full king with environment context');
assert.ok(KING_CAMERA.seatedDistance>=7.5,'seated camera must show the throne pose without crowding');
assert.ok(KING_CAMERA.defaultPitch<=.22,'default camera angle must not exaggerate the avatar');
const nominalScreenFraction=KING_HEIGHT_M/(2*KING_CAMERA.standingDistance*Math.tan((KING_CAMERA.fov*Math.PI/180)/2));
assert.ok(nominalScreenFraction<.15,'nominal full-body framing must leave substantial environment context');

console.log(JSON.stringify({ok:true,KING_HEIGHT_M,npcRatio:KING_HEIGHT_M/1.72,nominalScreenFraction,KING_REGALIA_SCALE,KING_CAMERA},null,2));