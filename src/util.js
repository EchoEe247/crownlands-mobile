// Small shared helpers (pure, no THREE dependency so the simulation can run in Node tests).
export const clamp=(v,a,b)=>v<a?a:v>b?b:v;
export const lerp=(a,b,t)=>a+(b-a)*t;
export const TAU=Math.PI*2;
export const dist=(ax,az,bx,bz)=>Math.hypot(ax-bx,az-bz);
export const dist2=(ax,az,bx,bz)=>{const dx=ax-bx,dz=az-bz;return dx*dx+dz*dz};
export function angDiff(a,b){let d=(b-a)%TAU;if(d>Math.PI)d-=TAU;if(d<-Math.PI)d+=TAU;return d}
export const angLerp=(a,b,t)=>a+angDiff(a,b)*t;
export function mulberry32(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
// Global gameplay RNG (seedable for deterministic tests)
let _r=mulberry32(Date.now()&0xffffffff);
export const seedRandom=s=>{_r=mulberry32(s)};
export const rnd=()=>_r();
export const rr=(a,b)=>a+(b-a)*_r();
export const ri=(a,b)=>Math.floor(a+(b-a+1)*_r());
export const pick=a=>a[Math.floor(_r()*a.length)];
export const chance=p=>_r()<p;
export const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(_r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
export const pad2=n=>(n<10?'0':'')+n;
export const hh=h=>{h=((h%24)+24)%24;const H=Math.floor(h),M=Math.floor((h-H)*60);return pad2(H)+':'+pad2(M)};
export const fmt=n=>Math.round(n).toLocaleString('en-US');
export const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
export function rectHas(r,x,z,pad=0){return x>r.x1-pad&&x<r.x2+pad&&z>r.z1-pad&&z<r.z2+pad}
