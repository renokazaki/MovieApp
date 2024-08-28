function DI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function C_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k_={exports:{}},Du={},N_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),LI=Symbol.for("react.portal"),VI=Symbol.for("react.fragment"),MI=Symbol.for("react.strict_mode"),FI=Symbol.for("react.profiler"),UI=Symbol.for("react.provider"),jI=Symbol.for("react.context"),zI=Symbol.for("react.forward_ref"),BI=Symbol.for("react.suspense"),$I=Symbol.for("react.memo"),WI=Symbol.for("react.lazy"),gg=Symbol.iterator;function HI(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var x_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,b_={};function Es(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||x_}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D_(){}D_.prototype=Es.prototype;function gf(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||x_}var yf=gf.prototype=new D_;yf.constructor=gf;O_(yf,Es.prototype);yf.isPureReactComponent=!0;var yg=Array.isArray,L_=Object.prototype.hasOwnProperty,vf={current:null},V_={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L_.call(e,r)&&!V_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:oa,type:t,key:s,ref:o,props:i,_owner:vf.current}}function qI(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function KI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KI(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case LI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bc(o,0):r,yg(i)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),yl(i,e,n,"",function(c){return c})):i!=null&&(_f(i)&&(i=qI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Bc(s,l);o+=yl(s,e,n,u,i)}else if(u=HI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Bc(s,l++),o+=yl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},vl={transition:null},QI={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:vl,ReactCurrentOwner:vf};function F_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Es;te.Fragment=VI;te.Profiler=FI;te.PureComponent=gf;te.StrictMode=MI;te.Suspense=BI;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QI;te.act=F_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)L_.call(e,u)&&!V_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:oa,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:jI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UI,_context:t},t.Consumer=t};te.createElement=M_;te.createFactory=function(t){var e=M_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:zI,render:t}};te.isValidElement=_f;te.lazy=function(t){return{$$typeof:WI,_payload:{_status:-1,_result:t},_init:GI}};te.memo=function(t,e){return{$$typeof:$I,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};te.unstable_act=F_;te.useCallback=function(t,e){return ct.current.useCallback(t,e)};te.useContext=function(t){return ct.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};te.useEffect=function(t,e){return ct.current.useEffect(t,e)};te.useId=function(){return ct.current.useId()};te.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ct.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};te.useRef=function(t){return ct.current.useRef(t)};te.useState=function(t){return ct.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ct.current.useTransition()};te.version="18.3.1";N_.exports=te;var F=N_.exports;const Lu=C_(F),YI=DI({__proto__:null,default:Lu},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XI=F,JI=Symbol.for("react.element"),ZI=Symbol.for("react.fragment"),eA=Object.prototype.hasOwnProperty,tA=XI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nA={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eA.call(e,r)&&!nA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JI,type:t,key:s,ref:o,props:i,_owner:tA.current}}Du.Fragment=ZI;Du.jsx=U_;Du.jsxs=U_;k_.exports=Du;var P=k_.exports,j_={exports:{}},At={},z_={exports:{}},B_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var Ee=Z-1>>>1,ue=B[Ee];if(0<i(ue,Y))B[Ee]=Y,B[Z]=ue,Z=Ee;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var Ee=0,ue=B.length,Pe=ue>>>1;Ee<Pe;){var yn=2*(Ee+1)-1,vn=B[yn],_n=yn+1,En=B[_n];if(0>i(vn,Z))_n<ue&&0>i(En,vn)?(B[Ee]=En,B[_n]=Z,Ee=_n):(B[Ee]=vn,B[yn]=Z,Ee=yn);else if(_n<ue&&0>i(En,Z))B[Ee]=En,B[_n]=Z,Ee=_n;else break e}}return Y}function i(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,R=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function b(B){if(k=!1,I(B),!R)if(n(u)!==null)R=!0,bs(V);else{var Y=n(c);Y!==null&&gn(b,Y.startTime-B)}}function V(B,Y){R=!1,k&&(k=!1,_(y),y=-1),w=!0;var Z=m;try{for(I(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||B&&!C());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,m=p.priorityLevel;var ue=Ee(p.expirationTime<=Y);Y=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),I(Y)}else r(u);p=n(u)}if(p!==null)var Pe=!0;else{var yn=n(c);yn!==null&&gn(b,yn.startTime-Y),Pe=!1}return Pe}finally{p=null,m=Z,w=!1}}var j=!1,E=null,y=-1,T=5,A=-1;function C(){return!(t.unstable_now()-A<T)}function O(){if(E!==null){var B=t.unstable_now();A=B;var Y=!0;try{Y=E(!0,B)}finally{Y?S():(j=!1,E=null)}}else j=!1}var S;if(typeof v=="function")S=function(){v(O)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Mr=Pt.port2;Pt.port1.onmessage=O,S=function(){Mr.postMessage(null)}}else S=function(){N(O,0)};function bs(B){E=B,j||(j=!0,S())}function gn(B,Y){y=N(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||w||(R=!0,bs(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return B()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=m;m=B;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var Ee=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ee+Z:Ee):Z=Ee,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,B={id:d++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:ue,sortIndex:-1},Z>Ee?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(k?(_(y),y=-1):k=!0,gn(b,Z-Ee))):(B.sortIndex=ue,e(u,B),R||w||(R=!0,bs(V))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Y=m;return function(){var Z=m;m=Y;try{return B.apply(this,arguments)}finally{m=Z}}}})(B_);z_.exports=B_;var rA=z_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iA=F,It=rA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,xo={};function pi(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(xo[t]=e,t=0;t<e.length;t++)$_.add(e[t])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,sA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},Eg={};function oA(t){return bh.call(Eg,t)?!0:bh.call(_g,t)?!1:sA.test(t)?Eg[t]=!0:(_g[t]=!0,!1)}function aA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lA(t,e,n,r){if(e===null||typeof e>"u"||aA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,wf);qe[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,wf);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,wf);qe[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lA(e,n,i,r)&&(n=null),r||i===null?oA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=iA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),If=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),Sf=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),q_=Symbol.for("react.offscreen"),wg=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,$c;function ro(t){if($c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+t}var Wc=!1;function Hc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function uA(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xi:return"Fragment";case Ni:return"Portal";case Dh:return"Profiler";case If:return"StrictMode";case Lh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H_:return(t.displayName||"Context")+".Consumer";case W_:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sf:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function cA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===If?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hA(t){var e=K_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=hA(t))}function G_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=K_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q_(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function Uh(t,e){Q_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jh(t,e.type,n):e.hasOwnProperty("defaultValue")&&jh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jh(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ag(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(io(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function Y_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,J_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dA=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){dA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function Z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function e0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fA=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $h(t,e){if(e){if(fA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,Ki=null,Gi=null;function Rg(t){if(t=ua(t)){if(typeof qh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ju(e),qh(t.stateNode,t.type,e))}}function t0(t){Ki?Gi?Gi.push(t):Gi=[t]:Ki=t}function n0(){if(Ki){var t=Ki,e=Gi;if(Gi=Ki=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function r0(t,e){return t(e)}function i0(){}var qc=!1;function s0(t,e,n){if(qc)return t(e,n);qc=!0;try{return r0(t,e,n)}finally{qc=!1,(Ki!==null||Gi!==null)&&(i0(),n0())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Kh=!1;if(bn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Kh=!1}function pA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var go=!1,zl=null,Bl=!1,Gh=null,mA={onError:function(t){go=!0,zl=t}};function gA(t,e,n,r,i,s,o,l,u){go=!1,zl=null,pA.apply(mA,arguments)}function yA(t,e,n,r,i,s,o,l,u){if(gA.apply(this,arguments),go){if(go){var c=zl;go=!1,zl=null}else throw Error(U(198));Bl||(Bl=!0,Gh=c)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pg(t){if(mi(t)!==t)throw Error(U(188))}function vA(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pg(i),t;if(s===r)return Pg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function a0(t){return t=vA(t),t!==null?l0(t):null}function l0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l0(t);if(e!==null)return e;t=t.sibling}return null}var u0=It.unstable_scheduleCallback,Cg=It.unstable_cancelCallback,_A=It.unstable_shouldYield,EA=It.unstable_requestPaint,ke=It.unstable_now,wA=It.unstable_getCurrentPriorityLevel,Pf=It.unstable_ImmediatePriority,c0=It.unstable_UserBlockingPriority,$l=It.unstable_NormalPriority,TA=It.unstable_LowPriority,h0=It.unstable_IdlePriority,Vu=null,rn=null;function IA(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Vu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:RA,AA=Math.log,SA=Math.LN2;function RA(t){return t>>>=0,t===0?32:31-(AA(t)/SA|0)|0}var Ya=64,Xa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=so(l):(s&=o,s!==0&&(r=so(s)))}else o=n&~i,o!==0?r=so(o):s!==0&&(r=so(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function PA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Qh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function kA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function f0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p0,kf,m0,g0,y0,Yh=!1,Ja=[],hr=null,dr=null,fr=null,Do=new Map,Lo=new Map,er=[],NA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&kf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xA(t,e,n,r,i){switch(e){case"focusin":return hr=Ys(hr,t,e,n,r,i),!0;case"dragenter":return dr=Ys(dr,t,e,n,r,i),!0;case"mouseover":return fr=Ys(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,Ys(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,Ys(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function v0(t){var e=qr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=o0(n),e!==null){t.blockedOn=e,y0(t.priority,function(){m0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return e=ua(n),e!==null&&kf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){_l(t)&&n.delete(e)}function OA(){Yh=!1,hr!==null&&_l(hr)&&(hr=null),dr!==null&&_l(dr)&&(dr=null),fr!==null&&_l(fr)&&(fr=null),Do.forEach(Ng),Lo.forEach(Ng)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Yh||(Yh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,OA)))}function Vo(t){function e(i){return Xs(i,t)}if(0<Ja.length){Xs(Ja[0],t);for(var n=1;n<Ja.length;n++){var r=Ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Xs(hr,t),dr!==null&&Xs(dr,t),fr!==null&&Xs(fr,t),Do.forEach(e),Lo.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&er.shift()}var Qi=$n.ReactCurrentBatchConfig,Hl=!0;function bA(t,e,n,r){var i=le,s=Qi.transition;Qi.transition=null;try{le=1,Nf(t,e,n,r)}finally{le=i,Qi.transition=s}}function DA(t,e,n,r){var i=le,s=Qi.transition;Qi.transition=null;try{le=4,Nf(t,e,n,r)}finally{le=i,Qi.transition=s}}function Nf(t,e,n,r){if(Hl){var i=Xh(t,e,n,r);if(i===null)rh(t,e,r,ql,n),kg(t,r);else if(xA(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<NA.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&p0(s),s=Xh(t,e,n,r),s===null&&rh(t,e,r,ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var ql=null;function Xh(t,e,n,r){if(ql=null,t=Rf(r),t=qr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function _0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wA()){case Pf:return 1;case c0:return 4;case $l:case TA:return 16;case h0:return 536870912;default:return 16}default:return 16}}var or=null,xf=null,El=null;function E0(){if(El)return El;var t,e=xf,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function xg(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:xg,this.isPropagationStopped=xg,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=St(ws),la=Ie({},ws,{view:0,detail:0}),LA=St(la),Gc,Qc,Js,Mu=Ie({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Gc=t.screenX-Js.screenX,Qc=t.screenY-Js.screenY):Qc=Gc=0,Js=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Og=St(Mu),VA=Ie({},Mu,{dataTransfer:0}),MA=St(VA),FA=Ie({},la,{relatedTarget:0}),Yc=St(FA),UA=Ie({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),jA=St(UA),zA=Ie({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BA=St(zA),$A=Ie({},ws,{data:0}),bg=St($A),WA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qA[t])?!!e[t]:!1}function bf(){return KA}var GA=Ie({},la,{key:function(t){if(t.key){var e=WA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QA=St(GA),YA=Ie({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=St(YA),XA=Ie({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),JA=St(XA),ZA=Ie({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=St(ZA),tS=Ie({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=St(tS),rS=[9,13,27,32],Df=bn&&"CompositionEvent"in window,yo=null;bn&&"documentMode"in document&&(yo=document.documentMode);var iS=bn&&"TextEvent"in window&&!yo,w0=bn&&(!Df||yo&&8<yo&&11>=yo),Lg=" ",Vg=!1;function T0(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function sS(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:(Vg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Vg?null:t;default:return null}}function oS(t,e){if(Oi)return t==="compositionend"||!Df&&T0(t,e)?(t=E0(),El=xf=or=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aS[t.type]:e==="textarea"}function A0(t,e,n,r){t0(r),e=Kl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vo=null,Mo=null;function lS(t){L0(t,0)}function Fu(t){var e=Li(t);if(G_(e))return t}function uS(t,e){if(t==="change")return e}var S0=!1;if(bn){var Xc;if(bn){var Jc="oninput"in document;if(!Jc){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Jc=typeof Fg.oninput=="function"}Xc=Jc}else Xc=!1;S0=Xc&&(!document.documentMode||9<document.documentMode)}function Ug(){vo&&(vo.detachEvent("onpropertychange",R0),Mo=vo=null)}function R0(t){if(t.propertyName==="value"&&Fu(Mo)){var e=[];A0(e,Mo,t,Rf(t)),s0(lS,e)}}function cS(t,e,n){t==="focusin"?(Ug(),vo=e,Mo=n,vo.attachEvent("onpropertychange",R0)):t==="focusout"&&Ug()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(Mo)}function dS(t,e){if(t==="click")return Fu(e)}function fS(t,e){if(t==="input"||t==="change")return Fu(e)}function pS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:pS;function Fo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function P0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C0(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mS(t){var e=C0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P0(n.ownerDocument.documentElement,n)){if(r!==null&&Lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zg(n,s);var o=zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gS=bn&&"documentMode"in document&&11>=document.documentMode,bi=null,Jh=null,_o=null,Zh=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zh||bi==null||bi!==jl(r)||(r=bi,"selectionStart"in r&&Lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Fo(_o,r)||(_o=r,r=Kl(Jh,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Zc={},k0={};bn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Uu(t){if(Zc[t])return Zc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return Zc[t]=e[n];return t}var N0=Uu("animationend"),x0=Uu("animationiteration"),O0=Uu("animationstart"),b0=Uu("transitionend"),D0=new Map,$g="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){D0.set(t,e),pi(e,[t])}for(var eh=0;eh<$g.length;eh++){var th=$g[eh],yS=th.toLowerCase(),vS=th[0].toUpperCase()+th.slice(1);br(yS,"on"+vS)}br(N0,"onAnimationEnd");br(x0,"onAnimationIteration");br(O0,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(b0,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yA(r,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,c),s=u}}}if(Bl)throw t=Gh,Bl=!1,Gh=null,t}function pe(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var r=t+"__bubble";n.has(r)||(V0(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),V0(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[tl]){t[tl]=!0,$_.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,nh("selectionchange",!1,e))}}function V0(t,e,n,r){switch(_0(e)){case 1:var i=bA;break;case 4:i=DA;break;default:i=Nf}n=i.bind(null,e,n,t),i=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}s0(function(){var c=s,d=Rf(n),p=[];e:{var m=D0.get(t);if(m!==void 0){var w=Of,R=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":w=QA;break;case"focusin":R="focus",w=Yc;break;case"focusout":R="blur",w=Yc;break;case"beforeblur":case"afterblur":w=Yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=MA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=JA;break;case N0:case x0:case O0:w=jA;break;case b0:w=eS;break;case"scroll":w=LA;break;case"wheel":w=nS;break;case"copy":case"cut":case"paste":w=BA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Dg}var k=(e&4)!==0,N=!k&&t==="scroll",_=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,I;v!==null;){I=v;var b=I.stateNode;if(I.tag===5&&b!==null&&(I=b,_!==null&&(b=bo(v,_),b!=null&&k.push(jo(v,b,I)))),N)break;v=v.return}0<k.length&&(m=new w(m,R,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Hh&&(R=n.relatedTarget||n.fromElement)&&(qr(R)||R[Dn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(R=n.relatedTarget||n.toElement,w=c,R=R?qr(R):null,R!==null&&(N=mi(R),R!==N||R.tag!==5&&R.tag!==6)&&(R=null)):(w=null,R=c),w!==R)){if(k=Og,b="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Dg,b="onPointerLeave",_="onPointerEnter",v="pointer"),N=w==null?m:Li(w),I=R==null?m:Li(R),m=new k(b,v+"leave",w,n,d),m.target=N,m.relatedTarget=I,b=null,qr(d)===c&&(k=new k(_,v+"enter",R,n,d),k.target=I,k.relatedTarget=N,b=k),N=b,w&&R)t:{for(k=w,_=R,v=0,I=k;I;I=Ri(I))v++;for(I=0,b=_;b;b=Ri(b))I++;for(;0<v-I;)k=Ri(k),v--;for(;0<I-v;)_=Ri(_),I--;for(;v--;){if(k===_||_!==null&&k===_.alternate)break t;k=Ri(k),_=Ri(_)}k=null}else k=null;w!==null&&Hg(p,m,w,k,!1),R!==null&&N!==null&&Hg(p,N,R,k,!0)}}e:{if(m=c?Li(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=uS;else if(Mg(m))if(S0)V=fS;else{V=hS;var j=cS}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=dS);if(V&&(V=V(t,c))){A0(p,V,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&jh(m,"number",m.value)}switch(j=c?Li(c):window,t){case"focusin":(Mg(j)||j.contentEditable==="true")&&(bi=j,Jh=c,_o=null);break;case"focusout":_o=Jh=bi=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,Bg(p,n,d);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Bg(p,n,d)}var E;if(Df)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Oi?T0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w0&&n.locale!=="ko"&&(Oi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Oi&&(E=E0()):(or=d,xf="value"in or?or.value:or.textContent,Oi=!0)),j=Kl(c,y),0<j.length&&(y=new bg(y,t,null,n,d),p.push({event:y,listeners:j}),E?y.data=E:(E=I0(n),E!==null&&(y.data=E)))),(E=iS?sS(t,n):oS(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(d=new bg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}L0(p,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bo(t,n),s!=null&&r.unshift(jo(t,s,i)),s=bo(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=bo(n,s),u!=null&&o.unshift(jo(n,u,l))):i||(u=bo(n,s),u!=null&&o.push(jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ES=/\r\n?/g,wS=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(wS,"")}function nl(t,e,n){if(e=qg(e),qg(t)!==e&&n)throw Error(U(425))}function Gl(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(AS)}:rd;function AS(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Ts,zo="__reactProps$"+Ts,Dn="__reactContainer$"+Ts,id="__reactEvents$"+Ts,SS="__reactListeners$"+Ts,RS="__reactHandles$"+Ts;function qr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gg(t);t!==null;){if(n=t[Jt])return n;t=Gg(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[Jt]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ju(t){return t[zo]||null}var sd=[],Vi=-1;function Dr(t){return{current:t}}function ge(t){0>Vi||(t.current=sd[Vi],sd[Vi]=null,Vi--)}function de(t,e){Vi++,sd[Vi]=t.current,t.current=e}var Sr={},rt=Dr(Sr),pt=Dr(!1),ti=Sr;function is(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Ql(){ge(pt),ge(rt)}function Qg(t,e,n){if(rt.current!==Sr)throw Error(U(168));de(rt,e),de(pt,n)}function M0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,cA(t)||"Unknown",i));return Ie({},n,r)}function Yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ti=rt.current,de(rt,t),de(pt,pt.current),!0}function Yg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=M0(t,e,ti),r.__reactInternalMemoizedMergedChildContext=t,ge(pt),ge(rt),de(rt,t)):ge(pt),de(pt,n)}var An=null,zu=!1,sh=!1;function F0(t){An===null?An=[t]:An.push(t)}function PS(t){zu=!0,F0(t)}function Lr(){if(!sh&&An!==null){sh=!0;var t=0,e=le;try{var n=An;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,zu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),u0(Pf,Lr),i}finally{le=e,sh=!1}}return null}var Mi=[],Fi=0,Xl=null,Jl=0,Ct=[],kt=0,ni=null,Sn=1,Rn="";function Br(t,e){Mi[Fi++]=Jl,Mi[Fi++]=Xl,Xl=t,Jl=e}function U0(t,e,n){Ct[kt++]=Sn,Ct[kt++]=Rn,Ct[kt++]=ni,ni=t;var r=Sn;t=Rn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-$t(e)+i|n<<i|r,Rn=s+t}else Sn=1<<s|n<<i|r,Rn=t}function Vf(t){t.return!==null&&(Br(t,1),U0(t,1,0))}function Mf(t){for(;t===Xl;)Xl=Mi[--Fi],Mi[Fi]=null,Jl=Mi[--Fi],Mi[Fi]=null;for(;t===ni;)ni=Ct[--kt],Ct[kt]=null,Rn=Ct[--kt],Ct[kt]=null,Sn=Ct[--kt],Ct[kt]=null}var Et=null,_t=null,ve=!1,jt=null;function j0(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ni!==null?{id:Sn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(ve){var e=_t;if(e){var n=e;if(!Xg(t,e)){if(od(t))throw Error(U(418));e=pr(n.nextSibling);var r=Et;e&&Xg(t,e)?j0(r,n):(t.flags=t.flags&-4097|2,ve=!1,Et=t)}}else{if(od(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Et=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function rl(t){if(t!==Et)return!1;if(!ve)return Jg(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=_t)){if(od(t))throw z0(),Error(U(418));for(;e;)j0(t,e),e=pr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?pr(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=_t;t;)t=pr(t.nextSibling)}function ss(){_t=Et=null,ve=!1}function Ff(t){jt===null?jt=[t]:jt.push(t)}var CS=$n.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zg(t){var e=t._init;return e(t._payload)}function B0(t){function e(_,v){if(t){var I=_.deletions;I===null?(_.deletions=[v],_.flags|=16):I.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=vr(_,v),_.index=0,_.sibling=null,_}function s(_,v,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<v?(_.flags|=2,v):I):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,I,b){return v===null||v.tag!==6?(v=dh(I,_.mode,b),v.return=_,v):(v=i(v,I),v.return=_,v)}function u(_,v,I,b){var V=I.type;return V===xi?d(_,v,I.props.children,b,I.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Jn&&Zg(V)===v.type)?(b=i(v,I.props),b.ref=Zs(_,v,I),b.return=_,b):(b=Cl(I.type,I.key,I.props,null,_.mode,b),b.ref=Zs(_,v,I),b.return=_,b)}function c(_,v,I,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=fh(I,_.mode,b),v.return=_,v):(v=i(v,I.children||[]),v.return=_,v)}function d(_,v,I,b,V){return v===null||v.tag!==7?(v=Xr(I,_.mode,b,V),v.return=_,v):(v=i(v,I),v.return=_,v)}function p(_,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dh(""+v,_.mode,I),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return I=Cl(v.type,v.key,v.props,null,_.mode,I),I.ref=Zs(_,null,v),I.return=_,I;case Ni:return v=fh(v,_.mode,I),v.return=_,v;case Jn:var b=v._init;return p(_,b(v._payload),I)}if(io(v)||Gs(v))return v=Xr(v,_.mode,I,null),v.return=_,v;il(_,v)}return null}function m(_,v,I,b){var V=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:l(_,v,""+I,b);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ka:return I.key===V?u(_,v,I,b):null;case Ni:return I.key===V?c(_,v,I,b):null;case Jn:return V=I._init,m(_,v,V(I._payload),b)}if(io(I)||Gs(I))return V!==null?null:d(_,v,I,b,null);il(_,I)}return null}function w(_,v,I,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(I)||null,l(v,_,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ka:return _=_.get(b.key===null?I:b.key)||null,u(v,_,b,V);case Ni:return _=_.get(b.key===null?I:b.key)||null,c(v,_,b,V);case Jn:var j=b._init;return w(_,v,I,j(b._payload),V)}if(io(b)||Gs(b))return _=_.get(I)||null,d(v,_,b,V,null);il(v,b)}return null}function R(_,v,I,b){for(var V=null,j=null,E=v,y=v=0,T=null;E!==null&&y<I.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var A=m(_,E,I[y],b);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(_,E),v=s(A,v,y),j===null?V=A:j.sibling=A,j=A,E=T}if(y===I.length)return n(_,E),ve&&Br(_,y),V;if(E===null){for(;y<I.length;y++)E=p(_,I[y],b),E!==null&&(v=s(E,v,y),j===null?V=E:j.sibling=E,j=E);return ve&&Br(_,y),V}for(E=r(_,E);y<I.length;y++)T=w(E,_,y,I[y],b),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),j===null?V=T:j.sibling=T,j=T);return t&&E.forEach(function(C){return e(_,C)}),ve&&Br(_,y),V}function k(_,v,I,b){var V=Gs(I);if(typeof V!="function")throw Error(U(150));if(I=V.call(I),I==null)throw Error(U(151));for(var j=V=null,E=v,y=v=0,T=null,A=I.next();E!==null&&!A.done;y++,A=I.next()){E.index>y?(T=E,E=null):T=E.sibling;var C=m(_,E,A.value,b);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(_,E),v=s(C,v,y),j===null?V=C:j.sibling=C,j=C,E=T}if(A.done)return n(_,E),ve&&Br(_,y),V;if(E===null){for(;!A.done;y++,A=I.next())A=p(_,A.value,b),A!==null&&(v=s(A,v,y),j===null?V=A:j.sibling=A,j=A);return ve&&Br(_,y),V}for(E=r(_,E);!A.done;y++,A=I.next())A=w(E,_,y,A.value,b),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?y:A.key),v=s(A,v,y),j===null?V=A:j.sibling=A,j=A);return t&&E.forEach(function(O){return e(_,O)}),ve&&Br(_,y),V}function N(_,v,I,b){if(typeof I=="object"&&I!==null&&I.type===xi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ka:e:{for(var V=I.key,j=v;j!==null;){if(j.key===V){if(V=I.type,V===xi){if(j.tag===7){n(_,j.sibling),v=i(j,I.props.children),v.return=_,_=v;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Jn&&Zg(V)===j.type){n(_,j.sibling),v=i(j,I.props),v.ref=Zs(_,j,I),v.return=_,_=v;break e}n(_,j);break}else e(_,j);j=j.sibling}I.type===xi?(v=Xr(I.props.children,_.mode,b,I.key),v.return=_,_=v):(b=Cl(I.type,I.key,I.props,null,_.mode,b),b.ref=Zs(_,v,I),b.return=_,_=b)}return o(_);case Ni:e:{for(j=I.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(_,v.sibling),v=i(v,I.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=fh(I,_.mode,b),v.return=_,_=v}return o(_);case Jn:return j=I._init,N(_,v,j(I._payload),b)}if(io(I))return R(_,v,I,b);if(Gs(I))return k(_,v,I,b);il(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,I),v.return=_,_=v):(n(_,v),v=dh(I,_.mode,b),v.return=_,_=v),o(_)):n(_,v)}return N}var os=B0(!0),$0=B0(!1),Zl=Dr(null),eu=null,Ui=null,Uf=null;function jf(){Uf=Ui=eu=null}function zf(t){var e=Zl.current;ge(Zl),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){eu=t,Uf=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Uf!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(eu===null)throw Error(U(308));Ui=t,eu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Kr=null;function Bf(t){Kr===null?Kr=[t]:Kr.push(t)}function W0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Bf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cf(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,k=l;switch(m=e,w=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){p=R.call(w,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,m=typeof R=="function"?R.call(w,p,m):R,m==null)break e;p=Ie({},p,m);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ii|=o,t.lanes=o,t.memoizedState=p}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ca={},sn=Dr(ca),Bo=Dr(ca),$o=Dr(ca);function Gr(t){if(t===ca)throw Error(U(174));return t}function Wf(t,e){switch(de($o,e),de(Bo,t),de(sn,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}ge(sn),de(sn,e)}function as(){ge(sn),ge(Bo),ge($o)}function q0(t){Gr($o.current);var e=Gr(sn.current),n=Bh(e,t.type);e!==n&&(de(Bo,t),de(sn,n))}function Hf(t){Bo.current===t&&(ge(sn),ge(Bo))}var we=Dr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function qf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Il=$n.ReactCurrentDispatcher,ah=$n.ReactCurrentBatchConfig,ri=0,Te=null,De=null,Fe=null,ru=!1,Eo=!1,Wo=0,kS=0;function Xe(){throw Error(U(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function Gf(t,e,n,r,i,s){if(ri=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?bS:DS,t=n(r,i),Eo){s=0;do{if(Eo=!1,Wo=0,25<=s)throw Error(U(301));s+=1,Fe=De=null,e.updateQueue=null,Il.current=LS,t=n(r,i)}while(Eo)}if(Il.current=iu,e=De!==null&&De.next!==null,ri=0,Fe=De=Te=null,ru=!1,e)throw Error(U(300));return t}function Qf(){var t=Wo!==0;return Wo=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Lt(){if(De===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Fe===null?Te.memoizedState:Fe.next;if(e!==null)Fe=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Te.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ho(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Lt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ri&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Te.lanes|=d,ii|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uh(t){var e=Lt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K0(){}function G0(t,e){var n=Te,r=Lt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,Yf(X0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,qo(9,Y0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(U(349));ri&30||Q0(n,e,i)}return i}function Q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y0(t,e,n,r){e.value=n,e.getSnapshot=r,J0(e)&&Z0(t)}function X0(t,e,n){return n(function(){J0(e)&&Z0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Z0(t){var e=Ln(t,1);e!==null&&Wt(e,t,1,-1)}function ny(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,Te,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eE(){return Lt().memoizedState}function Al(t,e,n,r){var i=Yt();Te.flags|=t,i.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Bu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Kf(r,o.deps)){i.memoizedState=qo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=qo(1|e,n,s,r)}function ry(t,e){return Al(8390656,8,t,e)}function Yf(t,e){return Bu(2048,8,t,e)}function tE(t,e){return Bu(4,2,t,e)}function nE(t,e){return Bu(4,4,t,e)}function rE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iE(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4,4,rE.bind(null,e,t),n)}function Xf(){}function sE(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oE(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aE(t,e,n){return ri&21?(Ht(n,e)||(n=d0(),Te.lanes|=n,ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function NS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{le=n,ah.transition=r}}function lE(){return Lt().memoizedState}function xS(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uE(t))cE(e,n);else if(n=W0(t,e,n,r),n!==null){var i=ut();Wt(n,t,r,i),hE(n,e,r)}}function OS(t,e,n){var r=yr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uE(t))cE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,Bf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=W0(t,e,i,r),n!==null&&(i=ut(),Wt(n,t,r,i),hE(n,e,r))}}function uE(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function cE(t,e){Eo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cf(t,n)}}var iu={readContext:Dt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},bS={readContext:Dt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,rE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xS.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:Xf,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=NS.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Yt();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ue===null)throw Error(U(349));ri&30||Q0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ry(X0.bind(null,r,s,t),[t]),r.flags|=2048,qo(9,Y0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=Ue.identifierPrefix;if(ve){var n=Rn,r=Sn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DS={readContext:Dt,useCallback:sE,useContext:Dt,useEffect:Yf,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:lh,useRef:eE,useState:function(){return lh(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=Lt();return aE(e,De.memoizedState,t)},useTransition:function(){var t=lh(Ho)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:G0,useId:lE,unstable_isNewReconciler:!1},LS={readContext:Dt,useCallback:sE,useContext:Dt,useEffect:Yf,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:uh,useRef:eE,useState:function(){return uh(Ho)},useDebugValue:Xf,useDeferredValue:function(t){var e=Lt();return De===null?e.memoizedState=t:aE(e,De.memoizedState,t)},useTransition:function(){var t=uh(Ho)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:G0,useId:lE,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $u={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=yr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Wt(e,t,i,r),Tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=yr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(Wt(e,t,i,r),Tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=yr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(Wt(e,t,r,n),Tl(e,t,r))}};function iy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function dE(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=mt(e)?ti:rt.current,r=e.contextTypes,s=(r=r!=null)?is(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},$f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=mt(e)?ti:rt.current,i.context=is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$u.enqueueReplaceState(i,i.state,null),tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,e){try{var n="",r=e;do n+=uA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ch(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VS=typeof WeakMap=="function"?WeakMap:Map;function fE(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,wd=r),hd(t,e)},n}function pE(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YS.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var MS=$n.ReactCurrentOwner,ft=!1;function lt(t,e,n,r){e.child=t===null?$0(e,null,n,r):os(e,t.child,n,r)}function uy(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=Gf(t,e,n,r,s,i),n=Qf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ve&&n&&Vf(e),e.flags|=1,lt(t,e,r,i),e.child)}function cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mE(t,e,s,r,i)):(t=Cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return dd(t,e,n,r,i)}function gE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(zi,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(zi,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(zi,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(zi,vt),vt|=r;return lt(t,e,i,n),e.child}function yE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,r,i){var s=mt(n)?ti:rt.current;return s=is(e,s),Yi(e,i),n=Gf(t,e,n,r,s,i),r=Qf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(ve&&r&&Vf(e),e.flags|=1,lt(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(mt(n)){var s=!0;Yl(e)}else s=!1;if(Yi(e,i),e.stateNode===null)Sl(t,e),dE(e,n,r),cd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=mt(n)?ti:rt.current,c=is(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sy(e,o,r,c),Zn=!1;var m=e.memoizedState;o.state=m,tu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||Zn?(typeof d=="function"&&(ud(e,n,d,r),u=e.memoizedState),(l=Zn||iy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=mt(n)?ti:rt.current,u=is(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&sy(e,o,r,u),Zn=!1,m=e.memoizedState,o.state=m,tu(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||pt.current||Zn?(typeof w=="function"&&(ud(e,n,w,r),R=e.memoizedState),(c=Zn||iy(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return fd(t,e,n,r,s,i)}function fd(t,e,n,r,i,s){yE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yg(e,n,!1),Vn(t,e,s);r=e.stateNode,MS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,s),e.child=os(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&Yg(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?Qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qg(t,e.context,!1),Wf(t,e.containerInfo)}function dy(t,e,n,r,i){return ss(),Ff(i),e.flags|=256,lt(t,e,n,r),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function _E(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qu(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=pd,t):Jf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return FS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pd,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jf(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&Ff(r),os(e,t.child,null,n),t=Jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ch(Error(U(422))),sl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qu({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=md(o),e.memoizedState=pd,s);if(!(e.mode&1))return sl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ch(s,r,void 0),sl(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Wt(r,t,i,-1))}return ip(),r=ch(Error(U(421))),sl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=pr(i.nextSibling),Et=e,ve=!0,jt=null,t!==null&&(Ct[kt++]=Sn,Ct[kt++]=Rn,Ct[kt++]=ni,Sn=t.id,Rn=t.overflow,ni=e),e=Jf(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ld(t.return,e,n)}function hh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function EE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hh(e,!0,n,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function US(t,e,n){switch(e.tag){case 3:vE(e),ss();break;case 5:q0(e);break;case 1:mt(e.type)&&Yl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?_E(t,e,n):(de(we,we.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return EE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,gE(t,e,n)}return Vn(t,e,n)}var wE,gd,TE,IE;wE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};TE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(sn.current);var s=null;switch(n){case"input":i=Fh(t,i),r=Fh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=zh(t,i),r=zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gl)}$h(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};IE=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jS(t,e,n){var r=e.pendingProps;switch(Mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return mt(e.type)&&Ql(),Je(e),null;case 3:return r=e.stateNode,as(),ge(pt),ge(rt),qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Ad(jt),jt=null))),gd(t,e),Je(e),null;case 5:Hf(e);var i=Gr($o.current);if(n=e.type,t!==null&&e.stateNode!=null)TE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Je(e),null}if(t=Gr(sn.current),rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<oo.length;i++)pe(oo[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Tg(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Ag(r,s),pe("invalid",r)}$h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),i=["children",""+l]):xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Ga(r),Ig(r,s,!0);break;case"textarea":Ga(r),Sg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[zo]=r,wE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<oo.length;i++)pe(oo[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Tg(t,r),i=Fh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Ag(t,r),i=zh(t,r),pe("invalid",t);break;default:i=r}$h(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?e0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&J_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oo(t,u):typeof u=="number"&&Oo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Tf(t,s,u,o))}switch(n){case"input":Ga(t),Ig(t,r,!1);break;case"textarea":Ga(t),Sg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)IE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Gr($o.current),Gr(sn.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Je(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&_t!==null&&e.mode&1&&!(e.flags&128))z0(),ss(),e.flags|=98560,s=!1;else if(s=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Jt]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else jt!==null&&(Ad(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):ip())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return as(),gd(t,e),t===null&&Uo(e.stateNode.containerInfo),Je(e),null;case 10:return zf(e.type._context),Je(e),null;case 17:return mt(e.type)&&Ql(),Je(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)eo(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>us&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Je(e),null}else 2*ke()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function zS(t,e){switch(Mf(e),e.tag){case 1:return mt(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),ge(pt),ge(rt),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hf(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return as(),null;case 10:return zf(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var ol=!1,tt=!1,BS=typeof WeakSet=="function"?WeakSet:Set,$=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function yd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var py=!1;function $S(t,e){if(ed=Hl,t=C0(),Lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},Hl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,N=R.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ft(e.type,k),N);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Re(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=py,py=!1,R}function wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yd(e,n,s)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AE(t){var e=t.alternate;e!==null&&(t.alternate=null,AE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[zo],delete e[id],delete e[SS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SE(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(r!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var ze=null,Ut=!1;function Qn(t,e,n){for(n=n.child;n!==null;)RE(t,e,n),n=n.sibling}function RE(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:tt||ji(n,e);case 6:var r=ze,i=Ut;ze=null,Qn(t,e,n),ze=r,Ut=i,ze!==null&&(Ut?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ut?(t=ze,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Vo(t)):ih(ze,n.stateNode));break;case 4:r=ze,i=Ut,ze=n.stateNode.containerInfo,Ut=!0,Qn(t,e,n),ze=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yd(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!tt&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Qn(t,e,n),tt=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(r){var i=JS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ut=!1;break e;case 3:ze=l.stateNode.containerInfo,Ut=!0;break e;case 4:ze=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(ze===null)throw Error(U(160));RE(s,o,i),ze=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PE(e,t),e=e.sibling}function PE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Gt(t),r&4){try{wo(3,t,t.return),Wu(3,t)}catch(k){Re(t,t.return,k)}try{wo(5,t,t.return)}catch(k){Re(t,t.return,k)}}break;case 1:Mt(e,t),Gt(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Mt(e,t),Gt(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{Oo(i,"")}catch(k){Re(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Q_(i,s),Wh(l,o);var c=Wh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?e0(i,p):d==="dangerouslySetInnerHTML"?J_(i,p):d==="children"?Oo(i,p):Tf(i,d,p,c)}switch(l){case"input":Uh(i,s);break;case"textarea":Y_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?qi(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(k){Re(t,t.return,k)}}break;case 6:if(Mt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Re(t,t.return,k)}}break;case 3:if(Mt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(k){Re(t,t.return,k)}break;case 4:Mt(e,t),Gt(t);break;case 13:Mt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=ke())),r&4&&gy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Mt(e,t),tt=c):Mt(e,t),Gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:wo(4,m,m.return);break;case 1:ji(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Re(r,n,k)}}break;case 5:ji(m,m.return);break;case 22:if(m.memoizedState!==null){vy(p);continue}}w!==null?(w.return=m,$=w):vy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Z_("display",o))}catch(k){Re(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Re(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Gt(t),r&4&&gy(t);break;case 21:break;default:Mt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oo(i,""),r.flags&=-33);var s=my(t);Ed(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=my(t);_d(t,l,o);break;default:throw Error(U(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WS(t,e,n){$=t,CE(t)}function CE(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=ol;var c=tt;if(ol=o,(tt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?_y(i):u!==null?(u.return=o,$=u):_y(i);for(;s!==null;)$=s,CE(s),s=s.sibling;$=i,ol=l,tt=c}yy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):yy(t)}}function yy(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&vd(e)}catch(m){Re(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function vy(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function _y(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{vd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{vd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var HS=Math.ceil,su=$n.ReactCurrentDispatcher,Zf=$n.ReactCurrentOwner,Ot=$n.ReactCurrentBatchConfig,se=0,Ue=null,xe=null,We=0,vt=0,zi=Dr(0),Le=0,Ko=null,ii=0,Hu=0,ep=0,To=null,dt=null,tp=0,us=1/0,In=null,ou=!1,wd=null,gr=null,al=!1,ar=null,au=0,Io=0,Td=null,Rl=-1,Pl=0;function ut(){return se&6?ke():Rl!==-1?Rl:Rl=ke()}function yr(t){return t.mode&1?se&2&&We!==0?We&-We:CS.transition!==null?(Pl===0&&(Pl=d0()),Pl):(t=le,t!==0||(t=window.event,t=t===void 0?16:_0(t.type)),t):1}function Wt(t,e,n,r){if(50<Io)throw Io=0,Td=null,Error(U(185));aa(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(Hu|=n),Le===4&&tr(t,We)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(us=ke()+500,zu&&Lr()))}function gt(t,e){var n=t.callbackNode;CA(t,e);var r=Wl(t,t===Ue?We:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?PS(Ey.bind(null,t)):F0(Ey.bind(null,t)),IS(function(){!(se&6)&&Lr()}),n=null;else{switch(f0(r)){case 1:n=Pf;break;case 4:n=c0;break;case 16:n=$l;break;case 536870912:n=h0;break;default:n=$l}n=VE(n,kE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kE(t,e){if(Rl=-1,Pl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Wl(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var i=se;se|=2;var s=xE();(Ue!==t||We!==e)&&(In=null,us=ke()+500,Yr(t,e));do try{GS();break}catch(l){NE(t,l)}while(!0);jf(),su.current=s,se=i,xe!==null?e=0:(Ue=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=Qh(t),i!==0&&(r=i,e=Id(t,i))),e===1)throw n=Ko,Yr(t,0),tr(t,r),gt(t,ke()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qS(i)&&(e=lu(t,r),e===2&&(s=Qh(t),s!==0&&(r=s,e=Id(t,s))),e===1))throw n=Ko,Yr(t,0),tr(t,r),gt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:$r(t,dt,In);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=tp+500-ke(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rd($r.bind(null,t,dt,In),e);break}$r(t,dt,In);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HS(r/1960))-r,10<r){t.timeoutHandle=rd($r.bind(null,t,dt,In),r);break}$r(t,dt,In);break;case 5:$r(t,dt,In);break;default:throw Error(U(329))}}}return gt(t,ke()),t.callbackNode===n?kE.bind(null,t):null}function Id(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=lu(t,e),t!==2&&(e=dt,dt=n,e!==null&&Ad(e)),t}function Ad(t){dt===null?dt=t:dt.push.apply(dt,t)}function qS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~ep,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(se&6)throw Error(U(327));Xi();var e=Wl(t,0);if(!(e&1))return gt(t,ke()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=Qh(t);r!==0&&(e=r,n=Id(t,r))}if(n===1)throw n=Ko,Yr(t,0),tr(t,e),gt(t,ke()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,dt,In),gt(t,ke()),null}function np(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(us=ke()+500,zu&&Lr())}}function si(t){ar!==null&&ar.tag===0&&!(se&6)&&Xi();var e=se;se|=1;var n=Ot.transition,r=le;try{if(Ot.transition=null,le=1,t)return t()}finally{le=r,Ot.transition=n,se=e,!(se&6)&&Lr()}}function rp(){vt=zi.current,ge(zi)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TS(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:as(),ge(pt),ge(rt),qf();break;case 5:Hf(r);break;case 4:as();break;case 13:ge(we);break;case 19:ge(we);break;case 10:zf(r.type._context);break;case 22:case 23:rp()}n=n.return}if(Ue=t,xe=t=vr(t.current,null),We=vt=e,Le=0,Ko=null,ep=Hu=ii=0,dt=To=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function NE(t,e){do{var n=xe;try{if(jf(),Il.current=iu,ru){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(ri=0,Fe=De=Te=null,Eo=!1,Wo=0,Zf.current=null,n===null||n.return===null){Le=1,Ko=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=ay(o);if(w!==null){w.flags&=-257,ly(w,o,l,s,e),w.mode&1&&oy(s,c,e),e=w,u=c;var R=e.updateQueue;if(R===null){var k=new Set;k.add(u),e.updateQueue=k}else R.add(u);break e}else{if(!(e&1)){oy(s,c,e),ip();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var N=ay(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ly(N,o,l,s,e),Ff(ls(u,l));break e}}s=u=ls(u,l),Le!==4&&(Le=2),To===null?To=[s]:To.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=fE(s,u,e);ey(s,_);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(gr===null||!gr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=pE(s,l,e);ey(s,b);break e}}s=s.return}while(s!==null)}bE(n)}catch(V){e=V,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function xE(){var t=su.current;return su.current=iu,t===null?iu:t}function ip(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||!(ii&268435455)&&!(Hu&268435455)||tr(Ue,We)}function lu(t,e){var n=se;se|=2;var r=xE();(Ue!==t||We!==e)&&(In=null,Yr(t,e));do try{KS();break}catch(i){NE(t,i)}while(!0);if(jf(),se=n,su.current=r,xe!==null)throw Error(U(261));return Ue=null,We=0,Le}function KS(){for(;xe!==null;)OE(xe)}function GS(){for(;xe!==null&&!_A();)OE(xe)}function OE(t){var e=LE(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?bE(t):xe=e,Zf.current=null}function bE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zS(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,xe=null;return}}else if(n=jS(n,e,vt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Le===0&&(Le=5)}function $r(t,e,n){var r=le,i=Ot.transition;try{Ot.transition=null,le=1,QS(t,e,n,r)}finally{Ot.transition=i,le=r}return null}function QS(t,e,n,r){do Xi();while(ar!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kA(t,s),t===Ue&&(xe=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,VE($l,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=le;le=1;var l=se;se|=4,Zf.current=null,$S(t,n),PE(n,t),mS(td),Hl=!!ed,td=ed=null,t.current=n,WS(n),EA(),se=l,le=o,Ot.transition=s}else t.current=n;if(al&&(al=!1,ar=t,au=i),s=t.pendingLanes,s===0&&(gr=null),IA(n.stateNode),gt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,t=wd,wd=null,t;return au&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===Td?Io++:(Io=0,Td=t):Io=0,Lr(),null}function Xi(){if(ar!==null){var t=f0(au),e=Ot.transition,n=le;try{if(Ot.transition=null,le=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,au=0,se&6)throw Error(U(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:wo(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,w=d.return;if(AE(d),d===c){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(V){Re(l,l.return,V)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(se=i,Lr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Vu,t)}catch{}r=!0}return r}finally{le=n,Ot.transition=e}}return!1}function wy(t,e,n){e=ls(n,e),e=fE(t,e,1),t=mr(t,e,1),e=ut(),t!==null&&(aa(t,1,e),gt(t,e))}function Re(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ls(n,t),t=pE(e,t,1),e=mr(e,t,1),t=ut(),e!==null&&(aa(e,1,t),gt(e,t));break}}e=e.return}}function YS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>ke()-tp?Yr(t,0):ep|=n),gt(t,e)}function DE(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=ut();t=Ln(t,e),t!==null&&(aa(t,e,n),gt(t,n))}function XS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DE(t,n)}function JS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),DE(t,n)}var LE;LE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,US(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ve&&e.flags&1048576&&U0(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var i=is(e,rt.current);Yi(e,n),i=Gf(null,e,r,t,i,n);var s=Qf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$f(e),i.updater=$u,e.stateNode=i,i._reactInternals=e,cd(e,r,t,n),e=fd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Vf(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eR(r),t=Ft(r,t),i){case 0:e=dd(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,Ft(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),dd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),hy(t,e,r,i,n);case 3:e:{if(vE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H0(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ls(Error(U(423)),e),e=dy(t,e,r,n,i);break e}else if(r!==i){i=ls(Error(U(424)),e),e=dy(t,e,r,n,i);break e}else for(_t=pr(e.stateNode.containerInfo.firstChild),Et=e,ve=!0,jt=null,n=$0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){e=Vn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return q0(e),t===null&&ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nd(r,i)?o=null:s!==null&&nd(r,s)&&(e.flags|=32),yE(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&ad(e),null;case 13:return _E(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),uy(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Zl,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!pt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ld(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ld(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=Dt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),cy(t,e,r,i,n);case 15:return mE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Sl(t,e),e.tag=1,mt(r)?(t=!0,Yl(e)):t=!1,Yi(e,n),dE(e,r,i),cd(e,r,i,n),fd(null,e,r,!0,t,n);case 19:return EE(t,e,n);case 22:return gE(t,e,n)}throw Error(U(156,e.tag))};function VE(t,e){return u0(t,e)}function ZS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new ZS(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eR(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Sf)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xi:return Xr(n.children,i,s,e);case If:o=8,i|=8;break;case Dh:return t=xt(12,n,e,i|2),t.elementType=Dh,t.lanes=s,t;case Lh:return t=xt(13,n,e,i),t.elementType=Lh,t.lanes=s,t;case Vh:return t=xt(19,n,e,i),t.elementType=Vh,t.lanes=s,t;case q_:return qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W_:o=10;break e;case H_:o=9;break e;case Af:o=11;break e;case Sf:o=14;break e;case Jn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function qu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=q_,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kc(0),this.expirationTimes=Kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,l,u){return t=new tR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(s),t}function nR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ME(t){if(!t)return Sr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return M0(t,n,e)}return e}function FE(t,e,n,r,i,s,o,l,u){return t=op(n,r,!0,t,i,s,o,l,u),t.context=ME(null),n=t.current,r=ut(),i=yr(n),s=Nn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,aa(t,i,r),gt(t,r),t}function Ku(t,e,n,r){var i=e.current,s=ut(),o=yr(i);return n=ME(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(Wt(t,i,o,s),Tl(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function rR(){return null}var UE=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Gu.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ku(t,e,null,null)};Gu.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;si(function(){Ku(null,t,null,null)}),e[Dn]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=g0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&v0(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function iR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=uu(o);s.call(c)}}var o=FE(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[Dn]=o.current,Uo(t.nodeType===8?t.parentNode:t),si(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=uu(u);l.call(c)}}var u=op(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=u,t[Dn]=u.current,Uo(t.nodeType===8?t.parentNode:t),si(function(){Ku(e,u,n,r)}),u}function Yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=uu(o);l.call(u)}}Ku(e,o,t,i)}else o=iR(n,e,t,i,r);return uu(o)}p0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(Cf(e,n|1),gt(e,ke()),!(se&6)&&(us=ke()+500,Lr()))}break;case 13:si(function(){var r=Ln(t,1);if(r!==null){var i=ut();Wt(r,t,1,i)}}),ap(t,1)}};kf=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=ut();Wt(e,t,134217728,n)}ap(t,134217728)}};m0=function(t){if(t.tag===13){var e=yr(t),n=Ln(t,e);if(n!==null){var r=ut();Wt(n,t,e,r)}ap(t,e)}};g0=function(){return le};y0=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};qh=function(t,e,n){switch(e){case"input":if(Uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ju(r);if(!i)throw Error(U(90));G_(r),Uh(r,i)}}}break;case"textarea":Y_(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};r0=np;i0=si;var sR={usingClientEntryPoint:!1,Events:[ua,Li,ju,t0,n0,np]},to={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oR={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a0(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||rR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Vu=ll.inject(oR),rn=ll}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sR;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(U(200));return nR(t,e,null,n)};At.createRoot=function(t,e){if(!up(t))throw Error(U(299));var n=!1,r="",i=UE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new lp(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=a0(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return si(t)};At.hydrate=function(t,e,n){if(!Qu(e))throw Error(U(200));return Yu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!up(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FE(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Gu(e)};At.render=function(t,e,n){if(!Qu(e))throw Error(U(200));return Yu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(U(40));return t._reactRootContainer?(si(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};At.unstable_batchedUpdates=np;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Yu(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function jE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jE)}catch(t){console.error(t)}}jE(),j_.exports=At;var aR=j_.exports,zE,Ay=aR;zE=Ay.createRoot,Ay.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Go.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const Sy="popstate";function lR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Sd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cu(i)}return cR(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function BE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uR(){return Math.random().toString(36).substr(2,8)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Sd(t,e,n,r){return n===void 0&&(n=null),Go({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||uR()})}function cu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=lr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Go({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=lr.Pop;let N=d(),_=N==null?null:N-c;c=N,u&&u({action:l,location:k.location,delta:_})}function m(N,_){l=lr.Push;let v=Sd(k.location,N,_);c=d()+1;let I=Ry(v,c),b=k.createHref(v);try{o.pushState(I,"",b)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(b)}s&&u&&u({action:l,location:k.location,delta:1})}function w(N,_){l=lr.Replace;let v=Sd(k.location,N,_);c=d();let I=Ry(v,c),b=k.createHref(v);o.replaceState(I,"",b),s&&u&&u({action:l,location:k.location,delta:0})}function R(N){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:cu(N);return v=v.replace(/ $/,"%20"),be(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let k={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,p),u=N,()=>{i.removeEventListener(Sy,p),u=null}},createHref(N){return e(i,N)},createURL:R,encodeLocation(N){let _=R(N);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:w,go(N){return o.go(N)}};return k}var Py;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Py||(Py={}));function hR(t,e,n){return n===void 0&&(n="/"),dR(t,e,n,!1)}function dR(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=cp(i.pathname||"/",n);if(s==null)return null;let o=$E(t);fR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=AR(s);l=TR(o[u],c,r)}return l}function $E(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$E(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ER(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of WE(s.path))i(s,o,u)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function fR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pR=/^:[\w-]+$/,mR=3,gR=2,yR=1,vR=10,_R=-2,Cy=t=>t==="*";function ER(t,e){let n=t.split("/"),r=n.length;return n.some(Cy)&&(r+=_R),e&&(r+=gR),n.filter(i=>!Cy(i)).reduce((i,s)=>i+(pR.test(s)?mR:s===""?yR:vR),r)}function wR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=ky({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=ky({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:_r([s,p.pathname]),pathnameBase:CR(_r([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=_r([s,p.pathnameBase]))}return o}function ky(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const R=l[p];return w&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function IR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),BE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return BE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:RR(n,e):e,search:kR(r),hash:NR(i)}}function RR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ph(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function HE(t,e){let n=PR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=Go({},t),be(!i.pathname||!i.pathname.includes("?"),ph("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),ph("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),ph("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=SR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),CR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const KE=["post","put","patch","delete"];new Set(KE);const OR=["get",...KE];new Set(OR);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}const hp=F.createContext(null),bR=F.createContext(null),gi=F.createContext(null),Xu=F.createContext(null),yi=F.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=F.createContext(null);function DR(t,e){let{relative:n}=e===void 0?{}:e;ha()||be(!1);let{basename:r,navigator:i}=F.useContext(gi),{hash:s,pathname:o,search:l}=YE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:_r([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ha(){return F.useContext(Xu)!=null}function As(){return ha()||be(!1),F.useContext(Xu).location}function QE(t){F.useContext(gi).static||F.useLayoutEffect(t)}function dp(){let{isDataRoute:t}=F.useContext(yi);return t?KR():LR()}function LR(){ha()||be(!1);let t=F.useContext(hp),{basename:e,future:n,navigator:r}=F.useContext(gi),{matches:i}=F.useContext(yi),{pathname:s}=As(),o=JSON.stringify(HE(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return QE(()=>{l.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=qE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:_r([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function YE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(gi),{matches:i}=F.useContext(yi),{pathname:s}=As(),o=JSON.stringify(HE(i,r.v7_relativeSplatPath));return F.useMemo(()=>qE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VR(t,e){return MR(t,e)}function MR(t,e,n,r){ha()||be(!1);let{navigator:i}=F.useContext(gi),{matches:s}=F.useContext(yi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=As(),d;if(e){var p;let N=typeof e=="string"?Is(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||be(!1),d=N}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=hR(t,{pathname:w}),k=BR(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:_r([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:_r([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&k?F.createElement(Xu.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:lr.Pop}},k):k}function FR(){let t=qR(),e=xR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const UR=F.createElement(FR,null);class jR extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(yi.Provider,{value:this.props.routeContext},F.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zR(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(hp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(yi.Provider,{value:e},r)}function BR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||be(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,R=!1,k=null,N=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||UR,u&&(c<0&&m===0?(R=!0,N=null):c===m&&(R=!0,N=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,m+1)),v=()=>{let I;return w?I=k:R?I=N:p.route.Component?I=F.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,F.createElement(zR,{match:p,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(jR,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var XE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(XE||{}),hu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hu||{});function $R(t){let e=F.useContext(hp);return e||be(!1),e}function WR(t){let e=F.useContext(bR);return e||be(!1),e}function HR(t){let e=F.useContext(yi);return e||be(!1),e}function JE(t){let e=HR(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function qR(){var t;let e=F.useContext(GE),n=WR(hu.UseRouteError),r=JE(hu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KR(){let{router:t}=$R(XE.UseNavigateStable),e=JE(hu.UseNavigateStable),n=F.useRef(!1);return QE(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qo({fromRouteId:e},s)))},[t,e])}function Qt(t){be(!1)}function GR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1,future:l}=t;ha()&&be(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:Qo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:R="default"}=r,k=F.useMemo(()=>{let N=cp(d,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:w,key:R},navigationType:i}},[u,d,p,m,w,R,i]);return k==null?null:F.createElement(gi.Provider,{value:c},F.createElement(Xu.Provider,{children:n,value:k}))}function Ny(t){let{children:e,location:n}=t;return VR(Rd(e),n)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Rd(r.props.children,s));return}r.type!==Qt&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pd.apply(this,arguments)}function QR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XR(t,e){return t.button===0&&(!e||e==="_self")&&!YR(t)}const JR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ZR="6";try{window.__reactRouterVersion=ZR}catch{}const eP="startTransition",xy=YI[eP];function tP(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=lR({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=F.useCallback(p=>{c&&xy?xy(()=>u(p)):u(p)},[u,c]);return F.useLayoutEffect(()=>o.listen(d),[o,d]),F.createElement(GR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zt=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=QR(e,JR),{basename:w}=F.useContext(gi),R,k=!1;if(typeof c=="string"&&rP.test(c)&&(R=c,nP))try{let I=new URL(window.location.href),b=c.startsWith("//")?new URL(I.protocol+c):new URL(c),V=cp(b.pathname,w);b.origin===I.origin&&V!=null?c=V+b.search+b.hash:k=!0}catch{}let N=DR(c,{relative:i}),_=iP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function v(I){r&&r(I),I.defaultPrevented||_(I)}return F.createElement("a",Pd({},m,{href:R||N,onClick:k||s?r:v,ref:n,target:u}))});var Oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Oy||(Oy={}));var by;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(by||(by={}));function iP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=dp(),c=As(),d=YE(t,{relative:o});return F.useCallback(p=>{if(XR(p,n)){p.preventDefault();let m=r!==void 0?r:cu(c)===cu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const ZE=F.createContext(),sP=({children:t})=>{const[e,n]=F.useState("");return P.jsx(ZE.Provider,{value:{pageTitle:e,setPageTitle:n},children:t})},e1=()=>F.useContext(ZE),Dy=()=>{};let fp={},t1={},n1=null,r1={mark:Dy,measure:Dy};try{typeof window<"u"&&(fp=window),typeof document<"u"&&(t1=document),typeof MutationObserver<"u"&&(n1=MutationObserver),typeof performance<"u"&&(r1=performance)}catch{}const{userAgent:Ly=""}=fp.navigator||{},Rr=fp,ye=t1,Vy=n1,ul=r1;Rr.document;const Wn=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",i1=~Ly.indexOf("MSIE")||~Ly.indexOf("Trident/");var _e="classic",s1="duotone",wt="sharp",Tt="sharp-duotone",oP=[_e,s1,wt,Tt],aP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},My={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},lP=["kit"],uP=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,cP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,hP={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},dP={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},fP={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},pP={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},mP={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},gP={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},o1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},yP=["solid","regular","light","thin","duotone","brands"],a1=[1,2,3,4,5,6,7,8,9,10],vP=a1.concat([11,12,13,14,15,16,17,18,19,20]),ao={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_P=[...Object.keys(pP),...yP,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ao.GROUP,ao.SWAP_OPACITY,ao.PRIMARY,ao.SECONDARY].concat(a1.map(t=>"".concat(t,"x"))).concat(vP.map(t=>"w-".concat(t))),EP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wP={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},TP={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Fy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Mn="___FONT_AWESOME___",Cd=16,l1="fa",u1="svg-inline--fa",oi="data-fa-i2svg",kd="data-fa-pseudo-element",IP="data-fa-pseudo-element-pending",pp="data-prefix",mp="data-icon",Uy="fontawesome-i2svg",AP="async",SP=["HTML","HEAD","STYLE","SCRIPT"],c1=(()=>{try{return!0}catch{return!1}})(),h1=[_e,wt,Tt];function da(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_e]}})}const d1={...o1};d1[_e]={...o1[_e],...My.kit,...My["kit-duotone"]};const Jr=da(d1),Nd={...gP};Nd[_e]={...Nd[_e],...Fy.kit,...Fy["kit-duotone"]};const Yo=da(Nd),xd={...mP};xd[_e]={...xd[_e],...TP.kit};const Zr=da(xd),Od={...fP};Od[_e]={...Od[_e],...wP.kit};const RP=da(Od),PP=uP,f1="fa-layers-text",CP=cP,kP={...aP};da(kP);const NP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mh=ao,cs=new Set;Object.keys(Yo[_e]).map(cs.add.bind(cs));Object.keys(Yo[wt]).map(cs.add.bind(cs));Object.keys(Yo[Tt]).map(cs.add.bind(cs));const xP=[...lP,..._P],Ao=Rr.FontAwesomeConfig||{};function OP(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ye&&typeof ye.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=bP(OP(n));i!=null&&(Ao[r]=i)});const p1={styleDefault:"solid",familyDefault:"classic",cssPrefix:l1,replacementClass:u1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);const hs={...p1,...Ao};hs.autoReplaceSvg||(hs.observeMutations=!1);const q={};Object.keys(p1).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){hs[t]=e,So.forEach(n=>n(q))},get:function(){return hs[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){hs.cssPrefix=t,So.forEach(e=>e(q))},get:function(){return hs.cssPrefix}});Rr.FontAwesomeConfig=q;const So=[];function DP(t){return So.push(t),()=>{So.splice(So.indexOf(t),1)}}const Yn=Cd,en={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function LP(t){if(!t||!Wn)return;const e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ye.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}const VP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xo(){let t=12,e="";for(;t-- >0;)e+=VP[Math.random()*62|0];return e}function Ss(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function gp(t){return t.classList?Ss(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function m1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function MP(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(m1(t[n]),'" '),"").trim()}function Ju(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function yp(t){return t.size!==en.size||t.x!==en.x||t.y!==en.y||t.rotate!==en.rotate||t.flipX||t.flipY}function FP(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function UP(t){let{transform:e,width:n=Cd,height:r=Cd,startCentered:i=!1}=t,s="";return i&&i1?s+="translate(".concat(e.x/Yn-n/2,"em, ").concat(e.y/Yn-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Yn,"em), calc(-50% + ").concat(e.y/Yn,"em)) "):s+="translate(".concat(e.x/Yn,"em, ").concat(e.y/Yn,"em) "),s+="scale(".concat(e.size/Yn*(e.flipX?-1:1),", ").concat(e.size/Yn*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var jP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function g1(){const t=l1,e=u1,n=q.cssPrefix,r=q.replacementClass;let i=jP;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let jy=!1;function gh(){q.autoAddCss&&!jy&&(LP(g1()),jy=!0)}var zP={mixout(){return{dom:{css:g1,insertCss:gh}}},hooks(){return{beforeDOMElementCreation(){gh()},beforeI2svg(){gh()}}}};const Fn=Rr||{};Fn[Mn]||(Fn[Mn]={});Fn[Mn].styles||(Fn[Mn].styles={});Fn[Mn].hooks||(Fn[Mn].hooks={});Fn[Mn].shims||(Fn[Mn].shims=[]);var tn=Fn[Mn];const y1=[],v1=function(){ye.removeEventListener("DOMContentLoaded",v1),du=1,y1.map(t=>t())};let du=!1;Wn&&(du=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),du||ye.addEventListener("DOMContentLoaded",v1));function BP(t){Wn&&(du?setTimeout(t,0):y1.push(t))}function fa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?m1(t):"<".concat(e," ").concat(MP(n),">").concat(r.map(fa).join(""),"</").concat(e,">")}function zy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=l(d,e[c],c,e);return d};function $P(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function bd(t){const e=$P(t);return e.length===1?e[0].toString(16):null}function WP(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function By(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Dd(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=By(e);typeof tn.hooks.addPack=="function"&&!r?tn.hooks.addPack(t,By(e)):tn.styles[t]={...tn.styles[t]||{},...i},t==="fas"&&Dd("fa",e)}const{styles:Hr,shims:HP}=tn,qP={[_e]:Object.values(Zr[_e]),[wt]:Object.values(Zr[wt]),[Tt]:Object.values(Zr[Tt])};let vp=null,_1={},E1={},w1={},T1={},I1={};const KP={[_e]:Object.keys(Jr[_e]),[wt]:Object.keys(Jr[wt]),[Tt]:Object.keys(Jr[Tt])};function GP(t){return~xP.indexOf(t)}function QP(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!GP(i)?i:null}const A1=()=>{const t=r=>yh(Hr,(i,s,o)=>(i[o]=yh(s,r,{}),i),{});_1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),E1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),I1=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in Hr||q.autoFetchSvg,n=yh(HP,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});w1=n.names,T1=n.unicodes,vp=Zu(q.styleDefault,{family:q.familyDefault})};DP(t=>{vp=Zu(t.styleDefault,{family:q.familyDefault})});A1();function _p(t,e){return(_1[t]||{})[e]}function YP(t,e){return(E1[t]||{})[e]}function ur(t,e){return(I1[t]||{})[e]}function S1(t){return w1[t]||{prefix:null,iconName:null}}function XP(t){const e=T1[t],n=_p("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pr(){return vp}const Ep=()=>({prefix:null,iconName:null,rest:[]});function Zu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_e}=e,r=Jr[n][t],i=Yo[n][t]||Yo[n][r],s=t in tn.styles?t:null;return i||s||null}const JP={[_e]:Object.keys(Zr[_e]),[wt]:Object.keys(Zr[wt]),[Tt]:Object.keys(Zr[Tt])};function ec(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[_e]:"".concat(q.cssPrefix,"-").concat(_e),[wt]:"".concat(q.cssPrefix,"-").concat(wt),[Tt]:"".concat(q.cssPrefix,"-").concat(Tt)};let i=null,s=_e;const o=oP.filter(u=>u!==s1);o.forEach(u=>{(t.includes(r[u])||t.some(c=>JP[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const d=QP(q.cssPrefix,c);if(Hr[c]?(c=qP[s].includes(c)?RP[s][c]:c,i=c,u.prefix=c):KP[s].indexOf(c)>-1?(i=c,u.prefix=Zu(c,{family:s})):d?u.iconName=d:c!==q.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?S1(u.iconName):{},m=ur(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Hr.far&&Hr.fas&&!q.autoFetchSvg&&(u.prefix="fas")}return u},Ep());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===wt&&(Hr.fass||q.autoFetchSvg)&&(l.prefix="fass",l.iconName=ur(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===Tt&&(Hr.fasds||q.autoFetchSvg)&&(l.prefix="fasds",l.iconName=ur(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Pr()||"fas"),l}class ZP{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},Dd(s,i[s]);const o=Zr[_e][s];o&&Dd(o,i[s]),A1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let $y=[],Bi={};const Ji={},eC=Object.keys(Ji);function tC(t,e){let{mixoutsTo:n}=e;return $y=t,Bi={},Object.keys(Ji).forEach(r=>{eC.indexOf(r)===-1&&delete Ji[r]}),$y.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{Bi[o]||(Bi[o]=[]),Bi[o].push(s[o])})}r.provides&&r.provides(Ji)}),n}function Ld(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Bi[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Bi[t]||[]).forEach(s=>{s.apply(null,n)})}function Cr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ji[t]?Ji[t].apply(null,e):void 0}function Vd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Pr();if(e)return e=ur(n,e)||e,zy(R1.definitions,n,e)||zy(tn.styles,n,e)}const R1=new ZP,nC=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,ai("noAuto")},rC={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(ai("beforeI2svg",t),Cr("pseudoElements2svg",t),Cr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,BP(()=>{sC({autoReplaceSvgRoot:e}),ai("watch",t)})}},iC={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ur(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Zu(t[0]);return{prefix:n,iconName:ur(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(PP))){const e=ec(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Pr(),iconName:ur(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Pr();return{prefix:e,iconName:ur(e,t)||t}}}},Rt={noAuto:nC,config:q,dom:rC,parse:iC,library:R1,findIconDefinition:Vd,toHtml:fa},sC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ye}=t;(Object.keys(tn.styles).length>0||q.autoFetchSvg)&&Wn&&q.autoReplaceSvg&&Rt.dom.i2svg({node:e})};function tc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>fa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Wn)return;const n=ye.createElement("div");return n.innerHTML=t.html,n.children}}),t}function oC(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(yp(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=Ju({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function aC(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function wp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:m,height:w}=n.found?n:e,R=r==="fak",k=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(V=>d.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(d.classes).join(" ");let N={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(w)}};const _=R&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/w*16*.0625,"em")}:{};p&&(N.attributes[oi]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||Xo())},children:[l]}),delete N.attributes.title);const v={...N,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{..._,...d.styles}},{children:I,attributes:b}=n.found&&e.found?Cr("generateAbstractMask",v)||{children:[],attributes:{}}:Cr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=I,v.attributes=b,o?aC(v):oC(v)}function Wy(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[oi]="");const c={...o.styles};yp(i)&&(c.transform=UP({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Ju(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function lC(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Ju(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:vh}=tn;function Md(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(mh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(mh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(mh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const uC={found:!1,width:512,height:512};function cC(t,e){!c1&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fd(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=Pr()),new Promise((r,i)=>{if(n==="fa"){const s=S1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&vh[e]&&vh[e][t]){const s=vh[e][t];return r(Md(s))}cC(t,e),r({...uC,icon:q.showMissingIcons&&t?Cr("missingIconAbstract")||{}:{}})})}const Hy=()=>{},Ud=q.measurePerformance&&ul&&ul.mark&&ul.measure?ul:{mark:Hy,measure:Hy},lo='FA "6.6.0"',hC=t=>(Ud.mark("".concat(lo," ").concat(t," begins")),()=>P1(t)),P1=t=>{Ud.mark("".concat(lo," ").concat(t," ends")),Ud.measure("".concat(lo," ").concat(t),"".concat(lo," ").concat(t," begins"),"".concat(lo," ").concat(t," ends"))};var Tp={begin:hC,end:P1};const kl=()=>{};function qy(t){return typeof(t.getAttribute?t.getAttribute(oi):null)=="string"}function dC(t){const e=t.getAttribute?t.getAttribute(pp):null,n=t.getAttribute?t.getAttribute(mp):null;return e&&n}function fC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function pC(){return q.autoReplaceSvg===!0?Nl.replace:Nl[q.autoReplaceSvg]||Nl.replace}function mC(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function gC(t){return ye.createElement(t)}function C1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?mC:gC}=e;if(typeof t=="string")return ye.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(C1(s,{ceFn:n}))}),r}function yC(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Nl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(C1(n),e)}),e.getAttribute(oi)===null&&q.keepOriginalSource){let n=ye.createComment(yC(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~gp(e).indexOf(q.replacementClass))return Nl.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===q.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>fa(s)).join(`
`);e.setAttribute(oi,""),e.innerHTML=i}};function Ky(t){t()}function k1(t,e){const n=typeof e=="function"?e:kl;if(t.length===0)n();else{let r=Ky;q.mutateApproach===AP&&(r=Rr.requestAnimationFrame||Ky),r(()=>{const i=pC(),s=Tp.begin("mutate");t.map(i),s(),n()})}}let Ip=!1;function N1(){Ip=!0}function jd(){Ip=!1}let fu=null;function Gy(t){if(!Vy||!q.observeMutations)return;const{treeCallback:e=kl,nodeCallback:n=kl,pseudoElementsCallback:r=kl,observeMutationsRoot:i=ye}=t;fu=new Vy(s=>{if(Ip)return;const o=Pr();Ss(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!qy(l.addedNodes[0])&&(q.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&q.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&qy(l.target)&&~NP.indexOf(l.attributeName))if(l.attributeName==="class"&&dC(l.target)){const{prefix:u,iconName:c}=ec(gp(l.target));l.target.setAttribute(pp,u||o),c&&l.target.setAttribute(mp,c)}else fC(l.target)&&n(l.target)})}),Wn&&fu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vC(){fu&&fu.disconnect()}function _C(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function EC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=ec(gp(t));return i.prefix||(i.prefix=Pr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=YP(i.prefix,t.innerText)||_p(i.prefix,bd(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function wC(t){const e=Ss(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||Xo()):(e["aria-hidden"]="true",e.focusable="false")),e}function TC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:en,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=EC(t),s=wC(t),o=Ld("parseNodeAttributes",{},t);let l=e.styleParser?_C(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:en,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:IC}=tn;function x1(t){const e=q.autoReplaceSvg==="nest"?Qy(t,{styleParser:!1}):Qy(t);return~e.extra.classes.indexOf(f1)?Cr("generateLayersText",t,e):Cr("generateSvgReplacementMutation",t,e)}let hn=new Set;h1.map(t=>{hn.add("fa-".concat(t))});Object.keys(Jr[_e]).map(hn.add.bind(hn));Object.keys(Jr[wt]).map(hn.add.bind(hn));Object.keys(Jr[Tt]).map(hn.add.bind(hn));hn=[...hn];function Yy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();const n=ye.documentElement.classList,r=d=>n.add("".concat(Uy,"-").concat(d)),i=d=>n.remove("".concat(Uy,"-").concat(d)),s=q.autoFetchSvg?hn:h1.map(d=>"fa-".concat(d)).concat(Object.keys(IC));s.includes("fa")||s.push("fa");const o=[".".concat(f1,":not([").concat(oi,"])")].concat(s.map(d=>".".concat(d,":not([").concat(oi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Ss(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Tp.begin("onTree"),c=l.reduce((d,p)=>{try{const m=x1(p);m&&d.push(m)}catch(m){c1||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{k1(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function AC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x1(t).then(n=>{n&&k1([n],e)})}function SC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Vd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Vd(i||{})),t(r,{...n,mask:i})}}const RC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=en,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:w}=t;return tc({type:"icon",...t},()=>(ai("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(l||Xo()):(c["aria-hidden"]="true",c.focusable="false")),wp({icons:{main:Md(w),mask:i?Md(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...en,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var PC={mixout(){return{icon:SC(RC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Yy,t.nodeCallback=AC,t}}},provides(t){t.i2svg=function(e){const{node:n=ye,callback:r=()=>{}}=e;return Yy(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,w)=>{Promise.all([Fd(r,o),c.iconName?Fd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[k,N]=R;m([e,wp({icons:{main:k,mask:N},prefix:o,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=Ju(o);l.length>0&&(r.style=l);let u;return yp(s)&&(u=Cr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},CC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return tc({type:"layer"},()=>{ai("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},kC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return tc({type:"counter",content:t},()=>(ai("beforeDOMElementCreation",{content:t,params:e}),lC({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},NC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=en,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return tc({type:"text",content:t},()=>(ai("beforeDOMElementCreation",{content:t,params:e}),Wy({content:t,transform:{...en,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(i1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Wy({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const xC=new RegExp('"',"ug"),Xy=[1105920,1112319],Jy={FontAwesome:{normal:"fas",400:"fas"},...dP,...hP,...EP},zd=Object.keys(Jy).reduce((t,e)=>(t[e.toLowerCase()]=Jy[e],t),{}),OC=Object.keys(zd).reduce((t,e)=>{const n=zd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function bC(t){const e=t.replace(xC,""),n=WP(e,0),r=n>=Xy[0]&&n<=Xy[1],i=e.length===2?e[0]===e[1]:!1;return{value:bd(i?e[0]:e),isSecondary:r||i}}function DC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(zd[n]||{})[i]||OC[n]}function Zy(t,e){const n="".concat(IP).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Ss(t.children).filter(m=>m.getAttribute(kd)===e)[0],l=Rr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(CP),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let w=DC(u,d);const{value:R,isSecondary:k}=bC(m),N=c[0].startsWith("FontAwesome");let _=_p(w,R),v=_;if(N){const I=XP(R);I.iconName&&I.prefix&&(_=I.iconName,w=I.prefix)}if(_&&!k&&(!o||o.getAttribute(pp)!==w||o.getAttribute(mp)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const I=TC(),{extra:b}=I;b.attributes[kd]=e,Fd(_,w).then(V=>{const j=wp({...I,icons:{main:V,mask:Ep()},prefix:w,iconName:v,extra:b,watchable:!0}),E=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=j.map(y=>fa(y)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function LC(t){return Promise.all([Zy(t,"::before"),Zy(t,"::after")])}function VC(t){return t.parentNode!==document.head&&!~SP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ev(t){if(Wn)return new Promise((e,n)=>{const r=Ss(t.querySelectorAll("*")).filter(VC).map(LC),i=Tp.begin("searchPseudoElements");N1(),Promise.all(r).then(()=>{i(),jd(),e()}).catch(()=>{i(),jd(),n()})})}var MC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ev,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ye}=e;q.searchPseudoElements&&ev(n)}}};let tv=!1;var FC={mixout(){return{dom:{unwatch(){N1(),tv=!0}}}},hooks(){return{bootstrap(){Gy(Ld("mutationObserverCallbacks",{}))},noAuto(){vC()},watch(t){const{observeMutationsRoot:e}=t;tv?jd():Gy(Ld("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const nv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var UC={mixout(){return{parse:{transform:t=>nv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=nv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const _h={x:0,y:0,width:"100%",height:"100%"};function rv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jC(t){return t.tag==="g"?t.children:[t]}var zC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ec(n.split(" ").map(i=>i.trim())):Ep();return r.prefix||(r.prefix=Pr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,m=FP({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:{..._h,fill:"white"}},R=c.children?{children:c.children.map(rv)}:{},k={tag:"g",attributes:{...m.inner},children:[rv({tag:c.tag,attributes:{...c.attributes,...m.path},...R})]},N={tag:"g",attributes:{...m.outer},children:[k]},_="mask-".concat(o||Xo()),v="clip-".concat(o||Xo()),I={tag:"mask",attributes:{..._h,id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[w,N]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:jC(p)},I]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(_,")"),..._h}}),{children:n,attributes:r}}}},BC={provides(t){let e=!1;Rr.matchMedia&&(e=Rr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},$C={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},WC=[zP,PC,CC,kC,NC,MC,FC,UC,zC,BC,$C];tC(WC,{mixoutsTo:Rt});Rt.noAuto;Rt.config;Rt.library;Rt.dom;const Bd=Rt.parse;Rt.findIconDefinition;Rt.toHtml;const HC=Rt.icon;Rt.layer;Rt.text;Rt.counter;var O1={exports:{}},qC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",KC=qC,GC=KC;function b1(){}function D1(){}D1.resetWarningCache=b1;var QC=function(){function t(r,i,s,o,l,u){if(u!==GC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:D1,resetWarningCache:b1};return n.PropTypes=n,n};O1.exports=QC();var YC=O1.exports;const ee=C_(YC);function iv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?iv(Object(n),!0).forEach(function(r){$i(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):iv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pu(t){"@babel/helpers - typeof";return pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pu(t)}function $i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JC(t,e){if(t==null)return{};var n=XC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $d(t){return ZC(t)||ek(t)||tk(t)||nk()}function ZC(t){if(Array.isArray(t))return Wd(t)}function ek(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tk(t,e){if(t){if(typeof t=="string")return Wd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wd(t,e)}}function Wd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function nk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rk(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,w=t.inverse,R=t.border,k=t.listItem,N=t.flip,_=t.size,v=t.rotation,I=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":w,"fa-border":R,"fa-li":k,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},$i(e,"fa-".concat(_),typeof _<"u"&&_!==null),$i(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),$i(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),$i(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(V){return b[V]?V:null}).filter(function(V){return V})}function ik(t){return t=t-0,t===t}function L1(t){return ik(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var sk=["style"];function ok(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ak(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=L1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[ok(i)]=s:e[i]=s,e},{})}function V1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return V1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=ak(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[L1(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=JC(n,sk);return i.attrs.style=Xt(Xt({},i.attrs.style),o),t.apply(void 0,[e.tag,Xt(Xt({},i.attrs),l)].concat($d(r)))}var M1=!1;try{M1=!0}catch{}function lk(){if(!M1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function sv(t){if(t&&pu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bd.icon)return Bd.icon(t);if(t===null)return null;if(t&&pu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Eh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$i({},t,e):{}}var ov={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Wi=Lu.forwardRef(function(t,e){var n=Xt(Xt({},ov),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,d=sv(r),p=Eh("classes",[].concat($d(rk(n)),$d((o||"").split(" ")))),m=Eh("transform",typeof n.transform=="string"?Bd.transform(n.transform):n.transform),w=Eh("mask",sv(i)),R=HC(d,Xt(Xt(Xt(Xt({},p),m),w),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!R)return lk("Could not find icon",d),null;var k=R.abstract,N={ref:e};return Object.keys(n).forEach(function(_){ov.hasOwnProperty(_)||(N[_]=n[_])}),uk(k[0],N)});Wi.displayName="FontAwesomeIcon";Wi.propTypes={beat:ee.bool,border:ee.bool,beatFade:ee.bool,bounce:ee.bool,className:ee.string,fade:ee.bool,flash:ee.bool,mask:ee.oneOfType([ee.object,ee.array,ee.string]),maskId:ee.string,fixedWidth:ee.bool,inverse:ee.bool,flip:ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ee.oneOfType([ee.object,ee.array,ee.string]),listItem:ee.bool,pull:ee.oneOf(["right","left"]),pulse:ee.bool,rotation:ee.oneOf([0,90,180,270]),shake:ee.bool,size:ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ee.bool,spinPulse:ee.bool,spinReverse:ee.bool,symbol:ee.oneOfType([ee.bool,ee.string]),title:ee.string,titleId:ee.string,transform:ee.oneOfType([ee.string,ee.object]),swapOpacity:ee.bool};var uk=V1.bind(null,Lu.createElement);const ck={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},hk={prefix:"fas",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},dk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},fk={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},pk=()=>P.jsx("div",{className:"Footer",children:P.jsxs("div",{className:"ButtonContainer",children:[P.jsx(Zt,{to:"/UserLists",children:P.jsx(Wi,{className:"Icon HouseIcon",icon:dk})}),P.jsx(Zt,{to:"/AddMovie",children:P.jsx(Wi,{className:"Icon PlusIcon",icon:hk})}),P.jsx(Zt,{to:"/TimeLine",children:P.jsx(Wi,{className:"Icon BellIcon",icon:fk})}),P.jsx(Zt,{to:"/MyPage",children:P.jsx(Wi,{className:"Icon UserIcon",icon:ck})})]})});var av={};/**
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
 */const F1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},U1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new gk;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yk=function(t){const e=F1(t);return U1.encodeByteArray(e,!0)},mu=function(t){return yk(t).replace(/\./g,"")},j1=function(t){try{return U1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _k=()=>vk().__FIREBASE_DEFAULTS__,Ek=()=>{if(typeof process>"u"||typeof av>"u")return;const t=av.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&j1(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return _k()||Ek()||wk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z1=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B1=t=>{const e=z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$1=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},W1=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function H1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mu(JSON.stringify(n)),mu(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ik(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function Ak(){var t;const e=(t=nc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pk(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ck(){return!Ak()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kk(){try{return typeof indexedDB=="object"}catch{return!1}}function Nk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const xk="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xk,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ok(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pn(i,l,r)}}function Ok(t,e){return t.replace(bk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bk=/\{\$([^}]+)}/g;function Dk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lv(s)&&lv(o)){if(!gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lv(t){return t!==null&&typeof t=="object"}/**
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
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Lk(t,e){const n=new Vk(t,e);return n.subscribe.bind(n)}class Vk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wh),i.error===void 0&&(i.error=wh),i.complete===void 0&&(i.complete=wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wh(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class Fk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jk(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uk(t){return t===Wr?void 0:t}function jk(t){return t.instantiationMode==="EAGER"}/**
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
 */class zk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Bk={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},$k=re.INFO,Wk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Hk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Wk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ap{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=Hk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const qk=(t,e)=>e.some(n=>t instanceof n);let uv,cv;function Kk(){return uv||(uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gk(){return cv||(cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const q1=new WeakMap,Hd=new WeakMap,K1=new WeakMap,Th=new WeakMap,Sp=new WeakMap;function Qk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&q1.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function Yk(t){if(Hd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hd.set(t,e)}let qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||K1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xk(t){qd=t(qd)}function Jk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ih(this),e,...n);return K1.set(r,e.sort?e.sort():[e]),Er(r)}:Gk().includes(t)?function(...e){return t.apply(Ih(this),e),Er(q1.get(this))}:function(...e){return Er(t.apply(Ih(this),e))}}function Zk(t){return typeof t=="function"?Jk(t):(t instanceof IDBTransaction&&Yk(t),qk(t,Kk())?new Proxy(t,qd):t)}function Er(t){if(t instanceof IDBRequest)return Qk(t);if(Th.has(t))return Th.get(t);const e=Zk(t);return e!==t&&(Th.set(t,e),Sp.set(e,t)),e}const Ih=t=>Sp.get(t);function e2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],Ah=new Map;function hv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=n2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||t2.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ah.set(e,s),s}Xk(t=>({...t,get:(e,n,r)=>hv(e,n)||t.get(e,n,r),has:(e,n)=>!!hv(e,n)||t.has(e,n)}));/**
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
 */class r2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kd="@firebase/app",dv="0.10.9";/**
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
 */const Un=new Ap("@firebase/app"),s2="@firebase/app-compat",o2="@firebase/analytics-compat",a2="@firebase/analytics",l2="@firebase/app-check-compat",u2="@firebase/app-check",c2="@firebase/auth",h2="@firebase/auth-compat",d2="@firebase/database",f2="@firebase/database-compat",p2="@firebase/functions",m2="@firebase/functions-compat",g2="@firebase/installations",y2="@firebase/installations-compat",v2="@firebase/messaging",_2="@firebase/messaging-compat",E2="@firebase/performance",w2="@firebase/performance-compat",T2="@firebase/remote-config",I2="@firebase/remote-config-compat",A2="@firebase/storage",S2="@firebase/storage-compat",R2="@firebase/firestore",P2="@firebase/vertexai-preview",C2="@firebase/firestore-compat",k2="firebase",N2="10.13.0";/**
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
 */const Gd="[DEFAULT]",x2={[Kd]:"fire-core",[s2]:"fire-core-compat",[a2]:"fire-analytics",[o2]:"fire-analytics-compat",[u2]:"fire-app-check",[l2]:"fire-app-check-compat",[c2]:"fire-auth",[h2]:"fire-auth-compat",[d2]:"fire-rtdb",[f2]:"fire-rtdb-compat",[p2]:"fire-fn",[m2]:"fire-fn-compat",[g2]:"fire-iid",[y2]:"fire-iid-compat",[v2]:"fire-fcm",[_2]:"fire-fcm-compat",[E2]:"fire-perf",[w2]:"fire-perf-compat",[T2]:"fire-rc",[I2]:"fire-rc-compat",[A2]:"fire-gcs",[S2]:"fire-gcs-compat",[R2]:"fire-fst",[C2]:"fire-fst-compat",[P2]:"fire-vertex","fire-js":"fire-js",[k2]:"fire-js-all"};/**
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
 */const yu=new Map,O2=new Map,Qd=new Map;function fv(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(Qd.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Qd.set(e,t);for(const n of yu.values())fv(n,t);for(const n of O2.values())fv(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
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
 */const b2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new pa("app","Firebase",b2);/**
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
 */class D2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const vi=N2;function G1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=$1()),!n)throw wr.create("no-options");const s=yu.get(i);if(s){if(gu(n,s.options)&&gu(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new zk(i);for(const u of Qd.values())o.addComponent(u);const l=new D2(n,r,o);return yu.set(i,l),l}function Rp(t=Gd){const e=yu.get(t);if(!e&&t===Gd&&$1())return G1();if(!e)throw wr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=x2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}li(new kr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const L2="firebase-heartbeat-database",V2=1,Jo="firebase-heartbeat-store";let Sh=null;function Q1(){return Sh||(Sh=e2(L2,V2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Sh}async function M2(t){try{const n=(await Q1()).transaction(Jo),r=await n.objectStore(Jo).get(Y1(t));return await n.done,r}catch(e){if(e instanceof pn)Un.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function pv(t,e){try{const r=(await Q1()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,Y1(t)),await r.done}catch(n){if(n instanceof pn)Un.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function Y1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const F2=1024,U2=30*24*60*60*1e3;class j2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mv();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=U2}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Un.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mv(),{heartbeatsToSend:r,unsentEntries:i}=z2(this._heartbeatsCache.heartbeats),s=mu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function mv(){return new Date().toISOString().substring(0,10)}function z2(t,e=F2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class B2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kk()?Nk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gv(t){return mu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $2(t){li(new kr("platform-logger",e=>new r2(e),"PRIVATE")),li(new kr("heartbeat",e=>new j2(e),"PRIVATE")),on(Kd,dv,t),on(Kd,dv,"esm2017"),on("fire-js","")}$2("");var W2="firebase",H2="10.13.0";/**
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
 */on(W2,H2,"app");function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function X1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q2=X1,J1=new pa("auth","Firebase",X1());/**
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
 */const vu=new Ap("@firebase/auth");function K2(t,...e){vu.logLevel<=re.WARN&&vu.warn(`Auth (${vi}): ${t}`,...e)}function xl(t,...e){vu.logLevel<=re.ERROR&&vu.error(`Auth (${vi}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Cp(t,...e)}function an(t,...e){return Cp(t,...e)}function Z1(t,e,n){const r=Object.assign(Object.assign({},q2()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return Z1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J1.create(t,...e)}function G(t,e,...n){if(!t)throw Cp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function jn(t,e){t||Pn(e)}/**
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
 */function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G2(){return yv()==="http:"||yv()==="https:"}function yv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G2()||Sk()||"connection"in navigator)?navigator.onLine:!0}function Y2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ik()||Rk()}get(){return Q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kp(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const X2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const J2=new ga(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,i={}){return tw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),ew.fetch()(nw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function tw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},X2),e);try{const i=new eN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Z1(t,d,c);qt(t,d)}}catch(i){if(i instanceof pn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function ya(t,e,n,r,i={}){const s=await Hn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?kp(t.config,i):`${t.config.apiScheme}://${i}`}function Z2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),J2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}function vv(t){return t!==void 0&&t.enterprise!==void 0}class tN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Z2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nN(t,e){return Hn(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function rN(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function rw(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Np(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(Rh(i.auth_time)),issuedAtTime:Ro(Rh(i.iat)),expirationTime:Ro(Rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rh(t){return Number(t)*1e3}function Np(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=j1(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _v(t){const e=Np(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&sN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,rw(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iw(s.providerUserInfo):[],l=lN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function aN(t){const e=st(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iw(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uN(t,e){const n=await tw(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ew.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cN(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=_v(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Xn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return aN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await ds(this,rN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:b,isAnonymous:V,providerData:j,stsTokenManager:E}=n;G(I&&E,e,"internal-error");const y=Zi.fromJSON(this.name,E);G(typeof I=="string",e,"internal-error"),Xn(p,e.name),Xn(m,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof V=="boolean",e,"internal-error"),Xn(w,e.name),Xn(R,e.name),Xn(k,e.name),Xn(N,e.name),Xn(_,e.name),Xn(v,e.name);const T=new Cn({uid:I,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:V,photoURL:R,phoneNumber:w,tenantId:k,stsTokenManager:y,createdAt:_,lastLoginAt:v});return j&&Array.isArray(j)&&(T.providerData=j.map(A=>Object.assign({},A))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Zi;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Ev=new Map;function kn(t){jn(t instanceof Function,"Expected a class definition");let e=Ev.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ev.set(t,e),e)}/**
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
 */class sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sw.type="NONE";const wv=sw;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(kn(wv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(wv);const o=Ol(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Cn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new es(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new es(s,e,r))}}/**
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
 */function Tv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(dw(e))return"Webos";if(aw(e))return"Safari";if((e.includes("chrome/")||lw(e))&&!e.includes("edge/"))return"Chrome";if(cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ow(t=it()){return/firefox\//i.test(t)}function aw(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lw(t=it()){return/crios\//i.test(t)}function uw(t=it()){return/iemobile/i.test(t)}function cw(t=it()){return/android/i.test(t)}function hw(t=it()){return/blackberry/i.test(t)}function dw(t=it()){return/webos/i.test(t)}function xp(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hN(t=it()){var e;return xp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dN(){return Pk()&&document.documentMode===10}function fw(t=it()){return xp(t)||cw(t)||dw(t)||hw(t)||/windows phone/i.test(t)||uw(t)}/**
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
 */function pw(t,e=[]){let n;switch(t){case"Browser":n=Tv(it());break;case"Worker":n=`${Tv(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
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
 */class fN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pN(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
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
 */const mN=6;class gN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class yN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iv(this),this.idTokenSubscription=new Iv(this),this.beforeStateQueue=new fN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rw(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(xn(this));const n=e?st(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pN(this),n=new gN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _i(t){return st(t)}class Iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lk(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vN(t){ic=t}function mw(t){return ic.loadJS(t)}function _N(){return ic.recaptchaEnterpriseScript}function EN(){return ic.gapiScript}function wN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TN="recaptcha-enterprise",IN="NO_RECAPTCHA";class AN{constructor(e){this.type=TN,this.auth=_i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new tN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;vv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(IN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&vv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_N();u.length!==0&&(u+=l),mw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Av(t,e,n,r=!1){const i=new AN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Av(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Av(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function SN(t,e){const n=rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gu(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function RN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PN(t,e,n){const r=_i(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=gw(e),{host:o,port:l}=CN(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),kN()}function gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CN(t){const e=gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sv(o)}}}function Sv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function NN(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xN(t,e){return ya(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
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
 */async function ON(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function bN(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class Zo extends Op{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,n,"signInWithPassword",xN);case"emailLink":return ON(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jd(e,r,"signUpPassword",NN);case"emailLink":return bN(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ts(t,e){return ya(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const DN="http://localhost";class ui extends Op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:DN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */function LN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VN(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class bp{constructor(e){var n,r,i,s,o,l;const u=uo(co(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=LN((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=VN(e);try{return new bp(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bp.parseLink(n);return G(r,"argument-error"),Zo._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class va extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends va{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends va{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends va{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function MN(t,e){return ya(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Rv(r);return new ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rv(r);return new ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eu extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eu(e,n,r,i)}}function vw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,r):s})}async function FN(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
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
 */async function UN(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await ds(t,vw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Np(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function _w(t,e,n=!1){if(nn(t.app))return Promise.reject(xn(t));const r="signIn",i=await vw(t,r,e),s=await ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jN(t,e){return _w(_i(t),e)}/**
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
 */async function Ew(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zN(t,e,n){if(nn(t.app))return Promise.reject(xn(t));const r=_i(t),o=await Jd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ew(t),u}),l=await ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BN(t,e,n){return nn(t.app)?Promise.reject(xn(t)):jN(st(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ew(t),r})}/**
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
 */async function $N(t,e){return Hn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function WN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=st(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ds(r,$N(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HN(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function qN(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function KN(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}const wu="__sak";/**
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
 */class ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GN=1e3,QN=10;class Tw extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const YN=Tw;/**
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
 */class Iw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const Aw=Iw;/**
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
 */function XN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await XN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Dp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Dp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function ZN(t){ln().location.href=t}/**
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
 */function Sw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nx(){return Sw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",rx=1,Tu="firebaseLocalStorage",Pw="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function ix(){const t=indexedDB.deleteDatabase(Rw);return new _a(t).toPromise()}function Zd(){const t=indexedDB.open(Rw,rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:Pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await ix(),e(await Zd()))})})}async function Pv(t,e,n){const r=oc(t,!0).put({[Pw]:e,value:n});return new _a(r).toPromise()}async function sx(t,e){const n=oc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function Cv(t,e){const n=oc(t,!0).delete(e);return new _a(n).toPromise()}const ox=800,ax=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new JN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zd();return await Pv(e,wu,"1"),await Cv(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=oc(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const lx=Cw;new ga(3e4,6e4);/**
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
 */function ux(t,e){return e?kn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lp extends Op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cx(t){return _w(t.auth,new Lp(t),t.bypassAuthState)}function hx(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),UN(n,new Lp(t),t.bypassAuthState)}async function dx(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),FN(n,new Lp(t),t.bypassAuthState)}/**
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
 */class kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cx;case"linkViaPopup":case"linkViaRedirect":return dx;case"reauthViaPopup":case"reauthViaRedirect":return hx;default:qt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fx=new ga(2e3,1e4);class Hi extends kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Dp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fx.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const px="pendingRedirect",bl=new Map;class mx extends kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await gx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gx(t,e){const n=_x(e),r=vx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yx(t,e){bl.set(t._key(),e)}function vx(t){return kn(t._redirectPersistence)}function _x(t){return Ol(px,t.config.apiKey,t.name)}async function Ex(t,e,n=!1){if(nn(t.app))return Promise.reject(xn(t));const r=_i(t),i=ux(r,e),o=await new mx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wx=10*60*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ix(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wx&&this.cachedEventUids.clear(),this.cachedEventUids.has(kv(e))}saveEventToCache(e){this.cachedEventUids.add(kv(e)),this.lastProcessedEventTime=Date.now()}}function kv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ix(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
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
 */async function Ax(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const Sx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rx=/^https?/;async function Px(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ax(t);for(const n of e)try{if(Cx(n))return}catch{}qt(t,"unauthorized-domain")}function Cx(t){const e=Yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Rx.test(n))return!1;if(Sx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kx=new ga(3e4,6e4);function Nv(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nx(t){return new Promise((e,n)=>{var r,i,s;function o(){Nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nv(),n(an(t,"network-request-failed"))},timeout:kx.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const l=wN("iframefcb");return ln()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},mw(`${EN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function xx(t){return Dl=Dl||Nx(t),Dl}/**
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
 */const Ox=new ga(5e3,15e3),bx="__/auth/iframe",Dx="emulator/auth/iframe",Lx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mx(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kp(e,Dx):`https://${t.config.authDomain}/${bx}`,r={apiKey:e.apiKey,appName:t.name,v:vi},i=Vx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function Fx(t){const e=await xx(t),n=ln().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Mx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{s(o)},Ox.get());function u(){ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jx=500,zx=600,Bx="_blank",$x="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(t,e,n,r=jx,i=zx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ux),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=lw(c)?Bx:n),ow(c)&&(e=e||$x,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(hN(c)&&l!=="_self")return Hx(e||"",l),new xv(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new xv(p)}function Hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qx="__/auth/handler",Kx="emulator/auth/handler",Gx=encodeURIComponent("fac");async function Ov(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vi,eventId:i};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof va){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Gx}=${encodeURIComponent(u)}`:"";return`${Qx(t)}?${ma(l).slice(1)}${c}`}function Qx({config:t}){return t.emulator?kp(t,Kx):`https://${t.authDomain}/${qx}`}/**
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
 */const Ph="webStorageSupport";class Yx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=Ex,this._overrideRedirectResult=yx}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ov(e,n,r,Yd(),i);return Wx(e,o,Dp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ov(e,n,r,Yd(),i);return ZN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fx(e),r=new Tx(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ph,{type:Ph},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ph];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Px(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fw()||aw()||xp()}}const Xx=Yx;var bv="@firebase/auth",Dv="1.7.7";/**
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
 */class Jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eO(t){li(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(t)},c=new yN(r,i,s,u);return RN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),li(new kr("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(r=>new Jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(bv,Dv,Zx(t)),on(bv,Dv,"esm2017")}/**
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
 */const tO=5*60,nO=W1("authIdTokenMaxAge")||tO;let Lv=null;const rO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nO)return;const i=n==null?void 0:n.token;Lv!==i&&(Lv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xw(t=Rp()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SN(t,{popupRedirectResolver:Xx,persistence:[lx,YN,Aw]}),r=W1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rO(s.toString());qN(n,o,()=>o(n.currentUser)),HN(n,l=>o(l))}}const i=z1("auth");return i&&PN(n,`http://${i}`),n}function iO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eO("Browser");var Vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ei,Ow;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.D=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(A,C,O){for(var S=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)S[Pt-2]=arguments[Pt];return y.prototype[C].apply(A,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)A[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)A[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],C=E.g[2];var O=E.g[3],S=y+(O^T&(C^O))+A[0]+3614090360&4294967295;y=T+(S<<7&4294967295|S>>>25),S=O+(C^y&(T^C))+A[1]+3905402710&4294967295,O=y+(S<<12&4294967295|S>>>20),S=C+(T^O&(y^T))+A[2]+606105819&4294967295,C=O+(S<<17&4294967295|S>>>15),S=T+(y^C&(O^y))+A[3]+3250441966&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(O^T&(C^O))+A[4]+4118548399&4294967295,y=T+(S<<7&4294967295|S>>>25),S=O+(C^y&(T^C))+A[5]+1200080426&4294967295,O=y+(S<<12&4294967295|S>>>20),S=C+(T^O&(y^T))+A[6]+2821735955&4294967295,C=O+(S<<17&4294967295|S>>>15),S=T+(y^C&(O^y))+A[7]+4249261313&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(O^T&(C^O))+A[8]+1770035416&4294967295,y=T+(S<<7&4294967295|S>>>25),S=O+(C^y&(T^C))+A[9]+2336552879&4294967295,O=y+(S<<12&4294967295|S>>>20),S=C+(T^O&(y^T))+A[10]+4294925233&4294967295,C=O+(S<<17&4294967295|S>>>15),S=T+(y^C&(O^y))+A[11]+2304563134&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(O^T&(C^O))+A[12]+1804603682&4294967295,y=T+(S<<7&4294967295|S>>>25),S=O+(C^y&(T^C))+A[13]+4254626195&4294967295,O=y+(S<<12&4294967295|S>>>20),S=C+(T^O&(y^T))+A[14]+2792965006&4294967295,C=O+(S<<17&4294967295|S>>>15),S=T+(y^C&(O^y))+A[15]+1236535329&4294967295,T=C+(S<<22&4294967295|S>>>10),S=y+(C^O&(T^C))+A[1]+4129170786&4294967295,y=T+(S<<5&4294967295|S>>>27),S=O+(T^C&(y^T))+A[6]+3225465664&4294967295,O=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(O^y))+A[11]+643717713&4294967295,C=O+(S<<14&4294967295|S>>>18),S=T+(O^y&(C^O))+A[0]+3921069994&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^O&(T^C))+A[5]+3593408605&4294967295,y=T+(S<<5&4294967295|S>>>27),S=O+(T^C&(y^T))+A[10]+38016083&4294967295,O=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(O^y))+A[15]+3634488961&4294967295,C=O+(S<<14&4294967295|S>>>18),S=T+(O^y&(C^O))+A[4]+3889429448&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^O&(T^C))+A[9]+568446438&4294967295,y=T+(S<<5&4294967295|S>>>27),S=O+(T^C&(y^T))+A[14]+3275163606&4294967295,O=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(O^y))+A[3]+4107603335&4294967295,C=O+(S<<14&4294967295|S>>>18),S=T+(O^y&(C^O))+A[8]+1163531501&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(C^O&(T^C))+A[13]+2850285829&4294967295,y=T+(S<<5&4294967295|S>>>27),S=O+(T^C&(y^T))+A[2]+4243563512&4294967295,O=y+(S<<9&4294967295|S>>>23),S=C+(y^T&(O^y))+A[7]+1735328473&4294967295,C=O+(S<<14&4294967295|S>>>18),S=T+(O^y&(C^O))+A[12]+2368359562&4294967295,T=C+(S<<20&4294967295|S>>>12),S=y+(T^C^O)+A[5]+4294588738&4294967295,y=T+(S<<4&4294967295|S>>>28),S=O+(y^T^C)+A[8]+2272392833&4294967295,O=y+(S<<11&4294967295|S>>>21),S=C+(O^y^T)+A[11]+1839030562&4294967295,C=O+(S<<16&4294967295|S>>>16),S=T+(C^O^y)+A[14]+4259657740&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^O)+A[1]+2763975236&4294967295,y=T+(S<<4&4294967295|S>>>28),S=O+(y^T^C)+A[4]+1272893353&4294967295,O=y+(S<<11&4294967295|S>>>21),S=C+(O^y^T)+A[7]+4139469664&4294967295,C=O+(S<<16&4294967295|S>>>16),S=T+(C^O^y)+A[10]+3200236656&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^O)+A[13]+681279174&4294967295,y=T+(S<<4&4294967295|S>>>28),S=O+(y^T^C)+A[0]+3936430074&4294967295,O=y+(S<<11&4294967295|S>>>21),S=C+(O^y^T)+A[3]+3572445317&4294967295,C=O+(S<<16&4294967295|S>>>16),S=T+(C^O^y)+A[6]+76029189&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(T^C^O)+A[9]+3654602809&4294967295,y=T+(S<<4&4294967295|S>>>28),S=O+(y^T^C)+A[12]+3873151461&4294967295,O=y+(S<<11&4294967295|S>>>21),S=C+(O^y^T)+A[15]+530742520&4294967295,C=O+(S<<16&4294967295|S>>>16),S=T+(C^O^y)+A[2]+3299628645&4294967295,T=C+(S<<23&4294967295|S>>>9),S=y+(C^(T|~O))+A[0]+4096336452&4294967295,y=T+(S<<6&4294967295|S>>>26),S=O+(T^(y|~C))+A[7]+1126891415&4294967295,O=y+(S<<10&4294967295|S>>>22),S=C+(y^(O|~T))+A[14]+2878612391&4294967295,C=O+(S<<15&4294967295|S>>>17),S=T+(O^(C|~y))+A[5]+4237533241&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~O))+A[12]+1700485571&4294967295,y=T+(S<<6&4294967295|S>>>26),S=O+(T^(y|~C))+A[3]+2399980690&4294967295,O=y+(S<<10&4294967295|S>>>22),S=C+(y^(O|~T))+A[10]+4293915773&4294967295,C=O+(S<<15&4294967295|S>>>17),S=T+(O^(C|~y))+A[1]+2240044497&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~O))+A[8]+1873313359&4294967295,y=T+(S<<6&4294967295|S>>>26),S=O+(T^(y|~C))+A[15]+4264355552&4294967295,O=y+(S<<10&4294967295|S>>>22),S=C+(y^(O|~T))+A[6]+2734768916&4294967295,C=O+(S<<15&4294967295|S>>>17),S=T+(O^(C|~y))+A[13]+1309151649&4294967295,T=C+(S<<21&4294967295|S>>>11),S=y+(C^(T|~O))+A[4]+4149444226&4294967295,y=T+(S<<6&4294967295|S>>>26),S=O+(T^(y|~C))+A[11]+3174756917&4294967295,O=y+(S<<10&4294967295|S>>>22),S=C+(y^(O|~T))+A[2]+718787259&4294967295,C=O+(S<<15&4294967295|S>>>17),S=T+(O^(C|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+O&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var T=y-this.blockSize,A=this.B,C=this.h,O=0;O<y;){if(C==0)for(;O<=T;)i(this,E,O),O+=this.blockSize;if(typeof E=="string"){for(;O<y;)if(A[C++]=E.charCodeAt(O++),C==this.blockSize){i(this,A),C=0;break}}else for(;O<y;)if(A[C++]=E[O++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var T=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=T&255,T/=256;for(this.u(E),E=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)E[T++]=this.g[y]>>>A&255;return E};function s(E,y){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;for(var T=[],A=!0,C=E.length-1;0<=C;C--){var O=E[C]|0;A&&O==y||(T[C]=O,A=!1)}this.g=T}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return N(c(-E));for(var y=[],T=1,A=0;E>=T;A++)y[A]=E/T|0,T*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return N(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),A=p,C=0;C<E.length;C+=8){var O=Math.min(8,E.length-C),S=parseInt(E.substring(C,C+O),y);8>O?(O=c(Math.pow(y,O)),A=A.j(O).add(c(S))):(A=A.j(T),A=A.add(c(S)))}return A}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var E=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+N(this).toString(E);for(var y=c(Math.pow(E,6)),T=this,A="";;){var C=b(T,y).g;T=_(T,C.j(y));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=C,R(T))return O+A;for(;6>O.length;)O="0"+O;A=O+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=_(this,E),k(E)?-1:R(E)?0:1};function N(E){for(var y=E.g.length,T=[],A=0;A<y;A++)T[A]=~E.g[A];return new o(T,~E.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0,C=0;C<=y;C++){var O=A+(this.i(C)&65535)+(E.i(C)&65535),S=(O>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);A=S>>>16,O&=65535,S&=65535,T[C]=S<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function _(E,y){return E.add(N(y))}t.j=function(E){if(R(this)||R(E))return p;if(k(this))return k(E)?N(this).j(N(E)):N(N(this).j(E));if(k(E))return N(this.j(N(E)));if(0>this.l(w)&&0>E.l(w))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<E.g.length;C++){var O=this.i(A)>>>16,S=this.i(A)&65535,Pt=E.i(C)>>>16,Mr=E.i(C)&65535;T[2*A+2*C]+=S*Mr,v(T,2*A+2*C),T[2*A+2*C+1]+=O*Mr,v(T,2*A+2*C+1),T[2*A+2*C+1]+=S*Pt,v(T,2*A+2*C+1),T[2*A+2*C+2]+=O*Pt,v(T,2*A+2*C+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function I(E,y){this.g=E,this.h=y}function b(E,y){if(R(y))throw Error("division by zero");if(R(E))return new I(p,p);if(k(E))return y=b(N(E),y),new I(N(y.g),N(y.h));if(k(y))return y=b(E,N(y)),new I(N(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(E);)T=V(T),A=V(A);var C=j(T,1),O=j(A,1);for(A=j(A,2),T=j(T,2);!R(A);){var S=O.add(A);0>=S.l(E)&&(C=C.add(T),O=S),A=j(A,1),T=j(T,1)}return y=_(E,C.j(y)),new I(C,y)}for(C=p;0<=E.l(y);){for(T=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),O=c(T),S=O.j(y);k(S)||0<S.l(E);)T-=A,O=c(T),S=O.j(y);R(O)&&(O=m),C=C.add(O),E=_(E,S)}return new I(C,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function V(E){for(var y=E.g.length+1,T=[],A=0;A<y;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function j(E,y){var T=y>>5;y%=32;for(var A=E.g.length-T,C=[],O=0;O<A;O++)C[O]=0<y?E.i(O+T)>>>y|E.i(O+T+1)<<32-y:E.i(O+T);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ow=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ei=o}).apply(typeof Vv<"u"?Vv:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bw,Dw,ho,Lw,Ll,ef,Vw,Mw,Fw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,D){for(var z=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)z[ce-2]=arguments[ce];return h.prototype[x].apply(g,z)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function N(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=a.length||0,D=g.length||0;a.length=x+D;for(let z=0;z<D;z++)a[x+z]=g[z]}else a.push(g)}}class _{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let D=0;D<T.length;D++)f=T[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function O(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,f){const g=Mr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Mr=new _(()=>new bs,a=>a.reset());class bs{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let gn,B=!1,Y=new Pt,Z=()=>{const a=l.Promise.resolve(void 0);gn=()=>{a.then(Ee)}};var Ee=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){O(f)}var h=Mr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var yn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function vn(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{b(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vn.aa.h.call(this)}}R(vn,Pe);var _n={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),rI=0;function iI(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++rI,this.da=this.fa=!1}function ka(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Na(a){this.src=a,this.g={},this.h=0}Na.prototype.add=function(a,h,f,g,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Ec(a,h,g,x);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new iI(h,this.src,D,!!g,x),h.fa=f,a.push(h)),h};function _c(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(g,x,1),D&&(ka(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ec(a,h,f,g){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return x}return-1}var wc="closure_lm_"+(1e6*Math.random()|0),Tc={};function ym(a,h,f,g,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)ym(a,h[D],f,g,x);return null}return f=Em(f),a&&a[En]?a.K(h,f,c(g)?!!g.capture:!!g,x):sI(a,h,f,!1,g,x)}function sI(a,h,f,g,x,D){if(!h)throw Error("Invalid event type");var z=c(x)?!!x.capture:!!x,ce=Ac(a);if(ce||(a[wc]=ce=new Na(a)),f=ce.add(h,f,g,z,D),f.proxy)return f;if(g=oI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)yn||(x=z),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(_m(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oI(){function a(f){return h.call(a.src,a.listener,f)}const h=aI;return a}function vm(a,h,f,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)vm(a,h[D],f,g,x);else g=c(g)?!!g.capture:!!g,f=Em(f),a&&a[En]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=Ec(D,f,g,x),-1<f&&(ka(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ac(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ec(h,f,g,x)),(f=-1<a?h[a]:null)&&Ic(f))}function Ic(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[En])_c(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(_m(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Ac(h))?(_c(f,a),f.h==0&&(f.src=null,h[wc]=null)):ka(a)}}}function _m(a){return a in Tc?Tc[a]:Tc[a]="on"+a}function aI(a,h){if(a.da)a=!0;else{h=new vn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Ic(a),a=f.call(g,h)}return a}function Ac(a){return a=a[wc],a instanceof Na?a:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Em(a){return typeof a=="function"?a:(a[Sc]||(a[Sc]=function(h){return a.handleEvent(h)}),a[Sc])}function Ge(){ue.call(this),this.i=new Na(this),this.M=this,this.F=null}R(Ge,ue),Ge.prototype[En]=!0,Ge.prototype.removeEventListener=function(a,h,f,g){vm(this,a,h,f,g)};function ot(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var x=h;h=new Pe(g,a),A(h,x)}if(x=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];x=xa(z,g,!0,h)&&x}if(z=h.g=a,x=xa(z,g,!0,h)&&x,x=xa(z,g,!1,h)&&x,f)for(D=0;D<f.length;D++)z=h.g=f[D],x=xa(z,g,!1,h)&&x}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ka(f[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ge.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function xa(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var ce=z.listener,je=z.ha||z.src;z.fa&&_c(a.i,z),x=ce.call(je,g)!==!1&&x}}return x&&!g.defaultPrevented}function wm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Tm(a){a.g=wm(()=>{a.g=null,a.i&&(a.i=!1,Tm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lI extends ue{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(a){ue.call(this),this.h=a,this.g={}}R(Ds,ue);var Im=[];function Am(a){j(a.g,function(h,f){this.g.hasOwnProperty(f)&&Ic(h)},a),a.g={}}Ds.prototype.N=function(){Ds.aa.N.call(this),Am(this)},Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rc=l.JSON.stringify,uI=l.JSON.parse,cI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pc(){}Pc.prototype.h=null;function Sm(a){return a.h||(a.h=a.i())}function Rm(){}var Ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cc(){Pe.call(this,"d")}R(Cc,Pe);function kc(){Pe.call(this,"c")}R(kc,Pe);var Fr={},Pm=null;function Oa(){return Pm=Pm||new Ge}Fr.La="serverreachability";function Cm(a){Pe.call(this,Fr.La,a)}R(Cm,Pe);function Vs(a){const h=Oa();ot(h,new Cm(h))}Fr.STAT_EVENT="statevent";function km(a,h){Pe.call(this,Fr.STAT_EVENT,a),this.stat=h}R(km,Pe);function at(a){const h=Oa();ot(h,new km(h,a))}Fr.Ma="timingevent";function Nm(a,h){Pe.call(this,Fr.Ma,a),this.size=h}R(Nm,Pe);function Ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function hI(a,h,f,g,x,D){a.info(function(){if(a.g)if(D)for(var z="",ce=D.split("&"),je=0;je<ce.length;je++){var oe=ce[je].split("=");if(1<oe.length){var Qe=oe[0];oe=oe[1];var Ye=Qe.split("_");z=2<=Ye.length&&Ye[1]=="type"?z+(Qe+"="+oe+"&"):z+(Qe+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+z})}function dI(a,h,f,g,x,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+z})}function Ti(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pI(a,f)+(g?" "+g:"")})}function fI(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function pI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return Rc(f)}catch{return h}}var ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nc;function Da(){}R(Da,Pc),Da.prototype.g=function(){return new XMLHttpRequest},Da.prototype.i=function(){return{}},Nc=new Da;function qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Om}function Om(){this.i=null,this.g="",this.h=!1}var bm={},xc={};function Oc(a,h,f){a.L=1,a.v=Fa(wn(h)),a.m=f,a.P=!0,Dm(a,null)}function Dm(a,h){a.F=Date.now(),La(a),a.A=wn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Gm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Om,a.g=dg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Im[0]=x.toString()),x=Im);for(var D=0;D<x.length;D++){var z=ym(f,x[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Vs(),hI(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=Tn(this.g);var h=this.g.Ba();const Si=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||tg(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=Si?Vs(3):Vs(2)),bc(this);var f=this.g.Z();this.X=f;t:if(Lm(this)){var g=tg(this.g);a="";var x=g.length,D=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),Us(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,dI(this.i,this.u,this.A,this.l,this.R,Ye,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,je=this.g;if((ce=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ce)){var oe=ce;break t}}oe=null}if(f=oe)Ti(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,f);else{this.o=!1,this.s=3,at(12),Ur(this),Us(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<z.length;)if(Vt=mI(this,z),Vt==xc){Ye==4&&(this.s=4,at(14),f=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==bm){this.s=4,at(15),Ti(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Ti(this.i,this.l,Vt,null),Dc(this,Vt);if(Lm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||z.length!=0||this.h.h||(this.s=1,at(16),f=!1),this.o=this.o&&f,!f)Ti(this.i,this.l,z,"[Invalid Chunked Response]"),Ur(this),Us(this);else if(0<z.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),jc(Qe),Qe.M=!0,at(11))}}else Ti(this.i,this.l,z,null),Dc(this,z);Ye==4&&Ur(this),this.o&&!this.J&&(Ye==4?lg(this.j,this):(this.o=!1,La(this)))}else OI(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),Ur(this),Us(this)}}}catch{}finally{}};function Lm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?xc:(f=Number(h.substring(f,g)),isNaN(f)?bm:(g+=1,g+f>h.length?xc:(h=h.slice(g,g+f),a.C=g+f,h)))}qn.prototype.cancel=function(){this.J=!0,Ur(this)};function La(a){a.S=Date.now()+a.I,Vm(a,a.I)}function Vm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(m(a.ba,a),h)}function bc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(fI(this.i,this.A),this.L!=2&&(Vs(),at(17)),Ur(this),this.s=2,Us(this)):Vm(this,this.S-a)};function Us(a){a.j.G==0||a.J||lg(a.j,a)}function Ur(a){bc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Am(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Lc(f.h,a))){if(!a.K&&Lc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)$a(f),za(f);else break e;Uc(f),at(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ms(m(f.Za,f),6e3));if(1>=Um(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else zr(f,11)}else if((a.K||f.g==a)&&$a(f),!v(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let oe=x[h];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Qe=oe[3];Qe!=null&&(f.la=Qe,f.j.info("VER="+f.la));const Ye=oe[4];Ye!=null&&(f.Aa=Ye,f.j.info("SVER="+f.Aa));const Si=oe[5];Si!=null&&typeof Si=="number"&&0<Si&&(g=1.5*Si,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=a.g;if(Vt){const Ha=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var D=g.h;D.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Vc(D,D.h),D.h=null))}if(g.D){const zc=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;zc&&(g.ya=zc,fe(g.I,g.D,zc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=hg(g,g.J?g.ia:null,g.W),z.K){jm(g.h,z);var ce=z,je=g.L;je&&(ce.I=je),ce.B&&(bc(ce),La(ce)),g.g=z}else og(g);0<f.i.length&&Ba(f)}else oe[0]!="stop"&&oe[0]!="close"||zr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?zr(f,7):Fc(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Vs(4)}catch{}}var gI=class{constructor(a,h){this.g=a,this.map=h}};function Mm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Um(a){return a.h?1:a.g?a.g.size:0}function Lc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vc(a,h){a.g?a.g.add(h):a.h=h}function jm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mm.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function yI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function vI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Bm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=vI(a),g=yI(a),x=g.length,D=0;D<x;D++)h.call(void 0,g[D],f&&f[D],a)}var $m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _I(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var D=a[f].substring(0,g);x=a[f].substring(g+1)}else D=a[f];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,Va(this,a.j),this.o=a.o,this.g=a.g,Ma(this,a.s),this.l=a.l;var h=a.i,f=new Bs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Wm(this,f),this.m=a.m}else a&&(h=String(a).match($m))?(this.h=!1,Va(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),Ma(this,h[4]),this.l=js(h[5]||"",!0),Wm(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new Bs(null,this.h))}jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,Hm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,Hm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?TI:wI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,AI)),a.join("")};function wn(a){return new jr(a)}function Va(a,h,f){a.j=f?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Wm(a,h,f){h instanceof Bs?(a.i=h,SI(a.i,a.h)):(f||(h=zs(h,II)),a.i=new Bs(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function Fa(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,EI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function EI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hm=/[#\/\?@]/g,wI=/[#\?:]/g,TI=/[#\?]/g,II=/[#\?@]/g,AI=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&_I(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Bs.prototype,t.add=function(a,h){Kn(this),this.i=null,a=Ii(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function qm(a,h){Kn(a),h=Ii(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Km(a,h){return Kn(a),h=Ii(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let D=0;D<x.length;D++)f.push(h[g])}return f},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")Km(this,a)&&(h=h.concat(this.g.get(Ii(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=Ii(this,a),Km(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Gm(a,h,f){qm(a,h),0<f.length&&(a.i=null,a.g.set(Ii(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var x=D;z[g]!==""&&(x+="="+encodeURIComponent(String(z[g]))),a.push(x)}}return this.i=a.join("&")};function Ii(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function SI(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(qm(this,g),Gm(this,x,f))},a)),a.j=h}function RI(a,h){const f=new Fs;if(l.Image){const g=new Image;g.onload=w(Gn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Gn,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Gn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Gn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PI(a,h){const f=new Fs,g=new AbortController,x=setTimeout(()=>{g.abort(),Gn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?Gn(f,"TestPingServer: ok",!0,h):Gn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Gn(f,"TestPingServer: error",!1,h)})}function Gn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function CI(){this.g=new cI}function kI(a,h,f){const g=f||"";try{Bm(a,function(x,D){let z=x;c(x)&&(z=Rc(x)),h.push(g+D+"="+encodeURIComponent(z))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function $s(a){this.l=a.Ub||null,this.j=a.eb||!1}R($s,Pc),$s.prototype.g=function(){return new Ua(this.l,this.j)},$s.prototype.i=function(a){return function(){return a}}({});function Ua(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ua,Ge),t=Ua.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ws(this):Hs(this),this.readyState==3&&Qm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ws(this))},t.Qa=function(a){this.g&&(this.response=a,Ws(this))},t.ga=function(){this.g&&Ws(this)};function Ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ym(a){let h="";return j(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Mc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ym(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Se(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Se,Ge);var NI=/^https?$/i,xI=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nc.g(),this.v=this.o?Sm(this.o):Sm(Nc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Xm(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xI,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Xm(this,D)}};function Xm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jm(a),ja(a)}function Jm(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zm(this):this.bb())},t.bb=function(){Zm(this)};function Zm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)wm(a.Ea,0,a);else if(ot(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var x=String(a.D).match($m)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!NI.test(x?x.toLowerCase():"")}f=g}if(f)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var D=2<Tn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Jm(a)}}finally{ja(a)}}}}function ja(a,h){if(a.g){eg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ot(a,"ready");try{f.onreadystatechange=g}catch{}}}function eg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),uI(h)}};function tg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OI(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=C(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ng(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qs("baseRetryDelayMs",5e3,a),this.cb=qs("retryDelaySeedMs",1e4,a),this.Wa=qs("forwardChannelMaxRetries",2,a),this.wa=qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mm(a&&a.concurrentRequestLimit),this.Da=new CI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ng.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){at(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=hg(this,null,this.W),Ba(this)};function Fc(a){if(rg(a),a.G==3){var h=a.U++,f=wn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),Ks(a,f),h=new qn(a,a.j,h),h.L=2,h.v=Fa(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=dg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),La(h)}cg(a)}function za(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function rg(a){za(a),a.u&&(l.clearTimeout(a.u),a.u=null),$a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ba(a){if(!Fm(a.h)&&!a.s){a.s=!0;var h=a.Ga;gn||Z(),B||(gn(),B=!0),Y.add(h,a),a.B=0}}function bI(a,h){return Um(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(m(a.Ga,a,h),ug(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=sg(this,x,h),f=wn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Ks(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Ym(D)))+"&"+h:this.m&&Mc(f,this.m,D)),Vc(this.h,x),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),x.T=!0,Oc(x,f,null)):Oc(x,f,h),this.G=2}}else this.G==3&&(a?ig(this,a):this.i.length==0||Fm(this.h)||ig(this))};function ig(a,h){var f;h?f=h.l:f=a.U++;const g=wn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),Ks(a,g),a.m&&a.o&&Mc(g,a.m,a.o),f=new qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,f),Oc(f,g,h)}function Ks(a,h){a.H&&j(a.H,function(f,g){fe(h,g,f)}),a.l&&Bm({},function(f,g){fe(h,g,f)})}function sg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=x[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ce=!0;for(let je=0;je<f;je++){let oe=x[je].g;const Qe=x[je].map;if(oe-=D,0>oe)D=Math.max(0,x[je].g-100),ce=!1;else try{kI(Qe,z,"req"+oe+"_")}catch{g&&g(Qe)}}if(ce){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function og(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;gn||Z(),B||(gn(),B=!0),Y.add(h,a),a.v=0}}function Uc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(m(a.Fa,a),ug(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ag(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),za(this),ag(this))};function jc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ag(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&Mc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Fa(wn(h)),f.m=null,f.P=!0,Dm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,za(this),Uc(this),at(19))};function $a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lg(a,h){var f=null;if(a.g==h){$a(a),jc(a),a.g=null;var g=2}else if(Lc(a.h,h))f=h.D,jm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=Oa(),ot(g,new Nm(g,f)),Ba(a)}else og(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&bI(a,h)||g==2&&Uc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function ug(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new jr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Va(g,"https"),Fa(g),x?RI(g.toString(),f):PI(g.toString(),f)}else at(2);a.G=0,a.l&&a.l.sa(h),cg(a),rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function cg(a){if(a.G=0,a.ka=[],a.l){const h=zm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function hg(a,h,f){var g=f instanceof jr?wn(f):new jr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ma(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new jr(null);g&&Va(D,g),h&&(D.g=h),x&&Ma(D,x),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),Ks(a,g),g}function dg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new $s({eb:f})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fg(){}t=fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wa(){}Wa.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new ng(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ai(this)}R(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Fc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Rc(a),a=f);h.i.push(new gI(h.Ya++,a)),h.G==3&&Ba(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,Fc(this.g),delete this.g,yt.aa.N.call(this)};function pg(a){Cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(pg,Cc);function mg(){kc.call(this),this.status=1}R(mg,kc);function Ai(a){this.g=a}R(Ai,fg),Ai.prototype.ua=function(){ot(this.g,"a")},Ai.prototype.ta=function(a){ot(this.g,new pg(a))},Ai.prototype.sa=function(a){ot(this.g,new mg)},Ai.prototype.ra=function(){ot(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Fw=function(){return new Wa},Mw=function(){return Oa()},Vw=Fr,ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ba.NO_ERROR=0,ba.TIMEOUT=8,ba.HTTP_ERROR=6,Ll=ba,xm.COMPLETE="complete",Lw=xm,Rm.EventType=Ls,Ls.OPEN="a",Ls.CLOSE="b",Ls.ERROR="c",Ls.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,ho=Rm,Dw=$s,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,bw=Se}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const Mv="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Ps="10.13.0";/**
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
 */const hi=new Ap("@firebase/firestore");function no(){return hi.logLevel}function H(t,...e){if(hi.logLevel<=re.DEBUG){const n=e.map(Vp);hi.debug(`Firestore (${Ps}): ${t}`,...n)}}function zn(t,...e){if(hi.logLevel<=re.ERROR){const n=e.map(Vp);hi.error(`Firestore (${Ps}): ${t}`,...n)}}function fs(t,...e){if(hi.logLevel<=re.WARN){const n=e.map(Vp);hi.warn(`Firestore (${Ps}): ${t}`,...n)}}function Vp(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function he(t,e){t||Q()}function J(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Uw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class oO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aO{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new Uw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new et(e)}}class lO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new cO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ve(0,0))}static max(){return new X(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends ea{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ea{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}function pO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Nr(i,K.empty(),e)}function mO(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(X.min(),K.empty(),-1)}static max(){return new Nr(X.max(),K.empty(),-1)}}function gO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const yO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ea(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==yO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _O(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Mp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mp.oe=-1;function ac(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function EO(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uv(this.data.getIterator())}getIteratorFrom(e){return new Uv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Uv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new zt([])}unionWith(e){let n=new He($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const wO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(he(!!t),typeof t=="string"){let e=0;const n=wO.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function Fp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Up(t){const e=t.mapValue.fields.__previous_value__;return Fp(e)?Up(e):e}function ta(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class TO{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fp(t)?4:AO(t)?9007199254740991:IO(t)?10:11:Q()}function dn(t,e){if(t===e)return!0;const n=fi(t);if(n!==fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),l=xr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return di(i.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Iu(o)===Iu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fv(o)!==Fv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function ra(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=fi(t),r=fi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return jv(t.timestampValue,e.timestampValue);case 4:return jv(ta(t),ta(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=di(s),u=di(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ae(l[c],u[c]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ae(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=ae(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:zv(w,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fl.mapValue&&o===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ae(u[p],d[p]);if(m!==0)return m;const w=ms(l[u[p]],c[d[p]]);if(w!==0)return w}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function jv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=xr(t),r=xr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function zv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ms(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function gs(t){return tf(t)}function tf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=tf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${tf(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Bv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nf(t){return!!t&&"integerValue"in t}function jp(t){return!!t&&"arrayValue"in t}function $v(t){return!!t&&"nullValue"in t}function Wv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function IO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Po(this.value))}}function $w(t){const e=[];return Cs(t.fields,(n,r)=>{const i=new $e([n]);if(Vl(r)){const s=$w(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
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
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function Hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Su{constructor(e,n="asc"){this.field=e,this.dir=n}}function SO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ww{}class Oe extends Ww{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PO(e,n,r):n==="array-contains"?new NO(e,r):n==="in"?new xO(e,r):n==="not-in"?new OO(e,r):n==="array-contains-any"?new bO(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CO(e,r):new kO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&fi(this.value)===fi(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Ww{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Hw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hw(t){return t.op==="and"}function qw(t){return RO(t)&&Hw(t)}function RO(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function rf(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(qw(t))return t.filters.map(e=>rf(e)).join(",");{const e=t.filters.map(n=>rf(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Kw(o,i.filters[l]),!0):!1}(t,e):void Q()}function Gw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(Gw).join(" ,")+"}"}(t):"Filter"}class PO extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class CO extends Oe{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kO extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class NO extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jp(n)&&ra(n.arrayValue,this.value)}}class xO extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class OO extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ra(this.value.arrayValue,n)}}class bO extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
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
 */class DO{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Kv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DO(t,e,n,r,i,s,o)}function zp(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ue=n}return e.ue}function Bp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qv(t.startAt,e.startAt)&&qv(t.endAt,e.endAt)}function sf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ta{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function LO(t,e,n,r,i,s,o,l){return new Ta(t,e,n,r,i,s,o,l)}function Yw(t){return new Ta(t)}function Gv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xw(t){return t.collectionGroup!==null}function Co(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Su(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Su($e.keyField(),r))}return e.ce}function un(t){const e=J(t);return e.le||(e.le=VO(e,Co(t))),e.le}function VO(t,e){if(t.limitType==="F")return Kv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Su(i.field,s)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return Kv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function of(t,e){const n=t.filters.concat([e]);return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function af(t,e,n){return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Bp(un(t),un(e))&&t.limitType===e.limitType}function Jw(t){return`${zp(un(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Gw(i)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gs(i)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Hv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Co(r),i)||r.endAt&&!function(o,l,u){const c=Hv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Co(r),i))}(t,e)}function MO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zw(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const s=FO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FO(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ms(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zw(this.inner)}size(){return this.innerSize}}/**
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
 */const UO=new Ae(K.comparator);function Bn(){return UO}const eT=new Ae(K.comparator);function fo(...t){let e=eT;for(const n of t)e=e.insert(n.key,n);return e}function tT(t){let e=eT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return ko()}function nT(){return ko()}function ko(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const jO=new Ae(K.comparator),zO=new He(K.comparator);function ne(...t){let e=zO;for(const n of t)e=e.add(n);return e}const BO=new He(ae);function $O(){return BO}/**
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
 */function $p(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function rT(t){return{integerValue:""+t}}function WO(t,e){return EO(e)?rT(e):$p(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class cc{constructor(){this._=void 0}}function HO(t,e,n){return t instanceof Ru?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Fp(s)&&(s=Up(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ia?sT(t,e):t instanceof sa?oT(t,e):function(i,s){const o=iT(i,s),l=Qv(o)+Qv(i.Pe);return nf(o)&&nf(i.Pe)?rT(l):$p(i.serializer,l)}(t,e)}function qO(t,e,n){return t instanceof ia?sT(t,e):t instanceof sa?oT(t,e):n}function iT(t,e){return t instanceof Pu?function(r){return nf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ru extends cc{}class ia extends cc{constructor(e){super(),this.elements=e}}function sT(t,e){const n=aT(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends cc{constructor(e){super(),this.elements=e}}function oT(t,e){let n=aT(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Pu extends cc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qv(t){return Ce(t.integerValue||t.doubleValue)}function aT(t){return jp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ia&&i instanceof ia||r instanceof sa&&i instanceof sa?ps(r.elements,i.elements,dn):r instanceof Pu&&i instanceof Pu?dn(r.Pe,i.Pe):r instanceof Ru&&i instanceof Ru}(t.transform,e.transform)}class GO{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function lT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cT(t.key,On.none()):new Ia(t.key,t.data,On.none());{const n=t.data,r=Nt.empty();let i=new He($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ei(t.key,r,new zt(i.toArray()),On.none())}}function QO(t,e,n){t instanceof Ia?function(i,s,o){const l=i.value.clone(),u=Xv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ei?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(uT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof Ia?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=s.value.clone(),d=Jv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ei?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=Jv(s.fieldTransforms,u,o),d=o.data;return d.setAll(uT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iT(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function Yv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ps(r,i,(s,o)=>KO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ia extends hc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ei extends hc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function uT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xv(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,qO(o,l,n[i]))}return r}function Jv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HO(s,o,e))}return r}class cT extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XO extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=lT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Yv(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Yv(n,r))}}class Wp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return jO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wp(e,n,r,i)}}/**
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
 */class ZO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class eb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,ie;function tb(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function hT(t){if(t===void 0)return zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nb(){return new TextEncoder}/**
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
 */const rb=new ei([4294967295,4294967295],0);function Zv(t){const e=nb().encode(t),n=new Ow;return n.update(e),new Uint8Array(n.digest())}function e_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ei([n,r],0),new ei([i,s],0)]}class Hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ei.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ei.fromNumber(r)));return i.compare(rb)===1&&(i=new ei([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zv(e),[r,i]=e_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Zv(e),[r,i]=e_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(X.min(),i,new Ae(ae),Bn(),ne())}}class Aa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Aa(r,n,ne(),ne(),ne())}}/**
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
 */class Fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class dT{constructor(e,n){this.targetId=e,this.me=n}}class fT{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class t_{constructor(){this.fe=0,this.ge=r_(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Aa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=r_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ib{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=n_(),this.Qe=new Ae(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(sf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,nt.newNoDocument(o,X.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=di(r).toUint8Array()}catch(u){if(u instanceof Bw)return fs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Hp(o,i,s)}catch(u){return fs(u instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&sf(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new dc(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=n_(),this.Qe=new Ae(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new t_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new t_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function n_(){return new Ae(K.comparator)}function r_(){return new Ae(K.comparator)}const sb={asc:"ASCENDING",desc:"DESCENDING"},ob={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ab={and:"AND",or:"OR"};class lb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lf(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function Cu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ub(t,e){return Cu(t,e.toTimestamp())}function cn(t){return he(!!t),X.fromTimestamp(function(n){const r=xr(n);return new Ve(r.seconds,r.nanos)}(t))}function qp(t,e){return uf(t,e).canonicalString()}function uf(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mT(t){const e=me.fromString(t);return he(ET(e)),e}function cf(t,e){return qp(t.databaseId,e.path)}function Ch(t,e){const n=mT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(yT(n))}function gT(t,e){return qp(t.databaseId,e)}function cb(t){const e=mT(t);return e.length===4?me.emptyPath():yT(e)}function hf(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yT(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function i_(t,e,n){return{name:cf(t,e),fields:n.value.mapValue.fields}}function hb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(he(d===void 0||typeof d=="string"),Ke.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ke.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:hT(c.code);return new W(d,c.message||"")}(o);n=new fT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(t,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):X.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Fl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ch(t,r.document),s=r.readTime?cn(r.readTime):X.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ch(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new eb(i,s),l=r.targetId;n=new dT(l,o)}}return n}function db(t,e){let n;if(e instanceof Ia)n={update:i_(t,e.key,e.value)};else if(e instanceof cT)n={delete:cf(t,e.key)};else if(e instanceof Ei)n={update:i_(t,e.key,e.data),updateMask:wb(e.fieldMask)};else{if(!(e instanceof XO))return Q();n={verify:cf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ru)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ub(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function fb(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(X.min())&&(o=cn(s)),new GO(o,i.transformResults||[])}(n,e))):[]}function pb(t,e){return{documents:[gT(t,e.path)]}}function mb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gT(t,i);const s=function(c){if(c.length!==0)return _T(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ci(m.field),direction:vb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=lf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function gb(t){let e=cb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=vT(p);return m instanceof Kt&&qw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Su(ki(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ac(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Au(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Au(w,m)}(n.endAt)),LO(e,i,o,s,l,"F",u,c)}function yb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ki(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ki(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ki(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ki(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>vT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function vb(t){return sb[t]}function _b(t){return ob[t]}function Eb(t){return ab[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function ki(t){return $e.fromServerFormat(t.fieldPath)}function _T(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Wv(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NAN"}};if($v(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wv(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NAN"}};if($v(n.value))return{unaryFilter:{field:Ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(n.field),op:_b(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>_T(i));return r.length===1?r[0]:{compositeFilter:{op:Eb(n.op),filters:r}}}(t):Q()}function wb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ET(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Tb{constructor(e){this.ct=e}}function Ib(t){const e=gb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?af(e,e.limit,"L"):e}/**
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
 */class Ab{constructor(){this.un=new Sb}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Sb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(me.comparator)).toArray()}}/**
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
 */class ys{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ys(0)}static kn(){return new ys(-1)}}/**
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
 */class Rb{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Pb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Cb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&No(r.mutation,i,zt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ei)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),No(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new Pb(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||zt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=nT();d.forEach(m=>{if(!s.has(m)){const w=lT(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Qr());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:tT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Ta(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&No(d.mutation,c,zt.empty(),Ve.now()),uc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class kb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ib(i.bundledQuery),readTime:cn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class Nb{constructor(){this.overlays=new Ae(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Qr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZO(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xb{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Kp{constructor(){this.Tr=new He(Me.Er),this.dr=new He(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new me([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new me([])),r=new Me(n,e),i=new Me(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class Ob{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Me.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JO(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(ae);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Me(new K(s),0);let l=new He(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bb{constructor(e){this.Mr=e,this.docs=function(){return new Ae(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gO(mO(d),r)<=0||(i.has(d.key)||uc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Db(this)}getSize(e){return M.resolve(this.size)}}class Db extends Rb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Lb{constructor(e){this.persistence=e,this.Nr=new ks(n=>zp(n),Bp),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Kp,this.targetCount=0,this.kr=ys.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class Vb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Mp(0),this.Kr=!1,this.Kr=!0,this.$r=new xb,this.referenceDelegate=e(this),this.Ur=new Lb(this),this.indexManager=new Ab,this.remoteDocumentCache=function(i){return new bb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Tb(n),this.Gr=new kb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Ob(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Mb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Mb extends vO{constructor(e){super(),this.currentSequenceNumber=e}}class Gp{constructor(e){this.persistence=e,this.Jr=new Kp,this.Yr=null}static Zr(e){return new Gp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Qp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qp(e,n.fromCache,r,i)}}/**
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
 */class Fb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ub{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ck()?8:_O(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Fb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(no()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(no()<=re.DEBUG&&H("QueryEngine","Query:",Pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(no()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):M.resolve())}Yi(e,n){if(Gv(n))return M.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=af(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,af(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Gv(n)||i.isEqual(X.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(no()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.rs(e,o,n,pO(i,-1)).next(l=>l))})}ts(e,n){let r=new He(Zw(e));return n.forEach((i,s)=>{uc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return no()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Nr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class jb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ae),this._s=new ks(s=>zp(s),Bp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zb(t,e,n,r){return new jb(t,e,n,r)}async function wT(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function Bb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=M.resolve();return m.forEach(R=>{w=w.next(()=>d.getEntry(u,R)).next(k=>{const N=c.docVersions.get(R);he(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TT(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $b(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ke.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(k,N,_){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,w,d)&&l.push(n.Ur.updateTargetData(s,w))});let u=Bn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Wb(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Wb(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Hb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function df(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function s_(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p._s.get(d);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,un(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(Kb(r,MO(e),l),{documents:l,Ts:s})))}function Kb(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class o_{constructor(){this.activeTargetIds=$O()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gb{constructor(){this.so=new o_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new o_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qb{_o(e){}shutdown(){}}/**
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
 */class a_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pl=null;function kh(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
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
 */const Yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Xb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ze="WebChannelConnection";class Jb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=kh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw fs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Yb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=kh();return new Promise((o,l)=>{const u=new bw;u.setWithCredentials(!0),u.listenOnce(Lw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ll.NO_ERROR:const d=u.getResponseJson();H(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ll.TIMEOUT:H(Ze,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const p=u.getStatus();if(H(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const R=function(N){const _=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(w.status);l(new W(R,w.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=kh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fw(),l=Mw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Dw({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const R=new Xb({Io:N=>{w?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,_,v)=>{N.listen(_,I=>{try{v(I)}catch(b){setTimeout(()=>{throw b},0)}})};return k(p,ho.EventType.OPEN,()=>{w||(H(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),k(p,ho.EventType.CLOSE,()=>{w||(w=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),k(p,ho.EventType.ERROR,N=>{w||(w=!0,fs(Ze,`RPC '${e}' stream ${i} transport errored:`,N),R.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,ho.EventType.MESSAGE,N=>{var _;if(!w){const v=N.data[0];he(!!v);const I=v,b=I.error||((_=I[0])===null||_===void 0?void 0:_.error);if(b){H(Ze,`RPC '${e}' stream ${i} received error:`,b);const V=b.status;let j=function(T){const A=Ne[T];if(A!==void 0)return hT(A)}(V),E=b.message;j===void 0&&(j=L.INTERNAL,E="Unknown error status: "+V+" with message "+b.message),w=!0,R.So(new W(j,E)),p.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,v),R.bo(v)}}),k(l,Vw.STAT_EVENT,N=>{N.stat===ef.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ef.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Nh(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new lb(t,!0)}/**
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
 */class IT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class AT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new IT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zb extends AT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=hb(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?cn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=hf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=sf(u)?{documents:pb(s,u)}:{query:mb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=pT(s,o.resumeToken);const c=lf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Cu(s,o.snapshotVersion.toTimestamp());const c=lf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=yb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=hf(this.serializer),n.removeTarget=e,this.a_(n)}}class eD extends AT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fb(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=hf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>db(this.serializer,r))};this.a_(n)}}/**
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
 */class tD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,uf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,uf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class rD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{wi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Sa(c),c.q_.set("Unknown"),c.L_.delete(4),await pc(c)}(this))})}),this.q_=new nD(r,i)}}async function pc(t){if(wi(t))for(const e of t.B_)await e(!0)}async function Sa(t){for(const e of t.B_)await e(!1)}function ST(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zp(n)?Jp(n):Ns(n).r_()&&Xp(n,e))}function Yp(t,e){const n=J(t),r=Ns(n);n.N_.delete(e),r.r_()&&RT(n,e),n.N_.size===0&&(r.r_()?r.o_():wi(n)&&n.q_.set("Unknown"))}function Xp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).A_(e)}function RT(t,e){t.Q_.xe(e),Ns(t).R_(e)}function Jp(t){t.Q_=new ib({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.q_.v_()}function Zp(t){return wi(t)&&!Ns(t).n_()&&t.N_.size>0}function wi(t){return J(t).L_.size===0}function PT(t){t.Q_=void 0}async function iD(t){t.q_.set("Online")}async function sD(t){t.N_.forEach((e,n)=>{Xp(t,e)})}async function oD(t,e){PT(t),Zp(t)?(t.q_.M_(e),Jp(t)):t.q_.set("Unknown")}async function aD(t,e,n){if(t.q_.set("Online"),e instanceof fT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ku(t,r)}else if(e instanceof Fl?t.Q_.Ke(e):e instanceof dT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await TT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),RT(s,u);const p=new cr(d.target,u,c,d.sequenceNumber);Xp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ku(t,r)}}async function ku(t,e,n){if(!wa(e))throw e;t.L_.add(1),await Sa(t),t.q_.set("Offline"),n||(n=()=>TT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await pc(t)})}function CT(t,e){return e().catch(n=>ku(t,n,e))}async function mc(t){const e=J(t),n=Or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lD(e);)try{const i=await Hb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,uD(e,i)}catch(i){await ku(e,i)}kT(e)&&NT(e)}function lD(t){return wi(t)&&t.O_.length<10}function uD(t,e){t.O_.push(e);const n=Or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function kT(t){return wi(t)&&!Or(t).n_()&&t.O_.length>0}function NT(t){Or(t).start()}async function cD(t){Or(t).p_()}async function hD(t){const e=Or(t);for(const n of t.O_)e.m_(n.mutations)}async function dD(t,e,n){const r=t.O_.shift(),i=Wp.from(r,e,n);await CT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function fD(t,e){e&&Or(t).V_&&await async function(r,i){if(function(o){return tb(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Or(r).s_(),await CT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),kT(t)&&NT(t)}async function l_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.L_.add(3),await Sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await pc(n)}async function pD(t,e){const n=J(t);e?(n.L_.delete(2),await pc(n)):e||(n.L_.add(2),await Sa(n),n.q_.set("Unknown"))}function Ns(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new Zb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:iD.bind(null,t),Ro:sD.bind(null,t),mo:oD.bind(null,t),d_:aD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zp(t)?Jp(t):t.q_.set("Unknown")):(await t.K_.stop(),PT(t))})),t.K_}function Or(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cD.bind(null,t),mo:fD.bind(null,t),f_:hD.bind(null,t),g_:dD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await mc(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class em{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new em(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tm(t,e){if(zn("AsyncQueue",`${e}: ${t}`),wa(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class u_{constructor(){this.W_=new Ae(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vs(e,n,ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class mD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gD{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=c_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function c_(){return new ks(t=>Jw(t),lc)}async function yD(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new mD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=tm(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&nm(n)}async function vD(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _D(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&nm(n)}function ED(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function nm(t){t.Y_.forEach(e=>{e.next()})}var ff,h_;(h_=ff||(ff={})).ea="default",h_.Cache="cache";class wD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ff.Cache}}/**
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
 */class xT{constructor(e){this.key=e}}class OT{constructor(e){this.key=e}}class TD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Zw(e),this.Ra=new ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new u_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=uc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?R!==k&&(r.track({type:3,doc:w}),N=!0):this.ga(m,w)||(r.track({type:2,doc:w}),N=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),N=!0):m&&!w&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,R){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return k(w)-k(R)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new vs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new u_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new OT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new xT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ID{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AD{constructor(e){this.key=e,this.va=!1}}class SD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ks(l=>Jw(l),lc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(K.comparator),this.Na=new Map,this.La=new Kp,this.Ba={},this.ka=new Map,this.qa=ys.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function RD(t,e,n=!0){const r=FT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await bT(r,e,n,!0),i}async function PD(t,e){const n=FT(t);await bT(n,e,!0,!1)}async function bT(t,e,n,r){const i=await qb(t.localStore,un(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await CD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ST(t.remoteStore,i),l}async function CD(t,e,n,r,i){t.Ka=(p,m,w)=>async function(k,N,_,v){let I=N.view.ma(_);I.ns&&(I=await s_(k.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,I)));const b=v&&v.targetChanges.get(N.targetId),V=v&&v.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(I,k.isPrimaryClient,b,V);return f_(k,N.targetId,j.wa),j.snapshot}(t,p,m,w);const s=await s_(t.localStore,e,!0),o=new TD(e,s.Ts),l=o.ma(s.documents),u=Aa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);f_(t,n,c.wa);const d=new ID(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function kD(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!lc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await df(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Yp(r.remoteStore,i.targetId),pf(r,i.targetId)}).catch(Ea)):(pf(r,i.targetId),await df(r.localStore,i.targetId,!0))}async function ND(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yp(n.remoteStore,r.targetId))}async function xD(t,e,n){const r=FD(t);try{const i=await function(o,l){const u=J(o),c=Ve.now(),d=l.reduce((w,R)=>w.add(R.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=Bn(),k=ne();return u.cs.getEntries(w,d).next(N=>{R=N,R.forEach((_,v)=>{v.isValidDocument()||(k=k.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,R)).next(N=>{p=N;const _=[];for(const v of l){const I=YO(v,p.get(v.key).overlayedDocument);I!=null&&_.push(new Ei(v.key,I,$w(I.value.mapValue),On.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,l)}).next(N=>{m=N;const _=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(w,N.batchId,_)})}).then(()=>({batchId:m.batchId,changes:tT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ae)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await mc(r.remoteStore)}catch(i){const s=tm(i,"Failed to persist write");n.reject(s)}}async function DT(t,e){const n=J(t);try{const r=await $b(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?he(o.va):i.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await Ra(n,r,e)}catch(r){await Ea(r)}}function d_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&nm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(K.comparator);o=o.insert(s,nt.newNoDocument(s,X.min()));const l=ne().add(s),u=new dc(X.min(),new Map,new Ae(ae),o,l);await DT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),rm(r)}else await df(r.localStore,e,!1).then(()=>pf(r,e,n)).catch(Ea)}async function bD(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Bb(n.localStore,e);VT(n,r,null),LT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Ea(i)}}async function DD(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(he(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);VT(r,e,n),LT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Ea(i)}}function LT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function VT(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function pf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||MT(t,r)})}function MT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Yp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),rm(t))}function f_(t,e,n){for(const r of n)r instanceof xT?(t.La.addReference(r.key,e),LD(t,r)):r instanceof OT?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||MT(t,r.key)):Q()}function LD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),rm(t))}function rm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(me.fromString(e)),r=t.qa.next();t.Na.set(r,new AD(n)),t.Oa=t.Oa.insert(n,r),ST(t.remoteStore,new cr(un(Yw(n.path)),r,"TargetPurposeLimboResolution",Mp.oe))}}async function Ra(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Qp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>M.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!wa(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),R=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function VD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await wT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.hs)}}function MD(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function FT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=DT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OD.bind(null,e),e.Ca.d_=_D.bind(null,e.eventManager),e.Ca.$a=ED.bind(null,e.eventManager),e}function FD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DD.bind(null,e),e}class p_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zb(this.persistence,new Ub,e.initialUser,this.serializer)}createPersistence(e){return new Vb(Gp.Zr,this.serializer)}createSharedClientState(e){return new Gb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gD}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new Jb(s)}(e.databaseInfo);return function(s,o,l,u){return new tD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new rD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>d_(this.syncEngine,n,0),function(){return a_.D()?new a_:new Qb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new SD(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 *//**
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
 */class jD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=jw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function m_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $D(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>l_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>l_(e.remoteStore,i)),t._onlineComponents=e}function BD(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $D(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await xh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!BD(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await xh(t,new p_)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await xh(t,new p_);return t._offlineComponents}async function UT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await m_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await m_(t,new UD))),t._onlineComponents}function WD(t){return UT(t).then(e=>e.syncEngine)}async function HD(t){const e=await UT(t),n=e.eventManager;return n.onListen=RD.bind(null,e.syncEngine),n.onUnlisten=kD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ND.bind(null,e.syncEngine),n}function qD(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new jD({next:m=>{o.enqueueAndForget(()=>vD(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new wD(l,d,{includeMetadataChanges:!0,_a:!0});return yD(s,p)}(await HD(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function jT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const g_=new Map;/**
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
 */function zT(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KD(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function y_(t){if(!K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v_(t){if(K.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Nu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gc(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class __{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new __({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new __(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sO;switch(r.type){case"firstParty":return new uO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=g_.get(n);r&&(H("ComponentProvider","Removing Datastore"),g_.delete(n),r.terminate())}(this),Promise.resolve()}}function GD(t,e,n,r={}){var i;const s=(t=Nu(t,yc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=H1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new oO(new Uw(l,u))}}/**
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
 */class xs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Ir extends xs{constructor(e,n,r){super(e,n,Yw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new K(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Pa(t,e,...n){if(t=st(t),zT("collection","path",e),t instanceof yc){const r=me.fromString(e,...n);return v_(r),new Ir(t,null,r)}{if(!(t instanceof bt||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return v_(r),new Ir(t.firestore,null,r)}}function QD(t,e,...n){if(t=st(t),arguments.length===1&&(e=jw.newId()),zT("doc","path",e),t instanceof yc){const r=me.fromString(e,...n);return y_(r),new bt(t,null,new K(r))}{if(!(t instanceof bt||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return y_(r),new bt(t.firestore,t instanceof Ir?t.converter:null,new K(r))}}/**
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
 */class YD{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new IT(this,"async_queue_retry"),this.Eu=()=>{const n=Nh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Nh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Tr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!wa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=em.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Q()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class im extends yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new YD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$T(this),this._firestoreClient.terminate()}}function XD(t,e){const n=typeof t=="object"?t:Rp(),r=typeof t=="string"?t:"(default)",i=rc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=B1("firestore");s&&GD(i,...s)}return i}function BT(t){return t._firestoreClient||$T(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $T(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new TO(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,jT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(Ke.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class WT{constructor(e){this._methodName=e}}/**
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
 */class om{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class am{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const JD=/^__.*__$/;class ZD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}function HT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class lm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new lm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return xu(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(HT(this.wu)&&JD.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class e4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Nu(e,n,r,i=!1){return new lm({wu:e,methodName:n,Ou:r,path:$e.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qT(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new e4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function t4(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);QT("Data must be an object, but it was:",o,r);const l=KT(r,o);let u,c;if(s.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=r4(e,p,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);s4(d,m)||d.push(m)}u=new zt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new ZD(new Nt(l),u,c)}function n4(t,e,n,r=!1){return um(n,t.Nu(r?4:3,e))}function um(t,e){if(GT(t=st(t)))return QT("Unsupported field value:",e,t),KT(t,e);if(t instanceof WT)return function(r,i){if(!HT(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=um(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:Cu(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cu(i.serializer,s)}}if(r instanceof om)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _s)return{bytesValue:pT(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof am)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return $p(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${gc(r)}`)}(t,e)}function KT(t,e){const n={};return zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,i)=>{const s=um(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof om||t instanceof _s||t instanceof bt||t instanceof WT||t instanceof am)}function QT(t,e,n){if(!GT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=gc(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function r4(t,e,n){if((e=st(e))instanceof sm)return e._internalPath;if(typeof e=="string")return YT(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const i4=new RegExp("[~\\*/\\[\\]]");function YT(t,e,n){if(e.search(i4)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sm(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function s4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class XT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o4 extends XT{data(){return super.data()}}function cm(t,e){return typeof e=="string"?YT(t,e):e instanceof sm?e._internalPath:e._delegate._internalPath}/**
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
 */function a4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hm{}class l4 extends hm{}function dm(t,e,...n){let r=[];e instanceof hm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof fm).length,l=s.filter(u=>u instanceof vc).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vc extends l4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vc(e,n,r)}_apply(e){const n=this._parse(e);return JT(e._query,n),new xs(e.firestore,e.converter,of(e._query,n))}_parse(e){const n=qT(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){w_(p,d);const w=[];for(const R of p)w.push(E_(u,s,R));m={arrayValue:{values:w}}}else m=E_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||w_(p,d),m=n4(l,o,p,d==="in"||d==="not-in");return Oe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mf(t,e,n){const r=e,i=cm("where",t);return vc._create(i,r,n)}class fm extends hm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)JT(o,u),o=of(o,u)}(e._query,n),new xs(e.firestore,e.converter,of(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function E_(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xw(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!K.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bv(t,new K(r))}if(n instanceof bt)return Bv(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gc(n)}.`)}function w_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class u4{convertValue(e,n="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new am(s)}convertGeoPoint(e){return new om(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Up(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=xr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);he(ET(r));const i=new na(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function c4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ml{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h4 extends XT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends h4{data(e={}){return super.data(e)}}class d4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ml(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new ml(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ml(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ml(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:f4(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function f4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class p4 extends u4{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function pm(t){t=Nu(t,xs);const e=Nu(t.firestore,im),n=BT(e),r=new p4(e);return a4(t._query),qD(n,t._query).then(i=>new d4(e,r,t,i))}function ZT(t,e){const n=Nu(t.firestore,im),r=QD(t),i=c4(t.converter,e);return m4(n,[t4(qT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,On.exists(!1))]).then(()=>r)}function m4(t,e){return function(r,i){const s=new Tr;return r.asyncQueue.enqueueAndForget(async()=>xD(await WD(r),i,s)),s.promise}(BT(t),e)}(function(e,n=!0){(function(i){Ps=i})(vi),li(new kr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new im(new aO(r.getProvider("auth-internal")),new hO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),on(Mv,"4.7.0",e),on(Mv,"4.7.0","esm2017")})();/**
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
 */const eI="firebasestorage.googleapis.com",g4="storageBucket",y4=2*60*1e3,v4=10*60*1e3;/**
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
 */class mn extends pn{constructor(e,n,r=0){super(Oh(e),`Firebase Storage: ${n} (${Oh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fn||(fn={}));function Oh(t){return"storage/"+t}function _4(){const t="An unknown error occurred, please check the error payload for server response.";return new mn(fn.UNKNOWN,t)}function E4(){return new mn(fn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w4(){return new mn(fn.CANCELED,"User canceled the upload/download.")}function T4(t){return new mn(fn.INVALID_URL,"Invalid URL '"+t+"'.")}function I4(t){return new mn(fn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T_(t){return new mn(fn.INVALID_ARGUMENT,t)}function tI(){return new mn(fn.APP_DELETED,"The Firebase app was deleted.")}function A4(t){return new mn(fn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw I4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},k=n===eI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",_=new RegExp(`^https?://${k}/${i}/${N}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:w,indices:R,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<I.length;b++){const V=I[b],j=V.regex.exec(e);if(j){const E=j[V.indices.bucket];let y=j[V.indices.path];y||(y=""),r=new Bt(E,y),V.postModify(r);break}}if(r==null)throw T4(e);return r}}class S4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function R4(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(w,u())},N)}function m(){s&&clearTimeout(s)}function w(N,..._){if(c){m();return}if(N){m(),d.call(null,N,..._);return}if(u()||o){m(),d.call(null,N,..._);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let R=!1;function k(N){R||(R=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function P4(t){t(!1)}/**
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
 */function C4(t){return t!==void 0}function I_(t,e,n,r){if(r<e)throw T_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw T_(`Invalid value for '${t}'. Expected ${n} or less.`)}function k4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ou;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ou||(Ou={}));/**
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
 */function N4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class x4{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,R)=>{this.resolve_=w,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ou.NO_ERROR,u=s.getStatus();if(!l||N4(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ou.ABORT;r(!1,new gl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new gl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());C4(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=_4();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?tI():w4();o(u)}else{const u=E4();o(u)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=R4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function O4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function b4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function D4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function L4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function V4(t,e,n,r,i,s,o=!0){const l=k4(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return D4(c,e),O4(c,n),b4(c,s),L4(c,r),new x4(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function M4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function F4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class bu{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bu(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F4(this._location.path)}get storage(){return this._service}get parent(){const e=M4(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new bu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A4(e)}}function A_(t,e){const n=e==null?void 0:e[g4];return n==null?null:Bt.makeFromBucketSpec(n,t)}function U4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:H1(i,t.app.options.projectId))}class j4{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=eI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=y4,this._maxUploadRetryTime=v4,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=A_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=A_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new S4(tI());{const o=V4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const S_="@firebase/storage",R_="0.13.0";/**
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
 */const nI="storage";function z4(t=Rp(),e){t=st(t);const r=rc(t,nI).getImmediate({identifier:e}),i=B1("storage");return i&&B4(r,...i),r}function B4(t,e,n,r={}){U4(t,e,n,r)}function $4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new j4(n,r,i,e,vi)}function W4(){li(new kr(nI,$4,"PUBLIC").setMultipleInstances(!0)),on(S_,R_,""),on(S_,R_,"esm2017")}W4();const H4={apiKey:"AIzaSyD7BEm5DJLSQPSkXWyfIghA9DyEKKH_SyM",authDomain:"sharemoviedemo.firebaseapp.com",projectId:"sharemoviedemo",storageBucket:"sharemoviedemo.appspot.com",messagingSenderId:"705461894075",appId:"1:705461894075:web:2457870dedf178700ea29e"},mm=G1(H4),Os=xw(mm),Ca=XD(mm);z4(mm);const q4=()=>{const t=dp(),e=async()=>{try{await Os.signOut(),console.log("Logged out successfully"),t("/")}catch(n){console.error("Logout error",n)}};return P.jsx("div",{children:P.jsx("button",{onClick:e,children:"ログアウト"})})},K4=()=>{const{pageTitle:t}=e1();return P.jsxs("div",{className:"Header",children:[P.jsx("div",{className:"Title",children:t}),P.jsx(q4,{})]})},gm=()=>P.jsx(P.Fragment,{children:P.jsxs("div",{className:"spinner",children:[P.jsx("div",{}),P.jsx("div",{}),P.jsx("div",{}),P.jsx("div",{}),P.jsx("div",{}),P.jsx("div",{})]})}),P_=()=>{const[t,e]=F.useState([]),[n,r]=F.useState(!0),[i,s]=F.useState(null);return F.useEffect(()=>{(async()=>{r(!0);try{const l=dm(Pa(Ca,"User")),c=(await pm(l)).docs.map(d=>({id:d.id,...d.data()}));e(c),console.log(t)}catch(l){s("Error fetching users: "+l.message)}finally{r(!1)}})()},[]),n?P.jsx("div",{className:"LoadingContainer",children:P.jsx(gm,{})}):i?P.jsx("div",{children:i}):P.jsx(P.Fragment,{children:t.map(o=>P.jsxs("div",{className:"UserContainer",children:[P.jsx("div",{className:"Usericon"}),P.jsxs("div",{className:"ContentList",children:[P.jsx("div",{className:"top",children:o.DisplayName}),P.jsx("div",{className:"bottom",children:P.jsxs("div",{className:"social-media",children:[P.jsx(Zt,{to:`/MovieLists?category=YouTube&user=${o.DisplayName}`,children:P.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX////+AAD//v/8AAD8///oAAD9+/fwAADtAAD+AAP5AAD+//31AAD9//3//f7rAADjAAD8x8nvsLH4//ztJijwPT/+/vn0r7D4vrz88/P57ev44uL42dn90NH0ubftqazwn6DvmJftj43rgIDodnjibG/iZV/gW1blUVHpSk7qRkLyNjfyJCHwCw/oOzjnTE3klJLvYGDzMDDtgIXwV1ryi4/mLCj0xb3qg33opZzw1tXps6rwcHX20MrqjpDqZmj71+DtNj7mFivsYmk7CXl0AAAJZ0lEQVR4nO2diVbbuhZANTm2JUsJCTVkYkpoKSVAewuU3tLevvf///SO5LiFBHpX7BPst9bZdBXIYLSt0bJ0whhBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEASxTQz8M8V3QMCX/yb8o8Y8eaHxjxsDzwngyfP217vahLWM5bkQ/jskVRUOxjKxdAbUEv/z8jHhf7EGXscKJ+ffa0zOzPN/pzmc8FZF6h9TGq09sf7i8lfvBjlrLXYaN+f3aYbEuuFoPJnu7B/0D4+OT05ms/np23dn788vP+xeXCwWcdxNHpEli8XF7u6Hy/dXZ+9+vJ1/md2cHB8d9g/2d6aT8WjolrrLb69ZYG0OBc/YcP7FaDLtH13PP77/tIgh2d0kzjItJa+M1lmcdLtJN44XH87/O78+6j9MRiKcw5wNHPy3/fopBNgNp4d/fd7tRZnm4OOddEihXP5eEB6RLxv751Lg8etk+Qz8pP1hdRb1dj/PDqdDBU3QgL1Ghk5ubpOscOE+IZBK+B9SKtPCtqqhhlf6wxS/h2eKB4vMvT2Z/Gqet4i6u4yLcx1SHuzSkKKlcXimmqHky6/iPbLwlPxXuYjPd6B2bKkFMr7bytX4KuZ1Klot4O/GV2NQVNvoSgwc17F+BGe1MUMO+Sm7BypX28hGZaxhJ5CB+g/FbsvoUI7jG2bW+93aGOEcm2lfQtPGFP0fTnWafWHWoRtCHrJ73VjxfEp2v4U8ZCL/Gsuyu2qaeJLjG1qxy9OWGKb6Aj0PoZe9ljptWm0JjHaOkf3MQLmoHfkX0DyBth2xtXHQURxqqZsWK0lhtHoIqUITFEYZdemP2xagulwyg9jtO2XGSXODtXWg20pGAzxBASX+7z+NoJtA9jGHbs6qWdNGa8wYZkvj2GXTQmtcKkRDpYa91oxnSnqIbSm0WpOsaaFVZPYVcVzj2EF7eooSeYAnyCy7btpnjVRfIxoy9q1poWf4hjn6Vu1rSv2oBpNF0zprSLnAzEMbNS20huQR4lXwYNw+Q572xoiZOM0q9/ZhSlfijxYkj6d4gmq/+hwUXFX6iXr0/lRKvY9ouMcrp7D7cJnxMI2MfG2i+R6eITuqnpDIsr8jqTW2IZQqzLmak6r1SPJexzL3PZFc4862ypSfILY08+otRa9jXM5GP7r4cwRzRMPP9QxZbtXkMpOYJRWOdIYnqN5UT1mvA+8Xzg3YQeTvf2IZQh/0Bs+QXVTPw6hTHMJY5b77gUOKM7EM5/yCGYFVUBf1DR2zVo1+JL7jQDFMeRcMkQRZUj0lpaGyDr7Y1/M49K21LcEwwTM0CIbOTxxZKFX7C80x2lUwdGg3u4cJr1x3SsMSa9R11/eOdQ0lT4ZGIWXiCNHQGaeG32Kd1r1JAEPvMVoxHcV4htD8CaP+gerI01ozlFLGEzTDcSzRDFVuHTNQHXd5rREAvDV7QDOcxNVTsmq4ROTsKAlLD3S1swcFINvB0QMe4vr94SrQtA7nXbhGSKsb4l0gThHrYYkT1qnJVcYrLkDyhnhzwjvbyEM/jFNs5yKrduzCEKse7mfo9ZD9WkR5FPkBip8E2KicgKHew+oOwbD6WPJlwwI7GH5JfGVMN7vuCIZoKzHBsKrgvxoqGKyOzzLfpDZqWFnwXw1zC1fIbHqr5Wat2dIQrR7itzQlzoocOkd2vuHVsV94vcew9ixs0zAX0DOqu9tNV1z9/xgK6DJCPUw3m4tDN6zMnw0NdGjQlnI/sNnsWgPX8G4r/aGFC1gooPdRsTR2Q/zS/r3nduJUM4yrz+q/aAi9BPy729XLBf6bGnJviHWRP92GoXIDNfEVsNqYF06JH7VhGSbYLY3zEzfDL3HYMVLVMN5/dsNYFb4ij7ydUZ1cHNWaIYYBQnaHZjhGzsNOrkIFrHWNz9P4AUfPG3ZxDRULF4a15r7h3MQTNEPMuTY/WB6d+gNWn/spDcdovcUwqT4l9tjQCOjglTjqcoS73ilP/H49HEOHNBPl906xg56vf/Xvzvg5b7QxDUNqaZRRD+8zjnNvRvKIod16YlijNl8BZRhi1y+lmifMoRnu1stD6BwMG7D8uEZ9XkPKCyw94E09QyfgbKuDnuYZ2roaiXsP+GP1lEQdY/wO7Ic3uurU6POGKf+IaHhap7ewUERHb+Mwf49YSlN5irgW46R6QqKOY+57JKtcA/4JONgJnqA6rp6SnmX9yO9vlfVvij4GztcxXh6qveotTVjXxjn6ujY42iGaIFP7lUdZkmdh8zf+1kXUtYl11pduixR1fSkb95oWWiPl0RjNT1jXPkO/6hEvQoZp4Vp9zhdofj7U0XnTOmuk/ByxwxfqW+taGsm/4QlCKW3fvicpEfc9CdPCvWupxt271r79hzrDm2nzM9Sd9nUXvQ5mSyPYz6aF1viJGbNOOTVvWmgVPVeo8U1UH3MGoi4+zpnuI+7lFsblftq7RX2i5MkYbbkQ8zczcx8XozWGfqvYT4W3jB3yEEr8YY3VCtikMtWH6NExO90mw5g9BVLSdQPEPCw41q3JRKn1sTLY4QWV/U9rDFN5AYKYLY1H5JNu02YlaTKxDj3KpzPsPlvGGWqyPvq1Rdk9wwxsUhqKAfsrLv5Ko6UVBGcMMzZNiWWDXN3E9bYQ1CTEOOXxCbODbYSGNP4GZz+qtYCiviHnUT/s9NuCIfN7ltj4TMsyOmvKN1zXW8kqmOkQ6ha+ZVfjbdl5nFKW3b2JdYgn9jrVUYYbaTzMmsv48o7h9/SPUEr55byTm9u4vNBY3o+QTwrvo5/L6MfPng258qNce+3yOP7OXJbc3kwUM05sMZY5DFCFsgaurYfT+9nn3Sj6fUX1S2mFFeOnhs+8bvWFWsdFLOiHofIXqsa8VrT2R/G8Zx/PPy3iOMTzjvVqPO+X3PhavyrDeCwE9IYjLT4V8bynk9GjU/w6cgHrY5wxvwttuXzuaUz2my+z+emPd2dXZUz2KAH932SLMib7+7N3P07nMx+T/XAlJnsRxt4GXlHtCUI4YWEEZdXTqLBPfnthxuh3vP2ViLL+UxP8Y0ZAnvmtQ0y4LbafL+E/scGGcuPTwfznOPiEhc9wWDZ2y889CJ994PNa/H7v8lMhHsXmzsOHJYhwPN+kMVFEJxdC+U+IaN0nJRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRCt5X8Yn6WD1tYzWAAAAABJRU5ErkJggg=="})}),P.jsx(Zt,{to:`/MovieLists?category=NETFLIX&user=${o.DisplayName}`,children:P.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAh1BMVEUAAACxBg/lCRRMAwa3Bg+vBg/pCRSpBQ/rCRWsBg6BBQthAwiiBQ6ZBA7tCRWkBQ6UBA6KAw2cBA6WBA6JAw3RCBJ9AQxIAgbaCBPCBxFCAgbhCRRzBArIBxHXCBNdAwgYAAIvAQTNCBIqAQQfAAMyAQVYAwhrAwnEBxF3BAomAQQ4AgUPAAEvTZPgAAAF40lEQVR4nO2d4U7jOhBGE2jiJiS1naSlLbRA2QvLwvs/37WdNp00M+ZKK632qt/5PUL4yN9sPDjZJAEAAAAAAAAAAAAAAAAAfo+SZzutfLpjef3zv/PfwHoxZ1jMppXFjOX2z//OfwOz/Ibla1KpUo5r9aYeWG2Lx2klvBGKHbvh8s2kEt4oacEHdf7jshLeKKle80EtLyvhjZIWGz6oh8tKeKOkacUHdfHPRSW8UdK02fMNzlxUwhslTTX/CJfvLyrhjZKmRSsE9X5cCW8Ut3SzZMXNq3ElvFHc0hvhEe5hXAlvFLd0ZYWgPo0q4Y3ill4Y4ayVjirhjeKWnjV6/h+CCm8Uv3bdsdouhiLwRvFrV0Y4a42ml/BG8Wsv6oYPak6HIvBG8WvPqk6YXtKhCLxRwuK1Fc5aO1IJb5SweNUaYXpJhiLwRgmLL5ry+6EIvFHSvsHZ9NuhCLxRem/aSGet81AE3ij96lVdCkORZqiEN0p6bHBW8Y9w66ES3ihHb9pIZ623U6WGN0K/+swFVRiKFKdKeKMcl68aW/FBvTlVwhvluPyiMqUQ1PdjJbxRTt50W/6MD0XgjZIODc7WwlDkua/UWQZvA4O3xqyEociqr6zgjXBav29w8aFIVcDbmcGbrjvDB3X+EiqdN0bc1XvzQeWvdM1tqGwKbsNdu7dMuaAKQ5FlqGwUvJ0ZBPigdsJQJNzKhzcK8eaCGhuK1IoLKry5BlfyN0XyMBRpNbfhrt6ba3BtVwpB9UMReKOcvbkGZ1cHfsMpV2kqTtzVe+uDGhmKmAbezlBvPqi8Nj8UMU0FbwNnA67BuaDKQxHbcEGFt8w/iZTSUOQrsTUXVHgLDc5KQ5GPpGu5oMJbaHB2JVzp2iSlcRtucraHN9fgdG3EociP4G2y4eCtb3BWGIosyg/LBRXenDfVtFaaXh4erakrDW891IFrcC6onRDUtjPtNKjwFhqcDyp/pSvfrLigwlvf4FxQpddnyo4JKryFBueDKgxF8qazPqjjJxF4Cw0uBJWfXuY/V3Z6RoW3Y4NzQVXCN0W4oMIbCSqvLddl+BcV3hLGmw+qcKXr4IN68SQCb6cG54IqTS87H1R484y9uSeREFR+KJIXIajwlky99UEVhiLLPqjwdumtD6rppOmlnQQV3voNp3xQpemlC6p79IW3ZOqtD6r0B+g+qPDGefNBtbcLOaijBgdvQ4NzQTW/pE8VrGxbwdvUWwhqa15KfsOtfVBpg4O3UVA/v4Sgmm7c4ODt7K2q289E+lTBytY0qPBGg1pvk0cxqC288d5002yTRHhzvC5HDQ7eaFC9N+Gy78YFVcPbxFsIauW83fFBfShHQYU3uuG0vwnNn7XmlQ8qvMne+K9N5buVb3DwNhWnlPLehLPWTUcbHLzRDafCZxz2wmXf0pwbHLxRb0Xw1vJBXdKgwhsNau/tUzhrhaDCG7Phsv5zK8Kt/LRsh5cq4Y3x1vEbbr86P4nAGxWX9t5+CVe6jB0aHLwx3sShSNlqeIt4+xCGIu5JBN4YZkdvX8JQpLWnBgdvI042hMu+m7KGt5g3cShijg0O3kY5HWyw2m7mlW3gLeaNv0OY71xQ4S3iTRyKtDqDN9lbwr8+kyvbP4nAm+CNv5qUL7sG3mLetkJQbavgLeItEW7lZ0bDW8yb5Q/3+67K4C3i7VW4e2nqAt4i3hLpUwVGwVvMmzQU6TS8xbw9SzdFmgzeIt7EoYgp4C3m7V0YilgFbzFv4k2RCt6i3oRb+bs2g7eYtzfhrOUaHLxFvElDkULDW9Qb//+S5csa3qLepKFIk8FbzJs0FJkpeIt6E742ta/gLertVbjShf0W95YI77lt4C3ubSUMRTJ4i3p7nuc5s+Xyq99vsyPhmw7NdlJY7Q7L9cNNvnDMB4n58p75oVdA7yvTbffx/nT7+fr8Fa9/ftm+PZatmh3WN3Nv8Er3W/d4d//yjSuJ19t3W1zpfgMAAAAAAAAAAAAAAAAAAAAAAPD/51/F7mieRZgKEQAAAABJRU5ErkJggg=="})}),P.jsx(Zt,{to:`/MovieLists?category=その他&user=${o.DisplayName}`,children:P.jsx("img",{src:"button_image.png"})})]})})]})]},o.id))})},G4=()=>{const[t,e]=F.useState([]),[n,r]=F.useState(!0),[i,s]=F.useState(null),o=As(),l=new URLSearchParams(o.search),u=l.get("category"),c=l.get("user");return F.useEffect(()=>{(async(p,m)=>{r(!0);try{const w=dm(Pa(Ca,"Movie"),mf("Category","==",p),mf("UserId","==",m)),k=(await pm(w)).docs.map(N=>({id:N.id,...N.data()}));e(k)}catch(w){s("Error fetching movies: "+w.message)}finally{r(!1)}})(u,c)},[u,c]),n?P.jsx("div",{className:"CenteredContainer ",children:P.jsx(gm,{})}):i?P.jsxs("div",{className:"Error",children:["Error: ",i]}):P.jsx("div",{className:"MovieListContainer",children:t.length===0?P.jsx("p",{className:"CenteredContainer ",children:"動画が登録されていません。"}):t.map(d=>P.jsxs("div",{className:"card",children:[P.jsx("img",{src:d.Url,alt:d.Title}),P.jsxs("div",{className:"card__content",children:[P.jsx("p",{className:"card__title",children:d.Title}),P.jsx("div",{className:"DetailContainer",children:P.jsx("a",{href:d.Url,target:"_blank",rel:"noopener noreferrer",children:P.jsx("button",{className:"MoreDetail",children:"詳細"})})}),P.jsx("p",{className:"card__description",children:d.Description})]})]},d.id))})},Q4=()=>{const t=Os.currentUser,e=t?t.displayName:null;return P.jsx(P.Fragment,{children:P.jsxs("div",{className:"UserContainer",children:[P.jsx("div",{className:"Usericon"}),P.jsxs("div",{className:"ContentList",children:[P.jsx("div",{className:"top",children:e}),P.jsx("div",{className:"bottom",children:P.jsx(Zt,{to:"/MyMovieLists",children:P.jsx("button",{children:"投稿した動画一覧"})})})]})]})})},Y4=()=>{const t=xw(),[e,n]=F.useState(""),[r,i]=F.useState(""),[s,o]=F.useState(""),[l,u]=F.useState(""),c=d=>{d.preventDefault(),BN(t,e,r).then(p=>{const m=p.user;console.log(m),u("Logged in successfully!"),o("")}).catch(p=>{const m=p.code,w=p.message;o(`Error: ${m} - ${w}`),u("")})};return P.jsx(P.Fragment,{children:P.jsx("div",{className:"formContainer",children:P.jsxs("form",{className:"form_main",onSubmit:c,children:[P.jsx("p",{className:"heading",children:"Login"}),P.jsxs("div",{className:"inputContainer",children:[P.jsx("svg",{viewBox:"0 0 16 16",fill:"#2e2e2e",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon",children:P.jsx("path",{d:"M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"})}),P.jsx("input",{placeholder:"Username",id:"username",className:"inputField",type:"text",value:e,onChange:d=>n(d.target.value)})]}),P.jsxs("div",{className:"inputContainer",children:[P.jsx("svg",{viewBox:"0 0 16 16",fill:"#2e2e2e",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon",children:P.jsx("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"})}),P.jsx("input",{placeholder:"Password",id:"password",className:"inputField",type:"password",value:r,onChange:d=>i(d.target.value)})]}),P.jsx("button",{id:"button",children:"Submit"}),s&&P.jsx("p",{className:"error",children:s}),l&&P.jsx("p",{className:"success",children:l}),P.jsxs("div",{className:"signupContainer",children:[P.jsx("p",{children:"Don't have an account?"}),P.jsx(Zt,{to:"/SignUp",children:P.jsx("a",{href:"#",children:"Sign up"})})]})]})})})},X4=()=>{const[t,e]=F.useState(""),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[u,c]=F.useState(""),d=dp(),p=async w=>{w.preventDefault();try{const k=(await zN(Os,t,n)).user;await WN(k,{displayName:i}),c("Sign up successful! Redirecting..."),l(""),setTimeout(()=>{m(k),console.log(k),d("/")},2e3)}catch(R){console.error("Error signing up: ",R),l("Error signing up. Please try again."),c("")}},m=async({uid:w,email:R,displayName:k})=>{await ZT(Pa(Ca,"User"),{UserId:w,Email:R,DisplayName:k})};return P.jsx(P.Fragment,{children:P.jsx("div",{className:"formContainer",children:P.jsxs("form",{className:"form_main",onSubmit:p,children:[P.jsx("p",{className:"heading",children:"SignUp"}),P.jsxs("div",{className:"inputContainer",children:[P.jsx("svg",{viewBox:"0 0 16 16",fill:"#2e2e2e",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon",children:P.jsx("path",{d:"M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"})}),P.jsx("input",{placeholder:"Username",id:"username",className:"inputField",type:"text",value:t,onChange:w=>e(w.target.value)})]}),P.jsxs("div",{className:"inputContainer",children:[P.jsx("svg",{viewBox:"0 0 16 16",fill:"#2e2e2e",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon",children:P.jsx("path",{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"})}),P.jsx("input",{placeholder:"Password",id:"password",className:"inputField",type:"password",value:n,onChange:w=>r(w.target.value)})]}),P.jsx("div",{className:"inputContainer",children:P.jsx("input",{placeholder:"Username",id:"username",className:"inputField",type:"text",value:i,onChange:w=>s(w.target.value)})}),P.jsx("button",{id:"button",type:"submit",children:"Submit"}),o&&P.jsx("p",{className:"error",children:o}),u&&P.jsx("p",{className:"success",children:u}),P.jsxs("div",{className:"signupContainer",children:[P.jsx("p",{children:"Already have an account?"}),P.jsx(Zt,{to:"/",children:P.jsx("a",{href:"#",children:"Login"})})]})]})})})},J4=()=>{const t=Os.currentUser,e=t?t.displayName:null,[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[u,c]=F.useState(""),[d,p]=F.useState(null),m=["YouTube","NETFLIX","その他"],w=async R=>{R.preventDefault();try{const k=await ZT(Pa(Ca,"Movie"),{UserId:e,Title:n,Description:i,Url:o,Category:u,FileName:d?d.name:"no file"});console.log("Document written with ID: ",k.id),r(""),s(""),l(""),c(""),p(null)}catch(k){console.error("Error adding document: ",k)}};return P.jsx(P.Fragment,{children:P.jsx("div",{className:"FormContainer",children:P.jsxs("form",{className:"form",onSubmit:w,children:[P.jsx("span",{className:"form-title",children:"Movie Information"}),P.jsx("div",{className:"input-group",children:P.jsx("input",{placeholder:"Title",required:!0,type:"text",name:"title",autoComplete:"off",className:"input",value:n,onChange:R=>r(R.target.value)})}),P.jsx("div",{className:"input-group",children:P.jsx("input",{placeholder:"Description",required:!0,type:"text",name:"description",autoComplete:"off",className:"input description",value:i,onChange:R=>s(R.target.value)})}),P.jsx("div",{className:"input-group",children:P.jsx("input",{placeholder:"URL",required:!0,type:"text",name:"url",autoComplete:"off",className:"input",value:o,onChange:R=>l(R.target.value)})}),P.jsxs("div",{className:"input-group categoryContainer",children:[P.jsx("span",{children:"Category"}),m.map(R=>P.jsxs("div",{className:"category",children:[P.jsx("input",{type:"radio",required:!0,id:R,name:"category",value:R,checked:u===R,onChange:k=>c(k.target.value)}),P.jsx("label",{htmlFor:R,children:R})]},R))]}),P.jsx("p",{className:"form-paragraph",children:"File should be an image"}),P.jsxs("label",{htmlFor:"file-input",className:"drop-container",children:[P.jsx("span",{className:"drop-title",children:"Drop files here"}),"or",P.jsx("input",{type:"file",accept:"image/*",id:"file-input",onChange:R=>p(R.target.files[0])})]}),P.jsx("button",{className:"SubmitButton",type:"submit",children:"Submit"})]})})})},Z4=()=>P.jsx("div",{className:"UserInfoContaier",children:P.jsx("div",{className:"voice-chat-card",children:P.jsxs("div",{className:"UserInfo",children:[P.jsx("img",{className:"avatar"}),P.jsx("div",{className:"username",children:"User nameが投稿しました。"})]})})}),eL=()=>P.jsx(P.Fragment,{children:P.jsxs("div",{className:"MovieListContaier",children:[P.jsxs("div",{className:"card",children:[P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:P.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),P.jsxs("div",{className:"card__content",children:[P.jsx("p",{className:"card__title",children:"MovieTitle"}),P.jsx("div",{className:"DetailContainer",children:P.jsx("a",{href:"https://www.youtube.com/watch?v=A08ERKkK57U",target:"_blank",rel:"noopener noreferrer",children:P.jsx("button",{className:"MoreDetail",children:"詳細"})})}),P.jsx("p",{className:"card__description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.ddddddddddddddddddddddd"})]})]}),P.jsx(Z4,{})]})}),tL=()=>{const[t,e]=F.useState([]),[n,r]=F.useState(!0),[i,s]=F.useState(null),o=Os.currentUser,l=o?o.displayName:null;return console.log("User Display Name:",l),F.useEffect(()=>{(async()=>{r(!0);try{const c=dm(Pa(Ca,"Movie"),mf("UserId","==",l)),p=(await pm(c)).docs.map(m=>({id:m.id,...m.data()}));e(p)}catch(c){s("Error fetching movies: "+c.message)}finally{r(!1)}})()},[]),n?P.jsx("div",{className:"LoadingContainer",children:P.jsx(gm,{})}):i?P.jsxs("div",{className:"Error",children:["Error: ",i]}):P.jsx("div",{className:"MovieListContainer",children:t.length===0?P.jsx("p",{className:"CenteredContainer ",children:"動画が登録されていません。"}):t.map(u=>P.jsxs("div",{className:"card",children:[P.jsx("img",{src:u.Url,alt:u.Title}),P.jsxs("div",{className:"card__content",children:[P.jsx("p",{className:"card__title",children:u.Title}),P.jsx("div",{className:"DetailContainer",children:P.jsx("a",{href:u.Url,target:"_blank",rel:"noopener noreferrer",children:P.jsx("button",{className:"MoreDetail",children:"詳細"})})}),P.jsx("p",{className:"card__description",children:u.Description})]})]},u.id))})},nL=()=>{const[t,e]=F.useState(null),[n,r]=F.useState(!0);return F.useEffect(()=>{const i=KN(Os,s=>{e(s),r(!1)});return()=>i()},[]),{user:t,loading:n}},rL=()=>{const{pathname:t}=As(),{setPageTitle:e}=e1();return Lu.useEffect(()=>{switch(t){case"/UserLists":case"/":e("友達一覧");break;case"/MovieLists":e("動画一覧");break;case"/AddMovie":e("動画追加");break;case"/MyPage":e("MyPage");break;case"/MyMovieLists":e("MyMovieLists");break;case"/TimeLine":e("TimeLine");break;default:e("ページ未設定")}},[t,e]),null};function iL(){const{user:t,loading:e}=nL();return e?P.jsx("div",{children:"Loading..."}):P.jsx(tP,{children:P.jsx(sP,{children:t?P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"HeaderContainer",children:P.jsx(K4,{})}),P.jsx(rL,{}),P.jsx("div",{className:"ContentContainer",children:P.jsxs(Ny,{children:[P.jsx(Qt,{path:"/",element:P.jsx(P_,{})}),P.jsx(Qt,{path:"/UserLists",element:P.jsx(P_,{})}),P.jsx(Qt,{path:"/Movielists",element:P.jsx(G4,{})}),P.jsx(Qt,{path:"/AddMovie",element:P.jsx(J4,{})}),P.jsx(Qt,{path:"/TimeLine",element:P.jsx(eL,{})}),P.jsx(Qt,{path:"/MyPage",element:P.jsx(Q4,{})}),P.jsx(Qt,{path:"/MyMovieLists",element:P.jsx(tL,{})})]})}),P.jsx("div",{className:"FooterContainer",children:P.jsx(pk,{})})]}):P.jsx(P.Fragment,{children:P.jsxs(Ny,{children:[P.jsx(Qt,{path:"/",element:P.jsx(Y4,{})}),P.jsx(Qt,{path:"/SignUp",element:P.jsx(X4,{})})]})})})})}zE(document.getElementById("root")).render(P.jsx(F.StrictMode,{children:P.jsx(iL,{})}));
