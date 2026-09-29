import * as THREE from '../vendor/three.module.js';
import { GLTFLoader } from '../vendor/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from '../vendor/addons/utils/SkeletonUtils.js';

const $=id=>document.getElementById(id);
const game=$('game'),beginBtn=$('begin'),intro=$('intro'),interactBtn=$('interact'),ordersBtn=$('orders'),attackBtn=$('attack'),nearbyEl=$('nearby'),dialogue=$('dialogue'),speakerRole=$('speakerRole'),speakerName=$('speakerName'),dialogueText=$('dialogueText'),choicesEl=$('choices'),leaveDialogue=$('leaveDialogue'),objectiveEl=$('objective'),toastEl=$('toast'),warStatusEl=$('warStatus');

const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.25));renderer.setSize(innerWidth,innerHeight);
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;game.appendChild(renderer.domElement);window.__crownlands3dBooted=true;window.dispatchEvent(new Event('crownlands3dready'));

const scene=new THREE.Scene();scene.background=new THREE.Color(0x90a7bd);scene.fog=new THREE.Fog(0x90a7bd,25,82);
const camera=new THREE.PerspectiveCamera(58,innerWidth/innerHeight,.08,140),loader=new GLTFLoader(),clock=new THREE.Clock();
const hemi=new THREE.HemisphereLight(0xd9eaff,0x594330,2);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffe5b2,3);sun.position.set(-7,13,8);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:32});scene.add(sun);
const fill=new THREE.PointLight(0xffbd68,12,12,2);fill.position.set(0,3.3,5.7);scene.add(fill);
const ground=new THREE.Mesh(new THREE.CircleGeometry(11.5,64),new THREE.MeshStandardMaterial({color:0xa9987c,roughness:.92}));ground.rotation.x=-Math.PI/2;ground.position.y=-.035;ground.receiveShadow=true;scene.add(ground);
const world=new THREE.Group();scene.add(world);
const player=new THREE.Group();player.position.set(0,0,4.4);player.rotation.y=Math.PI;scene.add(player);

let playerVisual,legL,legR,shinL,shinR,armL,armR,foreL,foreR,hips,torso,loadedEssential=0,ready=false,cameraYaw=0,cameraPitch=.28,moveX=0,moveY=0,currentTarget=null,dialogueOpen=false,moving=false,walkPhase=0,seated=false;
let guardMode='patrol',armyMode='drill',playerMixer=null,kingIdleAction=null,kingWalkAction=null,kingAttackAction=null,kingAnimState='idle',cape=null,currentZone='ROYAL COURT',raidActive=false,raidWave=0,raidPending=0;
const mixers=[],npcs=[],guardUnits=[],armyUnits=[],raiders=[],worldInteractables=[],kingRest=new Map();
const defaultRealm={gold:600,favor:55,security:62,prosperity:50,day:1,armySize:8,guardMode:'patrol',armyMode:'drill'};
let realm=(()=>{try{return {...defaultRealm,...JSON.parse(localStorage.getItem('crownlands_realm_v1'))}}catch{return {...defaultRealm}}})();
const save=()=>localStorage.setItem('crownlands_realm_v1',JSON.stringify(realm));
function clampRealm(){realm.gold=Math.max(0,Math.round(realm.gold));for(const k of ['favor','security','prosperity'])realm[k]=THREE.MathUtils.clamp(Math.round(realm[k]),0,100)}
function renderStats(){for(const k of ['gold','favor','security','prosperity'])$(k).textContent=realm[k];document.querySelector('.royal-chip small').textContent='THE CROWNLANDS · DAY '+realm.day}renderStats();

