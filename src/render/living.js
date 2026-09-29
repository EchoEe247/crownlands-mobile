import * as THREE from '../../vendor/three.module.js';
import {GLTFLoader} from '../../vendor/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from '../../vendor/addons/utils/SkeletonUtils.js';
import {actors} from '../sim/actors.js';

const ASSETS={
  guard:'./assets/guard.glb',
  innkeeper:'./assets/innkeeper.glb',
  merchant:'./assets/merchant.glb',
  mage:'./assets/mage.glb'
};
const CAP={guard:10,innkeeper:5,merchant:3,mage:2};

function prep(root){
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;if(o.material)o.material=o.material.clone()}})
}
function nameSprite(text=''){
  const c=document.createElement('canvas');c.width=512;c.height=128;const x=c.getContext('2d'),tex=new THREE.CanvasTexture(c);
  tex.colorSpace=THREE.SRGBColorSpace;
  const mat=new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}),sp=new THREE.Sprite(mat);
  sp.scale.set(2.55,.62,1);
  sp.userData.setText=t=>{x.clearRect(0,0,512,128);x.fillStyle='rgba(11,11,14,.78)';x.beginPath();x.roundRect(18,31,476,66,18);x.fill();x.strokeStyle='rgba(226,199,126,.58)';x.lineWidth=2;x.stroke();x.fillStyle='#f7e0a8';x.font='bold 26px Georgia';x.textAlign='center';x.fillText(t.length>30?t.slice(0,29)+'…':t,256,73);tex.needsUpdate=true};
  sp.userData.setText(text);return sp
}
const assetType=a=>ASSETS[a.look?.asset]?a.look.asset:(['royalguard','soldier','marshal','captain','sergeant','vguard','vsoldier','merc'].includes(a.role)?'guard':'innkeeper');

export async function createLivingRenderer(scene){
  const loader=new GLTFLoader(),templates={};
  await Promise.all(Object.entries(ASSETS).map(async([k,url])=>{templates[k]=await new Promise((res,rej)=>loader.load(url,res,undefined,rej))}));
  const slots=[],byType={guard:[],innkeeper:[],merchant:[],mage:[]};
  for(const type of Object.keys(CAP)){
    const src=templates[type];
    for(let i=0;i<CAP[type];i++){
      const root=new THREE.Group(),visual=cloneSkeleton(src.scene);prep(visual);root.add(visual);
      const box=new THREE.Box3().setFromObject(visual),size=new THREE.Vector3();box.getSize(size);
      const baseScale=1.72/Math.max(.01,size.y);visual.scale.setScalar(baseScale);
      box.setFromObject(visual);visual.position.y-=box.min.y;
      const label=nameSprite('');label.position.y=2.02;root.add(label);
      const ring=new THREE.Mesh(new THREE.RingGeometry(.34,.43,22),new THREE.MeshBasicMaterial({color:0xd5b96c,transparent:true,opacity:.04,side:THREE.DoubleSide,depthWrite:false}));
      ring.rotation.x=-Math.PI/2;ring.position.y=.02;root.add(ring);
      let mixer=null,idle=null,move=null,talk=null,work=null;
      if(src.animations?.length){
        mixer=new THREE.AnimationMixer(visual);
        const ic=src.animations.find(c=>/^idle$/i.test(c.name))||src.animations.find(c=>/idle/i.test(c.name))||src.animations[0];
        const mc=src.animations.find(c=>/arm-swing/i.test(c.name))||ic;
        const tc=src.animations.find(c=>/head-turn/i.test(c.name))||ic;
        const wc=src.animations.find(c=>/weapon-raise/i.test(c.name))||mc;
        idle=mixer.clipAction(ic);move=mixer.clipAction(mc);talk=mixer.clipAction(tc);work=mixer.clipAction(wc);idle.play()
      }
      const slot={type,root,visual,label,ring,mixer,idle,move,talk,work,state:'idle',actor:null,baseScale,visualBaseY:visual.position.y};root.visible=false;scene.add(root);slots.push(slot);byType[type].push(slot)
    }
  }
  let selectT=0;
  function choose(playerPos){
    for(const type of Object.keys(byType)){
      const cap=byType[type].length;
      const candidates=actors.filter(a=>a.alive&&assetType(a)===type).map(a=>{
        const d=Math.hypot(a.x-playerPos.x,a.z-playerPos.z);
        const importance=(a.hero?60:0)+(a.rank||0)*7+(a.order?25:0);
        return {a,d,score:d-importance}
      }).filter(x=>x.d<88).sort((x,y)=>x.score-y.score).slice(0,cap).map(x=>x.a);
      const wanted=new Set(candidates);
      for(const s of byType[type])if(s.actor&&!wanted.has(s.actor)){s.actor=null;s.root.visible=false}
      const assigned=new Set(byType[type].filter(s=>s.actor).map(s=>s.actor));
      for(const a of candidates){
        if(assigned.has(a))continue;
        const s=byType[type].find(q=>!q.actor);if(!s)break;
        s.actor=a;s.root.visible=true;s.label.userData.setText(a.name);assigned.add(a);
        const tint=a.look?.tint;if(tint)s.visual.traverse(o=>{if(o.isMesh&&o.material?.color){o.material.color.setHex(0xffffff);o.material.color.multiply(new THREE.Color(tint))}});
        const sc=a.look?.scale||1;s.visual.scale.setScalar(s.baseScale*sc);s.label.position.y=2.02*sc;
      }
    }
  }
  function update(playerPos,dt){
    selectT-=dt;if(selectT<=0){selectT=.45;choose(playerPos)}
    for(const s of slots){
      if(!s.actor||!s.root.visible)continue;const a=s.actor;
      s.root.position.set(a.x,a.y||0,a.z);s.root.rotation.y=a.yaw||0;
      const moving=a.state==='walk'||a.pose==='walk'||a.pose==='run';
      const pose=String(a.pose||'stand');
      const next=moving?'move':/talk|pray|write|trade/.test(pose)?'talk':/drill|hammer|chop|hoe|tend|mill|post/.test(pose)?'work':'idle';
      if(s.mixer){
        s.mixer.update(dt);
        if(next!==s.state){
          const map={idle:s.idle,move:s.move,talk:s.talk,work:s.work},na=map[next]||s.idle,pa=map[s.state]||s.idle;
          if(na&&pa&&na!==pa){na.reset().play();na.crossFadeFrom(pa,.15,true)}s.state=next
        }
      }
      const d=Math.hypot(a.x-playerPos.x,a.z-playerPos.z),ordered=!!a.order;
      s.label.visible=d<11||ordered||!!a.hero;
      s.ring.material.opacity=ordered?.28:(a.hero?.13:.035);
      s.ring.material.color.setHex(a.team==='valemar'?0x8dbb86:a.team==='ashwood'?0xd48a67:ordered?0x7fb2ff:0xd5b96c);
    }
  }
  return {
    update,
    get targets(){return slots.filter(s=>s.actor&&s.root.visible).map(s=>({actor:s.actor,root:s.root,ring:s.ring}))},
    visibleCount:()=>slots.filter(s=>s.actor&&s.root.visible).length,
    capacity:slots.length
  }
}