import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from '../vendor/addons/utils/SkeletonUtils.js';
import {WORLD,ROUTES,STALLS,zoneAt,blockedAt as realmBlockedAt} from './layout.js';
import {S,defaultState,hydrateState,serializeState,advanceTime,HOUR_SECONDS,day as simDay,year as simYear,seasonName,on as simOn,clampRealm as clampSimRealm} from './sim/core.js';
import {actors,player as simPlayer,stepAll,issueOrder,cancelOrder,makeActor,placeByPlan,activityOf} from './sim/actors.js';
import './sim/schedules.js';
import './sim/military.js';
import './sim/economy.js';
import {diplomacySummary,relation,treaty,declareWar,makePeace} from './sim/strategy.js';
import {populateWorld,snapshotActors} from './sim/population.js';
import {createLivingRenderer} from './render/living.js';
import {createWorldGeometry} from './render/world.js';
import {KING_HEIGHT_M,KING_REGALIA_SCALE,KING_CAMERA} from './presentation.js';

const $=id=>document.getElementById(id);
const game=$('game'),beginBtn=$('begin'),intro=$('intro'),interactBtn=$('interact'),ordersBtn=$('orders'),attackBtn=$('attack'),nearbyEl=$('nearby'),dialogue=$('dialogue'),speakerRole=$('speakerRole'),speakerName=$('speakerName'),dialogueText=$('dialogueText'),choicesEl=$('choices'),leaveDialogue=$('leaveDialogue'),objectiveEl=$('objective'),toastEl=$('toast'),warStatusEl=$('warStatus');

const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.25));renderer.setSize(innerWidth,innerHeight);
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;game.appendChild(renderer.domElement);window.__crownlands3dBooted=true;window.dispatchEvent(new Event('crownlands3dready'));

const scene=new THREE.Scene();scene.background=new THREE.Color(0x90a7bd);scene.fog=new THREE.Fog(0x90a7bd,28,205);
const camera=new THREE.PerspectiveCamera(58,innerWidth/innerHeight,.08,280),loader=new GLTFLoader(),clock=new THREE.Clock();
const hemi=new THREE.HemisphereLight(0xd9eaff,0x594330,2);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffe5b2,3);sun.position.set(-7,13,8);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:32});scene.add(sun);
const fill=new THREE.PointLight(0xffbd68,12,12,2);fill.position.set(0,3.3,5.7);scene.add(fill);
const ground=new THREE.Mesh(new THREE.CircleGeometry(11.5,64),new THREE.MeshStandardMaterial({color:0xa9987c,roughness:.92}));ground.rotation.x=-Math.PI/2;ground.position.y=-.035;ground.receiveShadow=true;scene.add(ground);
const world=new THREE.Group();scene.add(world);
const player=new THREE.Group();player.position.set(0,0,9);player.rotation.y=Math.PI;scene.add(player);

let playerVisual,legL,legR,shinL,shinR,armL,armR,foreL,foreR,hips,torso,loadedEssential=0,ready=false,cameraYaw=0,cameraPitch=.28,moveX=0,moveY=0,currentTarget=null,dialogueOpen=false,moving=false,walkPhase=0,seated=false,livingRenderer=null,worldRenderer=null,autosaveT=0,fpsEMA=60;
let guardMode='patrol',armyMode='drill',playerMixer=null,kingIdleAction=null,kingWalkAction=null,kingAttackAction=null,kingAnimState='idle',cape=null,royalRegalia=null,currentZone='ROYAL COURT',raidActive=false,raidWave=0,raidPending=0;
const mixers=[],raiders=[],worldInteractables=[],kingRest=new Map();
let savedState=null,legacyState=null;
try{savedState=JSON.parse(localStorage.getItem('crownlands_state_v2')||'null')}catch{}
try{legacyState=JSON.parse(localStorage.getItem('crownlands_realm_v1')||'null')}catch{}
if(savedState)hydrateState(savedState);else{
  const seed=defaultState();
  if(legacyState){seed.realm.coin=legacyState.gold??seed.realm.coin;seed.realm.favor=legacyState.favor??seed.realm.favor;seed.realm.security=legacyState.security??seed.realm.security;seed.realm.prosperity=legacyState.prosperity??seed.realm.prosperity;seed.clock=8+Math.max(0,(legacyState.day||1)-1)*24;seed.guard.mode=legacyState.guardMode||'routine';seed.army.directive=legacyState.armyMode||'routine';seed.army.size=legacyState.armySize||20}
  hydrateState(seed)
}
populateWorld();
const realm={
  get gold(){return S.realm.coin},set gold(v){S.realm.coin=v},
  get favor(){return S.realm.favor},set favor(v){S.realm.favor=v},
  get security(){return S.realm.security},set security(v){S.realm.security=v},
  get prosperity(){return S.realm.prosperity},set prosperity(v){S.realm.prosperity=v},
  get day(){return simDay()},
  get armySize(){return S.army.size},set armySize(v){S.army.size=v},
  get guardMode(){return S.guard.mode},set guardMode(v){S.guard.mode=v},
  get armyMode(){return S.army.directive},set armyMode(v){S.army.directive=v}
};
const save=()=>{
  S.king.x=player.position.x;S.king.z=player.position.z;S.king.yaw=player.rotation.y;S.king.seated=seated;
  snapshotActors();localStorage.setItem('crownlands_state_v2',JSON.stringify(serializeState()))
};
function clampRealm(){clampSimRealm()}
function renderStats(){for(const k of ['gold','favor','security','prosperity'])$(k).textContent=realm[k];document.querySelector('.royal-chip small').textContent='THE CROWNLANDS · '+seasonName().toUpperCase()+' · DAY '+simDay()+' · YEAR '+simYear()}renderStats();

let audioCtx=null,worldLightTime=.18;
function initAudio(){try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume()}catch{}}
function tone(freq,dur=.18,gain=.025,type='sine',delay=0){if(!audioCtx)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+delay;o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(audioCtx.destination);o.start(t);o.stop(t+dur+.03)}
function royalChime(){tone(392,.25,.025,'triangle',0);tone(523,.3,.025,'triangle',.12);tone(659,.35,.02,'triangle',.24)}
function alarmHorn(){tone(130,.55,.035,'sawtooth',0);tone(110,.55,.03,'sawtooth',.48)}
function swordSound(){tone(420,.09,.018,'sawtooth',0);tone(190,.12,.015,'triangle',.06)}
function updateLighting(dt){worldLightTime=(S.clock%24)/24;const a=(worldLightTime-.25)*Math.PI*2,day=.56+.36*Math.sin(a);sun.position.set(Math.cos(a)*16,5+Math.max(0,Math.sin(a))*15,Math.sin(a)*13);sun.intensity=1.25+Math.max(.05,day)*2.1;hemi.intensity=.8+Math.max(.05,day)*1.45;const c=new THREE.Color().setHSL(.58,.28,THREE.MathUtils.clamp(.22+day*.38,.24,.62));scene.background.copy(c);scene.fog.color.copy(c)}
const petitions={
 captain:[
  {text:'Your Majesty, raiders crossed the eastern ford at dawn. The villages ask for the Crown’s protection.',choices:[{title:'Ride out the Royal Guard',note:'−70 coin · +16 security · +6 favor',delta:{gold:-70,security:16,favor:6}},{title:'Fortify the villages',note:'−45 coin · +9 security · +5 prosperity',delta:{gold:-45,security:9,prosperity:5}}]},
  {text:'Sire, two barons refuse to send their levies. Shall I enforce the royal summons?',choices:[{title:'Enforce the summons',note:'+13 security · −8 favor',delta:{security:13,favor:-8}},{title:'Call them to court first',note:'+6 favor · −3 security',delta:{favor:6,security:-3}}]}
 ],
 merchant:[
  {text:'Your Majesty, grain prices have doubled after the poor harvest. The guild asks you to open the royal granaries.',choices:[{title:'Open the granaries',note:'−90 coin · +14 favor · +9 prosperity',delta:{gold:-90,favor:14,prosperity:9}},{title:'Keep the royal reserve',note:'+80 coin · −12 favor · −6 prosperity',delta:{gold:80,favor:-12,prosperity:-6}}]},
  {text:'The southern merchants offer a rich caravan tax if the Crown guarantees the road.',choices:[{title:'Guarantee the road',note:'−55 coin · +10 prosperity · +5 security',delta:{gold:-55,prosperity:10,security:5}},{title:'Tax them heavily',note:'+130 coin · −8 prosperity',delta:{gold:130,prosperity:-8}}]}
 ],
 chancellor:[
  {text:'Your Grace, the high nobles demand another exemption from crown tax. They say tradition is on their side.',choices:[{title:'No one stands above the Crown',note:'+140 coin · −11 favor',delta:{gold:140,favor:-11}},{title:'Grant a one-year exemption',note:'+9 favor · −100 coin',delta:{favor:9,gold:-100}}]},
  {text:'A neighboring duke proposes a marriage alliance with your house. The treaty would calm the western border.',choices:[{title:'Accept the alliance',note:'+10 security · +5 prosperity',delta:{security:10,prosperity:5}},{title:'Keep the Crown independent',note:'+5 favor · −5 security',delta:{favor:5,security:-5}}]}
 ],
 steward:[
  {text:'Majesty, the old stone bridge is failing. Rebuilding it would help every market town in the realm.',choices:[{title:'Rebuild it in royal stone',note:'−120 coin · +15 prosperity · +5 favor',delta:{gold:-120,prosperity:15,favor:5}},{title:'Order local lords to repair it',note:'−4 favor · +7 prosperity',delta:{favor:-4,prosperity:7}}]},
  {text:'The people ask for a royal feast to mark the first week of your reign.',choices:[{title:'Feast for the whole city',note:'−85 coin · +13 favor · +4 prosperity',delta:{gold:-85,favor:13,prosperity:4}},{title:'Spend it on the watch instead',note:'−55 coin · +10 security',delta:{gold:-55,security:10}}]}
 ]};
