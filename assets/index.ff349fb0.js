(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();function E(){}const At=t=>t;function Bt(t){return t()}function Nt(){return Object.create(null)}function I(t){t.forEach(Bt)}function Et(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function te(t){return Object.keys(t).length===0}const Ft=typeof window<"u";let Rt=Ft?()=>window.performance.now():()=>Date.now(),Ht=Ft?t=>requestAnimationFrame(t):E;const R=new Set;function zt(t){R.forEach(e=>{e.c(t)||(R.delete(e),e.f())}),R.size!==0&&Ht(zt)}function Gt(t){let e;return R.size===0&&Ht(zt),{promise:new Promise(o=>{R.add(e={c:t,f:o})}),abort(){R.delete(e)}}}function g(t,e){t.appendChild(e)}function Kt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ee(t){const e=pt("style");return ne(Kt(t),e),e.sheet}function ne(t,e){return g(t.head||t,e),e.sheet}function L(t,e,o){t.insertBefore(e,o||null)}function k(t){t.parentNode.removeChild(t)}function oe(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function pt(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ot(t){return document.createTextNode(t)}function mt(){return Ot(" ")}function ht(){return Ot("")}function M(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function u(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function ie(t){return Array.from(t.childNodes)}function b(t,e,o,n){o===null?t.style.removeProperty(e):t.style.setProperty(e,o,n?"important":"")}function re(t,e,{bubbles:o=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,o,n,e),i}const lt=new Map;let ft=0;function se(t){let e=5381,o=t.length;for(;o--;)e=(e<<5)-e^t.charCodeAt(o);return e>>>0}function le(t,e){const o={stylesheet:ee(e),rules:{}};return lt.set(t,o),o}function Qt(t,e,o,n,i,r,s,l=0){const _=16.666/n;let f=`{
`;for(let y=0;y<=1;y+=_){const H=e+(o-e)*r(y);f+=y*100+`%{${s(H,1-H)}}
`}const a=f+`100% {${s(o,1-o)}}
}`,c=`__svelte_${se(a)}_${l}`,m=Kt(t),{stylesheet:p,rules:C}=lt.get(m)||le(m,t);C[c]||(C[c]=!0,p.insertRule(`@keyframes ${c} ${a}`,p.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${c} ${n}ms linear ${i}ms 1 both`,ft+=1,c}function kt(t,e){const o=(t.style.animation||"").split(", "),n=o.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=o.length-n.length;i&&(t.style.animation=n.join(", "),ft-=i,ft||fe())}function fe(){Ht(()=>{ft||(lt.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),lt.clear())})}let J;function W(t){J=t}function ce(){if(!J)throw new Error("Function called outside component initialization");return J}function Wt(t){ce().$$.on_mount.push(t)}const Q=[],ct=[],rt=[],St=[],ue=Promise.resolve();let Zt=!1;function ae(){Zt||(Zt=!0,ue.then(Jt))}function w(t){rt.push(t)}const Mt=new Set;let ot=0;function Jt(){const t=J;do{for(;ot<Q.length;){const e=Q[ot];ot++,W(e),_e(e.$$)}for(W(null),Q.length=0,ot=0;ct.length;)ct.pop()();for(let e=0;e<rt.length;e+=1){const o=rt[e];Mt.has(o)||(Mt.add(o),o())}rt.length=0}while(Q.length);for(;St.length;)St.pop()();Zt=!1,Mt.clear(),W(t)}function _e(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}let K;function Ut(){return K||(K=Promise.resolve(),K.then(()=>{K=null})),K}function ut(t,e,o){t.dispatchEvent(re(`${e?"intro":"outro"}${o}`))}const st=new Set;let V;function at(){V={r:0,c:[],p:V}}function _t(){V.r||I(V.c),V=V.p}function v(t,e){t&&t.i&&(st.delete(t),t.i(e))}function A(t,e,o,n){if(t&&t.o){if(st.has(t))return;st.add(t),V.c.push(()=>{st.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}else n&&n()}const Xt={duration:0};function $(t,e,o){let n=e(t,o),i=!1,r,s,l=0;function _(){r&&kt(t,r)}function f(){const{delay:c=0,duration:m=300,easing:p=At,tick:C=E,css:d}=n||Xt;d&&(r=Qt(t,0,1,m,c,p,d,l++)),C(0,1);const y=Rt()+c,H=y+m;s&&s.abort(),i=!0,w(()=>ut(t,!0,"start")),s=Gt(q=>{if(i){if(q>=H)return C(1,0),ut(t,!0,"end"),_(),i=!1;if(q>=y){const Z=p((q-y)/m);C(Z,1-Z)}}return i})}let a=!1;return{start(){a||(a=!0,kt(t),Et(n)?(n=n(),Ut().then(f)):f())},invalidate(){a=!1},end(){i&&(_(),i=!1)}}}function Yt(t,e,o){let n=e(t,o),i=!0,r;const s=V;s.r+=1;function l(){const{delay:_=0,duration:f=300,easing:a=At,tick:c=E,css:m}=n||Xt;m&&(r=Qt(t,1,0,f,_,a,m));const p=Rt()+_,C=p+f;w(()=>ut(t,!1,"start")),Gt(d=>{if(i){if(d>=C)return c(0,1),ut(t,!1,"end"),--s.r||I(s.c),!1;if(d>=p){const y=a((d-p)/f);c(1-y,y)}}return i})}return Et(n)?Ut().then(()=>{n=n(),l()}):l(),{end(_){_&&n.tick&&n.tick(1,0),i&&(r&&kt(t,r),i=!1)}}}function dt(t){t&&t.c()}function U(t,e,o,n){const{fragment:i,on_mount:r,on_destroy:s,after_update:l}=t.$$;i&&i.m(e,o),n||w(()=>{const _=r.map(Bt).filter(Et);s?s.push(..._):I(_),t.$$.on_mount=[]}),l.forEach(w)}function X(t,e){const o=t.$$;o.fragment!==null&&(I(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function de(t,e){t.$$.dirty[0]===-1&&(Q.push(t),ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(t,e,o,n,i,r,s,l=[-1]){const _=J;W(t);const f=t.$$={fragment:null,ctx:null,props:r,update:E,not_equal:i,bound:Nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:Nt(),dirty:l,skip_bound:!1,root:e.target||_.$$.root};s&&s(f.root);let a=!1;if(f.ctx=o?o(t,e.props||{},(c,m,...p)=>{const C=p.length?p[0]:m;return f.ctx&&i(f.ctx[c],f.ctx[c]=C)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](C),a&&de(t,c)),m}):[],f.update(),a=!0,I(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const c=ie(e.target);f.fragment&&f.fragment.l(c),c.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&v(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),Jt()}W(_)}class et{$destroy(){X(this,1),this.$destroy=E}$on(e,o){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(o),()=>{const i=n.indexOf(o);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function pe(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function me(t){return t*t*t}function he(t){const e=t-1;return e*e*e+1}function Lt(t){return t*t*t*t*t}function it(t){return--t*t*t*t*t+1}function ge(t){return-.5*(Math.cos(Math.PI*t)-1)}function B(t,{delay:e=0,duration:o=400,easing:n=At}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:n,css:r=>`opacity: ${r*i}`}}function F(t,{delay:e=0,duration:o=400,easing:n=he,x:i=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(t),_=+l.opacity,f=l.transform==="none"?"":l.transform,a=_*(1-s);return{delay:e,duration:o,easing:n,css:(c,m)=>`
			transform: ${f} translate(${(1-c)*i}px, ${(1-c)*r}px);
			opacity: ${_-a*m}`}}function j(t,{delay:e=0,speed:o,duration:n,easing:i=pe}={}){let r=t.getTotalLength();const s=getComputedStyle(t);return s.strokeLinecap!=="butt"&&(r+=parseInt(s.strokeWidth)),n===void 0?o===void 0?n=800:n=r/o:typeof n=="function"&&(n=n(r)),{delay:e,duration:n,easing:i,css:(l,_)=>`stroke-dasharray: ${l*r} ${_*r}`}}const Vt="M 92.4957 29.6107 C 92.365 29.615 92.365 29.5625 92.365 29.5625 Z M 109.27 45.3475 C 109.27 45.3475 109.27 46.6175 109.27 46.6175 C 109.27 46.6175 108.98 46.6175 108.98 46.6175 C 108.98 46.6175 108.98 45.3425 108.98 45.3425 C 108.98 45.3425 109.27 45.3475 109.27 45.3475 Z M 107.195 45.3475 C 107.195 45.3475 92.365 30.4925 92.365 30.4925 C 92.365 30.4925 92.365 29.5625 92.365 29.5625 C 92.365 29.5625 93.5175 29.5625 93.5175 29.5625 C 93.5175 29.5625 109.27 45.3475 109.27 45.3475 C 109.27 45.3475 107.195 45.3475 107.195 45.3475 Z M 93.5375 46.59 C 93.5375 46.59 94.3125 46.58 94.3125 46.58 C 94.3125 46.58 110.915 63.2175 110.915 63.2175 C 110.915 63.2175 112.6525 63.2175 112.6525 63.2175 C 112.6525 63.2175 96.09 46.6175 96.09 46.6175 C 96.09 46.6175 108.985 46.6175 108.985 46.6175 C 108.985 46.6175 108.985 45.33 108.985 45.33 C 108.985 45.33 93.555 45.33 93.555 45.33 C 93.555 45.33 93.5375 46.59 93.5375 46.59 Z M 92.4975 29.79 C 92.4975 29.79 92.4975 62.915 92.4975 62.915 C 92.4975 62.915 93.4425 62.915 93.4425 62.915 C 93.4425 62.915 93.4425 33.2025 93.4425 33.2025 C 93.4425 33.2025 93.4075 29.815 93.4075 29.815 C 93.4075 29.815 92.4975 29.79 92.4975 29.79 Z M 96.9825 29.6075 C 96.9825 29.6075 115.675 48.34 115.675 48.34 C 115.675 48.34 114.7925 49.2225 114.7925 49.2225 C 114.7925 49.2225 102.5975 49.2225 102.5975 49.2225 C 102.5975 49.2225 116.5575 63.2125 116.5575 63.2125 C 116.5575 63.2125 114.9 63.2125 114.9 63.2125 C 114.9 63.2125 100.405 48.6875 100.405 48.6875 C 100.405 48.6875 101.3675 47.7225 101.3675 47.7225 C 101.3675 47.7225 113.1875 47.7225 113.1875 47.7225 C 113.1875 47.7225 95.0575 29.5525 95.0575 29.5525 C 95.0575 29.5525 96.9825 29.6075 96.9825 29.6075 Z M 56.0675 62.9025 C 56.0675 62.9025 57.9775 62.9025 57.9775 62.9025 C 57.9775 62.9025 88.5825 32.2325 88.5825 32.2325 C 88.5825 32.2325 88.5825 62.9525 88.5825 62.9525 C 88.5825 62.9525 90.0275 62.9525 90.0275 62.9525 C 90.0275 62.9525 90.0275 29.655 90.0275 29.655 C 90.0275 29.655 89.145 29.655 89.145 29.655 C 89.145 29.655 55.8225 63.05 55.8225 63.05 C 55.8225 63.05 56.0675 62.9025 56.0675 62.9025 Z M 31.3675 28.6725 C 31.3675 28.6725 14.7075 45.37 14.7075 45.37 C 14.7075 45.37 32.545 62.9025 32.545 62.9025 C 32.545 62.9025 32.545 45.96 32.545 45.96 C 32.545 45.96 31.27 45.96 31.27 45.96 C 31.27 45.96 31.27 59.955 31.27 59.955 C 31.27 59.955 16.6925 45.345 16.6925 45.345 C 16.6925 45.345 31.6375 30.365 31.6375 30.365 C 31.6375 30.365 31.6375 28.3775 31.6375 28.3775 C 31.6375 28.3775 31.3675 28.6725 31.3675 28.6725 Z M 68.49 53.915 C 68.49 53.915 77.3725 62.8175 77.3725 62.8175 C 77.3725 62.8175 75.645 62.8175 75.645 62.8175 C 75.645 62.8175 67.6025 54.755 67.6025 54.755 C 67.6025 54.755 68.49 53.915 68.49 53.915 Z M 76.7875 29.5125 C 76.7875 29.5125 59.59 46.75 59.59 46.75 C 59.59 46.75 65.1325 52.3025 65.1325 52.3025 C 65.1325 52.3025 66.13 51.3025 66.13 51.3025 C 66.13 51.3025 61.485 46.6475 61.485 46.6475 C 61.485 46.6475 78.595 29.5 78.595 29.5 C 78.595 29.5 76.7875 29.5125 76.7875 29.5125 Z M 76.565 29.195 M 54.3925 28.6475 C 54.3925 28.6475 37.24 45.8375 37.24 45.8375 C 37.24 45.8375 38.2825 46.8825 38.2825 46.8825 C 38.2825 46.8825 54.9525 46.8825 54.9525 46.8825 C 54.9525 46.8825 38.975 62.895 38.975 62.895 C 38.975 62.895 40.8575 62.895 40.8575 62.895 C 40.8575 62.895 57.0825 46.635 57.0825 46.635 C 57.0825 46.635 55.9425 45.4925 55.9425 45.4925 C 55.9425 45.4925 39.6025 45.4925 39.6025 45.4925 C 39.6025 45.4925 56.41 28.6475 56.41 28.6475 C 56.41 28.6475 54.3925 28.6475 54.3925 28.6475 Z M 18.9875 61.6875 C 18.9875 61.6875 19.745 63.0025 19.745 63.0025 C 19.745 63.0025 31.135 63.0025 31.135 63.0025 C 31.135 63.0025 29.72 61.585 29.72 61.585 C 29.72 61.585 18.9275 61.585 18.9275 61.585 C 18.9275 61.585 18.9875 61.6875 18.9875 61.6875 Z M 8.7325 44.1975 C 8.7325 44.1975 14.725 44.1975 14.725 44.1975 C 14.725 44.1975 13.455 45.47 13.455 45.47 C 13.455 45.47 9.55 45.47 9.55 45.47 C 9.55 45.47 8.7325 44.1975 8.7325 44.1975 Z M -0.37 28.285 C -0.37 28.285 0.505 29.8025 0.505 29.8025 C 0.505 29.8025 28.9025 29.8025 28.9025 29.8025 C 28.9025 29.8025 30.4075 28.295 30.4075 28.295 C 30.4075 28.295 -0.37 28.285 -0.37 28.285 Z M 33.8975 28.5875 C 33.8975 28.5875 33.8975 62.91 33.8975 62.91 C 33.8975 62.91 35.1625 62.91 35.1625 62.91 C 35.1625 62.91 35.1625 28.595 35.1625 28.595 C 35.1625 28.595 33.8975 28.5875 33.8975 28.5875 Z Z Z",Ce="M 17.9714 63.073 C 17.9714 63.073 -21.6002 63.073 -21.6002 63.073 C -21.6002 63.073 -1.8157 29.2437 -1.8157 29.2437 C -1.8157 29.2437 17.9714 63.073 17.9714 63.073 Z Z";function jt(t){let e,o,n,i,r,s,l,_,f,a,c,m,p,C,d,y,H,q,Z,z,N,gt,P,Ct,yt,nt,O,G,S,wt,T,vt,bt,$t,qt;return{c(){e=h("svg"),o=h("a"),n=h("g"),i=h("g"),r=h("path"),l=h("rect"),a=h("a"),c=h("g"),m=h("g"),p=h("path"),d=h("rect"),q=h("a"),Z=h("g"),z=h("g"),N=h("path"),P=h("rect"),nt=h("a"),O=h("g"),G=h("g"),S=h("path"),T=h("rect"),b(r,"stroke","#fff"),b(r,"stroke-width","0"),b(r,"fill","#fff"),u(r,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),u(r,"class","svelte-1jqc3ea"),u(l,"width","16"),u(l,"height","16"),u(l,"opacity","0"),u(n,"opacity",t[1]),u(o,"href","https://github.com/aegiscarr"),b(p,"stroke","#fff"),b(p,"stroke-width","0"),b(p,"fill","#fff"),u(p,"d","M 41.256 4.1032 C 41.268 4.2768 41.268 4.4504 41.268 4.6256 C 41.268 9.964 37.204 16.1208 29.7728 16.1208 V 16.1176 C 27.5776 16.1208 25.428 15.492 23.58 14.3064 C 23.8992 14.3448 24.22 14.364 24.5416 14.3648 C 26.3608 14.3664 28.128 13.756 29.5592 12.632 C 27.8304 12.5992 26.3144 11.472 25.7848 9.8264 C 26.3904 9.9432 27.0144 9.9192 27.6088 9.7568 C 25.724 9.376 24.368 7.72 24.368 5.7968 V 5.7456 C 24.9296 6.0584 25.5584 6.232 26.2016 6.2512 C 24.4264 5.0648 23.8792 2.7032 24.9512 0.8568 C 27.0024 3.3808 30.0288 4.9152 33.2776 5.0776 C 32.952 3.6744 33.3968 2.204 34.4464 1.2176 C 36.0736 -0.312 38.6328 -0.2336 40.1624 1.3928 C 41.0672 1.2144 41.9344 0.8824 42.728 0.412 C 42.4264 1.3472 41.7952 2.1416 40.952 2.6464 C 41.7528 2.552 42.5352 2.3376 43.272 2.0104 C 42.7296 2.8232 42.0464 3.5312 41.256 4.1032 Z"),u(p,"class","svelte-1jqc3ea"),u(d,"x","26"),u(d,"width","16"),u(d,"height","16"),u(d,"opacity","0"),u(c,"opacity",t[2]),u(a,"href","https://twitter.com/aegiscarr"),b(N,"stroke","#fff"),b(N,"stroke-width","0"),b(N,"fill","#fff"),u(N,"d","M 53.125 0 L 50 3.125 V 14.375 H 53.75 V 17.5 L 56.875 14.375 H 59.375 L 65 8.75 V 0 H 53.125 Z M 63.75 8.125 L 61.25 10.625 H 58.75 L 56.5625 12.8125 V 10.625 H 53.75 V 1.25 H 63.75 V 8.125 M 60.625 3.4375 H 61.875 V 7.1875 H 60.625 M 57.1875 3.4375 H 58.4375 V 7.1875 H 57.1875 Z"),u(N,"class","svelte-1jqc3ea"),u(P,"x","50"),u(P,"width","16"),u(P,"height","16"),u(P,"opacity","0"),u(Z,"opacity",t[3]),u(q,"href","https://twitch.tv/aegiscarr"),b(S,"stroke","#fff"),b(S,"stroke-width","0"),b(S,"fill","#fff"),u(S,"d","M 79.4863 0 A 8.007 8.007 90 0 0 71.5 7.3582 L 75.7953 9.131 A 2.2553 2.2553 90 0 1 77.0717 8.7375 Q 77.1357 8.7375 77.198 8.741 L 79.1085 5.9768 V 5.938 A 3.022 3.022 90 1 1 82.1305 8.9555 H 82.0617 L 79.3368 10.8955 C 79.3385 10.9315 79.3398 10.9675 79.3398 11.0028 A 2.2687 2.2687 90 0 1 74.8473 11.4493 L 71.775 10.18 A 8.0118 8.0118 90 1 0 79.4863 0 Z M 76.522 12.1387 L 75.5378 11.7325 A 1.7 1.7 90 1 0 76.469 9.4093 L 77.4862 9.829 A 1.2512 1.2512 90 1 1 76.522 12.1385 Z M 84.1442 5.938 A 2.0137 2.0137 90 1 0 82.1307 7.948 A 2.0148 2.0148 90 0 0 84.1442 5.938 Z M 80.621 5.9347 A 1.5128 1.5128 90 1 1 82.1335 7.4445 A 1.5113 1.5113 90 0 1 80.6212 5.9345 Z"),u(S,"class","svelte-1jqc3ea"),u(T,"x","72"),u(T,"width","16"),u(T,"height","16"),u(T,"opacity","0"),u(O,"opacity",t[4]),u(nt,"href","https://steamcommunity.com/id/aegiscarr"),u(e,"id","noscroll"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 103 124"),u(e,"class","svelte-1jqc3ea")},m(x,D){L(x,e,D),g(e,o),g(o,n),g(n,i),g(i,r),g(i,l),g(e,a),g(a,c),g(c,m),g(m,p),g(m,d),g(e,q),g(q,Z),g(Z,z),g(z,N),g(z,P),g(e,nt),g(nt,O),g(O,G),g(G,S),g(G,T),$t||(qt=[M(n,"mouseover",t[5]),M(n,"mouseout",t[6]),M(n,"focus",t[5]),M(n,"blur",t[6]),M(c,"mouseover",t[7]),M(c,"mouseout",t[8]),M(c,"focus",t[7]),M(c,"blur",t[8]),M(Z,"mouseover",t[9]),M(Z,"mouseout",t[10]),M(Z,"focus",t[9]),M(Z,"blur",t[10]),M(O,"mouseover",t[11]),M(O,"mouseout",t[12]),M(O,"focus",t[11]),M(O,"blur",t[12])],$t=!0)},p(x,D){t=x,D&2&&u(n,"opacity",t[1]),D&4&&u(c,"opacity",t[2]),D&8&&u(Z,"opacity",t[3]),D&16&&u(O,"opacity",t[4])},i(x){s||w(()=>{s=$(r,j,{}),s.start()}),_||w(()=>{_=$(i,F,{delay:1150+100,duration:500,y:5,easing:it}),_.start()}),f||w(()=>{f=$(n,B,{duration:500,delay:1e3+100}),f.start()}),C||w(()=>{C=$(p,j,{}),C.start()}),y||w(()=>{y=$(m,F,{delay:1200+100,duration:500,y:5,easing:it}),y.start()}),H||w(()=>{H=$(c,B,{duration:500,delay:1050+100}),H.start()}),gt||w(()=>{gt=$(N,j,{}),gt.start()}),Ct||w(()=>{Ct=$(z,F,{delay:1250+100,duration:500,y:5,easing:it}),Ct.start()}),yt||w(()=>{yt=$(Z,B,{duration:500,delay:1100+100}),yt.start()}),wt||w(()=>{wt=$(S,j,{}),wt.start()}),vt||w(()=>{vt=$(G,F,{delay:1300+100,duration:500,y:5,easing:it}),vt.start()}),bt||w(()=>{bt=$(O,B,{duration:500,delay:1150+100}),bt.start()})},o:E,d(x){x&&k(e),$t=!1,I(qt)}}}function ye(t){let e,o=t[0]&&jt(t);return{c(){o&&o.c(),e=ht()},m(n,i){o&&o.m(n,i),L(n,e,i)},p(n,[i]){n[0]?o?(o.p(n,i),i&1&&v(o,1)):(o=jt(n),o.c(),v(o,1),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i(n){v(o)},o:E,d(n){o&&o.d(n),n&&k(e)}}}function we(t,e,o){let{smlogo_visible:n=!1}=e,i=1,r=1,s=1,l=1;function _(){o(1,i=.5)}function f(){o(1,i=1)}function a(){o(2,r=.5)}function c(){o(2,r=1)}function m(){o(3,s=.5)}function p(){o(3,s=1)}function C(){o(4,l=.5)}function d(){o(4,l=1)}return t.$$set=y=>{"smlogo_visible"in y&&o(0,n=y.smlogo_visible)},[n,i,r,s,l,_,f,a,c,m,p,C,d]}class ve extends et{constructor(e){super(),tt(this,e,we,ye,Y,{smlogo_visible:0})}}function It(t){let e,o,n,i,r,s,l,_,f,a,c,m,p,C;return p=new ve({props:{smlogo_visible:"true"}}),{c(){e=h("svg"),o=h("g"),n=h("path"),r=h("g"),s=h("path"),f=h("g"),a=h("path"),m=mt(),dt(p.$$.fragment),b(n,"stroke","#fff"),b(n,"stroke-width",".25"),u(n,"d",Vt),u(n,"class","svelte-17f4bqh"),u(o,"opacity","1"),b(s,"fill","#fff"),u(s,"d",Vt),u(s,"class","svelte-17f4bqh"),u(r,"opacity","1"),b(a,"stroke","#fff"),b(a,"stroke-width","1.1"),u(a,"d",Ce),u(a,"class","svelte-17f4bqh"),u(f,"opacity","1"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 103 124"),u(e,"class","svelte-17f4bqh")},m(d,y){L(d,e,y),g(e,o),g(o,n),g(e,r),g(r,s),g(e,f),g(f,a),L(d,m,y),U(p,d,y),C=!0},p(d,y){},i(d){C||(i||w(()=>{i=$(n,j,{duration:5e3,delay:0,easing:ge}),i.start()}),l||w(()=>{l=$(s,j,{duration:50,easing:Lt}),l.start()}),_||w(()=>{_=$(r,B,{duration:1e3,delay:500+100,easing:Lt}),_.start()}),c||w(()=>{c=$(a,j,{duration:1300,delay:0,easing:me}),c.start()}),v(p.$$.fragment,d),C=!0)},o(d){A(p.$$.fragment,d),C=!1},d(d){d&&k(e),d&&k(m),X(p,d)}}}function be(t){let e,o,n=t[0]&&It();return{c(){n&&n.c(),e=ht()},m(i,r){n&&n.m(i,r),L(i,e,r),o=!0},p(i,[r]){i[0]?n?(n.p(i,r),r&1&&v(n,1)):(n=It(),n.c(),v(n,1),n.m(e.parentNode,e)):n&&(at(),A(n,1,1,()=>{n=null}),_t())},i(i){o||(v(n),o=!0)},o(i){A(n),o=!1},d(i){n&&n.d(i),i&&k(e)}}}function $e(t,e,o){let{logo_visible:n=!1}=e;return t.$$set=i=>{"logo_visible"in i&&o(0,n=i.logo_visible)},[n]}class Me extends et{constructor(e){super(),tt(this,e,$e,be,Y,{logo_visible:0})}}function Pt(t,e,o){const n=t.slice();return n[4]=e[o],n[6]=o,n}function Tt(t){let e,o,n,i,r,s=t[2],l=[];for(let f=0;f<s.length;f+=1)l[f]=xt(Pt(t,s,f));const _=f=>A(l[f],1,1,()=>{l[f]=null});return{c(){e=pt("canvas"),n=mt();for(let f=0;f<l.length;f+=1)l[f].c();i=ht(),u(e,"class","noscroll svelte-phawuu"),u(e,"width",32),u(e,"height",32)},m(f,a){L(f,e,a),t[3](e),L(f,n,a);for(let c=0;c<l.length;c+=1)l[c].m(f,a);L(f,i,a),r=!0},p(f,a){if(a&4){s=f[2];let c;for(c=0;c<s.length;c+=1){const m=Pt(f,s,c);l[c]?(l[c].p(m,a),v(l[c],1)):(l[c]=xt(m),l[c].c(),v(l[c],1),l[c].m(i.parentNode,i))}for(at(),c=s.length;c<l.length;c+=1)_(c);_t()}},i(f){if(!r){o&&o.end(1);for(let a=0;a<s.length;a+=1)v(l[a]);r=!0}},o(f){o=Yt(e,B,{delay:250,duration:500}),l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)A(l[a]);r=!1},d(f){f&&k(e),t[3](null),f&&o&&o.end(),f&&k(n),oe(l,f),f&&k(i)}}}function xt(t){let e,o=t[4]+"",n,i,r,s;return{c(){e=pt("p"),n=Ot(o),u(e,"easing",Lt),u(e,"class","svelte-phawuu")},m(l,_){L(l,e,_),g(e,n),s=!0},p:E,i(l){s||(w(()=>{r&&r.end(1),i=$(e,F,{duration:500,delay:100+t[6]*500,y:20}),i.start()}),s=!0)},o(l){i&&i.invalidate(),r=Yt(e,F,{duration:500,delay:100+t[6]*500,y:-20}),s=!1},d(l){l&&k(e),l&&r&&r.end()}}}function Dt(t){let e,o;return e=new Me({props:{logo_visible:"true"}}),{c(){dt(e.$$.fragment)},m(n,i){U(e,n,i),o=!0},i(n){o||(v(e.$$.fragment,n),o=!0)},o(n){A(e.$$.fragment,n),o=!1},d(n){X(e,n)}}}function ke(t){let e,o,n,i=t[0]&&Tt(t),r=!t[0]&&Dt();return{c(){i&&i.c(),e=mt(),r&&r.c(),o=ht()},m(s,l){i&&i.m(s,l),L(s,e,l),r&&r.m(s,l),L(s,o,l),n=!0},p(s,[l]){s[0]?i?(i.p(s,l),l&1&&v(i,1)):(i=Tt(s),i.c(),v(i,1),i.m(e.parentNode,e)):i&&(at(),A(i,1,1,()=>{i=null}),_t()),s[0]?r&&(at(),A(r,1,1,()=>{r=null}),_t()):r?l&1&&v(r,1):(r=Dt(),r.c(),v(r,1),r.m(o.parentNode,o))},i(s){n||(v(i),v(r),n=!0)},o(s){A(i),A(r),n=!1},d(s){i&&i.d(s),s&&k(e),r&&r.d(s),s&&k(o)}}}function Ze(t,e,o){let n=!1,i=1,r=[""];Wt(async()=>{setTimeout(function(){o(0,n=!0)}),setTimeout(function(){o(0,n=!1)},700)});function s(l){ct[l?"unshift":"push"](()=>{i=l,o(1,i)})}return[n,i,r,s]}class Le extends et{constructor(e){super(),tt(this,e,Ze,ke,Y,{})}}function Ae(t){let e;return{c(){e=pt("canvas"),u(e,"class","noscroll svelte-wpqx96"),u(e,"width",32),u(e,"height",32),b(e,"opacity",t[1])},m(o,n){L(o,e,n),t[2](e)},p(o,[n]){n&2&&b(e,"opacity",o[1])},i:E,o:E,d(o){o&&k(e),t[2](null)}}}function Ee(t,e,o){let n,i;Wt(()=>{const s=n.getContext("2d");let l;return function _(){o(1,i=1),l=requestAnimationFrame(_);const f=s.getImageData(0,0,n.width,n.height);for(let a=0;a<f.data.length;a+=4){const c=a/4,m=c%n.width,p=c/n.height>>>0,C=window.performance.now(),d=64+128*m/n.width+64*Math.sin(C/1e3),y=64+128*p/n.height+64*Math.cos(C/1400),H=128;f.data[a+0]=d,f.data[a+1]=y,f.data[a+2]=H,f.data[a+3]=255}s.putImageData(f,0,0)}(),()=>{cancelAnimationFrame(l)}});function r(s){ct[s?"unshift":"push"](()=>{n=s,o(0,n)})}return[n,i,r]}class He extends et{constructor(e){super(),tt(this,e,Ee,Ae,Y,{})}}function Oe(t){let e,o,n,i;return e=new He({}),n=new Le({}),{c(){dt(e.$$.fragment),o=mt(),dt(n.$$.fragment)},m(r,s){U(e,r,s),L(r,o,s),U(n,r,s),i=!0},p:E,i(r){i||(v(e.$$.fragment,r),v(n.$$.fragment,r),i=!0)},o(r){A(e.$$.fragment,r),A(n.$$.fragment,r),i=!1},d(r){X(e,r),r&&k(o),X(n,r)}}}class qe extends et{constructor(e){super(),tt(this,e,null,Oe,Y,{})}}new qe({target:document.body});
