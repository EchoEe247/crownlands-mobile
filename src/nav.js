// Waypoint navigation: auto-generated grid + road + door nodes, line-of-sight edges, A*, path smoothing.
import {RECTS,BUILDINGS,ROADS,WALL,BM} from './layout.js';

const CELL=16,PAD=.42;
const nodes=[]; // {x,z,r}
const rectHash=new Map();
function hkey(cx,cz){return cx*4096+cz}
RECTS.forEach((r,i)=>{for(let cx=Math.floor((r.x1-1)/CELL);cx<=Math.floor((r.x2+1)/CELL);cx++)for(let cz=Math.floor((r.z1-1)/CELL);cz<=Math.floor((r.z2+1)/CELL);cz++){const k=hkey(cx+100,cz+100);let a=rectHash.get(k);if(!a)rectHash.set(k,a=[]);a.push(i)}});
let stampN=0;const stamp=new Int32Array(RECTS.length);

export function segClear(x0,z0,x1,z1,pad=PAD){
  const minx=Math.min(x0,x1)-pad,maxx=Math.max(x0,x1)+pad,minz=Math.min(z0,z1)-pad,maxz=Math.max(z0,z1)+pad;stampN++;
  for(let cx=Math.floor(minx/CELL);cx<=Math.floor(maxx/CELL);cx++)for(let cz=Math.floor(minz/CELL);cz<=Math.floor(maxz/CELL);cz++){
    const a=rectHash.get(hkey(cx+100,cz+100));if(!a)continue;
    for(const i of a){if(stamp[i]===stampN)continue;stamp[i]=stampN;const r=RECTS[i];
      const rx1=r.x1-pad,rx2=r.x2+pad,rz1=r.z1-pad,rz2=r.z2+pad;
      if(maxx<rx1||minx>rx2||maxz<rz1||minz>rz2)continue;
      // slab test
      let t0=0,t1=1;const dx=x1-x0,dz=z1-z0;let hit=true;
      for(const [p,d,lo,hi] of [[x0,dx,rx1,rx2],[z0,dz,rz1,rz2]]){
        if(Math.abs(d)<1e-9){if(p<lo||p>hi){hit=false;break}}
        else{let a1=(lo-p)/d,a2=(hi-p)/d;if(a1>a2)[a1,a2]=[a2,a1];t0=Math.max(t0,a1);t1=Math.min(t1,a2);if(t0>t1){hit=false;break}}}
      if(hit)return false}}
  return true}
function insideAny(x,z,pad){for(const r of RECTS)if(x>r.x1-pad&&x<r.x2+pad&&z>r.z1-pad&&z<r.z2+pad)return true;return false}
function grid(x0,z0,x1,z1,step,skip){for(let x=x0;x<=x1;x+=step)for(let z=z0;z<=z1;z+=step){if(skip&&skip(x,z))continue;if(insideAny(x,z,.9))continue;nodes.push({x,z,r:step*1.55})}}
const inB=(x,z)=>BUILDINGS.some(b=>x>b.x0-.6&&x<b.x1+.6&&z>b.z0-.6&&z<b.z1+.6);
grid(WALL.x0+2,WALL.z0+3,WALL.x1-2,WALL.z1-2,4,inB);
grid(48,-48,136,48,5,inB);
grid(158,-12,232,72,6,(x,z)=>inB(x,z)||Math.abs(x-236)<7);
grid(196,-116,234,-68,5,inB);
grid(284,164,322,200,5,inB);
grid(BM.x0+2,BM.z0+3,BM.x1-2,BM.z1-2,4,inB);
grid(36,-76,66,-52,5,inB);
grid(BM.x0-14,BM.gate.z-12,BM.x0,BM.gate.z+12,4,inB);
// road nodes
for(const name in ROADS){const pl=ROADS[name];for(let i=0;i<pl.length-1;i++){const [ax,az]=pl[i],[bx,bz]=pl[i+1],L=Math.hypot(bx-ax,bz-az),n=Math.max(1,Math.ceil(L/10));for(let k=0;k<=n;k++){const t=k/n;const x=ax+(bx-ax)*t,z=az+(bz-az)*t;if(!insideAny(x,z,.6))nodes.push({x,z,r:15})}}}
// door + interior nodes
for(const b of BUILDINGS){const d=b.door;nodes.push({x:d.out.x,z:d.out.z,r:9},{x:d.x,z:d.z,r:5},{x:d.in.x,z:d.in.z,r:8});nodes.push({x:b.cx,z:b.cz,r:Math.max(b.w,b.d)*.75});
  for(let x=b.x0+1.5;x<b.x1-1;x+=3)for(let z=b.z0+1.5;z<b.z1-1;z+=3)nodes.push({x,z,r:5.5})}
