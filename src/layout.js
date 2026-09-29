// World layout shared by simulation (spots, navigation) and renderer (geometry).
// x = east, z = south, y = up. Castle centre at (0,0); throne plaza is the GLB courtyard (±8).
import {clamp} from './util.js';

export const WALL={x0:-46,x1:46,z0:-34,z1:30,t:1.3,h:4.2};
export const GATE={x:46,z:0,half:3};
export const WORLD={x0:-80,x1:500,z0:-170,z1:330};
export const RIVER=[[232,-170],[234,-60],[238,20],[236,62],[240,110],[248,170],[262,330]];
export const BRIDGE={x0:226,x1:246,z:62,w:6};
export const ROADS={
  main:[[46,0],[80,0],[122,0],[150,8],[170,26],[190,42],[214,56],[236,62],[262,74],[292,100],[326,136],[360,180],[384,224],[398,255]],
  stonehollow:[[150,8],[170,-22],[190,-52],[208,-78],[222,-92]],
  ashwood:[[326,136],[314,160],[304,182]],
  lumber:[[70,-2],[64,-30],[58,-56],[56,-66]],
  north:[[122,0],[140,-40],[150,-100],[146,-165]]   // Highmoor road (Kestrel envoys arrive along it)
};
export const DISTRICTS=[ // for HUD zone label (first match wins)
  {n:'BLACKMERE KEEP',x0:385,x1:475,z0:220,z1:290},
  {n:'ASHWOOD CAMP',x0:280,x1:330,z0:160,z1:210},
  {n:'KINGSBRIDGE',x0:212,x1:256,z0:40,z1:84},
  {n:'STONEHOLLOW',x0:196,x1:245,z0:-115,z1:-70},
  {n:'MILLBROOK',x0:160,x1:212,z0:8,z1:70},
  {n:'LOWER VILLAGE & FARMS',x0:48,x1:140,z0:-70,z1:50},
  {n:'ROYAL COURT',x0:-9,x1:9,z0:-9,z1:9},
  {n:'BARRACKS & TRAINING YARD',x0:-47,x1:-12,z0:-35,z1:31},
  {n:'GREAT HALL & KITCHENS',x0:-13,x1:27,z0:12,z1:31},
  {n:'MARKET & MAIN GATE',x0:24,x1:47,z0:-20,z1:12},
  {n:'ROYAL CASTLE',x0:-47,x1:47,z0:-35,z1:31},
  {n:'THE ROYAL ROAD',x0:-1e4,x1:1e4,z0:-1e4,z1:1e4}
];
export const zoneAt=(x,z)=>{for(const d of DISTRICTS)if(x>=d.x0&&x<=d.x1&&z>=d.z0&&z<=d.z1)return d.n;return 'THE WILDS'};

