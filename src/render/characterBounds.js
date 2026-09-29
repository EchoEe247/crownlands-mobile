import * as THREE from '../../vendor/three.module.js';

const DEFAULT_EXCLUDES=['weapon'];

function excludedByAncestor(object,root,prefixes){
  let n=object;
  while(n&&n!==root){
    const name=(n.name||'').toLowerCase();
    if(prefixes.some(p=>name.startsWith(p)))return true;
    n=n.parent;
  }
  return false;
}

// Bounds for the humanoid itself, deliberately excluding tall held equipment.
// The guard spear is ~3.39 units tall while the guard body is ~1.87, so using
// generic setFromObject() makes a "1.8 m" guard body only about 1 m tall.
export function characterBodyBox(root,{excludePrefixes=DEFAULT_EXCLUDES}={}){
  root.updateMatrixWorld(true);
  const out=new THREE.Box3();
  const tmp=new THREE.Box3();
  root.traverse(o=>{
    if(!o.isMesh||excludedByAncestor(o,root,excludePrefixes)||!o.geometry)return;
    if(!o.geometry.boundingBox)o.geometry.computeBoundingBox();
    if(!o.geometry.boundingBox)return;
    tmp.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
    out.union(tmp);
  });
  return out;
}

export function fitCharacterHeight(root,height,options){
  let box=characterBodyBox(root,options),size=new THREE.Vector3();
  box.getSize(size);
  const scale=height/Math.max(.01,size.y);
  root.scale.setScalar(scale);
  box=characterBodyBox(root,options);
  root.position.y-=box.min.y;
  return {scale,bodyHeight:size.y};
}
