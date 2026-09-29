// Actor model + plan/step engine. Actors follow role planners (schedules) unless a royal order or combat overrides.
// Plans are memoised objects {key, seq:[steps], once?}. Steps: {place,spot,i,pos,dur,pose,label,hook,carry,follow}
import {S,hour,emit} from './core.js';
import {findPath} from '../nav.js';
import {byId,spotsOf,anchorOf,buildingAt,blockedAt} from '../layout.js';
import {dist,angDiff,rnd,rr,clamp} from '../util.js';

export const actors=[];
export const A=new Map();
export const planners={};
export const hooks={};
export const registerPlanner=(role,fn)=>{planners[role]=fn};
export const registerHook=(name,fn)=>{hooks[name]=fn};
export const player={x:0,y:0,z:9,yaw:0,seated:false,building:null};
let nextId=1;
const planCache=new Map();
export function plan(key,build){let p=planCache.get(key);if(!p){p=build();p.key=key;planCache.set(key,p)}return p}
export const FAR=95,NEAR=78;
const usedBeds={};

export function makeActor(o){
  const a={id:o.id||('a'+(nextId++)),name:'Villager',role:'villager',team:'crown',rank:0,
    x:0,z:0,y:0,yaw:0,speed:1.35,run:false,idx:actors.length,
    hp:100,maxhp:100,alive:true,morale:70,loyalty:60,atk:9,def:1,range:1.3,cool:0,
    home:null,bed:null,bedIdx:0,work:null,mess:null,watch:null,company:-1,boss:null,
    look:{},hero:null,pose:'stand',carry:null,label:'',lod:0,vis:true,
    plan:null,step:0,stepT:0,state:'dwell',path:null,pi:0,tPlan:rnd()*1.2,order:null,fight:null,inside:null,dead:0,fed:1,flags:{},...o};
  a.idx=actors.length;actors.push(a);A.set(a.id,a);
  if(a.home&&byId[a.home]&&!o.noBed)assignBed(a,a.home);
  return a}
export function assignBed(a,bid){const b=byId[bid];if(!b)return;const beds=b.spots.bed||[];const u=usedBeds[bid]||(usedBeds[bid]=new Set());let i=0;while(u.has(i))i++;u.add(i);a.home=bid;a.bedIdx=i;a.bedSlot=i<beds.length?'bed':'rest'}
export function releaseBed(a){const u=usedBeds[a.home];if(u)u.delete(a.bedIdx)}
export function removeActor(a){releaseBed(a);const i=actors.indexOf(a);if(i>=0)actors.splice(i,1);A.delete(a.id);actors.forEach((x,k)=>x.idx=k)}
export const byRole=(r)=>actors.filter(a=>a.alive&&a.role===r);
export const byTeam=(t)=>actors.filter(a=>a.alive&&a.team===t);

// ---- resolving a step into a concrete position ------------------------------------------------
export function resolve(a,st){
  if(st.pos)return{x:st.pos.x,z:st.pos.z,yaw:st.yaw??a.yaw,y:st.y||0,bld:st.bld?byId[st.bld]:buildingAt(st.pos.x,st.pos.z)};
  const pl=st.place,b=byId[pl]||null;let sp=null;
  const spots=spotsOf(pl)?.[st.spot||'stand'];
  if(spots&&spots.length){const idx=st.i!=null?st.i:a.idx;sp=spots[Math.abs(idx)%spots.length]}
  if(!sp&&st.spot==='bed'&&b){const r=b.spots.rest||b.spots.stand;sp=r[(a.bedIdx)%r.length];sp={...sp,y:.05}}
  if(!sp){const an=anchorOf(pl)||{x:a.x,z:a.z};sp={x:an.x,z:an.z,yaw:a.yaw}}
  return{x:sp.x+(st.jx||0),z:sp.z+(st.jz||0),yaw:sp.yaw||0,y:(sp.y||0)+(st.y||0),bld:b,sit:sp.sit}}
function routeTo(a,t){
  const pts=[];let cx=a.x,cz=a.z;const from=buildingAt(cx,cz),to=t.bld;
  if(from&&from!==to){pts.push({x:from.door.in.x,z:from.door.in.z},{x:from.door.x,z:from.door.z},{x:from.door.out.x,z:from.door.out.z});cx=from.door.out.x;cz=from.door.out.z}
  if(to&&to!==from){pts.push(...findPath(cx,cz,to.door.out.x,to.door.out.z));pts.push({x:to.door.x,z:to.door.z},{x:to.door.in.x,z:to.door.in.z},{x:t.x,z:t.z})}
  else pts.push(...findPath(cx,cz,t.x,t.z));
  return pts}

