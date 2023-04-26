import{l as _,W as M,u as D,X as R,Y as $,D as F,K as J,Z as U,b as L,Q as S}from"./entry.606741cb.js";var P;const h=typeof window<"u",j=e=>typeof e<"u",G=e=>typeof e=="function",H=e=>typeof e=="string",V=()=>{},K=h&&((P=window==null?void 0:window.navigator)==null?void 0:P.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():D(e)}function q(e){return e}function W(e){return R()?($(e),!0):!1}function X(e,t=!0){F()?J(e):t?e():U(e)}function Y(e,t,o={}){const{immediate:u=!0}=o,l=_(!1);let c=null;function m(){c&&(clearTimeout(c),c=null)}function a(){l.value=!1,m()}function p(...v){m(),l.value=!0,c=setTimeout(()=>{l.value=!1,c=null,e(...v)},E(t))}return u&&(l.value=!0,h&&p()),W(a),{isPending:M(l),start:p,stop:a}}function g(e){var t;const o=E(e);return(t=o==null?void 0:o.$el)!=null?t:o}const B=h?window:void 0,Z=h?window.navigator:void 0;function I(...e){let t,o,u,l;if(H(e[0])||Array.isArray(e[0])?([o,u,l]=e,t=B):[t,o,u,l]=e,!t)return V;Array.isArray(o)||(o=[o]),Array.isArray(u)||(u=[u]);const c=[],m=()=>{c.forEach(d=>d()),c.length=0},a=(d,y,n,r)=>(d.addEventListener(y,n,r),()=>d.removeEventListener(y,n,r)),p=S(()=>[g(t),E(l)],([d,y])=>{m(),d&&c.push(...o.flatMap(n=>u.map(r=>a(d,n,r,y))))},{immediate:!0,flush:"post"}),v=()=>{p(),m()};return W(v),v}let C=!1;function ae(e,t,o={}){const{window:u=B,ignore:l=[],capture:c=!0,detectIframe:m=!1}=o;if(!u)return;K&&!C&&(C=!0,Array.from(u.document.body.children).forEach(n=>n.addEventListener("click",V)));let a=!0;const p=n=>l.some(r=>{if(typeof r=="string")return Array.from(u.document.querySelectorAll(r)).some(f=>f===n.target||n.composedPath().includes(f));{const f=g(r);return f&&(n.target===f||n.composedPath().includes(f))}}),d=[I(u,"click",n=>{const r=g(e);if(!(!r||r===n.target||n.composedPath().includes(r))){if(n.detail===0&&(a=!p(n)),!a){a=!0;return}t(n)}},{passive:!0,capture:c}),I(u,"pointerdown",n=>{const r=g(e);r&&(a=!n.composedPath().includes(r)&&!p(n))},{passive:!0}),m&&I(u,"blur",n=>{var r;const f=g(e);((r=u.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(f!=null&&f.contains(u.document.activeElement))&&t(n)})].filter(Boolean);return()=>d.forEach(n=>n())}function k(e,t=!1){const o=_(),u=()=>o.value=!!e();return u(),X(u,t),o}function se(e={}){const{navigator:t=Z,read:o=!1,source:u,copiedDuring:l=1500,legacy:c=!1}=e,m=["copy","cut"],a=k(()=>t&&"clipboard"in t),p=L(()=>a.value||c),v=_(""),d=_(!1),y=Y(()=>d.value=!1,l);function n(){a.value?t.clipboard.readText().then(s=>{v.value=s}):v.value=b()}if(p.value&&o)for(const s of m)I(s,n);async function r(s=E(u)){p.value&&s!=null&&(a.value?await t.clipboard.writeText(s):f(s),v.value=s,d.value=!0,y.start())}function f(s){const i=document.createElement("textarea");i.value=s??"",i.style.position="absolute",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),i.remove()}function b(){var s,i,O;return(O=(i=(s=document==null?void 0:document.getSelection)==null?void 0:s.call(document))==null?void 0:i.toString())!=null?O:""}return{isSupported:p,text:v,copied:d,copy:r}}function z(e){return JSON.parse(JSON.stringify(e))}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";x[T]=x[T]||{};var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ee=Object.defineProperty,N=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,Q=(e,t,o)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,oe=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&Q(e,o,t[o]);if(N)for(var o of N(t))ne.call(t,o)&&Q(e,o,t[o]);return e};const ue={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};oe({linear:q},ue);function ie(e,t,o,u={}){var l,c,m;const{clone:a=!1,passive:p=!1,eventName:v,deep:d=!1,defaultValue:y}=u,n=F(),r=o||(n==null?void 0:n.emit)||((l=n==null?void 0:n.$emit)==null?void 0:l.bind(n))||((m=(c=n==null?void 0:n.proxy)==null?void 0:c.$emit)==null?void 0:m.bind(n==null?void 0:n.proxy));let f=v;t||(t="modelValue"),f=v||f||`update:${t.toString()}`;const b=i=>a?G(a)?a(i):z(i):i,s=()=>j(e[t])?b(e[t]):y;if(p){const i=s(),O=_(i);return S(()=>e[t],w=>O.value=b(w)),S(O,w=>{(w!==e[t]||d)&&r(f,w)},{deep:d}),O}else return L({get(){return s()},set(i){r(f,i)}})}export{ie as a,ae as o,se as u};