const T=.5, DOORW=1.25;
export const BUILDINGS=[];
export const byId={};
const roofs={red:0x7a2531,brown:0x5b4030,slate:0x4a5058,thatch:0xa08a52,green:0x2f4a3a,black:0x2a2b30};
export function addBuilding(o){
  const b={roof:'red',wall:0xb9a98a,district:'castle',faction:'crown',h:3.2,...o};
  b.roofColor=roofs[b.roof]??b.roof;
  const d=b.door,g=DOORW;
  const c={N:{x:d.at,z:b.z0},S:{x:d.at,z:b.z1},W:{x:b.x0,z:d.at},E:{x:b.x1,z:d.at}}[d.side];
  const n={N:[0,-1],S:[0,1],W:[-1,0],E:[1,0]}[d.side];
  d.x=c.x;d.z=c.z;d.nx=n[0];d.nz=n[1];
  d.out={x:c.x+n[0]*2.2,z:c.z+n[1]*2.2};d.in={x:c.x-n[0]*1.6,z:c.z-n[1]*1.6};
  b.cx=(b.x0+b.x1)/2;b.cz=(b.z0+b.z1)/2;b.w=b.x1-b.x0;b.d=b.z1-b.z0;
  // wall rects (collision + navigation blockers) with a door gap
  const R=[],seg=(x1,z1,x2,z2)=>{if(x2-x1>.05&&z2-z1>.05)R.push({x1,z1,x2,z2})};
  const side=(s,x1,z1,x2,z2,horiz)=>{if(d.side!==s){seg(x1,z1,x2,z2);return}
    if(horiz){seg(x1,z1,d.at-g,z2);seg(d.at+g,z1,x2,z2)}else{seg(x1,z1,x2,d.at-g);seg(x1,d.at+g,x2,z2)}};
  side('N',b.x0,b.z0,b.x1,b.z0+T,true);side('S',b.x0,b.z1-T,b.x1,b.z1,true);
  side('W',b.x0,b.z0+T,b.x0+T,b.z1-T,false);side('E',b.x1-T,b.z0+T,b.x1,b.z1-T,false);
  b.walls=R;b.spots=interior(b);BUILDINGS.push(b);byId[b.id]=b;return b;
}
function beds(b,n,pitch=1.55){const out=[],rows=[b.z0+1.7,b.z1-1.7];
  for(let r=0;r<2&&out.length<n;r++)for(let x=b.x0+1.3;x<=b.x1-1.3&&out.length<n;x+=pitch){
    if(((b.door.side==='N'&&r===0)||(b.door.side==='S'&&r===1))&&Math.abs(x-b.door.at)<1.7)continue;
    out.push({x,z:rows[r],yaw:r===0?Math.PI:0,y:.5})}
  if(out.length<n){const mz=b.cz;for(let x=b.x0+2.4;x<=b.x1-2.4&&out.length<n;x+=pitch)out.push({x,z:mz,yaw:0,y:.5})}
  return out}
function tables(b,rowsZ,len,inset){const T=[],seats=[];
  for(const z of rowsZ){const x0=b.cx-len/2;T.push({x:b.cx,z,w:len,d:1.1});
    for(let x=x0+.6;x<x0+len;x+=1.05){seats.push({x,z:z-1.0,yaw:0,y:.42,sit:1});seats.push({x,z:z+1.0,yaw:Math.PI,y:.42,sit:1})}}
  return {tables:T,seats}}