// bridge nodes
for(let x=222;x<=250;x+=4)nodes.push({x,z:62,r:8});
const N=nodes.length;
// spatial hash of nodes
const nh=new Map();nodes.forEach((n,i)=>{const k=hkey(Math.floor(n.x/12)+100,Math.floor(n.z/12)+100);let a=nh.get(k);if(!a)nh.set(k,a=[]);a.push(i)});
function near(x,z,rad){const out=[],c0=Math.floor((x-rad)/12),c1=Math.floor((x+rad)/12),d0=Math.floor((z-rad)/12),d1=Math.floor((z+rad)/12);
  for(let cx=c0;cx<=c1;cx++)for(let cz=d0;cz<=d1;cz++){const a=nh.get(hkey(cx+100,cz+100));if(a)for(const i of a)out.push(i)}return out}
const adj=Array.from({length:N},()=>[]);
for(let i=0;i<N;i++){const a=nodes[i];for(const j of near(a.x,a.z,16)){if(j<=i)continue;const b=nodes[j],d=Math.hypot(a.x-b.x,a.z-b.z);if(d>Math.max(a.r,b.r)||d<.01)continue;if(segClear(a.x,a.z,b.x,b.z,.35)){adj[i].push([j,d]);adj[j].push([i,d])}}}
export const navStats={nodes:N,edges:adj.reduce((s,a)=>s+a.length,0)/2};

function nearestNodes(x,z){
  for(const rad of[8,18,40]){const c=near(x,z,rad).map(i=>[i,Math.hypot(nodes[i].x-x,nodes[i].z-z)]).filter(([,d])=>d<=rad).sort((a,b)=>a[1]-b[1]);
    const ok=[];for(const [i,d] of c){if(segClear(x,z,nodes[i].x,nodes[i].z,.3)){ok.push(i);if(ok.length>=3)break}}if(ok.length)return ok}
  let best=0,bd=1e9;for(let i=0;i<N;i++){const d=Math.hypot(nodes[i].x-x,nodes[i].z-z);if(d<bd){bd=d;best=i}}return[best]}
// binary heap
class Heap{constructor(){this.a=[]}push(v,p){const a=this.a;a.push([v,p]);let i=a.length-1;while(i>0){const q=(i-1)>>1;if(a[q][1]<=a[i][1])break;[a[q],a[i]]=[a[i],a[q]];i=q}}
  pop(){const a=this.a,t=a[0],l=a.pop();if(a.length){a[0]=l;let i=0;for(;;){let m=i,L=2*i+1,R=L+1;if(L<a.length&&a[L][1]<a[m][1])m=L;if(R<a.length&&a[R][1]<a[m][1])m=R;if(m===i)break;[a[m],a[i]]=[a[i],a[m]];i=m}}return t}get size(){return this.a.length}}
const g=new Float32Array(N),came=new Int32Array(N),seen=new Int32Array(N);let seenN=0;
function astar(starts,goals,ex,ez,sx,sz){
  seenN++;const h=new Heap();const goalSet=new Set(goals);
  for(const s of starts){const c=Math.hypot(nodes[s].x-sx,nodes[s].z-sz);g[s]=c;came[s]=-1;seen[s]=seenN;h.push(s,c+Math.hypot(nodes[s].x-ex,nodes[s].z-ez))}
  const done=new Set();
  while(h.size){const [u]=h.pop();if(done.has(u))continue;done.add(u);
    if(goalSet.has(u)){const p=[];for(let c=u;c!==-1;c=came[c])p.push(c);return p.reverse()}
    for(const [v,d] of adj[u]){const ng=g[u]+d;if(seen[v]!==seenN||ng<g[v]){seen[v]=seenN;g[v]=ng;came[v]=u;h.push(v,ng+Math.hypot(nodes[v].x-ex,nodes[v].z-ez))}}}
  return null}
function smooth(pts){if(pts.length<3)return pts;const out=[];let i=0;
  while(i<pts.length-1){let j=pts.length-1;while(j>i+1&&!segClear(pts[i].x,pts[i].z,pts[j].x,pts[j].z,.32))j--;out.push(pts[j]);i=j}return out}
const cache=new Map();
/** Path from (x0,z0) to (x1,z1): array of {x,z} waypoints (start excluded, end included). */
export function findPath(x0,z0,x1,z1){
  if(segClear(x0,z0,x1,z1,.32))return[{x:x1,z:z1}];
  const key=Math.round(x0/3)+','+Math.round(z0/3)+'>'+Math.round(x1/3)+','+Math.round(z1/3);
  let ids=cache.get(key);
  if(!ids){const S=nearestNodes(x0,z0),E=nearestNodes(x1,z1);ids=astar(S,E,x1,z1,x0,z0);if(!ids)return[];if(cache.size>600)cache.clear();cache.set(key,ids)}
  const pts=[{x:x0,z:z0},...ids.map(i=>({x:nodes[i].x,z:nodes[i].z})),{x:x1,z:z1}];
  return smooth(pts)}
export const pathLength=p=>{let l=0;for(let i=1;i<p.length;i++)l+=Math.hypot(p[i].x-p[i-1].x,p[i].z-p[i-1].z);return l};