const specs=[
 {id:'captain',role:'Captain of the Guard',name:'Captain Rowan',asset:'./assets/guard.glb',pos:[-3.4,0,.7],rot:.35,route:[[-3.4,.7],[-12,1.5],[-17,3],[0,2.2],[15,-2.5]]},
 {id:'merchant',role:'Guild Envoy',name:'Lady Mira',asset:'./assets/merchant.glb',pos:[3.4,0,.9],rot:-.35,route:[[3.4,.9],[12,4.5],[17,6],[28,7],[32,-7],[13,2],[2,1.5]]},
 {id:'chancellor',role:'Royal Chancellor',name:'Lord Edrin',asset:'./assets/mage.glb',pos:[-3.1,0,-3],rot:.2,route:[[-3.1,-3],[-1,2.5],[1.5,3.5],[-2.5,4],[-3.1,-3]]},
 {id:'steward',role:'Steward of the Realm',name:'Master Corvin',asset:'./assets/innkeeper.glb',pos:[3.1,0,-3],rot:-.2,route:[[3.1,-3],[-14,-3],[15,3],[30,-7],[34,4],[3.1,-3]]}
];
const load=url=>new Promise((res,rej)=>loader.load(url,res,undefined,rej));
function prep(root,cast=false){root.traverse(o=>{if(o.isMesh){o.castShadow=cast;o.receiveShadow=true;if(o.material)o.material=o.material.clone()}})}
function label(text){const c=document.createElement('canvas');c.width=512;c.height=128;const x=c.getContext('2d');x.fillStyle='rgba(13,11,13,.78)';x.beginPath();x.roundRect(20,30,472,70,18);x.fill();x.strokeStyle='rgba(232,205,133,.75)';x.lineWidth=3;x.stroke();x.fillStyle='#ffe4a5';x.font='bold 31px Georgia';x.textAlign='center';x.fillText(text,256,75);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthWrite:false}));s.scale.set(2.6,.65,1);s.position.y=2.35;return s}
function buildThrone(){const g=new THREE.Group(),wood=new THREE.MeshStandardMaterial({color:0x5b341d,roughness:.62}),gold=new THREE.MeshStandardMaterial({color:0xd8a83e,roughness:.28,metalness:.72}),velvet=new THREE.MeshStandardMaterial({color:0x741d29,roughness:.78}),stone=new THREE.MeshStandardMaterial({color:0x8f806c,roughness:.88});const box=(a,b,c,m,x,y,z)=>{const q=new THREE.Mesh(new THREE.BoxGeometry(a,b,c),m);q.position.set(x,y,z);q.castShadow=q.receiveShadow=true;g.add(q)};box(3,.22,2.15,stone,0,.11,0);box(2.35,.22,1.55,stone,0,.33,-.08);box(1.05,.23,.85,velvet,0,.66,-.03);box(1.15,2,.22,wood,0,1.57,.33);box(1,1.55,.12,velvet,0,1.6,.2);box(.13,.85,.13,gold,-.64,1.08,0);box(.13,.85,.13,gold,.64,1.08,0);box(.32,.12,.68,gold,-.64,1.38,-.03);box(.32,.12,.68,gold,.64,1.38,-.03);for(let i=-2;i<=2;i++){const p=new THREE.Mesh(new THREE.ConeGeometry(.11,.38,5),gold);p.position.set(i*.23,2.73,.33);p.castShadow=true;g.add(p)}g.position.set(0,0,6.15);g.rotation.y=Math.PI;scene.add(g);const ring=new THREE.Mesh(new THREE.RingGeometry(.8,1,40),new THREE.MeshBasicMaterial({color:0xffda72,transparent:true,opacity:.2,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.set(0,.02,5);scene.add(ring);return{id:'throne',role:'Royal Throne',name:'The Crown',pos:new THREE.Vector3(0,0,5),ring,isThrone:true}}
const throne=buildThrone();

async function loadEnvironment(){try{const g=await load('./assets/royal-courtyard.glb');prep(g.scene);world.add(g.scene)}catch(e){console.error(e)}loadedEssential++;checkReady()}
async function loadPlayer(){
  royalRegalia=new THREE.Group();
  royalRegalia.scale.setScalar(KING_REGALIA_SCALE);
  player.add(royalRegalia);
  try{
    const g=await load('./assets/king-knight.glb');
    playerVisual=g.scene; prep(playerVisual,true); player.add(playerVisual);
    let box=new THREE.Box3().setFromObject(playerVisual),size=new THREE.Vector3();box.getSize(size);
    // A king should read as tall, not gigantic. Normalize to a 1.92 m adult
    // and preserve the model's authored proportions instead of widening X/Z.
    const sc=KING_HEIGHT_M/Math.max(.01,size.y); playerVisual.scale.setScalar(sc);
    box=new THREE.Box3().setFromObject(playerVisual); playerVisual.position.y-=box.min.y;
    playerVisual.traverse(o=>{
      const n=(o.name||'').toLowerCase();
      if(n==='upperleg.l'||n.includes('upperleg.l'))legL=o;
      if(n==='upperleg.r'||n.includes('upperleg.r'))legR=o;
      if(n==='lowerleg.l'||n.includes('lowerleg.l'))shinL=o;
      if(n==='lowerleg.r'||n.includes('lowerleg.r'))shinR=o;
      if(n==='upperarm.l'||n.includes('upperarm.l'))armL=o;
      if(n==='upperarm.r'||n.includes('upperarm.r'))armR=o;
      if(n==='lowerarm.l'||n.includes('lowerarm.l'))foreL=o;
      if(n==='lowerarm.r'||n.includes('lowerarm.r'))foreR=o;
      if(n==='hips')hips=o;if(n==='torso')torso=o;
      if(o.isBone)kingRest.set(o.name,{q:o.quaternion.clone(),p:o.position.clone()});
      if(o.isMesh&&o.material){
        // Quaternius source GLB shipped these materials with alpha=0 even though
        // there is no alpha texture. Normalize them explicitly so the king
        // cannot disappear on Android/Three.js.
        o.frustumCulled=false;
        const mats=Array.isArray(o.material)?o.material:[o.material];
        for(const m of mats){
          m.opacity=1;m.transparent=false;m.alphaTest=0;m.depthWrite=true;m.visible=true;
          const mn=(m.name||'').toLowerCase();
          if(mn.includes('armor')){m.color.set(0x303a50);m.metalness=.68;m.roughness=.3}
          else if(mn.includes('skin')){m.color.set(0xbf8b5a);m.metalness=0;m.roughness=.72}
          else if(mn.includes('boots')){m.color.set(0x24160f);m.roughness=.7}
        }
      }
    });
    addRoyalRegalia();
    // Keep the crown on the player root instead of parenting it to the
    // imported head bone. The source rig uses an unusual head transform and
    // could hide/offset the crown on Android.
    const crown=makeRoyalCrown();crown.position.set(0,2.16,0);royalRegalia.add(crown)
    if(g.animations?.length){
      playerMixer=new THREE.AnimationMixer(playerVisual);
      const idle=g.animations.find(a=>a.name.toLowerCase().endsWith('|idle'))||g.animations.find(a=>a.name.toLowerCase().includes('idle'));
      const walk=g.animations.find(a=>a.name.toLowerCase().includes('walking'))||g.animations.find(a=>a.name.toLowerCase().includes('run'));
      if(idle){kingIdleAction=playerMixer.clipAction(idle);kingIdleAction.play()}
      if(walk){kingWalkAction=playerMixer.clipAction(walk)}
      const attack=g.animations.find(a=>a.name.toLowerCase().includes('swordattack'))||g.animations.find(a=>a.name.toLowerCase().includes('attack'));
      if(attack){kingAttackAction=playerMixer.clipAction(attack);kingAttackAction.setLoop(THREE.LoopOnce,1);kingAttackAction.clampWhenFinished=true}
      mixers.push(playerMixer);
    }
  }catch(e){
    console.error(e);
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.4,1.1,6,12),new THREE.MeshStandardMaterial({color:0x303a50,metalness:.55,roughness:.35}));
    body.position.y=1.1;body.castShadow=true;player.add(body);playerVisual=body;addRoyalRegalia();const c=makeRoyalCrown();c.position.set(0,2.16,0);royalRegalia.add(c);
  }
  loadedEssential++;checkReady()
}
function makeRoyalCrown(){
  const g=new THREE.Group(),gold=new THREE.MeshStandardMaterial({color:0xe3b94e,metalness:.82,roughness:.22}),ruby=new THREE.MeshStandardMaterial({color:0x9a1830,metalness:.25,roughness:.3});
  const band=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.12,16,1,true),gold);g.add(band);
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2,p=new THREE.Mesh(new THREE.ConeGeometry(.045,.2,5),gold);p.position.set(Math.cos(a)*.16,.14,Math.sin(a)*.16);g.add(p)}
  const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.035),ruby);gem.position.set(0,.08,.19);g.add(gem);return g
}
function addRoyalRegalia(){
  const regaliaRoot=royalRegalia||player;
  const gold=new THREE.MeshStandardMaterial({color:0xdcb04a,metalness:.76,roughness:.25});
  const ruby=new THREE.MeshStandardMaterial({color:0x711a29,roughness:.72,side:THREE.DoubleSide});
  const belt=new THREE.Mesh(new THREE.TorusGeometry(.31,.028,8,28),gold);belt.rotation.x=Math.PI/2;belt.position.set(0,1.02,0);regaliaRoot.add(belt);
  const med=new THREE.Mesh(new THREE.OctahedronGeometry(.07),gold);med.position.set(0,1.48,.31);med.castShadow=true;regaliaRoot.add(med);

  // Back-only cloth cape. The old partial cylinder wrapped around the front
  // and read as a floating red rectangle when the body failed to render.
  const cols=5,rows=6,verts=[],idx=[];
  for(let y=0;y<rows;y++){
    const t=y/(rows-1),yy=1.78-t*1.18,half=.27+t*.28;
    for(let x=0;x<cols;x++){
      const u=x/(cols-1),xx=(u*2-1)*half;
      const curve=Math.pow(Math.abs(u-.5)*2,1.6)*.045;
      const zz=-.23-.08*t+curve;
      verts.push(xx,yy,zz)
    }
  }
  for(let y=0;y<rows-1;y++)for(let x=0;x<cols-1;x++){
    const a=y*cols+x,b=a+1,c=a+cols,d=c+1;idx.push(a,c,b,b,c,d)
  }
  const capeGeo=new THREE.BufferGeometry();
  capeGeo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
  capeGeo.setIndex(idx);capeGeo.computeVertexNormals();
  cape=new THREE.Mesh(capeGeo,ruby);cape.castShadow=true;cape.receiveShadow=true;regaliaRoot.add(cape);
  for(const x of [-.25,.25]){const clasp=new THREE.Mesh(new THREE.SphereGeometry(.045,10,8),gold);clasp.position.set(x,1.72,-.19);clasp.castShadow=true;regaliaRoot.add(clasp)}
}
function resetKingBones(){for(const b of [hips,torso,legL,legR,shinL,shinR,armL,armR,foreL,foreR]){if(!b)continue;const r=kingRest.get(b.name);if(r){b.quaternion.copy(r.q);b.position.copy(r.p)}}}
function rotateBone(b,axis,angle){if(!b)return;const r=kingRest.get(b.name);if(r)b.quaternion.copy(r.q);b.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(axis,angle))}
function setKingAnimation(state){
  if(!playerMixer||seated||state===kingAnimState)return;
  const next=state==='walk'?kingWalkAction:kingIdleAction,prev=kingAnimState==='walk'?kingWalkAction:kingIdleAction;
  if(next){next.reset().play();if(prev&&prev!==next)next.crossFadeFrom(prev,.18,true)} kingAnimState=state
}
let guardTemplatePromise=null;
async function getGuardTemplate(){if(!guardTemplatePromise)guardTemplatePromise=load('./assets/guard.glb');return guardTemplatePromise}
const activeGuardShift=()=>Math.floor((((S.clock%24)+24)%24)/8);
const onDutyGuards=()=>actors.filter(a=>a.alive&&a.role==='royalguard'&&a.shift===activeGuardShift());
function refreshCommandStatus(){
  const g=document.getElementById('guardStatus');if(!g)return;
  const gn={patrol:'PATROL',escort:'2-KING ESCORT',throne:'THRONE POSTS',gate:'MAIN GATE',routine:'ROUTINE'}[guardMode]||String(guardMode).toUpperCase();
  const an={drill:'DRILLING',routine:'ROUTINE',muster:'MUSTERED',gate:'DEFEND GATE',follow:'FOLLOW KING',campaign:'MARCH ON BLACKMERE'}[armyMode]||String(armyMode).toUpperCase();
  g.textContent='ROYAL GUARD '+onDutyGuards().length+'/18 · '+gn+'   |   ARMY '+(S.army.size||0)+' · '+an
}
function setGuardMode(mode){
  guardMode=mode;realm.guardMode=mode;S.guard.mode=mode;S.guard.until=mode==='routine'?0:S.clock+4;
  const duty=onDutyGuards();for(const a of actors.filter(x=>x.role==='royalguard'))cancelOrder(a);
  if(mode==='escort')duty.slice(0,2).forEach((a,i)=>issueOrder(a,{type:'follow',off:[i?1:-1,-2.2],hours:4,label:'Escorting the King'}));
  else if(mode==='patrol')duty.forEach((a,i)=>issueOrder(a,{type:'patrol',route:ROUTES.castle.map((p,k)=>[(p[0]||0)+(i%3-1)*.55,(p[1]||0)+((i+k)%2?-.45:.45)]),pause:5,hours:4,label:'Patrolling the castle'}));
  else if(mode==='throne')duty.forEach((a,i)=>issueOrder(a,{type:'post',place:'plaza',spot:'guard',i,hours:4,label:'Guarding the Royal Throne'}));
  else if(mode==='gate')duty.forEach((a,i)=>issueOrder(a,{type:'post',place:'gate',spot:'guard',i,hours:4,label:'Holding the main gate'}));
  save();refreshCommandStatus();toast('ROYAL GUARD — '+mode.toUpperCase())
}
function setArmyMode(mode){
  armyMode=mode;realm.armyMode=mode;S.army.directive=mode;S.army.until=mode==='routine'?0:S.clock+4;
  const troops=actors.filter(a=>a.alive&&['soldier','sergeant','captain'].includes(a.role));for(const a of troops)cancelOrder(a);
  if(mode==='follow')troops.slice(0,12).forEach((a,i)=>issueOrder(a,{type:'follow',off:[(i%4-1.5)*1.25,-4-Math.floor(i/4)*1.5],hours:4,label:'Marching with the King'}));
  else if(mode==='campaign'){
    S.army.until=S.clock+8;S.war.campaign={target:'valemar',state:'marching',started:S.clock};
    troops.slice(0,22).forEach((a,i)=>issueOrder(a,{type:'post',place:'bmYard',spot:'drill',i,hours:8,label:'Marching on Blackmere'}))
  }
  save();refreshCommandStatus();toast('ARMY — '+mode.toUpperCase())
}
function openGuardOrders(){dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Royal Command';speakerName.textContent='War Council';dialogueText.textContent='Your Majesty, the household guard, field army, realm policy, and foreign affairs are under your authority.';choicesEl.innerHTML='';appendCouncilReport();appendGuardCommands();appendRealmPolicyCommands();appendDiplomacyCommands()}
function appendGuardCommands(){
  const hr=document.createElement('div');hr.className='command-title';hr.textContent='ROYAL GUARD';choicesEl.appendChild(hr);
  for(const [mode,title,note] of [['routine','Resume normal shifts','Cancel special orders; guards return to work/rest rotation.'],['escort','Escort the King','Two guards escort you; the rest keep their normal posts.'],['patrol','Patrol the castle','The active shift circulates through castle districts.'],['throne','Guard the throne','The active shift takes ceremonial throne-room posts.'],['gate','Hold the main gate','Deploy the active Royal Guard shift at the outer gate.']]){
    const b=document.createElement('button');b.innerHTML='<b>'+title+'</b><small>'+note+'</small>';b.onclick=()=>{setGuardMode(mode);closeDialog()};choicesEl.appendChild(b)}
  const ar=document.createElement('div');ar.className='command-title';ar.textContent='FIELD ARMY';choicesEl.appendChild(ar);
  for(const [mode,title,note] of [['routine','Resume garrison routine','Officers and soldiers return to ordinary duty, meals, training and rest.'],['drill','Train at the barracks','Soldiers return to formation drills.'],['muster','Muster in the royal court','Bring the field company before their king.'],['gate','Reinforce the main gate','March the army to defend the entrance.'],['follow','March with the King','A twelve-soldier royal column follows at a respectful distance.']]){
    const b=document.createElement('button');b.innerHTML='<b>'+title+'</b><small>'+note+'</small>';b.onclick=()=>{setArmyMode(mode);closeDialog()};choicesEl.appendChild(b)}
  if(S.powers.valemar.war){
    const b=document.createElement('button');b.innerHTML='<b>March on Blackmere</b><small>Send the field army down the Royal Road to confront House Valemar.</small>';b.onclick=()=>{setArmyMode('campaign');closeDialog()};choicesEl.appendChild(b)
  }
}
function appendCouncilReport(){
  const h=((S.clock%24)+24)%24,hh=Math.floor(h),mm=Math.floor((h-hh)*60),d=diplomacySummary();
  const box=document.createElement('div');box.className='command-report';
  box.innerHTML='<b>COUNCIL REPORT</b><span>'+seasonName()+' · Day '+simDay()+' · '+String(hh).padStart(2,'0')+':'+String(mm).padStart(2,'0')+'</span>'+
    '<span>Stores · Grain '+Math.round(S.stock.grain)+' · Wood '+Math.round(S.stock.wood)+' · Iron '+Math.round(S.stock.iron)+' · Arms '+Math.round(S.stock.arms)+'</span>'+
    '<span>Royal Guard '+onDutyGuards().length+'/18 on duty · Army '+S.army.size+'</span>'+
    '<span>Blackmere '+d.valemar.rel+' · Kestrel '+d.kestrel.rel+' · Stonehollow '+d.guild.rel+' · Ashwood '+d.ashwood.rel+'</span>';
  choicesEl.appendChild(box)
}
function appendRealmPolicyCommands(){
  const ds=document.createElement('div');ds.className='command-title';ds.textContent='ROYAL POLICY';choicesEl.appendChild(ds);
  const options=[
    ['Light taxes','Less revenue · +4 favor · +2 prosperity',()=>{S.realm.tax=.75;realm.favor+=4;realm.prosperity+=2;clampRealm();save();renderStats();closeDialog();toast('THE CROWN LIGHTENS TAXES')}],
    ['Standard taxes','Restore balanced taxation',()=>{S.realm.tax=1;save();closeDialog();toast('STANDARD TAXATION RESTORED')}],
    ['War levy','More revenue · -5 favor · +2 security',()=>{S.realm.tax=1.35;realm.favor-=5;realm.security+=2;clampRealm();save();renderStats();closeDialog();toast('A WAR LEVY IS PROCLAIMED')}],
    ['Generous rations','Use more grain · +3 favor',()=>{S.realm.ration=1.15;realm.favor+=3;clampRealm();save();renderStats();closeDialog();toast('GENEROUS RATIONS ORDERED')}],
    ['Conserve grain','Use less grain · -3 favor',()=>{S.realm.ration=.8;realm.favor-=3;clampRealm();save();renderStats();closeDialog();toast('THE GRANARY CONSERVES GRAIN')}],
    ['Fund the farms','100 coin · stronger grain production',()=>{if(spend(100)){S.realm.farmFocus=1.2;realm.prosperity+=3;clampRealm();save();renderStats();toast('THE CROWN FUNDS FARM PRODUCTION')}closeDialog()}]
  ];
  for(const [t,n,fn] of options){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function appendDiplomacyCommands(){
  const ds=document.createElement('div');ds.className='command-title';ds.textContent='DIPLOMACY';choicesEl.appendChild(ds);
  const d=diplomacySummary(),v=d.valemar,k=d.kestrel;
  const options=[];
  if(!S.powers.kestrel.treaties.trade)options.push(['Trade accord with House Kestrel','Relation '+k.rel+' · improves long-term stability',()=>{treaty('kestrel','trade',true);realm.prosperity+=4;save();renderStats();closeDialog();toast('TRADE ACCORD SIGNED WITH HOUSE KESTREL')}]);
  options.push(['Send envoy and gift to Blackmere','80 coin · improve relations with House Valemar',()=>{if(spend(80)){relation('valemar',15,'A royal envoy carried gifts to Blackmere.');save();closeDialog();toast('ENVOY SENT TO BLACKMERE')} }]);
  if(S.powers.valemar.war)options.push(['Offer peace to House Valemar','End the current war if accepted by the Crown',()=>{makePeace('valemar');save();closeDialog();toast('PEACE TERMS SENT TO BLACKMERE')}]);
  else options.push(['Declare war on House Valemar','Mobilize the Crown against Blackmere Keep',()=>{declareWar('valemar');S.army.directive='muster';armyMode='muster';save();closeDialog();toast('THE CROWN IS AT WAR WITH HOUSE VALEMAR')}]);
  for(const [t,n,fn] of options){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function actorRole(a){return String(a.role||'subject').replaceAll(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase())}
function roleWorkOrder(a){
  const r=a.role;
  if(['farmer'].includes(r))return {title:'Work the fields',note:'Return to farm labor by royal order.',ord:{type:'work',place:a.work||'f1',spot:'hoe',pose:'hoe',prod:'grain',cycle:38,hours:3,label:'Working the fields by royal order'}};
  if(r==='mbfarmer')return {title:'Work the Millbrook plots',note:'Direct three hours of farm labor.',ord:{type:'work',place:'mbfield',spot:'hoe',pose:'hoe',prod:'grain',cycle:38,hours:3,label:'Working Millbrook fields by royal order'}};
  if(r==='woodcutter')return {title:'Cut timber for the Crown',note:'Send timber production to the royal economy.',ord:{type:'work',place:'lumber',spot:'chop',pose:'chop',prod:'wood',cycle:40,hours:3,label:'Cutting royal timber'}};
  if(['smith','apprentice'].includes(r))return {title:'Forge arms for the garrison',note:'Increase weapons production.',ord:{type:'work',place:'smithy',spot:'anvil',pose:'hammer',prod:'arms',cycle:42,hours:3,label:'Forging arms by royal order'}};
  if(r==='miner')return {title:'Mine iron for the Crown',note:'Increase iron production.',ord:{type:'work',place:'mine',spot:'dig',pose:'chop',prod:'ore',cycle:42,hours:3,label:'Mining iron by royal order'}};
  if(r==='merchant')return {title:'Trade in the royal market',note:'Increase taxable trade activity.',ord:{type:'work',place:'market',spot:'stall',pose:'trade',prod:'trade',cycle:38,hours:3,label:'Trading by royal order'}};
  if(['cook','kitchenhand'].includes(r))return {title:'Prepare a royal meal',note:'Return to the kitchens and feed the household.',ord:{type:'work',place:'kitchens',spot:'cook',pose:'cook',prod:'meals',cycle:38,hours:3,label:'Preparing royal meals'}};
  if(['servant','maid'].includes(r))return {title:'Attend the Great Hall',note:'Serve the royal household.',ord:{type:'work',place:'greatHall',spot:'stand',pose:'carry',cycle:35,hours:2,label:'Attending the Great Hall by royal order'}};
  if(r==='stablehand')return {title:'Tend the royal horses',note:'Return to stable duty.',ord:{type:'work',place:'stable',spot:'tend',pose:'tend',cycle:38,hours:3,label:'Tending the royal horses'}};
  if(['treasurer','scribe'].includes(r))return {title:'Prepare a report for the Crown',note:'Work from the treasury ledgers.',ord:{type:'work',place:'treasury',spot:'desk',pose:'write',cycle:45,hours:2,label:'Preparing a royal report'}};
  if(r==='priest')return {title:'Hold service in the chapel',note:'Return to the chapel altar.',ord:{type:'work',place:'chapel',spot:'altar',pose:'pray',cycle:48,hours:2,label:'Holding chapel service'}};
  return null
}
function openActorAudience(a){
  dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent=actorRole(a);speakerName.textContent=a.name;choicesEl.innerHTML='';
  if(a.petitionKey){audience(a);return}
  if(a.hero==='rival'){
    const p=S.powers.valemar;dialogueText.textContent='Lord Maren watches you carefully. Relations: '+Math.round(p.rel)+'. '+(p.war?'Your realms are at war.':'Blackmere remains an independent rival power.');
    const opts=p.war?
      [['Offer peace','Attempt to end the war',()=>{makePeace('valemar');save();closeDialog()}]]:
      [['Demand improved relations','Royal pressure · relation may worsen',()=>{relation('valemar',-5,'The Crown issued a hard demand to Blackmere.');save();closeDialog()}],['Offer a pact','Improve relations by diplomacy',()=>{relation('valemar',10,'The King offered Blackmere a limited pact.');save();closeDialog()}]];
    for(const [t,n,fn] of opts){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}return
  }
  dialogueText.textContent=(a.order?'Royal order active: '+(a.order.label||a.order.type)+'. ':'')+'Current activity: '+activityOf(a)+'.';
  const opts=[
    ['Report to the Royal Court','Come before the King for a short audience',()=>{issueOrder(a,{type:'goto',place:'plaza',spot:'petition',dur:18,label:'Reporting to the King'});save();closeDialog();toast(a.name.toUpperCase()+' — REPORT TO COURT')}],
    ['Follow the King','Follow personally for two game hours',()=>{issueOrder(a,{type:'follow',off:[0,-2.3],hours:2,label:'Following the King'});save();closeDialog();toast(a.name.toUpperCase()+' — FOLLOW')}],
    ['Wait here','Hold this place for one game hour',()=>{issueOrder(a,{type:'post',pos:{x:player.position.x,z:player.position.z},hours:1,label:'Waiting where the King commanded'});save();closeDialog();toast(a.name.toUpperCase()+' — HOLD POSITION')}],
    ['Resume normal duties','Cancel direct royal order and return to ordinary life',()=>{cancelOrder(a);save();closeDialog();toast(a.name.toUpperCase()+' — RESUME DUTIES')}]
  ];
  const rw=roleWorkOrder(a);if(rw)opts.splice(1,0,[rw.title,rw.note,()=>{issueOrder(a,rw.ord);save();closeDialog();toast(a.name.toUpperCase()+' — '+rw.title.toUpperCase())}]);
  if(['royalguard','soldier','sergeant','captain'].includes(a.role))opts.splice(1,0,['Hold the main gate','Take a temporary defensive post',()=>{issueOrder(a,{type:'post',place:'gate',spot:'guard',hours:3,label:'Holding the main gate by royal order'});save();closeDialog();toast(a.name.toUpperCase()+' — GATE POST')}]);
  for(const [t,n,fn] of opts){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function moveUnit(u,target,dt,speed){const v=target.clone().sub(u.root.position);v.y=0;if(v.length()>.08){v.normalize();u.root.position.addScaledVector(v,dt*speed);u.root.rotation.y=Math.atan2(v.x,v.z)}}
async function spawnRaider(name,pos){
 const src=await getGuardTemplate(),root=new THREE.Group();root.position.fromArray(pos);scene.add(root);
 const visual=cloneSkeleton(src.scene);prep(visual,true);visual.traverse(o=>{if(o.isMesh&&o.material){o.material.color?.multiply(new THREE.Color(0x7a3d3d));o.material.roughness=.78}});root.add(visual);
 const ring=new THREE.Mesh(new THREE.RingGeometry(.42,.52,24),new THREE.MeshBasicMaterial({color:0xff5a43,transparent:true,opacity:.34,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;root.add(ring);
 const u={name,root,ring,hp:55,attackCooldown:Math.random()*.7,alive:true,isRaider:true};raiders.push(u);raidPending=Math.max(0,raidPending-1);return u
}
async function spawnRaid(count=6){
 if(raidActive)return;raidActive=true;raidPending=count;raidWave++;warStatusEl.classList.remove('hidden');warStatusEl.textContent='RAID WAVE '+raidWave+' · ENEMIES AT THE GATE';initAudio();alarmHorn();toast('ALARM — RAIDERS AT THE MAIN GATE');
 setGuardMode('gate');setArmyMode('gate');
 for(let i=0;i<count;i++){setTimeout(()=>spawnRaider('Raider '+(i+1),[57+Math.floor(i/3)*1.8,0,-5+(i%3)*5]).catch(console.error),i*100)}
}
function aliveRaiders(){return raiders.filter(r=>r.alive)}
function nearestDefender(pos,arr){let best=null,bd=Infinity;for(const a of arr){if(!a.alive)continue;const d=Math.hypot(pos.x-a.x,pos.z-a.z);if(d<bd){bd=d;best=a}}return[best,bd]}
function nearestRaiderToActor(a){let best=null,bd=Infinity;for(const r of aliveRaiders()){const d=Math.hypot(r.root.position.x-a.x,r.root.position.z-a.z);if(d<bd){bd=d;best=r}}return[best,bd]}
function defeatUnit(u){u.alive=false;if(u.root)u.root.visible=false;u.fight=null}
function finishRaid(win){
 raidActive=false;warStatusEl.classList.add('hidden');for(const a of actors)a.fight=null;
 if(win){realm.security+=6;realm.favor+=4;S.stats.raidsHeld=(S.stats.raidsHeld||0)+1;toast('RAID DEFEATED — THE CASTLE HOLDS')}else{realm.security-=15;realm.gold=Math.max(0,realm.gold-120);toast('THE RAIDERS BREACHED THE DEFENSES')}
 clampRealm();save();renderStats()
}
function healForces(){for(const a of actors.filter(x=>['royalguard','soldier','sergeant','captain','marshal'].includes(x.role))){a.hp=a.maxhp;a.alive=true;a.fight=null}}
function updateRaid(dt){
 if(!raidActive)return;
 const enemies=aliveRaiders(),defenders=actors.filter(a=>a.alive&&a.team==='crown'&&['royalguard','soldier','sergeant','captain','marshal'].includes(a.role));
 warStatusEl.textContent='RAID WAVE '+raidWave+' · '+(enemies.length+raidPending)+' ENEMIES';
 if(enemies.length===0){if(raidPending===0)finishRaid(true);return}
 if(defenders.length===0){finishRaid(false);return}
 for(const r of enemies){
   const [t,d]=nearestDefender(r.root.position,defenders);if(!t)continue;
   if(d>1.2){const target=new THREE.Vector3(t.x,0,t.z);moveUnit(r,target,dt,.82)}
   else{r.attackCooldown-=dt;if(r.attackCooldown<=0){r.attackCooldown=.95;t.hp-=14;t.fight={label:'Fighting raiders'};if(t.hp<=0)defeatUnit(t)}}
 }
 for(const a of defenders){
   const [t,d]=nearestRaiderToActor(a);if(!t)continue;
   a.cool=Math.max(0,(a.cool||0)-dt);
   if(d<10){a.fight={label:'Defending the Crownlands'};
     if(d>1.1){const dx=t.root.position.x-a.x,dz=t.root.position.z-a.z,L=Math.hypot(dx,dz)||1,nx=a.x+dx/L*dt*1.05,nz=a.z+dz/L*dt*1.05;if(!realmBlockedAt(nx,nz,.28)){a.x=nx;a.z=nz;a.yaw=Math.atan2(dx,dz)}}
     else if(a.cool<=0){a.cool=.72;t.hp-=22;t.ring.material.opacity=.8;if(t.hp<=0)defeatUnit(t)}
   }else if(a.fight)a.fight=null
 }
}
function warCombatants(team){
  if(team==='crown')return actors.filter(a=>a.alive&&a.team==='crown'&&['soldier','sergeant','captain','marshal'].includes(a.role));
  return actors.filter(a=>a.alive&&a.team==='valemar'&&['vguard','vsoldier'].includes(a.role))
}
function nearestActorEnemy(a,list){let best=null,bd=Infinity;for(const b of list){if(!b.alive)continue;const d=Math.hypot(a.x-b.x,a.z-b.z);if(d<bd){bd=d;best=b}}return[best,bd]}
function moveActorToward(a,b,dt,speed=1.05){
  const dx=b.x-a.x,dz=b.z-a.z,L=Math.hypot(dx,dz)||1,nx=a.x+dx/L*dt*speed,nz=a.z+dz/L*dt*speed;
  if(!realmBlockedAt(nx,nz,.28,false,false)){a.x=nx;a.z=nz;a.yaw=Math.atan2(dx,dz)}
}
function updateWarfront(dt){
  if(!S.powers.valemar.war)return;
  const crown=warCombatants('crown'),enemy=warCombatants('valemar');
  const engagedCrown=crown.filter(a=>a.x>350),engagedEnemy=enemy.filter(a=>a.x>375);
  if(S.army.directive==='campaign' || engagedCrown.length){
    if(!raidActive){warStatusEl.classList.remove('hidden');warStatusEl.textContent='WAR FOR BLACKMERE · CROWN '+engagedCrown.filter(a=>a.alive).length+' · VALEMAR '+engagedEnemy.filter(a=>a.alive).length}
    for(const a of engagedCrown){
      const [e,d]=nearestActorEnemy(a,engagedEnemy);if(!e)continue;a.cool=Math.max(0,(a.cool||0)-dt);
      if(d<9){a.fight={label:'Fighting House Valemar'};if(d>1.15)moveActorToward(a,e,dt,1.12);else if(a.cool<=0){a.cool=.75;e.hp-=20;if(e.hp<=0){e.alive=false;e.fight=null}}}
    }
    for(const a of engagedEnemy){
      const [e,d]=nearestActorEnemy(a,engagedCrown);if(!e)continue;a.cool=Math.max(0,(a.cool||0)-dt);
      if(d<9){a.fight={label:'Defending Blackmere'};if(d>1.15)moveActorToward(a,e,dt,1.02);else if(a.cool<=0){a.cool=.82;e.hp-=18;if(e.hp<=0){e.alive=false;e.fight=null}}}
    }
    const livingEnemy=enemy.filter(a=>a.alive);
    if(enemy.length&&livingEnemy.length===0){
      S.war.state='victory';S.war.campaign={target:'valemar',state:'won',ended:S.clock};S.war.victories=(S.war.victories||0)+1;
      S.powers.valemar.war=false;S.powers.valemar.rel=-100;S.powers.valemar.army=0;realm.favor+=10;realm.security+=8;S.realm.renown=Math.min(100,S.realm.renown+12);
      setArmyMode('routine');clampRealm();save();renderStats();warStatusEl.classList.add('hidden');toast('BLACKMERE HAS FALLEN — CROWNLANDS VICTORIOUS')
    }else if(crown.length&&crown.filter(a=>a.alive).length===0){
      S.war.state='defeat';S.war.defeats=(S.war.defeats||0)+1;realm.security-=18;realm.favor-=8;S.army.directive='routine';armyMode='routine';clampRealm();save();renderStats();toast('THE CROWN ARMY HAS BEEN DEFEATED')
    }
  }else if(!raidActive)warStatusEl.classList.add('hidden')
}
function kingAttack(){
 if(seated)return;
 let raidTarget=null,bd=2.35;
 for(const r of aliveRaiders()){const d=player.position.distanceTo(r.root.position);if(d<bd){raidTarget=r;bd=d}}
 let actorTarget=null;
 if(!raidTarget&&S.powers.valemar.war){
   for(const a of actors){if(!a.alive||a.team!=='valemar')continue;const d=Math.hypot(player.position.x-a.x,player.position.z-a.z);if(d<bd){actorTarget=a;bd=d}}
 }
 if(!raidTarget&&!actorTarget){toast('NO ENEMY IN SWORD RANGE');return}
 if(kingAttackAction&&playerMixer){const prev=kingAnimState==='walk'?kingWalkAction:kingIdleAction;kingAttackAction.reset().play();if(prev)kingAttackAction.crossFadeFrom(prev,.08,true);kingAnimState='attack';setTimeout(()=>{kingAnimState='';setKingAnimation(moving?'walk':'idle')},650)}
 swordSound();
 if(raidTarget){raidTarget.hp-=38;raidTarget.ring.material.opacity=1;if(raidTarget.hp<=0)defeatUnit(raidTarget)}
 else{actorTarget.hp-=38;actorTarget.fight={label:'Fighting the King'};if(actorTarget.hp<=0){actorTarget.alive=false;actorTarget.fight=null;S.stats.kills=(S.stats.kills||0)+1}}
 toast('THE KING STRIKES')
}
async function addCastleAsset(path,pos,scale=1,rot=0){
  try{const g=await load(path);prep(g.scene,true);g.scene.position.set(pos[0],pos[1],pos[2]);g.scene.scale.setScalar(scale);g.scene.rotation.y=rot;world.add(g.scene);return g.scene}catch(e){console.warn('castle asset',path,e);return null}
}
async function loadCastleDetailAssets(){
  const jobs=[
    addCastleAsset('./assets/castle/gate.glb',[46,1.7,0],2.5,Math.PI/2),
    addCastleAsset('./assets/castle/tower-square.glb',[43,2.2,-7],2.4,0),
    addCastleAsset('./assets/castle/tower-square.glb',[43,2.2,7],2.4,0),
    addCastleAsset('./assets/castle/flag-wide.glb',[44,5.2,0],1.35,Math.PI/2),
    addCastleAsset('./assets/castle/siege-catapult.glb',[-35,.8,10],1.15,-Math.PI*.25),
    addCastleAsset('./assets/castle/siege-ballista.glb',[-29,.7,15],1.15,Math.PI*.18),
    addCastleAsset('./assets/castle/bridge-draw.glb',[236,.18,62],1.8,Math.PI/2),
    addCastleAsset('./assets/castle/wall-corner.glb',[-44,1.6,-32],2.0,0),
    addCastleAsset('./assets/castle/tree-large.glb',[58,.8,-18],1.7,0),
    addCastleAsset('./assets/castle/tree-large.glb',[70,.8,15],1.8,.5),
    addCastleAsset('./assets/castle/tree-small.glb',[54,.55,20],1.5,-.4),
    addCastleAsset('./assets/castle/tree-small.glb',[112,.55,-14],1.4,.8),
    addCastleAsset('./assets/castle/rocks-large.glb',[245,.25,-12],1.2,.2),
    addCastleAsset('./assets/castle/rocks-small.glb',[286,.2,106],1.0,-.3),
    ...STALLS.map((p,i)=>addCastleAsset(i%2?'./assets/town/stall-green.glb':'./assets/town/stall-red.glb',[p[0],0,p[1]],3.0,i%3?0:Math.PI)),
    addCastleAsset('./assets/town/cart.glb',[38,0,-16],3.0,Math.PI*.42),
    addCastleAsset('./assets/town/cart.glb',[106,0,2],3.0,-Math.PI*.35),
    addCastleAsset('./assets/town/lantern.glb',[44,0,-4.8],1.6,0),
    addCastleAsset('./assets/town/lantern.glb',[44,0,4.8],1.6,0),
    addCastleAsset('./assets/town/fountain-round.glb',[80,0,4.4],1.15,0),
    addCastleAsset('./assets/town/fountain-round.glb',[35,0,-6.5],1.2,0),
    addCastleAsset('./assets/town/windmill.glb',[204,0,38],4.1,Math.PI*.4),
    addCastleAsset('./assets/town/watermill.glb',[231,0,33],4.0,Math.PI/2),
    addCastleAsset('./assets/town/tree-high.glb',[74,0,14],2.2,0),
    addCastleAsset('./assets/town/tree-high.glb',[101,0,-17],2.4,.6),
    addCastleAsset('./assets/town/tree-crooked.glb',[117,0,10],2.1,-.4)
  ];
  await Promise.all(jobs)
}
function updateZone(){
  const z=zoneAt(player.position.x,player.position.z);
  if(z!==currentZone){currentZone=z;const el=document.getElementById('zoneName');if(el)el.textContent=z;toast('ENTERED — '+z)}
}
function makeWorldInteractable(id,name,labelText,pos,openFn){
  const root=new THREE.Group();root.position.set(pos[0],0,pos[1]);scene.add(root);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.55,.7,28),new THREE.MeshBasicMaterial({color:0xe1c16a,transparent:true,opacity:.15,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.025;root.add(ring);
  const plaque=label(labelText);plaque.scale.set(2.2,.52,1);plaque.position.y=1.7;root.add(plaque);
  const obj={id,name,root,ring,openFn,isWorldAction:true};worldInteractables.push(obj);return obj
}
function spend(cost){if(realm.gold<cost){toast('THE TREASURY CANNOT AFFORD THAT');return false}realm.gold-=cost;return true}
async function recruitSoldiers(count=4){
  const cost=count*30;if(!spend(cost))return;
  const existing=actors.filter(a=>a.role==='soldier').length;
  const addCount=Math.max(0,Math.min(count,32-existing));
  for(let i=0;i<addCount;i++){const n=existing+i,a=makeActor({id:'recruit'+Date.now()+'-'+i,name:'Crown Soldier '+(n+1),role:'soldier',rank:1,home:n%2?'barracksA':'barracksB',company:n%2,look:{asset:'guard',tint:0xd6c6a6}});placeByPlan(a)}
  realm.armySize=actors.filter(a=>a.alive&&['soldier','sergeant','captain','marshal'].includes(a.role)).length;
  realm.security+=3;clampRealm();save();renderStats();refreshCommandStatus();toast(addCount+' SOLDIERS JOINED THE CROWN')
}
function openBarracks(){
 dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Castle District';speakerName.textContent='Royal Barracks';dialogueText.textContent='Your soldiers drill here. Recruit, train, or muster the company.';choicesEl.innerHTML='';
 const options=[
  ['Recruit four soldiers','120 coin · increases army size',()=>recruitSoldiers(4)],
  ['Fund weapons and training','60 coin · +6 security',()=>{if(spend(60)){realm.security+=6;clampRealm();save();renderStats();toast('THE ARMY TRAINS WITH NEW EQUIPMENT')}closeDialog()}],
  ['Muster the army in court','Order the field company before the throne',()=>{setArmyMode('muster');closeDialog()}]
 ];
 for(const [t,n,fn] of options){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function openMarket(){
 dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Castle District';speakerName.textContent='Royal Market';dialogueText.textContent='Merchants, craftsmen and townsfolk trade under the protection of your Crown.';choicesEl.innerHTML='';
 const options=[
  ['Sponsor a market fair','80 coin · +8 prosperity · +4 favor',()=>{if(spend(80)){realm.prosperity+=8;realm.favor+=4;clampRealm();save();renderStats();toast('A ROYAL MARKET FAIR IS PROCLAIMED')}closeDialog()}],
  ['Collect emergency tariffs','+100 coin · −6 favor · −3 prosperity',()=>{realm.gold+=100;realm.favor-=6;realm.prosperity-=3;clampRealm();save();renderStats();toast('THE CROWN COLLECTS EMERGENCY TARIFFS');closeDialog()}]
 ];
 for(const [t,n,fn] of options){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function openGateCommand(){
 dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Castle Defense';speakerName.textContent='Main Gate';dialogueText.textContent='The gate controls the road into your stronghold.';choicesEl.innerHTML='';
 for(const [t,n,fn] of [
  ['Royal Guard to the gate','Deploy all six household guards here.',()=>{setGuardMode('gate');closeDialog()}],
  ['Army reinforce the gate','March the field company to the walls.',()=>{setArmyMode('gate');closeDialog()}],
  ['Increase gate watch','45 coin · +5 security',()=>{if(spend(45)){realm.security+=5;clampRealm();save();renderStats();toast('THE GATE WATCH IS DOUBLED')}closeDialog()}],
  ['Sound a defense drill','Spawn a practice raider wave now.',()=>{closeDialog();spawnRaid(6).catch(console.error)}]
 ]){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function openVillage(){
 dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Royal Lands';speakerName.textContent='Lower Village';dialogueText.textContent='Farmers and craftspeople live beyond the inner wall. Your choices here affect village prosperity and public favor.';choicesEl.innerHTML='';
 const options=[
  ['Repair the village well','60 coin · +6 prosperity · +5 favor',()=>{if(spend(60)){realm.prosperity+=6;realm.favor+=5;clampRealm();save();renderStats();toast('THE ROYAL WELL IS REPAIRED')}closeDialog()}],
  ['Release grain from the stores','100 coin · +10 favor · +5 prosperity',()=>{if(spend(100)){realm.favor+=10;realm.prosperity+=5;clampRealm();save();renderStats();toast('ROYAL GRAIN REACHES THE VILLAGE')}closeDialog()}],
  ['Collect market dues','+120 coin · -7 favor',()=>{realm.gold+=120;realm.favor-=7;clampRealm();save();renderStats();toast('MARKET DUES COLLECTED');closeDialog()}],
  ['Hire two town guards','60 coin · +2 soldiers',()=>{closeDialog();recruitSoldiers(2)}]
 ];
 for(const [t,n,fn] of options){const b=document.createElement('button');b.innerHTML='<b>'+t+'</b><small>'+n+'</small>';b.onclick=fn;choicesEl.appendChild(b)}
}
function buildDistrictInteractions(){
 makeWorldInteractable('barracks','Royal Barracks','BARRACKS',[-26,10],openBarracks);
 makeWorldInteractable('market','Royal Market','MARKET',[35,-2],openMarket);
 makeWorldInteractable('gateCommand','Main Gate','GATE COMMAND',[43,0],openGateCommand);
 makeWorldInteractable('village','Lower Village','VILLAGE STEWARD',[88,0],openVillage)
}
function checkReady(){if(loadedEssential>=2&&!ready){ready=true;beginBtn.textContent='ENTER YOUR COURT'}}ready=true;beginBtn.disabled=false;beginBtn.textContent='ENTER YOUR COURT';

function toast(t){toastEl.textContent=t;toastEl.classList.remove('hidden');clearTimeout(toast.t);toast.t=setTimeout(()=>toastEl.classList.add('hidden'),1800)}
const petition=n=>{const key=n.petitionKey||n.id,list=petitions[key];return list?list[(n.petitionIndex||0)%list.length]:null};
function apply(n,c){for(const[k,v]of Object.entries(c.delta))realm[k]=(realm[k]||0)+v;clampRealm();n.used=true;S.court.dayHeard=(S.court.dayHeard||0)+1;S.stats.petitions=(S.stats.petitions||0)+1;save();renderStats();closeDialog();toast('DECREE ISSUED — THE REALM HAS CHANGED');updateObjective()}
function audience(n){
  dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent=actorRole(n);speakerName.textContent=n.name;choicesEl.innerHTML='';
  const p=petition(n);if(!p){openActorAudience(n);return}
  if(n.used){dialogueText.textContent='“Your Majesty, your decree stands. I have no further petition for the Crown today.”';if(n.petitionKey==='captain'){appendGuardCommands();appendDiplomacyCommands()}return}
  dialogueText.textContent='“'+p.text+'”';
  for(const c of p.choices){const b=document.createElement('button'),cost=c.delta.gold<0?-c.delta.gold:0;if(cost>realm.gold){b.disabled=true;b.style.opacity='.45'}b.innerHTML='<b>'+c.title+'</b><small>'+c.note+(cost>realm.gold?' · Not enough coin':'')+'</small>';b.onclick=()=>apply(n,c);choicesEl.appendChild(b)}
  if(n.petitionKey==='captain'){appendGuardCommands();appendDiplomacyCommands()}
}
function closeDialog(){dialogueOpen=false;dialogue.classList.add('hidden')}leaveDialogue.onclick=closeDialog;
const courtActors=()=>actors.filter(a=>a.petitionKey);
const done=()=>courtActors().length>=4&&courtActors().every(n=>n.used);
function updateObjective(){objectiveEl.innerHTML=done()?'Court concluded. Return to your <b>THRONE</b>, explore the realm, or issue orders.':'Rule the realm. Hear petitions, inspect your people, explore, or open <b>ORDERS</b>.'}
function resetCourtDay(){for(const n of courtActors()){n.used=false;n.petitionIndex=((n.petitionIndex||0)+1)%(petitions[n.petitionKey]?.length||1)}S.court.dayHeard=0}
function nextDay(){
  const target=(Math.floor(S.clock/24)+1)*24+8,deltaHours=Math.max(.1,target-S.clock);advanceTime(deltaHours*HOUR_SECONDS);
  clampRealm();save();renderStats();updateObjective();toast('DAY '+simDay()+' — THE REALM AWAKENS')
}
simOn('day',({day})=>{
  resetCourtDay();healForces();renderStats();updateObjective();save();
  if(day%3===0)setTimeout(()=>spawnRaid(Math.min(10,4+day)).catch(console.error),2200)
});
simOn('hour',()=>{
  if(S.guard.mode!=='routine'&&S.guard.until&&S.clock>=S.guard.until)setGuardMode('routine');
  if(S.army.directive!=='routine'&&S.army.until&&S.clock>=S.army.until)setArmyMode('routine');
  refreshCommandStatus()
});
function sitThrone(){
  seated=true;moveX=moveY=0;if(playerMixer){playerMixer.stopAllAction();playerMixer.timeScale=0}resetKingBones();
  const X=new THREE.Vector3(1,0,0),Z=new THREE.Vector3(0,0,1);
  rotateBone(legL,X,-1.48);rotateBone(legR,X,-1.48);rotateBone(shinL,X,1.52);rotateBone(shinR,X,1.52);
  rotateBone(armL,Z,.16);rotateBone(armR,Z,-.16);rotateBone(foreL,X,-.48);rotateBone(foreR,X,-.48);rotateBone(torso,X,.08);
  if(hips){const r=kingRest.get(hips.name);if(r){hips.position.copy(r.p);hips.position.z+=.08}}
  player.position.set(0,-.34,6.03);player.rotation.y=Math.PI;cameraYaw=Math.PI;cameraPitch=.17;if(cape)cape.rotation.x=-.18;
  interactBtn.disabled=false;interactBtn.textContent='STAND';nearbyEl.textContent='Seated on the Royal Throne';objectiveEl.innerHTML=done()?'Court concluded. Stand when you are ready to begin the next day.':'You are holding court from the throne.';toast('THE KING TAKES THE THRONE')
}
function standThrone(){
  seated=false;resetKingBones();if(playerMixer){playerMixer.timeScale=1;if(kingIdleAction){kingIdleAction.reset().play()}kingAnimState='idle'}player.position.set(0,0,4.82);if(cape)cape.rotation.x=0;updateObjective();toast('THE KING RISES')
}
function openThrone(){if(seated){standThrone();return}if(done()){dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Seat of the Crown';speakerName.textContent='Your Throne';choicesEl.innerHTML='';dialogueText.textContent='The day’s petitions are settled. Sit to close court, or begin the next day now.';const sit=document.createElement('button');sit.innerHTML='<b>Sit on the throne</b><small>Take your seat before the court.</small>';sit.onclick=()=>{closeDialog();sitThrone()};choicesEl.appendChild(sit);const b=document.createElement('button');b.innerHTML='<b>Begin the next day</b><small>Collect crown revenue and summon fresh petitions.</small>';b.onclick=()=>{closeDialog();nextDay()};choicesEl.appendChild(b)}else sitThrone()}
ordersBtn.onclick=()=>{if(!dialogueOpen)openGuardOrders()};
attackBtn.onclick=kingAttack;
interactBtn.onclick=()=>{if(dialogueOpen)return;if(seated){standThrone();return}if(!currentTarget)return;if(currentTarget.isThrone)openThrone();else if(currentTarget.isWorldAction)currentTarget.openFn();else if(currentTarget.isLiving)openActorAudience(currentTarget.actor);else audience(currentTarget)};
beginBtn.onclick=()=>{initAudio();royalChime();intro.classList.add('hidden');toast('LONG LIVE KING ALDRIC')};
addEventListener('pagehide',save);addEventListener('visibilitychange',()=>{if(document.hidden)save()});

// movement joystick
const joy=$('joystick'),stick=$('stick');let joyId=null;
function joyMove(e){if(e.pointerId!==joyId)return;const r=joy.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;let dx=e.clientX-cx,dy=e.clientY-cy;const max=42,l=Math.hypot(dx,dy)||1,s=Math.min(1,max/l);dx*=s;dy*=s;stick.style.transform='translate('+dx+'px,'+dy+'px)';moveX=dx/max;moveY=-dy/max}
joy.onpointerdown=e=>{joyId=e.pointerId;joy.setPointerCapture(e.pointerId);joyMove(e)};joy.onpointermove=joyMove;
function joyEnd(e){if(e.pointerId!==joyId)return;joyId=null;moveX=moveY=0;stick.style.transform='translate(0,0)'}joy.onpointerup=joyEnd;joy.onpointercancel=joyEnd;

// camera drag
let lookId=null,lx=0,ly=0;
renderer.domElement.onpointerdown=e=>{if(dialogueOpen||e.clientX<innerWidth*.38)return;lookId=e.pointerId;lx=e.clientX;ly=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)};
renderer.domElement.onpointermove=e=>{if(e.pointerId!==lookId)return;cameraYaw-=(e.clientX-lx)*.0065;cameraPitch=THREE.MathUtils.clamp(cameraPitch-(e.clientY-ly)*.0045,.05,.62);lx=e.clientX;ly=e.clientY};
renderer.domElement.onpointerup=e=>{if(e.pointerId===lookId)lookId=null};renderer.domElement.onpointercancel=renderer.domElement.onpointerup;
const keys=new Set();addEventListener('keydown',e=>{keys.add(e.code);if(e.code==='KeyE'&&currentTarget&&!dialogueOpen)(currentTarget.isThrone?openThrone():currentTarget.isWorldAction?currentTarget.openFn():currentTarget.isLiving?openActorAudience(currentTarget.actor):audience(currentTarget))});addEventListener('keyup',e=>keys.delete(e.code));
function kb(){let x=0,y=0;if(keys.has('KeyW')||keys.has('ArrowUp'))y++;if(keys.has('KeyS')||keys.has('ArrowDown'))y--;if(keys.has('KeyA')||keys.has('ArrowLeft'))x--;if(keys.has('KeyD')||keys.has('ArrowRight'))x++;return{x,y}}
function blockedAt(p){return realmBlockedAt(p.x,p.z,.38,false,false)}
function tryMove(v,amount){
 const next=player.position.clone().addScaledVector(v,amount);next.x=THREE.MathUtils.clamp(next.x,WORLD.x0+1,WORLD.x1-1);next.z=THREE.MathUtils.clamp(next.z,WORLD.z0+1,WORLD.z1-1);
 if(!blockedAt(next)){player.position.copy(next);return}
 const nx=player.position.clone();nx.x=next.x;if(!blockedAt(nx))player.position.x=nx.x;
 const nz=player.position.clone();nz.z=next.z;if(!blockedAt(nz))player.position.z=nz.z;
}
function move(dt){
  if(dialogueOpen||seated){moving=false;setKingAnimation('idle');return}
  const k=kb();let x=k.x||moveX,y=k.y||moveY,l=Math.hypot(x,y);
  if(l>.08){if(l>1){x/=l;y/=l}const f=new THREE.Vector3(-Math.sin(cameraYaw),0,-Math.cos(cameraYaw)),r=new THREE.Vector3(Math.cos(cameraYaw),0,-Math.sin(cameraYaw)),v=f.multiplyScalar(y).add(r.multiplyScalar(x));tryMove(v,dt*3.35);player.rotation.y=Math.atan2(v.x,v.z);moving=true;setKingAnimation('walk')}
  else{moving=false;setKingAnimation('idle')}
}function cam(dt){const t=player.position.clone().add(new THREE.Vector3(0,seated?KING_CAMERA.seatedTargetY:KING_CAMERA.standingTargetY,0)),cp=Math.cos(cameraPitch),dir=new THREE.Vector3(Math.sin(cameraYaw)*cp,Math.sin(cameraPitch),Math.cos(cameraYaw)*cp),p=t.clone().addScaledVector(dir,seated?KING_CAMERA.seatedDistance:KING_CAMERA.standingDistance);camera.position.lerp(p,1-Math.exp(-dt*8));camera.lookAt(t)}
function proximity(){
 attackBtn.disabled=seated||(!raidActive&&!S.powers.valemar.war);
 if(seated){currentTarget=throne;interactBtn.disabled=false;interactBtn.textContent='STAND';nearbyEl.textContent='Seated on the Royal Throne';return}
 let best=null,bd=999;
 if(livingRenderer)for(const v of livingRenderer.targets){
   const d=player.position.distanceTo(v.root.position);if(d<2.35&&d<bd){best={isLiving:true,actor:v.actor,root:v.root,ring:v.ring,name:v.actor.name,role:actorRole(v.actor)};bd=d}
 }
 for(const w of worldInteractables){const d=player.position.distanceTo(w.root.position);w.ring.material.opacity=d<2.8?.48:.15;if(d<2.25&&d<bd){best=w;bd=d}}
 const td=player.position.distanceTo(throne.pos);throne.ring.material.opacity=td<2.2?.35:.18;if(td<1.75&&td<bd){best=throne;bd=td}
 currentTarget=best;
 if(best){
   interactBtn.disabled=false;interactBtn.textContent=best.isThrone?'THRONE':best.isWorldAction?'USE':'AUDIENCE';
   nearbyEl.textContent=best.isThrone?'Your Royal Throne':best.isLiving?best.actor.name+' · '+activityOf(best.actor):best.name+(best.role?' · '+best.role:'')
 }else{interactBtn.disabled=true;interactBtn.textContent='AUDIENCE';nearbyEl.textContent=''}
}
function loop(){
 requestAnimationFrame(loop);const dt=Math.min(clock.getDelta(),.05);fpsEMA=fpsEMA*.94+(1/Math.max(.001,dt))*.06;mixers.forEach(m=>m.update(dt));
 move(dt);simPlayer.x=player.position.x;simPlayer.y=player.position.y;simPlayer.z=player.position.z;simPlayer.yaw=player.rotation.y;simPlayer.seated=seated;
 advanceTime(dt);stepAll(dt);if(livingRenderer)livingRenderer.update(player.position,dt);if(worldRenderer)worldRenderer.update(player.position);
 updateRaid(dt);updateWarfront(dt);updateLighting(dt);updateZone();cam(dt);proximity();
 autosaveT+=dt;if(autosaveT>=5){autosaveT=0;save();renderStats();refreshCommandStatus()}
 renderer.render(scene,camera)
}
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.25));renderer.setSize(innerWidth,innerHeight)});
function bootProgressive(){
  guardMode=realm.guardMode||'routine';armyMode=realm.armyMode||'routine';
  player.position.set(Number.isFinite(S.king.x)?S.king.x:0,0,Number.isFinite(S.king.z)?S.king.z:9);
  player.rotation.y=Number.isFinite(S.king.yaw)?S.king.yaw:Math.PI;
  worldRenderer=createWorldGeometry(world);buildDistrictInteractions();updateObjective();refreshCommandStatus();
  const zn=document.getElementById('zoneName');if(zn)zn.textContent=zoneAt(player.position.x,player.position.z);
  setTimeout(()=>loadPlayer().catch(console.error),0);
  setTimeout(()=>loadEnvironment().catch(console.error),120);
  setTimeout(()=>createLivingRenderer(scene).then(r=>{livingRenderer=r;toast('THE CROWNLANDS LIVE — '+actors.length+' PEOPLE SIMULATING')}).catch(console.error),260);
  setTimeout(()=>loadCastleDetailAssets().catch(console.error),700);
}
window.__crownlandsDebug={
  snapshot:()=>({
    version:'v10-living-world',
    ready,
    fps:Math.round(fpsEMA),
    player:{x:+player.position.x.toFixed(2),z:+player.position.z.toFixed(2),yaw:+player.rotation.y.toFixed(2),seated},
    zone:currentZone,
    time:{clock:+S.clock.toFixed(2),day:simDay(),year:simYear(),season:seasonName()},
    realm:{coin:S.realm.coin,favor:S.realm.favor,security:S.realm.security,prosperity:S.realm.prosperity,stock:{...S.stock}},
    population:{total:actors.length,visible:livingRenderer?.visibleCount?.()||0,renderCapacity:livingRenderer?.capacity||0,onDutyGuards:onDutyGuards().length,army:S.army.size},
    military:{guardMode:S.guard.mode,armyDirective:S.army.directive,raidActive,raiders:aliveRaiders().length},
    diplomacy:diplomacySummary(),
    ledger:S.ledger.last,
    bootError:window.__crownlandsBootError||''
  })
};
loop();
requestAnimationFrame(()=>requestAnimationFrame(bootProgressive));