function interior(b){const S={},c=b.cx,z=b.cz;
  const at=(dx,dz,yaw=0,extra)=>({x:b.x0+dx,z:b.z0+dz,yaw,...extra});
  switch(b.kind){
   case'house':S.bed=beds(b,b.beds||2);S.home=[{x:c,z:z,yaw:0}];S.seat=[{x:c-1,z:z+.4,yaw:Math.PI/2,y:.42,sit:1},{x:c+1,z:z+.4,yaw:-Math.PI/2,y:.42,sit:1}];S.work=[{x:c,z:z-.6,yaw:0}];break;
   case'barracks':case'guardQ':S.bed=beds(b,b.beds||12,1.5);S.rest=[{x:c,z:z,yaw:0},{x:c-2,z:z,yaw:1},{x:c+2,z:z,yaw:-1}];S.maint=[{x:c-1,z:z,yaw:0},{x:c+1,z:z+.3,yaw:0}];break;
   case'hall':case'mess':case'tavern':{const rows=b.kind==='hall'?[b.z0+3.3,b.z1-3.3]:b.kind==='mess'?[b.cz-1.6,b.cz+1.6]:[b.cz];
     const t=tables(b,rows,Math.min(b.w-4,b.kind==='hall'?18:8));b.tables=t.tables;S.seat=t.seats;
     S.stand=[{x:c,z:z,yaw:0},{x:c-3,z:z,yaw:1},{x:c+3,z:z,yaw:-1},{x:c,z:z+1.5,yaw:3}];
     if(b.kind==='tavern')S.bar=[{x:b.x1-1.8,z:b.z0+1.8,yaw:Math.PI/2}];break}
   case'kitchen':S.cook=[at(2,2,0),at(4,2,0),at(6,2,0)];S.prep=[at(3,b.d-2.2,Math.PI),at(5.5,b.d-2.2,Math.PI)];S.store=[at(b.w-1.8,b.d/2,-Math.PI/2)];S.stand=[{x:c,z:z+.5,yaw:0}];b.stoves=[at(2,1.1),at(4,1.1),at(6,1.1)];break;
   case'smith':S.forge=[at(2,2,0)];S.anvil=[at(4,3,Math.PI/2),at(4,4.6,Math.PI/2)];S.stand=[{x:c,z:z+1,yaw:0}];S.store=[at(b.w-1.5,b.d-1.5,0)];break;
   case'stable':S.tend=[at(1.6,2,0),at(1.6,4,0),at(1.6,6,0)];S.stand=[{x:c+1,z:z,yaw:0}];S.horse=[at(1.2,3,Math.PI/2),at(1.2,6.5,Math.PI/2)];break;
   case'chapel':{const pews=[];for(let i=0;i<3;i++)for(const sx of[-1.4,1.4])pews.push({x:c+sx,z:b.z0+4.5+i*1.5,yaw:Math.PI,y:.4,sit:1});S.pew=pews;S.altar=[{x:c,z:b.z0+1.8,yaw:0}];S.stand=[{x:c,z:z+1.2,yaw:Math.PI}];S.tend=[{x:b.x1-1.8,z:b.z1-2,yaw:0}];break}
   case'treasury':S.desk=[at(2,2.2,0),at(b.w-2,2.2,0)];S.stand=[{x:c,z:z+.5,yaw:0}];S.chest=[at(b.w/2,b.d-1.5,Math.PI)];break;
   case'granary':S.store=[at(3,3,0),at(b.w-3,3,0),at(b.w/2,b.d-3,0)];S.stand=[{x:c,z:z,yaw:0}];break;
   case'apartments':S.bed=[{x:b.x0+3.4,z:b.z0+2.6,yaw:Math.PI,y:.55}];S.desk=[at(b.w-3,2.2,0)];S.stand=[{x:c,z:z+1,yaw:0}];S.wardrobe=[at(b.w-2,b.d-2,0)];break;
   case'war':S.map=[at(b.w/2-1.4,b.d/2,Math.PI/2),at(b.w/2+1.4,b.d/2,-Math.PI/2),at(b.w/2,b.d/2-1.2,0)];S.desk=[at(2,2,0)];S.stand=[{x:c,z:z,yaw:0}];break;
   case'armory':S.rack=[at(1.8,1.8,0),at(3.6,1.8,0),at(5.2,1.8,0)];S.stand=[{x:c,z:z,yaw:0}];S.store=[at(1.6,b.d-1.6,0)];break;
   case'mill':S.mill=[at(2.3,2.3,0)];S.stand=[{x:c,z:z,yaw:0}];S.store=[at(b.w-2,b.d-2,0)];break;
   case'keep':S.throne=[{x:b.x0+2.6,z:b.cz,yaw:Math.PI/2}];S.stand=[{x:c,z:z,yaw:0}];S.bed=beds(b,4,2);S.seat=[{x:c,z:z-2,yaw:Math.PI,y:.42,sit:1}];break;
   case'tower':S.stand=[{x:b.cx,z:b.cz,yaw:0}];S.bed=beds(b,3,1.5);break;
   default:S.stand=[{x:c,z:z,yaw:0}];S.bed=beds(b,b.beds||0)}
  return S}