let audioCtx=null,worldLightTime=.18;
function initAudio(){try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume()}catch{}}
function tone(freq,dur=.18,gain=.025,type='sine',delay=0){if(!audioCtx)return;const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+delay;o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(audioCtx.destination);o.start(t);o.stop(t+dur+.03)}
function royalChime(){tone(392,.25,.025,'triangle',0);tone(523,.3,.025,'triangle',.12);tone(659,.35,.02,'triangle',.24)}
function alarmHorn(){tone(130,.55,.035,'sawtooth',0);tone(110,.55,.03,'sawtooth',.48)}
function swordSound(){tone(420,.09,.018,'sawtooth',0);tone(190,.12,.015,'triangle',.06)}
function updateLighting(dt){worldLightTime=(worldLightTime+dt/165)%1;const a=worldLightTime*Math.PI*2,day=.56+.36*Math.sin(a);sun.position.set(Math.cos(a)*16,5+Math.max(0,Math.sin(a))*15,Math.sin(a)*13);sun.intensity=1.25+Math.max(.05,day)*2.1;hemi.intensity=.8+Math.max(.05,day)*1.45;const c=new THREE.Color().setHSL(.58,.28,THREE.MathUtils.clamp(.22+day*.38,.24,.62));scene.background.copy(c);scene.fog.color.copy(c)}
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
  try{
    const g=await load('./assets/king-knight.glb');
    playerVisual=g.scene; prep(playerVisual,true); player.add(playerVisual);
    let box=new THREE.Box3().setFromObject(playerVisual),size=new THREE.Vector3();box.getSize(size);
    const sc=2.18/Math.max(.01,size.y); playerVisual.scale.setScalar(sc);
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
        const mats=Array.isArray(o.material)?o.material:[o.material];
        for(const m of mats){
          if((m.name||'').toLowerCase().includes('armor')){m.color.set(0x303a50);m.metalness=.68;m.roughness=.3}
          if((m.name||'').toLowerCase().includes('boots')){m.color.set(0x24160f);m.roughness=.7}
        }
      }
    });
    addRoyalRegalia();
    const head=playerVisual.getObjectByName('Head');
    const crown=makeRoyalCrown(); if(head){crown.position.set(0,.28,0);head.add(crown)}else{crown.position.set(0,2.08,0);player.add(crown)}
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
    body.position.y=1.1;body.castShadow=true;player.add(body);playerVisual=body;addRoyalRegalia();const c=makeRoyalCrown();c.position.set(0,2.05,0);player.add(c);
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
  const gold=new THREE.MeshStandardMaterial({color:0xdcb04a,metalness:.76,roughness:.25}),ruby=new THREE.MeshStandardMaterial({color:0x711a29,roughness:.66,side:THREE.DoubleSide});
  const belt=new THREE.Mesh(new THREE.TorusGeometry(.31,.028,8,28),gold);belt.rotation.x=Math.PI/2;belt.position.set(0,1.02,0);player.add(belt);
  const med=new THREE.Mesh(new THREE.OctahedronGeometry(.07),gold);med.position.set(0,1.48,.31);med.castShadow=true;player.add(med);
  const capeGeo=new THREE.CylinderGeometry(.32,.55,1.24,18,4,true,Math.PI*.05,Math.PI*.9);
  cape=new THREE.Mesh(capeGeo,ruby);cape.position.set(0,1.24,.17);cape.rotation.z=Math.PI;cape.castShadow=true;player.add(cape)
}
function resetKingBones(){for(const b of [hips,torso,legL,legR,shinL,shinR,armL,armR,foreL,foreR]){if(!b)continue;const r=kingRest.get(b.name);if(r){b.quaternion.copy(r.q);b.position.copy(r.p)}}}
function rotateBone(b,axis,angle){if(!b)return;const r=kingRest.get(b.name);if(r)b.quaternion.copy(r.q);b.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(axis,angle))}
function setKingAnimation(state){
  if(!playerMixer||seated||state===kingAnimState)return;
  const next=state==='walk'?kingWalkAction:kingIdleAction,prev=kingAnimState==='walk'?kingWalkAction:kingIdleAction;
  if(next){next.reset().play();if(prev&&prev!==next)next.crossFadeFrom(prev,.18,true)} kingAnimState=state
}
async function loadNPC(s){const r=new THREE.Group();r.position.fromArray(s.pos);r.rotation.y=Math.PI+s.rot;scene.add(r);try{const g=await load(s.asset);prep(g.scene,true);r.add(g.scene);if(g.animations.length){const m=new THREE.AnimationMixer(g.scene),clip=g.animations.find(a=>a.name.toLowerCase().includes('idle'))||g.animations[0];m.clipAction(clip).play();mixers.push(m)}}catch(e){console.error(e)}r.add(label(s.name));const ring=new THREE.Mesh(new THREE.RingGeometry(.55,.67,32),new THREE.MeshBasicMaterial({color:0xf3cc68,transparent:true,opacity:.12,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.025;r.add(ring);npcs.push({...s,root:r,ring,used:false,petitionIndex:0,home:r.position.clone(),wanderTarget:r.position.clone(),wanderTimer:1+Math.random()*3,routeIndex:0,routePause:0})}
let guardTemplatePromise=null;
async function getGuardTemplate(){if(!guardTemplatePromise)guardTemplatePromise=load('./assets/guard.glb');return guardTemplatePromise}
async function makeSoldier(name,pos,collection,tint=0xffffff){
  const src=await getGuardTemplate(),r=new THREE.Group();r.position.fromArray(pos);scene.add(r);
  const visual=cloneSkeleton(src.scene);prep(visual,true);visual.traverse(o=>{if(o.isMesh&&o.material&&tint!==0xffffff)o.material.color?.multiply(new THREE.Color(tint))});r.add(visual);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.4,.48,24),new THREE.MeshBasicMaterial({color:collection===guardUnits?0x86a9ff:0xd4c074,transparent:true,opacity:.07,side:THREE.DoubleSide}));
  ring.rotation.x=-Math.PI/2;ring.position.y=.02;r.add(ring);const u={name,root:r,patrolIndex:0,ring,hp:100,attackCooldown:0,alive:true};collection.push(u);return u
}
async function loadRoyalGuard(name,pos){return makeSoldier(name,pos,guardUnits)}
async function loadArmySoldier(name,pos){return makeSoldier(name,pos,armyUnits,0xe1d6bd)}
const patrolPoints=[new THREE.Vector3(-5,0,3),new THREE.Vector3(-7,0,-4),new THREE.Vector3(-14,0,-6),new THREE.Vector3(-18,0,3),new THREE.Vector3(-8,0,8),new THREE.Vector3(0,0,4),new THREE.Vector3(8,0,8),new THREE.Vector3(17,0,4),new THREE.Vector3(18,0,-5),new THREE.Vector3(7,0,-5)];
const thronePosts=[[-1.25,5.05],[1.25,5.05],[-2.4,4.05],[2.4,4.05],[-3.25,2.8],[3.25,2.8]];
const gatePosts=[[16,-4],[18,-4],[20,-4],[16,-1.8],[18,-1.8],[20,-1.8]];
const escortOffsets=[[-.9,-1.05],[.9,-1.05],[-1.45,-2],[1.45,-2],[-.75,-2.9],[.75,-2.9]];
function refreshCommandStatus(){
  const g=document.getElementById('guardStatus');if(!g)return;
  const gn={patrol:'PATROL',escort:'ESCORT',throne:'THRONE',gate:'MAIN GATE'}[guardMode]||guardMode.toUpperCase();
  const an={drill:'DRILLING',muster:'MUSTERED',gate:'DEFEND GATE',follow:'FOLLOW KING'}[armyMode]||armyMode.toUpperCase();
  g.textContent='ROYAL GUARD · '+gn+'   |   ARMY '+armyUnits.length+' · '+an
}
function setGuardMode(mode){guardMode=mode;realm.guardMode=mode;save();refreshCommandStatus();toast('ROYAL GUARD — '+mode.toUpperCase())}
function setArmyMode(mode){armyMode=mode;realm.armyMode=mode;save();refreshCommandStatus();toast('ARMY — '+mode.toUpperCase())}
function openGuardOrders(){dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent='Royal Command';speakerName.textContent='War Council';dialogueText.textContent='Your Majesty, your household guard and field soldiers await orders.';choicesEl.innerHTML='';appendGuardCommands()}
function appendGuardCommands(){
  const hr=document.createElement('div');hr.className='command-title';hr.textContent='ROYAL GUARD';choicesEl.appendChild(hr);
  for(const [mode,title,note] of [['escort','Escort the King','All six Royal Guards form around you.'],['patrol','Patrol the castle','The guard circulates through all castle districts.'],['throne','Guard the throne','Six guards take ceremonial throne-room posts.'],['gate','Hold the main gate','Deploy the Royal Guard at the outer gate.']]){
    const b=document.createElement('button');b.innerHTML='<b>'+title+'</b><small>'+note+'</small>';b.onclick=()=>{setGuardMode(mode);closeDialog()};choicesEl.appendChild(b)}
  const ar=document.createElement('div');ar.className='command-title';ar.textContent='FIELD ARMY';choicesEl.appendChild(ar);
  for(const [mode,title,note] of [['drill','Train at the barracks','Soldiers return to formation drills.'],['muster','Muster in the royal court','Bring the field company before their king.'],['gate','Reinforce the main gate','March the army to defend the entrance.'],['follow','March with the King','The army column follows at a respectful distance.']]){
    const b=document.createElement('button');b.innerHTML='<b>'+title+'</b><small>'+note+'</small>';b.onclick=()=>{setArmyMode(mode);closeDialog()};choicesEl.appendChild(b)}
}
function updateNPCWander(dt){for(const n of npcs){if(dialogueOpen||seated)continue;if(n.route?.length){if(n.routePause>0){n.routePause-=dt;continue}const p=n.route[n.routeIndex%n.route.length],target=new THREE.Vector3(p[0],0,p[1]),d=n.root.position.distanceTo(target);if(d<.25){n.routeIndex=(n.routeIndex+1)%n.route.length;n.routePause=1.2+Math.random()*2.8;continue}const v=target.sub(n.root.position);v.y=0;v.normalize();n.root.position.addScaledVector(v,dt*(n.id==='captain'?.48:.36));n.root.rotation.y=Math.atan2(v.x,v.z)}else{n.wanderTimer-=dt;const d=n.root.position.distanceTo(n.wanderTarget);if(n.wanderTimer<=0||d<.12){n.wanderTimer=2.5+Math.random()*4;const a=Math.random()*Math.PI*2,r=.35+Math.random()*1.2;n.wanderTarget.set(n.home.x+Math.cos(a)*r,0,n.home.z+Math.sin(a)*r)}const v=n.wanderTarget.clone().sub(n.root.position);v.y=0;if(v.length()>.1){v.normalize();n.root.position.addScaledVector(v,dt*.3);n.root.rotation.y=Math.atan2(v.x,v.z)}}}}
function moveUnit(u,target,dt,speed){const v=target.clone().sub(u.root.position);v.y=0;if(v.length()>.08){v.normalize();u.root.position.addScaledVector(v,dt*speed);u.root.rotation.y=Math.atan2(v.x,v.z)}}
function updateGuards(dt){
  guardUnits.forEach((g,i)=>{let target;
    if(guardMode==='escort'){const [sx,sz]=escortOffsets[i%escortOffsets.length],f=new THREE.Vector3(Math.sin(player.rotation.y),0,Math.cos(player.rotation.y)),r=new THREE.Vector3(f.z,0,-f.x);target=player.position.clone().addScaledVector(r,sx).addScaledVector(f,sz)}
    else if(guardMode==='throne'){const p=thronePosts[i%thronePosts.length];target=new THREE.Vector3(p[0],0,p[1])}
    else if(guardMode==='gate'){const p=gatePosts[i%gatePosts.length];target=new THREE.Vector3(p[0],0,p[1])}
    else{target=patrolPoints[(g.patrolIndex+i*2)%patrolPoints.length];if(g.root.position.distanceTo(target)<.35)g.patrolIndex=(g.patrolIndex+1)%patrolPoints.length}
    moveUnit(g,target,dt,guardMode==='escort'?1.75:.95);g.ring.material.opacity=guardMode==='escort'?.18:.06
  })
}
function updateArmy(dt){
  armyUnits.forEach((u,i)=>{const row=Math.floor(i/4),col=i%4;let target;
    if(armyMode==='gate')target=new THREE.Vector3(14+col*1.7,0,-6+row*1.5);
    else if(armyMode==='muster')target=new THREE.Vector3(-3+col*1.8,0,-2.7-row*1.5);
    else if(armyMode==='follow'){const f=new THREE.Vector3(Math.sin(player.rotation.y),0,Math.cos(player.rotation.y)),r=new THREE.Vector3(f.z,0,-f.x);target=player.position.clone().addScaledVector(f,-4.2-row*1.4).addScaledVector(r,(col-1.5)*1.2)}
    else target=new THREE.Vector3(-18+col*1.7,0,2-row*1.6);
    moveUnit(u,target,dt,armyMode==='follow'?1.45:.72)
  })
}

async function spawnRaider(name,pos){
 const src=await getGuardTemplate(),root=new THREE.Group();root.position.fromArray(pos);scene.add(root);
 const visual=cloneSkeleton(src.scene);prep(visual,true);visual.traverse(o=>{if(o.isMesh&&o.material){o.material.color?.multiply(new THREE.Color(0x7a3d3d));o.material.roughness=.78}});root.add(visual);
 const ring=new THREE.Mesh(new THREE.RingGeometry(.42,.52,24),new THREE.MeshBasicMaterial({color:0xff5a43,transparent:true,opacity:.34,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;root.add(ring);
 const u={name,root,ring,hp:55,attackCooldown:Math.random()*.7,alive:true,isRaider:true};raiders.push(u);raidPending=Math.max(0,raidPending-1);return u
}
async function spawnRaid(count=6){
 if(raidActive)return;raidActive=true;raidPending=count;raidWave++;warStatusEl.classList.remove('hidden');warStatusEl.textContent='RAID WAVE '+raidWave+' · ENEMIES AT THE GATE';initAudio();alarmHorn();toast('ALARM — RAIDERS AT THE MAIN GATE');
 setGuardMode('gate');setArmyMode('gate');
 for(let i=0;i<count;i++){setTimeout(()=>spawnRaider('Raider '+(i+1),[13.5+(i%4)*2.1,0,-12.1-Math.floor(i/4)*1.2]).catch(console.error),i*100)}
}
function aliveRaiders(){return raiders.filter(r=>r.alive)}
function nearestUnit(from,arr){let best=null,bd=Infinity;for(const u of arr){if(!u.alive)continue;const d=from.root.position.distanceTo(u.root.position);if(d<bd){bd=d;best=u}}return [best,bd]}
function defeatUnit(u){u.alive=false;u.root.visible=false}
function finishRaid(win){
 raidActive=false;warStatusEl.classList.add('hidden');
 if(win){realm.security+=6;realm.favor+=4;toast('RAID DEFEATED — THE CASTLE HOLDS')}else{realm.security-=15;realm.gold=Math.max(0,realm.gold-120);toast('THE RAIDERS BREACHED THE DEFENSES')}
 clampRealm();save();renderStats()
}
function healForces(){for(const u of [...guardUnits,...armyUnits]){u.hp=100;u.alive=true;u.root.visible=true}}
function updateRaid(dt){
 if(!raidActive)return;
 const enemies=aliveRaiders(),defenders=[...guardUnits,...armyUnits].filter(u=>u.alive);warStatusEl.textContent='RAID WAVE '+raidWave+' · '+(enemies.length+raidPending)+' ENEMIES';
 if(enemies.length===0){if(raidPending===0)finishRaid(true);return}
 if(defenders.length===0){finishRaid(false);return}
 for(const r of enemies){
   const [t,d]=nearestUnit(r,defenders);if(!t)continue;
   if(d>1.15)moveUnit(r,t.root.position,dt,.72);
   else{r.attackCooldown-=dt;if(r.attackCooldown<=0){r.attackCooldown=.95;t.hp-=14;if(t.hp<=0)defeatUnit(t)}}
 }
 for(const d of defenders){
   const [t,dist]=nearestUnit(d,enemies);if(!t)continue;
   if(dist<4.5&&dist>1.08)moveUnit(d,t.root.position,dt,1.05);
   d.attackCooldown-=dt;if(dist<=1.18&&d.attackCooldown<=0){d.attackCooldown=.72;t.hp-=22;t.ring.material.opacity=.75;if(t.hp<=0)defeatUnit(t)}
 }
}
function kingAttack(){
 if(!raidActive||seated)return;let best=null,bd=2.35;for(const r of aliveRaiders()){const d=player.position.distanceTo(r.root.position);if(d<bd){best=r;bd=d}}
 if(!best){toast('NO ENEMY IN SWORD RANGE');return}
 if(kingAttackAction&&playerMixer){const prev=kingAnimState==='walk'?kingWalkAction:kingIdleAction;kingAttackAction.reset().play();if(prev)kingAttackAction.crossFadeFrom(prev,.08,true);kingAnimState='attack';setTimeout(()=>{kingAnimState='';setKingAnimation(moving?'walk':'idle')},650)}
 swordSound();best.hp-=38;best.ring.material.opacity=1;toast('THE KING STRIKES');if(best.hp<=0)defeatUnit(best)
}
function buildCastleExpansion(){
  const stone=new THREE.MeshStandardMaterial({color:0x8f887c,roughness:.9}),stone2=new THREE.MeshStandardMaterial({color:0x69645c,roughness:.88}),wood=new THREE.MeshStandardMaterial({color:0x654126,roughness:.82}),roof=new THREE.MeshStandardMaterial({color:0x6e1e29,roughness:.78}),grass=new THREE.MeshStandardMaterial({color:0x526b3d,roughness:1}),sand=new THREE.MeshStandardMaterial({color:0xb9a784,roughness:1}),gold=new THREE.MeshStandardMaterial({color:0xb88d35,metalness:.55,roughness:.35});
  const box=(sx,sy,sz,mat,x,y,z,ry=0)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),mat);m.position.set(x,y,z);m.rotation.y=ry;m.receiveShadow=true;m.castShadow=sy>.3;world.add(m);return m};
  box(76,.08,34,grass,7,-.12,0);box(44,.1,4,sand,0,-.04,0);box(5,.1,26,sand,0,-.03,0);box(22,.1,3.2,sand,28,-.035,-8.3);
  // perimeter and gate
  box(48,2.6,.65,stone2,0,1.25,-14);box(48,2.6,.65,stone2,0,1.25,14);box(.65,2.6,28,stone2,-24,1.25,0);box(.65,2.6,28,stone2,24,1.25,0);
  for(const x of [-21,-17,17,21]){const t=new THREE.Mesh(new THREE.CylinderGeometry(1.45,1.7,5.2,12),stone);t.position.set(x,2.55,-11.8);t.castShadow=t.receiveShadow=true;world.add(t);const cap=new THREE.Mesh(new THREE.ConeGeometry(1.85,1.7,12),roof);cap.position.set(x,5.95,-11.8);world.add(cap)}
  box(7,4,.7,stone,19,2,-11.8);box(2.8,4.5,.8,wood,19,2,-11.3);
  // barracks
  box(9,.18,9,stone,-16,-.02,1.5);box(8,3.3,5.5,wood,-17,1.65,-4);box(8,.45,6.1,roof,-17,3.55,-4);
  box(4,2.8,3.2,wood,-11.5,1.4,-4.5);box(4,.4,3.8,roof,-11.5,3,-4.5);
  for(const z of [2,5,8]){const pole=box(.16,1.8,.16,wood,-13,.9,z);const cross=box(1.2,.14,.14,wood,-13,1.65,z);const head=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),sand);head.position.set(-13,1.85,z);world.add(head)}
  // market / civilian yard
  box(9,.18,9,stone,15,-.02,4);for(const [x,z] of [[12,5],[16,7],[19,4]]){box(3,.16,1.8,wood,x,.85,z);for(const dx of [-1.25,1.25])box(.12,1.7,.12,wood,x+dx,.8,z);box(3.3,.12,2.1,roof,x,1.75,z)}
  // lower village and farms outside the east wall
  for(const [x,z] of [[28,-3],[32,2],[28,7]]){box(5,2.8,4.2,wood,x,1.4,z);box(5.5,.42,4.8,roof,x,3.02,z)}
  // farm plots and fences
  for(const z of [-1,3.2,7.4]){box(6,.08,2.4,new THREE.MeshStandardMaterial({color:0x735836,roughness:1}),34,-.03,z);for(let k=-2;k<=2;k++)box(.07,.16,2.1,new THREE.MeshStandardMaterial({color:0x8d7147,roughness:1}),34+k*.95,.05,z)}
  // village well
  const wellBase=new THREE.Mesh(new THREE.CylinderGeometry(1.05,1.12,.75,16),stone);wellBase.position.set(31,.36,-7);wellBase.castShadow=wellBase.receiveShadow=true;world.add(wellBase);
  const wellLip=new THREE.Mesh(new THREE.TorusGeometry(1.03,.14,8,20),stone2);wellLip.rotation.x=Math.PI/2;wellLip.position.set(31,.82,-7);world.add(wellLip);
  for(const x of [30.15,31.85])box(.12,2,.12,wood,x,1.75,-7);box(2.1,.12,.12,wood,31,2.68,-7);
  // farm fencing
  for(const x of [30.8,37.2])box(.12,1.05,11,wood,x,.45,3.2);for(const z of [-2.1,8.5])box(6.4,1.05,.12,wood,34,.45,z);
  // banners mark districts
  for(const [x,z] of [[-7,0],[7,0]]){const pole=box(.12,3,.12,wood,x,1.5,-1);const flag=box(1.15,1.45,.06,roof,x+(x<0?-.62:.62),2.15,-1)}
  const labels=[['BARRACKS & TRAINING YARD',-16,3.4,10],['ROYAL COURT',0,3.6,8],['MAIN GATE & MARKET',16,3.4,10],['LOWER VILLAGE & FARMS',31,3.4,10]];
  for(const [txt,x,y,z] of labels){const l=label(txt);l.scale.set(3.3,.65,1);l.position.set(x,y,z);world.add(l)}
}
async function addCastleAsset(path,pos,scale=1,rot=0){
  try{const g=await load(path);prep(g.scene,true);g.scene.position.set(pos[0],pos[1],pos[2]);g.scene.scale.setScalar(scale);g.scene.rotation.y=rot;world.add(g.scene);return g.scene}catch(e){console.warn('castle asset',path,e);return null}
}
async function loadCastleDetailAssets(){
  const jobs=[
    addCastleAsset('./assets/castle/gate.glb',[19,1.8,-11.1],2.4,0),
    addCastleAsset('./assets/castle/tower-square.glb',[15.6,2.3,-11.2],2.7,0),
    addCastleAsset('./assets/castle/tower-square.glb',[22.1,2.3,-11.2],2.7,0),
    addCastleAsset('./assets/castle/flag-wide.glb',[18.9,4.6,-10.6],1.4,0),
    addCastleAsset('./assets/castle/siege-catapult.glb',[-20,.9,6.3],1.15,-Math.PI*.35),
    addCastleAsset('./assets/castle/siege-ballista.glb',[-15.5,.8,6.5],1.15,Math.PI*.18),
    addCastleAsset('./assets/castle/bridge-draw.glb',[19,.3,-8.8],2.0,0),
    addCastleAsset('./assets/castle/wall-corner.glb',[-22,1.7,-11],2.0,0),
    addCastleAsset('./assets/castle/tree-large.glb',[26,.8,-8],1.7,0),
    addCastleAsset('./assets/castle/tree-large.glb',[36,.8,-7],1.8,.5),
    addCastleAsset('./assets/castle/tree-small.glb',[27,.55,10],1.5,-.4),
    addCastleAsset('./assets/castle/tree-small.glb',[36,.55,10],1.4,.8),
    addCastleAsset('./assets/castle/rocks-large.glb',[38,.25,-3],1.2,.2),
    addCastleAsset('./assets/castle/rocks-small.glb',[25,.2,5],1.0,-.3)
  ];
  await Promise.all(jobs)
}
function updateZone(){
  const x=player.position.x;let z=x<-8?'BARRACKS & TRAINING YARD':x>24?'LOWER VILLAGE & FARMS':x>8?'MAIN GATE & MARKET':'ROYAL COURT';
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
  const start=realm.armySize||armyUnits.length;realm.armySize=Math.min(20,start+count);realm.security+=3;clampRealm();save();renderStats();
  const toAdd=Math.max(0,realm.armySize-armyUnits.length);
  for(let i=0;i<toAdd;i++){const n=armyUnits.length;await loadArmySoldier('Crown Soldier '+(n+1),[-20+(n%4)*1.7,0,2-Math.floor(n/4)*1.5])}
  refreshCommandStatus();toast(count+' SOLDIERS JOINED THE CROWN')
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
 makeWorldInteractable('barracks','Royal Barracks','BARRACKS',[-16,8],openBarracks);
 makeWorldInteractable('market','Royal Market','MARKET',[15,9],openMarket);
 makeWorldInteractable('gateCommand','Main Gate','GATE COMMAND',[19,-7.2],openGateCommand);
 makeWorldInteractable('village','Lower Village','VILLAGE STEWARD',[31,-6],openVillage)
}
function checkReady(){if(loadedEssential>=2&&!ready){ready=true;beginBtn.textContent='ENTER YOUR COURT'}}ready=true;beginBtn.disabled=false;beginBtn.textContent='ENTER YOUR COURT';