// ---- step lifecycle ---------------------------------------------------------------------------
export const curStep=a=>a.plan?a.plan.seq[a.step]:null;
function beginStep(a){
  const st=curStep(a);if(!st){a.path=null;return}
  a.target=st.follow?null:resolve(a,st);a.stepT=0;a.arrived=false;
  if(st.follow){a.state='walk';a.path=null;a.rp=0;return}
  if(a.lod===2||st.snap){settle(a);return}
  const t=a.target;
  if(dist(a.x,a.z,t.x,t.z)<.25&&(!t.bld||buildingAt(a.x,a.z)===t.bld)){arrive(a);return}
  a.path=routeTo(a,t);a.pi=0;a.state='walk'}
function arrive(a){const st=curStep(a),t=a.target;a.state='dwell';a.path=null;a.arrived=true;a.stepT=0;
  if(t){a.x=t.x;a.z=t.z;a.tyaw=t.yaw}
  const p=a.plan;if(st){if(st.hook)hooks[st.hook]?.(a,st,'arrive');}}
function endStep(a){const st=curStep(a);if(st?.hook)hooks[st.hook]?.(a,st,'done');if(st?.prod)emit('workDone',{a,step:st,prod:st.prod});
  const p=a.plan;a.step++;
  if(a.step>=p.seq.length){if(p.once){finishPlan(a);return}a.step=0}
  beginStep(a)}
function finishPlan(a){if(a.order){a.order.status='done';emit('orderDone',{a,order:a.order});a.order=null}a.plan=null;a.tPlan=0}
/** put a far actor at the position it would plausibly hold now */
export function settle(a){
  const p=a.plan;if(!p)return;let st=curStep(a);
  if(p.seq.length>1&&!p.once&&!st?.follow){a.step=Math.floor(S.clock*1.6+a.idx*3)%p.seq.length;st=p.seq[a.step]}
  if(!st)return;
  if(st.follow){const f=followPoint(a,st);a.x=f.x;a.z=f.z;a.state='walk';return}
  const t=resolve(a,st);a.target=t;a.x=t.x;a.z=t.z;a.y=t.y;a.yaw=t.yaw;a.state='dwell';a.path=null;a.arrived=true;a.stepT=0;a.tyaw=t.yaw;
  a.pose=st.pose||'stand';a.carry=st.carry||null}
export function followPoint(a,st){
  const off=st.off||[0,-2];const yaw=player.yaw,fx=Math.sin(yaw),fz=Math.cos(yaw),rx=fz,rz=-fx;
  return{x:player.x+rx*off[0]+fx*off[1],z:player.z+rz*off[0]+fz*off[1]}}

// ---- orders (royal orders override schedules; when finished the actor resumes routine) -----------
let orderId=1;
export function issueOrder(a,ord){
  a.order={id:orderId++,issued:S.clock,status:'active',priority:2,issuer:'king',...ord};
  const o=a.order,seq=[];
  if(o.type==='goto')seq.push({place:o.place,spot:o.spot||'stand',i:o.i,pos:o.pos,dur:o.dur||14,pose:o.pose||'stand',label:o.label||('On the king\'s errand: '+(o.what||'attending'))});
  else if(o.type==='follow')seq.push({follow:true,off:o.off||[0,-2.4],dur:1e9,pose:'stand',label:'Following the King'});
  else if(o.type==='post')seq.push({place:o.place,spot:o.spot||'guard',i:o.i,pos:o.pos,dur:1e9,pose:o.pose||'post',label:o.label||'Standing guard by royal order'});
  else if(o.type==='work')seq.push({place:o.place,spot:o.spot||'stand',i:o.i,dur:o.cycle||40,pose:o.pose||'stand',label:o.label||'Working by royal order',prod:o.prod,hook:o.hook,carry:o.carry});
  else if(o.type==='patrol')for(const p of (o.route||[]))seq.push({pos:{x:p[0]??p.x,z:p[1]??p.z},dur:o.pause||8,pose:'post',label:o.label||'Patrolling by royal order'});
  a.plan={key:'order'+o.id,seq,once:o.type==='goto',order:true};a.step=0;beginStep(a);
  if(o.until==null&&o.type!=='goto')o.until=S.clock+(o.hours||3);
  emit('order',{a,order:o});return o}
export function cancelOrder(a){if(a.order){a.order.status='cancelled';a.order=null;a.plan=null;a.tPlan=0}}
export function cancelOrders(filter){for(const a of actors)if(a.order&&(!filter||filter(a)))cancelOrder(a)}

// ---- per-actor update ------------------------------------------------------------------------------
const SPEED_SCALE=1;
function replan(a){
  if(a.order&&a.order.until&&S.clock>a.order.until){cancelOrder(a)}
  let p;
  if(a.order)p=a.plan&&a.plan.order?a.plan:null;
  else{const f=planners[a.role]||planners.default;p=f?f(a,hour(),S):null}
  if(p&&p!==a.plan){a.plan=p;a.step=0;beginStep(a)}}