// ---- Royal castle -------------------------------------------------------------------------------
addBuilding({id:'greatHall',kind:'hall',name:'Great Hall',x0:-12,z0:13,x1:12,z1:23,door:{side:'N',at:0},roof:'red'});
addBuilding({id:'kitchens',kind:'kitchen',name:'Kitchens & Bakery',x0:15,z0:14,x1:24,z1:22,door:{side:'N',at:20},roof:'brown'});
addBuilding({id:'apartments',kind:'apartments',name:'Royal Apartments',x0:-12,z0:-23,x1:12,z1:-13,door:{side:'S',at:0},roof:'red',h:3.6});
addBuilding({id:'treasury',kind:'treasury',name:'Treasury',x0:14,z0:-12,x1:22,z1:-4,door:{side:'W',at:-8},roof:'slate',wall:0x9a9384});
addBuilding({id:'granary',kind:'granary',name:'Royal Granary',x0:16,z0:-32,x1:28,z1:-22,door:{side:'S',at:22},roof:'thatch',wall:0xa89468});
addBuilding({id:'chapel',kind:'chapel',name:'Chapel & Infirmary',x0:34,z0:-32,x1:44,z1:-22,door:{side:'S',at:39},roof:'slate',wall:0xc7c0ae,h:4.2});
addBuilding({id:'guardQ',kind:'guardQ',name:'Royal Guard Quarters',x0:-31,z0:-26,x1:-19,z1:-16,door:{side:'E',at:-21},roof:'red',beds:18});
addBuilding({id:'armory',kind:'armory',name:'Armory',x0:-44,z0:-26,x1:-37,z1:-18,door:{side:'E',at:-22},roof:'slate',wall:0x8a8477});
addBuilding({id:'warRoom',kind:'war',name:"Marshal's War Room",x0:-18,z0:-33,x1:-8,z1:-27,door:{side:'S',at:-13},roof:'brown'});
addBuilding({id:'barracksA',kind:'barracks',name:'Garrison Barracks I',x0:-44,z0:-12,x1:-30,z1:-4,door:{side:'E',at:-8},roof:'brown',beds:16});
addBuilding({id:'barracksB',kind:'barracks',name:'Garrison Barracks II',x0:-44,z0:0,x1:-30,z1:8,door:{side:'E',at:4},roof:'brown',beds:16});
addBuilding({id:'garrisonMess',kind:'mess',name:'Garrison Mess',x0:-25,z0:-10,x1:-15,z1:-2,door:{side:'S',at:-20},roof:'brown'});
addBuilding({id:'smithy',kind:'smith',name:'Royal Smithy',x0:29,z0:12,x1:37,z1:20,door:{side:'N',at:33},roof:'slate',wall:0x8f8578});
addBuilding({id:'stable',kind:'stable',name:'Royal Stable',x0:52,z0:-15,x1:64,z1:-6,door:{side:'S',at:58},roof:'brown',wall:0x9a7a55});
addBuilding({id:'lodgings',kind:'barracks',name:'Servants Lodgings',x0:14,z0:-21,x1:25,z1:-14,door:{side:'S',at:19.5},roof:'brown',wall:0xb8aa8f,beds:14});
// towers (corners + mid) are rendered as solid rects
export const TOWERS=[];
for(const [x,z] of [[-46,-34],[46,-34],[-46,30],[46,30],[0,-34],[0,30],[-46,-2],[46,-16],[46,14]]) TOWERS.push({x,z,r:3.4,h:8.5,name:'tower'});
export const GATEHOUSE=[{x:46,z:-6.4,r:3.4},{x:46,z:6.4,r:3.4}];

// ---- Lower village & farms ----------------------------------------------------------------------
let hn=0;const vh=(x0,z0,x1,z1,side,at,o={})=>addBuilding({id:'vh'+(hn++),kind:'house',name:'Cottage',district:'village',x0,z0,x1,z1,door:{side,at},roof:'thatch',wall:0xc4b58f,h:2.6,beds:2,...o});
for(const x of[70,79,88,97])vh(x,-12,x+6.5,-6,'S',x+3.2);
for(const x of[68,86,95,104])vh(x,6,x+6.5,12,'N',x+3.2);
addBuilding({id:'tavern',kind:'tavern',name:'The Gilded Boar',district:'village',x0:106,z0:-15,x1:118,z1:-6,door:{side:'S',at:112},roof:'brown',wall:0xb5a27c,h:3.2});
addBuilding({id:'lumberCabin',kind:'house',name:'Woodcutters Lodge',district:'village',x0:50,z0:-70,x1:60,z1:-63,door:{side:'S',at:55},roof:'thatch',wall:0x8a6a48,h:2.6,beds:4});
export const WELLS=[{x:80,z:4.4,r:1.1},{x:35,z:-6.5,r:1.2}];
export const FIELDS=[{id:'f1',x0:66,z0:18,x1:96,z1:40},{id:'f2',x0:100,z0:18,x1:130,z1:40},{id:'f3',x0:66,z0:-42,x1:96,z1:-20},{id:'f4',x0:100,z0:-42,x1:130,z1:-22}];

