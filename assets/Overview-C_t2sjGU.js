import{d as it,o as R,c as rt,f as ht,n as It,u as b,g as vt,h as ce,H as Se,i as Ct,w,m as Vt,q as we,z as Ie,r as ut,j as Dt,k as ae,l as Le,p as ee,s as Ee,v as Oe,x as Ae,b as M,y as ke,a as I,A as De,F as Te,e as U,t as St,B as ne}from"./index-Dy1s030t.js";import{_ as at,c as lt,a as mt,b as gt,d as Me}from"./CardContent.vue_vue_type_script_setup_true_lang-Dn6CQYeR.js";import{u as Ce}from"./shapes-Cnl21ZeS.js";import{_ as Pe}from"./AddShapes.vue_vue_type_script_setup_true_lang-W8BRepQP.js";import{_ as Ne,a as Fe}from"./TabsContent.vue_vue_type_script_setup_true_lang-BuAcsid8.js";import"./DialogFooter.vue_vue_type_script_setup_true_lang-YVaS5XyY.js";import"./Label.vue_vue_type_script_setup_true_lang-CEkesuBw.js";const je=it({__name:"CardDescription",props:{class:{}},setup(t){const e=t;return(n,s)=>(R(),rt("p",{class:It(b(vt)("text-sm text-muted-foreground",e.class))},[ht(n.$slots,"default")],2))}}),Tt=it({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,n=ce(()=>{const{class:i,...o}=e;return o}),s=Se(n);return(i,o)=>(R(),Ct(b(we),Vt(b(s),{class:b(vt)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e.class)}),{default:w(()=>[ht(i.$slots,"default")]),_:3},16,["class"]))}}),Be=it({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,n=ce(()=>{const{class:s,...i}=e;return i});return(s,i)=>(R(),Ct(b(Ie),Vt(n.value,{class:b(vt)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e.class)}),{default:w(()=>[ht(s.$slots,"default")]),_:3},16,["class"]))}});function $e(t){return Object.prototype.toString.call(t)==="[object Object]"}function oe(t){return $e(t)||Array.isArray(t)}function ze(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ht(t,e){const n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==o?!1:n.every(r=>{const c=t[r],a=e[r];return typeof c=="function"?`${c}`==`${a}`:!oe(c)||!oe(a)?c===a:Ht(c,a)})}function se(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Ve(t,e){if(t.length!==e.length)return!1;const n=se(t),s=se(e);return n.every((i,o)=>{const r=s[o];return Ht(i,r)})}function Rt(t){return typeof t=="number"}function zt(t){return typeof t=="string"}function Gt(t){return typeof t=="boolean"}function re(t){return Object.prototype.toString.call(t)==="[object Object]"}function C(t){return Math.abs(t)}function Ut(t){return Math.sign(t)}function wt(t,e){return C(t-e)}function He(t,e){if(t===0||e===0||C(t)<=C(e))return 0;const n=wt(C(t),C(e));return C(n/t)}function Lt(t){return Et(t).map(Number)}function q(t){return t[At(t)]}function At(t){return Math.max(0,t.length-1)}function qt(t,e){return e===At(t)}function ie(t,e=0){return Array.from(Array(t),(n,s)=>e+s)}function Et(t){return Object.keys(t)}function le(t,e){return[t,e].reduce((n,s)=>(Et(s).forEach(i=>{const o=n[i],r=s[i],c=re(o)&&re(r);n[i]=c?le(o,r):r}),n),{})}function ue(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Re(t,e){const n={start:s,center:i,end:o};function s(){return 0}function i(a){return o(a)/2}function o(a){return e-a}function r(a,u){return zt(t)?n[t](a):t(e,a,u)}return{measure:r}}function Ot(){let t=[];function e(i,o,r,c={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,r,c),a=()=>i.removeEventListener(o,r,c);else{const u=i;u.addListener(r),a=()=>u.removeListener(r)}return t.push(a),s}function n(){t=t.filter(i=>i())}const s={add:e,clear:n};return s}function Ge(t,e,n,s){const i=Ot(),o=1e3/60;let r=null,c=0,a=0;function u(){i.add(t,"visibilitychange",()=>{t.hidden&&m()})}function h(){y(),i.clear()}function l(v){if(!a)return;r||(r=v);const f=v-r;for(r=v,c+=f;c>=o;)n(),c-=o;const g=C(c/o);s(g),a&&e.requestAnimationFrame(l)}function d(){a||(a=e.requestAnimationFrame(l))}function y(){e.cancelAnimationFrame(a),r=null,c=0,a=0}function m(){r=null,c=0}return{init:u,destroy:h,start:d,stop:y,update:n,render:s}}function Ue(t,e){const n=t==="y"?"y":"x",s=t==="y"?"x":"y",i=c(),o=a();function r(h){const{width:l,height:d}=h;return n==="x"?l:d}function c(){return n==="y"?"top":e==="rtl"?"right":"left"}function a(){return n==="y"?"bottom":e==="rtl"?"left":"right"}return{scroll:n,cross:s,startEdge:i,endEdge:o,measureSize:r}}function ft(t=0,e=0){const n=C(t-e);function s(u){return u<t}function i(u){return u>e}function o(u){return s(u)||i(u)}function r(u){return o(u)?s(u)?t:e:u}function c(u){return n?u-n*Math.ceil((u-e)/n):u}return{length:n,max:e,min:t,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:c}}function fe(t,e,n){const{constrain:s}=ft(0,t),i=t+1;let o=r(e);function r(d){return n?C((i+d)%i):s(d)}function c(){return o}function a(d){return o=r(d),l}function u(d){return h().set(c()+d)}function h(){return fe(t,c(),n)}const l={get:c,set:a,add:u,clone:h};return l}function qe(t){const e=t==="rtl"?-1:1;function n(i){return i*e}return{apply:n}}function Ke(t,e,n,s,i,o,r,c,a,u,h,l,d,y,m,p,v,f,g,_){const{cross:S}=t,O=["INPUT","SELECT","TEXTAREA"],A={passive:!1},P=Ot(),L=Ot(),k=ft(50,225).constrain(m.measure(20)),E={mouse:300,touch:400},D={mouse:500,touch:600},F=p?43:25;let z=!1,V=0,Z=0,K=!1,et=!1,nt=!1,J=!1;function yt(x){if(!_)return;function T(B){(Gt(_)||_(x,B))&&_t(B)}const j=n;P.add(j,"dragstart",B=>B.preventDefault(),A).add(j,"touchmove",()=>{},A).add(j,"touchend",()=>{}).add(j,"touchstart",T).add(j,"mousedown",T).add(j,"touchcancel",$).add(j,"contextmenu",$).add(j,"click",W,!0)}function Q(){P.clear(),L.clear()}function dt(){const x=J?s:n;L.add(x,"touchmove",H,A).add(x,"touchend",$).add(x,"mousemove",H,A).add(x,"mouseup",$)}function pt(x){const T=x.nodeName||"";return O.includes(T)}function X(){return(p?D:E)[J?"mouse":"touch"]}function xt(x,T){const j=d.add(Ut(x)*-1),B=l.byDistance(x,!p).distance;return p||C(x)<k?B:f&&T?B*.5:l.byIndex(j.get(),0).distance}function _t(x){const T=ue(x,i);J=T,!(T&&x.button!==0)&&(pt(x.target)||(nt=p&&T&&!x.buttons&&z,z=wt(o.get(),c.get())>=2,K=!0,r.pointerDown(x),h.useFriction(0).useDuration(0),o.set(c),dt(),V=r.readPoint(x),Z=r.readPoint(x,S),y.emit("pointerDown")))}function H(x){const T=r.readPoint(x),j=r.readPoint(x,S),B=wt(T,V),ot=wt(j,Z);if(!et&&!J&&(!x.cancelable||(et=B>ot,!et)))return $(x);const Y=r.pointerMove(x);B>v&&(nt=!0),h.useFriction(.3).useDuration(1),a.start(),o.add(e.apply(Y)),x.preventDefault()}function $(x){const j=l.byDistance(0,!1).index!==d.get(),B=r.pointerUp(x)*X(),ot=xt(e.apply(B),j),Y=He(B,ot),st=F-10*Y,tt=g+Y/50;et=!1,K=!1,L.clear(),h.useDuration(st).useFriction(tt),u.distance(ot,!p),J=!1,y.emit("pointerUp")}function W(x){nt&&(x.stopPropagation(),x.preventDefault())}function G(){return K}return{init:yt,pointerDown:G,destroy:Q}}function Qe(t,e){let s,i;function o(l){return l.timeStamp}function r(l,d){const m=`client${(d||t.scroll)==="x"?"X":"Y"}`;return(ue(l,e)?l:l.touches[0])[m]}function c(l){return s=l,i=l,r(l)}function a(l){const d=r(l)-r(i),y=o(l)-o(s)>170;return i=l,y&&(s=l),d}function u(l){if(!s||!i)return 0;const d=r(i)-r(s),y=o(l)-o(s),m=o(l)-o(i)>170,p=d/y;return y&&!m&&C(p)>.1?p:0}return{pointerDown:c,pointerMove:a,pointerUp:u,readPoint:r}}function Ze(){function t(n){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=n;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:t}}function Je(t){function e(s){return t*(s/100)}return{measure:e}}function Xe(t,e,n,s,i,o,r){let c,a,u=[],h=!1;function l(p){return i.measureSize(r.measure(p))}function d(p){if(!o)return;a=l(t),u=s.map(l);function v(g){for(const _ of g){const S=_.target===t,O=s.indexOf(_.target),A=S?a:u[O],P=l(S?t:s[O]);if(C(P-A)>=.5){n.requestAnimationFrame(()=>{p.reInit(),e.emit("resize")});break}}}c=new ResizeObserver(g=>{h||(Gt(o)||o(p,g))&&v(g)}),[t].concat(s).forEach(g=>c.observe(g))}function y(){c&&c.disconnect(),h=!0}return{init:d,destroy:y}}function We(t,e,n,s,i){let o=0,r=0,c=s,a=i,u=t.get(),h=0;function l(){const O=n.get()-t.get(),A=!c;let P=0;return A?(o=0,t.set(n),P=O):(o+=O/c,o*=a,u+=o,t.add(o),P=u-h),r=Ut(P),h=u,S}function d(){const O=n.get()-e.get();return C(O)<.001}function y(){return c}function m(){return r}function p(){return o}function v(){return g(s)}function f(){return _(i)}function g(O){return c=O,S}function _(O){return a=O,S}const S={direction:m,duration:y,velocity:p,seek:l,settled:d,useBaseFriction:f,useBaseDuration:v,useFriction:_,useDuration:g};return S}function Ye(t,e,n,s,i){const o=i.measure(10),r=i.measure(50),c=ft(.1,.99);let a=!1;function u(){return!(a||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(y){if(!u())return;const m=t.reachedMin(e.get())?"min":"max",p=C(t[m]-e.get()),v=n.get()-e.get(),f=c.constrain(p/r);n.subtract(v*f),!y&&C(v)<o&&(n.set(t.constrain(n.get())),s.useDuration(25).useBaseFriction())}function l(y){a=!y}return{constrain:h,toggleActive:l}}function tn(t,e,n,s,i){const o=ft(-e+t,0),r=l(),c=h(),a=d();function u(m,p){return wt(m,p)<1}function h(){const m=r[0],p=q(r),v=r.lastIndexOf(m),f=r.indexOf(p)+1;return ft(v,f)}function l(){return n.map((m,p)=>{const{min:v,max:f}=o,g=o.constrain(m),_=!p,S=qt(n,p);return _?f:S||u(v,g)?v:u(f,g)?f:g}).map(m=>parseFloat(m.toFixed(3)))}function d(){if(e<=t+i)return[o.max];if(s==="keepSnaps")return r;const{min:m,max:p}=c;return r.slice(m,p)}return{snapsContained:a,scrollContainLimit:c}}function en(t,e,n){const s=e[0],i=n?s-t:q(e);return{limit:ft(i,s)}}function nn(t,e,n,s){const o=e.min+.1,r=e.max+.1,{reachedMin:c,reachedMax:a}=ft(o,r);function u(d){return d===1?a(n.get()):d===-1?c(n.get()):!1}function h(d){if(!u(d))return;const y=t*(d*-1);s.forEach(m=>m.add(y))}return{loop:h}}function on(t){const{max:e,length:n}=t;function s(o){const r=o-e;return n?r/-n:0}return{get:s}}function sn(t,e,n,s,i){const{startEdge:o,endEdge:r}=t,{groupSlides:c}=i,a=l().map(e.measure),u=d(),h=y();function l(){return c(s).map(p=>q(p)[r]-p[0][o]).map(C)}function d(){return s.map(p=>n[o]-p[o]).map(p=>-C(p))}function y(){return c(u).map(p=>p[0]).map((p,v)=>p+a[v])}return{snaps:u,snapsAligned:h}}function rn(t,e,n,s,i,o){const{groupSlides:r}=i,{min:c,max:a}=s,u=h();function h(){const d=r(o),y=!t||e==="keepSnaps";return n.length===1?[o]:y?d:d.slice(c,a).map((m,p,v)=>{const f=!p,g=qt(v,p);if(f){const _=q(v[0])+1;return ie(_)}if(g){const _=At(o)-q(v)[0]+1;return ie(_,q(v)[0])}return m})}return{slideRegistry:u}}function cn(t,e,n,s,i){const{reachedAny:o,removeOffset:r,constrain:c}=s;function a(m){return m.concat().sort((p,v)=>C(p)-C(v))[0]}function u(m){const p=t?r(m):c(m),v=e.map(g=>g-p).map(g=>h(g,0)).map((g,_)=>({diff:g,index:_})).sort((g,_)=>C(g.diff)-C(_.diff)),{index:f}=v[0];return{index:f,distance:p}}function h(m,p){const v=[m,m+n,m-n];if(!t)return v[0];if(!p)return a(v);const f=v.filter(g=>Ut(g)===p);return f.length?a(f):q(v)-n}function l(m,p){const v=e[m]-i.get(),f=h(v,p);return{index:m,distance:f}}function d(m,p){const v=i.get()+m,{index:f,distance:g}=u(v),_=!t&&o(v);if(!p||_)return{index:f,distance:m};const S=e[f]-g,O=m+h(S,0);return{index:f,distance:O}}return{byDistance:d,byIndex:l,shortcut:h}}function an(t,e,n,s,i,o,r){function c(l){const d=l.distance,y=l.index!==e.get();o.add(d),d&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),y&&(n.set(e.get()),e.set(l.index),r.emit("select"))}function a(l,d){const y=i.byDistance(l,d);c(y)}function u(l,d){const y=e.clone().set(l),m=i.byIndex(y.get(),d);c(m)}return{distance:a,index:u}}function ln(t,e,n,s,i,o){let r=0;function c(){o.add(document,"keydown",a,!1),e.forEach(u)}function a(l){l.code==="Tab"&&(r=new Date().getTime())}function u(l){const d=()=>{if(new Date().getTime()-r>10)return;t.scrollLeft=0;const p=e.indexOf(l),v=n.findIndex(f=>f.includes(p));Rt(v)&&(i.useDuration(0),s.index(v,0))};o.add(l,"focus",d,{passive:!0,capture:!0})}return{init:c}}function Mt(t){let e=t;function n(){return e}function s(a){e=r(a)}function i(a){e+=r(a)}function o(a){e-=r(a)}function r(a){return Rt(a)?a:a.get()}return{get:n,set:s,add:i,subtract:o}}function de(t,e,n){const s=t.scroll==="x"?r:c,i=n.style;let o=!1;function r(d){return`translate3d(${d}px,0px,0px)`}function c(d){return`translate3d(0px,${d}px,0px)`}function a(d){o||(i.transform=s(e.apply(d)))}function u(d){o=!d}function h(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:h,to:a,toggleActive:u}}function un(t,e,n,s,i,o,r,c,a,u){const l=Lt(o),d=Lt(o).reverse(),y=g().concat(_());function m(L,k){return L.reduce((E,D)=>E-o[D],k)}function p(L,k){return L.reduce((E,D)=>m(E,k)>0?E.concat([D]):E,[])}function v(L){return r.map((k,E)=>({start:k-i[E]+.5+L,end:k+n-.5+L}))}function f(L,k,E){const D=v(k);return L.map(F=>{const z=E?0:-s,V=E?s:0,Z=E?"end":"start",K=D[F][Z];return{index:F,loopPoint:K,slideLocation:Mt(-1),translate:de(t,e,u[F]),target:()=>a.get()>K?z:V}})}function g(){const L=c[0],k=p(d,L);return f(k,s,!1)}function _(){const L=n-c[0]-1,k=p(l,L);return f(k,-s,!0)}function S(){return y.every(({index:L})=>{const k=l.filter(E=>E!==L);return m(k,n)<=.1})}function O(){y.forEach(L=>{const{target:k,translate:E,slideLocation:D}=L,F=k();F!==D.get()&&(E.to(F),D.set(F))})}function A(){y.forEach(L=>L.translate.clear())}return{canLoop:S,clear:A,loop:O,loopPoints:y}}function fn(t,e,n){let s,i=!1;function o(a){if(!n)return;function u(h){for(const l of h)if(l.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(h=>{i||(Gt(n)||n(a,h))&&u(h)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function dn(t,e,n,s){const i={};let o=null,r=null,c,a=!1;function u(){c=new IntersectionObserver(m=>{a||(m.forEach(p=>{const v=e.indexOf(p.target);i[v]=p}),o=null,r=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(m=>c.observe(m))}function h(){c&&c.disconnect(),a=!0}function l(m){return Et(i).reduce((p,v)=>{const f=parseInt(v),{isIntersecting:g}=i[f];return(m&&g||!m&&!g)&&p.push(f),p},[])}function d(m=!0){if(m&&o)return o;if(!m&&r)return r;const p=l(m);return m&&(o=p),m||(r=p),p}return{init:u,destroy:h,get:d}}function pn(t,e,n,s,i,o){const{measureSize:r,startEdge:c,endEdge:a}=t,u=n[0]&&i,h=m(),l=p(),d=n.map(r),y=v();function m(){if(!u)return 0;const g=n[0];return C(e[c]-g[c])}function p(){if(!u)return 0;const g=o.getComputedStyle(q(s));return parseFloat(g.getPropertyValue(`margin-${a}`))}function v(){return n.map((g,_,S)=>{const O=!_,A=qt(S,_);return O?d[_]+h:A?d[_]+l:S[_+1][c]-g[c]}).map(C)}return{slideSizes:d,slideSizesWithGaps:y,startGap:h,endGap:l}}function mn(t,e,n,s,i,o,r,c,a,u){const{startEdge:h,endEdge:l}=t,d=Rt(s);function y(f,g){return Lt(f).filter(_=>_%g===0).map(_=>f.slice(_,_+g))}function m(f){return f.length?Lt(f).reduce((g,_)=>{const S=q(g)||0,O=S===0,A=_===At(f),P=o[h]-r[S][h],L=o[h]-r[_][l],k=!i&&O?e.apply(c):0,E=!i&&A?e.apply(a):0;return C(L-E-(P+k))>n+u&&g.push(_),A&&g.push(f.length),g},[]).map((g,_,S)=>{const O=Math.max(S[_-1]||0);return f.slice(O,g)}):[]}function p(f){return d?y(f,s):m(f)}return{groupSlides:p}}function gn(t,e,n,s,i,o,r){const{align:c,axis:a,direction:u,startIndex:h,loop:l,duration:d,dragFree:y,dragThreshold:m,inViewThreshold:p,slidesToScroll:v,skipSnaps:f,containScroll:g,watchResize:_,watchSlides:S,watchDrag:O}=o,A=2,P=Ze(),L=P.measure(e),k=n.map(P.measure),E=qe(u),D=Ue(a,u),F=D.measureSize(L),z=Je(F),V=Re(c,F),Z=!l&&!!g,K=l||!!g,{slideSizes:et,slideSizesWithGaps:nt,startGap:J,endGap:yt}=pn(D,L,k,n,K,i),Q=mn(D,E,F,v,l,L,k,J,yt,A),{snaps:dt,snapsAligned:pt}=sn(D,V,L,k,Q),X=-q(dt)+q(nt),{snapsContained:xt,scrollContainLimit:_t}=tn(F,X,pt,g,A),H=Z?xt:pt,{limit:$}=en(X,H,l),W=fe(At(H),h,l),G=W.clone(),N=Lt(n),x=({dragHandler:ct,scrollBody:Bt,scrollBounds:$t,options:{loop:kt}})=>{kt||$t.constrain(ct.pointerDown()),Bt.seek()},T=({scrollBody:ct,translate:Bt,location:$t,offsetLocation:kt,scrollLooper:he,slideLooper:ve,dragHandler:ye,animation:xe,eventHandler:Wt,options:{loop:_e}},be)=>{const Yt=ct.velocity(),te=ct.settled();te&&!ye.pointerDown()&&(xe.stop(),Wt.emit("settle")),te||Wt.emit("scroll"),kt.set($t.get()-Yt+Yt*be),_e&&(he.loop(ct.direction()),ve.loop()),Bt.to(kt.get())},j=Ge(s,i,()=>x(jt),ct=>T(jt,ct)),B=.68,ot=H[W.get()],Y=Mt(ot),st=Mt(ot),tt=Mt(ot),bt=We(Y,st,tt,d,B),Nt=cn(l,H,X,$,tt),Ft=an(j,W,G,bt,Nt,tt,r),Zt=on($),Jt=Ot(),me=dn(e,n,r,p),{slideRegistry:Xt}=rn(Z,g,H,_t,Q,N),ge=ln(t,n,Xt,Ft,bt,Jt),jt={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:L,slideRects:k,animation:j,axis:D,direction:E,dragHandler:Ke(D,E,t,s,i,tt,Qe(D,i),Y,j,Ft,bt,Nt,W,r,z,y,m,f,B,O),eventStore:Jt,percentOfView:z,index:W,indexPrevious:G,limit:$,location:Y,offsetLocation:st,options:o,resizeHandler:Xe(e,r,i,n,D,_,P),scrollBody:bt,scrollBounds:Ye($,st,tt,bt,z),scrollLooper:nn(X,$,st,[Y,st,tt]),scrollProgress:Zt,scrollSnapList:H.map(Zt.get),scrollSnaps:H,scrollTarget:Nt,scrollTo:Ft,slideLooper:un(D,E,F,X,et,nt,dt,H,st,n),slideFocus:ge,slidesHandler:fn(e,r,S),slidesInView:me,slideIndexes:N,slideRegistry:Xt,slidesToScroll:Q,target:tt,translate:de(D,E,e)};return jt}function hn(){const t={};let e;function n(a){e=a}function s(a){return t[a]||[]}function i(a){return s(a).forEach(u=>u(e,a)),c}function o(a,u){return t[a]=s(a).concat([u]),c}function r(a,u){return t[a]=s(a).filter(h=>h!==u),c}const c={init:n,emit:i,off:r,on:o};return c}const vn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function yn(t){function e(o,r){return le(o,r||{})}function n(o){const r=o.breakpoints||{},c=Et(r).filter(a=>t.matchMedia(a).matches).map(a=>r[a]).reduce((a,u)=>e(a,u),{});return e(o,c)}function s(o){return o.map(r=>Et(r.breakpoints||{})).reduce((r,c)=>r.concat(c),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:s}}function xn(t){let e=[];function n(o,r){return e=r.filter(({options:c})=>t.optionsAtMedia(c).active!==!1),e.forEach(c=>c.init(o,t)),r.reduce((c,a)=>Object.assign(c,{[a.name]:a}),{})}function s(){e=e.filter(o=>o.destroy())}return{init:n,destroy:s}}function Pt(t,e,n){const s=t.ownerDocument,i=s.defaultView,o=yn(i),r=xn(o),c=Ot(),a=hn(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:l}=o,{on:d,off:y,emit:m}=a,p=D;let v=!1,f,g=u(vn,Pt.globalOptions),_=u(g),S=[],O,A,P;function L(){const{container:N,slides:x}=_;A=(zt(N)?t.querySelector(N):N)||t.children[0];const j=zt(x)?A.querySelectorAll(x):x;P=[].slice.call(j||A.children)}function k(N){const x=gn(t,A,P,s,i,N,a);if(N.loop&&!x.slideLooper.canLoop()){const T=Object.assign({},N,{loop:!1});return k(T)}return x}function E(N,x){v||(g=u(g,N),_=h(g),S=x||S,L(),f=k(_),l([g,...S.map(({options:T})=>T)]).forEach(T=>c.add(T,"change",D)),_.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(G),f.resizeHandler.init(G),f.slidesHandler.init(G),f.options.loop&&f.slideLooper.loop(),A.offsetParent&&P.length&&f.dragHandler.init(G),O=r.init(G,S)))}function D(N,x){const T=Q();F(),E(u({startIndex:T},N),x),a.emit("reInit")}function F(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),c.clear()}function z(){v||(v=!0,c.clear(),F(),a.emit("destroy"))}function V(N,x,T){!_.active||v||(f.scrollBody.useBaseFriction().useDuration(x===!0?0:_.duration),f.scrollTo.index(N,T||0))}function Z(N){const x=f.index.add(1).get();V(x,N,-1)}function K(N){const x=f.index.add(-1).get();V(x,N,1)}function et(){return f.index.add(1).get()!==Q()}function nt(){return f.index.add(-1).get()!==Q()}function J(){return f.scrollSnapList}function yt(){return f.scrollProgress.get(f.location.get())}function Q(){return f.index.get()}function dt(){return f.indexPrevious.get()}function pt(){return f.slidesInView.get()}function X(){return f.slidesInView.get(!1)}function xt(){return O}function _t(){return f}function H(){return t}function $(){return A}function W(){return P}const G={canScrollNext:et,canScrollPrev:nt,containerNode:$,internalEngine:_t,destroy:z,off:y,on:d,emit:m,plugins:xt,previousScrollSnap:dt,reInit:p,rootNode:H,scrollNext:Z,scrollPrev:K,scrollProgress:yt,scrollSnapList:J,scrollTo:V,selectedScrollSnap:Q,slideNodes:W,slidesInView:pt,slidesNotInView:X};return E(e,n),setTimeout(()=>a.emit("init"),0),G}Pt.globalOptions=void 0;function Kt(t={},e=[]){const n=ut(Dt(t)?t.value:t),s=ut(Dt(e)?e.value:e),i=ut(),o=ut();function r(){o.value&&o.value.reInit(n.value,s.value)}return ae(()=>{!ze()||!i.value||(Pt.globalOptions=Kt.globalOptions,o.value=Pt(i.value,n.value,s.value))}),Le(()=>{o.value&&o.value.destroy()}),Dt(t)&&ee(t,c=>{Ht(n.value,c)||(n.value=c,r())}),Dt(e)&&ee(e,c=>{Ve(s.value,c)||(s.value=c,r())}),[i,o]}Kt.globalOptions=void 0;const[_n,bn]=Ee(({opts:t,orientation:e,plugins:n},s)=>{const[i,o]=Kt({...t,axis:e==="horizontal"?"x":"y"},n);function r(){var l;(l=o.value)==null||l.scrollPrev()}function c(){var l;(l=o.value)==null||l.scrollNext()}const a=ut(!0),u=ut(!0);function h(l){a.value=l.canScrollNext(),u.value=l.canScrollPrev()}return ae(()=>{var l,d,y;o.value&&((l=o.value)==null||l.on("init",h),(d=o.value)==null||d.on("reInit",h),(y=o.value)==null||y.on("select",h),s("init-api",o.value))}),{carouselRef:i,carouselApi:o,canScrollPrev:u,canScrollNext:a,scrollPrev:r,scrollNext:c,orientation:e}});function pe(){const t=bn();if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Sn=it({__name:"Carousel",props:{opts:{},plugins:{},orientation:{default:"horizontal"},class:{}},emits:["init-api"],setup(t,{expose:e,emit:n}){const s=t,o=_n(s,n);e(o);function r(c){const a=s.orientation==="vertical"?"ArrowUp":"ArrowLeft",u=s.orientation==="vertical"?"ArrowDown":"ArrowRight";if(c.key===a){c.preventDefault(),o.scrollPrev();return}c.key===u&&(c.preventDefault(),o.scrollNext())}return(c,a)=>(R(),rt("div",{class:It(b(vt)("relative",s.class)),role:"region","aria-roledescription":"carousel",tabindex:"0",onKeydown:r},[ht(c.$slots,"default",Oe(Ae(b(o))))],34))}}),wn=it({inheritAttrs:!1,__name:"CarouselContent",props:{class:{}},setup(t){const e=t,{carouselRef:n,orientation:s}=pe();return(i,o)=>(R(),rt("div",{ref_key:"carouselRef",ref:n,class:"overflow-hidden"},[M("div",Vt({class:b(vt)("flex",b(s)==="horizontal"?"-ml-4":"-mt-4 flex-col",e.class)},i.$attrs),[ht(i.$slots,"default")],16)],512))}}),In=it({__name:"CarouselItem",props:{class:{}},setup(t){const e=t,{orientation:n}=pe();return(s,i)=>(R(),rt("div",{role:"group","aria-roledescription":"slide",class:It(b(vt)("min-w-0 shrink-0 grow-0 basis-full",b(n)==="horizontal"?"pl-4":"pt-4",e.class))},[ht(s.$slots,"default")],2))}}),Ln={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Qt(t={}){let e,n,s,i=!1,o=!0,r=!1,c=0,a=0;function u(S,O){n=S;const{mergeOptions:A,optionsAtMedia:P}=O,L=A(Ln,Qt.globalOptions),k=A(L,t);if(e=P(k),n.scrollSnapList().length<=1)return;r=e.jump,s=!1;const{eventStore:E,ownerDocument:D}=n.internalEngine(),F=n.rootNode(),z=e.rootNode&&e.rootNode(F)||F,V=n.containerNode();n.on("pointerDown",d),e.stopOnInteraction||n.on("pointerUp",l),e.stopOnMouseEnter&&(E.add(z,"mouseenter",()=>{o=!1,d()}),e.stopOnInteraction||E.add(z,"mouseleave",()=>{o=!0,l()})),e.stopOnFocusIn&&(E.add(V,"focusin",d),e.stopOnInteraction||E.add(V,"focusout",l)),E.add(D,"visibilitychange",y),e.playOnInit&&n.on("init",l).on("reInit",l)}function h(){n.off("init",l).off("reInit",l).off("pointerDown",d).off("pointerUp",l),d(),cancelAnimationFrame(c),c=0,s=!0,i=!1}function l(){if(s||!o)return;i||n.emit("autoplay:play");const{ownerWindow:S}=n.internalEngine();S.clearInterval(a),a=S.setInterval(g,e.delay),i=!0}function d(){if(s)return;i&&n.emit("autoplay:stop");const{ownerWindow:S}=n.internalEngine();S.clearInterval(a),a=0,i=!1}function y(){const{ownerDocument:S}=n.internalEngine();if(S.visibilityState==="hidden")return o=i,d();o&&l()}function m(S){typeof S<"u"&&(r=S),o=!0,l()}function p(){i&&d()}function v(){i&&m()}function f(){return i}function g(){c=requestAnimationFrame(()=>{const{index:S}=n.internalEngine(),O=S.clone().add(1).get(),A=n.scrollSnapList().length-1;e.stopOnLastSnap&&O===A&&d(),n.canScrollNext()?n.scrollNext(r):n.scrollTo(0,r)})}return{name:"autoplay",options:t,init:u,destroy:h,play:m,stop:p,reset:v,isPlaying:f}}Qt.globalOptions=void 0;const En={class:"p-1"},On=it({__name:"ShapeCarousel",setup(t){const e=Ce(),{shapes:n}=ke(e);return(s,i)=>(R(),Ct(b(Sn),{class:"relative w-full max-w-3xl items-center justify-center",opts:{align:"start",loop:!0},plugins:[b(Qt)({delay:2e3})]},{default:w(()=>[I(b(wn),{class:"-ml-1"},{default:w(()=>[(R(!0),rt(Te,null,De(b(n),o=>(R(),Ct(b(In),{key:o.id,class:"pl-1 md:basis-1/2 lg:basis-1/3"},{default:w(()=>[M("div",En,[I(b(at),null,{default:w(()=>[I(b(je),{class:"ml-2"},{default:w(()=>[U(St(o.name),1)]),_:2},1024),I(b(lt),{class:"flex aspect-square items-center justify-center p-6"},{default:w(()=>[o.shape=="triangle"||o.shape=="trapezoid"?(R(),rt("div",{key:0,class:It(o.shape+"-carousel"),style:ne({"border-bottom":"100px solid "+o.color})},null,6)):(R(),rt("div",{key:1,class:It(o.shape+"-carousel"),style:ne({"background-color":o.color})},null,6))]),_:2},1024)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1},8,["plugins"]))}}),An={class:"flex-1 space-y-4 p-8 pt-6"},kn={class:"flex items-center justify-between space-y-2"},Dn=M("h2",{class:"text-3xl font-bold tracking-tight"}," Dashboard ",-1),Tn={class:"flex items-center space-x-2"},Mn={class:"grid gap-4 md:grid-cols-2 lg:grid-cols-4"},Cn=M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"h-4 w-4 text-muted-foreground"},[M("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),M("circle",{cx:"9",cy:"7",r:"4"}),M("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})],-1),Pn={class:"text-2xl font-bold"},Nn=M("p",{class:"text-xs text-muted-foreground"}," +20.1% from last month ",-1),Fn=M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"h-4 w-4 text-muted-foreground"},[M("path",{d:"M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"})],-1),jn={class:"text-2xl font-bold"},Bn=M("p",{class:"text-xs text-muted-foreground"}," +180.1% from last month ",-1),$n=M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"h-4 w-4 text-muted-foreground"},[M("path",{"fill-rule":"evenodd",d:"M11.6 3h.8l7 2.7c.3.2.6.6.6 1a17.7 17.7 0 0 1-7.4 14.1 1 1 0 0 1-1.2 0A17.4 17.4 0 0 1 4 6.7c0-.4.3-.8.6-1l7-2.6Zm4 7.3a1 1 0 0 0-1.3-1.6l-3.3 3-.8-1a1 1 0 0 0-1.4 1.5l1.5 1.5c.4.4 1 .4 1.4 0l4-3.4Z","clip-rule":"evenodd"})],-1),zn={class:"text-2xl font-bold"},Vn=M("p",{class:"text-xs text-muted-foreground"}," +19% from last month ",-1),Hn=M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"h-4 w-4 text-muted-foreground"},[M("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})],-1),Rn={class:"text-2xl font-bold"},Gn=M("p",{class:"text-xs text-muted-foreground"}," +201 since last hour ",-1),Un={class:"grid gap-4 md:grid-cols-2 lg:grid-cols-7"},Yn=it({__name:"Overview",setup(t){const e=ut({total_users:"0",total_shapes:"",max_num_shape:"",highest_shape:""});return(n,s)=>(R(),rt("div",An,[M("div",kn,[Dn,M("div",Tn,[I(Pe)])]),I(b(Fe),{"default-value":"overview",class:"space-y-4"},{default:w(()=>[I(b(Be),null,{default:w(()=>[I(b(Tt),{value:"overview"},{default:w(()=>[U(" Overview ")]),_:1}),I(b(Tt),{value:"analytics",disabled:""},{default:w(()=>[U(" Analytics ")]),_:1}),I(b(Tt),{value:"reports",disabled:""},{default:w(()=>[U(" Reports ")]),_:1}),I(b(Tt),{value:"notifications",disabled:""},{default:w(()=>[U(" Notifications ")]),_:1})]),_:1}),I(b(Ne),{value:"overview",class:"space-y-4"},{default:w(()=>[M("div",Mn,[I(b(at),null,{default:w(()=>[I(b(mt),{class:"flex flex-row items-center justify-between space-y-0 pb-2"},{default:w(()=>[I(b(gt),{class:"text-sm font-medium"},{default:w(()=>[U(" Total Users ")]),_:1}),Cn]),_:1}),I(b(lt),null,{default:w(()=>[M("div",Pn,St(e.value.total_users),1),Nn]),_:1})]),_:1}),I(b(at),null,{default:w(()=>[I(b(mt),{class:"flex flex-row items-center justify-between space-y-0 pb-2"},{default:w(()=>[I(b(gt),{class:"text-sm font-medium"},{default:w(()=>[U(" Total Shapes ")]),_:1}),Fn]),_:1}),I(b(lt),null,{default:w(()=>[M("div",jn,St(e.value.total_shapes),1),Bn]),_:1})]),_:1}),I(b(at),null,{default:w(()=>[I(b(mt),{class:"flex flex-row items-center justify-between space-y-0 pb-2"},{default:w(()=>[I(b(gt),{class:"text-sm font-medium"},{default:w(()=>[U(" Highest Number of Shape ")]),_:1}),$n]),_:1}),I(b(lt),null,{default:w(()=>[M("div",zn,St(e.value.max_num_shape),1),Vn]),_:1})]),_:1}),I(b(at),null,{default:w(()=>[I(b(mt),{class:"flex flex-row items-center justify-between space-y-0 pb-2"},{default:w(()=>[I(b(gt),{class:"text-sm font-medium"},{default:w(()=>[U(" Top Shapes ")]),_:1}),Hn]),_:1}),I(b(lt),null,{default:w(()=>[M("div",Rn,St(e.value.highest_shape),1),Gn]),_:1})]),_:1})]),M("div",Un,[I(b(at),{class:"col-span-4"},{default:w(()=>[I(b(mt),null,{default:w(()=>[I(b(gt),null,{default:w(()=>[U("Overview")]),_:1})]),_:1}),I(b(lt),{class:"pl-2"},{default:w(()=>[I(On)]),_:1})]),_:1}),I(b(at),{class:"col-span-3"},{default:w(()=>[I(b(mt),null,{default:w(()=>[I(b(gt),null,{default:w(()=>[U("Recent Shapes")]),_:1})]),_:1}),I(b(lt),null,{default:w(()=>[I(Me,{overviewData:e.value,"onUpdate:overviewData":s[0]||(s[0]=i=>e.value=i)},null,8,["overviewData"])]),_:1})]),_:1})])]),_:1})]),_:1})]))}});export{Yn as default};
