(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function po(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const he={},$n=[],Et=()=>{},kf=()=>!1,Ns=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),mo=t=>t.startsWith("onUpdate:"),Se=Object.assign,go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xf=Object.prototype.hasOwnProperty,le=(t,e)=>xf.call(t,e),q=Array.isArray,Bn=t=>Vr(t)==="[object Map]",tr=t=>Vr(t)==="[object Set]",ia=t=>Vr(t)==="[object Date]",Q=t=>typeof t=="function",_e=t=>typeof t=="string",lt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",uc=t=>(pe(t)||Q(t))&&Q(t.then)&&Q(t.catch),dc=Object.prototype.toString,Vr=t=>dc.call(t),Of=t=>Vr(t).slice(8,-1),fc=t=>Vr(t)==="[object Object]",yo=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nf=/-(\w)/g,st=Ms(t=>t.replace(Nf,(e,n)=>n?n.toUpperCase():"")),Mf=/\B([A-Z])/g,ln=Ms(t=>t.replace(Mf,"-$1").toLowerCase()),Ds=Ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),oi=Ms(t=>t?`on${Ds(t)}`:""),nn=(t,e)=>!Object.is(t,e),ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Df=t=>{const e=_e(t)?Number(t):NaN;return isNaN(e)?t:e};let oa;const Ls=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bo(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_e(r)?$f(r):bo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(_e(t)||pe(t))return t}const Lf=/;(?![^(]*\))/g,Ff=/:([^]+)/,Uf=/\/\*[^]*?\*\//g;function $f(t){const e={};return t.replace(Uf,"").split(Lf).forEach(n=>{if(n){const r=n.split(Ff);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ze(t){let e="";if(_e(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=ze(t[n]);r&&(e+=r+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vf=po(Bf);function pc(t){return!!t||t===""}function jf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=jr(t[r],e[r]);return n}function jr(t,e){if(t===e)return!0;let n=ia(t),r=ia(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=lt(t),r=lt(e),n||r)return t===e;if(n=q(t),r=q(e),n||r)return n&&r?jf(t,e):!1;if(n=pe(t),r=pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}function vo(t,e){return t.findIndex(n=>jr(n,e))}const mc=t=>!!(t&&t.__v_isRef===!0),X=t=>_e(t)?t:t==null?"":q(t)||pe(t)&&(t.toString===dc||!Q(t.toString))?mc(t)?X(t.value):JSON.stringify(t,gc,2):String(t),gc=(t,e)=>mc(e)?gc(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ai(r,i)+" =>"]=s,n),{})}:tr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ai(n))}:lt(e)?ai(e):pe(e)&&!q(e)&&!fc(e)?String(e):e,ai=(t,e="")=>{var n;return lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class Hf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qf(){return We}let ge;const li=new WeakSet;class yc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,li.has(this)&&(li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,aa(this),_c(this);const e=ge,n=ot;ge=this,ot=!0;try{return this.fn()}finally{wc(this),ge=e,ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Eo(e);this.deps=this.depsTail=void 0,aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fi(this)&&this.run()}get dirty(){return Fi(this)}}let bc=0,pr,mr;function vc(t,e=!1){if(t.flags|=8,e){t.next=mr,mr=t;return}t.next=pr,pr=t}function _o(){bc++}function wo(){if(--bc>0)return;if(mr){let e=mr;for(mr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pr;){let e=pr;for(pr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _c(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Eo(r),Wf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Fi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ec(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ec(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Cr))return;t.globalVersion=Cr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Fi(t)){t.flags&=-3;return}const n=ge,r=ot;ge=t,ot=!0;try{_c(t);const s=t.fn(t._value);(e.version===0||nn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ge=n,ot=r,wc(t),t.flags&=-3}}function Eo(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Eo(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ot=!0;const Ic=[];function cn(){Ic.push(ot),ot=!1}function un(){const t=Ic.pop();ot=t===void 0?!0:t}function aa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ge;ge=void 0;try{e()}finally{ge=n}}}let Cr=0;class zf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Io{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ge||!ot||ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ge)n=this.activeLink=new zf(ge,this),ge.deps?(n.prevDep=ge.depsTail,ge.depsTail.nextDep=n,ge.depsTail=n):ge.deps=ge.depsTail=n,Tc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ge.depsTail,n.nextDep=void 0,ge.depsTail.nextDep=n,ge.depsTail=n,ge.deps===n&&(ge.deps=r)}return n}trigger(e){this.version++,Cr++,this.notify(e)}notify(e){_o();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wo()}}}function Tc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Tc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ui=new WeakMap,In=Symbol(""),$i=Symbol(""),Ar=Symbol("");function Ae(t,e,n){if(ot&&ge){let r=Ui.get(t);r||Ui.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Io),s.map=r,s.key=n),s.track()}}function xt(t,e,n,r,s,i){const o=Ui.get(t);if(!o){Cr++;return}const a=l=>{l&&l.trigger()};if(_o(),e==="clear")o.forEach(a);else{const l=q(t),c=l&&yo(n);if(l&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Ar||!lt(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ar)),e){case"add":l?c&&a(o.get("length")):(a(o.get(In)),Bn(t)&&a(o.get($i)));break;case"delete":l||(a(o.get(In)),Bn(t)&&a(o.get($i)));break;case"set":Bn(t)&&a(o.get(In));break}}wo()}function Dn(t){const e=oe(t);return e===t?e:(Ae(e,"iterate",Ar),nt(t)?e:e.map(Re))}function Fs(t){return Ae(t=oe(t),"iterate",Ar),t}const Kf={__proto__:null,[Symbol.iterator](){return ci(this,Symbol.iterator,Re)},concat(...t){return Dn(this).concat(...t.map(e=>q(e)?Dn(e):e))},entries(){return ci(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return At(this,"every",t,e,void 0,arguments)},filter(t,e){return At(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return At(this,"find",t,e,Re,arguments)},findIndex(t,e){return At(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return At(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return At(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return At(this,"forEach",t,e,void 0,arguments)},includes(...t){return ui(this,"includes",t)},indexOf(...t){return ui(this,"indexOf",t)},join(t){return Dn(this).join(t)},lastIndexOf(...t){return ui(this,"lastIndexOf",t)},map(t,e){return At(this,"map",t,e,void 0,arguments)},pop(){return or(this,"pop")},push(...t){return or(this,"push",t)},reduce(t,...e){return la(this,"reduce",t,e)},reduceRight(t,...e){return la(this,"reduceRight",t,e)},shift(){return or(this,"shift")},some(t,e){return At(this,"some",t,e,void 0,arguments)},splice(...t){return or(this,"splice",t)},toReversed(){return Dn(this).toReversed()},toSorted(t){return Dn(this).toSorted(t)},toSpliced(...t){return Dn(this).toSpliced(...t)},unshift(...t){return or(this,"unshift",t)},values(){return ci(this,"values",Re)}};function ci(t,e,n){const r=Fs(t),s=r[e]();return r!==t&&!nt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gf=Array.prototype;function At(t,e,n,r,s,i){const o=Fs(t),a=o!==t&&!nt(t),l=o[e];if(l!==Gf[e]){const d=l.apply(t,i);return a?Re(d):d}let c=n;o!==t&&(a?c=function(d,p){return n.call(this,Re(d),p,t)}:n.length>2&&(c=function(d,p){return n.call(this,d,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function la(t,e,n,r){const s=Fs(t);let i=n;return s!==t&&(nt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Re(a),l,t)}),s[e](i,...r)}function ui(t,e,n){const r=oe(t);Ae(r,"iterate",Ar);const s=r[e](...n);return(s===-1||s===!1)&&Co(n[0])?(n[0]=oe(n[0]),r[e](...n)):s}function or(t,e,n=[]){cn(),_o();const r=oe(t)[e].apply(t,n);return wo(),un(),r}const Jf=po("__proto__,__v_isRef,__isVue"),Sc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lt));function Yf(t){lt(t)||(t=String(t));const e=oe(this);return Ae(e,"has",t),e.hasOwnProperty(t)}class Cc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?oh:kc:i?Pc:Rc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=q(e);if(!s){let l;if(o&&(l=Kf[n]))return l;if(n==="hasOwnProperty")return Yf}const a=Reflect.get(e,n,xe(e)?e:r);return(lt(n)?Sc.has(n):Jf(n))||(s||Ae(e,"get",n),i)?a:xe(a)?o&&yo(n)?a:a.value:pe(a)?s?Oc(a):Us(a):a}}class Ac extends Cc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Cn(i);if(!nt(r)&&!Cn(r)&&(i=oe(i),r=oe(r)),!q(e)&&xe(i)&&!xe(r))return l?!1:(i.value=r,!0)}const o=q(e)&&yo(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,r,xe(e)?e:s);return e===oe(s)&&(o?nn(r,i)&&xt(e,"set",n,r):xt(e,"add",n,r)),a}deleteProperty(e,n){const r=le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lt(n)||!Sc.has(n))&&Ae(e,"has",n),r}ownKeys(e){return Ae(e,"iterate",q(e)?"length":In),Reflect.ownKeys(e)}}class Xf extends Cc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qf=new Ac,Zf=new Xf,eh=new Ac(!0);const Bi=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function th(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=Bn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Bi:e?Vi:Re;return!e&&Ae(i,"iterate",l?$i:In),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nh(t,e){const n={get(s){const i=this.__v_raw,o=oe(i),a=oe(s);t||(nn(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:l}=Zr(o),c=e?Bi:t?Vi:Re;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ae(oe(s),"iterate",In),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=oe(i),a=oe(s);return t||(nn(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=oe(a),c=e?Bi:t?Vi:Re;return!t&&Ae(l,"iterate",In),a.forEach((u,d)=>s.call(i,c(u),c(d),o))}};return Se(n,t?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(s){!e&&!nt(s)&&!Cn(s)&&(s=oe(s));const i=oe(this);return Zr(i).has.call(i,s)||(i.add(s),xt(i,"add",s,s)),this},set(s,i){!e&&!nt(i)&&!Cn(i)&&(i=oe(i));const o=oe(this),{has:a,get:l}=Zr(o);let c=a.call(o,s);c||(s=oe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?nn(i,u)&&xt(o,"set",s,i):xt(o,"add",s,i),this},delete(s){const i=oe(this),{has:o,get:a}=Zr(i);let l=o.call(i,s);l||(s=oe(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&xt(i,"delete",s,void 0),c},clear(){const s=oe(this),i=s.size!==0,o=s.clear();return i&&xt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=th(s,t,e)}),n}function To(t,e){const n=nh(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const rh={get:To(!1,!1)},sh={get:To(!1,!0)},ih={get:To(!0,!1)};const Rc=new WeakMap,Pc=new WeakMap,kc=new WeakMap,oh=new WeakMap;function ah(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lh(t){return t.__v_skip||!Object.isExtensible(t)?0:ah(Of(t))}function Us(t){return Cn(t)?t:So(t,!1,Qf,rh,Rc)}function xc(t){return So(t,!1,eh,sh,Pc)}function Oc(t){return So(t,!0,Zf,ih,kc)}function So(t,e,n,r,s){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vn(t){return Cn(t)?Vn(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function nt(t){return!!(t&&t.__v_isShallow)}function Co(t){return t?!!t.__v_raw:!1}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function ch(t){return!le(t,"__v_skip")&&Object.isExtensible(t)&&hc(t,"__v_skip",!0),t}const Re=t=>pe(t)?Us(t):t,Vi=t=>pe(t)?Oc(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function Ee(t){return Nc(t,!1)}function uh(t){return Nc(t,!0)}function Nc(t,e){return xe(t)?t:new dh(t,e)}class dh{constructor(e,n){this.dep=new Io,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:oe(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||nt(e)||Cn(e);e=r?e:oe(e),nn(e,n)&&(this._rawValue=e,this._value=r?e:Re(e),this.dep.trigger())}}function jn(t){return xe(t)?t.value:t}const fh={get:(t,e,n)=>e==="__v_raw"?t:jn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mc(t){return Vn(t)?t:new Proxy(t,fh)}class hh{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Io(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return vc(this,!0),!0}get value(){const e=this.dep.track();return Ec(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ph(t,e,n=!1){let r,s;return Q(t)?r=t:(r=t.get,s=t.set),new hh(r,s,n)}const ts={},ys=new WeakMap;let yn;function mh(t,e=!1,n=yn){if(n){let r=ys.get(n);r||ys.set(n,r=[]),r.push(t)}}function gh(t,e,n=he){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=O=>s?O:nt(O)||s===!1||s===0?Ot(O,1):Ot(O);let u,d,p,m,b=!1,_=!1;if(xe(t)?(d=()=>t.value,b=nt(t)):Vn(t)?(d=()=>c(t),b=!0):q(t)?(_=!0,b=t.some(O=>Vn(O)||nt(O)),d=()=>t.map(O=>{if(xe(O))return O.value;if(Vn(O))return c(O);if(Q(O))return l?l(O,2):O()})):Q(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){cn();try{p()}finally{un()}}const O=yn;yn=u;try{return l?l(t,3,[m]):t(m)}finally{yn=O}}:d=Et,e&&s){const O=d,k=s===!0?1/0:s;d=()=>Ot(O(),k)}const E=qf(),R=()=>{u.stop(),E&&E.active&&go(E.effects,u)};if(i&&e){const O=e;e=(...k)=>{O(...k),R()}}let C=_?new Array(t.length).fill(ts):ts;const P=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const k=u.run();if(s||b||(_?k.some((ee,te)=>nn(ee,C[te])):nn(k,C))){p&&p();const ee=yn;yn=u;try{const te=[k,C===ts?void 0:_&&C[0]===ts?[]:C,m];l?l(e,3,te):e(...te),C=k}finally{yn=ee}}}else u.run()};return a&&a(P),u=new yc(d),u.scheduler=o?()=>o(P,!1):P,m=O=>mh(O,!1,u),p=u.onStop=()=>{const O=ys.get(u);if(O){if(l)l(O,4);else for(const k of O)k();ys.delete(u)}},e?r?P(!0):C=u.run():o?o(P.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function Ot(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,xe(t))Ot(t.value,e,n);else if(q(t))for(let r=0;r<t.length;r++)Ot(t[r],e,n);else if(tr(t)||Bn(t))t.forEach(r=>{Ot(r,e,n)});else if(fc(t)){for(const r in t)Ot(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ot(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,r){try{return r?t(...r):t()}catch(s){$s(s,e,n)}}function ct(t,e,n,r){if(Q(t)){const s=Hr(t,e,n,r);return s&&uc(s)&&s.catch(i=>{$s(i,e,n)}),s}if(q(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ct(t[i],e,n,r));return s}}function $s(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||he;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){cn(),Hr(i,null,10,[t,l,c]),un();return}}yh(t,n,s,r,o)}function yh(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const De=[];let vt=-1;const Hn=[];let Wt=null,Ln=0;const Dc=Promise.resolve();let bs=null;function Ao(t){const e=bs||Dc;return t?e.then(this?t.bind(this):t):e}function bh(t){let e=vt+1,n=De.length;for(;e<n;){const r=e+n>>>1,s=De[r],i=Rr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ro(t){if(!(t.flags&1)){const e=Rr(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=Rr(n)?De.push(t):De.splice(bh(e),0,t),t.flags|=1,Lc()}}function Lc(){bs||(bs=Dc.then(Uc))}function vh(t){q(t)?Hn.push(...t):Wt&&t.id===-1?Wt.splice(Ln+1,0,t):t.flags&1||(Hn.push(t),t.flags|=1),Lc()}function ca(t,e,n=vt+1){for(;n<De.length;n++){const r=De[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;De.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fc(t){if(Hn.length){const e=[...new Set(Hn)].sort((n,r)=>Rr(n)-Rr(r));if(Hn.length=0,Wt){Wt.push(...e);return}for(Wt=e,Ln=0;Ln<Wt.length;Ln++){const n=Wt[Ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wt=null,Ln=0}}const Rr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uc(t){try{for(vt=0;vt<De.length;vt++){const e=De[vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vt<De.length;vt++){const e=De[vt];e&&(e.flags&=-2)}vt=-1,De.length=0,Fc(),bs=null,(De.length||Hn.length)&&Uc()}}let Te=null,$c=null;function vs(t){const e=Te;return Te=t,$c=t&&t.type.__scopeId||null,e}function Tn(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_a(-1);const i=vs(e);let o;try{o=t(...s)}finally{vs(i),r._d&&_a(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _n(t,e){if(Te===null)return t;const n=Ws(Te),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=he]=e[s];i&&(Q(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function hn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(cn(),ct(l,n,8,[t.el,a,t,e]),un())}}const _h=Symbol("_vte"),Bc=t=>t.__isTeleport,zt=Symbol("_leaveCb"),ns=Symbol("_enterCb");function wh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return js(()=>{t.isMounted=!0}),Jc(()=>{t.isUnmounting=!0}),t}const et=[Function,Array],Vc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},jc=t=>{const e=t.subTree;return e.component?jc(e.component):e},Eh={name:"BaseTransition",props:Vc,setup(t,{slots:e}){const n=gp(),r=wh();return()=>{const s=e.default&&Wc(e.default(),!0);if(!s||!s.length)return;const i=Hc(s),o=oe(t),{mode:a}=o;if(r.isLeaving)return di(i);const l=ua(i);if(!l)return di(i);let c=ji(l,o,r,n,d=>c=d);l.type!==Le&&Pr(l,c);let u=n.subTree&&ua(n.subTree);if(u&&u.type!==Le&&!vn(l,u)&&jc(n).type!==Le){let d=ji(u,o,r,n);if(Pr(u,d),a==="out-in"&&l.type!==Le)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},di(i);a==="in-out"&&l.type!==Le?d.delayLeave=(p,m,b)=>{const _=qc(r,u);_[String(u.key)]=u,p[zt]=()=>{m(),p[zt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Hc(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Le){e=n;break}}return e}const Ih=Eh;function qc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ji(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:m,onAfterLeave:b,onLeaveCancelled:_,onBeforeAppear:E,onAppear:R,onAfterAppear:C,onAppearCancelled:P}=e,O=String(t.key),k=qc(n,t),ee=(K,re)=>{K&&ct(K,r,9,re)},te=(K,re)=>{const ue=re[1];ee(K,re),q(K)?K.every(B=>B.length<=1)&&ue():K.length<=1&&ue()},ye={mode:o,persisted:a,beforeEnter(K){let re=l;if(!n.isMounted)if(i)re=E||l;else return;K[zt]&&K[zt](!0);const ue=k[O];ue&&vn(t,ue)&&ue.el[zt]&&ue.el[zt](),ee(re,[K])},enter(K){let re=c,ue=u,B=d;if(!n.isMounted)if(i)re=R||c,ue=C||u,B=P||d;else return;let ie=!1;const we=K[ns]=Oe=>{ie||(ie=!0,Oe?ee(B,[K]):ee(ue,[K]),ye.delayedLeave&&ye.delayedLeave(),K[ns]=void 0)};re?te(re,[K,we]):we()},leave(K,re){const ue=String(t.key);if(K[ns]&&K[ns](!0),n.isUnmounting)return re();ee(p,[K]);let B=!1;const ie=K[zt]=we=>{B||(B=!0,re(),we?ee(_,[K]):ee(b,[K]),K[zt]=void 0,k[ue]===t&&delete k[ue])};k[ue]=t,m?te(m,[K,ie]):ie()},clone(K){const re=ji(K,e,n,r,s);return s&&s(re),re}};return ye}function di(t){if(Bs(t))return t=an(t),t.children=null,t}function ua(t){if(!Bs(t))return Bc(t.type)&&t.children?Hc(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Q(n.default))return n.default()}}function Pr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Pr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ve?(o.patchFlag&128&&s++,r=r.concat(Wc(o.children,e,a))):(e||o.type!==Le)&&r.push(a!=null?an(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function zc(t,e){return Q(t)?Se({name:t.name},e,{setup:t}):t}function Kc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _s(t,e,n,r,s=!1){if(q(t)){t.forEach((b,_)=>_s(b,e&&(q(e)?e[_]:e),n,r,s));return}if(qn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&_s(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ws(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===he?a.refs={}:a.refs,d=a.setupState,p=oe(d),m=d===he?()=>!1:b=>le(p,b);if(c!=null&&c!==l&&(_e(c)?(u[c]=null,m(c)&&(d[c]=null)):xe(c)&&(c.value=null)),Q(l))Hr(l,a,12,[o,u]);else{const b=_e(l),_=xe(l);if(b||_){const E=()=>{if(t.f){const R=b?m(l)?d[l]:u[l]:l.value;s?q(R)&&go(R,i):q(R)?R.includes(i)||R.push(i):b?(u[l]=[i],m(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else b?(u[l]=o,m(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,qe(E,n)):E()}}}Ls().requestIdleCallback;Ls().cancelIdleCallback;const qn=t=>!!t.type.__asyncLoader,Bs=t=>t.type.__isKeepAlive;function Th(t,e){Gc(t,"a",e)}function Sh(t,e){Gc(t,"da",e)}function Gc(t,e,n=Ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bs(s.parent.vnode)&&Ch(r,e,n,s),s=s.parent}}function Ch(t,e,n,r){const s=Vs(e,t,r,!0);Yc(()=>{go(r[e],s)},n)}function Vs(t,e,n=Ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{cn();const a=qr(n),l=ct(e,n,t,o);return a(),un(),l});return r?s.unshift(i):s.push(i),i}}const Vt=t=>(e,n=Ce)=>{(!Or||t==="sp")&&Vs(t,(...r)=>e(...r),n)},Ah=Vt("bm"),js=Vt("m"),Rh=Vt("bu"),Ph=Vt("u"),Jc=Vt("bum"),Yc=Vt("um"),kh=Vt("sp"),xh=Vt("rtg"),Oh=Vt("rtc");function Nh(t,e=Ce){Vs("ec",t,e)}const Xc="components";function Ge(t,e){return Zc(Xc,t,!0,e)||t}const Qc=Symbol.for("v-ndc");function Mh(t){return _e(t)?Zc(Xc,t,!1)||t:t||Qc}function Zc(t,e,n=!0,r=!1){const s=Te||Ce;if(s){const i=s.type;{const a=wp(i,!1);if(a&&(a===e||a===st(e)||a===Ds(st(e))))return i}const o=da(s[t]||i[t],e)||da(s.appContext[t],e);return!o&&r?i:o}}function da(t,e){return t&&(t[e]||t[st(e)]||t[Ds(st(e))])}function Lt(t,e,n,r){let s;const i=n,o=q(t);if(o||_e(t)){const a=o&&Vn(t);let l=!1;a&&(l=!nt(t),t=Fs(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Re(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(pe(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}function eu(t,e,n={},r,s){if(Te.ce||Te.parent&&qn(Te.parent)&&Te.parent.ce)return H(),An(ve,null,[Z("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),H();const o=i&&tu(i(n)),a=n.key||o&&o.key,l=An(ve,{key:(a&&!lt(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function tu(t){return t.some(e=>xr(e)?!(e.type===Le||e.type===ve&&!tu(e.children)):!0)?t:null}const Hi=t=>t?Iu(t)?Ws(t):Hi(t.parent):null,gr=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hi(t.parent),$root:t=>Hi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ru(t),$forceUpdate:t=>t.f||(t.f=()=>{Ro(t.update)}),$nextTick:t=>t.n||(t.n=Ao.bind(t.proxy)),$watch:t=>tp.bind(t)}),fi=(t,e)=>t!==he&&!t.__isScriptSetup&&le(t,e),Dh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fi(r,e))return o[e]=1,r[e];if(s!==he&&le(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==he&&le(n,e))return o[e]=4,n[e];qi&&(o[e]=0)}}const u=gr[e];let d,p;if(u)return e==="$attrs"&&Ae(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==he&&le(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,le(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fi(s,e)?(s[e]=n,!0):r!==he&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==he&&le(t,o)||fi(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(gr,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fa(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qi=!0;function Lh(t){const e=ru(t),n=t.proxy,r=t.ctx;qi=!1,e.beforeCreate&&ha(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:b,activated:_,deactivated:E,beforeDestroy:R,beforeUnmount:C,destroyed:P,unmounted:O,render:k,renderTracked:ee,renderTriggered:te,errorCaptured:ye,serverPrefetch:K,expose:re,inheritAttrs:ue,components:B,directives:ie,filters:we}=e;if(c&&Fh(c,r,null),o)for(const x in o){const z=o[x];Q(z)&&(r[x]=z.bind(n))}if(s){const x=s.call(n,n);pe(x)&&(t.data=Us(x))}if(qi=!0,i)for(const x in i){const z=i[x],Ne=Q(z)?z.bind(n,n):Q(z.get)?z.get.bind(n,n):Et,Qe=!Q(z)&&Q(z.set)?z.set.bind(n):Et,ht=tt({get:Ne,set:Qe});Object.defineProperty(r,x,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Ue=>ht.value=Ue})}if(a)for(const x in a)nu(a[x],r,n,x);if(l){const x=Q(l)?l.call(n):l;Reflect.ownKeys(x).forEach(z=>{is(z,x[z])})}u&&ha(u,t,"c");function V(x,z){q(z)?z.forEach(Ne=>x(Ne.bind(n))):z&&x(z.bind(n))}if(V(Ah,d),V(js,p),V(Rh,m),V(Ph,b),V(Th,_),V(Sh,E),V(Nh,ye),V(Oh,ee),V(xh,te),V(Jc,C),V(Yc,O),V(kh,K),q(re))if(re.length){const x=t.exposed||(t.exposed={});re.forEach(z=>{Object.defineProperty(x,z,{get:()=>n[z],set:Ne=>n[z]=Ne})})}else t.exposed||(t.exposed={});k&&t.render===Et&&(t.render=k),ue!=null&&(t.inheritAttrs=ue),B&&(t.components=B),ie&&(t.directives=ie),K&&Kc(t)}function Fh(t,e,n=Et){q(t)&&(t=Wi(t));for(const r in t){const s=t[r];let i;pe(s)?"default"in s?i=at(s.from||r,s.default,!0):i=at(s.from||r):i=at(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ha(t,e,n){ct(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nu(t,e,n,r){let s=r.includes(".")?yu(n,r):()=>n[r];if(_e(t)){const i=e[t];Q(i)&&yr(s,i)}else if(Q(t))yr(s,t.bind(n));else if(pe(t))if(q(t))t.forEach(i=>nu(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)&&yr(s,i,t)}}function ru(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ws(l,c,o,!0)),ws(l,e,o)),pe(e)&&i.set(e,l),l}function ws(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ws(t,i,n,!0),s&&s.forEach(o=>ws(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Uh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Uh={data:pa,props:ma,emits:ma,methods:dr,computed:dr,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:dr,directives:dr,watch:Bh,provide:pa,inject:$h};function pa(t,e){return e?t?function(){return Se(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function $h(t,e){return dr(Wi(t),Wi(e))}function Wi(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function dr(t,e){return t?Se(Object.create(null),t,e):e}function ma(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Se(Object.create(null),fa(t),fa(e??{})):e}function Bh(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const r in e)n[r]=Me(t[r],e[r]);return n}function su(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vh=0;function jh(t,e){return function(r,s=null){Q(r)||(r=Se({},r)),s!=null&&!pe(s)&&(s=null);const i=su(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Vh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ip,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&Q(u.install)?(o.add(u),u.install(c,...d)):Q(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,p){if(!l){const m=c._ceVNode||Z(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,Ws(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ct(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Wn;Wn=c;try{return u()}finally{Wn=d}}};return c}}let Wn=null;function is(t,e){if(Ce){let n=Ce.provides;const r=Ce.parent&&Ce.parent.provides;r===n&&(n=Ce.provides=Object.create(r)),n[t]=e}}function at(t,e,n=!1){const r=Ce||Te;if(r||Wn){const s=Wn?Wn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r&&r.proxy):e}}const iu={},ou=()=>Object.create(iu),au=t=>Object.getPrototypeOf(t)===iu;function Hh(t,e,n,r=!1){const s={},i=ou();t.propsDefaults=Object.create(null),lu(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Hs(t.emitsOptions,p))continue;const m=e[p];if(l)if(le(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const b=st(p);s[b]=zi(l,a,b,m,t,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{lu(t,e,s,i)&&(c=!0);let u;for(const d in a)(!e||!le(e,d)&&((u=ln(d))===d||!le(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=zi(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!le(e,d))&&(delete i[d],c=!0)}c&&xt(t.attrs,"set","")}function lu(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;s&&le(s,u=st(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=oe(n),c=a||he;for(let u=0;u<i.length;u++){const d=i[u];n[d]=zi(s,l,d,c[d],t,!le(c,d))}}return o}function zi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=qr(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}const Wh=new WeakMap;function cu(t,e,n=!1){const r=n?Wh:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=d=>{l=!0;const[p,m]=cu(d,e,!0);Se(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return pe(t)&&r.set(t,$n),$n;if(q(i))for(let u=0;u<i.length;u++){const d=st(i[u]);ga(d)&&(o[d]=he)}else if(i)for(const u in i){const d=st(u);if(ga(d)){const p=i[u],m=o[d]=q(p)||Q(p)?{type:p}:Se({},p),b=m.type;let _=!1,E=!0;if(q(b))for(let R=0;R<b.length;++R){const C=b[R],P=Q(C)&&C.name;if(P==="Boolean"){_=!0;break}else P==="String"&&(E=!1)}else _=Q(b)&&b.name==="Boolean";m[0]=_,m[1]=E,(_||le(m,"default"))&&a.push(d)}}const c=[o,a];return pe(t)&&r.set(t,c),c}function ga(t){return t[0]!=="$"&&!hr(t)}const uu=t=>t[0]==="_"||t==="$stable",Po=t=>q(t)?t.map(_t):[_t(t)],zh=(t,e,n)=>{if(e._n)return e;const r=Tn((...s)=>Po(e(...s)),n);return r._c=!1,r},du=(t,e,n)=>{const r=t._ctx;for(const s in t){if(uu(s))continue;const i=t[s];if(Q(i))e[s]=zh(s,i,r);else if(i!=null){const o=Po(i);e[s]=()=>o}}},fu=(t,e)=>{const n=Po(e);t.slots.default=()=>n},hu=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Kh=(t,e,n)=>{const r=t.slots=ou();if(t.vnode.shapeFlag&32){const s=e._;s?(hu(r,e,n),n&&hc(r,"_",s,!0)):du(e,r)}else e&&fu(t,e)},Gh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:hu(s,e,n):(i=!e.$stable,du(e,s)),o=e}else e&&(fu(t,e),o={default:1});if(i)for(const a in s)!uu(a)&&o[a]==null&&delete s[a]},qe=lp;function Jh(t){return Yh(t)}function Yh(t,e){const n=Ls();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Et,insertStaticContent:b}=t,_=(f,h,y,w=null,S=null,T=null,D=void 0,M=null,N=!!h.dynamicChildren)=>{if(f===h)return;f&&!vn(f,h)&&(w=I(f),Ue(f,S,T,!0),f=null),h.patchFlag===-2&&(N=!1,h.dynamicChildren=null);const{type:A,ref:G,shapeFlag:F}=h;switch(A){case qs:E(f,h,y,w);break;case Le:R(f,h,y,w);break;case os:f==null&&C(h,y,w,D);break;case ve:B(f,h,y,w,S,T,D,M,N);break;default:F&1?k(f,h,y,w,S,T,D,M,N):F&6?ie(f,h,y,w,S,T,D,M,N):(F&64||F&128)&&A.process(f,h,y,w,S,T,D,M,N,j)}G!=null&&S&&_s(G,f&&f.ref,T,h||f,!h)},E=(f,h,y,w)=>{if(f==null)r(h.el=a(h.children),y,w);else{const S=h.el=f.el;h.children!==f.children&&c(S,h.children)}},R=(f,h,y,w)=>{f==null?r(h.el=l(h.children||""),y,w):h.el=f.el},C=(f,h,y,w)=>{[f.el,f.anchor]=b(f.children,h,y,w,f.el,f.anchor)},P=({el:f,anchor:h},y,w)=>{let S;for(;f&&f!==h;)S=p(f),r(f,y,w),f=S;r(h,y,w)},O=({el:f,anchor:h})=>{let y;for(;f&&f!==h;)y=p(f),s(f),f=y;s(h)},k=(f,h,y,w,S,T,D,M,N)=>{h.type==="svg"?D="svg":h.type==="math"&&(D="mathml"),f==null?ee(h,y,w,S,T,D,M,N):K(f,h,S,T,D,M,N)},ee=(f,h,y,w,S,T,D,M)=>{let N,A;const{props:G,shapeFlag:F,transition:W,dirs:Y}=f;if(N=f.el=o(f.type,T,G&&G.is,G),F&8?u(N,f.children):F&16&&ye(f.children,N,null,w,S,hi(f,T),D,M),Y&&hn(f,null,w,"created"),te(N,f,f.scopeId,D,w),G){for(const me in G)me!=="value"&&!hr(me)&&i(N,me,null,G[me],T,w);"value"in G&&i(N,"value",null,G.value,T),(A=G.onVnodeBeforeMount)&&yt(A,w,f)}Y&&hn(f,null,w,"beforeMount");const se=Xh(S,W);se&&W.beforeEnter(N),r(N,h,y),((A=G&&G.onVnodeMounted)||se||Y)&&qe(()=>{A&&yt(A,w,f),se&&W.enter(N),Y&&hn(f,null,w,"mounted")},S)},te=(f,h,y,w,S)=>{if(y&&m(f,y),w)for(let T=0;T<w.length;T++)m(f,w[T]);if(S){let T=S.subTree;if(h===T||vu(T.type)&&(T.ssContent===h||T.ssFallback===h)){const D=S.vnode;te(f,D,D.scopeId,D.slotScopeIds,S.parent)}}},ye=(f,h,y,w,S,T,D,M,N=0)=>{for(let A=N;A<f.length;A++){const G=f[A]=M?Kt(f[A]):_t(f[A]);_(null,G,h,y,w,S,T,D,M)}},K=(f,h,y,w,S,T,D)=>{const M=h.el=f.el;let{patchFlag:N,dynamicChildren:A,dirs:G}=h;N|=f.patchFlag&16;const F=f.props||he,W=h.props||he;let Y;if(y&&pn(y,!1),(Y=W.onVnodeBeforeUpdate)&&yt(Y,y,h,f),G&&hn(h,f,y,"beforeUpdate"),y&&pn(y,!0),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(M,""),A?re(f.dynamicChildren,A,M,y,w,hi(h,S),T):D||z(f,h,M,null,y,w,hi(h,S),T,!1),N>0){if(N&16)ue(M,F,W,y,S);else if(N&2&&F.class!==W.class&&i(M,"class",null,W.class,S),N&4&&i(M,"style",F.style,W.style,S),N&8){const se=h.dynamicProps;for(let me=0;me<se.length;me++){const ce=se[me],je=F[ce],$e=W[ce];($e!==je||ce==="value")&&i(M,ce,je,$e,S,y)}}N&1&&f.children!==h.children&&u(M,h.children)}else!D&&A==null&&ue(M,F,W,y,S);((Y=W.onVnodeUpdated)||G)&&qe(()=>{Y&&yt(Y,y,h,f),G&&hn(h,f,y,"updated")},w)},re=(f,h,y,w,S,T,D)=>{for(let M=0;M<h.length;M++){const N=f[M],A=h[M],G=N.el&&(N.type===ve||!vn(N,A)||N.shapeFlag&70)?d(N.el):y;_(N,A,G,null,w,S,T,D,!0)}},ue=(f,h,y,w,S)=>{if(h!==y){if(h!==he)for(const T in h)!hr(T)&&!(T in y)&&i(f,T,h[T],null,S,w);for(const T in y){if(hr(T))continue;const D=y[T],M=h[T];D!==M&&T!=="value"&&i(f,T,M,D,S,w)}"value"in y&&i(f,"value",h.value,y.value,S)}},B=(f,h,y,w,S,T,D,M,N)=>{const A=h.el=f?f.el:a(""),G=h.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:Y}=h;Y&&(M=M?M.concat(Y):Y),f==null?(r(A,y,w),r(G,y,w),ye(h.children||[],y,G,S,T,D,M,N)):F>0&&F&64&&W&&f.dynamicChildren?(re(f.dynamicChildren,W,y,S,T,D,M),(h.key!=null||S&&h===S.subTree)&&pu(f,h,!0)):z(f,h,y,G,S,T,D,M,N)},ie=(f,h,y,w,S,T,D,M,N)=>{h.slotScopeIds=M,f==null?h.shapeFlag&512?S.ctx.activate(h,y,w,D,N):we(h,y,w,S,T,D,N):Oe(f,h,N)},we=(f,h,y,w,S,T,D)=>{const M=f.component=mp(f,w,S);if(Bs(f)&&(M.ctx.renderer=j),yp(M,!1,D),M.asyncDep){if(S&&S.registerDep(M,V,D),!f.el){const N=M.subTree=Z(Le);R(null,N,h,y)}}else V(M,f,h,y,S,T,D)},Oe=(f,h,y)=>{const w=h.component=f.component;if(op(f,h,y))if(w.asyncDep&&!w.asyncResolved){x(w,h,y);return}else w.next=h,w.update();else h.el=f.el,w.vnode=h},V=(f,h,y,w,S,T,D)=>{const M=()=>{if(f.isMounted){let{next:F,bu:W,u:Y,parent:se,vnode:me}=f;{const mt=mu(f);if(mt){F&&(F.el=me.el,x(f,F,D)),mt.asyncDep.then(()=>{f.isUnmounted||M()});return}}let ce=F,je;pn(f,!1),F?(F.el=me.el,x(f,F,D)):F=me,W&&ss(W),(je=F.props&&F.props.onVnodeBeforeUpdate)&&yt(je,se,F,me),pn(f,!0);const $e=ba(f),pt=f.subTree;f.subTree=$e,_(pt,$e,d(pt.el),I(pt),f,S,T),F.el=$e.el,ce===null&&ap(f,$e.el),Y&&qe(Y,S),(je=F.props&&F.props.onVnodeUpdated)&&qe(()=>yt(je,se,F,me),S)}else{let F;const{el:W,props:Y}=h,{bm:se,m:me,parent:ce,root:je,type:$e}=f,pt=qn(h);pn(f,!1),se&&ss(se),!pt&&(F=Y&&Y.onVnodeBeforeMount)&&yt(F,ce,h),pn(f,!0);{je.ce&&je.ce._injectChildStyle($e);const mt=f.subTree=ba(f);_(null,mt,y,w,f,S,T),h.el=mt.el}if(me&&qe(me,S),!pt&&(F=Y&&Y.onVnodeMounted)){const mt=h;qe(()=>yt(F,ce,mt),S)}(h.shapeFlag&256||ce&&qn(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&qe(f.a,S),f.isMounted=!0,h=y=w=null}};f.scope.on();const N=f.effect=new yc(M);f.scope.off();const A=f.update=N.run.bind(N),G=f.job=N.runIfDirty.bind(N);G.i=f,G.id=f.uid,N.scheduler=()=>Ro(G),pn(f,!0),A()},x=(f,h,y)=>{h.component=f;const w=f.vnode.props;f.vnode=h,f.next=null,qh(f,h.props,w,y),Gh(f,h.children,y),cn(),ca(f),un()},z=(f,h,y,w,S,T,D,M,N=!1)=>{const A=f&&f.children,G=f?f.shapeFlag:0,F=h.children,{patchFlag:W,shapeFlag:Y}=h;if(W>0){if(W&128){Qe(A,F,y,w,S,T,D,M,N);return}else if(W&256){Ne(A,F,y,w,S,T,D,M,N);return}}Y&8?(G&16&&Ze(A,S,T),F!==A&&u(y,F)):G&16?Y&16?Qe(A,F,y,w,S,T,D,M,N):Ze(A,S,T,!0):(G&8&&u(y,""),Y&16&&ye(F,y,w,S,T,D,M,N))},Ne=(f,h,y,w,S,T,D,M,N)=>{f=f||$n,h=h||$n;const A=f.length,G=h.length,F=Math.min(A,G);let W;for(W=0;W<F;W++){const Y=h[W]=N?Kt(h[W]):_t(h[W]);_(f[W],Y,y,null,S,T,D,M,N)}A>G?Ze(f,S,T,!0,!1,F):ye(h,y,w,S,T,D,M,N,F)},Qe=(f,h,y,w,S,T,D,M,N)=>{let A=0;const G=h.length;let F=f.length-1,W=G-1;for(;A<=F&&A<=W;){const Y=f[A],se=h[A]=N?Kt(h[A]):_t(h[A]);if(vn(Y,se))_(Y,se,y,null,S,T,D,M,N);else break;A++}for(;A<=F&&A<=W;){const Y=f[F],se=h[W]=N?Kt(h[W]):_t(h[W]);if(vn(Y,se))_(Y,se,y,null,S,T,D,M,N);else break;F--,W--}if(A>F){if(A<=W){const Y=W+1,se=Y<G?h[Y].el:w;for(;A<=W;)_(null,h[A]=N?Kt(h[A]):_t(h[A]),y,se,S,T,D,M,N),A++}}else if(A>W)for(;A<=F;)Ue(f[A],S,T,!0),A++;else{const Y=A,se=A,me=new Map;for(A=se;A<=W;A++){const He=h[A]=N?Kt(h[A]):_t(h[A]);He.key!=null&&me.set(He.key,A)}let ce,je=0;const $e=W-se+1;let pt=!1,mt=0;const ir=new Array($e);for(A=0;A<$e;A++)ir[A]=0;for(A=Y;A<=F;A++){const He=f[A];if(je>=$e){Ue(He,S,T,!0);continue}let gt;if(He.key!=null)gt=me.get(He.key);else for(ce=se;ce<=W;ce++)if(ir[ce-se]===0&&vn(He,h[ce])){gt=ce;break}gt===void 0?Ue(He,S,T,!0):(ir[gt-se]=A+1,gt>=mt?mt=gt:pt=!0,_(He,h[gt],y,null,S,T,D,M,N),je++)}const ra=pt?Qh(ir):$n;for(ce=ra.length-1,A=$e-1;A>=0;A--){const He=se+A,gt=h[He],sa=He+1<G?h[He+1].el:w;ir[A]===0?_(null,gt,y,sa,S,T,D,M,N):pt&&(ce<0||A!==ra[ce]?ht(gt,y,sa,2):ce--)}}},ht=(f,h,y,w,S=null)=>{const{el:T,type:D,transition:M,children:N,shapeFlag:A}=f;if(A&6){ht(f.component.subTree,h,y,w);return}if(A&128){f.suspense.move(h,y,w);return}if(A&64){D.move(f,h,y,j);return}if(D===ve){r(T,h,y);for(let F=0;F<N.length;F++)ht(N[F],h,y,w);r(f.anchor,h,y);return}if(D===os){P(f,h,y);return}if(w!==2&&A&1&&M)if(w===0)M.beforeEnter(T),r(T,h,y),qe(()=>M.enter(T),S);else{const{leave:F,delayLeave:W,afterLeave:Y}=M,se=()=>r(T,h,y),me=()=>{F(T,()=>{se(),Y&&Y()})};W?W(T,se,me):me()}else r(T,h,y)},Ue=(f,h,y,w=!1,S=!1)=>{const{type:T,props:D,ref:M,children:N,dynamicChildren:A,shapeFlag:G,patchFlag:F,dirs:W,cacheIndex:Y}=f;if(F===-2&&(S=!1),M!=null&&_s(M,null,y,f,!0),Y!=null&&(h.renderCache[Y]=void 0),G&256){h.ctx.deactivate(f);return}const se=G&1&&W,me=!qn(f);let ce;if(me&&(ce=D&&D.onVnodeBeforeUnmount)&&yt(ce,h,f),G&6)Qr(f.component,y,w);else{if(G&128){f.suspense.unmount(y,w);return}se&&hn(f,null,h,"beforeUnmount"),G&64?f.type.remove(f,h,y,j,w):A&&!A.hasOnce&&(T!==ve||F>0&&F&64)?Ze(A,h,y,!1,!0):(T===ve&&F&384||!S&&G&16)&&Ze(N,h,y),w&&Nn(f)}(me&&(ce=D&&D.onVnodeUnmounted)||se)&&qe(()=>{ce&&yt(ce,h,f),se&&hn(f,null,h,"unmounted")},y)},Nn=f=>{const{type:h,el:y,anchor:w,transition:S}=f;if(h===ve){Mn(y,w);return}if(h===os){O(f);return}const T=()=>{s(y),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:D,delayLeave:M}=S,N=()=>D(y,T);M?M(f.el,T,N):N()}else T()},Mn=(f,h)=>{let y;for(;f!==h;)y=p(f),s(f),f=y;s(h)},Qr=(f,h,y)=>{const{bum:w,scope:S,job:T,subTree:D,um:M,m:N,a:A}=f;ya(N),ya(A),w&&ss(w),S.stop(),T&&(T.flags|=8,Ue(D,f,h,y)),M&&qe(M,h),qe(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ze=(f,h,y,w=!1,S=!1,T=0)=>{for(let D=T;D<f.length;D++)Ue(f[D],h,y,w,S)},I=f=>{if(f.shapeFlag&6)return I(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),y=h&&h[_h];return y?p(y):h};let U=!1;const L=(f,h,y)=>{f==null?h._vnode&&Ue(h._vnode,null,null,!0):_(h._vnode||null,f,h,null,null,null,y),h._vnode=f,U||(U=!0,ca(),Fc(),U=!1)},j={p:_,um:Ue,m:ht,r:Nn,mt:we,mc:ye,pc:z,pbc:re,n:I,o:t};return{render:L,hydrate:void 0,createApp:jh(L)}}function hi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pu(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Kt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&pu(o,a)),a.type===qs&&(a.el=o.el)}}function Qh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mu(e)}function ya(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Zh=Symbol.for("v-scx"),ep=()=>at(Zh);function yr(t,e,n){return gu(t,e,n)}function gu(t,e,n=he){const{immediate:r,deep:s,flush:i,once:o}=n,a=Se({},n),l=e&&r||!e&&i!=="post";let c;if(Or){if(i==="sync"){const m=ep();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const u=Ce;a.call=(m,b,_)=>ct(m,u,b,_);let d=!1;i==="post"?a.scheduler=m=>{qe(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,b)=>{b?m():Ro(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=gh(t,e,a);return Or&&(c?c.push(p):l&&p()),p}function tp(t,e,n){const r=this.proxy,s=_e(t)?t.includes(".")?yu(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=qr(this),a=gu(s,i.bind(r),n);return o(),a}function yu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const np=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${st(e)}Modifiers`]||t[`${ln(e)}Modifiers`];function rp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let s=n;const i=e.startsWith("update:"),o=i&&np(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>_e(u)?u.trim():u)),o.number&&(s=n.map(gs)));let a,l=r[a=oi(e)]||r[a=oi(st(e))];!l&&i&&(l=r[a=oi(ln(e))]),l&&ct(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(c,t,6,s)}}function bu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=bu(c,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(pe(t)&&r.set(t,null),null):(q(i)?i.forEach(l=>o[l]=null):Se(o,i),pe(t)&&r.set(t,o),o)}function Hs(t,e){return!t||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,ln(e))||le(t,e))}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:p,setupState:m,ctx:b,inheritAttrs:_}=t,E=vs(t);let R,C;try{if(n.shapeFlag&4){const O=s||r,k=O;R=_t(c.call(k,O,u,d,m,p,b)),C=a}else{const O=e;R=_t(O.length>1?O(d,{attrs:a,slots:o,emit:l}):O(d,null)),C=e.props?a:sp(a)}}catch(O){br.length=0,$s(O,t,1),R=Z(Le)}let P=R;if(C&&_!==!1){const O=Object.keys(C),{shapeFlag:k}=P;O.length&&k&7&&(i&&O.some(mo)&&(C=ip(C,i)),P=an(P,C,!1,!0))}return n.dirs&&(P=an(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Pr(P,n.transition),R=P,vs(E),R}const sp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ns(n))&&((e||(e={}))[n]=t[n]);return e},ip=(t,e)=>{const n={};for(const r in t)(!mo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function op(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?va(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Hs(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?va(r,o,c):!0:!!o;return!1}function va(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hs(n,i))return!0}return!1}function ap({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vu=t=>t.__isSuspense;function lp(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):vh(t)}const ve=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),os=Symbol.for("v-stc"),br=[];let Ke=null;function H(t=!1){br.push(Ke=t?null:[])}function cp(){br.pop(),Ke=br[br.length-1]||null}let kr=1;function _a(t,e=!1){kr+=t,t<0&&Ke&&e&&(Ke.hasOnce=!0)}function _u(t){return t.dynamicChildren=kr>0?Ke||$n:null,cp(),kr>0&&Ke&&Ke.push(t),t}function J(t,e,n,r,s,i){return _u(g(t,e,n,r,s,i,!0))}function An(t,e,n,r,s){return _u(Z(t,e,n,r,s,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const wu=({key:t})=>t??null,as=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||xe(t)||Q(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wu(e),ref:e&&as(e),scopeId:$c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(ko(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),kr>0&&!o&&Ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ke.push(l),l}const Z=up;function up(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qc)&&(t=Le),xr(t)){const a=an(t,e,!0);return n&&ko(a,n),kr>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag=-2,a}if(Ep(t)&&(t=t.__vccOpts),e){e=dp(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=ze(a)),pe(l)&&(Co(l)&&!q(l)&&(l=Se({},l)),e.style=bo(l))}const o=_e(t)?1:vu(t)?128:Bc(t)?64:pe(t)?4:Q(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function dp(t){return t?Co(t)||au(t)?Se({},t):t:null}function an(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?fp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wu(c),ref:e&&e.ref?n&&i?q(i)?i.concat(as(e)):[i,as(e)]:as(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Pr(u,l.clone(u)),u}function Yt(t=" ",e=0){return Z(qs,null,t,e)}function Eu(t,e){const n=Z(os,null,t);return n.staticCount=e,n}function Pe(t="",e=!1){return e?(H(),An(Le,null,t)):Z(Le,null,t)}function _t(t){return t==null||typeof t=="boolean"?Z(Le):q(t)?Z(ve,null,t.slice()):xr(t)?Kt(t):Z(qs,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function ko(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ko(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!au(e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[Yt(e)]):n=8);t.children=e,t.shapeFlag|=n}function fp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ze([e.class,r.class]));else if(s==="style")e.style=bo([e.style,r.style]);else if(Ns(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yt(t,e,n,r=null){ct(t,e,7,[n,r])}const hp=su();let pp=0;function mp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hp,i={uid:pp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cu(r,s),emitsOptions:bu(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rp.bind(null,i),t.ce&&t.ce(i),i}let Ce=null;const gp=()=>Ce||Te;let Es,Ki;{const t=Ls(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Es=e("__VUE_INSTANCE_SETTERS__",n=>Ce=n),Ki=e("__VUE_SSR_SETTERS__",n=>Or=n)}const qr=t=>{const e=Ce;return Es(t),t.scope.on(),()=>{t.scope.off(),Es(e)}},wa=()=>{Ce&&Ce.scope.off(),Es(null)};function Iu(t){return t.vnode.shapeFlag&4}let Or=!1;function yp(t,e=!1,n=!1){e&&Ki(e);const{props:r,children:s}=t.vnode,i=Iu(t);Hh(t,r,i,e),Kh(t,s,n);const o=i?bp(t,e):void 0;return e&&Ki(!1),o}function bp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dh);const{setup:r}=n;if(r){cn();const s=t.setupContext=r.length>1?_p(t):null,i=qr(t),o=Hr(r,t,0,[t.props,s]),a=uc(o);if(un(),i(),(a||t.sp)&&!qn(t)&&Kc(t),a){if(o.then(wa,wa),e)return o.then(l=>{Ea(t,l)}).catch(l=>{$s(l,t,0)});t.asyncDep=o}else Ea(t,o)}else Tu(t)}function Ea(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Mc(e)),Tu(t)}function Tu(t,e,n){const r=t.type;t.render||(t.render=r.render||Et);{const s=qr(t);cn();try{Lh(t)}finally{un(),s()}}}const vp={get(t,e){return Ae(t,"get",""),t[e]}};function _p(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vp),slots:t.slots,emit:t.emit,expose:e}}function Ws(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mc(ch(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)},has(e,n){return n in e||n in gr}})):t.proxy}function wp(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function Ep(t){return Q(t)&&"__vccOpts"in t}const tt=(t,e)=>ph(t,e,Or);function xo(t,e,n){const r=arguments.length;return r===2?pe(e)&&!q(e)?xr(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),Z(t,e,n))}const Ip="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gi;const Ia=typeof window<"u"&&window.trustedTypes;if(Ia)try{Gi=Ia.createPolicy("vue",{createHTML:t=>t})}catch{}const Su=Gi?t=>Gi.createHTML(t):t=>t,Tp="http://www.w3.org/2000/svg",Sp="http://www.w3.org/1998/Math/MathML",kt=typeof document<"u"?document:null,Ta=kt&&kt.createElement("template"),Cp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kt.createElementNS(Tp,t):e==="mathml"?kt.createElementNS(Sp,t):n?kt.createElement(t,{is:n}):kt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ta.innerHTML=Su(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ta.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jt="transition",ar="animation",Nr=Symbol("_vtc"),Cu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ap=Se({},Vc,Cu),Rp=t=>(t.displayName="Transition",t.props=Ap,t),Pp=Rp((t,{slots:e})=>xo(Ih,kp(t),e)),mn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Sa=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function kp(t){const e={};for(const B in t)B in Cu||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,b=xp(s),_=b&&b[0],E=b&&b[1],{onBeforeEnter:R,onEnter:C,onEnterCancelled:P,onLeave:O,onLeaveCancelled:k,onBeforeAppear:ee=R,onAppear:te=C,onAppearCancelled:ye=P}=e,K=(B,ie,we,Oe)=>{B._enterCancelled=Oe,gn(B,ie?u:a),gn(B,ie?c:o),we&&we()},re=(B,ie)=>{B._isLeaving=!1,gn(B,d),gn(B,m),gn(B,p),ie&&ie()},ue=B=>(ie,we)=>{const Oe=B?te:C,V=()=>K(ie,B,we);mn(Oe,[ie,V]),Ca(()=>{gn(ie,B?l:i),Rt(ie,B?u:a),Sa(Oe)||Aa(ie,r,_,V)})};return Se(e,{onBeforeEnter(B){mn(R,[B]),Rt(B,i),Rt(B,o)},onBeforeAppear(B){mn(ee,[B]),Rt(B,l),Rt(B,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(B,ie){B._isLeaving=!0;const we=()=>re(B,ie);Rt(B,d),B._enterCancelled?(Rt(B,p),ka()):(ka(),Rt(B,p)),Ca(()=>{B._isLeaving&&(gn(B,d),Rt(B,m),Sa(O)||Aa(B,r,E,we))}),mn(O,[B,we])},onEnterCancelled(B){K(B,!1,void 0,!0),mn(P,[B])},onAppearCancelled(B){K(B,!0,void 0,!0),mn(ye,[B])},onLeaveCancelled(B){re(B),mn(k,[B])}})}function xp(t){if(t==null)return null;if(pe(t))return[pi(t.enter),pi(t.leave)];{const e=pi(t);return[e,e]}}function pi(t){return Df(t)}function Rt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Nr]||(t[Nr]=new Set)).add(e)}function gn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Nr];n&&(n.delete(e),n.size||(t[Nr]=void 0))}function Ca(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Op=0;function Aa(t,e,n,r){const s=t._endId=++Op,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Np(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,p),i()},p=m=>{m.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,p)}function Np(t,e){const n=window.getComputedStyle(t),r=b=>(n[b]||"").split(", "),s=r(`${jt}Delay`),i=r(`${jt}Duration`),o=Ra(s,i),a=r(`${ar}Delay`),l=r(`${ar}Duration`),c=Ra(a,l);let u=null,d=0,p=0;e===jt?o>0&&(u=jt,d=o,p=i.length):e===ar?c>0&&(u=ar,d=c,p=l.length):(d=Math.max(o,c),u=d>0?o>c?jt:ar:null,p=u?u===jt?i.length:l.length:0);const m=u===jt&&/\b(transform|all)(,|$)/.test(r(`${jt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:m}}function Ra(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Pa(n)+Pa(t[r])))}function Pa(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ka(){return document.body.offsetHeight}function Mp(t,e,n){const r=t[Nr];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xa=Symbol("_vod"),Dp=Symbol("_vsh"),Lp=Symbol(""),Fp=/(^|;)\s*display\s*:/;function Up(t,e,n){const r=t.style,s=_e(n);let i=!1;if(n&&!s){if(e)if(_e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ls(r,a,"")}else for(const o in e)n[o]==null&&ls(r,o,"");for(const o in n)o==="display"&&(i=!0),ls(r,o,n[o])}else if(s){if(e!==n){const o=r[Lp];o&&(n+=";"+o),r.cssText=n,i=Fp.test(n)}}else e&&t.removeAttribute("style");xa in t&&(t[xa]=i?r.display:"",t[Dp]&&(r.display="none"))}const Oa=/\s*!important$/;function ls(t,e,n){if(q(n))n.forEach(r=>ls(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$p(t,e);Oa.test(n)?t.setProperty(ln(r),n.replace(Oa,""),"important"):t[r]=n}}const Na=["Webkit","Moz","ms"],mi={};function $p(t,e){const n=mi[e];if(n)return n;let r=st(e);if(r!=="filter"&&r in t)return mi[e]=r;r=Ds(r);for(let s=0;s<Na.length;s++){const i=Na[s]+r;if(i in t)return mi[e]=i}return e}const Ma="http://www.w3.org/1999/xlink";function Da(t,e,n,r,s,i=Vf(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ma,e.slice(6,e.length)):t.setAttributeNS(Ma,e,n):n==null||i&&!pc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":lt(n)?String(n):n)}function La(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Su(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xt(t,e,n,r){t.addEventListener(e,n,r)}function Bp(t,e,n,r){t.removeEventListener(e,n,r)}const Fa=Symbol("_vei");function Vp(t,e,n,r,s=null){const i=t[Fa]||(t[Fa]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=jp(e);if(r){const c=i[e]=Wp(r,s);Xt(t,a,c,l)}else o&&(Bp(t,a,o,l),i[e]=void 0)}}const Ua=/(?:Once|Passive|Capture)$/;function jp(t){let e;if(Ua.test(t)){e={};let r;for(;r=t.match(Ua);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let gi=0;const Hp=Promise.resolve(),qp=()=>gi||(Hp.then(()=>gi=0),gi=Date.now());function Wp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ct(zp(r,n.value),e,5,[r])};return n.value=t,n.attached=qp(),n}function zp(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Kp=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Mp(t,r,o):e==="style"?Up(t,n,r):Ns(e)?mo(e)||Vp(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gp(t,e,r,o))?(La(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Da(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(r))?La(t,st(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Da(t,e,r,o))};function Gp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$a(e)&&Q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $a(e)&&_e(n)?!1:e in t}const Yn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>ss(e,n):e};function Jp(t){t.target.composing=!0}function Ba(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign"),Mr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Dt]=Yn(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gs(a)),t[Dt](a)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",Jp),Xt(t,"compositionend",Ba),Xt(t,"change",Ba))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Dt]=Yn(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?gs(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Yp={deep:!0,created(t,e,n){t[Dt]=Yn(n),Xt(t,"change",()=>{const r=t._modelValue,s=Dr(t),i=t.checked,o=t[Dt];if(q(r)){const a=vo(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(tr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Au(t,i))})},mounted:Va,beforeUpdate(t,e,n){t[Dt]=Yn(n),Va(t,e,n)}};function Va(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(q(e))s=vo(e,r.props.value)>-1;else if(tr(e))s=e.has(r.props.value);else{if(e===n)return;s=jr(e,Au(t,!0))}t.checked!==s&&(t.checked=s)}const Xp={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=tr(e);Xt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gs(Dr(o)):Dr(o));t[Dt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ao(()=>{t._assigning=!1})}),t[Dt]=Yn(r)},mounted(t,{value:e}){ja(t,e)},beforeUpdate(t,e,n){t[Dt]=Yn(n)},updated(t,{value:e}){t._assigning||ja(t,e)}};function ja(t,e){const n=t.multiple,r=q(e);if(!(n&&!r&&!tr(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Dr(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=vo(e,a)>-1}else o.selected=e.has(a);else if(jr(Dr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Dr(t){return"_value"in t?t._value:t.value}function Au(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Qp=["ctrl","shift","alt","meta"],Zp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qp.some(n=>t[`${n}Key`]&&!e.includes(n))},Oo=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Zp[e[o]];if(a&&a(s,e))return}return t(s,...i)})},em={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},No=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ln(s.key);if(e.some(o=>o===i||em[o]===i))return t(s)})},tm=Se({patchProp:Kp},Cp);let Ha;function nm(){return Ha||(Ha=Jh(tm))}const rm=(...t)=>{const e=nm().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=im(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function im(t){return _e(t)?document.querySelector(t):t}function Ru(t,e){return function(){return t.apply(e,arguments)}}const{toString:om}=Object.prototype,{getPrototypeOf:Mo}=Object,zs=(t=>e=>{const n=om.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),dt=t=>(t=t.toLowerCase(),e=>zs(e)===t),Ks=t=>e=>typeof e===t,{isArray:nr}=Array,Lr=Ks("undefined");function am(t){return t!==null&&!Lr(t)&&t.constructor!==null&&!Lr(t.constructor)&&Je(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Pu=dt("ArrayBuffer");function lm(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Pu(t.buffer),e}const cm=Ks("string"),Je=Ks("function"),ku=Ks("number"),Gs=t=>t!==null&&typeof t=="object",um=t=>t===!0||t===!1,cs=t=>{if(zs(t)!=="object")return!1;const e=Mo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},dm=dt("Date"),fm=dt("File"),hm=dt("Blob"),pm=dt("FileList"),mm=t=>Gs(t)&&Je(t.pipe),gm=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Je(t.append)&&((e=zs(t))==="formdata"||e==="object"&&Je(t.toString)&&t.toString()==="[object FormData]"))},ym=dt("URLSearchParams"),[bm,vm,_m,wm]=["ReadableStream","Request","Response","Headers"].map(dt),Em=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Wr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),nr(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function xu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ou=t=>!Lr(t)&&t!==wn;function Ji(){const{caseless:t}=Ou(this)&&this||{},e={},n=(r,s)=>{const i=t&&xu(e,s)||s;cs(e[i])&&cs(r)?e[i]=Ji(e[i],r):cs(r)?e[i]=Ji({},r):nr(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Wr(arguments[r],n);return e}const Im=(t,e,n,{allOwnKeys:r}={})=>(Wr(e,(s,i)=>{n&&Je(s)?t[i]=Ru(s,n):t[i]=s},{allOwnKeys:r}),t),Tm=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Sm=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Cm=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Mo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Am=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Rm=t=>{if(!t)return null;if(nr(t))return t;let e=t.length;if(!ku(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Pm=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Mo(Uint8Array)),km=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},xm=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Om=dt("HTMLFormElement"),Nm=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),qa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Mm=dt("RegExp"),Nu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Wr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Dm=t=>{Nu(t,(e,n)=>{if(Je(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Je(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lm=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return nr(t)?r(t):r(String(t).split(e)),n},Fm=()=>{},Um=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function $m(t){return!!(t&&Je(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Bm=t=>{const e=new Array(10),n=(r,s)=>{if(Gs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=nr(r)?[]:{};return Wr(r,(o,a)=>{const l=n(o,s+1);!Lr(l)&&(i[a]=l)}),e[s]=void 0,i}}return r};return n(t,0)},Vm=dt("AsyncFunction"),jm=t=>t&&(Gs(t)||Je(t))&&Je(t.then)&&Je(t.catch),Mu=((t,e)=>t?setImmediate:e?((n,r)=>(wn.addEventListener("message",({source:s,data:i})=>{s===wn&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),wn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Je(wn.postMessage)),Hm=typeof queueMicrotask<"u"?queueMicrotask.bind(wn):typeof process<"u"&&process.nextTick||Mu,v={isArray:nr,isArrayBuffer:Pu,isBuffer:am,isFormData:gm,isArrayBufferView:lm,isString:cm,isNumber:ku,isBoolean:um,isObject:Gs,isPlainObject:cs,isReadableStream:bm,isRequest:vm,isResponse:_m,isHeaders:wm,isUndefined:Lr,isDate:dm,isFile:fm,isBlob:hm,isRegExp:Mm,isFunction:Je,isStream:mm,isURLSearchParams:ym,isTypedArray:Pm,isFileList:pm,forEach:Wr,merge:Ji,extend:Im,trim:Em,stripBOM:Tm,inherits:Sm,toFlatObject:Cm,kindOf:zs,kindOfTest:dt,endsWith:Am,toArray:Rm,forEachEntry:km,matchAll:xm,isHTMLForm:Om,hasOwnProperty:qa,hasOwnProp:qa,reduceDescriptors:Nu,freezeMethods:Dm,toObjectSet:Lm,toCamelCase:Nm,noop:Fm,toFiniteNumber:Um,findKey:xu,global:wn,isContextDefined:Ou,isSpecCompliantForm:$m,toJSONObject:Bm,isAsyncFn:Vm,isThenable:jm,setImmediate:Mu,asap:Hm};function ne(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}v.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const Du=ne.prototype,Lu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Lu[t]={value:t}});Object.defineProperties(ne,Lu);Object.defineProperty(Du,"isAxiosError",{value:!0});ne.from=(t,e,n,r,s,i)=>{const o=Object.create(Du);return v.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ne.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const qm=null;function Yi(t){return v.isPlainObject(t)||v.isArray(t)}function Fu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Wa(t,e,n){return t?t.concat(e).map(function(s,i){return s=Fu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Wm(t){return v.isArray(t)&&!t.some(Yi)}const zm=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Js(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,E){return!v.isUndefined(E[_])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function c(b){if(b===null)return"";if(v.isDate(b))return b.toISOString();if(!l&&v.isBlob(b))throw new ne("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(b)||v.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,_,E){let R=b;if(b&&!E&&typeof b=="object"){if(v.endsWith(_,"{}"))_=r?_:_.slice(0,-2),b=JSON.stringify(b);else if(v.isArray(b)&&Wm(b)||(v.isFileList(b)||v.endsWith(_,"[]"))&&(R=v.toArray(b)))return _=Fu(_),R.forEach(function(P,O){!(v.isUndefined(P)||P===null)&&e.append(o===!0?Wa([_],O,i):o===null?_:_+"[]",c(P))}),!1}return Yi(b)?!0:(e.append(Wa(E,_,i),c(b)),!1)}const d=[],p=Object.assign(zm,{defaultVisitor:u,convertValue:c,isVisitable:Yi});function m(b,_){if(!v.isUndefined(b)){if(d.indexOf(b)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(b),v.forEach(b,function(R,C){(!(v.isUndefined(R)||R===null)&&s.call(e,R,v.isString(C)?C.trim():C,_,p))===!0&&m(R,_?_.concat(C):[C])}),d.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return m(t),e}function za(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Do(t,e){this._pairs=[],t&&Js(t,this,e)}const Uu=Do.prototype;Uu.append=function(e,n){this._pairs.push([e,n])};Uu.toString=function(e){const n=e?function(r){return e.call(this,r,za)}:za;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Km(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $u(t,e,n){if(!e)return t;const r=n&&n.encode||Km;v.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new Do(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Ka{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Bu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gm=typeof URLSearchParams<"u"?URLSearchParams:Do,Jm=typeof FormData<"u"?FormData:null,Ym=typeof Blob<"u"?Blob:null,Xm={isBrowser:!0,classes:{URLSearchParams:Gm,FormData:Jm,Blob:Ym},protocols:["http","https","file","blob","url","data"]},Lo=typeof window<"u"&&typeof document<"u",Xi=typeof navigator=="object"&&navigator||void 0,Qm=Lo&&(!Xi||["ReactNative","NativeScript","NS"].indexOf(Xi.product)<0),Zm=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",eg=Lo&&window.location.href||"http://localhost",tg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lo,hasStandardBrowserEnv:Qm,hasStandardBrowserWebWorkerEnv:Zm,navigator:Xi,origin:eg},Symbol.toStringTag,{value:"Module"})),ke={...tg,...Xm};function ng(t,e){return Js(t,new ke.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ke.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function rg(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function sg(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Vu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,l?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=sg(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(rg(r),s,n,0)}),n}return null}function ig(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const zr={transitional:Bu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(Vu(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ng(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Js(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),ig(e)):e}],transformResponse:[function(e){const n=this.transitional||zr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ne.from(a,ne.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ke.classes.FormData,Blob:ke.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{zr.headers[t]={}});const og=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ag=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&og[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ga=Symbol("internals");function lr(t){return t&&String(t).trim().toLowerCase()}function us(t){return t===!1||t==null?t:v.isArray(t)?t.map(us):String(t)}function lg(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const cg=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yi(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function ug(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function dg(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Be=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,l,c){const u=lr(l);if(!u)throw new Error("header name must be a non-empty string");const d=v.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=us(a))}const o=(a,l)=>v.forEach(a,(c,u)=>i(c,u,l));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!cg(e))o(ag(e),n);else if(v.isHeaders(e))for(const[a,l]of e.entries())i(l,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=lr(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return lg(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=lr(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||yi(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=lr(o),o){const a=v.findKey(r,o);a&&(!n||yi(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||yi(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=us(s),delete n[i];return}const a=e?ug(i):String(i).trim();a!==i&&delete n[i],n[a]=us(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ga]=this[Ga]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=lr(o);r[a]||(dg(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}};Be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Be.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(Be);function bi(t,e){const n=this||zr,r=e||n,s=Be.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function ju(t){return!!(t&&t.__CANCEL__)}function rr(t,e,n){ne.call(this,t??"canceled",ne.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(rr,ne,{__CANCEL__:!0});function Hu(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function fg(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function hg(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=r[i];o||(o=c),n[s]=l,r[s]=c;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(p*1e3/m):void 0}}function pg(t,e){let n=0,r=1e3/e,s,i;const o=(c,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=r?o(c,u):(s=c,i||(i=setTimeout(()=>{i=null,o(s)},r-d)))},()=>s&&o(s)]}const Is=(t,e,n=3)=>{let r=0;const s=hg(50,250);return pg(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-r,c=s(l),u=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Ja=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ya=t=>(...e)=>v.asap(()=>t(...e)),mg=ke.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,ke.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(ke.origin),ke.navigator&&/(msie|trident)/i.test(ke.navigator.userAgent)):()=>!0,gg=ke.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yg(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function bg(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function qu(t,e,n){let r=!yg(e);return t&&(r||n==!1)?bg(t,e):e}const Xa=t=>t instanceof Be?{...t}:t;function Rn(t,e){e=e||{};const n={};function r(c,u,d,p){return v.isPlainObject(c)&&v.isPlainObject(u)?v.merge.call({caseless:p},c,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(c,u,d,p){if(v.isUndefined(u)){if(!v.isUndefined(c))return r(void 0,c,d,p)}else return r(c,u,d,p)}function i(c,u){if(!v.isUndefined(u))return r(void 0,u)}function o(c,u){if(v.isUndefined(u)){if(!v.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,d){if(d in e)return r(c,u);if(d in t)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,d)=>s(Xa(c),Xa(u),d,!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||s,p=d(t[u],e[u],u);v.isUndefined(p)&&d!==a||(n[u]=p)}),n}const Wu=t=>{const e=Rn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Be.from(o),e.url=$u(qu(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(v.isFormData(n)){if(ke.hasStandardBrowserEnv||ke.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(ke.hasStandardBrowserEnv&&(r&&v.isFunction(r)&&(r=r(e)),r||r!==!1&&mg(e.url))){const c=s&&i&&gg.read(i);c&&o.set(s,c)}return e},vg=typeof XMLHttpRequest<"u",_g=vg&&function(t){return new Promise(function(n,r){const s=Wu(t);let i=s.data;const o=Be.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,d,p,m,b;function _(){m&&m(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let E=new XMLHttpRequest;E.open(s.method.toUpperCase(),s.url,!0),E.timeout=s.timeout;function R(){if(!E)return;const P=Be.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:P,config:t,request:E};Hu(function(te){n(te),_()},function(te){r(te),_()},k),E=null}"onloadend"in E?E.onloadend=R:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(R)},E.onabort=function(){E&&(r(new ne("Request aborted",ne.ECONNABORTED,t,E)),E=null)},E.onerror=function(){r(new ne("Network Error",ne.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let O=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||Bu;s.timeoutErrorMessage&&(O=s.timeoutErrorMessage),r(new ne(O,k.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,t,E)),E=null},i===void 0&&o.setContentType(null),"setRequestHeader"in E&&v.forEach(o.toJSON(),function(O,k){E.setRequestHeader(k,O)}),v.isUndefined(s.withCredentials)||(E.withCredentials=!!s.withCredentials),a&&a!=="json"&&(E.responseType=s.responseType),c&&([p,b]=Is(c,!0),E.addEventListener("progress",p)),l&&E.upload&&([d,m]=Is(l),E.upload.addEventListener("progress",d),E.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=P=>{E&&(r(!P||P.type?new rr(null,t,E):P),E.abort(),E=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const C=fg(s.url);if(C&&ke.protocols.indexOf(C)===-1){r(new ne("Unsupported protocol "+C+":",ne.ERR_BAD_REQUEST,t));return}E.send(i||null)})},wg=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;r.abort(u instanceof ne?u:new rr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new ne(`timeout ${e} of ms exceeded`,ne.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>v.asap(a),l}},Eg=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Ig=async function*(t,e){for await(const n of Tg(t))yield*Eg(n,e)},Tg=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Qa=(t,e,n,r)=>{const s=Ig(t,e);let i=0,o,a=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let p=i+=d;n(p)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Ys=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",zu=Ys&&typeof ReadableStream=="function",Sg=Ys&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Ku=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Cg=zu&&Ku(()=>{let t=!1;const e=new Request(ke.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Za=64*1024,Qi=zu&&Ku(()=>v.isReadableStream(new Response("").body)),Ts={stream:Qi&&(t=>t.body)};Ys&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ts[e]&&(Ts[e]=v.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ne(`Response type '${e}' is not supported`,ne.ERR_NOT_SUPPORT,r)})})})(new Response);const Ag=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(ke.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await Sg(t)).byteLength},Rg=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??Ag(e)},Pg=Ys&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=Wu(t);c=c?(c+"").toLowerCase():"text";let m=wg([s,i&&i.toAbortSignal()],o),b;const _=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let E;try{if(l&&Cg&&n!=="get"&&n!=="head"&&(E=await Rg(u,r))!==0){let k=new Request(e,{method:"POST",body:r,duplex:"half"}),ee;if(v.isFormData(r)&&(ee=k.headers.get("content-type"))&&u.setContentType(ee),k.body){const[te,ye]=Ja(E,Is(Ya(l)));r=Qa(k.body,Za,te,ye)}}v.isString(d)||(d=d?"include":"omit");const R="credentials"in Request.prototype;b=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:R?d:void 0});let C=await fetch(b);const P=Qi&&(c==="stream"||c==="response");if(Qi&&(a||P&&_)){const k={};["status","statusText","headers"].forEach(K=>{k[K]=C[K]});const ee=v.toFiniteNumber(C.headers.get("content-length")),[te,ye]=a&&Ja(ee,Is(Ya(a),!0))||[];C=new Response(Qa(C.body,Za,te,()=>{ye&&ye(),_&&_()}),k)}c=c||"text";let O=await Ts[v.findKey(Ts,c)||"text"](C,t);return!P&&_&&_(),await new Promise((k,ee)=>{Hu(k,ee,{data:O,headers:Be.from(C.headers),status:C.status,statusText:C.statusText,config:t,request:b})})}catch(R){throw _&&_(),R&&R.name==="TypeError"&&/fetch/i.test(R.message)?Object.assign(new ne("Network Error",ne.ERR_NETWORK,t,b),{cause:R.cause||R}):ne.from(R,R&&R.code,t,b)}}),Zi={http:qm,xhr:_g,fetch:Pg};v.forEach(Zi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const el=t=>`- ${t}`,kg=t=>v.isFunction(t)||t===null||t===!1,Gu={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!kg(n)&&(r=Zi[(o=String(n)).toLowerCase()],r===void 0))throw new ne(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(el).join(`
`):" "+el(i[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Zi};function vi(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new rr(null,t)}function tl(t){return vi(t),t.headers=Be.from(t.headers),t.data=bi.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Gu.getAdapter(t.adapter||zr.adapter)(t).then(function(r){return vi(t),r.data=bi.call(t,t.transformResponse,r),r.headers=Be.from(r.headers),r},function(r){return ju(r)||(vi(t),r&&r.response&&(r.response.data=bi.call(t,t.transformResponse,r.response),r.response.headers=Be.from(r.response.headers))),Promise.reject(r)})}const Ju="1.8.4",Xs={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Xs[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const nl={};Xs.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Ju+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new ne(s(o," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!nl[o]&&(nl[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};Xs.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function xg(t,e,n){if(typeof t!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new ne("option "+i+" must be "+l,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+i,ne.ERR_BAD_OPTION)}}const ds={assertOptions:xg,validators:Xs},bt=ds.validators;let Sn=class{constructor(e){this.defaults=e,this.interceptors={request:new Ka,response:new Ka}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Rn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ds.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:ds.assertOptions(s,{encode:bt.function,serialize:bt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ds.assertOptions(n,{baseUrl:bt.spelling("baseURL"),withXsrfToken:bt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=Be.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,d=0,p;if(!l){const b=[tl.bind(this),void 0];for(b.unshift.apply(b,a),b.push.apply(b,c),p=b.length,u=Promise.resolve(n);d<p;)u=u.then(b[d++],b[d++]);return u}p=a.length;let m=n;for(d=0;d<p;){const b=a[d++],_=a[d++];try{m=b(m)}catch(E){_.call(this,E);break}}try{u=tl.call(this,m)}catch(b){return Promise.reject(b)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Rn(this.defaults,e);const n=qu(e.baseURL,e.url,e.allowAbsoluteUrls);return $u(n,e.params,e.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(e){Sn.prototype[e]=function(n,r){return this.request(Rn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Rn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Sn.prototype[e]=n(),Sn.prototype[e+"Form"]=n(!0)});let Og=class Yu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new rr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Yu(function(s){e=s}),cancel:e}}};function Ng(t){return function(n){return t.apply(null,n)}}function Mg(t){return v.isObject(t)&&t.isAxiosError===!0}const eo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eo).forEach(([t,e])=>{eo[e]=t});function Xu(t){const e=new Sn(t),n=Ru(Sn.prototype.request,e);return v.extend(n,Sn.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Xu(Rn(t,s))},n}const be=Xu(zr);be.Axios=Sn;be.CanceledError=rr;be.CancelToken=Og;be.isCancel=ju;be.VERSION=Ju;be.toFormData=Js;be.AxiosError=ne;be.Cancel=be.CanceledError;be.all=function(e){return Promise.all(e)};be.spread=Ng;be.isAxiosError=Mg;be.mergeConfig=Rn;be.AxiosHeaders=Be;be.formToJSON=t=>Vu(v.isHTMLForm(t)?new FormData(t):t);be.getAdapter=Gu.getAdapter;be.HttpStatusCode=eo;be.default=be;const{Axios:nS,AxiosError:rS,CanceledError:sS,isCancel:iS,CancelToken:oS,VERSION:aS,all:lS,Cancel:cS,isAxiosError:uS,spread:dS,toFormData:fS,AxiosHeaders:hS,HttpStatusCode:pS,formToJSON:mS,getAdapter:gS,mergeConfig:yS}=be,Xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Dg={name:"ChatbotInterface",data(){return{isChatOpen:!1,typingDots:0,typingInterval:null,userInput:"",messages:[],isTyping:!1,unreadMessages:0,botResponses:{greeting:["Hello! How can I help you with your loan application today?","Welcome to our loan service! What questions do you have?","Hi there! I'm here to assist with your banking needs. What can I help you with?"],loan:["Our loan application process is simple. You can select a bank, fill out the application form, and receive an instant decision. Would you like me to guide you through the steps?","We offer various loan options with competitive interest rates. The minimum loan amount is 100,000 AMD and the maximum is 10,000,000 AMD with terms from 12 to 120 months."],bank:["We partner with multiple banks to find you the best rates. Each bank has different requirements regarding minimum credit scores and interest rates.","You can view all available banks on our platform along with their locations on the map. Is there a specific bank you're interested in?"],application:["To complete your application, you'll need to provide your personal details, employment information, and verify your identity with an OTP sent to your email.","After submitting your application, you'll receive a confirmation email with your application reference number for tracking purposes."],fallback:["I'm not sure I understand your question. Could you please rephrase it?","I'm here to help with loan and banking questions. Could you provide more details about what you need?","I don't have information about that specific topic. Would you like to know more about our loan application process instead?"]}}},mounted(){setTimeout(()=>{this.addMessage("bot","Hello! Welcome to our loan service. How can I help you today?"),this.unreadMessages=1},1e3)},methods:{toggleChat(){this.isChatOpen=!this.isChatOpen,this.isChatOpen&&(this.unreadMessages=0,this.$nextTick(()=>{const t=this.$el.querySelector(".chat-input input");t&&t.focus()}))},sendMessage(){const t=this.userInput.trim();if(!t)return;this.addMessage("user",t),this.userInput="",this.isTyping=!0;const e=Math.floor(Math.random()*1e3)+500;setTimeout(()=>{this.isTyping=!1,this.respondToMessage(t)},e)},addMessage(t,e){this.messages.push({sender:t,text:e,timestamp:new Date}),t==="bot"&&!this.isChatOpen&&this.unreadMessages++,this.$nextTick(()=>{this.$refs.messageContainer&&(this.$refs.messageContainer.scrollTop=this.$refs.messageContainer.scrollHeight)})},async respondToMessage(t){try{this.isTyping=!0;let e="";const n=await fetch("http://localhost:3000/api/chatbot",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t})});if(!n.ok)throw new Error("Network response was not ok");const r=n.body.getReader(),s=new TextDecoder;for(;;){const{done:i,value:o}=await r.read();if(i){this.isTyping=!1;break}const l=s.decode(o).split(`

`).filter(c=>c.startsWith("data: "));for(const c of l)try{const u=JSON.parse(c.substring(6));e+=u;const d=this.messages[this.messages.length-1];d&&d.sender==="bot"?d.text=e:this.addMessage("bot",e)}catch(u){console.error("Error parsing chunk:",u)}}}catch(e){console.error("Chat error:",e),this.isTyping=!1,this.addMessage("bot","Sorry, something went wrong.")}},startTypingAnimation(){this.typingInterval=setInterval(()=>{this.typingDots=(this.typingDots+1)%4},500)},stopTypingAnimation(){clearInterval(this.typingInterval),this.typingDots=0},formatTime(t){return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},useDefaultAvatar(t){t.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%23808080'/%3E%3Cpath fill='white' d='M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'/%3E%3Cpath fill='white' d='M12 16c-3.31 0-6 1.79-6 4h12c0-2.21-2.69-4-6-4z'/%3E%3C/svg%3E"}}},Lg={class:"chatbot-container"},Fg={key:0,class:"notification-badge"},Ug={class:"chat-header"},$g={class:"chat-header-title"},Bg={class:"chat-avatar"},Vg={class:"chat-messages",ref:"messageContainer"},jg={class:"message-content"},Hg={class:"message-time"},qg={key:0,class:"message bot-message"},Wg={class:"message-content typing-indicator"},zg={class:"chat-input"},Kg=["disabled"];function Gg(t,e,n,r,s,i){return H(),J("div",Lg,[g("button",{onClick:e[0]||(e[0]=(...o)=>i.toggleChat&&i.toggleChat(...o)),class:ze(["chat-button",{hidden:s.isChatOpen}])},[e[6]||(e[6]=g("div",{class:"chat-icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})])],-1)),s.unreadMessages>0?(H(),J("div",Fg,X(s.unreadMessages),1)):Pe("",!0)],2),g("div",{class:ze(["chat-window",{open:s.isChatOpen}])},[g("div",Ug,[g("div",$g,[g("div",Bg,[g("img",{src:"",alt:"Chatbot Avatar",onError:e[1]||(e[1]=(...o)=>i.useDefaultAvatar&&i.useDefaultAvatar(...o))},null,32)]),e[7]||(e[7]=g("div",null,[g("h3",null,"Support Chat"),g("p",{class:"chat-status"},[g("span",{class:"status-dot"}),Yt(" Online ")])],-1))]),g("button",{onClick:e[2]||(e[2]=(...o)=>i.toggleChat&&i.toggleChat(...o)),class:"close-button"},e[8]||(e[8]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)]))]),g("div",Vg,[(H(!0),J(ve,null,Lt(s.messages,(o,a)=>(H(),J("div",{key:a,class:ze(["message",{"user-message":o.sender==="user","bot-message":o.sender==="bot"}])},[g("div",jg,X(o.text),1),g("div",Hg,X(i.formatTime(o.timestamp)),1)],2))),128)),s.isTyping?(H(),J("div",qg,[g("div",Wg,[(H(),J(ve,null,Lt(3,o=>g("span",{key:o,class:ze({active:o<=s.typingDots})},null,2)),64))])])):Pe("",!0)],512),g("div",zg,[_n(g("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.userInput=o),placeholder:"Type your message here...",onKeyup:e[4]||(e[4]=No((...o)=>i.sendMessage&&i.sendMessage(...o),["enter"]))},null,544),[[Mr,s.userInput]]),g("button",{onClick:e[5]||(e[5]=(...o)=>i.sendMessage&&i.sendMessage(...o)),class:"send-button",disabled:!s.userInput.trim()},e[9]||(e[9]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),g("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1)]),8,Kg)])],2)])}const Jg=Xe(Dg,[["render",Gg],["__scopeId","data-v-b5839d40"]]),Yg={name:"MainLayout",data(){return{navLinks:[{name:"Calculator",path:"/calculator"},{name:"Banks",path:"/banks"},{name:"About",path:"/about"},{name:"Apply",path:"/apply"}]}},components:{ChatbotInterface:Jg}},Xg={class:"flex flex-col min-h-screen"},Qg={class:"bg-white shadow-md"},Zg={class:"container mx-auto px-4 py-4 flex justify-between items-center"},ey={class:"space-x-6"},ty={class:"flex-grow container mx-auto px-4 py-8"};function ny(t,e,n,r,s,i){const o=Ge("router-link"),a=Ge("ChatbotInterface");return H(),J("div",Xg,[g("header",Qg,[g("nav",Zg,[e[0]||(e[0]=g("div",{class:"flex items-center"},[g("h1",{class:"text-2xl font-bold text-primary-600"},"LoanLy")],-1)),g("div",ey,[(H(!0),J(ve,null,Lt(s.navLinks,l=>(H(),An(o,{key:l.name,to:l.path,class:"text-gray-700 hover:text-primary-600 transition-colors"},{default:Tn(()=>[Yt(X(l.name),1)]),_:2},1032,["to"]))),128))])])]),g("main",ty,[eu(t.$slots,"default")]),Z(a),e[1]||(e[1]=g("footer",{class:"bg-white shadow-t py-6"},[g("div",{class:"container mx-auto text-center text-gray-600"}," © 2025 LoanLy. All Rights Reserved. ")],-1))])}const ry=Xe(Yg,[["render",ny]]),sy={name:"App",components:{MainLayout:ry}},iy={id:"app",class:"min-h-screen bg-gray-50 font-sans"};function oy(t,e,n,r,s,i){const o=Ge("router-view"),a=Ge("MainLayout");return H(),J("div",iy,[Z(a,null,{default:Tn(()=>[Z(o,null,{default:Tn(({Component:l})=>[Z(Pp,{name:"fade",mode:"out-in"},{default:Tn(()=>[(H(),An(Mh(l)))]),_:2},1024)]),_:1})]),_:1})])}const ay=Xe(sy,[["render",oy]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fn=typeof document<"u";function Qu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ly(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qu(t.default)}const ae=Object.assign;function _i(t,e){const n={};for(const r in e){const s=e[r];n[r]=ut(s)?s.map(t):t(s)}return n}const vr=()=>{},ut=Array.isArray,Zu=/#/g,cy=/&/g,uy=/\//g,dy=/=/g,fy=/\?/g,ed=/\+/g,hy=/%5B/g,py=/%5D/g,td=/%5E/g,my=/%60/g,nd=/%7B/g,gy=/%7C/g,rd=/%7D/g,yy=/%20/g;function Fo(t){return encodeURI(""+t).replace(gy,"|").replace(hy,"[").replace(py,"]")}function by(t){return Fo(t).replace(nd,"{").replace(rd,"}").replace(td,"^")}function to(t){return Fo(t).replace(ed,"%2B").replace(yy,"+").replace(Zu,"%23").replace(cy,"%26").replace(my,"`").replace(nd,"{").replace(rd,"}").replace(td,"^")}function vy(t){return to(t).replace(dy,"%3D")}function _y(t){return Fo(t).replace(Zu,"%23").replace(fy,"%3F")}function wy(t){return t==null?"":_y(t).replace(uy,"%2F")}function Fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ey=/\/$/,Iy=t=>t.replace(Ey,"");function wi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ay(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fr(o)}}function Ty(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sy(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xn(e.matched[r],n.matched[s])&&sd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cy(t[n],e[n]))return!1;return!0}function Cy(t,e){return ut(t)?sl(t,e):ut(e)?sl(e,t):t===e}function sl(t,e){return ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ay(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var _r;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_r||(_r={}));function Ry(t){if(!t)if(Fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iy(t)}const Py=/^[^#]+#/;function ky(t,e){return t.replace(Py,"#")+e}function xy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qs=()=>({left:window.scrollX,top:window.scrollY});function Oy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function il(t,e){return(history.state?history.state.position-e:-1)+t}const no=new Map;function Ny(t,e){no.set(t,e)}function My(t){const e=no.get(t);return no.delete(t),e}let Dy=()=>location.protocol+"//"+location.host;function id(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),rl(l,"")}return rl(n,t)+r+s}function Ly(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=id(t,location),b=n.value,_=e.value;let E=0;if(p){if(n.value=m,e.value=p,o&&o===b){o=null;return}E=_?p.position-_.position:0}else r(m);s.forEach(R=>{R(n.value,b,{delta:E,type:Ur.pop,direction:E?E>0?_r.forward:_r.back:_r.unknown})})};function l(){o=n.value}function c(p){s.push(p);const m=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ae({},p.state,{scroll:Qs()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function ol(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qs():null}}function Fy(t){const{history:e,location:n}=window,r={value:id(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Dy()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(l,c){const u=ae({},e.state,ol(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ae({},s.value,e.state,{forward:l,scroll:Qs()});i(u.current,u,!0);const d=ae({},ol(r.value,l,null),{position:u.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Uy(t){t=Ry(t);const e=Fy(t),n=Ly(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:t,go:r,createHref:ky.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function $y(t){return typeof t=="string"||t&&typeof t=="object"}function od(t){return typeof t=="string"||typeof t=="symbol"}const ad=Symbol("");var al;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(al||(al={}));function Qn(t,e){return ae(new Error,{type:t,[ad]:!0},e)}function Pt(t,e){return t instanceof Error&&ad in t&&(e==null||!!(t.type&e))}const ll="[^/]+?",By={sensitive:!1,strict:!1,start:!0,end:!0},Vy=/[.+*?^${}()[\]/\\]/g;function jy(t,e){const n=ae({},By,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const p=c[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Vy,"\\$&"),m+=40;else if(p.type===1){const{value:b,repeatable:_,optional:E,regexp:R}=p;i.push({name:b,repeatable:_,optional:E});const C=R||ll;if(C!==ll){m+=10;try{new RegExp(`(${C})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${b}" (${C}): `+O.message)}}let P=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(P=E&&c.length<2?`(?:/${P})`:"/"+P),E&&(P+="?"),s+=P,m+=20,E&&(m+=-8),_&&(m+=-20),C===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",b=i[p-1];d[b.name]=m&&b.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:b,repeatable:_,optional:E}=m,R=b in c?c[b]:"";if(ut(R)&&!_)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const C=ut(R)?R.join("/"):R;if(!C)if(E)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Hy(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ld(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Hy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cl(r))return 1;if(cl(s))return-1}return s.length-r.length}function cl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qy={type:0,value:""},Wy=/[a-zA-Z0-9_]/;function zy(t){if(!t)return[[]];if(t==="/")return[[qy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Wy.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Ky(t,e,n){const r=jy(zy(t.path),n),s=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gy(t,e){const n=[],r=new Map;e=hl({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const b=!m,_=dl(d);_.aliasOf=m&&m.record;const E=hl(e,d),R=[_];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of O)R.push(dl(ae({},_,{components:m?m.record.components:_.components,path:k,aliasOf:m?m.record:_})))}let C,P;for(const O of R){const{path:k}=O;if(p&&k[0]!=="/"){const ee=p.record.path,te=ee[ee.length-1]==="/"?"":"/";O.path=p.record.path+(k&&te+k)}if(C=Ky(O,p,E),m?m.alias.push(C):(P=P||C,P!==C&&P.alias.push(C),b&&d.name&&!fl(C)&&o(d.name)),cd(C)&&l(C),_.children){const ee=_.children;for(let te=0;te<ee.length;te++)i(ee[te],C,m&&m.children[te])}m=m||C}return P?()=>{o(P)}:vr}function o(d){if(od(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const p=Xy(d,n);n.splice(p,0,d),d.record.name&&!fl(d)&&r.set(d.record.name,d)}function c(d,p){let m,b={},_,E;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw Qn(1,{location:d});E=m.record.name,b=ae(ul(p.params,m.keys.filter(P=>!P.optional).concat(m.parent?m.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&ul(d.params,m.keys.map(P=>P.name))),_=m.stringify(b)}else if(d.path!=null)_=d.path,m=n.find(P=>P.re.test(_)),m&&(b=m.parse(_),E=m.record.name);else{if(m=p.name?r.get(p.name):n.find(P=>P.re.test(p.path)),!m)throw Qn(1,{location:d,currentLocation:p});E=m.record.name,b=ae({},p.params,d.params),_=m.stringify(b)}const R=[];let C=m;for(;C;)R.unshift(C.record),C=C.parent;return{name:E,path:_,params:b,matched:R,meta:Yy(R)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ul(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function fl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yy(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function hl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xy(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ld(t,e[i])<0?r=i:n=i+1}const s=Qy(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Qy(t){let e=t;for(;e=e.parent;)if(cd(e)&&ld(t,e)===0)return e}function cd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zy(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ed," "),o=i.indexOf("="),a=Fr(o<0?i:i.slice(0,o)),l=o<0?null:Fr(i.slice(o+1));if(a in e){let c=e[a];ut(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function pl(t){let e="";for(let n in t){const r=t[n];if(n=vy(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ut(r)?r.map(i=>i&&to(i)):[r&&to(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tb=Symbol(""),ml=Symbol(""),Zs=Symbol(""),Uo=Symbol(""),ro=Symbol("");function cr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(Qn(4,{from:n,to:e})):p instanceof Error?l(p):$y(p)?l(Qn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function Ei(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Qu(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Gt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ly(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&Gt(m,n,r,o,a,s)()}))}}return i}function gl(t){const e=at(Zs),n=at(Uo),r=tt(()=>{const l=jn(t.to);return e.resolve(l)}),s=tt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Xn.bind(null,u));if(p>-1)return p;const m=yl(l[c-2]);return c>1&&yl(u)===m&&d[d.length-1].path!==m?d.findIndex(Xn.bind(null,l[c-2])):p}),i=tt(()=>s.value>-1&&ob(n.params,r.value.params)),o=tt(()=>s.value>-1&&s.value===n.matched.length-1&&sd(n.params,r.value.params));function a(l={}){if(ib(l)){const c=e[jn(t.replace)?"replace":"push"](jn(t.to)).catch(vr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function nb(t){return t.length===1?t[0]:t}const rb=zc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gl,setup(t,{slots:e}){const n=Us(gl(t)),{options:r}=at(Zs),s=tt(()=>({[bl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nb(e.default(n));return t.custom?i:xo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sb=rb;function ib(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ob(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ut(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bl=(t,e,n)=>t??e??n,ab=zc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=at(ro),s=tt(()=>t.route||r.value),i=at(ml,0),o=tt(()=>{let c=jn(i);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=tt(()=>s.value.matched[o.value]);is(ml,tt(()=>o.value+1)),is(tb,a),is(ro,s);const l=Ee();return yr(()=>[l.value,a.value,t.name],([c,u,d],[p,m,b])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Xn(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return vl(n.default,{Component:p,route:c});const m=d.props[u],b=m?m===!0?c.params:typeof m=="function"?m(c):m:null,E=xo(p,ae({},b,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return vl(n.default,{Component:E,route:c})||E}}});function vl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lb=ab;function cb(t){const e=Gy(t.routes,t),n=t.parseQuery||Zy,r=t.stringifyQuery||pl,s=t.history,i=cr(),o=cr(),a=cr(),l=uh(Ht);let c=Ht;Fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_i.bind(null,I=>""+I),d=_i.bind(null,wy),p=_i.bind(null,Fr);function m(I,U){let L,j;return od(I)?(L=e.getRecordMatcher(I),j=U):j=I,e.addRoute(j,L)}function b(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function _(){return e.getRoutes().map(I=>I.record)}function E(I){return!!e.getRecordMatcher(I)}function R(I,U){if(U=ae({},U||l.value),typeof I=="string"){const y=wi(n,I,U.path),w=e.resolve({path:y.path},U),S=s.createHref(y.fullPath);return ae(y,w,{params:p(w.params),hash:Fr(y.hash),redirectedFrom:void 0,href:S})}let L;if(I.path!=null)L=ae({},I,{path:wi(n,I.path,U.path).path});else{const y=ae({},I.params);for(const w in y)y[w]==null&&delete y[w];L=ae({},I,{params:d(y)}),U.params=d(U.params)}const j=e.resolve(L,U),de=I.hash||"";j.params=u(p(j.params));const f=Ty(r,ae({},I,{hash:by(de),path:j.path})),h=s.createHref(f);return ae({fullPath:f,hash:de,query:r===pl?eb(I.query):I.query||{}},j,{redirectedFrom:void 0,href:h})}function C(I){return typeof I=="string"?wi(n,I,l.value.path):ae({},I)}function P(I,U){if(c!==I)return Qn(8,{from:U,to:I})}function O(I){return te(I)}function k(I){return O(ae(C(I),{replace:!0}))}function ee(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let j=typeof L=="function"?L(I):L;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=C(j):{path:j},j.params={}),ae({query:I.query,hash:I.hash,params:j.path!=null?{}:I.params},j)}}function te(I,U){const L=c=R(I),j=l.value,de=I.state,f=I.force,h=I.replace===!0,y=ee(L);if(y)return te(ae(C(y),{state:typeof y=="object"?ae({},de,y.state):de,force:f,replace:h}),U||L);const w=L;w.redirectedFrom=U;let S;return!f&&Sy(r,j,L)&&(S=Qn(16,{to:w,from:j}),ht(j,j,!0,!1)),(S?Promise.resolve(S):re(w,j)).catch(T=>Pt(T)?Pt(T,2)?T:Qe(T):z(T,w,j)).then(T=>{if(T){if(Pt(T,2))return te(ae({replace:h},C(T.to),{state:typeof T.to=="object"?ae({},de,T.to.state):de,force:f}),U||w)}else T=B(w,j,!0,h,de);return ue(w,j,T),T})}function ye(I,U){const L=P(I,U);return L?Promise.reject(L):Promise.resolve()}function K(I){const U=Mn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(I):I()}function re(I,U){let L;const[j,de,f]=ub(I,U);L=Ei(j.reverse(),"beforeRouteLeave",I,U);for(const y of j)y.leaveGuards.forEach(w=>{L.push(Gt(w,I,U))});const h=ye.bind(null,I,U);return L.push(h),Ze(L).then(()=>{L=[];for(const y of i.list())L.push(Gt(y,I,U));return L.push(h),Ze(L)}).then(()=>{L=Ei(de,"beforeRouteUpdate",I,U);for(const y of de)y.updateGuards.forEach(w=>{L.push(Gt(w,I,U))});return L.push(h),Ze(L)}).then(()=>{L=[];for(const y of f)if(y.beforeEnter)if(ut(y.beforeEnter))for(const w of y.beforeEnter)L.push(Gt(w,I,U));else L.push(Gt(y.beforeEnter,I,U));return L.push(h),Ze(L)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),L=Ei(f,"beforeRouteEnter",I,U,K),L.push(h),Ze(L))).then(()=>{L=[];for(const y of o.list())L.push(Gt(y,I,U));return L.push(h),Ze(L)}).catch(y=>Pt(y,8)?y:Promise.reject(y))}function ue(I,U,L){a.list().forEach(j=>K(()=>j(I,U,L)))}function B(I,U,L,j,de){const f=P(I,U);if(f)return f;const h=U===Ht,y=Fn?history.state:{};L&&(j||h?s.replace(I.fullPath,ae({scroll:h&&y&&y.scroll},de)):s.push(I.fullPath,de)),l.value=I,ht(I,U,L,h),Qe()}let ie;function we(){ie||(ie=s.listen((I,U,L)=>{if(!Qr.listening)return;const j=R(I),de=ee(j);if(de){te(ae(de,{replace:!0,force:!0}),j).catch(vr);return}c=j;const f=l.value;Fn&&Ny(il(f.fullPath,L.delta),Qs()),re(j,f).catch(h=>Pt(h,12)?h:Pt(h,2)?(te(ae(C(h.to),{force:!0}),j).then(y=>{Pt(y,20)&&!L.delta&&L.type===Ur.pop&&s.go(-1,!1)}).catch(vr),Promise.reject()):(L.delta&&s.go(-L.delta,!1),z(h,j,f))).then(h=>{h=h||B(j,f,!1),h&&(L.delta&&!Pt(h,8)?s.go(-L.delta,!1):L.type===Ur.pop&&Pt(h,20)&&s.go(-1,!1)),ue(j,f,h)}).catch(vr)}))}let Oe=cr(),V=cr(),x;function z(I,U,L){Qe(I);const j=V.list();return j.length?j.forEach(de=>de(I,U,L)):console.error(I),Promise.reject(I)}function Ne(){return x&&l.value!==Ht?Promise.resolve():new Promise((I,U)=>{Oe.add([I,U])})}function Qe(I){return x||(x=!I,we(),Oe.list().forEach(([U,L])=>I?L(I):U()),Oe.reset()),I}function ht(I,U,L,j){const{scrollBehavior:de}=t;if(!Fn||!de)return Promise.resolve();const f=!L&&My(il(I.fullPath,0))||(j||!L)&&history.state&&history.state.scroll||null;return Ao().then(()=>de(I,U,f)).then(h=>h&&Oy(h)).catch(h=>z(h,I,U))}const Ue=I=>s.go(I);let Nn;const Mn=new Set,Qr={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:E,getRoutes:_,resolve:R,options:t,push:O,replace:k,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:Ne,install(I){const U=this;I.component("RouterLink",sb),I.component("RouterView",lb),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>jn(l)}),Fn&&!Nn&&l.value===Ht&&(Nn=!0,O(s.location).catch(de=>{}));const L={};for(const de in Ht)Object.defineProperty(L,de,{get:()=>l.value[de],enumerable:!0});I.provide(Zs,U),I.provide(Uo,xc(L)),I.provide(ro,l);const j=I.unmount;Mn.add(I),I.unmount=function(){Mn.delete(I),Mn.size<1&&(c=Ht,ie&&ie(),ie=null,l.value=Ht,Nn=!1,x=!1),j()}}};function Ze(I){return I.reduce((U,L)=>U.then(()=>K(L)),Promise.resolve())}return Qr}function ub(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xn(c,l))||s.push(l))}return[n,r,s]}function ud(){return at(Zs)}function db(t){return at(Uo)}const fb={name:"BaseButton",props:{labelText:{type:String,required:!0},variant:{type:String,default:"primary",validator:t=>["primary","secondary","outline"].includes(t)},disabled:{type:Boolean,default:!1}},computed:{variantClasses(){switch(this.variant){case"primary":return"bg-green-600 text-white hover:bg-green-700";case"secondary":return"bg-green-200 text-green-800 hover:bg-green-300";case"outline":return"border border-green-600 text-white-600 hover:bg-green-50"}}}},hb=["disabled"];function pb(t,e,n,r,s,i){return H(),J("button",{class:ze(["px-6 py-3 rounded-lg font-semibold transition-all duration-300",i.variantClasses,{"opacity-50 cursor-not-allowed":n.disabled}]),disabled:n.disabled,onClick:e[0]||(e[0]=o=>t.$emit("click"))},X(n.labelText),11,hb)}const zn=Xe(fb,[["render",pb]]),mb={name:"Input",props:{label:{type:String,default:""},type:{type:String,default:"text"},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!1}},emits:["update:modelValue"]},gb={class:"mb-4"},yb={key:0,class:"block text-sm font-medium text-gray-700 mb-2"},bb=["type","value","placeholder","required"];function vb(t,e,n,r,s,i){return H(),J("div",gb,[n.label?(H(),J("label",yb,X(n.label),1)):Pe("",!0),g("input",{type:n.type,value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),placeholder:n.placeholder,required:n.required,class:"block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"},null,40,bb)])}const Jt=Xe(mb,[["render",vb]]),_b={name:"BaseSelect",props:{labelText:{type:String,default:""},modelValue:{type:[String,Number],default:""},options:{type:Array,required:!0}},emits:["update:modelValue"]},wb={class:"mb-4"},Eb={key:0,class:"block text-gray-700 text-sm font-bold mb-2"},Ib=["value"],Tb=["value"];function Sb(t,e,n,r,s,i){return H(),J("div",wb,[n.labelText?(H(),J("label",Eb,X(n.labelText),1)):Pe("",!0),g("select",{value:n.modelValue,onInput:e[0]||(e[0]=o=>t.$emit("update:modelValue",o.target.value)),class:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"},[(H(!0),J(ve,null,Lt(n.options,o=>(H(),J("option",{key:o,value:o},X(o),9,Tb))),128))],40,Ib)])}const Cb=Xe(_b,[["render",Sb]]),Ab={components:{BaseButton:zn,BaseInput:Jt,BaseSelect:Cb},data(){return{loanAmount:null,interestRate:null,loanTerm:null,monthlyPayment:null,currencies:[],loading:!0,error:null,converterAmount:null,fromCurrency:"USD",toCurrency:"AMD",convertedAmount:null,topCurrencies:[{code:"USD",name:"US Dollar",rateToAMD:.0026,change:.5},{code:"EUR",name:"Euro",rateToAMD:.0028,change:-.3},{code:"RUB",name:"Russian Ruble",rateToAMD:19e-5,change:.2},{code:"GBP",name:"British Pound",rateToAMD:.0032,change:.7},{code:"CHF",name:"Swiss Franc",rateToAMD:.003,change:.1}]}},computed:{availableCurrencyOptions(){const t=["AMD"];return this.currencies&&this.currencies.length>0&&this.currencies.forEach(e=>{t.includes(e.code)||t.push(e.code)}),t}},methods:{calculateMonthlyPayment(){if(!this.loanAmount||!this.interestRate||!this.loanTerm)return;const t=this.interestRate/100/12,e=this.loanTerm*12;this.monthlyPayment=this.loanAmount*t/(1-Math.pow(1+t,-e))},convertCurrency(){if(!this.converterAmount||!this.currencies.length)return;if(this.fromCurrency===this.toCurrency){this.convertedAmount=this.converterAmount;return}const t=r=>{if(r==="AMD")return 1;const s=this.currencies.find(i=>i.code===r);return s?s.rate:null},e=t(this.fromCurrency),n=t(this.toCurrency);if(e===null||n===null){console.error("Currency rate not found");return}if(this.fromCurrency==="AMD")this.convertedAmount=this.converterAmount/n;else if(this.toCurrency==="AMD")this.convertedAmount=this.converterAmount*e;else{const r=this.converterAmount*e;this.convertedAmount=r/n}},async fetchCurrencyRates(){try{const t=await be.get("https://loanly-59855e6cf246.herokuapp.com/api/currencies");console.log(t.data),this.currencies=t.data,this.loading=!1}catch(t){this.error="Failed to load currency rates",this.loading=!1,console.error("Currency fetch error:",t)}}},mounted(){this.fetchCurrencyRates()}},Rb={class:"container mx-auto p-6"},Pb={class:"container mx-auto p-6"},kb={key:0,class:"text-center"},xb={key:1,class:"text-red-600"},Ob={key:2,class:"grid md:grid-cols-3 gap-6"},Nb={class:"flex justify-between items-center"},Mb={class:"text-xl font-semibold"},Db={class:"text-gray-600"},Lb={class:"text-right"},Fb={class:"grid md:grid-cols-2 gap-8 mb-12"},Ub={class:"bg-white p-8 rounded-lg shadow-md"},$b={class:"space-y-4"},Bb={class:"grid grid-cols-2 gap-4"},Vb={key:0,class:"mt-6 text-center"},jb={class:"text-2xl font-bold text-primary-600"},Hb={class:"bg-white p-8 rounded-lg shadow-md"},qb={class:"space-y-4"},Wb={key:0,class:"mt-6 text-center"},zb={class:"text-2xl font-bold text-primary-600"};function Kb(t,e,n,r,s,i){const o=Ge("BaseInput"),a=Ge("BaseSelect"),l=Ge("BaseButton");return H(),J("div",Rb,[g("div",Pb,[e[7]||(e[7]=g("h2",{class:"text-3xl font-bold mb-6 text-gray-800"}," DramStream ",-1)),s.loading?(H(),J("div",kb,e[6]||(e[6]=[g("p",null,"Loading currency rates...",-1)]))):s.error?(H(),J("div",xb,X(s.error),1)):(H(),J("div",Ob,[(H(!0),J(ve,null,Lt(s.currencies,c=>(H(),J("div",{key:c.code,class:"bg-white p-6 rounded-lg shadow-md"},[g("div",Nb,[g("div",null,[g("h3",Mb,X(c.code),1),g("p",Db,X(c.name),1)]),g("div",Lb,[g("p",{class:ze(["text-2xl font-bold",c.change>=0?"text-green-600":"text-red-600"])}," = "+X(c.rate.toFixed(4))+" AMD ",3),g("p",{class:ze(["text-sm",c.change>=0?"text-green-500":"text-red-500"])},X(c.change>=0?"+":"")+X(c.change.toFixed(2))+"% ",3)])])]))),128))]))]),g("div",Fb,[g("div",null,[e[8]||(e[8]=g("h2",{class:"text-3xl font-bold mb-6 text-gray-800"},"Currency Converter",-1)),g("div",Ub,[g("div",$b,[Z(o,{labelText:"Amount",type:"number",modelValue:s.converterAmount,"onUpdate:modelValue":e[0]||(e[0]=c=>s.converterAmount=c),placeholder:"Enter amount to convert"},null,8,["modelValue"]),g("div",Bb,[Z(a,{labelText:"From Currency",options:i.availableCurrencyOptions,modelValue:s.fromCurrency,"onUpdate:modelValue":e[1]||(e[1]=c=>s.fromCurrency=c)},null,8,["options","modelValue"]),Z(a,{labelText:"To Currency",options:i.availableCurrencyOptions,modelValue:s.toCurrency,"onUpdate:modelValue":e[2]||(e[2]=c=>s.toCurrency=c)},null,8,["options","modelValue"])]),Z(l,{labelText:"Convert",onClick:i.convertCurrency,class:"w-full"},null,8,["onClick"])]),s.convertedAmount!==null?(H(),J("div",Vb,[g("p",jb,X(s.converterAmount)+" "+X(s.fromCurrency)+" = "+X(s.convertedAmount.toFixed(4))+" "+X(s.toCurrency),1)])):Pe("",!0)])]),g("div",null,[e[9]||(e[9]=g("h2",{class:"text-3xl font-bold mb-6 text-gray-800"},"Loan Calculator",-1)),g("div",Hb,[g("div",qb,[Z(o,{labelText:"Loan Amount (AMD)",type:"number",modelValue:s.loanAmount,"onUpdate:modelValue":e[3]||(e[3]=c=>s.loanAmount=c),placeholder:"Enter loan amount in AMD"},null,8,["modelValue"]),Z(o,{labelText:"Interest Rate (%)",type:"number",modelValue:s.interestRate,"onUpdate:modelValue":e[4]||(e[4]=c=>s.interestRate=c),placeholder:"Annual interest rate"},null,8,["modelValue"]),Z(o,{labelText:"Loan Term (Years)",type:"number",modelValue:s.loanTerm,"onUpdate:modelValue":e[5]||(e[5]=c=>s.loanTerm=c),placeholder:"Loan duration"},null,8,["modelValue"]),Z(l,{labelText:"Calculate Monthly Payment",onClick:i.calculateMonthlyPayment,class:"w-full"},null,8,["onClick"])]),s.monthlyPayment?(H(),J("div",Wb,[g("p",zb," Monthly Payment: "+X(s.monthlyPayment.toFixed(2))+" AMD ",1)])):Pe("",!0)])])])])}const Gb=Xe(Ab,[["render",Kb],["__scopeId","data-v-313bb7eb"]]),Jb={name:"Card",components:{BaseButton:zn},props:{title:{type:String,required:!0},description:{type:String,default:""},actionLabel:{type:String,default:""}},emits:["action"]},Yb={class:"bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"},Xb={class:"p-6"},Qb={class:"text-xl font-semibold text-primary-600 mb-2"},Zb={class:"text-gray-600"},ev={key:0,class:"mt-4"};function tv(t,e,n,r,s,i){const o=Ge("BaseButton");return H(),J("div",Yb,[g("div",Xb,[g("h3",Qb,X(n.title),1),g("p",Zb,X(n.description),1),eu(t.$slots,"default"),n.actionLabel?(H(),J("div",ev,[Z(o,{labelText:"View",variant:"outline",onClick:e[0]||(e[0]=a=>t.$emit("action"))})])):Pe("",!0)])])}const nv=Xe(Jb,[["render",tv]]),rv={name:"Modal",props:{title:{type:String,required:!0},description:{type:String,required:!0}},emits:["close"],mounted(){window.addEventListener("keydown",this.handleEscapeKey),document.body.style.overflow="hidden"},beforeUnmount(){window.removeEventListener("keydown",this.handleEscapeKey),document.body.style.overflow="auto"},methods:{handleEscapeKey(t){t.key==="Escape"&&this.$emit("close")}}},sv={class:"relative w-auto max-w-lg mx-auto my-6"},iv={class:"relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"},ov={class:"flex items-start justify-between p-5 border-b border-solid rounded-t border-gray-300"},av={class:"text-2xl font-semibold text-primary-600"},lv={class:"relative flex-auto p-6"},cv={class:"my-4 text-gray-600 text-lg leading-relaxed"},uv={class:"flex items-center justify-end p-6 border-t border-solid rounded-b border-gray-300"};function dv(t,e,n,r,s,i){const o=Ge("Button");return H(),J("div",{class:"fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none",onKeydown:e[3]||(e[3]=No(a=>t.$emit("close"),["esc"])),tabindex:"0"},[g("div",sv,[g("div",iv,[g("div",ov,[g("h3",av,X(n.title),1),g("button",{class:"float-right p-1 ml-auto text-3xl font-semibold leading-none text-gray-400 bg-transparent border-0 outline-none focus:outline-none hover:text-gray-600",onClick:e[0]||(e[0]=a=>t.$emit("close"))}," × ")]),g("div",lv,[g("p",cv,X(n.description),1)]),g("div",uv,[Z(o,{label:"Close",onClick:e[1]||(e[1]=a=>t.$emit("close"))})])])]),g("div",{class:"fixed inset-0 z-40 bg-black opacity-25",onClick:e[2]||(e[2]=a=>t.$emit("close"))})],32)}const fv=Xe(rv,[["render",dv]]);class _l{constructor(){this.geocodeCache={},this.bankBranches={}}loadBranchData(e,n){return this.bankBranches[e]||(this.bankBranches[e]=n.map(r=>({id:r.ID,name:r.Name,address:r.Address,lat:null,lng:null}))),this.bankBranches[e]}async getBranches(e,n=!0,r=null){if(!this.bankBranches[e])throw new Error(`No branch data loaded for bank: ${e}`);let s=[...this.bankBranches[e]];if(r&&r<s.length&&(s=this.getRandomSubset(s,r)),n){for(const i of s)if(i.lat===null||i.lng===null)try{const o=await this.geocodeAddress(i.address);i.lat=o.lat,i.lng=o.lng;const a=this.bankBranches[e].find(l=>l.id===i.id);a&&(a.lat=o.lat,a.lng=o.lng)}catch(o){console.error(`Failed to geocode address for ${i.name}:`,o)}}return s}getRandomSubset(e,n){return[...e].sort(()=>.5-Math.random()).slice(0,n)}geocodeAddress(e){return this.geocodeCache[e]?Promise.resolve(this.geocodeCache[e]):new Promise((n,r)=>{if(!window.google||!window.google.maps){r(new Error("Google Maps API not loaded"));return}const s=new google.maps.Geocoder,i=e.toLowerCase().includes("armenia")?e:`${e}, Armenia`;s.geocode({address:i},(o,a)=>{if(a==="OK"){const l={lat:o[0].geometry.location.lat(),lng:o[0].geometry.location.lng()};this.geocodeCache[e]=l,n(l)}else a==="OVER_QUERY_LIMIT"?setTimeout(()=>{this.geocodeAddress(e).then(n).catch(r)},2e3):r(new Error(`Geocoding failed: ${a}`))})})}static parseCSV(e){const n=e.split(`
`),r=n[0].split(",").map(s=>s.trim());return n.slice(1).map(s=>{const i=s.split(",").map(o=>o.trim());return r.reduce((o,a,l)=>(o[a]=i[l].replace(/^"|"$/g,""),o),{})})}saveCache(){try{localStorage.setItem("geocodeCache",JSON.stringify(this.geocodeCache))}catch(e){console.warn("Failed to save geocode cache to localStorage",e)}}loadCache(){try{const e=localStorage.getItem("geocodeCache");e&&(this.geocodeCache=JSON.parse(e))}catch(e){console.warn("Failed to load geocode cache from localStorage",e)}}}const hv={components:{BaseCard:nv,Modal:fv},data(){return{selectedBank:null,banks:[],loading:!0,error:null,defaultLogoPath:"/default-bank-logo.png",showFullMap:!1,currentMapBank:null,maps:{},markers:{},fullMap:null,googleMapsReady:!1,branchesManager:new _l}},async mounted(){this.branchesManager.loadCache(),await this.fetchBanks(),await this.loadBranchData(),this.loadGoogleMapsScript()},beforeDestroy(){this.branchesManager.saveCache()},methods:{async fetchBanks(){try{const t=await be.get("https://loanly-59855e6cf246.herokuapp.com/banks");this.banks=t.data,this.loading=!1}catch(t){this.error="Failed to fetch banks. Please try again later.",this.loading=!1,console.error("Error fetching banks:",t)}},async loadBranchData(){for(const t of this.banks)try{const e=await be.get(`https://loanly-59855e6cf33246.herokuapp.com/branches/${t._id}_branches.csv`),n=_l.parseCSV(e.data);this.branchesManager.loadBranchData(t._id,n);const r=Math.floor(Math.random()*3)+3;t.branches=await this.branchesManager.getBranches(t._id,!0,r),t.branches=(t.branches||[]).map(s=>({...s,lat:typeof s.lat=="string"?parseFloat(s.lat):s.lat,lng:typeof s.lng=="string"?parseFloat(s.lng):s.lng})).filter(s=>!isNaN(s.lat)&&!isNaN(s.lng))}catch(e){console.error(`Error processing branches for ${t._id}:`,e),t.branches=this.generateDefaultBranches(10,15)}this.googleMapsReady&&this.initializeAllMiniMaps()},generateDefaultBranches(t,e){const n=Math.floor(Math.random()*(e-t+1))+t,r=[],s={lat:40.179,lng:44.499};for(let i=0;i<n;i++){const o={id:`branch-${i}`,name:`Branch ${i+1}`,lat:s.lat+(Math.random()-.5)*.05,lng:s.lng+(Math.random()-.5)*.05,address:`Random Street ${Math.floor(Math.random()*100)+1}, Yerevan`};r.push(o)}return r},loadGoogleMapsScript(){if(!window.google||!window.google.maps){const t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4RSoqhKRlU-DwYe_KMXo38AtQamMs2k&callback=initVueAppMaps",t.async=!0,t.defer=!0,window.initVueAppMaps=()=>{this.googleMapsReady=!0,this.banks.length>0&&this.initializeAllMiniMaps()},document.head.appendChild(t)}else this.googleMapsReady=!0,this.initializeAllMiniMaps()},initializeAllMiniMaps(){!this.googleMapsReady||!this.banks.length||this.$nextTick(()=>{console.log(this.banks),this.banks.forEach(t=>{console.log(this.maps),this.initializeMiniMap(t)})})},initializeMiniMap(t){const e=document.getElementById(`mini-map-${t._id}`);if(!e){console.error(`Map container not found for bank ${t._id}`);return}e.innerHTML="";const n=(t.branches||[]).map(i=>{const o=typeof i.lat=="string"?parseFloat(i.lat):i.lat,a=typeof i.lng=="string"?parseFloat(i.lng):i.lng;return{...i,lat:!isNaN(o)&&Math.abs(o)<=90?o:40.1792,lng:!isNaN(a)&&Math.abs(a)<=180?a:44.4991}}).filter(i=>i.lat&&i.lng),r={lat:40.1792,lng:44.4991},s=new google.maps.Map(e,{zoom:12,center:n.length>0?{lat:n[0].lat,lng:n[0].lng}:r,disableDefaultUI:!0});if(n.forEach(i=>{new google.maps.Marker({position:{lat:i.lat,lng:i.lng},map:s,title:i.name||i.address,icon:{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png",scaledSize:new google.maps.Size(20,20)}})}),n.length>1){const i=new google.maps.LatLngBounds;n.forEach(o=>{i.extend(new google.maps.LatLng(o.lat,o.lng))}),s.fitBounds(i,20)}this.maps[t._id]=s},openFullMap(t){this.currentMapBank=t,this.showFullMap=!0,this.$nextTick(()=>{const e=document.getElementById("full-map");if(!e||!window.google)return;const n=(t.branches||[]).filter(s=>s.lat&&s.lng&&!isNaN(s.lat)&&!isNaN(s.lng));this.fullMap=new google.maps.Map(e,{zoom:13,center:n.length>0?{lat:n[0].lat,lng:n[0].lng}:{lat:40.1792,lng:44.4991}});const r=new google.maps.InfoWindow;t.branches.forEach(s=>{const i=new google.maps.Marker({position:{lat:s.lat,lng:s.lng},map:this.fullMap,title:s.name,animation:google.maps.Animation.DROP});i.addListener("click",()=>{r.setContent(`
              <div>
                <h3 style="font-weight: bold; margin-bottom: 5px;">${s.name}</h3>
                <p>${s.address}</p>
              </div>
            `),r.open(this.fullMap,i)})}),this.fullMap.fitBounds(bounds,{top:50,right:50,bottom:50,left:50})})},closeFullMap(){this.showFullMap=!1,this.fullMap=null,this.currentMapBank=null},showBankDetails(t){this.selectedBank=t},getBankDetailsDescription(t){return`
        Bank Name: ${t.bankName}
        Minimum Credit Score: ${t.minimumScore}
        Interest Rate: ${t.percentage}%
        Address: ${t.address}
        Number of Branches: ${t.branches?t.branches.length:0}
      `},handleImageError(t,e){t.target.src=this.defaultLogoPath,console.warn(`Failed to load logo for ${e.bankName}`)}}},pv={key:0,class:"text-center text-gray-600"},mv={key:1,class:"text-center text-red-600"},gv={key:2,class:"grid md:grid-cols-3 gap-6"},yv={class:"flex items-center mb-4"},bv={class:"mr-4 flex-shrink-0"},vv={class:"w-16 h-16 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shadow-sm"},_v=["src","alt"],wv={class:"text-xl font-bold text-gray-800"},Ev={class:"text-sm text-gray-600"},Iv={class:"mt-4"},Tv={class:"flex justify-between text-sm text-gray-600"},Sv={class:"mt-4 relative"},Cv={class:"h-48 border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50"},Av=["id"],Rv=["onClick"],Pv={class:"flex justify-center mb-4"},kv={class:"w-24 h-24 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shadow-md"},xv=["src","alt"],Ov={key:4,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Nv={class:"bg-white rounded-lg p-6 w-11/12 max-w-4xl mx-auto max-h-[90vh] flex flex-col"},Mv={class:"flex justify-between items-center mb-4"},Dv={class:"text-xl font-bold text-gray-800"};function Lv(t,e,n,r,s,i){const o=Ge("BaseCard"),a=Ge("Modal");return H(),J("div",null,[e[6]||(e[6]=g("h2",{class:"text-4xl font-bold mb-8 text-center text-gray-800"}," Available Banks ",-1)),s.loading?(H(),J("div",pv," Loading banks... ")):s.error?(H(),J("div",mv,X(s.error),1)):(H(),J("div",gv,[(H(!0),J(ve,null,Lt(s.banks,l=>(H(),An(o,{key:l._id,actionLabel:"Learn More",onAction:c=>i.showBankDetails(l)},{default:Tn(()=>[g("div",yv,[g("div",bv,[g("div",vv,[g("img",{src:`https://loanly-59855e6cf246.herokuapp.com/${l.img_path}`,alt:`${l.bankName} logo`,class:"w-12 h-12 object-contain p-1.5"},null,8,_v)])]),g("div",null,[g("h3",wv,X(l.bankName),1),g("p",Ev," Minimum Score: "+X(l.minimumScore)+" | Interest: "+X(l.percentage),1)])]),g("div",Iv,[g("div",Tv,[g("span",null,"Address: "+X(l.address),1)])]),g("div",Sv,[g("div",Cv,[g("div",{id:`mini-map-${l._id}`,class:"w-full h-full",style:{"min-height":"180px"}},null,8,Av)]),g("button",{onClick:Oo(c=>i.openFullMap(l),["stop"]),class:"absolute bottom-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 focus:outline-none",title:"Expand map"},e[3]||(e[3]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"})],-1)]),8,Rv)])]),_:2},1032,["onAction"]))),128))])),s.selectedBank?(H(),An(a,{key:3,title:s.selectedBank.bankName,description:i.getBankDetailsDescription(s.selectedBank),onClose:e[1]||(e[1]=l=>s.selectedBank=null)},{default:Tn(()=>[g("div",Pv,[g("div",kv,[g("img",{src:`https://loanly-59855e6cf246.herokuapp.com/${s.selectedBank.img_path}`,alt:`${s.selectedBank.bankName} logo`,class:"w-20 h-20 object-contain",onError:e[0]||(e[0]=l=>i.handleImageError(l,s.selectedBank))},null,40,xv)])])]),_:1},8,["title","description"])):Pe("",!0),s.showFullMap?(H(),J("div",Ov,[g("div",Nv,[g("div",Mv,[g("h3",Dv,X(s.currentMapBank?s.currentMapBank.bankName:"")+" Branches ",1),g("button",{onClick:e[2]||(e[2]=(...l)=>i.closeFullMap&&i.closeFullMap(...l)),class:"text-gray-500 hover:text-gray-700 focus:outline-none"},e[4]||(e[4]=[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),e[5]||(e[5]=g("div",{class:"flex-1 min-h-[400px]",id:"full-map"},null,-1))])])):Pe("",!0)])}const Fv=Xe(hv,[["render",Lv],["__scopeId","data-v-a3f35784"]]),Uv="/assets/banks-illustration-CMHhYTEf.jpeg",$v={name:"AboutUs",data(){return{teamMembers:[{name:"Slavik Nikolyan",role:"CEO & Founder"}]}}},Bv={class:"about-us-container"},Vv={class:"mt-16 text-center"},jv={class:"grid md:grid-cols-1 gap-8"},Hv={class:"text-center"},qv={class:"text-xl font-semibold text-primary-600"},Wv={class:"text-gray-500"};function zv(t,e,n,r,s,i){return H(),J("div",Bv,[e[1]||(e[1]=Eu('<div class="grid md:grid-cols-2 gap-12 items-center"><div><h2 class="text-4xl font-bold mb-6 text-gray-800"> About LoanLy </h2><div class="space-y-4 text-gray-600"><p> LoanLy is a modern financial technology platform designed to simplify the loan application process for individuals and businesses. </p><p> Our mission is to provide transparent, accessible, and efficient loan services that empower our clients to achieve their financial goals. </p><div class="pt-4"><h3 class="text-2xl font-semibold mb-3 text-primary-600"> Our Values </h3><ul class="list-disc list-inside space-y-2"><li>Transparency in financial services</li><li>Customer-centric approach</li><li>Advanced technological solutions</li><li>Fair and competitive loan options</li></ul></div></div></div><div><img src="'+Uv+'" alt="About Us Illustration" class="w-full rounded-lg shadow-lg"></div></div>',1)),g("div",Vv,[e[0]||(e[0]=g("h3",{class:"text-3xl font-bold mb-6 text-gray-800"}," Our Team ",-1)),g("div",jv,[(H(!0),J(ve,null,Lt(s.teamMembers,o=>(H(),J("div",{key:o.name,class:"bg-white p-6 rounded-lg shadow-md"},[g("div",Hv,[g("h4",qv,X(o.name),1),g("p",Wv,X(o.role),1)])]))),128))])])])}const Kv=Xe($v,[["render",zv]]),Gv={name:"ApplyLoan",components:{BaseInput:Jt,BaseButton:zn},setup(){const t=ud(),e=Ee(!1),n=Ee([]),r=Ee(null),s=Ee(!1),i=Ee({firstName:"",lastName:"",identityCardNumber:"",loanAmount:1e6,loanDuration:36});js(()=>{(()=>{document.querySelectorAll('input[type="range"]').forEach(E=>{E.style.setProperty("--tw-ring-color","green");const R=document.createElement("style");R.textContent=`
                        input[type="range"]::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 20px;
                            height: 20px;
                            background: green;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                        input[type="range"]::-moz-range-thumb {
                            width: 20px;
                            height: 20px;
                            background: green;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                    `,document.head.appendChild(R)})})()});const o=b=>new Intl.NumberFormat("en-US",{style:"currency",currency:"AMD",minimumFractionDigits:0,maximumFractionDigits:0}).format(b),a=()=>{i.value.identityCardNumber=i.value.identityCardNumber.replace(/\D/g,"").slice(0,8)},l=b=>{const _=parseFloat(i.value.loanAmount),E=parseFloat(i.value.loanDuration),R=parseFloat(b.percentage);if(isNaN(_)||isNaN(E)||isNaN(R))return console.error("Invalid input for monthly payment calculation"),"0";const C=R/100/12,P=E,O=_*(C*Math.pow(1+C,P))/(Math.pow(1+C,P)-1);return Math.round(O).toLocaleString("en-US")},c=()=>parseFloat((Math.random()*4+6).toFixed(2)),u=async b=>{try{return(await be.get("https://loanly-59855e6cf246.herokuapp.com/banks")).data}catch(_){return console.error("Error fetching banks:",_),[]}},d=()=>{const _=["firstName","lastName","identityCardNumber","loanAmount","loanDuration"].every(R=>{const C=i.value[R];return C!==null&&C!==""}),E=i.value.identityCardNumber.length===8;return!_||!E?(s.value||(alert("Please fill in all required fields correctly. Identity card number must be 8 digits."),s.value=!0),!1):(s.value=!1,!0)};return{application:i,submitApplication:async()=>{d()&&(e.value=!0,setTimeout(async()=>{r.value=c(),n.value=await u(r.value),e.value=!1},2500))},selectBank:b=>{t.push({name:"Form",params:{bankId:b._id},query:{firstName:i.value.firstName,lastName:i.value.lastName,identityCardNumber:i.value.identityCardNumber,loanAmount:i.value.loanAmount,loanDuration:i.value.loanDuration,bankName:b.bankName,interestRate:b.percentage,monthlyPayment:l(b)}})},loading:e,eligibleBanks:n,userScore:r,formatIdentityCardNumber:a,formatCurrency:o,calculateMonthlyPayment:l}}},Jv={class:"apply-loan-container"},Yv={class:"max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8"},Xv={class:"grid md:grid-cols-2 gap-6"},Qv={class:"mb-4"},Zv={class:"text-center mt-2"},e_={class:"mb-4"},t_={class:"text-center mt-2"},n_={class:"text-center"},r_={key:0,class:"flex justify-center items-center my-4"},s_={key:0,class:"mt-6"},i_={class:"grid gap-4"},o_={style:{display:"flex"}},a_=["src","alt"],l_={class:"font-bold"};function c_(t,e,n,r,s,i){const o=Ge("BaseInput"),a=Ge("BaseButton");return H(),J("div",Jv,[g("div",Yv,[e[10]||(e[10]=g("h2",{class:"text-4xl font-bold mb-8 text-center text-gray-800"}," Loan Application ",-1)),g("form",{onSubmit:e[5]||(e[5]=Oo((...l)=>r.submitApplication&&r.submitApplication(...l),["prevent"])),class:"space-y-6"},[g("div",Xv,[Z(o,{label:"First Name",modelValue:r.application.firstName,"onUpdate:modelValue":e[0]||(e[0]=l=>r.application.firstName=l),placeholder:"Enter your first name",required:""},null,8,["modelValue"]),Z(o,{label:"Last Name",modelValue:r.application.lastName,"onUpdate:modelValue":e[1]||(e[1]=l=>r.application.lastName=l),placeholder:"Enter your last name",required:""},null,8,["modelValue"])]),g("div",null,[Z(o,{label:"Identity Card Number",modelValue:r.application.identityCardNumber,"onUpdate:modelValue":e[2]||(e[2]=l=>r.application.identityCardNumber=l),placeholder:"Enter 8-digit ID number",maxlength:8,onInput:r.formatIdentityCardNumber,required:""},null,8,["modelValue","onInput"])]),g("div",Qv,[e[6]||(e[6]=g("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Loan Amount (AMD) ",-1)),_n(g("input",{type:"range","onUpdate:modelValue":e[3]||(e[3]=l=>r.application.loanAmount=l),min:"100000",max:"10000000",step:"50000",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{"-webkit-appearance":"none",background:"bg-gray-200"}},null,512),[[Mr,r.application.loanAmount]]),g("div",Zv,X(r.formatCurrency(r.application.loanAmount)),1)]),g("div",e_,[e[7]||(e[7]=g("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Loan Duration (Months) ",-1)),_n(g("input",{type:"range","onUpdate:modelValue":e[4]||(e[4]=l=>r.application.loanDuration=l),min:"12",max:"120",step:"1",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",style:{"-webkit-appearance":"none",background:"bg-gray-200"}},null,512),[[Mr,r.application.loanDuration]]),g("div",t_,X(r.application.loanDuration)+" Months ",1)]),g("div",n_,[Z(a,{labelText:"See available banks",variant:"primary",onClick:r.submitApplication},null,8,["onClick"])]),r.loading?(H(),J("div",r_,e[8]||(e[8]=[g("div",{class:"animate-spin rounded-full h-8 w-8 border-t-2 border-green-500"},null,-1)]))):Pe("",!0)],32),r.eligibleBanks.length?(H(),J("div",s_,[e[9]||(e[9]=g("h3",{class:"text-2xl font-semibold mb-4 text-center"},"Eligible Banks",-1)),g("div",i_,[(H(!0),J(ve,null,Lt(r.eligibleBanks,l=>(H(),J("div",{key:l._id,class:"border rounded-lg p-4 flex justify-between items-center"},[g("div",null,[g("div",o_,[g("img",{src:`https://loanly-59855e6cf246.herokuapp.com/${l.img_path}`,alt:`${l.bankName} logo`,class:"w-12 h-12 object-contain p-1.5"},null,8,a_),g("h4",l_,X(l.bankName),1)]),g("p",null,"Interest Rate: "+X(l.percentage),1),g("p",null,"Monthly Payment: "+X(r.calculateMonthlyPayment(l))+" AMD",1)]),Z(a,{labelText:"Select Bank",onClick:c=>r.selectBank(l),variant:"outline"},null,8,["onClick"])]))),128))])])):Pe("",!0)])])}const u_=Xe(Gv,[["render",c_],["__scopeId","data-v-05d4f579"]]),d_=()=>{};var wl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},f_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new h_;const p=i<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const b=c<<6&192|d;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p_=function(t){const e=dd(t);return fd.encodeByteArray(e,!0)},hd=function(t){return p_(t).replace(/\./g,"")},pd=function(t){try{return fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=()=>m_().__FIREBASE_DEFAULTS__,y_=()=>{if(typeof process>"u"||typeof wl>"u")return;const t=wl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pd(t[1]);return e&&JSON.parse(e)},$o=()=>{try{return d_()||g_()||y_()||b_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=$o())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},md=()=>{var t;return(t=$o())===null||t===void 0?void 0:t.config},gd=t=>{var e;return(e=$o())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function E_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T_(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function S_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=C_,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?A_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new St(s,a,r)}}function A_(t,e){return t.replace(R_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const R_=/\{\$([^}]+)}/g;function P_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(El(i)&&El(o)){if(!Zn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function El(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k_(t,e){const n=new x_(t,e);return n.subscribe.bind(n)}class x_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ii),s.error===void 0&&(s.error=Ii),s.complete===void 0&&(s.complete=Ii);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ii(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=1e3,M_=2,D_=4*60*60*1e3,L_=.5;function Il(t,e=N_,n=M_){const r=e*Math.pow(n,t),s=Math.round(L_*r*(Math.random()-.5)*2);return Math.min(D_,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}class Tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new __;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($_(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:U_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U_(t){return t===bn?void 0:t}function $_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const V_={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},j_=fe.INFO,H_={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},q_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=H_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=j_,this._logHandler=q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const W_=(t,e)=>e.some(n=>t instanceof n);let Tl,Sl;function z_(){return Tl||(Tl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K_(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _d=new WeakMap,so=new WeakMap,wd=new WeakMap,Ti=new WeakMap,Vo=new WeakMap;function G_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_d.set(n,t)}).catch(()=>{}),Vo.set(e,t),e}function J_(t){if(so.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});so.set(t,e)}let io={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return so.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Y_(t){io=t(io)}function X_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Si(this),e,...n);return wd.set(r,e.sort?e.sort():[e]),rn(r)}:K_().includes(t)?function(...e){return t.apply(Si(this),e),rn(_d.get(this))}:function(...e){return rn(t.apply(Si(this),e))}}function Q_(t){return typeof t=="function"?X_(t):(t instanceof IDBTransaction&&J_(t),W_(t,z_())?new Proxy(t,io):t)}function rn(t){if(t instanceof IDBRequest)return G_(t);if(Ti.has(t))return Ti.get(t);const e=Q_(t);return e!==t&&(Ti.set(t,e),Vo.set(e,t)),e}const Si=t=>Vo.get(t);function Ed(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Z_=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],Ci=new Map;function Cl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Z_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ci.set(e,i),i}Y_(t=>({...t,get:(e,n,r)=>Cl(e,n)||t.get(e,n,r),has:(e,n)=>!!Cl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",Al="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Bo("@firebase/app"),rw="@firebase/app-compat",sw="@firebase/analytics-compat",iw="@firebase/analytics",ow="@firebase/app-check-compat",aw="@firebase/app-check",lw="@firebase/auth",cw="@firebase/auth-compat",uw="@firebase/database",dw="@firebase/data-connect",fw="@firebase/database-compat",hw="@firebase/functions",pw="@firebase/functions-compat",mw="@firebase/installations",gw="@firebase/installations-compat",yw="@firebase/messaging",bw="@firebase/messaging-compat",vw="@firebase/performance",_w="@firebase/performance-compat",ww="@firebase/remote-config",Ew="@firebase/remote-config-compat",Iw="@firebase/storage",Tw="@firebase/storage-compat",Sw="@firebase/firestore",Cw="@firebase/vertexai",Aw="@firebase/firestore-compat",Rw="firebase",Pw="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="[DEFAULT]",kw={[oo]:"fire-core",[rw]:"fire-core-compat",[iw]:"fire-analytics",[sw]:"fire-analytics-compat",[aw]:"fire-app-check",[ow]:"fire-app-check-compat",[lw]:"fire-auth",[cw]:"fire-auth-compat",[uw]:"fire-rtdb",[dw]:"fire-data-connect",[fw]:"fire-rtdb-compat",[hw]:"fire-fn",[pw]:"fire-fn-compat",[mw]:"fire-iid",[gw]:"fire-iid-compat",[yw]:"fire-fcm",[bw]:"fire-fcm-compat",[vw]:"fire-perf",[_w]:"fire-perf-compat",[ww]:"fire-rc",[Ew]:"fire-rc-compat",[Iw]:"fire-gcs",[Tw]:"fire-gcs-compat",[Sw]:"fire-fst",[Aw]:"fire-fst-compat",[Cw]:"fire-vertex","fire-js":"fire-js",[Rw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map,xw=new Map,lo=new Map;function Rl(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(lo.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,t);for(const n of Ss.values())Rl(n,t);for(const n of xw.values())Rl(n,t);return!0}function ei(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new On("app","Firebase",Ow);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=Pw;function Id(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(n||(n=md()),!n)throw sn.create("no-options");const i=Ss.get(s);if(i){if(Zn(n,i.options)&&Zn(r,i.config))return i;throw sn.create("duplicate-app",{appName:s})}const o=new B_(s);for(const l of lo.values())o.addComponent(l);const a=new Nw(n,r,o);return Ss.set(s,a),a}function Mw(t=ao){const e=Ss.get(t);if(!e&&t===ao&&md())return Id();if(!e)throw sn.create("no-app",{appName:t});return e}function It(t,e,n){var r;let s=(r=kw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}Ut(new Tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebase-heartbeat-database",Lw=1,$r="firebase-heartbeat-store";let Ai=null;function Td(){return Ai||(Ai=Ed(Dw,Lw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($r)}catch(n){console.warn(n)}}}}).catch(t=>{throw sn.create("idb-open",{originalErrorMessage:t.message})})),Ai}async function Fw(t){try{const n=(await Td()).transaction($r),r=await n.objectStore($r).get(Sd(t));return await n.done,r}catch(e){if(e instanceof St)Ft.warn(e.message);else{const n=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function Pl(t,e){try{const r=(await Td()).transaction($r,"readwrite");await r.objectStore($r).put(e,Sd(t)),await r.done}catch(n){if(n instanceof St)Ft.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function Sd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=1024,$w=30;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$w){const o=Hw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kl(),{heartbeatsToSend:r,unsentEntries:s}=Vw(this._heartbeatsCache.heartbeats),i=hd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ft.warn(n),""}}}function kl(){return new Date().toISOString().substring(0,10)}function Vw(t,e=Uw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xl(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xl(t){return hd(JSON.stringify({version:2,heartbeats:t})).length}function Hw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){Ut(new Tt("platform-logger",e=>new tw(e),"PRIVATE")),Ut(new Tt("heartbeat",e=>new Bw(e),"PRIVATE")),It(oo,Al,t),It(oo,Al,"esm2017"),It("fire-js","")}qw("");function jo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Cd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ww=Cd,Ad=new On("auth","Firebase",Cd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Bo("@firebase/auth");function zw(t,...e){Cs.logLevel<=fe.WARN&&Cs.warn(`Auth (${Kr}): ${t}`,...e)}function fs(t,...e){Cs.logLevel<=fe.ERROR&&Cs.error(`Auth (${Kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Ho(t,...e)}function Ye(t,...e){return Ho(t,...e)}function Rd(t,e,n){const r=Object.assign(Object.assign({},Ww()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function on(t){return Rd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ho(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ad.create(t,...e)}function $(t,e,...n){if(!t)throw Ho(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fs(e),new Error(e)}function Bt(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pd(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pd()||yd()||"connection"in navigator)?navigator.onLine:!0}function Gw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=w_()||I_()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xw=new Gr(3e4,6e4);function Ct(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ft(t,e,n,r,s={}){return xd(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return E_()||(c.referrerPolicy="no-referrer"),kd.fetch()(await Od(t,t.config.apiHost,n,a),c)})}async function xd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jw),e);try{const s=new Zw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rd(t,u,c);$t(t,u)}}catch(s){if(s instanceof St)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function ti(t,e,n,r,s={}){const i=await ft(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Od(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qo(t.config,s):`${t.config.apiScheme}://${s}`;return Yw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Qw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Xw.get())})}}function fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return t!==void 0&&t.getResponse!==void 0}function Ml(t){return t!==void 0&&t.enterprise!==void 0}class Nd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Md(t,e){return ft(t,"GET","/v2/recaptchaConfig",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function As(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n0(t,e=!1){const n=dn(t),r=await n.getIdToken(e),s=Wo(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wr(Ri(s.auth_time)),issuedAtTime:wr(Ri(s.iat)),expirationTime:wr(Ri(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ri(t){return Number(t)*1e3}function Wo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=pd(n);return s?JSON.parse(s):(fs("Failed to decode base64 JWT payload"),null)}catch(s){return fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dl(t){const e=Wo(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&r0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Br(t,As(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dd(i.providerUserInfo):[],a=o0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new uo(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function i0(t){const e=dn(t);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dd(t){return t.map(e=>{var{providerId:n}=e,r=jo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){const n=await xd(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Od(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l0(t,e){return ft(t,"POST","/v2/accounts:revokeToken",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Dl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n0(this,e)}reload(){return i0(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await Br(this,t0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:O,isAnonymous:k,providerData:ee,stsTokenManager:te}=n;$(P&&te,e,"internal-error");const ye=Kn.fromJSON(this.name,te);$(typeof P=="string",e,"internal-error"),qt(d,e.name),qt(p,e.name),$(typeof O=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),qt(m,e.name),qt(b,e.name),qt(_,e.name),qt(E,e.name),qt(R,e.name),qt(C,e.name);const K=new it({uid:P,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:k,photoURL:b,phoneNumber:m,tenantId:_,stsTokenManager:ye,createdAt:R,lastLoginAt:C});return ee&&Array.isArray(ee)&&(K.providerData=ee.map(re=>Object.assign({},re))),E&&(K._redirectEventId=E),K}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kn;s.updateFromServerResponse(n);const i=new it({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rs(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Kn;a.updateFromIdToken(r);const l=new it({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;function Mt(t){Bt(t instanceof Function,"Expected a class definition");let e=Ll.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ll.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ld.type="NONE";const Fl=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class Gn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=hs(this.userKey,s.apiKey,i),this.fullPersistenceKey=hs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await As(this.auth,{idToken:e}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gn(Mt(Fl),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Mt(Fl);const o=hs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const p=await As(e,{idToken:u}).catch(()=>{});if(!p)break;d=await it._fromGetAccountInfoResponse(e,p,u)}else d=it._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Gn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jd(e))return"Blackberry";if(Hd(e))return"Webos";if(Ud(e))return"Safari";if((e.includes("chrome/")||$d(e))&&!e.includes("edge/"))return"Chrome";if(Vd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fd(t=Fe()){return/firefox\//i.test(t)}function Ud(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $d(t=Fe()){return/crios\//i.test(t)}function Bd(t=Fe()){return/iemobile/i.test(t)}function Vd(t=Fe()){return/android/i.test(t)}function jd(t=Fe()){return/blackberry/i.test(t)}function Hd(t=Fe()){return/webos/i.test(t)}function zo(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c0(t=Fe()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u0(){return T_()&&document.documentMode===10}function qd(t=Fe()){return zo(t)||Vd(t)||Hd(t)||jd(t)||/windows phone/i.test(t)||Bd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e=[]){let n;switch(t){case"Browser":n=Ul(Fe());break;case"Worker":n=`${Ul(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e={}){return ft(t,"GET","/v2/passwordPolicy",Ct(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=6;class p0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:h0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new d0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await As(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(on(this));const n=e?dn(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fn(t){return dn(t)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=k_(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g0(t){Jr=t}function Ko(t){return Jr.loadJS(t)}function y0(){return Jr.recaptchaV2Script}function b0(){return Jr.recaptchaEnterpriseScript}function v0(){return Jr.gapiScript}function zd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=500,w0=6e4,rs=1e12;class E0{constructor(e){this.auth=e,this.counter=rs,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new S0(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||rs;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||rs;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||rs;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class I0{constructor(){this.enterprise=new T0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class T0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class S0{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;$(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=C0(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},w0)},_0))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function C0(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const A0="recaptcha-enterprise",Er="NO_RECAPTCHA";class Kd{constructor(e){this.type=A0,this.auth=fn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Md(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Nd(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ml(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Er)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new I0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ml(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=b0();l.length!==0&&(l+=a),Ko(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Pi(t,e,n,r=!1,s=!1){const i=new Kd(t);let o;if(s)o=Er;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ki(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("PHONE_PROVIDER")){const o=await Pi(t,e,n);return r(t,o).catch(async a=>{var l;if(((l=t._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(a.code==="auth/missing-recaptcha-token"||a.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const c=await Pi(t,e,n,!1,!0);return r(t,c)}return Promise.reject(a)})}else{const o=await Pi(t,e,n,!1,!0);return r(t,o)}}async function R0(t){const e=fn(t),n=await Md(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Nd(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Kd(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t,e){const n=ei(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zn(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function k0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function x0(t,e,n){const r=fn(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gd(e),{host:o,port:a}=O0(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(Zn(c,r.config.emulator)&&Zn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,N0()}function Gd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O0(t){const e=Gd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bl(o)}}}function Bl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e){return ti(t,"POST","/v1/accounts:signInWithIdp",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="http://localhost";class Pn extends Go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:M0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",Ct(t,e))}async function D0(t,e){return ti(t,"POST","/v1/accounts:signInWithPhoneNumber",Ct(t,e))}async function L0(t,e){const n=await ti(t,"POST","/v1/accounts:signInWithPhoneNumber",Ct(t,e));if(n.temporaryProof)throw fr(t,"account-exists-with-different-credential",n);return n}const F0={USER_NOT_FOUND:"user-not-found"};async function U0(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ti(t,"POST","/v1/accounts:signInWithPhoneNumber",Ct(t,n),F0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Go{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ir({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ir({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return D0(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return L0(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return U0(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new Ir({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Yr{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Yr{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Yr{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),o=jl(r);return new er({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jl(r);return new er({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ps(e,n,r,s)}}function Yd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,i,e,r):i})}async function $0(t,e,n=!1){const r=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(on(r));const s="reauthenticate";try{const i=await Br(t,Yd(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Wo(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),er._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e,n=!1){if(wt(t.app))return Promise.reject(on(t));const r="signIn",s=await Yd(t,r,e),i=await er._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function V0(t,e){return Xd(fn(t),e)}function j0(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function H0(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",Ct(t,e))}const ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=1e3,W0=10;class Zd extends Qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);u0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,W0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zd.type="LOCAL";const z0=Zd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ef.type="SESSION";const tf=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await K0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Jo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function J0(t){Ie().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Y0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q0(){return Yo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="firebaseLocalStorageDb",Z0=1,xs="firebaseLocalStorage",rf="fbase_key";class Xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ri(t,e){return t.transaction([xs],e?"readwrite":"readonly").objectStore(xs)}function eE(){const t=indexedDB.deleteDatabase(nf);return new Xr(t).toPromise()}function fo(){const t=indexedDB.open(nf,Z0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xs,{keyPath:rf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xs)?e(r):(r.close(),await eE(),e(await fo()))})})}async function ql(t,e,n){const r=ri(t,!0).put({[rf]:e,value:n});return new Xr(r).toPromise()}async function tE(t,e){const n=ri(t,!1).get(e),r=await new Xr(n).toPromise();return r===void 0?null:r.value}function Wl(t,e){const n=ri(t,!0).delete(e);return new Xr(n).toPromise()}const nE=800,rE=3;class sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ni._getInstance(Q0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y0(),!this.activeServiceWorker)return;this.sender=new G0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await ql(e,ks,"1"),await Wl(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ql(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ri(s,!1).getAll();return new Xr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sf.type="LOCAL";const sE=sf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",Ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=zd("rcb"),iE=new Gr(3e4,6e4);class oE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ie().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(aE(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Nl(Ie().grecaptcha)?Promise.resolve(Ie().grecaptcha):new Promise((r,s)=>{const i=Ie().setTimeout(()=>{s(Ye(e,"network-request-failed"))},iE.get());Ie()[xi]=()=>{Ie().clearTimeout(i),delete Ie()[xi];const a=Ie().grecaptcha;if(!a||!Nl(a)){s(Ye(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${y0()}?${sr({onload:xi,render:"explicit",hl:n})}`;Ko(o).catch(()=>{clearTimeout(i),s(Ye(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ie().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function aE(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class lE{async load(e){return new E0(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",cE={theme:"light",type:"image"};class Kl{constructor(e,n,r=Object.assign({},cE)){this.parameters=r,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fn(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;$(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new lE:new oE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ie()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Pd()&&!Yo(),this.auth,"internal-error"),await uE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await e0(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function uE(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ir._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function fE(t,e,n){if(wt(t.app))return Promise.reject(on(t));const r=fn(t),s=await hE(r,e,dn(n));return new dE(s,i=>V0(r,i))}async function hE(t,e,n){var r;if(!t._getRecaptchaConfig())try{await R0(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){$(i.type==="enroll",t,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,o,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Er){$((n==null?void 0:n.type)===Tr,u,"argument-error");const p=await Oi(u,d,n);return Hl(u,p)}return Hl(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{$(i.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;$(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,a,"mfaSmsSignIn",async(d,p)=>{if(p.phoneSignInInfo.captchaResponse===Er){$((n==null?void 0:n.type)===Tr,d,"argument-error");const m=await Oi(d,p,n);return zl(d,m)}return zl(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ki(t,i,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===Er){$((n==null?void 0:n.type)===Tr,c,"argument-error");const d=await Oi(c,u,n);return Vl(c,d)}return Vl(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Oi(t,e,n){$(n.type===Tr,t,"argument-error");const r=await n.verify();$(typeof r=="string",t,"argument-error");const s=Object.assign({},e);if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e){return e?Mt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mE(t){return Xd(t.auth,new Xo(t),t.bypassAuthState)}function gE(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),B0(n,new Xo(t),t.bypassAuthState)}async function yE(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),$0(n,new Xo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mE;case"linkViaPopup":case"linkViaRedirect":return yE;case"reauthViaPopup":case"reauthViaRedirect":return gE;default:$t(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new Gr(2e3,1e4);class Un extends of{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bE.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="pendingRedirect",ps=new Map;class _E extends of{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ps.get(this.auth._key());if(!e){try{const r=await wE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ps.set(this.auth._key(),e)}return this.bypassAuthState||ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wE(t,e){const n=TE(e),r=IE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EE(t,e){ps.set(t._key(),e)}function IE(t){return Mt(t._redirectPersistence)}function TE(t){return hs(vE,t.config.apiKey,t.name)}async function SE(t,e,n=!1){if(wt(t.app))return Promise.reject(on(t));const r=fn(t),s=pE(r,e),o=await new _E(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=10*60*1e3;class AE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!af(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gl(e))}saveEventToCache(e){this.cachedEventUids.add(Gl(e)),this.lastProcessedEventTime=Date.now()}}function Gl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function af({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function OE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PE(t);for(const n of e)try{if(NE(n))return}catch{}$t(t,"unauthorized-domain")}function NE(t){const e=co(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xE.test(n))return!1;if(kE.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new Gr(3e4,6e4);function Jl(){const t=Ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DE(t){return new Promise((e,n)=>{var r,s,i;function o(){Jl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jl(),n(Ye(t,"network-request-failed"))},timeout:ME.get()})}if(!((s=(r=Ie().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ie().gapi)===null||i===void 0)&&i.load)o();else{const a=zd("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Ko(`${v0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ms=null,e})}let ms=null;function LE(t){return ms=ms||DE(t),ms}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Gr(5e3,15e3),UE="__/auth/iframe",$E="emulator/auth/iframe",BE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jE(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qo(e,$E):`https://${t.config.authDomain}/${UE}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},s=VE.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function HE(t){const e=await LE(t),n=Ie().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:jE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Ie().setTimeout(()=>{i(o)},FE.get());function l(){Ie().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WE=500,zE=600,KE="_blank",GE="http://localhost";class Yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JE(t,e,n,r=WE,s=zE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qE),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Fe().toLowerCase();n&&(a=$d(c)?KE:n),Fd(c)&&(e=e||GE,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[m,b])=>`${p}${m}=${b},`,"");if(c0(c)&&a!=="_self")return YE(e||"",a),new Yl(null);const d=window.open(e||"",a,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Yl(d)}function YE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="__/auth/handler",QE="emulator/auth/handler",ZE=encodeURIComponent("fac");async function Xl(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:s};if(e instanceof Jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",P_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Yr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${ZE}=${encodeURIComponent(l)}`:"";return`${eI(t)}?${sr(a).slice(1)}${c}`}function eI({config:t}){return t.emulator?qo(t,QE):`https://${t.authDomain}/${XE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tf,this._completeRedirectFn=SE,this._overrideRedirectResult=EE}async _openPopup(e,n,r,s){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xl(e,n,r,co(),s);return JE(e,o,Jo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xl(e,n,r,co(),s);return J0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HE(e),r=new AE(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ni,{type:Ni},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ni];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qd()||Ud()||zo()}}const nI=tI;var Ql="@firebase/auth",Zl="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iI(t){Ut(new Tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wd(t)},c=new m0(r,s,i,l);return k0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new Tt("auth-internal",e=>{const n=fn(e.getProvider("auth").getImmediate());return(r=>new rI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Ql,Zl,sI(t)),It(Ql,Zl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=5*60,aI=gd("authIdTokenMaxAge")||oI;let ec=null;const lI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aI)return;const s=n==null?void 0:n.token;ec!==s&&(ec=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cI(t=Mw()){const e=ei(t,"auth");if(e.isInitialized())return e.getImmediate();const n=P0(t,{popupRedirectResolver:nI,persistence:[sE,z0,tf]}),r=gd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lI(i.toString());H0(n,o,()=>o(n.currentUser)),j0(n,a=>o(a))}}const s=v_("auth");return s&&x0(n,`http://${s}`),n}function uI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iI("Browser");var dI="firebase",fI="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(dI,fI,"app");const lf="@firebase/installations",Qo="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=1e4,uf=`w:${Qo}`,df="FIS_v2",hI="https://firebaseinstallations.googleapis.com/v1",pI=60*60*1e3,mI="installations",gI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kn=new On(mI,gI,yI);function ff(t){return t instanceof St&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf({projectId:t}){return`${hI}/projects/${t}/installations`}function pf(t){return{token:t.token,requestStatus:2,expiresIn:vI(t.expiresIn),creationTime:Date.now()}}async function mf(t,e){const r=(await e.json()).error;return kn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bI(t,{refreshToken:e}){const n=gf(t);return n.append("Authorization",_I(e)),n}async function yf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vI(t){return Number(t.replace("s","000"))}function _I(t){return`${df} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=hf(t),s=gf(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:df,appId:t.appId,sdkVersion:uf},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yf(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:pf(c.authToken)}}else throw await mf("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=/^[cdef][\w-]{21}$/,ho="";function TI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=SI(t);return II.test(n)?n:ho}catch{return ho}}function SI(t){return EI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Map;function _f(t,e){const n=si(t);wf(n,e),CI(n,e)}function wf(t,e){const n=vf.get(t);if(n)for(const r of n)r(e)}function CI(t,e){const n=AI();n&&n.postMessage({key:t,fid:e}),RI()}let En=null;function AI(){return!En&&"BroadcastChannel"in self&&(En=new BroadcastChannel("[Firebase] FID Change"),En.onmessage=t=>{wf(t.data.key,t.data.fid)}),En}function RI(){vf.size===0&&En&&(En.close(),En=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebase-installations-database",kI=1,xn="firebase-installations-store";let Mi=null;function Zo(){return Mi||(Mi=Ed(PI,kI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}})),Mi}async function Os(t,e){const n=si(t),s=(await Zo()).transaction(xn,"readwrite"),i=s.objectStore(xn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&_f(t,e.fid),e}async function Ef(t){const e=si(t),r=(await Zo()).transaction(xn,"readwrite");await r.objectStore(xn).delete(e),await r.done}async function ii(t,e){const n=si(t),s=(await Zo()).transaction(xn,"readwrite"),i=s.objectStore(xn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&_f(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){let e;const n=await ii(t.appConfig,r=>{const s=xI(r),i=OI(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ho?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xI(t){const e=t||{fid:TI(),registrationStatus:0};return If(e)}function OI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(kn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MI(t)}:{installationEntry:e}}async function NI(t,e){try{const n=await wI(t,e);return Os(t.appConfig,n)}catch(n){throw ff(n)&&n.customData.serverCode===409?await Ef(t.appConfig):await Os(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MI(t){let e=await tc(t.appConfig);for(;e.registrationStatus===1;)await bf(100),e=await tc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ea(t);return r||n}return e}function tc(t){return ii(t,e=>{if(!e)throw kn.create("installation-not-found");return If(e)})}function If(t){return DI(t)?{fid:t.fid,registrationStatus:0}:t}function DI(t){return t.registrationStatus===1&&t.registrationTime+cf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI({appConfig:t,heartbeatServiceProvider:e},n){const r=FI(t,n),s=bI(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:uf,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await yf(()=>fetch(r,a));if(l.ok){const c=await l.json();return pf(c)}else throw await mf("Generate Auth Token",l)}function FI(t,{fid:e}){return`${hf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e=!1){let n;const r=await ii(t.appConfig,i=>{if(!Tf(i))throw kn.create("not-registered");const o=i.authToken;if(!e&&BI(o))return i;if(o.requestStatus===1)return n=UI(t,e),i;{if(!navigator.onLine)throw kn.create("app-offline");const a=jI(i);return n=$I(t,a),a}});return n?await n:r.authToken}async function UI(t,e){let n=await nc(t.appConfig);for(;n.authToken.requestStatus===1;)await bf(100),n=await nc(t.appConfig);const r=n.authToken;return r.requestStatus===0?ta(t,e):r}function nc(t){return ii(t,e=>{if(!Tf(e))throw kn.create("not-registered");const n=e.authToken;return HI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $I(t,e){try{const n=await LI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Os(t.appConfig,r),n}catch(n){if(ff(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ef(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Os(t.appConfig,r)}throw n}}function Tf(t){return t!==void 0&&t.registrationStatus===2}function BI(t){return t.requestStatus===2&&!VI(t)}function VI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pI}function jI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HI(t){return t.requestStatus===1&&t.requestTime+cf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t){const e=t,{installationEntry:n,registrationPromise:r}=await ea(e);return r?r.catch(console.error):ta(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e=!1){const n=t;return await zI(n),(await ta(n,e)).token}async function zI(t){const{registrationPromise:e}=await ea(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){if(!t||!t.options)throw Di("App Configuration");if(!t.name)throw Di("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Di(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Di(t){return kn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="installations",GI="installations-internal",JI=t=>{const e=t.getProvider("app").getImmediate(),n=KI(e),r=ei(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YI=t=>{const e=t.getProvider("app").getImmediate(),n=ei(e,Sf).getImmediate();return{getId:()=>qI(n),getToken:s=>WI(n,s)}};function XI(){Ut(new Tt(Sf,JI,"PUBLIC")),Ut(new Tt(GI,YI,"PRIVATE"))}XI();It(lf,Qo);It(lf,Qo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="analytics",QI="firebase_id",ZI="origin",eT=60*1e3,tT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",na="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Bo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new On("analytics","Analytics",nT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){if(!t.startsWith(na)){const e=rt.create("invalid-gtag-resource",{gtagURL:t});return Ve.warn(e.message),""}return t}function Cf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function iT(t,e){const n=sT("firebase-js-sdk-policy",{createScriptURL:rT}),r=document.createElement("script"),s=`${na}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function oT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function aT(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Cf(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){Ve.error(a)}t("config",s,i)}async function lT(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Cf(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ve.error(i)}}function cT(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await lT(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await aT(t,e,n,r,a,l)}else if(i==="consent"){const[a,l]=o;t("consent",a,l)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ve.error(a)}}return s}function uT(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=cT(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function dT(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(na)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=30,hT=1e3;class pT{constructor(e={},n=hT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Af=new pT;function mT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gT(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:mT(r)},i=tT.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function yT(t,e=Af,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw rt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _T;return setTimeout(async()=>{a.abort()},eT),Rf({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Rf(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Af){var i;const{appId:o,measurementId:a}=t;try{await bT(r,e)}catch(l){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await gT(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!vT(c)){if(s.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Il(n,s.intervalMillis,fT):Il(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,d),Ve.debug(`Calling attemptFetch again in ${u} millis`),Rf(t,d,r,s)}}function bT(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vT(t){if(!(t instanceof St)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _T{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wT(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(){if(bd())try{await vd()}catch(t){return Ve.warn(rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IT(t,e,n,r,s,i,o){var a;const l=yT(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ve.error(m)),e.push(l);const c=ET().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([l,c]);dT(i)||iT(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[ZI]="firebase",p.update=!0,d!=null&&(p[QI]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.app=e}_delete(){return delete Sr[this.app.options.appId],Promise.resolve()}}let Sr={},sc=[];const ic={};let Li="dataLayer",ST="gtag",oc,Pf,ac=!1;function CT(){const t=[];if(yd()&&t.push("This is a browser extension environment."),S_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function AT(t,e,n){CT();const r=t.options.appId;if(!r)throw rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Sr[r]!=null)throw rt.create("already-exists",{id:r});if(!ac){oT(Li);const{wrappedGtag:i,gtagCore:o}=uT(Sr,sc,ic,Li,ST);Pf=i,oc=o,ac=!0}return Sr[r]=IT(t,sc,ic,e,oc,Li,n),new TT(t)}function RT(t,e,n,r){t=dn(t),wT(Pf,Sr[t.app.options.appId],e,n,r).catch(s=>Ve.error(s))}const lc="@firebase/analytics",cc="0.10.12";function PT(){Ut(new Tt(rc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return AT(r,s,n)},"PUBLIC")),Ut(new Tt("analytics-internal",t,"PRIVATE")),It(lc,cc),It(lc,cc,"esm2017");function t(e){try{const n=e.getProvider(rc).getImmediate();return{logEvent:(r,s,i)=>RT(n,r,s,i)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}PT();const kT={apiKey:"AIzaSyBBc-dUbMgCFJr_nIDioSHn5ypGlwFYWVM",authDomain:"loanly-f0a3b.firebaseapp.com",projectId:"loanly-f0a3b",storageBucket:"loanly-f0a3b.firebasestorage.app",messagingSenderId:"986006448000",appId:"1:986006448000:web:3703101b715d5372e2c365"},xT=Id(kT),ur=cI(xT),OT={class:"max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10"},NT={key:0,class:"space-y-6"},MT={class:"bg-blue-50 p-4 rounded-lg mb-6"},DT={class:"grid md:grid-cols-2 gap-6"},LT={class:"grid md:grid-cols-2 gap-6"},FT={class:"flex items-center"},UT={class:"text-center"},$T={key:1,class:"space-y-6"},BT={class:"flex justify-center space-x-2"},VT=["onUpdate:modelValue","onInput","onKeydown"],jT={key:0,class:"mt-2 text-sm text-red-600 text-center"},HT={class:"text-center mt-6"},qT={key:2,class:"text-center space-y-6"},WT={class:"bg-green-50 p-6 rounded-lg"},zT={class:"mt-1"},KT={class:"mt-4 text-sm text-gray-600"},GT={class:"mt-6"},JT={key:3,class:"flex justify-center items-center my-4"},YT={__name:"Form",setup(t){const e=db(),n=ud(),r=Ee(!1),s=Ee("form"),i=Ee(["","","","","",""]),o=Ee([]),a=Ee(!1),l=Ee(ye()),c=Ee(""),u=Ee(!1),d=Ee(null),p=Ee(!1),m=Ee(!1),b=Ee(null),_=Ee(!1),E=()=>{k.value.phoneNumber=k.value.phoneNumber.replace(/[^\d+]/g,"").replace(/^([+])/,"$1").replace(/(.)[+]/g,"$1").slice(0,12),console.log("typing")};yr(s,V=>{V==="confirmation"&&!_.value&&R()});const R=async()=>{try{r.value=!0,b.value=null;const V={to:k.value.email,subject:`Your Loan Application Confirmation - ${l.value}`,body:`
        <h1>Application Confirmed!</h1>
        <p>Dear ${k.value.firstName} ${k.value.lastName},</p>
        <p>Your loan application with ${O.bankName} has been successfully submitted.</p>
        
        <h2>Application Details</h2>
        <ul>
          <li><strong>Reference Number:</strong> ${l.value}</li>
          <li><strong>Bank:</strong> ${O.bankName}</li>
          <li><strong>Loan Amount:</strong> ${te(P.loanAmount)}</li>
          <li><strong>Duration:</strong> ${P.loanDuration} months</li>
          <li><strong>Monthly Payment:</strong> ${P.monthlyPayment} AMD</li>
        </ul>
        
        <p>We will process your application and contact you shortly.</p>
        <p>Thank you for choosing ${O.bankName}!</p>
      `,customerName:`${k.value.firstName} ${k.value.lastName}`},x=await be.post("https://loanly-59855e6cf246.herokuapp.com/api/send-confirmation-email",V);await new Promise(z=>setTimeout(z,1500)),console.log("Email sent successfully",V),_.value=!0}catch(V){console.error("Error sending email:",V),b.value=V.message||"Failed to send confirmation email"}finally{r.value=!1}};js(()=>{C()});const C=()=>{try{window.recaptchaVerifier=new Kl(ur,"recaptcha-container",{size:"normal",callback:()=>{p.value=!0},"expired-callback":()=>{p.value=!1}}),window.recaptchaVerifier.render()}catch(V){console.error("Recaptcha Error:",V),c.value="Error initializing Recaptcha."}},P={loanAmount:e.query.loanAmount,loanDuration:e.query.loanDuration,monthlyPayment:e.query.monthlyPayment},O={bankId:e.params.bankId,bankName:e.query.bankName,interestRate:e.query.interestRate},k=Ee({firstName:e.query.firstName||"",lastName:e.query.lastName||"",identityCardNumber:e.query.identityCardNumber||"",phoneNumber:"",email:"",jobTitle:"",employmentStatus:"",monthlySalary:"",additionalInfo:"",termsAgreed:!1}),ee=tt(()=>i.value.every(V=>V!=="")),te=V=>new Intl.NumberFormat("en-US",{style:"currency",currency:"AMD",minimumFractionDigits:0,maximumFractionDigits:0}).format(V);function ye(){return"APP-"+Math.random().toString(36).substring(2,10).toUpperCase()}const K=async()=>{if(!d.value)return!1;const V=i.value.join("");try{return await d.value.confirm(V),c.value="OTP verified!",!0}catch{return c.value="Invalid OTP!",!1}},re=async()=>{if(!p.value){c.value="Please complete the reCAPTCHA verification";return}if(r.value=!0,!k.value.phoneNumber.startsWith("+")){c.value="Phone number must start with +374 xx xxx-xxx";return}if(console.log("Auth Instance:",ur),!ur){c.value="Firebase Auth not initialized.";return}if(!window.recaptchaVerifier)try{window.recaptchaVerifier=new Kl(ur,"recaptcha-container",{}),console.log("create captcha")}catch(V){console.error("Recaptcha Error:",V),c.value="Error initializing Recaptcha.";return}fE(ur,k.value.phoneNumber,window.recaptchaVerifier).then(V=>{u.value=!0,d.value=V,console.log("Confirmation Result from sendingOTP"+d.value),c.value="OTP sent!"}).catch(V=>{console.error("OTP Error:",V),c.value=V.message});try{await new Promise(V=>setTimeout(V,2e3)),console.log("Sending OTP to",k.value.email),s.value="otp",r.value=!1,setTimeout(()=>{o.value[0]&&o.value[0].focus()},100)}catch(V){console.error("Error submitting form:",V),alert("There was an error submitting your application. Please try again."),r.value=!1}},ue=V=>{i.value[V].length===1&&V<5&&o.value[V+1].focus()},B=V=>{i.value[V]===""&&V>0&&o.value[V-1].focus()},ie=async()=>{a.value=!0,m.value=!1;try{const V=i.value.join("");if(!await K()){m.value=!0,i.value=["","","","","",""],setTimeout(()=>{o.value[0]&&o.value[0].focus()},100);return}s.value="confirmation"}catch(V){console.error("Error verifying OTP:",V),m.value=!0}finally{a.value=!1}},we=async()=>{i.value=["","","","","",""],setTimeout(()=>{o.value[0]&&o.value[0].focus()},100)},Oe=()=>{n.push({name:"Calculator"})};return(V,x)=>(H(),J("div",OT,[x[25]||(x[25]=g("h2",{class:"text-3xl font-bold mb-6 text-center text-gray-800"}," Complete Your Application ",-1)),s.value==="form"?(H(),J("div",NT,[g("div",MT,[x[13]||(x[13]=g("h3",{class:"font-semibold text-lg mb-2"},"Application Summary",-1)),g("p",null,[x[9]||(x[9]=g("span",{class:"font-medium"},"Bank:",-1)),Yt(" "+X(O.bankName),1)]),g("p",null,[x[10]||(x[10]=g("span",{class:"font-medium"},"Loan Amount:",-1)),Yt(" "+X(te(P.loanAmount)),1)]),g("p",null,[x[11]||(x[11]=g("span",{class:"font-medium"},"Duration:",-1)),Yt(" "+X(P.loanDuration)+" months",1)]),g("p",null,[x[12]||(x[12]=g("span",{class:"font-medium"},"Monthly Payment:",-1)),Yt(" "+X(P.monthlyPayment)+" AMD",1)])]),g("form",{onSubmit:Oo(re,["prevent"]),class:"space-y-6"},[g("div",DT,[Z(Jt,{label:"First Name",modelValue:k.value.firstName,"onUpdate:modelValue":x[0]||(x[0]=z=>k.value.firstName=z),placeholder:"Enter your first name",disabled:!0},null,8,["modelValue"]),Z(Jt,{label:"Last Name",modelValue:k.value.lastName,"onUpdate:modelValue":x[1]||(x[1]=z=>k.value.lastName=z),placeholder:"Enter your last name",disabled:!0},null,8,["modelValue"])]),g("div",LT,[Z(Jt,{label:"Phone Number",modelValue:k.value.phoneNumber,"onUpdate:modelValue":x[2]||(x[2]=z=>k.value.phoneNumber=z),maxlength:12,placeholder:"+374 XX XXX XXX",class:ze({error:V.phoneError}),onInput:E,required:""},null,8,["modelValue","class"]),Z(Jt,{label:"Email Address",modelValue:k.value.email,"onUpdate:modelValue":x[3]||(x[3]=z=>k.value.email=z),placeholder:"Enter your email address",type:"email",required:""},null,8,["modelValue"])]),g("div",null,[Z(Jt,{label:"Current Job Title",modelValue:k.value.jobTitle,"onUpdate:modelValue":x[4]||(x[4]=z=>k.value.jobTitle=z),placeholder:"Enter your current job title",required:""},null,8,["modelValue"])]),g("div",null,[x[15]||(x[15]=g("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Employment Status ",-1)),_n(g("select",{"onUpdate:modelValue":x[5]||(x[5]=z=>k.value.employmentStatus=z),class:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",required:""},x[14]||(x[14]=[Eu('<option value="" disabled data-v-7d01b6a6>Select your employment status</option><option value="Full-time" data-v-7d01b6a6>Full-time</option><option value="Part-time" data-v-7d01b6a6>Part-time</option><option value="Self-employed" data-v-7d01b6a6>Self-employed</option><option value="Unemployed" data-v-7d01b6a6>Unemployed</option><option value="Retired" data-v-7d01b6a6>Retired</option>',6)]),512),[[Xp,k.value.employmentStatus]])]),g("div",null,[Z(Jt,{label:"Monthly Salary (AMD)",modelValue:k.value.monthlySalary,"onUpdate:modelValue":x[6]||(x[6]=z=>k.value.monthlySalary=z),placeholder:"Enter your monthly salary",type:"number",required:""},null,8,["modelValue"])]),g("div",null,[x[16]||(x[16]=g("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Additional Information ",-1)),_n(g("textarea",{"onUpdate:modelValue":x[7]||(x[7]=z=>k.value.additionalInfo=z),rows:"3",class:"w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",placeholder:"Any additional information you'd like to share"},null,512),[[Mr,k.value.additionalInfo]])]),g("div",FT,[_n(g("input",{type:"checkbox",id:"termsAgreement","onUpdate:modelValue":x[8]||(x[8]=z=>k.value.termsAgreed=z),required:"",class:"h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"},null,512),[[Yp,k.value.termsAgreed]]),x[17]||(x[17]=g("label",{for:"termsAgreement",class:"ml-2 block text-sm text-gray-700"}," I agree to the terms and conditions and privacy policy ",-1))]),g("div",UT,[Z(zn,{labelText:"Submit Application",variant:"primary",type:"submit",disabled:r.value},null,8,["disabled"]),x[18]||(x[18]=g("div",{id:"recaptcha-container"},null,-1))])],32)])):Pe("",!0),s.value==="otp"?(H(),J("div",$T,[g("div",{class:ze(["p-4 rounded-lg mb-6 text-center",m.value?"bg-red-50":"bg-green-50"])},[g("p",{class:ze([[m.value?"text-red-700":"text-green-700"],"mb-2"])},X(m.value?"Invalid OTP! Please enter the correct one.":"Verification code sent!"),3),g("p",null,"We've sent a verification code to "+X(k.value.phoneNumber),1)],2),g("div",null,[x[19]||(x[19]=g("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Enter Verification Code ",-1)),g("div",BT,[(H(),J(ve,null,Lt(6,(z,Ne)=>_n(g("input",{key:Ne,"onUpdate:modelValue":Qe=>i.value[Ne]=Qe,type:"text",maxlength:"1",class:"w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500",onInput:Qe=>ue(Ne),onKeydown:No(Qe=>B(Ne),["delete"]),ref_for:!0,ref_key:"otpInputs",ref:o},null,40,VT),[[Mr,i.value[Ne]]])),64))]),m.value?(H(),J("p",jT," The verification code you entered is incorrect. Please try again. ")):Pe("",!0)]),g("div",HT,[Z(zn,{labelText:"Verify",variant:"primary",onClick:ie,disabled:!ee.value||a.value},null,8,["disabled"])]),g("div",{class:"text-center mt-4 text-sm text-gray-600"},[g("p",null,[x[20]||(x[20]=Yt(" Didn't receive a code? ")),g("button",{onClick:we,class:"text-green-600 hover:underline"}," Resend ")])])])):Pe("",!0),s.value==="confirmation"?(H(),J("div",qT,[g("div",WT,[x[21]||(x[21]=g("div",{class:"text-5xl text-green-500 mb-4"},"✓",-1)),x[22]||(x[22]=g("h3",{class:"text-2xl font-bold text-green-700"},"Application Confirmed!",-1)),x[23]||(x[23]=g("p",{class:"mt-2"}," Your loan application has been successfully submitted and confirmed. ",-1)),g("p",zT," A confirmation email has been sent to "+X(k.value.email),1),g("p",KT," Application Reference: "+X(l.value),1)]),g("div",GT,[Z(zn,{labelText:"Return to Home",variant:"outline",onClick:Oe})])])):Pe("",!0),r.value?(H(),J("div",JT,x[24]||(x[24]=[g("div",{class:"animate-spin rounded-full h-8 w-8 border-t-2 border-green-500"},null,-1)]))):Pe("",!0)]))}},XT=Xe(YT,[["__scopeId","data-v-7d01b6a6"]]),QT=[{path:"/",redirect:"/calculator"},{path:"/calculator",component:Gb},{path:"/banks",component:Fv},{path:"/about",component:Kv},{path:"/apply",component:u_},{path:"/form/:bankId",name:"Form",component:XT}],ZT=cb({history:Uy(),routes:QT});rm(ay).use(ZT).mount("#app");