// ---- Millbrook, bridge, Stonehollow, Ashwood ------------------------------------------------------
const mh=(id,x0,z0,x1,z1,side,at,dist='millbrook',o={})=>addBuilding({id,kind:'house',name:'Cottage',district:dist,x0,z0,x1,z1,door:{side,at},roof:'thatch',wall:0xc4b58f,h:2.6,beds:2,...o});
mh('mb1',168,14,174.5,20,'S',171);mh('mb2',178,-2,184.5,4,'S',181);mh('mb3',192,52,198.5,58,'N',195);mh('mb4',180,54,186.5,60,'N',183);
addBuilding({id:'mill',kind:'mill',name:'Millbrook Mill',district:'millbrook',x0:212,z0:28,x1:222,z1:36,door:{side:'S',at:217},roof:'brown',wall:0xb1a17a,h:4});
addBuilding({id:'bridgeTower',kind:'tower',name:'Kingsbridge Watch',district:'bridge',x0:216,z0:46,x1:224,z1:54,door:{side:'S',at:220},roof:'slate',wall:0x8f8a80,h:6,beds:4});
mh('sh1',200,-100,206,-95,'S',203,'stonehollow',{faction:'guild',roof:'slate',wall:0x8c877a});mh('sh2',212,-108,218,-103,'W',-105,'stonehollow',{faction:'guild',roof:'slate',wall:0x8c877a});
mh('sh3',222,-84,228,-79,'W',-82,'stonehollow',{faction:'guild',roof:'slate',wall:0x8c877a});
addBuilding({id:'smelter',kind:'smith',name:'Stonehollow Smelter',district:'stonehollow',faction:'guild',x0:206,z0:-88,x1:214,z1:-82,door:{side:'E',at:-85},roof:'black',wall:0x6c665d});
export const TENTS=[[292,182],[300,192],[310,180],[296,174],[312,194]];
export const CAMPFIRES={ashwood:[302,184]};

// ---- Blackmere Keep (rival castle) ----------------------------------------------------------------
export const BM={x0:398,z0:231,x1:462,z1:279,gate:{x:398,z:255}};
const rb=(o)=>addBuilding({district:'blackmere',faction:'valemar',wall:0x5a5d63,roof:'green',...o});
rb({id:'bmKeep',kind:'keep',name:'Blackmere Keep',x0:440,z0:244,x1:458,z1:266,door:{side:'W',at:255},roof:'black',h:8});
rb({id:'bmBarracks',kind:'barracks',name:'Valemar Barracks',x0:404,z0:262,x1:418,z1:274,door:{side:'N',at:411},beds:22,h:3.4});
rb({id:'bmHall',kind:'mess',name:'Valemar Mess',x0:422,z0:236,x1:434,z1:246,door:{side:'S',at:428},h:3.4});
rb({id:'bmSmith',kind:'smith',name:'Blackmere Forge',x0:424,z0:264,x1:434,z1:274,door:{side:'N',at:429}});
export const BMTOWERS=[[398,231],[462,231],[398,279],[462,279],[430,231],[430,279]].map(([x,z])=>({x,z,r:3.2,h:9,name:'bm'}));
export const BM_GATEHOUSE=[{x:398,z:249.6,r:3.2},{x:398,z:260.4,r:3.2}];