export function updateLOD(a){
  const d=dist(a.x,a.z,player.x,player.z);
  if(a.lod===0&&d>FAR){a.lod=2;settle(a)}
  else if(a.lod===2&&d<NEAR){a.lod=0;settle(a)}}
export function simActor(a,dt){
  if(!a.alive){a.dead+=dt;return}
  updateLOD(a);
  a.tPlan-=dt;if(a.tPlan<=0){a.tPlan=a.lod?3.5:.9+rnd()*.5;if(!a.fight)replan(a)}
  if(a.fight)return;
  const st=curStep(a);if(!st){a.pose='stand';return}
  if(st.follow){followStep(a,st,dt);return}
  if(a.lod===2){a.stepT+=dt;if(st.dur<1e8&&a.stepT>=st.dur)endStep(a);return}
  if(a.state==='walk')walk(a,dt,st);
  else{a.stepT+=dt;a.pose=st.pose||'stand';a.carry=st.carry??null;
    if(a.tyaw!=null){const d=angDiff(a.yaw,a.tyaw);a.yaw+=d*Math.min(1,dt*6)}
    if(a.target&&Math.abs(a.y-a.target.y)>.005)a.y+=(a.target.y-a.y)*Math.min(1,dt*7);
    if(st.dur<1e8&&a.stepT>=st.dur)endStep(a)}}
function walk(a,dt,st){
  const p=a.path&&a.path[a.pi];if(!p){arrive(a);return}
  const dx=p.x-a.x,dz=p.z-a.z,d=Math.hypot(dx,dz),sp=a.speed*(a.run?2.2:1)*SPEED_SCALE*dt;
  a.pose=a.run?'run':'walk';a.carry=st.carry??a.carryWalk??null;
  if(d<=sp+.02){a.x=p.x;a.z=p.z;a.pi++;if(a.pi>=a.path.length){arrive(a)}}
  else{
    let nx=a.x+dx/d*sp,nz=a.z+dz/d*sp;
    if(blockedAt(nx,nz,.28)){
      const target=a.target||p,repath=findPath(a.x,a.z,target.x,target.z);
      if(repath.length){a.path=repath;a.pi=0;return}
      a.state='dwell';a.path=null;a.tPlan=0;return
    }
    a.x=nx;a.z=nz;const ty=Math.atan2(dx,dz);a.yaw+=angDiff(a.yaw,ty)*Math.min(1,dt*9)
  }
  if(a.y>.01){a.y*=Math.max(0,1-dt*8)}}
function followStep(a,st,dt){
  const f=followPoint(a,st),dx=f.x-a.x,dz=f.z-a.z,d=Math.hypot(dx,dz);
  if(a.lod===2||d>28){a.x=f.x;a.z=f.z;a.pose='stand';return}
  if(d<.35){a.pose='stand';a.yaw+=angDiff(a.yaw,player.yaw)*Math.min(1,dt*5);return}
  const sp=a.speed*(d>4?2.4:d>1.6?1.6:1)*dt;a.pose=d>4?'run':'walk';
  let nx=a.x+dx/d*sp,nz=a.z+dz/d*sp;
  if(blockedAt(nx,nz,.28)){ if(!blockedAt(nx,a.z,.28))nz=a.z;else if(!blockedAt(a.x,nz,.28))nx=a.x;else{const pth=findPath(a.x,a.z,f.x,f.z);if(pth[0]){const q=pth[0],qd=Math.hypot(q.x-a.x,q.z-a.z)||1;nx=a.x+(q.x-a.x)/qd*sp;nz=a.z+(q.z-a.z)/qd*sp}}}
  a.x=nx;a.z=nz;a.yaw+=angDiff(a.yaw,Math.atan2(dx,dz))*Math.min(1,dt*9);a.y*=Math.max(0,1-dt*8)}

/** teleport an actor to wherever its schedule says it should be right now */
export function placeByPlan(a){a.plan=null;a.order=null;const f=planners[a.role]||planners.default;const p=f?f(a,hour(),S):null;if(p){a.plan=p;a.step=0;const st=p.seq[0];if(st&&!st.follow){const t=resolve(a,st);a.x=t.x;a.z=t.z;a.y=t.y;a.yaw=t.yaw;a.target=t;a.state='dwell';a.arrived=true}}}
export function stepAll(dt){for(let i=0;i<actors.length;i++)simActor(actors[i],dt)}
export const activityOf=a=>{if(!a.alive)return 'Fallen';if(a.fight)return a.fight.label||'Fighting';const st=curStep(a);const w=a.state==='walk'&&st&&!st.follow?'Heading out — ':'';return st?.label?w+st.label:(a.plan?.label||'Idle')};
export const isInside=a=>buildingAt(a.x,a.z);