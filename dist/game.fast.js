var qg=0,Qd=1,Yg=2;var Gp=1,jh=2,yi=3,ni=0,vn=1,$t=2;var qi=0,Es=1,ef=2,tf=3,nf=4,Kg=5,Ar=100,Zg=101,Jg=102,rf=103,sf=104,$g=200,jg=201,Qg=202,e0=203,oh=204,ah=205,t0=206,n0=207,i0=208,r0=209,s0=210,o0=211,a0=212,l0=213,c0=214,h0=0,u0=1,d0=2,Ua=3,f0=4,p0=5,m0=6,g0=7,Vp=0,x0=1,y0=2,Yi=0,_0=1,v0=2,M0=3,Qh=4,b0=5,S0=6,of="attached",w0="detached",Wp=300,Rs=301,Cs=302,lh=303,ch=304,vl=306,Dr=1e3,Pn=1001,To=1002,Bt=1003,Oa=1004;var _o=1005;var xn=1006,eu=1007;var Zi=1008;var Ki=1009,E0=1010,T0=1011,tu=1012,Xp=1013,Wi=1014,vi=1015,Ao=1016,qp=1017,Yp=1018,Pr=1020,A0=1021,Un=1023,R0=1024,C0=1025,Ir=1026,Ps=1027,P0=1028,Kp=1029,I0=1030,Zp=1031,Jp=1033,Sc=33776,wc=33777,Ec=33778,Tc=33779,af=35840,lf=35841,cf=35842,hf=35843,$p=36196,uf=37492,df=37496,ff=37808,pf=37809,mf=37810,gf=37811,xf=37812,yf=37813,_f=37814,vf=37815,Mf=37816,bf=37817,Sf=37818,wf=37819,Ef=37820,Tf=37821,Ac=36492,Af=36494,Rf=36495,L0=36283,Cf=36284,Pf=36285,If=36286,nu=2200,D0=2201,N0=2202,Is=2300,Nr=2301,Rc=2302,Ms=2400,bs=2401,za=2402,iu=2500,U0=2501,jp=0,Ml=1,zo=2,Qp=3e3,Lr=3001,O0=3200,z0=3201,em=0,F0=1,On="",dt="srgb",Wt="srgb-linear",ru="display-p3",bl="display-p3-linear",Fa="linear",bt="srgb",ka="rec709",Ba="p3";var es=7680;var Lf=519,k0=512,B0=513,H0=514,tm=515,G0=516,V0=517,W0=518,X0=519,hh=35044;var Df="300 es",uh=1035,Mi=2e3,Ha=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,vo=Math.PI/180,Ls=180/Math.PI;function Kn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function su(n,e){return(n%e+e)%e}function q0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Y0(n,e,t){return n!==e?(t-n)/(e-n):0}function Mo(n,e,t){return(1-t)*n+t*e}function K0(n,e,t,i){return Mo(n,e,1-Math.exp(-t*i))}function Z0(n,e=1){return e-Math.abs(su(n,e*2)-e)}function J0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function j0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Q0(n,e){return n+Math.random()*(e-n)}function ex(n){return n*(.5-Math.random())}function tx(n){n!==void 0&&(Nf=n);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nx(n){return n*vo}function ix(n){return n*Ls}function dh(n){return(n&n-1)===0&&n!==0}function rx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sx(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*x,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*x,a*c);break;case"ZYZ":n.set(l*x,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jn={DEG2RAD:vo,RAD2DEG:Ls,generateUUID:Kn,clamp:Ht,euclideanModulo:su,mapLinear:q0,inverseLerp:Y0,lerp:Mo,damp:K0,pingpong:Z0,smoothstep:J0,smootherstep:$0,randInt:j0,randFloat:Q0,randFloatSpread:ex,seededRandom:tx,degToRad:nx,radToDeg:ix,isPowerOfTwo:dh,ceilPowerOfTwo:rx,floorPowerOfTwo:Ga,setQuaternionFromProperEuler:sx,normalize:ut,denormalize:ti},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],_=r[1],y=r[4],b=r[7],R=r[2],E=r[5],A=r[8];return s[0]=o*g+a*_+l*R,s[3]=o*m+a*y+l*E,s[6]=o*f+a*b+l*A,s[1]=c*g+h*_+u*R,s[4]=c*m+h*y+u*E,s[7]=c*f+h*b+u*A,s[2]=d*g+p*_+x*R,s[5]=d*m+p*y+x*E,s[8]=d*f+p*b+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,x=t*u+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new Je;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ox(){let n=Ro("canvas");return n.style.display="block",n}var Uf={};function bo(n){n in Uf||(Uf[n]=!0,console.warn(n))}var Of=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zf=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Wt]:{transfer:Fa,primaries:ka,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:bt,primaries:ka,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bl]:{transfer:Fa,primaries:Ba,toReference:n=>n.applyMatrix3(zf),fromReference:n=>n.applyMatrix3(Of)},[ru]:{transfer:bt,primaries:Ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zf),fromReference:n=>n.applyMatrix3(Of).convertLinearToSRGB()}},ax=new Set([Wt,bl]),at={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ax.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ia[e].toReference,r=ia[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ia[n].primaries},getTransfer:function(n){return n===On?Fa:ia[n].transfer}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ts,Va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Ro("canvas")),ts.width=e.width,ts.height=e.height;let i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ro("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lx=0,Wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ic(r[o].image)):s.push(Ic(r[o]))}else s=Ic(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ic(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Va.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cx=0,en=class n extends bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pn,r=Pn,s=xn,o=Zi,a=Un,l=Ki,c=n.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Kn(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Lr?dt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Lr:Qp}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?dt:On}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Wp;en.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(p+1)/2,R=(f+1)/2,E=(h+d)/4,A=(u+g)/4,D=(x+m)/4;return y>b&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=A/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=D/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fh=class extends bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Lr?dt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends fh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xa=class extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ph=class extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==x){let m=1-a,f=l*d+c*p+h*x+u*g,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,f*_);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}let b=a*_;if(l=l*m+d*b,c=c*m+p*b,h=h*m+x*b,u=u*m+g*b,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+h*u+l*p-c*d,e[t+1]=l*x+h*d+c*u-a*p,e[t+2]=c*x+h*p+a*d-l*u,e[t+3]=h*x-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new C,Ff=new Qt,yn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),sa.subVectors(this.max,lo),ns.subVectors(e.a,lo),is.subVectors(e.b,lo),rs.subVectors(e.c,lo),ki.subVectors(is,ns),Bi.subVectors(rs,is),br.subVectors(ns,rs);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-br.z,br.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,br.z,0,-br.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-br.y,br.x,0];return!Dc(t,ns,is,rs,sa)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,ns,is,rs,sa))?!1:(oa.crossVectors(ki,Bi),t=[oa.x,oa.y,oa.z],Dc(t,ns,is,rs,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new C,new C,new C,new C,new C,new C,new C,new C],Xn=new C,ra=new yn,ns=new C,is=new C,rs=new C,ki=new C,Bi=new C,br=new C,lo=new C,sa=new C,oa=new C,Sr=new C;function Dc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Sr.fromArray(n,s);let a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hx=new yn,co=new C,Nc=new C,In=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):hx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Nc)),this.expandByPoint(co.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new C,Uc=new C,aa=new C,Hi=new C,Oc=new C,la=new C,zc=new C,Ds=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uc.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Uc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=Hi.dot(this.direction),l=-Hi.dot(aa),c=Hi.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*l-a,d=o*a-l,x=s*h,u>=0)if(d>=-x)if(d<=x){let g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uc).addScaledVector(aa,d),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,r,s){Oc.subVectors(t,e),la.subVectors(i,e),zc.crossVectors(Oc,la);let o=this.direction.dot(zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(la.crossVectors(Hi,la));if(l<0)return null;let c=a*this.direction.dot(Oc.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(zc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class n{constructor(e,t,i,r,s,o,a,l,c,h,u,d,p,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,p,x,g,m)}set(e,t,i,r,s,o,a,l,c,h,u,d,p,x,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,p=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,x=c*h,g=c*u;t[0]=d+g*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,x=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,x=a*h,g=a*u;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+x,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,p=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,dx)}lookAt(e,t,i){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(i,Rn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(i,Rn)),Gi.normalize(),ca.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=ca.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=ca.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=ca.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],_=i[3],y=i[7],b=i[11],R=i[15],E=r[0],A=r[4],D=r[8],v=r[12],w=r[1],U=r[5],G=r[9],Z=r[13],L=r[2],O=r[6],W=r[10],Y=r[14],q=r[3],X=r[7],j=r[11],te=r[15];return s[0]=o*E+a*w+l*L+c*q,s[4]=o*A+a*U+l*O+c*X,s[8]=o*D+a*G+l*W+c*j,s[12]=o*v+a*Z+l*Y+c*te,s[1]=h*E+u*w+d*L+p*q,s[5]=h*A+u*U+d*O+p*X,s[9]=h*D+u*G+d*W+p*j,s[13]=h*v+u*Z+d*Y+p*te,s[2]=x*E+g*w+m*L+f*q,s[6]=x*A+g*U+m*O+f*X,s[10]=x*D+g*G+m*W+f*j,s[14]=x*v+g*Z+m*Y+f*te,s[3]=_*E+y*w+b*L+R*q,s[7]=_*A+y*U+b*O+R*X,s[11]=_*D+y*G+b*W+R*j,s[15]=_*v+y*Z+b*Y+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*p-i*l*p)+g*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,y=x*d*c-h*m*c-x*l*p+o*m*p+h*l*f-o*d*f,b=h*g*c-x*u*c+x*a*p-o*g*p-h*a*f+o*u*f,R=x*u*l-h*g*l-x*a*d+o*g*d+h*a*m-o*u*m,E=t*_+i*y+r*b+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=_*A,e[1]=(g*d*s-u*m*s-g*r*p+i*m*p+u*r*f-i*d*f)*A,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=y*A,e[5]=(h*m*s-x*d*s+x*r*p-t*m*p-h*r*f+t*d*f)*A,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*A,e[8]=b*A,e[9]=(x*u*s-h*g*s-x*i*p+t*g*p+h*i*f-t*u*f)*A,e[10]=(o*g*s-x*a*s+x*i*c-t*g*c-o*i*f+t*a*f)*A,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(h*g*r-x*u*r+x*i*d-t*g*d-h*i*m+t*u*m)*A,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*m-t*a*m)*A,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,x=s*u,g=o*h,m=o*u,f=a*u,_=l*c,y=l*h,b=l*u,R=i.x,E=i.y,A=i.z;return r[0]=(1-(g+f))*R,r[1]=(p+b)*R,r[2]=(x-y)*R,r[3]=0,r[4]=(p-b)*E,r[5]=(1-(d+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(x+y)*A,r[9]=(m-_)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);let c=1/s,h=1/o,u=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Mi){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),p,x;if(a===Mi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ha)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mi){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,p=(i+r)*h,x,g;if(a===Mi)x=(o+s)*u,g=-2*u;else if(a===Ha)x=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ss=new C,qn=new ke,ux=new C(0,0,0),dx=new C(1,1,1),Gi=new C,ca=new C,Rn=new C,kf=new ke,Bf=new Qt,qa=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qa.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fx=0,Hf=new C,os=new Qt,pi=new ke,ha=new C,ho=new C,px=new C,mx=new Qt,Gf=new C(1,0,0),Vf=new C(0,1,0),Wf=new C(0,0,1),gx={type:"added"},xx={type:"removed"},vt=class n extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new qa,i=new Qt,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Je}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Wf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ha.copy(e):ha.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ho,ha,this.up):pi.lookAt(ha,ho,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(pi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};vt.DEFAULT_UP=new C(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new C,mi=new C,Fc=new C,gi=new C,as=new C,ls=new C,Xf=new C,kc=new C,Bc=new C,Hc=new C,ua=!1,Cr=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),mi.subVectors(i,t),Fc.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(mi),l=Yn.dot(Fc),c=mi.dot(mi),h=mi.dot(Fc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,x=(o*h-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,i,r,s,o,a,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),mi.subVectors(e,t),Yn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Yn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;as.subVectors(r,i),ls.subVectors(s,i),kc.subVectors(e,i);let l=as.dot(kc),c=ls.dot(kc);if(l<=0&&c<=0)return t.copy(i);Bc.subVectors(e,r);let h=as.dot(Bc),u=ls.dot(Bc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(as,o);Hc.subVectors(e,s);let p=as.dot(Hc),x=ls.dot(Hc);if(x>=0&&p<=x)return t.copy(s);let g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ls,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Xf.subVectors(s,r),a=(u-h)/(u-h+(p-x)),t.copy(r).addScaledVector(Xf,a);let f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Gc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=su(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=im[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return at.fromWorkingColorSpace(sn.copy(this),e),Math.round(Ht(sn.r*255,0,255))*65536+Math.round(Ht(sn.g*255,0,255))*256+Math.round(Ht(sn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=dt){at.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,r=sn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(da);let i=Mo(Vi.h,da.h,t),r=Mo(Vi.s,da.s,t),s=Mo(Vi.l,da.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ye;ye.NAMES=im;var yx=0,Mn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Es,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new C,fa=new re,Vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}};var Ka=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Za=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var _x=0,Nn=new ke,Vc=new vt,cs=new C,Cn=new yn,uo=new yn,Jt=new C,Pt=class n extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?Za:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Cn.min,uo.min),Cn.expandByPoint(Jt),Jt.addVectors(Cn.max,uo.max),Cn.expandByPoint(Jt)):(Cn.expandByPoint(uo.min),Cn.expandByPoint(uo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Jt.add(cs)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new C,h[w]=new C;let u=new C,d=new C,p=new C,x=new re,g=new re,m=new re,f=new C,_=new C;function y(w,U,G){u.fromArray(r,w*3),d.fromArray(r,U*3),p.fromArray(r,G*3),x.fromArray(o,w*2),g.fromArray(o,U*2),m.fromArray(o,G*2),d.sub(u),p.sub(u),g.sub(x),m.sub(x);let Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Z),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(Z),c[w].add(f),c[U].add(f),c[G].add(f),h[w].add(_),h[U].add(_),h[G].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,U=b.length;w<U;++w){let G=b[w],Z=G.start,L=G.count;for(let O=Z,W=Z+L;O<W;O+=3)y(i[O+0],i[O+1],i[O+2])}let R=new C,E=new C,A=new C,D=new C;function v(w){A.fromArray(s,w*3),D.copy(A);let U=c[w];R.copy(U),R.sub(A.multiplyScalar(A.dot(U))).normalize(),E.crossVectors(D,U);let Z=E.dot(h[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=Z}for(let w=0,U=b.length;w<U;++w){let G=b[w],Z=G.start,L=G.count;for(let O=Z,W=Z+L;O<W;O+=3)v(i[O+0]),v(i[O+1]),v(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[x++]=c[p++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qf=new ke,wr=new Ds,pa=new In,Yf=new C,hs=new C,us=new C,ds=new C,Wc=new C,ma=new C,ga=new re,xa=new re,ya=new re,Kf=new C,Zf=new C,Jf=new C,_a=new C,va=new C,ve=class extends vt{constructor(e=new Pt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Wc.fromBufferAttribute(u,e),o?ma.addScaledVector(Wc,h):ma.addScaledVector(Wc.sub(t),h))}t.add(ma)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(pa.containsPoint(wr.origin)===!1&&(wr.intersectSphere(pa,Yf)===null||wr.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(s).invert(),wr.copy(e.ray).applyMatrix4(qf),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,R=y;b<R;b+=3){let E=a.getX(b),A=a.getX(b+1),D=a.getX(b+2);r=Ma(this,f,e,i,c,h,u,E,A,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let _=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=Ma(this,o,e,i,c,h,u,_,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){let m=d[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,R=y;b<R;b+=3){let E=b,A=b+1,D=b+2;r=Ma(this,f,e,i,c,h,u,E,A,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let _=m,y=m+1,b=m+2;r=Ma(this,o,e,i,c,h,u,_,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function vx(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ni,a),l===null)return null;va.copy(a),va.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:n}}function Ma(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,hs),n.getVertexPosition(l,us),n.getVertexPosition(c,ds);let h=vx(n,e,t,i,hs,us,ds,_a);if(h){r&&(ga.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,c),h.uv=Cr.getInterpolation(_a,hs,us,ds,ga,xa,ya,new re)),s&&(ga.fromBufferAttribute(s,a),xa.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),h.uv1=Cr.getInterpolation(_a,hs,us,ds,ga,xa,ya,new re),h.uv2=h.uv1),o&&(Kf.fromBufferAttribute(o,a),Zf.fromBufferAttribute(o,l),Jf.fromBufferAttribute(o,c),h.normal=Cr.getInterpolation(_a,hs,us,ds,Kf,Zf,Jf,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Cr.getNormal(hs,us,ds,u.normal),h.face=u}return h}var It=class n extends Pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function x(g,m,f,_,y,b,R,E,A,D,v){let w=b/A,U=R/D,G=b/2,Z=R/2,L=E/2,O=A+1,W=D+1,Y=0,q=0,X=new C;for(let j=0;j<W;j++){let te=j*U-Z;for(let de=0;de<O;de++){let V=de*w-G;X[g]=V*_,X[m]=te*y,X[f]=L,c.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[f]=E>0?1:-1,h.push(X.x,X.y,X.z),u.push(de/A),u.push(1-j/D),Y+=1}}for(let j=0;j<D;j++)for(let te=0;te<A;te++){let de=d+te+O*j,V=d+te+O*(j+1),K=d+(te+1)+O*(j+1),ce=d+(te+1)+O*j;l.push(de,V,ce),l.push(V,K,ce),q+=6}a.addGroup(p,q,v),p+=q,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=Ns(n[t]);for(let r in i)e[r]=i[r]}return e}function Mx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rm(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}var bx={clone:Ns,merge:gn},Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ja=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends Ja{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fs=-90,ps=1,mh=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(fs,ps,e,t);r.layers=this.layers,this.add(r);let s=new Gt(fs,ps,e,t);s.layers=this.layers,this.add(s);let o=new Gt(fs,ps,e,t);o.layers=this.layers,this.add(o);let a=new Gt(fs,ps,e,t);a.layers=this.layers,this.add(a);let l=new Gt(fs,ps,e,t);l.layers=this.layers,this.add(l);let c=new Gt(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},$a=class extends en{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gh=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?dt:On),this.texture=new $a(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new It(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:qi});s.uniforms.tEquirect.value=t;let o=new ve(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=xn),new mh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Xc=new C,Ex=new C,Tx=new Je,_i=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Xc.subVectors(i,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tx.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Er=new In,ba=new C,Co=class{constructor(e=new _i,t=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],_=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,m-p,b-f).normalize(),i[1].setComponents(l+s,d+c,m+p,b+f).normalize(),i[2].setComponents(l+o,d+h,m+x,b+_).normalize(),i[3].setComponents(l-o,d-h,m-x,b-_).normalize(),i[4].setComponents(l-a,d-u,m-g,b-y).normalize(),t===Mi)i[5].setComponents(l+a,d+u,m+g,b+y).normalize();else if(t===Ha)i[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ax(n,e){let t=e.isWebGL2,i=new WeakMap;function r(c,h){let u=c.array,d=c.usage,p=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){let d=h.array,p=h._updateRange,x=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&x.length===0&&n.bufferSubData(u,0,d),x.length!==0){for(let g=0,m=x.length;g<m;g++){let f=x[g];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var xh=class n extends Pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<h;f++){let _=f*d-o;for(let y=0;y<c;y++){let b=y*u-s;x.push(b,-_,0),g.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){let y=_+c*f,b=_+c*(f+1),R=_+1+c*(f+1),E=_+1+c*f;p.push(y,b,E),p.push(b,R,E)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
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
#endif`,Px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
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
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
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
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$x=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qx=`vec3 transformedNormal = objectNormal;
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
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`
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
}`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
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
}`,gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vy=`uniform bool receiveShadow;
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
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ty=`PhysicalMaterial material;
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
#endif`,Ay=`struct PhysicalMaterial {
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
}`,Ry=`
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ny=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fy=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
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
#endif`,Vy=`#ifdef USE_MORPHTARGETS
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
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d_=`float getShadowMask() {
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
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,U_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#define LAMBERT
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define MATCAP
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define TOON
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
}`,ev=`#define TOON
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
}`,tv=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,ov=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Rx,alphahash_pars_fragment:Cx,alphamap_fragment:Px,alphamap_pars_fragment:Ix,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Nx,aomap_pars_fragment:Ux,batching_pars_vertex:Ox,batching_vertex:zx,begin_vertex:Fx,beginnormal_vertex:kx,bsdfs:Bx,iridescence_fragment:Hx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:qx,color_fragment:Yx,color_pars_fragment:Kx,color_pars_vertex:Zx,color_vertex:Jx,common:$x,cube_uv_reflection_fragment:jx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,colorspace_fragment:ry,colorspace_pars_fragment:sy,envmap_fragment:oy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ly,envmap_pars_vertex:cy,envmap_physical_pars_fragment:My,envmap_vertex:hy,fog_vertex:uy,fog_pars_vertex:dy,fog_fragment:fy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_fragment:gy,lightmap_pars_fragment:xy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:_y,lights_pars_begin:vy,lights_toon_fragment:by,lights_toon_pars_fragment:Sy,lights_phong_fragment:wy,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ty,lights_physical_pars_fragment:Ay,lights_fragment_begin:Ry,lights_fragment_maps:Cy,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Ny,map_fragment:Uy,map_pars_fragment:Oy,map_particle_fragment:zy,map_particle_pars_fragment:Fy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:By,morphcolor_vertex:Hy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Vy,morphtarget_vertex:Wy,normal_fragment_begin:Xy,normal_fragment_maps:qy,normal_pars_fragment:Yy,normal_pars_vertex:Ky,normal_vertex:Zy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Qy,iridescence_pars_fragment:e_,opaque_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:r_,dithering_fragment:s_,dithering_pars_fragment:o_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:h_,shadowmap_vertex:u_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:x_,specularmap_pars_fragment:y_,tonemapping_fragment:__,tonemapping_pars_fragment:v_,transmission_fragment:M_,transmission_pars_fragment:b_,uv_pars_fragment:S_,uv_pars_vertex:w_,uv_vertex:E_,worldpos_vertex:T_,background_vert:A_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:P_,cube_vert:I_,cube_frag:L_,depth_vert:D_,depth_frag:N_,distanceRGBA_vert:U_,distanceRGBA_frag:O_,equirect_vert:z_,equirect_frag:F_,linedashed_vert:k_,linedashed_frag:B_,meshbasic_vert:H_,meshbasic_frag:G_,meshlambert_vert:V_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:K_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:$_,meshphysical_frag:j_,meshtoon_vert:Q_,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},ie={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ei={basic:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:gn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:gn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:gn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:gn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:gn([ie.points,ie.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:gn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:gn([ie.common,ie.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:gn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:gn([ie.sprite,ie.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:gn([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:gn([ie.lights,ie.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ei.physical={uniforms:gn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Sa={r:0,b:0,g:0};function av(n,e,t,i,r,s,o){let a=new ye(0),l=s===!0?0:1,c,h,u=null,d=0,p=null;function x(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),_=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===vl)?(h===void 0&&(h=new ve(new It(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ns(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=at.getTransfer(y.colorSpace)!==bt,(u!==y||d!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ve(new xh(2,2),new wi({name:"BackgroundMaterial",uniforms:Ns(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Sa,rm(n)),i.buffers.color.setClear(Sa.r,Sa.g,Sa.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function lv(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null),c=l,h=!1;function u(L,O,W,Y,q){let X=!1;if(o){let j=g(Y,W,O);c!==j&&(c=j,p(c.object)),X=f(L,Y,W,q),X&&_(L,Y,W,q)}else{let j=O.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==j)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=j,X=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(L,O,W,Y),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,O,W){let Y=W.wireframe===!0,q=a[L.id];q===void 0&&(q={},a[L.id]=q);let X=q[O.id];X===void 0&&(X={},q[O.id]=X);let j=X[Y];return j===void 0&&(j=m(d()),X[Y]=j),j}function m(L){let O=[],W=[],Y=[];for(let q=0;q<r;q++)O[q]=0,W[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,O,W,Y){let q=c.attributes,X=O.attributes,j=0,te=W.getAttributes();for(let de in te)if(te[de].location>=0){let K=q[de],ce=X[de];if(ce===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==Y}function _(L,O,W,Y){let q={},X=O.attributes,j=0,te=W.getAttributes();for(let de in te)if(te[de].location>=0){let K=X[de];K===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),q[de]=ce,j++}c.attributes=q,c.attributesNum=j,c.index=Y}function y(){let L=c.newAttributes;for(let O=0,W=L.length;O<W;O++)L[O]=0}function b(L){R(L,0)}function R(L,O){let W=c.newAttributes,Y=c.enabledAttributes,q=c.attributeDivisors;W[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),q[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),q[L]=O)}function E(){let L=c.newAttributes,O=c.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==L[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function A(L,O,W,Y,q,X,j){j===!0?n.vertexAttribIPointer(L,O,W,q,X):n.vertexAttribPointer(L,O,W,Y,q,X)}function D(L,O,W,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let q=Y.attributes,X=W.getAttributes(),j=O.defaultAttributeValues;for(let te in X){let de=X[te];if(de.location>=0){let V=q[te];if(V===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let K=V.normalized,ce=V.itemSize,Me=t.get(V);if(Me===void 0)continue;let _e=Me.buffer,ze=Me.type,Be=Me.bytesPerElement,Ae=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||V.gpuType===Xp);if(V.isInterleavedBufferAttribute){let rt=V.data,z=rt.stride,dn=V.offset;if(rt.isInstancedInterleavedBuffer){for(let Se=0;Se<de.locationSize;Se++)R(de.location+Se,rt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Se=0;Se<de.locationSize;Se++)b(de.location+Se);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Se=0;Se<de.locationSize;Se++)A(de.location+Se,ce/de.locationSize,ze,K,z*Be,(dn+ce/de.locationSize*Se)*Be,Ae)}else{if(V.isInstancedBufferAttribute){for(let rt=0;rt<de.locationSize;rt++)R(de.location+rt,V.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let rt=0;rt<de.locationSize;rt++)b(de.location+rt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let rt=0;rt<de.locationSize;rt++)A(de.location+rt,ce/de.locationSize,ze,K,ce*Be,ce/de.locationSize*rt*Be,Ae)}}else if(j!==void 0){let K=j[te];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(de.location,K);break;case 3:n.vertexAttrib3fv(de.location,K);break;case 4:n.vertexAttrib4fv(de.location,K);break;default:n.vertexAttrib1fv(de.location,K)}}}}E()}function v(){G();for(let L in a){let O=a[L];for(let W in O){let Y=O[W];for(let q in Y)x(Y[q].object),delete Y[q];delete O[W]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let W in O){let Y=O[W];for(let q in Y)x(Y[q].object),delete Y[q];delete O[W]}delete a[L.id]}function U(L){for(let O in a){let W=a[O];if(W[L.id]===void 0)continue;let Y=W[L.id];for(let q in Y)x(Y[q].object),delete Y[q];delete W[L.id]}}function G(){Z(),h=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function cv(n,e,t,i){let r=i.isWebGL2,s;function o(h){s=h}function a(h,u){n.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=o||e.has("OES_texture_float"),R=y&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function uv(n){let e=this,t=null,i=0,r=!1,s=!1,o=new _i,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||x===null||x.length===0||s&&!m)s?h(null):c();else{let _=s?0:i,y=_*4,b=f.clippingState||null;l.value=b,b=h(x,d,y,p);for(let R=0;R!==y;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,x){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let f=p+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==g;++y,b+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function dv(n){let e=new WeakMap;function t(o,a){return a===lh?o.mapping=Rs:a===ch&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===lh||a===ch)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Us=class extends Ja{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ss=4,$f=[.125,.215,.35,.446,.526,.582],Rr=20,qc=new Us,jf=new ye,Yc=null,Kc=0,Zc=0,Tr=(1+Math.sqrt(5))/2,ms=1/Tr,Qf=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Tr,ms),new C(0,Tr,-ms),new C(ms,0,Tr),new C(-ms,0,Tr),new C(Tr,ms,0),new C(-Tr,ms,0)],ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,Kc,Zc),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ao,format:Un,colorSpace:Wt,depthBuffer:!1},r=ep(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(s)),this._blurMaterial=pv(s,e,t)}return r}_compileMaterial(e){let t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,qc)}_sceneToCubeUV(e,t,i,r){let a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jf),h.toneMapping=Yi,h.autoClear=!1;let p=new on({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new ve(new It,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(jf),g=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;wa(r,_*y,f>2?y:0,y,y),h.setRenderTarget(r),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Rs||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qf[(r-1)%Qf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);let f=[],_=0;for(let A=0;A<Rr;++A){let D=A/g,v=Math.exp(-D*D/2);f.push(v),A===0?_+=v:A<m&&(_+=2*v)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-i;let b=this._sizeLods[r],R=3*b*(r>y-Ss?r-y+Ss:0),E=4*(this._cubeSize-b);wa(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(u,qc)}};function fv(n){let e=[],t=[],i=[],r=n,s=n-Ss+1+$f.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ss?l=$f[o-n+Ss-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),y=new Float32Array(m*x*p),b=new Float32Array(f*x*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,D=E>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(v,g*x*E),y.set(d,m*x*E);let w=[E,E,E,E,E,E];b.set(w,f*x*E)}let R=new Pt;R.setAttribute("position",new Vt(_,g)),R.setAttribute("uv",new Vt(y,m)),R.setAttribute("faceIndex",new Vt(b,f)),e.push(R),r>Ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ep(n,e,t){let i=new Si(n,e,t);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pv(n,e,t){let i=new Float32Array(Rr),r=new C(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function tp(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function np(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function mv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===lh||l===ch,h=l===Rs||l===Cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ja(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new ja(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xv(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let g=d.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let x in d)e.update(d[x],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,x=u.attributes.position,g=0;if(p!==null){let _=p.array;g=p.version;for(let y=0,b=_.length;y<b;y+=3){let R=_[y+0],E=_[y+1],A=_[y+2];d.push(R,E,E,A,A,R)}}else if(x!==void 0){let _=x.array;g=x.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;let m=new(nm(d)?Za:Ka)(d,1);m.version=g;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yv(n,e,t,i){let r=i.isWebGL2,s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function u(p,x,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,g),t.update(x,s,g)}function d(p,x,g){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,g);let f=0;for(let _=0;_<g;_++)f+=x[_];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function _v(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vv(n,e){return n[0]-e[0]}function Mv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bv(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,g=s.get(h);if(g===void 0||g.count!==x){let L=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;_===!0&&(D=1),y===!0&&(D=2),b===!0&&(D=3);let v=h.attributes.position.count*D,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let U=new Float32Array(v*w*4*x),G=new Xa(U,v,w,x);G.type=vi,G.needsUpdate=!0;let Z=D*4;for(let O=0;O<x;O++){let W=R[O],Y=E[O],q=A[O],X=v*w*4*O;for(let j=0;j<W.count;j++){let te=j*Z;_===!0&&(o.fromBufferAttribute(W,j),U[X+te+0]=o.x,U[X+te+1]=o.y,U[X+te+2]=o.z,U[X+te+3]=0),y===!0&&(o.fromBufferAttribute(Y,j),U[X+te+4]=o.x,U[X+te+5]=o.y,U[X+te+6]=o.z,U[X+te+7]=0),b===!0&&(o.fromBufferAttribute(q,j),U[X+te+8]=o.x,U[X+te+9]=o.y,U[X+te+10]=o.z,U[X+te+11]=q.itemSize===4?o.w:1)}}g={count:x,texture:G,size:new re(v,w)},s.set(h,g),h.addEventListener("dispose",L)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,x=i[h.id];if(x===void 0||x.length!==p){x=[];for(let y=0;y<p;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<p;y++){let b=x[y];b[0]=y,b[1]=d[y]}x.sort(Mv);for(let y=0;y<8;y++)y<p&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(vv);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let b=a[y],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+y)!==g[R]&&h.setAttribute("morphTarget"+y,g[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),r[y]=E,f+=E):(g&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}let _=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Sv(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Qa=class extends en{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Ir,h!==Ir&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ir&&(i=Wi),i===void 0&&h===Ps&&(i=Pr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},om=new en,am=new Qa(1,1);am.compareFunction=tm;var lm=new Xa,cm=new ph,hm=new $a,ip=[],rp=[],sp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function Ws(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ip[r];if(s===void 0&&(s=new Float32Array(r),ip[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sl(n,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Rv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),qt(t,i)}}function Cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;op.set(i),n.uniformMatrix3fv(this.addr,!1,op),qt(t,i)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),qt(t,i)}}function Iv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Uv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function kv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?am:om;t.setTexture2D(e||s,r)}function Bv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cm,r)}function Hv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hm,r)}function Gv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lm,r)}function Vv(n){switch(n){case 5126:return wv;case 35664:return Ev;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Pv;case 5124:case 35670:return Iv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Ov;case 36295:return zv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Wv(n,e){n.uniform1fv(this.addr,e)}function Xv(n,e){let t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function qv(n,e){let t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function Yv(n,e){let t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Kv(n,e){let t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zv(n,e){let t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jv(n,e){let t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function jv(n,e){n.uniform2iv(this.addr,e)}function Qv(n,e){n.uniform3iv(this.addr,e)}function eM(n,e){n.uniform4iv(this.addr,e)}function tM(n,e){n.uniform1uiv(this.addr,e)}function nM(n,e){n.uniform2uiv(this.addr,e)}function iM(n,e){n.uniform3uiv(this.addr,e)}function rM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){let i=this.cache,r=e.length,s=Sl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||om,s[o])}function oM(n,e,t){let i=this.cache,r=e.length,s=Sl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cm,s[o])}function aM(n,e,t){let i=this.cache,r=e.length,s=Sl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hm,s[o])}function lM(n,e,t){let i=this.cache,r=e.length,s=Sl(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lm,s[o])}function cM(n){switch(n){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vv(t.type)}},_h=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cM(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function lp(n,e){n.seq.push(e),n.map[e.id]=e}function hM(n,e,t){let i=n.name,r=i.length;for(Jc.lastIndex=0;;){let s=Jc.exec(i),o=Jc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lp(t,c===void 0?new yh(a,n,e):new _h(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new vh(a),lp(t,u)),t=u}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hM(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var uM=37297,dM=0;function fM(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pM(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===Ba&&t===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&t===Ba&&(i="LinearSRGBToLinearDisplayP3"),n){case Wt:case bl:return[i,"LinearTransferOETF"];case dt:case ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fM(n.getShaderSource(e),o)}else return r}function mM(n,e){let t=pM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gM(n,e){let t;switch(e){case _0:t="Linear";break;case v0:t="Reinhard";break;case M0:t="OptimizedCineon";break;case Qh:t="ACESFilmic";break;case S0:t="AgX";break;case b0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function yM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ws).join(`
`)}function _M(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ws(n){return n!==""}function up(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(MM,SM)}var bM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SM(n,e){let t=Ge[e];if(t===void 0){let i=bM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}var wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(wM,EM)}function EM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function AM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vp:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case y0:e="ENVMAP_BLENDING_ADD";break}return e}function PM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=TM(t),c=AM(t),h=RM(t),u=CM(t),d=PM(t),p=t.isWebGL2?"":xM(t),x=yM(t),g=_M(s),m=r.createProgram(),f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),_.length>0&&(_+=`
`)):(f=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),_=[p,pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Yi?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=Mh(o),o=up(o,t),o=dp(o,t),a=Mh(a),a=up(a,t),a=dp(a,t),o=fp(o),a=fp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=y+f+o,R=y+_+a,E=cp(r,r.VERTEX_SHADER,b),A=cp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,E),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(G){if(n.debug.checkShaderErrors){let Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(E).trim(),O=r.getShaderInfoLog(A).trim(),W=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,A);else{let q=hp(r,E,"vertex"),X=hp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+X)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||O==="")&&(Y=!1);Y&&(G.diagnostics={runnable:W,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:_}})}r.deleteShader(E),r.deleteShader(A),v=new As(r,m),w=vM(r,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,uM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var LM=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sh(e),t.set(e,i)),i}},Sh=class{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}};function DM(n,e,t,i,r,s,o){let a=new Ya,l=new bh,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function m(v,w,U,G,Z){let L=G.fog,O=Z.geometry,W=v.isMeshStandardMaterial?G.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),q=Y&&Y.mapping===vl?Y.image.height:null,X=x[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,te=j!==void 0?j.length:0,de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let V,K,ce,Me;if(X){let fn=ei[X];V=fn.vertexShader,K=fn.fragmentShader}else V=v.vertexShader,K=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);let _e=n.getRenderTarget(),ze=Z.isInstancedMesh===!0,Be=Z.isBatchedMesh===!0,Ae=!!v.map,rt=!!v.matcap,z=!!Y,dn=!!v.aoMap,Se=!!v.lightMap,Ne=!!v.bumpMap,me=!!v.normalMap,wt=!!v.displacementMap,We=!!v.emissiveMap,T=!!v.metalnessMap,M=!!v.roughnessMap,k=v.anisotropy>0,Q=v.clearcoat>0,$=v.iridescence>0,ee=v.sheen>0,ge=v.transmission>0,ae=k&&!!v.anisotropyMap,fe=Q&&!!v.clearcoatMap,Te=Q&&!!v.clearcoatNormalMap,Xe=Q&&!!v.clearcoatRoughnessMap,J=$&&!!v.iridescenceMap,ht=$&&!!v.iridescenceThicknessMap,Qe=ee&&!!v.sheenColorMap,Le=ee&&!!v.sheenRoughnessMap,be=!!v.specularMap,pe=!!v.specularColorMap,He=!!v.specularIntensityMap,ct=ge&&!!v.transmissionMap,Rt=ge&&!!v.thicknessMap,Ke=!!v.gradientMap,ne=!!v.alphaMap,P=v.alphaTest>0,se=!!v.alphaHash,oe=!!v.extensions,Re=!!O.attributes.uv1,we=!!O.attributes.uv2,xt=!!O.attributes.uv3,yt=Yi;return v.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:K,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Be,instancing:ze,instancingColor:ze&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Wt,map:Ae,matcap:rt,envMap:z,envMapMode:z&&Y.mapping,envMapCubeUVHeight:q,aoMap:dn,lightMap:Se,bumpMap:Ne,normalMap:me,displacementMap:d&&wt,emissiveMap:We,normalMapObjectSpace:me&&v.normalMapType===F0,normalMapTangentSpace:me&&v.normalMapType===em,metalnessMap:T,roughnessMap:M,anisotropy:k,anisotropyMap:ae,clearcoat:Q,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Xe,iridescence:$,iridescenceMap:J,iridescenceThicknessMap:ht,sheen:ee,sheenColorMap:Qe,sheenRoughnessMap:Le,specularMap:be,specularColorMap:pe,specularIntensityMap:He,transmission:ge,transmissionMap:ct,thicknessMap:Rt,gradientMap:Ke,opaque:v.transparent===!1&&v.blending===Es,alphaMap:ne,alphaTest:P,alphaHash:se,combine:v.combine,mapUv:Ae&&g(v.map.channel),aoMapUv:dn&&g(v.aoMap.channel),lightMapUv:Se&&g(v.lightMap.channel),bumpMapUv:Ne&&g(v.bumpMap.channel),normalMapUv:me&&g(v.normalMap.channel),displacementMapUv:wt&&g(v.displacementMap.channel),emissiveMapUv:We&&g(v.emissiveMap.channel),metalnessMapUv:T&&g(v.metalnessMap.channel),roughnessMapUv:M&&g(v.roughnessMap.channel),anisotropyMapUv:ae&&g(v.anisotropyMap.channel),clearcoatMapUv:fe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:pe&&g(v.specularColorMap.channel),specularIntensityMapUv:He&&g(v.specularIntensityMap.channel),transmissionMapUv:ct&&g(v.transmissionMap.channel),thicknessMapUv:Rt&&g(v.thicknessMap.channel),alphaMapUv:ne&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:we,vertexUv3s:xt,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(Ae||ne),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$t,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(w,v),y(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function b(v){let w=x[v.type],U;if(w){let G=ei[w];U=bx.clone(G.uniforms)}else U=v.uniforms;return U}function R(v,w){let U;for(let G=0,Z=c.length;G<Z;G++){let L=c[G];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new IM(n,w,v,s),c.push(U)),U}function E(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:D}}function NM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function UM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gp(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,p,x,g,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,x,g,m){let f=o(u,d,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,x,g,m){let f=o(u,d,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||UM),i.length>1&&i.sort(d||mp),r.length>1&&r.sort(d||mp)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function OM(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new gp,n.set(i,[o])):r>=s.length?(o=new gp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ye};break;case"SpotLight":t={position:new C,direction:new C,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function FM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var kM=0;function BM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HM(n,e){let t=new zM,i=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new C);let s=new C,o=new ke,a=new ke;function l(h,u){let d=0,p=0,x=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let g=0,m=0,f=0,_=0,y=0,b=0,R=0,E=0,A=0,D=0,v=0;h.sort(BM);let w=u===!0?Math.PI:1;for(let G=0,Z=h.length;G<Z;G++){let L=h[G],O=L.color,W=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*W*w,p+=O.g*W*w,x+=O.b*W*w;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],W);v++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let j=L.shadow,te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.directionalShadow[g]=te,r.directionalShadowMap[g]=q,r.directionalShadowMatrix[g]=L.shadow.matrix,b++}r.directional[g]=X,g++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(W*w),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[f]=X;let j=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[f]=j.matrix,L.castShadow){let te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.spotShadow[f]=te,r.spotShadowMap[f]=q,E++}f++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(O).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=X,_++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,te=i.get(L);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=L.shadow.matrix,R++}r.point[m]=X,m++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W*w),X.groundColor.copy(L.groundColor).multiplyScalar(W*w),r.hemi[y]=X,y++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=x;let U=r.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==f||U.rectAreaLength!==_||U.hemiLength!==y||U.numDirectionalShadows!==b||U.numPointShadows!==R||U.numSpotShadows!==E||U.numSpotMaps!==A||U.numLightProbes!==v)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=E+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=v,U.directionalLength=g,U.pointLength=m,U.spotLength=f,U.rectAreaLength=_,U.hemiLength=y,U.numDirectionalShadows=b,U.numPointShadows=R,U.numSpotShadows=E,U.numSpotMaps=A,U.numLightProbes=v,r.version=kM++)}function c(h,u){let d=0,p=0,x=0,g=0,m=0,f=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let b=h[_];if(b.isDirectionalLight){let R=r.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(b.isSpotLight){let R=r.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),x++}else if(b.isRectAreaLight){let R=r.rectArea[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let R=r.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){let R=r.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function xp(n,e){let t=new HM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function GM(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),l;return a===void 0?(l=new xp(n,e),t.set(s,[l])):o>=a.length?(l=new xp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}var wh=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function XM(n,e,t){let i=new Co,r=new re,s=new re,o=new mt,a=new wh({depthPacking:z0}),l=new Eh,c={},h=t.maxTextureSize,u={[ni]:vn,[vn]:ni,[$t]:$t},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:VM,fragmentShader:WM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Pt;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ve(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Z=f!==yi&&this.type===yi,L=f===yi&&this.type!==yi;for(let O=0,W=E.length;O<W;O++){let Y=E[O],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let X=q.getFrameExtents();if(r.multiply(X),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||Z===!0||L===!0){let te=this.type!==yi?{minFilter:Bt,magFilter:Bt}:{};q.map!==null&&q.map.dispose(),q.map=new Si(r.x,r.y,te),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let j=q.getViewportCount();for(let te=0;te<j;te++){let de=q.getViewport(te);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),G.viewport(o),q.updateMatrices(Y,te),i=q.getFrustum(),b(A,D,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===yi&&_(q,D),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,w,U)};function _(E,A){let D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,D,p,g,null)}function y(E,A,D,v){let w=null,U=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)w=U;else if(w=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=w.uuid,Z=A.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let O=L[Z];O===void 0&&(O=w.clone(),L[Z]=O,A.addEventListener("dispose",R)),w=O}if(w.visible=A.visible,w.wireframe=A.wireframe,v===yi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=n.properties.get(w);G.light=D}return w}function b(E,A,D,v,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let Z=e.update(E),L=E.material;if(Array.isArray(L)){let O=Z.groups;for(let W=0,Y=O.length;W<Y;W++){let q=O[W],X=L[q.materialIndex];if(X&&X.visible){let j=y(E,X,v,w);E.onBeforeShadow(n,E,A,D,Z,j,q),n.renderBufferDirect(D,null,Z,j,E,q),E.onAfterShadow(n,E,A,D,Z,j,q)}}}else if(L.visible){let O=y(E,L,v,w);E.onBeforeShadow(n,E,A,D,Z,O,null),n.renderBufferDirect(D,null,Z,O,E,null),E.onAfterShadow(n,E,A,D,Z,O,null)}}let G=E.children;for(let Z=0,L=G.length;Z<L;Z++)b(G[Z],A,D,v,w)}function R(E){E.target.removeEventListener("dispose",R);for(let D in c){let v=c[D],w=E.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function qM(n,e,t){let i=t.isWebGL2;function r(){let P=!1,se=new mt,oe=null,Re=new mt(0,0,0,0);return{setMask:function(we){oe!==we&&!P&&(n.colorMask(we,we,we,we),oe=we)},setLocked:function(we){P=we},setClear:function(we,xt,yt,Kt,fn){fn===!0&&(we*=Kt,xt*=Kt,yt*=Kt),se.set(we,xt,yt,Kt),Re.equals(se)===!1&&(n.clearColor(we,xt,yt,Kt),Re.copy(se))},reset:function(){P=!1,oe=null,Re.set(-1,0,0,0)}}}function s(){let P=!1,se=null,oe=null,Re=null;return{setTest:function(we){we?Be(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(we){se!==we&&!P&&(n.depthMask(we),se=we)},setFunc:function(we){if(oe!==we){switch(we){case h0:n.depthFunc(n.NEVER);break;case u0:n.depthFunc(n.ALWAYS);break;case d0:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case f0:n.depthFunc(n.EQUAL);break;case p0:n.depthFunc(n.GEQUAL);break;case m0:n.depthFunc(n.GREATER);break;case g0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=we}},setLocked:function(we){P=we},setClear:function(we){Re!==we&&(n.clearDepth(we),Re=we)},reset:function(){P=!1,se=null,oe=null,Re=null}}}function o(){let P=!1,se=null,oe=null,Re=null,we=null,xt=null,yt=null,Kt=null,fn=null;return{setTest:function(_t){P||(_t?Be(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(_t){se!==_t&&!P&&(n.stencilMask(_t),se=_t)},setFunc:function(_t,pn,Qn){(oe!==_t||Re!==pn||we!==Qn)&&(n.stencilFunc(_t,pn,Qn),oe=_t,Re=pn,we=Qn)},setOp:function(_t,pn,Qn){(xt!==_t||yt!==pn||Kt!==Qn)&&(n.stencilOp(_t,pn,Qn),xt=_t,yt=pn,Kt=Qn)},setLocked:function(_t){P=_t},setClear:function(_t){fn!==_t&&(n.clearStencil(_t),fn=_t)},reset:function(){P=!1,se=null,oe=null,Re=null,we=null,xt=null,yt=null,Kt=null,fn=null}}}let a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,y=null,b=null,R=null,E=null,A=null,D=null,v=new ye(0,0,0),w=0,U=!1,G=null,Z=null,L=null,O=null,W=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,X=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=X>=2);let te=null,de={},V=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ce=new mt().fromArray(V),Me=new mt().fromArray(K);function _e(P,se,oe,Re){let we=new Uint8Array(4),xt=n.createTexture();n.bindTexture(P,xt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<oe;yt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(se+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return xt}let ze={};ze[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(n.DEPTH_TEST),l.setFunc(Ua),We(!1),T(Qd),Be(n.CULL_FACE),me(qi);function Be(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function Ae(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function rt(P,se){return p[P]!==se?(n.bindFramebuffer(P,se),p[P]=se,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function z(P,se){let oe=g,Re=!1;if(P)if(oe=x.get(se),oe===void 0&&(oe=[],x.set(se,oe)),P.isWebGLMultipleRenderTargets){let we=P.texture;if(oe.length!==we.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,yt=we.length;xt<yt;xt++)oe[xt]=n.COLOR_ATTACHMENT0+xt;oe.length=we.length,Re=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Re=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function dn(P){return m!==P?(n.useProgram(P),m=P,!0):!1}let Se={[Ar]:n.FUNC_ADD,[Zg]:n.FUNC_SUBTRACT,[Jg]:n.FUNC_REVERSE_SUBTRACT};if(i)Se[rf]=n.MIN,Se[sf]=n.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Se[rf]=P.MIN_EXT,Se[sf]=P.MAX_EXT)}let Ne={[$g]:n.ZERO,[jg]:n.ONE,[Qg]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[s0]:n.SRC_ALPHA_SATURATE,[i0]:n.DST_COLOR,[t0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[r0]:n.ONE_MINUS_DST_COLOR,[n0]:n.ONE_MINUS_DST_ALPHA,[o0]:n.CONSTANT_COLOR,[a0]:n.ONE_MINUS_CONSTANT_COLOR,[l0]:n.CONSTANT_ALPHA,[c0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(P,se,oe,Re,we,xt,yt,Kt,fn,_t){if(P===qi){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Be(n.BLEND),f=!0),P!==Kg){if(P!==_||_t!==U){if((y!==Ar||E!==Ar)&&(n.blendEquation(n.FUNC_ADD),y=Ar,E=Ar),_t)switch(P){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.ONE,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ef:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,R=null,A=null,D=null,v.set(0,0,0),w=0,_=P,U=_t}return}we=we||se,xt=xt||oe,yt=yt||Re,(se!==y||we!==E)&&(n.blendEquationSeparate(Se[se],Se[we]),y=se,E=we),(oe!==b||Re!==R||xt!==A||yt!==D)&&(n.blendFuncSeparate(Ne[oe],Ne[Re],Ne[xt],Ne[yt]),b=oe,R=Re,A=xt,D=yt),(Kt.equals(v)===!1||fn!==w)&&(n.blendColor(Kt.r,Kt.g,Kt.b,fn),v.copy(Kt),w=fn),_=P,U=!1}function wt(P,se){P.side===$t?Ae(n.CULL_FACE):Be(n.CULL_FACE);let oe=P.side===vn;se&&(oe=!oe),We(oe),P.blending===Es&&P.transparent===!1?me(qi):me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Re=P.stencilWrite;c.setTest(Re),Re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Be(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){G!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),G=P)}function T(P){P!==qg?(Be(n.CULL_FACE),P!==Z&&(P===Qd?n.cullFace(n.BACK):P===Yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),Z=P}function M(P){P!==L&&(q&&n.lineWidth(P),L=P)}function k(P,se,oe){P?(Be(n.POLYGON_OFFSET_FILL),(O!==se||W!==oe)&&(n.polygonOffset(se,oe),O=se,W=oe)):Ae(n.POLYGON_OFFSET_FILL)}function Q(P){P?Be(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function $(P){P===void 0&&(P=n.TEXTURE0+Y-1),te!==P&&(n.activeTexture(P),te=P)}function ee(P,se,oe){oe===void 0&&(te===null?oe=n.TEXTURE0+Y-1:oe=te);let Re=de[oe];Re===void 0&&(Re={type:void 0,texture:void 0},de[oe]=Re),(Re.type!==P||Re.texture!==se)&&(te!==oe&&(n.activeTexture(oe),te=oe),n.bindTexture(P,se||ze[P]),Re.type=P,Re.texture=se)}function ge(){let P=de[te];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(P){ce.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function ct(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function Rt(P,se){let oe=u.get(se);oe===void 0&&(oe=new WeakMap,u.set(se,oe));let Re=oe.get(P);Re===void 0&&(Re=n.getUniformBlockIndex(se,P.name),oe.set(P,Re))}function Ke(P,se){let Re=u.get(se).get(P);h.get(se)!==Re&&(n.uniformBlockBinding(se,Re,P.__bindingPointIndex),h.set(se,Re))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,de={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,y=null,b=null,R=null,E=null,A=null,D=null,v=new ye(0,0,0),w=0,U=!1,G=null,Z=null,L=null,O=null,W=null,ce.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:Ae,bindFramebuffer:rt,drawBuffers:z,useProgram:dn,setBlending:me,setMaterial:wt,setFlipSided:We,setCullFace:T,setLineWidth:M,setPolygonOffset:k,setScissorTest:Q,activeTexture:$,bindTexture:ee,unbindTexture:ge,compressedTexImage2D:ae,compressedTexImage3D:fe,texImage2D:be,texImage3D:pe,updateUBOMapping:Rt,uniformBlockBinding:Ke,texStorage2D:Qe,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Xe,compressedTexSubImage2D:J,compressedTexSubImage3D:ht,scissor:He,viewport:ct,reset:ne}}function YM(n,e,t,i,r,s,o){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,M){return p?new OffscreenCanvas(T,M):Ro("canvas")}function g(T,M,k,Q){let $=1;if((T.width>Q||T.height>Q)&&($=Q/Math.max(T.width,T.height)),$<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ee=M?Ga:Math.floor,ge=ee($*T.width),ae=ee($*T.height);u===void 0&&(u=x(ge,ae));let fe=k?x(ge,ae):u;return fe.width=ge,fe.height=ae,fe.getContext("2d").drawImage(T,0,0,ge,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+ae+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return dh(T.width)&&dh(T.height)}function f(T){return a?!1:T.wrapS!==Pn||T.wrapT!==Pn||T.minFilter!==Bt&&T.minFilter!==xn}function _(T,M){return T.generateMipmaps&&M&&T.minFilter!==Bt&&T.minFilter!==xn}function y(T){n.generateMipmap(T)}function b(T,M,k,Q,$=!1){if(a===!1)return M;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=M;if(M===n.RED&&(k===n.FLOAT&&(ee=n.R32F),k===n.HALF_FLOAT&&(ee=n.R16F),k===n.UNSIGNED_BYTE&&(ee=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.R8UI),k===n.UNSIGNED_SHORT&&(ee=n.R16UI),k===n.UNSIGNED_INT&&(ee=n.R32UI),k===n.BYTE&&(ee=n.R8I),k===n.SHORT&&(ee=n.R16I),k===n.INT&&(ee=n.R32I)),M===n.RG&&(k===n.FLOAT&&(ee=n.RG32F),k===n.HALF_FLOAT&&(ee=n.RG16F),k===n.UNSIGNED_BYTE&&(ee=n.RG8)),M===n.RGBA){let ge=$?Fa:at.getTransfer(Q);k===n.FLOAT&&(ee=n.RGBA32F),k===n.HALF_FLOAT&&(ee=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ee=ge===bt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(T,M,k){return _(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function E(T){return T===Bt||T===Oa||T===_o?n.NEAREST:n.LINEAR}function A(T){let M=T.target;M.removeEventListener("dispose",A),v(M),M.isVideoTexture&&h.delete(M)}function D(T){let M=T.target;M.removeEventListener("dispose",D),U(M)}function v(T){let M=i.get(T);if(M.__webglInit===void 0)return;let k=T.source,Q=d.get(k);if(Q){let $=Q[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(T),Object.keys(Q).length===0&&d.delete(k)}i.remove(T)}function w(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let k=T.source,Q=d.get(k);delete Q[M.__cacheKey],o.memory.textures--}function U(T){let M=T.texture,k=i.get(T),Q=i.get(M);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(k.__webglFramebuffer[$]))for(let ee=0;ee<k.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(k.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(k.__webglFramebuffer[$]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[$])}else{if(Array.isArray(k.__webglFramebuffer))for(let $=0;$<k.__webglFramebuffer.length;$++)n.deleteFramebuffer(k.__webglFramebuffer[$]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let $=0;$<k.__webglColorRenderbuffer.length;$++)k.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let $=0,ee=M.length;$<ee;$++){let ge=i.get(M[$]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(M[$])}i.remove(M),i.remove(T)}let G=0;function Z(){G=0}function L(){let T=G;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),G+=1,T}function O(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function W(T,M){let k=i.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,T,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Y(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){ce(k,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function q(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){ce(k,T,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function X(T,M){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Me(k,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let j={[Dr]:n.REPEAT,[Pn]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},te={[Bt]:n.NEAREST,[Oa]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[eu]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},de={[k0]:n.NEVER,[X0]:n.ALWAYS,[B0]:n.LESS,[tm]:n.LEQUAL,[H0]:n.EQUAL,[W0]:n.GEQUAL,[G0]:n.GREATER,[V0]:n.NOTEQUAL};function V(T,M,k){if(k?(n.texParameteri(T,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,j[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,te[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,te[M.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Pn||M.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==Bt&&M.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,de[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Bt||M.minFilter!==_o&&M.minFilter!==Zi||M.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));let Q=M.source,$=d.get(Q);$===void 0&&($={},d.set(Q,$));let ee=O(M);if(ee!==T.__cacheKey){$[ee]===void 0&&($[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[ee].usedTimes++;let ge=$[T.__cacheKey];ge!==void 0&&($[T.__cacheKey].usedTimes--,ge.usedTimes===0&&w(M)),T.__cacheKey=ee,T.__webglTexture=$[ee].texture}return k}function ce(T,M,k){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let $=K(T,M),ee=M.source;t.bindTexture(Q,T.__webglTexture,n.TEXTURE0+k);let ge=i.get(ee);if(ee.version!==ge.__version||$===!0){t.activeTexture(n.TEXTURE0+k);let ae=at.getPrimaries(at.workingColorSpace),fe=M.colorSpace===On?null:at.getPrimaries(M.colorSpace),Te=M.colorSpace===On||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Xe=f(M)&&m(M.image)===!1,J=g(M.image,Xe,!1,r.maxTextureSize);J=We(M,J);let ht=m(J)||a,Qe=s.convert(M.format,M.colorSpace),Le=s.convert(M.type),be=b(M.internalFormat,Qe,Le,M.colorSpace,M.isVideoTexture);V(Q,M,ht);let pe,He=M.mipmaps,ct=a&&M.isVideoTexture!==!0&&be!==$p,Rt=ge.__version===void 0||$===!0,Ke=R(M,J,ht);if(M.isDepthTexture)be=n.DEPTH_COMPONENT,a?M.type===vi?be=n.DEPTH_COMPONENT32F:M.type===Wi?be=n.DEPTH_COMPONENT24:M.type===Pr?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:M.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ir&&be===n.DEPTH_COMPONENT&&M.type!==tu&&M.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Wi,Le=s.convert(M.type)),M.format===Ps&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,M.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pr,Le=s.convert(M.type))),Rt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,Qe,Le,null));else if(M.isDataTexture)if(He.length>0&&ht){ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,Qe,Le,pe.data);M.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Qe,Le,J.data)):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,Qe,Le,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,be,He[0].width,He[0].height,J.depth);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],M.format!==Un?Qe!==null?ct?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,J.depth,Qe,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,pe.width,pe.height,J.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,J.depth,Qe,Le,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,pe.width,pe.height,J.depth,0,Qe,Le,pe.data)}else{ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],M.format!==Un?Qe!==null?ct?t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,Qe,Le,pe.data):t.texImage2D(n.TEXTURE_2D,ne,be,pe.width,pe.height,0,Qe,Le,pe.data)}else if(M.isDataArrayTexture)ct?(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,be,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Qe,Le,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,Qe,Le,J.data);else if(M.isData3DTexture)ct?(Rt&&t.texStorage3D(n.TEXTURE_3D,Ke,be,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Qe,Le,J.data)):t.texImage3D(n.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,Qe,Le,J.data);else if(M.isFramebufferTexture){if(Rt)if(ct)t.texStorage2D(n.TEXTURE_2D,Ke,be,J.width,J.height);else{let ne=J.width,P=J.height;for(let se=0;se<Ke;se++)t.texImage2D(n.TEXTURE_2D,se,be,ne,P,0,Qe,Le,null),ne>>=1,P>>=1}}else if(He.length>0&&ht){ct&&Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,He[0].width,He[0].height);for(let ne=0,P=He.length;ne<P;ne++)pe=He[ne],ct?t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Qe,Le,pe):t.texImage2D(n.TEXTURE_2D,ne,be,Qe,Le,pe);M.generateMipmaps=!1}else ct?(Rt&&t.texStorage2D(n.TEXTURE_2D,Ke,be,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,Le,J)):t.texImage2D(n.TEXTURE_2D,0,be,Qe,Le,J);_(M,ht)&&y(Q),ge.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Me(T,M,k){if(M.image.length!==6)return;let Q=K(T,M),$=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let ee=i.get($);if($.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);let ge=at.getPrimaries(at.workingColorSpace),ae=M.colorSpace===On?null:at.getPrimaries(M.colorSpace),fe=M.colorSpace===On||ge===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Xe=M.image[0]&&M.image[0].isDataTexture,J=[];for(let ne=0;ne<6;ne++)!Te&&!Xe?J[ne]=g(M.image[ne],!1,!0,r.maxCubemapSize):J[ne]=Xe?M.image[ne].image:M.image[ne],J[ne]=We(M,J[ne]);let ht=J[0],Qe=m(ht)||a,Le=s.convert(M.format,M.colorSpace),be=s.convert(M.type),pe=b(M.internalFormat,Le,be,M.colorSpace),He=a&&M.isVideoTexture!==!0,ct=ee.__version===void 0||Q===!0,Rt=R(M,ht,Qe);V(n.TEXTURE_CUBE_MAP,M,Qe);let Ke;if(Te){He&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,ht.width,ht.height);for(let ne=0;ne<6;ne++){Ke=J[ne].mipmaps;for(let P=0;P<Ke.length;P++){let se=Ke[P];M.format!==Un?Le!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,se.width,se.height,Le,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,se.width,se.height,Le,be,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,pe,se.width,se.height,0,Le,be,se.data)}}}else{Ke=M.mipmaps,He&&ct&&(Ke.length>0&&Rt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,pe,J[0].width,J[0].height));for(let ne=0;ne<6;ne++)if(Xe){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,J[ne].width,J[ne].height,Le,be,J[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,J[ne].width,J[ne].height,0,Le,be,J[ne].data);for(let P=0;P<Ke.length;P++){let oe=Ke[P].image[ne].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,oe.width,oe.height,Le,be,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,pe,oe.width,oe.height,0,Le,be,oe.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,be,J[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Le,be,J[ne]);for(let P=0;P<Ke.length;P++){let se=Ke[P];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,Le,be,se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,pe,Le,be,se.image[ne])}}}_(M,Qe)&&y(n.TEXTURE_CUBE_MAP),ee.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function _e(T,M,k,Q,$,ee){let ge=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),fe=b(k.internalFormat,ge,ae,k.colorSpace);if(!i.get(M).__hasExternalTextures){let Xe=Math.max(1,M.width>>ee),J=Math.max(1,M.height>>ee);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ee,fe,Xe,J,M.depth,0,ge,ae,null):t.texImage2D($,ee,fe,Xe,J,0,ge,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),me(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,i.get(k).__webglTexture,0,Ne(M)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,i.get(k).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(T,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||me(M)){let $=M.depthTexture;$&&$.isDepthTexture&&($.type===vi?Q=n.DEPTH_COMPONENT32F:$.type===Wi&&(Q=n.DEPTH_COMPONENT24));let ee=Ne(M);me(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Q,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Q,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let Q=Ne(M);k&&me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,M.width,M.height):me(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0;$<Q.length;$++){let ee=Q[$],ge=s.convert(ee.format,ee.colorSpace),ae=s.convert(ee.type),fe=b(ee.internalFormat,ge,ae,ee.colorSpace),Te=Ne(M);k&&me(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,fe,M.width,M.height):me(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,fe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,fe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let Q=i.get(M.depthTexture).__webglTexture,$=Ne(M);if(M.depthTexture.format===Ir)me(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ps)me(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(T){let M=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=n.createRenderbuffer(),ze(M.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ze(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,M,k){let Q=i.get(T);M!==void 0&&_e(Q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ae(T)}function z(T){let M=T.texture,k=i.get(T),Q=i.get(M);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++);let $=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ge=m(T)||a;if($){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ee)if(r.drawBuffers){let ae=T.texture;for(let fe=0,Te=ae.length;fe<Te;fe++){let Xe=i.get(ae[fe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&me(T)===!1){let ae=ee?M:[M];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let Te=ae[fe];k.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);let Xe=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),ht=b(Te.internalFormat,Xe,J,Te.colorSpace,T.isXRRenderTarget===!0),Qe=Ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ht,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),V(n.TEXTURE_CUBE_MAP,M,ge);for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[ae][fe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else _e(k.__webglFramebuffer[ae],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(M,ge)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ae=T.texture;for(let fe=0,Te=ae.length;fe<Te;fe++){let Xe=ae[fe],J=i.get(Xe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),V(n.TEXTURE_2D,Xe,ge),_e(k.__webglFramebuffer,T,Xe,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_(Xe,ge)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),V(ae,M,ge),a&&M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)_e(k.__webglFramebuffer[fe],T,M,n.COLOR_ATTACHMENT0,ae,fe);else _e(k.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ae,0);_(M,ge)&&y(ae),t.unbindTexture()}T.depthBuffer&&Ae(T)}function dn(T){let M=m(T)||a,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,$=k.length;Q<$;Q++){let ee=k[Q];if(_(ee,M)){let ge=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(ee).__webglTexture;t.bindTexture(ge,ae),y(ge),t.unbindTexture()}}}function Se(T){if(a&&T.samples>0&&me(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,Q=T.height,$=n.COLOR_BUFFER_BIT,ee=[],ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){ee.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&ee.push(ge);let Xe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Xe===!1&&(T.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),fe){let J=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,$,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]);let Xe=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ne(T){return Math.min(r.maxSamples,T.samples)}function me(T){let M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function We(T,M){let k=T.colorSpace,Q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===uh||k!==Wt&&k!==On&&(at.getTransfer(k)===bt?a===!1?e.has("EXT_sRGB")===!0&&Q===Un?(T.format=uh,T.minFilter=xn,T.generateMipmaps=!1):M=Va.sRGBToLinear(M):(Q!==Un||$!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=rt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=me}function KM(n,e,t){let i=t.isWebGL2;function r(s,o=On){let a,l=at.getTransfer(o);if(s===Ki)return n.UNSIGNED_BYTE;if(s===qp)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Yp)return n.UNSIGNED_SHORT_5_5_5_1;if(s===E0)return n.BYTE;if(s===T0)return n.SHORT;if(s===tu)return n.UNSIGNED_SHORT;if(s===Xp)return n.INT;if(s===Wi)return n.UNSIGNED_INT;if(s===vi)return n.FLOAT;if(s===Ao)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===A0)return n.ALPHA;if(s===Un)return n.RGBA;if(s===R0)return n.LUMINANCE;if(s===C0)return n.LUMINANCE_ALPHA;if(s===Ir)return n.DEPTH_COMPONENT;if(s===Ps)return n.DEPTH_STENCIL;if(s===uh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===P0)return n.RED;if(s===Kp)return n.RED_INTEGER;if(s===I0)return n.RG;if(s===Zp)return n.RG_INTEGER;if(s===Jp)return n.RGBA_INTEGER;if(s===Sc||s===wc||s===Ec||s===Tc)if(l===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===af||s===lf||s===cf||s===hf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$p)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uf||s===df)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===uf)return l===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===df)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ff||s===pf||s===mf||s===gf||s===xf||s===yf||s===_f||s===vf||s===Mf||s===bf||s===Sf||s===wf||s===Ef||s===Tf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ff)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_f)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ef)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tf)return l===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ac||s===Af||s===Rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ac)return l===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===L0||s===Cf||s===Pf||s===If)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ac)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Cf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===If)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Th=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ut=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZM={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ah=class extends bi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null,g=t.getContextAttributes(),m=null,f=null,_=[],y=[],b=new re,R=null,E=new Gt;E.layers.enable(1),E.viewport=new mt;let A=new Gt;A.layers.enable(2),A.viewport=new mt;let D=[E,A],v=new Th;v.layers.enable(1),v.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=_[V];return K===void 0&&(K=new So,_[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=_[V];return K===void 0&&(K=new So,_[V]=K),K.getGripSpace()},this.getHand=function(V){let K=_[V];return K===void 0&&(K=new So,_[V]=K),K.getHandSpace()};function G(V){let K=y.indexOf(V.inputSource);if(K===-1)return;let ce=_[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let V=0;V<_.length;V++){let K=y[V];K!==null&&(y[V]=null,_[V].disconnect(K))}w=null,U=null,e.setRenderTarget(m),p=null,d=null,u=null,r=null,f=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Si(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ce=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Ps:Ir,ce=g.stencil?Pr:Wi);let _e={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Si(d.textureWidth,d.textureHeight,{format:Un,type:Ki,depthTexture:new Qa(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let ze=e.properties.get(f);ze.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let K=0;K<V.removed.length;K++){let ce=V.removed[K],Me=y.indexOf(ce);Me>=0&&(y[Me]=null,_[Me].disconnect(ce))}for(let K=0;K<V.added.length;K++){let ce=V.added[K],Me=y.indexOf(ce);if(Me===-1){for(let ze=0;ze<_.length;ze++)if(ze>=y.length){y.push(ce),Me=ze;break}else if(y[ze]===null){y[ze]=ce,Me=ze;break}if(Me===-1)break}let _e=_[Me];_e&&_e.connect(ce)}}let O=new C,W=new C;function Y(V,K,ce){O.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);let Me=O.distanceTo(W),_e=K.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Be=_e[14]/(_e[10]-1),Ae=_e[14]/(_e[10]+1),rt=(_e[9]+1)/_e[5],z=(_e[9]-1)/_e[5],dn=(_e[8]-1)/_e[0],Se=(ze[8]+1)/ze[0],Ne=Be*dn,me=Be*Se,wt=Me/(-dn+Se),We=wt*-dn;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(wt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Be+wt,M=Ae+wt,k=Ne-We,Q=me+(Me-We),$=rt*Ae/M*T,ee=z*Ae/M*T;V.projectionMatrix.makePerspective(k,Q,$,ee,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;v.near=A.near=E.near=V.near,v.far=A.far=E.far=V.far,(w!==v.near||U!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,U=v.far);let K=V.parent,ce=v.cameras;q(v,K);for(let Me=0;Me<ce.length;Me++)q(ce[Me],K);ce.length===2?Y(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),X(V,v,K)};function X(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ls*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let j=null;function te(V,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Me=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let _e=0;_e<ce.length;_e++){let ze=ce[_e],Be=null;if(p!==null)Be=p.getViewport(ze);else{let rt=u.getViewSubImage(d,ze);Be=rt.viewport,_e===0&&(e.setRenderTargetTextures(f,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(f))}let Ae=D[_e];Ae===void 0&&(Ae=new Gt,Ae.layers.enable(_e),Ae.viewport=new mt,D[_e]=Ae),Ae.matrix.fromArray(ze.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ze.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Be.x,Be.y,Be.width,Be.height),_e===0&&(v.matrix.copy(Ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Ae)}}for(let ce=0;ce<_.length;ce++){let Me=y[ce],_e=_[ce];Me!==null&&_e!==void 0&&_e.update(Me,K,c||o)}j&&j(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let de=new sm;de.setAnimationLoop(te),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}};function JM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $M(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let b=y.program;i.uniformBlockBinding(_,b)}function c(_,y){let b=r[_.id];b===void 0&&(x(_),b=h(_),r[_.id]=b,_.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(_,R);let E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function h(_){let y=u();_.__bindingPointIndex=y;let b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=r[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let D=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,w=D.length;v<w;v++){let U=D[v];if(p(U,E,v,R)===!0){let G=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value],L=0;for(let O=0;O<Z.length;O++){let W=Z[O],Y=g(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+L,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,y,b,R){let E=_.value,A=y+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let D=R[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return R[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function x(_){let y=_.uniforms,b=0,R=16;for(let A=0,D=y.length;A<D;A++){let v=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,U=v.length;w<U;w++){let G=v[w],Z=Array.isArray(G.value)?G.value:[G.value];for(let L=0,O=Z.length;L<O;L++){let W=Z[L],Y=g(W),q=b%R;q!==0&&R-q<Y.boundary&&(b+=R-q),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=Y.storage}}}let E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function g(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(let _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Po=class{constructor(e={}){let{canvas:t=ox(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let y=this,b=!1,R=0,E=0,A=null,D=-1,v=null,w=new mt,U=new mt,G=null,Z=new ye(0),L=0,O=t.width,W=t.height,Y=1,q=null,X=null,j=new mt(0,0,O,W),te=new mt(0,0,O,W),de=!1,V=new Co,K=!1,ce=!1,Me=null,_e=new ke,ze=new re,Be=new C,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return A===null?Y:1}let z=i;function dn(S,N){for(let B=0;B<S.length;B++){let H=S[B],F=t.getContext(H,N);if(F!==null)return F}return null}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",se,!1),z===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),z=dn(N,S),z===null)throw dn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,Ne,me,wt,We,T,M,k,Q,$,ee,ge,ae,fe,Te,Xe,J,ht,Qe,Le,be,pe,He,ct;function Rt(){Se=new gv(z),Ne=new hv(z,Se,e),Se.init(Ne),pe=new KM(z,Se,Ne),me=new qM(z,Se,Ne),wt=new _v(z),We=new NM,T=new YM(z,Se,me,We,Ne,pe,wt),M=new dv(y),k=new mv(y),Q=new Ax(z,Ne),He=new lv(z,Se,Q,Ne),$=new xv(z,Q,wt,He),ee=new Sv(z,$,Q,wt),Qe=new bv(z,Ne,T),Xe=new uv(We),ge=new DM(y,M,k,Se,Ne,He,Xe),ae=new JM(y,We),fe=new OM,Te=new GM(Se,Ne),ht=new av(y,M,k,me,ee,d,l),J=new XM(y,ee,Ne),ct=new $M(z,wt,Ne,me),Le=new cv(z,Se,wt,Ne),be=new yv(z,Se,wt,Ne),wt.programs=ge.programs,y.capabilities=Ne,y.extensions=Se,y.properties=We,y.renderLists=fe,y.shadowMap=J,y.state=me,y.info=wt}Rt();let Ke=new Ah(y,z);this.xr=Ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(O,W,!1))},this.getSize=function(S){return S.set(O,W)},this.setSize=function(S,N,B=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,W=N,t.width=Math.floor(S*Y),t.height=Math.floor(N*Y),B===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(O*Y,W*Y).floor()},this.setDrawingBufferSize=function(S,N,B){O=S,W=N,Y=B,t.width=Math.floor(S*B),t.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,N,B,H){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,N,B,H),me.viewport(w.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(te)},this.setScissor=function(S,N,B,H){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,N,B,H),me.scissor(U.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){me.setScissorTest(de=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(S=!0,N=!0,B=!0){let H=0;if(S){let F=!1;if(A!==null){let ue=A.texture.format;F=ue===Jp||ue===Zp||ue===Kp}if(F){let ue=A.texture.type,xe=ue===Ki||ue===Wi||ue===tu||ue===Pr||ue===qp||ue===Yp,Ee=ht.getClearColor(),Ie=ht.getClearAlpha(),qe=Ee.r,Ue=Ee.g,Fe=Ee.b;xe?(p[0]=qe,p[1]=Ue,p[2]=Fe,p[3]=Ie,z.clearBufferuiv(z.COLOR,0,p)):(x[0]=qe,x[1]=Ue,x[2]=Fe,x[3]=Ie,z.clearBufferiv(z.COLOR,0,x))}else H|=z.COLOR_BUFFER_BIT}N&&(H|=z.DEPTH_BUFFER_BIT),B&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),Te.dispose(),We.dispose(),M.dispose(),k.dispose(),ee.dispose(),He.dispose(),ct.dispose(),ge.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",fn),Ke.removeEventListener("sessionend",_t),Me&&(Me.dispose(),Me=null),pn.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=wt.autoReset,N=J.enabled,B=J.autoUpdate,H=J.needsUpdate,F=J.type;Rt(),wt.autoReset=S,J.enabled=N,J.autoUpdate=B,J.needsUpdate=H,J.type=F}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){let N=S.target;N.removeEventListener("dispose",oe),Re(N)}function Re(S){we(S),We.remove(S)}function we(S){let N=We.get(S).programs;N!==void 0&&(N.forEach(function(B){ge.releaseProgram(B)}),S.isShaderMaterial&&ge.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,H,F,ue){N===null&&(N=Ae);let xe=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Gg(S,N,B,H,F);me.setMaterial(H,xe);let Ie=B.index,qe=1;if(H.wireframe===!0){if(Ie=$.getWireframeAttribute(B),Ie===void 0)return;qe=2}let Ue=B.drawRange,Fe=B.attributes.position,Nt=Ue.start*qe,An=(Ue.start+Ue.count)*qe;ue!==null&&(Nt=Math.max(Nt,ue.start*qe),An=Math.min(An,(ue.start+ue.count)*qe)),Ie!==null?(Nt=Math.max(Nt,0),An=Math.min(An,Ie.count)):Fe!=null&&(Nt=Math.max(Nt,0),An=Math.min(An,Fe.count));let Zt=An-Nt;if(Zt<0||Zt===1/0)return;He.setup(F,H,Ee,B,Ie);let ui,Et=Le;if(Ie!==null&&(ui=Q.get(Ie),Et=be,Et.setIndex(ui)),F.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*rt()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(F.isLine){let Ze=H.linewidth;Ze===void 0&&(Ze=1),me.setLineWidth(Ze*rt()),F.isLineSegments?Et.setMode(z.LINES):F.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else F.isPoints?Et.setMode(z.POINTS):F.isSprite&&Et.setMode(z.TRIANGLES);if(F.isBatchedMesh)Et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Et.renderInstances(Nt,Zt,F.count);else if(B.isInstancedBufferGeometry){let Ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_c=Math.min(B.instanceCount,Ze);Et.renderInstances(Nt,Zt,_c)}else Et.render(Nt,Zt)};function xt(S,N,B){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=vn,S.needsUpdate=!0,na(S,N,B),S.side=ni,S.needsUpdate=!0,na(S,N,B),S.side=$t):na(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),m=Te.get(B),m.init(),_.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(y._useLegacyLights);let H=new Set;return S.traverse(function(F){let ue=F.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let Ee=ue[xe];xt(Ee,B,F),H.add(Ee)}else xt(ue,B,F),H.add(ue)}),_.pop(),m=null,H},this.compileAsync=function(S,N,B=null){let H=this.compile(S,N,B);return new Promise(F=>{function ue(){if(H.forEach(function(xe){We.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){F(S);return}setTimeout(ue,10)}Se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let yt=null;function Kt(S){yt&&yt(S)}function fn(){pn.stop()}function _t(){pn.start()}let pn=new sm;pn.setAnimationLoop(Kt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(S){yt=S,Ke.setAnimationLoop(S),S===null?pn.stop():pn.start()},Ke.addEventListener("sessionstart",fn),Ke.addEventListener("sessionend",_t),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(N),N=Ke.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,A),m=Te.get(S,_.length),m.init(),_.push(m),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,K=Xe.init(this.clippingPlanes,ce),g=fe.get(S,f.length),g.init(),f.push(g),Qn(S,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(q,X),this.info.render.frame++,K===!0&&Xe.beginShadows();let B=m.state.shadowsArray;if(J.render(B,S,N),K===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(g,S),m.setupLights(y._useLegacyLights),N.isArrayCamera){let H=N.cameras;for(let F=0,ue=H.length;F<ue;F++){let xe=H[F];Yd(g,S,xe,xe.viewport)}}else Yd(g,S,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,N),He.resetDefaultState(),D=-1,v=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Qn(S,N,B,H){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);let xe=ee.update(S),Ee=S.material;Ee.visible&&g.push(S,xe,Ee,B,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){let xe=ee.update(S),Ee=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){let Ie=xe.groups;for(let qe=0,Ue=Ie.length;qe<Ue;qe++){let Fe=Ie[qe],Nt=Ee[Fe.materialIndex];Nt&&Nt.visible&&g.push(S,xe,Nt,B,Be.z,Fe)}}else Ee.visible&&g.push(S,xe,Ee,B,Be.z,null)}}let ue=S.children;for(let xe=0,Ee=ue.length;xe<Ee;xe++)Qn(ue[xe],N,B,H)}function Yd(S,N,B,H){let F=S.opaque,ue=S.transmissive,xe=S.transparent;m.setupLightsView(B),K===!0&&Xe.setGlobalState(y.clippingPlanes,B),ue.length>0&&Hg(F,ue,N,B),H&&me.viewport(w.copy(H)),F.length>0&&ta(F,N,B),ue.length>0&&ta(ue,N,B),xe.length>0&&ta(xe,N,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Hg(S,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ue=Ne.isWebGL2;Me===null&&(Me=new Si(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ao:Ki,minFilter:Zi,samples:ue?4:0})),y.getDrawingBufferSize(ze),ue?Me.setSize(ze.x,ze.y):Me.setSize(Ga(ze.x),Ga(ze.y));let xe=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(Z),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Ee=y.toneMapping;y.toneMapping=Yi,ta(S,B,H),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ie=!1;for(let qe=0,Ue=N.length;qe<Ue;qe++){let Fe=N[qe],Nt=Fe.object,An=Fe.geometry,Zt=Fe.material,ui=Fe.group;if(Zt.side===$t&&Nt.layers.test(H.layers)){let Et=Zt.side;Zt.side=vn,Zt.needsUpdate=!0,Kd(Nt,B,H,An,Zt,ui),Zt.side=Et,Zt.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),y.setRenderTarget(xe),y.setClearColor(Z,L),y.toneMapping=Ee}function ta(S,N,B){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ue=S.length;F<ue;F++){let xe=S[F],Ee=xe.object,Ie=xe.geometry,qe=H===null?xe.material:H,Ue=xe.group;Ee.layers.test(B.layers)&&Kd(Ee,N,B,Ie,qe,Ue)}}function Kd(S,N,B,H,F,ue){S.onBeforeRender(y,N,B,H,F,ue),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,N,B,H,S,ue),F.transparent===!0&&F.side===$t&&F.forceSinglePass===!1?(F.side=vn,F.needsUpdate=!0,y.renderBufferDirect(B,N,H,F,S,ue),F.side=ni,F.needsUpdate=!0,y.renderBufferDirect(B,N,H,F,S,ue),F.side=$t):y.renderBufferDirect(B,N,H,F,S,ue),S.onAfterRender(y,N,B,H,F,ue)}function na(S,N,B){N.isScene!==!0&&(N=Ae);let H=We.get(S),F=m.state.lights,ue=m.state.shadowsArray,xe=F.state.version,Ee=ge.getParameters(S,F.state,ue,N,B),Ie=ge.getProgramCacheKey(Ee),qe=H.programs;H.environment=S.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(S.isMeshStandardMaterial?k:M).get(S.envMap||H.environment),qe===void 0&&(S.addEventListener("dispose",oe),qe=new Map,H.programs=qe);let Ue=qe.get(Ie);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===xe)return Jd(S,Ee),Ue}else Ee.uniforms=ge.getUniforms(S),S.onBuild(B,Ee,y),S.onBeforeCompile(Ee,y),Ue=ge.acquireProgram(Ee,Ie),qe.set(Ie,Ue),H.uniforms=Ee.uniforms;let Fe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Xe.uniform),Jd(S,Ee),H.needsLights=Wg(S),H.lightsStateVersion=xe,H.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Zd(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Jd(S,N){let B=We.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Gg(S,N,B,H,F){N.isScene!==!0&&(N=Ae),T.resetTextureUnits();let ue=N.fog,xe=H.isMeshStandardMaterial?N.environment:null,Ee=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wt,Ie=(H.isMeshStandardMaterial?k:M).get(H.envMap||xe),qe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!B.morphAttributes.position,Nt=!!B.morphAttributes.normal,An=!!B.morphAttributes.color,Zt=Yi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Zt=y.toneMapping);let ui=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Et=ui!==void 0?ui.length:0,Ze=We.get(H),_c=m.state.lights;if(K===!0&&(ce===!0||S!==v)){let Dn=S===v&&H.id===D;Xe.setState(H,S,Dn)}let Ct=!1;H.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==_c.state.version||Ze.outputColorSpace!==Ee||F.isBatchedMesh&&Ze.batching===!1||!F.isBatchedMesh&&Ze.batching===!0||F.isInstancedMesh&&Ze.instancing===!1||!F.isInstancedMesh&&Ze.instancing===!0||F.isSkinnedMesh&&Ze.skinning===!1||!F.isSkinnedMesh&&Ze.skinning===!0||F.isInstancedMesh&&Ze.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ze.instancingColor===!1&&F.instanceColor!==null||Ze.envMap!==Ie||H.fog===!0&&Ze.fog!==ue||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Xe.numPlanes||Ze.numIntersection!==Xe.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Ue||Ze.morphTargets!==Fe||Ze.morphNormals!==Nt||Ze.morphColors!==An||Ze.toneMapping!==Zt||Ne.isWebGL2===!0&&Ze.morphTargetsCount!==Et)&&(Ct=!0):(Ct=!0,Ze.__version=H.version);let vr=Ze.currentProgram;Ct===!0&&(vr=na(H,N,F));let $d=!1,ao=!1,vc=!1,nn=vr.getUniforms(),Mr=Ze.uniforms;if(me.useProgram(vr.program)&&($d=!0,ao=!0,vc=!0),H.id!==D&&(D=H.id,ao=!0),$d||v!==S){nn.setValue(z,"projectionMatrix",S.projectionMatrix),nn.setValue(z,"viewMatrix",S.matrixWorldInverse);let Dn=nn.map.cameraPosition;Dn!==void 0&&Dn.setValue(z,Be.setFromMatrixPosition(S.matrixWorld)),Ne.logarithmicDepthBuffer&&nn.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&nn.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,ao=!0,vc=!0)}if(F.isSkinnedMesh){nn.setOptional(z,F,"bindMatrix"),nn.setOptional(z,F,"bindMatrixInverse");let Dn=F.skeleton;Dn&&(Ne.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),nn.setValue(z,"boneTexture",Dn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(nn.setOptional(z,F,"batchingTexture"),nn.setValue(z,"batchingTexture",F._matricesTexture,T));let Mc=B.morphAttributes;if((Mc.position!==void 0||Mc.normal!==void 0||Mc.color!==void 0&&Ne.isWebGL2===!0)&&Qe.update(F,B,vr),(ao||Ze.receiveShadow!==F.receiveShadow)&&(Ze.receiveShadow=F.receiveShadow,nn.setValue(z,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Mr.envMap.value=Ie,Mr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ao&&(nn.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Vg(Mr,vc),ue&&H.fog===!0&&ae.refreshFogUniforms(Mr,ue),ae.refreshMaterialUniforms(Mr,H,Y,W,Me),As.upload(z,Zd(Ze),Mr,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(As.upload(z,Zd(Ze),Mr,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&nn.setValue(z,"center",F.center),nn.setValue(z,"modelViewMatrix",F.modelViewMatrix),nn.setValue(z,"normalMatrix",F.normalMatrix),nn.setValue(z,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Dn=H.uniformsGroups;for(let bc=0,Xg=Dn.length;bc<Xg;bc++)if(Ne.isWebGL2){let jd=Dn[bc];ct.update(jd,vr),ct.bind(jd,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function Vg(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Wg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,B){We.get(S.texture).__webglTexture=N,We.get(S.depthTexture).__webglTexture=B;let H=We.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let B=We.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,B=0){A=S,R=N,E=B;let H=!0,F=null,ue=!1,xe=!1;if(S){let Ie=We.get(S);Ie.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ie.__hasExternalTextures&&T.rebindTextures(S,We.get(S.texture).__webglTexture,We.get(S.depthTexture).__webglTexture);let qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(xe=!0);let Ue=We.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?F=Ue[N][B]:F=Ue[N],ue=!0):Ne.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?F=We.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[B]:F=Ue,w.copy(S.viewport),U.copy(S.scissor),G=S.scissorTest}else w.copy(j).multiplyScalar(Y).floor(),U.copy(te).multiplyScalar(Y).floor(),G=de;if(me.bindFramebuffer(z.FRAMEBUFFER,F)&&Ne.drawBuffers&&H&&me.drawBuffers(S,F),me.viewport(w),me.scissor(U),me.setScissorTest(G),ue){let Ie=We.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,B)}else if(xe){let Ie=We.get(S.texture),qe=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,qe)}D=-1},this.readRenderTargetPixels=function(S,N,B,H,F,ue,xe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=We.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){me.bindFramebuffer(z.FRAMEBUFFER,Ee);try{let Ie=S.texture,qe=Ie.format,Ue=Ie.type;if(qe!==Un&&pe.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Fe=Ue===Ao&&(Se.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ue!==Ki&&pe.convert(Ue)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===vi&&(Ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-H&&B>=0&&B<=S.height-F&&z.readPixels(N,B,H,F,pe.convert(qe),pe.convert(Ue),ue)}finally{let Ie=A!==null?We.get(A).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(S,N,B=0){let H=Math.pow(2,-B),F=Math.floor(N.image.width*H),ue=Math.floor(N.image.height*H);T.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,S.x,S.y,F,ue),me.unbindTexture()},this.copyTextureToTexture=function(S,N,B,H=0){let F=N.image.width,ue=N.image.height,xe=pe.convert(B.format),Ee=pe.convert(B.type);T.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,F,ue,xe,Ee,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,xe,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,S.x,S.y,xe,Ee,N.image),H===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(S,N,B,H,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=S.max.x-S.min.x+1,xe=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Ie=pe.convert(H.format),qe=pe.convert(H.type),Ue;if(H.isData3DTexture)T.setTexture3D(H,0),Ue=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Ue=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Fe=z.getParameter(z.UNPACK_ROW_LENGTH),Nt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),An=z.getParameter(z.UNPACK_SKIP_PIXELS),Zt=z.getParameter(z.UNPACK_SKIP_ROWS),ui=z.getParameter(z.UNPACK_SKIP_IMAGES),Et=B.isCompressedTexture?B.mipmaps[F]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Ue,F,N.x,N.y,N.z,ue,xe,Ee,Ie,qe,Et.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ue,F,N.x,N.y,N.z,ue,xe,Ee,Ie,Et.data)):z.texSubImage3D(Ue,F,N.x,N.y,N.z,ue,xe,Ee,Ie,qe,Et),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,An),z.pixelStorei(z.UNPACK_SKIP_ROWS,Zt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ui),F===0&&H.generateMipmaps&&z.generateMipmap(Ue),me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,me.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Lr:Qp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?dt:Wt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Rh=class extends Po{};Rh.prototype.isWebGL1Renderer=!0;var el=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tl=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new C,Ur=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Or=class extends Mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gs,fo=new C,xs=new C,ys=new C,_s=new re,po=new re,um=new ke,Ea=new C,mo=new C,Ta=new C,yp=new re,$c=new re,_p=new re,zs=class extends vt{constructor(e=new Or){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Os(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Ur(i,3,0,!1)),gs.setAttribute("uv",new Ur(i,2,3,!1))}this.geometry=gs,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),um.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Aa(Ea.set(-.5,-.5,0),ys,o,xs,r,s),Aa(mo.set(.5,-.5,0),ys,o,xs,r,s),Aa(Ta.set(.5,.5,0),ys,o,xs,r,s),yp.set(0,0),$c.set(1,0),_p.set(1,1);let a=e.ray.intersectTriangle(Ea,mo,Ta,!1,fo);if(a===null&&(Aa(mo.set(-.5,.5,0),ys,o,xs,r,s),$c.set(0,1),a=e.ray.intersectTriangle(Ea,Ta,mo,!1,fo),a===null))return;let l=e.ray.origin.distanceTo(fo);l<e.near||l>e.far||t.push({distance:l,point:fo.clone(),uv:Cr.getInterpolation(fo,Ea,mo,Ta,yp,$c,_p,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Aa(n,e,t,i,r,s){_s.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(po.x=s*_s.x-r*_s.y,po.y=r*_s.x+s*_s.y):po.copy(_s),n.copy(e),n.x+=po.x,n.y+=po.y,n.applyMatrix4(um)}var vp=new C,Mp=new mt,bp=new mt,jM=new C,Sp=new ke,Ra=new C,jc=new In,wp=new ke,Qc=new Ds,nl=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=of,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jc.copy(this.boundingSphere),jc.applyMatrix4(r),e.ray.intersectsSphere(jc)!==!1&&(wp.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===of?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===w0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Mp.fromBufferAttribute(r.attributes.skinIndex,e),bp.fromBufferAttribute(r.attributes.skinWeight,e),vp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=bp.getComponent(s);if(o!==0){let a=Mp.getComponent(s);Sp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jM.copy(vp).applyMatrix4(Sp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Io=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ch=class extends en{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Bt,h=Bt,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ep=new ke,QM=new ke,il=class n{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:QM;Ep.multiplyMatrices(a,t[s]),Ep.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ch(t,e,e,Un,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Io),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},zr=class extends Vt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new ke,Tp=new ke,Ca=[],Ap=new yn,eb=new ke,go=new ve,xo=new In,Fr=class extends ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,eb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Ap.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),xo.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vs),Tp.multiplyMatrices(i,vs),go.matrixWorld=Tp,go.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=s,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rp=new C,Cp=new C,Pp=new ke,eh=new Ds,Pa=new In,Fs=class extends vt{constructor(e=new Pt,t=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rp.fromBufferAttribute(t,r-1),Cp.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rp.distanceTo(Cp);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;Pp.copy(r).invert(),eh.copy(e.ray).applyMatrix4(Pp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){let f=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let y=f,b=_-1;y<b;y+=p){let R=x.getX(y),E=x.getX(y+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),eh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=f,b=_-1;y<b;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),eh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Ip=new C,Lp=new C,rl=class extends Fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ip.fromBufferAttribute(t,r),Lp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ip.distanceTo(Lp);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sl=class extends Fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Do=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new ke,Ph=new Ds,Ia=new In,La=new C,ol=class extends vt{constructor(e=new Pt,t=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;Dp.copy(r).invert(),Ph.copy(e.ray).applyMatrix4(Dp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,g=p;x<g;x++){let m=c.getX(x);La.fromBufferAttribute(u,m),Np(La,m,l,r,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p;x<g;x++)La.fromBufferAttribute(u,x),Np(La,x,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Np(n,e,t,i,r,s,o){let a=Ph.distanceSqToPoint(n);if(a<t){let l=new C;Ph.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var ks=class extends en{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new re:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,r=[],s=[],o=[],a=new C,l=new ke;for(let p=0;p<=e;p++){let x=p/e;r[p]=this.getTangentAt(x,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},No=class extends zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new re,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends No{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function au(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Da=new C,th=new au,nh=new au,ih=new au,Lh=class extends zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Da.subVectors(r[0],r[1]).add(r[0]),c=Da);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Da.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),th.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,g,m),nh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,g,m),ih.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(th.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ih.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(th.calc(l),nh.calc(l),ih.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Up(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function tb(n,e){let t=1-n;return t*t*e}function nb(n,e){return 2*(1-n)*n*e}function ib(n,e){return n*n*e}function wo(n,e,t,i){return tb(n,e)+nb(n,t)+ib(n,i)}function rb(n,e){let t=1-n;return t*t*t*e}function sb(n,e){let t=1-n;return 3*t*t*n*e}function ob(n,e){return 3*(1-n)*n*n*e}function ab(n,e){return n*n*n*e}function Eo(n,e,t,i,r){return rb(n,e)+sb(n,t)+ob(n,i)+ab(n,r)}var al=class extends zn{constructor(e=new re,t=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,r.x,s.x,o.x,a.x),Eo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dh=class extends zn{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,r.x,s.x,o.x,a.x),Eo(e,r.y,s.y,o.y,a.y),Eo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends zn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nh=class extends zn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends zn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends zn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(wo(e,r.x,s.x,o.x),wo(e,r.y,s.y,o.y),wo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Up(a,l.x,c.x,h.x,u.x),Up(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new re().fromArray(r))}return this}},Op=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Lh,CubicBezierCurve:al,CubicBezierCurve3:Dh,EllipseCurve:No,LineCurve:ll,LineCurve3:Nh,QuadraticBezierCurve:cl,QuadraticBezierCurve3:Uh,SplineCurve:hl}),Oh=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Op[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Op[r.type]().fromJSON(r))}return this}},zh=class extends Oh{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ll(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new cl(this.currentPoint.clone(),new re(e,t),new re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new al(this.currentPoint.clone(),new re(e,t),new re(i,r),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){let c=new No(e,t,i,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fh=class n extends Pt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ht(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new re,p=new C,x=new C,g=new C,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(x)}for(let _=0;_<=t;_++){let y=i+_*h*r,b=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=l[3*E+0]*b,D=l[3*E+1],v=l[3*E+0]*R;c.push(A,D,v)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let b=y+_*e.length,R=b,E=b+e.length,A=b+e.length+1,D=b+1;s.push(R,E,D),s.push(A,D,E)}this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ul=class n extends Fh{constructor(e=1,t=1,i=4,r=8){let s=new zh;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},dl=class n extends Pt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new C,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ji=class n extends Pt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],x=0,g=[],m=i/2,f=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function _(){let b=new C,R=new C,E=0,A=(t-e)/i;for(let D=0;D<=s;D++){let v=[],w=D/s,U=w*(t-e)+e;for(let G=0;G<=r;G++){let Z=G/r,L=Z*l+a,O=Math.sin(L),W=Math.cos(L);R.x=U*O,R.y=-w*i+m,R.z=U*W,u.push(R.x,R.y,R.z),b.set(O,A,W).normalize(),d.push(b.x,b.y,b.z),p.push(Z,1-w),v.push(x++)}g.push(v)}for(let D=0;D<r;D++)for(let v=0;v<s;v++){let w=g[v][D],U=g[v+1][D],G=g[v+1][D+1],Z=g[v][D+1];h.push(w,U,Z),h.push(U,G,Z),E+=6}c.addGroup(f,E,0),f+=E}function y(b){let R=x,E=new re,A=new C,D=0,v=b===!0?e:t,w=b===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),x++;let U=x;for(let G=0;G<=r;G++){let L=G/r*l+a,O=Math.cos(L),W=Math.sin(L);A.x=v*W,A.y=m*w,A.z=v*O,u.push(A.x,A.y,A.z),d.push(0,w,0),E.x=O*.5+.5,E.y=W*.5*w+.5,p.push(E.x,E.y),x++}for(let G=0;G<r;G++){let Z=R+G,L=U+G;b===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),D+=3}c.addGroup(f,D,b===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ei=class n extends Ji{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kh=class n extends Pt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new C,b=new C,R=new C;for(let E=0;E<t.length;E+=3)p(t[E+0],y),p(t[E+1],b),p(t[E+2],R),l(y,b,R,_)}function l(_,y,b,R){let E=R+1,A=[];for(let D=0;D<=E;D++){A[D]=[];let v=_.clone().lerp(b,D/E),w=y.clone().lerp(b,D/E),U=E-D;for(let G=0;G<=U;G++)G===0&&D===E?A[D][G]=v:A[D][G]=v.clone().lerp(w,G/U)}for(let D=0;D<E;D++)for(let v=0;v<2*(E-D)-1;v++){let w=Math.floor(v/2);v%2===0?(d(A[D][w+1]),d(A[D+1][w]),d(A[D][w])):(d(A[D][w+1]),d(A[D+1][w+1]),d(A[D+1][w]))}}function c(_){let y=new C;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(_),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function h(){let _=new C;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let b=m(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;o.push(b,1-R)}x(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],b=o[_+2],R=o[_+4],E=Math.max(y,b,R),A=Math.min(y,b,R);E>.9&&A<.1&&(y<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function p(_,y){let b=_*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function x(){let _=new C,y=new C,b=new C,R=new C,E=new re,A=new re,D=new re;for(let v=0,w=0;v<s.length;v+=9,w+=6){_.set(s[v+0],s[v+1],s[v+2]),y.set(s[v+3],s[v+4],s[v+5]),b.set(s[v+6],s[v+7],s[v+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),R.copy(_).add(y).add(b).divideScalar(3);let U=m(R);g(E,w+0,_,U),g(A,w+2,y,U),g(D,w+4,b,U)}}function g(_,y,b,R){R<0&&_.x===1&&(o[y]=_.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Bs=class n extends kh{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},$i=class n extends Pt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/r,p=new C,x=new re;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){let f=s+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let g=0;g<r;g++){let m=g*(i+1);for(let f=0;f<i;f++){let _=f+m,y=_,b=_+i+1,R=_+i+2,E=_+1;a.push(y,b,E),a.push(b,R,E)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var kr=class n extends Pt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){let _=[],y=f/i,b=0;f===0&&o===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let E=R/t;u.x=-e*Math.cos(r+E*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+E*s)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+b,1-y),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let y=h[f][_+1],b=h[f][_],R=h[f+1][_],E=h[f+1][_+1];(f!==0||o>0)&&p.push(y,b,E),(f!==i-1||l<Math.PI)&&p.push(b,R,E)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var lt=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fn=class extends lt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Na(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cb(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function zp(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function dm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var ji=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends ji{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ms,endingEnd:Ms}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bs:s=e,a=2*t-i;break;case za:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bs:o=e,l=2*i-t;break;case za:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(i-t)/(r-t),g=x*x,m=g*x,f=-d*m+2*d*g-d*x,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,y=(-1-p)*m+(1.5+p)*g+.5*x,b=p*m-p*g;for(let R=0;R!==a;++R)s[R]=f*o[h+R]+_*o[c+R]+y*o[l+R]+b*o[u+R];return s}},fl=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Hh=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&lb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Rc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let x=0;x!==i;++x){let g=t[u+x];if(g!==t[d+x]||g!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Nr;var Qi=class extends kn{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Is;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends kn{};pl.prototype.ValueTypeName="color";var Ti=class extends kn{};Ti.prototype.ValueTypeName="number";var Gh=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Zn=class extends kn{InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.DefaultInterpolation=Nr;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends kn{};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Is;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends kn{};ii.prototype.ValueTypeName="vector";var Br=class{constructor(e,t=-1,i,r=iu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ub(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(kn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=cb(l);l=zp(l,1,h),c=zp(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ti(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=r[u];d||(r[u]=d=[]),d.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,x,g){if(p.length!==0){let m=[],f=[];dm(p,m,f,x),m.length!==0&&g.push(new u(d,m,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)p[d[x].morphTargets[g]]=-1;for(let g in p){let m=[],f=[];for(let _=0;_!==d[x].morphTargets.length;++_){let y=d[x];m.push(y.time),f.push(y.morphTarget===g?1:0)}r.push(new Ti(".morphTargetInfluence["+g+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(ii,p+".position",d,"pos",r),i(Zn,p+".quaternion",d,"rot",r),i(ii,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return pl;case"quaternion":return Zn;case"bool":case"boolean":return Qi;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ub(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hb(n.type);if(n.times===void 0){let t=[],i=[];dm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Vh=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},db=new Vh,Ai=class{constructor(e){this.manager=e!==void 0?e:db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Wh=class extends Error{constructor(e,t){super(e),this.response=t}},Uo=class extends Ai{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:r});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=xi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,x=p!==0,g=0,m=new ReadableStream({start(f){_();function _(){u.read().then(({done:y,value:b})=>{if(y)f.close();else{g+=b.byteLength;let R=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:p});for(let E=0,A=h.length;E<A;E++){let D=h[E];D.onProgress&&D.onProgress(R)}f.enqueue(b),_()}})}}});return new Response(m)}else throw new Wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Xi.add(e,c);let h=xi[e];delete xi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Xh=class extends Ai{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Xi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Ro("img");function l(){h(),Xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var ml=class extends Ai{constructor(e){super(e)}load(e,t,i,r){let s=new en,o=new Xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Hs=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},gl=class extends Hs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rh=new ke,Fp=new C,kp=new C,Oo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qh=class extends Oo{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ls*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xl=class extends Hs{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bp=new ke,yo=new C,sh=new C,Yh=class extends Oo{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),sh.copy(i.position),sh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sh),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),Bp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bp)}},Gs=class extends Hs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kh=class extends Oo{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var tr=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yl=class extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Xi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Xi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(e,l),s.manager.itemStart(e)}};var _l=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hp(){return(typeof performance>"u"?Date:performance).now()}var Zh=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Qt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;Qt.multiplyQuaternionsFlat(e,o,e,t,e,i),Qt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},lu="\\[\\]\\.:\\/",fb=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",pb="[^"+lu.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",cu),gb=/(WCOD+)?/.source.replace("WCOD",pb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),yb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),_b=new RegExp("^"+mb+gb+xb+yb+"$"),vb=["material","materials","bones","map"],Jh=class{constructor(e,t,i){let r=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){let t=_b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);vb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Jh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $h=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ms,endingEnd:Ms};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=D0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case U0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case iu:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===N0;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===nu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=bs,r.endingEnd=bs):(e?r.endingStart=this.zeroSlopeAtStart?bs:Ms:r.endingStart=za,t?r.endingEnd=this.zeroSlopeAtEnd?bs:Ms:r.endingEnd=za)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}},Mb=new Float32Array(1),Hr=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=r[u],p=d.name,x=h[p];if(x!==void 0)++x.referenceCount,o[u]=x;else{if(x=o[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,p));continue}let g=t&&t._propertyBindings[u].binding.parsedPath;x=new Zh(pt.create(i,p,g),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,p),o[u]=x}a[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new fl(new Float32Array(2),new Float32Array(2),1,Mb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Br.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=iu),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new $h(this,o,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?Br.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function hu(n,e){if(e===jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===zo||e===Ml){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===zo)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var qs=class extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=tr.extractUrlBase(e);o=tr.resolveURL(c,this.path)}else o=tr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Uo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xm){try{o[tt.KHR_BINARY_GLTF]=new Iu(e)}catch(u){r&&r(u);return}s=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new mu;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Lu(s,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Du;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Nu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function bb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gs(h),c.distance=u;break;case"spot":c=new xl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ir(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},mu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,i){let r=[];e.color=new ye(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,dt))}return Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Mu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Su=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Tu=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Au=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ru=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cu=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}},Pu=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let x of u){let g=new ke,m=new C,f=new Qt,_=new C(1,1,1),y=new Fr(x.geometry,x.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,g.compose(m,f,_));for(let b in l)if(b==="_COLOR_0"){let R=l[b];y.instanceColor=new zr(R.array,R.itemSize,R.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&x.geometry.setAttribute(b,l[b]);vt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},xm="glTF",Fo=12,fm={JSON:1313821514,BIN:5130562},Iu=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Fo,s=new DataView(e,Fo),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===fm.JSON){let c=new Uint8Array(e,Fo+o,a);this.content=i.decode(c)}else if(l===fm.BIN){let c=Fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Ou[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ou[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],p=Xs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(p){for(let x in p.attributes){let g=p.attributes[x],m=l[x];m!==void 0&&(g.normalized=m)}u(p)},a,c,Wt,d)})})}},Du=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Nu=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},El=class extends ji{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-t,u=(i-t)/h,d=u*u,p=d*u,x=e*c,g=x-c,m=-2*p+3*d,f=p-d,_=1-m,y=f-d+u;for(let b=0;b!==a;b++){let R=o[g+b+a],E=o[g+b+l]*h,A=o[x+b+a],D=o[x+b]*h;s[b]=_*R+y*E+m*A+f*D}return s}},Sb=new Qt,Uu=class extends El{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return Sb.fromArray(s).normalize().toArray(s),s}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pm={9728:Bt,9729:xn,9984:Oa,9985:eu,9986:_o,9987:Zi},mm={33071:Pn,33648:To,10497:Dr},uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wb={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Is},du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Eb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new lt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),n.DefaultMaterial}function Gr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Tb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(r){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=u),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Ab(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rb(n){let e,t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fu(t.attributes):e=n.indices+":"+fu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+fu(n.targets[i]);return e}function fu(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function zu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Pb=new ke,Fu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new ml(this.options.manager):this.textureLoader=new yl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Gr(s,a,r),ir(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(tr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=uu[r.type],a=Xs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Vt(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=uu[r.type],c=Xs[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,x=r.normalized===!0,g,m;if(p&&p!==u){let f=Math.floor(d/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,y=t.cache.get(_);y||(g=new c(a,f*p,r.count*p/h),y=new Os(g,p/h),t.cache.add(_,y)),m=new Ur(y,l,d%p/h,x)}else a===null?g=new c(r.count*l):g=new c(a,d,r.count*l),m=new Vt(g,l,x);if(r.sparse!==void 0){let f=uu.SCALAR,_=Xs[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,R=new _(o[1],y,r.sparse.count*f),E=new c(o[2],b,r.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=R.length;A<D;A++){let v=R[A];if(m.setX(v,E[A*l]),l>=2&&m.setY(v,E[A*l+1]),l>=3&&m.setZ(v,E[A*l+2]),l>=4&&m.setW(v,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=pm[d.magFilter]||xn,h.minFilter=pm[d.minFilter]||Zi,h.wrapS=mm[d.wrapS]||Dr,h.wrapT=mm[d.wrapT]||Dr,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){let m=new en(g);m.needsUpdate=!0,d(m)}),t.load(tr.resolveURL(u,s.path),x,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||Cb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Do,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Lo,Mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return lt}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=r[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=$t);let h=s.alphaMode||du.OPAQUE;if(h===du.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===du.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new re(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==on){let u=s.emissiveFactor;a.emissive=new ye().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,dt)),Promise.all(c).then(function(){let u=new o(a);return s.name&&(u.name=s.name),ir(u,s),t.associations.set(u,{materials:e}),s.extensions&&Gr(r,u,s),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Rb(c),u=r[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gm(new Pt,c,t),r[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Eb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[p],f,_=c[p];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new nl(g,_):new ve(g,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?f.geometry=hu(f.geometry,Ml):m.mode===Bn.TRIANGLE_FAN&&(f.geometry=hu(f.geometry,zo));else if(m.mode===Bn.LINES)f=new rl(g,_);else if(m.mode===Bn.LINE_STRIP)f=new Fs(g,_);else if(m.mode===Bn.LINE_LOOP)f=new sl(g,_);else if(m.mode===Bn.POINTS)f=new ol(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Ab(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),ir(f,s),m.extensions&&Gr(r,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Gr(r,u[0],s),u[0];let d=new Ut;s.extensions&&Gr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,x=u.length;p<x;p++)d.add(u[p]);return d})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(Jn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Us(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new il(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){let p=r.channels[u],x=r.samplers[p.sampler],g=p.target,m=g.node,f=r.parameters!==void 0?r.parameters[x.input]:x.input,_=r.parameters!==void 0?r.parameters[x.output]:x.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(x),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],x=u[2],g=u[3],m=u[4],f=[];for(let _=0,y=d.length;_<y;_++){let b=d[_],R=p[_],E=x[_],A=g[_],D=m[_];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let v=i._createAnimationTracks(b,R,E,A,D);if(v)for(let w=0;w<v.length;w++)f.push(v[w])}return new Br(s,void 0,f)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Pb)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Io:c.length>1?h=new Ut:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),ir(h,s),s.extensions&&Gr(i,h,s),s.matrix!==void 0){let u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Ut;i.name&&(s.name=r.createUniqueName(i.name)),ir(s,i),i.extensions&&Gr(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of r.associations)(d instanceof Mn||d instanceof en)&&u.set(d,p);return h.traverse(d=>{let p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];nr[s.path]===nr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(nr[s.path]){case nr.weights:c=Ti;break;case nr.rotation:c=Zn;break;case nr.position:case nr.scale:c=ii;break;default:switch(i.itemSize){case 1:c=Ti;break;case 2:case 3:default:c=ii;break}break}let h=r.interpolation!==void 0?wb[r.interpolation]:Nr,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){let x=new c(l[d]+"."+nr[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=zu(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Zn?Uu:El;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ib(n,e,t){let i=e.attributes,r=new yn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=zu(Xs[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new C,l=new C;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){let g=zu(Xs[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new In;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function gm(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Ou[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return at.workingColorSpace!==Wt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ir(n,e),Ib(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Tb(n,e.targets,t):n})}function Tl(n){let e=new Map,t=new Map,i=n.clone();return ym(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function ym(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)ym(n.children[i],e.children[i],t)}var Ys=(n,e,t)=>n<e?e:n>t?t:n;var ku=Math.PI*2,Bu=(n,e,t,i)=>Math.hypot(n-t,e-i);function ko(n,e){let t=(e-n)%ku;return t>Math.PI&&(t-=ku),t<-Math.PI&&(t+=ku),t}function Lb(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Hu=Lb(Date.now()&4294967295);var Vr=()=>Hu(),Gu=(n,e)=>n+(e-n)*Hu();var Vu=n=>Hu()<n;var ot={x0:-46,x1:46,z0:-34,z1:30,t:1.3,h:4.2},sr={x:46,z:0,half:3},bn={x0:-80,x1:500,z0:-170,z1:330},Wr=[[232,-170],[234,-60],[238,20],[236,62],[240,110],[248,170],[262,330]],_n={x0:226,x1:246,z:62,w:6},Go={main:[[46,0],[80,0],[122,0],[150,8],[170,26],[190,42],[214,56],[236,62],[262,74],[292,100],[326,136],[360,180],[384,224],[398,255]],stonehollow:[[150,8],[170,-22],[190,-52],[208,-78],[222,-92]],ashwood:[[326,136],[314,160],[304,182]],lumber:[[70,-2],[64,-30],[58,-56],[56,-66]],north:[[122,0],[140,-40],[150,-100],[146,-165]]},Db=[{n:"BLACKMERE KEEP",x0:385,x1:475,z0:220,z1:290},{n:"ASHWOOD CAMP",x0:280,x1:330,z0:160,z1:210},{n:"KINGSBRIDGE",x0:212,x1:256,z0:40,z1:84},{n:"STONEHOLLOW",x0:196,x1:245,z0:-115,z1:-70},{n:"MILLBROOK",x0:160,x1:212,z0:8,z1:70},{n:"LOWER VILLAGE & FARMS",x0:48,x1:140,z0:-70,z1:50},{n:"ROYAL COURT",x0:-9,x1:9,z0:-9,z1:9},{n:"BARRACKS & TRAINING YARD",x0:-47,x1:-12,z0:-35,z1:31},{n:"GREAT HALL & KITCHENS",x0:-13,x1:27,z0:12,z1:31},{n:"MARKET & MAIN GATE",x0:24,x1:47,z0:-20,z1:12},{n:"ROYAL CASTLE",x0:-47,x1:47,z0:-35,z1:31},{n:"THE ROYAL ROAD",x0:-1e4,x1:1e4,z0:-1e4,z1:1e4}],Wu=(n,e)=>{for(let t of Db)if(n>=t.x0&&n<=t.x1&&e>=t.z0&&e<=t.z1)return t.n;return"THE WILDS"},rr=.5,Nb=1.25,or=[],$n={},Ub={red:8004913,brown:5980208,slate:4870232,thatch:10521170,green:3099194,black:2763568};function Tt(n){let e={roof:"red",wall:12167562,district:"castle",faction:"crown",h:3.2,...n};e.roofColor=Ub[e.roof]??e.roof;let t=e.door,i=Nb,r={N:{x:t.at,z:e.z0},S:{x:t.at,z:e.z1},W:{x:e.x0,z:t.at},E:{x:e.x1,z:t.at}}[t.side],s={N:[0,-1],S:[0,1],W:[-1,0],E:[1,0]}[t.side];t.x=r.x,t.z=r.z,t.nx=s[0],t.nz=s[1],t.out={x:r.x+s[0]*2.2,z:r.z+s[1]*2.2},t.in={x:r.x-s[0]*1.6,z:r.z-s[1]*1.6},e.cx=(e.x0+e.x1)/2,e.cz=(e.z0+e.z1)/2,e.w=e.x1-e.x0,e.d=e.z1-e.z0;let o=[],a=(c,h,u,d)=>{u-c>.05&&d-h>.05&&o.push({x1:c,z1:h,x2:u,z2:d})},l=(c,h,u,d,p,x)=>{if(t.side!==c){a(h,u,d,p);return}x?(a(h,u,t.at-i,p),a(t.at+i,u,d,p)):(a(h,u,d,t.at-i),a(h,t.at+i,d,p))};return l("N",e.x0,e.z0,e.x1,e.z0+rr,!0),l("S",e.x0,e.z1-rr,e.x1,e.z1,!0),l("W",e.x0,e.z0+rr,e.x0+rr,e.z1-rr,!1),l("E",e.x1-rr,e.z0+rr,e.x1,e.z1-rr,!1),e.walls=o,e.spots=zb(e),or.push(e),$n[e.id]=e,e}function Bo(n,e,t=1.55){let i=[],r=[n.z0+1.7,n.z1-1.7];for(let s=0;s<2&&i.length<e;s++)for(let o=n.x0+1.3;o<=n.x1-1.3&&i.length<e;o+=t)(n.door.side==="N"&&s===0||n.door.side==="S"&&s===1)&&Math.abs(o-n.door.at)<1.7||i.push({x:o,z:r[s],yaw:s===0?Math.PI:0,y:.5});if(i.length<e){let s=n.cz;for(let o=n.x0+2.4;o<=n.x1-2.4&&i.length<e;o+=t)i.push({x:o,z:s,yaw:0,y:.5})}return i}function Ob(n,e,t,i){let r=[],s=[];for(let o of e){let a=n.cx-t/2;r.push({x:n.cx,z:o,w:t,d:1.1});for(let l=a+.6;l<a+t;l+=1.05)s.push({x:l,z:o-1,yaw:0,y:.42,sit:1}),s.push({x:l,z:o+1,yaw:Math.PI,y:.42,sit:1})}return{tables:r,seats:s}}function zb(n){let e={},t=n.cx,i=n.cz,r=(s,o,a=0,l)=>({x:n.x0+s,z:n.z0+o,yaw:a,...l});switch(n.kind){case"house":e.bed=Bo(n,n.beds||2),e.home=[{x:t,z:i,yaw:0}],e.seat=[{x:t-1,z:i+.4,yaw:Math.PI/2,y:.42,sit:1},{x:t+1,z:i+.4,yaw:-Math.PI/2,y:.42,sit:1}],e.work=[{x:t,z:i-.6,yaw:0}];break;case"barracks":case"guardQ":e.bed=Bo(n,n.beds||12,1.5),e.rest=[{x:t,z:i,yaw:0},{x:t-2,z:i,yaw:1},{x:t+2,z:i,yaw:-1}],e.maint=[{x:t-1,z:i,yaw:0},{x:t+1,z:i+.3,yaw:0}];break;case"hall":case"mess":case"tavern":{let s=n.kind==="hall"?[n.z0+3.3,n.z1-3.3]:n.kind==="mess"?[n.cz-1.6,n.cz+1.6]:[n.cz],o=Ob(n,s,Math.min(n.w-4,n.kind==="hall"?18:8));n.tables=o.tables,e.seat=o.seats,e.stand=[{x:t,z:i,yaw:0},{x:t-3,z:i,yaw:1},{x:t+3,z:i,yaw:-1},{x:t,z:i+1.5,yaw:3}],n.kind==="tavern"&&(e.bar=[{x:n.x1-1.8,z:n.z0+1.8,yaw:Math.PI/2}]);break}case"kitchen":e.cook=[r(2,2,0),r(4,2,0),r(6,2,0)],e.prep=[r(3,n.d-2.2,Math.PI),r(5.5,n.d-2.2,Math.PI)],e.store=[r(n.w-1.8,n.d/2,-Math.PI/2)],e.stand=[{x:t,z:i+.5,yaw:0}],n.stoves=[r(2,1.1),r(4,1.1),r(6,1.1)];break;case"smith":e.forge=[r(2,2,0)],e.anvil=[r(4,3,Math.PI/2),r(4,4.6,Math.PI/2)],e.stand=[{x:t,z:i+1,yaw:0}],e.store=[r(n.w-1.5,n.d-1.5,0)];break;case"stable":e.tend=[r(1.6,2,0),r(1.6,4,0),r(1.6,6,0)],e.stand=[{x:t+1,z:i,yaw:0}],e.horse=[r(1.2,3,Math.PI/2),r(1.2,6.5,Math.PI/2)];break;case"chapel":{let s=[];for(let o=0;o<3;o++)for(let a of[-1.4,1.4])s.push({x:t+a,z:n.z0+4.5+o*1.5,yaw:Math.PI,y:.4,sit:1});e.pew=s,e.altar=[{x:t,z:n.z0+1.8,yaw:0}],e.stand=[{x:t,z:i+1.2,yaw:Math.PI}],e.tend=[{x:n.x1-1.8,z:n.z1-2,yaw:0}];break}case"treasury":e.desk=[r(2,2.2,0),r(n.w-2,2.2,0)],e.stand=[{x:t,z:i+.5,yaw:0}],e.chest=[r(n.w/2,n.d-1.5,Math.PI)];break;case"granary":e.store=[r(3,3,0),r(n.w-3,3,0),r(n.w/2,n.d-3,0)],e.stand=[{x:t,z:i,yaw:0}];break;case"apartments":e.bed=[{x:n.x0+3.4,z:n.z0+2.6,yaw:Math.PI,y:.55}],e.desk=[r(n.w-3,2.2,0)],e.stand=[{x:t,z:i+1,yaw:0}],e.wardrobe=[r(n.w-2,n.d-2,0)];break;case"war":e.map=[r(n.w/2-1.4,n.d/2,Math.PI/2),r(n.w/2+1.4,n.d/2,-Math.PI/2),r(n.w/2,n.d/2-1.2,0)],e.desk=[r(2,2,0)],e.stand=[{x:t,z:i,yaw:0}];break;case"armory":e.rack=[r(1.8,1.8,0),r(3.6,1.8,0),r(5.2,1.8,0)],e.stand=[{x:t,z:i,yaw:0}],e.store=[r(1.6,n.d-1.6,0)];break;case"mill":e.mill=[r(2.3,2.3,0)],e.stand=[{x:t,z:i,yaw:0}],e.store=[r(n.w-2,n.d-2,0)];break;case"keep":e.throne=[{x:n.x0+2.6,z:n.cz,yaw:Math.PI/2}],e.stand=[{x:t,z:i,yaw:0}],e.bed=Bo(n,4,2),e.seat=[{x:t,z:i-2,yaw:Math.PI,y:.42,sit:1}];break;case"tower":e.stand=[{x:n.cx,z:n.cz,yaw:0}],e.bed=Bo(n,3,1.5);break;default:e.stand=[{x:t,z:i,yaw:0}],e.bed=Bo(n,n.beds||0)}return e}Tt({id:"greatHall",kind:"hall",name:"Great Hall",x0:-12,z0:13,x1:12,z1:23,door:{side:"N",at:0},roof:"red"});Tt({id:"kitchens",kind:"kitchen",name:"Kitchens & Bakery",x0:15,z0:14,x1:24,z1:22,door:{side:"N",at:20},roof:"brown"});Tt({id:"apartments",kind:"apartments",name:"Royal Apartments",x0:-12,z0:-23,x1:12,z1:-13,door:{side:"S",at:0},roof:"red",h:3.6});Tt({id:"treasury",kind:"treasury",name:"Treasury",x0:14,z0:-12,x1:22,z1:-4,door:{side:"W",at:-8},roof:"slate",wall:10130308});Tt({id:"granary",kind:"granary",name:"Royal Granary",x0:16,z0:-32,x1:28,z1:-22,door:{side:"S",at:22},roof:"thatch",wall:11048040});Tt({id:"chapel",kind:"chapel",name:"Chapel & Infirmary",x0:34,z0:-32,x1:44,z1:-22,door:{side:"S",at:39},roof:"slate",wall:13090990,h:4.2});Tt({id:"guardQ",kind:"guardQ",name:"Royal Guard Quarters",x0:-31,z0:-26,x1:-19,z1:-16,door:{side:"E",at:-21},roof:"red",beds:18});Tt({id:"armory",kind:"armory",name:"Armory",x0:-44,z0:-26,x1:-37,z1:-18,door:{side:"E",at:-22},roof:"slate",wall:9077879});Tt({id:"warRoom",kind:"war",name:"Marshal's War Room",x0:-18,z0:-33,x1:-8,z1:-27,door:{side:"S",at:-13},roof:"brown"});Tt({id:"barracksA",kind:"barracks",name:"Garrison Barracks I",x0:-44,z0:-12,x1:-30,z1:-4,door:{side:"E",at:-8},roof:"brown",beds:16});Tt({id:"barracksB",kind:"barracks",name:"Garrison Barracks II",x0:-44,z0:0,x1:-30,z1:8,door:{side:"E",at:4},roof:"brown",beds:16});Tt({id:"garrisonMess",kind:"mess",name:"Garrison Mess",x0:-25,z0:-10,x1:-15,z1:-2,door:{side:"S",at:-20},roof:"brown"});Tt({id:"smithy",kind:"smith",name:"Royal Smithy",x0:29,z0:12,x1:37,z1:20,door:{side:"N",at:33},roof:"slate",wall:9405816});Tt({id:"stable",kind:"stable",name:"Royal Stable",x0:52,z0:-15,x1:64,z1:-6,door:{side:"S",at:58},roof:"brown",wall:10123861});Tt({id:"lodgings",kind:"barracks",name:"Servants Lodgings",x0:14,z0:-21,x1:25,z1:-14,door:{side:"S",at:19.5},roof:"brown",wall:12102287,beds:14});var Pl=[];for(let[n,e]of[[-46,-34],[46,-34],[-46,30],[46,30],[0,-34],[0,30],[-46,-2],[46,-16],[46,14]])Pl.push({x:n,z:e,r:3.4,h:8.5,name:"tower"});var Fb=[{x:46,z:-6.4,r:3.4},{x:46,z:6.4,r:3.4}],kb=0,_m=(n,e,t,i,r,s,o={})=>Tt({id:"vh"+kb++,kind:"house",name:"Cottage",district:"village",x0:n,z0:e,x1:t,z1:i,door:{side:r,at:s},roof:"thatch",wall:12891535,h:2.6,beds:2,...o});for(let n of[70,79,88,97])_m(n,-12,n+6.5,-6,"S",n+3.2);for(let n of[68,86,95,104])_m(n,6,n+6.5,12,"N",n+3.2);Tt({id:"tavern",kind:"tavern",name:"The Gilded Boar",district:"village",x0:106,z0:-15,x1:118,z1:-6,door:{side:"S",at:112},roof:"brown",wall:11903612,h:3.2});Tt({id:"lumberCabin",kind:"house",name:"Woodcutters Lodge",district:"village",x0:50,z0:-70,x1:60,z1:-63,door:{side:"S",at:55},roof:"thatch",wall:9071176,h:2.6,beds:4});var Bb=[{x:80,z:4.4,r:1.1},{x:35,z:-6.5,r:1.2}],Xu=[{id:"f1",x0:66,z0:18,x1:96,z1:40},{id:"f2",x0:100,z0:18,x1:130,z1:40},{id:"f3",x0:66,z0:-42,x1:96,z1:-20},{id:"f4",x0:100,z0:-42,x1:130,z1:-22}],Xr=(n,e,t,i,r,s,o,a="millbrook",l={})=>Tt({id:n,kind:"house",name:"Cottage",district:a,x0:e,z0:t,x1:i,z1:r,door:{side:s,at:o},roof:"thatch",wall:12891535,h:2.6,beds:2,...l});Xr("mb1",168,14,174.5,20,"S",171);Xr("mb2",178,-2,184.5,4,"S",181);Xr("mb3",192,52,198.5,58,"N",195);Xr("mb4",180,54,186.5,60,"N",183);Tt({id:"mill",kind:"mill",name:"Millbrook Mill",district:"millbrook",x0:212,z0:28,x1:222,z1:36,door:{side:"S",at:217},roof:"brown",wall:11641210,h:4});Tt({id:"bridgeTower",kind:"tower",name:"Kingsbridge Watch",district:"bridge",x0:216,z0:46,x1:224,z1:54,door:{side:"S",at:220},roof:"slate",wall:9407104,h:6,beds:4});Xr("sh1",200,-100,206,-95,"S",203,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Xr("sh2",212,-108,218,-103,"W",-105,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Xr("sh3",222,-84,228,-79,"W",-82,"stonehollow",{faction:"guild",roof:"slate",wall:9209722});Tt({id:"smelter",kind:"smith",name:"Stonehollow Smelter",district:"stonehollow",faction:"guild",x0:206,z0:-88,x1:214,z1:-82,door:{side:"E",at:-85},roof:"black",wall:7104093});var Cl=[[292,182],[300,192],[310,180],[296,174],[312,194]];var Oe={x0:398,z0:231,x1:462,z1:279,gate:{x:398,z:255}},Il=n=>Tt({district:"blackmere",faction:"valemar",wall:5922147,roof:"green",...n});Il({id:"bmKeep",kind:"keep",name:"Blackmere Keep",x0:440,z0:244,x1:458,z1:266,door:{side:"W",at:255},roof:"black",h:8});Il({id:"bmBarracks",kind:"barracks",name:"Valemar Barracks",x0:404,z0:262,x1:418,z1:274,door:{side:"N",at:411},beds:22,h:3.4});Il({id:"bmHall",kind:"mess",name:"Valemar Mess",x0:422,z0:236,x1:434,z1:246,door:{side:"S",at:428},h:3.4});Il({id:"bmSmith",kind:"smith",name:"Blackmere Forge",x0:424,z0:264,x1:434,z1:274,door:{side:"N",at:429}});var qu=[[398,231],[462,231],[398,279],[462,279],[430,231],[430,279]].map(([n,e])=>({x:n,z:e,r:3.2,h:9,name:"bm"})),Hb=[{x:398,z:249.6,r:3.2},{x:398,z:260.4,r:3.2}],vm=[],Ot=(n,e,t,i,r)=>vm.push({x1:n,z1:e,x2:t,z2:i,tag:r}),Hn=ot.t;Ot(ot.x0,ot.z0,ot.x1,ot.z0+Hn,"wall");Ot(ot.x0,ot.z1-Hn,ot.x1,ot.z1,"wall");Ot(ot.x0,ot.z0,ot.x0+Hn,ot.z1,"wall");Ot(ot.x1-Hn,ot.z0,ot.x1,-sr.half,"wall");Ot(ot.x1-Hn,sr.half,ot.x1,ot.z1,"wall");for(let n of Pl)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");for(let n of Fb)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");Ot(Oe.x0,Oe.z0,Oe.x1,Oe.z0+Hn,"wall");Ot(Oe.x0,Oe.z1-Hn,Oe.x1,Oe.z1,"wall");Ot(Oe.x1-Hn,Oe.z0,Oe.x1,Oe.z1,"wall");Ot(Oe.x0,Oe.z0,Oe.x0+Hn,Oe.gate.z-sr.half,"wall");Ot(Oe.x0,Oe.gate.z+sr.half,Oe.x0+Hn,Oe.z1,"wall");for(let n of qu)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");for(let n of Hb)Ot(n.x-n.r*.8,n.z-n.r*.8,n.x+n.r*.8,n.z+n.r*.8,"tower");Ot(-4.2,-7.8,4.2,-3.2,"palace");Ot(-.75,5.45,.75,6.45,"throne");for(let n of Bb)Ot(n.x-n.r,n.z-n.r,n.x+n.r,n.z+n.r,"well");var Ll=[[29,-13],[35,-13],[41,-13],[29,-7],[41,-7],[29,7],[35,7]];for(let[n,e]of Ll)Ot(n-1.5,e-.9,n+1.5,e+.9,"stall");var Mm=[[-34,16],[-30,16],[-26,16],[-22,16],[-34,22],[-30,22],[-26,22],[-22,22]];for(let[n,e]of Mm)Ot(n-.4,e-.4,n+.4,e+.4,"dummy");var bm=[[-38,26],[-32,26],[-26,26]];for(let[n,e]of bm)Ot(n-.7,e-.3,n+.7,e+.3,"butt");for(let e=0;e<Wr.length-1;e++){let[t,i]=Wr[e],[r,s]=Wr[e+1],o=Math.ceil(Math.hypot(r-t,s-i)/6);for(let a=0;a<o;a++){let l=(a+.5)/o,c=t+(r-t)*l,h=i+(s-i)*l;Math.abs(h-_n.z)<_n.w*.5+1.5&&c>_n.x0-6&&c<_n.x1+6||Ot(c-4.2,h-3.2,c+4.2,h+3.2,"water")}}var Gb=()=>{let n=[...vm];for(let e of or)for(let t of e.walls)n.push({...t,tag:"bwall"});return n},Ks=Gb(),Al={x1:ot.x1-Hn,z1:-sr.half,x2:ot.x1,z2:sr.half,tag:"gate"},Rl={x1:Oe.x0,z1:Oe.gate.z-sr.half,x2:Oe.x0+Hn,z2:Oe.gate.z+sr.half,tag:"gate"},Lt=(n,e,t,i,r,s=0,o)=>Array.from({length:t},(a,l)=>({x:n+i*l,z:e+r*l,yaw:s,...o})),Ho={plaza:{x:0,z:3,spots:{petition:Lt(-2,1.2,5,1,0,0),wait:[...Lt(-5,4,5,2.5,0,0),...Lt(-4,6.2,4,2.6,0,0)],stand:Lt(-6,-1,4,4,0,0),podium:[{x:0,z:1.4,yaw:Math.PI}],guard:[{x:-2.7,z:-1.2,yaw:0},{x:2.7,z:-1.2,yaw:0},{x:-1.6,z:.9,yaw:0},{x:1.6,z:.9,yaw:0},{x:-3.6,z:2.6,yaw:0},{x:3.6,z:2.6,yaw:0}],servant:[{x:-6.2,z:-5,yaw:0},{x:6.2,z:-5,yaw:0}],sweep:Lt(-6,4.5,6,2.4,.5,0)}},archway:{x:0,z:9.5,spots:{guard:[{x:-1.6,z:7.6,yaw:Math.PI},{x:1.6,z:7.6,yaw:Math.PI}]}},aptDoor:{x:0,z:-11.8,spots:{guard:[{x:-1.6,z:-11.6,yaw:0},{x:1.6,z:-11.6,yaw:0}]}},treasuryDoor:{x:12,z:-8,spots:{guard:[{x:12.4,z:-9.6,yaw:-1.6},{x:12.4,z:-6.4,yaw:-1.6}]}},gate:{x:41,z:0,spots:{guard:[{x:43,z:-1.9,yaw:1.57},{x:43,z:1.9,yaw:1.57},{x:48.6,z:-2.4,yaw:1.57},{x:48.6,z:2.4,yaw:1.57},{x:41.4,z:-4.6,yaw:1.57},{x:41.4,z:4.6,yaw:1.57}],defend:Lt(52,-6,6,0,2.4,1.57)}},market:{x:35,z:-2,spots:{stall:Ll.map(([n,e])=>({x:n,z:e+(e<0?-1.4:1.4),yaw:e<0?0:Math.PI,stall:1})),browse:[{x:32,z:-4,yaw:0},{x:38,z:-3,yaw:1},{x:32,z:3.5,yaw:2},{x:38,z:4,yaw:3},{x:34,z:0,yaw:0},{x:40,z:-10,yaw:0},{x:31,z:-10,yaw:0}],well:[{x:35,z:-4.6,yaw:0}],stand:[{x:33,z:-1,yaw:1}]}},yard:{x:-26,z:10,spots:{drill:Lt(-38,11,6,4,0,0).concat(Lt(-38,13.5,6,4,0,0)),dummy:Mm.map(([n,e])=>({x:n,z:e+1.1,yaw:Math.PI})),butt:bm.map(([n,e])=>({x:n,z:e-4,yaw:0})),muster:Lt(-36,18,8,3.2,0,0).concat(Lt(-36,20,8,3.2,0,0)),rest:Lt(-38,29,5,4,0,0)}},wall:{x:0,z:-31,spots:{post:[]}},fields:{x:96,z:0,spots:{}},villageSquare:{x:88,z:0,spots:{stand:Lt(76,-2,8,3,0,0),well:[{x:80,z:4.4,yaw:0}],play:Lt(74,3,10,3,0,0)}},mbfield:{x:185,z:28,spots:{hoe:Lt(166,24,10,4,0,0).concat(Lt(166,32,10,4,0,0))}},lumber:{x:52,z:-62,spots:{chop:Lt(40,-72,5,4,-1.4,0),pile:[{x:56,z:-60,yaw:0}]}},roadWatch:{x:60,z:0,spots:{}},bridge:{x:236,z:62,spots:{post:[{x:226,z:57,yaw:Math.PI/2},{x:226,z:67,yaw:Math.PI/2},{x:246,z:57,yaw:-Math.PI/2},{x:246,z:67,yaw:-Math.PI/2},{x:236,z:59.4,yaw:0},{x:236,z:64.6,yaw:Math.PI}]}},ash:{x:302,z:184,spots:{fire:Lt(298,186,5,2,0,0,{sit:1,y:.3}),camp:Cl.map(([n,e])=>({x:n+2.4,z:e+1,yaw:0})),sleep:Cl.map(([n,e])=>({x:n,z:e,yaw:0,y:.3}))}},mine:{x:224,z:-96,spots:{dig:Lt(222,-102,3,2,0,0),cart:[{x:216,z:-92,yaw:0}],forge:[{x:210,z:-79,yaw:0}]}},bmGate:{x:392,z:255,spots:{guard:[{x:402,z:251,yaw:-1.57},{x:402,z:259,yaw:-1.57},{x:394,z:251,yaw:-1.57},{x:394,z:259,yaw:-1.57}],defend:Lt(388,247,6,0,3.2,-1.57)}},bmYard:{x:415,z:255,spots:{drill:Lt(408,250,5,3,0,0).concat(Lt(408,254,5,3,0,0)),stand:Lt(420,252,4,3,0,0)}},bmWall:{x:430,z:231,spots:{post:[]}},farmRoad:{x:100,z:0,spots:{}}};for(let n of Xu){let e=[];for(let t=n.x0+2;t<=n.x1-2;t+=4)for(let i=n.z0+2;i<=n.z1-2;i+=4)e.push({x:t,z:i,yaw:0});Ho[n.id]={x:(n.x0+n.x1)/2,z:(n.z0+n.z1)/2,spots:{hoe:e,stand:e}}}{let n=Ho.wall.spots.post,e=ot.h-.5;for(let i=-40;i<=40;i+=10)n.push({x:i,z:ot.z0+.7,yaw:0,y:e}),n.push({x:i,z:ot.z1-.7,yaw:Math.PI,y:e});for(let i=-24;i<=24;i+=12)n.push({x:ot.x0+.7,z:i,yaw:-1.57,y:e});for(let i of[-14,14])n.push({x:ot.x1-.7,z:i,yaw:1.57,y:e});let t=Ho.bmWall.spots.post;for(let i=408;i<=456;i+=12)t.push({x:i,z:Oe.z0+.7,yaw:0,y:e}),t.push({x:i,z:Oe.z1-.7,yaw:Math.PI,y:e});for(let i of[240,270])t.push({x:Oe.x1-.7,z:i,yaw:1.57,y:e})}var Sm=n=>$n[n]?$n[n].spots:Ho[n]?.spots;function wm(n){let e=$n[n];if(e)return{x:e.door.out.x,z:e.door.out.z};let t=Ho[n];return t?{x:t.x,z:t.z}:null}var Ri={castle:[[-6,10],[-8,-10],[-22,-12],[-22,4],[-8,12],[10,12],[26,-2],[40,-8],[24,-2],[8,-12],[0,-12]],walls:[[-38,-30],[0,-30],[38,-30],[40,0],[38,26],[0,26],[-38,26],[-40,0]],road:[[50,4],[90,3],[120,-3],[150,6],[190,40],[222,58],[190,40],[150,6],[90,-3]],village:[[52,3],[70,0],[92,3],[112,-3],[92,-3],[70,3]],border:[[236,62],[262,74],[292,100],[326,136],[292,100],[262,74]],scout:[[236,62],[292,100],[340,150],[372,200],[340,150],[292,100]]};function Zs(n,e,t=0){for(let i of or)if(n>i.x0-t&&n<i.x1+t&&e>i.z0-t&&e<i.z1+t)return i;return null}function Ci(n,e,t=.38,i=!1,r=!1){for(let s of Ks)if(n+t>s.x1&&n-t<s.x2&&e+t>s.z1&&e-t<s.z2)return!0;return!!(i&&n+t>Al.x1&&n-t<Al.x2&&e+t>Al.z1&&e-t<Al.z2||r&&n+t>Rl.x1&&n-t<Rl.x2&&e+t>Rl.z1&&e-t<Rl.z2)}var Ku=22,Vb=["Spring","Summer","Autumn","Winter"],Tm=96,Wb=8;function Dl(){return{ver:3,clock:Wb,realm:{coin:600,debt:0,favor:55,security:62,prosperity:50,renown:10,tax:1,ration:1,farmFocus:1,unrestDays:0},stock:{grain:520,wood:80,iron:36,arms:26},build:{walls:0,granary:0,forge:0,barracks:0,market:0,watchtowers:0,farms:0},ledger:{today:{in:{},out:{}},productionToday:{grain:0,wood:0,iron:0,arms:0,trade:0,meals:0},last:{in:{},out:{},net:0,day:0},hist:[]},guard:{mode:"routine",until:0,recall:0,alarm:0},army:{directive:"routine",until:0,size:0,formation:"column",relay:""},king:{hp:100,maxhp:100,x:0,z:9,yaw:Math.PI,mounted:!1,falls:0,seated:!1,sleeps:0},weather:{type:"clear",until:10,intensity:0},powers:{valemar:{id:"valemar",name:"House Valemar",ruler:"Lord Maren Valemar",seat:"Blackmere Keep",rel:-12,army:34,wealth:520,food:400,aggression:.62,treaties:{},war:!1,vassal:!1,defeated:!1,intel:0,mood:"watchful",cool:0,mobilized:!1,tribute:0},kestrel:{id:"kestrel",name:"House Kestrel",ruler:"Duchess Ilse Kestrel",seat:"Highmoor",rel:8,army:46,wealth:700,food:500,aggression:.25,treaties:{},war:!1,vassal:!1,intel:0,mood:"courteous",cool:0,tribute:0},guild:{id:"guild",name:"Stonehollow Guild",ruler:"Guildmaster Torvik",seat:"Stonehollow",rel:14,army:6,wealth:400,food:200,aggression:0,treaties:{},war:!1,vassal:!1,intel:0,mood:"mercantile",cool:0,tribute:0},ashwood:{id:"ashwood",name:"Ashwood Company",ruler:"Captain Vex",seat:"Ashwood Camp",rel:-8,army:12,wealth:120,food:60,aggression:.5,treaties:{},war:!1,vassal:!1,intel:0,mood:"hungry",cool:0,tribute:0}},war:{state:"peace",host:null,siege:null,campaign:null,lastWar:0,victories:0,defeats:0},events:{pending:[],cool:0,flags:{},petitions:{},seen:{}},court:{queue:[],heard:0,dayHeard:0,unheard:0},goals:{done:{},progress:{}},chronicle:[],stats:{days:1,kills:0,raidsHeld:0,petitions:0,feasts:0,built:0,treaties:0},over:null,actors:{}}}var I=Dl();function Em(n){return I=n,I}var Wo=()=>I.clock%24,an=()=>Math.floor(I.clock/24)+1,Xb=()=>(an()-1)%Tm,Nl=()=>Math.floor(Xb()/24),Zu=()=>Math.floor((an()-1)/Tm)+1,Ul=()=>Vb[Nl()];var Vo={},lr=(n,e)=>((Vo[n]||(Vo[n]=[])).push(e),()=>{Vo[n]=Vo[n].filter(t=>t!==e)}),ar=(n,e)=>{let t=Vo[n];if(t)for(let i of t)try{i(e)}catch(r){console.error("handler",n,r)}};function ri(n,e="note"){I.chronicle.push({day:an(),h:Wo(),msg:n,kind:e}),I.chronicle.length>240&&I.chronicle.shift(),ar("chronicle",n)}function Js(){let n=I.realm;n.coin=Math.max(0,Math.round(n.coin));for(let e of["favor","security","prosperity"])n[e]=Ys(Math.round(n[e]),0,100);n.renown=Ys(n.renown,0,100);for(let e of["grain","wood","iron","arms"])I.stock[e]=Math.max(0,Math.round(I.stock[e]))}function Am(n,e,t){let i=I.ledger.today[n];i[e]=(i[e]||0)+t}function Rm(n,e="Misc"){I.realm.coin+=n,Am("in",e,n)}function Cm(n,e="Misc",t=!1){return!t&&I.realm.coin<n?!1:(I.realm.coin-=n,Am("out",e,n),!0)}function qb(){if(I.clock<I.weather.until)return;let n=Nl(),e=I.weather,t="clear",i=Vr();n===3?t=i<.35?"snow":i<.6?"fog":i<.8?"cloudy":"clear":n===2?t=i<.3?"rain":i<.5?"fog":i<.7?"cloudy":"clear":n===0?t=i<.3?"rain":i<.5?"cloudy":i<.6?"fog":"clear":t=i<.12?"rain":i<.35?"cloudy":"clear",e.type=t,e.intensity=Gu(.5,1),e.until=I.clock+Gu(5,14),ar("weather",t)}var Yu=Math.floor(I.clock),Pm=an();function Ju(n){if(!Number.isFinite(n)||n<=0||I.over)return{hours:0,dayChanged:!1};let e=I.clock,t=an();I.clock+=n/Ku;let i=Math.floor(I.clock);i!==Yu&&(Yu=i,qb(),ar("hour",{hour:Wo(),day:an()}));let r=an(),s=r!==t;return s&&(Pm=r,ar("day",{day:r,previous:t})),{hours:I.clock-e,dayChanged:s}}function Im(){return JSON.parse(JSON.stringify(I))}function $u(n){let e=Dl();if(!n||typeof n!="object")return Em(e);let t=(r,s)=>Number.isFinite(Number(r))?Number(r):s,i={...e,...n};i.ver=e.ver,i.clock=t(n.clock,e.clock),i.realm={...e.realm,...n.realm},i.stock={...e.stock,...n.stock},i.build={...e.build,...n.build},i.guard={...e.guard,...n.guard},i.army={...e.army,...n.army},i.king={...e.king,...n.king},i.weather={...e.weather,...n.weather},i.war={...e.war,...n.war},i.ledger={...e.ledger,...n.ledger,today:{...e.ledger.today,...n.ledger?.today,in:{...e.ledger.today.in,...n.ledger?.today?.in},out:{...e.ledger.today.out,...n.ledger?.today?.out}},productionToday:{...e.ledger.productionToday,...n.ledger?.productionToday},last:{...e.ledger.last,...n.ledger?.last},hist:Array.isArray(n.ledger?.hist)?n.ledger.hist:e.ledger.hist},i.events={...e.events,...n.events,flags:{...e.events.flags,...n.events?.flags},petitions:{...e.events.petitions,...n.events?.petitions},seen:{...e.events.seen,...n.events?.seen}},i.court={...e.court,...n.court},i.goals={...e.goals,...n.goals,done:{...e.goals.done,...n.goals?.done},progress:{...e.goals.progress,...n.goals?.progress}},i.stats={...e.stats,...n.stats},i.powers={};for(let[r,s]of Object.entries(e.powers))i.powers[r]={...s,...n.powers?.[r],treaties:{...s.treaties,...n.powers?.[r]?.treaties}};for(let[r,s]of Object.entries(n.powers||{}))i.powers[r]||(i.powers[r]={...s,treaties:{...s.treaties||{}}});return i.realm.coin=Math.max(0,t(i.realm.coin,e.realm.coin)),i.realm.debt=Math.max(0,t(i.realm.debt,0)),i.king.x=t(i.king.x,e.king.x),i.king.z=t(i.king.z,e.king.z),i.king.yaw=t(i.king.yaw,e.king.yaw),Em(i),Yu=Math.floor(I.clock),Pm=an(),I}var cr=16,Yb=.42,St=[],td=new Map;function Bl(n,e){return n*4096+e}Ks.forEach((n,e)=>{for(let t=Math.floor((n.x1-1)/cr);t<=Math.floor((n.x2+1)/cr);t++)for(let i=Math.floor((n.z1-1)/cr);i<=Math.floor((n.z2+1)/cr);i++){let r=Bl(t+100,i+100),s=td.get(r);s||td.set(r,s=[]),s.push(e)}});var ju=0,Lm=new Int32Array(Ks.length);function Hl(n,e,t,i,r=Yb){let s=Math.min(n,t)-r,o=Math.max(n,t)+r,a=Math.min(e,i)-r,l=Math.max(e,i)+r;ju++;for(let c=Math.floor(s/cr);c<=Math.floor(o/cr);c++)for(let h=Math.floor(a/cr);h<=Math.floor(l/cr);h++){let u=td.get(Bl(c+100,h+100));if(u)for(let d of u){if(Lm[d]===ju)continue;Lm[d]=ju;let p=Ks[d],x=p.x1-r,g=p.x2+r,m=p.z1-r,f=p.z2+r;if(o<x||s>g||l<m||a>f)continue;let _=0,y=1,b=t-n,R=i-e,E=!0;for(let[A,D,v,w]of[[n,b,x,g],[e,R,m,f]])if(Math.abs(D)<1e-9){if(A<v||A>w){E=!1;break}}else{let U=(v-A)/D,G=(w-A)/D;if(U>G&&([U,G]=[G,U]),_=Math.max(_,U),y=Math.min(y,G),_>y){E=!1;break}}if(E)return!1}}return!0}function Nm(n,e,t){for(let i of Ks)if(n>i.x1-t&&n<i.x2+t&&e>i.z1-t&&e<i.z2+t)return!0;return!1}function hr(n,e,t,i,r,s){for(let o=n;o<=t;o+=r)for(let a=e;a<=i;a+=r)s&&s(o,a)||Nm(o,a,.9)||St.push({x:o,z:a,r:r*1.55})}var ur=(n,e)=>or.some(t=>n>t.x0-.6&&n<t.x1+.6&&e>t.z0-.6&&e<t.z1+.6);hr(ot.x0+2,ot.z0+3,ot.x1-2,ot.z1-2,4,ur);hr(48,-48,136,48,5,ur);hr(158,-12,232,72,6,(n,e)=>ur(n,e)||Math.abs(n-236)<7);hr(196,-116,234,-68,5,ur);hr(284,164,322,200,5,ur);hr(Oe.x0+2,Oe.z0+3,Oe.x1-2,Oe.z1-2,4,ur);hr(36,-76,66,-52,5,ur);hr(Oe.x0-14,Oe.gate.z-12,Oe.x0,Oe.gate.z+12,4,ur);for(let n in Go){let e=Go[n];for(let t=0;t<e.length-1;t++){let[i,r]=e[t],[s,o]=e[t+1],a=Math.hypot(s-i,o-r),l=Math.max(1,Math.ceil(a/10));for(let c=0;c<=l;c++){let h=c/l,u=i+(s-i)*h,d=r+(o-r)*h;Nm(u,d,.6)||St.push({x:u,z:d,r:15})}}}for(let n of or){let e=n.door;St.push({x:e.out.x,z:e.out.z,r:9},{x:e.x,z:e.z,r:5},{x:e.in.x,z:e.in.z,r:8}),St.push({x:n.cx,z:n.cz,r:Math.max(n.w,n.d)*.75});for(let t=n.x0+1.5;t<n.x1-1;t+=3)for(let i=n.z0+1.5;i<n.z1-1;i+=3)St.push({x:t,z:i,r:5.5})}for(let n=222;n<=250;n+=4)St.push({x:n,z:62,r:8});var qr=St.length,nd=new Map;St.forEach((n,e)=>{let t=Bl(Math.floor(n.x/12)+100,Math.floor(n.z/12)+100),i=nd.get(t);i||nd.set(t,i=[]),i.push(e)});function Um(n,e,t){let i=[],r=Math.floor((n-t)/12),s=Math.floor((n+t)/12),o=Math.floor((e-t)/12),a=Math.floor((e+t)/12);for(let l=r;l<=s;l++)for(let c=o;c<=a;c++){let h=nd.get(Bl(l+100,c+100));if(h)for(let u of h)i.push(u)}return i}var kl=Array.from({length:qr},()=>[]);for(let n=0;n<qr;n++){let e=St[n];for(let t of Um(e.x,e.z,16)){if(t<=n)continue;let i=St[t],r=Math.hypot(e.x-i.x,e.z-i.z);r>Math.max(e.r,i.r)||r<.01||Hl(e.x,e.z,i.x,i.z,.35)&&(kl[n].push([t,r]),kl[t].push([n,r]))}}var U1={nodes:qr,edges:kl.reduce((n,e)=>n+e.length,0)/2};function Dm(n,e){for(let r of[8,18,40]){let s=Um(n,e,r).map(a=>[a,Math.hypot(St[a].x-n,St[a].z-e)]).filter(([,a])=>a<=r).sort((a,l)=>a[1]-l[1]),o=[];for(let[a,l]of s)if(Hl(n,e,St[a].x,St[a].z,.3)&&(o.push(a),o.length>=3))break;if(o.length)return o}let t=0,i=1e9;for(let r=0;r<qr;r++){let s=Math.hypot(St[r].x-n,St[r].z-e);s<i&&(i=s,t=r)}return[t]}var id=class{constructor(){this.a=[]}push(e,t){let i=this.a;i.push([e,t]);let r=i.length-1;for(;r>0;){let s=r-1>>1;if(i[s][1]<=i[r][1])break;[i[s],i[r]]=[i[r],i[s]],r=s}}pop(){let e=this.a,t=e[0],i=e.pop();if(e.length){e[0]=i;let r=0;for(;;){let s=r,o=2*r+1,a=o+1;if(o<e.length&&e[o][1]<e[s][1]&&(s=o),a<e.length&&e[a][1]<e[s][1]&&(s=a),s===r)break;[e[s],e[r]]=[e[r],e[s]],r=s}}return t}get size(){return this.a.length}},Ol=new Float32Array(qr),Qu=new Int32Array(qr),ed=new Int32Array(qr),zl=0;function Kb(n,e,t,i,r,s){zl++;let o=new id,a=new Set(e);for(let c of n){let h=Math.hypot(St[c].x-r,St[c].z-s);Ol[c]=h,Qu[c]=-1,ed[c]=zl,o.push(c,h+Math.hypot(St[c].x-t,St[c].z-i))}let l=new Set;for(;o.size;){let[c]=o.pop();if(!l.has(c)){if(l.add(c),a.has(c)){let h=[];for(let u=c;u!==-1;u=Qu[u])h.push(u);return h.reverse()}for(let[h,u]of kl[c]){let d=Ol[c]+u;(ed[h]!==zl||d<Ol[h])&&(ed[h]=zl,Ol[h]=d,Qu[h]=c,o.push(h,d+Math.hypot(St[h].x-t,St[h].z-i)))}}}return null}function Zb(n){if(n.length<3)return n;let e=[],t=0;for(;t<n.length-1;){let i=n.length-1;for(;i>t+1&&!Hl(n[t].x,n[t].z,n[i].x,n[i].z,.32);)i--;e.push(n[i]),t=i}return e}var Fl=new Map;function Xo(n,e,t,i){if(Hl(n,e,t,i,.32))return[{x:t,z:i}];let r=Math.round(n/3)+","+Math.round(e/3)+">"+Math.round(t/3)+","+Math.round(i/3),s=Fl.get(r);if(!s){let a=Dm(n,e),l=Dm(t,i);if(s=Kb(a,l,t,i,n,e),!s)return[];Fl.size>600&&Fl.clear(),Fl.set(r,s)}let o=[{x:n,z:e},...s.map(a=>({x:St[a].x,z:St[a].z})),{x:t,z:i}];return Zb(o)}var ft=[],Jb=new Map,qo={},od={},Ye=(n,e)=>{qo[n]=e},dr=(n,e)=>{od[n]=e},Gn={x:0,y:0,z:9,yaw:0,seated:!1,building:null},$b=1,Om=new Map;function Ve(n,e){let t=Om.get(n);return t||(t=e(),t.key=n,Om.set(n,t)),t}var jb=95,Qb=78,zm={};function Gl(n){let e={id:n.id||"a"+$b++,name:"Villager",role:"villager",team:"crown",rank:0,x:0,z:0,y:0,yaw:0,speed:1.35,run:!1,idx:ft.length,hp:100,maxhp:100,alive:!0,morale:70,loyalty:60,atk:9,def:1,range:1.3,cool:0,home:null,bed:null,bedIdx:0,work:null,mess:null,watch:null,company:-1,boss:null,look:{},hero:null,pose:"stand",carry:null,label:"",lod:0,vis:!0,plan:null,step:0,stepT:0,state:"dwell",path:null,pi:0,tPlan:Vr()*1.2,order:null,fight:null,inside:null,dead:0,fed:1,flags:{},...n};return e.idx=ft.length,ft.push(e),Jb.set(e.id,e),e.home&&$n[e.home]&&!n.noBed&&eS(e,e.home),e}function eS(n,e){let t=$n[e];if(!t)return;let i=t.spots.bed||[],r=zm[e]||(zm[e]=new Set),s=0;for(;r.has(s);)s++;r.add(s),n.home=e,n.bedIdx=s,n.bedSlot=s<i.length?"bed":"rest"}function ad(n,e){if(e.pos)return{x:e.pos.x,z:e.pos.z,yaw:e.yaw??n.yaw,y:e.y||0,bld:e.bld?$n[e.bld]:Zs(e.pos.x,e.pos.z)};let t=e.place,i=$n[t]||null,r=null,s=Sm(t)?.[e.spot||"stand"];if(s&&s.length){let o=e.i!=null?e.i:n.idx;r=s[Math.abs(o)%s.length]}if(!r&&e.spot==="bed"&&i){let o=i.spots.rest||i.spots.stand;r=o[n.bedIdx%o.length],r={...r,y:.05}}if(!r){let o=wm(t)||{x:n.x,z:n.z};r={x:o.x,z:o.z,yaw:n.yaw}}return{x:r.x+(e.jx||0),z:r.z+(e.jz||0),yaw:r.yaw||0,y:(r.y||0)+(e.y||0),bld:i,sit:r.sit}}function tS(n,e){let t=[],i=n.x,r=n.z,s=Zs(i,r),o=e.bld;return s&&s!==o&&(t.push({x:s.door.in.x,z:s.door.in.z},{x:s.door.x,z:s.door.z},{x:s.door.out.x,z:s.door.out.z}),i=s.door.out.x,r=s.door.out.z),o&&o!==s?(t.push(...Xo(i,r,o.door.out.x,o.door.out.z)),t.push({x:o.door.x,z:o.door.z},{x:o.door.in.x,z:o.door.in.z},{x:e.x,z:e.z})):t.push(...Xo(i,r,e.x,e.z)),t}var $s=n=>n.plan?n.plan.seq[n.step]:null;function ld(n){let e=$s(n);if(!e){n.path=null;return}if(n.target=e.follow?null:ad(n,e),n.stepT=0,n.arrived=!1,e.follow){n.state="walk",n.path=null,n.rp=0;return}if(n.lod===2||e.snap){sd(n);return}let t=n.target;if(Bu(n.x,n.z,t.x,t.z)<.25&&(!t.bld||Zs(n.x,n.z)===t.bld)){rd(n);return}n.path=tS(n,t),n.pi=0,n.state="walk"}function rd(n){let e=$s(n),t=n.target;n.state="dwell",n.path=null,n.arrived=!0,n.stepT=0,t&&(n.x=t.x,n.z=t.z,n.tyaw=t.yaw);let i=n.plan;e&&e.hook&&od[e.hook]?.(n,e,"arrive")}function Fm(n){let e=$s(n);e?.hook&&od[e.hook]?.(n,e,"done"),e?.prod&&ar("workDone",{a:n,step:e,prod:e.prod});let t=n.plan;if(n.step++,n.step>=t.seq.length){if(t.once){nS(n);return}n.step=0}ld(n)}function nS(n){n.order&&(n.order.status="done",ar("orderDone",{a:n,order:n.order}),n.order=null),n.plan=null,n.tPlan=0}function sd(n){let e=n.plan;if(!e)return;let t=$s(n);if(e.seq.length>1&&!e.once&&!t?.follow&&(n.step=Math.floor(I.clock*1.6+n.idx*3)%e.seq.length,t=e.seq[n.step]),!t)return;if(t.follow){let r=km(n,t);n.x=r.x,n.z=r.z,n.state="walk";return}let i=ad(n,t);n.target=i,n.x=i.x,n.z=i.z,n.y=i.y,n.yaw=i.yaw,n.state="dwell",n.path=null,n.arrived=!0,n.stepT=0,n.tyaw=i.yaw,n.pose=t.pose||"stand",n.carry=t.carry||null}function km(n,e){let t=e.off||[0,-2],i=Gn.yaw,r=Math.sin(i),s=Math.cos(i),o=s,a=-r;return{x:Gn.x+o*t[0]+r*t[1],z:Gn.z+a*t[0]+s*t[1]}}var iS=1;function Sn(n,e){n.order={id:iS++,issued:I.clock,status:"active",priority:2,issuer:"king",...e};let t=n.order,i=[];if(t.type==="goto")i.push({place:t.place,spot:t.spot||"stand",i:t.i,pos:t.pos,dur:t.dur||14,pose:t.pose||"stand",label:t.label||"On the king's errand: "+(t.what||"attending")});else if(t.type==="follow")i.push({follow:!0,off:t.off||[0,-2.4],dur:1e9,pose:"stand",label:"Following the King"});else if(t.type==="post")i.push({place:t.place,spot:t.spot||"guard",i:t.i,pos:t.pos,dur:1e9,pose:t.pose||"post",label:t.label||"Standing guard by royal order"});else if(t.type==="work")i.push({place:t.place,spot:t.spot||"stand",i:t.i,dur:t.cycle||40,pose:t.pose||"stand",label:t.label||"Working by royal order",prod:t.prod,hook:t.hook,carry:t.carry});else if(t.type==="patrol")for(let r of t.route||[])i.push({pos:{x:r[0]??r.x,z:r[1]??r.z},dur:t.pause||8,pose:"post",label:t.label||"Patrolling by royal order"});return n.plan={key:"order"+t.id,seq:i,once:t.type==="goto",order:!0},n.step=0,ld(n),t.until==null&&t.type!=="goto"&&(t.until=I.clock+(t.hours||3)),ar("order",{a:n,order:t}),t}function Yo(n){n.order&&(n.order.status="cancelled",n.order=null,n.plan=null,n.tPlan=0)}var rS=1;function sS(n){n.order&&n.order.until&&I.clock>n.order.until&&Yo(n);let e;if(n.order)e=n.plan&&n.plan.order?n.plan:null;else{let t=qo[n.role]||qo.default;e=t?t(n,Wo(),I):null}e&&e!==n.plan&&(n.plan=e,n.step=0,ld(n))}function oS(n){let e=Bu(n.x,n.z,Gn.x,Gn.z);n.lod===0&&e>jb?(n.lod=2,sd(n)):n.lod===2&&e<Qb&&(n.lod=0,sd(n))}function aS(n,e){if(!n.alive){n.dead+=e;return}if(oS(n),n.tPlan-=e,n.tPlan<=0&&(n.tPlan=n.lod?3.5:.9+Vr()*.5,n.fight||sS(n)),n.fight)return;let t=$s(n);if(!t){n.pose="stand";return}if(t.follow){cS(n,t,e);return}if(n.lod===2){n.stepT+=e,t.dur<1e8&&n.stepT>=t.dur&&Fm(n);return}if(n.state==="walk")lS(n,e,t);else{if(n.stepT+=e,n.pose=t.pose||"stand",n.carry=t.carry??null,n.tyaw!=null){let i=ko(n.yaw,n.tyaw);n.yaw+=i*Math.min(1,e*6)}n.target&&Math.abs(n.y-n.target.y)>.005&&(n.y+=(n.target.y-n.y)*Math.min(1,e*7)),t.dur<1e8&&n.stepT>=t.dur&&Fm(n)}}function lS(n,e,t){let i=n.path&&n.path[n.pi];if(!i){rd(n);return}let r=i.x-n.x,s=i.z-n.z,o=Math.hypot(r,s),a=n.speed*(n.run?2.2:1)*rS*e;if(n.pose=n.run?"run":"walk",n.carry=t.carry??n.carryWalk??null,o<=a+.02)n.x=i.x,n.z=i.z,n.pi++,n.pi>=n.path.length&&rd(n);else{let l=n.x+r/o*a,c=n.z+s/o*a;if(Ci(l,c,.28)){let u=n.target||i,d=Xo(n.x,n.z,u.x,u.z);if(d.length){n.path=d,n.pi=0;return}n.state="dwell",n.path=null,n.tPlan=0;return}n.x=l,n.z=c;let h=Math.atan2(r,s);n.yaw+=ko(n.yaw,h)*Math.min(1,e*9)}n.y>.01&&(n.y*=Math.max(0,1-e*8))}function cS(n,e,t){let i=km(n,e),r=i.x-n.x,s=i.z-n.z,o=Math.hypot(r,s);if(n.lod===2||o>28){n.x=i.x,n.z=i.z,n.pose="stand";return}if(o<.35){n.pose="stand",n.yaw+=ko(n.yaw,Gn.yaw)*Math.min(1,t*5);return}let a=n.speed*(o>4?2.4:o>1.6?1.6:1)*t;n.pose=o>4?"run":"walk";let l=n.x+r/o*a,c=n.z+s/o*a;if(Ci(l,c,.28))if(!Ci(l,n.z,.28))c=n.z;else if(!Ci(n.x,c,.28))l=n.x;else{let h=Xo(n.x,n.z,i.x,i.z);if(h[0]){let u=h[0],d=Math.hypot(u.x-n.x,u.z-n.z)||1;l=n.x+(u.x-n.x)/d*a,c=n.z+(u.z-n.z)/d*a}}n.x=l,n.z=c,n.yaw+=ko(n.yaw,Math.atan2(r,s))*Math.min(1,t*9),n.y*=Math.max(0,1-t*8)}function Vl(n){n.plan=null,n.order=null;let e=qo[n.role]||qo.default,t=e?e(n,Wo(),I):null;if(t){n.plan=t,n.step=0;let i=t.seq[0];if(i&&!i.follow){let r=ad(n,i);n.x=r.x,n.z=r.z,n.y=r.y,n.yaw=r.yaw,n.target=r,n.state="dwell",n.arrived=!0}}}function cd(n){for(let e=0;e<ft.length;e++)aS(ft[e],n)}var hd=n=>{if(!n.alive)return"Fallen";if(n.fight)return n.fight.label||"Fighting";let e=$s(n),t=n.state==="walk"&&e&&!e.follow?"Heading out \u2014 ":"";return e?.label?t+e.label:n.plan?.label||"Idle"};var et=(n,e)=>{for(let[t,i,r]of e)if(t<=i?n>=t&&n<i:n>=t||n<i)return r;return e[e.length-1][2]},hS={plaza:"the Royal Court",market:"the market",yard:"the training yard",gate:"the main gate",villageSquare:"the village square",lumber:"the lumber camp",mine:"the mine",ash:"the camp fire",bmYard:"the keep yard",bmGate:"the Blackmere gate",bridge:"Kingsbridge",wall:"the walls",fields:"the fields",f1:"the fields",f2:"the fields",f3:"the fields",f4:"the fields",mbfield:"the Millbrook plots"},pd=n=>$n[n]?.name||hS[n]||n,nt=(n,e)=>n+"#"+e.id,it=n=>Ve(nt("sleep",n),()=>({seq:[{place:n.home,spot:n.bedSlot||"bed",i:n.bedIdx,dur:1e9,pose:"sleep",label:"Asleep in the "+pd(n.home)}]})),he=(n,e)=>Ve(nt("eat:"+e,n),()=>({seq:[{place:e,spot:"seat",i:n.idx,dur:1e9,pose:"sit",hook:"eat",label:"Eating a meal in "+pd(e)}]})),le=(n,e,t,i,r,s={})=>Ve(nt(`stay:${e}:${t}:${i}:${s.i??""}:${r}:${s.hook??""}:${s.carry??""}:${s.y??""}`,n),()=>({seq:[{place:e,spot:t,i:s.i??n.idx,dur:1e9,pose:i,label:r,...s}]}));var ql=n=>Ve(nt("tavern",n),()=>({seq:[{place:"tavern",spot:"seat",i:n.idx,dur:40+n.idx%5*8,pose:"sit",label:"Drinking and talking at the Gilded Boar",hook:"social"},{place:"tavern",spot:"bar",dur:25,pose:"talk",label:"Chatting with the keeper"},{place:"tavern",spot:"seat",i:n.idx+3,dur:50,pose:"sit",label:"Sharing gossip at the Gilded Boar",hook:"social"}]})),Vm=()=>Nl()===3,Bm=n=>Ve(nt("field",n),()=>({seq:[0,1,2].map(e=>({place:n.work,spot:"hoe",i:n.idx*3+e,dur:38+e*6,pose:"hoe",label:"Tending the crops",prod:"grain"}))})),dd=n=>Ve(nt("chores",n),()=>({seq:[{place:"villageSquare",spot:"stand",i:n.idx,dur:30,pose:"hammer",label:"Mending fences and tools"},{place:"villageSquare",spot:"well",dur:22,pose:"carry",carry:"basket",label:"Drawing water at the well"}]})),Hm=n=>Ve(nt("cartG",n),()=>({seq:[{place:n.work||"f1",spot:"hoe",i:n.idx,dur:7,pose:"stand",label:"Loading the grain cart",hook:"pickGrain"},{place:"granary",spot:"store",i:n.idx,dur:7,pose:"carry",carry:"sack",label:"Hauling grain to the Royal Granary",hook:"dropGrain"}]})),Gm=n=>Ve(nt("cartW",n),()=>({seq:[{place:"lumber",spot:"pile",dur:7,pose:"stand",label:"Loading cut timber",hook:"pickWood"},{place:"smithy",spot:"store",dur:7,pose:"carry",carry:"log",label:"Hauling timber to the castle",hook:"dropWood"}]})),Wl=n=>Ve(nt("kitchen",n),()=>({seq:[{place:"kitchens",spot:"cook",i:n.idx,dur:40,pose:"cook",label:"Cooking for the household",prod:"meals"},{place:"kitchens",spot:"prep",i:n.idx,dur:34,pose:"write",label:"Kneading bread and preparing meals"},{place:"kitchens",spot:"store",dur:12,pose:"carry",carry:"sack",label:"Fetching flour from the stores"}]})),js=n=>Ve(nt("serve",n),()=>({seq:[{place:"kitchens",spot:"store",dur:9,pose:"carry",carry:"tray",label:"Loading trays in the kitchens"},{place:"greatHall",spot:"stand",i:n.idx,dur:14,pose:"carry",carry:"tray",label:"Serving trays in the Great Hall"},{place:"plaza",spot:"servant",i:n.idx,dur:16,pose:"stand",label:"Waiting on the court"}]})),Wm=n=>Ve(nt("sweep",n),()=>({seq:[0,1,2].map(e=>({place:"plaza",spot:"sweep",i:n.idx+e*2,dur:26,pose:"sweep",label:"Sweeping the royal court"}))})),fd=n=>Ve(nt("sweepH",n),()=>({seq:[{place:"greatHall",spot:"stand",i:n.idx,dur:28,pose:"sweep",label:"Cleaning the Great Hall"},{place:"apartments",spot:"stand",dur:26,pose:"sweep",label:"Tidying the royal apartments"},{place:"lodgings",spot:"rest",i:n.idx,dur:22,pose:"sweep",label:"Airing the lodgings"}]})),Xl=n=>Ve(nt("smith",n),()=>({seq:[{place:"smithy",spot:"forge",dur:24,pose:"stand",label:"Working the bellows",prod:"arms"},{place:"smithy",spot:"anvil",i:n.idx,dur:44,pose:"hammer",label:"Hammering arms at the anvil",prod:"arms"},{place:"smithy",spot:"store",dur:10,pose:"carry",carry:"crate",label:"Stocking the armory racks"}]})),ud=n=>Ve(nt("stable",n),()=>({seq:[{place:"stable",spot:"tend",i:n.idx,dur:30,pose:"tend",label:"Grooming the royal horses"},{place:"stable",spot:"tend",i:n.idx+1,dur:26,pose:"sweep",label:"Mucking out the stalls"}]}));var Ko=(n,e)=>Ve(nt("inspect",n),()=>({seq:e.map((t,i)=>({place:t[0],spot:t[1]||"stand",i:t[3]??n.idx,dur:t[2]||30,pose:t[4]||"talk",label:t[5]||"Inspecting "+pd(t[0])}))}));Ye("cook",(n,e)=>et(e,[[22,4.5,()=>it(n)],[4.5,12,()=>Wl(n)],[12,13,()=>he(n,"greatHall")],[13,19,()=>Wl(n)],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Resting in the Great Hall")]])());Ye("kitchenhand",(n,e)=>et(e,[[22,5,()=>it(n)],[5,7,()=>Wl(n)],[7,8,()=>he(n,"greatHall")],[8,11,()=>js(n)],[11,12,()=>js(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Wl(n)],[18,20,()=>js(n)],[20,22,()=>le(n,"kitchens","stand","sit","Resting by the hearth")]])());Ye("servant",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,7,()=>Wm(n)],[7,8,()=>he(n,"greatHall")],[8,11.5,()=>js(n)],[11.5,12,()=>js(n)],[12,13,()=>he(n,"greatHall")],[13,17,()=>fd(n)],[17,19,()=>js(n)],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Resting in the Great Hall")]])());Ye("maid",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,7,()=>fd(n)],[7,8,()=>he(n,"greatHall")],[8,12,()=>fd(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Wm(n)],[18,19,()=>he(n,"greatHall")],[19,22,()=>le(n,"lodgings","rest","sit","Resting in the lodgings")]])());Ye("stablehand",(n,e)=>et(e,[[21.5,5,()=>it(n)],[5,7,()=>ud(n)],[7,8,()=>he(n,"greatHall")],[8,12,()=>ud(n)],[12,13,()=>he(n,"greatHall")],[13,19,()=>ud(n)],[19,21.5,()=>le(n,"stable","stand","sit","Resting in the stable")]])());Ye("smith",(n,e)=>et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,"greatHall")],[6.5,12,()=>Xl(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Xl(n)],[18,19,()=>he(n,"greatHall")],[19,21.5,()=>le(n,"smithy","stand","sit","Resting by the forge")]])());Ye("apprentice",(n,e)=>et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,"greatHall")],[6.5,12,()=>Xl(n)],[12,13,()=>he(n,"greatHall")],[13,18,()=>Xl(n)],[18,19,()=>he(n,"greatHall")],[19,21.5,()=>le(n,"smithy","stand","sit","Cleaning tools")]])());Ye("priest",(n,e)=>et(e,[[22,5,()=>it(n)],[5,6.5,()=>le(n,"chapel","altar","pray","Morning prayers at the altar")],[6.5,7.5,()=>he(n,"greatHall")],[7.5,12,()=>Ve(nt("pTend",n),()=>({seq:[{place:"chapel",spot:"tend",dur:40,pose:"tend",label:"Tending the infirmary"},{place:"chapel",spot:"pew",i:n.idx,dur:30,pose:"pray",label:"Praying with the faithful"}]}))],[12,13,()=>he(n,"greatHall")],[13,17,()=>Ko(n,[["plaza","stand",35,0,"talk","Blessing the court"],["market","browse",30,1,"talk","Speaking with the townsfolk"],["chapel","stand",30,0,"talk","Counselling penitents"]])],[17,18.5,()=>le(n,"chapel","altar","pray","Evening prayers")],[18.5,19.5,()=>he(n,"greatHall")],[19.5,22,()=>le(n,"chapel","pew","sit","Reading scripture")]])());Ye("healer",(n,e)=>et(e,[[22,6,()=>it(n)],[6,7,()=>he(n,"greatHall")],[7,11,()=>Ve(nt("hTend",n),()=>({seq:[{place:"chapel",spot:"tend",dur:38,pose:"tend",label:"Tending the wounded"},{place:"yard",spot:"rest",i:n.idx,dur:30,pose:"tend",label:"Treating soldiers in the yard",hook:"heal"}]}))],[11,12,()=>he(n,"greatHall")],[12,17,()=>Ve(nt("hTend2",n),()=>({seq:[{place:"chapel",spot:"tend",dur:38,pose:"tend",label:"Preparing poultices"},{place:"barracksA",spot:"rest",dur:26,pose:"tend",label:"Visiting the sick in barracks",hook:"heal"}]}))],[17,19,()=>le(n,"chapel","stand","stand","Keeping vigil in the infirmary")],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"chapel","pew","sit","Resting in the chapel")]])());Ye("treasurer",(n,e)=>et(e,[[22,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[8,12,()=>le(n,"treasury","desk","write","Reckoning the treasury ledgers",{i:0})],[12,13,()=>he(n,"greatHall")],[13,17,()=>Ve(nt("trs",n),()=>({seq:[{place:"treasury",spot:"desk",i:0,dur:60,pose:"write",label:"Writing the daily ledger"},{place:"treasury",spot:"chest",dur:30,pose:"carry",carry:"crate",label:"Counting coin in the strongroom"}]}))],[17,19,()=>le(n,"treasury","desk","write","Balancing accounts",{i:1})],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")],[7.5,8,()=>le(n,"treasury","stand","stand","Opening the treasury")]])());Ye("scribe",(n,e)=>et(e,[[22,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"warRoom","desk","write","Copying dispatches",{i:0})],[9,12,()=>le(n,"plaza","stand","write","Recording the day's petitions",{i:2})],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"treasury","desk","write","Copying records",{i:1})],[15,17,()=>le(n,"plaza","stand","write","Recording the day's petitions",{i:2})],[17,19,()=>le(n,"warRoom","desk","write","Filing dispatches",{i:0})],[19,20,()=>he(n,"greatHall")],[20,22,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")]])());var Qs=(n,e,t)=>le(n,"plaza","petition","stand",t,{i:e});Ye("steward",(n,e)=>et(e,[[22.5,6,()=>it(n)],[6,7,()=>he(n,"greatHall")],[7,9,()=>Ko(n,[["granary","stand",36,0,"talk","Counting the granary stores"],["kitchens","stand",30,0,"talk","Checking the kitchens"],["market","browse",28,0,"talk","Speaking with market traders"]])],[9,12,()=>Qs(n,4,"Waiting to present the steward's petition")],[12,13,()=>he(n,"greatHall")],[13,15,()=>Ko(n,[["treasury","stand",30,0,"write","Reviewing the treasury"],["granary","stand",32,0,"talk","Overseeing the granary"],["smithy","stand",26,0,"talk","Reviewing forge output"]])],[15,17,()=>Qs(n,4,"Attending the afternoon court")],[17,19,()=>Ko(n,[["market","browse",30,1,"talk","Reviewing market dues"],["kitchens","stand",28,0,"talk","Planning tomorrow's meals"]])],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall")]])());Ye("chancellor",(n,e)=>et(e,[[22.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"warRoom","desk","write","Drafting royal correspondence",{i:0})],[9,12,()=>Qs(n,3,"Waiting to advise the King")],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"treasury","desk","write","Studying tax charters",{i:1})],[15,17,()=>Qs(n,3,"Attending the afternoon court")],[17,19,()=>le(n,"warRoom","map","talk","Consulting the war maps",{i:0})],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall",{i:1})]])());Ye("guildenvoy",(n,e)=>et(e,[[22.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,"greatHall")],[7.5,9,()=>le(n,"market","browse","talk","Meeting Crown merchants",{i:1})],[9,12,()=>Qs(n,1,"Waiting to petition the Crown")],[12,13,()=>he(n,"greatHall")],[13,15,()=>le(n,"market","browse","talk","Haggling in the market",{i:2})],[15,17,()=>Qs(n,1,"Waiting to petition the Crown")],[17,19,()=>le(n,"market","browse","talk","Meeting Crown merchants",{i:3})],[19,20,()=>he(n,"greatHall")],[20,22.5,()=>le(n,"greatHall","stand","talk","Conversing in the Great Hall",{i:2})]])());Ye("farmer",(n,e)=>{let t=Vm();return et(e,[[21,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,11.5,()=>t?dd(n):Bm(n)],[11.5,12.5,()=>he(n,"tavern")],[12.5,17.5,()=>t?dd(n):Bm(n)],[17.5,20,()=>ql(n)],[20,21,()=>he(n,n.home)]])()});Ye("carter",(n,e)=>et(e,[[20.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>n.flags.wood?Gm(n):Hm(n)],[12,13,()=>he(n,"tavern")],[13,18,()=>n.flags.wood?Gm(n):Hm(n)],[18,20.5,()=>ql(n)]])());Ye("woodcutter",(n,e)=>et(e,[[20.5,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,12,()=>Ve(nt("chop",n),()=>({seq:[0,1].map(t=>({place:"lumber",spot:"chop",i:n.idx+t,dur:40,pose:"chop",label:"Felling timber",prod:"wood"}))}))],[12,13,()=>he(n,n.home)],[13,18,()=>Ve(nt("chop",n),()=>({seq:[0,1].map(t=>({place:"lumber",spot:"chop",i:n.idx+t,dur:40,pose:"chop",label:"Felling timber",prod:"wood"}))}))],[18,20.5,()=>ql(n)]])());Ye("merchant",(n,e)=>et(e,[[20.5,6.5,()=>it(n)],[6.5,7.5,()=>he(n,n.home)],[7.5,17,()=>le(n,"market","stall","trade","Selling wares at the market stall",{i:n.stallIdx??n.idx,prod:"trade"})],[17,18,()=>le(n,"market","browse","talk","Closing up the stall",{i:n.idx})],[18,20.5,()=>ql(n)]])());Ye("tavernkeeper",(n,e)=>et(e,[[1.5,9.5,()=>it(n)],[9.5,10.5,()=>he(n,"tavern")],[10.5,24,()=>Ve(nt("bar",n),()=>({seq:[{place:"tavern",spot:"bar",dur:40,pose:"talk",label:"Pouring ale for patrons",prod:"ale"},{place:"tavern",spot:"stand",i:n.idx,dur:26,pose:"sweep",label:"Wiping the tables"}]}))],[0,1.5,()=>le(n,"tavern","stand","sweep","Closing the tavern")]])());Ye("barmaid",(n,e)=>et(e,[[0,10,()=>it(n)],[10,11,()=>he(n,"tavern")],[11,24,()=>Ve(nt("bar",n),()=>({seq:[{place:"tavern",spot:"stand",i:n.idx,dur:30,pose:"carry",carry:"tray",label:"Carrying ale to the tables"},{place:"tavern",spot:"bar",dur:22,pose:"talk",label:"Chatting with patrons"}]}))]])());Ye("child",(n,e)=>et(e,[[20,7,()=>it(n)],[7,8,()=>he(n,n.home)],[8,19,()=>Ve(nt("play",n),()=>({seq:[0,1,2,3].map(t=>({place:"villageSquare",spot:"play",i:n.idx+t*2,dur:16+t*4,pose:t%2?"run":"talk",label:"Playing with friends",jx:(t%3-1)*1.2}))}))],[19,20,()=>he(n,n.home)]])());Ye("villager",(n,e)=>et(e,[[21,6,()=>it(n)],[6,20,()=>dd(n)],[20,21,()=>he(n,n.home)]])());Ye("miller",(n,e)=>et(e,[[20.5,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>Ve(nt("mill",n),()=>({seq:[{place:"mill",spot:"mill",dur:44,pose:"mill",label:"Grinding flour at the mill",prod:"flour"},{place:"mill",spot:"store",dur:14,pose:"carry",carry:"sack",label:"Stacking flour sacks"}]}))],[12,13,()=>he(n,n.home)],[13,18,()=>Ve(nt("mill",n),()=>({seq:[{place:"mill",spot:"mill",dur:44,pose:"mill",label:"Grinding flour at the mill",prod:"flour"},{place:"mill",spot:"store",dur:14,pose:"carry",carry:"sack",label:"Stacking flour sacks"}]}))],[18,20.5,()=>le(n,n.home,"seat","sit","Resting at home")]])());Ye("mbfarmer",(n,e)=>{let t=Vm();return et(e,[[20.5,5,()=>it(n)],[5,6,()=>he(n,n.home)],[6,12,()=>t?le(n,n.home,"seat","sit","Mending tools indoors"):Ve(nt("mbf",n),()=>({seq:[0,1,2].map(i=>({place:"mbfield",spot:"hoe",i:n.idx+i,dur:36,pose:"hoe",label:"Working the Millbrook plots"}))}))],[12,13,()=>he(n,n.home)],[13,18,()=>t?le(n,n.home,"seat","sit","Mending tools indoors"):Ve(nt("mbf",n),()=>({seq:[0,1,2].map(i=>({place:"mbfield",spot:"hoe",i:n.idx+i,dur:36,pose:"hoe",label:"Working the Millbrook plots"}))}))],[18,20.5,()=>le(n,n.home,"seat","sit","Resting at home")]])()});Ye("miner",(n,e)=>et(e,[[20,5.5,()=>it(n)],[5.5,6.5,()=>he(n,n.home)],[6.5,12,()=>Ve(nt("dig",n),()=>({seq:[0,1,2].map(t=>({place:"mine",spot:"dig",i:n.idx+t,dur:40,pose:"chop",label:"Digging iron ore",prod:"ore"}))}))],[12,13,()=>he(n,n.home)],[13,17.5,()=>Ve(nt("dig2",n),()=>({seq:[{place:"mine",spot:"cart",dur:30,pose:"carry",carry:"crate",label:"Hauling ore to the smelter"},{place:"smelter",spot:"forge",dur:34,pose:"hammer",label:"Working the smelter",prod:"ore"}]}))],[17.5,20,()=>le(n,"mine","cart","talk","Trading tales at the mine")]])());Ye("guildmaster",(n,e)=>et(e,[[21,6.5,()=>it(n)],[6.5,7.5,()=>he(n,n.home)],[7.5,18,()=>Ko(n,[["mine","dig",36,0,"talk","Inspecting the ore seams"],["smelter","stand",30,0,"talk","Checking the smelter"],["mine","cart",26,0,"write","Counting ore carts"]])],[18,21,()=>le(n,n.home,"seat","sit","Reviewing guild accounts")]])());Ye("caravaner",(n,e)=>et(e,[[20,5.5,()=>it(n)],[5.5,7,()=>he(n,n.home)],[7,18,()=>le(n,"mine","cart","carry","Loading the iron caravan",{carry:"crate"})],[18,20,()=>le(n,"mine","cart","sit","Resting by the carts")]])());Ye("merc",(n,e)=>et(e,[[2,9,()=>le(n,"ash","sleep","sleep","Sleeping in a bedroll",{y:.15})],[9,10,()=>le(n,"ash","fire","sit","Eating by the campfire",{hook:"social"})],[10,14,()=>Ve(nt("mspar",n),()=>({seq:[0,1,2].map(t=>({place:"ash",spot:"camp",i:n.idx+t,dur:22,pose:t%2?"drill":"talk",label:"Sparring and sharpening steel"}))}))],[14,15,()=>le(n,"ash","fire","sit","Eating by the campfire")],[15,20,()=>Ve(nt("mfire",n),()=>({seq:[{place:"ash",spot:"fire",i:n.idx,dur:44,pose:"sit",label:"Drinking around the fire"},{place:"ash",spot:"camp",i:n.idx,dur:20,pose:"talk",label:"Boasting of past sieges"}]}))],[20,2,()=>le(n,"ash","fire","sit","Singing around the fire",{i:n.idx})]])());Ye("vservant",(n,e)=>et(e,[[21,5.5,()=>le(n,"bmBarracks","bed","sleep","Asleep",{i:n.idx,y:.5})],[5.5,7,()=>le(n,"bmHall","seat","sit","Eating",{hook:"social"})],[7,21,()=>Ve(nt("vserv",n),()=>({seq:[{place:"bmHall",spot:"stand",i:n.idx,dur:30,pose:"sweep",label:"Cleaning the hall"},{place:"bmKeep",spot:"stand",dur:26,pose:"carry",carry:"tray",label:"Serving Lord Maren"}]}))]])());Ye("vsmith",(n,e)=>et(e,[[21,5.5,()=>le(n,"bmSmith","stand","sleep","Asleep",{y:.4})],[5.5,21,()=>Ve(nt("vsm",n),()=>({seq:[{place:"bmSmith",spot:"forge",dur:24,pose:"stand",label:"Working the bellows",prod:"varms"},{place:"bmSmith",spot:"anvil",dur:44,pose:"hammer",label:"Forging weapons for Blackmere",prod:"varms"}]}))]])());var Yl=(n,e)=>n+"#"+e.id,Zo=(n,e,t,i,r="walk")=>Ve(Yl(e,n),()=>({seq:t.map(([s,o],a)=>({pos:{x:s,z:o},dur:10+a%3*3,pose:r,label:i}))})),Yr=n=>Ve(Yl("drill",n),()=>({seq:[{place:"yard",spot:"drill",i:n.idx,dur:34,pose:"drill",label:"Formation drill in the training yard"},{place:"yard",spot:"dummy",i:n.idx,dur:28,pose:"hammer",label:"Weapons practice"},{place:"yard",spot:"rest",i:n.idx,dur:18,pose:"stand",label:"Recovering between drills"}]})),md=n=>Ve(Yl("maint",n),()=>({seq:[{place:"armory",spot:"rack",i:n.idx,dur:28,pose:"stand",label:"Inspecting weapons and armor"},{place:"guardQ",spot:"maint",i:n.idx,dur:28,pose:"hammer",label:"Maintaining guard equipment"}]})),jn=n=>he(n,"garrisonMess"),uS=n=>he(n,"greatHall"),dS=n=>Math.floor((n%24+24)%24/8),fS=(n,e)=>n.shift===dS(e);function pS(n){let e=(Math.floor(I.clock/2)+n.idx)%5;return e===0?le(n,"plaza","guard","post","Guarding the Royal Court",{i:n.idx}):e===1?le(n,"gate","guard","post","Standing watch at the main gate",{i:n.idx}):e===2?le(n,"wall","post","post","Walking a wall post",{i:n.idx}):e===3?Zo(n,"guardPatrol",Ri.castle,"Patrolling the inner castle"):le(n,"aptDoor","guard","post","Guarding the royal apartments",{i:n.idx})}Ye("royalguard",(n,e)=>{if(fS(n,e))return pS(n);let t=(e-n.shift*8+24)%24;return t<1?uS(n):t<3?md(n):t<5?Yr(n):it(n)});Ye("marshal",(n,e)=>et(e,[[22,6,()=>it(n)],[6,7,()=>jn(n)],[7,10,()=>Ve(Yl("marshal-am",n),()=>({seq:[{place:"warRoom",spot:"map",i:0,dur:45,pose:"talk",label:"Reviewing realm defenses"},{place:"yard",spot:"muster",i:0,dur:35,pose:"talk",label:"Inspecting the garrison"},{place:"gate",spot:"guard",i:0,dur:30,pose:"post",label:"Inspecting the main gate"}]}))],[10,12,()=>le(n,"warRoom","map","write","Planning patrols and campaigns",{i:1})],[12,13,()=>jn(n)],[13,18,()=>Zo(n,"marshal-patrol",Ri.road,"Inspecting the Royal Road")],[18,19,()=>jn(n)],[19,22,()=>le(n,"warRoom","map","talk","Holding the evening war council",{i:2})]])());Ye("captain",(n,e)=>et(e,[[22,5.5,()=>it(n)],[5.5,6.5,()=>jn(n)],[6.5,10,()=>Yr(n)],[10,12,()=>Zo(n,"captain-patrol",Ri.castle,"Inspecting guard posts")],[12,13,()=>jn(n)],[13,17,()=>Yr(n)],[17,19,()=>Zo(n,"captain-gate",Ri.village,"Inspecting the village watch")],[19,20,()=>jn(n)],[20,22,()=>le(n,"warRoom","map","talk","Reporting to the Lord Marshal",{i:n.idx})]])());Ye("sergeant",(n,e)=>et(e,[[22,5,()=>it(n)],[5,6,()=>jn(n)],[6,12,()=>Yr(n)],[12,13,()=>jn(n)],[13,18,()=>Yr(n)],[18,20,()=>md(n)],[20,22,()=>it(n)]])());Ye("soldier",(n,e)=>I.army.directive==="drill"?Yr(n):I.army.directive==="follow"?le(n,"yard","muster","stand","Awaiting the King\u2019s marching column",{i:n.idx}):I.army.directive==="gate"?le(n,"gate","defend","post","Reinforcing the main gate",{i:n.idx}):I.army.directive==="muster"?le(n,"yard","muster","post","Mustered under royal orders",{i:n.idx}):et(e,[[21.5,5.5,()=>it(n)],[5.5,6.5,()=>jn(n)],[6.5,11.5,()=>Yr(n)],[11.5,12.5,()=>jn(n)],[12.5,15,()=>md(n)],[15,18.5,()=>Zo(n,"soldier-patrol",n.company%2?Ri.village:Ri.castle,"Patrolling Crown lands")],[18.5,19.5,()=>jn(n)],[19.5,21.5,()=>le(n,"barracksA","rest","sit","Off duty in barracks",{i:n.idx})]])());Ye("vguard",(n,e)=>I.powers.valemar.war?le(n,"bmGate","defend","post","Defending Blackmere from the Crown",{i:n.idx}):et(e,[[22,6,()=>le(n,"bmBarracks","bed","sleep","Sleeping in Blackmere barracks",{i:n.idx,y:.45})],[6,7,()=>he(n,"bmHall")],[7,19,()=>le(n,n.idx%2?"bmGate":"bmWall",n.idx%2?"guard":"post","post","Standing Blackmere watch",{i:n.idx})],[19,20,()=>he(n,"bmHall")],[20,22,()=>le(n,"bmYard","stand","talk","Off duty in Blackmere yard",{i:n.idx})]])());Ye("vsoldier",(n,e)=>I.powers.valemar.war?le(n,"bmYard","drill","post","Mustered to defend Blackmere",{i:n.idx}):et(e,[[22,6,()=>le(n,"bmBarracks","bed","sleep","Sleeping in Blackmere barracks",{i:n.idx,y:.45})],[6,7,()=>he(n,"bmHall")],[7,12,()=>le(n,"bmYard","drill","drill","Drilling for House Valemar",{i:n.idx})],[12,13,()=>he(n,"bmHall")],[13,18,()=>le(n,"bmYard","drill","drill","Training in Blackmere yard",{i:n.idx+3})],[18,19,()=>he(n,"bmHall")],[19,22,()=>le(n,"bmYard","stand","talk","Resting in Blackmere yard",{i:n.idx})]])());var Xm=()=>I.ledger.productionToday||(I.ledger.productionToday={grain:0,wood:0,iron:0,arms:0,trade:0,meals:0}),Pi=(n,e=1)=>{let t=Xm();t[n]=(t[n]||0)+e};dr("pickGrain",()=>{});dr("dropGrain",(n,e,t)=>{t==="done"&&Pi("grain",3)});dr("pickWood",()=>{});dr("dropWood",(n,e,t)=>{t==="done"&&Pi("wood",2)});dr("eat",(n,e,t)=>{t==="arrive"&&I.stock.grain>0&&(I.stock.grain=Math.max(0,I.stock.grain-.12),Pi("meals"))});dr("social",(n,e,t)=>{t==="done"&&(n.morale=Math.min(100,n.morale+.6))});dr("heal",(n,e,t)=>{t==="done"&&(n.hp=Math.min(n.maxhp,n.hp+18))});lr("workDone",({a:n,step:e})=>{e.prod==="grain"?Pi("grain",1.4):e.prod==="wood"?Pi("wood",1.2):e.prod==="ore"?Pi("iron",.7):e.prod==="arms"?Pi("arms",.5):e.prod==="trade"?Pi("trade",1):e.prod==="meals"&&Pi("meals",1)});lr("day",()=>{let n=I.realm,e=I.stock,t=Xm(),i={grain:Math.round(t.grain*4*I.realm.farmFocus),wood:Math.round(t.wood*2),iron:Math.round(t.iron*1.5),arms:Math.round(t.arms)};e.grain+=i.grain,e.wood+=i.wood,e.iron+=i.iron;let r=Math.min(i.arms,Math.floor(e.iron/.5));e.arms+=r,e.iron=Math.max(0,e.iron-r*.5),i.arms=r;let s=Object.keys(I.actors||{}).length||80,o=Math.max(18,Math.round(s*.34*I.realm.ration));e.grain=Math.max(0,e.grain-o);let a=Math.round((28+n.prosperity*.65+t.trade*1.8)*n.tax),l=Math.round(18+(I.army.size||20)*1.15);Rm(a,"Taxes & market dues");let c=Math.min(l,I.realm.coin);c&&Cm(c,"Garrison wages");let h=l-c;h>0&&(n.debt=(n.debt||0)+h,n.favor-=2,n.security-=1,ri("The Crown could not fully pay the garrison. "+h+" coin was added to royal debt.","warning")),e.grain<60?(n.favor-=4,n.prosperity-=2,ri("The granary is running dangerously low.","warning")):e.grain>500&&(n.prosperity+=1);let u=900+(I.build.granary||0)*300;if(e.grain>u){let d=Math.round(e.grain-u);e.grain=u,d>0&&ri(d+" grain spoiled beyond granary capacity.","economy")}t.meals>=8&&(n.favor+=1),n.security+=Math.min(2,(I.army.size||0)/30),Js(),I.ledger.last={in:{"Taxes & market dues":a},out:{"Garrison wages":l},net:a-l,day:an()-1,production:i,foodUse:o},I.ledger.hist.push(I.ledger.last),I.ledger.hist.length>32&&I.ledger.hist.shift();for(let d in t)t[d]=0});function eo(n){return I.powers[n]}function Jo(n,e,t){let i=eo(n);i&&(i.rel=Ys(i.rel+e,-100,100),t&&ri(t,"diplomacy"))}function qm(n,e,t=!0){let i=eo(n);return i?(i.treaties[e]=t,t&&I.stats.treaties++,Jo(n,t?8:-5,(t?"Treaty signed with ":"Treaty ended with ")+i.name),!0):!1}function gd(n){let e=eo(n);return!e||e.war||e.defeated||e.vassal?!1:(e.war=!0,e.rel=Math.min(e.rel,-60),I.war.state="war",I.war.host=n,I.war.lastWar=I.clock,ri("War declared between the Crownlands and "+e.name+".","war"),!0)}function xd(n){let e=eo(n);return!e||!e.war?!1:(e.war=!1,e.rel=Math.max(e.rel,-15),I.war.host===n&&(I.war.state="peace",I.war.host=null),ri("Peace concluded with "+e.name+".","diplomacy"),!0)}function Ym(n){let e=eo(n);return e?(e.war=!1,e.defeated=!0,e.vassal=!0,e.mobilized=!1,e.army=0,e.aggression=0,e.rel=Math.max(-20,e.rel),e.mood="subjugated",e.cool=9999,I.war.host===n&&(I.war.host=null),I.war.state="victory",ri(e.name+" has submitted to the Crownlands.","war"),!0):!1}lr("day",()=>{for(let e of Object.values(I.powers))e.cool=Math.max(0,(e.cool||0)-1),e.id==="valemar"?(e.war?(e.mood="hostile",e.mobilized=!0):e.rel<-35||I.realm.security<35?(e.mood="threatening",e.mobilized=Vu(.35)):e.rel>35?(e.mood="conciliatory",e.mobilized=!1):e.mood="watchful",!e.war&&e.cool<=0&&e.rel<-55&&e.aggression>.55&&Vu(.18)&&(gd(e.id),e.cool=5)):e.rel>25&&(e.mood="friendly");let n=eo("valemar");if(n.war){let e=Math.max(1,I.army.size||20)*(I.realm.security/60);n.army*(.8+Math.random()*.4)>e*1.18?(I.realm.security-=4,I.realm.favor-=2,ri("Valemar raiders pressure the eastern road.","war")):(n.wealth=Math.max(0,n.wealth-12),I.realm.renown+=1)}Js()});var Kl=()=>Object.fromEntries(Object.entries(I.powers).map(([n,e])=>[n,{name:e.name,rel:Math.round(e.rel),army:e.army,mood:e.mood,war:e.war,treaties:{...e.treaties}}]));var Km=!1,Zm=["Edric","Rowan","Cedric","Gareth","Alric","Bram","Osric","Leof","Hugh","Tomas","Merek","Hal","Alden","Wulf","Godric","Eamon","Corin","Rolf","Martin","Piers","Milo","Dain","Arlen","Odo","Beric","Gavin","Elwin","Ronan","Silas","Tobin","Mara","Elsa","Nora","Ada","Iris","Maeve","Lina","Tessa","Elin","Greta","Anya","Mira","Rhea","Faye"],mS=0,Ft=(n="")=>n+(n?" ":"")+Zm[mS++%Zm.length];function ln(n){let e=I.actors?.[n.id],t=Gl(n);if(Vl(t),e){for(let i of["x","z","y","yaw","hp","alive","morale","loyalty"])e[i]!=null&&(t[i]=e[i]);if(e.order?.status==="active"){let i=e.order.until!=null?Math.max(.1,e.order.until-I.clock):null,r={...e.order};delete r.id,delete r.issued,delete r.status,delete r.until,i!=null&&(r.hours=i),Sn(t,r)}}return t}function Jm(){if(Km)return ft;Km=!0,ln({id:"marshal",name:"Lord Marshal Garrick",role:"marshal",rank:5,home:"barracksA",hero:"marshal",look:{asset:"guard",tint:12175591}});for(let r=0;r<2;r++)ln({id:"captain"+r,name:Ft("Captain"),role:"captain",rank:4,home:"barracksA",company:r,petitionKey:r===0?"captain":null,look:{asset:"guard",tint:11124711}});for(let r=0;r<4;r++)ln({id:"sergeant"+r,name:Ft("Sergeant"),role:"sergeant",rank:3,home:r<2?"barracksA":"barracksB",company:r%2,look:{asset:"guard",tint:9546200}});for(let r=0;r<18;r++)ln({id:"guard"+r,name:Ft("Royal Guard"),role:"royalguard",rank:2,home:"guardQ",shift:r%3,company:0,look:{asset:"guard",tint:9087196}});let n=7,e=I.army.size>0?I.army.size:27,t=Math.max(20,Math.min(32,e-n));for(let r=0;r<t;r++)ln({id:"soldier"+r,name:Ft("Crown Soldier"),role:"soldier",rank:1,home:r%2?"barracksA":"barracksB",company:r%2,look:{asset:"guard",tint:14075558}});let i=[["steward","Master Corvin","steward","apartments","innkeeper","steward"],["chancellor","Lord Edrin","chancellor","apartments","mage","chancellor"],["treasurer","Master Owyn","treasurer","lodgings","innkeeper"],["scribe","Elric the Scribe","scribe","lodgings","mage"],["priest","Father Anselm","priest","lodgings","mage"],["healer","Sister Alys","healer","lodgings","mage"],["cook","Cook Bran","cook","lodgings","innkeeper"],["cook2","Cook Hilda","cook","lodgings","innkeeper"],["maid0",Ft("Maid"),"maid","lodgings","innkeeper"],["maid1",Ft("Maid"),"maid","lodgings","innkeeper"],["servant0",Ft("Servant"),"servant","lodgings","innkeeper"],["servant1",Ft("Servant"),"servant","lodgings","innkeeper"],["smith",Ft("Smith"),"smith","lodgings","innkeeper"],["apprentice",Ft("Apprentice"),"apprentice","lodgings","innkeeper"],["stablehand",Ft("Stablehand"),"stablehand","lodgings","innkeeper"],["merchant","Lady Mira","merchant","vh0","merchant","merchant"],["guildenvoy","Guild Envoy Torren","guildenvoy","vh1","merchant"],["tavernkeeper","Innkeeper Jory","tavernkeeper","vh2","innkeeper"],["barmaid","Nell","barmaid","vh3","innkeeper"],["woodcutter",Ft("Woodcutter"),"woodcutter","lumberCabin","innkeeper"]];for(let[r,s,o,a,l,c]of i)ln({id:r,name:s,role:o,home:a,petitionKey:c,look:{asset:l}});for(let r=0;r<8;r++)ln({id:"farmer"+r,name:Ft("Farmer"),role:"farmer",home:"vh"+r%8,work:"f"+(r%4+1),look:{asset:r%3===0?"merchant":"innkeeper"}});for(let r=0;r<4;r++)ln({id:"child"+r,name:Ft(),role:"child",home:"vh"+r%4,look:{asset:"innkeeper",scale:.72}});ln({id:"miller",name:Ft("Miller"),role:"miller",home:"mb1",look:{asset:"innkeeper"}});for(let r=0;r<3;r++)ln({id:"mbfarmer"+r,name:Ft("Farmer"),role:"mbfarmer",home:"mb"+(r+1),look:{asset:"innkeeper"}});for(let r=0;r<4;r++)ln({id:"miner"+r,name:Ft("Miner"),role:"miner",home:"sh"+(r%3+1),look:{asset:"guard",tint:9208437}});ln({id:"guildmaster",name:"Guildmaster Torvik",role:"guildmaster",home:"sh1",look:{asset:"merchant"}});for(let r=0;r<6;r++)ln({id:"merc"+r,name:Ft("Mercenary"),role:"merc",noBed:!0,team:"ashwood",look:{asset:"guard",tint:7887432}});for(let r=0;r<8;r++)ln({id:"vguard"+r,name:Ft("Valemar Guard"),role:"vguard",home:"bmBarracks",team:"valemar",look:{asset:"guard",tint:4810323}});for(let r=0;r<12;r++)ln({id:"vsoldier"+r,name:Ft("Valemar Soldier"),role:"vsoldier",home:"bmBarracks",team:"valemar",look:{asset:"guard",tint:5464909}});return ln({id:"valemarLord",name:"Lord Maren Valemar",role:"vservant",home:"bmKeep",team:"valemar",hero:"rival",look:{asset:"guard",tint:3494717}}),I.army.size=ft.filter(r=>r.team==="crown"&&["soldier","sergeant","captain","marshal"].includes(r.role)).length,ft}function $m(){let n={};for(let e of ft)n[e.id]={x:e.x,z:e.z,y:e.y,yaw:e.yaw,hp:e.hp,alive:e.alive,morale:e.morale,loyalty:e.loyalty,order:e.order?{...e.order}:null};return I.actors=n,n}var gS=["weapon"];function xS(n,e,t){let i=n;for(;i&&i!==e;){let r=(i.name||"").toLowerCase();if(t.some(s=>r.startsWith(s)))return!0;i=i.parent}return!1}function jm(n,{excludePrefixes:e=gS}={}){n.updateMatrixWorld(!0);let t=new yn,i=new yn;return n.traverse(r=>{!r.isMesh||xS(r,n,e)||!r.geometry||(r.geometry.boundingBox||r.geometry.computeBoundingBox(),r.geometry.boundingBox&&(i.copy(r.geometry.boundingBox).applyMatrix4(r.matrixWorld),t.union(i)))}),t}function Zl(n,e,t){let i=jm(n,t),r=new C;i.getSize(r);let s=e/Math.max(.01,r.y);return n.scale.setScalar(s),i=jm(n,t),n.position.y-=i.min.y,{scale:s,bodyHeight:r.y}}var eg={guard:"./assets/guard.glb",innkeeper:"./assets/innkeeper.glb",merchant:"./assets/merchant.glb",mage:"./assets/mage.glb"},Qm={guard:10,innkeeper:5,merchant:3,mage:2};function yS(n){n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material&&(e.material=e.material.clone()))})}function _S(n=""){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d"),i=new ks(e);i.colorSpace=dt;let r=new Or({map:i,transparent:!0,depthWrite:!1}),s=new zs(r);return s.scale.set(2.55,.62,1),s.userData.setText=o=>{t.clearRect(0,0,512,128),t.fillStyle="rgba(11,11,14,.78)",t.beginPath(),t.roundRect(18,31,476,66,18),t.fill(),t.strokeStyle="rgba(226,199,126,.58)",t.lineWidth=2,t.stroke(),t.fillStyle="#f7e0a8",t.font="bold 26px Georgia",t.textAlign="center",t.fillText(o.length>30?o.slice(0,29)+"\u2026":o,256,73),i.needsUpdate=!0},s.userData.setText(n),s}var vS=n=>eg[n.look?.asset]?n.look.asset:["royalguard","soldier","marshal","captain","sergeant","vguard","vsoldier","merc"].includes(n.role)?"guard":"innkeeper";async function tg(n){let e=new qs,t={};await Promise.all(Object.entries(eg).map(async([h,u])=>{t[h]=await new Promise((d,p)=>e.load(u,d,void 0,p))}));let i=[],r=[],s={guard:[],innkeeper:[],merchant:[],mage:[]};for(let h of Object.keys(Qm)){let u=t[h];for(let d=0;d<Qm[h];d++){let p=new Ut,x=Tl(u.scene);yS(x),p.add(x);let m=Zl(x,1.72).scale,f=_S("");f.position.y=2.02,p.add(f);let _=new ve(new $i(.34,.43,22),new on({color:14006636,transparent:!0,opacity:.04,side:$t,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.02,p.add(_);let y=null,b=null,R=null,E=null,A=null;if(u.animations?.length){y=new Hr(x);let v=u.animations.find(Z=>/^idle$/i.test(Z.name))||u.animations.find(Z=>/idle/i.test(Z.name))||u.animations[0],w=u.animations.find(Z=>/arm-swing/i.test(Z.name))||v,U=u.animations.find(Z=>/head-turn/i.test(Z.name))||v,G=u.animations.find(Z=>/weapon-raise/i.test(Z.name))||w;b=y.clipAction(v),R=y.clipAction(w),E=y.clipAction(U),A=y.clipAction(G),b.play()}let D={type:h,root:p,visual:x,label:f,ring:_,mixer:y,idle:b,move:R,talk:E,work:A,state:"idle",actor:null,baseScale:m,visualBaseY:x.position.y};p.visible=!1,n.add(p),i.push(D),s[h].push(D)}}let o=0;function a(h){for(let u of Object.keys(s)){let d=s[u].length,p=ft.filter(m=>m.alive&&vS(m)===u).map(m=>{let f=Math.hypot(m.x-h.x,m.z-h.z),_=(m.hero?60:0)+(m.rank||0)*7+(m.order?25:0);return{a:m,d:f,score:f-_}}).filter(m=>m.d<88).sort((m,f)=>m.score-f.score).slice(0,d).map(m=>m.a),x=new Set(p);for(let m of s[u])m.actor&&!x.has(m.actor)&&(m.actor=null,m.root.visible=!1);let g=new Set(s[u].filter(m=>m.actor).map(m=>m.actor));for(let m of p){if(g.has(m))continue;let f=s[u].find(b=>!b.actor);if(!f)break;f.actor=m,f.root.visible=!0,f.label.userData.setText(m.name),g.add(m);let _=m.look?.tint;_&&f.visual.traverse(b=>{b.isMesh&&b.material?.color&&(b.material.color.setHex(16777215),b.material.color.multiply(new ye(_)))});let y=m.look?.scale||1;f.visual.scale.setScalar(f.baseScale*y),f.label.position.y=2.02*y}}}function l(){r.length=0;for(let h of i)h.actor&&h.root.visible&&r.push({actor:h.actor,root:h.root,ring:h.ring})}function c(h,u){o-=u,o<=0&&(o=.45,a(h),l());for(let d of i){if(!d.actor||!d.root.visible)continue;let p=d.actor;d.root.position.set(p.x,p.y||0,p.z),d.root.rotation.y=p.yaw||0;let x=p.state==="walk"||p.pose==="walk"||p.pose==="run",g=String(p.pose||"stand"),m=x?"move":/talk|pray|write|trade/.test(g)?"talk":/drill|hammer|chop|hoe|tend|mill|post/.test(g)?"work":"idle";if(d.mixer&&(d.mixer.update(u),m!==d.state)){let y={idle:d.idle,move:d.move,talk:d.talk,work:d.work},b=y[m]||d.idle,R=y[d.state]||d.idle;b&&R&&b!==R&&(b.reset().play(),b.crossFadeFrom(R,.15,!0)),d.state=m}let f=Math.hypot(p.x-h.x,p.z-h.z),_=!!p.order;d.label.visible=f<11||_||!!p.hero,d.ring.material.opacity=_?.28:p.hero?.13:.035,d.ring.material.color.setHex(p.team==="valemar"?9288582:p.team==="ashwood"?13929063:_?8368895:14006636)}}return{update:c,get targets(){return r},visibleCount:()=>i.filter(h=>h.actor&&h.root.visible).length,capacity:i.length}}var wn=(n,e=.9,t=0)=>new lt({color:n,roughness:e,metalness:t}),At={grass:wn(6649932,1),road:wn(11836792,1),water:new lt({color:4684689,roughness:.35,metalness:.08,transparent:!0,opacity:.82}),stone:wn(9669760,.96),stoneDark:wn(6775646,.95),wood:wn(7030574,.88),thatch:wn(10192470,1),red:wn(7611700,.86),brown:wn(6636333,.9),slate:wn(5001561,.92),green:wn(3427389,.92),black:wn(2698289,.88),field:wn(7296824,1),crop:wn(9798219,1)},MS=n=>At[n.roof]||At.red;function ng(n){let e=[],t=[],i=(g,m,f,_,y,b,R,E=0,A=!1)=>{let D=new ve(new It(g,m,f),_);return D.position.set(y,b,R),D.rotation.y=E,D.receiveShadow=!0,D.castShadow=A,n.add(D),D},r=i(bn.x1-bn.x0+0,.12,bn.z1-bn.z0,At.grass,(bn.x0+bn.x1)/2,-.12,(bn.z0+bn.z1)/2);for(let g of Object.values(Go))for(let m=0;m<g.length-1;m++){let[f,_]=g[m],[y,b]=g[m+1],R=y-f,E=b-_,A=Math.hypot(R,E),D=Math.atan2(R,E);i(3.3,.045,A,At.road,(f+y)/2,-.035,(_+b)/2,D)}for(let g=0;g<Wr.length-1;g++){let[m,f]=Wr[g],[_,y]=Wr[g+1],b=_-m,R=y-f,E=Math.hypot(b,R),A=Math.atan2(b,R);i(8,.035,E+1.2,At.water,(m+_)/2,-.025,(f+y)/2,A)}i(_n.x1-_n.x0,.22,_n.w,At.stoneDark,(_n.x0+_n.x1)/2,.06,_n.z,0,!0);for(let g=_n.x0+1;g<_n.x1;g+=2.3)i(.18,.65,_n.w+.5,At.wood,g,.38,_n.z,0);for(let g of Xu){i(g.x1-g.x0,.04,g.z1-g.z0,At.field,(g.x0+g.x1)/2,-.025,(g.z0+g.z1)/2);for(let m=g.x0+2;m<g.x1-1;m+=3)i(.13,.08,g.z1-g.z0-2,At.crop,m,.035,(g.z0+g.z1)/2)}for(let[g,m]of[[166,24],[176,24],[186,24],[196,24],[166,32],[176,32],[186,32],[196,32]])i(7,.035,5,At.field,g,-.02,m);for(let g of or){for(let f of g.walls){let _=f.x2-f.x1,y=f.z2-f.z1;i(Math.max(.08,_),g.h,Math.max(.08,y),g.wall===5922147?At.stoneDark:At.stone,(f.x1+f.x2)/2,g.h/2,(f.z1+f.z2)/2,0,Math.hypot(g.cx,g.cz)<115)}let m=i(g.w+.55,.28,g.d+.55,MS(g),g.cx,g.h+.12,g.cz,0,Math.hypot(g.cx,g.cz)<115);m.material=m.material.clone(),m.material.transparent=!0,t.push({mesh:m,b:g}),i(g.door.side==="N"||g.door.side==="S"?2.7:.28,.45,g.door.side==="N"||g.door.side==="S"?.28:2.7,At.wood,g.door.x,g.h-.2,g.door.z,0,!1)}function s(g,m=!1){let f=m?At.stoneDark:At.stone,_=g.h||4.2,y=g.t||1.3,b=g.gate?.z??0;i(g.x1-g.x0,_,y,f,(g.x0+g.x1)/2,_/2,g.z0,0,!0),i(g.x1-g.x0,_,y,f,(g.x0+g.x1)/2,_/2,g.z1,0,!0),i(y,_,g.z1-g.z0,f,g.x1,_/2,(g.z0+g.z1)/2,0,!0);let R=3,E=b;i(y,_,Math.max(.1,E-R-g.z0),f,g.x0,_/2,(g.z0+E-R)/2,0,!0),i(y,_,Math.max(.1,g.z1-(E+R)),f,g.x0,_/2,(E+R+g.z1)/2,0,!0)}s({...ot,gate:{z:0}},!1),s({...Oe,t:1.3,h:4.8},!0);for(let g of[...Pl,...qu]){let m=g.name==="bm",f=new ve(new Ji(g.r,g.r*1.08,g.h,12),m?At.stoneDark:At.stone);f.position.set(g.x,g.h/2,g.z),f.receiveShadow=f.castShadow=Math.hypot(g.x,g.z)<115,n.add(f);let _=new ve(new Ei(g.r*1.22,1.7,12),m?At.green:At.red);_.position.set(g.x,g.h+.8,g.z),n.add(_)}i(4.8,6.2,3.2,At.stoneDark,Oe.x0+1.3,3.1,Oe.gate.z-5.3,0,!0),i(4.8,6.2,3.2,At.stoneDark,Oe.x0+1.3,3.1,Oe.gate.z+5.3,0,!0);for(let[g,m]of Cl){let f=new ve(new Ei(2.4,2.8,4),At.thatch);f.position.set(g,1.35,m),f.rotation.y=Math.PI/4,n.add(f)}let o=70,a=new Ji(.18,.26,1.8,6),l=new Ei(1.15,3,7),c=new Fr(a,At.wood,o),h=new Fr(l,wn(4218680,1),o),u=new vt,d=1937,p=()=>(d=d*1664525+1013904223>>>0,d/4294967296);for(let g=0;g<o;g++){let m,f;do m=45+p()*330,f=-150+p()*450;while(m>150&&m<260&&f>-120&&f<90||m>380&&f>215&&f<295);let _=.75+p()*.75;u.position.set(m,.9*_,f),u.scale.set(_,_,_),u.updateMatrix(),c.setMatrixAt(g,u.matrix),u.position.set(m,2.8*_,f),u.updateMatrix(),h.setMatrixAt(g,u.matrix)}c.receiveShadow=!0,h.receiveShadow=!0,n.add(c,h);function x(g){let m=Zs(g.x,g.z);for(let f of t){let _=m===f.b;f.mesh.material.opacity=_?.18:1,f.mesh.material.depthWrite=!_}}return{update:x,roofs:t,terrain:r}}var En={pauldronRadius:.065,capeTopY:1.34,capeBottomY:.78,capeTopHalfWidth:.18,capeBottomHalfWidth:.24,sashHeight:.42,crownRadius:.13,crownSpikeHeight:.11,crownHeadOffset:.278,crownBandHeight:.065},Ln={eyeX:.056,eyeZ:.138,eyeRadius:.021,browZ:.184,browWidth:.078,noseTipY:-.176,mouthZ:0,headTopZ:.252,headBottomZ:-.084,headFrontForeheadY:-.122,headFrontMouthY:-.142,headFrontChinY:-.132,headBackY:.118},Yt={fov:66,defaultMode:"third",look:{yawSensitivity:.0048,pitchSensitivity:.0034,angleDamping:14,positionDamping:13},third:{standingDistance:3.95,seatedDistance:3.75,standingTargetY:.94,seatedTargetY:.84,defaultPitch:.08,minPitch:-.06,maxPitch:.26},first:{eyeHeight:1.62,minPitch:-.52,maxPitch:.52}};function ig(n,e,t,i){try{return n.setItem(e,typeof t=="string"?t:JSON.stringify(t)),!0}catch(r){return i?.(r),!1}}function rg(n,e,t,i=1){let r=Math.max(0,Number(n)||0),s=0;for(;r>0;){let o=Math.min(i,r);e(o),t(o),r-=o,s++}return s}var kt=n=>document.getElementById(n),SS=kt("game"),lc=kt("begin"),wS=kt("intro"),Li=kt("interact"),ES=kt("orders"),vg=kt("attack"),$o=kt("cameraMode"),Ql=kt("nearby"),Fi=kt("dialogue"),yr=kt("speakerRole"),_r=kt("speakerName"),hi=kt("dialogueText"),gt=kt("choices"),TS=kt("leaveDialogue"),Mg=kt("objective"),yd=kt("toast"),Ui=kt("warStatus"),un=new Po({antialias:!0,powerPreference:"high-performance"});un.setPixelRatio(Math.min(devicePixelRatio||1,1.25));un.setSize(innerWidth,innerHeight);un.outputColorSpace=dt;un.toneMapping=Qh;un.toneMappingExposure=1.1;un.shadowMap.enabled=!0;un.shadowMap.type=jh;SS.appendChild(un.domElement);window.__crownlands3dBooted=!0;window.dispatchEvent(new Event("crownlands3dready"));var tn=new tl;tn.background=new ye(9480125);tn.fog=new el(9480125,28,205);var pr=new Gt(Yt.fov,innerWidth/innerHeight,.08,280),AS=new qs,RS=new _l;function cc(){let n=window.visualViewport,e=Math.max(1,Math.round(n?.width||innerWidth)),t=Math.max(1,Math.round(n?.height||innerHeight));un.setSize(e,t,!1),pr.aspect=e/t,pr.updateProjectionMatrix()}addEventListener("resize",cc,{passive:!0});addEventListener("orientationchange",()=>requestAnimationFrame(cc),{passive:!0});window.visualViewport?.addEventListener("resize",cc,{passive:!0});cc();var bg=new gl(14281471,5849904,2);tn.add(bg);var Jr=new Vs(16770482,3);Jr.position.set(-7,13,8);Jr.castShadow=!0;Jr.shadow.mapSize.set(1024,1024);Object.assign(Jr.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:32});tn.add(Jr);var Sg=new Gs(16760168,12,12,2);Sg.position.set(0,3.3,5.7);tn.add(Sg);var hc=new ve(new dl(11.5,64),new lt({color:11114620,roughness:.92}));hc.rotation.x=-Math.PI/2;hc.position.y=-.035;hc.receiveShadow=!0;tn.add(hc);var uc=new Ut;tn.add(uc);var Ce=new Ut;Ce.position.set(0,0,9);Ce.rotation.y=Math.PI;tn.add(Ce);var _d=new ye,wg=new C,sg=new C,CS=new C,fr=new C,og=new C,ag=new C,lg=new C,cg=new C,oi,Jl,Nd,Ud,Od,zd,Fd,kd,Bd,Hd,to,no,Gd=0,nc=!1,Oi=Yt.defaultMode,li=0,dc=0,Vn=Yt.third.defaultPitch,$r=Yt.third.defaultPitch,fc=0,pc=0,cn=null,Tn=!1,ec=!1;var hn=!1,jr=null,Sd=null,vd=0,wd=60,ic="patrol",ro="drill",Wn=null,Qr=null,rc=null,io=null,Kr="idle",mr=null,Di=null,Ed="ROYAL COURT",ci=!1,Td=0,zi=0,Eg=[],sc=[],Tg=[],mc=new Map,Ad=null,si=null;try{Ad=JSON.parse(localStorage.getItem("crownlands_state_v2")||"null")}catch{}try{si=JSON.parse(localStorage.getItem("crownlands_realm_v1")||"null")}catch{}if(Ad)$u(Ad);else{let n=Dl();si&&(n.realm.coin=si.gold??n.realm.coin,n.realm.favor=si.favor??n.realm.favor,n.realm.security=si.security??n.realm.security,n.realm.prosperity=si.prosperity??n.realm.prosperity,n.clock=8+Math.max(0,(si.day||1)-1)*24,n.guard.mode=si.guardMode||"routine",n.army.directive=si.armyMode||"routine",n.army.size=si.armySize||20),$u(n)}Jm();var De={get gold(){return I.realm.coin},set gold(n){I.realm.coin=n},get favor(){return I.realm.favor},set favor(n){I.realm.favor=n},get security(){return I.realm.security},set security(n){I.realm.security=n},get prosperity(){return I.realm.prosperity},set prosperity(n){I.realm.prosperity=n},get day(){return an()},get armySize(){return I.army.size},set armySize(n){I.army.size=n},get guardMode(){return I.guard.mode},set guardMode(n){I.guard.mode=n},get armyMode(){return I.army.directive},set armyMode(n){I.army.directive=n}},hg=!1,$e=()=>(I.king.x=Ce.position.x,I.king.z=Ce.position.z,I.king.yaw=Ce.rotation.y,I.king.seated=hn,$m(),ig(localStorage,"crownlands_state_v2",Im(),n=>{console.warn("Crownlands save failed",n),hg||(hg=!0,Pe("SAVE UNAVAILABLE \u2014 PROGRESS MAY NOT PERSIST"))}));function jt(){Js()}function Dt(){for(let n of["gold","favor","security","prosperity"])kt(n).textContent=De[n];document.querySelector(".royal-chip small").textContent="THE CROWNLANDS \xB7 "+Ul().toUpperCase()+" \xB7 DAY "+an()+" \xB7 YEAR "+Zu()}Dt();var Ni=null,ug=.18;function Ag(){try{Ni||(Ni=new(window.AudioContext||window.webkitAudioContext)),Ni.state==="suspended"&&Ni.resume()}catch{}}function Zr(n,e=.18,t=.025,i="sine",r=0){if(!Ni)return;let s=Ni.createOscillator(),o=Ni.createGain(),a=Ni.currentTime+r;s.type=i,s.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(0,a),o.gain.linearRampToValueAtTime(t,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+e),s.connect(o).connect(Ni.destination),s.start(a),s.stop(a+e+.03)}function PS(){Zr(392,.25,.025,"triangle",0),Zr(523,.3,.025,"triangle",.12),Zr(659,.35,.02,"triangle",.24)}function IS(){Zr(130,.55,.035,"sawtooth",0),Zr(110,.55,.03,"sawtooth",.48)}function LS(){Zr(420,.09,.018,"sawtooth",0),Zr(190,.12,.015,"triangle",.06)}function DS(n){ug=I.clock%24/24;let e=(ug-.25)*Math.PI*2,t=.56+.36*Math.sin(e);Jr.position.set(Math.cos(e)*16,5+Math.max(0,Math.sin(e))*15,Math.sin(e)*13),Jr.intensity=1.25+Math.max(.05,t)*2.1,bg.intensity=.8+Math.max(.05,t)*1.45,_d.setHSL(.58,.28,Jn.clamp(.22+t*.38,.24,.62)),tn.background.copy(_d),tn.fog.color.copy(_d)}var Rg={captain:[{text:"Your Majesty, raiders crossed the eastern ford at dawn. The villages ask for the Crown\u2019s protection.",choices:[{title:"Ride out the Royal Guard",note:"\u221270 coin \xB7 +16 security \xB7 +6 favor",delta:{gold:-70,security:16,favor:6}},{title:"Fortify the villages",note:"\u221245 coin \xB7 +9 security \xB7 +5 prosperity",delta:{gold:-45,security:9,prosperity:5}}]},{text:"Sire, two barons refuse to send their levies. Shall I enforce the royal summons?",choices:[{title:"Enforce the summons",note:"+13 security \xB7 \u22128 favor",delta:{security:13,favor:-8}},{title:"Call them to court first",note:"+6 favor \xB7 \u22123 security",delta:{favor:6,security:-3}}]}],merchant:[{text:"Your Majesty, grain prices have doubled after the poor harvest. The guild asks you to open the royal granaries.",choices:[{title:"Open the granaries",note:"\u221290 coin \xB7 +14 favor \xB7 +9 prosperity",delta:{gold:-90,favor:14,prosperity:9}},{title:"Keep the royal reserve",note:"+80 coin \xB7 \u221212 favor \xB7 \u22126 prosperity",delta:{gold:80,favor:-12,prosperity:-6}}]},{text:"The southern merchants offer a rich caravan tax if the Crown guarantees the road.",choices:[{title:"Guarantee the road",note:"\u221255 coin \xB7 +10 prosperity \xB7 +5 security",delta:{gold:-55,prosperity:10,security:5}},{title:"Tax them heavily",note:"+130 coin \xB7 \u22128 prosperity",delta:{gold:130,prosperity:-8}}]}],chancellor:[{text:"Your Grace, the high nobles demand another exemption from crown tax. They say tradition is on their side.",choices:[{title:"No one stands above the Crown",note:"+140 coin \xB7 \u221211 favor",delta:{gold:140,favor:-11}},{title:"Grant a one-year exemption",note:"+9 favor \xB7 \u2212100 coin",delta:{favor:9,gold:-100}}]},{text:"A neighboring duke proposes a marriage alliance with your house. The treaty would calm the western border.",choices:[{title:"Accept the alliance",note:"+10 security \xB7 +5 prosperity",delta:{security:10,prosperity:5}},{title:"Keep the Crown independent",note:"+5 favor \xB7 \u22125 security",delta:{favor:5,security:-5}}]}],steward:[{text:"Majesty, the old stone bridge is failing. Rebuilding it would help every market town in the realm.",choices:[{title:"Rebuild it in royal stone",note:"\u2212120 coin \xB7 +15 prosperity \xB7 +5 favor",delta:{gold:-120,prosperity:15,favor:5}},{title:"Order local lords to repair it",note:"\u22124 favor \xB7 +7 prosperity",delta:{favor:-4,prosperity:7}}]},{text:"The people ask for a royal feast to mark the first week of your reign.",choices:[{title:"Feast for the whole city",note:"\u221285 coin \xB7 +13 favor \xB7 +4 prosperity",delta:{gold:-85,favor:13,prosperity:4}},{title:"Spend it on the watch instead",note:"\u221255 coin \xB7 +10 security",delta:{gold:-55,security:10}}]}]};var gc=n=>new Promise((e,t)=>AS.load(n,e,void 0,t));function xc(n,e=!1){n.traverse(t=>{t.isMesh&&(t.castShadow=e,t.receiveShadow=!0,t.material&&(t.material=t.material.clone()))})}function NS(n){let e=document.createElement("canvas");e.width=512,e.height=128;let t=e.getContext("2d");t.fillStyle="rgba(13,11,13,.78)",t.beginPath(),t.roundRect(20,30,472,70,18),t.fill(),t.strokeStyle="rgba(232,205,133,.75)",t.lineWidth=3,t.stroke(),t.fillStyle="#ffe4a5",t.font="bold 31px Georgia",t.textAlign="center",t.fillText(n,256,75);let i=new ks(e);i.colorSpace=dt;let r=new zs(new Or({map:i,transparent:!0,depthWrite:!1}));return r.scale.set(2.6,.65,1),r.position.y=2.35,r}function US(){let n=new Ut,e=new lt({color:5977117,roughness:.62}),t=new lt({color:14198846,roughness:.28,metalness:.72}),i=new lt({color:7609641,roughness:.78}),r=new lt({color:9404524,roughness:.88}),s=(a,l,c,h,u,d,p)=>{let x=new ve(new It(a,l,c),h);x.position.set(u,d,p),x.castShadow=x.receiveShadow=!0,n.add(x)};s(3,.22,2.15,r,0,.11,0),s(2.35,.22,1.55,r,0,.33,-.08),s(1.05,.23,.85,i,0,.66,-.03),s(1.15,2,.22,e,0,1.57,.33),s(1,1.55,.12,i,0,1.6,.2),s(.13,.85,.13,t,-.64,1.08,0),s(.13,.85,.13,t,.64,1.08,0),s(.32,.12,.68,t,-.64,1.38,-.03),s(.32,.12,.68,t,.64,1.38,-.03);for(let a=-2;a<=2;a++){let l=new ve(new Ei(.11,.38,5),t);l.position.set(a*.23,2.73,.33),l.castShadow=!0,n.add(l)}n.position.set(0,0,6.15),n.rotation.y=Math.PI,tn.add(n);let o=new ve(new $i(.8,1,40),new on({color:16767602,transparent:!0,opacity:.2,side:$t}));return o.rotation.x=-Math.PI/2,o.position.set(0,.02,5),tn.add(o),{id:"throne",role:"Royal Throne",name:"The Crown",pos:new C(0,0,5),ring:o,isThrone:!0}}var $l=US();async function OS(){try{let n=await gc("./assets/royal-courtyard.glb");xc(n.scene),uc.add(n.scene)}catch(n){console.error(n)}Gd++,Dg()}async function zS(){Di=new Ut,Di.scale.setScalar(1),Ce.add(Di);try{let n=await gc("./assets/guard.glb");oi=n.scene,xc(oi,!0),Ce.add(oi),Zl(oi,1.8),oi.traverse(t=>{let i=(t.name||"").toLowerCase();if(i==="thigh-l"&&(Nd=t),i==="thigh-r"&&(Ud=t),i==="shin-l"&&(Od=t),i==="shin-r"&&(zd=t),i==="arm-l"&&(Fd=t),i==="arm-r"&&(kd=t),i==="fore-l"&&(Bd=t),i==="fore-r"&&(Hd=t),i==="torso"&&(no=t),i==="head"&&(Jl=t),i==="city-guard"&&(to=t),(i==="face"||i==="hair"||i.startsWith("weapon"))&&(t.visible=!1),i&&mc.set(t.name,{q:t.quaternion.clone(),p:t.position.clone()}),t.isMesh&&t.material){t.frustumCulled=!1;let r=Array.isArray(t.material)?t.material:[t.material];for(let s of r){s.opacity=1,s.transparent=!1,s.alphaTest=0,s.depthWrite=!0,s.visible=!0;let o=(s.name||"").toLowerCase();o.includes("blue")?(s.color.set(1452632),s.metalness=.12,s.roughness=.48):o.includes("gold")?(s.color.set(14726731),s.metalness=.74,s.roughness=.24):o.includes("iron")?(s.color.set(3159875),s.metalness=.72,s.roughness=.3):o.includes("dirt")?(s.color.set(3809558),s.roughness=.74):o.includes("timber")?(s.color.set(2626829),s.roughness=.66):o.includes("skin")&&(s.color.set(12553058),s.metalness=0,s.roughness=.72)}}}),fg(),Ce.updateMatrixWorld(!0),oi.updateMatrixWorld(!0),no&&(no.updateMatrixWorld(!0),no.attach(Di));let e=dg();if(Jl?(e.position.set(0,En.crownHeadOffset,0),Jl.add(e),Jl.add(FS())):(e.position.set(0,1.76,0),Di.add(e)),Og(),n.animations?.length){Wn=new Hr(oi);let t=n.animations.find(s=>/^idle$/i.test(s.name))||n.animations[0],i=n.animations.find(s=>/arm-swing/i.test(s.name))||t,r=n.animations.find(s=>/weapon-raise/i.test(s.name))||i;t&&(Qr=Wn.clipAction(t),Qr.play()),i&&(rc=Wn.clipAction(i)),r&&(io=Wn.clipAction(r),io.setLoop(nu,1),io.clampWhenFinished=!0),Eg.push(Wn)}}catch(n){console.error(n);let e=new ve(new ul(.28,1.08,6,12),new lt({color:1452632,metalness:.42,roughness:.4}));e.position.y=.9,e.castShadow=!0,Ce.add(e),oi=e,fg();let t=dg();t.position.set(0,1.76,0),Di.add(t)}Gd++,Dg()}function FS(){let n=new Ut;n.name="king-face-stock-head-v26",n.userData.isKingFace=!0,n.userData.profileSource="head.001";let e=new lt({color:12684131,roughness:.72,metalness:0}),t=new lt({color:9658439,roughness:.84,metalness:0}),i=new lt({color:15919835,roughness:.58,metalness:0}),r=new lt({color:4350580,roughness:.42,metalness:0}),s=new lt({color:526344,roughness:.7}),o=new lt({color:3481878,roughness:.9,metalness:0}),a=new lt({color:3810329,roughness:.94,metalness:0}),l=new lt({color:5909545,roughness:.84,metalness:0}),c=new ve(new It(.214,.112,.02),o);c.name="king-hair-top",c.position.set(0,.006,.238),n.add(c);let h=new ve(new It(.218,.016,.096),o);h.name="king-hair-back",h.position.set(0,.116,.174),n.add(h);for(let _ of[-.119,.119]){let y=new ve(new It(.015,.07,.092),o);y.position.set(_,.03,.166),n.add(y)}for(let _ of[-.055,-.018,.018,.055]){let y=new ve(new It(.033,.012,.022),o);y.position.set(_,-.116,.205+(Math.abs(_)<.025?.005:0)),y.rotation.z=_*.45,n.add(y)}for(let _ of[-Ln.eyeX,Ln.eyeX]){let y=new ve(new It(.056,.006,.029),t);y.position.set(_,-.129,Ln.eyeZ),n.add(y);let b=new ve(new kr(Ln.eyeRadius,10,7),i);b.scale.set(1.12,.2,.52),b.position.set(_,-.134,Ln.eyeZ),n.add(b);let R=new ve(new kr(.0105,8,6),r);R.scale.set(.88,.16,1),R.position.set(_,-.139,Ln.eyeZ),n.add(R);let E=new ve(new kr(.0052,7,5),s);E.scale.set(.88,.14,1),E.position.set(_,-.142,Ln.eyeZ),n.add(E);let A=new ve(new It(Ln.browWidth,.008,.016),o);A.position.set(_,-.132,Ln.browZ),A.rotation.y=_<0?-.14:.14,n.add(A)}let u=new Pt,d=[-.017,-.128,.156,.017,-.128,.156,-.022,-.132,.082,.022,-.132,.082,0,Ln.noseTipY,.066,-.015,-.133,.047,.015,-.133,.047],p=[0,2,4,0,4,1,1,4,3,2,5,4,4,6,3,5,6,4,0,1,3,0,3,2];u.setAttribute("position",new st(d,3)),u.setIndex(p),u.computeVertexNormals();let x=new ve(u,e);x.name="king-profile-nose",x.castShadow=!0,n.add(x);for(let _ of[-.104,.104]){let y=new ve(new It(.024,.007,.098),a);y.position.set(_,-.127,.025),n.add(y)}let g=new ve(new It(.16,.007,.052),a);g.name="king-trimmed-beard",g.position.set(0,-.132,-.043),n.add(g);for(let _ of[-.02,.02]){let y=new ve(new It(.04,.006,.011),a);y.position.set(_,-.143,.034),y.rotation.y=_<0?-.08:.08,n.add(y)}let m=new ve(new It(.076,.006,.009),l);m.position.set(0,-.143,Ln.mouthZ),n.add(m);let f=new ve(new It(.056,.005,.008),t);return f.position.set(0,-.139,Ln.mouthZ-.017),n.add(f),n}function dg(){let n=new Ut;n.name="royal-crown",n.userData.isRoyalCrown=!0;let e=new lt({color:14990421,metalness:.84,roughness:.2}),t=new lt({color:10950962,metalness:.2,roughness:.26}),i=En.crownRadius,r=new ve(new Ji(i,i,En.crownBandHeight,20,1,!0),e);r.castShadow=!0,n.add(r);for(let s=0;s<8;s++){let o=s/8*Math.PI*2,a=new ve(new Ei(.024,En.crownSpikeHeight,5),e);a.position.set(Math.cos(o)*i*.8,En.crownBandHeight*.5+En.crownSpikeHeight*.43,Math.sin(o)*i*.8),a.castShadow=!0,n.add(a)}for(let s of[0,Math.PI/2,Math.PI,Math.PI*1.5]){let o=new ve(new Bs(.019),t);o.position.set(Math.sin(s)*i*1.01,0,Math.cos(s)*i*1.01),n.add(o)}return n}function fg(){let n=Di||Ce,e=new lt({color:14660689,metalness:.78,roughness:.23}),t=new lt({color:7477034,roughness:.68,side:$t}),i=new lt({color:1320524,metalness:.18,roughness:.5}),r=new lt({color:11999541,metalness:.18,roughness:.25}),s=new ve(new It(.075,.055,.028),e);s.position.set(0,.86,.19),s.castShadow=!0,n.add(s);let o=new ve(new It(.07,En.sashHeight,.018),t);o.position.set(.045,1.18,.185),o.rotation.z=-.38,o.castShadow=!0,n.add(o);let a=new ve(new Bs(.038),e);a.position.set(0,1.3,.215),a.castShadow=!0,n.add(a);let l=new ve(new Bs(.017),r);l.position.set(0,1.3,.245),n.add(l);let c=7,h=7,u=[],d=[];for(let x=0;x<h;x++){let g=x/(h-1),m=En.capeTopY+(En.capeBottomY-En.capeTopY)*g,f=En.capeTopHalfWidth+(En.capeBottomHalfWidth-En.capeTopHalfWidth)*g;for(let _=0;_<c;_++){let y=_/(c-1),b=(y*2-1)*f,R=Math.pow(Math.abs(y-.5)*2,1.7)*.018,E=-.17-.035*g+R;u.push(b,m,E)}}for(let x=0;x<h-1;x++)for(let g=0;g<c-1;g++){let m=x*c+g,f=m+1,_=m+c,y=_+1;d.push(m,_,f,f,_,y)}let p=new Pt;p.setAttribute("position",new st(u,3)),p.setIndex(d),p.computeVertexNormals(),mr=new ve(p,t),mr.castShadow=!0,mr.receiveShadow=!0,n.add(mr);for(let x of[-.145,.145]){let g=new ve(new kr(.022,10,8),e);g.position.set(x,1.415,-.145),g.castShadow=!0,n.add(g)}}function Cg(){for(let n of[to,no,Nd,Ud,Od,zd,Fd,kd,Bd,Hd]){if(!n)continue;let e=mc.get(n.name);e&&(n.quaternion.copy(e.q),n.position.copy(e.p))}}function Ii(n,e,t){if(!n)return;let i=mc.get(n.name);i&&n.quaternion.copy(i.q),n.quaternion.multiply(new Qt().setFromAxisAngle(e,t))}function tc(n){if(!Wn||hn||n===Kr)return;let e=n==="walk"?rc:Qr,t=Kr==="walk"?rc:Qr;e&&(e.reset().play(),t&&t!==e&&e.crossFadeFrom(t,.18,!0)),Kr=n}var Md=null;async function kS(){return Md||(Md=gc("./assets/guard.glb")),Md}var BS=()=>Math.floor((I.clock%24+24)%24/8),yc=()=>ft.filter(n=>n.alive&&n.role==="royalguard"&&n.shift===BS());function oo(){let n=document.getElementById("guardStatus");if(!n)return;let e={patrol:"PATROL",escort:"2-KING ESCORT",throne:"THRONE POSTS",gate:"MAIN GATE",routine:"ROUTINE"}[ic]||String(ic).toUpperCase(),t={drill:"DRILLING",routine:"ROUTINE",muster:"MUSTERED",gate:"DEFEND GATE",follow:"FOLLOW KING",campaign:"MARCH ON BLACKMERE"}[ro]||String(ro).toUpperCase();n.textContent="ROYAL GUARD "+yc().length+"/18 \xB7 "+e+"   |   ARMY "+(I.army.size||0)+" \xB7 "+t}function jo(n){ic=n,De.guardMode=n,I.guard.mode=n,I.guard.until=n==="routine"?0:I.clock+4;let e=yc();for(let t of ft.filter(i=>i.role==="royalguard"))Yo(t);n==="escort"?e.slice(0,2).forEach((t,i)=>Sn(t,{type:"follow",off:[i?1:-1,-2.2],hours:4,label:"Escorting the King"})):n==="patrol"?e.forEach((t,i)=>Sn(t,{type:"patrol",route:Ri.castle.map((r,s)=>[(r[0]||0)+(i%3-1)*.55,(r[1]||0)+((i+s)%2?-.45:.45)]),pause:5,hours:4,label:"Patrolling the castle"})):n==="throne"?e.forEach((t,i)=>Sn(t,{type:"post",place:"plaza",spot:"guard",i,hours:4,label:"Guarding the Royal Throne"})):n==="gate"&&e.forEach((t,i)=>Sn(t,{type:"post",place:"gate",spot:"guard",i,hours:4,label:"Holding the main gate"})),$e(),oo(),Pe("ROYAL GUARD \u2014 "+n.toUpperCase())}function gr(n){ro=n,De.armyMode=n,I.army.directive=n,I.army.until=n==="routine"?0:I.clock+4;let e=ft.filter(t=>t.alive&&["soldier","sergeant","captain"].includes(t.role));for(let t of e)Yo(t);n==="follow"?e.slice(0,12).forEach((t,i)=>Sn(t,{type:"follow",off:[(i%4-1.5)*1.25,-4-Math.floor(i/4)*1.5],hours:4,label:"Marching with the King"})):n==="campaign"&&(I.army.until=I.clock+8,I.war.campaign={target:"valemar",state:"marching",started:I.clock},e.slice(0,22).forEach((t,i)=>Sn(t,{type:"post",place:"bmYard",spot:"drill",i,hours:8,label:"Marching on Blackmere"}))),$e(),oo(),Pe("ARMY \u2014 "+n.toUpperCase())}function HS(){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Royal Command",_r.textContent="War Council",hi.textContent="Your Majesty, the household guard, field army, realm policy, and foreign affairs are under your authority.",gt.innerHTML="",GS(),Rd(),VS(),Cd()}function Rd(){let n=document.createElement("div");n.className="command-title",n.textContent="ROYAL GUARD",gt.appendChild(n);for(let[t,i,r]of[["routine","Resume normal shifts","Cancel special orders; guards return to work/rest rotation."],["escort","Escort the King","Two guards escort you; the rest keep their normal posts."],["patrol","Patrol the castle","The active shift circulates through castle districts."],["throne","Guard the throne","The active shift takes ceremonial throne-room posts."],["gate","Hold the main gate","Deploy the active Royal Guard shift at the outer gate."]]){let s=document.createElement("button");s.innerHTML="<b>"+i+"</b><small>"+r+"</small>",s.onclick=()=>{jo(t),je()},gt.appendChild(s)}let e=document.createElement("div");e.className="command-title",e.textContent="FIELD ARMY",gt.appendChild(e);for(let[t,i,r]of[["routine","Resume garrison routine","Officers and soldiers return to ordinary duty, meals, training and rest."],["drill","Train at the barracks","Soldiers return to formation drills."],["muster","Muster in the royal court","Bring the field company before their king."],["gate","Reinforce the main gate","March the army to defend the entrance."],["follow","March with the King","A twelve-soldier royal column follows at a respectful distance."]]){let s=document.createElement("button");s.innerHTML="<b>"+i+"</b><small>"+r+"</small>",s.onclick=()=>{gr(t),je()},gt.appendChild(s)}if(I.powers.valemar.war){let t=document.createElement("button");t.innerHTML="<b>March on Blackmere</b><small>Send the field army down the Royal Road to confront House Valemar.</small>",t.onclick=()=>{gr("campaign"),je()},gt.appendChild(t)}}function GS(){let n=(I.clock%24+24)%24,e=Math.floor(n),t=Math.floor((n-e)*60),i=Kl(),r=document.createElement("div");r.className="command-report",r.innerHTML="<b>COUNCIL REPORT</b><span>"+Ul()+" \xB7 Day "+an()+" \xB7 "+String(e).padStart(2,"0")+":"+String(t).padStart(2,"0")+"</span><span>Stores \xB7 Grain "+Math.round(I.stock.grain)+" \xB7 Wood "+Math.round(I.stock.wood)+" \xB7 Iron "+Math.round(I.stock.iron)+" \xB7 Arms "+Math.round(I.stock.arms)+"</span><span>Royal Guard "+yc().length+"/18 on duty \xB7 Army "+I.army.size+"</span><span>Blackmere "+i.valemar.rel+" \xB7 Kestrel "+i.kestrel.rel+" \xB7 Stonehollow "+i.guild.rel+" \xB7 Ashwood "+i.ashwood.rel+"</span>",gt.appendChild(r)}function VS(){let n=document.createElement("div");n.className="command-title",n.textContent="ROYAL POLICY",gt.appendChild(n);let e=[["Light taxes","Less revenue \xB7 +4 favor \xB7 +2 prosperity",()=>{I.realm.tax=.75,De.favor+=4,De.prosperity+=2,jt(),$e(),Dt(),je(),Pe("THE CROWN LIGHTENS TAXES")}],["Standard taxes","Restore balanced taxation",()=>{I.realm.tax=1,$e(),je(),Pe("STANDARD TAXATION RESTORED")}],["War levy","More revenue \xB7 -5 favor \xB7 +2 security",()=>{I.realm.tax=1.35,De.favor-=5,De.security+=2,jt(),$e(),Dt(),je(),Pe("A WAR LEVY IS PROCLAIMED")}],["Generous rations","Use more grain \xB7 +3 favor",()=>{I.realm.ration=1.15,De.favor+=3,jt(),$e(),Dt(),je(),Pe("GENEROUS RATIONS ORDERED")}],["Conserve grain","Use less grain \xB7 -3 favor",()=>{I.realm.ration=.8,De.favor-=3,jt(),$e(),Dt(),je(),Pe("THE GRANARY CONSERVES GRAIN")}],["Fund the farms","100 coin \xB7 stronger grain production",()=>{xr(100)&&(I.realm.farmFocus=1.2,De.prosperity+=3,jt(),$e(),Dt(),Pe("THE CROWN FUNDS FARM PRODUCTION")),je()}]];for(let[t,i,r]of e){let s=document.createElement("button");s.innerHTML="<b>"+t+"</b><small>"+i+"</small>",s.onclick=r,gt.appendChild(s)}}function Cd(){let n=document.createElement("div");n.className="command-title",n.textContent="DIPLOMACY",gt.appendChild(n);let e=Kl(),t=e.valemar,i=e.kestrel,r=[];I.powers.kestrel.treaties.trade||r.push(["Trade accord with House Kestrel","Relation "+i.rel+" \xB7 improves long-term stability",()=>{qm("kestrel","trade",!0),De.prosperity+=4,$e(),Dt(),je(),Pe("TRADE ACCORD SIGNED WITH HOUSE KESTREL")}]),I.powers.valemar.defeated||I.powers.valemar.vassal||(r.push(["Send envoy and gift to Blackmere","80 coin \xB7 improve relations with House Valemar",()=>{xr(80)&&(Jo("valemar",15,"A royal envoy carried gifts to Blackmere."),$e(),je(),Pe("ENVOY SENT TO BLACKMERE"))}]),I.powers.valemar.war?r.push(["Offer peace to House Valemar","End the current war",()=>{xd("valemar"),$e(),je(),Pe("PEACE CONCLUDED WITH BLACKMERE")}]):r.push(["Declare war on House Valemar","Mobilize the Crown against Blackmere Keep",()=>{gd("valemar")&&(I.army.directive="muster",ro="muster",Pe("THE CROWN IS AT WAR WITH HOUSE VALEMAR")),$e(),je()}]));for(let[s,o,a]of r){let l=document.createElement("button");l.innerHTML="<b>"+s+"</b><small>"+o+"</small>",l.onclick=a,gt.appendChild(l)}}function Vd(n){return String(n.role||"subject").replaceAll(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase())}function WS(n){let e=n.role;return["farmer"].includes(e)?{title:"Work the fields",note:"Return to farm labor by royal order.",ord:{type:"work",place:n.work||"f1",spot:"hoe",pose:"hoe",prod:"grain",cycle:38,hours:3,label:"Working the fields by royal order"}}:e==="mbfarmer"?{title:"Work the Millbrook plots",note:"Direct three hours of farm labor.",ord:{type:"work",place:"mbfield",spot:"hoe",pose:"hoe",prod:"grain",cycle:38,hours:3,label:"Working Millbrook fields by royal order"}}:e==="woodcutter"?{title:"Cut timber for the Crown",note:"Send timber production to the royal economy.",ord:{type:"work",place:"lumber",spot:"chop",pose:"chop",prod:"wood",cycle:40,hours:3,label:"Cutting royal timber"}}:["smith","apprentice"].includes(e)?{title:"Forge arms for the garrison",note:"Increase weapons production.",ord:{type:"work",place:"smithy",spot:"anvil",pose:"hammer",prod:"arms",cycle:42,hours:3,label:"Forging arms by royal order"}}:e==="miner"?{title:"Mine iron for the Crown",note:"Increase iron production.",ord:{type:"work",place:"mine",spot:"dig",pose:"chop",prod:"ore",cycle:42,hours:3,label:"Mining iron by royal order"}}:e==="merchant"?{title:"Trade in the royal market",note:"Increase taxable trade activity.",ord:{type:"work",place:"market",spot:"stall",pose:"trade",prod:"trade",cycle:38,hours:3,label:"Trading by royal order"}}:["cook","kitchenhand"].includes(e)?{title:"Prepare a royal meal",note:"Return to the kitchens and feed the household.",ord:{type:"work",place:"kitchens",spot:"cook",pose:"cook",prod:"meals",cycle:38,hours:3,label:"Preparing royal meals"}}:["servant","maid"].includes(e)?{title:"Attend the Great Hall",note:"Serve the royal household.",ord:{type:"work",place:"greatHall",spot:"stand",pose:"carry",cycle:35,hours:2,label:"Attending the Great Hall by royal order"}}:e==="stablehand"?{title:"Tend the royal horses",note:"Return to stable duty.",ord:{type:"work",place:"stable",spot:"tend",pose:"tend",cycle:38,hours:3,label:"Tending the royal horses"}}:["treasurer","scribe"].includes(e)?{title:"Prepare a report for the Crown",note:"Work from the treasury ledgers.",ord:{type:"work",place:"treasury",spot:"desk",pose:"write",cycle:45,hours:2,label:"Preparing a royal report"}}:e==="priest"?{title:"Hold service in the chapel",note:"Return to the chapel altar.",ord:{type:"work",place:"chapel",spot:"altar",pose:"pray",cycle:48,hours:2,label:"Holding chapel service"}}:null}function Wd(n){if(Tn=!0,Fi.classList.remove("hidden"),yr.textContent=Vd(n),_r.textContent=n.name,gt.innerHTML="",n.petitionKey){Xd(n);return}if(n.hero==="rival"){let i=I.powers.valemar;hi.textContent="Lord Maren watches you carefully. Relations: "+Math.round(i.rel)+". "+(i.defeated||i.vassal?"Blackmere has submitted to the Crownlands.":i.war?"Your realms are at war.":"Blackmere remains an independent rival power.");let r=i.defeated||i.vassal?[]:i.war?[["Offer peace","Attempt to end the war",()=>{xd("valemar"),$e(),je()}]]:[["Demand improved relations","Royal pressure \xB7 relation may worsen",()=>{Jo("valemar",-5,"The Crown issued a hard demand to Blackmere."),$e(),je()}],["Offer a pact","Improve relations by diplomacy",()=>{Jo("valemar",10,"The King offered Blackmere a limited pact."),$e(),je()}]];for(let[s,o,a]of r){let l=document.createElement("button");l.innerHTML="<b>"+s+"</b><small>"+o+"</small>",l.onclick=a,gt.appendChild(l)}return}hi.textContent=(n.order?"Royal order active: "+(n.order.label||n.order.type)+". ":"")+"Current activity: "+hd(n)+".";let e=[["Report to the Royal Court","Come before the King for a short audience",()=>{Sn(n,{type:"goto",place:"plaza",spot:"petition",dur:18,label:"Reporting to the King"}),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 REPORT TO COURT")}],["Follow the King","Follow personally for two game hours",()=>{Sn(n,{type:"follow",off:[0,-2.3],hours:2,label:"Following the King"}),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 FOLLOW")}],["Wait here","Hold this place for one game hour",()=>{Sn(n,{type:"post",pos:{x:Ce.position.x,z:Ce.position.z},hours:1,label:"Waiting where the King commanded"}),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 HOLD POSITION")}],["Resume normal duties","Cancel direct royal order and return to ordinary life",()=>{Yo(n),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 RESUME DUTIES")}]],t=WS(n);t&&e.splice(1,0,[t.title,t.note,()=>{Sn(n,t.ord),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 "+t.title.toUpperCase())}]),["royalguard","soldier","sergeant","captain"].includes(n.role)&&e.splice(1,0,["Hold the main gate","Take a temporary defensive post",()=>{Sn(n,{type:"post",place:"gate",spot:"guard",hours:3,label:"Holding the main gate by royal order"}),$e(),je(),Pe(n.name.toUpperCase()+" \u2014 GATE POST")}]);for(let[i,r,s]of e){let o=document.createElement("button");o.innerHTML="<b>"+i+"</b><small>"+r+"</small>",o.onclick=s,gt.appendChild(o)}}function XS(n,e,t,i){let r=wg.copy(e).sub(n.root.position);r.y=0,r.length()>.08&&(r.normalize(),n.root.position.addScaledVector(r,t*i),n.root.rotation.y=Math.atan2(r.x,r.z))}async function qS(n,e){let t=await kS(),i=new Ut;i.position.fromArray(e),tn.add(i);let r=Tl(t.scene);xc(r,!0),r.traverse(a=>{a.isMesh&&a.material&&(a.material.color?.multiply(new ye(8011069)),a.material.roughness=.78)}),i.add(r);let s=new ve(new $i(.42,.52,24),new on({color:16734787,transparent:!0,opacity:.34,side:$t}));s.rotation.x=-Math.PI/2,s.position.y=.02,i.add(s);let o={name:n,root:i,ring:s,hp:55,attackCooldown:Vr()*.7,alive:!0,isRaider:!0};return sc.push(o),zi=Math.max(0,zi-1),o}async function Pg(n=6){if(!ci){ci=!0,zi=n,Td++,Ui.classList.remove("hidden"),Ui.textContent="RAID WAVE "+Td+" \xB7 ENEMIES AT THE GATE",Ag(),IS(),Pe("ALARM \u2014 RAIDERS AT THE MAIN GATE"),jo("gate"),gr("gate");for(let e=0;e<n;e++)setTimeout(()=>qS("Raider "+(e+1),[57+Math.floor(e/3)*1.8,0,-5+e%3*5]).catch(t=>{console.error("raider spawn failed",t),zi=Math.max(0,zi-1),ci&&zi===0&&Qo().length===0&&ZS("RAID ABORTED \u2014 ENEMY ASSET FAILED TO LOAD")}),e*100)}}function Qo(){return sc.filter(n=>n.alive)}function YS(n,e){let t=null,i=1/0;for(let r of e){if(!r.alive)continue;let s=Math.hypot(n.x-r.x,n.z-r.z);s<i&&(i=s,t=r)}return[t,i]}function KS(n){let e=null,t=1/0;for(let i of Qo()){let r=Math.hypot(i.root.position.x-n.x,i.root.position.z-n.z);r<t&&(t=r,e=i)}return[e,t]}function Pd(n){n.alive=!1,n.root&&(n.root.visible=!1),n.fight=null}function Ig(){for(let n of sc)n.root&&(n.root.traverse(e=>{if(e.isMesh&&e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose?.()}),n.ring?.geometry?.dispose?.(),tn.remove(n.root));sc.length=0,zi=0}function ZS(n){ci=!1,Ui.classList.add("hidden");for(let e of ft)e.fight=null;Ig(),jo("routine"),gr("routine"),Pe(n)}function pg(n){ci=!1,Ui.classList.add("hidden");for(let e of ft)e.fight=null;n?(De.security+=6,De.favor+=4,I.stats.raidsHeld=(I.stats.raidsHeld||0)+1,Pe("RAID DEFEATED \u2014 THE CASTLE HOLDS")):(De.security-=15,De.gold=Math.max(0,De.gold-120),Pe("THE RAIDERS BREACHED THE DEFENSES")),Ig(),jt(),$e(),Dt()}function JS(){for(let n of ft.filter(e=>["royalguard","soldier","sergeant","captain","marshal"].includes(e.role)))n.hp=n.maxhp,n.alive=!0,n.fight=null}function $S(n){if(!ci)return;let e=Qo(),t=ft.filter(i=>i.alive&&i.team==="crown"&&["royalguard","soldier","sergeant","captain","marshal"].includes(i.role));if(Ui.textContent="RAID WAVE "+Td+" \xB7 "+(e.length+zi)+" ENEMIES",e.length===0){zi===0&&pg(!0);return}if(t.length===0){pg(!1);return}for(let i of e){let[r,s]=YS(i.root.position,t);r&&(s>1.2?(sg.set(r.x,0,r.z),XS(i,sg,n,.82)):(i.attackCooldown-=n,i.attackCooldown<=0&&(i.attackCooldown=.95,r.hp-=14,r.fight={label:"Fighting raiders"},r.hp<=0&&Pd(r))))}for(let i of t){let[r,s]=KS(i);if(r)if(i.cool=Math.max(0,(i.cool||0)-n),s<10)if(i.fight={label:"Defending the Crownlands"},s>1.1){let o=r.root.position.x-i.x,a=r.root.position.z-i.z,l=Math.hypot(o,a)||1,c=i.x+o/l*n*1.05,h=i.z+a/l*n*1.05;Ci(c,h,.28)||(i.x=c,i.z=h,i.yaw=Math.atan2(o,a))}else i.cool<=0&&(i.cool=.72,r.hp-=22,r.ring.material.opacity=.8,r.hp<=0&&Pd(r));else i.fight&&(i.fight=null)}}function mg(n){return n==="crown"?ft.filter(e=>e.alive&&e.team==="crown"&&["soldier","sergeant","captain","marshal"].includes(e.role)):ft.filter(e=>e.alive&&e.team==="valemar"&&["vguard","vsoldier"].includes(e.role))}function gg(n,e){let t=null,i=1/0;for(let r of e){if(!r.alive)continue;let s=Math.hypot(n.x-r.x,n.z-r.z);s<i&&(i=s,t=r)}return[t,i]}function xg(n,e,t,i=1.05){let r=e.x-n.x,s=e.z-n.z,o=Math.hypot(r,s)||1,a=n.x+r/o*t*i,l=n.z+s/o*t*i;Ci(a,l,.28,!1,!1)||(n.x=a,n.z=l,n.yaw=Math.atan2(r,s))}function jS(n){if(!I.powers.valemar.war)return;let e=mg("crown"),t=mg("valemar"),i=e.filter(s=>s.x>350),r=t.filter(s=>s.x>375);if(I.army.directive==="campaign"||i.length){ci||(Ui.classList.remove("hidden"),Ui.textContent="WAR FOR BLACKMERE \xB7 CROWN "+i.filter(o=>o.alive).length+" \xB7 VALEMAR "+r.filter(o=>o.alive).length);for(let o of i){let[a,l]=gg(o,r);a&&(o.cool=Math.max(0,(o.cool||0)-n),l<9&&(o.fight={label:"Fighting House Valemar"},l>1.15?xg(o,a,n,1.12):o.cool<=0&&(o.cool=.75,a.hp-=20,a.hp<=0&&(a.alive=!1,a.fight=null))))}for(let o of r){let[a,l]=gg(o,i);a&&(o.cool=Math.max(0,(o.cool||0)-n),l<9&&(o.fight={label:"Defending Blackmere"},l>1.15?xg(o,a,n,1.02):o.cool<=0&&(o.cool=.82,a.hp-=18,a.hp<=0&&(a.alive=!1,a.fight=null))))}let s=t.filter(o=>o.alive);t.length&&s.length===0?(I.war.campaign={target:"valemar",state:"won",ended:I.clock},I.war.victories=(I.war.victories||0)+1,Ym("valemar"),De.favor+=10,De.security+=8,I.realm.renown=Math.min(100,I.realm.renown+12),gr("routine"),jt(),$e(),Dt(),Ui.classList.add("hidden"),Pe("BLACKMERE HAS FALLEN \u2014 CROWNLANDS VICTORIOUS")):e.length&&e.filter(o=>o.alive).length===0&&(I.war.state="defeat",I.war.defeats=(I.war.defeats||0)+1,De.security-=18,De.favor-=8,I.army.directive="routine",ro="routine",jt(),$e(),Dt(),Pe("THE CROWN ARMY HAS BEEN DEFEATED"))}else ci||Ui.classList.add("hidden")}function QS(){if(hn)return;let n=null,e=2.35;for(let i of Qo()){let r=Ce.position.distanceTo(i.root.position);r<e&&(n=i,e=r)}let t=null;if(!n&&I.powers.valemar.war)for(let i of ft){if(!i.alive||i.team!=="valemar")continue;let r=Math.hypot(Ce.position.x-i.x,Ce.position.z-i.z);r<e&&(t=i,e=r)}if(!n&&!t){Pe("NO ENEMY IN SWORD RANGE");return}if(io&&Wn){let i=Kr==="walk"?rc:Qr;io.reset().play(),i&&io.crossFadeFrom(i,.08,!0),Kr="attack",setTimeout(()=>{Kr="",tc(ec?"walk":"idle")},650)}LS(),n?(n.hp-=38,n.ring.material.opacity=1,n.hp<=0&&Pd(n)):(t.hp-=38,t.fight={label:"Fighting the King"},t.hp<=0&&(t.alive=!1,t.fight=null,I.stats.kills=(I.stats.kills||0)+1)),Pe("THE KING STRIKES")}async function Mt(n,e,t=1,i=0){try{let r=await gc(n);return xc(r.scene,!0),r.scene.position.set(e[0],e[1],e[2]),r.scene.scale.setScalar(t),r.scene.rotation.y=i,uc.add(r.scene),r.scene}catch(r){return console.warn("castle asset",n,r),null}}async function e1(){let n=[Mt("./assets/castle/gate.glb",[46,1.7,0],2.5,Math.PI/2),Mt("./assets/castle/tower-square.glb",[43,2.2,-7],2.4,0),Mt("./assets/castle/tower-square.glb",[43,2.2,7],2.4,0),Mt("./assets/castle/flag-wide.glb",[44,5.2,0],1.35,Math.PI/2),Mt("./assets/castle/siege-catapult.glb",[-35,.8,10],1.15,-Math.PI*.25),Mt("./assets/castle/siege-ballista.glb",[-29,.7,15],1.15,Math.PI*.18),Mt("./assets/castle/bridge-draw.glb",[236,.18,62],1.8,Math.PI/2),Mt("./assets/castle/wall-corner.glb",[-44,1.6,-32],2,0),Mt("./assets/castle/tree-large.glb",[58,.8,-18],1.7,0),Mt("./assets/castle/tree-large.glb",[70,.8,15],1.8,.5),Mt("./assets/castle/tree-small.glb",[54,.55,20],1.5,-.4),Mt("./assets/castle/tree-small.glb",[112,.55,-14],1.4,.8),Mt("./assets/castle/rocks-large.glb",[245,.25,-12],1.2,.2),Mt("./assets/castle/rocks-small.glb",[286,.2,106],1,-.3),...Ll.map((e,t)=>Mt(t%2?"./assets/town/stall-green.glb":"./assets/town/stall-red.glb",[e[0],0,e[1]],3,t%3?0:Math.PI)),Mt("./assets/town/cart.glb",[38,0,-16],3,Math.PI*.42),Mt("./assets/town/cart.glb",[106,0,2],3,-Math.PI*.35),Mt("./assets/town/lantern.glb",[44,0,-4.8],1.6,0),Mt("./assets/town/lantern.glb",[44,0,4.8],1.6,0),Mt("./assets/town/fountain-round.glb",[80,0,4.4],1.15,0),Mt("./assets/town/fountain-round.glb",[35,0,-6.5],1.2,0),Mt("./assets/town/windmill.glb",[204,0,38],4.1,Math.PI*.4),Mt("./assets/town/watermill.glb",[231,0,33],4,Math.PI/2),Mt("./assets/town/tree-high.glb",[74,0,14],2.2,0),Mt("./assets/town/tree-high.glb",[101,0,-17],2.4,.6),Mt("./assets/town/tree-crooked.glb",[117,0,10],2.1,-.4)];await Promise.all(n)}function t1(){let n=Wu(Ce.position.x,Ce.position.z);if(n!==Ed){Ed=n;let e=document.getElementById("zoneName");e&&(e.textContent=n),Pe("ENTERED \u2014 "+n)}}function jl(n,e,t,i,r){let s=new Ut;s.position.set(i[0],0,i[1]),tn.add(s);let o=new ve(new $i(.55,.7,28),new on({color:14795114,transparent:!0,opacity:.15,side:$t}));o.rotation.x=-Math.PI/2,o.position.y=.025,s.add(o);let a=NS(t);a.scale.set(2.2,.52,1),a.position.y=1.7,s.add(a);let l={id:n,name:e,root:s,ring:o,openFn:r,isWorldAction:!0};return Tg.push(l),l}function xr(n){return De.gold<n?(Pe("THE TREASURY CANNOT AFFORD THAT"),!1):(De.gold-=n,!0)}async function Lg(n=4){let e=n*30;if(!xr(e))return;let t=ft.filter(r=>r.role==="soldier").length,i=Math.max(0,Math.min(n,32-t));for(let r=0;r<i;r++){let s=t+r,o=Gl({id:"recruit"+Date.now()+"-"+r,name:"Crown Soldier "+(s+1),role:"soldier",rank:1,home:s%2?"barracksA":"barracksB",company:s%2,look:{asset:"guard",tint:14075558}});Vl(o)}De.armySize=ft.filter(r=>r.alive&&["soldier","sergeant","captain","marshal"].includes(r.role)).length,De.security+=3,jt(),$e(),Dt(),oo(),Pe(i+" SOLDIERS JOINED THE CROWN")}function n1(){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Castle District",_r.textContent="Royal Barracks",hi.textContent="Your soldiers drill here. Recruit, train, or muster the company.",gt.innerHTML="";let n=[["Recruit four soldiers","120 coin \xB7 increases army size",()=>Lg(4)],["Fund weapons and training","60 coin \xB7 +6 security",()=>{xr(60)&&(De.security+=6,jt(),$e(),Dt(),Pe("THE ARMY TRAINS WITH NEW EQUIPMENT")),je()}],["Muster the army in court","Order the field company before the throne",()=>{gr("muster"),je()}]];for(let[e,t,i]of n){let r=document.createElement("button");r.innerHTML="<b>"+e+"</b><small>"+t+"</small>",r.onclick=i,gt.appendChild(r)}}function i1(){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Castle District",_r.textContent="Royal Market",hi.textContent="Merchants, craftsmen and townsfolk trade under the protection of your Crown.",gt.innerHTML="";let n=[["Sponsor a market fair","80 coin \xB7 +8 prosperity \xB7 +4 favor",()=>{xr(80)&&(De.prosperity+=8,De.favor+=4,jt(),$e(),Dt(),Pe("A ROYAL MARKET FAIR IS PROCLAIMED")),je()}],["Collect emergency tariffs","+100 coin \xB7 \u22126 favor \xB7 \u22123 prosperity",()=>{De.gold+=100,De.favor-=6,De.prosperity-=3,jt(),$e(),Dt(),Pe("THE CROWN COLLECTS EMERGENCY TARIFFS"),je()}]];for(let[e,t,i]of n){let r=document.createElement("button");r.innerHTML="<b>"+e+"</b><small>"+t+"</small>",r.onclick=i,gt.appendChild(r)}}function r1(){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Castle Defense",_r.textContent="Main Gate",hi.textContent="The gate controls the road into your stronghold.",gt.innerHTML="";for(let[n,e,t]of[["Royal Guard to the gate","Deploy all six household guards here.",()=>{jo("gate"),je()}],["Army reinforce the gate","March the field company to the walls.",()=>{gr("gate"),je()}],["Increase gate watch","45 coin \xB7 +5 security",()=>{xr(45)&&(De.security+=5,jt(),$e(),Dt(),Pe("THE GATE WATCH IS DOUBLED")),je()}],["Sound a defense drill","Spawn a practice raider wave now.",()=>{je(),Pg(6).catch(console.error)}]]){let i=document.createElement("button");i.innerHTML="<b>"+n+"</b><small>"+e+"</small>",i.onclick=t,gt.appendChild(i)}}function s1(){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Royal Lands",_r.textContent="Lower Village",hi.textContent="Farmers and craftspeople live beyond the inner wall. Your choices here affect village prosperity and public favor.",gt.innerHTML="";let n=[["Repair the village well","60 coin \xB7 +6 prosperity \xB7 +5 favor",()=>{xr(60)&&(De.prosperity+=6,De.favor+=5,jt(),$e(),Dt(),Pe("THE ROYAL WELL IS REPAIRED")),je()}],["Release grain from the stores","100 coin \xB7 +10 favor \xB7 +5 prosperity",()=>{xr(100)&&(De.favor+=10,De.prosperity+=5,jt(),$e(),Dt(),Pe("ROYAL GRAIN REACHES THE VILLAGE")),je()}],["Collect market dues","+120 coin \xB7 -7 favor",()=>{De.gold+=120,De.favor-=7,jt(),$e(),Dt(),Pe("MARKET DUES COLLECTED"),je()}],["Hire two town guards","60 coin \xB7 +2 soldiers",()=>{je(),Lg(2)}]];for(let[e,t,i]of n){let r=document.createElement("button");r.innerHTML="<b>"+e+"</b><small>"+t+"</small>",r.onclick=i,gt.appendChild(r)}}function o1(){jl("barracks","Royal Barracks","BARRACKS",[-26,10],n1),jl("market","Royal Market","MARKET",[35,-2],i1),jl("gateCommand","Main Gate","GATE COMMAND",[43,0],r1),jl("village","Lower Village","VILLAGE STEWARD",[88,0],s1)}function Dg(){Gd>=2&&!nc&&(nc=!0,lc.textContent="ENTER YOUR COURT")}nc=!0;lc.disabled=!1;lc.textContent="ENTER YOUR COURT";function Pe(n){yd.textContent=n,yd.classList.remove("hidden"),clearTimeout(Pe.t),Pe.t=setTimeout(()=>yd.classList.add("hidden"),1800)}var a1=n=>{let e=n.petitionKey||n.id,t=Rg[e];return t?t[(n.petitionIndex||0)%t.length]:null};function l1(n,e){for(let[t,i]of Object.entries(e.delta))De[t]=(De[t]||0)+i;jt(),n.used=!0,I.court.dayHeard=(I.court.dayHeard||0)+1,I.stats.petitions=(I.stats.petitions||0)+1,$e(),Dt(),je(),Pe("DECREE ISSUED \u2014 THE REALM HAS CHANGED"),ea()}function Xd(n){Tn=!0,Fi.classList.remove("hidden"),yr.textContent=Vd(n),_r.textContent=n.name,gt.innerHTML="";let e=a1(n);if(!e){Wd(n);return}if(n.used){hi.textContent="\u201CYour Majesty, your decree stands. I have no further petition for the Crown today.\u201D",n.petitionKey==="captain"&&(Rd(),Cd());return}hi.textContent="\u201C"+e.text+"\u201D";for(let t of e.choices){let i=document.createElement("button"),r=t.delta.gold<0?-t.delta.gold:0;r>De.gold&&(i.disabled=!0,i.style.opacity=".45"),i.innerHTML="<b>"+t.title+"</b><small>"+t.note+(r>De.gold?" \xB7 Not enough coin":"")+"</small>",i.onclick=()=>l1(n,t),gt.appendChild(i)}n.petitionKey==="captain"&&(Rd(),Cd())}function je(){Tn=!1,Fi.classList.add("hidden")}TS.onclick=je;var Id=()=>ft.filter(n=>n.petitionKey),qd=()=>Id().length>=4&&Id().every(n=>n.used);function ea(){Mg.innerHTML=qd()?"Court concluded. Return to your <b>THRONE</b>, explore the realm, or issue orders.":"Rule the realm. Hear petitions, inspect your people, explore, or open <b>ORDERS</b>."}function c1(){for(let n of Id())n.used=!1,n.petitionIndex=((n.petitionIndex||0)+1)%(Rg[n.petitionKey]?.length||1);I.court.dayHeard=0}function h1(){let n=(Math.floor(I.clock/24)+1)*24+8,e=Math.max(.1,n-I.clock);rg(e*Ku,Ju,cd),jt(),$e(),Dt(),ea(),Pe("DAY "+an()+" \u2014 THE REALM AWAKENS")}lr("day",({day:n})=>{c1(),JS(),Dt(),ea(),$e(),n%3===0&&setTimeout(()=>Pg(Math.min(10,4+n)).catch(console.error),2200)});lr("hour",()=>{I.guard.mode!=="routine"&&I.guard.until&&I.clock>=I.guard.until&&jo("routine"),I.army.directive!=="routine"&&I.army.until&&I.clock>=I.army.until&&gr("routine"),oo()});function yg(){hn=!0,fc=pc=0,Wn&&(Wn.stopAllAction(),Wn.timeScale=0),Cg();let n=new C(1,0,0),e=new C(0,0,1);if(Ii(Nd,n,-1.48),Ii(Ud,n,-1.48),Ii(Od,n,1.52),Ii(zd,n,1.52),Ii(Fd,e,.16),Ii(kd,e,-.16),Ii(Bd,n,-.48),Ii(Hd,n,-.48),Ii(no,n,.08),to){let t=mc.get(to.name);t&&(to.position.copy(t.p),to.position.z+=.08)}Ce.position.set(0,-.34,6.03),Ce.rotation.y=Math.PI,li=dc=Math.PI,Vn=$r=.1,mr&&(mr.rotation.x=-.18),Li.disabled=!1,Li.textContent="STAND",Ql.textContent="Seated on the Royal Throne",Mg.innerHTML=qd()?"Court concluded. Stand when you are ready to begin the next day.":"You are holding court from the throne.",Pe("THE KING TAKES THE THRONE")}function Ng(){hn=!1,Cg(),Wn&&(Wn.timeScale=1,Qr&&Qr.reset().play(),Kr="idle"),Ce.position.set(0,0,4.82),mr&&(mr.rotation.x=0),ea(),Pe("THE KING RISES")}function Ug(){if(hn){Ng();return}if(qd()){Tn=!0,Fi.classList.remove("hidden"),yr.textContent="Seat of the Crown",_r.textContent="Your Throne",gt.innerHTML="",hi.textContent="The day\u2019s petitions are settled. Sit to close court, or begin the next day now.";let n=document.createElement("button");n.innerHTML="<b>Sit on the throne</b><small>Take your seat before the court.</small>",n.onclick=()=>{je(),yg()},gt.appendChild(n);let e=document.createElement("button");e.innerHTML="<b>Begin the next day</b><small>Collect crown revenue and summon fresh petitions.</small>",e.onclick=()=>{je(),h1()},gt.appendChild(e)}else yg()}ES.onclick=()=>{Tn||HS()};vg.onclick=QS;function Og(){let n=Oi==="first";oi&&(oi.visible=!n),Di&&(Di.visible=!n),$o&&($o.textContent=n?"CAM 1ST":"CAM 3RD",$o.classList.toggle("first-person",n),$o.setAttribute("aria-label",n?"Switch to third-person camera":"Switch to first-person camera"))}function u1(){Oi=Oi==="third"?"first":"third";let n=Oi==="first"?Yt.first:Yt.third;$r=Jn.clamp($r,n.minPitch,n.maxPitch),Vn=Jn.clamp(Vn,n.minPitch,n.maxPitch),Og(),Pe(Oi==="first"?"FIRST-PERSON VIEW":"THIRD-PERSON VIEW")}$o.onclick=u1;Li.onclick=()=>{if(!Tn){if(hn){Ng();return}cn&&(cn.isThrone?Ug():cn.isWorldAction?cn.openFn():cn.isLiving?Wd(cn.actor):Xd(cn))}};lc.onclick=()=>{Ag(),PS(),wS.classList.add("hidden"),Pe("LONG LIVE KING ALDRIC")};addEventListener("pagehide",$e);addEventListener("visibilitychange",()=>{document.hidden&&$e()});var so=kt("joystick"),zg=kt("stick"),oc=null;function Fg(n){if(n.pointerId!==oc)return;let e=so.getBoundingClientRect(),t=e.left+e.width/2,i=e.top+e.height/2,r=n.clientX-t,s=n.clientY-i,o=42,a=Math.hypot(r,s)||1,l=Math.min(1,o/a);r*=l,s*=l,zg.style.transform="translate("+r+"px,"+s+"px)",fc=r/o,pc=-s/o}so.onpointerdown=n=>{oc=n.pointerId,so.setPointerCapture(n.pointerId),Fg(n)};so.onpointermove=Fg;function kg(n){n.pointerId===oc&&(oc=null,fc=pc=0,zg.style.transform="translate(0,0)")}so.onpointerup=kg;so.onpointercancel=kg;var ac=null,Ld=0,Dd=0;un.domElement.onpointerdown=n=>{Tn||n.clientX<innerWidth*.38||(ac=n.pointerId,Ld=n.clientX,Dd=n.clientY,un.domElement.setPointerCapture(n.pointerId))};un.domElement.onpointermove=n=>{if(n.pointerId!==ac)return;let e=n.clientX-Ld,t=n.clientY-Dd,i=Oi==="first"?Yt.first:Yt.third;dc-=e*Yt.look.yawSensitivity,$r=Jn.clamp($r-t*Yt.look.pitchSensitivity,i.minPitch,i.maxPitch),Ld=n.clientX,Dd=n.clientY};un.domElement.onpointerup=n=>{n.pointerId===ac&&(ac=null)};un.domElement.onpointercancel=un.domElement.onpointerup;var ai=new Set;addEventListener("keydown",n=>{ai.add(n.code),n.code==="KeyE"&&cn&&!Tn&&(cn.isThrone?Ug():cn.isWorldAction?cn.openFn():cn.isLiving?Wd(cn.actor):Xd(cn))});addEventListener("keyup",n=>ai.delete(n.code));function d1(){let n=0,e=0;return(ai.has("KeyW")||ai.has("ArrowUp"))&&e++,(ai.has("KeyS")||ai.has("ArrowDown"))&&e--,(ai.has("KeyA")||ai.has("ArrowLeft"))&&n--,(ai.has("KeyD")||ai.has("ArrowRight"))&&n++,{x:n,y:e}}function bd(n){return Ci(n.x,n.z,.38,!1,!1)}function f1(n,e){let t=CS.copy(Ce.position).addScaledVector(n,e);if(t.x=Jn.clamp(t.x,bn.x0+1,bn.x1-1),t.z=Jn.clamp(t.z,bn.z0+1,bn.z1-1),!bd(t)){Ce.position.copy(t);return}fr.copy(Ce.position),fr.x=t.x,bd(fr)||(Ce.position.x=fr.x),fr.copy(Ce.position),fr.z=t.z,bd(fr)||(Ce.position.z=fr.z)}function p1(n){if(Tn||hn){ec=!1,tc("idle");return}let e=d1(),t=e.x||fc,i=e.y||pc,r=Math.hypot(t,i);if(r>.08){r>1&&(t/=r,i/=r);let s=Math.sin(li),o=Math.cos(li),a=wg.set(-s*i+o*t,0,-o*i-s*t);f1(a,n*3.35),Ce.rotation.y=Math.atan2(a.x,a.z),ec=!0,tc("walk")}else ec=!1,tc("idle")}function m1(n,e,t,i){let r=Math.atan2(Math.sin(e-n),Math.cos(e-n));return n+r*(1-Math.exp(-t*i))}function g1(n){let e=Oi==="first"?Yt.first:Yt.third;li=m1(li,dc,Yt.look.angleDamping,n),Vn=Jn.damp(Vn,$r,Yt.look.angleDamping,n),Vn=Jn.clamp(Vn,e.minPitch,e.maxPitch);let t=1-Math.exp(-n*Yt.look.positionDamping);if(Oi==="first"){let o=og.copy(Ce.position);o.y+=hn?1.18:e.eyeHeight;let a=Math.cos(Vn),l=ag.set(-Math.sin(li)*a,-Math.sin(Vn),-Math.cos(li)*a);pr.position.lerp(o,t),cg.copy(o).addScaledVector(l,8),pr.lookAt(cg);return}let i=og.copy(Ce.position);i.y+=hn?e.seatedTargetY:e.standingTargetY;let r=Math.cos(Vn),s=ag.set(Math.sin(li)*r,Math.sin(Vn),Math.cos(li)*r);lg.copy(i).addScaledVector(s,hn?e.seatedDistance:e.standingDistance),pr.position.lerp(lg,t),pr.lookAt(i)}function x1(){if(vg.disabled=hn||!ci&&!I.powers.valemar.war,hn){cn=$l,Li.disabled=!1,Li.textContent="STAND",Ql.textContent="Seated on the Royal Throne";return}let n=null,e=999;if(jr)for(let i of jr.targets){let r=Ce.position.distanceTo(i.root.position);r<2.35&&r<e&&(n={isLiving:!0,actor:i.actor,root:i.root,ring:i.ring,name:i.actor.name,role:Vd(i.actor)},e=r)}for(let i of Tg){let r=Ce.position.distanceTo(i.root.position);i.ring.material.opacity=r<2.8?.48:.15,r<2.25&&r<e&&(n=i,e=r)}let t=Ce.position.distanceTo($l.pos);$l.ring.material.opacity=t<2.2?.35:.18,t<1.75&&t<e&&(n=$l,e=t),cn=n,n?(Li.disabled=!1,Li.textContent=n.isThrone?"THRONE":n.isWorldAction?"USE":"AUDIENCE",Ql.textContent=n.isThrone?"Your Royal Throne":n.isLiving?n.actor.name+" \xB7 "+hd(n.actor):n.name+(n.role?" \xB7 "+n.role:"")):(Li.disabled=!0,Li.textContent="AUDIENCE",Ql.textContent="")}function Bg(){requestAnimationFrame(Bg);let n=Math.min(RS.getDelta(),.05);wd=wd*.94+1/Math.max(.001,n)*.06,Eg.forEach(e=>e.update(n)),p1(n),Gn.x=Ce.position.x,Gn.y=Ce.position.y,Gn.z=Ce.position.z,Gn.yaw=Ce.rotation.y,Gn.seated=hn,Ju(n),cd(n),jr&&jr.update(Ce.position,n),Sd&&Sd.update(Ce.position),$S(n),jS(n),DS(n),t1(),g1(n),x1(),vd+=n,vd>=5&&(vd=0,$e(),Dt(),oo()),un.render(tn,pr)}function y1(){ic=De.guardMode||"routine",ro=De.armyMode||"routine",Ce.position.set(Number.isFinite(I.king.x)?I.king.x:0,0,Number.isFinite(I.king.z)?I.king.z:9),Ce.rotation.y=Number.isFinite(I.king.yaw)?I.king.yaw:Math.PI,Sd=ng(uc),o1(),ea(),oo();let n=document.getElementById("zoneName");n&&(n.textContent=Wu(Ce.position.x,Ce.position.z)),setTimeout(()=>zS().catch(console.error),0),setTimeout(()=>OS().catch(console.error),120),setTimeout(()=>tg(tn).then(e=>{jr=e,Pe("THE CROWNLANDS LIVE \u2014 "+ft.length+" PEOPLE SIMULATING")}).catch(console.error),260),setTimeout(()=>e1().catch(console.error),700)}window.__crownlandsDebug={snapshot:()=>({version:"v26-stock-head-audit-fix",ready:nc,fps:Math.round(wd),player:{x:+Ce.position.x.toFixed(2),z:+Ce.position.z.toFixed(2),yaw:+Ce.rotation.y.toFixed(2),seated:hn,heightTarget:1.8},presentation:{fov:Yt.fov,cameraMode:Oi,viewport:[pr.aspect,+((window.visualViewport?.width||innerWidth)/(window.visualViewport?.height||innerHeight)).toFixed(3)],yaw:+li.toFixed(3),yawTarget:+dc.toFixed(3),pitch:+Vn.toFixed(3),pitchTarget:+$r.toFixed(3),thirdDistance:hn?Yt.third.seatedDistance:Yt.third.standingDistance},zone:Ed,time:{clock:+I.clock.toFixed(2),day:an(),year:Zu(),season:Ul()},realm:{coin:I.realm.coin,favor:I.realm.favor,security:I.realm.security,prosperity:I.realm.prosperity,stock:{...I.stock}},population:{total:ft.length,visible:jr?.visibleCount?.()||0,renderCapacity:jr?.capacity||0,onDutyGuards:yc().length,army:I.army.size},military:{guardMode:I.guard.mode,armyDirective:I.army.directive,raidActive:ci,raiders:Qo().length},diplomacy:Kl(),ledger:I.ledger.last,bootError:window.__crownlandsBootError||""})};Bg();requestAnimationFrame(()=>requestAnimationFrame(y1));
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