// ---- Wall colliders + solid props -----------------------------------------------------------------
export const SOLIDS=[];const S=(x1,z1,x2,z2,tag)=>SOLIDS.push({x1,z1,x2,z2,tag});
const th=WALL.t;
S(WALL.x0,WALL.z0,WALL.x1,WALL.z0+th,'wall');S(WALL.x0,WALL.z1-th,WALL.x1,WALL.z1,'wall');S(WALL.x0,WALL.z0,WALL.x0+th,WALL.z1,'wall');
S(WALL.x1-th,WALL.z0,WALL.x1,-GATE.half,'wall');S(WALL.x1-th,GATE.half,WALL.x1,WALL.z1,'wall');
for(const t of TOWERS)S(t.x-t.r*.8,t.z-t.r*.8,t.x+t.r*.8,t.z+t.r*.8,'tower');
for(const t of GATEHOUSE)S(t.x-t.r*.8,t.z-t.r*.8,t.x+t.r*.8,t.z+t.r*.8,'tower');
// Blackmere walls (gate gap on west wall)
S(BM.x0,BM.z0,BM.x1,BM.z0+th,'wall');S(BM.x0,BM.z1-th,BM.x1,BM.z1,'wall');S(BM.x1-th,BM.z0,BM.x1,BM.z1,'wall');
S(BM.x0,BM.z0,BM.x0+th,BM.gate.z-GATE.half,'wall');S(BM.x0,BM.gate.z+GATE.half,BM.x0+th,BM.z1,'wall');
for(const t of BMTOWERS)S(t.x-t.r*.8,t.z-t.r*.8,t.x+t.r*.8,t.z+t.r*.8,'tower');
for(const t of BM_GATEHOUSE)S(t.x-t.r*.8,t.z-t.r*.8,t.x+t.r*.8,t.z+t.r*.8,'tower');
// plaza props: palace house + throne + fountain
S(-4.2,-7.8,4.2,-3.2,'palace');S(-.75,5.45,.75,6.45,'throne');
for(const w of WELLS)S(w.x-w.r,w.z-w.r,w.x+w.r,w.z+w.r,'well');
export const STALLS=[[29,-13],[35,-13],[41,-13],[29,-7],[41,-7],[29,7],[35,7]];
for(const [x,z] of STALLS)S(x-1.5,z-.9,x+1.5,z+.9,'stall');
export const DUMMIES=[[-34,16],[-30,16],[-26,16],[-22,16],[-34,22],[-30,22],[-26,22],[-22,22]];
for(const [x,z] of DUMMIES)S(x-.4,z-.4,x+.4,z+.4,'dummy');
export const BUTTS=[[-38,26],[-32,26],[-26,26]];
for(const [x,z] of BUTTS)S(x-.7,z-.3,x+.7,z+.3,'butt');
// river (deep water) except under the bridge
{const half=4.2;for(let i=0;i<RIVER.length-1;i++){const [ax,az]=RIVER[i],[bx,bz]=RIVER[i+1],n=Math.ceil(Math.hypot(bx-ax,bz-az)/6);
  for(let k=0;k<n;k++){const t=(k+.5)/n,x=ax+(bx-ax)*t,z=az+(bz-az)*t;if(Math.abs(z-BRIDGE.z)<BRIDGE.w*.5+1.5&&x>BRIDGE.x0-6&&x<BRIDGE.x1+6)continue;S(x-half,z-3.2,x+half,z+3.2,'water')}}}
export const solidRects=()=>{const r=[...SOLIDS];for(const b of BUILDINGS)for(const w of b.walls)r.push({...w,tag:'bwall'});return r};
export const RECTS=solidRects();
// Movable gate (closed = solid)
export const gateRect={x1:WALL.x1-th,z1:-GATE.half,x2:WALL.x1,z2:GATE.half,tag:'gate'};
export const bmGateRect={x1:BM.x0,z1:BM.gate.z-GATE.half,x2:BM.x0+th,z2:BM.gate.z+GATE.half,tag:'gate'};