function toast(t){toastEl.textContent=t;toastEl.classList.remove('hidden');clearTimeout(toast.t);toast.t=setTimeout(()=>toastEl.classList.add('hidden'),1800)}
const petition=n=>petitions[n.id][n.petitionIndex%petitions[n.id].length];
function apply(n,c){for(const[k,v]of Object.entries(c.delta))realm[k]=(realm[k]||0)+v;clampRealm();save();renderStats();n.used=true;closeDialog();toast('DECREE ISSUED — THE REALM HAS CHANGED');updateObjective()}
function audience(n){dialogueOpen=true;dialogue.classList.remove('hidden');speakerRole.textContent=n.role;speakerName.textContent=n.name;choicesEl.innerHTML='';if(n.used){dialogueText.textContent='“Your Majesty, your decree stands. I have no further petition for the Crown today.”';if(n.id==='captain')appendGuardCommands();return}const p=petition(n);dialogueText.textContent='“'+p.text+'”';for(const c of p.choices){const b=document.createElement('button'),cost=c.delta.gold<0?-c.delta.gold:0;if(cost>realm.gold){b.disabled=true;b.style.opacity='.45'}b.innerHTML='<b>'+c.title+'</b><small>'+c.note+(cost>realm.gold?' · Not enough coin':'')+'</small>';b.onclick=()=>apply(n,c);choicesEl.appendChild(b)}if(n.id==='captain')appendGuardCommands()}
function closeDialog(){dialogueOpen=false;dialogue.classList.add('hidden')}leaveDialogue.onclick=closeDialog;
const done=()=>npcs.length>=4&&npcs.every(n=>n.used);
function updateObjective(){objectiveEl.innerHTML=done()?'Court concluded. Return to your <b>THRONE</b> to begin the next day.':'Hold court. Walk to a subject and tap <b>AUDIENCE</b>.'}
function nextDay(){realm.day++;healForces();const tax=Math.max(20,Math.round(35+realm.prosperity*.8));realm.gold+=tax;for(const n of npcs){n.used=false;n.petitionIndex=(n.petitionIndex+1)%petitions[n.id].length}clampRealm();save();renderStats();updateObjective();toast('DAY '+realm.day+' — CROWN REVENUE +'+tax+' COIN');if(realm.day%3===0)setTimeout(()=>spawnRaid(Math.min(10,4+realm.day)).catch(console.error),2200)}
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
interactBtn.onclick=()=>{if(dialogueOpen)return;if(seated){standThrone();return}if(!currentTarget)return;if(currentTarget.isThrone)openThrone();else if(currentTarget.isWorldAction)currentTarget.openFn();else audience(currentTarget)};
beginBtn.onclick=()=>{initAudio();royalChime();intro.classList.add('hidden');toast('LONG LIVE KING ALDRIC')};

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
const keys=new Set();addEventListener('keydown',e=>{keys.add(e.code);if(e.code==='KeyE'&&currentTarget&&!dialogueOpen)(currentTarget.isThrone?openThrone():audience(currentTarget))});addEventListener('keyup',e=>keys.delete(e.code));
function kb(){let x=0,y=0;if(keys.has('KeyW')||keys.has('ArrowUp'))y++;if(keys.has('KeyS')||keys.has('ArrowDown'))y--;if(keys.has('KeyA')||keys.has('ArrowLeft'))x--;if(keys.has('KeyD')||keys.has('ArrowRight'))x++;return{x,y}}
const collisionRects=[
 {x1:-21.2,x2:-12.8,z1:-7.2,z2:-.7},{x1:-13.8,x2:-9.2,z1:-6.4,z2:-2.5},
 {x1:10.2,x2:13.8,z1:3.7,z2:6.3},{x1:14.2,x2:17.8,z1:5.7,z2:8.3},{x1:17.2,x2:20.8,z1:2.7,z2:5.3},
 {x1:25.3,x2:30.7,z1:-5.3,z2:-.7},{x1:29.3,x2:34.7,z1:-.3,z2:4.3},{x1:25.3,x2:30.7,z1:4.7,z2:9.3}
];
function blockedAt(p){const r=.38;return collisionRects.some(b=>p.x+r>b.x1&&p.x-r<b.x2&&p.z+r>b.z1&&p.z-r<b.z2)}
function tryMove(v,amount){
 const next=player.position.clone().addScaledVector(v,amount);next.x=THREE.MathUtils.clamp(next.x,-22.5,37.5);next.z=THREE.MathUtils.clamp(next.z,-12.5,12.5);
 if(!blockedAt(next)){player.position.copy(next);return}
 const nx=player.position.clone();nx.x=next.x;if(!blockedAt(nx))player.position.x=nx.x;
 const nz=player.position.clone();nz.z=next.z;if(!blockedAt(nz))player.position.z=nz.z;
}
function move(dt){
  if(dialogueOpen||seated){moving=false;setKingAnimation('idle');return}
  const k=kb();let x=k.x||moveX,y=k.y||moveY,l=Math.hypot(x,y);
  if(l>.08){if(l>1){x/=l;y/=l}const f=new THREE.Vector3(-Math.sin(cameraYaw),0,-Math.cos(cameraYaw)),r=new THREE.Vector3(Math.cos(cameraYaw),0,-Math.sin(cameraYaw)),v=f.multiplyScalar(y).add(r.multiplyScalar(x));tryMove(v,dt*3.35);player.rotation.y=Math.atan2(v.x,v.z);moving=true;setKingAnimation('walk')}
  else{moving=false;setKingAnimation('idle')}
}function cam(dt){const t=player.position.clone().add(new THREE.Vector3(0,seated?1.05:1.48,0)),cp=Math.cos(cameraPitch),dir=new THREE.Vector3(Math.sin(cameraYaw)*cp,Math.sin(cameraPitch),Math.cos(cameraYaw)*cp),p=t.clone().addScaledVector(dir,seated?4.45:5.35);camera.position.lerp(p,1-Math.exp(-dt*8));camera.lookAt(t)}
function proximity(){
 attackBtn.disabled=!raidActive||seated;
 if(seated){currentTarget=throne;interactBtn.disabled=false;interactBtn.textContent='STAND';nearbyEl.textContent='Seated on the Royal Throne';return}
 let best=null,bd=999;
 for(const n of npcs){const d=player.position.distanceTo(n.root.position);n.ring.material.opacity=d<2.5?.42:.12;if(d<2.15&&d<bd){best=n;bd=d}}
 for(const w of worldInteractables){const d=player.position.distanceTo(w.root.position);w.ring.material.opacity=d<2.8?.48:.15;if(d<2.25&&d<bd){best=w;bd=d}}
 const td=player.position.distanceTo(throne.pos);throne.ring.material.opacity=td<2.2?.35:.18;if(td<1.75&&td<bd){best=throne;bd=td}
 currentTarget=best;
 if(best){interactBtn.disabled=false;interactBtn.textContent=best.isThrone?'THRONE':best.isWorldAction?'USE':'AUDIENCE';nearbyEl.textContent=best.isThrone?'Your Royal Throne':best.name+(best.role?' · '+best.role:'')}
 else{interactBtn.disabled=true;interactBtn.textContent='AUDIENCE';nearbyEl.textContent=''}
}
function loop(){requestAnimationFrame(loop);const dt=Math.min(clock.getDelta(),.05);mixers.forEach(m=>m.update(dt));move(dt);updateNPCWander(dt);updateGuards(dt);updateArmy(dt);updateRaid(dt);updateLighting(dt);updateZone();cam(dt);proximity();renderer.render(scene,camera)}
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.25));renderer.setSize(innerWidth,innerHeight)});
function bootProgressive(){
  guardMode=realm.guardMode||'patrol';armyMode=realm.armyMode||'drill';buildCastleExpansion();buildDistrictInteractions();updateObjective();refreshCommandStatus();
  const zn=document.getElementById('zoneName');if(zn)zn.textContent='ROYAL COURT';
  setTimeout(()=>loadPlayer().catch(console.error),0);
  const guards=[[-2,3.2],[2,3.2],[-3.2,1.5],[3.2,1.5],[-4.2,-1],[4.2,-1]];
  guards.forEach((pos,i)=>setTimeout(()=>loadRoyalGuard('Royal Guard '+(i+1),pos).catch(console.error),220+i*80));
  const armyCount=Math.max(8,Math.min(20,realm.armySize||8));realm.armySize=armyCount;
  for(let i=0;i<armyCount;i++){const pos=[-20+(i%4)*1.7,0,2-Math.floor(i/4)*1.5];setTimeout(()=>loadArmySoldier('Crown Soldier '+(i+1),pos).then(refreshCommandStatus).catch(console.error),760+i*55)}
  specs.forEach((spec,i)=>setTimeout(()=>loadNPC(spec).catch(console.error),1250+i*180));
  setTimeout(()=>loadEnvironment().catch(console.error),1900);
  setTimeout(()=>loadCastleDetailAssets().catch(console.error),2250);
}
loop();
requestAnimationFrame(()=>requestAnimationFrame(bootProgressive));