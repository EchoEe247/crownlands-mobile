import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

function glbJson(file){
  const b=fs.readFileSync(file);
  assert.equal(b.toString('ascii',0,4),'glTF',file+' is not GLB');
  let off=12;
  while(off<b.length){
    const len=b.readUInt32LE(off),type=b.readUInt32LE(off+4);off+=8;
    const chunk=b.subarray(off,off+len);off+=len;
    if(type===0x4E4F534A)return JSON.parse(chunk.toString('utf8').replace(/\0+$/,'').trim());
  }
  throw new Error('No JSON chunk in '+file);
}
const roots=['assets'];
let checked=0,external=0;
function walk(dir){
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory())walk(p);
    else if(ent.isFile()&&p.endsWith('.glb')){
      const j=glbJson(p);checked++;
      for(const im of j.images||[]){
        if(!im.uri||/^data:/.test(im.uri))continue;
        external++;
        const target=path.resolve(path.dirname(p),decodeURIComponent(im.uri));
        assert.ok(fs.existsSync(target),p+' references missing '+im.uri);
      }
    }
  }
}
for(const r of roots)walk(r);
console.log(JSON.stringify({ok:true,glbs:checked,externalImageRefs:external},null,2));