// ---- Areas (non-building places) with spots ------------------------------------------------------
const row=(x,z,n,dx,dz,yaw=0,extra)=>Array.from({length:n},(_,i)=>({x:x+dx*i,z:z+dz*i,yaw,...extra}));
export const AREAS={
  plaza:{x:0,z:3,spots:{petition:row(-2,1.2,5,1,0,0),wait:[...row(-5,4,5,2.5,0,0),...row(-4,6.2,4,2.6,0,0)],stand:row(-6,-1,4,4,0,0),podium:[{x:0,z:1.4,yaw:Math.PI}],guard:[{x:-2.7,z:-1.2,yaw:0},{x:2.7,z:-1.2,yaw:0},{x:-1.6,z:.9,yaw:0},{x:1.6,z:.9,yaw:0},{x:-3.6,z:2.6,yaw:0},{x:3.6,z:2.6,yaw:0}],servant:[{x:-6.2,z:-5,yaw:0},{x:6.2,z:-5,yaw:0}],sweep:row(-6,4.5,6,2.4,.5,0)}},
  archway:{x:0,z:9.5,spots:{guard:[{x:-1.6,z:7.6,yaw:Math.PI},{x:1.6,z:7.6,yaw:Math.PI}]}},
  aptDoor:{x:0,z:-11.8,spots:{guard:[{x:-1.6,z:-11.6,yaw:0},{x:1.6,z:-11.6,yaw:0}]}},
  treasuryDoor:{x:12,z:-8,spots:{guard:[{x:12.4,z:-9.6,yaw:-1.6},{x:12.4,z:-6.4,yaw:-1.6}]}},
  gate:{x:41,z:0,spots:{guard:[{x:43,z:-1.9,yaw:1.57},{x:43,z:1.9,yaw:1.57},{x:48.6,z:-2.4,yaw:1.57},{x:48.6,z:2.4,yaw:1.57},{x:41.4,z:-4.6,yaw:1.57},{x:41.4,z:4.6,yaw:1.57}],defend:row(52,-6,6,0,2.4,1.57)}},
  market:{x:35,z:-2,spots:{stall:STALLS.map(([x,z])=>({x,z:z+(z<0?-1.4:1.4),yaw:z<0?0:Math.PI,stall:1})),browse:[{x:32,z:-4,yaw:0},{x:38,z:-3,yaw:1},{x:32,z:3.5,yaw:2},{x:38,z:4,yaw:3},{x:34,z:0,yaw:0},{x:40,z:-10,yaw:0},{x:31,z:-10,yaw:0}],well:[{x:35,z:-4.6,yaw:0}],stand:[{x:33,z:-1,yaw:1}]}},
  yard:{x:-26,z:10,spots:{drill:row(-38,11,6,4,0,0).concat(row(-38,13.5,6,4,0,0)),dummy:DUMMIES.map(([x,z])=>({x,z:z+1.1,yaw:Math.PI})),butt:BUTTS.map(([x,z])=>({x,z:z-4,yaw:0})),muster:row(-36,18,8,3.2,0,0).concat(row(-36,20,8,3.2,0,0)),rest:row(-38,29,5,4,0,0)}},
  wall:{x:0,z:-31,spots:{post:[]}},
  fields:{x:96,z:0,spots:{}},
  villageSquare:{x:88,z:0,spots:{stand:row(76,-2,8,3,0,0),well:[{x:80,z:4.4,yaw:0}],play:row(74,3,10,3,0,0)}},
  mbfield:{x:185,z:28,spots:{hoe:row(166,24,10,4,0,0).concat(row(166,32,10,4,0,0))}},
  lumber:{x:52,z:-62,spots:{chop:row(40,-72,5,4,-1.4,0),pile:[{x:56,z:-60,yaw:0}]}},
  roadWatch:{x:60,z:0,spots:{}},
  bridge:{x:236,z:62,spots:{post:[{x:226,z:57,yaw:Math.PI/2},{x:226,z:67,yaw:Math.PI/2},{x:246,z:57,yaw:-Math.PI/2},{x:246,z:67,yaw:-Math.PI/2},{x:236,z:59.4,yaw:0},{x:236,z:64.6,yaw:Math.PI}]}},
  ash:{x:302,z:184,spots:{fire:row(298,186,5,2,0,0,{sit:1,y:.3}),camp:TENTS.map(([x,z])=>({x:x+2.4,z:z+1,yaw:0})),sleep:TENTS.map(([x,z])=>({x:x,z:z,yaw:0,y:.3}))}},
  mine:{x:224,z:-96,spots:{dig:row(222,-102,3,2,0,0),cart:[{x:216,z:-92,yaw:0}],forge:[{x:210,z:-79,yaw:0}]}},
  bmGate:{x:392,z:255,spots:{guard:[{x:402,z:251,yaw:-1.57},{x:402,z:259,yaw:-1.57},{x:394,z:251,yaw:-1.57},{x:394,z:259,yaw:-1.57}],defend:row(388,247,6,0,3.2,-1.57)}},
  bmYard:{x:415,z:255,spots:{drill:row(408,250,5,3,0,0).concat(row(408,254,5,3,0,0)),stand:row(420,252,4,3,0,0)}},
  bmWall:{x:430,z:231,spots:{post:[]}},
  farmRoad:{x:100,z:0,spots:{}}
};
for(const f of FIELDS){
  const work=[];
  for(let x=f.x0+2;x<=f.x1-2;x+=4)for(let z=f.z0+2;z<=f.z1-2;z+=4)work.push({x,z,yaw:0});
  AREAS[f.id]={x:(f.x0+f.x1)/2,z:(f.z0+f.z1)/2,spots:{hoe:work,stand:work}};
}
// wall-walk posts (elevated y=3.4): castle + Blackmere, generated
{const p=AREAS.wall.spots.post,y=WALL.h-.5;
 for(let x=-40;x<=40;x+=10){p.push({x,z:WALL.z0+.7,yaw:0,y});p.push({x,z:WALL.z1-.7,yaw:Math.PI,y})}
 for(let z=-24;z<=24;z+=12){p.push({x:WALL.x0+.7,z,yaw:-1.57,y})}
 for(const z of[-14,14]){p.push({x:WALL.x1-.7,z,yaw:1.57,y})}
 const q=AREAS.bmWall.spots.post;for(let x=408;x<=456;x+=12){q.push({x,z:BM.z0+.7,yaw:0,y});q.push({x,z:BM.z1-.7,yaw:Math.PI,y})}for(const z of[240,270])q.push({x:BM.x1-.7,z,yaw:1.57,y})}
