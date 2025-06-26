(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var bh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function Kx(){if(Z_)return Vo;Z_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:u}}return Vo.Fragment=t,Vo.jsx=n,Vo.jsxs=n,Vo}var K_;function Qx(){return K_||(K_=1,bh.exports=Kx()),bh.exports}var Ve=Qx(),Ah={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Jx(){if(Q_)return le;Q_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(O,it,bt){this.props=O,this.context=it,this.refs=T,this.updater=bt||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function U(O,it,bt){this.props=O,this.context=it,this.refs=T,this.updater=bt||x}var L=U.prototype=new _;L.constructor=U,M(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function F(O,it,bt,wt,q,mt){return bt=mt.ref,{$$typeof:a,type:O,key:it,ref:bt!==void 0?bt:null,props:mt}}function Y(O,it){return F(O.type,it,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function A(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(bt){return it[bt]})}var H=/\/+/g;function ct(O,it){return typeof O=="object"&&O!==null&&O.key!=null?A(""+O.key):it.toString(36)}function at(){}function _t(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(at,at):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function pt(O,it,bt,wt,q){var mt=typeof O;(mt==="undefined"||mt==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(mt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case a:case t:xt=!0;break;case g:return xt=O._init,pt(xt(O._payload),it,bt,wt,q)}}if(xt)return q=q(O),xt=wt===""?"."+ct(O,0):wt,D(q)?(bt="",xt!=null&&(bt=xt.replace(H,"$&/")+"/"),pt(q,it,bt,"",function(Jt){return Jt})):q!=null&&(w(q)&&(q=Y(q,bt+(q.key==null||O&&O.key===q.key?"":(""+q.key).replace(H,"$&/")+"/")+xt)),it.push(q)),1;xt=0;var At=wt===""?".":wt+":";if(D(O))for(var Ct=0;Ct<O.length;Ct++)wt=O[Ct],mt=At+ct(wt,Ct),xt+=pt(wt,it,bt,mt,q);else if(Ct=y(O),typeof Ct=="function")for(O=Ct.call(O),Ct=0;!(wt=O.next()).done;)wt=wt.value,mt=At+ct(wt,Ct++),xt+=pt(wt,it,bt,mt,q);else if(mt==="object"){if(typeof O.then=="function")return pt(_t(O),it,bt,wt,q);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function X(O,it,bt){if(O==null)return O;var wt=[],q=0;return pt(O,wt,"","",function(mt){return it.call(bt,mt,q++)}),wt}function rt(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(bt){(O._status===0||O._status===-1)&&(O._status=1,O._result=bt)},function(bt){(O._status===0||O._status===-1)&&(O._status=2,O._result=bt)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var Z=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Et(){}return le.Children={map:X,forEach:function(O,it,bt){X(O,function(){it.apply(this,arguments)},bt)},count:function(O){var it=0;return X(O,function(){it++}),it},toArray:function(O){return X(O,function(it){return it})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},le.Component=S,le.Fragment=n,le.Profiler=o,le.PureComponent=U,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.act=function(){throw Error("act(...) is not supported in production builds of React.")},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cloneElement=function(O,it,bt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var wt=M({},O.props),q=O.key,mt=void 0;if(it!=null)for(xt in it.ref!==void 0&&(mt=void 0),it.key!==void 0&&(q=""+it.key),it)!z.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(wt[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)wt.children=bt;else if(1<xt){for(var At=Array(xt),Ct=0;Ct<xt;Ct++)At[Ct]=arguments[Ct+2];wt.children=At}return F(O.type,q,void 0,void 0,mt,wt)},le.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},le.createElement=function(O,it,bt){var wt,q={},mt=null;if(it!=null)for(wt in it.key!==void 0&&(mt=""+it.key),it)z.call(it,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(q[wt]=it[wt]);var xt=arguments.length-2;if(xt===1)q.children=bt;else if(1<xt){for(var At=Array(xt),Ct=0;Ct<xt;Ct++)At[Ct]=arguments[Ct+2];q.children=At}if(O&&O.defaultProps)for(wt in xt=O.defaultProps,xt)q[wt]===void 0&&(q[wt]=xt[wt]);return F(O,mt,void 0,void 0,null,q)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:h,render:O}},le.isValidElement=w,le.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:rt}},le.memo=function(O,it){return{$$typeof:d,type:O,compare:it===void 0?null:it}},le.startTransition=function(O){var it=B.T,bt={};B.T=bt;try{var wt=O(),q=B.S;q!==null&&q(bt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(Et,Z)}catch(mt){Z(mt)}finally{B.T=it}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(O){return B.H.use(O)},le.useActionState=function(O,it,bt){return B.H.useActionState(O,it,bt)},le.useCallback=function(O,it){return B.H.useCallback(O,it)},le.useContext=function(O){return B.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,it){return B.H.useDeferredValue(O,it)},le.useEffect=function(O,it){return B.H.useEffect(O,it)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(O,it,bt){return B.H.useImperativeHandle(O,it,bt)},le.useInsertionEffect=function(O,it){return B.H.useInsertionEffect(O,it)},le.useLayoutEffect=function(O,it){return B.H.useLayoutEffect(O,it)},le.useMemo=function(O,it){return B.H.useMemo(O,it)},le.useOptimistic=function(O,it){return B.H.useOptimistic(O,it)},le.useReducer=function(O,it,bt){return B.H.useReducer(O,it,bt)},le.useRef=function(O){return B.H.useRef(O)},le.useState=function(O){return B.H.useState(O)},le.useSyncExternalStore=function(O,it,bt){return B.H.useSyncExternalStore(O,it,bt)},le.useTransition=function(){return B.H.useTransition()},le.version="19.0.0",le}var J_;function lp(){return J_||(J_=1,Ah.exports=Jx()),Ah.exports}var ft=lp(),Rh={exports:{}},ko={},wh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function $x(){return $_||($_=1,function(a){function t(X,rt){var Z=X.length;X.push(rt);t:for(;0<Z;){var Et=Z-1>>>1,O=X[Et];if(0<o(O,rt))X[Et]=rt,X[Z]=O,Z=Et;else break t}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var rt=X[0],Z=X.pop();if(Z!==rt){X[0]=Z;t:for(var Et=0,O=X.length,it=O>>>1;Et<it;){var bt=2*(Et+1)-1,wt=X[bt],q=bt+1,mt=X[q];if(0>o(wt,Z))q<O&&0>o(mt,wt)?(X[Et]=mt,X[q]=Z,Et=q):(X[Et]=wt,X[bt]=Z,Et=bt);else if(q<O&&0>o(mt,Z))X[Et]=mt,X[q]=Z,Et=q;else break t}}return rt}function o(X,rt){var Z=X.sortIndex-rt.sortIndex;return Z!==0?Z:X.id-rt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],d=[],g=1,v=null,y=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(X){for(var rt=n(d);rt!==null;){if(rt.callback===null)r(d);else if(rt.startTime<=X)r(d),rt.sortIndex=rt.expirationTime,t(m,rt);else break;rt=n(d)}}function D(X){if(T=!1,L(X),!M)if(n(m)!==null)M=!0,_t();else{var rt=n(d);rt!==null&&pt(D,rt.startTime-X)}}var B=!1,z=-1,F=5,Y=-1;function w(){return!(a.unstable_now()-Y<F)}function A(){if(B){var X=a.unstable_now();Y=X;var rt=!0;try{t:{M=!1,T&&(T=!1,_(z),z=-1),x=!0;var Z=y;try{e:{for(L(X),v=n(m);v!==null&&!(v.expirationTime>X&&w());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,y=v.priorityLevel;var O=Et(v.expirationTime<=X);if(X=a.unstable_now(),typeof O=="function"){v.callback=O,L(X),rt=!0;break e}v===n(m)&&r(m),L(X)}else r(m);v=n(m)}if(v!==null)rt=!0;else{var it=n(d);it!==null&&pt(D,it.startTime-X),rt=!1}}break t}finally{v=null,y=Z,x=!1}rt=void 0}}finally{rt?H():B=!1}}}var H;if(typeof U=="function")H=function(){U(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=A,H=function(){at.postMessage(null)}}else H=function(){S(A,0)};function _t(){B||(B=!0,H())}function pt(X,rt){z=S(function(){X(a.unstable_now())},rt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){M||x||(M=!0,_t())},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_getFirstCallbackNode=function(){return n(m)},a.unstable_next=function(X){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var Z=y;y=rt;try{return X()}finally{y=Z}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,rt){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=y;y=X;try{return rt()}finally{y=Z}},a.unstable_scheduleCallback=function(X,rt,Z){var Et=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Et+Z:Et):Z=Et,X){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Z+O,X={id:g++,callback:rt,priorityLevel:X,startTime:Z,expirationTime:O,sortIndex:-1},Z>Et?(X.sortIndex=Z,t(d,X),n(m)===null&&X===n(d)&&(T?(_(z),z=-1):T=!0,pt(D,Z-Et))):(X.sortIndex=O,t(m,X),M||x||(M=!0,_t())),X},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(X){var rt=y;return function(){var Z=y;y=rt;try{return X.apply(this,arguments)}finally{y=Z}}}}(Ch)),Ch}var tv;function tE(){return tv||(tv=1,wh.exports=$x()),wh.exports}var Dh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function eE(){if(ev)return wn;ev=1;var a=lp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:d,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(m,d,null,g)},wn.flushSync=function(m){var d=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=d,r.p=g,r.d.f()}},wn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:x}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},wn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},wn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},wn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,d){return m(d)},wn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var nv;function nE(){if(nv)return Dh.exports;nv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Dh.exports=eE(),Dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function iE(){if(iv)return ko;iv=1;var a=tE(),t=lp(),n=nE();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),x=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case h:return"Portal";case g:return"Profiler";case d:return"StrictMode";case T:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case M:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return i=e.displayName||null,i!==null?i:Y(e.type)||"Memo";case U:i=e._payload,e=e._init;try{return Y(e(i))}catch{}}return null}var w=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,ct;function at(e){if(H===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);H=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+ct}var _t=!1;function pt(e,i){if(!e||_t)return"";_t=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var nt=lt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(lt){nt=lt}e.call(yt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),E=p[0],R=p[1];if(E&&R){var P=E.split(`
`),V=R.split(`
`);for(c=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(l===P.length||c===V.length)for(l=P.length-1,c=V.length-1;1<=l&&0<=c&&P[l]!==V[c];)c--;for(;1<=l&&0<=c;l--,c--)if(P[l]!==V[c]){if(l!==1||c!==1)do if(l--,c--,0>c||P[l]!==V[c]){var ut=`
`+P[l].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=l&&0<=c);break}}}finally{_t=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?at(s):""}function X(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=pt(e.type,!1),e;case 11:return e=pt(e.type.render,!1),e;case 1:return e=pt(e.type,!0),e;default:return""}}function rt(e){try{var i="";do i+=X(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Z(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function Et(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function O(e){if(Z(e)!==e)throw Error(r(188))}function it(e){var i=e.alternate;if(!i){if(i=Z(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,l=i;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return O(c),e;if(p===l)return O(c),i;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=c,l=p;else{for(var E=!1,R=c.child;R;){if(R===s){E=!0,s=c,l=p;break}if(R===l){E=!0,l=c,s=p;break}R=R.sibling}if(!E){for(R=p.child;R;){if(R===s){E=!0,s=p,l=c;break}if(R===l){E=!0,l=p,s=c;break}R=R.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function bt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=bt(e),i!==null)return i;e=e.sibling}return null}var wt=Array.isArray,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},xt=[],At=-1;function Ct(e){return{current:e}}function Jt(e){0>At||(e.current=xt[At],xt[At]=null,At--)}function Ft(e,i){At++,xt[At]=e.current,e.current=i}var Te=Ct(null),Ue=Ct(null),re=Ct(null),I=Ct(null);function xn(e,i){switch(Ft(re,i),Ft(Ue,e),Ft(Te,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?T_(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=T_(e),i=b_(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}Jt(Te),Ft(Te,i)}function fe(){Jt(Te),Jt(Ue),Jt(re)}function pe(e){e.memoizedState!==null&&Ft(I,e);var i=Te.current,s=b_(i,e.type);i!==s&&(Ft(Ue,e),Ft(Te,s))}function Wt(e){Ue.current===e&&(Jt(Te),Jt(Ue)),I.current===e&&(Jt(I),Fo._currentValue=mt)}var Le=Object.prototype.hasOwnProperty,qt=a.unstable_scheduleCallback,N=a.unstable_cancelCallback,b=a.unstable_shouldYield,tt=a.unstable_requestPaint,ht=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,dt=a.unstable_ImmediatePriority,Vt=a.unstable_UserBlockingPriority,Ut=a.unstable_NormalPriority,zt=a.unstable_LowPriority,ve=a.unstable_IdlePriority,Tt=a.log,It=a.unstable_setDisableYieldValue,Qt=null,kt=null;function Ht(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof Tt=="function"&&It(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Ot,Ne=Math.log,k=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Ne(e)/k|0)|0}var ot=128,vt=4194304;function Dt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,i){var s=e.pendingLanes;if(s===0)return 0;var l=0,c=e.suspendedLanes,p=e.pingedLanes,E=e.warmLanes;e=e.finishedLanes!==0;var R=s&134217727;return R!==0?(s=R&~c,s!==0?l=Dt(s):(p&=R,p!==0?l=Dt(p):e||(E=R&~E,E!==0&&(l=Dt(E))))):(R=s&~c,R!==0?l=Dt(R):p!==0?l=Dt(p):e||(E=s&~E,E!==0&&(l=Dt(E)))),l===0?0:i!==0&&i!==l&&(i&c)===0&&(c=l&-l,E=i&-i,c>=E||c===32&&(E&4194176)!==0)?i:l}function ee(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Xe(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function on(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function be(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function Nn(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gl(e,i,s,l,c,p){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(s=E&~s;0<s;){var ut=31-Zt(s),yt=1<<ut;R[ut]=0,P[ut]=-1;var nt=V[ut];if(nt!==null)for(V[ut]=null,ut=0;ut<nt.length;ut++){var lt=nt[ut];lt!==null&&(lt.lane&=-536870913)}s&=~yt}l!==0&&Ys(e,l,0),p!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=p&~(E&~i))}function Ys(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194218}function Di(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Zt(s),c=1<<l;c&i|e[l]&i&&(e[l]|=i),s&=~c}}function Hr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function js(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:k_(e.type))}function _l(e,i){var s=q.p;try{return q.p=e,i()}finally{q.p=s}}var Zn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Zn,un="__reactProps$"+Zn,Xi="__reactContainer$"+Zn,Gr="__reactEvents$"+Zn,Ec="__reactListeners$"+Zn,Mc="__reactHandles$"+Zn,vl="__reactResources$"+Zn,er="__reactMarker$"+Zn;function Zs(e){delete e[ln],delete e[un],delete e[Gr],delete e[Ec],delete e[Mc]}function Wi(e){var i=e[ln];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Xi]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=w_(e);e!==null;){if(s=e[ln])return s;e=w_(e)}return i}e=s,s=e.parentNode}return null}function C(e){if(e=e[ln]||e[Xi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function W(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function et(e){var i=e[vl];return i||(i=e[vl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Q(e){e[er]=!0}var j=new Set,Mt={};function Rt(e,i){Bt(e,i),Bt(e+"Capture",i)}function Bt(e,i){for(Mt[e]=i,e=0;e<i.length;e++)j.add(i[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},jt={};function ye(e){return Le.call(jt,e)?!0:Le.call(te,e)?!1:ne.test(e)?jt[e]=!0:(te[e]=!0,!1)}function Se(e,i,s){if(ye(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function ke(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ae(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function cn(e){var i=Kt(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function xe(e){e._valueTracker||(e._valueTracker=cn(e))}function Hn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Kt(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function gn(e){return e.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Oe(e,i,s,l,c,p,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ie(i)):e.value!==""+ie(i)&&(e.value=""+ie(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?An(e,E,ie(i)):s!=null?An(e,E,ie(s)):l!=null&&e.removeAttribute("value"),c==null&&p!=null&&(e.defaultChecked=!!p),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Bn(e,i,s,l,c,p,E,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+ie(s):"",i=i!=null?""+ie(i):s,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function An(e,i,s){i==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function je(e,i,s,l){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ie(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function En(e,i,s){if(i!=null&&(i=""+ie(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ie(s):""}function Vr(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(wt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ie(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Gn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Yy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Yy.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Np(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in i)l=i[c],i.hasOwnProperty(c)&&s[c]!==l&&Lp(e,c,l)}else for(var p in i)i.hasOwnProperty(p)&&Lp(e,p,i[p])}function Tc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(e){return Zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bc=null;function Ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kr=null,Xr=null;function Op(e){var i=C(e);if(i&&(e=i.stateNode)){var s=e[un]||null;t:switch(e=i.stateNode,i.type){case"input":if(Oe(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+gn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var c=l[un]||null;if(!c)throw Error(r(90));Oe(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Hn(l)}break t;case"textarea":En(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&je(e,!!s.multiple,i,!1)}}}var Rc=!1;function Pp(e,i,s){if(Rc)return e(i,s);Rc=!0;try{var l=e(i);return l}finally{if(Rc=!1,(kr!==null||Xr!==null)&&(nu(),kr&&(i=kr,e=Xr,Xr=kr=null,Op(i),e)))for(i=0;i<e.length;i++)Op(e[i])}}function Ks(e,i){var s=e.stateNode;if(s===null)return null;var l=s[un]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var wc=!1;if(Pt)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{wc=!1}var xa=null,Cc=null,Sl=null;function Bp(){if(Sl)return Sl;var e,i=Cc,s=i.length,l,c="value"in xa?xa.value:xa.textContent,p=c.length;for(e=0;e<s&&i[e]===c[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===c[p-l];l++);return Sl=c.slice(e,1<l?1-l:void 0)}function xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function Fp(){return!1}function Vn(e){function i(s,l,c,p,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?El:Fp,this.isPropagationStopped=Fp,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Vn(nr),Js=A({},nr,{view:0,detail:0}),Ky=Vn(Js),Dc,Uc,$s,Tl=A({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$s&&($s&&e.type==="mousemove"?(Dc=e.screenX-$s.screenX,Uc=e.screenY-$s.screenY):Uc=Dc=0,$s=e),Dc)},movementY:function(e){return"movementY"in e?e.movementY:Uc}}),zp=Vn(Tl),Qy=A({},Tl,{dataTransfer:0}),Jy=Vn(Qy),$y=A({},Js,{relatedTarget:0}),Lc=Vn($y),tS=A({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Vn(tS),nS=A({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iS=Vn(nS),aS=A({},nr,{data:0}),Ip=Vn(aS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=oS[e])?!!i[e]:!1}function Nc(){return lS}var uS=A({},Js,{key:function(e){if(e.key){var i=rS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=Vn(uS),fS=A({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Vn(fS),hS=A({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),dS=Vn(hS),pS=A({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Vn(pS),gS=A({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Vn(gS),vS=A({},nr,{newState:0,oldState:0}),yS=Vn(vS),SS=[9,13,27,32],Oc=Pt&&"CompositionEvent"in window,to=null;Pt&&"documentMode"in document&&(to=document.documentMode);var xS=Pt&&"TextEvent"in window&&!to,Gp=Pt&&(!Oc||to&&8<to&&11>=to),Vp=" ",kp=!1;function Xp(e,i){switch(e){case"keyup":return SS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function ES(e,i){switch(e){case"compositionend":return Wp(i);case"keypress":return i.which!==32?null:(kp=!0,Vp);case"textInput":return e=i.data,e===Vp&&kp?null:e;default:return null}}function MS(e,i){if(Wr)return e==="compositionend"||!Oc&&Xp(e,i)?(e=Bp(),Sl=Cc=xa=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gp&&i.locale!=="ko"?null:i.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!TS[e.type]:i==="textarea"}function Yp(e,i,s,l){kr?Xr?Xr.push(l):Xr=[l]:kr=l,i=ou(i,"onChange"),0<i.length&&(s=new Ml("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var eo=null,no=null;function bS(e){y_(e,0)}function bl(e){var i=W(e);if(Hn(i))return e}function jp(e,i){if(e==="change")return i}var Zp=!1;if(Pt){var Pc;if(Pt){var Bc="oninput"in document;if(!Bc){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Bc=typeof Kp.oninput=="function"}Pc=Bc}else Pc=!1;Zp=Pc&&(!document.documentMode||9<document.documentMode)}function Qp(){eo&&(eo.detachEvent("onpropertychange",Jp),no=eo=null)}function Jp(e){if(e.propertyName==="value"&&bl(no)){var i=[];Yp(i,no,e,Ac(e)),Pp(bS,i)}}function AS(e,i,s){e==="focusin"?(Qp(),eo=i,no=s,eo.attachEvent("onpropertychange",Jp)):e==="focusout"&&Qp()}function RS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(no)}function wS(e,i){if(e==="click")return bl(i)}function CS(e,i){if(e==="input"||e==="change")return bl(i)}function DS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:DS;function io(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!Le.call(i,c)||!Kn(e[c],i[c]))return!1}return!0}function $p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tm(e,i){var s=$p(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=$p(s)}}function em(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?em(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function nm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_i(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_i(e.document)}return i}function Fc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function US(e,i){var s=nm(i);i=e.focusedElem;var l=e.selectionRange;if(s!==i&&i&&i.ownerDocument&&em(i.ownerDocument.documentElement,i)){if(l!==null&&Fc(i)){if(e=l.start,s=l.end,s===void 0&&(s=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(s,i.value.length);else if(s=(e=i.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var c=i.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!s.extend&&p>l&&(c=l,l=p,p=c),c=tm(i,p);var E=tm(i,l);c&&E&&(s.rangeCount!==1||s.anchorNode!==c.node||s.anchorOffset!==c.offset||s.focusNode!==E.node||s.focusOffset!==E.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),s.removeAllRanges(),p>l?(s.addRange(e),s.extend(E.node,E.offset)):(e.setEnd(E.node,E.offset),s.addRange(e)))}}for(e=[],s=i;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)s=e[i],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var LS=Pt&&"documentMode"in document&&11>=document.documentMode,qr=null,zc=null,ao=null,Ic=!1;function im(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ic||qr==null||qr!==_i(l)||(l=qr,"selectionStart"in l&&Fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&io(ao,l)||(ao=l,l=ou(zc,"onSelect"),0<l.length&&(i=new Ml("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=qr)))}function ir(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Yr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Hc={},am={};Pt&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function ar(e){if(Hc[e])return Hc[e];if(!Yr[e])return e;var i=Yr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in am)return Hc[e]=i[s];return e}var rm=ar("animationend"),sm=ar("animationiteration"),om=ar("animationstart"),NS=ar("transitionrun"),OS=ar("transitionstart"),PS=ar("transitioncancel"),lm=ar("transitionend"),um=new Map,cm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function vi(e,i){um.set(e,i),Rt(i,[e])}var ai=[],jr=0,Gc=0;function Al(){for(var e=jr,i=Gc=jr=0;i<e;){var s=ai[i];ai[i++]=null;var l=ai[i];ai[i++]=null;var c=ai[i];ai[i++]=null;var p=ai[i];if(ai[i++]=null,l!==null&&c!==null){var E=l.pending;E===null?c.next=c:(c.next=E.next,E.next=c),l.pending=c}p!==0&&fm(s,c,p)}}function Rl(e,i,s,l){ai[jr++]=e,ai[jr++]=i,ai[jr++]=s,ai[jr++]=l,Gc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Vc(e,i,s,l){return Rl(e,i,s,l),wl(e)}function Ea(e,i){return Rl(e,null,null,i),wl(e)}function fm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var c=!1,p=e.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(c=!0)),e=p,p=p.return;c&&i!==null&&e.tag===3&&(p=e.stateNode,c=31-Zt(s),p=p.hiddenUpdates,e=p[c],e===null?p[c]=[i]:e.push(i),i.lane=s|536870912)}function wl(e){if(50<Do)throw Do=0,Zf=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Zr={},hm=new WeakMap;function ri(e,i){if(typeof e=="object"&&e!==null){var s=hm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:rt(i)},hm.set(e,i),i)}return{value:e,source:i,stack:rt(i)}}var Kr=[],Qr=0,Cl=null,Dl=0,si=[],oi=0,rr=null,qi=1,Yi="";function sr(e,i){Kr[Qr++]=Dl,Kr[Qr++]=Cl,Cl=e,Dl=i}function dm(e,i,s){si[oi++]=qi,si[oi++]=Yi,si[oi++]=rr,rr=e;var l=qi;e=Yi;var c=32-Zt(l)-1;l&=~(1<<c),s+=1;var p=32-Zt(i)+c;if(30<p){var E=c-c%5;p=(l&(1<<E)-1).toString(32),l>>=E,c-=E,qi=1<<32-Zt(i)+c|s<<c|l,Yi=p+e}else qi=1<<p|s<<c|l,Yi=e}function kc(e){e.return!==null&&(sr(e,1),dm(e,1,0))}function Xc(e){for(;e===Cl;)Cl=Kr[--Qr],Kr[Qr]=null,Dl=Kr[--Qr],Kr[Qr]=null;for(;e===rr;)rr=si[--oi],si[oi]=null,Yi=si[--oi],si[oi]=null,qi=si[--oi],si[oi]=null}var Fn=null,Mn=null,Re=!1,yi=null,Ui=!1,Wc=Error(r(519));function or(e){var i=Error(r(418,""));throw oo(ri(i,e)),Wc}function pm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[ln]=e,i[un]=l,s){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(s=0;s<Lo.length;s++)Ee(Lo[s],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Bn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),xe(i);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Vr(i,l.value,l.defaultValue,l.children),xe(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||M_(i.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=lu),i=!0):i=!1,i||or(e)}function mm(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 3:case 27:Ui=!0;return;case 5:case 13:Ui=!1;return;default:Fn=Fn.return}}function ro(e){if(e!==Fn)return!1;if(!Re)return mm(e),Re=!0,!1;var i=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||hh(e.type,e.memoizedProps)),s=!s),s&&(i=!0),i&&Mn&&or(e),mm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){Mn=xi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}Mn=null}}else Mn=Fn?xi(e.stateNode.nextSibling):null;return!0}function so(){Mn=Fn=null,Re=!1}function oo(e){yi===null?yi=[e]:yi.push(e)}var lo=Error(r(460)),gm=Error(r(474)),qc={then:function(){}};function _m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ul(){}function vm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Ul,Ul),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===lo?Error(r(483)):e;default:if(typeof i.status=="string")i.then(Ul,Ul);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=l}},function(l){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===lo?Error(r(483)):e}throw uo=i,lo}}var uo=null;function ym(){if(uo===null)throw Error(r(459));var e=uo;return uo=null,e}var Jr=null,co=0;function Ll(e){var i=co;return co+=1,Jr===null&&(Jr=[]),vm(Jr,e,i)}function fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nl(e,i){throw i.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Sm(e){var i=e._init;return i(e._payload)}function xm(e){function i(K,G){if(e){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function s(K,G){if(!e)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function l(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function c(K,G){return K=Oa(K,G),K.index=0,K.sibling=null,K}function p(K,G,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=33554434,G):J):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function E(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function R(K,G,J,gt){return G===null||G.tag!==6?(G=Gf(J,K.mode,gt),G.return=K,G):(G=c(G,J),G.return=K,G)}function P(K,G,J,gt){var Gt=J.type;return Gt===m?ut(K,G,J.props.children,gt,J.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===U&&Sm(Gt)===G.type)?(G=c(G,J.props),fo(G,J),G.return=K,G):(G=Ql(J.type,J.key,J.props,null,K.mode,gt),fo(G,J),G.return=K,G)}function V(K,G,J,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Vf(J,K.mode,gt),G.return=K,G):(G=c(G,J.children||[]),G.return=K,G)}function ut(K,G,J,gt,Gt){return G===null||G.tag!==7?(G=_r(J,K.mode,gt,Gt),G.return=K,G):(G=c(G,J),G.return=K,G)}function yt(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Gf(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return J=Ql(G.type,G.key,G.props,null,K.mode,J),fo(J,G),J.return=K,J;case h:return G=Vf(G,K.mode,J),G.return=K,G;case U:var gt=G._init;return G=gt(G._payload),yt(K,G,J)}if(wt(G)||z(G))return G=_r(G,K.mode,J,null),G.return=K,G;if(typeof G.then=="function")return yt(K,Ll(G),J);if(G.$$typeof===x)return yt(K,jl(K,G),J);Nl(K,G)}return null}function nt(K,G,J,gt){var Gt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:R(K,G,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case f:return J.key===Gt?P(K,G,J,gt):null;case h:return J.key===Gt?V(K,G,J,gt):null;case U:return Gt=J._init,J=Gt(J._payload),nt(K,G,J,gt)}if(wt(J)||z(J))return Gt!==null?null:ut(K,G,J,gt,null);if(typeof J.then=="function")return nt(K,G,Ll(J),gt);if(J.$$typeof===x)return nt(K,G,jl(K,J),gt);Nl(K,J)}return null}function lt(K,G,J,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(J)||null,R(G,K,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case f:return K=K.get(gt.key===null?J:gt.key)||null,P(G,K,gt,Gt);case h:return K=K.get(gt.key===null?J:gt.key)||null,V(G,K,gt,Gt);case U:var me=gt._init;return gt=me(gt._payload),lt(K,G,J,gt,Gt)}if(wt(gt)||z(gt))return K=K.get(J)||null,ut(G,K,gt,Gt,null);if(typeof gt.then=="function")return lt(K,G,J,Ll(gt),Gt);if(gt.$$typeof===x)return lt(K,G,J,jl(G,gt),Gt);Nl(G,gt)}return null}function Xt(K,G,J,gt){for(var Gt=null,me=null,Yt=G,$t=G=0,yn=null;Yt!==null&&$t<J.length;$t++){Yt.index>$t?(yn=Yt,Yt=null):yn=Yt.sibling;var we=nt(K,Yt,J[$t],gt);if(we===null){Yt===null&&(Yt=yn);break}e&&Yt&&we.alternate===null&&i(K,Yt),G=p(we,G,$t),me===null?Gt=we:me.sibling=we,me=we,Yt=yn}if($t===J.length)return s(K,Yt),Re&&sr(K,$t),Gt;if(Yt===null){for(;$t<J.length;$t++)Yt=yt(K,J[$t],gt),Yt!==null&&(G=p(Yt,G,$t),me===null?Gt=Yt:me.sibling=Yt,me=Yt);return Re&&sr(K,$t),Gt}for(Yt=l(Yt);$t<J.length;$t++)yn=lt(Yt,K,$t,J[$t],gt),yn!==null&&(e&&yn.alternate!==null&&Yt.delete(yn.key===null?$t:yn.key),G=p(yn,G,$t),me===null?Gt=yn:me.sibling=yn,me=yn);return e&&Yt.forEach(function(Ga){return i(K,Ga)}),Re&&sr(K,$t),Gt}function ae(K,G,J,gt){if(J==null)throw Error(r(151));for(var Gt=null,me=null,Yt=G,$t=G=0,yn=null,we=J.next();Yt!==null&&!we.done;$t++,we=J.next()){Yt.index>$t?(yn=Yt,Yt=null):yn=Yt.sibling;var Ga=nt(K,Yt,we.value,gt);if(Ga===null){Yt===null&&(Yt=yn);break}e&&Yt&&Ga.alternate===null&&i(K,Yt),G=p(Ga,G,$t),me===null?Gt=Ga:me.sibling=Ga,me=Ga,Yt=yn}if(we.done)return s(K,Yt),Re&&sr(K,$t),Gt;if(Yt===null){for(;!we.done;$t++,we=J.next())we=yt(K,we.value,gt),we!==null&&(G=p(we,G,$t),me===null?Gt=we:me.sibling=we,me=we);return Re&&sr(K,$t),Gt}for(Yt=l(Yt);!we.done;$t++,we=J.next())we=lt(Yt,K,$t,we.value,gt),we!==null&&(e&&we.alternate!==null&&Yt.delete(we.key===null?$t:we.key),G=p(we,G,$t),me===null?Gt=we:me.sibling=we,me=we);return e&&Yt.forEach(function(Zx){return i(K,Zx)}),Re&&sr(K,$t),Gt}function Qe(K,G,J,gt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case f:t:{for(var Gt=J.key;G!==null;){if(G.key===Gt){if(Gt=J.type,Gt===m){if(G.tag===7){s(K,G.sibling),gt=c(G,J.props.children),gt.return=K,K=gt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===U&&Sm(Gt)===G.type){s(K,G.sibling),gt=c(G,J.props),fo(gt,J),gt.return=K,K=gt;break t}s(K,G);break}else i(K,G);G=G.sibling}J.type===m?(gt=_r(J.props.children,K.mode,gt,J.key),gt.return=K,K=gt):(gt=Ql(J.type,J.key,J.props,null,K.mode,gt),fo(gt,J),gt.return=K,K=gt)}return E(K);case h:t:{for(Gt=J.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){s(K,G.sibling),gt=c(G,J.children||[]),gt.return=K,K=gt;break t}else{s(K,G);break}else i(K,G);G=G.sibling}gt=Vf(J,K.mode,gt),gt.return=K,K=gt}return E(K);case U:return Gt=J._init,J=Gt(J._payload),Qe(K,G,J,gt)}if(wt(J))return Xt(K,G,J,gt);if(z(J)){if(Gt=z(J),typeof Gt!="function")throw Error(r(150));return J=Gt.call(J),ae(K,G,J,gt)}if(typeof J.then=="function")return Qe(K,G,Ll(J),gt);if(J.$$typeof===x)return Qe(K,G,jl(K,J),gt);Nl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(s(K,G.sibling),gt=c(G,J),gt.return=K,K=gt):(s(K,G),gt=Gf(J,K.mode,gt),gt.return=K,K=gt),E(K)):s(K,G)}return function(K,G,J,gt){try{co=0;var Gt=Qe(K,G,J,gt);return Jr=null,Gt}catch(Yt){if(Yt===lo)throw Yt;var me=fi(29,Yt,null,K.mode);return me.lanes=gt,me.return=K,me}finally{}}}var lr=xm(!0),Em=xm(!1),$r=Ct(null),Ol=Ct(0);function Mm(e,i){e=aa,Ft(Ol,e),Ft($r,i),aa=e|i.baseLanes}function Yc(){Ft(Ol,aa),Ft($r,$r.current)}function jc(){aa=Ol.current,Jt($r),Jt(Ol)}var li=Ct(null),Li=null;function Ma(e){var i=e.alternate;Ft(fn,fn.current&1),Ft(li,e),Li===null&&(i===null||$r.current!==null||i.memoizedState!==null)&&(Li=e)}function Tm(e){if(e.tag===22){if(Ft(fn,fn.current),Ft(li,e),Li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Li=e)}}else Ta()}function Ta(){Ft(fn,fn.current),Ft(li,li.current)}function ji(e){Jt(li),Li===e&&(Li=null),Jt(fn)}var fn=Ct(0);function Pl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var BS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},FS=a.unstable_scheduleCallback,zS=a.unstable_NormalPriority,hn={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new BS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&FS(zS,function(){e.controller.abort()})}var po=null,Kc=0,ts=0,es=null;function IS(e,i){if(po===null){var s=po=[];Kc=0,ts=ih(),es={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Kc++,i.then(bm,bm),i}function bm(){if(--Kc===0&&po!==null){es!==null&&(es.status="fulfilled");var e=po;po=null,ts=0,es=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function HS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(l.status="rejected",l.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),l}var Am=w.S;w.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&IS(e,i),Am!==null&&Am(e,i)};var ur=Ct(null);function Qc(){var e=ur.current;return e!==null?e:He.pooledCache}function Bl(e,i){i===null?Ft(ur,ur.current):Ft(ur,i.pool)}function Rm(){var e=Qc();return e===null?null:{parent:hn._currentValue,pool:e}}var ba=0,de=null,Pe=null,nn=null,Fl=!1,ns=!1,cr=!1,zl=0,mo=0,is=null,GS=0;function tn(){throw Error(r(321))}function Jc(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function $c(e,i,s,l,c,p){return ba=p,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,w.H=e===null||e.memoizedState===null?fr:Aa,cr=!1,p=s(l,c),cr=!1,ns&&(p=Cm(i,s,l,c)),wm(e),p}function wm(e){w.H=Ni;var i=Pe!==null&&Pe.next!==null;if(ba=0,nn=Pe=de=null,Fl=!1,mo=0,is=null,i)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&Yl(e)&&(_n=!0))}function Cm(e,i,s,l){de=e;var c=0;do{if(ns&&(is=null),mo=0,ns=!1,25<=c)throw Error(r(301));if(c+=1,nn=Pe=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}w.H=hr,p=i(s,l)}while(ns);return p}function VS(){var e=w.H,i=e.useState()[0];return i=typeof i.then=="function"?go(i):i,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(de.flags|=1024),i}function tf(){var e=zl!==0;return zl=0,e}function ef(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function nf(e){if(Fl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Fl=!1}ba=0,nn=Pe=de=null,ns=!1,mo=zl=0,is=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?de.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Pe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var i=nn===null?de.memoizedState:nn.next;if(i!==null)nn=i,Pe=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},nn===null?de.memoizedState=nn=e:nn=nn.next=e}return nn}var Il;Il=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function go(e){var i=mo;return mo+=1,is===null&&(is=[]),e=vm(is,e,i),i=de,(nn===null?i.memoizedState:nn.next)===null&&(i=i.alternate,w.H=i===null||i.memoizedState===null?fr:Aa),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===x)return Rn(e)}throw Error(r(438,String(e)))}function af(e){var i=null,s=de.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=de.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Il(),de.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function Zi(e,i){return typeof i=="function"?i(e):i}function Gl(e){var i=an();return rf(i,Pe,e)}function rf(e,i,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var c=e.baseQueue,p=l.pending;if(p!==null){if(c!==null){var E=c.next;c.next=p.next,p.next=E}i.baseQueue=c=p,l.pending=null}if(p=e.baseState,c===null)e.memoizedState=p;else{i=c.next;var R=E=null,P=null,V=i,ut=!1;do{var yt=V.lane&-536870913;if(yt!==V.lane?(Me&yt)===yt:(ba&yt)===yt){var nt=V.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),yt===ts&&(ut=!0);else if((ba&nt)===nt){V=V.next,nt===ts&&(ut=!0);continue}else yt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=yt,E=p):P=P.next=yt,de.lanes|=nt,Pa|=nt;yt=V.action,cr&&s(p,yt),p=V.hasEagerState?V.eagerState:s(p,yt)}else nt={lane:yt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=nt,E=p):P=P.next=nt,de.lanes|=yt,Pa|=yt;V=V.next}while(V!==null&&V!==i);if(P===null?E=p:P.next=R,!Kn(p,e.memoizedState)&&(_n=!0,ut&&(s=es,s!==null)))throw s;e.memoizedState=p,e.baseState=E,e.baseQueue=P,l.lastRenderedState=p}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sf(e){var i=an(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,c=s.pending,p=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do p=e(p,E.action),E=E.next;while(E!==c);Kn(p,i.memoizedState)||(_n=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Dm(e,i,s){var l=de,c=an(),p=Re;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!Kn((Pe||c).memoizedState,s);if(E&&(c.memoizedState=s,_n=!0),c=c.queue,uf(Nm.bind(null,l,c,e),[e]),c.getSnapshot!==i||E||nn!==null&&nn.memoizedState.tag&1){if(l.flags|=2048,as(9,Lm.bind(null,l,c,s,i),{destroy:void 0},null),He===null)throw Error(r(349));p||(ba&60)!==0||Um(l,i,s)}return s}function Um(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=de.updateQueue,i===null?(i=Il(),de.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Lm(e,i,s,l){i.value=s,i.getSnapshot=l,Om(i)&&Pm(e)}function Nm(e,i,s){return s(function(){Om(i)&&Pm(e)})}function Om(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function Pm(e){var i=Ea(e,2);i!==null&&zn(i,e,2)}function of(e){var i=kn();if(typeof e=="function"){var s=e;if(e=s(),cr){se(!0);try{s()}finally{se(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},i}function Bm(e,i,s,l){return e.baseState=s,rf(e,Pe,typeof l=="function"?l:Zi)}function kS(e,i,s,l,c){if(Xl(e))throw Error(r(485));if(e=i.action,e!==null){var p={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};w.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,Fm(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Fm(e,i){var s=i.action,l=i.payload,c=e.state;if(i.isTransition){var p=w.T,E={};w.T=E;try{var R=s(c,l),P=w.S;P!==null&&P(E,R),zm(e,i,R)}catch(V){lf(e,i,V)}finally{w.T=p}}else try{p=s(c,l),zm(e,i,p)}catch(V){lf(e,i,V)}}function zm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Im(e,i,l)},function(l){return lf(e,i,l)}):Im(e,i,s)}function Im(e,i,s){i.status="fulfilled",i.value=s,Hm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Fm(e,s)))}function lf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Hm(i),i=i.next;while(i!==l)}e.action=null}function Hm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Gm(e,i){return i}function Vm(e,i){if(Re){var s=He.formState;if(s!==null){t:{var l=de;if(Re){if(Mn){e:{for(var c=Mn,p=Ui;c.nodeType!==8;){if(!p){c=null;break e}if(c=xi(c.nextSibling),c===null){c=null;break e}}p=c.data,c=p==="F!"||p==="F"?c:null}if(c){Mn=xi(c.nextSibling),l=c.data==="F!";break t}}or(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:i},s.queue=l,s=sg.bind(null,de,l),l.dispatch=s,l=of(!1),p=pf.bind(null,de,!1,l.queue),l=kn(),c={state:i,dispatch:null,action:e,pending:null},l.queue=c,s=kS.bind(null,de,c,p,s),c.dispatch=s,l.memoizedState=e,[i,s,!1]}function km(e){var i=an();return Xm(i,Pe,e)}function Xm(e,i,s){i=rf(e,i,Gm)[0],e=Gl(Zi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?go(i):i;var l=an(),c=l.queue,p=c.dispatch;return s!==l.memoizedState&&(de.flags|=2048,as(9,XS.bind(null,c,s),{destroy:void 0},null)),[i,p,e]}function XS(e,i){e.action=i}function Wm(e){var i=an(),s=Pe;if(s!==null)return Xm(i,s,e);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function as(e,i,s,l){return e={tag:e,create:i,inst:s,deps:l,next:null},i=de.updateQueue,i===null&&(i=Il(),de.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function qm(){return an().memoizedState}function Vl(e,i,s,l){var c=kn();de.flags|=e,c.memoizedState=as(1|i,s,{destroy:void 0},l===void 0?null:l)}function kl(e,i,s,l){var c=an();l=l===void 0?null:l;var p=c.memoizedState.inst;Pe!==null&&l!==null&&Jc(l,Pe.memoizedState.deps)?c.memoizedState=as(i,s,p,l):(de.flags|=e,c.memoizedState=as(1|i,s,p,l))}function Ym(e,i){Vl(8390656,8,e,i)}function uf(e,i){kl(2048,8,e,i)}function jm(e,i){return kl(4,2,e,i)}function Zm(e,i){return kl(4,4,e,i)}function Km(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Qm(e,i,s){s=s!=null?s.concat([e]):null,kl(4,4,Km.bind(null,i,e),s)}function cf(){}function Jm(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Jc(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function $m(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Jc(i,l[1]))return l[0];if(l=e(),cr){se(!0);try{e()}finally{se(!1)}}return s.memoizedState=[l,i],l}function ff(e,i,s){return s===void 0||(ba&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=e_(),de.lanes|=e,Pa|=e,s)}function tg(e,i,s,l){return Kn(s,i)?s:$r.current!==null?(e=ff(e,s,l),Kn(e,i)||(_n=!0),e):(ba&42)===0?(_n=!0,e.memoizedState=s):(e=e_(),de.lanes|=e,Pa|=e,i)}function eg(e,i,s,l,c){var p=q.p;q.p=p!==0&&8>p?p:8;var E=w.T,R={};w.T=R,pf(e,!1,i,s);try{var P=c(),V=w.S;if(V!==null&&V(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=HS(P,l);_o(e,i,ut,ti(e))}else _o(e,i,l,ti(e))}catch(yt){_o(e,i,{then:function(){},status:"rejected",reason:yt},ti())}finally{q.p=p,w.T=E}}function WS(){}function hf(e,i,s,l){if(e.tag!==5)throw Error(r(476));var c=ng(e).queue;eg(e,c,i,mt,s===null?WS:function(){return ig(e),s(l)})}function ng(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:mt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ig(e){var i=ng(e).next.queue;_o(e,i,{},ti())}function df(){return Rn(Fo)}function ag(){return an().memoizedState}function rg(){return an().memoizedState}function qS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();e=Ca(s);var l=Da(i,e,s);l!==null&&(zn(l,i,s),So(l,i,s)),i={cache:Zc()},e.payload=i;return}i=i.return}}function YS(e,i,s){var l=ti();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(e)?og(i,s):(s=Vc(e,i,s,l),s!==null&&(zn(s,e,l),lg(s,i,l)))}function sg(e,i,s){var l=ti();_o(e,i,s,l)}function _o(e,i,s,l){var c={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))og(i,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,R=p(E,s);if(c.hasEagerState=!0,c.eagerState=R,Kn(R,E))return Rl(e,i,c,0),He===null&&Al(),!1}catch{}finally{}if(s=Vc(e,i,c,l),s!==null)return zn(s,e,l),lg(s,i,l),!0}return!1}function pf(e,i,s,l){if(l={lane:2,revertLane:ih(),action:l,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(i)throw Error(r(479))}else i=Vc(e,s,l,2),i!==null&&zn(i,e,2)}function Xl(e){var i=e.alternate;return e===de||i!==null&&i===de}function og(e,i){ns=Fl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function lg(e,i,s){if((s&4194176)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Di(e,s)}}var Ni={readContext:Rn,use:Hl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn};Ni.useCacheRefresh=tn,Ni.useMemoCache=tn,Ni.useHostTransitionStatus=tn,Ni.useFormState=tn,Ni.useActionState=tn,Ni.useOptimistic=tn;var fr={readContext:Rn,use:Hl,useCallback:function(e,i){return kn().memoizedState=[e,i===void 0?null:i],e},useContext:Rn,useEffect:Ym,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Vl(4194308,4,Km.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Vl(4194308,4,e,i)},useInsertionEffect:function(e,i){Vl(4,2,e,i)},useMemo:function(e,i){var s=kn();i=i===void 0?null:i;var l=e();if(cr){se(!0);try{e()}finally{se(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=kn();if(s!==void 0){var c=s(i);if(cr){se(!0);try{s(i)}finally{se(!1)}}}else c=i;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=YS.bind(null,de,e),[l.memoizedState,e]},useRef:function(e){var i=kn();return e={current:e},i.memoizedState=e},useState:function(e){e=of(e);var i=e.queue,s=sg.bind(null,de,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:cf,useDeferredValue:function(e,i){var s=kn();return ff(s,e,i)},useTransition:function(){var e=of(!1);return e=eg.bind(null,de,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=de,c=kn();if(Re){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),He===null)throw Error(r(349));(Me&60)!==0||Um(l,i,s)}c.memoizedState=s;var p={value:s,getSnapshot:i};return c.queue=p,Ym(Nm.bind(null,l,p,e),[e]),l.flags|=2048,as(9,Lm.bind(null,l,p,s,i),{destroy:void 0},null),s},useId:function(){var e=kn(),i=He.identifierPrefix;if(Re){var s=Yi,l=qi;s=(l&~(1<<32-Zt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=zl++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=GS++,i=":"+i+"r"+s.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return kn().memoizedState=qS.bind(null,de)}};fr.useMemoCache=af,fr.useHostTransitionStatus=df,fr.useFormState=Vm,fr.useActionState=Vm,fr.useOptimistic=function(e){var i=kn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=pf.bind(null,de,!0,s),s.dispatch=i,[e,i]};var Aa={readContext:Rn,use:Hl,useCallback:Jm,useContext:Rn,useEffect:uf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:Gl,useRef:qm,useState:function(){return Gl(Zi)},useDebugValue:cf,useDeferredValue:function(e,i){var s=an();return tg(s,Pe.memoizedState,e,i)},useTransition:function(){var e=Gl(Zi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:Dm,useId:ag};Aa.useCacheRefresh=rg,Aa.useMemoCache=af,Aa.useHostTransitionStatus=df,Aa.useFormState=km,Aa.useActionState=km,Aa.useOptimistic=function(e,i){var s=an();return Bm(s,Pe,e,i)};var hr={readContext:Rn,use:Hl,useCallback:Jm,useContext:Rn,useEffect:uf,useImperativeHandle:Qm,useInsertionEffect:jm,useLayoutEffect:Zm,useMemo:$m,useReducer:sf,useRef:qm,useState:function(){return sf(Zi)},useDebugValue:cf,useDeferredValue:function(e,i){var s=an();return Pe===null?ff(s,e,i):tg(s,Pe.memoizedState,e,i)},useTransition:function(){var e=sf(Zi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:go(e),i]},useSyncExternalStore:Dm,useId:ag};hr.useCacheRefresh=rg,hr.useMemoCache=af,hr.useHostTransitionStatus=df,hr.useFormState=Wm,hr.useActionState=Wm,hr.useOptimistic=function(e,i){var s=an();return Pe!==null?Bm(s,Pe,e,i):(s.baseState=e,[e,s.queue.dispatch])};function mf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:A({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gf={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ti(),c=Ca(l);c.payload=i,s!=null&&(c.callback=s),i=Da(e,c,l),i!==null&&(zn(i,e,l),So(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ti(),c=Ca(l);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Da(e,c,l),i!==null&&(zn(i,e,l),So(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ti(),l=Ca(s);l.tag=2,i!=null&&(l.callback=i),i=Da(e,l,s),i!==null&&(zn(i,e,s),So(i,e,s))}};function ug(e,i,s,l,c,p,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!io(s,l)||!io(c,p):!0}function cg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&gf.enqueueReplaceState(i,i.state,null)}function dr(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=A({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}var Wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fg(e){Wl(e)}function hg(e){console.error(e)}function dg(e){Wl(e)}function ql(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function pg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function _f(e,i,s){return s=Ca(s),s.tag=3,s.payload={element:null},s.callback=function(){ql(e,i)},s}function mg(e){return e=Ca(e),e.tag=3,e}function gg(e,i,s,l){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var p=l.value;e.payload=function(){return c(p)},e.callback=function(){pg(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){pg(i,s,l),typeof c!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function jS(e,i,s,l,c){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&yo(i,s,c,!0),s=li.current,s!==null){switch(s.tag){case 13:return Li===null?Jf():s.alternate===null&&Ke===0&&(Ke=3),s.flags&=-257,s.flags|=65536,s.lanes=c,l===qc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),th(e,l,c)),!1;case 22:return s.flags|=65536,l===qc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),th(e,l,c)),!1}throw Error(r(435,s.tag))}return th(e,l,c),Jf(),!1}if(Re)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,l!==Wc&&(e=Error(r(422),{cause:l}),oo(ri(e,s)))):(l!==Wc&&(i=Error(r(423),{cause:l}),oo(ri(i,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=ri(l,s),c=_f(e.stateNode,l,c),Lf(e,c),Ke!==4&&(Ke=2)),!1;var p=Error(r(520),{cause:l});if(p=ri(p,s),wo===null?wo=[p]:wo.push(p),Ke!==4&&(Ke=2),i===null)return!0;l=ri(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=_f(s.stateNode,l,e),Lf(s,e),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ba===null||!Ba.has(p))))return s.flags|=65536,c&=-c,s.lanes|=c,c=mg(c),gg(c,e,s,l),Lf(s,c),!1}s=s.return}while(s!==null);return!1}var _g=Error(r(461)),_n=!1;function Tn(e,i,s,l){i.child=e===null?Em(i,null,s,l):lr(i,e.child,s,l)}function vg(e,i,s,l,c){s=s.render;var p=i.ref;if("ref"in l){var E={};for(var R in l)R!=="ref"&&(E[R]=l[R])}else E=l;return mr(i),l=$c(e,i,s,E,p,c),R=tf(),e!==null&&!_n?(ef(e,i,c),Ki(e,i,c)):(Re&&R&&kc(i),i.flags|=1,Tn(e,i,l,c),i.child)}function yg(e,i,s,l,c){if(e===null){var p=s.type;return typeof p=="function"&&!Hf(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,Sg(e,i,p,l,c)):(e=Ql(s.type,null,l,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!Af(e,c)){var E=p.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(E,l)&&e.ref===i.ref)return Ki(e,i,c)}return i.flags|=1,e=Oa(p,l),e.ref=i.ref,e.return=i,i.child=e}function Sg(e,i,s,l,c){if(e!==null){var p=e.memoizedProps;if(io(p,l)&&e.ref===i.ref)if(_n=!1,i.pendingProps=l=p,Af(e,c))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,Ki(e,i,c)}return vf(e,i,s,l,c)}function xg(e,i,s){var l=i.pendingProps,c=l.children,p=(i.stateNode._pendingVisibility&2)!==0,E=e!==null?e.memoizedState:null;if(vo(e,i),l.mode==="hidden"||p){if((i.flags&128)!==0){if(l=E!==null?E.baseLanes|s:s,e!==null){for(c=i.child=e.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Eg(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,E!==null?E.cachePool:null),E!==null?Mm(i,E):Yc(),Tm(i);else return i.lanes=i.childLanes=536870912,Eg(e,i,E!==null?E.baseLanes|s:s,s)}else E!==null?(Bl(i,E.cachePool),Mm(i,E),Ta(),i.memoizedState=null):(e!==null&&Bl(i,null),Yc(),Ta());return Tn(e,i,c,s),i.child}function Eg(e,i,s,l){var c=Qc();return c=c===null?null:{parent:hn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},e!==null&&Bl(i,null),Yc(),Tm(i),e!==null&&yo(e,i,l,!0),null}function vo(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=2097664)}}function vf(e,i,s,l,c){return mr(i),s=$c(e,i,s,l,void 0,c),l=tf(),e!==null&&!_n?(ef(e,i,c),Ki(e,i,c)):(Re&&l&&kc(i),i.flags|=1,Tn(e,i,s,c),i.child)}function Mg(e,i,s,l,c,p){return mr(i),i.updateQueue=null,s=Cm(i,l,s,c),wm(e),l=tf(),e!==null&&!_n?(ef(e,i,p),Ki(e,i,p)):(Re&&l&&kc(i),i.flags|=1,Tn(e,i,s,p),i.child)}function Tg(e,i,s,l,c){if(mr(i),i.stateNode===null){var p=Zr,E=s.contextType;typeof E=="object"&&E!==null&&(p=Rn(E)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=gf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},Df(i),E=s.contextType,p.context=typeof E=="object"&&E!==null?Rn(E):Zr,p.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(mf(i,s,E,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&gf.enqueueReplaceState(p,p.state,null),Eo(i,l,p,c),xo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var R=i.memoizedProps,P=dr(s,R);p.props=P;var V=p.context,ut=s.contextType;E=Zr,typeof ut=="object"&&ut!==null&&(E=Rn(ut));var yt=s.getDerivedStateFromProps;ut=typeof yt=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ut||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||V!==E)&&cg(i,p,l,E),wa=!1;var nt=i.memoizedState;p.state=nt,Eo(i,l,p,c),xo(),V=i.memoizedState,R||nt!==V||wa?(typeof yt=="function"&&(mf(i,s,yt,l),V=i.memoizedState),(P=wa||ug(i,s,P,l,nt,V,E))?(ut||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),p.props=l,p.state=V,p.context=E,l=P):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,Uf(e,i),E=i.memoizedProps,ut=dr(s,E),p.props=ut,yt=i.pendingProps,nt=p.context,V=s.contextType,P=Zr,typeof V=="object"&&V!==null&&(P=Rn(V)),R=s.getDerivedStateFromProps,(V=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==yt||nt!==P)&&cg(i,p,l,P),wa=!1,nt=i.memoizedState,p.state=nt,Eo(i,l,p,c),xo();var lt=i.memoizedState;E!==yt||nt!==lt||wa||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof R=="function"&&(mf(i,s,R,l),lt=i.memoizedState),(ut=wa||ug(i,s,ut,l,nt,lt,P)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?(V||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,lt,P),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,lt,P)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),p.props=l,p.state=lt,p.context=P,l=ut):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,vo(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=lr(i,e.child,null,c),i.child=lr(i,null,s,c)):Tn(e,i,s,c),i.memoizedState=p.state,e=i.child):e=Ki(e,i,c),e}function bg(e,i,s,l){return so(),i.flags|=256,Tn(e,i,s,l),i.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function Sf(e){return{baseLanes:e,cachePool:Rm()}}function xf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=hi),e}function Ag(e,i,s){var l=i.pendingProps,c=!1,p=(i.flags&128)!==0,E;if((E=p)||(E=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),E&&(c=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(c?Ma(i):Ta(),Re){var R=Mn,P;if(P=R){t:{for(P=R,R=Ui;P.nodeType!==8;){if(!R){R=null;break t}if(P=xi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(i.memoizedState={dehydrated:R,treeContext:rr!==null?{id:qi,overflow:Yi}:null,retryLane:536870912},P=fi(18,null,null,0),P.stateNode=R,P.return=i,i.child=P,Fn=i,Mn=null,P=!0):P=!1}P||or(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?i.lanes=16:i.lanes=536870912,null;ji(i)}return R=l.children,l=l.fallback,c?(Ta(),c=i.mode,R=Mf({mode:"hidden",children:R},c),l=_r(l,c,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,c=i.child,c.memoizedState=Sf(s),c.childLanes=xf(e,E,s),i.memoizedState=yf,l):(Ma(i),Ef(i,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(p)i.flags&256?(Ma(i),i.flags&=-257,i=Tf(e,i,s)):i.memoizedState!==null?(Ta(),i.child=e.child,i.flags|=128,i=null):(Ta(),c=l.fallback,R=i.mode,l=Mf({mode:"visible",children:l.children},R),c=_r(c,R,s,null),c.flags|=2,l.return=i,c.return=i,l.sibling=c,i.child=l,lr(i,e.child,null,s),l=i.child,l.memoizedState=Sf(s),l.childLanes=xf(e,E,s),i.memoizedState=yf,i=c);else if(Ma(i),R.data==="$!"){if(E=R.nextSibling&&R.nextSibling.dataset,E)var V=E.dgst;E=V,l=Error(r(419)),l.stack="",l.digest=E,oo({value:l,source:null,stack:null}),i=Tf(e,i,s)}else if(_n||yo(e,i,s,!1),E=(s&e.childLanes)!==0,_n||E){if(E=He,E!==null){if(l=s&-s,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==P.retryLane)throw P.retryLane=l,Ea(e,l),zn(E,e,l),_g}R.data==="$?"||Jf(),i=Tf(e,i,s)}else R.data==="$?"?(i.flags|=128,i.child=e.child,i=ux.bind(null,e),R._reactRetry=i,i=null):(e=P.treeContext,Mn=xi(R.nextSibling),Fn=i,Re=!0,yi=null,Ui=!1,e!==null&&(si[oi++]=qi,si[oi++]=Yi,si[oi++]=rr,qi=e.id,Yi=e.overflow,rr=i),i=Ef(i,l.children),i.flags|=4096);return i}return c?(Ta(),c=l.fallback,R=i.mode,P=e.child,V=P.sibling,l=Oa(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&31457280,V!==null?c=Oa(V,c):(c=_r(c,R,s,null),c.flags|=2),c.return=i,l.return=i,l.sibling=c,i.child=l,l=c,c=i.child,R=e.child.memoizedState,R===null?R=Sf(s):(P=R.cachePool,P!==null?(V=hn._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=Rm(),R={baseLanes:R.baseLanes|s,cachePool:P}),c.memoizedState=R,c.childLanes=xf(e,E,s),i.memoizedState=yf,l):(Ma(i),s=e.child,e=s.sibling,s=Oa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Ef(e,i){return i=Mf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Mf(e,i){return Jg(e,i,0,null)}function Tf(e,i,s){return lr(i,e.child,null,s),e=Ef(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Rg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),wf(e.return,i,s)}function bf(e,i,s,l,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function wg(e,i,s){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(Tn(e,i,l.children,s),l=fn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,s,i);else if(e.tag===19)Rg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ft(fn,l),c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&Pl(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),bf(i,!1,c,s,p);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Pl(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}bf(i,!0,s,null,p);break;case"together":bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ki(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Pa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(yo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=Oa(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Oa(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Af(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function ZS(e,i,s){switch(i.tag){case 3:xn(i,i.stateNode.containerInfo),Ra(i,hn,e.memoizedState.cache),so();break;case 27:case 5:pe(i);break;case 4:xn(i,i.stateNode.containerInfo);break;case 10:Ra(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ma(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ag(e,i,s):(Ma(i),e=Ki(e,i,s),e!==null?e.sibling:null);Ma(i);break;case 19:var c=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(yo(e,i,s,!1),l=(s&i.childLanes)!==0),c){if(l)return wg(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ft(fn,fn.current),l)break;return null;case 22:case 23:return i.lanes=0,xg(e,i,s);case 24:Ra(i,hn,e.memoizedState.cache)}return Ki(e,i,s)}function Cg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!Af(e,s)&&(i.flags&128)===0)return _n=!1,ZS(e,i,s);_n=(e.flags&131072)!==0}else _n=!1,Re&&(i.flags&1048576)!==0&&dm(i,Dl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,c=l._init;if(l=c(l._payload),i.type=l,typeof l=="function")Hf(l)?(e=dr(l,e),i.tag=1,i=Tg(null,i,l,e,s)):(i.tag=0,i=vf(null,i,l,e,s));else{if(l!=null){if(c=l.$$typeof,c===M){i.tag=11,i=vg(null,i,l,e,s);break t}else if(c===_){i.tag=14,i=yg(null,i,l,e,s);break t}}throw i=Y(l)||l,Error(r(306,i,""))}}return i;case 0:return vf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,c=dr(l,i.pendingProps),Tg(e,i,l,c,s);case 3:t:{if(xn(i,i.stateNode.containerInfo),e===null)throw Error(r(387));var p=i.pendingProps;c=i.memoizedState,l=c.element,Uf(e,i),Eo(i,p,null,s);var E=i.memoizedState;if(p=E.cache,Ra(i,hn,p),p!==c.cache&&Cf(i,[hn],s,!0),xo(),p=E.element,c.isDehydrated)if(c={element:p,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=c,i.memoizedState=c,i.flags&256){i=bg(e,i,p,s);break t}else if(p!==l){l=ri(Error(r(424)),i),oo(l),i=bg(e,i,p,s);break t}else for(Mn=xi(i.stateNode.containerInfo.firstChild),Fn=i,Re=!0,yi=null,Ui=!0,s=Em(i,null,p,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(so(),p===l){i=Ki(e,i,s);break t}Tn(e,i,p,s)}i=i.child}return i;case 26:return vo(e,i),e===null?(s=L_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Re||(s=i.type,e=i.pendingProps,l=uu(re.current).createElement(s),l[ln]=i,l[un]=e,bn(l,s,e),Q(l),i.stateNode=l):i.memoizedState=L_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return pe(i),e===null&&Re&&(l=i.stateNode=C_(i.type,i.pendingProps,re.current),Fn=i,Ui=!0,Mn=xi(l.firstChild)),l=i.pendingProps.children,e!==null||Re?Tn(e,i,l,s):i.child=lr(i,null,l,s),vo(e,i),i.child;case 5:return e===null&&Re&&((c=l=Mn)&&(l=bx(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,Fn=i,Mn=xi(l.firstChild),Ui=!1,c=!0):c=!1),c||or(i)),pe(i),c=i.type,p=i.pendingProps,E=e!==null?e.memoizedProps:null,l=p.children,hh(c,p)?l=null:E!==null&&hh(c,E)&&(i.flags|=32),i.memoizedState!==null&&(c=$c(e,i,VS,null,null,s),Fo._currentValue=c),vo(e,i),Tn(e,i,l,s),i.child;case 6:return e===null&&Re&&((e=s=Mn)&&(s=Ax(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,Fn=i,Mn=null,e=!0):e=!1),e||or(i)),null;case 13:return Ag(e,i,s);case 4:return xn(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=lr(i,null,l,s):Tn(e,i,l,s),i.child;case 11:return vg(e,i,i.type,i.pendingProps,s);case 7:return Tn(e,i,i.pendingProps,s),i.child;case 8:return Tn(e,i,i.pendingProps.children,s),i.child;case 12:return Tn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ra(i,i.type,l.value),Tn(e,i,l.children,s),i.child;case 9:return c=i.type._context,l=i.pendingProps.children,mr(i),c=Rn(c),l=l(c),i.flags|=1,Tn(e,i,l,s),i.child;case 14:return yg(e,i,i.type,i.pendingProps,s);case 15:return Sg(e,i,i.type,i.pendingProps,s);case 19:return wg(e,i,s);case 22:return xg(e,i,s);case 24:return mr(i),l=Rn(hn),e===null?(c=Qc(),c===null&&(c=He,p=Zc(),c.pooledCache=p,p.refCount++,p!==null&&(c.pooledCacheLanes|=s),c=p),i.memoizedState={parent:l,cache:c},Df(i),Ra(i,hn,c)):((e.lanes&s)!==0&&(Uf(e,i),Eo(i,null,null,s),xo()),c=e.memoizedState,p=i.memoizedState,c.parent!==l?(c={parent:l,cache:l},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Ra(i,hn,l)):(l=p.cache,Ra(i,hn,l),l!==c.cache&&Cf(i,[hn],s,!0))),Tn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}var Rf=Ct(null),pr=null,Qi=null;function Ra(e,i,s){Ft(Rf,i._currentValue),i._currentValue=s}function Ji(e){e._currentValue=Rf.current,Jt(Rf)}function wf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Cf(e,i,s,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var p=c.dependencies;if(p!==null){var E=c.child;p=p.firstContext;t:for(;p!==null;){var R=p;p=c;for(var P=0;P<i.length;P++)if(R.context===i[P]){p.lanes|=s,R=p.alternate,R!==null&&(R.lanes|=s),wf(p.return,s,e),l||(E=null);break t}p=R.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(r(341));E.lanes|=s,p=E.alternate,p!==null&&(p.lanes|=s),wf(E,s,e),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===e){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function yo(e,i,s,l){e=null;for(var c=i,p=!1;c!==null;){if(!p){if((c.flags&524288)!==0)p=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=c.type;Kn(c.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(c===I.current){if(E=c.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}c=c.return}e!==null&&Cf(i,e,s,l),i.flags|=262144}function Yl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mr(e){pr=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Dg(pr,e)}function jl(e,i){return pr===null&&mr(e),Dg(e,i)}function Dg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(e===null)throw Error(r(308));Qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Qi=Qi.next=i;return s}var wa=!1;function Df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,i=wl(e),fm(e,null,s),i}return Rl(e,l,i,s),wl(e)}function So(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194176)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Di(e,s)}}function Lf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?c=p=E:p=p.next=E,s=s.next}while(s!==null);p===null?c=p=i:p=p.next=i}else c=p=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Nf=!1;function xo(){if(Nf){var e=es;if(e!==null)throw e}}function Eo(e,i,s,l){Nf=!1;var c=e.updateQueue;wa=!1;var p=c.firstBaseUpdate,E=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var P=R,V=P.next;P.next=null,E===null?p=V:E.next=V,E=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,R=ut.lastBaseUpdate,R!==E&&(R===null?ut.firstBaseUpdate=V:R.next=V,ut.lastBaseUpdate=P))}if(p!==null){var yt=c.baseState;E=0,ut=V=P=null,R=p;do{var nt=R.lane&-536870913,lt=nt!==R.lane;if(lt?(Me&nt)===nt:(l&nt)===nt){nt!==0&&nt===ts&&(Nf=!0),ut!==null&&(ut=ut.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ae=R;nt=i;var Qe=s;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){yt=Xt.call(Qe,yt,nt);break t}yt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,nt=typeof Xt=="function"?Xt.call(Qe,yt,nt):Xt,nt==null)break t;yt=A({},yt,nt);break t;case 2:wa=!0}}nt=R.callback,nt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ut===null?(V=ut=lt,P=yt):ut=ut.next=lt,E|=nt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ut===null&&(P=yt),c.baseState=P,c.firstBaseUpdate=V,c.lastBaseUpdate=ut,p===null&&(c.shared.lanes=0),Pa|=E,e.lanes=E,e.memoizedState=yt}}function Ug(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Lg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Ug(s[e],i)}function Mo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&e)===e){l=void 0;var p=s.create,E=s.inst;l=p(),E.destroy=l}s=s.next}while(s!==c)}}catch(R){Ie(i,i.return,R)}}function Ua(e,i,s){try{var l=i.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&e)===e){var E=l.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,c=i;var P=s;try{R()}catch(V){Ie(c,P,V)}}}l=l.next}while(l!==p)}}catch(V){Ie(i,i.return,V)}}function Ng(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Lg(i,s)}catch(l){Ie(e,e.return,l)}}}function Og(e,i,s){s.props=dr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ie(e,i,l)}}function gr(e,i){try{var s=e.ref;if(s!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=l;break;default:c=l}typeof s=="function"?e.refCleanup=s(c):s.current=c}}catch(p){Ie(e,i,p)}}function Qn(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(c){Ie(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ie(e,i,c)}else s.current=null}function Pg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(c){Ie(e,e.return,c)}}function Bg(e,i,s){try{var l=e.stateNode;Sx(l,e.type,s,i),l[un]=i}catch(c){Ie(e,e.return,c)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(e,i):s.insertBefore(e,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(e,s)):(i=s,i.appendChild(e)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=lu));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Pf(e,i,s),e=e.sibling;e!==null;)Pf(e,i,s),e=e.sibling}function Zl(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Zl(e,i,s),e=e.sibling;e!==null;)Zl(e,i,s),e=e.sibling}var $i=!1,Ze=!1,Bf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,vn=null,Ig=!1;function KS(e,i){if(e=e.containerInfo,ch=mu,e=nm(e),Fc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var E=0,R=-1,P=-1,V=0,ut=0,yt=e,nt=null;e:for(;;){for(var lt;yt!==s||c!==0&&yt.nodeType!==3||(R=E+c),yt!==p||l!==0&&yt.nodeType!==3||(P=E+l),yt.nodeType===3&&(E+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)nt=yt,yt=lt;for(;;){if(yt===e)break e;if(nt===s&&++V===c&&(R=E),nt===p&&++ut===l&&(P=E),(lt=yt.nextSibling)!==null)break;yt=nt,nt=yt.parentNode}yt=lt}s=R===-1||P===-1?null:{start:R,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(fh={focusedElem:e,selectionRange:s},mu=!1,vn=i;vn!==null;)if(i=vn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,vn=e;else for(;vn!==null;){switch(i=vn,p=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=i,c=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Xt=dr(s.type,c,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Xt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ie(s,s.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)mh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,vn=e;break}vn=i.return}return Xt=Ig,Ig=!1,Xt}function Hg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ea(e,s),l&4&&Mo(5,s);break;case 1:if(ea(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(R){Ie(s,s.return,R)}else{var c=dr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(R){Ie(s,s.return,R)}}l&64&&Ng(s),l&512&&gr(s,s.return);break;case 3:if(ea(e,s),l&64&&(l=s.updateQueue,l!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{Lg(l,e)}catch(R){Ie(s,s.return,R)}}break;case 26:ea(e,s),l&512&&gr(s,s.return);break;case 27:case 5:ea(e,s),i===null&&l&4&&Pg(s),l&512&&gr(s,s.return);break;case 12:ea(e,s);break;case 13:ea(e,s),l&4&&kg(e,s);break;case 22:if(c=s.memoizedState!==null||$i,!c){i=i!==null&&i.memoizedState!==null||Ze;var p=$i,E=Ze;$i=c,(Ze=i)&&!E?La(e,s,(s.subtreeFlags&8772)!==0):ea(e,s),$i=p,Ze=E}l&512&&(s.memoizedProps.mode==="manual"?gr(s,s.return):Qn(s,s.return));break;default:ea(e,s)}}function Gg(e){var i=e.alternate;i!==null&&(e.alternate=null,Gg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Zs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,Jn=!1;function ta(e,i,s){for(s=s.child;s!==null;)Vg(e,i,s),s=s.sibling}function Vg(e,i,s){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 26:Ze||Qn(s,i),ta(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ze||Qn(s,i);var l=rn,c=Jn;for(rn=s.stateNode,ta(e,i,s),s=s.stateNode,i=s.attributes;i.length;)s.removeAttributeNode(i[0]);Zs(s),rn=l,Jn=c;break;case 5:Ze||Qn(s,i);case 6:c=rn;var p=Jn;if(rn=null,ta(e,i,s),rn=c,Jn=p,rn!==null)if(Jn)try{e=rn,l=s.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(E){Ie(s,i,E)}else try{rn.removeChild(s.stateNode)}catch(E){Ie(s,i,E)}break;case 18:rn!==null&&(Jn?(i=rn,s=s.stateNode,i.nodeType===8?ph(i.parentNode,s):i.nodeType===1&&ph(i,s),Go(i)):ph(rn,s.stateNode));break;case 4:l=rn,c=Jn,rn=s.stateNode.containerInfo,Jn=!0,ta(e,i,s),rn=l,Jn=c;break;case 0:case 11:case 14:case 15:Ze||Ua(2,s,i),Ze||Ua(4,s,i),ta(e,i,s);break;case 1:Ze||(Qn(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Og(s,i,l)),ta(e,i,s);break;case 21:ta(e,i,s);break;case 22:Ze||Qn(s,i),Ze=(l=Ze)||s.memoizedState!==null,ta(e,i,s),Ze=l;break;default:ta(e,i,s)}}function kg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(s){Ie(i,i.return,s)}}function QS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new zg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new zg),i;default:throw Error(r(435,e.tag))}}function Ff(e,i){var s=QS(e);i.forEach(function(l){var c=cx.bind(null,e,l);s.has(l)||(s.add(l),l.then(c,c))})}function ui(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],p=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:case 5:rn=R.stateNode,Jn=!1;break t;case 3:rn=R.stateNode.containerInfo,Jn=!0;break t;case 4:rn=R.stateNode.containerInfo,Jn=!0;break t}R=R.return}if(rn===null)throw Error(r(160));Vg(p,E,c),rn=null,Jn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Xg(i,e),i=i.sibling}var Si=null;function Xg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(i,e),ci(e),l&4&&(Ua(3,e,e.return),Mo(3,e),Ua(5,e,e.return));break;case 1:ui(i,e),ci(e),l&512&&(Ze||s===null||Qn(s,s.return)),l&64&&$i&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var c=Si;if(ui(i,e),ci(e),l&512&&(Ze||s===null||Qn(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(l){case"title":p=c.getElementsByTagName("title")[0],(!p||p[er]||p[ln]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=c.createElement(l),c.head.insertBefore(p,c.querySelector("head > title"))),bn(p,l,s),p[ln]=e,Q(p),l=p;break t;case"link":var E=P_("link","href",c).get(l+(s.href||""));if(E){for(var R=0;R<E.length;R++)if(p=E[R],p.getAttribute("href")===(s.href==null?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(R,1);break e}}p=c.createElement(l),bn(p,l,s),c.head.appendChild(p);break;case"meta":if(E=P_("meta","content",c).get(l+(s.content||""))){for(R=0;R<E.length;R++)if(p=E[R],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(R,1);break e}}p=c.createElement(l),bn(p,l,s),c.head.appendChild(p);break;default:throw Error(r(468,l))}p[ln]=e,Q(p),l=p}e.stateNode=l}else B_(c,e.type,e.stateNode);else e.stateNode=O_(c,l,e.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?B_(c,e.type,e.stateNode):O_(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Bg(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){c=e.stateNode,p=e.memoizedProps;try{for(var P=c.firstChild;P;){var V=P.nextSibling,ut=P.nodeName;P[er]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&P.rel.toLowerCase()==="stylesheet"||c.removeChild(P),P=V}for(var yt=e.type,nt=c.attributes;nt.length;)c.removeAttributeNode(nt[0]);bn(c,yt,p),c[ln]=e,c[un]=p}catch(Xt){Ie(e,e.return,Xt)}}case 5:if(ui(i,e),ci(e),l&512&&(Ze||s===null||Qn(s,s.return)),e.flags&32){c=e.stateNode;try{Gn(c,"")}catch(Xt){Ie(e,e.return,Xt)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Bg(e,c,s!==null?s.memoizedProps:c)),l&1024&&(Bf=!0);break;case 6:if(ui(i,e),ci(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Xt){Ie(e,e.return,Xt)}}break;case 3:if(hu=null,c=Si,Si=cu(i.containerInfo),ui(i,e),Si=c,ci(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Go(i.containerInfo)}catch(Xt){Ie(e,e.return,Xt)}Bf&&(Bf=!1,Wg(e));break;case 4:l=Si,Si=cu(e.stateNode.containerInfo),ui(i,e),ci(e),Si=l;break;case 12:ui(i,e),ci(e);break;case 13:ui(i,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(qf=ht()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ff(e,l)));break;case 22:if(l&512&&(Ze||s===null||Qn(s,s.return)),P=e.memoizedState!==null,V=s!==null&&s.memoizedState!==null,ut=$i,yt=Ze,$i=ut||P,Ze=yt||V,ui(i,e),Ze=yt,$i=ut,ci(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,l&8192&&(i._visibility=P?i._visibility&-2:i._visibility|1,P&&(i=$i||Ze,s===null||V||i||rs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(s===null){V=s=i;try{if(c=V.stateNode,P)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{E=V.stateNode,R=V.memoizedProps.style;var lt=R!=null&&R.hasOwnProperty("display")?R.display:null;E.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Xt){Ie(V,V.return,Xt)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(Xt){Ie(V,V.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Ff(e,s))));break;case 19:ui(i,e),ci(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ff(e,l)));break;case 21:break;default:ui(i,e),ci(e)}}function ci(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(Fg(s)){var l=s;break t}s=s.return}throw Error(r(160))}switch(l.tag){case 27:var c=l.stateNode,p=Of(e);Zl(e,p,c);break;case 5:var E=l.stateNode;l.flags&32&&(Gn(E,""),l.flags&=-33);var R=Of(e);Zl(e,R,E);break;case 3:case 4:var P=l.stateNode.containerInfo,V=Of(e);Pf(e,V,P);break;default:throw Error(r(161))}}}catch(ut){Ie(e,e.return,ut)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Wg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ea(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hg(e,i.alternate,i),i=i.sibling}function rs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ua(4,i,i.return),rs(i);break;case 1:Qn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Og(i,i.return,s),rs(i);break;case 26:case 27:case 5:Qn(i,i.return),rs(i);break;case 22:Qn(i,i.return),i.memoizedState===null&&rs(i);break;default:rs(i)}e=e.sibling}}function La(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,c=e,p=i,E=p.flags;switch(p.tag){case 0:case 11:case 15:La(c,p,s),Mo(4,p);break;case 1:if(La(c,p,s),l=p,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){Ie(l,l.return,V)}if(l=p,c=l.updateQueue,c!==null){var R=l.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Ug(P[c],R)}catch(V){Ie(l,l.return,V)}}s&&E&64&&Ng(p),gr(p,p.return);break;case 26:case 27:case 5:La(c,p,s),s&&l===null&&E&4&&Pg(p),gr(p,p.return);break;case 12:La(c,p,s);break;case 13:La(c,p,s),s&&E&4&&kg(c,p);break;case 22:p.memoizedState===null&&La(c,p,s),gr(p,p.return);break;default:La(c,p,s)}i=i.sibling}}function zf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ho(s))}function If(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e))}function Na(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(e,i,s,l),i=i.sibling}function qg(e,i,s,l){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Na(e,i,s,l),c&2048&&Mo(9,i);break;case 3:Na(e,i,s,l),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e)));break;case 12:if(c&2048){Na(e,i,s,l),e=i.stateNode;try{var p=i.memoizedProps,E=p.id,R=p.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(i,i.return,P)}}else Na(e,i,s,l);break;case 23:break;case 22:p=i.stateNode,i.memoizedState!==null?p._visibility&4?Na(e,i,s,l):To(e,i):p._visibility&4?Na(e,i,s,l):(p._visibility|=4,ss(e,i,s,l,(i.subtreeFlags&10256)!==0)),c&2048&&zf(i.alternate,i);break;case 24:Na(e,i,s,l),c&2048&&If(i.alternate,i);break;default:Na(e,i,s,l)}}function ss(e,i,s,l,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=e,E=i,R=s,P=l,V=E.flags;switch(E.tag){case 0:case 11:case 15:ss(p,E,R,P,c),Mo(8,E);break;case 23:break;case 22:var ut=E.stateNode;E.memoizedState!==null?ut._visibility&4?ss(p,E,R,P,c):To(p,E):(ut._visibility|=4,ss(p,E,R,P,c)),c&&V&2048&&zf(E.alternate,E);break;case 24:ss(p,E,R,P,c),c&&V&2048&&If(E.alternate,E);break;default:ss(p,E,R,P,c)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,c=l.flags;switch(l.tag){case 22:To(s,l),c&2048&&zf(l.alternate,l);break;case 24:To(s,l),c&2048&&If(l.alternate,l);break;default:To(s,l)}i=i.sibling}}var bo=8192;function os(e){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 26:os(e),e.flags&bo&&e.memoizedState!==null&&Ix(Si,e.memoizedState,e.memoizedProps);break;case 5:os(e);break;case 3:case 4:var i=Si;Si=cu(e.stateNode.containerInfo),os(e),Si=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=bo,bo=16777216,os(e),bo=i):os(e));break;default:os(e)}}function jg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ao(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Kg(l,e)}jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Kl(e)):Ao(e);break;default:Ao(e)}}function Kl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Kg(l,e)}jg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ua(8,i,i.return),Kl(i);break;case 22:s=i.stateNode,s._visibility&4&&(s._visibility&=-5,Kl(i));break;default:Kl(i)}e=e.sibling}}function Kg(e,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Ua(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ho(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else t:for(s=e;vn!==null;){l=vn;var c=l.sibling,p=l.return;if(Gg(l),l===s){vn=null;break t}if(c!==null){c.return=p,vn=c;break t}vn=p}}}function JS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,i,s,l){return new JS(e,i,s,l)}function Hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oa(e,i){var s=e.alternate;return s===null?(s=fi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Qg(e,i){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ql(e,i,s,l,c,p){var E=0;if(l=e,typeof e=="function")Hf(e)&&(E=1);else if(typeof e=="string")E=Fx(e,s,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return _r(s.children,c,p,i);case d:E=8,c|=24;break;case g:return e=fi(12,s,i,c|2),e.elementType=g,e.lanes=p,e;case T:return e=fi(13,s,i,c),e.elementType=T,e.lanes=p,e;case S:return e=fi(19,s,i,c),e.elementType=S,e.lanes=p,e;case L:return Jg(s,c,p,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case x:E=10;break t;case y:E=9;break t;case M:E=11;break t;case _:E=14;break t;case U:E=16,l=null;break t}E=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=fi(E,s,i,c),i.elementType=e,i.type=l,i.lanes=p,i}function _r(e,i,s,l){return e=fi(7,e,l,i),e.lanes=s,e}function Jg(e,i,s,l){e=fi(22,e,l,i),e.elementType=L,e.lanes=s;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=c._current;if(p===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var E=Ea(p,2);E!==null&&(c._pendingVisibility|=2,zn(E,p,2))}},attach:function(){var p=c._current;if(p===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var E=Ea(p,2);E!==null&&(c._pendingVisibility&=-3,zn(E,p,2))}}};return e.stateNode=c,e}function Gf(e,i,s){return e=fi(6,e,null,i),e.lanes=s,e}function Vf(e,i,s){return i=fi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function na(e){e.flags|=4}function $g(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!F_(i)){if(i=li.current,i!==null&&((Me&4194176)===Me?Li!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==Li))throw uo=qc,gm;e.flags|=8192}}function Jl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?be():536870912,e.lanes|=i,us|=i)}function Ro(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&31457280,l|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function $S(e,i,s){var l=i.pendingProps;switch(Xc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(hn),fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ro(i)?na(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&(Kf(yi),yi=null))),We(i),null;case 26:return s=i.memoizedState,e===null?(na(i),s!==null?(We(i),$g(i,s)):(We(i),i.flags&=-16777217)):s?s!==e.memoizedState?(na(i),We(i),$g(i,s)):(We(i),i.flags&=-16777217):(e.memoizedProps!==l&&na(i),We(i),i.flags&=-16777217),null;case 27:Wt(i),s=re.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return We(i),null}e=Te.current,ro(i)?pm(i):(e=C_(c,l,s),i.stateNode=e,na(i))}return We(i),null;case 5:if(Wt(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return We(i),null}if(e=Te.current,ro(i))pm(i);else{switch(c=uu(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?c.createElement(s,{is:l.is}):c.createElement(s)}}e[ln]=i,e[un]=l;t:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break t;for(;c.sibling===null;){if(c.return===null||c.return===i)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;t:switch(bn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&na(i)}}return We(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=re.current,ro(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,c=Fn,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[ln]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||M_(e.nodeValue,s)),e||or(i)}else e=uu(e).createTextNode(l),e[ln]=i,i.stateNode=e}return We(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ro(i),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=i}else so(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),c=!1}else yi!==null&&(Kf(yi),yi=null),c=!0;if(!c)return i.flags&256?(ji(i),i):(ji(i),null)}if(ji(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==c&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Jl(i,i.updateQueue),We(i),null;case 4:return fe(),e===null&&oh(i.stateNode.containerInfo),We(i),null;case 10:return Ji(i.type),We(i),null;case 19:if(Jt(fn),c=i.memoizedState,c===null)return We(i),null;if(l=(i.flags&128)!==0,p=c.rendering,p===null)if(l)Ro(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=Pl(e),p!==null){for(i.flags|=128,Ro(c,!1),e=p.updateQueue,i.updateQueue=e,Jl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Qg(s,e),s=s.sibling;return Ft(fn,fn.current&1|2),i.child}e=e.sibling}c.tail!==null&&ht()>$l&&(i.flags|=128,l=!0,Ro(c,!1),i.lanes=4194304)}else{if(!l)if(e=Pl(p),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Jl(i,e),Ro(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Re)return We(i),null}else 2*ht()-c.renderingStartTime>$l&&s!==536870912&&(i.flags|=128,l=!0,Ro(c,!1),i.lanes=4194304);c.isBackwards?(p.sibling=i.child,i.child=p):(e=c.last,e!==null?e.sibling=p:i.child=p,c.last=p)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=ht(),i.sibling=null,e=fn.current,Ft(fn,l?e&1|2:e&1),i):(We(i),null);case 22:case 23:return ji(i),jc(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),s=i.updateQueue,s!==null&&Jl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Jt(ur),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(hn),We(i),null;case 25:return null}throw Error(r(156,i.tag))}function tx(e,i){switch(Xc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ji(hn),fe(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Wt(i),null;case 13:if(ji(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));so()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Jt(fn),null;case 4:return fe(),null;case 10:return Ji(i.type),null;case 22:case 23:return ji(i),jc(),e!==null&&Jt(ur),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ji(hn),null;case 25:return null;default:return null}}function t_(e,i){switch(Xc(i),i.tag){case 3:Ji(hn),fe();break;case 26:case 27:case 5:Wt(i);break;case 4:fe();break;case 13:ji(i);break;case 19:Jt(fn);break;case 10:Ji(i.type);break;case 22:case 23:ji(i),jc(),e!==null&&Jt(ur);break;case 24:Ji(hn)}}var ex={getCacheForType:function(e){var i=Rn(hn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},nx=typeof WeakMap=="function"?WeakMap:Map,qe=0,He=null,ge=null,Me=0,Ge=0,$n=null,ia=!1,ls=!1,kf=!1,aa=0,Ke=0,Pa=0,vr=0,Xf=0,hi=0,us=0,wo=null,Oi=null,Wf=!1,qf=0,$l=1/0,tu=null,Ba=null,eu=!1,yr=null,Co=0,Yf=0,jf=null,Do=0,Zf=null;function ti(){if((qe&2)!==0&&Me!==0)return Me&-Me;if(w.T!==null){var e=ts;return e!==0?e:ih()}return js()}function e_(){hi===0&&(hi=(Me&536870912)===0||Re?on():536870912);var e=li.current;return e!==null&&(e.flags|=32),hi}function zn(e,i,s){(e===He&&Ge===2||e.cancelPendingCommit!==null)&&(cs(e,0),ra(e,Me,hi,!1)),On(e,s),((qe&2)===0||e!==He)&&(e===He&&((qe&2)===0&&(vr|=s),Ke===4&&ra(e,Me,hi,!1)),Pi(e))}function n_(e,i,s){if((qe&6)!==0)throw Error(r(327));var l=!s&&(i&60)===0&&(i&e.expiredLanes)===0||ee(e,i),c=l?rx(e,i):$f(e,i,!0),p=l;do{if(c===0){ls&&!l&&ra(e,i,0,!1);break}else if(c===6)ra(e,i,0,!ia);else{if(s=e.current.alternate,p&&!ix(s)){c=$f(e,i,!1),p=!1;continue}if(c===2){if(p=i,e.errorRecoveryDisabledLanes&p)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;c=wo;var P=R.current.memoizedState.isDehydrated;if(P&&(cs(R,E).flags|=256),E=$f(R,E,!1),E!==2){if(kf&&!P){R.errorRecoveryDisabledLanes|=p,vr|=p,c=4;break t}p=Oi,Oi=c,p!==null&&Kf(p)}c=E}if(p=!1,c!==2)continue}}if(c===1){cs(e,0),ra(e,i,0,!0);break}t:{switch(l=e,c){case 0:case 1:throw Error(r(345));case 4:if((i&4194176)===i){ra(l,i,hi,!ia);break t}break;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(l.finishedWork=s,l.finishedLanes=i,(i&62914560)===i&&(p=qf+300-ht(),10<p)){if(ra(l,i,hi,!ia),Lt(l,0)!==0)break t;l.timeoutHandle=A_(i_.bind(null,l,s,Oi,tu,Wf,i,hi,vr,us,ia,2,-0,0),p);break t}i_(l,s,Oi,tu,Wf,i,hi,vr,us,ia,0,-0,0)}}break}while(!0);Pi(e)}function Kf(e){Oi===null?Oi=e:Oi.push.apply(Oi,e)}function i_(e,i,s,l,c,p,E,R,P,V,ut,yt,nt){var lt=i.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:zx},Yg(i),i=Hx(),i!==null)){e.cancelPendingCommit=i(c_.bind(null,e,s,l,c,E,R,P,1,yt,nt)),ra(e,p,E,!V);return}c_(e,s,l,c,E,R,P,ut,yt,nt)}function ix(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!Kn(p(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ra(e,i,s,l){i&=~Xf,i&=~vr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var c=i;0<c;){var p=31-Zt(c),E=1<<p;l[p]=-1,c&=~E}s!==0&&Ys(e,s,i)}function nu(){return(qe&6)===0?(Uo(0),!1):!0}function Qf(){if(ge!==null){if(Ge===0)var e=ge.return;else e=ge,Qi=pr=null,nf(e),Jr=null,co=0,e=ge;for(;e!==null;)t_(e.alternate,e),e=e.return;ge=null}}function cs(e,i){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ex(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Qf(),He=e,ge=s=Oa(e.current,null),Me=i,Ge=0,$n=null,ia=!1,ls=ee(e,i),kf=!1,us=hi=Xf=vr=Pa=Ke=0,Oi=wo=null,Wf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var c=31-Zt(l),p=1<<c;i|=e[c],l&=~p}return aa=i,Al(),s}function a_(e,i){de=null,w.H=Ni,i===lo?(i=ym(),Ge=3):i===gm?(i=ym(),Ge=4):Ge=i===_g?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,ge===null&&(Ke=1,ql(e,ri(i,e.current)))}function r_(){var e=w.H;return w.H=Ni,e===null?Ni:e}function s_(){var e=w.A;return w.A=ex,e}function Jf(){Ke=4,ia||(Me&4194176)!==Me&&li.current!==null||(ls=!0),(Pa&134217727)===0&&(vr&134217727)===0||He===null||ra(He,Me,hi,!1)}function $f(e,i,s){var l=qe;qe|=2;var c=r_(),p=s_();(He!==e||Me!==i)&&(tu=null,cs(e,i)),i=!1;var E=Ke;t:do try{if(Ge!==0&&ge!==null){var R=ge,P=$n;switch(Ge){case 8:Qf(),E=6;break t;case 3:case 2:case 6:li.current===null&&(i=!0);var V=Ge;if(Ge=0,$n=null,fs(e,R,P,V),s&&ls){E=0;break t}break;default:V=Ge,Ge=0,$n=null,fs(e,R,P,V)}}ax(),E=Ke;break}catch(ut){a_(e,ut)}while(!0);return i&&e.shellSuspendCounter++,Qi=pr=null,qe=l,w.H=c,w.A=p,ge===null&&(He=null,Me=0,Al()),E}function ax(){for(;ge!==null;)o_(ge)}function rx(e,i){var s=qe;qe|=2;var l=r_(),c=s_();He!==e||Me!==i?(tu=null,$l=ht()+500,cs(e,i)):ls=ee(e,i);t:do try{if(Ge!==0&&ge!==null){i=ge;var p=$n;e:switch(Ge){case 1:Ge=0,$n=null,fs(e,i,p,1);break;case 2:if(_m(p)){Ge=0,$n=null,l_(i);break}i=function(){Ge===2&&He===e&&(Ge=7),Pi(e)},p.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:_m(p)?(Ge=0,$n=null,l_(i)):(Ge=0,$n=null,fs(e,i,p,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var R=ge;if(!E||F_(E)){Ge=0,$n=null;var P=R.sibling;if(P!==null)ge=P;else{var V=R.return;V!==null?(ge=V,iu(V)):ge=null}break e}}Ge=0,$n=null,fs(e,i,p,5);break;case 6:Ge=0,$n=null,fs(e,i,p,6);break;case 8:Qf(),Ke=6;break t;default:throw Error(r(462))}}sx();break}catch(ut){a_(e,ut)}while(!0);return Qi=pr=null,w.H=l,w.A=c,qe=s,ge!==null?0:(He=null,Me=0,Al(),Ke)}function sx(){for(;ge!==null&&!b();)o_(ge)}function o_(e){var i=Cg(e.alternate,e,aa);e.memoizedProps=e.pendingProps,i===null?iu(e):ge=i}function l_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Mg(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Mg(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:nf(i);default:t_(s,i),i=ge=Qg(i,aa),i=Cg(s,i,aa)}e.memoizedProps=e.pendingProps,i===null?iu(e):ge=i}function fs(e,i,s,l){Qi=pr=null,nf(i),Jr=null,co=0;var c=i.return;try{if(jS(e,c,i,s,Me)){Ke=1,ql(e,ri(s,e.current)),ge=null;return}}catch(p){if(c!==null)throw ge=c,p;Ke=1,ql(e,ri(s,e.current)),ge=null;return}i.flags&32768?(Re||l===1?e=!0:ls||(Me&536870912)!==0?e=!1:(ia=e=!0,(l===2||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),u_(i,e)):iu(i)}function iu(e){var i=e;do{if((i.flags&32768)!==0){u_(i,ia);return}e=i.return;var s=$S(i.alternate,i,aa);if(s!==null){ge=s;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);Ke===0&&(Ke=5)}function u_(e,i){do{var s=tx(e.alternate,e);if(s!==null){s.flags&=32767,ge=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=s}while(e!==null);Ke=6,ge=null}function c_(e,i,s,l,c,p,E,R,P,V){var ut=w.T,yt=q.p;try{q.p=2,w.T=null,ox(e,i,s,l,yt,c,p,E,R,P,V)}finally{w.T=ut,q.p=yt}}function ox(e,i,s,l,c,p,E,R){do hs();while(yr!==null);if((qe&6)!==0)throw Error(r(327));var P=e.finishedWork;if(l=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=Gc,gl(e,l,V,p,E,R),e===He&&(ge=He=null,Me=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||eu||(eu=!0,Yf=V,jf=s,fx(Ut,function(){return hs(),null})),s=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||s?(s=w.T,w.T=null,p=q.p,q.p=2,E=qe,qe|=4,KS(e,P),Xg(P,e),US(fh,e.containerInfo),mu=!!ch,fh=ch=null,e.current=P,Hg(e,P.alternate,P),tt(),qe=E,q.p=p,w.T=s):e.current=P,eu?(eu=!1,yr=e,Co=l):f_(e,V),V=e.pendingLanes,V===0&&(Ba=null),Ht(P.stateNode),Pi(e),i!==null)for(c=e.onRecoverableError,P=0;P<i.length;P++)V=i[P],c(V.value,{componentStack:V.stack});return(Co&3)!==0&&hs(),V=e.pendingLanes,(l&4194218)!==0&&(V&42)!==0?e===Zf?Do++:(Do=0,Zf=e):Do=0,Uo(0),null}function f_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ho(i)))}function hs(){if(yr!==null){var e=yr,i=Yf;Yf=0;var s=Hr(Co),l=w.T,c=q.p;try{if(q.p=32>s?32:s,w.T=null,yr===null)var p=!1;else{s=jf,jf=null;var E=yr,R=Co;if(yr=null,Co=0,(qe&6)!==0)throw Error(r(331));var P=qe;if(qe|=4,Zg(E.current),qg(E,E.current,R,s),qe=P,Uo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Qt,E)}catch{}p=!0}return p}finally{q.p=c,w.T=l,f_(e,i)}}return!1}function h_(e,i,s){i=ri(s,i),i=_f(e.stateNode,i,2),e=Da(e,i,2),e!==null&&(On(e,2),Pi(e))}function Ie(e,i,s){if(e.tag===3)h_(e,e,s);else for(;i!==null;){if(i.tag===3){h_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ba===null||!Ba.has(l))){e=ri(s,e),s=mg(2),l=Da(i,s,2),l!==null&&(gg(s,l,i,e),On(l,2),Pi(l));break}}i=i.return}}function th(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new nx;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(kf=!0,c.add(s),e=lx.bind(null,e,i,s),i.then(e,e))}function lx(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,He===e&&(Me&s)===s&&(Ke===4||Ke===3&&(Me&62914560)===Me&&300>ht()-qf?(qe&2)===0&&cs(e,0):Xf|=s,us===Me&&(us=0)),Pi(e)}function d_(e,i){i===0&&(i=be()),e=Ea(e,i),e!==null&&(On(e,i),Pi(e))}function ux(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),d_(e,s)}function cx(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),d_(e,s)}function fx(e,i){return qt(e,i)}var au=null,ds=null,eh=!1,ru=!1,nh=!1,Sr=0;function Pi(e){e!==ds&&e.next===null&&(ds===null?au=ds=e:ds=ds.next=e),ru=!0,eh||(eh=!0,dx(hx))}function Uo(e,i){if(!nh&&ru){nh=!0;do for(var s=!1,l=au;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var p=0;else{var E=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-Zt(42|e)+1)-1,p&=c&~(E&~R),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(s=!0,g_(l,p))}else p=Me,p=Lt(l,l===He?p:0),(p&3)===0||ee(l,p)||(s=!0,g_(l,p));l=l.next}while(s);nh=!1}}function hx(){ru=eh=!1;var e=0;Sr!==0&&(xx()&&(e=Sr),Sr=0);for(var i=ht(),s=null,l=au;l!==null;){var c=l.next,p=p_(l,i);p===0?(l.next=null,s===null?au=c:s.next=c,c===null&&(ds=s)):(s=l,(e!==0||(p&3)!==0)&&(ru=!0)),l=c}Uo(e)}function p_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var E=31-Zt(p),R=1<<E,P=c[E];P===-1?((R&s)===0||(R&l)!==0)&&(c[E]=Xe(R,i)):P<=i&&(e.expiredLanes|=R),p&=~R}if(i=He,s=Me,s=Lt(e,e===i?s:0),l=e.callbackNode,s===0||e===i&&Ge===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&N(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ee(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&N(l),Hr(s)){case 2:case 8:s=Vt;break;case 32:s=Ut;break;case 268435456:s=ve;break;default:s=Ut}return l=m_.bind(null,e),s=qt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&N(l),e.callbackPriority=2,e.callbackNode=null,2}function m_(e,i){var s=e.callbackNode;if(hs()&&e.callbackNode!==s)return null;var l=Me;return l=Lt(e,e===He?l:0),l===0?null:(n_(e,l,i),p_(e,ht()),e.callbackNode!=null&&e.callbackNode===s?m_.bind(null,e):null)}function g_(e,i){if(hs())return null;n_(e,i,!0)}function dx(e){Mx(function(){(qe&6)!==0?qt(dt,e):e()})}function ih(){return Sr===0&&(Sr=on()),Sr}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yl(""+e)}function v_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function px(e,i,s,l,c){if(i==="submit"&&s&&s.stateNode===c){var p=__((c[un]||null).action),E=l.submitter;E&&(i=(i=E[un]||null)?__(i.formAction):E.getAttribute("formAction"),i!==null&&(p=i,E=null));var R=new Ml("action","action",null,l,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Sr!==0){var P=E?v_(c,E):new FormData(c);hf(s,{pending:!0,data:P,method:c.method,action:p},null,P)}}else typeof p=="function"&&(R.preventDefault(),P=E?v_(c,E):new FormData(c),hf(s,{pending:!0,data:P,method:c.method,action:p},p,P))},currentTarget:c}]})}}for(var ah=0;ah<cm.length;ah++){var rh=cm[ah],mx=rh.toLowerCase(),gx=rh[0].toUpperCase()+rh.slice(1);vi(mx,"on"+gx)}vi(rm,"onAnimationEnd"),vi(sm,"onAnimationIteration"),vi(om,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(NS,"onTransitionRun"),vi(OS,"onTransitionStart"),vi(PS,"onTransitionCancel"),vi(lm,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function y_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],c=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var R=l[E],P=R.instance,V=R.currentTarget;if(R=R.listener,P!==p&&c.isPropagationStopped())break t;p=R,c.currentTarget=V;try{p(c)}catch(ut){Wl(ut)}c.currentTarget=null,p=P}else for(E=0;E<l.length;E++){if(R=l[E],P=R.instance,V=R.currentTarget,R=R.listener,P!==p&&c.isPropagationStopped())break t;p=R,c.currentTarget=V;try{p(c)}catch(ut){Wl(ut)}c.currentTarget=null,p=P}}}}function Ee(e,i){var s=i[Gr];s===void 0&&(s=i[Gr]=new Set);var l=e+"__bubble";s.has(l)||(S_(i,e,2,!1),s.add(l))}function sh(e,i,s){var l=0;i&&(l|=4),S_(s,e,l,i)}var su="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[su]){e[su]=!0,j.forEach(function(s){s!=="selectionchange"&&(_x.has(s)||sh(s,!1,e),sh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[su]||(i[su]=!0,sh("selectionchange",!1,i))}}function S_(e,i,s,l){switch(k_(i)){case 2:var c=kx;break;case 8:c=Xx;break;default:c=Sh}s=c.bind(null,i,s,e),c=void 0,!wc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function lh(e,i,s,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var R=l.stateNode.containerInfo;if(R===c||R.nodeType===8&&R.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===c||P.nodeType===8&&P.parentNode===c))return;E=E.return}for(;R!==null;){if(E=Wi(R),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){l=p=E;continue t}R=R.parentNode}}l=l.return}Pp(function(){var V=p,ut=Ac(s),yt=[];t:{var nt=um.get(e);if(nt!==void 0){var lt=Ml,Xt=e;switch(e){case"keypress":if(xl(s)===0)break t;case"keydown":case"keyup":lt=cS;break;case"focusin":Xt="focus",lt=Lc;break;case"focusout":Xt="blur",lt=Lc;break;case"beforeblur":case"afterblur":lt=Lc;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=dS;break;case rm:case sm:case om:lt=eS;break;case lm:lt=mS;break;case"scroll":case"scrollend":lt=Ky;break;case"wheel":lt=_S;break;case"copy":case"cut":case"paste":lt=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Hp;break;case"toggle":case"beforetoggle":lt=yS}var ae=(i&4)!==0,Qe=!ae&&(e==="scroll"||e==="scrollend"),K=ae?nt!==null?nt+"Capture":null:nt;ae=[];for(var G=V,J;G!==null;){var gt=G;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||K===null||(gt=Ks(G,K),gt!=null&&ae.push(No(G,gt,J))),Qe)break;G=G.return}0<ae.length&&(nt=new lt(nt,Xt,null,s,ut),yt.push({event:nt,listeners:ae}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",nt&&s!==bc&&(Xt=s.relatedTarget||s.fromElement)&&(Wi(Xt)||Xt[Xi]))break t;if((lt||nt)&&(nt=ut.window===ut?ut:(nt=ut.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(Xt=s.relatedTarget||s.toElement,lt=V,Xt=Xt?Wi(Xt):null,Xt!==null&&(Qe=Z(Xt),ae=Xt.tag,Xt!==Qe||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(lt=null,Xt=V),lt!==Xt)){if(ae=zp,gt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Hp,gt="onPointerLeave",K="onPointerEnter",G="pointer"),Qe=lt==null?nt:W(lt),J=Xt==null?nt:W(Xt),nt=new ae(gt,G+"leave",lt,s,ut),nt.target=Qe,nt.relatedTarget=J,gt=null,Wi(ut)===V&&(ae=new ae(K,G+"enter",Xt,s,ut),ae.target=J,ae.relatedTarget=Qe,gt=ae),Qe=gt,lt&&Xt)e:{for(ae=lt,K=Xt,G=0,J=ae;J;J=ps(J))G++;for(J=0,gt=K;gt;gt=ps(gt))J++;for(;0<G-J;)ae=ps(ae),G--;for(;0<J-G;)K=ps(K),J--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=ps(ae),K=ps(K)}ae=null}else ae=null;lt!==null&&x_(yt,nt,lt,ae,!1),Xt!==null&&Qe!==null&&x_(yt,Qe,Xt,ae,!0)}}t:{if(nt=V?W(V):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Gt=jp;else if(qp(nt))if(Zp)Gt=CS;else{Gt=RS;var me=AS}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&Tc(V.elementType)&&(Gt=jp):Gt=wS;if(Gt&&(Gt=Gt(e,V))){Yp(yt,Gt,s,ut);break t}me&&me(e,nt,V),e==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(me=V?W(V):window,e){case"focusin":(qp(me)||me.contentEditable==="true")&&(qr=me,zc=V,ao=null);break;case"focusout":ao=zc=qr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,im(yt,s,ut);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":im(yt,s,ut)}var Yt;if(Oc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Wr?Xp(e,s)&&($t="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&($t="onCompositionStart");$t&&(Gp&&s.locale!=="ko"&&(Wr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Wr&&(Yt=Bp()):(xa=ut,Cc="value"in xa?xa.value:xa.textContent,Wr=!0)),me=ou(V,$t),0<me.length&&($t=new Ip($t,e,null,s,ut),yt.push({event:$t,listeners:me}),Yt?$t.data=Yt:(Yt=Wp(s),Yt!==null&&($t.data=Yt)))),(Yt=xS?ES(e,s):MS(e,s))&&($t=ou(V,"onBeforeInput"),0<$t.length&&(me=new Ip("onBeforeInput","beforeinput",null,s,ut),yt.push({event:me,listeners:$t}),me.data=Yt)),px(yt,e,V,s,ut)}y_(yt,i)})}function No(e,i,s){return{instance:e,listener:i,currentTarget:s}}function ou(e,i){for(var s=i+"Capture",l=[];e!==null;){var c=e,p=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||p===null||(c=Ks(e,s),c!=null&&l.unshift(No(e,c,p)),c=Ks(e,i),c!=null&&l.push(No(e,c,p))),e=e.return}return l}function ps(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function x_(e,i,s,l,c){for(var p=i._reactName,E=[];s!==null&&s!==l;){var R=s,P=R.alternate,V=R.stateNode;if(R=R.tag,P!==null&&P===l)break;R!==5&&R!==26&&R!==27||V===null||(P=V,c?(V=Ks(s,p),V!=null&&E.unshift(No(s,V,P))):c||(V=Ks(s,p),V!=null&&E.push(No(s,V,P)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var vx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function E_(e){return(typeof e=="string"?e:""+e).replace(vx,`
`).replace(yx,"")}function M_(e,i){return i=E_(i),E_(e)===i}function lu(){}function Be(e,i,s,l,c,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Gn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Gn(e,""+l);break;case"className":ke(e,"class",l);break;case"tabIndex":ke(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,s,l);break;case"style":Np(e,l,p);break;case"data":if(i!=="object"){ke(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=yl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Be(e,i,"name",c.name,c,null),Be(e,i,"formEncType",c.formEncType,c,null),Be(e,i,"formMethod",c.formMethod,c,null),Be(e,i,"formTarget",c.formTarget,c,null)):(Be(e,i,"encType",c.encType,c,null),Be(e,i,"method",c.method,c,null),Be(e,i,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=yl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=lu);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=yl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Se(e,"popover",l);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Se(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=jy.get(s)||s,Se(e,s,l))}}function uh(e,i,s,l,c,p){switch(s){case"style":Np(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Gn(e,l):(typeof l=="number"||typeof l=="bigint")&&Gn(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),p=e[un]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(i,p,c),typeof l=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,c);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Se(e,s,l)}}}function bn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,c=!1,p;for(p in s)if(s.hasOwnProperty(p)){var E=s[p];if(E!=null)switch(p){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Be(e,i,p,E,s,null)}}c&&Be(e,i,"srcSet",s.srcSet,s,null),l&&Be(e,i,"src",s.src,s,null);return;case"input":Ee("invalid",e);var R=p=E=c=null,P=null,V=null;for(l in s)if(s.hasOwnProperty(l)){var ut=s[l];if(ut!=null)switch(l){case"name":c=ut;break;case"type":E=ut;break;case"checked":P=ut;break;case"defaultChecked":V=ut;break;case"value":p=ut;break;case"defaultValue":R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,i));break;default:Be(e,i,l,ut,s,null)}}Bn(e,p,R,P,V,E,c,!1),xe(e);return;case"select":Ee("invalid",e),l=E=p=null;for(c in s)if(s.hasOwnProperty(c)&&(R=s[c],R!=null))switch(c){case"value":p=R;break;case"defaultValue":E=R;break;case"multiple":l=R;default:Be(e,i,c,R,s,null)}i=p,s=E,e.multiple=!!l,i!=null?je(e,!!l,i,!1):s!=null&&je(e,!!l,s,!0);return;case"textarea":Ee("invalid",e),p=c=l=null;for(E in s)if(s.hasOwnProperty(E)&&(R=s[E],R!=null))switch(E){case"value":l=R;break;case"defaultValue":c=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Be(e,i,E,R,s,null)}Vr(e,l,c,p),xe(e);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(l=s[P],l!=null))switch(P){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Be(e,i,P,l,s,null)}return;case"dialog":Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<Lo.length;l++)Ee(Lo[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Be(e,i,V,l,s,null)}return;default:if(Tc(i)){for(ut in s)s.hasOwnProperty(ut)&&(l=s[ut],l!==void 0&&uh(e,i,ut,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Be(e,i,R,l,s,null))}function Sx(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,p=null,E=null,R=null,P=null,V=null,ut=null;for(lt in s){var yt=s[lt];if(s.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":P=yt;default:l.hasOwnProperty(lt)||Be(e,i,lt,null,l,yt)}}for(var nt in l){var lt=l[nt];if(yt=s[nt],l.hasOwnProperty(nt)&&(lt!=null||yt!=null))switch(nt){case"type":p=lt;break;case"name":c=lt;break;case"checked":V=lt;break;case"defaultChecked":ut=lt;break;case"value":E=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,i));break;default:lt!==yt&&Be(e,i,nt,lt,l,yt)}}Oe(e,E,R,P,V,ut,p,c);return;case"select":lt=E=R=nt=null;for(p in s)if(P=s[p],s.hasOwnProperty(p)&&P!=null)switch(p){case"value":break;case"multiple":lt=P;default:l.hasOwnProperty(p)||Be(e,i,p,null,l,P)}for(c in l)if(p=l[c],P=s[c],l.hasOwnProperty(c)&&(p!=null||P!=null))switch(c){case"value":nt=p;break;case"defaultValue":R=p;break;case"multiple":E=p;default:p!==P&&Be(e,i,c,p,l,P)}i=R,s=E,l=lt,nt!=null?je(e,!!s,nt,!1):!!l!=!!s&&(i!=null?je(e,!!s,i,!0):je(e,!!s,s?[]:"",!1));return;case"textarea":lt=nt=null;for(R in s)if(c=s[R],s.hasOwnProperty(R)&&c!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Be(e,i,R,null,l,c)}for(E in l)if(c=l[E],p=s[E],l.hasOwnProperty(E)&&(c!=null||p!=null))switch(E){case"value":nt=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==p&&Be(e,i,E,c,l,p)}En(e,nt,lt);return;case"option":for(var Xt in s)if(nt=s[Xt],s.hasOwnProperty(Xt)&&nt!=null&&!l.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Be(e,i,Xt,null,l,nt)}for(P in l)if(nt=l[P],lt=s[P],l.hasOwnProperty(P)&&nt!==lt&&(nt!=null||lt!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(e,i,P,nt,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in s)nt=s[ae],s.hasOwnProperty(ae)&&nt!=null&&!l.hasOwnProperty(ae)&&Be(e,i,ae,null,l,nt);for(V in l)if(nt=l[V],lt=s[V],l.hasOwnProperty(V)&&nt!==lt&&(nt!=null||lt!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,i));break;default:Be(e,i,V,nt,l,lt)}return;default:if(Tc(i)){for(var Qe in s)nt=s[Qe],s.hasOwnProperty(Qe)&&nt!==void 0&&!l.hasOwnProperty(Qe)&&uh(e,i,Qe,void 0,l,nt);for(ut in l)nt=l[ut],lt=s[ut],!l.hasOwnProperty(ut)||nt===lt||nt===void 0&&lt===void 0||uh(e,i,ut,nt,l,lt);return}}for(var K in s)nt=s[K],s.hasOwnProperty(K)&&nt!=null&&!l.hasOwnProperty(K)&&Be(e,i,K,null,l,nt);for(yt in l)nt=l[yt],lt=s[yt],!l.hasOwnProperty(yt)||nt===lt||nt==null&&lt==null||Be(e,i,yt,nt,l,lt)}var ch=null,fh=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function hh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dh=null;function xx(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(e){return R_.resolve(null).then(e).catch(Tx)}:A_;function Tx(e){setTimeout(function(){throw e})}function ph(e,i){var s=i,l=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){e.removeChild(c),Go(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Go(i)}function mh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":mh(s),Zs(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function bx(e,i,s,l){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[er])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Ax(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xi(e.nextSibling),e===null))return null;return e}function xi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function w_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function C_(e,i,s){switch(i=uu(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var di=new Map,D_=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var sa=q.d;q.d={f:Rx,r:wx,D:Cx,C:Dx,L:Ux,m:Lx,X:Ox,S:Nx,M:Px};function Rx(){var e=sa.f(),i=nu();return e||i}function wx(e){var i=C(e);i!==null&&i.tag===5&&i.type==="form"?ig(i):sa.r(e)}var ms=typeof document>"u"?null:document;function U_(e,i,s){var l=ms;if(l&&typeof i=="string"&&i){var c=gn(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),D_.has(c)||(D_.add(c),e={rel:e,crossOrigin:s,href:i},l.querySelector(c)===null&&(i=l.createElement("link"),bn(i,"link",e),Q(i),l.head.appendChild(i)))}}function Cx(e){sa.D(e),U_("dns-prefetch",e,null)}function Dx(e,i){sa.C(e,i),U_("preconnect",e,i)}function Ux(e,i,s){sa.L(e,i,s);var l=ms;if(l&&e&&i){var c='link[rel="preload"][as="'+gn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+gn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+gn(s.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var p=c;switch(i){case"style":p=gs(e);break;case"script":p=_s(e)}di.has(p)||(e=A({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),di.set(p,e),l.querySelector(c)!==null||i==="style"&&l.querySelector(Oo(p))||i==="script"&&l.querySelector(Po(p))||(i=l.createElement("link"),bn(i,"link",e),Q(i),l.head.appendChild(i)))}}function Lx(e,i){sa.m(e,i);var s=ms;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(e)+'"]',p=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=_s(e)}if(!di.has(p)&&(e=A({rel:"modulepreload",href:e},i),di.set(p,e),s.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Po(p)))return}l=s.createElement("link"),bn(l,"link",e),Q(l),s.head.appendChild(l)}}}function Nx(e,i,s){sa.S(e,i,s);var l=ms;if(l&&e){var c=et(l).hoistableStyles,p=gs(e);i=i||"default";var E=c.get(p);if(!E){var R={loading:0,preload:null};if(E=l.querySelector(Oo(p)))R.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},s),(s=di.get(p))&&gh(e,s);var P=E=l.createElement("link");Q(P),bn(P,"link",e),P._p=new Promise(function(V,ut){P.onload=V,P.onerror=ut}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fu(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:R},c.set(p,E)}}}function Ox(e,i){sa.X(e,i);var s=ms;if(s&&e){var l=et(s).hoistableScripts,c=_s(e),p=l.get(c);p||(p=s.querySelector(Po(c)),p||(e=A({src:e,async:!0},i),(i=di.get(c))&&_h(e,i),p=s.createElement("script"),Q(p),bn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function Px(e,i){sa.M(e,i);var s=ms;if(s&&e){var l=et(s).hoistableScripts,c=_s(e),p=l.get(c);p||(p=s.querySelector(Po(c)),p||(e=A({src:e,async:!0,type:"module"},i),(i=di.get(c))&&_h(e,i),p=s.createElement("script"),Q(p),bn(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function L_(e,i,s,l){var c=(c=re.current)?cu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gs(s.href),s=et(c).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=gs(s.href);var p=et(c).hoistableStyles,E=p.get(e);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,E),(p=c.querySelector(Oo(e)))&&!p._p&&(E.instance=p,E.state.loading=5),di.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},di.set(e,s),p||Bx(c,e,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_s(s),s=et(c).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function gs(e){return'href="'+gn(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function N_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Bx(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),bn(i,"link",s),Q(i),e.head.appendChild(i))}function _s(e){return'[src="'+gn(e)+'"]'}function Po(e){return"script[async]"+e}function O_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+gn(s.href)+'"]');if(l)return i.instance=l,Q(l),l;var c=A({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Q(l),bn(l,"style",c),fu(l,s.precedence,e),i.instance=l;case"stylesheet":c=gs(s.href);var p=e.querySelector(Oo(c));if(p)return i.state.loading|=4,i.instance=p,Q(p),p;l=N_(s),(c=di.get(c))&&gh(l,c),p=(e.ownerDocument||e).createElement("link"),Q(p);var E=p;return E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),bn(p,"link",l),i.state.loading|=4,fu(p,s.precedence,e),i.instance=p;case"script":return p=_s(s.src),(c=e.querySelector(Po(p)))?(i.instance=c,Q(c),c):(l=s,(c=di.get(p))&&(l=A({},s),_h(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),bn(c,"link",l),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,fu(l,s.precedence,e));return i.instance}function fu(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,p=c,E=0;E<l.length;E++){var R=l[E];if(R.dataset.precedence===i)p=R;else if(p!==c)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function gh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function _h(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var hu=null;function P_(e,i,s){if(hu===null){var l=new Map,c=hu=new Map;c.set(s,l)}else c=hu,l=c.get(s),l||(l=new Map,c.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var p=s[c];if(!(p[er]||p[ln]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(i)||"";E=e+E;var R=l.get(E);R?R.push(p):l.set(E,[p])}}return l}function B_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Fx(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function F_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bo=null;function zx(){}function Ix(e,i,s){if(Bo===null)throw Error(r(475));var l=Bo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=gs(s.href),p=e.querySelector(Oo(c));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=du.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=p,Q(p);return}p=e.ownerDocument||e,s=N_(s),(c=di.get(c))&&gh(s,c),p=p.createElement("link"),Q(p);var E=p;E._p=new Promise(function(R,P){E.onload=R,E.onerror=P}),bn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=du.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function Hx(){if(Bo===null)throw Error(r(475));var e=Bo;return e.stylesheets&&e.count===0&&vh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&vh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function du(){if(this.count--,this.count===0){if(this.stylesheets)vh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function vh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,i.forEach(Gx,e),pu=null,du.call(e))}function Gx(e,i){if(!(i.state.loading&4)){var s=pu.get(e);if(s)var l=s.get(null);else{s=new Map,pu.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<c.length;p++){var E=c[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}c=i.instance,E=c.getAttribute("data-precedence"),p=s.get(E)||l,p===l&&s.set(null,c),s.set(E,c),this.count++,l=du.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),p?p.parentNode.insertBefore(c,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var Fo={$$typeof:x,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function Vx(e,i,s,l,c,p,E,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nn(0),this.hiddenUpdates=Nn(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function z_(e,i,s,l,c,p,E,R,P,V,ut,yt){return e=new Vx(e,i,s,E,R,P,V,yt),i=1,p===!0&&(i|=24),p=fi(3,null,null,i),e.current=p,p.stateNode=e,i=Zc(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},Df(p),e}function I_(e){return e?(e=Zr,e):Zr}function H_(e,i,s,l,c,p){c=I_(c),l.context===null?l.context=c:l.pendingContext=c,l=Ca(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Da(e,l,i),s!==null&&(zn(s,e,i),So(s,e,i))}function G_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function yh(e,i){G_(e,i),(e=e.alternate)&&G_(e,i)}function V_(e){if(e.tag===13){var i=Ea(e,67108864);i!==null&&zn(i,e,67108864),yh(e,67108864)}}var mu=!0;function kx(e,i,s,l){var c=w.T;w.T=null;var p=q.p;try{q.p=2,Sh(e,i,s,l)}finally{q.p=p,w.T=c}}function Xx(e,i,s,l){var c=w.T;w.T=null;var p=q.p;try{q.p=8,Sh(e,i,s,l)}finally{q.p=p,w.T=c}}function Sh(e,i,s,l){if(mu){var c=xh(l);if(c===null)lh(e,i,l,gu,s),X_(e,l);else if(qx(c,e,i,s,l))l.stopPropagation();else if(X_(e,l),i&4&&-1<Wx.indexOf(e)){for(;c!==null;){var p=C(c);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=Dt(p.pendingLanes);if(E!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var P=1<<31-Zt(E);R.entanglements[1]|=P,E&=~P}Pi(p),(qe&6)===0&&($l=ht()+500,Uo(0))}}break;case 13:R=Ea(p,2),R!==null&&zn(R,p,2),nu(),yh(p,2)}if(p=xh(l),p===null&&lh(e,i,l,gu,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else lh(e,i,l,null,s)}}function xh(e){return e=Ac(e),Eh(e)}var gu=null;function Eh(e){if(gu=null,e=Wi(e),e!==null){var i=Z(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=Et(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return gu=e,null}function k_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case dt:return 2;case Vt:return 8;case Ut:case zt:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Mh=!1,Fa=null,za=null,Ia=null,zo=new Map,Io=new Map,Ha=[],Wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X_(e,i){switch(e){case"focusin":case"focusout":Fa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(i.pointerId)}}function Ho(e,i,s,l,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=C(i),i!==null&&V_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function qx(e,i,s,l,c){switch(i){case"focusin":return Fa=Ho(Fa,e,i,s,l,c),!0;case"dragenter":return za=Ho(za,e,i,s,l,c),!0;case"mouseover":return Ia=Ho(Ia,e,i,s,l,c),!0;case"pointerover":var p=c.pointerId;return zo.set(p,Ho(zo.get(p)||null,e,i,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Io.set(p,Ho(Io.get(p)||null,e,i,s,l,c)),!0}return!1}function W_(e){var i=Wi(e.target);if(i!==null){var s=Z(i);if(s!==null){if(i=s.tag,i===13){if(i=Et(s),i!==null){e.blockedOn=i,_l(e.priority,function(){if(s.tag===13){var l=ti(),c=Ea(s,l);c!==null&&zn(c,s,l),yh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=xh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);bc=l,s.target.dispatchEvent(l),bc=null}else return i=C(s),i!==null&&V_(i),e.blockedOn=s,!1;i.shift()}return!0}function q_(e,i,s){_u(e)&&s.delete(i)}function Yx(){Mh=!1,Fa!==null&&_u(Fa)&&(Fa=null),za!==null&&_u(za)&&(za=null),Ia!==null&&_u(Ia)&&(Ia=null),zo.forEach(q_),Io.forEach(q_)}function vu(e,i){e.blockedOn===i&&(e.blockedOn=null,Mh||(Mh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Yx)))}var yu=null;function Y_(e){yu!==e&&(yu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],c=e[i+2];if(typeof l!="function"){if(Eh(l||s)===null)continue;break}var p=C(s);p!==null&&(e.splice(i,3),i-=3,hf(p,{pending:!0,data:c,method:s.method,action:l},l,c))}}))}function Go(e){function i(P){return vu(P,e)}Fa!==null&&vu(Fa,e),za!==null&&vu(za,e),Ia!==null&&vu(Ia,e),zo.forEach(i),Io.forEach(i);for(var s=0;s<Ha.length;s++){var l=Ha[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(s=Ha[0],s.blockedOn===null);)W_(s),s.blockedOn===null&&Ha.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var c=s[l],p=s[l+1],E=c[un]||null;if(typeof p=="function")E||Y_(s);else if(E){var R=null;if(p&&p.hasAttribute("formAction")){if(c=p,E=p[un]||null)R=E.formAction;else if(Eh(c)!==null)continue}else R=E.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),Y_(s)}}}function Th(e){this._internalRoot=e}Su.prototype.render=Th.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ti();H_(s,l,e,i,null,null)},Su.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&hs(),H_(e.current,2,null,e,null,null),nu(),i[Xi]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var i=js();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ha.length&&i!==0&&i<Ha[s].priority;s++);Ha.splice(s,0,e),s===0&&W_(e)}};var j_=t.version;if(j_!=="19.0.0")throw Error(r(527,j_,"19.0.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=it(i),e=e!==null?bt(e):null,e=e===null?null:e.stateNode,e};var jx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:w,findFiberByHostInstance:Wi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Qt=xu.inject(jx),kt=xu}catch{}}return ko.createRoot=function(e,i){if(!o(e))throw Error(r(299));var s=!1,l="",c=fg,p=hg,E=dg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=z_(e,1,!1,null,null,s,l,c,p,E,R,null),e[Xi]=i.current,oh(e.nodeType===8?e.parentNode:e),new Th(i)},ko.hydrateRoot=function(e,i,s){if(!o(e))throw Error(r(299));var l=!1,c="",p=fg,E=hg,R=dg,P=null,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(V=s.formState)),i=z_(e,1,!0,i,s??null,l,c,p,E,R,P,V),i.context=I_(null),s=i.current,l=ti(),c=Ca(l),c.callback=null,Da(s,c,l),i.current.lanes=l,On(i,l),Pi(i),e[Xi]=i.current,oh(e),new Su(i)},ko.version="19.0.0",ko}var av;function aE(){if(av)return Rh.exports;av=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Rh.exports=iE(),Rh.exports}var rE=aE(),Xo={},rv;function sE(){if(rv)return Xo;rv=1,Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.parse=f,Xo.serialize=d;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function f(y,x){const M=new u,T=y.length;if(T<2)return M;const S=(x==null?void 0:x.decode)||g;let _=0;do{const U=y.indexOf("=",_);if(U===-1)break;const L=y.indexOf(";",_),D=L===-1?T:L;if(U>D){_=y.lastIndexOf(";",U-1)+1;continue}const B=h(y,_,U),z=m(y,U,B),F=y.slice(B,z);if(M[F]===void 0){let Y=h(y,U+1,D),w=m(y,D,Y);const A=S(y.slice(Y,w));M[F]=A}_=D+1}while(_<T);return M}function h(y,x,M){do{const T=y.charCodeAt(x);if(T!==32&&T!==9)return x}while(++x<M);return M}function m(y,x,M){for(;x>M;){const T=y.charCodeAt(--x);if(T!==32&&T!==9)return x+1}return M}function d(y,x,M){const T=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(y))throw new TypeError(`argument name is invalid: ${y}`);const S=T(x);if(!t.test(S))throw new TypeError(`argument val is invalid: ${x}`);let _=y+"="+S;if(!M)return _;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);_+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);_+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);_+="; Path="+M.path}if(M.expires){if(!v(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);_+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(_+="; HttpOnly"),M.secure&&(_+="; Secure"),M.partitioned&&(_+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return _}function g(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return o.call(y)==="[object Date]"}return Xo}sE();var sv="popstate";function oE(a={}){function t(r,o){let{pathname:u,search:f,hash:h}=r.location;return dd("",{pathname:u,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:$o(o)}return uE(t,n,null,a)}function Ye(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Gi(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lE(){return Math.random().toString(36).substring(2,10)}function ov(a,t){return{usr:a.state,key:a.key,idx:t}}function dd(a,t,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?Vs(t):t,state:n,key:t&&t.key||r||lE()}}function $o({pathname:a="/",search:t="",hash:n=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Vs(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(t.search=a.substring(r),a=a.substring(0,r)),a&&(t.pathname=a)}return t}function uE(a,t,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,f=o.history,h="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-d;d=S,m&&m({action:h,location:T.location,delta:_})}function y(S,_){h="PUSH";let U=dd(T.location,S,_);d=g()+1;let L=ov(U,d),D=T.createHref(U);try{f.pushState(L,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(D)}u&&m&&m({action:h,location:T.location,delta:1})}function x(S,_){h="REPLACE";let U=dd(T.location,S,_);d=g();let L=ov(U,d),D=T.createHref(U);f.replaceState(L,"",D),u&&m&&m({action:h,location:T.location,delta:0})}function M(S){return cE(S)}let T={get action(){return h},get location(){return a(o,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(sv,v),m=S,()=>{o.removeEventListener(sv,v),m=null}},createHref(S){return t(o,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:x,go(S){return f.go(S)}};return T}function cE(a,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:$o(a);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function T0(a,t,n="/"){return fE(a,t,n,!1)}function fE(a,t,n,r){let o=typeof t=="string"?Vs(t):t,u=va(o.pathname||"/",n);if(u==null)return null;let f=b0(a);hE(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let d=ME(u);h=xE(f[m],d,r)}return h}function b0(a,t=[],n=[],r=""){let o=(u,f,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(Ye(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let d=ga([r,m.relativePath]),g=n.concat(m);u.children&&u.children.length>0&&(Ye(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),b0(u.children,t,g,d)),!(u.path==null&&!u.index)&&t.push({path:d,score:yE(d,u.index),routesMeta:g})};return a.forEach((u,f)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))o(u,f);else for(let m of A0(u.path))o(u,f,m)}),t}function A0(a){let t=a.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let f=A0(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&h.push(...f),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function hE(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:SE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var dE=/^:[\w-]+$/,pE=3,mE=2,gE=1,_E=10,vE=-2,lv=a=>a==="*";function yE(a,t){let n=a.split("/"),r=n.length;return n.some(lv)&&(r+=vE),t&&(r+=mE),n.filter(o=>!lv(o)).reduce((o,u)=>o+(dE.test(u)?pE:u===""?gE:_E),r)}function SE(a,t){return a.length===t.length&&a.slice(0,-1).every((r,o)=>r===t[o])?a[a.length-1]-t[t.length-1]:0}function xE(a,t,n=!1){let{routesMeta:r}=a,o={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],d=h===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=sc({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),y=m.route;if(!v&&d&&n&&!r[r.length-1].route.index&&(v=sc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),f.push({params:o,pathname:ga([u,v.pathname]),pathnameBase:RE(ga([u,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(u=ga([u,v.pathnameBase]))}return f}function sc(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=EE(a.path,a.caseSensitive,a.end),o=t.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((d,{paramName:g,isOptional:v},y)=>{if(g==="*"){let M=h[y]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const x=h[y];return v&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:u,pathnameBase:f,pattern:a}}function EE(a,t=!1,n=!0){Gi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function ME(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function va(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function TE(a,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Vs(a):a;return{pathname:n?n.startsWith("/")?n:bE(n,t):t,search:wE(r),hash:CE(o)}}function bE(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Uh(a,t,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AE(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function R0(a){let t=AE(a);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function w0(a,t,n,r=!1){let o;typeof a=="string"?o=Vs(a):(o={...a},Ye(!o.pathname||!o.pathname.includes("?"),Uh("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Uh("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Uh("#","search","hash",o)));let u=a===""||o.pathname==="",f=u?"/":o.pathname,h;if(f==null)h=n;else{let v=t.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}h=v>=0?t[v]:"/"}let m=TE(o,h),d=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var ga=a=>a.join("/").replace(/\/\/+/g,"/"),RE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),wE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,CE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function DE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var C0=["POST","PUT","PATCH","DELETE"];new Set(C0);var UE=["GET",...C0];new Set(UE);var ks=ft.createContext(null);ks.displayName="DataRouter";var hc=ft.createContext(null);hc.displayName="DataRouterState";var D0=ft.createContext({isTransitioning:!1});D0.displayName="ViewTransition";var LE=ft.createContext(new Map);LE.displayName="Fetchers";var NE=ft.createContext(null);NE.displayName="Await";var ki=ft.createContext(null);ki.displayName="Navigation";var rl=ft.createContext(null);rl.displayName="Location";var Sa=ft.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var up=ft.createContext(null);up.displayName="RouteError";function OE(a,{relative:t}={}){Ye(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=ft.useContext(ki),{hash:o,pathname:u,search:f}=ol(a,{relative:t}),h=u;return n!=="/"&&(h=u==="/"?n:ga([n,u])),r.createHref({pathname:h,search:f,hash:o})}function sl(){return ft.useContext(rl)!=null}function zr(){return Ye(sl(),"useLocation() may be used only in the context of a <Router> component."),ft.useContext(rl).location}var U0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function L0(a){ft.useContext(ki).static||ft.useLayoutEffect(a)}function N0(){let{isDataRoute:a}=ft.useContext(Sa);return a?YE():PE()}function PE(){Ye(sl(),"useNavigate() may be used only in the context of a <Router> component.");let a=ft.useContext(ks),{basename:t,navigator:n}=ft.useContext(ki),{matches:r}=ft.useContext(Sa),{pathname:o}=zr(),u=JSON.stringify(R0(r)),f=ft.useRef(!1);return L0(()=>{f.current=!0}),ft.useCallback((m,d={})=>{if(Gi(f.current,U0),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=w0(m,JSON.parse(u),o,d.relative==="path");a==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ga([t,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[t,n,u,o,a])}ft.createContext(null);function ol(a,{relative:t}={}){let{matches:n}=ft.useContext(Sa),{pathname:r}=zr(),o=JSON.stringify(R0(n));return ft.useMemo(()=>w0(a,JSON.parse(o),r,t==="path"),[a,o,r,t])}function BE(a,t){return O0(a,t)}function O0(a,t,n,r){var _;Ye(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=ft.useContext(ki),{matches:u}=ft.useContext(Sa),f=u[u.length-1],h=f?f.params:{},m=f?f.pathname:"/",d=f?f.pathnameBase:"/",g=f&&f.route;{let U=g&&g.path||"";P0(m,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=zr(),y;if(t){let U=typeof t=="string"?Vs(t):t;Ye(d==="/"||((_=U.pathname)==null?void 0:_.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=v;let x=y.pathname||"/",M=x;if(d!=="/"){let U=d.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(U.length).join("/")}let T=T0(a,{pathname:M});Gi(g||T!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Gi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=GE(T&&T.map(U=>Object.assign({},U,{params:Object.assign({},h,U.params),pathname:ga([d,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?d:ga([d,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),u,n,r);return t&&S?ft.createElement(rl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},S):S}function FE(){let a=qE(),t=DE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=ft.createElement(ft.Fragment,null,ft.createElement("p",null,"💿 Hey developer 👋"),ft.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ft.createElement("code",{style:u},"ErrorBoundary")," or"," ",ft.createElement("code",{style:u},"errorElement")," prop on your route.")),ft.createElement(ft.Fragment,null,ft.createElement("h2",null,"Unexpected Application Error!"),ft.createElement("h3",{style:{fontStyle:"italic"}},t),n?ft.createElement("pre",{style:o},n):null,f)}var zE=ft.createElement(FE,null),IE=class extends ft.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){console.error("React Router caught the following error during render",a,t)}render(){return this.state.error!==void 0?ft.createElement(Sa.Provider,{value:this.props.routeContext},ft.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function HE({routeContext:a,match:t,children:n}){let r=ft.useContext(ks);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ft.createElement(Sa.Provider,{value:a},n)}function GE(a,t=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,u=n==null?void 0:n.errors;if(u!=null){let m=o.findIndex(d=>d.route.id&&(u==null?void 0:u[d.route.id])!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,h=-1;if(n)for(let m=0;m<o.length;m++){let d=o[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=m),d.route.id){let{loaderData:g,errors:v}=n,y=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((m,d,g)=>{let v,y=!1,x=null,M=null;n&&(v=u&&d.route.id?u[d.route.id]:void 0,x=d.route.errorElement||zE,f&&(h<0&&g===0?(P0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):h===g&&(y=!0,M=d.route.hydrateFallbackElement||null)));let T=t.concat(o.slice(0,g+1)),S=()=>{let _;return v?_=x:y?_=M:d.route.Component?_=ft.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=m,ft.createElement(HE,{match:d,routeContext:{outlet:m,matches:T,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?ft.createElement(IE,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function cp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VE(a){let t=ft.useContext(ks);return Ye(t,cp(a)),t}function kE(a){let t=ft.useContext(hc);return Ye(t,cp(a)),t}function XE(a){let t=ft.useContext(Sa);return Ye(t,cp(a)),t}function fp(a){let t=XE(a),n=t.matches[t.matches.length-1];return Ye(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function WE(){return fp("useRouteId")}function qE(){var r;let a=ft.useContext(up),t=kE("useRouteError"),n=fp("useRouteError");return a!==void 0?a:(r=t.errors)==null?void 0:r[n]}function YE(){let{router:a}=VE("useNavigate"),t=fp("useNavigate"),n=ft.useRef(!1);return L0(()=>{n.current=!0}),ft.useCallback(async(o,u={})=>{Gi(n.current,U0),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:t,...u}))},[a,t])}var uv={};function P0(a,t,n){!t&&!uv[a]&&(uv[a]=!0,Gi(!1,n))}ft.memo(jE);function jE({routes:a,future:t,state:n}){return O0(a,void 0,n,t)}function qu(a){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ZE({basename:a="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:u=!1}){Ye(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=ft.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=Vs(n));let{pathname:m="/",search:d="",hash:g="",state:v=null,key:y="default"}=n,x=ft.useMemo(()=>{let M=va(m,f);return M==null?null:{location:{pathname:M,search:d,hash:g,state:v,key:y},navigationType:r}},[f,m,d,g,v,y,r]);return Gi(x!=null,`<Router basename="${f}"> is not able to match the URL "${m}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:ft.createElement(ki.Provider,{value:h},ft.createElement(rl.Provider,{children:t,value:x}))}function KE({children:a,location:t}){return BE(pd(a),t)}function pd(a,t=[]){let n=[];return ft.Children.forEach(a,(r,o)=>{if(!ft.isValidElement(r))return;let u=[...t,o];if(r.type===ft.Fragment){n.push.apply(n,pd(r.props.children,u));return}Ye(r.type===qu,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=pd(r.props.children,u)),n.push(f)}),n}var Yu="get",ju="application/x-www-form-urlencoded";function dc(a){return a!=null&&typeof a.tagName=="string"}function QE(a){return dc(a)&&a.tagName.toLowerCase()==="button"}function JE(a){return dc(a)&&a.tagName.toLowerCase()==="form"}function $E(a){return dc(a)&&a.tagName.toLowerCase()==="input"}function tM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function eM(a,t){return a.button===0&&(!t||t==="_self")&&!tM(a)}var Eu=null;function nM(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var iM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lh(a){return a!=null&&!iM.has(a)?(Gi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):a}function aM(a,t){let n,r,o,u,f;if(JE(a)){let h=a.getAttribute("action");r=h?va(h,t):null,n=a.getAttribute("method")||Yu,o=Lh(a.getAttribute("enctype"))||ju,u=new FormData(a)}else if(QE(a)||$E(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(r=m?va(m,t):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||Yu,o=Lh(a.getAttribute("formenctype"))||Lh(h.getAttribute("enctype"))||ju,u=new FormData(h,a),!nM()){let{name:d,type:g,value:v}=a;if(g==="image"){let y=d?`${d}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else d&&u.append(d,v)}}else{if(dc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Yu,r=null,o=ju,f=a}return u&&o==="text/plain"&&(f=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:f}}function hp(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}async function rM(a,t){if(a.id in t)return t[a.id];try{let n=await import(a.module);return t[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function oM(a,t,n){let r=await Promise.all(a.map(async o=>{let u=t.routes[o.route.id];if(u){let f=await rM(u,n);return f.links?f.links():[]}return[]}));return fM(r.flat(1).filter(sM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function cv(a,t,n,r,o,u){let f=(m,d)=>n[d]?m.route.id!==n[d].route.id:!0,h=(m,d)=>{var g;return n[d].pathname!==m.pathname||((g=n[d].route.path)==null?void 0:g.endsWith("*"))&&n[d].params["*"]!==m.params["*"]};return u==="assets"?t.filter((m,d)=>f(m,d)||h(m,d)):u==="data"?t.filter((m,d)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||h(m,d))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function lM(a,t,{includeHydrateFallback:n}={}){return uM(a.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function uM(a){return[...new Set(a)]}function cM(a){let t={},n=Object.keys(a).sort();for(let r of n)t[r]=a[r];return t}function fM(a,t){let n=new Set;return new Set(t),a.reduce((r,o)=>{let u=JSON.stringify(cM(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hM=new Set([100,101,204,205]);function dM(a,t){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":t&&va(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function B0(){let a=ft.useContext(ks);return hp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function pM(){let a=ft.useContext(hc);return hp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var dp=ft.createContext(void 0);dp.displayName="FrameworkContext";function F0(){let a=ft.useContext(dp);return hp(a,"You must render this element inside a <HydratedRouter> element"),a}function mM(a,t){let n=ft.useContext(dp),[r,o]=ft.useState(!1),[u,f]=ft.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:v}=t,y=ft.useRef(null);ft.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=_=>{_.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[a]),ft.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let x=()=>{o(!0)},M=()=>{o(!1),f(!1)};return n?a!=="intent"?[u,y,{}]:[u,y,{onFocus:Wo(h,x),onBlur:Wo(m,M),onMouseEnter:Wo(d,x),onMouseLeave:Wo(g,M),onTouchStart:Wo(v,x)}]:[!1,y,{}]}function Wo(a,t){return n=>{a&&a(n),n.defaultPrevented||t(n)}}function gM({page:a,...t}){let{router:n}=B0(),r=ft.useMemo(()=>T0(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?ft.createElement(vM,{page:a,matches:r,...t}):null}function _M(a){let{manifest:t,routeModules:n}=F0(),[r,o]=ft.useState([]);return ft.useEffect(()=>{let u=!1;return oM(a,t,n).then(f=>{u||o(f)}),()=>{u=!0}},[a,t,n]),r}function vM({page:a,matches:t,...n}){let r=zr(),{manifest:o,routeModules:u}=F0(),{basename:f}=B0(),{loaderData:h,matches:m}=pM(),d=ft.useMemo(()=>cv(a,t,m,o,r,"data"),[a,t,m,o,r]),g=ft.useMemo(()=>cv(a,t,m,o,r,"assets"),[a,t,m,o,r]),v=ft.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,T=!1;if(t.forEach(_=>{var L;let U=o.routes[_.route.id];!U||!U.hasLoader||(!d.some(D=>D.route.id===_.route.id)&&_.route.id in h&&((L=u[_.route.id])!=null&&L.shouldRevalidate)||U.hasClientLoader?T=!0:M.add(_.route.id))}),M.size===0)return[];let S=dM(a,f);return T&&M.size>0&&S.searchParams.set("_routes",t.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,o,d,t,a,u]),y=ft.useMemo(()=>lM(g,o),[g,o]),x=_M(g);return ft.createElement(ft.Fragment,null,v.map(M=>ft.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),y.map(M=>ft.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),x.map(({key:M,link:T})=>ft.createElement("link",{key:M,...T})))}function yM(...a){return t=>{a.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var z0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z0&&(window.__reactRouterVersion="7.6.2")}catch{}function SM({basename:a,children:t,window:n}){let r=ft.useRef();r.current==null&&(r.current=oE({window:n,v5Compat:!0}));let o=r.current,[u,f]=ft.useState({action:o.action,location:o.location}),h=ft.useCallback(m=>{ft.startTransition(()=>f(m))},[f]);return ft.useLayoutEffect(()=>o.listen(h),[o,h]),ft.createElement(ZE,{basename:a,children:t,location:u.location,navigationType:u.action,navigator:o})}var I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pp=ft.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:f,state:h,target:m,to:d,preventScrollReset:g,viewTransition:v,...y},x){let{basename:M}=ft.useContext(ki),T=typeof d=="string"&&I0.test(d),S,_=!1;if(typeof d=="string"&&T&&(S=d,z0))try{let w=new URL(window.location.href),A=d.startsWith("//")?new URL(w.protocol+d):new URL(d),H=va(A.pathname,M);A.origin===w.origin&&H!=null?d=H+A.search+A.hash:_=!0}catch{Gi(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=OE(d,{relative:o}),[L,D,B]=mM(r,y),z=TM(d,{replace:f,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:v});function F(w){t&&t(w),w.defaultPrevented||z(w)}let Y=ft.createElement("a",{...y,...B,href:S||U,onClick:_||u?t:F,ref:yM(x,D),target:m,"data-discover":!T&&n==="render"?"true":void 0});return L&&!T?ft.createElement(ft.Fragment,null,Y,ft.createElement(gM,{page:U})):Y});pp.displayName="Link";var xM=ft.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:f,viewTransition:h,children:m,...d},g){let v=ol(f,{relative:d.relative}),y=zr(),x=ft.useContext(hc),{navigator:M,basename:T}=ft.useContext(ki),S=x!=null&&CM(v)&&h===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,U=y.pathname,L=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(U=U.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=va(L,T)||L);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=U===_||!o&&U.startsWith(_)&&U.charAt(D)==="/",z=L!=null&&(L===_||!o&&L.startsWith(_)&&L.charAt(_.length)==="/"),F={isActive:B,isPending:z,isTransitioning:S},Y=B?t:void 0,w;typeof r=="function"?w=r(F):w=[r,B?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let A=typeof u=="function"?u(F):u;return ft.createElement(pp,{...d,"aria-current":Y,className:w,ref:g,style:A,to:f,viewTransition:h},typeof m=="function"?m(F):m)});xM.displayName="NavLink";var EM=ft.forwardRef(({discover:a="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:u,method:f=Yu,action:h,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:v,...y},x)=>{let M=RM(),T=wM(h,{relative:d}),S=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&I0.test(h),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,B=(D==null?void 0:D.getAttribute("formmethod"))||f;M(D||L.currentTarget,{fetcherKey:t,method:B,navigate:n,replace:o,state:u,relative:d,preventScrollReset:g,viewTransition:v})};return ft.createElement("form",{ref:x,method:S,action:T,onSubmit:r?m:U,...y,"data-discover":!_&&a==="render"?"true":void 0})});EM.displayName="Form";function MM(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H0(a){let t=ft.useContext(ks);return Ye(t,MM(a)),t}function TM(a,{target:t,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:f}={}){let h=N0(),m=zr(),d=ol(a,{relative:u});return ft.useCallback(g=>{if(eM(g,t)){g.preventDefault();let v=n!==void 0?n:$o(m)===$o(d);h(a,{replace:v,state:r,preventScrollReset:o,relative:u,viewTransition:f})}},[m,h,d,n,r,t,a,o,u,f])}var bM=0,AM=()=>`__${String(++bM)}__`;function RM(){let{router:a}=H0("useSubmit"),{basename:t}=ft.useContext(ki),n=WE();return ft.useCallback(async(r,o={})=>{let{action:u,method:f,encType:h,formData:m,body:d}=aM(r,t);if(o.navigate===!1){let g=o.fetcherKey||AM();await a.fetch(g,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await a.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,t,n])}function wM(a,{relative:t}={}){let{basename:n}=ft.useContext(ki),r=ft.useContext(Sa);Ye(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={...ol(a||".",{relative:t})},f=zr();if(a==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ga([n,u.pathname])),$o(u)}function CM(a,t={}){let n=ft.useContext(D0);Ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=H0("useViewTransitionState"),o=ol(a,{relative:t.relative});if(!n.isTransitioning)return!1;let u=va(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=va(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sc(o.pathname,f)!=null||sc(o.pathname,u)!=null}[...hM];const G0=ft.createContext(),DM=({children:a})=>{const[t,n]=ft.useState(!1);return Ve.jsx(G0.Provider,{value:{isAuthenticated:t,setIsAuthenticated:n},children:a})},UM={user:null,isAuthenticated:!1,modelLoaded:!1,modelName:""};function LM(a,t){switch(t.type){case"LOGIN":return{...a,user:t.payload,isAuthenticated:!0};case"LOGOUT":return{...a,user:null,isAuthenticated:!1};case"SET_MODEL":return{...a,modelLoaded:!0,modelName:t.payload};default:return a}}const V0=ft.createContext();function NM({children:a}){const[t,n]=ft.useReducer(LM,UM);return Ve.jsx(V0.Provider,{value:{state:t,dispatch:n},children:a})}function OM(){return ft.useContext(V0)}function PM(){const{state:a}=OM();return Ve.jsxs("div",{children:[Ve.jsx("h1",{children:"🏠 Accueil"}),Ve.jsxs("p",{children:["🪐 Modèle 3D affiché : ",a.modelName||"Aucun modèle"]}),Ve.jsx("p",{children:Ve.jsx(pp,{to:"/scene",children:"🌌 Voir la scène 3D"})})]})}function k0(a,t){return function(){return a.apply(t,arguments)}}const{toString:BM}=Object.prototype,{getPrototypeOf:mp}=Object,pc=(a=>t=>{const n=BM.call(t);return a[n]||(a[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ci=a=>(a=a.toLowerCase(),t=>pc(t)===a),mc=a=>t=>typeof t===a,{isArray:Xs}=Array,tl=mc("undefined");function FM(a){return a!==null&&!tl(a)&&a.constructor!==null&&!tl(a.constructor)&&ii(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const X0=Ci("ArrayBuffer");function zM(a){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(a):t=a&&a.buffer&&X0(a.buffer),t}const IM=mc("string"),ii=mc("function"),W0=mc("number"),gc=a=>a!==null&&typeof a=="object",HM=a=>a===!0||a===!1,Zu=a=>{if(pc(a)!=="object")return!1;const t=mp(a);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)},GM=Ci("Date"),VM=Ci("File"),kM=Ci("Blob"),XM=Ci("FileList"),WM=a=>gc(a)&&ii(a.pipe),qM=a=>{let t;return a&&(typeof FormData=="function"&&a instanceof FormData||ii(a.append)&&((t=pc(a))==="formdata"||t==="object"&&ii(a.toString)&&a.toString()==="[object FormData]"))},YM=Ci("URLSearchParams"),[jM,ZM,KM,QM]=["ReadableStream","Request","Response","Headers"].map(Ci),JM=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ll(a,t,{allOwnKeys:n=!1}={}){if(a===null||typeof a>"u")return;let r,o;if(typeof a!="object"&&(a=[a]),Xs(a))for(r=0,o=a.length;r<o;r++)t.call(null,a[r],r,a);else{const u=n?Object.getOwnPropertyNames(a):Object.keys(a),f=u.length;let h;for(r=0;r<f;r++)h=u[r],t.call(null,a[h],h,a)}}function q0(a,t){t=t.toLowerCase();const n=Object.keys(a);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Y0=a=>!tl(a)&&a!==Dr;function md(){const{caseless:a}=Y0(this)&&this||{},t={},n=(r,o)=>{const u=a&&q0(t,o)||o;Zu(t[u])&&Zu(r)?t[u]=md(t[u],r):Zu(r)?t[u]=md({},r):Xs(r)?t[u]=r.slice():t[u]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ll(arguments[r],n);return t}const $M=(a,t,n,{allOwnKeys:r}={})=>(ll(t,(o,u)=>{n&&ii(o)?a[u]=k0(o,n):a[u]=o},{allOwnKeys:r}),a),tT=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),eT=(a,t,n,r)=>{a.prototype=Object.create(t.prototype,r),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:t.prototype}),n&&Object.assign(a.prototype,n)},nT=(a,t,n,r)=>{let o,u,f;const h={};if(t=t||{},a==null)return t;do{for(o=Object.getOwnPropertyNames(a),u=o.length;u-- >0;)f=o[u],(!r||r(f,a,t))&&!h[f]&&(t[f]=a[f],h[f]=!0);a=n!==!1&&mp(a)}while(a&&(!n||n(a,t))&&a!==Object.prototype);return t},iT=(a,t,n)=>{a=String(a),(n===void 0||n>a.length)&&(n=a.length),n-=t.length;const r=a.indexOf(t,n);return r!==-1&&r===n},aT=a=>{if(!a)return null;if(Xs(a))return a;let t=a.length;if(!W0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=a[t];return n},rT=(a=>t=>a&&t instanceof a)(typeof Uint8Array<"u"&&mp(Uint8Array)),sT=(a,t)=>{const r=(a&&a[Symbol.iterator]).call(a);let o;for(;(o=r.next())&&!o.done;){const u=o.value;t.call(a,u[0],u[1])}},oT=(a,t)=>{let n;const r=[];for(;(n=a.exec(t))!==null;)r.push(n);return r},lT=Ci("HTMLFormElement"),uT=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),fv=(({hasOwnProperty:a})=>(t,n)=>a.call(t,n))(Object.prototype),cT=Ci("RegExp"),j0=(a,t)=>{const n=Object.getOwnPropertyDescriptors(a),r={};ll(n,(o,u)=>{let f;(f=t(o,u,a))!==!1&&(r[u]=f||o)}),Object.defineProperties(a,r)},fT=a=>{j0(a,(t,n)=>{if(ii(a)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=a[n];if(ii(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hT=(a,t)=>{const n={},r=o=>{o.forEach(u=>{n[u]=!0})};return Xs(a)?r(a):r(String(a).split(t)),n},dT=()=>{},pT=(a,t)=>a!=null&&Number.isFinite(a=+a)?a:t;function mT(a){return!!(a&&ii(a.append)&&a[Symbol.toStringTag]==="FormData"&&a[Symbol.iterator])}const gT=a=>{const t=new Array(10),n=(r,o)=>{if(gc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const u=Xs(r)?[]:{};return ll(r,(f,h)=>{const m=n(f,o+1);!tl(m)&&(u[h]=m)}),t[o]=void 0,u}}return r};return n(a,0)},_T=Ci("AsyncFunction"),vT=a=>a&&(gc(a)||ii(a))&&ii(a.then)&&ii(a.catch),Z0=((a,t)=>a?setImmediate:t?((n,r)=>(Dr.addEventListener("message",({source:o,data:u})=>{o===Dr&&u===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Dr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ii(Dr.postMessage)),yT=typeof queueMicrotask<"u"?queueMicrotask.bind(Dr):typeof process<"u"&&process.nextTick||Z0,st={isArray:Xs,isArrayBuffer:X0,isBuffer:FM,isFormData:qM,isArrayBufferView:zM,isString:IM,isNumber:W0,isBoolean:HM,isObject:gc,isPlainObject:Zu,isReadableStream:jM,isRequest:ZM,isResponse:KM,isHeaders:QM,isUndefined:tl,isDate:GM,isFile:VM,isBlob:kM,isRegExp:cT,isFunction:ii,isStream:WM,isURLSearchParams:YM,isTypedArray:rT,isFileList:XM,forEach:ll,merge:md,extend:$M,trim:JM,stripBOM:tT,inherits:eT,toFlatObject:nT,kindOf:pc,kindOfTest:Ci,endsWith:iT,toArray:aT,forEachEntry:sT,matchAll:oT,isHTMLForm:lT,hasOwnProperty:fv,hasOwnProp:fv,reduceDescriptors:j0,freezeMethods:fT,toObjectSet:hT,toCamelCase:uT,noop:dT,toFiniteNumber:pT,findKey:q0,global:Dr,isContextDefined:Y0,isSpecCompliantForm:mT,toJSONObject:gT,isAsyncFn:_T,isThenable:vT,setImmediate:Z0,asap:yT};function oe(a,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}st.inherits(oe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:st.toJSONObject(this.config),code:this.code,status:this.status}}});const K0=oe.prototype,Q0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Q0[a]={value:a}});Object.defineProperties(oe,Q0);Object.defineProperty(K0,"isAxiosError",{value:!0});oe.from=(a,t,n,r,o,u)=>{const f=Object.create(K0);return st.toFlatObject(a,f,function(m){return m!==Error.prototype},h=>h!=="isAxiosError"),oe.call(f,a.message,t,n,r,o),f.cause=a,f.name=a.name,u&&Object.assign(f,u),f};const ST=null;function gd(a){return st.isPlainObject(a)||st.isArray(a)}function J0(a){return st.endsWith(a,"[]")?a.slice(0,-2):a}function hv(a,t,n){return a?a.concat(t).map(function(o,u){return o=J0(o),!n&&u?"["+o+"]":o}).join(n?".":""):t}function xT(a){return st.isArray(a)&&!a.some(gd)}const ET=st.toFlatObject(st,{},null,function(t){return/^is[A-Z]/.test(t)});function _c(a,t,n){if(!st.isObject(a))throw new TypeError("target must be an object");t=t||new FormData,n=st.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,S){return!st.isUndefined(S[T])});const r=n.metaTokens,o=n.visitor||g,u=n.dots,f=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&st.isSpecCompliantForm(t);if(!st.isFunction(o))throw new TypeError("visitor must be a function");function d(M){if(M===null)return"";if(st.isDate(M))return M.toISOString();if(!m&&st.isBlob(M))throw new oe("Blob is not supported. Use a Buffer instead.");return st.isArrayBuffer(M)||st.isTypedArray(M)?m&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function g(M,T,S){let _=M;if(M&&!S&&typeof M=="object"){if(st.endsWith(T,"{}"))T=r?T:T.slice(0,-2),M=JSON.stringify(M);else if(st.isArray(M)&&xT(M)||(st.isFileList(M)||st.endsWith(T,"[]"))&&(_=st.toArray(M)))return T=J0(T),_.forEach(function(L,D){!(st.isUndefined(L)||L===null)&&t.append(f===!0?hv([T],D,u):f===null?T:T+"[]",d(L))}),!1}return gd(M)?!0:(t.append(hv(S,T,u),d(M)),!1)}const v=[],y=Object.assign(ET,{defaultVisitor:g,convertValue:d,isVisitable:gd});function x(M,T){if(!st.isUndefined(M)){if(v.indexOf(M)!==-1)throw Error("Circular reference detected in "+T.join("."));v.push(M),st.forEach(M,function(_,U){(!(st.isUndefined(_)||_===null)&&o.call(t,_,st.isString(U)?U.trim():U,T,y))===!0&&x(_,T?T.concat(U):[U])}),v.pop()}}if(!st.isObject(a))throw new TypeError("data must be an object");return x(a),t}function dv(a){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function gp(a,t){this._pairs=[],a&&_c(a,this,t)}const $0=gp.prototype;$0.append=function(t,n){this._pairs.push([t,n])};$0.toString=function(t){const n=t?function(r){return t.call(this,r,dv)}:dv;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function MT(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ty(a,t,n){if(!t)return a;const r=n&&n.encode||MT;st.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let u;if(o?u=o(t,n):u=st.isURLSearchParams(t)?t.toString():new gp(t,n).toString(r),u){const f=a.indexOf("#");f!==-1&&(a=a.slice(0,f)),a+=(a.indexOf("?")===-1?"?":"&")+u}return a}class pv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){st.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ey={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},TT=typeof URLSearchParams<"u"?URLSearchParams:gp,bT=typeof FormData<"u"?FormData:null,AT=typeof Blob<"u"?Blob:null,RT={isBrowser:!0,classes:{URLSearchParams:TT,FormData:bT,Blob:AT},protocols:["http","https","file","blob","url","data"]},_p=typeof window<"u"&&typeof document<"u",_d=typeof navigator=="object"&&navigator||void 0,wT=_p&&(!_d||["ReactNative","NativeScript","NS"].indexOf(_d.product)<0),CT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",DT=_p&&window.location.href||"http://localhost",UT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_p,hasStandardBrowserEnv:wT,hasStandardBrowserWebWorkerEnv:CT,navigator:_d,origin:DT},Symbol.toStringTag,{value:"Module"})),Un={...UT,...RT};function LT(a,t){return _c(a,new Un.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,u){return Un.isNode&&st.isBuffer(n)?(this.append(r,n.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},t))}function NT(a){return st.matchAll(/\w+|\[(\w*)]/g,a).map(t=>t[0]==="[]"?"":t[1]||t[0])}function OT(a){const t={},n=Object.keys(a);let r;const o=n.length;let u;for(r=0;r<o;r++)u=n[r],t[u]=a[u];return t}function ny(a){function t(n,r,o,u){let f=n[u++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),m=u>=n.length;return f=!f&&st.isArray(o)?o.length:f,m?(st.hasOwnProp(o,f)?o[f]=[o[f],r]:o[f]=r,!h):((!o[f]||!st.isObject(o[f]))&&(o[f]=[]),t(n,r,o[f],u)&&st.isArray(o[f])&&(o[f]=OT(o[f])),!h)}if(st.isFormData(a)&&st.isFunction(a.entries)){const n={};return st.forEachEntry(a,(r,o)=>{t(NT(r),o,n,0)}),n}return null}function PT(a,t,n){if(st.isString(a))try{return(t||JSON.parse)(a),st.trim(a)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(a)}const ul={transitional:ey,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,u=st.isObject(t);if(u&&st.isHTMLForm(t)&&(t=new FormData(t)),st.isFormData(t))return o?JSON.stringify(ny(t)):t;if(st.isArrayBuffer(t)||st.isBuffer(t)||st.isStream(t)||st.isFile(t)||st.isBlob(t)||st.isReadableStream(t))return t;if(st.isArrayBufferView(t))return t.buffer;if(st.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(u){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LT(t,this.formSerializer).toString();if((h=st.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return _c(h?{"files[]":t}:t,m&&new m,this.formSerializer)}}return u||o?(n.setContentType("application/json",!1),PT(t)):t}],transformResponse:[function(t){const n=this.transitional||ul.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(st.isResponse(t)||st.isReadableStream(t))return t;if(t&&st.isString(t)&&(r&&!this.responseType||o)){const f=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(h){if(f)throw h.name==="SyntaxError"?oe.from(h,oe.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Un.classes.FormData,Blob:Un.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};st.forEach(["delete","get","head","post","put","patch"],a=>{ul.headers[a]={}});const BT=st.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),FT=a=>{const t={};let n,r,o;return a&&a.split(`
`).forEach(function(f){o=f.indexOf(":"),n=f.substring(0,o).trim().toLowerCase(),r=f.substring(o+1).trim(),!(!n||t[n]&&BT[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},mv=Symbol("internals");function qo(a){return a&&String(a).trim().toLowerCase()}function Ku(a){return a===!1||a==null?a:st.isArray(a)?a.map(Ku):String(a)}function zT(a){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(a);)t[r[1]]=r[2];return t}const IT=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Nh(a,t,n,r,o){if(st.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!st.isString(t)){if(st.isString(r))return t.indexOf(r)!==-1;if(st.isRegExp(r))return r.test(t)}}function HT(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function GT(a,t){const n=st.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(a,r+n,{value:function(o,u,f){return this[r].call(this,t,o,u,f)},configurable:!0})})}let qn=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function u(h,m,d){const g=qo(m);if(!g)throw new Error("header name must be a non-empty string");const v=st.findKey(o,g);(!v||o[v]===void 0||d===!0||d===void 0&&o[v]!==!1)&&(o[v||m]=Ku(h))}const f=(h,m)=>st.forEach(h,(d,g)=>u(d,g,m));if(st.isPlainObject(t)||t instanceof this.constructor)f(t,n);else if(st.isString(t)&&(t=t.trim())&&!IT(t))f(FT(t),n);else if(st.isHeaders(t))for(const[h,m]of t.entries())u(m,h,r);else t!=null&&u(n,t,r);return this}get(t,n){if(t=qo(t),t){const r=st.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return zT(o);if(st.isFunction(n))return n.call(this,o,r);if(st.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qo(t),t){const r=st.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Nh(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function u(f){if(f=qo(f),f){const h=st.findKey(r,f);h&&(!n||Nh(r,r[h],h,n))&&(delete r[h],o=!0)}}return st.isArray(t)?t.forEach(u):u(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const u=n[r];(!t||Nh(this,this[u],u,t,!0))&&(delete this[u],o=!0)}return o}normalize(t){const n=this,r={};return st.forEach(this,(o,u)=>{const f=st.findKey(r,u);if(f){n[f]=Ku(o),delete n[u];return}const h=t?HT(u):String(u).trim();h!==u&&delete n[u],n[h]=Ku(o),r[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return st.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&st.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[mv]=this[mv]={accessors:{}}).accessors,o=this.prototype;function u(f){const h=qo(f);r[h]||(GT(o,f),r[h]=!0)}return st.isArray(t)?t.forEach(u):u(t),this}};qn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);st.reduceDescriptors(qn.prototype,({value:a},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>a,set(r){this[n]=r}}});st.freezeMethods(qn);function Oh(a,t){const n=this||ul,r=t||n,o=qn.from(r.headers);let u=r.data;return st.forEach(a,function(h){u=h.call(n,u,o.normalize(),t?t.status:void 0)}),o.normalize(),u}function iy(a){return!!(a&&a.__CANCEL__)}function Ws(a,t,n){oe.call(this,a??"canceled",oe.ERR_CANCELED,t,n),this.name="CanceledError"}st.inherits(Ws,oe,{__CANCEL__:!0});function ay(a,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?a(n):t(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function VT(a){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return t&&t[1]||""}function kT(a,t){a=a||10;const n=new Array(a),r=new Array(a);let o=0,u=0,f;return t=t!==void 0?t:1e3,function(m){const d=Date.now(),g=r[u];f||(f=d),n[o]=m,r[o]=d;let v=u,y=0;for(;v!==o;)y+=n[v++],v=v%a;if(o=(o+1)%a,o===u&&(u=(u+1)%a),d-f<t)return;const x=g&&d-g;return x?Math.round(y*1e3/x):void 0}}function XT(a,t){let n=0,r=1e3/t,o,u;const f=(d,g=Date.now())=>{n=g,o=null,u&&(clearTimeout(u),u=null),a.apply(null,d)};return[(...d)=>{const g=Date.now(),v=g-n;v>=r?f(d,g):(o=d,u||(u=setTimeout(()=>{u=null,f(o)},r-v)))},()=>o&&f(o)]}const oc=(a,t,n=3)=>{let r=0;const o=kT(50,250);return XT(u=>{const f=u.loaded,h=u.lengthComputable?u.total:void 0,m=f-r,d=o(m),g=f<=h;r=f;const v={loaded:f,total:h,progress:h?f/h:void 0,bytes:m,rate:d||void 0,estimated:d&&h&&g?(h-f)/d:void 0,event:u,lengthComputable:h!=null,[t?"download":"upload"]:!0};a(v)},n)},gv=(a,t)=>{const n=a!=null;return[r=>t[0]({lengthComputable:n,total:a,loaded:r}),t[1]]},_v=a=>(...t)=>st.asap(()=>a(...t)),WT=Un.hasStandardBrowserEnv?((a,t)=>n=>(n=new URL(n,Un.origin),a.protocol===n.protocol&&a.host===n.host&&(t||a.port===n.port)))(new URL(Un.origin),Un.navigator&&/(msie|trident)/i.test(Un.navigator.userAgent)):()=>!0,qT=Un.hasStandardBrowserEnv?{write(a,t,n,r,o,u){const f=[a+"="+encodeURIComponent(t)];st.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),st.isString(r)&&f.push("path="+r),st.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(a){const t=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function YT(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function jT(a,t){return t?a.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):a}function ry(a,t,n){let r=!YT(t);return a&&(r||n==!1)?jT(a,t):t}const vv=a=>a instanceof qn?{...a}:a;function Or(a,t){t=t||{};const n={};function r(d,g,v,y){return st.isPlainObject(d)&&st.isPlainObject(g)?st.merge.call({caseless:y},d,g):st.isPlainObject(g)?st.merge({},g):st.isArray(g)?g.slice():g}function o(d,g,v,y){if(st.isUndefined(g)){if(!st.isUndefined(d))return r(void 0,d,v,y)}else return r(d,g,v,y)}function u(d,g){if(!st.isUndefined(g))return r(void 0,g)}function f(d,g){if(st.isUndefined(g)){if(!st.isUndefined(d))return r(void 0,d)}else return r(void 0,g)}function h(d,g,v){if(v in t)return r(d,g);if(v in a)return r(void 0,d)}const m={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(d,g,v)=>o(vv(d),vv(g),v,!0)};return st.forEach(Object.keys(Object.assign({},a,t)),function(g){const v=m[g]||o,y=v(a[g],t[g],g);st.isUndefined(y)&&v!==h||(n[g]=y)}),n}const sy=a=>{const t=Or({},a);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:u,headers:f,auth:h}=t;t.headers=f=qn.from(f),t.url=ty(ry(t.baseURL,t.url,t.allowAbsoluteUrls),a.params,a.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let m;if(st.isFormData(n)){if(Un.hasStandardBrowserEnv||Un.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[d,...g]=m?m.split(";").map(v=>v.trim()).filter(Boolean):[];f.setContentType([d||"multipart/form-data",...g].join("; "))}}if(Un.hasStandardBrowserEnv&&(r&&st.isFunction(r)&&(r=r(t)),r||r!==!1&&WT(t.url))){const d=o&&u&&qT.read(u);d&&f.set(o,d)}return t},ZT=typeof XMLHttpRequest<"u",KT=ZT&&function(a){return new Promise(function(n,r){const o=sy(a);let u=o.data;const f=qn.from(o.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:d}=o,g,v,y,x,M;function T(){x&&x(),M&&M(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(o.method.toUpperCase(),o.url,!0),S.timeout=o.timeout;function _(){if(!S)return;const L=qn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),B={data:!h||h==="text"||h==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:L,config:a,request:S};ay(function(F){n(F),T()},function(F){r(F),T()},B),S=null}"onloadend"in S?S.onloadend=_:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(_)},S.onabort=function(){S&&(r(new oe("Request aborted",oe.ECONNABORTED,a,S)),S=null)},S.onerror=function(){r(new oe("Network Error",oe.ERR_NETWORK,a,S)),S=null},S.ontimeout=function(){let D=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const B=o.transitional||ey;o.timeoutErrorMessage&&(D=o.timeoutErrorMessage),r(new oe(D,B.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,a,S)),S=null},u===void 0&&f.setContentType(null),"setRequestHeader"in S&&st.forEach(f.toJSON(),function(D,B){S.setRequestHeader(B,D)}),st.isUndefined(o.withCredentials)||(S.withCredentials=!!o.withCredentials),h&&h!=="json"&&(S.responseType=o.responseType),d&&([y,M]=oc(d,!0),S.addEventListener("progress",y)),m&&S.upload&&([v,x]=oc(m),S.upload.addEventListener("progress",v),S.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(g=L=>{S&&(r(!L||L.type?new Ws(null,a,S):L),S.abort(),S=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const U=VT(o.url);if(U&&Un.protocols.indexOf(U)===-1){r(new oe("Unsupported protocol "+U+":",oe.ERR_BAD_REQUEST,a));return}S.send(u||null)})},QT=(a,t)=>{const{length:n}=a=a?a.filter(Boolean):[];if(t||n){let r=new AbortController,o;const u=function(d){if(!o){o=!0,h();const g=d instanceof Error?d:this.reason;r.abort(g instanceof oe?g:new Ws(g instanceof Error?g.message:g))}};let f=t&&setTimeout(()=>{f=null,u(new oe(`timeout ${t} of ms exceeded`,oe.ETIMEDOUT))},t);const h=()=>{a&&(f&&clearTimeout(f),f=null,a.forEach(d=>{d.unsubscribe?d.unsubscribe(u):d.removeEventListener("abort",u)}),a=null)};a.forEach(d=>d.addEventListener("abort",u));const{signal:m}=r;return m.unsubscribe=()=>st.asap(h),m}},JT=function*(a,t){let n=a.byteLength;if(n<t){yield a;return}let r=0,o;for(;r<n;)o=r+t,yield a.slice(r,o),r=o},$T=async function*(a,t){for await(const n of tb(a))yield*JT(n,t)},tb=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const t=a.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},yv=(a,t,n,r)=>{const o=$T(a,t);let u=0,f,h=m=>{f||(f=!0,r&&r(m))};return new ReadableStream({async pull(m){try{const{done:d,value:g}=await o.next();if(d){h(),m.close();return}let v=g.byteLength;if(n){let y=u+=v;n(y)}m.enqueue(new Uint8Array(g))}catch(d){throw h(d),d}},cancel(m){return h(m),o.return()}},{highWaterMark:2})},vc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",oy=vc&&typeof ReadableStream=="function",eb=vc&&(typeof TextEncoder=="function"?(a=>t=>a.encode(t))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),ly=(a,...t)=>{try{return!!a(...t)}catch{return!1}},nb=oy&&ly(()=>{let a=!1;const t=new Request(Un.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!t}),Sv=64*1024,vd=oy&&ly(()=>st.isReadableStream(new Response("").body)),lc={stream:vd&&(a=>a.body)};vc&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!lc[t]&&(lc[t]=st.isFunction(a[t])?n=>n[t]():(n,r)=>{throw new oe(`Response type '${t}' is not supported`,oe.ERR_NOT_SUPPORT,r)})})})(new Response);const ib=async a=>{if(a==null)return 0;if(st.isBlob(a))return a.size;if(st.isSpecCompliantForm(a))return(await new Request(Un.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(st.isArrayBufferView(a)||st.isArrayBuffer(a))return a.byteLength;if(st.isURLSearchParams(a)&&(a=a+""),st.isString(a))return(await eb(a)).byteLength},ab=async(a,t)=>{const n=st.toFiniteNumber(a.getContentLength());return n??ib(t)},rb=vc&&(async a=>{let{url:t,method:n,data:r,signal:o,cancelToken:u,timeout:f,onDownloadProgress:h,onUploadProgress:m,responseType:d,headers:g,withCredentials:v="same-origin",fetchOptions:y}=sy(a);d=d?(d+"").toLowerCase():"text";let x=QT([o,u&&u.toAbortSignal()],f),M;const T=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let S;try{if(m&&nb&&n!=="get"&&n!=="head"&&(S=await ab(g,r))!==0){let B=new Request(t,{method:"POST",body:r,duplex:"half"}),z;if(st.isFormData(r)&&(z=B.headers.get("content-type"))&&g.setContentType(z),B.body){const[F,Y]=gv(S,oc(_v(m)));r=yv(B.body,Sv,F,Y)}}st.isString(v)||(v=v?"include":"omit");const _="credentials"in Request.prototype;M=new Request(t,{...y,signal:x,method:n.toUpperCase(),headers:g.normalize().toJSON(),body:r,duplex:"half",credentials:_?v:void 0});let U=await fetch(M);const L=vd&&(d==="stream"||d==="response");if(vd&&(h||L&&T)){const B={};["status","statusText","headers"].forEach(w=>{B[w]=U[w]});const z=st.toFiniteNumber(U.headers.get("content-length")),[F,Y]=h&&gv(z,oc(_v(h),!0))||[];U=new Response(yv(U.body,Sv,F,()=>{Y&&Y(),T&&T()}),B)}d=d||"text";let D=await lc[st.findKey(lc,d)||"text"](U,a);return!L&&T&&T(),await new Promise((B,z)=>{ay(B,z,{data:D,headers:qn.from(U.headers),status:U.status,statusText:U.statusText,config:a,request:M})})}catch(_){throw T&&T(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new oe("Network Error",oe.ERR_NETWORK,a,M),{cause:_.cause||_}):oe.from(_,_&&_.code,a,M)}}),yd={http:ST,xhr:KT,fetch:rb};st.forEach(yd,(a,t)=>{if(a){try{Object.defineProperty(a,"name",{value:t})}catch{}Object.defineProperty(a,"adapterName",{value:t})}});const xv=a=>`- ${a}`,sb=a=>st.isFunction(a)||a===null||a===!1,uy={getAdapter:a=>{a=st.isArray(a)?a:[a];const{length:t}=a;let n,r;const o={};for(let u=0;u<t;u++){n=a[u];let f;if(r=n,!sb(n)&&(r=yd[(f=String(n)).toLowerCase()],r===void 0))throw new oe(`Unknown adapter '${f}'`);if(r)break;o[f||"#"+u]=r}if(!r){const u=Object.entries(o).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=t?u.length>1?`since :
`+u.map(xv).join(`
`):" "+xv(u[0]):"as no adapter specified";throw new oe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return r},adapters:yd};function Ph(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ws(null,a)}function Ev(a){return Ph(a),a.headers=qn.from(a.headers),a.data=Oh.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),uy.getAdapter(a.adapter||ul.adapter)(a).then(function(r){return Ph(a),r.data=Oh.call(a,a.transformResponse,r),r.headers=qn.from(r.headers),r},function(r){return iy(r)||(Ph(a),r&&r.response&&(r.response.data=Oh.call(a,a.transformResponse,r.response),r.response.headers=qn.from(r.response.headers))),Promise.reject(r)})}const cy="1.8.4",yc={};["object","boolean","number","function","string","symbol"].forEach((a,t)=>{yc[a]=function(r){return typeof r===a||"a"+(t<1?"n ":" ")+a}});const Mv={};yc.transitional=function(t,n,r){function o(u,f){return"[Axios v"+cy+"] Transitional option '"+u+"'"+f+(r?". "+r:"")}return(u,f,h)=>{if(t===!1)throw new oe(o(f," has been removed"+(n?" in "+n:"")),oe.ERR_DEPRECATED);return n&&!Mv[f]&&(Mv[f]=!0,console.warn(o(f," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(u,f,h):!0}};yc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function ob(a,t,n){if(typeof a!="object")throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(a);let o=r.length;for(;o-- >0;){const u=r[o],f=t[u];if(f){const h=a[u],m=h===void 0||f(h,u,a);if(m!==!0)throw new oe("option "+u+" must be "+m,oe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new oe("Unknown option "+u,oe.ERR_BAD_OPTION)}}const Qu={assertOptions:ob,validators:yc},Bi=Qu.validators;let Nr=class{constructor(t){this.defaults=t,this.interceptors={request:new pv,response:new pv}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const u=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?u&&!String(r.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+u):r.stack=u}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Or(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:u}=n;r!==void 0&&Qu.assertOptions(r,{silentJSONParsing:Bi.transitional(Bi.boolean),forcedJSONParsing:Bi.transitional(Bi.boolean),clarifyTimeoutError:Bi.transitional(Bi.boolean)},!1),o!=null&&(st.isFunction(o)?n.paramsSerializer={serialize:o}:Qu.assertOptions(o,{encode:Bi.function,serialize:Bi.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Qu.assertOptions(n,{baseUrl:Bi.spelling("baseURL"),withXsrfToken:Bi.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let f=u&&st.merge(u.common,u[n.method]);u&&st.forEach(["delete","get","head","post","put","patch","common"],M=>{delete u[M]}),n.headers=qn.concat(f,u);const h=[];let m=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(m=m&&T.synchronous,h.unshift(T.fulfilled,T.rejected))});const d=[];this.interceptors.response.forEach(function(T){d.push(T.fulfilled,T.rejected)});let g,v=0,y;if(!m){const M=[Ev.bind(this),void 0];for(M.unshift.apply(M,h),M.push.apply(M,d),y=M.length,g=Promise.resolve(n);v<y;)g=g.then(M[v++],M[v++]);return g}y=h.length;let x=n;for(v=0;v<y;){const M=h[v++],T=h[v++];try{x=M(x)}catch(S){T.call(this,S);break}}try{g=Ev.call(this,x)}catch(M){return Promise.reject(M)}for(v=0,y=d.length;v<y;)g=g.then(d[v++],d[v++]);return g}getUri(t){t=Or(this.defaults,t);const n=ry(t.baseURL,t.url,t.allowAbsoluteUrls);return ty(n,t.params,t.paramsSerializer)}};st.forEach(["delete","get","head","options"],function(t){Nr.prototype[t]=function(n,r){return this.request(Or(r||{},{method:t,url:n,data:(r||{}).data}))}});st.forEach(["post","put","patch"],function(t){function n(r){return function(u,f,h){return this.request(Or(h||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}Nr.prototype[t]=n(),Nr.prototype[t+"Form"]=n(!0)});let lb=class fy{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(u){n=u});const r=this;this.promise.then(o=>{if(!r._listeners)return;let u=r._listeners.length;for(;u-- >0;)r._listeners[u](o);r._listeners=null}),this.promise.then=o=>{let u;const f=new Promise(h=>{r.subscribe(h),u=h}).then(o);return f.cancel=function(){r.unsubscribe(u)},f},t(function(u,f,h){r.reason||(r.reason=new Ws(u,f,h),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new fy(function(o){t=o}),cancel:t}}};function ub(a){return function(n){return a.apply(null,n)}}function cb(a){return st.isObject(a)&&a.isAxiosError===!0}const Sd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sd).forEach(([a,t])=>{Sd[t]=a});function hy(a){const t=new Nr(a),n=k0(Nr.prototype.request,t);return st.extend(n,Nr.prototype,t,{allOwnKeys:!0}),st.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return hy(Or(a,o))},n}const en=hy(ul);en.Axios=Nr;en.CanceledError=Ws;en.CancelToken=lb;en.isCancel=iy;en.VERSION=cy;en.toFormData=_c;en.AxiosError=oe;en.Cancel=en.CanceledError;en.all=function(t){return Promise.all(t)};en.spread=ub;en.isAxiosError=cb;en.mergeConfig=Or;en.AxiosHeaders=qn;en.formToJSON=a=>ny(st.isHTMLForm(a)?new FormData(a):a);en.getAdapter=uy.getAdapter;en.HttpStatusCode=Sd;en.default=en;const{Axios:VD,AxiosError:kD,CanceledError:XD,isCancel:WD,CancelToken:qD,VERSION:YD,all:jD,Cancel:ZD,isAxiosError:KD,spread:QD,toFormData:JD,AxiosHeaders:$D,HttpStatusCode:t2,formToJSON:e2,getAdapter:n2,mergeConfig:i2}=en,fb=()=>{const[a,t]=ft.useState(""),[n,r]=ft.useState(""),[o,u]=ft.useState(""),{setIsAuthenticated:f}=ft.useContext(G0),h=N0(),m=async d=>{d.preventDefault(),u("");try{const g=await en.post("http://localhost:5000/api/login",{email:a,password:n}),{token:v,userId:y}=g.data;v&&(localStorage.setItem("token",v),localStorage.setItem("userId",y),f(!0),h("/home"))}catch(g){console.error(g),u("Identifiants incorrects ou serveur injoignable")}};return Ve.jsxs("div",{className:"login-container",children:[Ve.jsx("h2",{children:"Connexion"}),Ve.jsxs("form",{onSubmit:m,children:[Ve.jsx("input",{type:"email",placeholder:"Adresse e-mail",value:a,onChange:d=>t(d.target.value),required:!0}),Ve.jsx("input",{type:"password",placeholder:"Mot de passe",value:n,onChange:d=>r(d.target.value),required:!0}),Ve.jsx("button",{type:"submit",children:"Se connecter"})]}),o&&Ve.jsx("p",{className:"login-error",children:o})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="175",Os={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hb=0,Tv=1,db=2,dy=1,pb=2,ha=3,Ja=0,Yn=1,da=2,Ka=0,Ps=1,bv=2,Av=3,Rv=4,mb=5,wr=100,gb=101,_b=102,vb=103,yb=104,Sb=200,xb=201,Eb=202,Mb=203,xd=204,Ed=205,Tb=206,bb=207,Ab=208,Rb=209,wb=210,Cb=211,Db=212,Ub=213,Lb=214,Md=0,Td=1,bd=2,Fs=3,Ad=4,Rd=5,wd=6,Cd=7,py=0,Nb=1,Ob=2,Qa=0,Pb=1,Bb=2,Fb=3,zb=4,Ib=5,Hb=6,Gb=7,my=300,zs=301,Is=302,Dd=303,Ud=304,Sc=306,Ld=1e3,Ur=1001,Nd=1002,wi=1003,Vb=1004,Mu=1005,zi=1006,Bh=1007,Lr=1008,ya=1009,gy=1010,_y=1011,el=1012,yp=1013,Pr=1014,pa=1015,cl=1016,Sp=1017,xp=1018,nl=1020,vy=35902,yy=1021,Sy=1022,Ai=1023,xy=1024,Ey=1025,il=1026,al=1027,My=1028,Ep=1029,Ty=1030,Mp=1031,Tp=1033,Ju=33776,$u=33777,tc=33778,ec=33779,Od=35840,Pd=35841,Bd=35842,Fd=35843,zd=36196,Id=37492,Hd=37496,Gd=37808,Vd=37809,kd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Qd=37818,Jd=37819,$d=37820,tp=37821,nc=36492,ep=36494,np=36495,by=36283,ip=36284,ap=36285,rp=36286,kb=3200,Xb=3201,Ay=0,Wb=1,Za="",mi="srgb",Hs="srgb-linear",uc="linear",Fe="srgb",vs=7680,wv=519,qb=512,Yb=513,jb=514,Ry=515,Zb=516,Kb=517,Qb=518,Jb=519,Cv=35044,Dv="300 es",ma=2e3,cc=2001;class Ir{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=Math.PI/180,sp=180/Math.PI;function fl(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function _e(a,t,n){return Math.max(t,Math.min(n,a))}function $b(a,t){return(a%t+t)%t}function Fh(a,t,n){return(1-n)*a+n*t}function Yo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Xn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const tA={DEG2RAD:ic};class ce{constructor(t=0,n=0){ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*o+t.x,this.y=u*o+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,n,r,o,u,f,h,m,d){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,f,h,m,d)}set(t,n,r,o,u,f,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,f=r[0],h=r[3],m=r[6],d=r[1],g=r[4],v=r[7],y=r[2],x=r[5],M=r[8],T=o[0],S=o[3],_=o[6],U=o[1],L=o[4],D=o[7],B=o[2],z=o[5],F=o[8];return u[0]=f*T+h*U+m*B,u[3]=f*S+h*L+m*z,u[6]=f*_+h*D+m*F,u[1]=d*T+g*U+v*B,u[4]=d*S+g*L+v*z,u[7]=d*_+g*D+v*F,u[2]=y*T+x*U+M*B,u[5]=y*S+x*L+M*z,u[8]=y*_+x*D+M*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*f*g-n*h*d-r*u*g+r*h*m+o*u*d-o*f*m}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=g*f-h*d,y=h*m-g*u,x=d*u-f*m,M=n*v+r*y+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(o*d-g*r)*T,t[2]=(h*r-o*f)*T,t[3]=y*T,t[4]=(g*n-o*m)*T,t[5]=(o*u-h*n)*T,t[6]=x*T,t[7]=(r*m-d*n)*T,t[8]=(f*n-r*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,u,f,h){const m=Math.cos(u),d=Math.sin(u);return this.set(r*m,r*d,-r*(m*f+d*h)+f+t,-o*d,o*m,-o*(-d*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(zh.makeScale(t,n)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,n){return this.premultiply(zh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new ue;function wy(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function fc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function eA(){const a=fc("canvas");return a.style.display="block",a}const Uv={};function ac(a){a in Uv||(Uv[a]=!0,console.warn(a))}function nA(a,t,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function iA(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function aA(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lv=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nv=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rA(){const a={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(o.r=Bs(o.r),o.g=Bs(o.g),o.b=Bs(o.b))),o},fromWorkingColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},toWorkingColorSpace:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Za?uc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Hs]:{primaries:t,whitePoint:r,transfer:uc,toXYZ:Lv,fromXYZ:Nv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:Lv,fromXYZ:Nv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Ce=rA();function _a(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Bs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ys;class sA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ys===void 0&&(ys=fc("canvas")),ys.width=t.width,ys.height=t.height;const o=ys.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=ys}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=fc("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=_a(u[f]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(_a(n[r]/255)*255):n[r]=_a(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oA=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=fl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?u.push(Ih(o[f].image)):u.push(Ih(o[f]))}else u=Ih(o);r.url=u}return n||(t.images[this.uuid]=r),r}}function Ih(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lA=0;class jn extends Ir{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,r=Ur,o=Ur,u=zi,f=Lr,h=Ai,m=ya,d=jn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=fl(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==my)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ld:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ld:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=my;jn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,n=0,r=0,o=1){Je.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,u;const m=t.elements,d=m[0],g=m[4],v=m[8],y=m[1],x=m[5],M=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,D=(x+1)/2,B=(_+1)/2,z=(g+y)/4,F=(v+T)/4,Y=(M+S)/4;return L>D&&L>B?L<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(L),o=z/r,u=F/r):D>B?D<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(D),r=z/o,u=Y/o):B<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(B),r=F/u,o=Y/u),this.set(r,o,u,n),this}let U=Math.sqrt((S-M)*(S-M)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-T)/U,this.z=(y-g)/U,this.w=Math.acos((d+x+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this.w=_e(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this.w=_e(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uA extends Ir{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Je(0,0,t,n),this.scissorTest=!1,this.viewport=new Je(0,0,t,n);const o={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new jn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new bp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends uA{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Cy extends jn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cA extends jn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,u,f,h){let m=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];const y=u[f+0],x=u[f+1],M=u[f+2],T=u[f+3];if(h===0){t[n+0]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=y,t[n+1]=x,t[n+2]=M,t[n+3]=T;return}if(v!==T||m!==y||d!==x||g!==M){let S=1-h;const _=m*y+d*x+g*M+v*T,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const B=Math.sqrt(L),z=Math.atan2(B,_*U);S=Math.sin(S*z)/B,h=Math.sin(h*z)/B}const D=h*U;if(m=m*S+y*D,d=d*S+x*D,g=g*S+M*D,v=v*S+T*D,S===1-h){const B=1/Math.sqrt(m*m+d*d+g*g+v*v);m*=B,d*=B,g*=B,v*=B}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,u,f){const h=r[o],m=r[o+1],d=r[o+2],g=r[o+3],v=u[f],y=u[f+1],x=u[f+2],M=u[f+3];return t[n]=h*M+g*v+m*x-d*y,t[n+1]=m*M+g*y+d*v-h*x,t[n+2]=d*M+g*x+h*y-m*v,t[n+3]=g*M-h*v-m*y-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,u=t._z,f=t._order,h=Math.cos,m=Math.sin,d=h(r/2),g=h(o/2),v=h(u/2),y=m(r/2),x=m(o/2),M=m(u/2);switch(f){case"XYZ":this._x=y*g*v+d*x*M,this._y=d*x*v-y*g*M,this._z=d*g*M+y*x*v,this._w=d*g*v-y*x*M;break;case"YXZ":this._x=y*g*v+d*x*M,this._y=d*x*v-y*g*M,this._z=d*g*M-y*x*v,this._w=d*g*v+y*x*M;break;case"ZXY":this._x=y*g*v-d*x*M,this._y=d*x*v+y*g*M,this._z=d*g*M+y*x*v,this._w=d*g*v-y*x*M;break;case"ZYX":this._x=y*g*v-d*x*M,this._y=d*x*v+y*g*M,this._z=d*g*M-y*x*v,this._w=d*g*v+y*x*M;break;case"YZX":this._x=y*g*v+d*x*M,this._y=d*x*v+y*g*M,this._z=d*g*M-y*x*v,this._w=d*g*v-y*x*M;break;case"XZY":this._x=y*g*v-d*x*M,this._y=d*x*v-y*g*M,this._z=d*g*M+y*x*v,this._w=d*g*v+y*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],u=n[8],f=n[1],h=n[5],m=n[9],d=n[2],g=n[6],v=n[10],y=r+h+v;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-m)*x,this._y=(u-d)*x,this._z=(f-o)*x}else if(r>h&&r>v){const x=2*Math.sqrt(1+r-h-v);this._w=(g-m)/x,this._x=.25*x,this._y=(o+f)/x,this._z=(u+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-r-v);this._w=(u-d)/x,this._x=(o+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+v-r-h);this._w=(f-o)/x,this._x=(u+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,u=t._z,f=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=r*g+f*h+o*d-u*m,this._y=o*g+f*m+u*h-r*d,this._z=u*g+f*d+r*m-o*h,this._w=f*g-r*h-o*m-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,u=this._z,f=this._w;let h=f*t._w+r*t._x+o*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=o,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*r+n*this._x,this._y=x*o+n*this._y,this._z=x*u+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,y=Math.sin(n*g)/d;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=o*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,n=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ov.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ov.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,u=t.elements,f=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,u=t.x,f=t.y,h=t.z,m=t.w,d=2*(f*o-h*r),g=2*(h*n-u*o),v=2*(u*r-f*n);return this.x=n+m*d+f*v-h*g,this.y=r+m*g+h*d-u*v,this.z=o+m*v+u*g-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,u=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-u*h,this.y=u*f-r*m,this.z=r*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Hh.copy(this).projectOnVector(t),this.sub(Hh)}reflect(t){return this.sub(Hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new $,Ov=new Fr;class hl{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tu.copy(r.boundingBox)),Tu.applyMatrix4(t.matrixWorld),this.union(Tu)}const o=t.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),bu.subVectors(this.max,jo),Ss.subVectors(t.a,jo),xs.subVectors(t.b,jo),Es.subVectors(t.c,jo),Va.subVectors(xs,Ss),ka.subVectors(Es,xs),xr.subVectors(Ss,Es);let n=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-xr.z,xr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,xr.z,0,-xr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-xr.y,xr.x,0];return!Gh(n,Ss,xs,Es,bu)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,Ss,xs,Es,bu))?!1:(Au.crossVectors(Va,ka),n=[Au.x,Au.y,Au.z],Gh(n,Ss,xs,Es,bu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oa=[new $,new $,new $,new $,new $,new $,new $,new $],Ei=new $,Tu=new hl,Ss=new $,xs=new $,Es=new $,Va=new $,ka=new $,xr=new $,jo=new $,bu=new $,Au=new $,Er=new $;function Gh(a,t,n,r,o){for(let u=0,f=a.length-3;u<=f;u+=3){Er.fromArray(a,u);const h=o.x*Math.abs(Er.x)+o.y*Math.abs(Er.y)+o.z*Math.abs(Er.z),m=t.dot(Er),d=n.dot(Er),g=r.dot(Er);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const fA=new hl,Zo=new $,Vh=new $;class Ap{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):fA.setFromPoints(t).getCenter(r);let o=0;for(let u=0,f=t.length;u<f;u++)o=Math.max(o,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Zo,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Vh)),this.expandByPoint(Zo.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const la=new $,kh=new $,Ru=new $,Xa=new $,Xh=new $,wu=new $,Wh=new $;class Dy{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){kh.copy(t).add(n).multiplyScalar(.5),Ru.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(kh);const u=t.distanceTo(n)*.5,f=-this.direction.dot(Ru),h=Xa.dot(this.direction),m=-Xa.dot(Ru),d=Xa.lengthSq(),g=Math.abs(1-f*f);let v,y,x,M;if(g>0)if(v=f*m-h,y=f*h-m,M=u*g,v>=0)if(y>=-M)if(y<=M){const T=1/g;v*=T,y*=T,x=v*(v+f*y+2*h)+y*(f*v+y+2*m)+d}else y=u,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*m)+d;else y=-u,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*m)+d;else y<=-M?(v=Math.max(0,-(-f*u+h)),y=v>0?-u:Math.min(Math.max(-u,-m),u),x=-v*v+y*(y+2*m)+d):y<=M?(v=0,y=Math.min(Math.max(-u,-m),u),x=y*(y+2*m)+d):(v=Math.max(0,-(f*u+h)),y=v>0?u:Math.min(Math.max(-u,-m),u),x=-v*v+y*(y+2*m)+d);else y=f>0?-u:u,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(kh).addScaledVector(Ru,y),x}intersectSphere(t,n){la.subVectors(t.center,this.origin);const r=la.dot(this.direction),o=la.dot(la)-r*r,u=t.radius*t.radius;if(o>u)return null;const f=Math.sqrt(u-o),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,u,f,h,m;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return d>=0?(r=(t.min.x-y.x)*d,o=(t.max.x-y.x)*d):(r=(t.max.x-y.x)*d,o=(t.min.x-y.x)*d),g>=0?(u=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),r>f||u>o||((u>r||isNaN(r))&&(r=u),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(h=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,r,o,u){Xh.subVectors(n,t),wu.subVectors(r,t),Wh.crossVectors(Xh,wu);let f=this.direction.dot(Wh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Xa.subVectors(this.origin,t);const m=h*this.direction.dot(wu.crossVectors(Xa,wu));if(m<0)return null;const d=h*this.direction.dot(Xh.cross(Xa));if(d<0||m+d>f)return null;const g=-h*Xa.dot(Wh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,r,o,u,f,h,m,d,g,v,y,x,M,T,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,u,f,h,m,d,g,v,y,x,M,T,S)}set(t,n,r,o,u,f,h,m,d,g,v,y,x,M,T,S){const _=this.elements;return _[0]=t,_[4]=n,_[8]=r,_[12]=o,_[1]=u,_[5]=f,_[9]=h,_[13]=m,_[2]=d,_[6]=g,_[10]=v,_[14]=y,_[3]=x,_[7]=M,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Ms.setFromMatrixColumn(t,0).length(),u=1/Ms.setFromMatrixColumn(t,1).length(),f=1/Ms.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,u=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(o),d=Math.sin(o),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const y=f*g,x=f*v,M=h*g,T=h*v;n[0]=m*g,n[4]=-m*v,n[8]=d,n[1]=x+M*d,n[5]=y-T*d,n[9]=-h*m,n[2]=T-y*d,n[6]=M+x*d,n[10]=f*m}else if(t.order==="YXZ"){const y=m*g,x=m*v,M=d*g,T=d*v;n[0]=y+T*h,n[4]=M*h-x,n[8]=f*d,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=x*h-M,n[6]=T+y*h,n[10]=f*m}else if(t.order==="ZXY"){const y=m*g,x=m*v,M=d*g,T=d*v;n[0]=y-T*h,n[4]=-f*v,n[8]=M+x*h,n[1]=x+M*h,n[5]=f*g,n[9]=T-y*h,n[2]=-f*d,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const y=f*g,x=f*v,M=h*g,T=h*v;n[0]=m*g,n[4]=M*d-x,n[8]=y*d+T,n[1]=m*v,n[5]=T*d+y,n[9]=x*d-M,n[2]=-d,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const y=f*m,x=f*d,M=h*m,T=h*d;n[0]=m*g,n[4]=T-y*v,n[8]=M*v+x,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+M,n[10]=y-T*v}else if(t.order==="XZY"){const y=f*m,x=f*d,M=h*m,T=h*d;n[0]=m*g,n[4]=-v,n[8]=d*g,n[1]=y*v+T,n[5]=f*g,n[9]=x*v-M,n[2]=M*v-x,n[6]=h*g,n[10]=T*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hA,t,dA)}lookAt(t,n,r){const o=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Wa.crossVectors(r,ei),Wa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Wa.crossVectors(r,ei)),Wa.normalize(),Cu.crossVectors(ei,Wa),o[0]=Wa.x,o[4]=Cu.x,o[8]=ei.x,o[1]=Wa.y,o[5]=Cu.y,o[9]=ei.y,o[2]=Wa.z,o[6]=Cu.z,o[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,u=this.elements,f=r[0],h=r[4],m=r[8],d=r[12],g=r[1],v=r[5],y=r[9],x=r[13],M=r[2],T=r[6],S=r[10],_=r[14],U=r[3],L=r[7],D=r[11],B=r[15],z=o[0],F=o[4],Y=o[8],w=o[12],A=o[1],H=o[5],ct=o[9],at=o[13],_t=o[2],pt=o[6],X=o[10],rt=o[14],Z=o[3],Et=o[7],O=o[11],it=o[15];return u[0]=f*z+h*A+m*_t+d*Z,u[4]=f*F+h*H+m*pt+d*Et,u[8]=f*Y+h*ct+m*X+d*O,u[12]=f*w+h*at+m*rt+d*it,u[1]=g*z+v*A+y*_t+x*Z,u[5]=g*F+v*H+y*pt+x*Et,u[9]=g*Y+v*ct+y*X+x*O,u[13]=g*w+v*at+y*rt+x*it,u[2]=M*z+T*A+S*_t+_*Z,u[6]=M*F+T*H+S*pt+_*Et,u[10]=M*Y+T*ct+S*X+_*O,u[14]=M*w+T*at+S*rt+_*it,u[3]=U*z+L*A+D*_t+B*Z,u[7]=U*F+L*H+D*pt+B*Et,u[11]=U*Y+L*ct+D*X+B*O,u[15]=U*w+L*at+D*rt+B*it,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],u=t[12],f=t[1],h=t[5],m=t[9],d=t[13],g=t[2],v=t[6],y=t[10],x=t[14],M=t[3],T=t[7],S=t[11],_=t[15];return M*(+u*m*v-o*d*v-u*h*y+r*d*y+o*h*x-r*m*x)+T*(+n*m*x-n*d*y+u*f*y-o*f*x+o*d*g-u*m*g)+S*(+n*d*v-n*h*x-u*f*v+r*f*x+u*h*g-r*d*g)+_*(-o*h*g-n*m*v+n*h*y+o*f*v-r*f*y+r*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],u=t[3],f=t[4],h=t[5],m=t[6],d=t[7],g=t[8],v=t[9],y=t[10],x=t[11],M=t[12],T=t[13],S=t[14],_=t[15],U=v*S*d-T*y*d+T*m*x-h*S*x-v*m*_+h*y*_,L=M*y*d-g*S*d-M*m*x+f*S*x+g*m*_-f*y*_,D=g*T*d-M*v*d+M*h*x-f*T*x-g*h*_+f*v*_,B=M*v*m-g*T*m-M*h*y+f*T*y+g*h*S-f*v*S,z=n*U+r*L+o*D+u*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return t[0]=U*F,t[1]=(T*y*u-v*S*u-T*o*x+r*S*x+v*o*_-r*y*_)*F,t[2]=(h*S*u-T*m*u+T*o*d-r*S*d-h*o*_+r*m*_)*F,t[3]=(v*m*u-h*y*u-v*o*d+r*y*d+h*o*x-r*m*x)*F,t[4]=L*F,t[5]=(g*S*u-M*y*u+M*o*x-n*S*x-g*o*_+n*y*_)*F,t[6]=(M*m*u-f*S*u-M*o*d+n*S*d+f*o*_-n*m*_)*F,t[7]=(f*y*u-g*m*u+g*o*d-n*y*d-f*o*x+n*m*x)*F,t[8]=D*F,t[9]=(M*v*u-g*T*u-M*r*x+n*T*x+g*r*_-n*v*_)*F,t[10]=(f*T*u-M*h*u+M*r*d-n*T*d-f*r*_+n*h*_)*F,t[11]=(g*h*u-f*v*u-g*r*d+n*v*d+f*r*x-n*h*x)*F,t[12]=B*F,t[13]=(g*T*o-M*v*o+M*r*y-n*T*y-g*r*S+n*v*S)*F,t[14]=(M*h*o-f*T*o-M*r*m+n*T*m+f*r*S-n*h*S)*F,t[15]=(f*v*o-g*h*o+g*r*m-n*v*m-f*r*y+n*h*y)*F,this}scale(t){const n=this.elements,r=t.x,o=t.y,u=t.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,f=t.x,h=t.y,m=t.z,d=u*f,g=u*h;return this.set(d*f+r,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+r,g*m-o*f,0,d*m-o*h,g*m+o*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,u,f){return this.set(1,r,u,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,u=n._x,f=n._y,h=n._z,m=n._w,d=u+u,g=f+f,v=h+h,y=u*d,x=u*g,M=u*v,T=f*g,S=f*v,_=h*v,U=m*d,L=m*g,D=m*v,B=r.x,z=r.y,F=r.z;return o[0]=(1-(T+_))*B,o[1]=(x+D)*B,o[2]=(M-L)*B,o[3]=0,o[4]=(x-D)*z,o[5]=(1-(y+_))*z,o[6]=(S+U)*z,o[7]=0,o[8]=(M+L)*F,o[9]=(S-U)*F,o[10]=(1-(y+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let u=Ms.set(o[0],o[1],o[2]).length();const f=Ms.set(o[4],o[5],o[6]).length(),h=Ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],Mi.copy(this);const d=1/u,g=1/f,v=1/h;return Mi.elements[0]*=d,Mi.elements[1]*=d,Mi.elements[2]*=d,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,n.setFromRotationMatrix(Mi),r.x=u,r.y=f,r.z=h,this}makePerspective(t,n,r,o,u,f,h=ma){const m=this.elements,d=2*u/(n-t),g=2*u/(r-o),v=(n+t)/(n-t),y=(r+o)/(r-o);let x,M;if(h===ma)x=-(f+u)/(f-u),M=-2*f*u/(f-u);else if(h===cc)x=-f/(f-u),M=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=d,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,r,o,u,f,h=ma){const m=this.elements,d=1/(n-t),g=1/(r-o),v=1/(f-u),y=(n+t)*d,x=(r+o)*g;let M,T;if(h===ma)M=(f+u)*v,T=-2*v;else if(h===cc)M=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*d,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-x,m[2]=0,m[6]=0,m[10]=T,m[14]=-M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Ms=new $,Mi=new $e,hA=new $(0,0,0),dA=new $(1,1,1),Wa=new $,Cu=new $,ei=new $,Pv=new $e,Bv=new Fr;class Vi{constructor(t=0,n=0,r=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,u=o[0],f=o[4],h=o[8],m=o[1],d=o[5],g=o[9],v=o[2],y=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Uy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pA=0;const Fv=new $,Ts=new Fr,ua=new $e,Du=new $,Ko=new $,mA=new $,gA=new Fr,zv=new $(1,0,0),Iv=new $(0,1,0),Hv=new $(0,0,1),Gv={type:"added"},_A={type:"removed"},bs={type:"childadded",child:null},qh={type:"childremoved",child:null};class Ln extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new $,n=new Vi,r=new Fr,o=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new ue}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ts.setFromAxisAngle(t,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,n){return Ts.setFromAxisAngle(t,n),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(zv,t)}rotateY(t){return this.rotateOnAxis(Iv,t)}rotateZ(t){return this.rotateOnAxis(Hv,t)}translateOnAxis(t,n){return Fv.copy(t).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(zv,t)}translateY(t){return this.translateOnAxis(Iv,t)}translateZ(t){return this.translateOnAxis(Hv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Du.copy(t):Du.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Ko,Du,this.up):ua.lookAt(Du,Ko,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),Ts.setFromRotationMatrix(ua),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_A),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gv),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,mA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,gA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const v=m[d];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(u(t.materials,this.material[m]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(u(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),d=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),x=f(t.animations),M=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function f(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Ln.DEFAULT_UP=new $(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new $,ca=new $,Yh=new $,fa=new $,As=new $,Rs=new $,Vv=new $,jh=new $,Zh=new $,Kh=new $,Qh=new Je,Jh=new Je,$h=new Je;class bi{constructor(t=new $,n=new $,r=new $){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Ti.subVectors(t,n),o.cross(Ti);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,r,o,u){Ti.subVectors(o,n),ca.subVectors(r,n),Yh.subVectors(t,n);const f=Ti.dot(Ti),h=Ti.dot(ca),m=Ti.dot(Yh),d=ca.dot(ca),g=ca.dot(Yh),v=f*d-h*h;if(v===0)return u.set(0,0,0),null;const y=1/v,x=(d*m-h*g)*y,M=(f*g-h*m)*y;return u.set(1-x-M,M,x)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,n,r,o,u,f,h,m){return this.getBarycoord(t,n,r,o,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(h,fa.z),m)}static getInterpolatedAttribute(t,n,r,o,u,f){return Qh.setScalar(0),Jh.setScalar(0),$h.setScalar(0),Qh.fromBufferAttribute(t,n),Jh.fromBufferAttribute(t,r),$h.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Qh,u.x),f.addScaledVector(Jh,u.y),f.addScaledVector($h,u.z),f}static isFrontFacing(t,n,r,o){return Ti.subVectors(r,n),ca.subVectors(t,n),Ti.cross(ca).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return bi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,u){return bi.getInterpolation(t,this.a,this.b,this.c,n,r,o,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,u=this.c;let f,h;As.subVectors(o,r),Rs.subVectors(u,r),jh.subVectors(t,r);const m=As.dot(jh),d=Rs.dot(jh);if(m<=0&&d<=0)return n.copy(r);Zh.subVectors(t,o);const g=As.dot(Zh),v=Rs.dot(Zh);if(g>=0&&v<=g)return n.copy(o);const y=m*v-g*d;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(r).addScaledVector(As,f);Kh.subVectors(t,u);const x=As.dot(Kh),M=Rs.dot(Kh);if(M>=0&&x<=M)return n.copy(u);const T=x*d-m*M;if(T<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(r).addScaledVector(Rs,h);const S=g*M-x*v;if(S<=0&&v-g>=0&&x-M>=0)return Vv.subVectors(u,o),h=(v-g)/(v-g+(x-M)),n.copy(o).addScaledVector(Vv,h);const _=1/(S+T+y);return f=T*_,h=y*_,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ly={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function td(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class De{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,n),this}setRGB(t,n,r,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=r,Ce.toWorkingColorSpace(this,o),this}setHSL(t,n,r,o=Ce.workingColorSpace){if(t=$b(t,1),n=_e(n,0,1),r=_e(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=td(f,u,t+1/3),this.g=td(f,u,t),this.b=td(f,u,t-1/3)}return Ce.toWorkingColorSpace(this,o),this}setStyle(t,n=mi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=mi){const r=Ly[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Ce.fromWorkingColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Dn.copy(this),n);const r=Dn.r,o=Dn.g,u=Dn.b,f=Math.max(r,o,u),h=Math.min(r,o,u);let m,d;const g=(h+f)/2;if(h===f)m=0,d=0;else{const v=f-h;switch(d=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(o-u)/v+(o<u?6:0);break;case o:m=(u-r)/v+2;break;case u:m=(r-o)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=mi){Ce.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,r=Dn.g,o=Dn.b;return t!==mi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+n,qa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(qa),t.getHSL(Uu);const r=Fh(qa.h,Uu.h,n),o=Fh(qa.s,Uu.s,n),u=Fh(qa.l,Uu.l,n);return this.setHSL(r,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new De;De.NAMES=Ly;let vA=0;class dl extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Ps,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=Ed,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==Ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(n){const u=o(t.textures),f=o(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rp extends dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=py,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new $,Lu=new ce;let yA=0;class Ii{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Cv,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Lu.fromBufferAttribute(this,n),Lu.applyMatrix3(t),this.setXY(n,Lu.x,Lu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(t),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Yo(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,u){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array),o=Xn(o,this.array),u=Xn(u,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cv&&(t.usage=this.usage),t}}class Ny extends Ii{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Oy extends Ii{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Hi extends Ii{constructor(t,n,r){super(new Float32Array(t),n,r)}}let SA=0;const pi=new $e,ed=new Ln,ws=new $,ni=new hl,Qo=new hl,Sn=new $;class tr extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wy(t)?Oy:Ny)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,n,r){return pi.makeTranslation(t,n,r),this.applyMatrix4(pi),this}scale(t,n,r){return pi.makeScale(t,n,r),this.applyMatrix4(pi),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=t.length;o<u;o++){const f=t[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hi(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ap);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let u=0,f=n.length;u<f;u++){const h=n[u];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ni.min,Qo.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,Qo.max),ni.expandByPoint(Sn)):(ni.expandByPoint(Qo.min),ni.expandByPoint(Qo.max))}ni.getCenter(r);let o=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),o=Math.max(o,r.distanceToSquared(Sn));if(n)for(let u=0,f=n.length;u<f;u++){const h=n[u],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Sn.fromBufferAttribute(h,d),m&&(ws.fromBufferAttribute(t,d),Sn.add(ws)),o=Math.max(o,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<r.count;Y++)h[Y]=new $,m[Y]=new $;const d=new $,g=new $,v=new $,y=new ce,x=new ce,M=new ce,T=new $,S=new $;function _(Y,w,A){d.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,A),y.fromBufferAttribute(u,Y),x.fromBufferAttribute(u,w),M.fromBufferAttribute(u,A),g.sub(d),v.sub(d),x.sub(y),M.sub(y);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(H),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(H),h[Y].add(T),h[w].add(T),h[A].add(T),m[Y].add(S),m[w].add(S),m[A].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Y=0,w=U.length;Y<w;++Y){const A=U[Y],H=A.start,ct=A.count;for(let at=H,_t=H+ct;at<_t;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new $,D=new $,B=new $,z=new $;function F(Y){B.fromBufferAttribute(o,Y),z.copy(B);const w=h[Y];L.copy(w),L.sub(B.multiplyScalar(B.dot(w))).normalize(),D.crossVectors(z,w);const H=D.dot(m[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,H)}for(let Y=0,w=U.length;Y<w;++Y){const A=U[Y],H=A.start,ct=A.count;for(let at=H,_t=H+ct;at<_t;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const o=new $,u=new $,f=new $,h=new $,m=new $,d=new $,g=new $,v=new $;if(t)for(let y=0,x=t.count;y<x;y+=3){const M=t.getX(y+0),T=t.getX(y+1),S=t.getX(y+2);o.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),g.subVectors(f,u),v.subVectors(o,u),g.cross(v),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,T),d.fromBufferAttribute(r,S),h.add(g),m.add(g),d.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let y=0,x=n.count;y<x;y+=3)o.fromBufferAttribute(n,y+0),u.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,u),v.subVectors(o,u),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,v=h.normalized,y=new d.constructor(m.length*g);let x=0,M=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?x=m[T]*h.data.stride+h.offset:x=m[T]*g;for(let _=0;_<g;_++)y[M++]=d[x++]}return new Ii(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,r);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const m=[],d=u[h];for(let g=0,v=d.length;g<v;g++){const y=d[g],x=t(y,r);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let v=0,y=d.length;v<y;v++){const x=d[v];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=t.morphAttributes;for(const d in u){const g=[],v=u[d];for(let y=0,x=v.length;y<x;y++)g.push(v[y].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,g=f.length;d<g;d++){const v=f[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kv=new $e,Mr=new Dy,Nu=new Ap,Xv=new $,Ou=new $,Pu=new $,Bu=new $,nd=new $,Fu=new $,Wv=new $,zu=new $;class Ri extends Ln{constructor(t=new tr,n=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){Fu.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const g=h[m],v=u[m];g!==0&&(nd.fromBufferAttribute(v,t),f?Fu.addScaledVector(nd,g):Fu.addScaledVector(nd.sub(n),g))}n.add(Fu)}return n}raycast(t,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(u),Mr.copy(t.ray).recast(t.near),!(Nu.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Nu,Xv)===null||Mr.origin.distanceToSquared(Xv)>(t.far-t.near)**2))&&(kv.copy(u).invert(),Mr.copy(t.ray).applyMatrix4(kv),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Mr)))}_computeIntersections(t,n,r){let o;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const S=y[M],_=f[S.materialIndex],U=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let D=U,B=L;D<B;D+=3){const z=h.getX(D),F=h.getX(D+1),Y=h.getX(D+2);o=Iu(this,_,t,r,d,g,v,z,F,Y),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=M,_=T;S<_;S+=3){const U=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);o=Iu(this,f,t,r,d,g,v,U,L,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const S=y[M],_=f[S.materialIndex],U=Math.max(S.start,x.start),L=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let D=U,B=L;D<B;D+=3){const z=D,F=D+1,Y=D+2;o=Iu(this,_,t,r,d,g,v,z,F,Y),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let S=M,_=T;S<_;S+=3){const U=S,L=S+1,D=S+2;o=Iu(this,f,t,r,d,g,v,U,L,D),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function xA(a,t,n,r,o,u,f,h){let m;if(t.side===Yn?m=r.intersectTriangle(f,u,o,!0,h):m=r.intersectTriangle(o,u,f,t.side===Ja,h),m===null)return null;zu.copy(h),zu.applyMatrix4(a.matrixWorld);const d=n.ray.origin.distanceTo(zu);return d<n.near||d>n.far?null:{distance:d,point:zu.clone(),object:a}}function Iu(a,t,n,r,o,u,f,h,m,d){a.getVertexPosition(h,Ou),a.getVertexPosition(m,Pu),a.getVertexPosition(d,Bu);const g=xA(a,t,n,r,Ou,Pu,Bu,Wv);if(g){const v=new $;bi.getBarycoord(Wv,Ou,Pu,Bu,v),o&&(g.uv=bi.getInterpolatedAttribute(o,h,m,d,v,new ce)),u&&(g.uv1=bi.getInterpolatedAttribute(u,h,m,d,v,new ce)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,m,d,v,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:d,normal:new $,materialIndex:0};bi.getNormal(Ou,Pu,Bu,y.normal),g.face=y,g.barycoord=v}return g}class pl extends tr{constructor(t=1,n=1,r=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:f};const h=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const m=[],d=[],g=[],v=[];let y=0,x=0;M("z","y","x",-1,-1,r,n,t,f,u,0),M("z","y","x",1,-1,r,n,-t,f,u,1),M("x","z","y",1,1,t,r,n,o,f,2),M("x","z","y",1,-1,t,r,-n,o,f,3),M("x","y","z",1,-1,t,n,r,o,u,4),M("x","y","z",-1,-1,t,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new Hi(d,3)),this.setAttribute("normal",new Hi(g,3)),this.setAttribute("uv",new Hi(v,2));function M(T,S,_,U,L,D,B,z,F,Y,w){const A=D/F,H=B/Y,ct=D/2,at=B/2,_t=z/2,pt=F+1,X=Y+1;let rt=0,Z=0;const Et=new $;for(let O=0;O<X;O++){const it=O*H-at;for(let bt=0;bt<pt;bt++){const wt=bt*A-ct;Et[T]=wt*U,Et[S]=it*L,Et[_]=_t,d.push(Et.x,Et.y,Et.z),Et[T]=0,Et[S]=0,Et[_]=z>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(bt/F),v.push(1-O/Y),rt+=1}}for(let O=0;O<Y;O++)for(let it=0;it<F;it++){const bt=y+it+pt*O,wt=y+it+pt*(O+1),q=y+(it+1)+pt*(O+1),mt=y+(it+1)+pt*O;m.push(bt,wt,mt),m.push(wt,q,mt),Z+=6}h.addGroup(x,Z,w),x+=Z,y+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gs(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function In(a){const t={};for(let n=0;n<a.length;n++){const r=Gs(a[n]);for(const o in r)t[o]=r[o]}return t}function EA(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function Py(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const MA={clone:Gs,merge:In};var TA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $a extends dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TA,this.fragmentShader=bA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=EA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class By extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ma}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new $,qv=new ce,Yv=new ce;class gi extends By{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,n){return this.getViewBounds(t,qv,Yv),n.subVectors(Yv,qv)}setViewOffset(t,n,r,o,u,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ic*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;u+=f.offsetX*o/m,n-=f.offsetY*r/d,o*=f.width/m,r*=f.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cs=-90,Ds=1;class AA extends Ln{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(Cs,Ds,t,n);o.layers=this.layers,this.add(o);const u=new gi(Cs,Ds,t,n);u.layers=this.layers,this.add(u);const f=new gi(Cs,Ds,t,n);f.layers=this.layers,this.add(f);const h=new gi(Cs,Ds,t,n);h.layers=this.layers,this.add(h);const m=new gi(Cs,Ds,t,n);m.layers=this.layers,this.add(m);const d=new gi(Cs,Ds,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,u,f,h,m]=n;for(const d of n)this.remove(d);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,d,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,u),t.setRenderTarget(r,1,o),t.render(n,f),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,m),t.setRenderTarget(r,4,o),t.render(n,d),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(v,y,x),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Fy extends jn{constructor(t=[],n=zs,r,o,u,f,h,m,d,g){super(t,n,r,o,u,f,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RA extends Br{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Fy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new pl(5,5,5),u=new $a({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ka});u.uniforms.tEquirect.value=n;const f=new Ri(o,u),h=n.minFilter;return n.minFilter===Lr&&(n.minFilter=zi),new AA(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,o);t.setRenderTarget(u)}}class Hu extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wA={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,u=null,f=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const T of t.hand.values()){const S=n.getJointPose(T,r),_=this._getHandJoint(d,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],y=g.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&y>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&y<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(wA)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Hu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}let CA=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};const ad=new $,DA=new $,UA=new ue;class ja{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=ad.subVectors(r,n).cross(DA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(ad),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||UA.getNormalMatrix(t),o=this.coplanarPoint(ad).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Ap,Gu=new $;class wp{constructor(t=new ja,n=new ja,r=new ja,o=new ja,u=new ja,f=new ja){this.planes=[t,n,r,o,u,f]}set(t,n,r,o,u,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=ma){const r=this.planes,o=t.elements,u=o[0],f=o[1],h=o[2],m=o[3],d=o[4],g=o[5],v=o[6],y=o[7],x=o[8],M=o[9],T=o[10],S=o[11],_=o[12],U=o[13],L=o[14],D=o[15];if(r[0].setComponents(m-u,y-d,S-x,D-_).normalize(),r[1].setComponents(m+u,y+d,S+x,D+_).normalize(),r[2].setComponents(m+f,y+g,S+M,D+U).normalize(),r[3].setComponents(m-f,y-g,S-M,D-U).normalize(),r[4].setComponents(m-h,y-v,S-T,D-L).normalize(),n===ma)r[5].setComponents(m+h,y+v,S+T,D+L).normalize();else if(n===cc)r[5].setComponents(h,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Gu.x=o.normal.x>0?t.max.x:t.min.x,Gu.y=o.normal.y>0?t.max.y:t.min.y,Gu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zy extends jn{constructor(t,n,r=Pr,o,u,f,h=wi,m=wi,d,g=il){if(g!==il&&g!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,u,f,h,m,g,r,d),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ml extends tr{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const u=t/2,f=n/2,h=Math.floor(r),m=Math.floor(o),d=h+1,g=m+1,v=t/h,y=n/m,x=[],M=[],T=[],S=[];for(let _=0;_<g;_++){const U=_*y-f;for(let L=0;L<d;L++){const D=L*v-u;M.push(D,-U,0),T.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<h;U++){const L=U+d*_,D=U+d*(_+1),B=U+1+d*(_+1),z=U+1+d*_;x.push(L,D,z),x.push(D,B,z)}this.setIndex(x),this.setAttribute("position",new Hi(M,3)),this.setAttribute("normal",new Hi(T,3)),this.setAttribute("uv",new Hi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cp extends tr{constructor(t=1,n=32,r=16,o=0,u=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let d=0;const g=[],v=new $,y=new $,x=[],M=[],T=[],S=[];for(let _=0;_<=r;_++){const U=[],L=_/r;let D=0;_===0&&f===0?D=.5/n:_===r&&m===Math.PI&&(D=-.5/n);for(let B=0;B<=n;B++){const z=B/n;v.x=-t*Math.cos(o+z*u)*Math.sin(f+L*h),v.y=t*Math.cos(f+L*h),v.z=t*Math.sin(o+z*u)*Math.sin(f+L*h),M.push(v.x,v.y,v.z),y.copy(v).normalize(),T.push(y.x,y.y,y.z),S.push(z+D,1-L),U.push(d++)}g.push(U)}for(let _=0;_<r;_++)for(let U=0;U<n;U++){const L=g[_][U+1],D=g[_][U],B=g[_+1][U],z=g[_+1][U+1];(_!==0||f>0)&&x.push(L,D,z),(_!==r-1||m<Math.PI)&&x.push(D,B,z)}this.setIndex(x),this.setAttribute("position",new Hi(M,3)),this.setAttribute("normal",new Hi(T,3)),this.setAttribute("uv",new Hi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class LA extends dl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ay,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NA extends dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OA extends dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Iy extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const rd=new $e,jv=new $,Zv=new $;class PA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;jv.setFromMatrixPosition(t.matrixWorld),n.position.copy(jv),Zv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Zv),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hy extends By{constructor(t=-1,n=1,r=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-t,f=r+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,f=u+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BA extends PA{constructor(){super(new Hy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FA extends Iy{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new BA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zA extends Iy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class IA extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Kv{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(_e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HA extends Ir{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qv(a,t,n,r){const o=GA(r);switch(n){case yy:return a*t;case xy:return a*t;case Ey:return a*t*2;case My:return a*t/o.components*o.byteLength;case Ep:return a*t/o.components*o.byteLength;case Ty:return a*t*2/o.components*o.byteLength;case Mp:return a*t*2/o.components*o.byteLength;case Sy:return a*t*3/o.components*o.byteLength;case Ai:return a*t*4/o.components*o.byteLength;case Tp:return a*t*4/o.components*o.byteLength;case Ju:case $u:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case tc:case ec:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Pd:case Fd:return Math.max(a,16)*Math.max(t,8)/4;case Od:case Bd:return Math.max(a,8)*Math.max(t,8)/2;case zd:case Id:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Hd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case kd:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case qd:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case $d:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case nc:case ep:case np:return Math.ceil(a/4)*Math.ceil(t/4)*16;case by:case ip:return Math.ceil(a/4)*Math.ceil(t/4)*8;case ap:case rp:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GA(a){switch(a){case ya:case gy:return{byteLength:1,components:1};case el:case _y:case cl:return{byteLength:2,components:1};case Sp:case xp:return{byteLength:2,components:4};case Pr:case yp:case pa:return{byteLength:4,components:1};case vy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gy(){let a=null,t=!1,n=null,r=null;function o(u,f){n(u,f),r=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function VA(a){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,v=d.byteLength,y=a.createBuffer();a.bindBuffer(m,y),a.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,d){const g=m.array,v=m.updateRanges;if(a.bindBuffer(d,h),v.length===0)a.bufferSubData(d,0,g);else{v.sort((x,M)=>x.start-M.start);let y=0;for(let x=1;x<v.length;x++){const M=v[y],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++y,v[y]=T)}v.length=y+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];a.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(a.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,m),d.version=h.version}}return{get:o,remove:u,update:f}}var kA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XA=`#ifdef USE_ALPHAHASH
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
#endif`,WA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZA=`#ifdef USE_AOMAP
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
#endif`,KA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
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
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,P1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,G1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,V1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fR=`#ifdef USE_NORMALMAP
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
#endif`,hR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,vR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ER=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,DR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UR=`#ifdef USE_SKINNING
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
#endif`,LR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PR=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BR=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FR=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kR=`uniform sampler2D t2D;
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
}`,XR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,ZR=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KR=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,QR=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$R=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nw=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,iw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,aw=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,rw=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sw=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,ow=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lw=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,uw=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cw=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,fw=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hw=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,dw=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pw=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,mw=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gw=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,_w=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,vw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yw=`uniform vec3 color;
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
}`,Sw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,xw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,he={alphahash_fragment:kA,alphahash_pars_fragment:XA,alphamap_fragment:WA,alphamap_pars_fragment:qA,alphatest_fragment:YA,alphatest_pars_fragment:jA,aomap_fragment:ZA,aomap_pars_fragment:KA,batching_pars_vertex:QA,batching_vertex:JA,begin_vertex:$A,beginnormal_vertex:t1,bsdfs:e1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:r1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:u1,color_pars_vertex:c1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:_1,emissivemap_pars_fragment:v1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:x1,envmap_common_pars_fragment:E1,envmap_pars_fragment:M1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:P1,envmap_vertex:b1,fog_vertex:A1,fog_pars_vertex:R1,fog_fragment:w1,fog_pars_fragment:C1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:U1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:N1,lights_pars_begin:O1,lights_toon_fragment:B1,lights_toon_pars_fragment:F1,lights_phong_fragment:z1,lights_phong_pars_fragment:I1,lights_physical_fragment:H1,lights_physical_pars_fragment:G1,lights_fragment_begin:V1,lights_fragment_maps:k1,lights_fragment_end:X1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:j1,map_fragment:Z1,map_pars_fragment:K1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:tR,morphinstance_vertex:eR,morphcolor_vertex:nR,morphnormal_vertex:iR,morphtarget_pars_vertex:aR,morphtarget_vertex:rR,normal_fragment_begin:sR,normal_fragment_maps:oR,normal_pars_fragment:lR,normal_pars_vertex:uR,normal_vertex:cR,normalmap_pars_fragment:fR,clearcoat_normal_fragment_begin:hR,clearcoat_normal_fragment_maps:dR,clearcoat_pars_fragment:pR,iridescence_pars_fragment:mR,opaque_fragment:gR,packing:_R,premultiplied_alpha_fragment:vR,project_vertex:yR,dithering_fragment:SR,dithering_pars_fragment:xR,roughnessmap_fragment:ER,roughnessmap_pars_fragment:MR,shadowmap_pars_fragment:TR,shadowmap_pars_vertex:bR,shadowmap_vertex:AR,shadowmask_pars_fragment:RR,skinbase_vertex:wR,skinning_pars_vertex:CR,skinning_vertex:DR,skinnormal_vertex:UR,specularmap_fragment:LR,specularmap_pars_fragment:NR,tonemapping_fragment:OR,tonemapping_pars_fragment:PR,transmission_fragment:BR,transmission_pars_fragment:FR,uv_pars_fragment:zR,uv_pars_vertex:IR,uv_vertex:HR,worldpos_vertex:GR,background_vert:VR,background_frag:kR,backgroundCube_vert:XR,backgroundCube_frag:WR,cube_vert:qR,cube_frag:YR,depth_vert:jR,depth_frag:ZR,distanceRGBA_vert:KR,distanceRGBA_frag:QR,equirect_vert:JR,equirect_frag:$R,linedashed_vert:tw,linedashed_frag:ew,meshbasic_vert:nw,meshbasic_frag:iw,meshlambert_vert:aw,meshlambert_frag:rw,meshmatcap_vert:sw,meshmatcap_frag:ow,meshnormal_vert:lw,meshnormal_frag:uw,meshphong_vert:cw,meshphong_frag:fw,meshphysical_vert:hw,meshphysical_frag:dw,meshtoon_vert:pw,meshtoon_frag:mw,points_vert:gw,points_frag:_w,shadow_vert:vw,shadow_frag:yw,sprite_vert:Sw,sprite_frag:xw},Nt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Fi={basic:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:In([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:In([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:In([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:In([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:In([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:In([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:In([Nt.common,Nt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:In([Nt.lights,Nt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Fi.physical={uniforms:In([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Vu={r:0,b:0,g:0},br=new Vi,Ew=new $e;function Mw(a,t,n,r,o,u,f){const h=new De(0);let m=u===!0?0:1,d,g,v=null,y=0,x=null;function M(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?n:t).get(D)),D}function T(L){let D=!1;const B=M(L);B===null?_(h,m):B&&B.isColor&&(_(B,1),D=!0);const z=a.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(L,D){const B=M(D);B&&(B.isCubeTexture||B.mapping===Sc)?(g===void 0&&(g=new Ri(new pl(1,1,1),new $a({name:"BackgroundCubeMaterial",uniforms:Gs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),br.copy(D.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(br)),g.material.toneMapped=Ce.getTransfer(B.colorSpace)!==Fe,(v!==B||y!==B.version||x!==a.toneMapping)&&(g.material.needsUpdate=!0,v=B,y=B.version,x=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new Ri(new ml(2,2),new $a({name:"BackgroundMaterial",uniforms:Gs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Ce.getTransfer(B.colorSpace)!==Fe,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||y!==B.version||x!==a.toneMapping)&&(d.material.needsUpdate=!0,v=B,y=B.version,x=a.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function _(L,D){L.getRGB(Vu,Py(a)),r.buffers.color.setClear(Vu.r,Vu.g,Vu.b,D,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:T,addToRenderList:S,dispose:U}}function Tw(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=y(null);let u=o,f=!1;function h(A,H,ct,at,_t){let pt=!1;const X=v(at,ct,H);u!==X&&(u=X,d(u.object)),pt=x(A,at,ct,_t),pt&&M(A,at,ct,_t),_t!==null&&t.update(_t,a.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,D(A,H,ct,at),_t!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return a.createVertexArray()}function d(A){return a.bindVertexArray(A)}function g(A){return a.deleteVertexArray(A)}function v(A,H,ct){const at=ct.wireframe===!0;let _t=r[A.id];_t===void 0&&(_t={},r[A.id]=_t);let pt=_t[H.id];pt===void 0&&(pt={},_t[H.id]=pt);let X=pt[at];return X===void 0&&(X=y(m()),pt[at]=X),X}function y(A){const H=[],ct=[],at=[];for(let _t=0;_t<n;_t++)H[_t]=0,ct[_t]=0,at[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:at,object:A,attributes:{},index:null}}function x(A,H,ct,at){const _t=u.attributes,pt=H.attributes;let X=0;const rt=ct.getAttributes();for(const Z in rt)if(rt[Z].location>=0){const O=_t[Z];let it=pt[Z];if(it===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),O===void 0||O.attribute!==it||it&&O.data!==it.data)return!0;X++}return u.attributesNum!==X||u.index!==at}function M(A,H,ct,at){const _t={},pt=H.attributes;let X=0;const rt=ct.getAttributes();for(const Z in rt)if(rt[Z].location>=0){let O=pt[Z];O===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(O=A.instanceColor));const it={};it.attribute=O,O&&O.data&&(it.data=O.data),_t[Z]=it,X++}u.attributes=_t,u.attributesNum=X,u.index=at}function T(){const A=u.newAttributes;for(let H=0,ct=A.length;H<ct;H++)A[H]=0}function S(A){_(A,0)}function _(A,H){const ct=u.newAttributes,at=u.enabledAttributes,_t=u.attributeDivisors;ct[A]=1,at[A]===0&&(a.enableVertexAttribArray(A),at[A]=1),_t[A]!==H&&(a.vertexAttribDivisor(A,H),_t[A]=H)}function U(){const A=u.newAttributes,H=u.enabledAttributes;for(let ct=0,at=H.length;ct<at;ct++)H[ct]!==A[ct]&&(a.disableVertexAttribArray(ct),H[ct]=0)}function L(A,H,ct,at,_t,pt,X){X===!0?a.vertexAttribIPointer(A,H,ct,_t,pt):a.vertexAttribPointer(A,H,ct,at,_t,pt)}function D(A,H,ct,at){T();const _t=at.attributes,pt=ct.getAttributes(),X=H.defaultAttributeValues;for(const rt in pt){const Z=pt[rt];if(Z.location>=0){let Et=_t[rt];if(Et===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor)),Et!==void 0){const O=Et.normalized,it=Et.itemSize,bt=t.get(Et);if(bt===void 0)continue;const wt=bt.buffer,q=bt.type,mt=bt.bytesPerElement,xt=q===a.INT||q===a.UNSIGNED_INT||Et.gpuType===yp;if(Et.isInterleavedBufferAttribute){const At=Et.data,Ct=At.stride,Jt=Et.offset;if(At.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Z.locationSize;Ft++)_(Z.location+Ft,At.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ft=0;Ft<Z.locationSize;Ft++)S(Z.location+Ft);a.bindBuffer(a.ARRAY_BUFFER,wt);for(let Ft=0;Ft<Z.locationSize;Ft++)L(Z.location+Ft,it/Z.locationSize,q,O,Ct*mt,(Jt+it/Z.locationSize*Ft)*mt,xt)}else{if(Et.isInstancedBufferAttribute){for(let At=0;At<Z.locationSize;At++)_(Z.location+At,Et.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let At=0;At<Z.locationSize;At++)S(Z.location+At);a.bindBuffer(a.ARRAY_BUFFER,wt);for(let At=0;At<Z.locationSize;At++)L(Z.location+At,it/Z.locationSize,q,O,it*mt,it/Z.locationSize*At*mt,xt)}}else if(X!==void 0){const O=X[rt];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(Z.location,O);break;case 3:a.vertexAttrib3fv(Z.location,O);break;case 4:a.vertexAttrib4fv(Z.location,O);break;default:a.vertexAttrib1fv(Z.location,O)}}}}U()}function B(){Y();for(const A in r){const H=r[A];for(const ct in H){const at=H[ct];for(const _t in at)g(at[_t].object),delete at[_t];delete H[ct]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const ct in H){const at=H[ct];for(const _t in at)g(at[_t].object),delete at[_t];delete H[ct]}delete r[A.id]}function F(A){for(const H in r){const ct=r[H];if(ct[A.id]===void 0)continue;const at=ct[A.id];for(const _t in at)g(at[_t].object),delete at[_t];delete ct[A.id]}}function Y(){w(),f=!0,u!==o&&(u=o,d(u.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function bw(a,t,n){let r;function o(d){r=d}function u(d,g){a.drawArrays(r,d,g),n.update(g,r,1)}function f(d,g,v){v!==0&&(a.drawArraysInstanced(r,d,g,v),n.update(g,r,v))}function h(d,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,v);let x=0;for(let M=0;M<v;M++)x+=g[M];n.update(x,r,1)}function m(d,g,v,y){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)f(d[M],g[M],y[M]);else{x.multiDrawArraysInstancedWEBGL(r,d,0,g,0,y,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*y[T];n.update(M,r,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Aw(a,t,n,r){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==Ai&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const Y=F===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ya&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pa&&!Y)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,z=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:B,maxSamples:z}}function Rw(a){const t=this;let n=null,r=0,o=!1,u=!1;const f=new ja,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const x=v.length!==0||y||r!==0||o;return o=y,r=v.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,x){const M=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,_=a.get(v);if(!o||M===null||M.length===0||u&&!S)u?g(null):d();else{const U=u?0:r,L=U*4;let D=_.clippingState||null;m.value=D,D=g(M,y,L,x);for(let B=0;B!==L;++B)D[B]=n[B];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,y,x,M){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=m.value,M!==!0||S===null){const _=x+T*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=x;L!==T;++L,D+=4)f.copy(v[L]).applyMatrix4(U,h),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function ww(a){let t=new WeakMap;function n(f,h){return h===Dd?f.mapping=zs:h===Ud&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Dd||h===Ud)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const d=new RA(m.height);return d.fromEquirectangularTexture(a,f),t.set(f,d),f.addEventListener("dispose",o),n(d.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ns=4,Jv=[.125,.215,.35,.446,.526,.582],Cr=20,sd=new Hy,$v=new De;let od=null,ld=0,ud=0,cd=!1;const Rr=(1+Math.sqrt(5))/2,Us=1/Rr,t0=[new $(-Rr,Us,0),new $(Rr,Us,0),new $(-Us,0,Rr),new $(Us,0,Rr),new $(0,Rr,-Us),new $(0,Rr,Us),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],Cw=new $;class e0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,u={}){const{size:f=256,position:h=Cw}=u;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(od,ld,ud),this._renderer.xr.enabled=cd,t.scissorTest=!1,ku(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zs||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:cl,format:Ai,colorSpace:Hs,depthBuffer:!1},o=n0(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(t,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dw(u)),this._blurMaterial=Uw(u,t,n)}return o}_compileMaterial(t){const n=new Ri(this._lodPlanes[0],t);this._renderer.compile(n,sd)}_sceneToCubeUV(t,n,r,o,u){const m=new gi(90,1,n,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor($v),v.toneMapping=Qa,v.autoClear=!1;const M=new Rp({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),T=new Ri(new pl,M);let S=!1;const _=t.background;_?_.isColor&&(M.color.copy(_),t.background=null,S=!0):(M.color.copy($v),S=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):L===1?(m.up.set(0,0,d[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,d[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const D=this._cubeSize;ku(o,L*D,U>2?D:0,D,D),v.setRenderTarget(o),S&&v.render(T,m),v.render(t,m)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=x,v.autoClear=y,t.background=_}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===zs||t.mapping===Is;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const u=o?this._cubemapMaterial:this._equirectMaterial,f=new Ri(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;ku(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,sd)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=t0[(o-u-1)%t0.length];this._blur(t,u-1,u,f,h)}n.autoClear=r}_blur(t,n,r,o,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,o,"latitudinal",u),this._halfBlur(f,t,r,r,o,"longitudinal",u)}_halfBlur(t,n,r,o,u,f,h){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[o],d),y=d.uniforms,x=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Cr-1),T=u/M,S=isFinite(u)?1+Math.floor(g*T):Cr;S>Cr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let U=0;for(let F=0;F<Cr;++F){const Y=F/T,w=Math.exp(-Y*Y/2);_.push(w),F===0?U+=w:F<S&&(U+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/U;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=M,y.mipInt.value=L-r;const D=this._sizeLods[o],B=3*D*(o>L-Ns?o-L+Ns:0),z=4*(this._cubeSize-D);ku(n,B,z,3*D,2*D),m.setRenderTarget(n),m.render(v,sd)}}function Dw(a){const t=[],n=[],r=[];let o=a;const u=a-Ns+1+Jv.length;for(let f=0;f<u;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>a-Ns?m=Jv[f-a+Ns-1]:f===0&&(m=0),r.push(m);const d=1/(h-2),g=-d,v=1+d,y=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,M=6,T=3,S=2,_=1,U=new Float32Array(T*M*x),L=new Float32Array(S*M*x),D=new Float32Array(_*M*x);for(let z=0;z<x;z++){const F=z%3*2/3-1,Y=z>2?0:-1,w=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];U.set(w,T*M*z),L.set(y,S*M*z);const A=[z,z,z,z,z,z];D.set(A,_*M*z)}const B=new tr;B.setAttribute("position",new Ii(U,T)),B.setAttribute("uv",new Ii(L,S)),B.setAttribute("faceIndex",new Ii(D,_)),t.push(B),o>Ns&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function n0(a,t,n){const r=new Br(a,t,n);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ku(a,t,n,r,o){a.viewport.set(t,n,r,o),a.scissor.set(t,n,r,o)}function Uw(a,t,n){const r=new Float32Array(Cr),o=new $(0,1,0);return new $a({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function i0(){return new $a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dp(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function a0(){return new $a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Dp(){return`

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
	`}function Lw(a){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const m=h.mapping,d=m===Dd||m===Ud,g=m===zs||m===Is;if(d||g){let v=t.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new e0(a)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new e0(a)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function o(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function u(h){const m=h.target;m.removeEventListener("dispose",u);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Nw(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ac("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function Ow(a,t,n,r){const o={},u=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const M in y.attributes)t.remove(y.attributes[M]);y.removeEventListener("dispose",f),delete o[y.id];const x=u.get(y);x&&(t.remove(x),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(v,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,n.memory.geometries++),y}function m(v){const y=v.attributes;for(const x in y)t.update(y[x],a.ARRAY_BUFFER)}function d(v){const y=[],x=v.index,M=v.attributes.position;let T=0;if(x!==null){const U=x.array;T=x.version;for(let L=0,D=U.length;L<D;L+=3){const B=U[L+0],z=U[L+1],F=U[L+2];y.push(B,z,z,F,F,B)}}else if(M!==void 0){const U=M.array;T=M.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const B=L+0,z=L+1,F=L+2;y.push(B,z,z,F,F,B)}}else return;const S=new(wy(y)?Oy:Ny)(y,1);S.version=T;const _=u.get(v);_&&t.remove(_),u.set(v,S)}function g(v){const y=u.get(v);if(y){const x=v.index;x!==null&&y.version<x.version&&d(v)}else d(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function Pw(a,t,n){let r;function o(y){r=y}let u,f;function h(y){u=y.type,f=y.bytesPerElement}function m(y,x){a.drawElements(r,x,u,y*f),n.update(x,r,1)}function d(y,x,M){M!==0&&(a.drawElementsInstanced(r,x,u,y*f,M),n.update(x,r,M))}function g(y,x,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,u,y,0,M);let S=0;for(let _=0;_<M;_++)S+=x[_];n.update(S,r,1)}function v(y,x,M,T){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)d(y[_]/f,x[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,u,y,0,T,0,M);let _=0;for(let U=0;U<M;U++)_+=x[U]*T[U];n.update(_,r,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Bw(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Fw(a,t,n){const r=new WeakMap,o=new Je;function u(f,h,m){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==v){let A=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var x=A;y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;M===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let B=h.attributes.position.count*D,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*z*4*v),Y=new Cy(F,B,z,v);Y.type=pa,Y.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const ct=_[H],at=U[H],_t=L[H],pt=B*z*4*H;for(let X=0;X<ct.count;X++){const rt=X*w;M===!0&&(o.fromBufferAttribute(ct,X),F[pt+rt+0]=o.x,F[pt+rt+1]=o.y,F[pt+rt+2]=o.z,F[pt+rt+3]=0),T===!0&&(o.fromBufferAttribute(at,X),F[pt+rt+4]=o.x,F[pt+rt+5]=o.y,F[pt+rt+6]=o.z,F[pt+rt+7]=0),S===!0&&(o.fromBufferAttribute(_t,X),F[pt+rt+8]=o.x,F[pt+rt+9]=o.y,F[pt+rt+10]=o.z,F[pt+rt+11]=_t.itemSize===4?o.w:1)}}y={count:v,texture:Y,size:new ce(B,z)},r.set(h,y),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",d)}m.getUniforms().setValue(a,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:u}}function zw(a,t,n,r){let o=new WeakMap;function u(m){const d=r.render.frame,g=m.geometry,v=t.get(m,g);if(o.get(v)!==d&&(t.update(v),o.set(v,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==d&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,d))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==d&&(y.update(),o.set(y,d))}return v}function f(){o=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:f}}const Vy=new jn,r0=new zy(1,1),ky=new Cy,Xy=new cA,Wy=new Fy,s0=[],o0=[],l0=new Float32Array(16),u0=new Float32Array(9),c0=new Float32Array(4);function qs(a,t,n){const r=a[0];if(r<=0||r>0)return a;const o=t*n;let u=s0[o];if(u===void 0&&(u=new Float32Array(o),s0[o]=u),t!==0){r.toArray(u,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(u,h)}return u}function pn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function mn(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function xc(a,t){let n=o0[t];n===void 0&&(n=new Int32Array(t),o0[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function Iw(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function Hw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2fv(this.addr,t),mn(n,t)}}function Gw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pn(n,t))return;a.uniform3fv(this.addr,t),mn(n,t)}}function Vw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4fv(this.addr,t),mn(n,t)}}function kw(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;c0.set(r),a.uniformMatrix2fv(this.addr,!1,c0),mn(n,r)}}function Xw(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;u0.set(r),a.uniformMatrix3fv(this.addr,!1,u0),mn(n,r)}}function Ww(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;l0.set(r),a.uniformMatrix4fv(this.addr,!1,l0),mn(n,r)}}function qw(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function Yw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2iv(this.addr,t),mn(n,t)}}function jw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3iv(this.addr,t),mn(n,t)}}function Zw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4iv(this.addr,t),mn(n,t)}}function Kw(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function Qw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;a.uniform2uiv(this.addr,t),mn(n,t)}}function Jw(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;a.uniform3uiv(this.addr,t),mn(n,t)}}function $w(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;a.uniform4uiv(this.addr,t),mn(n,t)}}function tC(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(r0.compareFunction=Ry,u=r0):u=Vy,n.setTexture2D(t||u,o)}function eC(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||Xy,o)}function nC(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||Wy,o)}function iC(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||ky,o)}function aC(a){switch(a){case 5126:return Iw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return kw;case 35675:return Xw;case 35676:return Ww;case 5124:case 35670:return qw;case 35667:case 35671:return Yw;case 35668:case 35672:return jw;case 35669:case 35673:return Zw;case 5125:return Kw;case 36294:return Qw;case 36295:return Jw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function rC(a,t){a.uniform1fv(this.addr,t)}function sC(a,t){const n=qs(t,this.size,2);a.uniform2fv(this.addr,n)}function oC(a,t){const n=qs(t,this.size,3);a.uniform3fv(this.addr,n)}function lC(a,t){const n=qs(t,this.size,4);a.uniform4fv(this.addr,n)}function uC(a,t){const n=qs(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function cC(a,t){const n=qs(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function fC(a,t){const n=qs(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function hC(a,t){a.uniform1iv(this.addr,t)}function dC(a,t){a.uniform2iv(this.addr,t)}function pC(a,t){a.uniform3iv(this.addr,t)}function mC(a,t){a.uniform4iv(this.addr,t)}function gC(a,t){a.uniform1uiv(this.addr,t)}function _C(a,t){a.uniform2uiv(this.addr,t)}function vC(a,t){a.uniform3uiv(this.addr,t)}function yC(a,t){a.uniform4uiv(this.addr,t)}function SC(a,t,n){const r=this.cache,o=t.length,u=xc(n,o);pn(r,u)||(a.uniform1iv(this.addr,u),mn(r,u));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||Vy,u[f])}function xC(a,t,n){const r=this.cache,o=t.length,u=xc(n,o);pn(r,u)||(a.uniform1iv(this.addr,u),mn(r,u));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||Xy,u[f])}function EC(a,t,n){const r=this.cache,o=t.length,u=xc(n,o);pn(r,u)||(a.uniform1iv(this.addr,u),mn(r,u));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||Wy,u[f])}function MC(a,t,n){const r=this.cache,o=t.length,u=xc(n,o);pn(r,u)||(a.uniform1iv(this.addr,u),mn(r,u));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||ky,u[f])}function TC(a){switch(a){case 5126:return rC;case 35664:return sC;case 35665:return oC;case 35666:return lC;case 35674:return uC;case 35675:return cC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return _C;case 36295:return vC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return SC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return MC}}class bC{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=aC(n.type)}}class AC{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TC(n.type)}}class RC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const h=o[u];h.setValue(t,n[h.id],r)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function f0(a,t){a.seq.push(t),a.map[t.id]=t}function wC(a,t,n){const r=a.name,o=r.length;for(fd.lastIndex=0;;){const u=fd.exec(r),f=fd.lastIndex;let h=u[1];const m=u[2]==="]",d=u[3];if(m&&(h=h|0),d===void 0||d==="["&&f+2===o){f0(n,d===void 0?new bC(h,a,t):new AC(h,a,t));break}else{let v=n.map[h];v===void 0&&(v=new RC(h),f0(n,v)),n=v}}}class rc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const u=t.getActiveUniform(n,o),f=t.getUniformLocation(n,u.name);wC(u,f,this)}}setValue(t,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let u=0,f=n.length;u!==f;++u){const h=n[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,u=t.length;o!==u;++o){const f=t[o];f.id in n&&r.push(f)}return r}}function h0(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const CC=37297;let DC=0;function UC(a,t){const n=a.split(`
`),r=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let f=o;f<u;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const d0=new ue;function LC(a){Ce._getMatrix(d0,Ce.workingColorSpace,a);const t=`mat3( ${d0.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(a)){case uc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function p0(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),o=a.getShaderInfoLog(t).trim();if(r&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+o+`

`+UC(a.getShaderSource(t),f)}else return o}function NC(a,t){const n=LC(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function OC(a,t){let n;switch(t){case Pb:n="Linear";break;case Bb:n="Reinhard";break;case Fb:n="Cineon";break;case zb:n="ACESFilmic";break;case Hb:n="AgX";break;case Gb:n="Neutral";break;case Ib:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xu=new $;function PC(){Ce.getLuminanceCoefficients(Xu);const a=Xu.x.toFixed(4),t=Xu.y.toFixed(4),n=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function FC(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function zC(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(t,o),f=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[f]={type:u.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function Jo(a){return a!==""}function m0(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function g0(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IC=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(a){return a.replace(IC,GC)}const HC=new Map;function GC(a,t){let n=he[t];if(n===void 0){const r=HC.get(t);if(r!==void 0)n=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return op(n)}const VC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(a){return a.replace(VC,kC)}function kC(a,t,n,r){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function v0(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XC(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===dy?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===pb?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function WC(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zs:case Is:t="ENVMAP_TYPE_CUBE";break;case Sc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qC(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function YC(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case py:t="ENVMAP_BLENDING_MULTIPLY";break;case Nb:t="ENVMAP_BLENDING_MIX";break;case Ob:t="ENVMAP_BLENDING_ADD";break}return t}function jC(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function ZC(a,t,n,r){const o=a.getContext(),u=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=XC(n),d=WC(n),g=qC(n),v=YC(n),y=jC(n),x=BC(n),M=FC(u),T=o.createProgram();let S,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Jo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(S=[v0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[v0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qa?"#define TONE_MAPPING":"",n.toneMapping!==Qa?he.tonemapping_pars_fragment:"",n.toneMapping!==Qa?OC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,NC("linearToOutputTexel",n.outputColorSpace),PC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jo).join(`
`)),f=op(f),f=m0(f,n),f=g0(f,n),h=op(h),h=m0(h,n),h=g0(h,n),f=_0(f),h=_0(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+S+f,D=U+_+h,B=h0(o,o.VERTEX_SHADER,L),z=h0(o,o.FRAGMENT_SHADER,D);o.attachShader(T,B),o.attachShader(T,z),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(a.debug.checkShaderErrors){const ct=o.getProgramInfoLog(T).trim(),at=o.getShaderInfoLog(B).trim(),_t=o.getShaderInfoLog(z).trim();let pt=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(pt=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,T,B,z);else{const rt=p0(o,B,"vertex"),Z=p0(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+rt+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(at===""||_t==="")&&(X=!1);X&&(H.diagnostics={runnable:pt,programLog:ct,vertexShader:{log:at,prefix:S},fragmentShader:{log:_t,prefix:_}})}o.deleteShader(B),o.deleteShader(z),Y=new rc(o,T),w=zC(o,T)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(T,CC)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=z,this}let KC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new JC(t),n.set(t,r)),r}}class JC{constructor(t){this.id=KC++,this.code=t,this.usedTimes=0}}function $C(a,t,n,r,o,u,f){const h=new Uy,m=new QC,d=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return d.add(w),w===0?"uv":`uv${w}`}function S(w,A,H,ct,at){const _t=ct.fog,pt=at.geometry,X=w.isMeshStandardMaterial?ct.environment:null,rt=(w.isMeshStandardMaterial?n:t).get(w.envMap||X),Z=rt&&rt.mapping===Sc?rt.image.height:null,Et=M[w.type];w.precision!==null&&(x=o.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const O=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,it=O!==void 0?O.length:0;let bt=0;pt.morphAttributes.position!==void 0&&(bt=1),pt.morphAttributes.normal!==void 0&&(bt=2),pt.morphAttributes.color!==void 0&&(bt=3);let wt,q,mt,xt;if(Et){const be=Fi[Et];wt=be.vertexShader,q=be.fragmentShader}else wt=w.vertexShader,q=w.fragmentShader,m.update(w),mt=m.getVertexShaderID(w),xt=m.getFragmentShaderID(w);const At=a.getRenderTarget(),Ct=a.state.buffers.depth.getReversed(),Jt=at.isInstancedMesh===!0,Ft=at.isBatchedMesh===!0,Te=!!w.map,Ue=!!w.matcap,re=!!rt,I=!!w.aoMap,xn=!!w.lightMap,fe=!!w.bumpMap,pe=!!w.normalMap,Wt=!!w.displacementMap,Le=!!w.emissiveMap,qt=!!w.metalnessMap,N=!!w.roughnessMap,b=w.anisotropy>0,tt=w.clearcoat>0,ht=w.dispersion>0,St=w.iridescence>0,dt=w.sheen>0,Vt=w.transmission>0,Ut=b&&!!w.anisotropyMap,zt=tt&&!!w.clearcoatMap,ve=tt&&!!w.clearcoatNormalMap,Tt=tt&&!!w.clearcoatRoughnessMap,It=St&&!!w.iridescenceMap,Qt=St&&!!w.iridescenceThicknessMap,kt=dt&&!!w.sheenColorMap,Ht=dt&&!!w.sheenRoughnessMap,se=!!w.specularMap,Zt=!!w.specularColorMap,Ne=!!w.specularIntensityMap,k=Vt&&!!w.transmissionMap,Ot=Vt&&!!w.thicknessMap,ot=!!w.gradientMap,vt=!!w.alphaMap,Dt=w.alphaTest>0,Lt=!!w.alphaHash,ee=!!w.extensions;let Xe=Qa;w.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Xe=a.toneMapping);const on={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:wt,fragmentShader:q,defines:w.defines,customVertexShaderID:mt,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Ft,batchingColor:Ft&&at._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&at.instanceColor!==null,instancingMorph:Jt&&at.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:At===null?a.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Hs,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:Ue,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:xn,bumpMap:fe,normalMap:pe,displacementMap:y&&Wt,emissiveMap:Le,normalMapObjectSpace:pe&&w.normalMapType===Wb,normalMapTangentSpace:pe&&w.normalMapType===Ay,metalnessMap:qt,roughnessMap:N,anisotropy:b,anisotropyMap:Ut,clearcoat:tt,clearcoatMap:zt,clearcoatNormalMap:ve,clearcoatRoughnessMap:Tt,dispersion:ht,iridescence:St,iridescenceMap:It,iridescenceThicknessMap:Qt,sheen:dt,sheenColorMap:kt,sheenRoughnessMap:Ht,specularMap:se,specularColorMap:Zt,specularIntensityMap:Ne,transmission:Vt,transmissionMap:k,thicknessMap:Ot,gradientMap:ot,opaque:w.transparent===!1&&w.blending===Ps&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:Dt,alphaHash:Lt,combine:w.combine,mapUv:Te&&T(w.map.channel),aoMapUv:I&&T(w.aoMap.channel),lightMapUv:xn&&T(w.lightMap.channel),bumpMapUv:fe&&T(w.bumpMap.channel),normalMapUv:pe&&T(w.normalMap.channel),displacementMapUv:Wt&&T(w.displacementMap.channel),emissiveMapUv:Le&&T(w.emissiveMap.channel),metalnessMapUv:qt&&T(w.metalnessMap.channel),roughnessMapUv:N&&T(w.roughnessMap.channel),anisotropyMapUv:Ut&&T(w.anisotropyMap.channel),clearcoatMapUv:zt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&T(w.sheenRoughnessMap.channel),specularMapUv:se&&T(w.specularMap.channel),specularColorMapUv:Zt&&T(w.specularColorMap.channel),specularIntensityMapUv:Ne&&T(w.specularIntensityMap.channel),transmissionMapUv:k&&T(w.transmissionMap.channel),thicknessMapUv:Ot&&T(w.thicknessMap.channel),alphaMapUv:vt&&T(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(pe||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(Te||vt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:Le&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===da,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ee&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&w.extensions.multiDraw===!0||Ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=d.has(1),on.vertexUv2s=d.has(2),on.vertexUv3s=d.has(3),d.clear(),on}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)A.push(H),A.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(U(A,w),L(A,w),A.push(a.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function U(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function L(w,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const A=M[w.type];let H;if(A){const ct=Fi[A];H=MA.clone(ct.uniforms)}else H=w.uniforms;return H}function B(w,A){let H;for(let ct=0,at=g.length;ct<at;ct++){const _t=g[ct];if(_t.cacheKey===A){H=_t,++H.usedTimes;break}}return H===void 0&&(H=new ZC(a,A,w,u),g.push(H)),H}function z(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:Y}}function tD(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function o(f,h,m){a.get(f)[h]=m}function u(){a=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:u}}function eD(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function y0(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function S0(){const a=[];let t=0;const n=[],r=[],o=[];function u(){t=0,n.length=0,r.length=0,o.length=0}function f(v,y,x,M,T,S){let _=a[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:x,groupOrder:M,renderOrder:v.renderOrder,z:T,group:S},a[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=x,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=T,_.group=S),t++,_}function h(v,y,x,M,T,S){const _=f(v,y,x,M,T,S);x.transmission>0?r.push(_):x.transparent===!0?o.push(_):n.push(_)}function m(v,y,x,M,T,S){const _=f(v,y,x,M,T,S);x.transmission>0?r.unshift(_):x.transparent===!0?o.unshift(_):n.unshift(_)}function d(v,y){n.length>1&&n.sort(v||eD),r.length>1&&r.sort(y||y0),o.length>1&&o.sort(y||y0)}function g(){for(let v=t,y=a.length;v<y;v++){const x=a[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:h,unshift:m,finish:g,sort:d}}function nD(){let a=new WeakMap;function t(r,o){const u=a.get(r);let f;return u===void 0?(f=new S0,a.set(r,[f])):o>=u.length?(f=new S0,u.push(f)):f=u[o],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function iD(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new De};break;case"SpotLight":n={position:new $,direction:new $,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new $,halfWidth:new $,halfHeight:new $};break}return a[t.id]=n,n}}}function aD(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let rD=0;function sD(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function oD(a){const t=new iD,n=aD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new $);const o=new $,u=new $e,f=new $e;function h(d){let g=0,v=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let x=0,M=0,T=0,S=0,_=0,U=0,L=0,D=0,B=0,z=0,F=0;d.sort(sD);for(let w=0,A=d.length;w<A;w++){const H=d[w],ct=H.color,at=H.intensity,_t=H.distance,pt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*at,v+=ct.g*at,y+=ct.b*at;else if(H.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(H.sh.coefficients[X],at);F++}else if(H.isDirectionalLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=pt,r.directionalShadowMatrix[x]=H.shadow.matrix,U++}r.directional[x]=X,x++}else if(H.isSpotLight){const X=t.get(H);X.position.setFromMatrixPosition(H.matrixWorld),X.color.copy(ct).multiplyScalar(at),X.distance=_t,X.coneCos=Math.cos(H.angle),X.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),X.decay=H.decay,r.spot[T]=X;const rt=H.shadow;if(H.map&&(r.spotLightMap[B]=H.map,B++,rt.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[T]=rt.matrix,H.castShadow){const Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,r.spotShadow[T]=Z,r.spotShadowMap[T]=pt,D++}T++}else if(H.isRectAreaLight){const X=t.get(H);X.color.copy(ct).multiplyScalar(at),X.halfWidth.set(H.width*.5,0,0),X.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=X,S++}else if(H.isPointLight){const X=t.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity),X.distance=H.distance,X.decay=H.decay,H.castShadow){const rt=H.shadow,Z=n.get(H);Z.shadowIntensity=rt.intensity,Z.shadowBias=rt.bias,Z.shadowNormalBias=rt.normalBias,Z.shadowRadius=rt.radius,Z.shadowMapSize=rt.mapSize,Z.shadowCameraNear=rt.camera.near,Z.shadowCameraFar=rt.camera.far,r.pointShadow[M]=Z,r.pointShadowMap[M]=pt,r.pointShadowMatrix[M]=H.shadow.matrix,L++}r.point[M]=X,M++}else if(H.isHemisphereLight){const X=t.get(H);X.skyColor.copy(H.color).multiplyScalar(at),X.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[_]=X,_++}}S>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const Y=r.hash;(Y.directionalLength!==x||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==U||Y.numPointShadows!==L||Y.numSpotShadows!==D||Y.numSpotMaps!==B||Y.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+B-z,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,Y.directionalLength=x,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=U,Y.numPointShadows=L,Y.numSpotShadows=D,Y.numSpotMaps=B,Y.numLightProbes=F,r.version=rD++)}function m(d,g){let v=0,y=0,x=0,M=0,T=0;const S=g.matrixWorldInverse;for(let _=0,U=d.length;_<U;_++){const L=d[_];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),v++}else if(L.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const D=r.rectArea[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:r}}function x0(a){const t=new oD(a),n=[],r=[];function o(g){d.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function lD(a){let t=new WeakMap;function n(o,u=0){const f=t.get(o);let h;return f===void 0?(h=new x0(a),t.set(o,[h])):u>=f.length?(h=new x0(a),f.push(h)):h=f[u],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const uD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cD=`uniform sampler2D shadow_pass;
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
}`;function fD(a,t,n){let r=new wp;const o=new ce,u=new ce,f=new Je,h=new NA({depthPacking:Xb}),m=new OA,d={},g=n.maxTextureSize,v={[Ja]:Yn,[Yn]:Ja,[da]:da},y=new $a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:uD,fragmentShader:cD}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const M=new tr;M.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ri(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dy;let _=this.type;this.render=function(z,F,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const w=a.getRenderTarget(),A=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ct=a.state;ct.setBlending(Ka),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const at=_!==ha&&this.type===ha,_t=_===ha&&this.type!==ha;for(let pt=0,X=z.length;pt<X;pt++){const rt=z[pt],Z=rt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const Et=Z.getFrameExtents();if(o.multiply(Et),u.copy(Z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/Et.x),o.x=u.x*Et.x,Z.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/Et.y),o.y=u.y*Et.y,Z.mapSize.y=u.y)),Z.map===null||at===!0||_t===!0){const it=this.type!==ha?{minFilter:wi,magFilter:wi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Br(o.x,o.y,it),Z.map.texture.name=rt.name+".shadowMap",Z.camera.updateProjectionMatrix()}a.setRenderTarget(Z.map),a.clear();const O=Z.getViewportCount();for(let it=0;it<O;it++){const bt=Z.getViewport(it);f.set(u.x*bt.x,u.y*bt.y,u.x*bt.z,u.y*bt.w),ct.viewport(f),Z.updateMatrices(rt,it),r=Z.getFrustum(),D(F,Y,Z.camera,rt,this.type)}Z.isPointLightShadow!==!0&&this.type===ha&&U(Z,Y),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,a.setRenderTarget(w,A,H)};function U(z,F){const Y=t.update(T);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Br(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(F,null,Y,y,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(F,null,Y,x,T,null)}function L(z,F,Y,w){let A=null;const H=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)A=H;else if(A=Y.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ct=A.uuid,at=F.uuid;let _t=d[ct];_t===void 0&&(_t={},d[ct]=_t);let pt=_t[at];pt===void 0&&(pt=A.clone(),_t[at]=pt,F.addEventListener("dispose",B)),A=pt}if(A.visible=F.visible,A.wireframe=F.wireframe,w===ha?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=a.properties.get(A);ct.light=Y}return A}function D(z,F,Y,w,A){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===ha)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const at=t.update(z),_t=z.material;if(Array.isArray(_t)){const pt=at.groups;for(let X=0,rt=pt.length;X<rt;X++){const Z=pt[X],Et=_t[Z.materialIndex];if(Et&&Et.visible){const O=L(z,Et,w,A);z.onBeforeShadow(a,z,F,Y,at,O,Z),a.renderBufferDirect(Y,null,at,O,z,Z),z.onAfterShadow(a,z,F,Y,at,O,Z)}}}else if(_t.visible){const pt=L(z,_t,w,A);z.onBeforeShadow(a,z,F,Y,at,pt,null),a.renderBufferDirect(Y,null,at,pt,z,null),z.onAfterShadow(a,z,F,Y,at,pt,null)}}const ct=z.children;for(let at=0,_t=ct.length;at<_t;at++)D(ct[at],F,Y,w,A)}function B(z){z.target.removeEventListener("dispose",B);for(const Y in d){const w=d[Y],A=z.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const hD={[Md]:Td,[bd]:wd,[Ad]:Cd,[Fs]:Rd,[Td]:Md,[wd]:bd,[Cd]:Ad,[Rd]:Fs};function dD(a,t){function n(){let k=!1;const Ot=new Je;let ot=null;const vt=new Je(0,0,0,0);return{setMask:function(Dt){ot!==Dt&&!k&&(a.colorMask(Dt,Dt,Dt,Dt),ot=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,Lt,ee,Xe,on){on===!0&&(Dt*=Xe,Lt*=Xe,ee*=Xe),Ot.set(Dt,Lt,ee,Xe),vt.equals(Ot)===!1&&(a.clearColor(Dt,Lt,ee,Xe),vt.copy(Ot))},reset:function(){k=!1,ot=null,vt.set(-1,0,0,0)}}}function r(){let k=!1,Ot=!1,ot=null,vt=null,Dt=null;return{setReversed:function(Lt){if(Ot!==Lt){const ee=t.get("EXT_clip_control");Lt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ot=Lt;const Xe=Dt;Dt=null,this.setClear(Xe)}},getReversed:function(){return Ot},setTest:function(Lt){Lt?At(a.DEPTH_TEST):Ct(a.DEPTH_TEST)},setMask:function(Lt){ot!==Lt&&!k&&(a.depthMask(Lt),ot=Lt)},setFunc:function(Lt){if(Ot&&(Lt=hD[Lt]),vt!==Lt){switch(Lt){case Md:a.depthFunc(a.NEVER);break;case Td:a.depthFunc(a.ALWAYS);break;case bd:a.depthFunc(a.LESS);break;case Fs:a.depthFunc(a.LEQUAL);break;case Ad:a.depthFunc(a.EQUAL);break;case Rd:a.depthFunc(a.GEQUAL);break;case wd:a.depthFunc(a.GREATER);break;case Cd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}vt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Dt!==Lt&&(Ot&&(Lt=1-Lt),a.clearDepth(Lt),Dt=Lt)},reset:function(){k=!1,ot=null,vt=null,Dt=null,Ot=!1}}}function o(){let k=!1,Ot=null,ot=null,vt=null,Dt=null,Lt=null,ee=null,Xe=null,on=null;return{setTest:function(be){k||(be?At(a.STENCIL_TEST):Ct(a.STENCIL_TEST))},setMask:function(be){Ot!==be&&!k&&(a.stencilMask(be),Ot=be)},setFunc:function(be,Nn,On){(ot!==be||vt!==Nn||Dt!==On)&&(a.stencilFunc(be,Nn,On),ot=be,vt=Nn,Dt=On)},setOp:function(be,Nn,On){(Lt!==be||ee!==Nn||Xe!==On)&&(a.stencilOp(be,Nn,On),Lt=be,ee=Nn,Xe=On)},setLocked:function(be){k=be},setClear:function(be){on!==be&&(a.clearStencil(be),on=be)},reset:function(){k=!1,Ot=null,ot=null,vt=null,Dt=null,Lt=null,ee=null,Xe=null,on=null}}}const u=new n,f=new r,h=new o,m=new WeakMap,d=new WeakMap;let g={},v={},y=new WeakMap,x=[],M=null,T=!1,S=null,_=null,U=null,L=null,D=null,B=null,z=null,F=new De(0,0,0),Y=0,w=!1,A=null,H=null,ct=null,at=null,_t=null;const pt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=rt>=2);let Et=null,O={};const it=a.getParameter(a.SCISSOR_BOX),bt=a.getParameter(a.VIEWPORT),wt=new Je().fromArray(it),q=new Je().fromArray(bt);function mt(k,Ot,ot,vt){const Dt=new Uint8Array(4),Lt=a.createTexture();a.bindTexture(k,Lt),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ee=0;ee<ot;ee++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Ot,0,a.RGBA,1,1,vt,0,a.RGBA,a.UNSIGNED_BYTE,Dt):a.texImage2D(Ot+ee,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Dt);return Lt}const xt={};xt[a.TEXTURE_2D]=mt(a.TEXTURE_2D,a.TEXTURE_2D,1),xt[a.TEXTURE_CUBE_MAP]=mt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[a.TEXTURE_2D_ARRAY]=mt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xt[a.TEXTURE_3D]=mt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),At(a.DEPTH_TEST),f.setFunc(Fs),fe(!1),pe(Tv),At(a.CULL_FACE),I(Ka);function At(k){g[k]!==!0&&(a.enable(k),g[k]=!0)}function Ct(k){g[k]!==!1&&(a.disable(k),g[k]=!1)}function Jt(k,Ot){return v[k]!==Ot?(a.bindFramebuffer(k,Ot),v[k]=Ot,k===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ot),k===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ft(k,Ot){let ot=x,vt=!1;if(k){ot=y.get(Ot),ot===void 0&&(ot=[],y.set(Ot,ot));const Dt=k.textures;if(ot.length!==Dt.length||ot[0]!==a.COLOR_ATTACHMENT0){for(let Lt=0,ee=Dt.length;Lt<ee;Lt++)ot[Lt]=a.COLOR_ATTACHMENT0+Lt;ot.length=Dt.length,vt=!0}}else ot[0]!==a.BACK&&(ot[0]=a.BACK,vt=!0);vt&&a.drawBuffers(ot)}function Te(k){return M!==k?(a.useProgram(k),M=k,!0):!1}const Ue={[wr]:a.FUNC_ADD,[gb]:a.FUNC_SUBTRACT,[_b]:a.FUNC_REVERSE_SUBTRACT};Ue[vb]=a.MIN,Ue[yb]=a.MAX;const re={[Sb]:a.ZERO,[xb]:a.ONE,[Eb]:a.SRC_COLOR,[xd]:a.SRC_ALPHA,[wb]:a.SRC_ALPHA_SATURATE,[Ab]:a.DST_COLOR,[Tb]:a.DST_ALPHA,[Mb]:a.ONE_MINUS_SRC_COLOR,[Ed]:a.ONE_MINUS_SRC_ALPHA,[Rb]:a.ONE_MINUS_DST_COLOR,[bb]:a.ONE_MINUS_DST_ALPHA,[Cb]:a.CONSTANT_COLOR,[Db]:a.ONE_MINUS_CONSTANT_COLOR,[Ub]:a.CONSTANT_ALPHA,[Lb]:a.ONE_MINUS_CONSTANT_ALPHA};function I(k,Ot,ot,vt,Dt,Lt,ee,Xe,on,be){if(k===Ka){T===!0&&(Ct(a.BLEND),T=!1);return}if(T===!1&&(At(a.BLEND),T=!0),k!==mb){if(k!==S||be!==w){if((_!==wr||D!==wr)&&(a.blendEquation(a.FUNC_ADD),_=wr,D=wr),be)switch(k){case Ps:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bv:a.blendFunc(a.ONE,a.ONE);break;case Av:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Rv:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case bv:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Av:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Rv:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}U=null,L=null,B=null,z=null,F.set(0,0,0),Y=0,S=k,w=be}return}Dt=Dt||Ot,Lt=Lt||ot,ee=ee||vt,(Ot!==_||Dt!==D)&&(a.blendEquationSeparate(Ue[Ot],Ue[Dt]),_=Ot,D=Dt),(ot!==U||vt!==L||Lt!==B||ee!==z)&&(a.blendFuncSeparate(re[ot],re[vt],re[Lt],re[ee]),U=ot,L=vt,B=Lt,z=ee),(Xe.equals(F)===!1||on!==Y)&&(a.blendColor(Xe.r,Xe.g,Xe.b,on),F.copy(Xe),Y=on),S=k,w=!1}function xn(k,Ot){k.side===da?Ct(a.CULL_FACE):At(a.CULL_FACE);let ot=k.side===Yn;Ot&&(ot=!ot),fe(ot),k.blending===Ps&&k.transparent===!1?I(Ka):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const vt=k.stencilWrite;h.setTest(vt),vt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(a.SAMPLE_ALPHA_TO_COVERAGE):Ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){A!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),A=k)}function pe(k){k!==hb?(At(a.CULL_FACE),k!==H&&(k===Tv?a.cullFace(a.BACK):k===db?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ct(a.CULL_FACE),H=k}function Wt(k){k!==ct&&(X&&a.lineWidth(k),ct=k)}function Le(k,Ot,ot){k?(At(a.POLYGON_OFFSET_FILL),(at!==Ot||_t!==ot)&&(a.polygonOffset(Ot,ot),at=Ot,_t=ot)):Ct(a.POLYGON_OFFSET_FILL)}function qt(k){k?At(a.SCISSOR_TEST):Ct(a.SCISSOR_TEST)}function N(k){k===void 0&&(k=a.TEXTURE0+pt-1),Et!==k&&(a.activeTexture(k),Et=k)}function b(k,Ot,ot){ot===void 0&&(Et===null?ot=a.TEXTURE0+pt-1:ot=Et);let vt=O[ot];vt===void 0&&(vt={type:void 0,texture:void 0},O[ot]=vt),(vt.type!==k||vt.texture!==Ot)&&(Et!==ot&&(a.activeTexture(ot),Et=ot),a.bindTexture(k,Ot||xt[k]),vt.type=k,vt.texture=Ot)}function tt(){const k=O[Et];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ht(){try{a.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{a.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{a.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{a.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{a.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{a.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{a.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{a.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{a.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{a.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(k){wt.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),wt.copy(k))}function Ht(k){q.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function se(k,Ot){let ot=d.get(Ot);ot===void 0&&(ot=new WeakMap,d.set(Ot,ot));let vt=ot.get(k);vt===void 0&&(vt=a.getUniformBlockIndex(Ot,k.name),ot.set(k,vt))}function Zt(k,Ot){const vt=d.get(Ot).get(k);m.get(Ot)!==vt&&(a.uniformBlockBinding(Ot,vt,k.__bindingPointIndex),m.set(Ot,vt))}function Ne(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Et=null,O={},v={},y=new WeakMap,x=[],M=null,T=!1,S=null,_=null,U=null,L=null,D=null,B=null,z=null,F=new De(0,0,0),Y=0,w=!1,A=null,H=null,ct=null,at=null,_t=null,wt.set(0,0,a.canvas.width,a.canvas.height),q.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:At,disable:Ct,bindFramebuffer:Jt,drawBuffers:Ft,useProgram:Te,setBlending:I,setMaterial:xn,setFlipSided:fe,setCullFace:pe,setLineWidth:Wt,setPolygonOffset:Le,setScissorTest:qt,activeTexture:N,bindTexture:b,unbindTexture:tt,compressedTexImage2D:ht,compressedTexImage3D:St,texImage2D:It,texImage3D:Qt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:ve,texStorage3D:Tt,texSubImage2D:dt,texSubImage3D:Vt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:zt,scissor:kt,viewport:Ht,reset:Ne}}function pD(a,t,n,r,o,u,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ce,g=new WeakMap;let v;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,b){return x?new OffscreenCanvas(N,b):fc("canvas")}function T(N,b,tt){let ht=1;const St=qt(N);if((St.width>tt||St.height>tt)&&(ht=tt/Math.max(St.width,St.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(ht*St.width),Vt=Math.floor(ht*St.height);v===void 0&&(v=M(dt,Vt));const Ut=b?M(dt,Vt):v;return Ut.width=dt,Ut.height=Vt,Ut.getContext("2d").drawImage(N,0,0,dt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+Vt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){a.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(N,b,tt,ht,St=!1){if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=b;if(b===a.RED&&(tt===a.FLOAT&&(dt=a.R32F),tt===a.HALF_FLOAT&&(dt=a.R16F),tt===a.UNSIGNED_BYTE&&(dt=a.R8)),b===a.RED_INTEGER&&(tt===a.UNSIGNED_BYTE&&(dt=a.R8UI),tt===a.UNSIGNED_SHORT&&(dt=a.R16UI),tt===a.UNSIGNED_INT&&(dt=a.R32UI),tt===a.BYTE&&(dt=a.R8I),tt===a.SHORT&&(dt=a.R16I),tt===a.INT&&(dt=a.R32I)),b===a.RG&&(tt===a.FLOAT&&(dt=a.RG32F),tt===a.HALF_FLOAT&&(dt=a.RG16F),tt===a.UNSIGNED_BYTE&&(dt=a.RG8)),b===a.RG_INTEGER&&(tt===a.UNSIGNED_BYTE&&(dt=a.RG8UI),tt===a.UNSIGNED_SHORT&&(dt=a.RG16UI),tt===a.UNSIGNED_INT&&(dt=a.RG32UI),tt===a.BYTE&&(dt=a.RG8I),tt===a.SHORT&&(dt=a.RG16I),tt===a.INT&&(dt=a.RG32I)),b===a.RGB_INTEGER&&(tt===a.UNSIGNED_BYTE&&(dt=a.RGB8UI),tt===a.UNSIGNED_SHORT&&(dt=a.RGB16UI),tt===a.UNSIGNED_INT&&(dt=a.RGB32UI),tt===a.BYTE&&(dt=a.RGB8I),tt===a.SHORT&&(dt=a.RGB16I),tt===a.INT&&(dt=a.RGB32I)),b===a.RGBA_INTEGER&&(tt===a.UNSIGNED_BYTE&&(dt=a.RGBA8UI),tt===a.UNSIGNED_SHORT&&(dt=a.RGBA16UI),tt===a.UNSIGNED_INT&&(dt=a.RGBA32UI),tt===a.BYTE&&(dt=a.RGBA8I),tt===a.SHORT&&(dt=a.RGBA16I),tt===a.INT&&(dt=a.RGBA32I)),b===a.RGB&&tt===a.UNSIGNED_INT_5_9_9_9_REV&&(dt=a.RGB9_E5),b===a.RGBA){const Vt=St?uc:Ce.getTransfer(ht);tt===a.FLOAT&&(dt=a.RGBA32F),tt===a.HALF_FLOAT&&(dt=a.RGBA16F),tt===a.UNSIGNED_BYTE&&(dt=Vt===Fe?a.SRGB8_ALPHA8:a.RGBA8),tt===a.UNSIGNED_SHORT_4_4_4_4&&(dt=a.RGBA4),tt===a.UNSIGNED_SHORT_5_5_5_1&&(dt=a.RGB5_A1)}return(dt===a.R16F||dt===a.R32F||dt===a.RG16F||dt===a.RG32F||dt===a.RGBA16F||dt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(N,b){let tt;return N?b===null||b===Pr||b===nl?tt=a.DEPTH24_STENCIL8:b===pa?tt=a.DEPTH32F_STENCIL8:b===el&&(tt=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pr||b===nl?tt=a.DEPTH_COMPONENT24:b===pa?tt=a.DEPTH_COMPONENT32F:b===el&&(tt=a.DEPTH_COMPONENT16),tt}function B(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==wi&&N.minFilter!==zi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),Y(b),b.isVideoTexture&&g.delete(b)}function F(N){const b=N.target;b.removeEventListener("dispose",F),A(b)}function Y(N){const b=r.get(N);if(b.__webglInit===void 0)return;const tt=N.source,ht=y.get(tt);if(ht){const St=ht[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(N),Object.keys(ht).length===0&&y.delete(tt)}r.remove(N)}function w(N){const b=r.get(N);a.deleteTexture(b.__webglTexture);const tt=N.source,ht=y.get(tt);delete ht[b.__cacheKey],f.memory.textures--}function A(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let St=0;St<b.__webglFramebuffer[ht].length;St++)a.deleteFramebuffer(b.__webglFramebuffer[ht][St]);else a.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)a.deleteFramebuffer(b.__webglFramebuffer[ht]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=N.textures;for(let ht=0,St=tt.length;ht<St;ht++){const dt=r.get(tt[ht]);dt.__webglTexture&&(a.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(tt[ht])}r.remove(N)}let H=0;function ct(){H=0}function at(){const N=H;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function _t(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function pt(N,b){const tt=r.get(N);if(N.isVideoTexture&&Wt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(tt,N,b);return}}n.bindTexture(a.TEXTURE_2D,tt.__webglTexture,a.TEXTURE0+b)}function X(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){q(tt,N,b);return}n.bindTexture(a.TEXTURE_2D_ARRAY,tt.__webglTexture,a.TEXTURE0+b)}function rt(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){q(tt,N,b);return}n.bindTexture(a.TEXTURE_3D,tt.__webglTexture,a.TEXTURE0+b)}function Z(N,b){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){mt(tt,N,b);return}n.bindTexture(a.TEXTURE_CUBE_MAP,tt.__webglTexture,a.TEXTURE0+b)}const Et={[Ld]:a.REPEAT,[Ur]:a.CLAMP_TO_EDGE,[Nd]:a.MIRRORED_REPEAT},O={[wi]:a.NEAREST,[Vb]:a.NEAREST_MIPMAP_NEAREST,[Mu]:a.NEAREST_MIPMAP_LINEAR,[zi]:a.LINEAR,[Bh]:a.LINEAR_MIPMAP_NEAREST,[Lr]:a.LINEAR_MIPMAP_LINEAR},it={[qb]:a.NEVER,[Jb]:a.ALWAYS,[Yb]:a.LESS,[Ry]:a.LEQUAL,[jb]:a.EQUAL,[Qb]:a.GEQUAL,[Zb]:a.GREATER,[Kb]:a.NOTEQUAL};function bt(N,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===zi||b.magFilter===Bh||b.magFilter===Mu||b.magFilter===Lr||b.minFilter===zi||b.minFilter===Bh||b.minFilter===Mu||b.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,Et[b.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,Et[b.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,Et[b.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,O[b.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wi||b.minFilter!==Mu&&b.minFilter!==Lr||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");a.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function wt(N,b){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const ht=b.source;let St=y.get(ht);St===void 0&&(St={},y.set(ht,St));const dt=_t(b);if(dt!==N.__cacheKey){St[dt]===void 0&&(St[dt]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),St[dt].usedTimes++;const Vt=St[N.__cacheKey];Vt!==void 0&&(St[N.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(b)),N.__cacheKey=dt,N.__webglTexture=St[dt].texture}return tt}function q(N,b,tt){let ht=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=a.TEXTURE_3D);const St=wt(N,b),dt=b.source;n.bindTexture(ht,N.__webglTexture,a.TEXTURE0+tt);const Vt=r.get(dt);if(dt.version!==Vt.__version||St===!0){n.activeTexture(a.TEXTURE0+tt);const Ut=Ce.getPrimaries(Ce.workingColorSpace),zt=b.colorSpace===Za?null:Ce.getPrimaries(b.colorSpace),ve=b.colorSpace===Za||Ut===zt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Tt=T(b.image,!1,o.maxTextureSize);Tt=Le(b,Tt);const It=u.convert(b.format,b.colorSpace),Qt=u.convert(b.type);let kt=L(b.internalFormat,It,Qt,b.colorSpace,b.isVideoTexture);bt(ht,b);let Ht;const se=b.mipmaps,Zt=b.isVideoTexture!==!0,Ne=Vt.__version===void 0||St===!0,k=dt.dataReady,Ot=B(b,Tt);if(b.isDepthTexture)kt=D(b.format===al,b.type),Ne&&(Zt?n.texStorage2D(a.TEXTURE_2D,1,kt,Tt.width,Tt.height):n.texImage2D(a.TEXTURE_2D,0,kt,Tt.width,Tt.height,0,It,Qt,null));else if(b.isDataTexture)if(se.length>0){Zt&&Ne&&n.texStorage2D(a.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let ot=0,vt=se.length;ot<vt;ot++)Ht=se[ot],Zt?k&&n.texSubImage2D(a.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,It,Qt,Ht.data):n.texImage2D(a.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,It,Qt,Ht.data);b.generateMipmaps=!1}else Zt?(Ne&&n.texStorage2D(a.TEXTURE_2D,Ot,kt,Tt.width,Tt.height),k&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,Qt,Tt.data)):n.texImage2D(a.TEXTURE_2D,0,kt,Tt.width,Tt.height,0,It,Qt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Zt&&Ne&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ot,kt,se[0].width,se[0].height,Tt.depth);for(let ot=0,vt=se.length;ot<vt;ot++)if(Ht=se[ot],b.format!==Ai)if(It!==null)if(Zt){if(k)if(b.layerUpdates.size>0){const Dt=Qv(Ht.width,Ht.height,b.format,b.type);for(const Lt of b.layerUpdates){const ee=Ht.data.subarray(Lt*Dt/Ht.data.BYTES_PER_ELEMENT,(Lt+1)*Dt/Ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ot,0,0,Lt,Ht.width,Ht.height,1,It,ee)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,Tt.depth,It,Ht.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ot,kt,Ht.width,Ht.height,Tt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,Tt.depth,It,Qt,Ht.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ot,kt,Ht.width,Ht.height,Tt.depth,0,It,Qt,Ht.data)}else{Zt&&Ne&&n.texStorage2D(a.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let ot=0,vt=se.length;ot<vt;ot++)Ht=se[ot],b.format!==Ai?It!==null?Zt?k&&n.compressedTexSubImage2D(a.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,It,Ht.data):n.compressedTexImage2D(a.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&n.texSubImage2D(a.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,It,Qt,Ht.data):n.texImage2D(a.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,It,Qt,Ht.data)}else if(b.isDataArrayTexture)if(Zt){if(Ne&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ot,kt,Tt.width,Tt.height,Tt.depth),k)if(b.layerUpdates.size>0){const ot=Qv(Tt.width,Tt.height,b.format,b.type);for(const vt of b.layerUpdates){const Dt=Tt.data.subarray(vt*ot/Tt.data.BYTES_PER_ELEMENT,(vt+1)*ot/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,vt,Tt.width,Tt.height,1,It,Qt,Dt)}b.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Qt,Tt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,kt,Tt.width,Tt.height,Tt.depth,0,It,Qt,Tt.data);else if(b.isData3DTexture)Zt?(Ne&&n.texStorage3D(a.TEXTURE_3D,Ot,kt,Tt.width,Tt.height,Tt.depth),k&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Qt,Tt.data)):n.texImage3D(a.TEXTURE_3D,0,kt,Tt.width,Tt.height,Tt.depth,0,It,Qt,Tt.data);else if(b.isFramebufferTexture){if(Ne)if(Zt)n.texStorage2D(a.TEXTURE_2D,Ot,kt,Tt.width,Tt.height);else{let ot=Tt.width,vt=Tt.height;for(let Dt=0;Dt<Ot;Dt++)n.texImage2D(a.TEXTURE_2D,Dt,kt,ot,vt,0,It,Qt,null),ot>>=1,vt>>=1}}else if(se.length>0){if(Zt&&Ne){const ot=qt(se[0]);n.texStorage2D(a.TEXTURE_2D,Ot,kt,ot.width,ot.height)}for(let ot=0,vt=se.length;ot<vt;ot++)Ht=se[ot],Zt?k&&n.texSubImage2D(a.TEXTURE_2D,ot,0,0,It,Qt,Ht):n.texImage2D(a.TEXTURE_2D,ot,kt,It,Qt,Ht);b.generateMipmaps=!1}else if(Zt){if(Ne){const ot=qt(Tt);n.texStorage2D(a.TEXTURE_2D,Ot,kt,ot.width,ot.height)}k&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,It,Qt,Tt)}else n.texImage2D(a.TEXTURE_2D,0,kt,It,Qt,Tt);S(b)&&_(ht),Vt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function mt(N,b,tt){if(b.image.length!==6)return;const ht=wt(N,b),St=b.source;n.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+tt);const dt=r.get(St);if(St.version!==dt.__version||ht===!0){n.activeTexture(a.TEXTURE0+tt);const Vt=Ce.getPrimaries(Ce.workingColorSpace),Ut=b.colorSpace===Za?null:Ce.getPrimaries(b.colorSpace),zt=b.colorSpace===Za||Vt===Ut?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const ve=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!ve&&!Tt?It[vt]=T(b.image[vt],!0,o.maxCubemapSize):It[vt]=Tt?b.image[vt].image:b.image[vt],It[vt]=Le(b,It[vt]);const Qt=It[0],kt=u.convert(b.format,b.colorSpace),Ht=u.convert(b.type),se=L(b.internalFormat,kt,Ht,b.colorSpace),Zt=b.isVideoTexture!==!0,Ne=dt.__version===void 0||ht===!0,k=St.dataReady;let Ot=B(b,Qt);bt(a.TEXTURE_CUBE_MAP,b);let ot;if(ve){Zt&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,se,Qt.width,Qt.height);for(let vt=0;vt<6;vt++){ot=It[vt].mipmaps;for(let Dt=0;Dt<ot.length;Dt++){const Lt=ot[Dt];b.format!==Ai?kt!==null?Zt?k&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Lt.width,Lt.height,kt,Lt.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,se,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Lt.width,Lt.height,kt,Ht,Lt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,se,Lt.width,Lt.height,0,kt,Ht,Lt.data)}}}else{if(ot=b.mipmaps,Zt&&Ne){ot.length>0&&Ot++;const vt=qt(It[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,se,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Tt){Zt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,kt,Ht,It[vt].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,It[vt].width,It[vt].height,0,kt,Ht,It[vt].data);for(let Dt=0;Dt<ot.length;Dt++){const ee=ot[Dt].image[vt].image;Zt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,ee.width,ee.height,kt,Ht,ee.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,se,ee.width,ee.height,0,kt,Ht,ee.data)}}else{Zt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ht,It[vt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,se,kt,Ht,It[vt]);for(let Dt=0;Dt<ot.length;Dt++){const Lt=ot[Dt];Zt?k&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,kt,Ht,Lt.image[vt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,se,kt,Ht,Lt.image[vt])}}}S(b)&&_(a.TEXTURE_CUBE_MAP),dt.__version=St.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function xt(N,b,tt,ht,St,dt){const Vt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),zt=L(tt.internalFormat,Vt,Ut,tt.colorSpace),ve=r.get(b),Tt=r.get(tt);if(Tt.__renderTarget=b,!ve.__hasExternalTextures){const It=Math.max(1,b.width>>dt),Qt=Math.max(1,b.height>>dt);St===a.TEXTURE_3D||St===a.TEXTURE_2D_ARRAY?n.texImage3D(St,dt,zt,It,Qt,b.depth,0,Vt,Ut,null):n.texImage2D(St,dt,zt,It,Qt,0,Vt,Ut,null)}n.bindFramebuffer(a.FRAMEBUFFER,N),pe(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ht,St,Tt.__webglTexture,0,fe(b)):(St===a.TEXTURE_2D||St>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ht,St,Tt.__webglTexture,dt),n.bindFramebuffer(a.FRAMEBUFFER,null)}function At(N,b,tt){if(a.bindRenderbuffer(a.RENDERBUFFER,N),b.depthBuffer){const ht=b.depthTexture,St=ht&&ht.isDepthTexture?ht.type:null,dt=D(b.stencilBuffer,St),Vt=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ut=fe(b);pe(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut,dt,b.width,b.height):tt?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut,dt,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,dt,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Vt,a.RENDERBUFFER,N)}else{const ht=b.textures;for(let St=0;St<ht.length;St++){const dt=ht[St],Vt=u.convert(dt.format,dt.colorSpace),Ut=u.convert(dt.type),zt=L(dt.internalFormat,Vt,Ut,dt.colorSpace),ve=fe(b);tt&&pe(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,zt,b.width,b.height):pe(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ve,zt,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,zt,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ct(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt(b.depthTexture,0);const St=ht.__webglTexture,dt=fe(b);if(b.depthTexture.format===il)pe(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,St,0,dt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,St,0);else if(b.depthTexture.format===al)pe(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,St,0,dt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Jt(N){const b=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",St)};ht.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=ht}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,N)}else if(tt){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=a.createRenderbuffer(),At(b.__webglDepthbuffer[ht],N,!1);else{const St=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[ht];a.bindRenderbuffer(a.RENDERBUFFER,dt),a.framebufferRenderbuffer(a.FRAMEBUFFER,St,a.RENDERBUFFER,dt)}}else if(n.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),At(b.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,St=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,St),a.framebufferRenderbuffer(a.FRAMEBUFFER,ht,a.RENDERBUFFER,St)}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ft(N,b,tt){const ht=r.get(N);b!==void 0&&xt(ht.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),tt!==void 0&&Jt(N)}function Te(N){const b=N.texture,tt=r.get(N),ht=r.get(b);N.addEventListener("dispose",F);const St=N.textures,dt=N.isWebGLCubeRenderTarget===!0,Vt=St.length>1;if(Vt||(ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture()),ht.__version=b.version,f.memory.textures++),dt){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let zt=0;zt<b.mipmaps.length;zt++)tt.__webglFramebuffer[Ut][zt]=a.createFramebuffer()}else tt.__webglFramebuffer[Ut]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=a.createFramebuffer()}else tt.__webglFramebuffer=a.createFramebuffer();if(Vt)for(let Ut=0,zt=St.length;Ut<zt;Ut++){const ve=r.get(St[Ut]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),f.memory.textures++)}if(N.samples>0&&pe(N)===!1){tt.__webglMultisampledFramebuffer=a.createFramebuffer(),tt.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const zt=St[Ut];tt.__webglColorRenderbuffer[Ut]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const ve=u.convert(zt.format,zt.colorSpace),Tt=u.convert(zt.type),It=L(zt.internalFormat,ve,Tt,zt.colorSpace,N.isXRRenderTarget===!0),Qt=fe(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Qt,It,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ut,a.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=a.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(dt){n.bindTexture(a.TEXTURE_CUBE_MAP,ht.__webglTexture),bt(a.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)xt(tt.__webglFramebuffer[Ut][zt],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,zt);else xt(tt.__webglFramebuffer[Ut],N,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(b)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Vt){for(let Ut=0,zt=St.length;Ut<zt;Ut++){const ve=St[Ut],Tt=r.get(ve);n.bindTexture(a.TEXTURE_2D,Tt.__webglTexture),bt(a.TEXTURE_2D,ve),xt(tt.__webglFramebuffer,N,ve,a.COLOR_ATTACHMENT0+Ut,a.TEXTURE_2D,0),S(ve)&&_(a.TEXTURE_2D)}n.unbindTexture()}else{let Ut=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ut,ht.__webglTexture),bt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)xt(tt.__webglFramebuffer[zt],N,b,a.COLOR_ATTACHMENT0,Ut,zt);else xt(tt.__webglFramebuffer,N,b,a.COLOR_ATTACHMENT0,Ut,0);S(b)&&_(Ut),n.unbindTexture()}N.depthBuffer&&Jt(N)}function Ue(N){const b=N.textures;for(let tt=0,ht=b.length;tt<ht;tt++){const St=b[tt];if(S(St)){const dt=U(N),Vt=r.get(St).__webglTexture;n.bindTexture(dt,Vt),_(dt),n.unbindTexture()}}}const re=[],I=[];function xn(N){if(N.samples>0){if(pe(N)===!1){const b=N.textures,tt=N.width,ht=N.height;let St=a.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Vt=r.get(N),Ut=b.length>1;if(Ut)for(let zt=0;zt<b.length;zt++)n.bindFramebuffer(a.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+zt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Vt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+zt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=a.STENCIL_BUFFER_BIT)),Ut){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Vt.__webglColorRenderbuffer[zt]);const ve=r.get(b[zt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ve,0)}a.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,St,a.NEAREST),m===!0&&(re.length=0,I.length=0,re.push(a.COLOR_ATTACHMENT0+zt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(dt),I.push(dt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,I)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ut)for(let zt=0;zt<b.length;zt++){n.bindFramebuffer(a.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+zt,a.RENDERBUFFER,Vt.__webglColorRenderbuffer[zt]);const ve=r.get(b[zt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Vt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+zt,a.TEXTURE_2D,ve,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function fe(N){return Math.min(o.maxSamples,N.samples)}function pe(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Le(N,b){const tt=N.colorSpace,ht=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Hs&&tt!==Za&&(Ce.getTransfer(tt)===Fe?(ht!==Ai||St!==ya)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function qt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=at,this.resetTextureUnits=ct,this.setTexture2D=pt,this.setTexture2DArray=X,this.setTexture3D=rt,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe}function mD(a,t){function n(r,o=Za){let u;const f=Ce.getTransfer(o);if(r===ya)return a.UNSIGNED_BYTE;if(r===Sp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===vy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===gy)return a.BYTE;if(r===_y)return a.SHORT;if(r===el)return a.UNSIGNED_SHORT;if(r===yp)return a.INT;if(r===Pr)return a.UNSIGNED_INT;if(r===pa)return a.FLOAT;if(r===cl)return a.HALF_FLOAT;if(r===yy)return a.ALPHA;if(r===Sy)return a.RGB;if(r===Ai)return a.RGBA;if(r===xy)return a.LUMINANCE;if(r===Ey)return a.LUMINANCE_ALPHA;if(r===il)return a.DEPTH_COMPONENT;if(r===al)return a.DEPTH_STENCIL;if(r===My)return a.RED;if(r===Ep)return a.RED_INTEGER;if(r===Ty)return a.RG;if(r===Mp)return a.RG_INTEGER;if(r===Tp)return a.RGBA_INTEGER;if(r===Ju||r===$u||r===tc||r===ec)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ju)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ju)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$u)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Pd||r===Bd||r===Fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===Id||r===Hd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zd||r===Id)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===tp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Gd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tp)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nc||r===ep||r===np)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===nc)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ep)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===np)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===by||r===ip||r===ap||r===rp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===nc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ip)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ap)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===nl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const gD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_D=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new jn,u=t.properties.get(o);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new $a({vertexShader:gD,fragmentShader:_D,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ri(new ml(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yD extends Ir{constructor(t,n){super();const r=this;let o=null,u=1,f=null,h="local-floor",m=1,d=null,g=null,v=null,y=null,x=null,M=null;const T=new vD,S=n.getContextAttributes();let _=null,U=null;const L=[],D=[],B=new ce;let z=null;const F=new gi;F.viewport=new Je;const Y=new gi;Y.viewport=new Je;const w=[F,Y],A=new IA;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let mt=L[q];return mt===void 0&&(mt=new id,L[q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(q){let mt=L[q];return mt===void 0&&(mt=new id,L[q]=mt),mt.getGripSpace()},this.getHand=function(q){let mt=L[q];return mt===void 0&&(mt=new id,L[q]=mt),mt.getHandSpace()};function at(q){const mt=D.indexOf(q.inputSource);if(mt===-1)return;const xt=L[mt];xt!==void 0&&(xt.update(q.inputSource,q.frame,d||f),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function _t(){o.removeEventListener("select",at),o.removeEventListener("selectstart",at),o.removeEventListener("selectend",at),o.removeEventListener("squeeze",at),o.removeEventListener("squeezestart",at),o.removeEventListener("squeezeend",at),o.removeEventListener("end",_t),o.removeEventListener("inputsourceschange",pt);for(let q=0;q<L.length;q++){const mt=D[q];mt!==null&&(D[q]=null,L[q].disconnect(mt))}H=null,ct=null,T.reset(),t.setRenderTarget(_),x=null,y=null,v=null,o=null,U=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(_=t.getRenderTarget(),o.addEventListener("select",at),o.addEventListener("selectstart",at),o.addEventListener("selectend",at),o.addEventListener("squeeze",at),o.addEventListener("squeezestart",at),o.addEventListener("squeezeend",at),o.addEventListener("end",_t),o.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,At=null,Ct=null;S.depth&&(Ct=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=S.stencil?al:il,At=S.stencil?nl:Pr);const Jt={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(o,n),y=v.createProjectionLayer(Jt),o.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new Br(y.textureWidth,y.textureHeight,{format:Ai,type:ya,depthTexture:new zy(y.textureWidth,y.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,xt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Br(x.framebufferWidth,x.framebufferHeight,{format:Ai,type:ya,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await o.requestReferenceSpace(h),wt.setContext(o),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pt(q){for(let mt=0;mt<q.removed.length;mt++){const xt=q.removed[mt],At=D.indexOf(xt);At>=0&&(D[At]=null,L[At].disconnect(xt))}for(let mt=0;mt<q.added.length;mt++){const xt=q.added[mt];let At=D.indexOf(xt);if(At===-1){for(let Jt=0;Jt<L.length;Jt++)if(Jt>=D.length){D.push(xt),At=Jt;break}else if(D[Jt]===null){D[Jt]=xt,At=Jt;break}if(At===-1)break}const Ct=L[At];Ct&&Ct.connect(xt)}}const X=new $,rt=new $;function Z(q,mt,xt){X.setFromMatrixPosition(mt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const At=X.distanceTo(rt),Ct=mt.projectionMatrix.elements,Jt=xt.projectionMatrix.elements,Ft=Ct[14]/(Ct[10]-1),Te=Ct[14]/(Ct[10]+1),Ue=(Ct[9]+1)/Ct[5],re=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],xn=(Jt[8]+1)/Jt[0],fe=Ft*I,pe=Ft*xn,Wt=At/(-I+xn),Le=Wt*-I;if(mt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const qt=Ft+Wt,N=Te+Wt,b=fe-Le,tt=pe+(At-Le),ht=Ue*Te/N*qt,St=re*Te/N*qt;q.projectionMatrix.makePerspective(b,tt,ht,St,qt,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Et(q,mt){mt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(mt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let mt=q.near,xt=q.far;T.texture!==null&&(T.depthNear>0&&(mt=T.depthNear),T.depthFar>0&&(xt=T.depthFar)),A.near=Y.near=F.near=mt,A.far=Y.far=F.far=xt,(H!==A.near||ct!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,ct=A.far),F.layers.mask=q.layers.mask|2,Y.layers.mask=q.layers.mask|4,A.layers.mask=F.layers.mask|Y.layers.mask;const At=q.parent,Ct=A.cameras;Et(A,At);for(let Jt=0;Jt<Ct.length;Jt++)Et(Ct[Jt],At);Ct.length===2?Z(A,F,Y):A.projectionMatrix.copy(F.projectionMatrix),O(q,A,At)};function O(q,mt,xt){xt===null?q.matrix.copy(mt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(mt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=sp*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(q){m=q,y!==null&&(y.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let it=null;function bt(q,mt){if(g=mt.getViewerPose(d||f),M=mt,g!==null){const xt=g.views;x!==null&&(t.setRenderTargetFramebuffer(U,x.framebuffer),t.setRenderTarget(U));let At=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,At=!0);for(let Ft=0;Ft<xt.length;Ft++){const Te=xt[Ft];let Ue=null;if(x!==null)Ue=x.getViewport(Te);else{const I=v.getViewSubImage(y,Te);Ue=I.viewport,Ft===0&&(t.setRenderTargetTextures(U,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(U))}let re=w[Ft];re===void 0&&(re=new gi,re.layers.enable(Ft),re.viewport=new Je,w[Ft]=re),re.matrix.fromArray(Te.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Te.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ft===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),At===!0&&A.cameras.push(re)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ft=v.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&T.init(t,Ft,o.renderState)}}for(let xt=0;xt<L.length;xt++){const At=D[xt],Ct=L[xt];At!==null&&Ct!==void 0&&Ct.update(At,mt,d||f)}it&&it(q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),M=null}const wt=new Gy;wt.setAnimationLoop(bt),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const Ar=new Vi,SD=new $e;function xD(a,t){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Py(a)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,U,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&x(S,_,D)):_.isMeshMatcapMaterial?(u(S,_),M(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),T(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,U,L):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Yn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Yn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=t.get(_),L=U.envMap,D=U.envMapRotation;L&&(S.envMap.value=L,Ar.copy(D),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(SD.makeRotationFromEuler(Ar)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,U,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=L*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const U=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ED(a,t,n,r){let o={},u={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;r.uniformBlockBinding(U,D)}function d(U,L){let D=o[U.id];D===void 0&&(M(U),D=g(U),o[U.id]=D,U.addEventListener("dispose",S));const B=L.program;r.updateUBOMapping(U,B);const z=t.render.frame;u[U.id]!==z&&(y(U),u[U.id]=z)}function g(U){const L=v();U.__bindingPointIndex=L;const D=a.createBuffer(),B=U.__size,z=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,B,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,D),D}function v(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=o[U.id],D=U.uniforms,B=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let z=0,F=D.length;z<F;z++){const Y=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,A=Y.length;w<A;w++){const H=Y[w];if(x(H,z,w,B)===!0){const ct=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let _t=0;for(let pt=0;pt<at.length;pt++){const X=at[pt],rt=T(X);typeof X=="number"||typeof X=="boolean"?(H.__data[0]=X,a.bufferSubData(a.UNIFORM_BUFFER,ct+_t,H.__data)):X.isMatrix3?(H.__data[0]=X.elements[0],H.__data[1]=X.elements[1],H.__data[2]=X.elements[2],H.__data[3]=0,H.__data[4]=X.elements[3],H.__data[5]=X.elements[4],H.__data[6]=X.elements[5],H.__data[7]=0,H.__data[8]=X.elements[6],H.__data[9]=X.elements[7],H.__data[10]=X.elements[8],H.__data[11]=0):(X.toArray(H.__data,_t),_t+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ct,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(U,L,D,B){const z=U.value,F=L+"_"+D;if(B[F]===void 0)return typeof z=="number"||typeof z=="boolean"?B[F]=z:B[F]=z.clone(),!0;{const Y=B[F];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return B[F]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function M(U){const L=U.uniforms;let D=0;const B=16;for(let F=0,Y=L.length;F<Y;F++){const w=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,H=w.length;A<H;A++){const ct=w[A],at=Array.isArray(ct.value)?ct.value:[ct.value];for(let _t=0,pt=at.length;_t<pt;_t++){const X=at[_t],rt=T(X),Z=D%B,Et=Z%rt.boundary,O=Z+Et;D+=Et,O!==0&&B-O<rt.storage&&(D+=B-O),ct.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=rt.storage}}}const z=D%B;return z>0&&(D+=B-z),U.__size=D,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function _(){for(const U in o)a.deleteBuffer(o[U]);f=[],o={},u={}}return{bind:m,update:d,dispose:_}}class MD{constructor(t={}){const{canvas:n=eA(),context:r=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=mi;let z=0,F=0,Y=null,w=-1,A=null;const H=new Je,ct=new Je;let at=null;const _t=new De(0);let pt=0,X=n.width,rt=n.height,Z=1,Et=null,O=null;const it=new Je(0,0,X,rt),bt=new Je(0,0,X,rt);let wt=!1;const q=new wp;let mt=!1,xt=!1;const At=new $e,Ct=new $e,Jt=new $,Ft=new Je,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function re(){return Y===null?Z:1}let I=r;function xn(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const W="webgl2";if(I=xn(W,C),I===null)throw xn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,pe,Wt,Le,qt,N,b,tt,ht,St,dt,Vt,Ut,zt,ve,Tt,It,Qt,kt,Ht,se,Zt,Ne,k;function Ot(){fe=new Nw(I),fe.init(),Zt=new mD(I,fe),pe=new Aw(I,fe,t,Zt),Wt=new dD(I,fe),pe.reverseDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),Le=new Bw(I),qt=new tD,N=new pD(I,fe,Wt,qt,pe,Zt,Le),b=new ww(D),tt=new Lw(D),ht=new VA(I),Ne=new Tw(I,ht),St=new Ow(I,ht,Le,Ne),dt=new zw(I,St,ht,Le),kt=new Fw(I,pe,N),Tt=new Rw(qt),Vt=new $C(D,b,tt,fe,pe,Ne,Tt),Ut=new xD(D,qt),zt=new nD,ve=new lD(fe),Qt=new Mw(D,b,tt,Wt,dt,x,m),It=new fD(D,dt,pe),k=new ED(I,Le,pe,Wt),Ht=new bw(I,fe,Le),se=new Pw(I,fe,Le),Le.programs=Vt.programs,D.capabilities=pe,D.extensions=fe,D.properties=qt,D.renderLists=zt,D.shadowMap=It,D.state=Wt,D.info=Le}Ot();const ot=new yD(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(X,rt,!1))},this.getSize=function(C){return C.set(X,rt)},this.setSize=function(C,W,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,rt=W,n.width=Math.floor(C*Z),n.height=Math.floor(W*Z),et===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(X*Z,rt*Z).floor()},this.setDrawingBufferSize=function(C,W,et){X=C,rt=W,Z=et,n.width=Math.floor(C*et),n.height=Math.floor(W*et),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,W,et,Q){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,W,et,Q),Wt.viewport(H.copy(it).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(bt)},this.setScissor=function(C,W,et,Q){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,W,et,Q),Wt.scissor(ct.copy(bt).multiplyScalar(Z).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){Wt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){Et=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,et=!0){let Q=0;if(C){let j=!1;if(Y!==null){const Mt=Y.texture.format;j=Mt===Tp||Mt===Mp||Mt===Ep}if(j){const Mt=Y.texture.type,Rt=Mt===ya||Mt===Pr||Mt===el||Mt===nl||Mt===Sp||Mt===xp,Bt=Qt.getClearColor(),Pt=Qt.getClearAlpha(),ne=Bt.r,te=Bt.g,jt=Bt.b;Rt?(M[0]=ne,M[1]=te,M[2]=jt,M[3]=Pt,I.clearBufferuiv(I.COLOR,0,M)):(T[0]=ne,T[1]=te,T[2]=jt,T[3]=Pt,I.clearBufferiv(I.COLOR,0,T))}else Q|=I.COLOR_BUFFER_BIT}W&&(Q|=I.DEPTH_BUFFER_BIT),et&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),Qt.dispose(),zt.dispose(),ve.dispose(),qt.dispose(),b.dispose(),tt.dispose(),dt.dispose(),Ne.dispose(),k.dispose(),Vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",gl),ot.removeEventListener("sessionend",Ys),Di.stop()};function vt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Le.autoReset,W=It.enabled,et=It.autoUpdate,Q=It.needsUpdate,j=It.type;Ot(),Le.autoReset=C,It.enabled=W,It.autoUpdate=et,It.needsUpdate=Q,It.type=j}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){const W=C.target;W.removeEventListener("dispose",ee),Xe(W)}function Xe(C){on(C),qt.remove(C)}function on(C){const W=qt.get(C).programs;W!==void 0&&(W.forEach(function(et){Vt.releaseProgram(et)}),C.isShaderMaterial&&Vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,et,Q,j,Mt){W===null&&(W=Te);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Bt=Ec(C,W,et,Q,j);Wt.setMaterial(Q,Rt);let Pt=et.index,ne=1;if(Q.wireframe===!0){if(Pt=St.getWireframeAttribute(et),Pt===void 0)return;ne=2}const te=et.drawRange,jt=et.attributes.position;let ye=te.start*ne,Se=(te.start+te.count)*ne;Mt!==null&&(ye=Math.max(ye,Mt.start*ne),Se=Math.min(Se,(Mt.start+Mt.count)*ne)),Pt!==null?(ye=Math.max(ye,0),Se=Math.min(Se,Pt.count)):jt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,jt.count));const ke=Se-ye;if(ke<0||ke===1/0)return;Ne.setup(j,Q,Bt,et,Pt);let Ae,ie=Ht;if(Pt!==null&&(Ae=ht.get(Pt),ie=se,ie.setIndex(Ae)),j.isMesh)Q.wireframe===!0?(Wt.setLineWidth(Q.wireframeLinewidth*re()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(j.isLine){let Kt=Q.linewidth;Kt===void 0&&(Kt=1),Wt.setLineWidth(Kt*re()),j.isLineSegments?ie.setMode(I.LINES):j.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else j.isPoints?ie.setMode(I.POINTS):j.isSprite&&ie.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ac("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))ie.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,cn=j._multiDrawCounts,xe=j._multiDrawCount,Hn=Pt?ht.get(Pt).bytesPerElement:1,_i=qt.get(Q).currentProgram.getUniforms();for(let Pn=0;Pn<xe;Pn++)_i.setValue(I,"_gl_DrawID",Pn),ie.render(Kt[Pn]/Hn,cn[Pn])}else if(j.isInstancedMesh)ie.renderInstances(ye,ke,j.count);else if(et.isInstancedBufferGeometry){const Kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,cn=Math.min(et.instanceCount,Kt);ie.renderInstances(ye,ke,cn)}else ie.render(ye,ke)};function be(C,W,et){C.transparent===!0&&C.side===da&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,un(C,W,et),C.side=Ja,C.needsUpdate=!0,un(C,W,et),C.side=da):un(C,W,et)}this.compile=function(C,W,et=null){et===null&&(et=C),_=ve.get(et),_.init(W),L.push(_),et.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),C!==et&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const Bt=Mt[Rt];be(Bt,et,j),Q.add(Bt)}else be(Mt,et,j),Q.add(Mt)}),_=L.pop(),Q},this.compileAsync=function(C,W,et=null){const Q=this.compile(C,W,et);return new Promise(j=>{function Mt(){if(Q.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){j(C);return}setTimeout(Mt,10)}fe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Nn=null;function On(C){Nn&&Nn(C)}function gl(){Di.stop()}function Ys(){Di.start()}const Di=new Gy;Di.setAnimationLoop(On),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Nn=C,ot.setAnimationLoop(C),C===null?Di.stop():Di.start()},ot.addEventListener("sessionstart",gl),ot.addEventListener("sessionend",Ys),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,Y),_=ve.get(C,L.length),_.init(W),L.push(_),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,mt=Tt.init(this.clippingPlanes,xt),S=zt.get(C,U.length),S.init(),U.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&Hr(Mt,W,-1/0,D.sortObjects)}Hr(C,W,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Et,O),Ue=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ue&&Qt.addToRenderList(S,C),this.info.render.frame++,mt===!0&&Tt.beginShadows();const et=_.state.shadowsArray;It.render(et,C,W),mt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,j=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(j.length>0)for(let Rt=0,Bt=Mt.length;Rt<Bt;Rt++){const Pt=Mt[Rt];_l(Q,j,C,Pt)}Ue&&Qt.render(C);for(let Rt=0,Bt=Mt.length;Rt<Bt;Rt++){const Pt=Mt[Rt];js(S,C,Pt,Pt.viewport)}}else j.length>0&&_l(Q,j,C,W),Ue&&Qt.render(C),js(S,C,W);Y!==null&&F===0&&(N.updateMultisampleRenderTarget(Y),N.updateRenderTargetMipmap(Y)),C.isScene===!0&&C.onAfterRender(D,C,W),Ne.resetDefaultState(),w=-1,A=null,L.pop(),L.length>0?(_=L[L.length-1],mt===!0&&Tt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Hr(C,W,et,Q){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)et=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){Q&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Rt=dt.update(C),Bt=C.material;Bt.visible&&S.push(C,Rt,Bt,et,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Rt=dt.update(C),Bt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ft.copy(Rt.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Bt)){const Pt=Rt.groups;for(let ne=0,te=Pt.length;ne<te;ne++){const jt=Pt[ne],ye=Bt[jt.materialIndex];ye&&ye.visible&&S.push(C,Rt,ye,et,Ft.z,jt)}}else Bt.visible&&S.push(C,Rt,Bt,et,Ft.z,null)}}const Mt=C.children;for(let Rt=0,Bt=Mt.length;Rt<Bt;Rt++)Hr(Mt[Rt],W,et,Q)}function js(C,W,et,Q){const j=C.opaque,Mt=C.transmissive,Rt=C.transparent;_.setupLightsView(et),mt===!0&&Tt.setGlobalState(D.clippingPlanes,et),Q&&Wt.viewport(H.copy(Q)),j.length>0&&Zn(j,W,et),Mt.length>0&&Zn(Mt,W,et),Rt.length>0&&Zn(Rt,W,et),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function _l(C,W,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Br(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?cl:ya,minFilter:Lr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Mt=_.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||H;Mt.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(_t),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),Ue&&Qt.render(et);const Pt=D.toneMapping;D.toneMapping=Qa;const ne=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),mt===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Zn(C,et,Q),N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let jt=0,ye=W.length;jt<ye;jt++){const Se=W[jt],ke=Se.object,Ae=Se.geometry,ie=Se.material,Kt=Se.group;if(ie.side===da&&ke.layers.test(Q.layers)){const cn=ie.side;ie.side=Yn,ie.needsUpdate=!0,ln(ke,et,Q,Ae,ie,Kt),ie.side=cn,ie.needsUpdate=!0,te=!0}}te===!0&&(N.updateMultisampleRenderTarget(Mt),N.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Bt),D.setClearColor(_t,pt),ne!==void 0&&(Q.viewport=ne),D.toneMapping=Pt}function Zn(C,W,et){const Q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Mt=C.length;j<Mt;j++){const Rt=C[j],Bt=Rt.object,Pt=Rt.geometry,ne=Rt.group;let te=Rt.material;te.allowOverride===!0&&Q!==null&&(te=Q),Bt.layers.test(et.layers)&&ln(Bt,W,et,Pt,te,ne)}}function ln(C,W,et,Q,j,Mt){C.onBeforeRender(D,W,et,Q,j,Mt),C.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(D,W,et,Q,C,Mt),j.transparent===!0&&j.side===da&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,D.renderBufferDirect(et,W,Q,j,C,Mt),j.side=Ja,j.needsUpdate=!0,D.renderBufferDirect(et,W,Q,j,C,Mt),j.side=da):D.renderBufferDirect(et,W,Q,j,C,Mt),C.onAfterRender(D,W,et,Q,j,Mt)}function un(C,W,et){W.isScene!==!0&&(W=Te);const Q=qt.get(C),j=_.state.lights,Mt=_.state.shadowsArray,Rt=j.state.version,Bt=Vt.getParameters(C,j.state,Mt,W,et),Pt=Vt.getProgramCacheKey(Bt);let ne=Q.programs;Q.environment=C.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(C.isMeshStandardMaterial?tt:b).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",ee),ne=new Map,Q.programs=ne);let te=ne.get(Pt);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===Rt)return Gr(C,Bt),te}else Bt.uniforms=Vt.getUniforms(C),C.onBeforeCompile(Bt,D),te=Vt.acquireProgram(Bt,Pt),ne.set(Pt,te),Q.uniforms=Bt.uniforms;const jt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Gr(C,Bt),Q.needsLights=vl(C),Q.lightsStateVersion=Rt,Q.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=te,Q.uniformsList=null,te}function Xi(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=rc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Gr(C,W){const et=qt.get(C);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Ec(C,W,et,Q,j){W.isScene!==!0&&(W=Te),N.resetTextureUnits();const Mt=W.fog,Rt=Q.isMeshStandardMaterial?W.environment:null,Bt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Hs,Pt=(Q.isMeshStandardMaterial?tt:b).get(Q.envMap||Rt),ne=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),jt=!!et.morphAttributes.position,ye=!!et.morphAttributes.normal,Se=!!et.morphAttributes.color;let ke=Qa;Q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Ae=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ie=Ae!==void 0?Ae.length:0,Kt=qt.get(Q),cn=_.state.lights;if(mt===!0&&(xt===!0||C!==A)){const je=C===A&&Q.id===w;Tt.setState(Q,C,je)}let xe=!1;Q.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==cn.state.version||Kt.outputColorSpace!==Bt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Pt||Q.fog===!0&&Kt.fog!==Mt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Tt.numPlanes||Kt.numIntersection!==Tt.numIntersection)||Kt.vertexAlphas!==ne||Kt.vertexTangents!==te||Kt.morphTargets!==jt||Kt.morphNormals!==ye||Kt.morphColors!==Se||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ie)&&(xe=!0):(xe=!0,Kt.__version=Q.version);let Hn=Kt.currentProgram;xe===!0&&(Hn=un(Q,W,j));let _i=!1,Pn=!1,gn=!1;const Oe=Hn.getUniforms(),Bn=Kt.uniforms;if(Wt.useProgram(Hn.program)&&(_i=!0,Pn=!0,gn=!0),Q.id!==w&&(w=Q.id,Pn=!0),_i||A!==C){Wt.buffers.depth.getReversed()?(At.copy(C.projectionMatrix),iA(At),aA(At),Oe.setValue(I,"projectionMatrix",At)):Oe.setValue(I,"projectionMatrix",C.projectionMatrix),Oe.setValue(I,"viewMatrix",C.matrixWorldInverse);const En=Oe.map.cameraPosition;En!==void 0&&En.setValue(I,Jt.setFromMatrixPosition(C.matrixWorld)),pe.logarithmicDepthBuffer&&Oe.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Oe.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Pn=!0,gn=!0)}if(j.isSkinnedMesh){Oe.setOptional(I,j,"bindMatrix"),Oe.setOptional(I,j,"bindMatrixInverse");const je=j.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Oe.setValue(I,"boneTexture",je.boneTexture,N))}j.isBatchedMesh&&(Oe.setOptional(I,j,"batchingTexture"),Oe.setValue(I,"batchingTexture",j._matricesTexture,N),Oe.setOptional(I,j,"batchingIdTexture"),Oe.setValue(I,"batchingIdTexture",j._indirectTexture,N),Oe.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Oe.setValue(I,"batchingColorTexture",j._colorsTexture,N));const An=et.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&kt.update(j,et,Hn),(Pn||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Oe.setValue(I,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=Pt,Bn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),Pn&&(Oe.setValue(I,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Mc(Bn,gn),Mt&&Q.fog===!0&&Ut.refreshFogUniforms(Bn,Mt),Ut.refreshMaterialUniforms(Bn,Q,Z,rt,_.state.transmissionRenderTarget[C.id]),rc.upload(I,Xi(Kt),Bn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(rc.upload(I,Xi(Kt),Bn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Oe.setValue(I,"center",j.center),Oe.setValue(I,"modelViewMatrix",j.modelViewMatrix),Oe.setValue(I,"normalMatrix",j.normalMatrix),Oe.setValue(I,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const je=Q.uniformsGroups;for(let En=0,Vr=je.length;En<Vr;En++){const Gn=je[En];k.update(Gn,Hn),k.bind(Gn,Hn)}}return Hn}function Mc(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function vl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,W,et){const Q=qt.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),qt.get(C.texture).__webglTexture=W,qt.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:et,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const et=qt.get(C);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0};const er=I.createFramebuffer();this.setRenderTarget=function(C,W=0,et=0){Y=C,z=W,F=et;let Q=!0,j=null,Mt=!1,Rt=!1;if(C){const Pt=qt.get(C);if(Pt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Pt.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Pt.__hasExternalTextures)N.rebindTextures(C,qt.get(C.texture).__webglTexture,qt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&qt.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Rt=!0);const te=qt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[W])?j=te[W][et]:j=te[W],Mt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?j=qt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[et]:j=te,H.copy(C.viewport),ct.copy(C.scissor),at=C.scissorTest}else H.copy(it).multiplyScalar(Z).floor(),ct.copy(bt).multiplyScalar(Z).floor(),at=wt;if(et!==0&&(j=er),Wt.bindFramebuffer(I.FRAMEBUFFER,j)&&Q&&Wt.drawBuffers(C,j),Wt.viewport(H),Wt.scissor(ct),Wt.setScissorTest(at),Mt){const Pt=qt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,et)}else if(Rt){const Pt=qt.get(C.texture),ne=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,et,ne)}else if(C!==null&&et!==0){const Pt=qt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pt.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(C,W,et,Q,j,Mt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Bt=Bt[Rt]),Bt){Wt.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Pt=C.texture,ne=Pt.format,te=Pt.type;if(!pe.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Q&&et>=0&&et<=C.height-j&&I.readPixels(W,et,Q,j,Zt.convert(ne),Zt.convert(te),Mt)}finally{const Pt=Y!==null?qt.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(C,W,et,Q,j,Mt,Rt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Bt=Bt[Rt]),Bt)if(W>=0&&W<=C.width-Q&&et>=0&&et<=C.height-j){Wt.bindFramebuffer(I.FRAMEBUFFER,Bt);const Pt=C.texture,ne=Pt.format,te=Pt.type;if(!pe.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(W,et,Q,j,Zt.convert(ne),Zt.convert(te),0);const ye=Y!==null?qt.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,ye);const Se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nA(I,Se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.deleteBuffer(jt),I.deleteSync(Se),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,et=0){const Q=Math.pow(2,-et),j=Math.floor(C.image.width*Q),Mt=Math.floor(C.image.height*Q),Rt=W!==null?W.x:0,Bt=W!==null?W.y:0;N.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,et,0,0,Rt,Bt,j,Mt),Wt.unbindTexture()};const Zs=I.createFramebuffer(),Wi=I.createFramebuffer();this.copyTextureToTexture=function(C,W,et=null,Q=null,j=0,Mt=null){Mt===null&&(j!==0?(ac("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=j,j=0):Mt=0);let Rt,Bt,Pt,ne,te,jt,ye,Se,ke;const Ae=C.isCompressedTexture?C.mipmaps[Mt]:C.image;if(et!==null)Rt=et.max.x-et.min.x,Bt=et.max.y-et.min.y,Pt=et.isBox3?et.max.z-et.min.z:1,ne=et.min.x,te=et.min.y,jt=et.isBox3?et.min.z:0;else{const An=Math.pow(2,-j);Rt=Math.floor(Ae.width*An),Bt=Math.floor(Ae.height*An),C.isDataArrayTexture?Pt=Ae.depth:C.isData3DTexture?Pt=Math.floor(Ae.depth*An):Pt=1,ne=0,te=0,jt=0}Q!==null?(ye=Q.x,Se=Q.y,ke=Q.z):(ye=0,Se=0,ke=0);const ie=Zt.convert(W.format),Kt=Zt.convert(W.type);let cn;W.isData3DTexture?(N.setTexture3D(W,0),cn=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),cn=I.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),cn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=I.getParameter(I.UNPACK_ROW_LENGTH),Hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),Pn=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const Oe=C.isDataArrayTexture||C.isData3DTexture,Bn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const An=qt.get(C),je=qt.get(W),En=qt.get(An.__renderTarget),Vr=qt.get(je.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Gn=0;Gn<Pt;Gn++)Oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.get(C).__webglTexture,j,jt+Gn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.get(W).__webglTexture,Mt,ke+Gn)),I.blitFramebuffer(ne,te,Rt,Bt,ye,Se,Rt,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||qt.has(C)){const An=qt.get(C),je=qt.get(W);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Zs),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wi);for(let En=0;En<Pt;En++)Oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,j,jt+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,j),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,Mt,ke+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,Mt),j!==0?I.blitFramebuffer(ne,te,Rt,Bt,ye,Se,Rt,Bt,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(cn,Mt,ye,Se,ke+En,ne,te,Rt,Bt):I.copyTexSubImage2D(cn,Mt,ye,Se,ne,te,Rt,Bt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(cn,Mt,ye,Se,ke,Rt,Bt,Pt,ie,Kt,Ae.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(cn,Mt,ye,Se,ke,Rt,Bt,Pt,ie,Ae.data):I.texSubImage3D(cn,Mt,ye,Se,ke,Rt,Bt,Pt,ie,Kt,Ae):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,ye,Se,Rt,Bt,ie,Kt,Ae.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,ye,Se,Ae.width,Ae.height,ie,Ae.data):I.texSubImage2D(I.TEXTURE_2D,Mt,ye,Se,Rt,Bt,ie,Kt,Ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),Mt===0&&W.generateMipmaps&&I.generateMipmap(cn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,et=null,Q=null,j=0){return ac('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,et,Q,j)},this.initRenderTarget=function(C){qt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){z=0,F=0,Y=null,Wt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}const E0={type:"change"},Up={type:"start"},qy={type:"end"},Wu=new Dy,M0=new ja,TD=Math.cos(70*tA.DEG2RAD),dn=new $,Wn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hd=1e-6;class bD extends HA{constructor(t,n=null){super(t,n),this.state=ze.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Fr,this._lastTargetPosition=new $,this._quat=new Fr().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kv,this._sphericalDelta=new Kv,this._scale=1,this._panOffset=new $,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new $,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RD.bind(this),this._onPointerDown=AD.bind(this),this._onPointerUp=wD.bind(this),this._onContextMenu=PD.bind(this),this._onMouseWheel=UD.bind(this),this._onKeyDown=LD.bind(this),this._onTouchStart=ND.bind(this),this._onTouchMove=OD.bind(this),this._onMouseDown=CD.bind(this),this._onMouseMove=DD.bind(this),this._interceptControlDown=BD.bind(this),this._interceptControlUp=FD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E0),this.update(),this.state=ze.NONE}update(t=null){const n=this.object.position;dn.copy(n).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Wn:r>Math.PI&&(r-=Wn),o<-Math.PI?o+=Wn:o>Math.PI&&(o-=Wn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),n.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=dn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wu.origin.copy(this.object.position),Wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wu.direction))<TD?this.object.lookAt(this.target):(M0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wu.intersectPlane(M0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hd||this._lastTargetPosition.distanceToSquared(this.target)>hd?(this.dispatchEvent(E0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){dn.setFromMatrixColumn(n,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,n){this.screenSpacePanning===!0?dn.setFromMatrixColumn(n,1):(dn.setFromMatrixColumn(n,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;dn.copy(o).sub(this.target);let u=dn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=t-r.left,u=n-r.top,f=r.width,h=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(u/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,u=Math.sqrt(r*r+o*o);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),o=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(o,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,u=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new ce,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function AD(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function RD(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function wD(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qy),this.state=ze.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function CD(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=ze.DOLLY;break;case Os.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=ze.ROTATE}break;case Os.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Up)}function DD(a){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function UD(a){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(a.preventDefault(),this.dispatchEvent(Up),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(qy))}function LD(a){this.enabled!==!1&&this._handleKeyDown(a)}function ND(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=ze.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=ze.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Up)}function OD(a){switch(this._trackPointer(a),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=ze.NONE}}function PD(a){this.enabled!==!1&&a.preventDefault()}function BD(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FD(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zD(){const a=ft.useRef(null);return ft.useEffect(()=>{const t=new CA;t.background=new De(0);const n=new gi(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,10,30);const r=new MD({antialias:!0});r.setSize(window.innerWidth,window.innerHeight),a.current.appendChild(r.domElement);const o=new bD(n,r.domElement);o.enableDamping=!0,t.add(new zA(16777215,.4));const u=new FA(16777215,1);u.position.set(10,20,10),t.add(u);const f=50,h=90,m=new ml(f,f,h,h);m.rotateX(-Math.PI/2);const d=m.attributes.position;Float32Array.from(d.array);const g=10,v=new Rp({color:65535,wireframe:!0}),y=new Ri(m,v);t.add(y);const x=new Ri(new Cp(2,32,32),new LA({color:43775,emissive:30719,emissiveIntensity:1.5,metalness:.3,roughness:.2}));x.position.set(0,2,0),t.add(x);const M=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",M);const T=()=>{requestAnimationFrame(T),x.rotation.y+=.01,x.position.x=Math.sin(Date.now()*5e-4)*10,x.position.z=Math.cos(Date.now()*5e-4)*10,x.material.emissiveIntensity=1.5+Math.sin(Date.now()*.005)*.5;for(let S=0;S<d.count;S++){const _=d.getX(S),U=d.getZ(S),L=_-x.position.x,D=U-x.position.z,B=Math.sqrt(L*L+D*D),z=-6*Math.exp(-B*B/g);d.setY(S,z)}d.needsUpdate=!0,m.computeVertexNormals(),o.update(),r.render(t,n)};return T(),()=>{var S;window.removeEventListener("resize",M),(S=a.current)!=null&&S.contains(r.domElement)&&a.current.removeChild(r.domElement)}},[]),Ve.jsx("div",{ref:a,style:{width:"100vw",height:"100vh"}})}function ID(){return Ve.jsx(DM,{children:Ve.jsxs(KE,{children:[Ve.jsx(qu,{path:"/",element:Ve.jsx(zD,{})}),Ve.jsx(qu,{path:"/login",element:Ve.jsx(fb,{})}),Ve.jsx(qu,{path:"/accueil",element:Ve.jsx(PM,{})})]})})}rE.createRoot(document.getElementById("root")).render(Ve.jsx(SM,{basename:"/espace-temps-threejs",children:Ve.jsx(NM,{children:Ve.jsx(ID,{})})}));
