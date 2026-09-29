import * as THREE from '../../vendor/three.module.js';
import {WORLD,WALL,BM,BUILDINGS,TOWERS,BMTOWERS,ROADS,RIVER,BRIDGE,FIELDS,TENTS,buildingAt} from '../layout.js';

const mat=(color,roughness=.9,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
const M={
  grass:mat(0x65784c,1),road:mat(0xb49d78,1),water:new THREE.MeshStandardMaterial({color:0x477b91,roughness:.35,metalness:.08,transparent:true,opacity:.82}),
  stone:mat(0x938c80,.96),stoneDark:mat(0x67635e,.95),wood:mat(0x6b472e,.88),thatch:mat(0x9b8656,1),
  red:mat(0x742534,.86),brown:mat(0x65432d,.9),slate:mat(0x4c5159,.92),green:mat(0x344c3d,.92),black:mat(0x292c31,.88),
  field:mat(0x6f5738,1),crop:mat(0x95824b,1)
};
const roofMat=b=>M[b.roof]||M.red;

export function createWorldGeometry(group){
  const roots=[],roofs=[];
  const box=(sx,sy,sz,material,x,y,z,ry=0,cast=false)=>{
    const q=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),material);q.position.set(x,y,z);q.rotation.y=ry;q.receiveShadow=true;q.castShadow=cast;group.add(q);return q
  };
  const terrain=box(WORLD.x1-WORLD.x0+.0,.12,WORLD.z1-WORLD.z0,M.grass,(WORLD.x0+WORLD.x1)/2,-.12,(WORLD.z0+WORLD.z1)/2);

  // Roads are intentionally broad/readable on a phone screen.
  for(const path of Object.values(ROADS))for(let i=0;i<path.length-1;i++){
    const [ax,az]=path[i],[bx,bz]=path[i+1],dx=bx-ax,dz=bz-az,L=Math.hypot(dx,dz),ry=Math.atan2(dx,dz);
    box(3.3,.045,L,M.road,(ax+bx)/2,-.035,(az+bz)/2,ry);
  }

  // River and bridge.
  for(let i=0;i<RIVER.length-1;i++){
    const [ax,az]=RIVER[i],[bx,bz]=RIVER[i+1],dx=bx-ax,dz=bz-az,L=Math.hypot(dx,dz),ry=Math.atan2(dx,dz);
    box(8,.035,L+1.2,M.water,(ax+bx)/2,-.025,(az+bz)/2,ry);
  }
  box(BRIDGE.x1-BRIDGE.x0,.22,BRIDGE.w,M.stoneDark,(BRIDGE.x0+BRIDGE.x1)/2,.06,BRIDGE.z,0,true);
  for(let x=BRIDGE.x0+1;x<BRIDGE.x1;x+=2.3){box(.18,.65,BRIDGE.w+.5,M.wood,x,.38,BRIDGE.z,0)}

  // Agricultural plots.
  for(const f of FIELDS){
    box(f.x1-f.x0,.04,f.z1-f.z0,M.field,(f.x0+f.x1)/2,-.025,(f.z0+f.z1)/2);
    for(let x=f.x0+2;x<f.x1-1;x+=3)box(.13,.08,f.z1-f.z0-2,M.crop,x,.035,(f.z0+f.z1)/2);
  }
  for(const [x,z] of [[166,24],[176,24],[186,24],[196,24],[166,32],[176,32],[186,32],[196,32]])box(7,.035,5,M.field,x,-.02,z);

  // Building wall segments preserve actual doors/interiors from Layout.js.
  for(const b of BUILDINGS){
    for(const w of b.walls){
      const sx=w.x2-w.x1,sz=w.z2-w.z1;
      box(Math.max(.08,sx),b.h,Math.max(.08,sz),b.wall===0x5a5d63?M.stoneDark:M.stone,(w.x1+w.x2)/2,b.h/2,(w.z1+w.z2)/2,0,Math.hypot(b.cx,b.cz)<115);
    }
    const roof=box(b.w+.55,.28,b.d+.55,roofMat(b),b.cx,b.h+.12,b.cz,0,Math.hypot(b.cx,b.cz)<115);
    roof.material=roof.material.clone();roof.material.transparent=true;roofs.push({mesh:roof,b});
    // Door lintel gives each entrance visual definition.
    box(b.door.side==='N'||b.door.side==='S'?2.7:.28,.45,b.door.side==='N'||b.door.side==='S'?.28:2.7,M.wood,b.door.x,b.h-0.2,b.door.z,0,false);
  }

  function perimeter(W,dark=false){
    const mm=dark?M.stoneDark:M.stone,h=W.h||4.2,t=W.t||1.3,gateZ=W.gate?.z??0;
    box(W.x1-W.x0,h,t,mm,(W.x0+W.x1)/2,h/2,W.z0,0,true);
    box(W.x1-W.x0,h,t,mm,(W.x0+W.x1)/2,h/2,W.z1,0,true);
    box(t,h,W.z1-W.z0,mm,W.x1,h/2,(W.z0+W.z1)/2,0,true);
    const half=3,gz=gateZ;
    box(t,h,Math.max(.1,gz-half-W.z0),mm,W.x0,h/2,(W.z0+gz-half)/2,0,true);
    box(t,h,Math.max(.1,W.z1-(gz+half)),mm,W.x0,h/2,(gz+half+W.z1)/2,0,true);
  }
  perimeter({...WALL,gate:{z:0}},false);perimeter({...BM,t:1.3,h:4.8},true);

  for(const t of [...TOWERS,...BMTOWERS]){
    const dark=t.name==='bm',q=new THREE.Mesh(new THREE.CylinderGeometry(t.r,t.r*1.08,t.h,12),dark?M.stoneDark:M.stone);
    q.position.set(t.x,t.h/2,t.z);q.receiveShadow=q.castShadow=Math.hypot(t.x,t.z)<115;group.add(q);
    const cap=new THREE.Mesh(new THREE.ConeGeometry(t.r*1.22,1.7,12),dark?M.green:M.red);cap.position.set(t.x,t.h+.8,t.z);group.add(cap);
  }

  // Blackmere gatehouse + banners.
  box(4.8,6.2,3.2,M.stoneDark,BM.x0+1.3,3.1,BM.gate.z-5.3,0,true);
  box(4.8,6.2,3.2,M.stoneDark,BM.x0+1.3,3.1,BM.gate.z+5.3,0,true);

  // Ashwood tents.
  for(const [x,z] of TENTS){
    const g=new THREE.Mesh(new THREE.ConeGeometry(2.4,2.8,4),M.thatch);g.position.set(x,1.35,z);g.rotation.y=Math.PI/4;group.add(g)
  }

  // Cheap instanced woodland for scale without many draw calls.
  const treeCount=70,trunkGeo=new THREE.CylinderGeometry(.18,.26,1.8,6),leafGeo=new THREE.ConeGeometry(1.15,3,7);
  const trunks=new THREE.InstancedMesh(trunkGeo,M.wood,treeCount),leaves=new THREE.InstancedMesh(leafGeo,mat(0x405f38,1),treeCount),dummy=new THREE.Object3D();
  let seed=1937;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  for(let i=0;i<treeCount;i++){
    let x,z;do{x=45+rnd()*330;z=-150+rnd()*450}while((x>150&&x<260&&z>-120&&z<90)||(x>380&&z>215&&z<295));
    const sc=.75+rnd()*.75;dummy.position.set(x,.9*sc,z);dummy.scale.set(sc,sc,sc);dummy.updateMatrix();trunks.setMatrixAt(i,dummy.matrix);
    dummy.position.set(x,2.8*sc,z);dummy.updateMatrix();leaves.setMatrixAt(i,dummy.matrix);
  }
  trunks.receiveShadow=true;leaves.receiveShadow=true;group.add(trunks,leaves);

  function update(playerPos){
    const inside=buildingAt(playerPos.x,playerPos.z);
    for(const r of roofs){const fade=inside===r.b;r.mesh.material.opacity=fade?.18:1;r.mesh.material.depthWrite=!fade}
  }
  return {update,roofs,terrain};
}