export const spotsOf=(place)=>byId[place]?byId[place].spots:AREAS[place]?.spots;
export function anchorOf(place){const b=byId[place];if(b)return{x:b.door.out.x,z:b.door.out.z};const a=AREAS[place];return a?{x:a.x,z:a.z}:null}
// route patrol polylines (list of [x,z])
export const ROUTES={
  castle:[[-6,10],[-8,-10],[-22,-12],[-22,4],[-8,12],[10,12],[26,-2],[40,-8],[24,-2],[8,-12],[0,-12]],
  walls:[[-38,-30],[0,-30],[38,-30],[40,0],[38,26],[0,26],[-38,26],[-40,0]],
  road:[[50,4],[90,3],[120,-3],[150,6],[190,40],[222,58],[190,40],[150,6],[90,-3]],
  village:[[52,3],[70,0],[92,3],[112,-3],[92,-3],[70,3]],
  border:[[236,62],[262,74],[292,100],[326,136],[292,100],[262,74]],
  scout:[[236,62],[292,100],[340,150],[372,200],[340,150],[292,100]]
};
export function buildingAt(x,z,pad=0){for(const b of BUILDINGS)if(x>b.x0-pad&&x<b.x1+pad&&z>b.z0-pad&&z<b.z1+pad)return b;return null}
export const inCastle=(x,z)=>x>WALL.x0&&x<WALL.x1&&z>WALL.z0&&z<WALL.z1;
export function blockedAt(x,z,r=.38,gateClosed=false,bmClosed=false){
  for(const b of RECTS)if(x+r>b.x1&&x-r<b.x2&&z+r>b.z1&&z-r<b.z2)return true;
  if(gateClosed&&x+r>gateRect.x1&&x-r<gateRect.x2&&z+r>gateRect.z1&&z-r<gateRect.z2)return true;
  if(bmClosed&&x+r>bmGateRect.x1&&x-r<bmGateRect.x2&&z+r>bmGateRect.z1&&z-r<bmGateRect.z2)return true;
  return false}
export const clampWorld=(x,z)=>[clamp(x,WORLD.x0,WORLD.x1),clamp(z,WORLD.z0,WORLD.z1)];