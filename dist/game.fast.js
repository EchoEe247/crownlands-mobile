var Dg=0,Jd=1,Ng=2;var kp=1,$h=2,_i=3,ii=0,Mn=1,$t=2;var Xi=0,Sr=1,$d=2,jd=3,Qd=4,Ug=5,Es=100,Og=101,zg=102,ef=103,tf=104,Fg=200,kg=201,Bg=202,Hg=203,rh=204,oh=205,Gg=206,Vg=207,Wg=208,Xg=209,qg=210,Yg=211,Kg=212,Zg=213,Jg=214,$g=0,jg=1,Qg=2,Da=3,e0=4,t0=5,n0=6,i0=7,Bp=0,s0=1,r0=2,qi=0,o0=1,a0=2,l0=3,jh=4,c0=5,h0=6,nf="attached",u0="detached",Hp=300,Tr=301,Ar=302,ah=303,lh=304,yl=306,Is=1e3,In=1001,So=1002,Bt=1003,Na=1004;var go=1005;var xn=1006,Qh=1007;var Ki=1008;var Yi=1009,d0=1010,f0=1011,eu=1012,Gp=1013,Vi=1014,Mi=1015,wo=1016,Vp=1017,Wp=1018,Rs=1020,p0=1021,Un=1023,m0=1024,g0=1025,Cs=1026,Rr=1027,x0=1028,Xp=1029,y0=1030,qp=1031,Yp=1033,bc=33776,Sc=33777,wc=33778,Ec=33779,sf=35840,rf=35841,of=35842,af=35843,Kp=36196,lf=37492,cf=37496,hf=37808,uf=37809,df=37810,ff=37811,pf=37812,mf=37813,gf=37814,xf=37815,yf=37816,_f=37817,vf=37818,Mf=37819,bf=37820,Sf=37821,Tc=36492,wf=36494,Ef=36495,_0=36283,Tf=36284,Af=36285,Rf=36286,tu=2200,v0=2201,M0=2202,Cr=2300,Ls=2301,Ac=2302,_r=2400,vr=2401,Ua=2402,nu=2500,b0=2501,Zp=0,_l=1,No=2,Jp=3e3,Ps=3001,S0=3200,w0=3201,$p=0,E0=1,On="",dt="srgb",Wt="srgb-linear",iu="display-p3",vl="display-p3-linear",Oa="linear",bt="srgb",za="rec709",Fa="p3";var js=7680;var Cf=519,T0=512,A0=513,R0=514,jp=515,C0=516,P0=517,I0=518,L0=519,ch=35044;var Pf="300 es",hh=1035,bi=2e3,ka=2001,Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,xo=Math.PI/180,Pr=180/Math.PI;function Zn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function su(n,e){return(n%e+e)%e}function D0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function N0(n,e,t){return n!==e?(t-n)/(e-n):0}function yo(n,e,t){return(1-t)*n+t*e}function U0(n,e,t,i){return yo(n,e,1-Math.exp(-t*i))}function O0(n,e=1){return e-Math.abs(su(n,e*2)-e)}function z0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function F0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function k0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function B0(n,e){return n+Math.random()*(e-n)}function H0(n){return n*(.5-Math.random())}function G0(n){n!==void 0&&(If=n);let e=If+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(n){return n*xo}function W0(n){return n*Pr}function uh(n){return(n&n-1)===0&&n!==0}function X0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ba(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function q0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),x=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*x,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*x,a*c);break;case"ZYZ":n.set(l*x,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $n={DEG2RAD:xo,RAD2DEG:Pr,generateUUID:Zn,clamp:Ht,euclideanModulo:su,mapLinear:D0,inverseLerp:N0,lerp:yo,damp:U0,pingpong:O0,smoothstep:z0,smootherstep:F0,randInt:k0,randFloat:B0,randFloatSpread:H0,seededRandom:G0,degToRad:V0,radToDeg:W0,isPowerOfTwo:uh,ceilPowerOfTwo:X0,floorPowerOfTwo:Ba,setQuaternionFromProperEuler:q0,normalize:ut,denormalize:ni},se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],x=i[8],g=s[0],m=s[3],f=s[6],_=s[1],y=s[4],v=s[7],C=s[2],w=s[5],A=s[8];return r[0]=o*g+a*_+l*C,r[3]=o*m+a*y+l*w,r[6]=o*f+a*v+l*A,r[1]=c*g+h*_+u*C,r[4]=c*m+h*y+u*w,r[7]=c*f+h*v+u*A,r[2]=d*g+p*_+x*C,r[5]=d*m+p*y+x*w,r[8]=d*f+p*v+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,x=t*u+i*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=u*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new Je;function Qp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){let n=Eo("canvas");return n.style.display="block",n}var Lf={};function _o(n){n in Lf||(Lf[n]=!0,console.warn(n))}var Df=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nf=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[Wt]:{transfer:Oa,primaries:za,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:bt,primaries:za,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vl]:{transfer:Oa,primaries:Fa,toReference:n=>n.applyMatrix3(Nf),fromReference:n=>n.applyMatrix3(Df)},[iu]:{transfer:bt,primaries:Fa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nf),fromReference:n=>n.applyMatrix3(Df).convertLinearToSRGB()}},K0=new Set([Wt,vl]),at={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!K0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ta[e].toReference,s=ta[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ta[n].primaries},getTransfer:function(n){return n===On?Oa:ta[n].transfer}};function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,Ha=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=Eo("canvas")),Qs.width=e.width,Qs.height=e.height;let i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Z0=0,Ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pc(s[o].image)):r.push(Pc(s[o]))}else r=Pc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var J0=0,tn=class n extends Si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=In,s=In,r=xn,o=Ki,a=Un,l=Yi,c=n.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Zn(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ps?dt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Ps:Jp}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ps?dt:On}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Hp;tn.DEFAULT_ANISOTROPY=1;var pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(p+1)/2,C=(f+1)/2,w=(h+d)/4,A=(u+g)/4,D=(x+m)/4;return y>v&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=A/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dh=class extends Si{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ps?dt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends dh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Va=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fh=class extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==x){let m=1-a,f=l*d+c*p+h*x+u*g,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let C=Math.sqrt(y),w=Math.atan2(C,f*_);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}let v=a*_;if(l=l*m+d*v,c=c*m+p*v,h=h*m+x*v,u=u*m+g*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*p-c*d,e[t+1]=l*x+h*d+c*u-a*p,e[t+2]=c*x+h*p+a*d-l*u,e[t+3]=h*x-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new R,Uf=new en,yn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),ia.subVectors(this.max,ro),er.subVectors(e.a,ro),tr.subVectors(e.b,ro),nr.subVectors(e.c,ro),Fi.subVectors(tr,er),ki.subVectors(nr,tr),vs.subVectors(er,nr);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-vs.z,vs.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,vs.z,0,-vs.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-vs.y,vs.x,0];return!Lc(t,er,tr,nr,ia)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,er,tr,nr,ia))?!1:(sa.crossVectors(Fi,ki),t=[sa.x,sa.y,sa.z],Lc(t,er,tr,nr,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new R,new R,new R,new R,new R,new R,new R,new R],qn=new R,na=new yn,er=new R,tr=new R,nr=new R,Fi=new R,ki=new R,vs=new R,ro=new R,ia=new R,sa=new R,Ms=new R;function Lc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ms.fromArray(n,r);let a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $0=new yn,oo=new R,Dc=new R,Ln=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(oo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Dc)),this.expandByPoint(oo.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new R,Nc=new R,ra=new R,Bi=new R,Uc=new R,oa=new R,Oc=new R,Ir=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nc.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ra),a=Bi.dot(this.direction),l=-Bi.dot(ra),c=Bi.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nc).addScaledVector(ra,d),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){Uc.subVectors(t,e),oa.subVectors(i,e),Oc.crossVectors(Uc,oa);let o=this.direction.dot(Oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);let l=a*this.direction.dot(oa.crossVectors(Bi,oa));if(l<0)return null;let c=a*this.direction.dot(Uc.cross(Bi));if(c<0||l+c>o)return null;let h=-a*Bi.dot(Oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,x,g,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,x,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,x=c*h,g=c*u;t[0]=d+g*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,x=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+x,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,p=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,Q0)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Hi.crossVectors(i,Cn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Hi.crossVectors(i,Cn)),Hi.normalize(),aa.crossVectors(Cn,Hi),s[0]=Hi.x,s[4]=aa.x,s[8]=Cn.x,s[1]=Hi.y,s[5]=aa.y,s[9]=Cn.y,s[2]=Hi.z,s[6]=aa.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],_=i[3],y=i[7],v=i[11],C=i[15],w=s[0],A=s[4],D=s[8],M=s[12],E=s[1],U=s[5],G=s[9],te=s[13],L=s[2],O=s[6],W=s[10],Y=s[14],q=s[3],X=s[7],$=s[11],ee=s[15];return r[0]=o*w+a*E+l*L+c*q,r[4]=o*A+a*U+l*O+c*X,r[8]=o*D+a*G+l*W+c*$,r[12]=o*M+a*te+l*Y+c*ee,r[1]=h*w+u*E+d*L+p*q,r[5]=h*A+u*U+d*O+p*X,r[9]=h*D+u*G+d*W+p*$,r[13]=h*M+u*te+d*Y+p*ee,r[2]=x*w+g*E+m*L+f*q,r[6]=x*A+g*U+m*O+f*X,r[10]=x*D+g*G+m*W+f*$,r[14]=x*M+g*te+m*Y+f*ee,r[3]=_*w+y*E+v*L+C*q,r[7]=_*A+y*U+v*O+C*X,r[11]=_*D+y*G+v*W+C*$,r[15]=_*M+y*te+v*Y+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+g*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,y=x*d*c-h*m*c-x*l*p+o*m*p+h*l*f-o*d*f,v=h*g*c-x*u*c+x*a*p-o*g*p-h*a*f+o*u*f,C=x*u*l-h*g*l-x*a*d+o*g*d+h*a*m-o*u*m,w=t*_+i*y+s*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=_*A,e[1]=(g*d*r-u*m*r-g*s*p+i*m*p+u*s*f-i*d*f)*A,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*f+i*l*f)*A,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*A,e[4]=y*A,e[5]=(h*m*r-x*d*r+x*s*p-t*m*p-h*s*f+t*d*f)*A,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*f-t*l*f)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*A,e[8]=v*A,e[9]=(x*u*r-h*g*r-x*i*p+t*g*p+h*i*f-t*u*f)*A,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*A,e[12]=C*A,e[13]=(h*g*s-x*u*s+x*i*d-t*g*d-h*i*m+t*u*m)*A,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,x=r*u,g=o*h,m=o*u,f=a*u,_=l*c,y=l*h,v=l*u,C=i.x,w=i.y,A=i.z;return s[0]=(1-(g+f))*C,s[1]=(p+v)*C,s[2]=(x-y)*C,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(d+f))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(x+y)*A,s[9]=(m-_)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ir.set(s[0],s[1],s[2]).length(),o=ir.set(s[4],s[5],s[6]).length(),a=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let c=1/r,h=1/o,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=bi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(a===bi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ka)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=bi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,x,g;if(a===bi)x=(o+r)*u,g=-2*u;else if(a===ka)x=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ir=new R,Yn=new ke,j0=new R(0,0,0),Q0=new R(1,1,1),Hi=new R,aa=new R,Cn=new R,Of=new ke,zf=new en,Wa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wa.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ex=0,Ff=new R,sr=new en,mi=new ke,la=new R,ao=new R,tx=new R,nx=new en,kf=new R(1,0,0),Bf=new R(0,1,0),Hf=new R(0,0,1),ix={type:"added"},sx={type:"removed"},vt=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new Wa,i=new en,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Je}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ao,la,this.up):mi.lookAt(la,ao,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(mi),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ix)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};vt.DEFAULT_UP=new R(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new R,gi=new R,zc=new R,xi=new R,rr=new R,or=new R,Gf=new R,Fc=new R,kc=new R,Bc=new R,ca=!1,As=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),gi.subVectors(i,t),zc.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(gi),l=Kn.dot(zc),c=gi.dot(gi),h=gi.dot(zc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,i,s,r,o,a,l){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),gi.subVectors(e,t),Kn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,i),or.subVectors(r,i),Fc.subVectors(e,i);let l=rr.dot(Fc),c=or.dot(Fc);if(l<=0&&c<=0)return t.copy(i);kc.subVectors(e,s);let h=rr.dot(kc),u=or.dot(kc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(rr,o);Bc.subVectors(e,r);let p=rr.dot(Bc),x=or.dot(Bc);if(x>=0&&p<=x)return t.copy(r);let g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(or,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Gf.subVectors(r,s),a=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(Gf,a);let f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(rr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var _e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=su(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hc(o,r,e+1/3),this.g=Hc(o,r,e),this.b=Hc(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return at.fromWorkingColorSpace(rn.copy(this),e),Math.round(Ht(rn.r*255,0,255))*65536+Math.round(Ht(rn.g*255,0,255))*256+Math.round(Ht(rn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(rn.copy(this),t);let i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=dt){at.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,s=rn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ha);let i=yo(Gi.h,ha.h,t),s=yo(Gi.s,ha.s,t),r=yo(Gi.l,ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new _e;_e.NAMES=em;var rx=0,bn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Sr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new R,ua=new se,Vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}};var qa=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ya=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ox=0,Nn=new ke,Gc=new vt,ar=new R,Pn=new yn,lo=new yn,Jt=new R,Pt=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?Ya:qa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Pn.min,lo.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,lo.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(lo.min),Pn.expandByPoint(lo.max))}Pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(e,c),Jt.add(ar)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;let u=new R,d=new R,p=new R,x=new se,g=new se,m=new se,f=new R,_=new R;function y(E,U,G){u.fromArray(s,E*3),d.fromArray(s,U*3),p.fromArray(s,G*3),x.fromArray(o,E*2),g.fromArray(o,U*2),m.fromArray(o,G*2),d.sub(u),p.sub(u),g.sub(x),m.sub(x);let te=1/(g.x*m.y-m.x*g.y);isFinite(te)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(te),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(te),c[E].add(f),c[U].add(f),c[G].add(f),h[E].add(_),h[U].add(_),h[G].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let E=0,U=v.length;E<U;++E){let G=v[E],te=G.start,L=G.count;for(let O=te,W=te+L;O<W;O+=3)y(i[O+0],i[O+1],i[O+2])}let C=new R,w=new R,A=new R,D=new R;function M(E){A.fromArray(r,E*3),D.copy(A);let U=c[E];C.copy(U),C.sub(A.multiplyScalar(A.dot(U))).normalize(),w.crossVectors(D,U);let te=w.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=te}for(let E=0,U=v.length;E<U;++E){let G=v[E],te=G.start,L=G.count;for(let O=te,W=te+L;O<W;O+=3)M(i[O+0]),M(i[O+1]),M(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vf=new ke,bs=new Ir,da=new Ln,Wf=new R,lr=new R,cr=new R,hr=new R,Vc=new R,fa=new R,pa=new se,ma=new se,ga=new se,Xf=new R,qf=new R,Yf=new R,xa=new R,ya=new R,ge=class extends vt{constructor(e=new Pt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Vc.fromBufferAttribute(u,e),o?fa.addScaledVector(Vc,h):fa.addScaledVector(Vc.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(da.containsPoint(bs.origin)===!1&&(bs.intersectSphere(da,Wf)===null||bs.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Vf.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Vf),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,C=y;v<C;v+=3){let w=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);s=_a(this,f,e,i,c,h,u,w,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=_a(this,o,e,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,C=y;v<C;v+=3){let w=v,A=v+1,D=v+2;s=_a(this,f,e,i,c,h,u,w,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let _=m,y=m+1,v=m+2;s=_a(this,o,e,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ax(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;ya.copy(a),ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:n}}function _a(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,lr),n.getVertexPosition(l,cr),n.getVertexPosition(c,hr);let h=ax(n,e,t,i,lr,cr,hr,xa);if(h){s&&(pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),ga.fromBufferAttribute(s,c),h.uv=As.getInterpolation(xa,lr,cr,hr,pa,ma,ga,new se)),r&&(pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),ga.fromBufferAttribute(r,c),h.uv1=As.getInterpolation(xa,lr,cr,hr,pa,ma,ga,new se),h.uv2=h.uv1),o&&(Xf.fromBufferAttribute(o,a),qf.fromBufferAttribute(o,l),Yf.fromBufferAttribute(o,c),h.normal=As.getInterpolation(xa,lr,cr,hr,Xf,qf,Yf,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};As.getNormal(lr,cr,hr,u.normal),h.face=u}return h}var Ut=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function x(g,m,f,_,y,v,C,w,A,D,M){let E=v/A,U=C/D,G=v/2,te=C/2,L=w/2,O=A+1,W=D+1,Y=0,q=0,X=new R;for(let $=0;$<W;$++){let ee=$*U-te;for(let de=0;de<O;de++){let V=de*E-G;X[g]=V*_,X[m]=ee*y,X[f]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[f]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(de/A),u.push(1-$/D),Y+=1}}for(let $=0;$<D;$++)for(let ee=0;ee<A;ee++){let de=d+ee+O*$,V=d+ee+O*($+1),K=d+(ee+1)+O*($+1),ce=d+(ee+1)+O*$;l.push(de,V,ce),l.push(V,K,ce),q+=6}a.addGroup(p,q,M),p+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Lr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=Lr(n[t]);for(let s in i)e[s]=i[s]}return e}function lx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tm(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}var cx={clone:Lr,merge:gn},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ka=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends Ka{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ur=-90,dr=1,ph=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(ur,dr,e,t);s.layers=this.layers,this.add(s);let r=new Gt(ur,dr,e,t);r.layers=this.layers,this.add(r);let o=new Gt(ur,dr,e,t);o.layers=this.layers,this.add(o);let a=new Gt(ur,dr,e,t);a.layers=this.layers,this.add(a);let l=new Gt(ur,dr,e,t);l.layers=this.layers,this.add(l);let c=new Gt(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Za=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mh=class extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ps?dt:On),this.texture=new Za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ut(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Xi});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=xn),new ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Wc=new R,dx=new R,fx=new Je,vi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wc.subVectors(i,t).cross(dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fx.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Ln,va=new R,To=class{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],g=s[10],m=s[11],f=s[12],_=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+x,v+_).normalize(),i[3].setComponents(l-o,d-h,m-x,v-_).normalize(),i[4].setComponents(l-a,d-u,m-g,v-y).normalize(),t===bi)i[5].setComponents(l+a,d+u,m+g,v+y).normalize();else if(t===ka)i[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function px(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&x.length===0&&n.bufferSubData(u,0,d),x.length!==0){for(let g=0,m=x.length;g<m;g++){let f=x[g];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var gh=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<h;f++){let _=f*d-o;for(let y=0;y<c;y++){let v=y*u-r;x.push(v,-_,0),g.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let y=_+c*f,v=_+c*(f+1),C=_+1+c*(f+1),w=_+1+c*f;p.push(y,v,w),p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,py=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,my=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Py=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,By=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:xx,alphamap_pars_fragment:yx,alphatest_fragment:_x,alphatest_pars_fragment:vx,aomap_fragment:Mx,aomap_pars_fragment:bx,batching_pars_vertex:Sx,batching_vertex:wx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Ox,color_vertex:zx,common:Fx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Gx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Zx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:ly,envmap_vertex:$x,fog_vertex:jx,fog_pars_vertex:Qx,fog_fragment:ey,fog_pars_fragment:ty,gradientmap_pars_fragment:ny,lightmap_fragment:iy,lightmap_pars_fragment:sy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:oy,lights_pars_begin:ay,lights_toon_fragment:cy,lights_toon_pars_fragment:hy,lights_phong_fragment:uy,lights_phong_pars_fragment:dy,lights_physical_fragment:fy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:xy,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:My,map_fragment:by,map_pars_fragment:Sy,map_particle_fragment:wy,map_particle_pars_fragment:Ey,metalnessmap_fragment:Ty,metalnessmap_pars_fragment:Ay,morphcolor_vertex:Ry,morphnormal_vertex:Cy,morphtarget_pars_vertex:Py,morphtarget_vertex:Iy,normal_fragment_begin:Ly,normal_fragment_maps:Dy,normal_pars_fragment:Ny,normal_pars_vertex:Uy,normal_vertex:Oy,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:By,iridescence_pars_fragment:Hy,opaque_fragment:Gy,packing:Vy,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:qy,dithering_pars_fragment:Yy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:$y,shadowmap_vertex:jy,shadowmask_pars_fragment:Qy,skinbase_vertex:e_,skinning_pars_vertex:t_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:o_,tonemapping_pars_fragment:a_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:x_,cube_vert:y_,cube_frag:__,depth_vert:v_,depth_frag:M_,distanceRGBA_vert:b_,distanceRGBA_frag:S_,equirect_vert:w_,equirect_frag:E_,linedashed_vert:T_,linedashed_frag:A_,meshbasic_vert:R_,meshbasic_frag:C_,meshlambert_vert:P_,meshlambert_frag:I_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:N_,meshnormal_frag:U_,meshphong_vert:O_,meshphong_frag:z_,meshphysical_vert:F_,meshphysical_frag:k_,meshtoon_vert:B_,meshtoon_frag:H_,points_vert:G_,points_frag:V_,shadow_vert:W_,shadow_frag:X_,sprite_vert:q_,sprite_frag:Y_},ie={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ti={basic:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:gn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:gn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:gn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:gn([ie.points,ie.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:gn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:gn([ie.common,ie.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:gn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:gn([ie.sprite,ie.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:gn([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:gn([ie.lights,ie.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ti.physical={uniforms:gn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Ma={r:0,b:0,g:0};function K_(n,e,t,i,s,r,o){let a=new _e(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function x(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===yl)?(h===void 0&&(h=new ge(new Ut(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Lr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=at.getTransfer(y.colorSpace)!==bt,(u!==y||d!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ge(new gh(2,2),new Ei({name:"BackgroundMaterial",uniforms:Lr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Ma,tm(n)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function Z_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,O,W,Y,q){let X=!1;if(o){let $=g(Y,W,O);c!==$&&(c=$,p(c.object)),X=f(L,Y,W,q),X&&_(L,Y,W,q)}else{let $=O.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==$)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=$,X=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(L,O,W,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,O,W){let Y=W.wireframe===!0,q=a[L.id];q===void 0&&(q={},a[L.id]=q);let X=q[O.id];X===void 0&&(X={},q[O.id]=X);let $=X[Y];return $===void 0&&($=m(d()),X[Y]=$),$}function m(L){let O=[],W=[],Y=[];for(let q=0;q<s;q++)O[q]=0,W[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,O,W,Y){let q=c.attributes,X=O.attributes,$=0,ee=W.getAttributes();for(let de in ee)if(ee[de].location>=0){let K=q[de],ce=X[de];if(ce===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;$++}return c.attributesNum!==$||c.index!==Y}function _(L,O,W,Y){let q={},X=O.attributes,$=0,ee=W.getAttributes();for(let de in ee)if(ee[de].location>=0){let K=X[de];K===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),q[de]=ce,$++}c.attributes=q,c.attributesNum=$,c.index=Y}function y(){let L=c.newAttributes;for(let O=0,W=L.length;O<W;O++)L[O]=0}function v(L){C(L,0)}function C(L,O){let W=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;W[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),q[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),q[L]=O)}function w(){let L=c.newAttributes,O=c.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==L[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function A(L,O,W,Y,q,X,$){$===!0?n.vertexAttribIPointer(L,O,W,q,X):n.vertexAttribPointer(L,O,W,Y,q,X)}function D(L,O,W,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let q=Y.attributes,X=W.getAttributes(),$=O.defaultAttributeValues;for(let ee in X){let de=X[ee];if(de.location>=0){let V=q[ee];if(V===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let K=V.normalized,ce=V.itemSize,Me=t.get(V);if(Me===void 0)continue;let ve=Me.buffer,ze=Me.type,Be=Me.bytesPerElement,Ae=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||V.gpuType===Gp);if(V.isInterleavedBufferAttribute){let st=V.data,z=st.stride,dn=V.offset;if(st.isInstancedInterleavedBuffer){for(let Se=0;Se<de.locationSize;Se++)C(de.location+Se,st.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Se=0;Se<de.locationSize;Se++)v(de.location+Se);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Se=0;Se<de.locationSize;Se++)A(de.location+Se,ce/de.locationSize,ze,K,z*Be,(dn+ce/de.locationSize*Se)*Be,Ae)}else{if(V.isInstancedBufferAttribute){for(let st=0;st<de.locationSize;st++)C(de.location+st,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let st=0;st<de.locationSize;st++)v(de.location+st);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let st=0;st<de.locationSize;st++)A(de.location+st,ce/de.locationSize,ze,K,ce*Be,ce/de.locationSize*st*Be,Ae)}}else if($!==void 0){let K=$[ee];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(de.location,K);break;case 3:n.vertexAttrib3fv(de.location,K);break;case 4:n.vertexAttrib4fv(de.location,K);break;default:n.vertexAttrib1fv(de.location,K)}}}}w()}function M(){G();for(let L in a){let O=a[L];for(let W in O){let Y=O[W];for(let q in Y)x(Y[q].object),delete Y[q];delete O[W]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let W in O){let Y=O[W];for(let q in Y)x(Y[q].object),delete Y[q];delete O[W]}delete a[L.id]}function U(L){for(let O in a){let W=a[O];if(W[L.id]===void 0)continue;let Y=W[L.id];for(let q in Y)x(Y[q].object),delete Y[q];delete W[L.id]}}function G(){te(),h=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:v,disableUnusedAttributes:w}}function J_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,x;if(s)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function $_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,v=o||e.has("OES_texture_float"),C=y&&v,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:C,maxSamples:w}}function j_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new vi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,y=_*4,v=f.clippingState||null;l.value=v,v=h(x,d,y,p);for(let C=0;C!==y;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,x){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let f=p+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==g;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Q_(n){let e=new WeakMap;function t(o,a){return a===ah?o.mapping=Tr:a===lh&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ah||a===lh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new mh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Dr=class extends Ka{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mr=4,Kf=[.125,.215,.35,.446,.526,.582],Ts=20,Xc=new Dr,Zf=new _e,qc=null,Yc=0,Kc=0,ws=(1+Math.sqrt(5))/2,fr=1/ws,Jf=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ws,fr),new R(0,ws,-fr),new R(fr,0,ws),new R(-fr,0,ws),new R(ws,fr,0),new R(-ws,fr,0)],Ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Kc),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:wo,format:Un,colorSpace:Wt,depthBuffer:!1},s=$f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(r)),this._blurMaterial=tv(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,s){let a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zf),h.toneMapping=qi,h.autoClear=!1;let p=new on({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new ge(new Ut,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Zf),g=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;ba(s,_*y,f>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Tr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ba(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jf[(s-1)%Jf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ge(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);let f=[],_=0;for(let A=0;A<Ts;++A){let D=A/g,M=Math.exp(-D*D/2);f.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-i;let v=this._sizeLods[s],C=3*v*(s>y-Mr?s-y+Mr:0),w=4*(this._cubeSize-v);ba(t,C,w,3*v,2*v),l.setRenderTarget(t),l.render(u,Xc)}};function ev(n){let e=[],t=[],i=[],s=n,r=n-Mr+1+Kf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Mr?l=Kf[o-n+Mr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),y=new Float32Array(m*x*p),v=new Float32Array(f*x*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,D=w>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(M,g*x*w),y.set(d,m*x*w);let E=[w,w,w,w,w,w];v.set(E,f*x*w)}let C=new Pt;C.setAttribute("position",new Vt(_,g)),C.setAttribute("uv",new Vt(y,m)),C.setAttribute("faceIndex",new Vt(v,f)),e.push(C),s>Mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $f(n,e,t){let i=new wi(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tv(n,e,t){let i=new Float32Array(Ts),s=new R(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function jf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ah||l===lh,h=l===Tr||l===Ar;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ja(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ja(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sv(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let g=d.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,x=u.attributes.position,g=0;if(p!==null){let _=p.array;g=p.version;for(let y=0,v=_.length;y<v;y+=3){let C=_[y+0],w=_[y+1],A=_[y+2];d.push(C,w,w,A,A,C)}}else if(x!==void 0){let _=x.array;g=x.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let C=y+0,w=y+1,A=y+2;d.push(C,w,w,A,A,C)}}else return;let m=new(Qp(d)?Ya:qa)(d,1);m.version=g;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rv(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){n.drawElements(r,x,a,p*l),t.update(x,r,1)}function u(p,x,g){if(g===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,x,a,p*l,g),t.update(x,r,g)}function d(p,x,g){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,g);let f=0;for(let _=0;_<g;_++)f+=x[_];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function ov(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function av(n,e){return n[0]-e[0]}function lv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==x){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;_===!0&&(D=1),y===!0&&(D=2),v===!0&&(D=3);let M=h.attributes.position.count*D,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let U=new Float32Array(M*E*4*x),G=new Va(U,M,E,x);G.type=Mi,G.needsUpdate=!0;let te=D*4;for(let O=0;O<x;O++){let W=C[O],Y=w[O],q=A[O],X=M*E*4*O;for(let $=0;$<W.count;$++){let ee=$*te;_===!0&&(o.fromBufferAttribute(W,$),U[X+ee+0]=o.x,U[X+ee+1]=o.y,U[X+ee+2]=o.z,U[X+ee+3]=0),y===!0&&(o.fromBufferAttribute(Y,$),U[X+ee+4]=o.x,U[X+ee+5]=o.y,U[X+ee+6]=o.z,U[X+ee+7]=0),v===!0&&(o.fromBufferAttribute(q,$),U[X+ee+8]=o.x,U[X+ee+9]=o.y,U[X+ee+10]=o.z,U[X+ee+11]=q.itemSize===4?o.w:1)}}g={count:x,texture:G,size:new se(M,E)},r.set(h,g),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,x=i[h.id];if(x===void 0||x.length!==p){x=[];for(let y=0;y<p;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<p;y++){let v=x[y];v[0]=y,v[1]=d[y]}x.sort(lv);for(let y=0;y<8;y++)y<p&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(av);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let v=a[y],C=v[0],w=v[1];C!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+y)!==g[C]&&h.setAttribute("morphTarget"+y,g[C]),m&&h.getAttribute("morphNormal"+y)!==m[C]&&h.setAttribute("morphNormal"+y,m[C]),s[y]=w,f+=w):(g&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function hv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $a=class extends tn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Cs,h!==Cs&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cs&&(i=Vi),i===void 0&&h===Rr&&(i=Rs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},im=new tn,sm=new $a(1,1);sm.compareFunction=jp;var rm=new Va,om=new fh,am=new Za,ep=[],tp=[],np=new Float32Array(16),ip=new Float32Array(9),sp=new Float32Array(4);function Gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ep[s];if(r===void 0&&(r=new Float32Array(s),ep[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;sp.set(i),n.uniformMatrix2fv(this.addr,!1,sp),qt(t,i)}}function gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ip.set(i),n.uniformMatrix3fv(this.addr,!1,ip),qt(t,i)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;np.set(i),n.uniformMatrix4fv(this.addr,!1,np),qt(t,i)}}function yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Tv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?sm:im;t.setTexture2D(e||r,s)}function Av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||om,s)}function Rv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||am,s)}function Cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rm,s)}function Pv(n){switch(n){case 5126:return uv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return _v;case 35668:case 35672:return vv;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return Sv;case 36295:return wv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Iv(n,e){n.uniform1fv(this.addr,e)}function Lv(n,e){let t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dv(n,e){let t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nv(n,e){let t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Uv(n,e){let t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){let t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zv(n,e){let t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Bv(n,e){n.uniform3iv(this.addr,e)}function Hv(n,e){n.uniform4iv(this.addr,e)}function Gv(n,e){n.uniform1uiv(this.addr,e)}function Vv(n,e){n.uniform2uiv(this.addr,e)}function Wv(n,e){n.uniform3uiv(this.addr,e)}function Xv(n,e){n.uniform4uiv(this.addr,e)}function qv(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||im,r[o])}function Yv(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||om,r[o])}function Kv(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||am,r[o])}function Zv(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rm,r[o])}function Jv(n){switch(n){case 5126:return Iv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Ov;case 35676:return zv;case 5124:case 35670:return Fv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}var xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}},yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function rp(n,e){n.seq.push(e),n.map[e.id]=e}function $v(n,e,t){let i=n.name,s=i.length;for(Zc.lastIndex=0;;){let r=Zc.exec(i),o=Zc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rp(t,c===void 0?new xh(a,n,e):new yh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new _h(a),rp(t,u)),t=u}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$v(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function op(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var jv=37297,Qv=0;function eM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function tM(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===Fa&&t===za?i="LinearDisplayP3ToLinearSRGB":e===za&&t===Fa&&(i="LinearSRGBToLinearDisplayP3"),n){case Wt:case vl:return[i,"LinearTransferOETF"];case dt:case iu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ap(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eM(n.getShaderSource(e),o)}else return s}function nM(n,e){let t=tM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iM(n,e){let t;switch(e){case o0:t="Linear";break;case a0:t="Reinhard";break;case l0:t="OptimizedCineon";break;case jh:t="ACESFilmic";break;case h0:t="AgX";break;case c0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function rM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(br).join(`
`)}function oM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function br(n){return n!==""}function lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(n){return n.replace(lM,hM)}var cM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hM(n,e){let t=Ge[e];if(t===void 0){let i=cM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vh(t)}var uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(n){return n.replace(uM,dM)}function dM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function up(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function pM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function gM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case s0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function xM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fM(t),c=pM(t),h=mM(t),u=gM(t),d=xM(t),p=t.isWebGL2?"":sM(t),x=rM(t),g=oM(r),m=s.createProgram(),f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),_.length>0&&(_+=`
`)):(f=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),_=[p,up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==qi?iM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=vh(o),o=lp(o,t),o=cp(o,t),a=vh(a),a=lp(a,t),a=cp(a,t),o=hp(o),a=hp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+f+o,C=y+_+a,w=op(s,s.VERTEX_SHADER,v),A=op(s,s.FRAGMENT_SHADER,C);s.attachShader(m,w),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(G){if(n.debug.checkShaderErrors){let te=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(A).trim(),W=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,w,A);else{let q=ap(s,w,"vertex"),X=ap(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+q+`
`+X)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||O==="")&&(Y=!1);Y&&(G.diagnostics={runnable:W,programLog:te,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:_}})}s.deleteShader(w),s.deleteShader(A),M=new Er(s,m),E=aM(s,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,jv)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}var _M=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new bh(e),t.set(e,i)),i}},bh=class{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}};function vM(n,e,t,i,s,r,o){let a=new Xa,l=new Mh,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,E,U,G,te){let L=G.fog,O=te.geometry,W=M.isMeshStandardMaterial?G.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),q=Y&&Y.mapping===yl?Y.image.height:null,X=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let $=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=$!==void 0?$.length:0,de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let V,K,ce,Me;if(X){let fn=ti[X];V=fn.vertexShader,K=fn.fragmentShader}else V=M.vertexShader,K=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);let ve=n.getRenderTarget(),ze=te.isInstancedMesh===!0,Be=te.isBatchedMesh===!0,Ae=!!M.map,st=!!M.matcap,z=!!Y,dn=!!M.aoMap,Se=!!M.lightMap,Ne=!!M.bumpMap,me=!!M.normalMap,wt=!!M.displacementMap,We=!!M.emissiveMap,T=!!M.metalnessMap,b=!!M.roughnessMap,k=M.anisotropy>0,j=M.clearcoat>0,J=M.iridescence>0,Q=M.sheen>0,xe=M.transmission>0,ae=k&&!!M.anisotropyMap,fe=j&&!!M.clearcoatMap,Te=j&&!!M.clearcoatNormalMap,Xe=j&&!!M.clearcoatRoughnessMap,Z=J&&!!M.iridescenceMap,ht=J&&!!M.iridescenceThicknessMap,Qe=Q&&!!M.sheenColorMap,Le=Q&&!!M.sheenRoughnessMap,be=!!M.specularMap,pe=!!M.specularColorMap,He=!!M.specularIntensityMap,ct=xe&&!!M.transmissionMap,Rt=xe&&!!M.thicknessMap,Ke=!!M.gradientMap,ne=!!M.alphaMap,P=M.alphaTest>0,re=!!M.alphaHash,oe=!!M.extensions,Re=!!O.attributes.uv1,we=!!O.attributes.uv2,xt=!!O.attributes.uv3,yt=qi;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:K,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,instancing:ze,instancingColor:ze&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Wt,map:Ae,matcap:st,envMap:z,envMapMode:z&&Y.mapping,envMapCubeUVHeight:q,aoMap:dn,lightMap:Se,bumpMap:Ne,normalMap:me,displacementMap:d&&wt,emissiveMap:We,normalMapObjectSpace:me&&M.normalMapType===E0,normalMapTangentSpace:me&&M.normalMapType===$p,metalnessMap:T,roughnessMap:b,anisotropy:k,anisotropyMap:ae,clearcoat:j,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Xe,iridescence:J,iridescenceMap:Z,iridescenceThicknessMap:ht,sheen:Q,sheenColorMap:Qe,sheenRoughnessMap:Le,specularMap:be,specularColorMap:pe,specularIntensityMap:He,transmission:xe,transmissionMap:ct,thicknessMap:Rt,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Sr,alphaMap:ne,alphaTest:P,alphaHash:re,combine:M.combine,mapUv:Ae&&g(M.map.channel),aoMapUv:dn&&g(M.aoMap.channel),lightMapUv:Se&&g(M.lightMap.channel),bumpMapUv:Ne&&g(M.bumpMap.channel),normalMapUv:me&&g(M.normalMap.channel),displacementMapUv:wt&&g(M.displacementMap.channel),emissiveMapUv:We&&g(M.emissiveMap.channel),metalnessMapUv:T&&g(M.metalnessMap.channel),roughnessMapUv:b&&g(M.roughnessMap.channel),anisotropyMapUv:ae&&g(M.anisotropyMap.channel),clearcoatMapUv:fe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:be&&g(M.specularMap.channel),specularColorMapUv:pe&&g(M.specularColorMap.channel),specularIntensityMapUv:He&&g(M.specularIntensityMap.channel),transmissionMapUv:ct&&g(M.transmissionMap.channel),thicknessMapUv:Rt&&g(M.thicknessMap.channel),alphaMapUv:ne&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:we,vertexUv3s:xt,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Ae||ne),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$t,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(_(E,M),y(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function _(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let E=x[M.type],U;if(E){let G=ti[E];U=cx.clone(G.uniforms)}else U=M.uniforms;return U}function C(M,E){let U;for(let G=0,te=c.length;G<te;G++){let L=c[G];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new yM(n,E,M,r),c.push(U)),U}function w(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:D}}function MM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,x,g,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,x,g,m){let f=o(u,d,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,x,g,m){let f=o(u,d,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||bM),i.length>1&&i.sort(d||dp),s.length>1&&s.sort(d||dp)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function SM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new fp,n.set(i,[o])):s>=r.length?(o=new fp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new _e};break;case"SpotLight":t={position:new R,direction:new R,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function EM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TM=0;function AM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RM(n,e){let t=new wM,i=EM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ke,a=new ke;function l(h,u){let d=0,p=0,x=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let g=0,m=0,f=0,_=0,y=0,v=0,C=0,w=0,A=0,D=0,M=0;h.sort(AM);let E=u===!0?Math.PI:1;for(let G=0,te=h.length;G<te;G++){let L=h[G],O=L.color,W=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*W*E,p+=O.g*W*E,x+=O.b*W*E;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],W);M++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let $=L.shadow,ee=i.get(L);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=q,s.directionalShadowMatrix[g]=L.shadow.matrix,v++}s.directional[g]=X,g++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(W*E),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[f]=X;let $=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[f]=$.matrix,L.castShadow){let ee=i.get(L);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=q,w++}f++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[_]=X,_++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){let $=L.shadow,ee=i.get(L);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W*E),X.groundColor.copy(L.groundColor).multiplyScalar(W*E),s.hemi[y]=X,y++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=x;let U=s.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==f||U.rectAreaLength!==_||U.hemiLength!==y||U.numDirectionalShadows!==v||U.numPointShadows!==C||U.numSpotShadows!==w||U.numSpotMaps!==A||U.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=w+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=M,U.directionalLength=g,U.pointLength=m,U.spotLength=f,U.rectAreaLength=_,U.hemiLength=y,U.numDirectionalShadows=v,U.numPointShadows=C,U.numSpotShadows=w,U.numSpotMaps=A,U.numLightProbes=M,s.version=TM++)}function c(h,u){let d=0,p=0,x=0,g=0,m=0,f=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let v=h[_];if(v.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(v.isSpotLight){let C=s.spot[x];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),x++}else if(v.isRectAreaLight){let C=s.rectArea[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(v.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function pp(n,e){let t=new RM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function CM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new pp(n,e),t.set(r,[l])):o>=a.length?(l=new pp(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Sh=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wh=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(n,e,t){let i=new To,s=new se,r=new se,o=new pt,a=new Sh({depthPacking:w0}),l=new wh,c={},h=t.maxTextureSize,u={[ii]:Mn,[Mn]:ii,[$t]:$t},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:PM,fragmentShader:IM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Pt;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ge(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let f=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let te=f!==_i&&this.type===_i,L=f===_i&&this.type!==_i;for(let O=0,W=w.length;O<W;O++){let Y=w[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let X=q.getFrameExtents();if(s.multiply(X),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,q.mapSize.y=r.y)),q.map===null||te===!0||L===!0){let ee=this.type!==_i?{minFilter:Bt,magFilter:Bt}:{};q.map!==null&&q.map.dispose(),q.map=new wi(s.x,s.y,ee),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let $=q.getViewportCount();for(let ee=0;ee<$;ee++){let de=q.getViewport(ee);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),G.viewport(o),q.updateMatrices(Y,ee),i=q.getFrustum(),v(A,D,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===_i&&_(q,D),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,E,U)};function _(w,A){let D=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,D,p,g,null)}function y(w,A,D,M){let E=null,U=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=E.uuid,te=A.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let O=L[te];O===void 0&&(O=E.clone(),L[te]=O,A.addEventListener("dispose",C)),E=O}if(E.visible=A.visible,E.wireframe=A.wireframe,M===_i?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=n.properties.get(E);G.light=D}return E}function v(w,A,D,M,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===_i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let te=e.update(w),L=w.material;if(Array.isArray(L)){let O=te.groups;for(let W=0,Y=O.length;W<Y;W++){let q=O[W],X=L[q.materialIndex];if(X&&X.visible){let $=y(w,X,M,E);w.onBeforeShadow(n,w,A,D,te,$,q),n.renderBufferDirect(D,null,te,$,w,q),w.onAfterShadow(n,w,A,D,te,$,q)}}}else if(L.visible){let O=y(w,L,M,E);w.onBeforeShadow(n,w,A,D,te,O,null),n.renderBufferDirect(D,null,te,O,w,null),w.onAfterShadow(n,w,A,D,te,O,null)}}let G=w.children;for(let te=0,L=G.length;te<L;te++)v(G[te],A,D,M,E)}function C(w){w.target.removeEventListener("dispose",C);for(let D in c){let M=c[D],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function DM(n,e,t){let i=t.isWebGL2;function s(){let P=!1,re=new pt,oe=null,Re=new pt(0,0,0,0);return{setMask:function(we){oe!==we&&!P&&(n.colorMask(we,we,we,we),oe=we)},setLocked:function(we){P=we},setClear:function(we,xt,yt,Kt,fn){fn===!0&&(we*=Kt,xt*=Kt,yt*=Kt),re.set(we,xt,yt,Kt),Re.equals(re)===!1&&(n.clearColor(we,xt,yt,Kt),Re.copy(re))},reset:function(){P=!1,oe=null,Re.set(-1,0,0,0)}}}function r(){let P=!1,re=null,oe=null,Re=null;return{setTest:function(we){we?Be(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(we){re!==we&&!P&&(n.depthMask(we),re=we)},setFunc:function(we){if(oe!==we){switch(we){case $g:n.depthFunc(n.NEVER);break;case jg:n.depthFunc(n.ALWAYS);break;case Qg:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case e0:n.depthFunc(n.EQUAL);break;case t0:n.depthFunc(n.GEQUAL);break;case n0:n.depthFunc(n.GREATER);break;case i0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=we}},setLocked:function(we){P=we},setClear:function(we){Re!==we&&(n.clearDepth(we),Re=we)},reset:function(){P=!1,re=null,oe=null,Re=null}}}function o(){let P=!1,re=null,oe=null,Re=null,we=null,xt=null,yt=null,Kt=null,fn=null;return{setTest:function(_t){P||(_t?Be(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(_t){re!==_t&&!P&&(n.stencilMask(_t),re=_t)},setFunc:function(_t,pn,ei){(oe!==_t||Re!==pn||we!==ei)&&(n.stencilFunc(_t,pn,ei),oe=_t,Re=pn,we=ei)},setOp:function(_t,pn,ei){(xt!==_t||yt!==pn||Kt!==ei)&&(n.stencilOp(_t,pn,ei),xt=_t,yt=pn,Kt=ei)},setLocked:function(_t){P=_t},setClear:function(_t){fn!==_t&&(n.clearStencil(_t),fn=_t)},reset:function(){P=!1,re=null,oe=null,Re=null,we=null,xt=null,yt=null,Kt=null,fn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,y=null,v=null,C=null,w=null,A=null,D=null,M=new _e(0,0,0),E=0,U=!1,G=null,te=null,L=null,O=null,W=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),q=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=X>=2);let ee=null,de={},V=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ce=new pt().fromArray(V),Me=new pt().fromArray(K);function ve(P,re,oe,Re){let we=new Uint8Array(4),xt=n.createTexture();n.bindTexture(P,xt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<oe;yt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(re+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return xt}let ze={};ze[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(n.DEPTH_TEST),l.setFunc(Da),We(!1),T(Jd),Be(n.CULL_FACE),me(Xi);function Be(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function st(P,re){return p[P]!==re?(n.bindFramebuffer(P,re),p[P]=re,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=re),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function z(P,re){let oe=g,Re=!1;if(P)if(oe=x.get(re),oe===void 0&&(oe=[],x.set(re,oe)),P.isWebGLMultipleRenderTargets){let we=P.texture;if(oe.length!==we.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,yt=we.length;xt<yt;xt++)oe[xt]=n.COLOR_ATTACHMENT0+xt;oe.length=we.length,Re=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Re=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function dn(P){return m!==P?(n.useProgram(P),m=P,!0):!1}let Se={[Es]:n.FUNC_ADD,[Og]:n.FUNC_SUBTRACT,[zg]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[ef]=n.MIN,Se[tf]=n.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Se[ef]=P.MIN_EXT,Se[tf]=P.MAX_EXT)}let Ne={[Fg]:n.ZERO,[kg]:n.ONE,[Bg]:n.SRC_COLOR,[rh]:n.SRC_ALPHA,[qg]:n.SRC_ALPHA_SATURATE,[Wg]:n.DST_COLOR,[Gg]:n.DST_ALPHA,[Hg]:n.ONE_MINUS_SRC_COLOR,[oh]:n.ONE_MINUS_SRC_ALPHA,[Xg]:n.ONE_MINUS_DST_COLOR,[Vg]:n.ONE_MINUS_DST_ALPHA,[Yg]:n.CONSTANT_COLOR,[Kg]:n.ONE_MINUS_CONSTANT_COLOR,[Zg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function me(P,re,oe,Re,we,xt,yt,Kt,fn,_t){if(P===Xi){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Be(n.BLEND),f=!0),P!==Ug){if(P!==_||_t!==U){if((y!==Es||w!==Es)&&(n.blendEquation(n.FUNC_ADD),y=Es,w=Es),_t)switch(P){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $d:n.blendFunc(n.ONE,n.ONE);break;case jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $d:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,C=null,A=null,D=null,M.set(0,0,0),E=0,_=P,U=_t}return}we=we||re,xt=xt||oe,yt=yt||Re,(re!==y||we!==w)&&(n.blendEquationSeparate(Se[re],Se[we]),y=re,w=we),(oe!==v||Re!==C||xt!==A||yt!==D)&&(n.blendFuncSeparate(Ne[oe],Ne[Re],Ne[xt],Ne[yt]),v=oe,C=Re,A=xt,D=yt),(Kt.equals(M)===!1||fn!==E)&&(n.blendColor(Kt.r,Kt.g,Kt.b,fn),M.copy(Kt),E=fn),_=P,U=!1}function wt(P,re){P.side===$t?Ae(n.CULL_FACE):Be(n.CULL_FACE);let oe=P.side===Mn;re&&(oe=!oe),We(oe),P.blending===Sr&&P.transparent===!1?me(Xi):me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Re=P.stencilWrite;c.setTest(Re),Re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){G!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),G=P)}function T(P){P!==Dg?(Be(n.CULL_FACE),P!==te&&(P===Jd?n.cullFace(n.BACK):P===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),te=P}function b(P){P!==L&&(q&&n.lineWidth(P),L=P)}function k(P,re,oe){P?(Be(n.POLYGON_OFFSET_FILL),(O!==re||W!==oe)&&(n.polygonOffset(re,oe),O=re,W=oe)):Ae(n.POLYGON_OFFSET_FILL)}function j(P){P?Be(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function J(P){P===void 0&&(P=n.TEXTURE0+Y-1),ee!==P&&(n.activeTexture(P),ee=P)}function Q(P,re,oe){oe===void 0&&(ee===null?oe=n.TEXTURE0+Y-1:oe=ee);let Re=de[oe];Re===void 0&&(Re={type:void 0,texture:void 0},de[oe]=Re),(Re.type!==P||Re.texture!==re)&&(ee!==oe&&(n.activeTexture(oe),ee=oe),n.bindTexture(P,re||ze[P]),Re.type=P,Re.texture=re)}function xe(){let P=de[ee];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(P){ce.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function ct(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function Rt(P,re){let oe=u.get(re);oe===void 0&&(oe=new WeakMap,u.set(re,oe));let Re=oe.get(P);Re===void 0&&(Re=n.getUniformBlockIndex(re,P.name),oe.set(P,Re))}function Ke(P,re){let Re=u.get(re).get(P);h.get(re)!==Re&&(n.uniformBlockBinding(re,Re,P.__bindingPointIndex),h.set(re,Re))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,de={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,y=null,v=null,C=null,w=null,A=null,D=null,M=new _e(0,0,0),E=0,U=!1,G=null,te=null,L=null,O=null,W=null,ce.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:Ae,bindFramebuffer:st,drawBuffers:z,useProgram:dn,setBlending:me,setMaterial:wt,setFlipSided:We,setCullFace:T,setLineWidth:b,setPolygonOffset:k,setScissorTest:j,activeTexture:J,bindTexture:Q,unbindTexture:xe,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:be,texImage3D:pe,updateUBOMapping:Rt,uniformBlockBinding:Ke,texStorage2D:Qe,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Xe,compressedTexSubImage2D:Z,compressedTexSubImage3D:ht,scissor:He,viewport:ct,reset:ne}}function NM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,b){return p?new OffscreenCanvas(T,b):Eo("canvas")}function g(T,b,k,j){let J=1;if((T.width>j||T.height>j)&&(J=j/Math.max(T.width,T.height)),J<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let Q=b?Ba:Math.floor,xe=Q(J*T.width),ae=Q(J*T.height);u===void 0&&(u=x(xe,ae));let fe=k?x(xe,ae):u;return fe.width=xe,fe.height=ae,fe.getContext("2d").drawImage(T,0,0,xe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+ae+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return uh(T.width)&&uh(T.height)}function f(T){return a?!1:T.wrapS!==In||T.wrapT!==In||T.minFilter!==Bt&&T.minFilter!==xn}function _(T,b){return T.generateMipmaps&&b&&T.minFilter!==Bt&&T.minFilter!==xn}function y(T){n.generateMipmap(T)}function v(T,b,k,j,J=!1){if(a===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=b;if(b===n.RED&&(k===n.FLOAT&&(Q=n.R32F),k===n.HALF_FLOAT&&(Q=n.R16F),k===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Q=n.R8UI),k===n.UNSIGNED_SHORT&&(Q=n.R16UI),k===n.UNSIGNED_INT&&(Q=n.R32UI),k===n.BYTE&&(Q=n.R8I),k===n.SHORT&&(Q=n.R16I),k===n.INT&&(Q=n.R32I)),b===n.RG&&(k===n.FLOAT&&(Q=n.RG32F),k===n.HALF_FLOAT&&(Q=n.RG16F),k===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RGBA){let xe=J?Oa:at.getTransfer(j);k===n.FLOAT&&(Q=n.RGBA32F),k===n.HALF_FLOAT&&(Q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Q=xe===bt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(T,b,k){return _(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){return T===Bt||T===Na||T===go?n.NEAREST:n.LINEAR}function A(T){let b=T.target;b.removeEventListener("dispose",A),M(b),b.isVideoTexture&&h.delete(b)}function D(T){let b=T.target;b.removeEventListener("dispose",D),U(b)}function M(T){let b=i.get(T);if(b.__webglInit===void 0)return;let k=T.source,j=d.get(k);if(j){let J=j[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(k)}i.remove(T)}function E(T){let b=i.get(T);n.deleteTexture(b.__webglTexture);let k=T.source,j=d.get(k);delete j[b.__cacheKey],o.memory.textures--}function U(T){let b=T.texture,k=i.get(T),j=i.get(b);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let Q=0;Q<k.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(k.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)n.deleteFramebuffer(k.__webglFramebuffer[J]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,Q=b.length;J<Q;J++){let xe=i.get(b[J]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(b[J])}i.remove(b),i.remove(T)}let G=0;function te(){G=0}function L(){let T=G;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),G+=1,T}function O(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function W(T,b){let k=i.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,T,b);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function Y(T,b){let k=i.get(T);if(T.version>0&&k.__version!==T.version){ce(k,T,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function q(T,b){let k=i.get(T);if(T.version>0&&k.__version!==T.version){ce(k,T,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function X(T,b){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Me(k,T,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}let $={[Is]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[So]:n.MIRRORED_REPEAT},ee={[Bt]:n.NEAREST,[Na]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Qh]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},de={[T0]:n.NEVER,[L0]:n.ALWAYS,[A0]:n.LESS,[jp]:n.LEQUAL,[R0]:n.EQUAL,[I0]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function V(T,b,k){if(k?(n.texParameteri(T,n.TEXTURE_WRAP_S,$[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,$[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,$[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ee[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ee[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==In||b.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==Bt&&b.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Bt||b.minFilter!==go&&b.minFilter!==Ki||b.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function K(T,b){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));let j=b.source,J=d.get(j);J===void 0&&(J={},d.set(j,J));let Q=O(b);if(Q!==T.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Q].usedTimes++;let xe=J[T.__cacheKey];xe!==void 0&&(J[T.__cacheKey].usedTimes--,xe.usedTimes===0&&E(b)),T.__cacheKey=Q,T.__webglTexture=J[Q].texture}return k}function ce(T,b,k){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);let J=K(T,b),Q=b.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+k);let xe=i.get(Q);if(Q.version!==xe.__version||J===!0){t.activeTexture(n.TEXTURE0+k);let ae=at.getPrimaries(at.workingColorSpace),fe=b.colorSpace===On?null:at.getPrimaries(b.colorSpace),Te=b.colorSpace===On||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Xe=f(b)&&m(b.image)===!1,Z=g(b.image,Xe,!1,s.maxTextureSize);Z=We(b,Z);let ht=m(Z)||a,Qe=r.convert(b.format,b.colorSpace),Le=r.convert(b.type),be=v(b.internalFormat,Qe,Le,b.colorSpace,b.isVideoTexture);V(j,b,ht);let pe,He=b.mipmaps,ct=a&&b.isVideoTexture!==!0&&be!==Kp,Rt=xe.__version===void 0||J===!0,Ke=C(b,Z,ht);if(b.isDepthTexture)be=n.DEPTH_COMPONENT,a?b.type===Mi?be=n.DEPTH_COMPONENT32F:b.type===Vi?be=n.DEPTH_COMPONENT24:b.type===Rs?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:b.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Cs&&be===n.DEPTH_COMPONENT&&b.type!==eu&&b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Vi,Le=r.convert(b.type)),b.format===Rr&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,b.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Rs,Le=r.convert(b.type))),Rt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Qe,Le,null));else if(b.isDataTexture)if(He.length>0&&ht){ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,Qe,Le,pe.data);b.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Qe,Le,Z.data)):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Qe,Le,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ct&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,be,He[0].width,He[0].height,Z.depth);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],b.format!==Un?Qe!==null?ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,Z.depth,Qe,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,Z.depth,Qe,Le,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,pe.width,pe.height,Z.depth,0,Qe,Le,pe.data)}else{ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],b.format!==Un?Qe!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,Qe,Le,pe.data)}else if(b.isDataArrayTexture)ct?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Qe,Le,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,Qe,Le,Z.data);else if(b.isData3DTexture)ct?(Rt&&t.texStorage3D(n.TEXTURE_3D,Ke,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Qe,Le,Z.data)):t.texImage3D(n.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,Qe,Le,Z.data);else if(b.isFramebufferTexture){if(Rt)if(ct)t.texStorage2D(n.TEXTURE_2D,Ke,be,Z.width,Z.height);else{let ne=Z.width,P=Z.height;for(let re=0;re<Ke;re++)t.texImage2D(n.TEXTURE_2D,re,be,ne,P,0,Qe,Le,null),ne>>=1,P>>=1}}else if(He.length>0&&ht){ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Qe,Le,pe):t.texImage2D(n.TEXTURE_2D,ne,be,Qe,Le,pe);b.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,Le,Z)):t.texImage2D(n.TEXTURE_2D,0,be,Qe,Le,Z);_(b,ht)&&y(j),xe.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Me(T,b,k){if(b.image.length!==6)return;let j=K(T,b),J=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let Q=i.get(J);if(J.version!==Q.__version||j===!0){t.activeTexture(n.TEXTURE0+k);let xe=at.getPrimaries(at.workingColorSpace),ae=b.colorSpace===On?null:at.getPrimaries(b.colorSpace),fe=b.colorSpace===On||xe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Te=b.isCompressedTexture||b.image[0].isCompressedTexture,Xe=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!Te&&!Xe?Z[ne]=g(b.image[ne],!1,!0,s.maxCubemapSize):Z[ne]=Xe?b.image[ne].image:b.image[ne],Z[ne]=We(b,Z[ne]);let ht=Z[0],Qe=m(ht)||a,Le=r.convert(b.format,b.colorSpace),be=r.convert(b.type),pe=v(b.internalFormat,Le,be,b.colorSpace),He=a&&b.isVideoTexture!==!0,ct=Q.__version===void 0||j===!0,Rt=C(b,ht,Qe);V(n.TEXTURE_CUBE_MAP,b,Qe);let Ke;if(Te){He&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,ht.width,ht.height);for(let ne=0;ne<6;ne++){Ke=Z[ne].mipmaps;for(let P=0;P<Ke.length;P++){let re=Ke[P];b.format!==Un?Le!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,re.width,re.height,Le,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,pe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,re.width,re.height,Le,be,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,pe,re.width,re.height,0,Le,be,re.data)}}}else{Ke=b.mipmaps,He&&ct&&(Ke.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(Xe){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,Le,be,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Z[ne].width,Z[ne].height,0,Le,be,Z[ne].data);for(let P=0;P<Ke.length;P++){let oe=Ke[P].image[ne].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,oe.width,oe.height,Le,be,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,pe,oe.width,oe.height,0,Le,be,oe.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,be,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Le,be,Z[ne]);for(let P=0;P<Ke.length;P++){let re=Ke[P];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,Le,be,re.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,pe,Le,be,re.image[ne])}}}_(b,Qe)&&y(n.TEXTURE_CUBE_MAP),Q.__version=J.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ve(T,b,k,j,J,Q){let xe=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),fe=v(k.internalFormat,xe,ae,k.colorSpace);if(!i.get(b).__hasExternalTextures){let Xe=Math.max(1,b.width>>Q),Z=Math.max(1,b.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,fe,Xe,Z,b.depth,0,xe,ae,null):t.texImage2D(J,Q,fe,Xe,Z,0,xe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,J,i.get(k).__webglTexture,0,Ne(b)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,J,i.get(k).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(T,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||me(b)){let J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Mi?j=n.DEPTH_COMPONENT32F:J.type===Vi&&(j=n.DEPTH_COMPONENT24));let Q=Ne(b);me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,j,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,j,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let j=Ne(b);k&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<j.length;J++){let Q=j[J],xe=r.convert(Q.format,Q.colorSpace),ae=r.convert(Q.type),fe=v(Q.internalFormat,xe,ae,Q.colorSpace),Te=Ne(b);k&&me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,fe,b.width,b.height):me(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let j=i.get(b.depthTexture).__webglTexture,J=Ne(b);if(b.depthTexture.format===Cs)me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===Rr)me(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ae(T){let b=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,T)}else if(k){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=n.createRenderbuffer(),ze(b.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ze(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(T,b,k){let j=i.get(T);b!==void 0&&ve(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ae(T)}function z(T){let b=T.texture,k=i.get(T),j=i.get(b);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,o.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,xe=m(T)||a;if(J){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<b.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Q)if(s.drawBuffers){let ae=T.texture;for(let fe=0,Te=ae.length;fe<Te;fe++){let Xe=i.get(ae[fe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&me(T)===!1){let ae=Q?b:[b];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let Te=ae[fe];k.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);let Xe=r.convert(Te.format,Te.colorSpace),Z=r.convert(Te.type),ht=v(Te.internalFormat,Xe,Z,Te.colorSpace,T.isXRRenderTarget===!0),Qe=Ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ht,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),V(n.TEXTURE_CUBE_MAP,b,xe);for(let ae=0;ae<6;ae++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ve(k.__webglFramebuffer[ae][fe],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ve(k.__webglFramebuffer[ae],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(b,xe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let ae=T.texture;for(let fe=0,Te=ae.length;fe<Te;fe++){let Xe=ae[fe],Z=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),V(n.TEXTURE_2D,Xe,xe),ve(k.__webglFramebuffer,T,Xe,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_(Xe,xe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,j.__webglTexture),V(ae,b,xe),a&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)ve(k.__webglFramebuffer[fe],T,b,n.COLOR_ATTACHMENT0,ae,fe);else ve(k.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,ae,0);_(b,xe)&&y(ae),t.unbindTexture()}T.depthBuffer&&Ae(T)}function dn(T){let b=m(T)||a,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let j=0,J=k.length;j<J;j++){let Q=k[j];if(_(Q,b)){let xe=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(Q).__webglTexture;t.bindTexture(xe,ae),y(xe),t.unbindTexture()}}}function Se(T){if(a&&T.samples>0&&me(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,j=T.height,J=n.COLOR_BUFFER_BIT,Q=[],xe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){Q.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&Q.push(xe);let Xe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Xe===!1&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),fe){let Z=i.get(b[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,J,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]);let Xe=i.get(b[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ne(T){return Math.min(s.maxSamples,T.samples)}function me(T){let b=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function We(T,b){let k=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===hh||k!==Wt&&k!==On&&(at.getTransfer(k)===bt?a===!1?e.has("EXT_sRGB")===!0&&j===Un?(T.format=hh,T.minFilter=xn,T.generateMipmaps=!1):b=Ha.sRGBToLinear(b):(j!==Un||J!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=st,this.setupRenderTarget=z,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=me}function UM(n,e,t){let i=t.isWebGL2;function s(r,o=On){let a,l=at.getTransfer(o);if(r===Yi)return n.UNSIGNED_BYTE;if(r===Vp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===d0)return n.BYTE;if(r===f0)return n.SHORT;if(r===eu)return n.UNSIGNED_SHORT;if(r===Gp)return n.INT;if(r===Vi)return n.UNSIGNED_INT;if(r===Mi)return n.FLOAT;if(r===wo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===p0)return n.ALPHA;if(r===Un)return n.RGBA;if(r===m0)return n.LUMINANCE;if(r===g0)return n.LUMINANCE_ALPHA;if(r===Cs)return n.DEPTH_COMPONENT;if(r===Rr)return n.DEPTH_STENCIL;if(r===hh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===x0)return n.RED;if(r===Xp)return n.RED_INTEGER;if(r===y0)return n.RG;if(r===qp)return n.RG_INTEGER;if(r===Yp)return n.RGBA_INTEGER;if(r===bc||r===Sc||r===wc||r===Ec)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===rf||r===of||r===af)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===of)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lf||r===cf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lf)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hf||r===uf||r===df||r===ff||r===pf||r===mf||r===gf||r===xf||r===yf||r===_f||r===vf||r===Mf||r===bf||r===Sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ff)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_f)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===wf||r===Ef)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Tc)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_0||r===Tf||r===Af||r===Rf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Tc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Af)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Eh=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},OM={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Th=class extends Si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null,g=t.getContextAttributes(),m=null,f=null,_=[],y=[],v=new se,C=null,w=new Gt;w.layers.enable(1),w.viewport=new pt;let A=new Gt;A.layers.enable(2),A.viewport=new pt;let D=[w,A],M=new Eh;M.layers.enable(1),M.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=_[V];return K===void 0&&(K=new vo,_[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=_[V];return K===void 0&&(K=new vo,_[V]=K),K.getGripSpace()},this.getHand=function(V){let K=_[V];return K===void 0&&(K=new vo,_[V]=K),K.getHandSpace()};function G(V){let K=y.indexOf(V.inputSource);if(K===-1)return;let ce=_[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function te(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",L);for(let V=0;V<_.length;V++){let K=y[V];K!==null&&(y[V]=null,_[V].disconnect(K))}E=null,U=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",te),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new wi(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Rr:Cs,ce=g.stencil?Rs:Vi);let ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new wi(d.textureWidth,d.textureHeight,{format:Un,type:Yi,depthTexture:new $a(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let ze=e.properties.get(f);ze.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let K=0;K<V.removed.length;K++){let ce=V.removed[K],Me=y.indexOf(ce);Me>=0&&(y[Me]=null,_[Me].disconnect(ce))}for(let K=0;K<V.added.length;K++){let ce=V.added[K],Me=y.indexOf(ce);if(Me===-1){for(let ze=0;ze<_.length;ze++)if(ze>=y.length){y.push(ce),Me=ze;break}else if(y[ze]===null){y[ze]=ce,Me=ze;break}if(Me===-1)break}let ve=_[Me];ve&&ve.connect(ce)}}let O=new R,W=new R;function Y(V,K,ce){O.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);let Me=O.distanceTo(W),ve=K.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Be=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],z=(ve[9]-1)/ve[5],dn=(ve[8]-1)/ve[0],Se=(ze[8]+1)/ze[0],Ne=Be*dn,me=Be*Se,wt=Me/(-dn+Se),We=wt*-dn;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(wt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Be+wt,b=Ae+wt,k=Ne-We,j=me+(Me-We),J=st*Ae/b*T,Q=z*Ae/b*T;V.projectionMatrix.makePerspective(k,j,J,Q,T,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;M.near=A.near=w.near=V.near,M.far=A.far=w.far=V.far,(E!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,U=M.far);let K=V.parent,ce=M.cameras;q(M,K);for(let Me=0;Me<ce.length;Me++)q(ce[Me],K);ce.length===2?Y(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),X(V,M,K)};function X(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let $=null;function ee(V,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Me=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let ve=0;ve<ce.length;ve++){let ze=ce[ve],Be=null;if(p!==null)Be=p.getViewport(ze);else{let st=u.getViewSubImage(d,ze);Be=st.viewport,ve===0&&(e.setRenderTargetTextures(f,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(f))}let Ae=D[ve];Ae===void 0&&(Ae=new Gt,Ae.layers.enable(ve),Ae.viewport=new pt,D[ve]=Ae),Ae.matrix.fromArray(ze.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ze.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Be.x,Be.y,Be.width,Be.height),ve===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(Ae)}}for(let ce=0;ce<_.length;ce++){let Me=y[ce],ve=_[ce];Me!==null&&ve!==void 0&&ve.update(Me,K,c||o)}$&&$(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let de=new nm;de.setAnimationLoop(ee),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}};function zM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,tm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let v=y.program;i.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(x(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let C=y.program;i.updateUBOMapping(_,C);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let y=u();_.__bindingPointIndex=y;let v=n.createBuffer(),C=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,E=D.length;M<E;M++){let U=D[M];if(p(U,w,M,C)===!0){let G=U.__offset,te=Array.isArray(U.value)?U.value:[U.value],L=0;for(let O=0;O<te.length;O++){let W=te[O],Y=g(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+L,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,y,v,C){let w=_.value,A=y+"_"+v;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{let D=C[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return C[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function x(_){let y=_.uniforms,v=0,C=16;for(let A=0,D=y.length;A<D;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,U=M.length;E<U;E++){let G=M[E],te=Array.isArray(G.value)?G.value:[G.value];for(let L=0,O=te.length;L<O;L++){let W=te[L],Y=g(W),q=v%C;q!==0&&C-q<Y.boundary&&(v+=C-q),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=Y.storage}}}let w=v%C;return w>0&&(v+=C-w),_.__size=v,_.__cache={},this}function g(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ao=class{constructor(e={}){let{canvas:t=Y0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;let y=this,v=!1,C=0,w=0,A=null,D=-1,M=null,E=new pt,U=new pt,G=null,te=new _e(0),L=0,O=t.width,W=t.height,Y=1,q=null,X=null,$=new pt(0,0,O,W),ee=new pt(0,0,O,W),de=!1,V=new To,K=!1,ce=!1,Me=null,ve=new ke,ze=new se,Be=new R,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return A===null?Y:1}let z=i;function dn(S,N){for(let B=0;B<S.length;B++){let H=S[B],F=t.getContext(H,N);if(F!==null)return F}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",re,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),z=dn(N,S),z===null)throw dn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,Ne,me,wt,We,T,b,k,j,J,Q,xe,ae,fe,Te,Xe,Z,ht,Qe,Le,be,pe,He,ct;function Rt(){Se=new iv(z),Ne=new $_(z,Se,e),Se.init(Ne),pe=new UM(z,Se,Ne),me=new DM(z,Se,Ne),wt=new ov(z),We=new MM,T=new NM(z,Se,me,We,Ne,pe,wt),b=new Q_(y),k=new nv(y),j=new px(z,Ne),He=new Z_(z,Se,j,Ne),J=new sv(z,j,wt,He),Q=new hv(z,J,j,wt),Qe=new cv(z,Ne,T),Xe=new j_(We),xe=new vM(y,b,k,Se,Ne,He,Xe),ae=new zM(y,We),fe=new SM,Te=new CM(Se,Ne),ht=new K_(y,b,k,me,Q,d,l),Z=new LM(y,Q,Ne),ct=new FM(z,wt,Ne,me),Le=new J_(z,Se,wt,Ne),be=new rv(z,Se,wt,Ne),wt.programs=xe.programs,y.capabilities=Ne,y.extensions=Se,y.properties=We,y.renderLists=fe,y.shadowMap=Z,y.state=me,y.info=wt}Rt();let Ke=new Th(y,z);this.xr=Ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(O,W,!1))},this.getSize=function(S){return S.set(O,W)},this.setSize=function(S,N,B=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,W=N,t.width=Math.floor(S*Y),t.height=Math.floor(N*Y),B===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(O*Y,W*Y).floor()},this.setDrawingBufferSize=function(S,N,B){O=S,W=N,Y=B,t.width=Math.floor(S*B),t.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,N,B,H){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,N,B,H),me.viewport(E.copy($).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,N,B,H){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,N,B,H),me.scissor(U.copy(ee).multiplyScalar(Y).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){me.setScissorTest(de=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(S=!0,N=!0,B=!0){let H=0;if(S){let F=!1;if(A!==null){let ue=A.texture.format;F=ue===Yp||ue===qp||ue===Xp}if(F){let ue=A.texture.type,ye=ue===Yi||ue===Vi||ue===eu||ue===Rs||ue===Vp||ue===Wp,Ee=ht.getClearColor(),Pe=ht.getClearAlpha(),qe=Ee.r,Ue=Ee.g,Fe=Ee.b;ye?(p[0]=qe,p[1]=Ue,p[2]=Fe,p[3]=Pe,z.clearBufferuiv(z.COLOR,0,p)):(x[0]=qe,x[1]=Ue,x[2]=Fe,x[3]=Pe,z.clearBufferiv(z.COLOR,0,x))}else H|=z.COLOR_BUFFER_BIT}N&&(H|=z.DEPTH_BUFFER_BIT),B&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",re,!1),fe.dispose(),Te.dispose(),We.dispose(),b.dispose(),k.dispose(),Q.dispose(),He.dispose(),ct.dispose(),xe.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",fn),Ke.removeEventListener("sessionend",_t),Me&&(Me.dispose(),Me=null),pn.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let S=wt.autoReset,N=Z.enabled,B=Z.autoUpdate,H=Z.needsUpdate,F=Z.type;Rt(),wt.autoReset=S,Z.enabled=N,Z.autoUpdate=B,Z.needsUpdate=H,Z.type=F}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){let N=S.target;N.removeEventListener("dispose",oe),Re(N)}function Re(S){we(S),We.remove(S)}function we(S){let N=We.get(S).programs;N!==void 0&&(N.forEach(function(B){xe.releaseProgram(B)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,H,F,ue){N===null&&(N=Ae);let ye=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Cg(S,N,B,H,F);me.setMaterial(H,ye);let Pe=B.index,qe=1;if(H.wireframe===!0){if(Pe=J.getWireframeAttribute(B),Pe===void 0)return;qe=2}let Ue=B.drawRange,Fe=B.attributes.position,Dt=Ue.start*qe,Rn=(Ue.start+Ue.count)*qe;ue!==null&&(Dt=Math.max(Dt,ue.start*qe),Rn=Math.min(Rn,(ue.start+ue.count)*qe)),Pe!==null?(Dt=Math.max(Dt,0),Rn=Math.min(Rn,Pe.count)):Fe!=null&&(Dt=Math.max(Dt,0),Rn=Math.min(Rn,Fe.count));let Zt=Rn-Dt;if(Zt<0||Zt===1/0)return;He.setup(F,H,Ee,B,Pe);let di,Et=Le;if(Pe!==null&&(di=j.get(Pe),Et=be,Et.setIndex(di)),F.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*st()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(F.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),me.setLineWidth(Ze*st()),F.isLineSegments?Et.setMode(z.LINES):F.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else F.isPoints?Et.setMode(z.POINTS):F.isSprite&&Et.setMode(z.TRIANGLES);if(F.isBatchedMesh)Et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Et.renderInstances(Dt,Zt,F.count);else if(B.isInstancedBufferGeometry){let Ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,yc=Math.min(B.instanceCount,Ze);Et.renderInstances(Dt,Zt,yc)}else Et.render(Dt,Zt)};function xt(S,N,B){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,ea(S,N,B),S.side=ii,S.needsUpdate=!0,ea(S,N,B),S.side=$t):ea(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),m=Te.get(B),m.init(),_.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);let H=new Set;return S.traverse(function(F){let ue=F.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){let Ee=ue[ye];xt(Ee,B,F),H.add(Ee)}else xt(ue,B,F),H.add(ue)}),_.pop(),m=null,H},this.compileAsync=function(S,N,B=null){let H=this.compile(S,N,B);return new Promise(F=>{function ue(){if(H.forEach(function(ye){We.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){F(S);return}setTimeout(ue,10)}Se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let yt=null;function Kt(S){yt&&yt(S)}function fn(){pn.stop()}function _t(){pn.start()}let pn=new nm;pn.setAnimationLoop(Kt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(S){yt=S,Ke.setAnimationLoop(S),S===null?pn.stop():pn.start()},Ke.addEventListener("sessionstart",fn),Ke.addEventListener("sessionend",_t),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(N),N=Ke.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,A),m=Te.get(S,_.length),m.init(),_.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,K=Xe.init(this.clippingPlanes,ce),g=fe.get(S,f.length),g.init(),f.push(g),ei(S,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,X),this.info.render.frame++,K===!0&&Xe.beginShadows();let B=m.state.shadowsArray;if(Z.render(B,S,N),K===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(g,S),m.setupLights(y._useLegacyLights),N.isArrayCamera){let H=N.cameras;for(let F=0,ue=H.length;F<ue;F++){let ye=H[F];Wd(g,S,ye,ye.viewport)}}else Wd(g,S,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,N),He.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function ei(S,N,B,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let ye=Q.update(S),Ee=S.material;Ee.visible&&g.push(S,ye,Ee,B,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){let ye=Q.update(S),Ee=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Be.copy(ye.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){let Pe=ye.groups;for(let qe=0,Ue=Pe.length;qe<Ue;qe++){let Fe=Pe[qe],Dt=Ee[Fe.materialIndex];Dt&&Dt.visible&&g.push(S,ye,Dt,B,Be.z,Fe)}}else Ee.visible&&g.push(S,ye,Ee,B,Be.z,null)}}let ue=S.children;for(let ye=0,Ee=ue.length;ye<Ee;ye++)ei(ue[ye],N,B,H)}function Wd(S,N,B,H){let F=S.opaque,ue=S.transmissive,ye=S.transparent;m.setupLightsView(B),K===!0&&Xe.setGlobalState(y.clippingPlanes,B),ue.length>0&&Rg(F,ue,N,B),H&&me.viewport(E.copy(H)),F.length>0&&Qo(F,N,B),ue.length>0&&Qo(ue,N,B),ye.length>0&&Qo(ye,N,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Rg(S,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ue=Ne.isWebGL2;Me===null&&(Me=new wi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?wo:Yi,minFilter:Ki,samples:ue?4:0})),y.getDrawingBufferSize(ze),ue?Me.setSize(ze.x,ze.y):Me.setSize(Ba(ze.x),Ba(ze.y));let ye=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(te),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Ee=y.toneMapping;y.toneMapping=qi,Qo(S,B,H),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Pe=!1;for(let qe=0,Ue=N.length;qe<Ue;qe++){let Fe=N[qe],Dt=Fe.object,Rn=Fe.geometry,Zt=Fe.material,di=Fe.group;if(Zt.side===$t&&Dt.layers.test(H.layers)){let Et=Zt.side;Zt.side=Mn,Zt.needsUpdate=!0,Xd(Dt,B,H,Rn,Zt,di),Zt.side=Et,Zt.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),y.setRenderTarget(ye),y.setClearColor(te,L),y.toneMapping=Ee}function Qo(S,N,B){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ue=S.length;F<ue;F++){let ye=S[F],Ee=ye.object,Pe=ye.geometry,qe=H===null?ye.material:H,Ue=ye.group;Ee.layers.test(B.layers)&&Xd(Ee,N,B,Pe,qe,Ue)}}function Xd(S,N,B,H,F,ue){S.onBeforeRender(y,N,B,H,F,ue),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,N,B,H,S,ue),F.transparent===!0&&F.side===$t&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,y.renderBufferDirect(B,N,H,F,S,ue),F.side=ii,F.needsUpdate=!0,y.renderBufferDirect(B,N,H,F,S,ue),F.side=$t):y.renderBufferDirect(B,N,H,F,S,ue),S.onAfterRender(y,N,B,H,F,ue)}function ea(S,N,B){N.isScene!==!0&&(N=Ae);let H=We.get(S),F=m.state.lights,ue=m.state.shadowsArray,ye=F.state.version,Ee=xe.getParameters(S,F.state,ue,N,B),Pe=xe.getProgramCacheKey(Ee),qe=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?k:b).get(S.envMap||H.environment),qe===void 0&&(S.addEventListener("dispose",oe),qe=new Map,H.programs=qe);let Ue=qe.get(Pe);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ye)return Yd(S,Ee),Ue}else Ee.uniforms=xe.getUniforms(S),S.onBuild(B,Ee,y),S.onBeforeCompile(Ee,y),Ue=xe.acquireProgram(Ee,Pe),qe.set(Pe,Ue),H.uniforms=Ee.uniforms;let Fe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Xe.uniform),Yd(S,Ee),H.needsLights=Ig(S),H.lightsStateVersion=ye,H.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function qd(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Er.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Yd(S,N){let B=We.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Cg(S,N,B,H,F){N.isScene!==!0&&(N=Ae),T.resetTextureUnits();let ue=N.fog,ye=H.isMeshStandardMaterial?N.environment:null,Ee=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt,Pe=(H.isMeshStandardMaterial?k:b).get(H.envMap||ye),qe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!B.morphAttributes.position,Dt=!!B.morphAttributes.normal,Rn=!!B.morphAttributes.color,Zt=qi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let di=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Et=di!==void 0?di.length:0,Ze=We.get(H),yc=m.state.lights;if(K===!0&&(ce===!0||S!==M)){let Dn=S===M&&H.id===D;Xe.setState(H,S,Dn)}let Ct=!1;H.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==yc.state.version||Ze.outputColorSpace!==Ee||F.isBatchedMesh&&Ze.batching===!1||!F.isBatchedMesh&&Ze.batching===!0||F.isInstancedMesh&&Ze.instancing===!1||!F.isInstancedMesh&&Ze.instancing===!0||F.isSkinnedMesh&&Ze.skinning===!1||!F.isSkinnedMesh&&Ze.skinning===!0||F.isInstancedMesh&&Ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ze.instancingColor===!1&&F.instanceColor!==null||Ze.envMap!==Pe||H.fog===!0&&Ze.fog!==ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Xe.numPlanes||Ze.numIntersection!==Xe.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Ue||Ze.morphTargets!==Fe||Ze.morphNormals!==Dt||Ze.morphColors!==Rn||Ze.toneMapping!==Zt||Ne.isWebGL2===!0&&Ze.morphTargetsCount!==Et)&&(Ct=!0):(Ct=!0,Ze.__version=H.version);let ys=Ze.currentProgram;Ct===!0&&(ys=ea(H,N,F));let Kd=!1,so=!1,_c=!1,nn=ys.getUniforms(),_s=Ze.uniforms;if(me.useProgram(ys.program)&&(Kd=!0,so=!0,_c=!0),H.id!==D&&(D=H.id,so=!0),Kd||M!==S){nn.setValue(z,"projectionMatrix",S.projectionMatrix),nn.setValue(z,"viewMatrix",S.matrixWorldInverse);let Dn=nn.map.cameraPosition;Dn!==void 0&&Dn.setValue(z,Be.setFromMatrixPosition(S.matrixWorld)),Ne.logarithmicDepthBuffer&&nn.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&nn.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,so=!0,_c=!0)}if(F.isSkinnedMesh){nn.setOptional(z,F,"bindMatrix"),nn.setOptional(z,F,"bindMatrixInverse");let Dn=F.skeleton;Dn&&(Ne.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),nn.setValue(z,"boneTexture",Dn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(nn.setOptional(z,F,"batchingTexture"),nn.setValue(z,"batchingTexture",F._matricesTexture,T));let vc=B.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&Ne.isWebGL2===!0)&&Qe.update(F,B,ys),(so||Ze.receiveShadow!==F.receiveShadow)&&(Ze.receiveShadow=F.receiveShadow,nn.setValue(z,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(_s.envMap.value=Pe,_s.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),so&&(nn.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Pg(_s,_c),ue&&H.fog===!0&&ae.refreshFogUniforms(_s,ue),ae.refreshMaterialUniforms(_s,H,Y,W,Me),Er.upload(z,qd(Ze),_s,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Er.upload(z,qd(Ze),_s,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&nn.setValue(z,"center",F.center),nn.setValue(z,"modelViewMatrix",F.modelViewMatrix),nn.setValue(z,"normalMatrix",F.normalMatrix),nn.setValue(z,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Dn=H.uniformsGroups;for(let Mc=0,Lg=Dn.length;Mc<Lg;Mc++)if(Ne.isWebGL2){let Zd=Dn[Mc];ct.update(Zd,ys),ct.bind(Zd,ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ys}function Pg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ig(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,B){We.get(S.texture).__webglTexture=N,We.get(S.depthTexture).__webglTexture=B;let H=We.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let B=We.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,B=0){A=S,C=N,w=B;let H=!0,F=null,ue=!1,ye=!1;if(S){let Pe=We.get(S);Pe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Pe.__webglFramebuffer===void 0?T.setupRenderTarget(S):Pe.__hasExternalTextures&&T.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);let qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ye=!0);let Ue=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?F=Ue[N][B]:F=Ue[N],ue=!0):Ne.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?F=We.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[B]:F=Ue,E.copy(S.viewport),U.copy(S.scissor),G=S.scissorTest}else E.copy($).multiplyScalar(Y).floor(),U.copy(ee).multiplyScalar(Y).floor(),G=de;if(me.bindFramebuffer(z.FRAMEBUFFER,F)&&Ne.drawBuffers&&H&&me.drawBuffers(S,F),me.viewport(E),me.scissor(U),me.setScissorTest(G),ue){let Pe=We.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,B)}else if(ye){let Pe=We.get(S.texture),qe=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,B||0,qe)}D=-1},this.readRenderTargetPixels=function(S,N,B,H,F,ue,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){me.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let Pe=S.texture,qe=Pe.format,Ue=Pe.type;if(qe!==Un&&pe.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ue===wo&&(Se.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ue!==Yi&&pe.convert(Ue)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Mi&&(Ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&B>=0&&B<=S.height-F&&z.readPixels(N,B,H,F,pe.convert(qe),pe.convert(Ue),ue)}finally{let Pe=A!==null?We.get(A).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(S,N,B=0){let H=Math.pow(2,-B),F=Math.floor(N.image.width*H),ue=Math.floor(N.image.height*H);T.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,S.x,S.y,F,ue),me.unbindTexture()},this.copyTextureToTexture=function(S,N,B,H=0){let F=N.image.width,ue=N.image.height,ye=pe.convert(B.format),Ee=pe.convert(B.type);T.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,F,ue,ye,Ee,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,ye,Ee,N.image),H===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(S,N,B,H,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=S.max.x-S.min.x+1,ye=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Pe=pe.convert(H.format),qe=pe.convert(H.type),Ue;if(H.isData3DTexture)T.setTexture3D(H,0),Ue=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Ue=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Fe=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Rn=z.getParameter(z.UNPACK_SKIP_PIXELS),Zt=z.getParameter(z.UNPACK_SKIP_ROWS),di=z.getParameter(z.UNPACK_SKIP_IMAGES),Et=B.isCompressedTexture?B.mipmaps[F]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Ue,F,N.x,N.y,N.z,ue,ye,Ee,Pe,qe,Et.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ue,F,N.x,N.y,N.z,ue,ye,Ee,Pe,Et.data)):z.texSubImage3D(Ue,F,N.x,N.y,N.z,ue,ye,Ee,Pe,qe,Et),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Rn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,di),F===0&&H.generateMipmaps&&z.generateMipmap(Ue),me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,me.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===iu?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===vl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Ps:Jp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ps?dt:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ah=class extends Ao{};Ah.prototype.isWebGL1Renderer=!0;var ja=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qa=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new R,Ds=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,co=new R,mr=new R,gr=new R,xr=new se,ho=new se,lm=new ke,Sa=new R,uo=new R,wa=new R,mp=new se,Jc=new se,gp=new se,Ur=class extends vt{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nr(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Ds(i,3,0,!1)),pr.setAttribute("uv",new Ds(i,2,3,!1))}this.geometry=pr,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),lm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ea(Sa.set(-.5,-.5,0),gr,o,mr,s,r),Ea(uo.set(.5,-.5,0),gr,o,mr,s,r),Ea(wa.set(.5,.5,0),gr,o,mr,s,r),mp.set(0,0),Jc.set(1,0),gp.set(1,1);let a=e.ray.intersectTriangle(Sa,uo,wa,!1,co);if(a===null&&(Ea(uo.set(-.5,.5,0),gr,o,mr,s,r),Jc.set(0,1),a=e.ray.intersectTriangle(Sa,wa,uo,!1,co),a===null))return;let l=e.ray.origin.distanceTo(co);l<e.near||l>e.far||t.push({distance:l,point:co.clone(),uv:As.getInterpolation(co,Sa,uo,wa,mp,Jc,gp,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ea(n,e,t,i,s,r){xr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ho.x=r*xr.x-s*xr.y,ho.y=s*xr.x+r*xr.y):ho.copy(xr),n.copy(e),n.x+=ho.x,n.y+=ho.y,n.applyMatrix4(lm)}var xp=new R,yp=new pt,_p=new pt,kM=new R,vp=new ke,Ta=new R,$c=new Ln,Mp=new ke,jc=new Ir,el=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ta),this.boundingSphere.expandByPoint(Ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(s),e.ray.intersectsSphere($c)!==!1&&(Mp.copy(s).invert(),jc.copy(e.ray).applyMatrix4(Mp),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;yp.fromBufferAttribute(s.attributes.skinIndex,e),_p.fromBufferAttribute(s.attributes.skinWeight,e),xp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=_p.getComponent(r);if(o!==0){let a=yp.getComponent(r);vp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(kM.copy(xp).applyMatrix4(vp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ro=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rh=class extends tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bt,h=Bt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bp=new ke,BM=new ke,tl=class n{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:BM;bp.multiplyMatrices(a,t[r]),bp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Rh(t,e,e,Un,Mi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ro),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Us=class extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new ke,Sp=new ke,Aa=[],wp=new yn,HM=new ke,fo=new ge,po=new Ln,Os=class extends ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,HM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),wp.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(wp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),po.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Sp.multiplyMatrices(i,yr),fo.matrixWorld=Sp,fo.raycast(e,Aa);for(let o=0,a=Aa.length;o<a;o++){let l=Aa[o];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ep=new R,Tp=new R,Ap=new ke,Qc=new Ir,Ra=new Ln,Or=class extends vt{constructor(e=new Pt,t=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ep.fromBufferAttribute(t,s-1),Tp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ep.distanceTo(Tp);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Ap.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){let f=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let y=f,v=_-1;y<v;y+=p){let C=x.getX(y),w=x.getX(y+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,w),Qc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=f,v=_-1;y<v;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Qc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Rp=new R,Cp=new R,nl=class extends Or{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rp.fromBufferAttribute(t,s),Cp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},il=class extends Or{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Po=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new ke,Ch=new Ir,Ca=new Ln,Pa=new R,sl=class extends vt{constructor(e=new Pt,t=new Po){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Pp.copy(s).invert(),Ch.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,g=p;x<g;x++){let m=c.getX(x);Pa.fromBufferAttribute(u,m),Ip(Pa,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p;x<g;x++)Pa.fromBufferAttribute(u,x),Ip(Pa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ip(n,e,t,i,s,r,o){let a=Ch.distanceSqToPoint(n);if(a<t){let l=new R;Ch.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var zr=class extends tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,s=[],r=[],o=[],a=new R,l=new ke;for(let p=0;p<=e;p++){let x=p/e;s[p]=this.getTangentAt(x,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ht(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ht(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Io=class extends zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ph=class extends Io{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ou(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Ia=new R,eh=new ou,th=new ou,nh=new ou,Ih=class extends zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),eh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,g,m),th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,g,m),nh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(eh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),nh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(eh.calc(l),th.calc(l),nh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function GM(n,e){let t=1-n;return t*t*e}function VM(n,e){return 2*(1-n)*n*e}function WM(n,e){return n*n*e}function Mo(n,e,t,i){return GM(n,e)+VM(n,t)+WM(n,i)}function XM(n,e){let t=1-n;return t*t*t*e}function qM(n,e){let t=1-n;return 3*t*t*n*e}function YM(n,e){return 3*(1-n)*n*n*e}function KM(n,e){return n*n*n*e}function bo(n,e,t,i,s){return XM(n,e)+qM(n,t)+YM(n,i)+KM(n,s)}var rl=class extends zn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lh=class extends zn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,s.x,r.x,o.x,a.x),bo(e,s.y,r.y,o.y,a.y),bo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends zn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends zn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends zn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nh=class extends zn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y),Mo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Lp(a,l.x,c.x,h.x,u.x),Lp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Dp=Object.freeze({__proto__:null,ArcCurve:Ph,CatmullRomCurve3:Ih,CubicBezierCurve:rl,CubicBezierCurve3:Lh,EllipseCurve:Io,LineCurve:ol,LineCurve3:Dh,QuadraticBezierCurve:al,QuadraticBezierCurve3:Nh,SplineCurve:ll}),Uh=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dp[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Dp[s.type]().fromJSON(s))}return this}},Oh=class extends Uh{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ol(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new al(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new rl(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ll(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Io(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zh=class n extends Pt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new R,d=new se,p=new R,x=new R,g=new R,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(x)}for(let _=0;_<=t;_++){let y=i+_*h*s,v=Math.sin(y),C=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*C,o.push(u.x,u.y,u.z),d.x=_/t,d.y=w/(e.length-1),a.push(d.x,d.y);let A=l[3*w+0]*v,D=l[3*w+1],M=l[3*w+0]*C;c.push(A,D,M)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,C=v,w=v+e.length,A=v+e.length+1,D=v+1;r.push(C,w,D),r.push(A,D,w)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},cl=class n extends zh{constructor(e=1,t=1,i=4,s=8){let r=new Oh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},hl=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zi=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,g=[],m=i/2,f=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(p,2));function _(){let v=new R,C=new R,w=0,A=(t-e)/i;for(let D=0;D<=r;D++){let M=[],E=D/r,U=E*(t-e)+e;for(let G=0;G<=s;G++){let te=G/s,L=te*l+a,O=Math.sin(L),W=Math.cos(L);C.x=U*O,C.y=-E*i+m,C.z=U*W,u.push(C.x,C.y,C.z),v.set(O,A,W).normalize(),d.push(v.x,v.y,v.z),p.push(te,1-E),M.push(x++)}g.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let E=g[M][D],U=g[M+1][D],G=g[M+1][D+1],te=g[M][D+1];h.push(E,U,te),h.push(U,G,te),w+=6}c.addGroup(f,w,0),f+=w}function y(v){let C=x,w=new se,A=new R,D=0,M=v===!0?e:t,E=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),x++;let U=x;for(let G=0;G<=s;G++){let L=G/s*l+a,O=Math.cos(L),W=Math.sin(L);A.x=M*W,A.y=m*E,A.z=M*O,u.push(A.x,A.y,A.z),d.push(0,E,0),w.x=O*.5+.5,w.y=W*.5*E+.5,p.push(w.x,w.y),x++}for(let G=0;G<s;G++){let te=C+G,L=U+G;v===!0?h.push(L,L+1,te):h.push(L+1,L,te),D+=3}c.addGroup(f,D,v===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class n extends Zi{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fh=class n extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new R,v=new R,C=new R;for(let w=0;w<t.length;w+=3)p(t[w+0],y),p(t[w+1],v),p(t[w+2],C),l(y,v,C,_)}function l(_,y,v,C){let w=C+1,A=[];for(let D=0;D<=w;D++){A[D]=[];let M=_.clone().lerp(v,D/w),E=y.clone().lerp(v,D/w),U=w-D;for(let G=0;G<=U;G++)G===0&&D===w?A[D][G]=M:A[D][G]=M.clone().lerp(E,G/U)}for(let D=0;D<w;D++)for(let M=0;M<2*(w-D)-1;M++){let E=Math.floor(M/2);M%2===0?(d(A[D][E+1]),d(A[D+1][E]),d(A[D][E])):(d(A[D][E+1]),d(A[D+1][E+1]),d(A[D+1][E]))}}function c(_){let y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new R;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,C=f(_)/Math.PI+.5;o.push(v,1-C)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],C=o[_+4],w=Math.max(y,v,C),A=Math.min(y,v,C);w>.9&&A<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function p(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function x(){let _=new R,y=new R,v=new R,C=new R,w=new se,A=new se,D=new se;for(let M=0,E=0;M<r.length;M+=9,E+=6){_.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),D.set(o[E+4],o[E+5]),C.copy(_).add(y).add(v).divideScalar(3);let U=m(C);g(w,E+0,_,U),g(A,E+2,y,U),g(D,E+4,v,U)}}function g(_,y,v,C){C<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Fr=class n extends Fh{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ji=class n extends Pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,p=new R,x=new se;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let g=0;g<s;g++){let m=g*(i+1);for(let f=0;f<i;f++){let _=f+m,y=_,v=_+i+1,C=_+i+2,w=_+1;a.push(y,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var si=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){let _=[],y=f/i,v=0;f===0&&o===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let w=C/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+v,1-y),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let y=h[f][_+1],v=h[f][_],C=h[f+1][_],w=h[f+1][_+1];(f!==0||o>0)&&p.push(y,v,w),(f!==i-1||l<Math.PI)&&p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var lt=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function La(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ZM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function JM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Np(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function cm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var $i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends $i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_r,endingEnd:_r}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vr:r=e,a=2*t-i;break;case Ua:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vr:o=e,l=2*i-t;break;case Ua:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(i-t)/(s-t),g=x*x,m=g*x,f=-d*m+2*d*g-d*x,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,y=(-1-p)*m+(1.5+p)*g+.5*x,v=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+_*o[c+C]+y*o[l+C]+v*o[u+C];return r}},ul=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Bh=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ZM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ac,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let x=0;x!==i;++x){let g=t[u+x];if(g!==t[d+x]||g!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ls;var ji=class extends kn{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Cr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends kn{};dl.prototype.ValueTypeName="color";var Ai=class extends kn{};Ai.prototype.ValueTypeName="number";var Hh=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jn=class extends kn{InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}};Jn.prototype.ValueTypeName="quaternion";Jn.prototype.DefaultInterpolation=Ls;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends kn{};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Cr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends kn{};ri.prototype.ValueTypeName="vector";var zs=class{constructor(e,t=-1,i,s=nu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(jM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(kn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=JM(l);l=Np(l,1,h),c=Np(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,x,g){if(p.length!==0){let m=[],f=[];cm(p,m,f,x),m.length!==0&&g.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)p[d[x].morphTargets[g]]=-1;for(let g in p){let m=[],f=[];for(let _=0;_!==d[x].morphTargets.length;++_){let y=d[x];m.push(y.time),f.push(y.morphTarget===g?1:0)}s.push(new Ai(".morphTargetInfluence["+g+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(ri,p+".position",d,"pos",s),i(Jn,p+".quaternion",d,"rot",s),i(ri,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function $M(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return dl;case"quaternion":return Jn;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function jM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$M(n.type);if(n.times===void 0){let t=[],i=[];cm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Gh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},QM=new Gh,Ri=class{constructor(e){this.manager=e!==void 0?e:QM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},Lo=class extends Ri{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=yi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,x=p!==0,g=0,m=new ReadableStream({start(f){_();function _(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{g+=v.byteLength;let C=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:p});for(let w=0,A=h.length;w<A;w++){let D=h[w];D.onProgress&&D.onProgress(C)}f.enqueue(v),_()}})}}});return new Response(m)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Wi.add(e,c);let h=yi[e];delete yi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wh=class extends Ri{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Eo("img");function l(){h(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var fl=class extends Ri{constructor(e){super(e)}load(e,t,i,s){let r=new tn,o=new Wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},kr=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},pl=class extends kr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ih=new ke,Up=new R,Op=new R,Do=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),Op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Op),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xh=class extends Do{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ml=class extends kr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new ke,mo=new R,sh=new R,qh=class extends Do{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),sh.copy(i.position),sh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sh),i.updateMatrixWorld(),s.makeTranslation(-mo.x,-mo.y,-mo.z),zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}},Br=class extends kr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yh=class extends Do{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var es=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gl=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}};var xl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fp(){return(typeof performance>"u"?Date:performance).now()}var Kh=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){en.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let o=this._workIndex*r;en.multiplyQuaternionsFlat(e,o,e,t,e,i),en.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[i+o]*s}}},au="\\[\\]\\.:\\/",eb=new RegExp("["+au+"]","g"),lu="[^"+au+"]",tb="[^"+au.replace("\\.","")+"]",nb=/((?:WC+[\/:])*)/.source.replace("WC",lu),ib=/(WCOD+)?/.source.replace("WCOD",tb),sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),ob=new RegExp("^"+nb+ib+sb+rb+"$"),ab=["material","materials","bones","map"],Zh=class{constructor(e,t,i){let s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eb,"")}static parseTrackName(e){let t=ob.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ab.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Zh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jh=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:_r,endingEnd:_r};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=v0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case b0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case nu:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,o=i===M0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===tu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=vr,s.endingEnd=vr):(e?s.endingStart=this.zeroSlopeAtStart?vr:_r:s.endingStart=Ua,t?s.endingEnd=this.zeroSlopeAtEnd?vr:_r:s.endingEnd=Ua)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=i,this}},lb=new Float32Array(1),Fs=class extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],p=d.name,x=h[p];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,p));continue}let g=t&&t._propertyBindings[u].binding.parsedPath;x=new Kh(ft.create(i,p,g),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,p),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new ul(new Float32Array(2),new Float32Array(2),1,lb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,o=typeof e=="string"?zs.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=nu),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Jh(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?zs.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function cu(n,e){if(e===Zp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===No||e===_l){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===No)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Wr=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=es.extractUrlBase(e);o=es.resolveURL(c,this.path)}else o=es.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pm){try{o[tt.KHR_BINARY_GLTF]=new Pu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new pu;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Iu(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Lu;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Du;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function cb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Br(h),c.distance=u;break;case"spot":c=new ml(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ns(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},pu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,i){let s=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Tu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ru=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Cu=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let x of u){let g=new ke,m=new R,f=new en,_=new R(1,1,1),y=new Os(x.geometry,x.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(m,f,_));for(let v in l)if(v==="_COLOR_0"){let C=l[v];y.instanceColor=new Us(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&x.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},pm="glTF",Uo=12,hm={JSON:1313821514,BIN:5130562},Pu=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Uo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Uo,r=new DataView(e,Uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===hm.JSON){let c=new Uint8Array(e,Uo+o,a);this.content=i.decode(c)}else if(l===hm.BIN){let c=Uo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Iu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Uu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Uu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],p=Vr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let x in p.attributes){let g=p.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(p)},a,c,Wt,d)})})}},Lu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Sl=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,x=e*c,g=x-c,m=-2*p+3*d,f=p-d,_=1-m,y=f-d+u;for(let v=0;v!==a;v++){let C=o[g+v+a],w=o[g+v+l]*h,A=o[x+v+a],D=o[x+v]*h;r[v]=_*C+y*w+m*A+f*D}return r}},hb=new en,Nu=class extends Sl{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return hb.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:Bt,9729:xn,9984:Na,9985:Qh,9986:go,9987:Ki},dm={33071:In,33648:So,10497:Is},hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ub={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Cr},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function db(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function ks(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ns(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fb(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function pb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mb(n){let e,t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+du(t.attributes):e=n.indices+":"+du(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+du(n.targets[i]);return e}function du(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ou(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var xb=new ke,zu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new fl(this.options.manager):this.textureLoader=new gl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ks(r,a,s),ns(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(es.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=hu[s.type],a=Vr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=hu[s.type],c=Vr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,g,m;if(p&&p!==u){let f=Math.floor(d/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,y=t.cache.get(_);y||(g=new c(a,f*p,s.count*p/h),y=new Nr(g,p/h),t.cache.add(_,y)),m=new Ds(y,l,d%p/h,x)}else a===null?g=new c(s.count*l):g=new c(a,d,s.count*l),m=new Vt(g,l,x);if(s.sparse!==void 0){let f=hu.SCALAR,_=Vr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,C=new _(o[1],y,s.sparse.count*f),w=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=C.length;A<D;A++){let M=C[A];if(m.setX(M,w[A*l]),l>=2&&m.setY(M,w[A*l+1]),l>=3&&m.setZ(M,w[A*l+2]),l>=4&&m.setW(M,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=um[d.magFilter]||xn,h.minFilter=um[d.minFilter]||Ki,h.wrapS=dm[d.wrapS]||Is,h.wrapT=dm[d.wrapT]||Is,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){let m=new tn(g);m.needsUpdate=!0,d(m)}),t.load(es.resolveURL(u,r.path),x,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||gb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Po,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Co,bn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return lt}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$t);let h=r.alphaMode||uu.OPAQUE;if(h===uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===uu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){let u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ns(u,r),t.associations.set(u,{materials:e}),r.extensions&&ks(s,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=mb(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fm(new Pt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?db(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[p],f,_=c[p];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new el(g,_):new ge(g,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?f.geometry=cu(f.geometry,_l):m.mode===Bn.TRIANGLE_FAN&&(f.geometry=cu(f.geometry,No));else if(m.mode===Bn.LINES)f=new nl(g,_);else if(m.mode===Bn.LINE_STRIP)f=new Or(g,_);else if(m.mode===Bn.LINE_LOOP)f=new il(g,_);else if(m.mode===Bn.POINTS)f=new sl(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&pb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ns(f,r),m.extensions&&ks(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ks(s,u[0],r),u[0];let d=new Nt;r.extensions&&ks(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,x=u.length;p<x;p++)d.add(u[p]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt($n.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Dr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ns(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tl(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],x=s.samplers[p.sampler],g=p.target,m=g.node,f=s.parameters!==void 0?s.parameters[x.input]:x.input,_=s.parameters!==void 0?s.parameters[x.output]:x.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(x),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],x=u[2],g=u[3],m=u[4],f=[];for(let _=0,y=d.length;_<y;_++){let v=d[_],C=p[_],w=x[_],A=g[_],D=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let M=i._createAnimationTracks(v,C,w,A,D);if(M)for(let E=0;E<M.length;E++)f.push(M[E])}return new zs(r,void 0,f)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,xb)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ro:c.length>1?h=new Nt:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ns(h,r),r.extensions&&ks(i,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Nt;i.name&&(r.name=s.createUniqueName(i.name)),ns(r,i),i.extensions&&ks(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof bn||d instanceof tn)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ts[r.path]===ts.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ts[r.path]){case ts.weights:c=Ai;break;case ts.rotation:c=Jn;break;case ts.position:case ts.scale:c=ri;break;default:switch(i.itemSize){case 1:c=Ai;break;case 2:case 3:default:c=ri;break}break}let h=s.interpolation!==void 0?ub[s.interpolation]:Ls,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){let x=new c(l[d]+"."+ts[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ou(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Jn?Nu:Sl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yb(n,e,t){let i=e.attributes,s=new yn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=Ou(Vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){let g=Ou(Vr[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function fm(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Uu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return at.workingColorSpace!==Wt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ns(n,e),yb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fb(n,e.targets,t):n})}function wl(n){let e=new Map,t=new Map,i=n.clone();return mm(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function mm(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)mm(n.children[i],e.children[i],t)}var Xr=(n,e,t)=>n<e?e:n>t?t:n;var Fu=Math.PI*2,ku=(n,e,t,i)=>Math.hypot(n-t,e-i);function Oo(n,e){let t=(e-n)%Fu;return t>Math.PI&&(t-=Fu),t<-Math.PI&&(t+=Fu),t}function _b(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Bu=_b(Date.now()&4294967295);var zo=()=>Bu(),Hu=(n,e)=>n+(e-n)*Bu();var Gu=n=>Bu()<n;var ot={x0:-46,x1:46,z0:-34,z1:30,t:1.3,h:4.2},ss={x:46,z:0,half:3},Sn={x0:-80,x1:500,z0:-170,z1:330},Bs=[[232,-170],[234,-60],[238,20],[236,62],[240,110],[248,170],[262,330]],_n={x0:226,x1:246,z:62,w:6},Bo={main:[[46,0],[80,0],[122,0],[150,8],[170,26],[190,42],[214,56],[236,62],[262,74],[292,100],[326,136],[360,180],[384,224],[398,255]],stonehollow:[[150,8],[170,-22],[190,-52],[208,-78],[222,-92]],ashwood:[[326,136],[314,160],[304,182]],lumber:[[70,-2],[64,-30],[58,-56],[56,-66]],north:[[122,0],[140,-40],[150,-100],[146,-165]]},vb=[{n:"BLACKMERE KEEP",x0:385,x1:475,z0:220,z1:290},{n:"ASHWOOD CAMP",x0:280,x1:330,z0:160,z1:210},{n:"KINGSBRIDGE",x0:212,x1:256,z0:40,z1:84},{n:"STONEHOLLOW",x0:196,x1:245,z0:-115,z1:-70},{n:"MILLBROOK",x0:160,x1:212,z0:8,z1:70},{n:"LOWER VILLAGE & FARMS",x0:48,x1:140,z0:-70,z1:50},{n:"ROYAL COURT",x0:-9,x1:9,z0:-9,z1:9},{n:"BARRACKS & TRAINING YARD",x0:-47,x1:-12,z0:-35,z1:31},{n:"GREAT HALL & KITCHENS",x0:-13,x1:27,z0:12,z1:31},{n:"MARKET & MAIN GATE",x0:24,x1:47,z0:-20,z1:12},{n:"ROYAL CASTLE",x0:-47,x1:47,z0:-35,z1:31},{n:"THE ROYAL ROAD",x0:-1e4,x1:1e4,z0:-1e4,z1:1e4}],Vu=(n,e)=>{for(let t of vb)if(n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1)return t.n;return"THE WILDS"},is=.5,Mb=1.25,rs=[],jn={},bb={red:8004913,brown:5980208,slate:4870232,thatch:10521170,green:3099194,black:2763568};function Tt(n){let e={roof:"red",wall:12167562,district:"castle",faction:"crown",h:3.2,...n};e.roofColor=bb[e.roof]??e.roof;let t=e.door,i=Mb,s={N:{x:t.at,z:e.z0},S:{x:t.at,z:e.z1},W:{x:e.x0,z:t.at},E:{x:e.x1,z:t.at}}[t.side],r={N:[0,-1],S:[0,1],W:[-1,0],E:[1,0]}[t.side];t.x=s.x,t.z=s.z,t.nx=r[0],t.nz=r[1],t.out={x:s.x+r[0]*2.2,z:s.z+r[1]*2.2},t.in={x:s.x-r[0]*1.6,z:s.z-r[1]*1.6},e.cx=(e.x0+e.x1)/2,e.cz=(e.z0+e.z1)/2,e.w=e.x1-e.x0,e.d=e.z1-e.z0;let o=[],a=(c,h,u,d)=>{u-c>.05&&d-h>.05&&o.push({x1:c,z1:h,x2:u,z2:d})},l=(c,h,u,d,p,x)=>{if(t.side!==c){a(h,u,d,p);return}x?(a(h,u,t.at-i,p),a(t.at+i,u,d,p)):(a(h,u,d,t.at-i),a(h,t.at+i,d,p))};return l("N",e.x0,e.z0,e.x1,e.z0+is,!0),l("S",e.x0,e.z1-is,e.x1,e.z1,!0),l("W",e.x0,e.z0+is,e.x0+is,e.z1-is,!1),l("E",e.x1-is,e.z0+is,e.x1,e.z1-is,!1),e.walls=o,e.spots=wb(e),rs.push(e),jn[e.id]=e,e}function Fo(n,e,t=1.55){let i=[],s=[n.z0+1.7,n.z1-1.7];for(let r=0;r<2&&i.length<e;r++)for(let o=n.x0+1.3;o<=n.x1-1.3&&i.length<e;o+=t)(n.door.side==="N"&&r===0||n.door.side==="S"&&r===1)&&Math.abs(o-n.door.at)<1.7||i.push({x:o,z:s[r],yaw:r===0?Math.PI:0,y:.5});if(i.length<e){let r=n.cz;for(let o=n.x0+2.4;o<=n.x1-2.4&&i.length<e;o+=t)i.push({x:o,z:r,yaw:0,y:.5})}return i}function Sb(n,e,t,i){let s=[],r=[];for(let o of e){let a=n.cx-t/2;s.push({x:n.cx,z:o,w:t,d:1.1});for(let l=a+.6;l<a+t;l+=1.05)r.push({x:l,z:o-1,yaw:0,y:.42,sit:1}),r.push({x:l,z:o+1,yaw:Math.PI,y:.42,sit:1})}return{tables:s,seats:r}}function wb(n){let e={},t=n.cx,i=n.cz,s=(r,o,a=0,l)=>({x:n.x0+r,z:n.z0+o,yaw:a,...l});switch(n.kind){case"house":e.bed=Fo(n,n.beds||2),e.home=[{x:t,z:i,yaw:0}],e.seat=[{x:t-1,z:i+.4,yaw:Math.PI/2,y:.42,sit:1},{x:t+1,z:i+.4,yaw:-Math.PI/2,y:.42,sit:1}],e.work=[{x:t,z:i-.6,yaw:0}];break;case"barracks":case"guardQ":e.bed=Fo(n,n.beds||12,1.5),e.rest=[{x:t,z:i,yaw:0},{x:t-2,z:i,yaw:1},{x:t+2,z:i,yaw:-1}],e.maint=[{x:t-1,z:i,yaw:0},{x:t+1,z:i+.3,yaw:0}];break;case"hall":case"mess":case"tavern":{let r=n.kind==="hall"?[n.z0+3.3,n.z1-3.3]:n.kind==="mess"?[n.cz-1.6,n.cz+1.6]:[n.cz],o=Sb(n,r,Math.min(n.w-4,n.kind==="hall"?18:8));n.tables=o.tables,e.seat=o.seats,e.stand=[{x:t,z:i,yaw:0},{x:t-3,z:i,yaw:1},{x:t+3,z:i,yaw:-1},{x:t,z:i+1.5,yaw:3}],n.kind==="tavern"&&(e.bar=[{x:n.x1-1.8,z:n.z0+1.8,yaw:Math.PI/2}]);break}case"kitchen":e.cook=[s(2,2,0),s(4,2,0),s(6,2,0)],e.prep=[s(3,n.d-2.2,Math.PI),s(5.5,n.d-2.2,Math.PI)],e.store=[s(n.w-1.8,n.d/2,-Math.PI/2)],e.stand=[{x:t,z:i+.5,yaw:0}],n.stoves=[s(2,1.1),s(4,1.1),s(6,1.1)];break;case"smith":e.forge=[s(2,2,0)],e.anvil=[s(4,3,Math.PI/2),s(4,4.6,Math.PI/2)],e.stand=[{x:t,z:i+1,yaw:0}],e.store=[s(n.w-1.5,n.d-1.5,0)];break;case"stable":e.tend=[s(1.6,2,0),s(1.6,4,0),s(1.6,6,0)],e.stand=[{x:t+1,z:i,yaw:0}],e.horse=[s(1.2,3,Math.PI/2),s(1.2,6.5,Math.PI/2)];break;case"chapel":{let r=[];for(let o=0;o<3;o++)for(let a of[-1.4,1.4])r.push({x:t+a,z:n.z0+4.5+o*1.5,yaw:Math.PI,y:.4,sit:1});e.pew=r,e.altar=[{x:t,z:n.z0+1.8,yaw:0}],e.stand=[{x:t,z:i+1.2,yaw:Math.PI}],e.tend=[{x:n.x1-1.8,z:n.z1-2,yaw:0}];break}case"treasury":e.desk=[s(2,2.2,0),s(n.w-2,2.2,0)],e.stand=[{x:t,z:i+.5,yaw:0}],e.chest=[s(n.w/2,n.d-1.5,Math.PI)];break;case"granary":e.store=[s(3,3,0),s(n.w-3,3,0),s(n.w/2,n.d-3,0)],e.stand=[{x:t,z:i,yaw:0}];break;case"apartments":e.bed=[{x:n.x0+3.4,z:n.z0+2.6,yaw:Math.PI,y:.55}],e.desk=[s(n.w-3,2.2,0)],e.stand=[{x:t,z:i+1,yaw:0}],e.wardrobe=[s(n.w-2,n.d-2,0)];break;case"war":e.map=[s(n.w/2-1.4,n.d/2,Math.PI/2),s(n.w/2+1.4,n.d/2,-Math.PI/2),s(n.w/2,n.d/2-1.2,0)],e.desk=[s(2,2,0)],e.stand=[{x:t,z:i,yaw:0}];break;case"armory":e.rack=[s(1.8,1.8,0),s(3.6,1.8,0),s(5.2,1.8,0)],e.stand=[{x:t,z:i,yaw:0}],e.store=[s(1.6,n.d-1.6,0)];break;case"mill":e.mill=[s(2.3,2.3,0)],e.stand=[{x:t,z:i,yaw:0}],e.store=[s(n.w-2,n.d-2,0)];break;case"keep":e.throne=[{x:n.x0+2.6,z:n.cz,yaw:Math.PI/2}],e.stand=[{x:t,z:i,yaw:0}],e.bed=Fo(n,4,2),e.seat=[{x:t,z:i-2,yaw:Math.PI,y:.42,sit:1}];break;case"tower":e.stand=[{x:n.cx,z:n.cz,yaw:0}],e.bed=Fo(n,3,1.5);break;default:e.stand=[{x:t,z:i,yaw:0}],e.bed=Fo(n,n.beds||0)}return e}Tt({id:"greatHall",kind:"hall",name:"Great Hall",x0:-12,z0:13,x1:12,z1:23,door:{side:"N",at:0},roof:"red"});Tt({id:"kitchens",kind:"kitchen",name:"Kitchens & Bakery",x0:15,z0:14,x1:24,z1:22,door:{side:"N",at:20},roof:"brown"});Tt({id:"apartments",kind:"apartments",name:"Royal Apartments",x0:-12,z0:-23,x1:12,z1:-13,door:{side:"S",at:0},roof:"red",h:3.6});Tt({id:"treasury",kind:"treasury",name:"Treasury",x0:14,z0:-12,x1:22,z1:-4,door:{side:"W",at:-8},roof:"slate",wall:10130308});Tt({id:"granary",kind:"granary",name:"Royal Granary",x0:16,z0:-32,x1:28,z1:-22,door:{side:"S",at:22},roof:"thatch",wall:11048040});Tt({id:"chapel",kind:"chapel",name:"Chapel & Infirmary",x0:34,z0:-32,x1:44,z1:-22,door:{side:"S",at:39},roof:"slate",wall:13090990,h:4.2});Tt({id:"guardQ",kind:"guardQ",name:"Royal Guard Quarters",x0:-31,z0:-26,x1:-19,z1:-16,door:{side:"E",at:-21},roof:"red",beds:18});Tt({id:"armory",kind:"armory",name:"Armory",x0:-44,z0:-26,x1:-37,z1:-18,door:{side:"E",at:-22},roof:"slate",wall:9077879});Tt({id:"warRoom",kind:"war",name:"Marshal's War Room",x0:-18,z0:-33,x1:-8,z1:-27,door:{side:"S",at:-13},roof:"brown"});Tt({id:"barracksA",kind:"barracks",name:"Garrison Barracks I",x0:-44,z0:-12,x1:-30,z1:-4,door:{side:"E",at:-8},roof:"brown",beds:16});Tt({id:"barracksB",kind:"barracks",name:"Garrison Barracks II",x0:-44,z0:0,x1:-30,z1:8,door:{side:"E",at:4},roof:"brown",beds:16});Tt({id:"garrisonMess",kind:"mess",name:"Garrison Mess",x0:-25,z0:-10,x1:-15,z1:-2,door:{side:"S",at:-20},roof:"brown"});Tt({id:"smithy",kind:"smith",name:"Royal Smithy",x0:29,z0:12,x1:37,z1:20,door:{side:"N",at:33},roof:"slate",wall:9405816});Tt({id:"stable",kind:"stable",name:"Royal Stable",x0:52,z0:-15,x1:64,z1:-6,door:{side:"S",at:58},roof:"brown",wall:10123861});Tt({id:"lodgings",kind:"barracks",name:"Servants Lodgings",x0:14,z0:-21,x1:25,z1:-14,door:{side:"S",at:19.5},roof:"brown",wall:12102287,beds:14});var Rl=[];for(let[n,e]of[[-46,-34],[46,-34],[-46,30],[46,30],[0,-34],[0,30],[-46,-2],[46,-16],[46,14]])Rl.push({x:n,z:e,r:3.4,h:8.5,name:"tower"});var Eb=[{x:46,z:-6.4,r:3.4},{x:46,z:6.4,r:3.4}],Tb=0,gm=(n,e,t,i,s,r,o={})=>Tt({id:"vh"+Tb++,kind:"house",name:"Cottage",district:"village",x0:n,z0:e,x1:t,z1:i,door:{side:s,at:r},roof:"thatch",wall:12891535,h:2.6,beds:2,...o});for(let n of[70,79,88,97])gm(n,-12,n+6.5,-6,"S",n+3.2);for(let n of[68,86,95,104])gm(n,6,n+6.5,12,"N",n+3.2);Tt({id:"tavern",kind:"tavern",name:"The Gilded Boar",district:"village",x0:106,z0:-15,x1:118,z1:-6,door:{side:"S",at:112},roof:"brown",wall:11903612,h:3.2});Tt({id:"lumberCabin",kind:"house",name:"Woodcutters Lodge",district:"village",x0:50,z0:-70,x1:60,z1:-63,door:{side:"S",at:55},roof:"thatch",wall:9071176,h:2.6,beds:4});var Ab=[{x:80,z:4.4,r:1.1},{x:35,z:-6.5,r:1.2}],Wu=[{id:"f1",x0:66,z0:18,x1:96,z1:40},{id:"f2",x0:100,z0:18,x1:130,z1:40},{id:"f3",x0:66,z0:-42,x1:96,z1:-20},{id:"f4",x0:100,z0:-42,x1:130,z1:-22}],Hs=(n,e,t,i,s,r,o,a="millbrook",l={})=>Tt({id:n,kind:"house",name:"Cottage",district:a,x0:e,z0:t,x1:i,z1:s,door:{side:r,at:o},roof:"thatch",wall:12891535,h:2.6,beds:2,...l});Hs("mb1",168,14,174.5,20,"S",171);Hs("mb2",178,-2,184.5,4,"S",181);Hs("mb3",192,52,198.5,58,"N",195);Hs("mb4",180,54,186.5,60,"N",183);Tt({id:"mill",kind:"mill",name:"Millbrook Mill",district:"millbrook",x0:212,z0:28,x1:222,z1:36,door:{side:"S",at:217},roof:"brown",wall:11641210,h:4});Tt({id:"bridgeTower",kind:"tower",name:"Kingsbridge Watch",district:"bridge",x0:216,z0:46,x1:224,z1:54,door:{side:"S",at:220},roof:"slate",wall:9407104,h:6,beds:4});Hs("sh1",200,-100,206,-95,"S",203,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Hs("sh2",212,-108,218,-103,"W",-105,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Hs("sh3",222,-84,228,-79,"W",-82,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Tt({id:"smelter",kind:"smith",name:"Stonehollow Smelter",district:"stonehollow",faction:"guild",x0:206,z0:-88,x1:214,z1:-82,door:{side:"E",at:-85},roof:"black",wall:7104093});var Al=[[292,182],[300,192],[310,180],[296,174],[312,194]];var Oe={x0:398,z0:231,x1:462,z1:279,gate:{x:398,z:255}},Cl=n=>Tt({district:"blackmere",faction:"valemar",wall:5922147,roof:"green",...n});Cl({id:"bmKeep",kind:"keep",name:"Blackmere Keep",x0:440,z0:244,x1:458,z1:266,door:{side:"W",at:255},roof:"black",h:8});Cl({id:"bmBarracks",kind:"barracks",name:"Valemar Barracks",x0:404,z0:262,x1:418,z1:274,door:{side:"N",at:411},beds:22,h:3.4});Cl({id:"bmHall",kind:"mess",name:"Valemar Mess",x0:422,z0:236,x1:434,z1:246,door:{side:"S",at:428},h:3.4});Cl({id:"bmSmith",kind:"smith",name:"Blackmere Forge",x0:424,z0:264,x1:434,z1:274,door:{side:"N",at:429}});var Xu=[[398,231],[462,231],[398,279],[462,279],[430,231],[430,279]].map(([n,e])=>({x:n,z:e,r:3.2,h:9,name:"bm"})),Rb=[{x:398,z:249.6,r:3.2},{x:398,z:260.4,r:3.2}],xm=[],Ot=(n,e,t,i,s)=>xm.push({x1:n,z1:e,x2:t,z2:i,tag:s}),Hn=ot.t;Ot(ot.x0,ot.z0,ot.x1,ot.z0+Hn,"wall");Ot(ot.x0,ot.z1-Hn,ot.x1,ot.z1,"wall");Ot(ot.x0,ot.z0,ot.x0+Hn,ot.z1,"wall");Ot(ot.x1-Hn,ot.z0,ot.x1,-ss.half,"wall");Ot(ot.x1-Hn,ss.half,ot.x1,ot.z1,"wall");for(let n of Rl)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");for(let n of Eb)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");Ot(Oe.x0,Oe.z0,Oe.x1,Oe.z0+Hn,"wall");Ot(Oe.x0,Oe.z1-Hn,Oe.x1,Oe.z1,"wall");Ot(Oe.x1-Hn,Oe.z0,Oe.x1,Oe.z1,"wall");Ot(Oe.x0,Oe.z0,Oe.x0+Hn,Oe.gate.z-ss.half,"wall");Ot(Oe.x0,Oe.gate.z+ss.half,Oe.x0+Hn,Oe.z1,"wall");for(let n of Xu)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");for(let n of Rb)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");Ot(-4.2,-7.8,4.2,-3.2,"palace");Ot(-.75,5.45,.75,6.45,"throne");for(let n of Ab)Ot(n.x-n.r,n.z-n.r,n.x+n.r,n.z+n.r,"well");var Pl=[[29,-13],[35,-13],[41,-13],[29,-7],[41,-7],[29,7],[35,7]];for(let[n,e]of Pl)Ot(n-1.5,e-.9,n+1.5,e+.9,"stall");var ym=[[-34,16],[-30,16],[-26,16],[-22,16],[-34,22],[-30,22],[-26,22],[-22,22]];for(let[n,e]of ym)Ot(n-.4,e-.4,n+.4,e+.4,"dummy");var _m=[[-38,26],[-32,26],[-26,26]];for(let[n,e]of _m)Ot(n-.7,e-.3,n+.7,e+.3,"butt");for(let e=0;e<Bs.length-1;e++){let[t,i]=Bs[e],[s,r]=Bs[e+1],o=Math.ceil(Math.hypot(s-t,r-i)/6);for(let a=0;a<o;a++){let l=(a+.5)/o,c=t+(s-t)*l,h=i+(r-i)*l;Math.abs(h-_n.z)<_n.w*.5+1.5&&c>_n.x0-6&&c<_n.x1+6||Ot(c-4.2,h-3.2,c+4.2,h+3.2,"water")}}var Cb=()=>{let n=[...xm];for(let e of rs)for(let t of e.walls)n.push({...t,tag:"bwall"});return n},qr=Cb(),El={x1:ot.x1-Hn,z1:-ss.half,x2:ot.x1,z2:ss.half,tag:"gate"},Tl={x1:Oe.x0,z1:Oe.gate.z-ss.half,x2:Oe.x0+Hn,z2:Oe.gate.z+ss.half,tag:"gate"},It=(n,e,t,i,s,r=0,o)=>Array.from({length:t},(a,l)=>({x:n+i*l,z:e+s*l,yaw:r,...o})),ko={plaza:{x:0,z:3,spots:{petition:It(-2,1.2,5,1,0,0),wait:[...It(-5,4,5,2.5,0,0),...It(-4,6.2,4,2.6,0,0)],stand:It(-6,-1,4,4,0,0),podium:[{x:0,z:1.4,yaw:Math.PI}],guard:[{x:-2.7,z:-1.2,yaw:0},{x:2.7,z:-1.2,yaw:0},{x:-1.6,z:.9,yaw:0},{x:1.6,z:.9,yaw:0},{x:-3.6,z:2.6,yaw:0},{x:3.6,z:2.6,yaw:0}],servant:[{x:-6.2,z:-5,yaw:0},{x:6.2,z:-5,yaw:0}],sweep:It(-6,4.5,6,2.4,.5,0)}},archway:{x:0,z:9.5,spots:{guard:[{x:-1.6,z:7.6,yaw:Math.PI},{x:1.6,z:7.6,yaw:Math.PI}]}},aptDoor:{x:0,z:-11.8,spots:{guard:[{x:-1.6,z:-11.6,yaw:0},{x:1.6,z:-11.6,yaw:0}]}},treasuryDoor:{x:12,z:-8,spots:{guard:[{x:12.4,z:-9.6,yaw:-1.6},{x:12.4,z:-6.4,yaw:-1.6}]}},gate:{x:41,z:0,spots:{guard:[{x:43,z:-1.9,yaw:1.57},{x:43,z:1.9,yaw:1.57},{x:48.6,z:-2.4,yaw:1.57},{x:48.6,z:2.4,yaw:1.57},{x:41.4,z:-4.6,yaw:1.57},{x:41.4,z:4.6,yaw:1.57}],defend:It(52,-6,6,0,2.4,1.57)}},market:{x:35,z:-2,spots:{stall:Pl.map(([n,e])=>({x:n,z:e+(e<0?-1.4:1.4),yaw:e<0?0:Math.PI,stall:1})),browse:[{x:32,z:-4,yaw:0},{x:38,z:-3,yaw:1},{x:32,z:3.5,yaw:2},{x:38,z:4,yaw:3},{x:34,z:0,yaw:0},{x:40,z:-10,yaw:0},{x:31,z:-10,yaw:0}],well:[{x:35,z:-4.6,yaw:0}],stand:[{x:33,z:-1,yaw:1}]}},yard:{x:-26,z:10,spots:{drill:It(-38,11,6,4,0,0).concat(It(-38,13.5,6,4,0,0)),dummy:ym.map(([n,e])=>({x:n,z:e+1.1,yaw:Math.PI})),butt:_m.map(([n,e])=>({x:n,z:e-4,yaw:0})),muster:It(-36,18,8,3.2,0,0).concat(It(-36,20,8,3.2,0,0)),rest:It(-38,29,5,4,0,0)}},wall:{x:0,z:-31,spots:{post:[]}},fields:{x:96,z:0,spots:{}},villageSquare:{x:88,z:0,spots:{stand:It(76,-2,8,3,0,0),well:[{x:80,z:4.4,yaw:0}],play:It(74,3,10,3,0,0)}},mbfield:{x:185,z:28,spots:{hoe:It(166,24,10,4,0,0).concat(It(166,32,10,4,0,0))}},lumber:{x:52,z:-62,spots:{chop:It(40,-72,5,4,-1.4,0),pile:[{x:56,z:-60,yaw:0}]}},roadWatch:{x:60,z:0,spots:{}},bridge:{x:236,z:62,spots:{post:[{x:226,z:57,yaw:Math.PI/2},{x:226,z:67,yaw:Math.PI/2},{x:246,z:57,yaw:-Math.PI/2},{x:246,z:67,yaw:-Math.PI/2},{x:236,z:59.4,yaw:0},{x:236,z:64.6,yaw:Math.PI}]}},ash:{x:302,z:184,spots:{fire:It(298,186,5,2,0,0,{sit:1,y:.3}),camp:Al.map(([n,e])=>({x:n+2.4,z:e+1,yaw:0})),sleep:Al.map(([n,e])=>({x:n,z:e,yaw:0,y:.3}))}},mine:{x:224,z:-96,spots:{dig:It(222,-102,3,2,0,0),cart:[{x:216,z:-92,yaw:0}],forge:[{x:210,z:-79,yaw:0}]}},bmGate:{x:392,z:255,spots:{guard:[{x:402,z:251,yaw:-1.57},{x:402,z:259,yaw:-1.57},{x:394,z:251,yaw:-1.57},{x:394,z:259,yaw:-1.57}],defend:It(388,247,6,0,3.2,-1.57)}},bmYard:{x:415,z:255,spots:{drill:It(408,250,5,3,0,0).concat(It(408,254,5,3,0,0)),stand:It(420,252,4,3,0,0)}},bmWall:{x:430,z:231,spots:{post:[]}},farmRoad:{x:100,z:0,spots:{}}};for(let n of Wu){let e=[];for(let t=n.x0+2;t<=n.x1-2;t+=4)for(let i=n.z0+2;i<=n.z1-2;i+=4)e.push({x:t,z:i,yaw:0});ko[n.id]={x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2,spots:{hoe:e,stand:e}}}{let n=ko.wall.spots.post,e=ot.h-.5;for(let i=-40;i<=40;i+=10)n.push({x:i,z:ot.z0+.7,yaw:0,y:e}),n.push({x:i,z:ot.z1-.7,yaw:Math.PI,y:e});for(let i=-24;i<=24;i+=12)n.push({x:ot.x0+.7,z:i,yaw:-1.57,y:e});for(let i of[-14,14])n.push({x:ot.x1-.7,z:i,yaw:1.57,y:e});let t=ko.bmWall.spots.post;for(let i=408;i<=456;i+=12)t.push({x:i,z:Oe.z0+.7,yaw:0,y:e}),t.push({x:i,z:Oe.z1-.7,yaw:Math.PI,y:e});for(let i of[240,270])t.push({x:Oe.x1-.7,z:i,yaw:1.57,y:e})}var vm=n=>jn[n]?jn[n].spots:ko[n]?.spots;function Mm(n){let e=jn[n];if(e)return{x:e.door.out.x,z:e.door.out.z};let t=ko[n];return t?{x:t.x,z:t.z}:null}var Ci={castle:[[-6,10],[-8,-10],[-22,-12],[-22,4],[-8,12],[10,12],[26,-2],[40,-8],[24,-2],[8,-12],[0,-12]],walls:[[-38,-30],[0,-30],[38,-30],[40,0],[38,26],[0,26],[-38,26],[-40,0]],road:[[50,4],[90,3],[120,-3],[150,6],[190,40],[222,58],[190,40],[150,6],[90,-3]],village:[[52,3],[70,0],[92,3],[112,-3],[92,-3],[70,3]],border:[[236,62],[262,74],[292,100],[326,136],[292,100],[262,74]],scout:[[236,62],[292,100],[340,150],[372,200],[340,150],[292,100]]};function Yr(n,e,t=0){for(let i of rs)if(n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)return i;return null}function Pi(n,e,t=.38,i=!1,s=!1){for(let r of qr)if(n+t>r.x1&&n-t<r.x2&&e+t>r.z1&&e-t<r.z2)return!0;return!!(i&&n+t>El.x1&&n-t<El.x2&&e+t>El.z1&&e-t<El.z2||s&&n+t>Tl.x1&&n-t<Tl.x2&&e+t>Tl.z1&&e-t<Tl.z2)}var Yu=22,Pb=["Spring","Summer","Autumn","Winter"],Sm=96,Ib=8;function Il(){return{ver:2,clock:Ib,realm:{coin:600,favor:55,security:62,prosperity:50,renown:10,tax:1,ration:1,farmFocus:1,unrestDays:0},stock:{grain:520,wood:80,iron:36,arms:26},build:{walls:0,granary:0,forge:0,barracks:0,market:0,watchtowers:0,farms:0},ledger:{today:{in:{},out:{}},last:{in:{},out:{},net:0,day:0},hist:[]},guard:{mode:"routine",until:0,recall:0,alarm:0},army:{directive:"routine",until:0,size:0,formation:"column",relay:""},king:{hp:100,maxhp:100,x:0,z:9,yaw:Math.PI,mounted:!1,falls:0,seated:!1,sleeps:0},weather:{type:"clear",until:10,intensity:0},powers:{valemar:{id:"valemar",name:"House Valemar",ruler:"Lord Maren Valemar",seat:"Blackmere Keep",rel:-12,army:34,wealth:520,food:400,aggression:.62,treaties:{},war:!1,vassal:!1,intel:0,mood:"watchful",cool:0,mobilized:!1,tribute:0},kestrel:{id:"kestrel",name:"House Kestrel",ruler:"Duchess Ilse Kestrel",seat:"Highmoor",rel:8,army:46,wealth:700,food:500,aggression:.25,treaties:{},war:!1,vassal:!1,intel:0,mood:"courteous",cool:0,tribute:0},guild:{id:"guild",name:"Stonehollow Guild",ruler:"Guildmaster Torvik",seat:"Stonehollow",rel:14,army:6,wealth:400,food:200,aggression:0,treaties:{},war:!1,vassal:!1,intel:0,mood:"mercantile",cool:0,tribute:0},ashwood:{id:"ashwood",name:"Ashwood Company",ruler:"Captain Vex",seat:"Ashwood Camp",rel:-8,army:12,wealth:120,food:60,aggression:.5,treaties:{},war:!1,vassal:!1,intel:0,mood:"hungry",cool:0,tribute:0}},war:{state:"peace",host:null,siege:null,campaign:null,lastWar:0,victories:0,defeats:0},events:{pending:[],cool:0,flags:{},petitions:{},seen:{}},court:{queue:[],heard:0,dayHeard:0,unheard:0},goals:{done:{},progress:{}},chronicle:[],stats:{days:1,kills:0,raidsHeld:0,petitions:0,feasts:0,built:0,treaties:0},over:null,actors:{}}}var I=Il();function bm(n){return I=n,I}var Go=()=>I.clock%24,an=()=>Math.floor(I.clock/24)+1,Lb=()=>(an()-1)%Sm,Ll=()=>Math.floor(Lb()/24),Ku=()=>Math.floor((an()-1)/Sm)+1,Dl=()=>Pb[Ll()];var Ho={},as=(n,e)=>((Ho[n]||(Ho[n]=[])).push(e),()=>{Ho[n]=Ho[n].filter(t=>t!==e)}),os=(n,e)=>{let t=Ho[n];if(t)for(let i of t)try{i(e)}catch(s){console.error("handler",n,s)}};function Gs(n,e="note"){I.chronicle.push({day:an(),h:Go(),msg:n,kind:e}),I.chronicle.length>240&&I.chronicle.shift(),os("chronicle",n)}function Kr(){let n=I.realm;n.coin=Math.max(0,Math.round(n.coin));for(let e of["favor","security","prosperity"])n[e]=Xr(Math.round(n[e]),0,100);n.renown=Xr(n.renown,0,100);for(let e of["grain","wood","iron","arms"])I.stock[e]=Math.max(0,Math.round(I.stock[e]))}function wm(n,e,t){let i=I.ledger.today[n];i[e]=(i[e]||0)+t}function Em(n,e="Misc"){I.realm.coin+=n,wm("in",e,n)}function Tm(n,e="Misc",t=!1){return!t&&I.realm.coin<n?!1:(I.realm.coin-=n,wm("out",e,n),!0)}function Db(){if(I.clock<I.weather.until)return;let n=Ll(),e=I.weather,t="clear",i=zo();n===3?t=i<.35?"snow":i<.6?"fog":i<.8?"cloudy":"clear":n===2?t=i<.3?"rain":i<.5?"fog":i<.7?"cloudy":"clear":n===0?t=i<.3?"rain":i<.5?"cloudy":i<.6?"fog":"clear":t=i<.12?"rain":i<.35?"cloudy":"clear",e.type=t,e.intensity=Hu(.5,1),e.until=I.clock+Hu(5,14),os("weather",t)}var qu=Math.floor(I.clock),Am=an();function Zu(n){if(!Number.isFinite(n)||n<=0||I.over)return{hours:0,dayChanged:!1};let e=I.clock,t=an();I.clock+=n/Yu;let i=Math.floor(I.clock);i!==qu&&(qu=i,Db(),os("hour",{hour:Go(),day:an()}));let s=an(),r=s!==t;return r&&(Am=s,os("day",{day:s,previous:t})),{hours:I.clock-e,dayChanged:r}}function Rm(){return JSON.parse(JSON.stringify(I))}function Ju(n){let e=Il();if(!n||typeof n!="object")return bm(e);let t={...e,...n};return t.realm={...e.realm,...n.realm},t.stock={...e.stock,...n.stock},t.build={...e.build,...n.build},t.guard={...e.guard,...n.guard},t.army={...e.army,...n.army},t.king={...e.king,...n.king},t.weather={...e.weather,...n.weather},t.war={...e.war,...n.war},t.events={...e.events,...n.events},t.court={...e.court,...n.court},t.goals={...e.goals,...n.goals},t.stats={...e.stats,...n.stats},t.powers={...e.powers,...n.powers},bm(t),qu=Math.floor(I.clock),Am=an(),I}var ls=16,Nb=.42,St=[],ed=new Map;function Fl(n,e){return n*4096+e}qr.forEach((n,e)=>{for(let t=Math.floor((n.x1-1)/ls);t<=Math.floor((n.x2+1)/ls);t++)for(let i=Math.floor((n.z1-1)/ls);i<=Math.floor((n.z2+1)/ls);i++){let s=Fl(t+100,i+100),r=ed.get(s);r||ed.set(s,r=[]),r.push(e)}});var $u=0,Cm=new Int32Array(qr.length);function kl(n,e,t,i,s=Nb){let r=Math.min(n,t)-s,o=Math.max(n,t)+s,a=Math.min(e,i)-s,l=Math.max(e,i)+s;$u++;for(let c=Math.floor(r/ls);c<=Math.floor(o/ls);c++)for(let h=Math.floor(a/ls);h<=Math.floor(l/ls);h++){let u=ed.get(Fl(c+100,h+100));if(u)for(let d of u){if(Cm[d]===$u)continue;Cm[d]=$u;let p=qr[d],x=p.x1-s,g=p.x2+s,m=p.z1-s,f=p.z2+s;if(o<x||r>g||l<m||a>f)continue;let _=0,y=1,v=t-n,C=i-e,w=!0;for(let[A,D,M,E]of[[n,v,x,g],[e,C,m,f]])if(Math.abs(D)<1e-9){if(A<M||A>E){w=!1;break}}else{let U=(M-A)/D,G=(E-A)/D;if(U>G&&([U,G]=[G,U]),_=Math.max(_,U),y=Math.min(y,G),_>y){w=!1;break}}if(w)return!1}}return!0}function Im(n,e,t){for(let i of qr)if(n>i.x1-t&&n<i.x2+t&&e>i.z1-t&&e<i.z2+t)return!0;return!1}function cs(n,e,t,i,s,r){for(let o=n;o<=t;o+=s)for(let a=e;a<=i;a+=s)r&&r(o,a)||Im(o,a,.9)||St.push({x:o,z:a,r:s*1.55})}var hs=(n,e)=>rs.some(t=>n>t.x0-.6&&n<t.x1+.6&&e>t.z0-.6&&e<t.z1+.6);cs(ot.x0+2,ot.z0+3,ot.x1-2,ot.z1-2,4,hs);cs(48,-48,136,48,5,hs);cs(158,-12,232,72,6,(n,e)=>hs(n,e)||Math.abs(n-236)<7);cs(196,-116,234,-68,5,hs);cs(284,164,322,200,5,hs);cs(Oe.x0+2,Oe.z0+3,Oe.x1-2,Oe.z1-2,4,hs);cs(36,-76,66,-52,5,hs);cs(Oe.x0-14,Oe.gate.z-12,Oe.x0,Oe.gate.z+12,4,hs);for(let n in Bo){let e=Bo[n];for(let t=0;t<e.length-1;t++){let[i,s]=e[t],[r,o]=e[t+1],a=Math.hypot(r-i,o-s),l=Math.max(1,Math.ceil(a/10));for(let c=0;c<=l;c++){let h=c/l,u=i+(r-i)*h,d=s+(o-s)*h;Im(u,d,.6)||St.push({x:u,z:d,r:15})}}}for(let n of rs){let e=n.door;St.push({x:e.out.x,z:e.out.z,r:9},{x:e.x,z:e.z,r:5},{x:e.in.x,z:e.in.z,r:8}),St.push({x:n.cx,z:n.cz,r:Math.max(n.w,n.d)*.75});for(let t=n.x0+1.5;t<n.x1-1;t+=3)for(let i=n.z0+1.5;i<n.z1-1;i+=3)St.push({x:t,z:i,r:5.5})}for(let n=222;n<=250;n+=4)St.push({x:n,z:62,r:8});var Vs=St.length,td=new Map;St.forEach((n,e)=>{let t=Fl(Math.floor(n.x/12)+100,Math.floor(n.z/12)+100),i=td.get(t);i||td.set(t,i=[]),i.push(e)});function Lm(n,e,t){let i=[],s=Math.floor((n-t)/12),r=Math.floor((n+t)/12),o=Math.floor((e-t)/12),a=Math.floor((e+t)/12);for(let l=s;l<=r;l++)for(let c=o;c<=a;c++){let h=td.get(Fl(l+100,c+100));if(h)for(let u of h)i.push(u)}return i}var zl=Array.from({length:Vs},()=>[]);for(let n=0;n<Vs;n++){let e=St[n];for(let t of Lm(e.x,e.z,16)){if(t<=n)continue;let i=St[t],s=Math.hypot(e.x-i.x,e.z-i.z);s>Math.max(e.r,i.r)||s<.01||kl(e.x,e.z,i.x,i.z,.35)&&(zl[n].push([t,s]),zl[t].push([n,s]))}}var vS={nodes:Vs,edges:zl.reduce((n,e)=>n+e.length,0)/2};function Pm(n,e){for(let s of[8,18,40]){let r=Lm(n,e,s).map(a=>[a,Math.hypot(St[a].x-n,St[a].z-e)]).filter(([,a])=>a<=s).sort((a,l)=>a[1]-l[1]),o=[];for(let[a,l]of r)if(kl(n,e,St[a].x,St[a].z,.3)&&(o.push(a),o.length>=3))break;if(o.length)return o}let t=0,i=1e9;for(let s=0;s<Vs;s++){let r=Math.hypot(St[s].x-n,St[s].z-e);r<i&&(i=r,t=s)}return[t]}var nd=class{constructor(){this.a=[]}push(e,t){let i=this.a;i.push([e,t]);let s=i.length-1;for(;s>0;){let r=s-1>>1;if(i[r][1]<=i[s][1])break;[i[r],i[s]]=[i[s],i[r]],s=r}}pop(){let e=this.a,t=e[0],i=e.pop();if(e.length){e[0]=i;let s=0;for(;;){let r=s,o=2*s+1,a=o+1;if(o<e.length&&e[o][1]<e[r][1]&&(r=o),a<e.length&&e[a][1]<e[r][1]&&(r=a),r===s)break;[e[r],e[s]]=[e[s],e[r]],s=r}}return t}get size(){return this.a.length}},Nl=new Float32Array(Vs),ju=new Int32Array(Vs),Qu=new Int32Array(Vs),Ul=0;function Ub(n,e,t,i,s,r){Ul++;let o=new nd,a=new Set(e);for(let c of n){let h=Math.hypot(St[c].x-s,St[c].z-r);Nl[c]=h,ju[c]=-1,Qu[c]=Ul,o.push(c,h+Math.hypot(St[c].x-t,St[c].z-i))}let l=new Set;for(;o.size;){let[c]=o.pop();if(!l.has(c)){if(l.add(c),a.has(c)){let h=[];for(let u=c;u!==-1;u=ju[u])h.push(u);return h.reverse()}for(let[h,u]of zl[c]){let d=Nl[c]+u;(Qu[h]!==Ul||d<Nl[h])&&(Qu[h]=Ul,Nl[h]=d,ju[h]=c,o.push(h,d+Math.hypot(St[h].x-t,St[h].z-i)))}}}return null}function Ob(n){if(n.length<3)return n;let e=[],t=0;for(;t<n.length-1;){let i=n.length-1;for(;i>t+1&&!kl(n[t].x,n[t].z,n[i].x,n[i].z,.32);)i--;e.push(n[i]),t=i}return e}var Ol=new Map;function Vo(n,e,t,i){if(kl(n,e,t,i,.32))return[{x:t,z:i}];let s=Math.round(n/3)+","+Math.round(e/3)+">"+Math.round(t/3)+","+Math.round(i/3),r=Ol.get(s);if(!r){let a=Pm(n,e),l=Pm(t,i);if(r=Ub(a,l,t,i,n,e),!r)return[];Ol.size>600&&Ol.clear(),Ol.set(s,r)}let o=[{x:n,z:e},...r.map(a=>({x:St[a].x,z:St[a].z})),{x:t,z:i}];return Ob(o)}var mt=[],zb=new Map,Wo={},rd={},Ye=(n,e)=>{Wo[n]=e},us=(n,e)=>{rd[n]=e},Gn={x:0,y:0,z:9,yaw:0,seated:!1,building:null},Fb=1,Dm=new Map;function Ve(n,e){let t=Dm.get(n);return t||(t=e(),t.key=n,Dm.set(n,t)),t}var kb=95,Bb=78,Nm={};function Bl(n){let e={id:n.id||"a"+Fb++,name:"Villager",role:"villager",team:"crown",rank:0,x:0,z:0,y:0,yaw:0,speed:1.35,run:!1,idx:mt.length,hp:100,maxhp:100,alive:!0,morale:70,loyalty:60,atk:9,def:1,range:1.3,cool:0,home:null,bed:null,bedIdx:0,work:null,mess:null,watch:null,company:-1,boss:null,look:{},hero:null,pose:"stand",carry:null,label:"",lod:0,vis:!0,plan:null,step:0,stepT:0,state:"dwell",path:null,pi:0,tPlan:zo()*1.2,order:null,fight:null,inside:null,dead:0,fed:1,flags:{},...n};return e.idx=mt.length,mt.push(e),zb.set(e.id,e),e.home&&jn[e.home]&&!n.noBed&&Hb(e,e.home),e}function Hb(n,e){let t=jn[e];if(!t)return;let i=t.spots.bed||[],s=Nm[e]||(Nm[e]=new Set),r=0;for(;s.has(r);)r++;s.add(r),n.home=e,n.bedIdx=r,n.bedSlot=r<i.length?"bed":"rest"}function od(n,e){if(e.pos)return{x:e.pos.x,z:e.pos.z,yaw:e.yaw??n.yaw,y:e.y||0,bld:e.bld?jn[e.bld]:Yr(e.pos.x,e.pos.z)};let t=e.place,i=jn[t]||null,s=null,r=vm(t)?.[e.spot||"stand"];if(r&&r.length){let o=e.i!=null?e.i:n.idx;s=r[Math.abs(o)%r.length]}if(!s&&e.spot==="bed"&&i){let o=i.spots.rest||i.spots.stand;s=o[n.bedIdx%o.length],s={...s,y:.05}}if(!s){let o=Mm(t)||{x:n.x,z:n.z};s={x:o.x,z:o.z,yaw:n.yaw}}return{x:s.x+(e.jx||0),z:s.z+(e.jz||0),yaw:s.yaw||0,y:(s.y||0)+(e.y||0),bld:i,sit:s.sit}}function Gb(n,e){let t=[],i=n.x,s=n.z,r=Yr(i,s),o=e.bld;return r&&r!==o&&(t.push({x:r.door.in.x,z:r.door.in.z},{x:r.door.x,z:r.door.z},{x:r.door.out.x,z:r.door.out.z}),i=r.door.out.x,s=r.door.out.z),o&&o!==r?(t.push(...Vo(i,s,o.door.out.x,o.door.out.z)),t.push({x:o.door.x,z:o.door.z},{x:o.door.in.x,z:o.door.in.z},{x:e.x,z:e.z})):t.push(...Vo(i,s,e.x,e.z)),t}var Zr=n=>n.plan?n.plan.seq[n.step]:null;function ad(n){let e=Zr(n);if(!e){n.path=null;return}if(n.target=e.follow?null:od(n,e),n.stepT=0,n.arrived=!1,e.follow){n.state="walk",n.path=null,n.rp=0;return}if(n.lod===2||e.snap){sd(n);return}let t=n.target;if(ku(n.x,n.z,t.x,t.z)<.25&&(!t.bld||Yr(n.x,n.z)===t.bld)){id(n);return}n.path=Gb(n,t),n.pi=0,n.state="walk"}function id(n){let e=Zr(n),t=n.target;n.state="dwell",n.path=null,n.arrived=!0,n.stepT=0,t&&(n.x=t.x,n.z=t.z,n.tyaw=t.yaw);let i=n.plan;e&&e.hook&&rd[e.hook]?.(n,e,"arrive")}function Um(n){let e=Zr(n);e?.hook&&rd[e.hook]?.(n,e,"done"),e?.prod&&os("workDone",{a:n,step:e,prod:e.prod});let t=n.plan;if(n.step++,n.step>=t.seq.length){if(t.once){Vb(n);return}n.step=0}ad(n)}function Vb(n){n.order&&(n.order.status="done",os("orderDone",{a:n,order:n.order}),n.order=null),n.plan=null,n.tPlan=0}function sd(n){let e=n.plan;if(!e)return;let t=Zr(n);if(e.seq.length>1&&!e.once&&!t?.follow&&(n.step=Math.floor(I.clock*1.6+n.idx*3)%e.seq.length,t=e.seq[n.step]),!t)return;if(t.follow){let s=Om(n,t);n.x=s.x,n.z=s.z,n.state="walk";return}let i=od(n,t);n.target=i,n.x=i.x,n.z=i.z,n.y=i.y,n.yaw=i.yaw,n.state="dwell",n.path=null,n.arrived=!0,n.stepT=0,n.tyaw=i.yaw,n.pose=t.pose||"stand",n.carry=t.carry||null}function Om(n,e){let t=e.off||[0,-2],i=Gn.yaw,s=Math.sin(i),r=Math.cos(i),o=r,a=-s;return{x:Gn.x+o*t[0]+s*t[1],z:Gn.z+a*t[0]+r*t[1]}}var Wb=1;function wn(n,e){n.order={id:Wb++,issued:I.clock,status:"active",priority:2,issuer:"king",...e};let t=n.order,i=[];if(t.type==="goto")i.push({place:t.place,spot:t.spot||"stand",i:t.i,pos:t.pos,dur:t.dur||14,pose:t.pose||"stand",label:t.label||"On the king's errand: "+(t.what||"attending")});else if(t.type==="follow")i.push({follow:!0,off:t.off||[0,-2.4],dur:1e9,pose:"stand",label:"Following the King"});else if(t.type==="post")i.push({place:t.place,spot:t.spot||"guard",i:t.i,pos:t.pos,dur:1e9,pose:t.pose||"post",label:t.label||"Standing guard by royal order"});else if(t.type==="work")i.push({place:t.place,spot:t.spot||"stand",i:t.i,dur:t.cycle||40,pose:t.pose||"stand",label:t.label||"Working by royal order",prod:t.prod,hook:t.hook,carry:t.carry});else if(t.type==="patrol")for(let s of t.route||[])i.push({pos:{x:s[0]??s.x,z:s[1]??s.z},dur:t.pause||8,pose:"post",label:t.label||"Patrolling by royal order"});return n.plan={key:"order"+t.id,seq:i,once:t.type==="goto",order:!0},n.step=0,ad(n),t.until==null&&t.type!=="goto"&&(t.until=I.clock+(t.hours||3)),os("order",{a:n,order:t}),t}function Xo(n){n.order&&(n.order.status="cancelled",n.order=null,n.plan=null,n.tPlan=0)}var Xb=1;function qb(n){n.order&&n.order.until&&I.clock>n.order.until&&Xo(n);let e;if(n.order)e=n.plan&&n.plan.order?n.plan:null;else{let t=Wo[n.role]||Wo.default;e=t?t(n,Go(),I):null}e&&e!==n.plan&&(n.plan=e,n.step=0,ad(n))}function Yb(n){let e=ku(n.x,n.z,Gn.x,Gn.z);n.lod===0&&e>kb?(n.lod=2,sd(n)):n.lod===2&&e<Bb&&(n.lod=0,sd(n))}function Kb(n,e){if(!n.alive){n.dead+=e;return}if(Yb(n),n.tPlan-=e,n.tPlan<=0&&(n.tPlan=n.lod?3.5:.9+zo()*.5,n.fight||qb(n)),n.fight)return;let t=Zr(n);if(!t){n.pose="stand";return}if(t.follow){Jb(n,t,e);return}if(n.lod===2){n.stepT+=e,t.dur<1e8&&n.stepT>=t.dur&&Um(n);return}if(n.state==="walk")Zb(n,e,t);else{if(n.stepT+=e,n.pose=t.pose||"stand",n.carry=t.carry??null,n.tyaw!=null){let i=Oo(n.yaw,n.tyaw);n.yaw+=i*Math.min(1,e*6)}n.target&&Math.abs(n.y-n.target.y)>.005&&(n.y+=(n.target.y-n.y)*Math.min(1,e*7)),t.dur<1e8&&n.stepT>=t.dur&&Um(n)}}function Zb(n,e,t){let i=n.path&&n.path[n.pi];if(!i){id(n);return}let s=i.x-n.x,r=i.z-n.z,o=Math.hypot(s,r),a=n.speed*(n.run?2.2:1)*Xb*e;if(n.pose=n.run?"run":"walk",n.carry=t.carry??n.carryWalk??null,o<=a+.02)n.x=i.x,n.z=i.z,n.pi++,n.pi>=n.path.length&&id(n);else{let l=n.x+s/o*a,c=n.z+r/o*a;if(Pi(l,c,.28)){let u=n.target||i,d=Vo(n.x,n.z,u.x,u.z);if(d.length){n.path=d,n.pi=0;return}n.state="dwell",n.path=null,n.tPlan=0;return}n.x=l,n.z=c;let h=Math.atan2(s,r);n.yaw+=Oo(n.yaw,h)*Math.min(1,e*9)}n.y>.01&&(n.y*=Math.max(0,1-e*8))}function Jb(n,e,t){let i=Om(n,e),s=i.x-n.x,r=i.z-n.z,o=Math.hypot(s,r);if(n.lod===2||o>28){n.x=i.x,n.z=i.z,n.pose="stand";return}if(o<.35){n.pose="stand",n.yaw+=Oo(n.yaw,Gn.yaw)*Math.min(1,t*5);return}let a=n.speed*(o>4?2.4:o>1.6?1.6:1)*t;n.pose=o>4?"run":"walk";let l=n.x+s/o*a,c=n.z+r/o*a;if(Pi(l,c,.28))if(!Pi(l,n.z,.28))c=n.z;else if(!Pi(n.x,c,.28))l=n.x;else{let h=Vo(n.x,n.z,i.x,i.z);if(h[0]){let u=h[0],d=Math.hypot(u.x-n.x,u.z-n.z)||1;l=n.x+(u.x-n.x)/d*a,c=n.z+(u.z-n.z)/d*a}}n.x=l,n.z=c,n.yaw+=Oo(n.yaw,Math.atan2(s,r))*Math.min(1,t*9),n.y*=Math.max(0,1-t*8)}function Hl(n){n.plan=null,n.order=null;let e=Wo[n.role]||Wo.default,t=e?e(n,Go(),I):null;if(t){n.plan=t,n.step=0;let i=t.seq[0];if(i&&!i.follow){let s=od(n,i);n.x=s.x,n.z=s.z,n.y=s.y,n.yaw=s.yaw,n.target=s,n.state="dwell",n.arrived=!0}}}function zm(n){for(let e=0;e<mt.length;e++)Kb(mt[e],n)}var ld=n=>{if(!n.alive)return"Fallen";if(n.fight)return n.fight.label||"Fighting";let e=Zr(n),t=n.state==="walk"&&e&&!e.follow?"Heading out \u2014 ":"";return e?.label?t+e.label:n.plan?.label||"Idle"};var et=(n,e)=>{for(let[t,i,s]of e)if(t<=i?n>=t&&n<i:n>=t||n<i)return s;return e[e.length-1][2]},$b={plaza:"the Royal Court",market:"the market",yard:"the training yard",gate:"the main gate",villageSquare:"the village square",lumber:"the lumber camp",mine:"the mine",ash:"the camp fire",bmYard:"the keep yard",bmGate:"the Blackmere gate",bridge:"Kingsbridge",wall:"the walls",fields:"the fields",f1:"the fields",f2:"the fields",f3:"the fields",f4:"the fields",mbfield:"the Millbrook plots"},dd=n=>jn[n]?.name||$b[n]||n,nt=(n,e)=>n+"#"+e.id,it=n=>Ve(nt("sleep",n),()=>({seq:[{place:n.home,spot:n.bedSlot||"bed",i:n.bedIdx,dur:1e9,pose:"sleep",label:"Asleep in the "+dd(n.home)}]})),he=(n,e)=>Ve(nt("eat:"+e,n),()=>({seq:[{place:e,spot:"seat",i:n.idx,dur:1e9,pose:"sit",hook:"eat",label:"Eating a meal in "+dd(e)}]})),le=(n,e,t,i,s,r={})=>Ve(nt(`stay:${e}:${t}:${i}:${r.i??""}:${s}:${r.hook??""}:${r.carry??""}:${r.y??""}`,n),()=>({seq:[{place:e,spot:t,i:r.i??n.idx,dur:1e9,pose:i,label:s,...r}]}));var Wl=n=>Ve(nt("tavern",n),()=>({seq:[{place:"tavern",spot:"seat",i:n.idx,dur:40+n.idx%5*8,pose:"sit",label:"Drinking and talking at the Gilded Boar",hook:"social"},{place:"tavern",spot:"bar",dur:25,pose:"talk",label:"Chatting with the keeper"},{place:"tavern",spot:"seat",i:n.idx+3,dur:50,pose:"sit",label:"Sharing gossip at the Gilded Boar",hook:"social"}]})),Hm=()=>Ll()===3,Fm=n=>Ve(nt("field",n),()=>({seq:[0,1,2].map(e=>({place:n.work,spot:"hoe",i:n.idx*3+e,dur:38+e*6,pose:"hoe",label:"Tending the crops",prod:"grain"}))})),hd=n=>Ve(nt("chores",n),()=>({seq:[{place:"villageSquare",spot:"stand",i:n.idx,dur:30,pose:"hammer",label:"Mending fences and tools"},{place:"villageSquare",spot:"well",dur:22,pose:"carry",carry:"basket",label:"Drawing water at the well"}]})),km=n=>Ve(nt("cartG",n),()=>({seq:[{place:n.work||"f1",spot:"hoe",i:n.idx,dur:7,pose:"stand",label:"Loading the grain cart",hook:"pickGrain"},{place:"granary",spot:"store",i:n.idx,dur:7,pose:"carry",carry:"sack",label:"Hauling grain to the Royal Granary",hook:"dropGrain"}]})),Bm=n=>Ve(nt("cartW",n),()=>({seq:[{place:"lumber",spot:"pile",dur:7,pose:"stand",label:"Loading cut timber",hook:"pickWood"},{place:"smithy",spot:"store",dur:7,pose:"carry",carry:"log",label:"Hauling timber to the castle",hook:"dropWood"}]})),Gl=n=>Ve(nt("kitchen",n),()=>({seq:[{place:"kitchens",spot:"cook",i:n.idx,dur:40,pose:"cook",label:"Cooking for the household",prod:"meals"},{place:"kitchens",spot:"prep",i:n.idx,dur:34,pose:"write",label:"Kneading bread and preparing meals"},{place:"kitchens",spot:"store",dur:12,pose:"carry",carry:"sack",label:"Fetching flour from the stores"}]})),Jr=n=>Ve(nt("serve",n),()=>({seq:[{place:"kitchens",spot:"store",dur:9,pose:"carry",carry:"tray",label:"Loading trays in the kitchens"},{place:"greatHall",spot:"stand",i:n.idx,dur:14,pose:"carry",carry:"tray",label:"Serving trays in the Great Hall"},{place:"plaza",spot:"servant",i:n.idx,dur:16,pose:"stand",label:"Waiting on the court"}]})),Gm=n=>Ve(nt("sweep",n),()=>({seq:[0,1,2].map(e=>({place:"plaza",spot:"sweep",i:n.idx+e*2,dur:26,pose:"sweep",label:"Sweeping the royal court"}))})),ud=n=>Ve(nt("sweepH",n),()=>({seq:[{place:"greatHall",spot:"stand",i:n.idx,dur:28,pose:"sweep",label:"Cleaning the Great Hall"},{place:"apartments",spot:"stand",dur:26,pose:"sweep",label:"Tidying the royal apartments"},{place:"lodgings",spot:"rest",i:n.idx,dur:22,pose:"sweep",label:"Airing the lodgings"}]})),Vl=n=>Ve(nt("smith",n),()=>({seq:[{place:"smithy",spot:"forge",dur:24,pose:"stand",label:"Working the bellows",prod:"arms"},{place:"smithy",spot:"anvil",i:n.idx,dur:44,pose:"hammer",label:"Hammering arms at the anvil",prod:"arms"},{place:"smithy",spot:"store",dur:10,pose:"carry",carry:"crate",label:"Stocking the armory racks"}]})),cd=n=>Ve(nt("stable",n),()=>({seq:[{place:"stable",spot:"tend",i:n.idx,dur:30,pose:"tend",label:"Grooming the royal horses"},{place:"stable",spot:"tend",i:n.idx+1,dur:26,pose:"sweep",label:"Mucking out the stalls"}]}));var qo=(n,e)=>Ve(nt("inspect",n),()=>({seq:e.map((t,i)=>({place:t[0],spot:t[1]||"stand",i:t[3]??n.idx,dur:t[2]||30,pose:t[4]||"talk",label:t[5]||"Inspecting "+dd(t[0])}))}));Ye("cook",(n,e)=>et(e,[[22,4.5,()=>it(n)],[4.5,12,()=>Gl(n)],[12,13,()=>he(n,"greatHall")],[13,19,()=>Gl(n)],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Resting in the Great Hall")]])());Ye("kitchenhand",(n,e)=>et(e,[[22,5,()=>it(n)],[5,7,()=>Gl(n)],[7,8,()=>he(n,"greatHall")],[8,11,()=>Jr(n)],[11,12,()=>Jr(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Gl(n)],[18,20,()=>Jr(n)],[20,22,()=>le(n,"kitchens","stand","sit","Resting by the hearth")]])());Ye("servant",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,7,()=>Gm(n)],[7,8,()=>he(n,"greatHall")],[8,11.5,()=>Jr(n)],[11.5,12,()=>Jr(n)],[12,13,()=>he(n,"greatHall")],[13,17,()=>ud(n)],[17,19,()=>Jr(n)],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Resting in the Great Hall")]])());Ye("maid",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,7,()=>ud(n)],[7,8,()=>he(n,"greatHall")],[8,12,()=>ud(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Gm(n)],[18,19,()=>he(n,"greatHall")],[19,22,()=>le(n,"lodgings","rest","sit","Resting in the lodgings")]])());Ye("stablehand",(n,e)=>et(e,[[21.5,5,()=>it(n)],[5,7,()=>cd(n)],[7,8,()=>he(n,"greatHall")],[8,12,()=>cd(n)],[12,13,()=>he(n,"greatHall")],[13,19,()=>cd(n)],[19,21.5,()=>le(n,"stable","stand","sit","Resting in the stable")]])());Ye("smith",(n,e)=>et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,"greatHall")],[6.5,12,()=>Vl(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Vl(n)],[18,19,()=>he(n,"greatHall")],[19,21.5,()=>le(n,"smithy","stand","sit","Resting by the forge")]])());Ye("apprentice",(n,e)=>et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,"greatHall")],[6.5,12,()=>Vl(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Vl(n)],[18,19,()=>he(n,"greatHall")],[19,21.5,()=>le(n,"smithy","stand","sit","Cleaning tools")]])());Ye("priest",(n,e)=>et(e,[[22,5,()=>it(n)],[5,6.5,()=>le(n,"chapel","altar","pray","Morning prayers at the altar")],[6.5,7.5,()=>he(n,"greatHall")],[7.5,12,()=>Ve(nt("pTend",n),()=>({seq:[{place:"chapel",spot:"tend",dur:40,pose:"tend",label:"Tending the infirmary"},{place:"chapel",spot:"pew",i:n.idx,dur:30,pose:"pray",label:"Praying with the faithful"}]}))],[12,13,()=>he(n,"greatHall")],[13,17,()=>qo(n,[["plaza","stand",35,0,"talk","Blessing the court"],["market","browse",30,1,"talk","Speaking with the townsfolk"],["chapel","stand",30,0,"talk","Counselling penitents"]])],[17,18.5,()=>le(n,"chapel","altar","pray","Evening prayers")],[18.5,19.5,()=>he(n,"greatHall")],[19.5,22,()=>le(n,"chapel","pew","sit","Reading scripture")]])());Ye("healer",(n,e)=>et(e,[[22,6,()=>it(n)],[6,7,()=>he(n,"greatHall")],[7,11,()=>Ve(nt("hTend",n),()=>({seq:[{place:"chapel",spot:"tend",dur:38,pose:"tend",label:"Tending the wounded"},{place:"yard",spot:"rest",i:n.idx,dur:30,pose:"tend",label:"Treating soldiers in the yard",hook:"heal"}]}))],[11,12,()=>he(n,"greatHall")],[12,17,()=>Ve(nt("hTend2",n),()=>({seq:[{place:"chapel",spot:"tend",dur:38,pose:"tend",label:"Preparing poultices"},{place:"barracksA",spot:"rest",dur:26,pose:"tend",label:"Visiting the sick in barracks",hook:"heal"}]}))],[17,19,()=>le(n,"chapel","stand","stand","Keeping vigil in the infirmary")],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"chapel","pew","sit","Resting in the chapel")]])());Ye("treasurer",(n,e)=>et(e,[[22,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[8,12,()=>le(n,"treasury","desk","write","Reckoning the treasury ledgers",{i:0})],[12,13,()=>he(n,"greatHall")],[13,17,()=>Ve(nt("trs",n),()=>({seq:[{place:"treasury",spot:"desk",i:0,dur:60,pose:"write",label:"Writing the daily ledger"},{place:"treasury",spot:"chest",dur:30,pose:"carry",carry:"crate",label:"Counting coin in the strongroom"}]}))],[17,19,()=>le(n,"treasury","desk","write","Balancing accounts",{i:1})],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")],[7.5,8,()=>le(n,"treasury","stand","stand","Opening the treasury")]])());Ye("scribe",(n,e)=>et(e,[[22,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"warRoom","desk","write","Copying dispatches",{i:0})],[9,12,()=>le(n,"plaza","stand","write","Recording the day's petitions",{i:2})],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"treasury","desk","write","Copying records",{i:1})],[15,17,()=>le(n,"plaza","stand","write","Recording the day's petitions",{i:2})],[17,19,()=>le(n,"warRoom","desk","write","Filing dispatches",{i:0})],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")]])());var $r=(n,e,t)=>le(n,"plaza","petition","stand",t,{i:e});Ye("steward",(n,e)=>et(e,[[22.5,6,()=>it(n)],[6,7,()=>he(n,"greatHall")],[7,9,()=>qo(n,[["granary","stand",36,0,"talk","Counting the granary stores"],["kitchens","stand",30,0,"talk","Checking the kitchens"],["market","browse",28,0,"talk","Speaking with market traders"]])],[9,12,()=>$r(n,4,"Waiting to present the steward's petition")],[12,13,()=>he(n,"greatHall")],[13,15,()=>qo(n,[["treasury","stand",30,0,"write","Reviewing the treasury"],["granary","stand",32,0,"talk","Overseeing the granary"],["smithy","stand",26,0,"talk","Reviewing forge output"]])],[15,17,()=>$r(n,4,"Attending the afternoon court")],[17,19,()=>qo(n,[["market","browse",30,1,"talk","Reviewing market dues"],["kitchens","stand",28,0,"talk","Planning tomorrow's meals"]])],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")]])());Ye("chancellor",(n,e)=>et(e,[[22.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"warRoom","desk","write","Drafting royal correspondence",{i:0})],[9,12,()=>$r(n,3,"Waiting to advise the King")],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"treasury","desk","write","Studying tax charters",{i:1})],[15,17,()=>$r(n,3,"Attending the afternoon court")],[17,19,()=>le(n,"warRoom","map","talk","Consulting the war maps",{i:0})],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall",{i:1})]])());Ye("guildenvoy",(n,e)=>et(e,[[22.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"market","browse","talk","Meeting Crown merchants",{i:1})],[9,12,()=>$r(n,1,"Waiting to petition the Crown")],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"market","browse","talk","Haggling in the market",{i:2})],[15,17,()=>$r(n,1,"Waiting to petition the Crown")],[17,19,()=>le(n,"market","browse","talk","Meeting Crown merchants",{i:3})],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall",{i:2})]])());Ye("farmer",(n,e)=>{let t=Hm();return et(e,[[21,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,11.5,()=>t?hd(n):Fm(n)],[11.5,12.5,()=>he(n,"tavern")],[12.5,17.5,()=>t?hd(n):Fm(n)],[17.5,20,()=>Wl(n)],[20,21,()=>he(n,n.home)]])()});Ye("carter",(n,e)=>et(e,[[20.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>n.flags.wood?Bm(n):km(n)],[12,13,()=>he(n,"tavern")],[13,18,()=>n.flags.wood?Bm(n):km(n)],[18,20.5,()=>Wl(n)]])());Ye("woodcutter",(n,e)=>et(e,[[20.5,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,12,()=>Ve(nt("chop",n),()=>({seq:[0,1].map(t=>({place:"lumber",spot:"chop",i:n.idx+t,dur:40,pose:"chop",label:"Felling timber",prod:"wood"}))}))],[12,13,()=>he(n,n.home)],[13,18,()=>Ve(nt("chop",n),()=>({seq:[0,1].map(t=>({place:"lumber",spot:"chop",i:n.idx+t,dur:40,pose:"chop",label:"Felling timber",prod:"wood"}))}))],[18,20.5,()=>Wl(n)]])());Ye("merchant",(n,e)=>et(e,[[20.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,n.home)],[7.5,17,()=>le(n,"market","stall","trade","Selling wares at the market stall",{i:n.stallIdx??n.idx,prod:"trade"})],[17,18,()=>le(n,"market","browse","talk","Closing up the stall",{i:n.idx})],[18,20.5,()=>Wl(n)]])());Ye("tavernkeeper",(n,e)=>et(e,[[1.5,9.5,()=>it(n)],[9.5,10.5,()=>he(n,"tavern")],[10.5,24,()=>Ve(nt("bar",n),()=>({seq:[{place:"tavern",spot:"bar",dur:40,pose:"talk",label:"Pouring ale for patrons",prod:"ale"},{place:"tavern",spot:"stand",i:n.idx,dur:26,pose:"sweep",label:"Wiping the tables"}]}))],[0,1.5,()=>le(n,"tavern","stand","sweep","Closing the tavern")]])());Ye("barmaid",(n,e)=>et(e,[[0,10,()=>it(n)],[10,11,()=>he(n,"tavern")],[11,24,()=>Ve(nt("bar",n),()=>({seq:[{place:"tavern",spot:"stand",i:n.idx,dur:30,pose:"carry",carry:"tray",label:"Carrying ale to the tables"},{place:"tavern",spot:"bar",dur:22,pose:"talk",label:"Chatting with patrons"}]}))]])());Ye("child",(n,e)=>et(e,[[20,7,()=>it(n)],[7,8,()=>he(n,n.home)],[8,19,()=>Ve(nt("play",n),()=>({seq:[0,1,2,3].map(t=>({place:"villageSquare",spot:"play",i:n.idx+t*2,dur:16+t*4,pose:t%2?"run":"talk",label:"Playing with friends",jx:(t%3-1)*1.2}))}))],[19,20,()=>he(n,n.home)]])());Ye("villager",(n,e)=>et(e,[[21,6,()=>it(n)],[6,20,()=>hd(n)],[20,21,()=>he(n,n.home)]])());Ye("miller",(n,e)=>et(e,[[20.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>Ve(nt("mill",n),()=>({seq:[{place:"mill",spot:"mill",dur:44,pose:"mill",label:"Grinding flour at the mill",prod:"flour"},{place:"mill",spot:"store",dur:14,pose:"carry",carry:"sack",label:"Stacking flour sacks"}]}))],[12,13,()=>he(n,n.home)],[13,18,()=>Ve(nt("mill",n),()=>({seq:[{place:"mill",spot:"mill",dur:44,pose:"mill",label:"Grinding flour at the mill",prod:"flour"},{place:"mill",spot:"store",dur:14,pose:"carry",carry:"sack",label:"Stacking flour sacks"}]}))],[18,20.5,()=>le(n,n.home,"seat","sit","Resting at home")]])());Ye("mbfarmer",(n,e)=>{let t=Hm();return et(e,[[20.5,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,12,()=>t?le(n,n.home,"seat","sit","Mending tools indoors"):Ve(nt("mbf",n),()=>({seq:[0,1,2].map(i=>({place:"mbfield",spot:"hoe",i:n.idx+i,dur:36,pose:"hoe",label:"Working the Millbrook plots"}))}))],[12,13,()=>he(n,n.home)],[13,18,()=>t?le(n,n.home,"seat","sit","Mending tools indoors"):Ve(nt("mbf",n),()=>({seq:[0,1,2].map(i=>({place:"mbfield",spot:"hoe",i:n.idx+i,dur:36,pose:"hoe",label:"Working the Millbrook plots"}))}))],[18,20.5,()=>le(n,n.home,"seat","sit","Resting at home")]])()});Ye("miner",(n,e)=>et(e,[[20,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>Ve(nt("dig",n),()=>({seq:[0,1,2].map(t=>({place:"mine",spot:"dig",i:n.idx+t,dur:40,pose:"chop",label:"Digging iron ore",prod:"ore"}))}))],[12,13,()=>he(n,n.home)],[13,17.5,()=>Ve(nt("dig2",n),()=>({seq:[{place:"mine",spot:"cart",dur:30,pose:"carry",carry:"crate",label:"Hauling ore to the smelter"},{place:"smelter",spot:"forge",dur:34,pose:"hammer",label:"Working the smelter",prod:"ore"}]}))],[17.5,20,()=>le(n,"mine","cart","talk","Trading tales at the mine")]])());Ye("guildmaster",(n,e)=>et(e,[[21,6.5,()=>it(n)],[6.5,7.5,()=>he(n,n.home)],[7.5,18,()=>qo(n,[["mine","dig",36,0,"talk","Inspecting the ore seams"],["smelter","stand",30,0,"talk","Checking the smelter"],["mine","cart",26,0,"write","Counting ore carts"]])],[18,21,()=>le(n,n.home,"seat","sit","Reviewing guild accounts")]])());Ye("caravaner",(n,e)=>et(e,[[20,5.5,()=>it(n)],[5.5,7,()=>he(n,n.home)],[7,18,()=>le(n,"mine","cart","carry","Loading the iron caravan",{carry:"crate"})],[18,20,()=>le(n,"mine","cart","sit","Resting by the carts")]])());Ye("merc",(n,e)=>et(e,[[2,9,()=>le(n,"ash","sleep","sleep","Sleeping in a bedroll",{y:.15})],[9,10,()=>le(n,"ash","fire","sit","Eating by the campfire",{hook:"social"})],[10,14,()=>Ve(nt("mspar",n),()=>({seq:[0,1,2].map(t=>({place:"ash",spot:"camp",i:n.idx+t,dur:22,pose:t%2?"drill":"talk",label:"Sparring and sharpening steel"}))}))],[14,15,()=>le(n,"ash","fire","sit","Eating by the campfire")],[15,20,()=>Ve(nt("mfire",n),()=>({seq:[{place:"ash",spot:"fire",i:n.idx,dur:44,pose:"sit",label:"Drinking around the fire"},{place:"ash",spot:"camp",i:n.idx,dur:20,pose:"talk",label:"Boasting of past sieges"}]}))],[20,2,()=>le(n,"ash","fire","sit","Singing around the fire",{i:n.idx})]])());Ye("vservant",(n,e)=>et(e,[[21,5.5,()=>le(n,"bmBarracks","bed","sleep","Asleep",{i:n.idx,y:.5})],[5.5,7,()=>le(n,"bmHall","seat","sit","Eating",{hook:"social"})],[7,21,()=>Ve(nt("vserv",n),()=>({seq:[{place:"bmHall",spot:"stand",i:n.idx,dur:30,pose:"sweep",label:"Cleaning the hall"},{place:"bmKeep",spot:"stand",dur:26,pose:"carry",carry:"tray",label:"Serving Lord Maren"}]}))]])());Ye("vsmith",(n,e)=>et(e,[[21,5.5,()=>le(n,"bmSmith","stand","sleep","Asleep",{y:.4})],[5.5,21,()=>Ve(nt("vsm",n),()=>({seq:[{place:"bmSmith",spot:"forge",dur:24,pose:"stand",label:"Working the bellows",prod:"varms"},{place:"bmSmith",spot:"anvil",dur:44,pose:"hammer",label:"Forging weapons for Blackmere",prod:"varms"}]}))]])());var Xl=(n,e)=>n+"#"+e.id,Yo=(n,e,t,i,s="walk")=>Ve(Xl(e,n),()=>({seq:t.map(([r,o],a)=>({pos:{x:r,z:o},dur:10+a%3*3,pose:s,label:i}))})),Ws=n=>Ve(Xl("drill",n),()=>({seq:[{place:"yard",spot:"drill",i:n.idx,dur:34,pose:"drill",label:"Formation drill in the training yard"},{place:"yard",spot:"dummy",i:n.idx,dur:28,pose:"hammer",label:"Weapons practice"},{place:"yard",spot:"rest",i:n.idx,dur:18,pose:"stand",label:"Recovering between drills"}]})),fd=n=>Ve(Xl("maint",n),()=>({seq:[{place:"armory",spot:"rack",i:n.idx,dur:28,pose:"stand",label:"Inspecting weapons and armor"},{place:"guardQ",spot:"maint",i:n.idx,dur:28,pose:"hammer",label:"Maintaining guard equipment"}]})),Qn=n=>he(n,"garrisonMess"),jb=n=>he(n,"greatHall"),Qb=n=>Math.floor((n%24+24)%24/8),e1=(n,e)=>n.shift===Qb(e);function t1(n){let e=(Math.floor(I.clock/2)+n.idx)%5;return e===0?le(n,"plaza","guard","post","Guarding the Royal Court",{i:n.idx}):e===1?le(n,"gate","guard","post","Standing watch at the main gate",{i:n.idx}):e===2?le(n,"wall","post","post","Walking a wall post",{i:n.idx}):e===3?Yo(n,"guardPatrol",Ci.castle,"Patrolling the inner castle"):le(n,"aptDoor","guard","post","Guarding the royal apartments",{i:n.idx})}Ye("royalguard",(n,e)=>{if(e1(n,e))return t1(n);let t=(e-n.shift*8+24)%24;return t<1?jb(n):t<3?fd(n):t<5?Ws(n):it(n)});Ye("marshal",(n,e)=>et(e,[[22,6,()=>it(n)],[6,7,()=>Qn(n)],[7,10,()=>Ve(Xl("marshal-am",n),()=>({seq:[{place:"warRoom",spot:"map",i:0,dur:45,pose:"talk",label:"Reviewing realm defenses"},{place:"yard",spot:"muster",i:0,dur:35,pose:"talk",label:"Inspecting the garrison"},{place:"gate",spot:"guard",i:0,dur:30,pose:"post",label:"Inspecting the main gate"}]}))],[10,12,()=>le(n,"warRoom","map","write","Planning patrols and campaigns",{i:1})],[12,13,()=>Qn(n)],[13,18,()=>Yo(n,"marshal-patrol",Ci.road,"Inspecting the Royal Road")],[18,19,()=>Qn(n)],[19,22,()=>le(n,"warRoom","map","talk","Holding the evening war council",{i:2})]])());Ye("captain",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,6.5,()=>Qn(n)],[6.5,10,()=>Ws(n)],[10,12,()=>Yo(n,"captain-patrol",Ci.castle,"Inspecting guard posts")],[12,13,()=>Qn(n)],[13,17,()=>Ws(n)],[17,19,()=>Yo(n,"captain-gate",Ci.village,"Inspecting the village watch")],[19,20,()=>Qn(n)],[20,22,()=>le(n,"warRoom","map","talk","Reporting to the Lord Marshal",{i:n.idx})]])());Ye("sergeant",(n,e)=>et(e,[[22,5,()=>it(n)],[5,6,()=>Qn(n)],[6,12,()=>Ws(n)],[12,13,()=>Qn(n)],[13,18,()=>Ws(n)],[18,20,()=>fd(n)],[20,22,()=>it(n)]])());Ye("soldier",(n,e)=>I.army.directive==="drill"?Ws(n):I.army.directive==="follow"?le(n,"yard","muster","stand","Awaiting the King\u2019s marching column",{i:n.idx}):I.army.directive==="gate"?le(n,"gate","defend","post","Reinforcing the main gate",{i:n.idx}):I.army.directive==="muster"?le(n,"yard","muster","post","Mustered under royal orders",{i:n.idx}):et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>Qn(n)],[6.5,11.5,()=>Ws(n)],[11.5,12.5,()=>Qn(n)],[12.5,15,()=>fd(n)],[15,18.5,()=>Yo(n,"soldier-patrol",n.company%2?Ci.village:Ci.castle,"Patrolling Crown lands")],[18.5,19.5,()=>Qn(n)],[19.5,21.5,()=>le(n,"barracksA","rest","sit","Off duty in barracks",{i:n.idx})]])());Ye("vguard",(n,e)=>I.powers.valemar.war?le(n,"bmGate","defend","post","Defending Blackmere from the Crown",{i:n.idx}):et(e,[[22,6,()=>le(n,"bmBarracks","bed","sleep","Sleeping in Blackmere barracks",{i:n.idx,y:.45})],[6,7,()=>he(n,"bmHall")],[7,19,()=>le(n,n.idx%2?"bmGate":"bmWall",n.idx%2?"guard":"post","post","Standing Blackmere watch",{i:n.idx})],[19,20,()=>he(n,"bmHall")],[20,22,()=>le(n,"bmYard","stand","talk","Off duty in Blackmere yard",{i:n.idx})]])());Ye("vsoldier",(n,e)=>I.powers.valemar.war?le(n,"bmYard","drill","post","Mustered to defend Blackmere",{i:n.idx}):et(e,[[22,6,()=>le(n,"bmBarracks","bed","sleep","Sleeping in Blackmere barracks",{i:n.idx,y:.45})],[6,7,()=>he(n,"bmHall")],[7,12,()=>le(n,"bmYard","drill","drill","Drilling for House Valemar",{i:n.idx})],[12,13,()=>he(n,"bmHall")],[13,18,()=>le(n,"bmYard","drill","drill","Training in Blackmere yard",{i:n.idx+3})],[18,19,()=>he(n,"bmHall")],[19,22,()=>le(n,"bmYard","stand","talk","Resting in Blackmere yard",{i:n.idx})]])());var oi={grain:0,wood:0,iron:0,arms:0,trade:0,meals:0},Ii=(n,e=1)=>oi[n]=(oi[n]||0)+e;us("pickGrain",()=>{});us("dropGrain",(n,e,t)=>{t==="done"&&Ii("grain",3)});us("pickWood",()=>{});us("dropWood",(n,e,t)=>{t==="done"&&Ii("wood",2)});us("eat",(n,e,t)=>{t==="arrive"&&I.stock.grain>0&&(I.stock.grain=Math.max(0,I.stock.grain-.12),Ii("meals"))});us("social",(n,e,t)=>{t==="done"&&(n.morale=Math.min(100,n.morale+.6))});us("heal",(n,e,t)=>{t==="done"&&(n.hp=Math.min(n.maxhp,n.hp+18))});as("workDone",({a:n,step:e})=>{e.prod==="grain"?Ii("grain",1.4):e.prod==="wood"?Ii("wood",1.2):e.prod==="ore"?Ii("iron",.7):e.prod==="arms"?Ii("arms",.5):e.prod==="trade"?Ii("trade",1):e.prod==="meals"&&Ii("meals",1)});as("day",()=>{let n=I.realm,e=I.stock,t={grain:Math.round(oi.grain*4*I.realm.farmFocus),wood:Math.round(oi.wood*2),iron:Math.round(oi.iron*1.5),arms:Math.round(oi.arms)};e.grain+=t.grain,e.wood+=t.wood,e.iron+=t.iron,e.arms+=Math.min(t.arms,e.iron),e.iron=Math.max(0,e.iron-t.arms*.5);let i=Object.keys(I.actors||{}).length||80,s=Math.max(18,Math.round(i*.34*I.realm.ration));e.grain=Math.max(0,e.grain-s);let r=Math.round((28+n.prosperity*.65+oi.trade*1.8)*n.tax),o=Math.round(18+(I.army.size||20)*1.15);Em(r,"Taxes & market dues"),Tm(o,"Garrison wages",!0),e.grain<60?(n.favor-=4,n.prosperity-=2,Gs("The granary is running dangerously low.","warning")):e.grain>500&&(n.prosperity+=1),oi.meals>=8&&(n.favor+=1),n.security+=Math.min(2,(I.army.size||0)/30),Kr(),I.ledger.last={in:{"Taxes & market dues":r},out:{"Garrison wages":o},net:r-o,day:an()-1,production:t,foodUse:s},I.ledger.hist.push(I.ledger.last),I.ledger.hist.length>32&&I.ledger.hist.shift();for(let a in oi)oi[a]=0});function Ko(n){return I.powers[n]}function Zo(n,e,t){let i=Ko(n);i&&(i.rel=Xr(i.rel+e,-100,100),t&&Gs(t,"diplomacy"))}function Vm(n,e,t=!0){let i=Ko(n);return i?(i.treaties[e]=t,t&&I.stats.treaties++,Zo(n,t?8:-5,(t?"Treaty signed with ":"Treaty ended with ")+i.name),!0):!1}function pd(n){let e=Ko(n);return!e||e.war?!1:(e.war=!0,e.rel=Math.min(e.rel,-60),I.war.state="war",I.war.host=n,I.war.lastWar=I.clock,Gs("War declared between the Crownlands and "+e.name+".","war"),!0)}function md(n){let e=Ko(n);return!e||!e.war?!1:(e.war=!1,e.rel=Math.max(e.rel,-15),I.war.host===n&&(I.war.state="peace",I.war.host=null),Gs("Peace concluded with "+e.name+".","diplomacy"),!0)}as("day",()=>{for(let e of Object.values(I.powers))e.cool=Math.max(0,(e.cool||0)-1),e.id==="valemar"?(e.war?(e.mood="hostile",e.mobilized=!0):e.rel<-35||I.realm.security<35?(e.mood="threatening",e.mobilized=Gu(.35)):e.rel>35?(e.mood="conciliatory",e.mobilized=!1):e.mood="watchful",!e.war&&e.cool<=0&&e.rel<-55&&e.aggression>.55&&Gu(.18)&&(pd(e.id),e.cool=5)):e.rel>25&&(e.mood="friendly");let n=Ko("valemar");if(n.war){let e=Math.max(1,I.army.size||20)*(I.realm.security/60);n.army*(.8+Math.random()*.4)>e*1.18?(I.realm.security-=4,I.realm.favor-=2,Gs("Valemar raiders pressure the eastern road.","war")):(n.wealth=Math.max(0,n.wealth-12),I.realm.renown+=1)}Kr()});var ql=()=>Object.fromEntries(Object.entries(I.powers).map(([n,e])=>[n,{name:e.name,rel:Math.round(e.rel),army:e.army,mood:e.mood,war:e.war,treaties:{...e.treaties}}]));var Wm=!1,Xm=["Edric","Rowan","Cedric","Gareth","Alric","Bram","Osric","Leof","Hugh","Tomas","Merek","Hal","Alden","Wulf","Godric","Eamon","Corin","Rolf","Martin","Piers","Milo","Dain","Arlen","Odo","Beric","Gavin","Elwin","Ronan","Silas","Tobin","Mara","Elsa","Nora","Ada","Iris","Maeve","Lina","Tessa","Elin","Greta","Anya","Mira","Rhea","Faye"],n1=0,Ft=(n="")=>n+(n?" ":"")+Xm[n1++%Xm.length];function ln(n){let e=I.actors?.[n.id],t=Bl(n);if(Hl(t),e){for(let i of["x","z","y","yaw","hp","alive","morale","loyalty"])e[i]!=null&&(t[i]=e[i]);if(e.order?.status==="active"){let i=e.order.until!=null?Math.max(.1,e.order.until-I.clock):null,s={...e.order};delete s.id,delete s.issued,delete s.status,delete s.until,i!=null&&(s.hours=i),wn(t,s)}}return t}function qm(){if(Wm)return mt;Wm=!0,ln({id:"marshal",name:"Lord Marshal Garrick",role:"marshal",rank:5,home:"barracksA",hero:"marshal",look:{asset:"guard",tint:12175591}});for(let s=0;s<2;s++)ln({id:"captain"+s,name:Ft("Captain"),role:"captain",rank:4,home:"barracksA",company:s,petitionKey:s===0?"captain":null,look:{asset:"guard",tint:11124711}});for(let s=0;s<4;s++)ln({id:"sergeant"+s,name:Ft("Sergeant"),role:"sergeant",rank:3,home:s<2?"barracksA":"barracksB",company:s%2,look:{asset:"guard",tint:9546200}});for(let s=0;s<18;s++)ln({id:"guard"+s,name:Ft("Royal Guard"),role:"royalguard",rank:2,home:"guardQ",shift:s%3,company:0,look:{asset:"guard",tint:9087196}});let n=7,e=I.army.size>0?I.army.size:27,t=Math.max(20,Math.min(32,e-n));for(let s=0;s<t;s++)ln({id:"soldier"+s,name:Ft("Crown Soldier"),role:"soldier",rank:1,home:s%2?"barracksA":"barracksB",company:s%2,look:{asset:"guard",tint:14075558}});let i=[["steward","Master Corvin","steward","apartments","innkeeper","steward"],["chancellor","Lord Edrin","chancellor","apartments","mage","chancellor"],["treasurer","Master Owyn","treasurer","lodgings","innkeeper"],["scribe","Elric the Scribe","scribe","lodgings","mage"],["priest","Father Anselm","priest","lodgings","mage"],["healer","Sister Alys","healer","lodgings","mage"],["cook","Cook Bran","cook","lodgings","innkeeper"],["cook2","Cook Hilda","cook","lodgings","innkeeper"],["maid0",Ft("Maid"),"maid","lodgings","innkeeper"],["maid1",Ft("Maid"),"maid","lodgings","innkeeper"],["servant0",Ft("Servant"),"servant","lodgings","innkeeper"],["servant1",Ft("Servant"),"servant","lodgings","innkeeper"],["smith",Ft("Smith"),"smith","lodgings","innkeeper"],["apprentice",Ft("Apprentice"),"apprentice","lodgings","innkeeper"],["stablehand",Ft("Stablehand"),"stablehand","lodgings","innkeeper"],["merchant","Lady Mira","merchant","vh0","merchant","merchant"],["guildenvoy","Guild Envoy Torren","guildenvoy","vh1","merchant"],["tavernkeeper","Innkeeper Jory","tavernkeeper","vh2","innkeeper"],["barmaid","Nell","barmaid","vh3","innkeeper"],["woodcutter",Ft("Woodcutter"),"woodcutter","lumberCabin","innkeeper"]];for(let[s,r,o,a,l,c]of i)ln({id:s,name:r,role:o,home:a,petitionKey:c,look:{asset:l}});for(let s=0;s<8;s++)ln({id:"farmer"+s,name:Ft("Farmer"),role:"farmer",home:"vh"+s%8,work:"f"+(s%4+1),look:{asset:s%3===0?"merchant":"innkeeper"}});for(let s=0;s<4;s++)ln({id:"child"+s,name:Ft(),role:"child",home:"vh"+s%4,look:{asset:"innkeeper",scale:.72}});ln({id:"miller",name:Ft("Miller"),role:"miller",home:"mb1",look:{asset:"innkeeper"}});for(let s=0;s<3;s++)ln({id:"mbfarmer"+s,name:Ft("Farmer"),role:"mbfarmer",home:"mb"+(s+1),look:{asset:"innkeeper"}});for(let s=0;s<4;s++)ln({id:"miner"+s,name:Ft("Miner"),role:"miner",home:"sh"+(s%3+1),look:{asset:"guard",tint:9208437}});ln({id:"guildmaster",name:"Guildmaster Torvik",role:"guildmaster",home:"sh1",look:{asset:"merchant"}});for(let s=0;s<6;s++)ln({id:"merc"+s,name:Ft("Mercenary"),role:"merc",noBed:!0,team:"ashwood",look:{asset:"guard",tint:7887432}});for(let s=0;s<8;s++)ln({id:"vguard"+s,name:Ft("Valemar Guard"),role:"vguard",home:"bmBarracks",team:"valemar",look:{asset:"guard",tint:4810323}});for(let s=0;s<12;s++)ln({id:"vsoldier"+s,name:Ft("Valemar Soldier"),role:"vsoldier",home:"bmBarracks",team:"valemar",look:{asset:"guard",tint:5464909}});return ln({id:"valemarLord",name:"Lord Maren Valemar",role:"vservant",home:"bmKeep",team:"valemar",hero:"rival",look:{asset:"guard",tint:3494717}}),I.army.size=mt.filter(s=>s.team==="crown"&&["soldier","sergeant","captain","marshal"].includes(s.role)).length,mt}function Ym(){let n={};for(let e of mt)n[e.id]={x:e.x,z:e.z,y:e.y,yaw:e.yaw,hp:e.hp,alive:e.alive,morale:e.morale,loyalty:e.loyalty,order:e.order?{...e.order}:null};return I.actors=n,n}var i1=["weapon"];function s1(n,e,t){let i=n;for(;i&&i!==e;){let s=(i.name||"").toLowerCase();if(t.some(r=>s.startsWith(r)))return!0;i=i.parent}return!1}function Km(n,{excludePrefixes:e=i1}={}){n.updateMatrixWorld(!0);let t=new yn,i=new yn;return n.traverse(s=>{!s.isMesh||s1(s,n,e)||!s.geometry||(s.geometry.boundingBox||s.geometry.computeBoundingBox(),s.geometry.boundingBox&&(i.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),t.union(i)))}),t}function Yl(n,e,t){let i=Km(n,t),s=new R;i.getSize(s);let r=e/Math.max(.01,s.y);return n.scale.setScalar(r),i=Km(n,t),n.position.y-=i.min.y,{scale:r,bodyHeight:s.y}}var Jm={guard:"./assets/guard.glb",innkeeper:"./assets/innkeeper.glb",merchant:"./assets/merchant.glb",mage:"./assets/mage.glb"},Zm={guard:10,innkeeper:5,merchant:3,mage:2};function r1(n){n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material&&(e.material=e.material.clone()))})}function o1(n=""){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d"),i=new zr(e);i.colorSpace=dt;let s=new Ns({map:i,transparent:!0,depthWrite:!1}),r=new Ur(s);return r.scale.set(2.55,.62,1),r.userData.setText=o=>{t.clearRect(0,0,512,128),t.fillStyle="rgba(11,11,14,.78)",t.beginPath(),t.roundRect(18,31,476,66,18),t.fill(),t.strokeStyle="rgba(226,199,126,.58)",t.lineWidth=2,t.stroke(),t.fillStyle="#f7e0a8",t.font="bold 26px Georgia",t.textAlign="center",t.fillText(o.length>30?o.slice(0,29)+"\u2026":o,256,73),i.needsUpdate=!0},r.userData.setText(n),r}var a1=n=>Jm[n.look?.asset]?n.look.asset:["royalguard","soldier","marshal","captain","sergeant","vguard","vsoldier","merc"].includes(n.role)?"guard":"innkeeper";async function $m(n){let e=new Wr,t={};await Promise.all(Object.entries(Jm).map(async([l,c])=>{t[l]=await new Promise((h,u)=>e.load(c,h,void 0,u))}));let i=[],s={guard:[],innkeeper:[],merchant:[],mage:[]};for(let l of Object.keys(Zm)){let c=t[l];for(let h=0;h<Zm[l];h++){let u=new Nt,d=wl(c.scene);r1(d),u.add(d);let x=Yl(d,1.72).scale,g=o1("");g.position.y=2.02,u.add(g);let m=new ge(new Ji(.34,.43,22),new on({color:14006636,transparent:!0,opacity:.04,side:$t,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.02,u.add(m);let f=null,_=null,y=null,v=null,C=null;if(c.animations?.length){f=new Fs(d);let A=c.animations.find(U=>/^idle$/i.test(U.name))||c.animations.find(U=>/idle/i.test(U.name))||c.animations[0],D=c.animations.find(U=>/arm-swing/i.test(U.name))||A,M=c.animations.find(U=>/head-turn/i.test(U.name))||A,E=c.animations.find(U=>/weapon-raise/i.test(U.name))||D;_=f.clipAction(A),y=f.clipAction(D),v=f.clipAction(M),C=f.clipAction(E),_.play()}let w={type:l,root:u,visual:d,label:g,ring:m,mixer:f,idle:_,move:y,talk:v,work:C,state:"idle",actor:null,baseScale:x,visualBaseY:d.position.y};u.visible=!1,n.add(u),i.push(w),s[l].push(w)}}let r=0;function o(l){for(let c of Object.keys(s)){let h=s[c].length,u=mt.filter(x=>x.alive&&a1(x)===c).map(x=>{let g=Math.hypot(x.x-l.x,x.z-l.z),m=(x.hero?60:0)+(x.rank||0)*7+(x.order?25:0);return{a:x,d:g,score:g-m}}).filter(x=>x.d<88).sort((x,g)=>x.score-g.score).slice(0,h).map(x=>x.a),d=new Set(u);for(let x of s[c])x.actor&&!d.has(x.actor)&&(x.actor=null,x.root.visible=!1);let p=new Set(s[c].filter(x=>x.actor).map(x=>x.actor));for(let x of u){if(p.has(x))continue;let g=s[c].find(_=>!_.actor);if(!g)break;g.actor=x,g.root.visible=!0,g.label.userData.setText(x.name),p.add(x);let m=x.look?.tint;m&&g.visual.traverse(_=>{_.isMesh&&_.material?.color&&(_.material.color.setHex(16777215),_.material.color.multiply(new _e(m)))});let f=x.look?.scale||1;g.visual.scale.setScalar(g.baseScale*f),g.label.position.y=2.02*f}}}function a(l,c){r-=c,r<=0&&(r=.45,o(l));for(let h of i){if(!h.actor||!h.root.visible)continue;let u=h.actor;h.root.position.set(u.x,u.y||0,u.z),h.root.rotation.y=u.yaw||0;let d=u.state==="walk"||u.pose==="walk"||u.pose==="run",p=String(u.pose||"stand"),x=d?"move":/talk|pray|write|trade/.test(p)?"talk":/drill|hammer|chop|hoe|tend|mill|post/.test(p)?"work":"idle";if(h.mixer&&(h.mixer.update(c),x!==h.state)){let f={idle:h.idle,move:h.move,talk:h.talk,work:h.work},_=f[x]||h.idle,y=f[h.state]||h.idle;_&&y&&_!==y&&(_.reset().play(),_.crossFadeFrom(y,.15,!0)),h.state=x}let g=Math.hypot(u.x-l.x,u.z-l.z),m=!!u.order;h.label.visible=g<11||m||!!u.hero,h.ring.material.opacity=m?.28:u.hero?.13:.035,h.ring.material.color.setHex(u.team==="valemar"?9288582:u.team==="ashwood"?13929063:m?8368895:14006636)}}return{update:a,get targets(){return i.filter(l=>l.actor&&l.root.visible).map(l=>({actor:l.actor,root:l.root,ring:l.ring}))},visibleCount:()=>i.filter(l=>l.actor&&l.root.visible).length,capacity:i.length}}var En=(n,e=.9,t=0)=>new lt({color:n,roughness:e,metalness:t}),At={grass:En(6649932,1),road:En(11836792,1),water:new lt({color:4684689,roughness:.35,metalness:.08,transparent:!0,opacity:.82}),stone:En(9669760,.96),stoneDark:En(6775646,.95),wood:En(7030574,.88),thatch:En(10192470,1),red:En(7611700,.86),brown:En(6636333,.9),slate:En(5001561,.92),green:En(3427389,.92),black:En(2698289,.88),field:En(7296824,1),crop:En(9798219,1)},l1=n=>At[n.roof]||At.red;function jm(n){let e=[],t=[],i=(g,m,f,_,y,v,C,w=0,A=!1)=>{let D=new ge(new Ut(g,m,f),_);return D.position.set(y,v,C),D.rotation.y=w,D.receiveShadow=!0,D.castShadow=A,n.add(D),D},s=i(Sn.x1-Sn.x0+0,.12,Sn.z1-Sn.z0,At.grass,(Sn.x0+Sn.x1)/2,-.12,(Sn.z0+Sn.z1)/2);for(let g of Object.values(Bo))for(let m=0;m<g.length-1;m++){let[f,_]=g[m],[y,v]=g[m+1],C=y-f,w=v-_,A=Math.hypot(C,w),D=Math.atan2(C,w);i(3.3,.045,A,At.road,(f+y)/2,-.035,(_+v)/2,D)}for(let g=0;g<Bs.length-1;g++){let[m,f]=Bs[g],[_,y]=Bs[g+1],v=_-m,C=y-f,w=Math.hypot(v,C),A=Math.atan2(v,C);i(8,.035,w+1.2,At.water,(m+_)/2,-.025,(f+y)/2,A)}i(_n.x1-_n.x0,.22,_n.w,At.stoneDark,(_n.x0+_n.x1)/2,.06,_n.z,0,!0);for(let g=_n.x0+1;g<_n.x1;g+=2.3)i(.18,.65,_n.w+.5,At.wood,g,.38,_n.z,0);for(let g of Wu){i(g.x1-g.x0,.04,g.z1-g.z0,At.field,(g.x0+g.x1)/2,-.025,(g.z0+g.z1)/2);for(let m=g.x0+2;m<g.x1-1;m+=3)i(.13,.08,g.z1-g.z0-2,At.crop,m,.035,(g.z0+g.z1)/2)}for(let[g,m]of[[166,24],[176,24],[186,24],[196,24],[166,32],[176,32],[186,32],[196,32]])i(7,.035,5,At.field,g,-.02,m);for(let g of rs){for(let f of g.walls){let _=f.x2-f.x1,y=f.z2-f.z1;i(Math.max(.08,_),g.h,Math.max(.08,y),g.wall===5922147?At.stoneDark:At.stone,(f.x1+f.x2)/2,g.h/2,(f.z1+f.z2)/2,0,Math.hypot(g.cx,g.cz)<115)}let m=i(g.w+.55,.28,g.d+.55,l1(g),g.cx,g.h+.12,g.cz,0,Math.hypot(g.cx,g.cz)<115);m.material=m.material.clone(),m.material.transparent=!0,t.push({mesh:m,b:g}),i(g.door.side==="N"||g.door.side==="S"?2.7:.28,.45,g.door.side==="N"||g.door.side==="S"?.28:2.7,At.wood,g.door.x,g.h-.2,g.door.z,0,!1)}function r(g,m=!1){let f=m?At.stoneDark:At.stone,_=g.h||4.2,y=g.t||1.3,v=g.gate?.z??0;i(g.x1-g.x0,_,y,f,(g.x0+g.x1)/2,_/2,g.z0,0,!0),i(g.x1-g.x0,_,y,f,(g.x0+g.x1)/2,_/2,g.z1,0,!0),i(y,_,g.z1-g.z0,f,g.x1,_/2,(g.z0+g.z1)/2,0,!0);let C=3,w=v;i(y,_,Math.max(.1,w-C-g.z0),f,g.x0,_/2,(g.z0+w-C)/2,0,!0),i(y,_,Math.max(.1,g.z1-(w+C)),f,g.x0,_/2,(w+C+g.z1)/2,0,!0)}r({...ot,gate:{z:0}},!1),r({...Oe,t:1.3,h:4.8},!0);for(let g of[...Rl,...Xu]){let m=g.name==="bm",f=new ge(new Zi(g.r,g.r*1.08,g.h,12),m?At.stoneDark:At.stone);f.position.set(g.x,g.h/2,g.z),f.receiveShadow=f.castShadow=Math.hypot(g.x,g.z)<115,n.add(f);let _=new ge(new Ti(g.r*1.22,1.7,12),m?At.green:At.red);_.position.set(g.x,g.h+.8,g.z),n.add(_)}i(4.8,6.2,3.2,At.stoneDark,Oe.x0+1.3,3.1,Oe.gate.z-5.3,0,!0),i(4.8,6.2,3.2,At.stoneDark,Oe.x0+1.3,3.1,Oe.gate.z+5.3,0,!0);for(let[g,m]of Al){let f=new ge(new Ti(2.4,2.8,4),At.thatch);f.position.set(g,1.35,m),f.rotation.y=Math.PI/4,n.add(f)}let o=70,a=new Zi(.18,.26,1.8,6),l=new Ti(1.15,3,7),c=new Os(a,At.wood,o),h=new Os(l,En(4218680,1),o),u=new vt,d=1937,p=()=>(d=d*1664525+1013904223>>>0,d/4294967296);for(let g=0;g<o;g++){let m,f;do m=45+p()*330,f=-150+p()*450;while(m>150&&m<260&&f>-120&&f<90||m>380&&f>215&&f<295);let _=.75+p()*.75;u.position.set(m,.9*_,f),u.scale.set(_,_,_),u.updateMatrix(),c.setMatrixAt(g,u.matrix),u.position.set(m,2.8*_,f),u.updateMatrix(),h.setMatrixAt(g,u.matrix)}c.receiveShadow=!0,h.receiveShadow=!0,n.add(c,h);function x(g){let m=Yr(g.x,g.z);for(let f of t){let _=m===f.b;f.mesh.material.opacity=_?.18:1,f.mesh.material.depthWrite=!_}}return{update:x,roofs:t,terrain:s}}var Tn={pauldronRadius:.065,capeTopY:1.34,capeBottomY:.78,capeTopHalfWidth:.18,capeBottomHalfWidth:.24,sashHeight:.42,crownRadius:.13,crownSpikeHeight:.11,crownHeadOffset:.278,crownBandHeight:.065},vn={frontY:-.132,featureY:-.178,eyeX:.058,eyeZ:.14,eyeRadius:.022,browZ:.19,browWidth:.082,noseTipY:-.188,mouthZ:.006,jawTopZ:.074,jawBottomZ:-.078,jawTopHalfWidth:.116,jawBottomHalfWidth:.12,hairCapZ:.205,beardTopZ:.05,beardBottomZ:-.082},Yt={fov:66,defaultMode:"third",look:{yawSensitivity:.0048,pitchSensitivity:.0034,angleDamping:14,positionDamping:13},third:{standingDistance:3.95,seatedDistance:3.75,standingTargetY:.94,seatedTargetY:.84,defaultPitch:.08,minPitch:-.06,maxPitch:.26},first:{eyeHeight:1.62,minPitch:-.52,maxPitch:.52}};var kt=n=>document.getElementById(n),h1=kt("game"),rc=kt("begin"),u1=kt("intro"),Di=kt("interact"),d1=kt("orders"),lg=kt("attack"),Jo=kt("cameraMode"),$l=kt("nearby"),zi=kt("dialogue"),gs=kt("speakerRole"),xs=kt("speakerName"),ui=kt("dialogueText"),gt=kt("choices"),f1=kt("leaveDialogue"),cg=kt("objective"),gd=kt("toast"),ds=kt("warStatus"),Qt=new Ao({antialias:!0,powerPreference:"high-performance"});Qt.setPixelRatio(Math.min(devicePixelRatio||1,1.25));Qt.setSize(innerWidth,innerHeight);Qt.outputColorSpace=dt;Qt.toneMapping=jh;Qt.toneMappingExposure=1.1;Qt.shadowMap.enabled=!0;Qt.shadowMap.type=$h;h1.appendChild(Qt.domElement);window.__crownlands3dBooted=!0;window.dispatchEvent(new Event("crownlands3dready"));var un=new Qa;un.background=new _e(9480125);un.fog=new ja(9480125,28,205);var hi=new Gt(Yt.fov,innerWidth/innerHeight,.08,280),p1=new Wr,m1=new xl;function oc(){let n=window.visualViewport,e=Math.max(1,Math.round(n?.width||innerWidth)),t=Math.max(1,Math.round(n?.height||innerHeight));Qt.setSize(e,t,!1),hi.aspect=e/t,hi.updateProjectionMatrix()}addEventListener("resize",oc,{passive:!0});addEventListener("orientationchange",()=>requestAnimationFrame(oc),{passive:!0});window.visualViewport?.addEventListener("resize",oc,{passive:!0});oc();var hg=new pl(14281471,5849904,2);un.add(hg);var Ys=new Hr(16770482,3);Ys.position.set(-7,13,8);Ys.castShadow=!0;Ys.shadow.mapSize.set(1024,1024);Object.assign(Ys.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:32});un.add(Ys);var ug=new Br(16760168,12,12,2);ug.position.set(0,3.3,5.7);un.add(ug);var ac=new ge(new hl(11.5,64),new lt({color:11114620,roughness:.92}));ac.rotation.x=-Math.PI/2;ac.position.y=-.035;ac.receiveShadow=!0;un.add(ac);var lc=new Nt;un.add(lc);var Ce=new Nt;Ce.position.set(0,0,9);Ce.rotation.y=Math.PI;un.add(Ce);var li,Kl,Id,Ld,Dd,Nd,Ud,Od,zd,Fd,jr,Qr,kd=0,ec=!1,Oi=Yt.defaultMode,Wn=0,cc=0,Vn=Yt.third.defaultPitch,Ks=Yt.third.defaultPitch,hc=0,uc=0,cn=null,An=!1,jl=!1;var hn=!1,Zs=null,vd=null,xd=0,Md=60,tc="patrol",to="drill",Xn=null,Js=null,nc=null,eo=null,Xs="idle",fs=null,Ni=null,bd="ROYAL COURT",ps=!1,Sd=0,$o=0,dg=[],fg=[],pg=[],dc=new Map,wd=null,ai=null;try{wd=JSON.parse(localStorage.getItem("crownlands_state_v2")||"null")}catch{}try{ai=JSON.parse(localStorage.getItem("crownlands_realm_v1")||"null")}catch{}if(wd)Ju(wd);else{let n=Il();ai&&(n.realm.coin=ai.gold??n.realm.coin,n.realm.favor=ai.favor??n.realm.favor,n.realm.security=ai.security??n.realm.security,n.realm.prosperity=ai.prosperity??n.realm.prosperity,n.clock=8+Math.max(0,(ai.day||1)-1)*24,n.guard.mode=ai.guardMode||"routine",n.army.directive=ai.armyMode||"routine",n.army.size=ai.armySize||20),Ju(n)}qm();var De={get gold(){return I.realm.coin},set gold(n){I.realm.coin=n},get favor(){return I.realm.favor},set favor(n){I.realm.favor=n},get security(){return I.realm.security},set security(n){I.realm.security=n},get prosperity(){return I.realm.prosperity},set prosperity(n){I.realm.prosperity=n},get day(){return an()},get armySize(){return I.army.size},set armySize(n){I.army.size=n},get guardMode(){return I.guard.mode},set guardMode(n){I.guard.mode=n},get armyMode(){return I.army.directive},set armyMode(n){I.army.directive=n}},$e=()=>{I.king.x=Ce.position.x,I.king.z=Ce.position.z,I.king.yaw=Ce.rotation.y,I.king.seated=hn,Ym(),localStorage.setItem("crownlands_state_v2",JSON.stringify(Rm()))};function jt(){Kr()}function Lt(){for(let n of["gold","favor","security","prosperity"])kt(n).textContent=De[n];document.querySelector(".royal-chip small").textContent="THE CROWNLANDS \xB7 "+Dl().toUpperCase()+" \xB7 DAY "+an()+" \xB7 YEAR "+Ku()}Lt();var Ui=null,Qm=.18;function mg(){try{Ui||(Ui=new(window.AudioContext||window.webkitAudioContext)),Ui.state==="suspended"&&Ui.resume()}catch{}}function qs(n,e=.18,t=.025,i="sine",s=0){if(!Ui)return;let r=Ui.createOscillator(),o=Ui.createGain(),a=Ui.currentTime+s;r.type=i,r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(0,a),o.gain.linearRampToValueAtTime(t,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(o).connect(Ui.destination),r.start(a),r.stop(a+e+.03)}function g1(){qs(392,.25,.025,"triangle",0),qs(523,.3,.025,"triangle",.12),qs(659,.35,.02,"triangle",.24)}function x1(){qs(130,.55,.035,"sawtooth",0),qs(110,.55,.03,"sawtooth",.48)}function y1(){qs(420,.09,.018,"sawtooth",0),qs(190,.12,.015,"triangle",.06)}function _1(n){Qm=I.clock%24/24;let e=(Qm-.25)*Math.PI*2,t=.56+.36*Math.sin(e);Ys.position.set(Math.cos(e)*16,5+Math.max(0,Math.sin(e))*15,Math.sin(e)*13),Ys.intensity=1.25+Math.max(.05,t)*2.1,hg.intensity=.8+Math.max(.05,t)*1.45;let i=new _e().setHSL(.58,.28,$n.clamp(.22+t*.38,.24,.62));un.background.copy(i),un.fog.color.copy(i)}var gg={captain:[{text:"Your Majesty, raiders crossed the eastern ford at dawn. The villages ask for the Crown\u2019s protection.",choices:[{title:"Ride out the Royal Guard",note:"\u221270 coin \xB7 +16 security \xB7 +6 favor",delta:{gold:-70,security:16,favor:6}},{title:"Fortify the villages",note:"\u221245 coin \xB7 +9 security \xB7 +5 prosperity",delta:{gold:-45,security:9,prosperity:5}}]},{text:"Sire, two barons refuse to send their levies. Shall I enforce the royal summons?",choices:[{title:"Enforce the summons",note:"+13 security \xB7 \u22128 favor",delta:{security:13,favor:-8}},{title:"Call them to court first",note:"+6 favor \xB7 \u22123 security",delta:{favor:6,security:-3}}]}],merchant:[{text:"Your Majesty, grain prices have doubled after the poor harvest. The guild asks you to open the royal granaries.",choices:[{title:"Open the granaries",note:"\u221290 coin \xB7 +14 favor \xB7 +9 prosperity",delta:{gold:-90,favor:14,prosperity:9}},{title:"Keep the royal reserve",note:"+80 coin \xB7 \u221212 favor \xB7 \u22126 prosperity",delta:{gold:80,favor:-12,prosperity:-6}}]},{text:"The southern merchants offer a rich caravan tax if the Crown guarantees the road.",choices:[{title:"Guarantee the road",note:"\u221255 coin \xB7 +10 prosperity \xB7 +5 security",delta:{gold:-55,prosperity:10,security:5}},{title:"Tax them heavily",note:"+130 coin \xB7 \u22128 prosperity",delta:{gold:130,prosperity:-8}}]}],chancellor:[{text:"Your Grace, the high nobles demand another exemption from crown tax. They say tradition is on their side.",choices:[{title:"No one stands above the Crown",note:"+140 coin \xB7 \u221211 favor",delta:{gold:140,favor:-11}},{title:"Grant a one-year exemption",note:"+9 favor \xB7 \u2212100 coin",delta:{favor:9,gold:-100}}]},{text:"A neighboring duke proposes a marriage alliance with your house. The treaty would calm the western border.",choices:[{title:"Accept the alliance",note:"+10 security \xB7 +5 prosperity",delta:{security:10,prosperity:5}},{title:"Keep the Crown independent",note:"+5 favor \xB7 \u22125 security",delta:{favor:5,security:-5}}]}],steward:[{text:"Majesty, the old stone bridge is failing. Rebuilding it would help every market town in the realm.",choices:[{title:"Rebuild it in royal stone",note:"\u2212120 coin \xB7 +15 prosperity \xB7 +5 favor",delta:{gold:-120,prosperity:15,favor:5}},{title:"Order local lords to repair it",note:"\u22124 favor \xB7 +7 prosperity",delta:{favor:-4,prosperity:7}}]},{text:"The people ask for a royal feast to mark the first week of your reign.",choices:[{title:"Feast for the whole city",note:"\u221285 coin \xB7 +13 favor \xB7 +4 prosperity",delta:{gold:-85,favor:13,prosperity:4}},{title:"Spend it on the watch instead",note:"\u221255 coin \xB7 +10 security",delta:{gold:-55,security:10}}]}]};var fc=n=>new Promise((e,t)=>p1.load(n,e,void 0,t));function pc(n,e=!1){n.traverse(t=>{t.isMesh&&(t.castShadow=e,t.receiveShadow=!0,t.material&&(t.material=t.material.clone()))})}function v1(n){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.fillStyle="rgba(13,11,13,.78)",t.beginPath(),t.roundRect(20,30,472,70,18),t.fill(),t.strokeStyle="rgba(232,205,133,.75)",t.lineWidth=3,t.stroke(),t.fillStyle="#ffe4a5",t.font="bold 31px Georgia",t.textAlign="center",t.fillText(n,256,75);let i=new zr(e);i.colorSpace=dt;let s=new Ur(new Ns({map:i,transparent:!0,depthWrite:!1}));return s.scale.set(2.6,.65,1),s.position.y=2.35,s}function M1(){let n=new Nt,e=new lt({color:5977117,roughness:.62}),t=new lt({color:14198846,roughness:.28,metalness:.72}),i=new lt({color:7609641,roughness:.78}),s=new lt({color:9404524,roughness:.88}),r=(a,l,c,h,u,d,p)=>{let x=new ge(new Ut(a,l,c),h);x.position.set(u,d,p),x.castShadow=x.receiveShadow=!0,n.add(x)};r(3,.22,2.15,s,0,.11,0),r(2.35,.22,1.55,s,0,.33,-.08),r(1.05,.23,.85,i,0,.66,-.03),r(1.15,2,.22,e,0,1.57,.33),r(1,1.55,.12,i,0,1.6,.2),r(.13,.85,.13,t,-.64,1.08,0),r(.13,.85,.13,t,.64,1.08,0),r(.32,.12,.68,t,-.64,1.38,-.03),r(.32,.12,.68,t,.64,1.38,-.03);for(let a=-2;a<=2;a++){let l=new ge(new Ti(.11,.38,5),t);l.position.set(a*.23,2.73,.33),l.castShadow=!0,n.add(l)}n.position.set(0,0,6.15),n.rotation.y=Math.PI,un.add(n);let o=new ge(new Ji(.8,1,40),new on({color:16767602,transparent:!0,opacity:.2,side:$t}));return o.rotation.x=-Math.PI/2,o.position.set(0,.02,5),un.add(o),{id:"throne",role:"Royal Throne",name:"The Crown",pos:new R(0,0,5),ring:o,isThrone:!0}}var Zl=M1();async function b1(){try{let n=await fc("./assets/royal-courtyard.glb");pc(n.scene),lc.add(n.scene)}catch(n){console.error(n)}kd++,vg()}async function S1(){Ni=new Nt,Ni.scale.setScalar(1),Ce.add(Ni);try{let n=await fc("./assets/guard.glb");li=n.scene,pc(li,!0),Ce.add(li),Yl(li,1.8),li.traverse(t=>{let i=(t.name||"").toLowerCase();if(i==="thigh-l"&&(Id=t),i==="thigh-r"&&(Ld=t),i==="shin-l"&&(Dd=t),i==="shin-r"&&(Nd=t),i==="arm-l"&&(Ud=t),i==="arm-r"&&(Od=t),i==="fore-l"&&(zd=t),i==="fore-r"&&(Fd=t),i==="torso"&&(Qr=t),i==="head"&&(Kl=t),i==="city-guard"&&(jr=t),(i==="face"||i==="hair"||i==="head.001"||i.startsWith("weapon"))&&(t.visible=!1),i&&dc.set(t.name,{q:t.quaternion.clone(),p:t.position.clone()}),t.isMesh&&t.material){t.frustumCulled=!1;let s=Array.isArray(t.material)?t.material:[t.material];for(let r of s){r.opacity=1,r.transparent=!1,r.alphaTest=0,r.depthWrite=!0,r.visible=!0;let o=(r.name||"").toLowerCase();o.includes("blue")?(r.color.set(1452632),r.metalness=.12,r.roughness=.48):o.includes("gold")?(r.color.set(14726731),r.metalness=.74,r.roughness=.24):o.includes("iron")?(r.color.set(3159875),r.metalness=.72,r.roughness=.3):o.includes("dirt")?(r.color.set(3809558),r.roughness=.74):o.includes("timber")?(r.color.set(2626829),r.roughness=.66):o.includes("skin")&&(r.color.set(12553058),r.metalness=0,r.roughness=.72)}}}),tg(),Ce.updateMatrixWorld(!0),li.updateMatrixWorld(!0),Qr&&(Qr.updateMatrixWorld(!0),Qr.attach(Ni));let e=eg();if(Kl?(e.position.set(0,Tn.crownHeadOffset,0),Kl.add(e),Kl.add(w1())):(e.position.set(0,1.76,0),Ni.add(e)),Sg(),n.animations?.length){Xn=new Fs(li);let t=n.animations.find(r=>/^idle$/i.test(r.name))||n.animations[0],i=n.animations.find(r=>/arm-swing/i.test(r.name))||t,s=n.animations.find(r=>/weapon-raise/i.test(r.name))||i;t&&(Js=Xn.clipAction(t),Js.play()),i&&(nc=Xn.clipAction(i)),s&&(eo=Xn.clipAction(s),eo.setLoop(tu,1),eo.clampWhenFinished=!0),dg.push(Xn)}}catch(n){console.error(n);let e=new ge(new cl(.28,1.08,6,12),new lt({color:1452632,metalness:.42,roughness:.4}));e.position.y=.9,e.castShadow=!0,Ce.add(e),li=e,tg();let t=eg();t.position.set(0,1.76,0),Ni.add(t)}kd++,vg()}function w1(){let n=new Nt;n.name="king-face-reference-v23",n.userData.isKingFace=!0;let e=new lt({color:12684131,roughness:.72,metalness:0}),t=new lt({color:9658439,roughness:.84,metalness:0}),i=new lt({color:15919835,roughness:.58,metalness:0}),s=new lt({color:4350580,roughness:.42,metalness:0}),r=new lt({color:526344,roughness:.7}),o=new lt({color:3481878,roughness:.9,metalness:0}),a=new lt({color:3810329,roughness:.94,metalness:0}),l=new lt({color:5909545,roughness:.84,metalness:0}),c=new ge(new si(.16,10,7),e);c.name="king-head-base",c.scale.set(.94,.8,1.02),c.position.set(0,-.002,.098),c.castShadow=!0,n.add(c);for(let y of[-.158,.158]){let v=new ge(new si(.032,8,6),t);v.scale.set(.55,.48,1),v.position.set(y,-.002,.095),n.add(v)}let h=new ge(new si(.158,10,6,0,Math.PI*2,0,Math.PI*.5),o);h.name="king-hair-cap",h.scale.set(.96,.82,.45),h.position.set(0,-.004,.205),n.add(h);for(let y of[-.07,-.023,.023,.07]){let v=new ge(new Ut(.045,.022,.036),o);v.position.set(y,-.133,.187+(Math.abs(y)<.03?.008:0)),v.rotation.z=y*.8,n.add(v)}for(let y of[-.132,.132]){let v=new ge(new Ut(.026,.02,.082),o);v.position.set(y,-.105,.146),v.rotation.y=y<0?-.07:.07,n.add(v)}let u=new ge(new Ut(.165,.03,.07),e);u.name="king-square-chin",u.position.set(0,-.118,-.02),u.castShadow=!0,n.add(u);for(let y of[-vn.eyeX,vn.eyeX]){let v=new ge(new Ut(.067,.012,.037),t);v.position.set(y,-.132,vn.eyeZ),n.add(v);let C=new ge(new si(vn.eyeRadius,12,8),i);C.scale.set(1.22,.34,.58),C.position.set(y,-.145,vn.eyeZ),n.add(C);let w=new ge(new si(.014,10,7),s);w.scale.set(.92,.24,1),w.position.set(y,-.16,vn.eyeZ),n.add(w);let A=new ge(new si(.007,8,6),r);A.scale.set(.92,.2,1),A.position.set(y,-.167,vn.eyeZ),n.add(A)}for(let y of[-vn.eyeX,vn.eyeX]){let v=new ge(new Ut(vn.browWidth,.014,.021),o);v.position.set(y,-.148,vn.browZ),v.rotation.y=y<0?-.22:.22,n.add(v)}let d=new Pt,p=[-.022,-.14,.16,.022,-.14,.16,-.031,-.145,.073,.031,-.145,.073,0,vn.noseTipY,.06,-.021,-.149,.031,.021,-.149,.031],x=[0,2,4,0,4,1,1,4,3,2,5,4,4,6,3,5,6,4,0,1,3,0,3,2];d.setAttribute("position",new rt(p,3)),d.setIndex(x),d.computeVertexNormals();let g=new ge(d,e);g.name="king-straight-nose",g.castShadow=!0,n.add(g);for(let y of[-.11,.11]){let v=new ge(new Ut(.038,.015,.128),a);v.position.set(y,-.141,.01),v.rotation.y=y<0?-.07:.07,n.add(v)}let m=new ge(new Ut(.185,.016,.06),a);m.name="king-trimmed-beard",m.position.set(0,-.145,-.052),n.add(m);for(let y of[-.024,.024]){let v=new ge(new Ut(.048,.013,.015),a);v.position.set(y,-.158,.039),v.rotation.y=y<0?-.12:.12,n.add(v)}let f=new ge(new Ut(.086,.012,.012),l);f.position.set(0,-.163,vn.mouthZ),n.add(f);let _=new ge(new Ut(.064,.009,.011),t);return _.position.set(0,-.157,vn.mouthZ-.02),n.add(_),n}function eg(){let n=new Nt;n.name="royal-crown",n.userData.isRoyalCrown=!0;let e=new lt({color:14990421,metalness:.84,roughness:.2}),t=new lt({color:10950962,metalness:.2,roughness:.26}),i=Tn.crownRadius,s=new ge(new Zi(i,i,Tn.crownBandHeight,20,1,!0),e);s.castShadow=!0,n.add(s);for(let r=0;r<8;r++){let o=r/8*Math.PI*2,a=new ge(new Ti(.024,Tn.crownSpikeHeight,5),e);a.position.set(Math.cos(o)*i*.8,Tn.crownBandHeight*.5+Tn.crownSpikeHeight*.43,Math.sin(o)*i*.8),a.castShadow=!0,n.add(a)}for(let r of[0,Math.PI/2,Math.PI,Math.PI*1.5]){let o=new ge(new Fr(.019),t);o.position.set(Math.sin(r)*i*1.01,0,Math.cos(r)*i*1.01),n.add(o)}return n}function tg(){let n=Ni||Ce,e=new lt({color:14660689,metalness:.78,roughness:.23}),t=new lt({color:7477034,roughness:.68,side:$t}),i=new lt({color:1320524,metalness:.18,roughness:.5}),s=new lt({color:11999541,metalness:.18,roughness:.25}),r=new ge(new Ut(.075,.055,.028),e);r.position.set(0,.86,.19),r.castShadow=!0,n.add(r);let o=new ge(new Ut(.07,Tn.sashHeight,.018),t);o.position.set(.045,1.18,.185),o.rotation.z=-.38,o.castShadow=!0,n.add(o);let a=new ge(new Fr(.038),e);a.position.set(0,1.3,.215),a.castShadow=!0,n.add(a);let l=new ge(new Fr(.017),s);l.position.set(0,1.3,.245),n.add(l);let c=7,h=7,u=[],d=[];for(let x=0;x<h;x++){let g=x/(h-1),m=Tn.capeTopY+(Tn.capeBottomY-Tn.capeTopY)*g,f=Tn.capeTopHalfWidth+(Tn.capeBottomHalfWidth-Tn.capeTopHalfWidth)*g;for(let _=0;_<c;_++){let y=_/(c-1),v=(y*2-1)*f,C=Math.pow(Math.abs(y-.5)*2,1.7)*.018,w=-.17-.035*g+C;u.push(v,m,w)}}for(let x=0;x<h-1;x++)for(let g=0;g<c-1;g++){let m=x*c+g,f=m+1,_=m+c,y=_+1;d.push(m,_,f,f,_,y)}let p=new Pt;p.setAttribute("position",new rt(u,3)),p.setIndex(d),p.computeVertexNormals(),fs=new ge(p,t),fs.castShadow=!0,fs.receiveShadow=!0,n.add(fs);for(let x of[-.145,.145]){let g=new ge(new si(.022,10,8),e);g.position.set(x,1.415,-.145),g.castShadow=!0,n.add(g)}}function xg(){for(let n of[jr,Qr,Id,Ld,Dd,Nd,Ud,Od,zd,Fd]){if(!n)continue;let e=dc.get(n.name);e&&(n.quaternion.copy(e.q),n.position.copy(e.p))}}function Li(n,e,t){if(!n)return;let i=dc.get(n.name);i&&n.quaternion.copy(i.q),n.quaternion.multiply(new en().setFromAxisAngle(e,t))}function Ql(n){if(!Xn||hn||n===Xs)return;let e=n==="walk"?nc:Js,t=Xs==="walk"?nc:Js;e&&(e.reset().play(),t&&t!==e&&e.crossFadeFrom(t,.18,!0)),Xs=n}var yd=null;async function E1(){return yd||(yd=fc("./assets/guard.glb")),yd}var T1=()=>Math.floor((I.clock%24+24)%24/8),mc=()=>mt.filter(n=>n.alive&&n.role==="royalguard"&&n.shift===T1());function io(){let n=document.getElementById("guardStatus");if(!n)return;let e={patrol:"PATROL",escort:"2-KING ESCORT",throne:"THRONE POSTS",gate:"MAIN GATE",routine:"ROUTINE"}[tc]||String(tc).toUpperCase(),t={drill:"DRILLING",routine:"ROUTINE",muster:"MUSTERED",gate:"DEFEND GATE",follow:"FOLLOW KING",campaign:"MARCH ON BLACKMERE"}[to]||String(to).toUpperCase();n.textContent="ROYAL GUARD "+mc().length+"/18 \xB7 "+e+"   |   ARMY "+(I.army.size||0)+" \xB7 "+t}function gc(n){tc=n,De.guardMode=n,I.guard.mode=n,I.guard.until=n==="routine"?0:I.clock+4;let e=mc();for(let t of mt.filter(i=>i.role==="royalguard"))Xo(t);n==="escort"?e.slice(0,2).forEach((t,i)=>wn(t,{type:"follow",off:[i?1:-1,-2.2],hours:4,label:"Escorting the King"})):n==="patrol"?e.forEach((t,i)=>wn(t,{type:"patrol",route:Ci.castle.map((s,r)=>[(s[0]||0)+(i%3-1)*.55,(s[1]||0)+((i+r)%2?-.45:.45)]),pause:5,hours:4,label:"Patrolling the castle"})):n==="throne"?e.forEach((t,i)=>wn(t,{type:"post",place:"plaza",spot:"guard",i,hours:4,label:"Guarding the Royal Throne"})):n==="gate"&&e.forEach((t,i)=>wn(t,{type:"post",place:"gate",spot:"guard",i,hours:4,label:"Holding the main gate"})),$e(),io(),Ie("ROYAL GUARD \u2014 "+n.toUpperCase())}function $s(n){to=n,De.armyMode=n,I.army.directive=n,I.army.until=n==="routine"?0:I.clock+4;let e=mt.filter(t=>t.alive&&["soldier","sergeant","captain"].includes(t.role));for(let t of e)Xo(t);n==="follow"?e.slice(0,12).forEach((t,i)=>wn(t,{type:"follow",off:[(i%4-1.5)*1.25,-4-Math.floor(i/4)*1.5],hours:4,label:"Marching with the King"})):n==="campaign"&&(I.army.until=I.clock+8,I.war.campaign={target:"valemar",state:"marching",started:I.clock},e.slice(0,22).forEach((t,i)=>wn(t,{type:"post",place:"bmYard",spot:"drill",i,hours:8,label:"Marching on Blackmere"}))),$e(),io(),Ie("ARMY \u2014 "+n.toUpperCase())}function A1(){An=!0,zi.classList.remove("hidden"),gs.textContent="Royal Command",xs.textContent="War Council",ui.textContent="Your Majesty, the household guard, field army, realm policy, and foreign affairs are under your authority.",gt.innerHTML="",R1(),Ed(),C1(),Td()}function Ed(){let n=document.createElement("div");n.className="command-title",n.textContent="ROYAL GUARD",gt.appendChild(n);for(let[t,i,s]of[["routine","Resume normal shifts","Cancel special orders; guards return to work/rest rotation."],["escort","Escort the King","Two guards escort you; the rest keep their normal posts."],["patrol","Patrol the castle","The active shift circulates through castle districts."],["throne","Guard the throne","The active shift takes ceremonial throne-room posts."],["gate","Hold the main gate","Deploy the active Royal Guard shift at the outer gate."]]){let r=document.createElement("button");r.innerHTML="<b>"+i+"</b><small>"+s+"</small>",r.onclick=()=>{gc(t),je()},gt.appendChild(r)}let e=document.createElement("div");e.className="command-title",e.textContent="FIELD ARMY",gt.appendChild(e);for(let[t,i,s]of[["routine","Resume garrison routine","Officers and soldiers return to ordinary duty, meals, training and rest."],["drill","Train at the barracks","Soldiers return to formation drills."],["muster","Muster in the royal court","Bring the field company before their king."],["gate","Reinforce the main gate","March the army to defend the entrance."],["follow","March with the King","A twelve-soldier royal column follows at a respectful distance."]]){let r=document.createElement("button");r.innerHTML="<b>"+i+"</b><small>"+s+"</small>",r.onclick=()=>{$s(t),je()},gt.appendChild(r)}if(I.powers.valemar.war){let t=document.createElement("button");t.innerHTML="<b>March on Blackmere</b><small>Send the field army down the Royal Road to confront House Valemar.</small>",t.onclick=()=>{$s("campaign"),je()},gt.appendChild(t)}}function R1(){let n=(I.clock%24+24)%24,e=Math.floor(n),t=Math.floor((n-e)*60),i=ql(),s=document.createElement("div");s.className="command-report",s.innerHTML="<b>COUNCIL REPORT</b><span>"+Dl()+" \xB7 Day "+an()+" \xB7 "+String(e).padStart(2,"0")+":"+String(t).padStart(2,"0")+"</span><span>Stores \xB7 Grain "+Math.round(I.stock.grain)+" \xB7 Wood "+Math.round(I.stock.wood)+" \xB7 Iron "+Math.round(I.stock.iron)+" \xB7 Arms "+Math.round(I.stock.arms)+"</span><span>Royal Guard "+mc().length+"/18 on duty \xB7 Army "+I.army.size+"</span><span>Blackmere "+i.valemar.rel+" \xB7 Kestrel "+i.kestrel.rel+" \xB7 Stonehollow "+i.guild.rel+" \xB7 Ashwood "+i.ashwood.rel+"</span>",gt.appendChild(s)}function C1(){let n=document.createElement("div");n.className="command-title",n.textContent="ROYAL POLICY",gt.appendChild(n);let e=[["Light taxes","Less revenue \xB7 +4 favor \xB7 +2 prosperity",()=>{I.realm.tax=.75,De.favor+=4,De.prosperity+=2,jt(),$e(),Lt(),je(),Ie("THE CROWN LIGHTENS TAXES")}],["Standard taxes","Restore balanced taxation",()=>{I.realm.tax=1,$e(),je(),Ie("STANDARD TAXATION RESTORED")}],["War levy","More revenue \xB7 -5 favor \xB7 +2 security",()=>{I.realm.tax=1.35,De.favor-=5,De.security+=2,jt(),$e(),Lt(),je(),Ie("A WAR LEVY IS PROCLAIMED")}],["Generous rations","Use more grain \xB7 +3 favor",()=>{I.realm.ration=1.15,De.favor+=3,jt(),$e(),Lt(),je(),Ie("GENEROUS RATIONS ORDERED")}],["Conserve grain","Use less grain \xB7 -3 favor",()=>{I.realm.ration=.8,De.favor-=3,jt(),$e(),Lt(),je(),Ie("THE GRANARY CONSERVES GRAIN")}],["Fund the farms","100 coin \xB7 stronger grain production",()=>{ms(100)&&(I.realm.farmFocus=1.2,De.prosperity+=3,jt(),$e(),Lt(),Ie("THE CROWN FUNDS FARM PRODUCTION")),je()}]];for(let[t,i,s]of e){let r=document.createElement("button");r.innerHTML="<b>"+t+"</b><small>"+i+"</small>",r.onclick=s,gt.appendChild(r)}}function Td(){let n=document.createElement("div");n.className="command-title",n.textContent="DIPLOMACY",gt.appendChild(n);let e=ql(),t=e.valemar,i=e.kestrel,s=[];I.powers.kestrel.treaties.trade||s.push(["Trade accord with House Kestrel","Relation "+i.rel+" \xB7 improves long-term stability",()=>{Vm("kestrel","trade",!0),De.prosperity+=4,$e(),Lt(),je(),Ie("TRADE ACCORD SIGNED WITH HOUSE KESTREL")}]),s.push(["Send envoy and gift to Blackmere","80 coin \xB7 improve relations with House Valemar",()=>{ms(80)&&(Zo("valemar",15,"A royal envoy carried gifts to Blackmere."),$e(),je(),Ie("ENVOY SENT TO BLACKMERE"))}]),I.powers.valemar.war?s.push(["Offer peace to House Valemar","End the current war if accepted by the Crown",()=>{md("valemar"),$e(),je(),Ie("PEACE TERMS SENT TO BLACKMERE")}]):s.push(["Declare war on House Valemar","Mobilize the Crown against Blackmere Keep",()=>{pd("valemar"),I.army.directive="muster",to="muster",$e(),je(),Ie("THE CROWN IS AT WAR WITH HOUSE VALEMAR")}]);for(let[r,o,a]of s){let l=document.createElement("button");l.innerHTML="<b>"+r+"</b><small>"+o+"</small>",l.onclick=a,gt.appendChild(l)}}function Bd(n){return String(n.role||"subject").replaceAll(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())}function P1(n){let e=n.role;return["farmer"].includes(e)?{title:"Work the fields",note:"Return to farm labor by royal order.",ord:{type:"work",place:n.work||"f1",spot:"hoe",pose:"hoe",prod:"grain",cycle:38,hours:3,label:"Working the fields by royal order"}}:e==="mbfarmer"?{title:"Work the Millbrook plots",note:"Direct three hours of farm labor.",ord:{type:"work",place:"mbfield",spot:"hoe",pose:"hoe",prod:"grain",cycle:38,hours:3,label:"Working Millbrook fields by royal order"}}:e==="woodcutter"?{title:"Cut timber for the Crown",note:"Send timber production to the royal economy.",ord:{type:"work",place:"lumber",spot:"chop",pose:"chop",prod:"wood",cycle:40,hours:3,label:"Cutting royal timber"}}:["smith","apprentice"].includes(e)?{title:"Forge arms for the garrison",note:"Increase weapons production.",ord:{type:"work",place:"smithy",spot:"anvil",pose:"hammer",prod:"arms",cycle:42,hours:3,label:"Forging arms by royal order"}}:e==="miner"?{title:"Mine iron for the Crown",note:"Increase iron production.",ord:{type:"work",place:"mine",spot:"dig",pose:"chop",prod:"ore",cycle:42,hours:3,label:"Mining iron by royal order"}}:e==="merchant"?{title:"Trade in the royal market",note:"Increase taxable trade activity.",ord:{type:"work",place:"market",spot:"stall",pose:"trade",prod:"trade",cycle:38,hours:3,label:"Trading by royal order"}}:["cook","kitchenhand"].includes(e)?{title:"Prepare a royal meal",note:"Return to the kitchens and feed the household.",ord:{type:"work",place:"kitchens",spot:"cook",pose:"cook",prod:"meals",cycle:38,hours:3,label:"Preparing royal meals"}}:["servant","maid"].includes(e)?{title:"Attend the Great Hall",note:"Serve the royal household.",ord:{type:"work",place:"greatHall",spot:"stand",pose:"carry",cycle:35,hours:2,label:"Attending the Great Hall by royal order"}}:e==="stablehand"?{title:"Tend the royal horses",note:"Return to stable duty.",ord:{type:"work",place:"stable",spot:"tend",pose:"tend",cycle:38,hours:3,label:"Tending the royal horses"}}:["treasurer","scribe"].includes(e)?{title:"Prepare a report for the Crown",note:"Work from the treasury ledgers.",ord:{type:"work",place:"treasury",spot:"desk",pose:"write",cycle:45,hours:2,label:"Preparing a royal report"}}:e==="priest"?{title:"Hold service in the chapel",note:"Return to the chapel altar.",ord:{type:"work",place:"chapel",spot:"altar",pose:"pray",cycle:48,hours:2,label:"Holding chapel service"}}:null}function Hd(n){if(An=!0,zi.classList.remove("hidden"),gs.textContent=Bd(n),xs.textContent=n.name,gt.innerHTML="",n.petitionKey){Gd(n);return}if(n.hero==="rival"){let i=I.powers.valemar;ui.textContent="Lord Maren watches you carefully. Relations: "+Math.round(i.rel)+". "+(i.war?"Your realms are at war.":"Blackmere remains an independent rival power.");let s=i.war?[["Offer peace","Attempt to end the war",()=>{md("valemar"),$e(),je()}]]:[["Demand improved relations","Royal pressure \xB7 relation may worsen",()=>{Zo("valemar",-5,"The Crown issued a hard demand to Blackmere."),$e(),je()}],["Offer a pact","Improve relations by diplomacy",()=>{Zo("valemar",10,"The King offered Blackmere a limited pact."),$e(),je()}]];for(let[r,o,a]of s){let l=document.createElement("button");l.innerHTML="<b>"+r+"</b><small>"+o+"</small>",l.onclick=a,gt.appendChild(l)}return}ui.textContent=(n.order?"Royal order active: "+(n.order.label||n.order.type)+". ":"")+"Current activity: "+ld(n)+".";let e=[["Report to the Royal Court","Come before the King for a short audience",()=>{wn(n,{type:"goto",place:"plaza",spot:"petition",dur:18,label:"Reporting to the King"}),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 REPORT TO COURT")}],["Follow the King","Follow personally for two game hours",()=>{wn(n,{type:"follow",off:[0,-2.3],hours:2,label:"Following the King"}),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 FOLLOW")}],["Wait here","Hold this place for one game hour",()=>{wn(n,{type:"post",pos:{x:Ce.position.x,z:Ce.position.z},hours:1,label:"Waiting where the King commanded"}),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 HOLD POSITION")}],["Resume normal duties","Cancel direct royal order and return to ordinary life",()=>{Xo(n),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 RESUME DUTIES")}]],t=P1(n);t&&e.splice(1,0,[t.title,t.note,()=>{wn(n,t.ord),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 "+t.title.toUpperCase())}]),["royalguard","soldier","sergeant","captain"].includes(n.role)&&e.splice(1,0,["Hold the main gate","Take a temporary defensive post",()=>{wn(n,{type:"post",place:"gate",spot:"guard",hours:3,label:"Holding the main gate by royal order"}),$e(),je(),Ie(n.name.toUpperCase()+" \u2014 GATE POST")}]);for(let[i,s,r]of e){let o=document.createElement("button");o.innerHTML="<b>"+i+"</b><small>"+s+"</small>",o.onclick=r,gt.appendChild(o)}}function I1(n,e,t,i){let s=e.clone().sub(n.root.position);s.y=0,s.length()>.08&&(s.normalize(),n.root.position.addScaledVector(s,t*i),n.root.rotation.y=Math.atan2(s.x,s.z))}async function L1(n,e){let t=await E1(),i=new Nt;i.position.fromArray(e),un.add(i);let s=wl(t.scene);pc(s,!0),s.traverse(a=>{a.isMesh&&a.material&&(a.material.color?.multiply(new _e(8011069)),a.material.roughness=.78)}),i.add(s);let r=new ge(new Ji(.42,.52,24),new on({color:16734787,transparent:!0,opacity:.34,side:$t}));r.rotation.x=-Math.PI/2,r.position.y=.02,i.add(r);let o={name:n,root:i,ring:r,hp:55,attackCooldown:Math.random()*.7,alive:!0,isRaider:!0};return fg.push(o),$o=Math.max(0,$o-1),o}async function yg(n=6){if(!ps){ps=!0,$o=n,Sd++,ds.classList.remove("hidden"),ds.textContent="RAID WAVE "+Sd+" \xB7 ENEMIES AT THE GATE",mg(),x1(),Ie("ALARM \u2014 RAIDERS AT THE MAIN GATE"),gc("gate"),$s("gate");for(let e=0;e<n;e++)setTimeout(()=>L1("Raider "+(e+1),[57+Math.floor(e/3)*1.8,0,-5+e%3*5]).catch(console.error),e*100)}}function xc(){return fg.filter(n=>n.alive)}function D1(n,e){let t=null,i=1/0;for(let s of e){if(!s.alive)continue;let r=Math.hypot(n.x-s.x,n.z-s.z);r<i&&(i=r,t=s)}return[t,i]}function N1(n){let e=null,t=1/0;for(let i of xc()){let s=Math.hypot(i.root.position.x-n.x,i.root.position.z-n.z);s<t&&(t=s,e=i)}return[e,t]}function Ad(n){n.alive=!1,n.root&&(n.root.visible=!1),n.fight=null}function ng(n){ps=!1,ds.classList.add("hidden");for(let e of mt)e.fight=null;n?(De.security+=6,De.favor+=4,I.stats.raidsHeld=(I.stats.raidsHeld||0)+1,Ie("RAID DEFEATED \u2014 THE CASTLE HOLDS")):(De.security-=15,De.gold=Math.max(0,De.gold-120),Ie("THE RAIDERS BREACHED THE DEFENSES")),jt(),$e(),Lt()}function U1(){for(let n of mt.filter(e=>["royalguard","soldier","sergeant","captain","marshal"].includes(e.role)))n.hp=n.maxhp,n.alive=!0,n.fight=null}function O1(n){if(!ps)return;let e=xc(),t=mt.filter(i=>i.alive&&i.team==="crown"&&["royalguard","soldier","sergeant","captain","marshal"].includes(i.role));if(ds.textContent="RAID WAVE "+Sd+" \xB7 "+(e.length+$o)+" ENEMIES",e.length===0){$o===0&&ng(!0);return}if(t.length===0){ng(!1);return}for(let i of e){let[s,r]=D1(i.root.position,t);if(s)if(r>1.2){let o=new R(s.x,0,s.z);I1(i,o,n,.82)}else i.attackCooldown-=n,i.attackCooldown<=0&&(i.attackCooldown=.95,s.hp-=14,s.fight={label:"Fighting raiders"},s.hp<=0&&Ad(s))}for(let i of t){let[s,r]=N1(i);if(s)if(i.cool=Math.max(0,(i.cool||0)-n),r<10)if(i.fight={label:"Defending the Crownlands"},r>1.1){let o=s.root.position.x-i.x,a=s.root.position.z-i.z,l=Math.hypot(o,a)||1,c=i.x+o/l*n*1.05,h=i.z+a/l*n*1.05;Pi(c,h,.28)||(i.x=c,i.z=h,i.yaw=Math.atan2(o,a))}else i.cool<=0&&(i.cool=.72,s.hp-=22,s.ring.material.opacity=.8,s.hp<=0&&Ad(s));else i.fight&&(i.fight=null)}}function ig(n){return n==="crown"?mt.filter(e=>e.alive&&e.team==="crown"&&["soldier","sergeant","captain","marshal"].includes(e.role)):mt.filter(e=>e.alive&&e.team==="valemar"&&["vguard","vsoldier"].includes(e.role))}function sg(n,e){let t=null,i=1/0;for(let s of e){if(!s.alive)continue;let r=Math.hypot(n.x-s.x,n.z-s.z);r<i&&(i=r,t=s)}return[t,i]}function rg(n,e,t,i=1.05){let s=e.x-n.x,r=e.z-n.z,o=Math.hypot(s,r)||1,a=n.x+s/o*t*i,l=n.z+r/o*t*i;Pi(a,l,.28,!1,!1)||(n.x=a,n.z=l,n.yaw=Math.atan2(s,r))}function z1(n){if(!I.powers.valemar.war)return;let e=ig("crown"),t=ig("valemar"),i=e.filter(r=>r.x>350),s=t.filter(r=>r.x>375);if(I.army.directive==="campaign"||i.length){ps||(ds.classList.remove("hidden"),ds.textContent="WAR FOR BLACKMERE \xB7 CROWN "+i.filter(o=>o.alive).length+" \xB7 VALEMAR "+s.filter(o=>o.alive).length);for(let o of i){let[a,l]=sg(o,s);a&&(o.cool=Math.max(0,(o.cool||0)-n),l<9&&(o.fight={label:"Fighting House Valemar"},l>1.15?rg(o,a,n,1.12):o.cool<=0&&(o.cool=.75,a.hp-=20,a.hp<=0&&(a.alive=!1,a.fight=null))))}for(let o of s){let[a,l]=sg(o,i);a&&(o.cool=Math.max(0,(o.cool||0)-n),l<9&&(o.fight={label:"Defending Blackmere"},l>1.15?rg(o,a,n,1.02):o.cool<=0&&(o.cool=.82,a.hp-=18,a.hp<=0&&(a.alive=!1,a.fight=null))))}let r=t.filter(o=>o.alive);t.length&&r.length===0?(I.war.state="victory",I.war.campaign={target:"valemar",state:"won",ended:I.clock},I.war.victories=(I.war.victories||0)+1,I.powers.valemar.war=!1,I.powers.valemar.rel=-100,I.powers.valemar.army=0,De.favor+=10,De.security+=8,I.realm.renown=Math.min(100,I.realm.renown+12),$s("routine"),jt(),$e(),Lt(),ds.classList.add("hidden"),Ie("BLACKMERE HAS FALLEN \u2014 CROWNLANDS VICTORIOUS")):e.length&&e.filter(o=>o.alive).length===0&&(I.war.state="defeat",I.war.defeats=(I.war.defeats||0)+1,De.security-=18,De.favor-=8,I.army.directive="routine",to="routine",jt(),$e(),Lt(),Ie("THE CROWN ARMY HAS BEEN DEFEATED"))}else ps||ds.classList.add("hidden")}function F1(){if(hn)return;let n=null,e=2.35;for(let i of xc()){let s=Ce.position.distanceTo(i.root.position);s<e&&(n=i,e=s)}let t=null;if(!n&&I.powers.valemar.war)for(let i of mt){if(!i.alive||i.team!=="valemar")continue;let s=Math.hypot(Ce.position.x-i.x,Ce.position.z-i.z);s<e&&(t=i,e=s)}if(!n&&!t){Ie("NO ENEMY IN SWORD RANGE");return}if(eo&&Xn){let i=Xs==="walk"?nc:Js;eo.reset().play(),i&&eo.crossFadeFrom(i,.08,!0),Xs="attack",setTimeout(()=>{Xs="",Ql(jl?"walk":"idle")},650)}y1(),n?(n.hp-=38,n.ring.material.opacity=1,n.hp<=0&&Ad(n)):(t.hp-=38,t.fight={label:"Fighting the King"},t.hp<=0&&(t.alive=!1,t.fight=null,I.stats.kills=(I.stats.kills||0)+1)),Ie("THE KING STRIKES")}async function Mt(n,e,t=1,i=0){try{let s=await fc(n);return pc(s.scene,!0),s.scene.position.set(e[0],e[1],e[2]),s.scene.scale.setScalar(t),s.scene.rotation.y=i,lc.add(s.scene),s.scene}catch(s){return console.warn("castle asset",n,s),null}}async function k1(){let n=[Mt("./assets/castle/gate.glb",[46,1.7,0],2.5,Math.PI/2),Mt("./assets/castle/tower-square.glb",[43,2.2,-7],2.4,0),Mt("./assets/castle/tower-square.glb",[43,2.2,7],2.4,0),Mt("./assets/castle/flag-wide.glb",[44,5.2,0],1.35,Math.PI/2),Mt("./assets/castle/siege-catapult.glb",[-35,.8,10],1.15,-Math.PI*.25),Mt("./assets/castle/siege-ballista.glb",[-29,.7,15],1.15,Math.PI*.18),Mt("./assets/castle/bridge-draw.glb",[236,.18,62],1.8,Math.PI/2),Mt("./assets/castle/wall-corner.glb",[-44,1.6,-32],2,0),Mt("./assets/castle/tree-large.glb",[58,.8,-18],1.7,0),Mt("./assets/castle/tree-large.glb",[70,.8,15],1.8,.5),Mt("./assets/castle/tree-small.glb",[54,.55,20],1.5,-.4),Mt("./assets/castle/tree-small.glb",[112,.55,-14],1.4,.8),Mt("./assets/castle/rocks-large.glb",[245,.25,-12],1.2,.2),Mt("./assets/castle/rocks-small.glb",[286,.2,106],1,-.3),...Pl.map((e,t)=>Mt(t%2?"./assets/town/stall-green.glb":"./assets/town/stall-red.glb",[e[0],0,e[1]],3,t%3?0:Math.PI)),Mt("./assets/town/cart.glb",[38,0,-16],3,Math.PI*.42),Mt("./assets/town/cart.glb",[106,0,2],3,-Math.PI*.35),Mt("./assets/town/lantern.glb",[44,0,-4.8],1.6,0),Mt("./assets/town/lantern.glb",[44,0,4.8],1.6,0),Mt("./assets/town/fountain-round.glb",[80,0,4.4],1.15,0),Mt("./assets/town/fountain-round.glb",[35,0,-6.5],1.2,0),Mt("./assets/town/windmill.glb",[204,0,38],4.1,Math.PI*.4),Mt("./assets/town/watermill.glb",[231,0,33],4,Math.PI/2),Mt("./assets/town/tree-high.glb",[74,0,14],2.2,0),Mt("./assets/town/tree-high.glb",[101,0,-17],2.4,.6),Mt("./assets/town/tree-crooked.glb",[117,0,10],2.1,-.4)];await Promise.all(n)}function B1(){let n=Vu(Ce.position.x,Ce.position.z);if(n!==bd){bd=n;let e=document.getElementById("zoneName");e&&(e.textContent=n),Ie("ENTERED \u2014 "+n)}}function Jl(n,e,t,i,s){let r=new Nt;r.position.set(i[0],0,i[1]),un.add(r);let o=new ge(new Ji(.55,.7,28),new on({color:14795114,transparent:!0,opacity:.15,side:$t}));o.rotation.x=-Math.PI/2,o.position.y=.025,r.add(o);let a=v1(t);a.scale.set(2.2,.52,1),a.position.y=1.7,r.add(a);let l={id:n,name:e,root:r,ring:o,openFn:s,isWorldAction:!0};return pg.push(l),l}function ms(n){return De.gold<n?(Ie("THE TREASURY CANNOT AFFORD THAT"),!1):(De.gold-=n,!0)}async function _g(n=4){let e=n*30;if(!ms(e))return;let t=mt.filter(s=>s.role==="soldier").length,i=Math.max(0,Math.min(n,32-t));for(let s=0;s<i;s++){let r=t+s,o=Bl({id:"recruit"+Date.now()+"-"+s,name:"Crown Soldier "+(r+1),role:"soldier",rank:1,home:r%2?"barracksA":"barracksB",company:r%2,look:{asset:"guard",tint:14075558}});Hl(o)}De.armySize=mt.filter(s=>s.alive&&["soldier","sergeant","captain","marshal"].includes(s.role)).length,De.security+=3,jt(),$e(),Lt(),io(),Ie(i+" SOLDIERS JOINED THE CROWN")}function H1(){An=!0,zi.classList.remove("hidden"),gs.textContent="Castle District",xs.textContent="Royal Barracks",ui.textContent="Your soldiers drill here. Recruit, train, or muster the company.",gt.innerHTML="";let n=[["Recruit four soldiers","120 coin \xB7 increases army size",()=>_g(4)],["Fund weapons and training","60 coin \xB7 +6 security",()=>{ms(60)&&(De.security+=6,jt(),$e(),Lt(),Ie("THE ARMY TRAINS WITH NEW EQUIPMENT")),je()}],["Muster the army in court","Order the field company before the throne",()=>{$s("muster"),je()}]];for(let[e,t,i]of n){let s=document.createElement("button");s.innerHTML="<b>"+e+"</b><small>"+t+"</small>",s.onclick=i,gt.appendChild(s)}}function G1(){An=!0,zi.classList.remove("hidden"),gs.textContent="Castle District",xs.textContent="Royal Market",ui.textContent="Merchants, craftsmen and townsfolk trade under the protection of your Crown.",gt.innerHTML="";let n=[["Sponsor a market fair","80 coin \xB7 +8 prosperity \xB7 +4 favor",()=>{ms(80)&&(De.prosperity+=8,De.favor+=4,jt(),$e(),Lt(),Ie("A ROYAL MARKET FAIR IS PROCLAIMED")),je()}],["Collect emergency tariffs","+100 coin \xB7 \u22126 favor \xB7 \u22123 prosperity",()=>{De.gold+=100,De.favor-=6,De.prosperity-=3,jt(),$e(),Lt(),Ie("THE CROWN COLLECTS EMERGENCY TARIFFS"),je()}]];for(let[e,t,i]of n){let s=document.createElement("button");s.innerHTML="<b>"+e+"</b><small>"+t+"</small>",s.onclick=i,gt.appendChild(s)}}function V1(){An=!0,zi.classList.remove("hidden"),gs.textContent="Castle Defense",xs.textContent="Main Gate",ui.textContent="The gate controls the road into your stronghold.",gt.innerHTML="";for(let[n,e,t]of[["Royal Guard to the gate","Deploy all six household guards here.",()=>{gc("gate"),je()}],["Army reinforce the gate","March the field company to the walls.",()=>{$s("gate"),je()}],["Increase gate watch","45 coin \xB7 +5 security",()=>{ms(45)&&(De.security+=5,jt(),$e(),Lt(),Ie("THE GATE WATCH IS DOUBLED")),je()}],["Sound a defense drill","Spawn a practice raider wave now.",()=>{je(),yg(6).catch(console.error)}]]){let i=document.createElement("button");i.innerHTML="<b>"+n+"</b><small>"+e+"</small>",i.onclick=t,gt.appendChild(i)}}function W1(){An=!0,zi.classList.remove("hidden"),gs.textContent="Royal Lands",xs.textContent="Lower Village",ui.textContent="Farmers and craftspeople live beyond the inner wall. Your choices here affect village prosperity and public favor.",gt.innerHTML="";let n=[["Repair the village well","60 coin \xB7 +6 prosperity \xB7 +5 favor",()=>{ms(60)&&(De.prosperity+=6,De.favor+=5,jt(),$e(),Lt(),Ie("THE ROYAL WELL IS REPAIRED")),je()}],["Release grain from the stores","100 coin \xB7 +10 favor \xB7 +5 prosperity",()=>{ms(100)&&(De.favor+=10,De.prosperity+=5,jt(),$e(),Lt(),Ie("ROYAL GRAIN REACHES THE VILLAGE")),je()}],["Collect market dues","+120 coin \xB7 -7 favor",()=>{De.gold+=120,De.favor-=7,jt(),$e(),Lt(),Ie("MARKET DUES COLLECTED"),je()}],["Hire two town guards","60 coin \xB7 +2 soldiers",()=>{je(),_g(2)}]];for(let[e,t,i]of n){let s=document.createElement("button");s.innerHTML="<b>"+e+"</b><small>"+t+"</small>",s.onclick=i,gt.appendChild(s)}}function X1(){Jl("barracks","Royal Barracks","BARRACKS",[-26,10],H1),Jl("market","Royal Market","MARKET",[35,-2],G1),Jl("gateCommand","Main Gate","GATE COMMAND",[43,0],V1),Jl("village","Lower Village","VILLAGE STEWARD",[88,0],W1)}function vg(){kd>=2&&!ec&&(ec=!0,rc.textContent="ENTER YOUR COURT")}ec=!0;rc.disabled=!1;rc.textContent="ENTER YOUR COURT";function Ie(n){gd.textContent=n,gd.classList.remove("hidden"),clearTimeout(Ie.t),Ie.t=setTimeout(()=>gd.classList.add("hidden"),1800)}var q1=n=>{let e=n.petitionKey||n.id,t=gg[e];return t?t[(n.petitionIndex||0)%t.length]:null};function Y1(n,e){for(let[t,i]of Object.entries(e.delta))De[t]=(De[t]||0)+i;jt(),n.used=!0,I.court.dayHeard=(I.court.dayHeard||0)+1,I.stats.petitions=(I.stats.petitions||0)+1,$e(),Lt(),je(),Ie("DECREE ISSUED \u2014 THE REALM HAS CHANGED"),jo()}function Gd(n){An=!0,zi.classList.remove("hidden"),gs.textContent=Bd(n),xs.textContent=n.name,gt.innerHTML="";let e=q1(n);if(!e){Hd(n);return}if(n.used){ui.textContent="\u201CYour Majesty, your decree stands. I have no further petition for the Crown today.\u201D",n.petitionKey==="captain"&&(Ed(),Td());return}ui.textContent="\u201C"+e.text+"\u201D";for(let t of e.choices){let i=document.createElement("button"),s=t.delta.gold<0?-t.delta.gold:0;s>De.gold&&(i.disabled=!0,i.style.opacity=".45"),i.innerHTML="<b>"+t.title+"</b><small>"+t.note+(s>De.gold?" \xB7 Not enough coin":"")+"</small>",i.onclick=()=>Y1(n,t),gt.appendChild(i)}n.petitionKey==="captain"&&(Ed(),Td())}function je(){An=!1,zi.classList.add("hidden")}f1.onclick=je;var Rd=()=>mt.filter(n=>n.petitionKey),Vd=()=>Rd().length>=4&&Rd().every(n=>n.used);function jo(){cg.innerHTML=Vd()?"Court concluded. Return to your <b>THRONE</b>, explore the realm, or issue orders.":"Rule the realm. Hear petitions, inspect your people, explore, or open <b>ORDERS</b>."}function K1(){for(let n of Rd())n.used=!1,n.petitionIndex=((n.petitionIndex||0)+1)%(gg[n.petitionKey]?.length||1);I.court.dayHeard=0}function Z1(){let n=(Math.floor(I.clock/24)+1)*24+8,e=Math.max(.1,n-I.clock);Zu(e*Yu),jt(),$e(),Lt(),jo(),Ie("DAY "+an()+" \u2014 THE REALM AWAKENS")}as("day",({day:n})=>{K1(),U1(),Lt(),jo(),$e(),n%3===0&&setTimeout(()=>yg(Math.min(10,4+n)).catch(console.error),2200)});as("hour",()=>{I.guard.mode!=="routine"&&I.guard.until&&I.clock>=I.guard.until&&gc("routine"),I.army.directive!=="routine"&&I.army.until&&I.clock>=I.army.until&&$s("routine"),io()});function og(){hn=!0,hc=uc=0,Xn&&(Xn.stopAllAction(),Xn.timeScale=0),xg();let n=new R(1,0,0),e=new R(0,0,1);if(Li(Id,n,-1.48),Li(Ld,n,-1.48),Li(Dd,n,1.52),Li(Nd,n,1.52),Li(Ud,e,.16),Li(Od,e,-.16),Li(zd,n,-.48),Li(Fd,n,-.48),Li(Qr,n,.08),jr){let t=dc.get(jr.name);t&&(jr.position.copy(t.p),jr.position.z+=.08)}Ce.position.set(0,-.34,6.03),Ce.rotation.y=Math.PI,Wn=cc=Math.PI,Vn=Ks=.1,fs&&(fs.rotation.x=-.18),Di.disabled=!1,Di.textContent="STAND",$l.textContent="Seated on the Royal Throne",cg.innerHTML=Vd()?"Court concluded. Stand when you are ready to begin the next day.":"You are holding court from the throne.",Ie("THE KING TAKES THE THRONE")}function Mg(){hn=!1,xg(),Xn&&(Xn.timeScale=1,Js&&Js.reset().play(),Xs="idle"),Ce.position.set(0,0,4.82),fs&&(fs.rotation.x=0),jo(),Ie("THE KING RISES")}function bg(){if(hn){Mg();return}if(Vd()){An=!0,zi.classList.remove("hidden"),gs.textContent="Seat of the Crown",xs.textContent="Your Throne",gt.innerHTML="",ui.textContent="The day\u2019s petitions are settled. Sit to close court, or begin the next day now.";let n=document.createElement("button");n.innerHTML="<b>Sit on the throne</b><small>Take your seat before the court.</small>",n.onclick=()=>{je(),og()},gt.appendChild(n);let e=document.createElement("button");e.innerHTML="<b>Begin the next day</b><small>Collect crown revenue and summon fresh petitions.</small>",e.onclick=()=>{je(),Z1()},gt.appendChild(e)}else og()}d1.onclick=()=>{An||A1()};lg.onclick=F1;function Sg(){let n=Oi==="first";li&&(li.visible=!n),Ni&&(Ni.visible=!n),Jo&&(Jo.textContent=n?"CAM 1ST":"CAM 3RD",Jo.classList.toggle("first-person",n),Jo.setAttribute("aria-label",n?"Switch to third-person camera":"Switch to first-person camera"))}function J1(){Oi=Oi==="third"?"first":"third";let n=Oi==="first"?Yt.first:Yt.third;Ks=$n.clamp(Ks,n.minPitch,n.maxPitch),Vn=$n.clamp(Vn,n.minPitch,n.maxPitch),Sg(),Ie(Oi==="first"?"FIRST-PERSON VIEW":"THIRD-PERSON VIEW")}Jo.onclick=J1;Di.onclick=()=>{if(!An){if(hn){Mg();return}cn&&(cn.isThrone?bg():cn.isWorldAction?cn.openFn():cn.isLiving?Hd(cn.actor):Gd(cn))}};rc.onclick=()=>{mg(),g1(),u1.classList.add("hidden"),Ie("LONG LIVE KING ALDRIC")};addEventListener("pagehide",$e);addEventListener("visibilitychange",()=>{document.hidden&&$e()});var no=kt("joystick"),wg=kt("stick"),ic=null;function Eg(n){if(n.pointerId!==ic)return;let e=no.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,s=n.clientX-t,r=n.clientY-i,o=42,a=Math.hypot(s,r)||1,l=Math.min(1,o/a);s*=l,r*=l,wg.style.transform="translate("+s+"px,"+r+"px)",hc=s/o,uc=-r/o}no.onpointerdown=n=>{ic=n.pointerId,no.setPointerCapture(n.pointerId),Eg(n)};no.onpointermove=Eg;function Tg(n){n.pointerId===ic&&(ic=null,hc=uc=0,wg.style.transform="translate(0,0)")}no.onpointerup=Tg;no.onpointercancel=Tg;var sc=null,Cd=0,Pd=0;Qt.domElement.onpointerdown=n=>{An||n.clientX<innerWidth*.38||(sc=n.pointerId,Cd=n.clientX,Pd=n.clientY,Qt.domElement.setPointerCapture(n.pointerId))};Qt.domElement.onpointermove=n=>{if(n.pointerId!==sc)return;let e=n.clientX-Cd,t=n.clientY-Pd,i=Oi==="first"?Yt.first:Yt.third;cc-=e*Yt.look.yawSensitivity,Ks=$n.clamp(Ks-t*Yt.look.pitchSensitivity,i.minPitch,i.maxPitch),Cd=n.clientX,Pd=n.clientY};Qt.domElement.onpointerup=n=>{n.pointerId===sc&&(sc=null)};Qt.domElement.onpointercancel=Qt.domElement.onpointerup;var ci=new Set;addEventListener("keydown",n=>{ci.add(n.code),n.code==="KeyE"&&cn&&!An&&(cn.isThrone?bg():cn.isWorldAction?cn.openFn():cn.isLiving?Hd(cn.actor):Gd(cn))});addEventListener("keyup",n=>ci.delete(n.code));function $1(){let n=0,e=0;return(ci.has("KeyW")||ci.has("ArrowUp"))&&e++,(ci.has("KeyS")||ci.has("ArrowDown"))&&e--,(ci.has("KeyA")||ci.has("ArrowLeft"))&&n--,(ci.has("KeyD")||ci.has("ArrowRight"))&&n++,{x:n,y:e}}function _d(n){return Pi(n.x,n.z,.38,!1,!1)}function j1(n,e){let t=Ce.position.clone().addScaledVector(n,e);if(t.x=$n.clamp(t.x,Sn.x0+1,Sn.x1-1),t.z=$n.clamp(t.z,Sn.z0+1,Sn.z1-1),!_d(t)){Ce.position.copy(t);return}let i=Ce.position.clone();i.x=t.x,_d(i)||(Ce.position.x=i.x);let s=Ce.position.clone();s.z=t.z,_d(s)||(Ce.position.z=s.z)}function Q1(n){if(An||hn){jl=!1,Ql("idle");return}let e=$1(),t=e.x||hc,i=e.y||uc,s=Math.hypot(t,i);if(s>.08){s>1&&(t/=s,i/=s);let r=new R(-Math.sin(Wn),0,-Math.cos(Wn)),o=new R(Math.cos(Wn),0,-Math.sin(Wn)),a=r.multiplyScalar(i).add(o.multiplyScalar(t));j1(a,n*3.35),Ce.rotation.y=Math.atan2(a.x,a.z),jl=!0,Ql("walk")}else jl=!1,Ql("idle")}function eS(n,e,t,i){let s=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+s*(1-Math.exp(-t*i))}function tS(n){let e=Oi==="first"?Yt.first:Yt.third;Wn=eS(Wn,cc,Yt.look.angleDamping,n),Vn=$n.damp(Vn,Ks,Yt.look.angleDamping,n),Vn=$n.clamp(Vn,e.minPitch,e.maxPitch);let t=1-Math.exp(-n*Yt.look.positionDamping);if(Oi==="first"){let a=Ce.position.clone().add(new R(0,hn?1.18:e.eyeHeight,0)),l=Math.cos(Vn),c=new R(-Math.sin(Wn)*l,-Math.sin(Vn),-Math.cos(Wn)*l);hi.position.lerp(a,t),hi.lookAt(a.clone().add(c.multiplyScalar(8)));return}let i=Ce.position.clone().add(new R(0,hn?e.seatedTargetY:e.standingTargetY,0)),s=Math.cos(Vn),r=new R(Math.sin(Wn)*s,Math.sin(Vn),Math.cos(Wn)*s),o=i.clone().addScaledVector(r,hn?e.seatedDistance:e.standingDistance);hi.position.lerp(o,t),hi.lookAt(i)}function nS(){if(lg.disabled=hn||!ps&&!I.powers.valemar.war,hn){cn=Zl,Di.disabled=!1,Di.textContent="STAND",$l.textContent="Seated on the Royal Throne";return}let n=null,e=999;if(Zs)for(let i of Zs.targets){let s=Ce.position.distanceTo(i.root.position);s<2.35&&s<e&&(n={isLiving:!0,actor:i.actor,root:i.root,ring:i.ring,name:i.actor.name,role:Bd(i.actor)},e=s)}for(let i of pg){let s=Ce.position.distanceTo(i.root.position);i.ring.material.opacity=s<2.8?.48:.15,s<2.25&&s<e&&(n=i,e=s)}let t=Ce.position.distanceTo(Zl.pos);Zl.ring.material.opacity=t<2.2?.35:.18,t<1.75&&t<e&&(n=Zl,e=t),cn=n,n?(Di.disabled=!1,Di.textContent=n.isThrone?"THRONE":n.isWorldAction?"USE":"AUDIENCE",$l.textContent=n.isThrone?"Your Royal Throne":n.isLiving?n.actor.name+" \xB7 "+ld(n.actor):n.name+(n.role?" \xB7 "+n.role:"")):(Di.disabled=!0,Di.textContent="AUDIENCE",$l.textContent="")}function Ag(){requestAnimationFrame(Ag);let n=Math.min(m1.getDelta(),.05);Md=Md*.94+1/Math.max(.001,n)*.06,dg.forEach(e=>e.update(n)),Q1(n),Gn.x=Ce.position.x,Gn.y=Ce.position.y,Gn.z=Ce.position.z,Gn.yaw=Ce.rotation.y,Gn.seated=hn,Zu(n),zm(n),Zs&&Zs.update(Ce.position,n),vd&&vd.update(Ce.position),O1(n),z1(n),_1(n),B1(),tS(n),nS(),xd+=n,xd>=5&&(xd=0,$e(),Lt(),io()),Qt.render(un,hi)}addEventListener("resize",()=>{hi.aspect=innerWidth/innerHeight,hi.updateProjectionMatrix(),Qt.setPixelRatio(Math.min(devicePixelRatio||1,1.25)),Qt.setSize(innerWidth,innerHeight)});function iS(){tc=De.guardMode||"routine",to=De.armyMode||"routine",Ce.position.set(Number.isFinite(I.king.x)?I.king.x:0,0,Number.isFinite(I.king.z)?I.king.z:9),Ce.rotation.y=Number.isFinite(I.king.yaw)?I.king.yaw:Math.PI,vd=jm(lc),X1(),jo(),io();let n=document.getElementById("zoneName");n&&(n.textContent=Vu(Ce.position.x,Ce.position.z)),setTimeout(()=>S1().catch(console.error),0),setTimeout(()=>b1().catch(console.error),120),setTimeout(()=>$m(un).then(e=>{Zs=e,Ie("THE CROWNLANDS LIVE \u2014 "+mt.length+" PEOPLE SIMULATING")}).catch(console.error),260),setTimeout(()=>k1().catch(console.error),700)}window.__crownlandsDebug={snapshot:()=>({version:"v23-reference-face",ready:ec,fps:Math.round(Md),player:{x:+Ce.position.x.toFixed(2),z:+Ce.position.z.toFixed(2),yaw:+Ce.rotation.y.toFixed(2),seated:hn,heightTarget:1.8},presentation:{fov:Yt.fov,cameraMode:Oi,viewport:[hi.aspect,+((window.visualViewport?.width||innerWidth)/(window.visualViewport?.height||innerHeight)).toFixed(3)],yaw:+Wn.toFixed(3),yawTarget:+cc.toFixed(3),pitch:+Vn.toFixed(3),pitchTarget:+Ks.toFixed(3),thirdDistance:hn?Yt.third.seatedDistance:Yt.third.standingDistance},zone:bd,time:{clock:+I.clock.toFixed(2),day:an(),year:Ku(),season:Dl()},realm:{coin:I.realm.coin,favor:I.realm.favor,security:I.realm.security,prosperity:I.realm.prosperity,stock:{...I.stock}},population:{total:mt.length,visible:Zs?.visibleCount?.()||0,renderCapacity:Zs?.capacity||0,onDutyGuards:mc().length,army:I.army.size},military:{guardMode:I.guard.mode,armyDirective:I.army.directive,raidActive:ps,raiders:xc().length},diplomacy:ql(),ledger:I.ledger.last,bootError:window.__crownlandsBootError||""})};Ag();requestAnimationFrame(()=>requestAnimationFrame(iS));
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
