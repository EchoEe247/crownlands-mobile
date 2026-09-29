import {S} from './core.js';
import {actors,A,makeActor,placeByPlan,issueOrder} from './actors.js';

let built=false;
const NAMES=['Edric','Rowan','Cedric','Gareth','Alric','Bram','Osric','Leof','Hugh','Tomas','Merek','Hal','Alden','Wulf','Godric','Eamon','Corin','Rolf','Martin','Piers','Milo','Dain','Arlen','Odo','Beric','Gavin','Elwin','Ronan','Silas','Tobin','Mara','Elsa','Nora','Ada','Iris','Maeve','Lina','Tessa','Elin','Greta','Anya','Mira','Rhea','Faye'];
let ni=0; const name=(prefix='')=>prefix+(prefix?' ':'')+NAMES[(ni++)%NAMES.length];
function add(o){
  const saved=S.actors?.[o.id],a=makeActor(o);placeByPlan(a);
  if(saved){
    for(const k of ['x','z','y','yaw','hp','alive','morale','loyalty'])if(saved[k]!=null)a[k]=saved[k];
    if(saved.order?.status==='active'){
      const remaining=saved.order.until!=null?Math.max(.1,saved.order.until-S.clock):null;
      const ord={...saved.order};delete ord.id;delete ord.issued;delete ord.status;delete ord.until;
      if(remaining!=null)ord.hours=remaining;
      issueOrder(a,ord)
    }
  }
  return a
}
export function populateWorld(){
  if(built)return actors;built=true;
  add({id:'marshal',name:'Lord Marshal Garrick',role:'marshal',rank:5,home:'barracksA',hero:'marshal',look:{asset:'guard',tint:0xb9c8e7}});
  for(let i=0;i<2;i++)add({id:'captain'+i,name:name('Captain'),role:'captain',rank:4,home:'barracksA',company:i,petitionKey:i===0?'captain':null,look:{asset:'guard',tint:0xa9bfe7}});
  for(let i=0;i<4;i++)add({id:'sergeant'+i,name:name('Sergeant'),role:'sergeant',rank:3,home:i<2?'barracksA':'barracksB',company:i%2,look:{asset:'guard',tint:0x91a9d8}});
  for(let i=0;i<18;i++)add({id:'guard'+i,name:name('Royal Guard'),role:'royalguard',rank:2,home:'guardQ',shift:i%3,company:0,look:{asset:'guard',tint:0x8aa8dc}});
  const officerCount=7,desiredTotal=S.army.size>0?S.army.size:27;
  const soldierCount=Math.max(20,Math.min(32,desiredTotal-officerCount));
  for(let i=0;i<soldierCount;i++)add({id:'soldier'+i,name:name('Crown Soldier'),role:'soldier',rank:1,home:i%2?'barracksA':'barracksB',company:i%2,look:{asset:'guard',tint:0xd6c6a6}});

  const civilianSpecs=[
    ['steward','Master Corvin','steward','apartments','innkeeper','steward'],['chancellor','Lord Edrin','chancellor','apartments','mage','chancellor'],
    ['treasurer','Master Owyn','treasurer','lodgings','innkeeper'],['scribe','Elric the Scribe','scribe','lodgings','mage'],
    ['priest','Father Anselm','priest','lodgings','mage'],['healer','Sister Alys','healer','lodgings','mage'],
    ['cook','Cook Bran','cook','lodgings','innkeeper'],['cook2','Cook Hilda','cook','lodgings','innkeeper'],
    ['maid0',name('Maid'),'maid','lodgings','innkeeper'],['maid1',name('Maid'),'maid','lodgings','innkeeper'],
    ['servant0',name('Servant'),'servant','lodgings','innkeeper'],['servant1',name('Servant'),'servant','lodgings','innkeeper'],
    ['smith',name('Smith'),'smith','lodgings','innkeeper'],['apprentice',name('Apprentice'),'apprentice','lodgings','innkeeper'],
    ['stablehand',name('Stablehand'),'stablehand','lodgings','innkeeper'],['merchant','Lady Mira','merchant','vh0','merchant','merchant'],
    ['guildenvoy','Guild Envoy Torren','guildenvoy','vh1','merchant'],['tavernkeeper','Innkeeper Jory','tavernkeeper','vh2','innkeeper'],
    ['barmaid','Nell','barmaid','vh3','innkeeper'],['woodcutter',name('Woodcutter'),'woodcutter','lumberCabin','innkeeper']
  ];
  for(const [id,nm,role,home,asset,petitionKey] of civilianSpecs)add({id,name:nm,role,home,petitionKey,look:{asset}});
  for(let i=0;i<8;i++)add({id:'farmer'+i,name:name('Farmer'),role:'farmer',home:'vh'+(i%8),work:'f'+(i%4+1),look:{asset:i%3===0?'merchant':'innkeeper'}});
  for(let i=0;i<4;i++)add({id:'child'+i,name:name(),role:'child',home:'vh'+(i%4),look:{asset:'innkeeper',scale:.72}});
  add({id:'miller',name:name('Miller'),role:'miller',home:'mb1',look:{asset:'innkeeper'}});
  for(let i=0;i<3;i++)add({id:'mbfarmer'+i,name:name('Farmer'),role:'mbfarmer',home:'mb'+(i+1),look:{asset:'innkeeper'}});
  for(let i=0;i<4;i++)add({id:'miner'+i,name:name('Miner'),role:'miner',home:'sh'+(i%3+1),look:{asset:'guard',tint:0x8c8275}});
  add({id:'guildmaster',name:'Guildmaster Torvik',role:'guildmaster',home:'sh1',look:{asset:'merchant'}});
  for(let i=0;i<6;i++)add({id:'merc'+i,name:name('Mercenary'),role:'merc',noBed:true,team:'ashwood',look:{asset:'guard',tint:0x785a48}});
  for(let i=0;i<8;i++)add({id:'vguard'+i,name:name('Valemar Guard'),role:'vguard',home:'bmBarracks',team:'valemar',look:{asset:'guard',tint:0x496653}});
  for(let i=0;i<12;i++)add({id:'vsoldier'+i,name:name('Valemar Soldier'),role:'vsoldier',home:'bmBarracks',team:'valemar',look:{asset:'guard',tint:0x53634d}});
  add({id:'valemarLord',name:'Lord Maren Valemar',role:'vservant',home:'bmKeep',team:'valemar',hero:'rival',look:{asset:'guard',tint:0x35533d}});
  S.army.size=actors.filter(a=>a.team==='crown'&&['soldier','sergeant','captain','marshal'].includes(a.role)).length;
  return actors;
}
export function snapshotActors(){
  const out={};for(const a of actors)out[a.id]={x:a.x,z:a.z,y:a.y,yaw:a.yaw,hp:a.hp,alive:a.alive,morale:a.morale,loyalty:a.loyalty,order:a.order?{...a.order}:null};
  S.actors=out;return out
}