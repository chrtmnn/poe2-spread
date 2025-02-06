var lw=Object.defineProperty;var cw=(r,e,t)=>e in r?lw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Qh=(r,e,t)=>cw(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function hw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yh={exports:{}},Ta={},Xh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function dw(){if(Jm)return Se;Jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function O(V){return V===null||typeof V!="object"?null:(V=R&&V[R]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,Y={};function j(V,B,de){this.props=V,this.context=B,this.refs=Y,this.updater=de||z}j.prototype.isReactComponent={},j.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},j.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function he(){}he.prototype=j.prototype;function le(V,B,de){this.props=V,this.context=B,this.refs=Y,this.updater=de||z}var Z=le.prototype=new he;Z.constructor=le,H(Z,j.prototype),Z.isPureReactComponent=!0;var te=Array.isArray,me=Object.prototype.hasOwnProperty,oe={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(V,B,de){var Te,Ie={},Ce=null,Le=null;if(B!=null)for(Te in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ce=""+B.key),B)me.call(B,Te)&&!P.hasOwnProperty(Te)&&(Ie[Te]=B[Te]);var Me=arguments.length-2;if(Me===1)Ie.children=de;else if(1<Me){for(var ze=Array(Me),pt=0;pt<Me;pt++)ze[pt]=arguments[pt+2];Ie.children=ze}if(V&&V.defaultProps)for(Te in Me=V.defaultProps,Me)Ie[Te]===void 0&&(Ie[Te]=Me[Te]);return{$$typeof:r,type:V,key:Ce,ref:Le,props:Ie,_owner:oe.current}}function S(V,B){return{$$typeof:r,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function D(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return B[de]})}var x=/\/+/g;function A(V,B){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):B.toString(36)}function Ze(V,B,de,Te,Ie){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ce){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case r:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=Te===""?"."+A(Le,0):Te,te(Ie)?(de="",V!=null&&(de=V.replace(x,"$&/")+"/"),Ze(Ie,B,de,"",function(pt){return pt})):Ie!=null&&(k(Ie)&&(Ie=S(Ie,de+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+V)),B.push(Ie)),1;if(Le=0,Te=Te===""?".":Te+":",te(V))for(var Me=0;Me<V.length;Me++){Ce=V[Me];var ze=Te+A(Ce,Me);Le+=Ze(Ce,B,de,ze,Ie)}else if(ze=O(V),typeof ze=="function")for(V=ze.call(V),Me=0;!(Ce=V.next()).done;)Ce=Ce.value,ze=Te+A(Ce,Me++),Le+=Ze(Ce,B,de,ze,Ie);else if(Ce==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Pt(V,B,de){if(V==null)return V;var Te=[],Ie=0;return Ze(V,Te,"","",function(Ce){return B.call(de,Ce,Ie++)}),Te}function kt(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var Fe={current:null},J={transition:null},fe={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:J,ReactCurrentOwner:oe};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Pt,forEach:function(V,B,de){Pt(V,function(){B.apply(this,arguments)},de)},count:function(V){var B=0;return Pt(V,function(){B++}),B},toArray:function(V){return Pt(V,function(B){return B})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=j,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=le,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Se.act=ne,Se.cloneElement=function(V,B,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Te=H({},V.props),Ie=V.key,Ce=V.ref,Le=V._owner;if(B!=null){if(B.ref!==void 0&&(Ce=B.ref,Le=oe.current),B.key!==void 0&&(Ie=""+B.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(ze in B)me.call(B,ze)&&!P.hasOwnProperty(ze)&&(Te[ze]=B[ze]===void 0&&Me!==void 0?Me[ze]:B[ze])}var ze=arguments.length-2;if(ze===1)Te.children=de;else if(1<ze){Me=Array(ze);for(var pt=0;pt<ze;pt++)Me[pt]=arguments[pt+2];Te.children=Me}return{$$typeof:r,type:V.type,key:Ie,ref:Ce,props:Te,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=T,Se.createFactory=function(V){var B=T.bind(null,V);return B.type=V,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:f,render:V}},Se.isValidElement=k,Se.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:kt}},Se.memo=function(V,B){return{$$typeof:_,type:V,compare:B===void 0?null:B}},Se.startTransition=function(V){var B=J.transition;J.transition={};try{V()}finally{J.transition=B}},Se.unstable_act=ne,Se.useCallback=function(V,B){return Fe.current.useCallback(V,B)},Se.useContext=function(V){return Fe.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Fe.current.useDeferredValue(V)},Se.useEffect=function(V,B){return Fe.current.useEffect(V,B)},Se.useId=function(){return Fe.current.useId()},Se.useImperativeHandle=function(V,B,de){return Fe.current.useImperativeHandle(V,B,de)},Se.useInsertionEffect=function(V,B){return Fe.current.useInsertionEffect(V,B)},Se.useLayoutEffect=function(V,B){return Fe.current.useLayoutEffect(V,B)},Se.useMemo=function(V,B){return Fe.current.useMemo(V,B)},Se.useReducer=function(V,B,de){return Fe.current.useReducer(V,B,de)},Se.useRef=function(V){return Fe.current.useRef(V)},Se.useState=function(V){return Fe.current.useState(V)},Se.useSyncExternalStore=function(V,B,de){return Fe.current.useSyncExternalStore(V,B,de)},Se.useTransition=function(){return Fe.current.useTransition()},Se.version="18.3.1",Se}var Zm;function Zl(){return Zm||(Zm=1,Xh.exports=dw()),Xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function fw(){if(eg)return Ta;eg=1;var r=Zl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,R={},O=null,z=null;_!==void 0&&(O=""+_),g.key!==void 0&&(O=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(R[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)R[E]===void 0&&(R[E]=g[E]);return{$$typeof:e,type:f,key:O,ref:z,props:R,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var tg;function pw(){return tg||(tg=1,Yh.exports=fw()),Yh.exports}var Ye=pw(),Ft=Zl();const Uy=hw(Ft);var pl={},Jh={exports:{}},Xt={},Zh={exports:{}},ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function mw(){return ng||(ng=1,function(r){function e(J,fe){var ne=J.length;J.push(fe);e:for(;0<ne;){var V=ne-1>>>1,B=J[V];if(0<o(B,fe))J[V]=fe,J[ne]=B,ne=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var fe=J[0],ne=J.pop();if(ne!==fe){J[0]=ne;e:for(var V=0,B=J.length,de=B>>>1;V<de;){var Te=2*(V+1)-1,Ie=J[Te],Ce=Te+1,Le=J[Ce];if(0>o(Ie,ne))Ce<B&&0>o(Le,Ie)?(J[V]=Le,J[Ce]=ne,V=Ce):(J[V]=Ie,J[Te]=ne,V=Te);else if(Ce<B&&0>o(Le,ne))J[V]=Le,J[Ce]=ne,V=Ce;else break e}}return fe}function o(J,fe){var ne=J.sortIndex-fe.sortIndex;return ne!==0?ne:J.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,R=null,O=3,z=!1,H=!1,Y=!1,j=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(J){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=J)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function te(J){if(Y=!1,Z(J),!H)if(t(g)!==null)H=!0,kt(me);else{var fe=t(_);fe!==null&&Fe(te,fe.startTime-J)}}function me(J,fe){H=!1,Y&&(Y=!1,he(T),T=-1),z=!0;var ne=O;try{for(Z(fe),R=t(g);R!==null&&(!(R.expirationTime>fe)||J&&!D());){var V=R.callback;if(typeof V=="function"){R.callback=null,O=R.priorityLevel;var B=V(R.expirationTime<=fe);fe=r.unstable_now(),typeof B=="function"?R.callback=B:R===t(g)&&s(g),Z(fe)}else s(g);R=t(g)}if(R!==null)var de=!0;else{var Te=t(_);Te!==null&&Fe(te,Te.startTime-fe),de=!1}return de}finally{R=null,O=ne,z=!1}}var oe=!1,P=null,T=-1,S=5,k=-1;function D(){return!(r.unstable_now()-k<S)}function x(){if(P!==null){var J=r.unstable_now();k=J;var fe=!0;try{fe=P(!0,J)}finally{fe?A():(oe=!1,P=null)}}else oe=!1}var A;if(typeof le=="function")A=function(){le(x)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Pt=Ze.port2;Ze.port1.onmessage=x,A=function(){Pt.postMessage(null)}}else A=function(){j(x,0)};function kt(J){P=J,oe||(oe=!0,A())}function Fe(J,fe){T=j(function(){J(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){H||z||(H=!0,kt(me))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(J){switch(O){case 1:case 2:case 3:var fe=3;break;default:fe=O}var ne=O;O=fe;try{return J()}finally{O=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,fe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=O;O=J;try{return fe()}finally{O=ne}},r.unstable_scheduleCallback=function(J,fe,ne){var V=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ne+B,J={id:E++,callback:fe,priorityLevel:J,startTime:ne,expirationTime:B,sortIndex:-1},ne>V?(J.sortIndex=ne,e(_,J),t(g)===null&&J===t(_)&&(Y?(he(T),T=-1):Y=!0,Fe(te,ne-V))):(J.sortIndex=B,e(g,J),H||z||(H=!0,kt(me))),J},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(J){var fe=O;return function(){var ne=O;O=fe;try{return J.apply(this,arguments)}finally{O=ne}}}}(ed)),ed}var rg;function gw(){return rg||(rg=1,Zh.exports=mw()),Zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function yw(){if(ig)return Xt;ig=1;var r=Zl(),e=gw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},R={};function O(n){return g.call(R,n)?!0:g.call(E,n)?!1:_.test(n)?R[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function H(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];j[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(he,le);j[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(he,le);j[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(he,le);j[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function Z(n,i,a,c){var d=j.hasOwnProperty(i)?j[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(H(i,a,d,c)&&(a=null),c||d===null?O(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),oe=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),J=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var de=!1;function Te(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case oe:return"Portal";case S:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case kt:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pt(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nr(n){n._valueTracker||(n._valueTracker=pt(n))}function as(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function us(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Po(n,i){i=i.checked,i!=null&&Z(n,"checked",i,!1)}function ko(n,i){Po(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ls(n,i.type,a):i.hasOwnProperty("defaultValue")&&ls(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Za(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ls(n,i,a){(i!=="number"||Nr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function No(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function hs(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Do(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,Oo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Dr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ii.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ti[i]=Ti[n]})});function Vo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+i).trim():i+"px"}function xo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Vo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mo(n,i){if(i){if(Lo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function bo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fs=null,cn=null,Un=null;function ps(n){if(n=aa(n)){if(typeof fs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ku(i),fs(n.stateNode,n.type,i))}}function zn(n){cn?Un?Un.push(n):Un=[n]:cn=n}function Fo(){if(cn){var n=cn,i=Un;if(Un=cn=null,ps(n),i)for(n=0;n<i.length;n++)ps(i[n])}}function Ai(n,i){return n(i)}function Uo(){}var or=!1;function zo(n,i,a){if(or)return n(i,a);or=!0;try{return Ai(n,i,a)}finally{or=!1,(cn!==null||Un!==null)&&(Uo(),Fo())}}function et(n,i){var a=n.stateNode;if(a===null)return null;var c=ku(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ms=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ms=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ms=!1}function Ri(n,i,a,c,d,m,v,I,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(W){this.onError(W)}}var Ci=!1,gs=null,Tn=!1,jo=null,Ic={onError:function(n){Ci=!0,gs=n}};function ys(n,i,a,c,d,m,v,I,C){Ci=!1,gs=null,Ri.apply(Ic,arguments)}function eu(n,i,a,c,d,m,v,I,C){if(ys.apply(this,arguments),Ci){if(Ci){var F=gs;Ci=!1,gs=null}else throw Error(t(198));Tn||(Tn=!0,jo=F)}}function In(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Pi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function tu(n){var i=n.alternate;if(!i){if(i=In(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Sn(d),n;if(m===c)return Sn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Bo(n){return n=tu(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_s(n);if(i!==null)return i;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,nu=e.unstable_shouldYield,Sc=e.unstable_requestPaint,je=e.unstable_now,ru=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Or=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,qo=e.unstable_LowPriority,iu=e.unstable_IdlePriority,Ni=null,en=null;function su(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ni,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:au,Ho=Math.log,ou=Math.LN2;function au(n){return n>>>=0,n===0?32:31-(Ho(n)/ou|0)|0}var Es=64,ws=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Di(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Vr(I):(m&=v,m!==0&&(c=Vr(m)))}else v=a&~d,v!==0?c=Vr(v):m!==0&&(c=Vr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-zt(i),d=1<<a,c|=n[a],i&=~d;return c}function Ac(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-zt(m),I=1<<v,C=d[v];C===-1?(!(I&a)||I&c)&&(d[v]=Ac(I,i)):C<=i&&(n.expiredLanes|=I),m&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oi(){var n=Es;return Es<<=1,!(Es&4194240)&&(Es=64),n}function xr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Lr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-zt(i),n[i]=a}function Ue(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Mr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Re=0;function br(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var uu,Ts,lu,cu,hu,Wo=!1,jn=[],wt=null,An=null,Rn=null,Fr=new Map,dn=new Map,Bn=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(n,i){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Fr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function qt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=aa(i),i!==null&&Ts(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Cc(n,i,a,c,d){switch(i){case"focusin":return wt=qt(wt,n,i,a,c,d),!0;case"dragenter":return An=qt(An,n,i,a,c,d),!0;case"mouseover":return Rn=qt(Rn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Fr.set(m,qt(Fr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,dn.set(m,qt(dn.get(m)||null,n,i,a,c,d)),!0}return!1}function fu(n){var i=bi(n.target);if(i!==null){var a=In(i);if(a!==null){if(i=a.tag,i===13){if(i=Pi(a),i!==null){n.blockedOn=i,hu(n.priority,function(){lu(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ur(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Is(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return i=aa(a),i!==null&&Ts(i),n.blockedOn=a,!1;i.shift()}return!0}function Vi(n,i,a){ur(n)&&a.delete(i)}function pu(){Wo=!1,wt!==null&&ur(wt)&&(wt=null),An!==null&&ur(An)&&(An=null),Rn!==null&&ur(Rn)&&(Rn=null),Fr.forEach(Vi),dn.forEach(Vi)}function Cn(n,i){n.blockedOn===i&&(n.blockedOn=null,Wo||(Wo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pu)))}function Pn(n){function i(d){return Cn(d,n)}if(0<jn.length){Cn(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Cn(wt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Fr.forEach(i),dn.forEach(i),a=0;a<Bn.length;a++)c=Bn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Bn.length&&(a=Bn[0],a.blockedOn===null);)fu(a),a.blockedOn===null&&Bn.shift()}var lr=te.ReactCurrentBatchConfig,Ur=!0;function We(n,i,a,c){var d=Re,m=lr.transition;lr.transition=null;try{Re=1,Ko(n,i,a,c)}finally{Re=d,lr.transition=m}}function Pc(n,i,a,c){var d=Re,m=lr.transition;lr.transition=null;try{Re=4,Ko(n,i,a,c)}finally{Re=d,lr.transition=m}}function Ko(n,i,a,c){if(Ur){var d=Is(n,i,a,c);if(d===null)Uc(n,i,c,xi,a),du(n,c);else if(Cc(d,n,i,a,c))c.stopPropagation();else if(du(n,c),i&4&&-1<Rc.indexOf(n)){for(;d!==null;){var m=aa(d);if(m!==null&&uu(m),m=Is(n,i,a,c),m===null&&Uc(n,i,c,xi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Uc(n,i,c,null,a)}}var xi=null;function Is(n,i,a,c){if(xi=null,n=ds(c),n=bi(n),n!==null)if(i=In(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Pi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xi=n,null}function Go(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ru()){case ki:return 1;case Or:return 4;case hn:case qo:return 16;case iu:return 536870912;default:return 16}default:return 16}}var nn=null,Ss=null,Ht=null;function Qo(){if(Ht)return Ht;var n,i=Ss,a=i.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function As(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Yo(){return!1}function Tt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$n:Yo,this.isPropagationStopped=Yo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),i}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Tt(kn),qn=ne({},kn,{view:0,detail:0}),kc=Tt(qn),Cs,cr,zr,Li=ne({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zr&&(zr&&n.type==="mousemove"?(Cs=n.screenX-zr.screenX,cr=n.screenY-zr.screenY):cr=Cs=0,zr=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Ps=Tt(Li),Xo=ne({},Li,{dataTransfer:0}),mu=Tt(Xo),ks=ne({},qn,{relatedTarget:0}),Ns=Tt(ks),gu=ne({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=Tt(gu),yu=ne({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_u=Tt(yu),vu=ne({},kn,{data:0}),Jo=Tt(vu),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wu(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Eu[n])?!!i[n]:!1}function Hn(){return wu}var l=ne({},qn,{key:function(n){if(n.key){var i=Ds[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Tt(l),y=ne({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Tt(y),L=ne({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),U=Tt(L),X=ne({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=Tt(X),ct=ne({},Li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pe=Tt(ct),mt=[9,13,27,32],it=f&&"CompositionEvent"in window,fn=null;f&&"documentMode"in document&&(fn=document.documentMode);var rn=f&&"TextEvent"in window&&!fn,Mi=f&&(!it||fn&&8<fn&&11>=fn),Os=" ",Wf=!1;function Kf(n,i){switch(n){case"keyup":return mt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function oE(n,i){switch(n){case"compositionend":return Gf(i);case"keypress":return i.which!==32?null:(Wf=!0,Os);case"textInput":return n=i.data,n===Os&&Wf?null:n;default:return null}}function aE(n,i){if(Vs)return n==="compositionend"||!it&&Kf(n,i)?(n=Qo(),Ht=Ss=nn=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mi&&i.locale!=="ko"?null:i.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uE[n.type]:i==="textarea"}function Yf(n,i,a,c){zn(c),i=Ru(i,"onChange"),0<i.length&&(a=new Rs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Zo=null,ea=null;function lE(n){pp(n,0)}function Tu(n){var i=Fs(n);if(as(i))return n}function cE(n,i){if(n==="change")return i}var Xf=!1;if(f){var Nc;if(f){var Dc="oninput"in document;if(!Dc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Dc=typeof Jf.oninput=="function"}Nc=Dc}else Nc=!1;Xf=Nc&&(!document.documentMode||9<document.documentMode)}function Zf(){Zo&&(Zo.detachEvent("onpropertychange",ep),ea=Zo=null)}function ep(n){if(n.propertyName==="value"&&Tu(ea)){var i=[];Yf(i,ea,n,ds(n)),zo(lE,i)}}function hE(n,i,a){n==="focusin"?(Zf(),Zo=i,ea=a,Zo.attachEvent("onpropertychange",ep)):n==="focusout"&&Zf()}function dE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tu(ea)}function fE(n,i){if(n==="click")return Tu(i)}function pE(n,i){if(n==="input"||n==="change")return Tu(i)}function mE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Nn=typeof Object.is=="function"?Object.is:mE;function ta(n,i){if(Nn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Nn(n[d],i[d]))return!1}return!0}function tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function np(n,i){var a=tp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tp(a)}}function rp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?rp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ip(){for(var n=window,i=Nr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Nr(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function gE(n){var i=ip(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&rp(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=np(a,m);var v=np(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yE=f&&"documentMode"in document&&11>=document.documentMode,xs=null,Vc=null,na=null,xc=!1;function sp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||xs==null||xs!==Nr(c)||(c=xs,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=Ru(Vc,"onSelect"),0<c.length&&(i=new Rs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=xs)))}function Iu(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Iu("Animation","AnimationEnd"),animationiteration:Iu("Animation","AnimationIteration"),animationstart:Iu("Animation","AnimationStart"),transitionend:Iu("Transition","TransitionEnd")},Lc={},op={};f&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Su(n){if(Lc[n])return Lc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in op)return Lc[n]=i[a];return n}var ap=Su("animationend"),up=Su("animationiteration"),lp=Su("animationstart"),cp=Su("transitionend"),hp=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,i){hp.set(n,i),u(i,[n])}for(var Mc=0;Mc<dp.length;Mc++){var bc=dp[Mc],_E=bc.toLowerCase(),vE=bc[0].toUpperCase()+bc.slice(1);jr(_E,"on"+vE)}jr(ap,"onAnimationEnd"),jr(up,"onAnimationIteration"),jr(lp,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function fp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,eu(c,i,void 0,n),n.currentTarget=null}function pp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,F=I.currentTarget;if(I=I.listener,C!==m&&d.isPropagationStopped())break e;fp(d,I,F),m=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,F=I.currentTarget,I=I.listener,C!==m&&d.isPropagationStopped())break e;fp(d,I,F),m=C}}}if(Tn)throw n=jo,Tn=!1,jo=null,n}function $e(n,i){var a=i[Hc];a===void 0&&(a=i[Hc]=new Set);var c=n+"__bubble";a.has(c)||(mp(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),mp(a,n,c,i)}var Au="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Au]){n[Au]=!0,s.forEach(function(a){a!=="selectionchange"&&(EE.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Au]||(i[Au]=!0,Fc("selectionchange",!1,i))}}function mp(n,i,a,c){switch(Go(i)){case 1:var d=We;break;case 4:d=Pc;break;default:d=Ko}a=d.bind(null,i,a,n),d=void 0,!ms||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Uc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=bi(I),v===null)return;if(C=v.tag,C===5||C===6){c=m=v;continue e}I=I.parentNode}}c=c.return}zo(function(){var F=m,W=ds(a),K=[];e:{var q=hp.get(n);if(q!==void 0){var ee=Rs,se=n;switch(n){case"keypress":if(As(a)===0)break e;case"keydown":case"keyup":ee=p;break;case"focusin":se="focus",ee=Ns;break;case"focusout":se="blur",ee=Ns;break;case"beforeblur":case"afterblur":ee=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case ap:case up:case lp:ee=hr;break;case cp:ee=be;break;case"scroll":ee=kc;break;case"wheel":ee=Pe;break;case"copy":case"cut":case"paste":ee=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var ae=(i&4)!==0,tt=!ae&&n==="scroll",M=ae?q!==null?q+"Capture":null:q;ae=[];for(var N=F,b;N!==null;){b=N;var G=b.stateNode;if(b.tag===5&&G!==null&&(b=G,M!==null&&(G=et(N,M),G!=null&&ae.push(sa(N,G,b)))),tt)break;N=N.return}0<ae.length&&(q=new ee(q,se,null,a,W),K.push({event:q,listeners:ae}))}}if(!(i&7)){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Si&&(se=a.relatedTarget||a.fromElement)&&(bi(se)||se[dr]))break e;if((ee||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=F,se=se?bi(se):null,se!==null&&(tt=In(se),se!==tt||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=F),ee!==se)){if(ae=Ps,G="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=w,G="onPointerLeave",M="onPointerEnter",N="pointer"),tt=ee==null?q:Fs(ee),b=se==null?q:Fs(se),q=new ae(G,N+"leave",ee,a,W),q.target=tt,q.relatedTarget=b,G=null,bi(W)===F&&(ae=new ae(M,N+"enter",se,a,W),ae.target=b,ae.relatedTarget=tt,G=ae),tt=G,ee&&se)t:{for(ae=ee,M=se,N=0,b=ae;b;b=Ms(b))N++;for(b=0,G=M;G;G=Ms(G))b++;for(;0<N-b;)ae=Ms(ae),N--;for(;0<b-N;)M=Ms(M),b--;for(;N--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Ms(ae),M=Ms(M)}ae=null}else ae=null;ee!==null&&gp(K,q,ee,ae,!1),se!==null&&tt!==null&&gp(K,tt,se,ae,!0)}}e:{if(q=F?Fs(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ce=cE;else if(Qf(q))if(Xf)ce=pE;else{ce=dE;var ge=hE}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ce=fE);if(ce&&(ce=ce(n,F))){Yf(K,ce,a,W);break e}ge&&ge(n,q,F),n==="focusout"&&(ge=q._wrapperState)&&ge.controlled&&q.type==="number"&&ls(q,"number",q.value)}switch(ge=F?Fs(F):window,n){case"focusin":(Qf(ge)||ge.contentEditable==="true")&&(xs=ge,Vc=F,na=null);break;case"focusout":na=Vc=xs=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,sp(K,a,W);break;case"selectionchange":if(yE)break;case"keydown":case"keyup":sp(K,a,W)}var ye;if(it)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Vs?Kf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Mi&&a.locale!=="ko"&&(Vs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Vs&&(ye=Qo()):(nn=W,Ss="value"in nn?nn.value:nn.textContent,Vs=!0)),ge=Ru(F,ve),0<ge.length&&(ve=new Jo(ve,n,null,a,W),K.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Gf(a),ye!==null&&(ve.data=ye)))),(ye=rn?oE(n,a):aE(n,a))&&(F=Ru(F,"onBeforeInput"),0<F.length&&(W=new Jo("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:F}),W.data=ye))}pp(K,i)})}function sa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ru(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=et(n,a),m!=null&&c.unshift(sa(n,m,d)),m=et(n,i),m!=null&&c.push(sa(n,m,d))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,F=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&F!==null&&(I=F,d?(C=et(a,m),C!=null&&v.unshift(sa(a,C,I))):d||(C=et(a,m),C!=null&&v.push(sa(a,C,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var wE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function yp(n){return(typeof n=="string"?n:""+n).replace(wE,`
`).replace(TE,"")}function Cu(n,i,a){if(i=yp(i),yp(n)!==i&&a)throw Error(t(425))}function Pu(){}var zc=null,jc=null;function Bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,SE=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(n){return _p.resolve(null).then(n).catch(AE)}:$c;function AE(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(i)}function Br(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+bs,oa="__reactProps$"+bs,dr="__reactContainer$"+bs,Hc="__reactEvents$"+bs,RE="__reactListeners$"+bs,CE="__reactHandles$"+bs;function bi(n){var i=n[Wn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[dr]||a[Wn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=vp(n);n!==null;){if(a=n[Wn])return a;n=vp(n)}return i}n=a,a=n.parentNode}return null}function aa(n){return n=n[Wn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ku(n){return n[oa]||null}var Wc=[],Us=-1;function $r(n){return{current:n}}function qe(n){0>Us||(n.current=Wc[Us],Wc[Us]=null,Us--)}function Be(n,i){Us++,Wc[Us]=n.current,n.current=i}var qr={},Nt=$r(qr),Wt=$r(!1),Fi=qr;function zs(n,i){var a=n.type.contextTypes;if(!a)return qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Nu(){qe(Wt),qe(Nt)}function Ep(n,i,a){if(Nt.current!==qr)throw Error(t(168));Be(Nt,i),Be(Wt,a)}function wp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return ne({},a,c)}function Du(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,Fi=Nt.current,Be(Nt,n),Be(Wt,Wt.current),!0}function Tp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wp(n,i,Fi),c.__reactInternalMemoizedMergedChildContext=n,qe(Wt),qe(Nt),Be(Nt,n)):qe(Wt),Be(Wt,a)}var fr=null,Ou=!1,Kc=!1;function Ip(n){fr===null?fr=[n]:fr.push(n)}function PE(n){Ou=!0,Ip(n)}function Hr(){if(!Kc&&fr!==null){Kc=!0;var n=0,i=Re;try{var a=fr;for(Re=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Ou=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),vs(ki,Hr),d}finally{Re=i,Kc=!1}}return null}var js=[],Bs=0,Vu=null,xu=0,pn=[],mn=0,Ui=null,pr=1,mr="";function zi(n,i){js[Bs++]=xu,js[Bs++]=Vu,Vu=n,xu=i}function Sp(n,i,a){pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=Ui,Ui=n;var c=pr;n=mr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var m=32-zt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,pr=1<<32-zt(i)+d|a<<d|c,mr=m+n}else pr=1<<m|a<<d|c,mr=n}function Gc(n){n.return!==null&&(zi(n,1),Sp(n,1,0))}function Qc(n){for(;n===Vu;)Vu=js[--Bs],js[Bs]=null,xu=js[--Bs],js[Bs]=null;for(;n===Ui;)Ui=pn[--mn],pn[mn]=null,mr=pn[--mn],pn[mn]=null,pr=pn[--mn],pn[mn]=null}var sn=null,on=null,Ke=!1,Dn=null;function Ap(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Rp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Br(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ui!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Yc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Ke){var i=on;if(i){var a=i;if(!Rp(n,i)){if(Yc(n))throw Error(t(418));i=Br(a.nextSibling);var c=sn;i&&Rp(n,i)?Ap(c,a):(n.flags=n.flags&-4097|2,Ke=!1,sn=n)}}else{if(Yc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,sn=n}}}function Cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Lu(n){if(n!==sn)return!1;if(!Ke)return Cp(n),Ke=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bc(n.type,n.memoizedProps)),i&&(i=on)){if(Yc(n))throw Pp(),Error(t(418));for(;i;)Ap(n,i),i=Br(i.nextSibling)}if(Cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Br(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Br(n.stateNode.nextSibling):null;return!0}function Pp(){for(var n=on;n;)n=Br(n.nextSibling)}function $s(){on=sn=null,Ke=!1}function Jc(n){Dn===null?Dn=[n]:Dn.push(n)}var kE=te.ReactCurrentBatchConfig;function ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Mu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kp(n){var i=n._init;return i(n._payload)}function Np(n){function i(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=Zr(M,N),M.index=0,M.sibling=null,M}function m(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,G){return N===null||N.tag!==6?(N=$h(b,M.mode,G),N.return=M,N):(N=d(N,b),N.return=M,N)}function C(M,N,b,G){var ce=b.type;return ce===P?W(M,N,b.props.children,G,b.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===kt&&kp(ce)===N.type)?(G=d(N,b.props),G.ref=ua(M,N,b),G.return=M,G):(G=ol(b.type,b.key,b.props,null,M.mode,G),G.ref=ua(M,N,b),G.return=M,G)}function F(M,N,b,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=qh(b,M.mode,G),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function W(M,N,b,G,ce){return N===null||N.tag!==7?(N=Gi(b,M.mode,G,ce),N.return=M,N):(N=d(N,b),N.return=M,N)}function K(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=$h(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case me:return b=ol(N.type,N.key,N.props,null,M.mode,b),b.ref=ua(M,null,N),b.return=M,b;case oe:return N=qh(N,M.mode,b),N.return=M,N;case kt:var G=N._init;return K(M,G(N._payload),b)}if(rr(N)||fe(N))return N=Gi(N,M.mode,b,null),N.return=M,N;Mu(M,N)}return null}function q(M,N,b,G){var ce=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ce!==null?null:I(M,N,""+b,G);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case me:return b.key===ce?C(M,N,b,G):null;case oe:return b.key===ce?F(M,N,b,G):null;case kt:return ce=b._init,q(M,N,ce(b._payload),G)}if(rr(b)||fe(b))return ce!==null?null:W(M,N,b,G,null);Mu(M,b)}return null}function ee(M,N,b,G,ce){if(typeof G=="string"&&G!==""||typeof G=="number")return M=M.get(b)||null,I(N,M,""+G,ce);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case me:return M=M.get(G.key===null?b:G.key)||null,C(N,M,G,ce);case oe:return M=M.get(G.key===null?b:G.key)||null,F(N,M,G,ce);case kt:var ge=G._init;return ee(M,N,b,ge(G._payload),ce)}if(rr(G)||fe(G))return M=M.get(b)||null,W(N,M,G,ce,null);Mu(N,G)}return null}function se(M,N,b,G){for(var ce=null,ge=null,ye=N,ve=N=0,_t=null;ye!==null&&ve<b.length;ve++){ye.index>ve?(_t=ye,ye=null):_t=ye.sibling;var xe=q(M,ye,b[ve],G);if(xe===null){ye===null&&(ye=_t);break}n&&ye&&xe.alternate===null&&i(M,ye),N=m(xe,N,ve),ge===null?ce=xe:ge.sibling=xe,ge=xe,ye=_t}if(ve===b.length)return a(M,ye),Ke&&zi(M,ve),ce;if(ye===null){for(;ve<b.length;ve++)ye=K(M,b[ve],G),ye!==null&&(N=m(ye,N,ve),ge===null?ce=ye:ge.sibling=ye,ge=ye);return Ke&&zi(M,ve),ce}for(ye=c(M,ye);ve<b.length;ve++)_t=ee(ye,M,ve,b[ve],G),_t!==null&&(n&&_t.alternate!==null&&ye.delete(_t.key===null?ve:_t.key),N=m(_t,N,ve),ge===null?ce=_t:ge.sibling=_t,ge=_t);return n&&ye.forEach(function(ei){return i(M,ei)}),Ke&&zi(M,ve),ce}function ae(M,N,b,G){var ce=fe(b);if(typeof ce!="function")throw Error(t(150));if(b=ce.call(b),b==null)throw Error(t(151));for(var ge=ce=null,ye=N,ve=N=0,_t=null,xe=b.next();ye!==null&&!xe.done;ve++,xe=b.next()){ye.index>ve?(_t=ye,ye=null):_t=ye.sibling;var ei=q(M,ye,xe.value,G);if(ei===null){ye===null&&(ye=_t);break}n&&ye&&ei.alternate===null&&i(M,ye),N=m(ei,N,ve),ge===null?ce=ei:ge.sibling=ei,ge=ei,ye=_t}if(xe.done)return a(M,ye),Ke&&zi(M,ve),ce;if(ye===null){for(;!xe.done;ve++,xe=b.next())xe=K(M,xe.value,G),xe!==null&&(N=m(xe,N,ve),ge===null?ce=xe:ge.sibling=xe,ge=xe);return Ke&&zi(M,ve),ce}for(ye=c(M,ye);!xe.done;ve++,xe=b.next())xe=ee(ye,M,ve,xe.value,G),xe!==null&&(n&&xe.alternate!==null&&ye.delete(xe.key===null?ve:xe.key),N=m(xe,N,ve),ge===null?ce=xe:ge.sibling=xe,ge=xe);return n&&ye.forEach(function(uw){return i(M,uw)}),Ke&&zi(M,ve),ce}function tt(M,N,b,G){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case me:e:{for(var ce=b.key,ge=N;ge!==null;){if(ge.key===ce){if(ce=b.type,ce===P){if(ge.tag===7){a(M,ge.sibling),N=d(ge,b.props.children),N.return=M,M=N;break e}}else if(ge.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===kt&&kp(ce)===ge.type){a(M,ge.sibling),N=d(ge,b.props),N.ref=ua(M,ge,b),N.return=M,M=N;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}b.type===P?(N=Gi(b.props.children,M.mode,G,b.key),N.return=M,M=N):(G=ol(b.type,b.key,b.props,null,M.mode,G),G.ref=ua(M,N,b),G.return=M,M=G)}return v(M);case oe:e:{for(ge=b.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=qh(b,M.mode,G),N.return=M,M=N}return v(M);case kt:return ge=b._init,tt(M,N,ge(b._payload),G)}if(rr(b))return se(M,N,b,G);if(fe(b))return ae(M,N,b,G);Mu(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=$h(b,M.mode,G),N.return=M,M=N),v(M)):a(M,N)}return tt}var qs=Np(!0),Dp=Np(!1),bu=$r(null),Fu=null,Hs=null,Zc=null;function eh(){Zc=Hs=Fu=null}function th(n){var i=bu.current;qe(bu),n._currentValue=i}function nh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Fu=n,Zc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Gt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if(Fu===null)throw Error(t(308));Hs=n,Fu.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var ji=null;function rh(n){ji===null?ji=[n]:ji.push(n)}function Op(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,rh(i)):(a.next=d.next,d.next=a),i.interleaved=a,gr(n,c)}function gr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wr=!1;function ih(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Kr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,gr(n,a)}return d=c.interleaved,d===null?(i.next=i,rh(c)):(i.next=d.next,d.next=i),c.interleaved=i,gr(n,a)}function Uu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mr(n,a)}}function xp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zu(n,i,a,c){var d=n.updateQueue;Wr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,F=C.next;C.next=null,v===null?m=F:v.next=F,v=C;var W=n.alternate;W!==null&&(W=W.updateQueue,I=W.lastBaseUpdate,I!==v&&(I===null?W.firstBaseUpdate=F:I.next=F,W.lastBaseUpdate=C))}if(m!==null){var K=d.baseState;v=0,W=F=C=null,I=m;do{var q=I.lane,ee=I.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,ae=I;switch(q=i,ee=a,ae.tag){case 1:if(se=ae.payload,typeof se=="function"){K=se.call(ee,K,q);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ae.payload,q=typeof se=="function"?se.call(ee,K,q):se,q==null)break e;K=ne({},K,q);break e;case 2:Wr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ee={eventTime:ee,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},W===null?(F=W=ee,C=K):W=W.next=ee,v|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(C=K),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=W,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);qi|=v,n.lanes=v,n.memoizedState=K}}function Lp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Kn=$r(la),ca=$r(la),ha=$r(la);function Bi(n){if(n===la)throw Error(t(174));return n}function sh(n,i){switch(Be(ha,i),Be(ca,n),Be(Kn,la),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=lt(i,n)}qe(Kn),Be(Kn,i)}function Ks(){qe(Kn),qe(ca),qe(ha)}function Mp(n){Bi(ha.current);var i=Bi(Kn.current),a=lt(i,n.type);i!==a&&(Be(ca,n),Be(Kn,a))}function oh(n){ca.current===n&&(qe(Kn),qe(ca))}var Ge=$r(0);function ju(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ah=[];function uh(){for(var n=0;n<ah.length;n++)ah[n]._workInProgressVersionPrimary=null;ah.length=0}var Bu=te.ReactCurrentDispatcher,lh=te.ReactCurrentBatchConfig,$i=0,Qe=null,ht=null,gt=null,$u=!1,da=!1,fa=0,NE=0;function Dt(){throw Error(t(321))}function ch(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Nn(n[a],i[a]))return!1;return!0}function hh(n,i,a,c,d,m){if($i=m,Qe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bu.current=n===null||n.memoizedState===null?xE:LE,n=a(c,d),da){m=0;do{if(da=!1,fa=0,25<=m)throw Error(t(301));m+=1,gt=ht=null,i.updateQueue=null,Bu.current=ME,n=a(c,d)}while(da)}if(Bu.current=Wu,i=ht!==null&&ht.next!==null,$i=0,gt=ht=Qe=null,$u=!1,i)throw Error(t(300));return n}function dh(){var n=fa!==0;return fa=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Qe.memoizedState=gt=n:gt=gt.next=n,gt}function yn(){if(ht===null){var n=Qe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var i=gt===null?Qe.memoizedState:gt.next;if(i!==null)gt=i,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?Qe.memoizedState=gt=n:gt=gt.next=n}return gt}function pa(n,i){return typeof i=="function"?i(n):i}function fh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,C=null,F=m;do{var W=F.lane;if(($i&W)===W)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(I=C=K,v=c):C=C.next=K,Qe.lanes|=W,qi|=W}F=F.next}while(F!==null&&F!==m);C===null?v=c:C.next=I,Nn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Qe.lanes|=m,qi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ph(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Nn(m,i.memoizedState)||(Gt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function bp(){}function Fp(n,i){var a=Qe,c=yn(),d=i(),m=!Nn(c.memoizedState,d);if(m&&(c.memoizedState=d,Gt=!0),c=c.queue,mh(jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,ma(9,zp.bind(null,a,c,d,i),void 0,null),yt===null)throw Error(t(349));$i&30||Up(a,i,d)}return d}function Up(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qe.updateQueue,i===null?(i={lastEffect:null,stores:null},Qe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function zp(n,i,a,c){i.value=a,i.getSnapshot=c,Bp(i)&&$p(n)}function jp(n,i,a){return a(function(){Bp(i)&&$p(n)})}function Bp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Nn(n,a)}catch{return!0}}function $p(n){var i=gr(n,1);i!==null&&Ln(i,n,1,-1)}function qp(n){var i=Gn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},i.queue=n,n=n.dispatch=VE.bind(null,Qe,n),[i.memoizedState,n]}function ma(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qe.updateQueue,i===null?(i={lastEffect:null,stores:null},Qe.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hp(){return yn().memoizedState}function qu(n,i,a,c){var d=Gn();Qe.flags|=n,d.memoizedState=ma(1|i,a,void 0,c===void 0?null:c)}function Hu(n,i,a,c){var d=yn();c=c===void 0?null:c;var m=void 0;if(ht!==null){var v=ht.memoizedState;if(m=v.destroy,c!==null&&ch(c,v.deps)){d.memoizedState=ma(i,a,m,c);return}}Qe.flags|=n,d.memoizedState=ma(1|i,a,m,c)}function Wp(n,i){return qu(8390656,8,n,i)}function mh(n,i){return Hu(2048,8,n,i)}function Kp(n,i){return Hu(4,2,n,i)}function Gp(n,i){return Hu(4,4,n,i)}function Qp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yp(n,i,a){return a=a!=null?a.concat([n]):null,Hu(4,4,Qp.bind(null,i,n),a)}function gh(){}function Xp(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ch(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jp(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ch(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Zp(n,i,a){return $i&21?(Nn(a,i)||(a=Oi(),Qe.lanes|=a,qi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function DE(n,i){var a=Re;Re=a!==0&&4>a?a:4,n(!0);var c=lh.transition;lh.transition={};try{n(!1),i()}finally{Re=a,lh.transition=c}}function em(){return yn().memoizedState}function OE(n,i,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tm(n))nm(i,a);else if(a=Op(n,i,a,c),a!==null){var d=$t();Ln(a,n,c,d),rm(a,i,c)}}function VE(n,i,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tm(n))nm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,Nn(I,v)){var C=i.interleaved;C===null?(d.next=d,rh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Op(n,i,d,c),a!==null&&(d=$t(),Ln(a,n,c,d),rm(a,i,c))}}function tm(n){var i=n.alternate;return n===Qe||i!==null&&i===Qe}function nm(n,i){da=$u=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function rm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mr(n,a)}}var Wu={readContext:gn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},xE={readContext:gn,useCallback:function(n,i){return Gn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:Wp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qu(4194308,4,Qp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qu(4194308,4,n,i)},useInsertionEffect:function(n,i){return qu(4,2,n,i)},useMemo:function(n,i){var a=Gn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Gn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=OE.bind(null,Qe,n),[c.memoizedState,n]},useRef:function(n){var i=Gn();return n={current:n},i.memoizedState=n},useState:qp,useDebugValue:gh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=qp(!1),i=n[0];return n=DE.bind(null,n[1]),Gn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qe,d=Gn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),yt===null)throw Error(t(349));$i&30||Up(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Wp(jp.bind(null,c,m,n),[n]),c.flags|=2048,ma(9,zp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Gn(),i=yt.identifierPrefix;if(Ke){var a=mr,c=pr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=NE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},LE={readContext:gn,useCallback:Xp,useContext:gn,useEffect:mh,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Gp,useMemo:Jp,useReducer:fh,useRef:Hp,useState:function(){return fh(pa)},useDebugValue:gh,useDeferredValue:function(n){var i=yn();return Zp(i,ht.memoizedState,n)},useTransition:function(){var n=fh(pa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1},ME={readContext:gn,useCallback:Xp,useContext:gn,useEffect:mh,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Gp,useMemo:Jp,useReducer:ph,useRef:Hp,useState:function(){return ph(pa)},useDebugValue:gh,useDeferredValue:function(n){var i=yn();return ht===null?i.memoizedState=n:Zp(i,ht.memoizedState,n)},useTransition:function(){var n=ph(pa)[0],i=yn().memoizedState;return[n,i]},useMutableSource:bp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function yh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ku={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=Xr(n),m=yr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Kr(n,m,d),i!==null&&(Ln(i,n,d,c),Uu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=Xr(n),m=yr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Kr(n,m,d),i!==null&&(Ln(i,n,d,c),Uu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=Xr(n),d=yr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Kr(n,d,c),i!==null&&(Ln(i,n,c,a),Uu(i,n,c))}};function im(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!ta(a,c)||!ta(d,m):!0}function sm(n,i,a){var c=!1,d=qr,m=i.contextType;return typeof m=="object"&&m!==null?m=gn(m):(d=Kt(i)?Fi:Nt.current,c=i.contextTypes,m=(c=c!=null)?zs(n,d):qr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ku,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function om(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ku.enqueueReplaceState(i,i.state,null)}function _h(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ih(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=gn(m):(m=Kt(i)?Fi:Nt.current,d.context=zs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(yh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ku.enqueueReplaceState(d,d.state,null),zu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function vh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Eh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bE=typeof WeakMap=="function"?WeakMap:Map;function am(n,i,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Lh=c),Eh(n,i)},a}function um(n,i,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Eh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Eh(n,i),typeof c!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function lm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new bE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=XE.bind(null,n,i,a),i.then(n,n))}function cm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=yr(-1,1),i.tag=2,Kr(a,i,1))),a.lanes|=1),n)}var FE=te.ReactCurrentOwner,Gt=!1;function Bt(n,i,a,c){i.child=n===null?Dp(i,null,a,c):qs(i,n.child,a,c)}function dm(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=hh(n,i,a,c,m,d),a=dh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(Ke&&a&&Gc(i),i.flags|=1,Bt(n,i,c,d),i.child)}function fm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Bh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,pm(n,i,m,c,d)):(n=ol(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===i.ref)return _r(n,i,d)}return i.flags|=1,n=Zr(m,c),n.ref=i.ref,n.return=i,i.child=n}function pm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ta(m,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return i.lanes=n.lanes,_r(n,i,d)}return wh(n,i,a,c,d)}function mm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Ys,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Be(Ys,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Be(Ys,an),an|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Be(Ys,an),an|=c;return Bt(n,i,d,a),i.child}function gm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wh(n,i,a,c,d){var m=Kt(a)?Fi:Nt.current;return m=zs(i,m),Ws(i,d),a=hh(n,i,a,c,m,d),c=dh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,_r(n,i,d)):(Ke&&c&&Gc(i),i.flags|=1,Bt(n,i,a,d),i.child)}function ym(n,i,a,c,d){if(Kt(a)){var m=!0;Du(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Qu(n,i),sm(i,a,c),_h(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Kt(a)?Fi:Nt.current,F=zs(i,F));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==F)&&om(i,v,c,F),Wr=!1;var q=i.memoizedState;v.state=q,zu(i,c,v,d),C=i.memoizedState,I!==c||q!==C||Wt.current||Wr?(typeof W=="function"&&(yh(i,a,W,c),C=i.memoizedState),(I=Wr||im(i,a,I,c,q,C,F))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),v.props=c,v.state=C,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Vp(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:On(i.type,I),v.props=F,K=i.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=gn(C):(C=Kt(a)?Fi:Nt.current,C=zs(i,C));var ee=a.getDerivedStateFromProps;(W=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==K||q!==C)&&om(i,v,c,C),Wr=!1,q=i.memoizedState,v.state=q,zu(i,c,v,d);var se=i.memoizedState;I!==K||q!==se||Wt.current||Wr?(typeof ee=="function"&&(yh(i,a,ee,c),se=i.memoizedState),(F=Wr||im(i,a,F,c,q,se,C)||!1)?(W||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,C)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return Th(n,i,a,c,m,d)}function Th(n,i,a,c,d,m){gm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Tp(i,a,!1),_r(n,i,m);c=i.stateNode,FE.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=qs(i,n.child,null,m),i.child=qs(i,null,I,m)):Bt(n,i,I,m),i.memoizedState=c.state,d&&Tp(i,a,!0),i.child}function _m(n){var i=n.stateNode;i.pendingContext?Ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ep(n,i.context,!1),sh(n,i.containerInfo)}function vm(n,i,a,c,d){return $s(),Jc(d),i.flags|=256,Bt(n,i,a,c),i.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Sh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,i,a){var c=i.pendingProps,d=Ge.current,m=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Be(Ge,d&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=al(v,c,0,null),n=Gi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Sh(a),i.memoizedState=Ih,n):Ah(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return UE(n,i,v,c,I,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=Zr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Zr(I,m):(m=Gi(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Sh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Ih,c}return m=n.child,n=m.sibling,c=Zr(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ah(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Gu(n,i,a,c){return c!==null&&Jc(c),qs(i,n.child,null,a),n=Ah(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function UE(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=vh(Error(t(422))),Gu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),m=Gi(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&qs(i,n.child,null,v),i.child.memoizedState=Sh(v),i.memoizedState=Ih,m);if(!(i.mode&1))return Gu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=vh(m,c,void 0),Gu(n,i,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=yt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,gr(n,d),Ln(c,n,d,-1))}return jh(),c=vh(Error(t(421))),Gu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=JE.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,on=Br(d.nextSibling),sn=i,Ke=!0,Dn=null,n!==null&&(pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=Ui,pr=n.id,mr=n.overflow,Ui=i),i=Ah(i,c.children),i.flags|=4096,i)}function wm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nh(n.return,i,a)}function Rh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Tm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=Ge.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wm(n,a,i);else if(n.tag===19)wm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Ge,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ju(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Rh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ju(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Rh(i,!0,a,null,m);break;case"together":Rh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qu(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _r(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),qi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Zr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Zr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zE(n,i,a){switch(i.tag){case 3:_m(i),$s();break;case 5:Mp(i);break;case 1:Kt(i.type)&&Du(i);break;case 4:sh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Be(bu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Be(Ge,Ge.current&1),i.flags|=128,null):a&i.child.childLanes?Em(n,i,a):(Be(Ge,Ge.current&1),n=_r(n,i,a),n!==null?n.sibling:null);Be(Ge,Ge.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Tm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Be(Ge,Ge.current),c)break;return null;case 22:case 23:return i.lanes=0,mm(n,i,a)}return _r(n,i,a)}var Im,Ch,Sm,Am;Im=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ch=function(){},Sm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Bi(Kn.current);var m=null;switch(a){case"input":d=wi(n,d),c=wi(n,c),m=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),m=[];break;case"textarea":d=No(n,d),c=No(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pu)}Mo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var C=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==I&&(C!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(m||(m=[]),m.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(m=m||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&$e("scroll",n),m||I===C||(m=[])):(m=m||[]).push(F,C))}a&&(m=m||[]).push("style",a);var F=m;(i.updateQueue=F)&&(i.flags|=4)}},Am=function(n,i,a,c){a!==c&&(i.flags|=4)};function ga(n,i){if(!Ke)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function jE(n,i,a){var c=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Kt(i.type)&&Nu(),Ot(i),null;case 3:return c=i.stateNode,Ks(),qe(Wt),qe(Nt),uh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Lu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Dn!==null&&(Fh(Dn),Dn=null))),Ch(n,i),Ot(i),null;case 5:oh(i);var d=Bi(ha.current);if(a=i.type,n!==null&&i.stateNode!=null)Sm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=Bi(Kn.current),Lu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Wn]=i,c[oa]=m,n=(i.mode&1)!==0,a){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)$e(ra[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":us(c,m),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},$e("invalid",c);break;case"textarea":cs(c,m),$e("invalid",c)}Mo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Cu(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Cu(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&$e("scroll",c)}switch(a){case"input":nr(c),Za(c,m,!0);break;case"textarea":nr(c),Do(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Pu)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Wn]=i,n[oa]=c,Im(n,i,!1,!1),i.stateNode=n;e:{switch(v=bo(a,c),a){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)$e(ra[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":us(n,c),d=wi(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),$e("invalid",n);break;case"textarea":cs(n,c),d=No(n,c),$e("invalid",n);break;default:d=c}Mo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var C=I[m];m==="style"?xo(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Oo(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Dr(n,C):typeof C=="number"&&Dr(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&$e("scroll",n):C!=null&&Z(n,m,C,v))}switch(a){case"input":nr(n),Za(n,c,!1);break;case"textarea":nr(n),Do(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ir(n,!!c.multiple,m,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)Am(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Bi(ha.current),Bi(Kn.current),Lu(i)){if(c=i.stateNode,a=i.memoizedProps,c[Wn]=i,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Cu(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cu(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=i,i.stateNode=c}return Ot(i),null;case 13:if(qe(Ge),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&on!==null&&i.mode&1&&!(i.flags&128))Pp(),$s(),i.flags|=98560,m=!1;else if(m=Lu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Wn]=i}else $s(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ot(i),m=!1}else Dn!==null&&(Fh(Dn),Dn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Ge.current&1?dt===0&&(dt=3):jh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return Ks(),Ch(n,i),n===null&&ia(i.stateNode.containerInfo),Ot(i),null;case 10:return th(i.type._context),Ot(i),null;case 17:return Kt(i.type)&&Nu(),Ot(i),null;case 19:if(qe(Ge),m=i.memoizedState,m===null)return Ot(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)ga(m,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=ju(n),v!==null){for(i.flags|=128,ga(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Be(Ge,Ge.current&1|2),i.child}n=n.sibling}m.tail!==null&&je()>Xs&&(i.flags|=128,c=!0,ga(m,!1),i.lanes=4194304)}else{if(!c)if(n=ju(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ga(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ke)return Ot(i),null}else 2*je()-m.renderingStartTime>Xs&&a!==1073741824&&(i.flags|=128,c=!0,ga(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=je(),i.sibling=null,a=Ge.current,Be(Ge,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return zh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?an&1073741824&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function BE(n,i){switch(Qc(i),i.tag){case 1:return Kt(i.type)&&Nu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),qe(Wt),qe(Nt),uh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return oh(i),null;case 13:if(qe(Ge),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));$s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qe(Ge),null;case 4:return Ks(),null;case 10:return th(i.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Yu=!1,Vt=!1,$E=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,i,c)}else a.current=null}function Ph(n,i,a){try{a()}catch(c){Je(n,i,c)}}var Rm=!1;function qE(n,i){if(zc=Ur,n=ip(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,F=0,W=0,K=n,q=null;t:for(;;){for(var ee;K!==a||d!==0&&K.nodeType!==3||(I=v+d),K!==m||c!==0&&K.nodeType!==3||(C=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(ee=K.firstChild)!==null;)q=K,K=ee;for(;;){if(K===n)break t;if(q===a&&++F===d&&(I=v),q===m&&++W===c&&(C=v),(ee=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=ee}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},Ur=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ae=se.memoizedProps,tt=se.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?ae:On(i.type,ae),tt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Je(i,i.return,G)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=Rm,Rm=!1,se}function ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ph(i,a,m)}d=d.next}while(d!==c)}}function Xu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function kh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Cm(n){var i=n.alternate;i!==null&&(n.alternate=null,Cm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Wn],delete i[oa],delete i[Hc],delete i[RE],delete i[CE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pm(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Pu));else if(c!==4&&(n=n.child,n!==null))for(Nh(n,i,a),n=n.sibling;n!==null;)Nh(n,i,a),n=n.sibling}function Dh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Dh(n,i,a),n=n.sibling;n!==null;)Dh(n,i,a),n=n.sibling}var It=null,Vn=!1;function Gr(n,i,a){for(a=a.child;a!==null;)Nm(n,i,a),a=a.sibling}function Nm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ni,a)}catch{}switch(a.tag){case 5:Vt||Qs(a,i);case 6:var c=It,d=Vn;It=null,Gr(n,i,a),It=c,Vn=d,It!==null&&(Vn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Vn?(n=It,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Pn(n)):qc(It,a.stateNode));break;case 4:c=It,d=Vn,It=a.stateNode.containerInfo,Vn=!0,Gr(n,i,a),It=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&Ph(a,i,v),d=d.next}while(d!==c)}Gr(n,i,a);break;case 1:if(!Vt&&(Qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Je(a,i,I)}Gr(n,i,a);break;case 21:Gr(n,i,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Gr(n,i,a),Vt=c):Gr(n,i,a);break;default:Gr(n,i,a)}}function Dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new $E),i.forEach(function(c){var d=ZE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:It=I.stateNode,Vn=!1;break e;case 3:It=I.stateNode.containerInfo,Vn=!0;break e;case 4:It=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(It===null)throw Error(t(160));Nm(m,v,d),It=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Je(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Om(i,n),i=i.sibling}function Om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(i,n),Qn(n),c&4){try{ya(3,n,n.return),Xu(3,n)}catch(ae){Je(n,n.return,ae)}try{ya(5,n,n.return)}catch(ae){Je(n,n.return,ae)}}break;case 1:xn(i,n),Qn(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(xn(i,n),Qn(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var d=n.stateNode;try{Dr(d,"")}catch(ae){Je(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Po(d,m),bo(I,v);var F=bo(I,m);for(v=0;v<C.length;v+=2){var W=C[v],K=C[v+1];W==="style"?xo(d,K):W==="dangerouslySetInnerHTML"?Oo(d,K):W==="children"?Dr(d,K):Z(d,W,K,F)}switch(I){case"input":ko(d,m);break;case"textarea":hs(d,m);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ee=m.value;ee!=null?ir(d,!!m.multiple,ee,!1):q!==!!m.multiple&&(m.defaultValue!=null?ir(d,!!m.multiple,m.defaultValue,!0):ir(d,!!m.multiple,m.multiple?[]:"",!1))}d[oa]=m}catch(ae){Je(n,n.return,ae)}}break;case 6:if(xn(i,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ae){Je(n,n.return,ae)}}break;case 3:if(xn(i,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(i.containerInfo)}catch(ae){Je(n,n.return,ae)}break;case 4:xn(i,n),Qn(n);break;case 13:xn(i,n),Qn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xh=je())),c&4&&Dm(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(F=Vt)||W,xn(i,n),Vt=F):xn(i,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&n.mode&1)for(ie=n,W=n.child;W!==null;){for(K=ie=W;ie!==null;){switch(q=ie,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ya(4,q,q.return);break;case 1:Qs(q,q.return);var se=q.stateNode;if(typeof se.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(ae){Je(c,a,ae)}}break;case 5:Qs(q,q.return);break;case 22:if(q.memoizedState!==null){Lm(K);continue}}ee!==null?(ee.return=q,ie=ee):Lm(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=K.stateNode,C=K.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Vo("display",v))}catch(ae){Je(n,n.return,ae)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(ae){Je(n,n.return,ae)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:xn(i,n),Qn(n),c&4&&Dm(n);break;case 21:break;default:xn(i,n),Qn(n)}}function Qn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Dr(d,""),c.flags&=-33);var m=km(n);Dh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=km(n);Nh(n,I,v);break;default:throw Error(t(161))}}catch(C){Je(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function HE(n,i,a){ie=n,Vm(n)}function Vm(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Yu;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Vt;I=Yu;var F=Vt;if(Yu=v,(Vt=C)&&!F)for(ie=d;ie!==null;)v=ie,C=v.child,v.tag===22&&v.memoizedState!==null?Mm(d):C!==null?(C.return=v,ie=C):Mm(d);for(;m!==null;)ie=m,Vm(m),m=m.sibling;ie=d,Yu=I,Vt=F}xm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,ie=m):xm(n)}}function xm(n){for(;ie!==null;){var i=ie;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Vt||Xu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Lp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lp(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Pn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||i.flags&512&&kh(i)}catch(q){Je(i,i.return,q)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Lm(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Mm(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xu(4,i)}catch(C){Je(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){Je(i,d,C)}}var m=i.return;try{kh(i)}catch(C){Je(i,m,C)}break;case 5:var v=i.return;try{kh(i)}catch(C){Je(i,v,C)}}}catch(C){Je(i,i.return,C)}if(i===n){ie=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ie=I;break}ie=i.return}}var WE=Math.ceil,Ju=te.ReactCurrentDispatcher,Oh=te.ReactCurrentOwner,_n=te.ReactCurrentBatchConfig,Oe=0,yt=null,st=null,St=0,an=0,Ys=$r(0),dt=0,_a=null,qi=0,Zu=0,Vh=0,va=null,Qt=null,xh=0,Xs=1/0,vr=null,el=!1,Lh=null,Qr=null,tl=!1,Yr=null,nl=0,Ea=0,Mh=null,rl=-1,il=0;function $t(){return Oe&6?je():rl!==-1?rl:rl=je()}function Xr(n){return n.mode&1?Oe&2&&St!==0?St&-St:kE.transition!==null?(il===0&&(il=Oi()),il):(n=Re,n!==0||(n=window.event,n=n===void 0?16:Go(n.type)),n):1}function Ln(n,i,a,c){if(50<Ea)throw Ea=0,Mh=null,Error(t(185));Lr(n,a,c),(!(Oe&2)||n!==yt)&&(n===yt&&(!(Oe&2)&&(Zu|=a),dt===4&&Jr(n,St)),Yt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(Xs=je()+500,Ou&&Hr()))}function Yt(n,i){var a=n.callbackNode;ar(n,i);var c=Di(n,n===yt?St:0);if(c===0)a!==null&&$o(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&$o(a),i===1)n.tag===0?PE(Fm.bind(null,n)):Ip(Fm.bind(null,n)),SE(function(){!(Oe&6)&&Hr()}),a=null;else{switch(br(c)){case 1:a=ki;break;case 4:a=Or;break;case 16:a=hn;break;case 536870912:a=iu;break;default:a=hn}a=Wm(a,bm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function bm(n,i){if(rl=-1,il=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Di(n,n===yt?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=sl(n,c);else{i=c;var d=Oe;Oe|=2;var m=zm();(yt!==n||St!==i)&&(vr=null,Xs=je()+500,Wi(n,i));do try{QE();break}catch(I){Um(n,I)}while(!0);eh(),Ju.current=m,Oe=d,st!==null?i=0:(yt=null,St=0,i=dt)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(c=d,i=bh(n,d))),i===1)throw a=_a,Wi(n,0),Jr(n,c),Yt(n,je()),a;if(i===6)Jr(n,c);else{if(d=n.current.alternate,!(c&30)&&!KE(d)&&(i=sl(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=bh(n,m))),i===1))throw a=_a,Wi(n,0),Jr(n,c),Yt(n,je()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ki(n,Qt,vr);break;case 3:if(Jr(n,c),(c&130023424)===c&&(i=xh+500-je(),10<i)){if(Di(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=$c(Ki.bind(null,n,Qt,vr),i);break}Ki(n,Qt,vr);break;case 4:if(Jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-zt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*WE(c/1960))-c,10<c){n.timeoutHandle=$c(Ki.bind(null,n,Qt,vr),c);break}Ki(n,Qt,vr);break;case 5:Ki(n,Qt,vr);break;default:throw Error(t(329))}}}return Yt(n,je()),n.callbackNode===a?bm.bind(null,n):null}function bh(n,i){var a=va;return n.current.memoizedState.isDehydrated&&(Wi(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&Fh(i)),n}function Fh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function KE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Nn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Jr(n,i){for(i&=~Vh,i&=~Zu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-zt(i),c=1<<a;n[a]=-1,i&=~c}}function Fm(n){if(Oe&6)throw Error(t(327));Js();var i=Di(n,0);if(!(i&1))return Yt(n,je()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=bh(n,c))}if(a===1)throw a=_a,Wi(n,0),Jr(n,i),Yt(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ki(n,Qt,vr),Yt(n,je()),null}function Uh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(Xs=je()+500,Ou&&Hr())}}function Hi(n){Yr!==null&&Yr.tag===0&&!(Oe&6)&&Js();var i=Oe;Oe|=1;var a=_n.transition,c=Re;try{if(_n.transition=null,Re=1,n)return n()}finally{Re=c,_n.transition=a,Oe=i,!(Oe&6)&&Hr()}}function zh(){an=Ys.current,qe(Ys)}function Wi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,IE(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nu();break;case 3:Ks(),qe(Wt),qe(Nt),uh();break;case 5:oh(c);break;case 4:Ks();break;case 13:qe(Ge);break;case 19:qe(Ge);break;case 10:th(c.type._context);break;case 22:case 23:zh()}a=a.return}if(yt=n,st=n=Zr(n.current,null),St=an=i,dt=0,_a=null,Vh=Zu=qi=0,Qt=va=null,ji!==null){for(i=0;i<ji.length;i++)if(a=ji[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}ji=null}return n}function Um(n,i){do{var a=st;try{if(eh(),Bu.current=Wu,$u){for(var c=Qe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$u=!1}if($i=0,gt=ht=Qe=null,da=!1,fa=0,Oh.current=null,a===null||a.return===null){dt=1,_a=i,st=null;break}e:{var m=n,v=a.return,I=a,C=i;if(i=St,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,W=I,K=W.tag;if(!(W.mode&1)&&(K===0||K===11||K===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=cm(v);if(ee!==null){ee.flags&=-257,hm(ee,v,I,m,i),ee.mode&1&&lm(m,F,i),i=ee,C=F;var se=i.updateQueue;if(se===null){var ae=new Set;ae.add(C),i.updateQueue=ae}else se.add(C);break e}else{if(!(i&1)){lm(m,F,i),jh();break e}C=Error(t(426))}}else if(Ke&&I.mode&1){var tt=cm(v);if(tt!==null){!(tt.flags&65536)&&(tt.flags|=256),hm(tt,v,I,m,i),Jc(Gs(C,I));break e}}m=C=Gs(C,I),dt!==4&&(dt=2),va===null?va=[m]:va.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=am(m,C,i);xp(m,M);break e;case 1:I=C;var N=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Qr===null||!Qr.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var G=um(m,I,i);xp(m,G);break e}}m=m.return}while(m!==null)}Bm(a)}catch(ce){i=ce,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function zm(){var n=Ju.current;return Ju.current=Wu,n===null?Wu:n}function jh(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||!(qi&268435455)&&!(Zu&268435455)||Jr(yt,St)}function sl(n,i){var a=Oe;Oe|=2;var c=zm();(yt!==n||St!==i)&&(vr=null,Wi(n,i));do try{GE();break}catch(d){Um(n,d)}while(!0);if(eh(),Oe=a,Ju.current=c,st!==null)throw Error(t(261));return yt=null,St=0,dt}function GE(){for(;st!==null;)jm(st)}function QE(){for(;st!==null&&!nu();)jm(st)}function jm(n){var i=Hm(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?Bm(n):st=i,Oh.current=null}function Bm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=BE(a,i),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=jE(a,i,an),a!==null){st=a;return}if(i=i.sibling,i!==null){st=i;return}st=i=n}while(i!==null);dt===0&&(dt=5)}function Ki(n,i,a){var c=Re,d=_n.transition;try{_n.transition=null,Re=1,YE(n,i,a,c)}finally{_n.transition=d,Re=c}return null}function YE(n,i,a,c){do Js();while(Yr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ue(n,m),n===yt&&(st=yt=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||tl||(tl=!0,Wm(hn,function(){return Js(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=_n.transition,_n.transition=null;var v=Re;Re=1;var I=Oe;Oe|=4,Oh.current=null,qE(n,a),Om(a,n),gE(jc),Ur=!!zc,jc=zc=null,n.current=a,HE(a),Sc(),Oe=I,Re=v,_n.transition=m}else n.current=a;if(tl&&(tl=!1,Yr=n,nl=d),m=n.pendingLanes,m===0&&(Qr=null),su(a.stateNode),Yt(n,je()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=Lh,Lh=null,n;return nl&1&&n.tag!==0&&Js(),m=n.pendingLanes,m&1?n===Mh?Ea++:(Ea=0,Mh=n):Ea=0,Hr(),null}function Js(){if(Yr!==null){var n=br(nl),i=_n.transition,a=Re;try{if(_n.transition=null,Re=16>n?16:n,Yr===null)var c=!1;else{if(n=Yr,Yr=null,nl=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var m=ie,v=m.child;if(ie.flags&16){var I=m.deletions;if(I!==null){for(var C=0;C<I.length;C++){var F=I[C];for(ie=F;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:ya(8,W,m)}var K=W.child;if(K!==null)K.return=W,ie=K;else for(;ie!==null;){W=ie;var q=W.sibling,ee=W.return;if(Cm(W),W===F){ie=null;break}if(q!==null){q.return=ee,ie=q;break}ie=ee}}}var se=m.alternate;if(se!==null){var ae=se.child;if(ae!==null){se.child=null;do{var tt=ae.sibling;ae.sibling=null,ae=tt}while(ae!==null)}}ie=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,ie=v;else e:for(;ie!==null;){if(m=ie,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ya(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,ie=M;break e}ie=m.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,ie=b;else e:for(v=N;ie!==null;){if(I=ie,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Xu(9,I)}}catch(ce){Je(I,I.return,ce)}if(I===v){ie=null;break e}var G=I.sibling;if(G!==null){G.return=I.return,ie=G;break e}ie=I.return}}if(Oe=d,Hr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ni,n)}catch{}c=!0}return c}finally{Re=a,_n.transition=i}}return!1}function $m(n,i,a){i=Gs(a,i),i=am(n,i,1),n=Kr(n,i,1),i=$t(),n!==null&&(Lr(n,1,i),Yt(n,i))}function Je(n,i,a){if(n.tag===3)$m(n,n,a);else for(;i!==null;){if(i.tag===3){$m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qr===null||!Qr.has(c))){n=Gs(a,n),n=um(i,n,1),i=Kr(i,n,1),n=$t(),i!==null&&(Lr(i,1,n),Yt(i,n));break}}i=i.return}}function XE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,yt===n&&(St&a)===a&&(dt===4||dt===3&&(St&130023424)===St&&500>je()-xh?Wi(n,0):Vh|=a),Yt(n,i)}function qm(n,i){i===0&&(n.mode&1?(i=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):i=1);var a=$t();n=gr(n,i),n!==null&&(Lr(n,i,a),Yt(n,a))}function JE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),qm(n,a)}function ZE(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),qm(n,a)}var Hm;Hm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Gt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Gt=!1,zE(n,i,a);Gt=!!(n.flags&131072)}else Gt=!1,Ke&&i.flags&1048576&&Sp(i,xu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qu(n,i),n=i.pendingProps;var d=zs(i,Nt.current);Ws(i,a),d=hh(null,i,c,n,d,a);var m=dh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kt(c)?(m=!0,Du(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ih(i),d.updater=Ku,i.stateNode=d,d._reactInternals=i,_h(i,c,n,a),i=Th(null,i,c,!0,m,a)):(i.tag=0,Ke&&m&&Gc(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=tw(c),n=On(c,n),d){case 0:i=wh(null,i,c,n,a);break e;case 1:i=ym(null,i,c,n,a);break e;case 11:i=dm(null,i,c,n,a);break e;case 14:i=fm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),wh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),ym(n,i,c,d,a);case 3:e:{if(_m(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Vp(n,i),zu(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Gs(Error(t(423)),i),i=vm(n,i,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),i),i=vm(n,i,c,a,d);break e}else for(on=Br(i.stateNode.containerInfo.firstChild),sn=i,Ke=!0,Dn=null,a=Dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===d){i=_r(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return Mp(i),n===null&&Xc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Bc(c,d)?v=null:m!==null&&Bc(c,m)&&(i.flags|=32),gm(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return Em(n,i,a);case 4:return sh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),dm(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,Be(bu,c._currentValue),c._currentValue=v,m!==null)if(Nn(m.value,v)){if(m.children===d.children&&!Wt.current){i=_r(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=yr(-1,a&-a),C.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?C.next=C:(C.next=W.next,W.next=C),F.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),nh(m.return,a,i),I.lanes|=a;break}C=C.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),nh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=gn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),fm(n,i,c,d,a);case 15:return pm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Qu(n,i),i.tag=1,Kt(c)?(n=!0,Du(i)):n=!1,Ws(i,a),sm(i,c,d),_h(i,c,d,a),Th(null,i,c,!0,n,a);case 19:return Tm(n,i,a);case 22:return mm(n,i,a)}throw Error(t(156,i.tag))};function Wm(n,i){return vs(n,i)}function ew(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new ew(n,i,a,c)}function Bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tw(n){if(typeof n=="function")return Bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Pt)return 14}return 2}function Zr(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Bh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return Gi(a.children,d,m,i);case T:v=8,d|=8;break;case S:return n=vn(12,a,i,d|2),n.elementType=S,n.lanes=m,n;case A:return n=vn(13,a,i,d),n.elementType=A,n.lanes=m,n;case Ze:return n=vn(19,a,i,d),n.elementType=Ze,n.lanes=m,n;case Fe:return al(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case D:v=9;break e;case x:v=11;break e;case Pt:v=14;break e;case kt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Gi(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function $h(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function qh(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function nw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hh(n,i,a,c,d,m,v,I,C){return n=new nw(n,i,a,I,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=vn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(m),n}function rw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Km(n){if(!n)return qr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return wp(n,a,i)}return i}function Gm(n,i,a,c,d,m,v,I,C){return n=Hh(a,c,!0,n,d,m,v,I,C),n.context=Km(null),a=n.current,c=$t(),d=Xr(a),m=yr(c,d),m.callback=i??null,Kr(a,m,d),n.current.lanes=d,Lr(n,d,c),Yt(n,c),n}function ul(n,i,a,c){var d=i.current,m=$t(),v=Xr(d);return a=Km(a),i.context===null?i.context=a:i.pendingContext=a,i=yr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Kr(d,i,v),n!==null&&(Ln(n,d,v,m),Uu(n,d,v)),v}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Qm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Wh(n,i){Qm(n,i),(n=n.alternate)&&Qm(n,i)}function iw(){return null}var Ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kh(n){this._internalRoot=n}cl.prototype.render=Kh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ul(n,i,null,null)},cl.prototype.unmount=Kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hi(function(){ul(null,n,null,null)}),i[dr]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=cu();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Bn.length&&i!==0&&i<Bn[a].priority;a++);Bn.splice(a,0,n),a===0&&fu(n)}};function Gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function sw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=ll(v);m.call(F)}}var v=Gm(i,c,n,0,null,!1,!1,"",Xm);return n._reactRootContainer=v,n[dr]=v.current,ia(n.nodeType===8?n.parentNode:n),Hi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=ll(C);I.call(F)}}var C=Hh(n,0,!1,null,null,!1,!1,"",Xm);return n._reactRootContainer=C,n[dr]=C.current,ia(n.nodeType===8?n.parentNode:n),Hi(function(){ul(i,C,a,c)}),C}function dl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var C=ll(v);I.call(C)}}ul(i,v,n,d)}else v=sw(a,i,n,d,c);return ll(v)}uu=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Vr(i.pendingLanes);a!==0&&(Mr(i,a|1),Yt(i,je()),!(Oe&6)&&(Xs=je()+500,Hr()))}break;case 13:Hi(function(){var c=gr(n,1);if(c!==null){var d=$t();Ln(c,n,1,d)}}),Wh(n,1)}},Ts=function(n){if(n.tag===13){var i=gr(n,134217728);if(i!==null){var a=$t();Ln(i,n,134217728,a)}Wh(n,134217728)}},lu=function(n){if(n.tag===13){var i=Xr(n),a=gr(n,i);if(a!==null){var c=$t();Ln(a,n,i,c)}Wh(n,i)}},cu=function(){return Re},hu=function(n,i){var a=Re;try{return Re=n,i()}finally{Re=a}},fs=function(n,i,a){switch(i){case"input":if(ko(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ku(c);if(!d)throw Error(t(90));as(c),ko(c,d)}}}break;case"textarea":hs(n,a);break;case"select":i=a.value,i!=null&&ir(n,!!a.multiple,i,!1)}},Ai=Uh,Uo=Hi;var ow={usingClientEntryPoint:!1,Events:[aa,Fs,ku,zn,Fo,Uh]},wa={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aw={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Ni=fl.inject(aw),en=fl}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ow,Xt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(i))throw Error(t(200));return rw(n,i,null,a)},Xt.createRoot=function(n,i){if(!Gh(n))throw Error(t(299));var a=!1,c="",d=Ym;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hh(n,1,!1,null,null,a,!1,c,d),n[dr]=i.current,ia(n.nodeType===8?n.parentNode:n),new Kh(i)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(i),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Hi(n)},Xt.hydrate=function(n,i,a){if(!hl(i))throw Error(t(200));return dl(null,n,i,!0,a)},Xt.hydrateRoot=function(n,i,a){if(!Gh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Ym;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Gm(i,null,n,1,a??null,d,!1,m,v),n[dr]=i.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new cl(i)},Xt.render=function(n,i,a){if(!hl(i))throw Error(t(200));return dl(null,n,i,!1,a)},Xt.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Uh,Xt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!hl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var sg;function _w(){if(sg)return Jh.exports;sg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Jh.exports=yw(),Jh.exports}var og;function vw(){if(og)return pl;og=1;var r=_w();return pl.createRoot=r.createRoot,pl.hydrateRoot=r.hydrateRoot,pl}var Ew=vw(),td={exports:{}},nd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function ww(){if(ag)return nd;ag=1;var r=Zl();function e(g,_){return g===_&&(g!==0||1/g===1/_)||g!==g&&_!==_}var t=typeof Object.is=="function"?Object.is:e,s=r.useSyncExternalStore,o=r.useRef,u=r.useEffect,h=r.useMemo,f=r.useDebugValue;return nd.useSyncExternalStoreWithSelector=function(g,_,E,R,O){var z=o(null);if(z.current===null){var H={hasValue:!1,value:null};z.current=H}else H=z.current;z=h(function(){function j(me){if(!he){if(he=!0,le=me,me=R(me),O!==void 0&&H.hasValue){var oe=H.value;if(O(oe,me))return Z=oe}return Z=me}if(oe=Z,t(le,me))return oe;var P=R(me);return O!==void 0&&O(oe,P)?(le=me,oe):(le=me,Z=P)}var he=!1,le,Z,te=E===void 0?null:E;return[function(){return j(_())},te===null?void 0:function(){return j(te())}]},[_,E,R,O]);var Y=s(g,z[0],z[1]);return u(function(){H.hasValue=!0,H.value=Y},[Y]),f(Y),Y},nd}var ug;function Tw(){return ug||(ug=1,td.exports=ww()),td.exports}var Iw=Tw();function Sw(r){r()}function Aw(){let r=null,e=null;return{clear(){r=null,e=null},notify(){Sw(()=>{let t=r;for(;t;)t.callback(),t=t.next})},get(){const t=[];let s=r;for(;s;)t.push(s),s=s.next;return t},subscribe(t){let s=!0;const o=e={callback:t,next:null,prev:e};return o.prev?o.prev.next=o:r=o,function(){!s||r===null||(s=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:r=o.next)}}}}var lg={notify(){},get:()=>[]};function Rw(r,e){let t,s=lg,o=0,u=!1;function h(Y){E();const j=s.subscribe(Y);let he=!1;return()=>{he||(he=!0,j(),R())}}function f(){s.notify()}function g(){H.onStateChange&&H.onStateChange()}function _(){return u}function E(){o++,t||(t=r.subscribe(g),s=Aw())}function R(){o--,t&&o===0&&(t(),t=void 0,s.clear(),s=lg)}function O(){u||(u=!0,E())}function z(){u&&(u=!1,R())}const H={addNestedSub:h,notifyNestedSubs:f,handleChangeWrapper:g,isSubscribed:_,trySubscribe:O,tryUnsubscribe:z,getListeners:()=>s};return H}var Cw=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pw=Cw(),kw=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Nw=kw(),Dw=()=>Pw||Nw?Ft.useLayoutEffect:Ft.useEffect,Ow=Dw(),rd=Symbol.for("react-redux-context"),id=typeof globalThis<"u"?globalThis:{};function Vw(){if(!Ft.createContext)return{};const r=id[rd]??(id[rd]=new Map);let e=r.get(Ft.createContext);return e||(e=Ft.createContext(null),r.set(Ft.createContext,e)),e}var pi=Vw();function xw(r){const{children:e,context:t,serverState:s,store:o}=r,u=Ft.useMemo(()=>{const g=Rw(o);return{store:o,subscription:g,getServerState:s?()=>s:void 0}},[o,s]),h=Ft.useMemo(()=>o.getState(),[o]);Ow(()=>{const{subscription:g}=u;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),h!==o.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[u,h]);const f=t||pi;return Ft.createElement(f.Provider,{value:u},e)}var Lw=xw;function ef(r=pi){return function(){return Ft.useContext(r)}}var zy=ef();function jy(r=pi){const e=r===pi?zy:ef(r),t=()=>{const{store:s}=e();return s};return Object.assign(t,{withTypes:()=>t}),t}var Mw=jy();function bw(r=pi){const e=r===pi?Mw:jy(r),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var By=bw(),Fw=(r,e)=>r===e;function Uw(r=pi){const e=r===pi?zy:ef(r),t=(s,o={})=>{const{equalityFn:u=Fw}=typeof o=="function"?{equalityFn:o}:o,h=e(),{store:f,subscription:g,getServerState:_}=h;Ft.useRef(!0);const E=Ft.useCallback({[s.name](O){return s(O)}}[s.name],[s]),R=Iw.useSyncExternalStoreWithSelector(g.addNestedSub,f.getState,_||f.getState,E,u);return Ft.useDebugValue(R),R};return Object.assign(t,{withTypes:()=>t}),t}var wd=Uw();const zw=({children:r})=>Ye.jsx(Ye.Fragment,{children:r});function At(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var jw=typeof Symbol=="function"&&Symbol.observable||"@@observable",cg=jw,sd=()=>Math.random().toString(36).substring(7).split("").join("."),Bw={INIT:`@@redux/INIT${sd()}`,REPLACE:`@@redux/REPLACE${sd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${sd()}`},Vl=Bw;function tf(r){if(typeof r!="object"||r===null)return!1;let e=r;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e||Object.getPrototypeOf(r)===null}function $y(r,e,t){if(typeof r!="function")throw new Error(At(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(At(1));return t($y)(r,e)}let s=r,o=e,u=new Map,h=u,f=0,g=!1;function _(){h===u&&(h=new Map,u.forEach((j,he)=>{h.set(he,j)}))}function E(){if(g)throw new Error(At(3));return o}function R(j){if(typeof j!="function")throw new Error(At(4));if(g)throw new Error(At(5));let he=!0;_();const le=f++;return h.set(le,j),function(){if(he){if(g)throw new Error(At(6));he=!1,_(),h.delete(le),u=null}}}function O(j){if(!tf(j))throw new Error(At(7));if(typeof j.type>"u")throw new Error(At(8));if(typeof j.type!="string")throw new Error(At(17));if(g)throw new Error(At(9));try{g=!0,o=s(o,j)}finally{g=!1}return(u=h).forEach(le=>{le()}),j}function z(j){if(typeof j!="function")throw new Error(At(10));s=j,O({type:Vl.REPLACE})}function H(){const j=R;return{subscribe(he){if(typeof he!="object"||he===null)throw new Error(At(11));function le(){const te=he;te.next&&te.next(E())}return le(),{unsubscribe:j(le)}},[cg](){return this}}}return O({type:Vl.INIT}),{dispatch:O,subscribe:R,getState:E,replaceReducer:z,[cg]:H}}function $w(r){Object.keys(r).forEach(e=>{const t=r[e];if(typeof t(void 0,{type:Vl.INIT})>"u")throw new Error(At(12));if(typeof t(void 0,{type:Vl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function qw(r){const e=Object.keys(r),t={};for(let u=0;u<e.length;u++){const h=e[u];typeof r[h]=="function"&&(t[h]=r[h])}const s=Object.keys(t);let o;try{$w(t)}catch(u){o=u}return function(h={},f){if(o)throw o;let g=!1;const _={};for(let E=0;E<s.length;E++){const R=s[E],O=t[R],z=h[R],H=O(z,f);if(typeof H>"u")throw f&&f.type,new Error(At(14));_[R]=H,g=g||H!==z}return g=g||s.length!==Object.keys(h).length,g?_:h}}function xl(...r){return r.length===0?e=>e:r.length===1?r[0]:r.reduce((e,t)=>(...s)=>e(t(...s)))}function Hw(...r){return e=>(t,s)=>{const o=e(t,s);let u=()=>{throw new Error(At(15))};const h={getState:o.getState,dispatch:(g,..._)=>u(g,..._)},f=r.map(g=>g(h));return u=xl(...f)(o.dispatch),{...o,dispatch:u}}}function Ww(r){return tf(r)&&"type"in r&&typeof r.type=="string"}var qy=Symbol.for("immer-nothing"),hg=Symbol.for("immer-draftable"),un=Symbol.for("immer-state");function Mn(r,...e){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var lo=Object.getPrototypeOf;function es(r){return!!r&&!!r[un]}function Ar(r){var e;return r?Hy(r)||Array.isArray(r)||!!r[hg]||!!((e=r.constructor)!=null&&e[hg])||tc(r)||nc(r):!1}var Kw=Object.prototype.constructor.toString();function Hy(r){if(!r||typeof r!="object")return!1;const e=lo(r);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Kw}function Ll(r,e){ec(r)===0?Reflect.ownKeys(r).forEach(t=>{e(t,r[t],r)}):r.forEach((t,s)=>e(s,t,r))}function ec(r){const e=r[un];return e?e.type_:Array.isArray(r)?1:tc(r)?2:nc(r)?3:0}function Td(r,e){return ec(r)===2?r.has(e):Object.prototype.hasOwnProperty.call(r,e)}function Wy(r,e,t){const s=ec(r);s===2?r.set(e,t):s===3?r.add(t):r[e]=t}function Gw(r,e){return r===e?r!==0||1/r===1/e:r!==r&&e!==e}function tc(r){return r instanceof Map}function nc(r){return r instanceof Set}function Qi(r){return r.copy_||r.base_}function Id(r,e){if(tc(r))return new Map(r);if(nc(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const t=Hy(r);if(e===!0||e==="class_only"&&!t){const s=Object.getOwnPropertyDescriptors(r);delete s[un];let o=Reflect.ownKeys(s);for(let u=0;u<o.length;u++){const h=o[u],f=s[h];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(s[h]={configurable:!0,writable:!0,enumerable:f.enumerable,value:r[h]})}return Object.create(lo(r),s)}else{const s=lo(r);if(s!==null&&t)return{...r};const o=Object.create(s);return Object.assign(o,r)}}function nf(r,e=!1){return rc(r)||es(r)||!Ar(r)||(ec(r)>1&&(r.set=r.add=r.clear=r.delete=Qw),Object.freeze(r),e&&Object.entries(r).forEach(([t,s])=>nf(s,!0))),r}function Qw(){Mn(2)}function rc(r){return Object.isFrozen(r)}var Yw={};function ts(r){const e=Yw[r];return e||Mn(0,r),e}var Ma;function Ky(){return Ma}function Xw(r,e){return{drafts_:[],parent_:r,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function dg(r,e){e&&(ts("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=e)}function Sd(r){Ad(r),r.drafts_.forEach(Jw),r.drafts_=null}function Ad(r){r===Ma&&(Ma=r.parent_)}function fg(r){return Ma=Xw(Ma,r)}function Jw(r){const e=r[un];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function pg(r,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return r!==void 0&&r!==t?(t[un].modified_&&(Sd(e),Mn(4)),Ar(r)&&(r=Ml(e,r),e.parent_||bl(e,r)),e.patches_&&ts("Patches").generateReplacementPatches_(t[un].base_,r,e.patches_,e.inversePatches_)):r=Ml(e,t,[]),Sd(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),r!==qy?r:void 0}function Ml(r,e,t){if(rc(e))return e;const s=e[un];if(!s)return Ll(e,(o,u)=>mg(r,s,e,o,u,t)),e;if(s.scope_!==r)return e;if(!s.modified_)return bl(r,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const o=s.copy_;let u=o,h=!1;s.type_===3&&(u=new Set(o),o.clear(),h=!0),Ll(u,(f,g)=>mg(r,s,o,f,g,t,h)),bl(r,o,!1),t&&r.patches_&&ts("Patches").generatePatches_(s,t,r.patches_,r.inversePatches_)}return s.copy_}function mg(r,e,t,s,o,u,h){if(es(o)){const f=u&&e&&e.type_!==3&&!Td(e.assigned_,s)?u.concat(s):void 0,g=Ml(r,o,f);if(Wy(t,s,g),es(g))r.canAutoFreeze_=!1;else return}else h&&t.add(o);if(Ar(o)&&!rc(o)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;Ml(r,o),(!e||!e.scope_.parent_)&&typeof s!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,s)&&bl(r,o)}}function bl(r,e,t=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&nf(e,t)}function Zw(r,e){const t=Array.isArray(r),s={type_:t?1:0,scope_:e?e.scope_:Ky(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=s,u=rf;t&&(o=[s],u=ba);const{revoke:h,proxy:f}=Proxy.revocable(o,u);return s.draft_=f,s.revoke_=h,f}var rf={get(r,e){if(e===un)return r;const t=Qi(r);if(!Td(t,e))return eT(r,t,e);const s=t[e];return r.finalized_||!Ar(s)?s:s===od(r.base_,e)?(ad(r),r.copy_[e]=Cd(s,r)):s},has(r,e){return e in Qi(r)},ownKeys(r){return Reflect.ownKeys(Qi(r))},set(r,e,t){const s=Gy(Qi(r),e);if(s!=null&&s.set)return s.set.call(r.draft_,t),!0;if(!r.modified_){const o=od(Qi(r),e),u=o==null?void 0:o[un];if(u&&u.base_===t)return r.copy_[e]=t,r.assigned_[e]=!1,!0;if(Gw(t,o)&&(t!==void 0||Td(r.base_,e)))return!0;ad(r),Rd(r)}return r.copy_[e]===t&&(t!==void 0||e in r.copy_)||Number.isNaN(t)&&Number.isNaN(r.copy_[e])||(r.copy_[e]=t,r.assigned_[e]=!0),!0},deleteProperty(r,e){return od(r.base_,e)!==void 0||e in r.base_?(r.assigned_[e]=!1,ad(r),Rd(r)):delete r.assigned_[e],r.copy_&&delete r.copy_[e],!0},getOwnPropertyDescriptor(r,e){const t=Qi(r),s=Reflect.getOwnPropertyDescriptor(t,e);return s&&{writable:!0,configurable:r.type_!==1||e!=="length",enumerable:s.enumerable,value:t[e]}},defineProperty(){Mn(11)},getPrototypeOf(r){return lo(r.base_)},setPrototypeOf(){Mn(12)}},ba={};Ll(rf,(r,e)=>{ba[r]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ba.deleteProperty=function(r,e){return ba.set.call(this,r,e,void 0)};ba.set=function(r,e,t){return rf.set.call(this,r[0],e,t,r[0])};function od(r,e){const t=r[un];return(t?Qi(t):r)[e]}function eT(r,e,t){var o;const s=Gy(e,t);return s?"value"in s?s.value:(o=s.get)==null?void 0:o.call(r.draft_):void 0}function Gy(r,e){if(!(e in r))return;let t=lo(r);for(;t;){const s=Object.getOwnPropertyDescriptor(t,e);if(s)return s;t=lo(t)}}function Rd(r){r.modified_||(r.modified_=!0,r.parent_&&Rd(r.parent_))}function ad(r){r.copy_||(r.copy_=Id(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var tT=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,s)=>{if(typeof e=="function"&&typeof t!="function"){const u=t;t=e;const h=this;return function(g=u,..._){return h.produce(g,E=>t.call(this,E,..._))}}typeof t!="function"&&Mn(6),s!==void 0&&typeof s!="function"&&Mn(7);let o;if(Ar(e)){const u=fg(this),h=Cd(e,void 0);let f=!0;try{o=t(h),f=!1}finally{f?Sd(u):Ad(u)}return dg(u,s),pg(o,u)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===qy&&(o=void 0),this.autoFreeze_&&nf(o,!0),s){const u=[],h=[];ts("Patches").generateReplacementPatches_(e,o,u,h),s(u,h)}return o}else Mn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(h,...f)=>this.produceWithPatches(h,g=>e(g,...f));let s,o;return[this.produce(e,t,(h,f)=>{s=h,o=f}),s,o]},typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof(r==null?void 0:r.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){Ar(r)||Mn(8),es(r)&&(r=nT(r));const e=fg(this),t=Cd(r,void 0);return t[un].isManual_=!0,Ad(e),t}finishDraft(r,e){const t=r&&r[un];(!t||!t.isManual_)&&Mn(9);const{scope_:s}=t;return dg(s,e),pg(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}t>-1&&(e=e.slice(t+1));const s=ts("Patches").applyPatches_;return es(r)?s(r,e):this.produce(r,o=>s(o,e))}};function Cd(r,e){const t=tc(r)?ts("MapSet").proxyMap_(r,e):nc(r)?ts("MapSet").proxySet_(r,e):Zw(r,e);return(e?e.scope_:Ky()).drafts_.push(t),t}function nT(r){return es(r)||Mn(10,r),Qy(r)}function Qy(r){if(!Ar(r)||rc(r))return r;const e=r[un];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=Id(r,e.scope_.immer_.useStrictShallowCopy_)}else t=Id(r,!0);return Ll(t,(s,o)=>{Wy(t,s,Qy(o))}),e&&(e.finalized_=!1),t}var ln=new tT,Yy=ln.produce;ln.produceWithPatches.bind(ln);ln.setAutoFreeze.bind(ln);ln.setUseStrictShallowCopy.bind(ln);ln.applyPatches.bind(ln);ln.createDraft.bind(ln);ln.finishDraft.bind(ln);function Xy(r){return({dispatch:t,getState:s})=>o=>u=>typeof u=="function"?u(t,s,r):o(u)}var rT=Xy(),iT=Xy,sT=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?xl:xl.apply(null,arguments)},oT=r=>r&&typeof r.match=="function";function ka(r,e){function t(...s){if(e){let o=e(...s);if(!o)throw new Error(Sr(0));return{type:r,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:r,payload:s[0]}}return t.toString=()=>`${r}`,t.type=r,t.match=s=>Ww(s)&&s.type===r,t}var Jy=class Ia extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ia.prototype)}static get[Symbol.species](){return Ia}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ia(...e[0].concat(this)):new Ia(...e.concat(this))}};function gg(r){return Ar(r)?Yy(r,()=>{}):r}function yg(r,e,t){return r.has(e)?r.get(e):r.set(e,t(e)).get(e)}function aT(r){return typeof r=="boolean"}var uT=()=>function(e){const{thunk:t=!0,immutableCheck:s=!0,serializableCheck:o=!0,actionCreatorCheck:u=!0}=e??{};let h=new Jy;return t&&(aT(t)?h.push(rT):h.push(iT(t.extraArgument))),h},lT="RTK_autoBatch",_g=r=>e=>{setTimeout(e,r)},cT=(r={type:"raf"})=>e=>(...t)=>{const s=e(...t);let o=!0,u=!1,h=!1;const f=new Set,g=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_g(10):r.type==="callback"?r.queueNotification:_g(r.timeout),_=()=>{h=!1,u&&(u=!1,f.forEach(E=>E()))};return Object.assign({},s,{subscribe(E){const R=()=>o&&E(),O=s.subscribe(R);return f.add(E),()=>{O(),f.delete(E)}},dispatch(E){var R;try{return o=!((R=E==null?void 0:E.meta)!=null&&R[lT]),u=!o,u&&(h||(h=!0,g(_))),s.dispatch(E)}finally{o=!0}}})},hT=r=>function(t){const{autoBatch:s=!0}=t??{};let o=new Jy(r);return s&&o.push(cT(typeof s=="object"?s:void 0)),o};function dT(r){const e=uT(),{reducer:t=void 0,middleware:s,devTools:o=!0,preloadedState:u=void 0,enhancers:h=void 0}=r||{};let f;if(typeof t=="function")f=t;else if(tf(t))f=qw(t);else throw new Error(Sr(1));let g;typeof s=="function"?g=s(e):g=e();let _=xl;o&&(_=sT({trace:!1,...typeof o=="object"&&o}));const E=Hw(...g),R=hT(E);let O=typeof h=="function"?h(R):R();const z=_(...O);return $y(f,u,z)}function Zy(r){const e={},t=[];let s;const o={addCase(u,h){const f=typeof u=="string"?u:u.type;if(!f)throw new Error(Sr(28));if(f in e)throw new Error(Sr(29));return e[f]=h,o},addMatcher(u,h){return t.push({matcher:u,reducer:h}),o},addDefaultCase(u){return s=u,o}};return r(o),[e,t,s]}function fT(r){return typeof r=="function"}function pT(r,e){let[t,s,o]=Zy(e),u;if(fT(r))u=()=>gg(r());else{const f=gg(r);u=()=>f}function h(f=u(),g){let _=[t[g.type],...s.filter(({matcher:E})=>E(g)).map(({reducer:E})=>E)];return _.filter(E=>!!E).length===0&&(_=[o]),_.reduce((E,R)=>{if(R)if(es(E)){const z=R(E,g);return z===void 0?E:z}else{if(Ar(E))return Yy(E,O=>R(O,g));{const O=R(E,g);if(O===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return O}}return E},f)}return h.getInitialState=u,h}var mT=(r,e)=>oT(r)?r.match(e):r(e);function gT(...r){return e=>r.some(t=>mT(t,e))}var yT="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",_T=(r=21)=>{let e="",t=r;for(;t--;)e+=yT[Math.random()*64|0];return e},vT=["name","message","stack","code"],ud=class{constructor(r,e){Qh(this,"_type");this.payload=r,this.meta=e}},vg=class{constructor(r,e){Qh(this,"_type");this.payload=r,this.meta=e}},ET=r=>{if(typeof r=="object"&&r!==null){const e={};for(const t of vT)typeof r[t]=="string"&&(e[t]=r[t]);return e}return{message:String(r)}},sf=(()=>{function r(e,t,s){const o=ka(e+"/fulfilled",(g,_,E,R)=>({payload:g,meta:{...R||{},arg:E,requestId:_,requestStatus:"fulfilled"}})),u=ka(e+"/pending",(g,_,E)=>({payload:void 0,meta:{...E||{},arg:_,requestId:g,requestStatus:"pending"}})),h=ka(e+"/rejected",(g,_,E,R,O)=>({payload:R,error:(s&&s.serializeError||ET)(g||"Rejected"),meta:{...O||{},arg:E,requestId:_,rejectedWithValue:!!R,requestStatus:"rejected",aborted:(g==null?void 0:g.name)==="AbortError",condition:(g==null?void 0:g.name)==="ConditionError"}}));function f(g){return(_,E,R)=>{const O=s!=null&&s.idGenerator?s.idGenerator(g):_T(),z=new AbortController;let H,Y;function j(le){Y=le,z.abort()}const he=async function(){var te,me;let le;try{let oe=(te=s==null?void 0:s.condition)==null?void 0:te.call(s,g,{getState:E,extra:R});if(TT(oe)&&(oe=await oe),oe===!1||z.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((T,S)=>{H=()=>{S({name:"AbortError",message:Y||"Aborted"})},z.signal.addEventListener("abort",H)});_(u(O,g,(me=s==null?void 0:s.getPendingMeta)==null?void 0:me.call(s,{requestId:O,arg:g},{getState:E,extra:R}))),le=await Promise.race([P,Promise.resolve(t(g,{dispatch:_,getState:E,extra:R,requestId:O,signal:z.signal,abort:j,rejectWithValue:(T,S)=>new ud(T,S),fulfillWithValue:(T,S)=>new vg(T,S)})).then(T=>{if(T instanceof ud)throw T;return T instanceof vg?o(T.payload,O,g,T.meta):o(T,O,g)})])}catch(oe){le=oe instanceof ud?h(null,O,g,oe.payload,oe.meta):h(oe,O,g)}finally{H&&z.signal.removeEventListener("abort",H)}return s&&!s.dispatchConditionRejection&&h.match(le)&&le.meta.condition||_(le),le}();return Object.assign(he,{abort:j,requestId:O,arg:g,unwrap(){return he.then(wT)}})}}return Object.assign(f,{pending:u,rejected:h,fulfilled:o,settled:gT(h,o),typePrefix:e})}return r.withTypes=()=>r,r})();function wT(r){if(r.meta&&r.meta.rejectedWithValue)throw r.payload;if(r.error)throw r.error;return r.payload}function TT(r){return r!==null&&typeof r=="object"&&typeof r.then=="function"}var IT=Symbol.for("rtk-slice-createasyncthunk");function ST(r,e){return`${r}/${e}`}function AT({creators:r}={}){var t;const e=(t=r==null?void 0:r.asyncThunk)==null?void 0:t[IT];return function(o){const{name:u,reducerPath:h=u}=o;if(!u)throw new Error(Sr(11));const f=(typeof o.reducers=="function"?o.reducers(CT()):o.reducers)||{},g=Object.keys(f),_={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},E={addCase(Z,te){const me=typeof Z=="string"?Z:Z.type;if(!me)throw new Error(Sr(12));if(me in _.sliceCaseReducersByType)throw new Error(Sr(13));return _.sliceCaseReducersByType[me]=te,E},addMatcher(Z,te){return _.sliceMatchers.push({matcher:Z,reducer:te}),E},exposeAction(Z,te){return _.actionCreators[Z]=te,E},exposeCaseReducer(Z,te){return _.sliceCaseReducersByName[Z]=te,E}};g.forEach(Z=>{const te=f[Z],me={reducerName:Z,type:ST(u,Z),createNotation:typeof o.reducers=="function"};kT(te)?DT(me,te,E,e):PT(me,te,E)});function R(){const[Z={},te=[],me=void 0]=typeof o.extraReducers=="function"?Zy(o.extraReducers):[o.extraReducers],oe={...Z,..._.sliceCaseReducersByType};return pT(o.initialState,P=>{for(let T in oe)P.addCase(T,oe[T]);for(let T of _.sliceMatchers)P.addMatcher(T.matcher,T.reducer);for(let T of te)P.addMatcher(T.matcher,T.reducer);me&&P.addDefaultCase(me)})}const O=Z=>Z,z=new Map;let H;function Y(Z,te){return H||(H=R()),H(Z,te)}function j(){return H||(H=R()),H.getInitialState()}function he(Z,te=!1){function me(P){let T=P[Z];return typeof T>"u"&&te&&(T=j()),T}function oe(P=O){const T=yg(z,te,()=>new WeakMap);return yg(T,P,()=>{const S={};for(const[k,D]of Object.entries(o.selectors??{}))S[k]=RT(D,P,j,te);return S})}return{reducerPath:Z,getSelectors:oe,get selectors(){return oe(me)},selectSlice:me}}const le={name:u,reducer:Y,actions:_.actionCreators,caseReducers:_.sliceCaseReducersByName,getInitialState:j,...he(h),injectInto(Z,{reducerPath:te,...me}={}){const oe=te??h;return Z.inject({reducerPath:oe,reducer:Y},me),{...le,...he(oe,!0)}}};return le}}function RT(r,e,t,s){function o(u,...h){let f=e(u);return typeof f>"u"&&s&&(f=t()),r(f,...h)}return o.unwrapped=r,o}var e_=AT();function CT(){function r(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return r.withTypes=()=>r,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:r}}function PT({type:r,reducerName:e,createNotation:t},s,o){let u,h;if("reducer"in s){if(t&&!NT(s))throw new Error(Sr(17));u=s.reducer,h=s.prepare}else u=s;o.addCase(r,u).exposeCaseReducer(e,u).exposeAction(e,h?ka(r,h):ka(r))}function kT(r){return r._reducerDefinitionType==="asyncThunk"}function NT(r){return r._reducerDefinitionType==="reducerWithPrepare"}function DT({type:r,reducerName:e},t,s,o){if(!o)throw new Error(Sr(18));const{payloadCreator:u,fulfilled:h,pending:f,rejected:g,settled:_,options:E}=t,R=o(r,u,E);s.exposeAction(e,R),h&&s.addCase(R.fulfilled,h),f&&s.addCase(R.pending,f),g&&s.addCase(R.rejected,g),_&&s.addMatcher(R.settled,_),s.exposeCaseReducer(e,{fulfilled:h||ml,pending:f||ml,rejected:g||ml,settled:_||ml})}function ml(){}function Sr(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var Eg={};/**
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
 */const t_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},OT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},n_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,R=(u&3)<<4|f>>4;let O=(f&15)<<2|_>>6,z=_&63;g||(z=64,h||(O=64)),s.push(t[E],t[R],t[O],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(t_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):OT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const R=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||f==null||_==null||R==null)throw new VT;const O=u<<2|f>>4;if(s.push(O),_!==64){const z=f<<4&240|_>>2;if(s.push(z),R!==64){const H=_<<6&192|R;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xT=function(r){const e=t_(r);return n_.encodeByteArray(e,!0)},Fl=function(r){return xT(r).replace(/\./g,"")},r_=function(r){try{return n_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MT=()=>LT().__FIREBASE_DEFAULTS__,bT=()=>{if(typeof process>"u"||typeof Eg>"u")return;const r=Eg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},FT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&r_(r[1]);return e&&JSON.parse(e)},ic=()=>{try{return MT()||bT()||FT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},i_=r=>{var e,t;return(t=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},UT=r=>{const e=i_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},s_=()=>{var r;return(r=ic())===null||r===void 0?void 0:r.config},o_=r=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class zT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function jT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Fl(JSON.stringify(t)),Fl(JSON.stringify(h)),""].join(".")}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function $T(){var r;const e=(r=ic())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function WT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KT(){const r=Ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function GT(){return!$T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const XT="FirebaseError";class kr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=XT,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?JT(u,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new kr(o,f,s)}}function JT(r,e){return r.replace(ZT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ZT=/\{\$([^}]+)}/g;function eI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ul(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(wg(u)&&wg(h)){if(!Ul(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function wg(r){return r!==null&&typeof r=="object"}/**
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
 */function Ha(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Aa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function tI(r,e){const t=new nI(r,e);return t.subscribe.bind(t)}class nI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");rI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ld),o.error===void 0&&(o.error=ld),o.complete===void 0&&(o.complete=ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ld(){}/**
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
 */function Zt(r){return r&&r._delegate?r._delegate:r}class ns{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yi="[DEFAULT]";/**
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
 */class iI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new zT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sI(r){return r===Yi?void 0:r}function oI(r){return r.instantiationMode==="EAGER"}/**
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
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new iI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const uI={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},lI=Ae.INFO,cI={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},hI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=cI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class of{constructor(e){this.name=e,this._logLevel=lI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const dI=(r,e)=>e.some(t=>r instanceof t);let Tg,Ig;function fI(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,Pd=new WeakMap,u_=new WeakMap,cd=new WeakMap,af=new WeakMap;function mI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ui(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&a_.set(t,r)}).catch(()=>{}),af.set(e,r),e}function gI(r){if(Pd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Pd.set(r,e)}let kd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Pd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||u_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ui(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function yI(r){kd=r(kd)}function _I(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(hd(this),e,...t);return u_.set(s,e.sort?e.sort():[e]),ui(s)}:pI().includes(r)?function(...e){return r.apply(hd(this),e),ui(a_.get(this))}:function(...e){return ui(r.apply(hd(this),e))}}function vI(r){return typeof r=="function"?_I(r):(r instanceof IDBTransaction&&gI(r),dI(r,fI())?new Proxy(r,kd):r)}function ui(r){if(r instanceof IDBRequest)return mI(r);if(cd.has(r))return cd.get(r);const e=vI(r);return e!==r&&(cd.set(r,e),af.set(e,r)),e}const hd=r=>af.get(r);function EI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),f=ui(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ui(h.result),g.oldVersion,g.newVersion,ui(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const wI=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],dd=new Map;function Sg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=TI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||wI.includes(t)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return dd.set(e,u),u}yI(r=>({...r,get:(e,t,s)=>Sg(e,t)||r.get(e,t,s),has:(e,t)=>!!Sg(e,t)||r.has(e,t)}));/**
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
 */class II{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function SI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nd="@firebase/app",Ag="0.10.18";/**
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
 */const Rr=new of("@firebase/app"),AI="@firebase/app-compat",RI="@firebase/analytics-compat",CI="@firebase/analytics",PI="@firebase/app-check-compat",kI="@firebase/app-check",NI="@firebase/auth",DI="@firebase/auth-compat",OI="@firebase/database",VI="@firebase/data-connect",xI="@firebase/database-compat",LI="@firebase/functions",MI="@firebase/functions-compat",bI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",zI="@firebase/messaging-compat",jI="@firebase/performance",BI="@firebase/performance-compat",$I="@firebase/remote-config",qI="@firebase/remote-config-compat",HI="@firebase/storage",WI="@firebase/storage-compat",KI="@firebase/firestore",GI="@firebase/vertexai",QI="@firebase/firestore-compat",YI="firebase",XI="11.2.0";/**
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
 */const Dd="[DEFAULT]",JI={[Nd]:"fire-core",[AI]:"fire-core-compat",[CI]:"fire-analytics",[RI]:"fire-analytics-compat",[kI]:"fire-app-check",[PI]:"fire-app-check-compat",[NI]:"fire-auth",[DI]:"fire-auth-compat",[OI]:"fire-rtdb",[VI]:"fire-data-connect",[xI]:"fire-rtdb-compat",[LI]:"fire-fn",[MI]:"fire-fn-compat",[bI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[zI]:"fire-fcm-compat",[jI]:"fire-perf",[BI]:"fire-perf-compat",[$I]:"fire-rc",[qI]:"fire-rc-compat",[HI]:"fire-gcs",[WI]:"fire-gcs-compat",[KI]:"fire-fst",[QI]:"fire-fst-compat",[GI]:"fire-vertex","fire-js":"fire-js",[YI]:"fire-js-all"};/**
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
 */const zl=new Map,ZI=new Map,Od=new Map;function Rg(r,e){try{r.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function co(r){const e=r.name;if(Od.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Od.set(e,r);for(const t of zl.values())Rg(t,r);for(const t of ZI.values())Rg(t,r);return!0}function uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Er(r){return r.settings!==void 0}/**
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
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new qa("app","Firebase",eS);/**
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
 */class tS{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=XI;function l_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw li.create("bad-app-name",{appName:String(o)});if(t||(t=s_()),!t)throw li.create("no-options");const u=zl.get(o);if(u){if(Ul(t,u.options)&&Ul(s,u.config))return u;throw li.create("duplicate-app",{appName:o})}const h=new aI(o);for(const g of Od.values())h.addComponent(g);const f=new tS(t,s,h);return zl.set(o,f),f}function c_(r=Dd){const e=zl.get(r);if(!e&&r===Dd&&s_())return l_();if(!e)throw li.create("no-app",{appName:r});return e}function ci(r,e,t){var s;let o=(s=JI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(f.join(" "));return}co(new ns(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const nS="firebase-heartbeat-database",rS=1,Fa="firebase-heartbeat-store";let fd=null;function h_(){return fd||(fd=EI(nS,rS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(r=>{throw li.create("idb-open",{originalErrorMessage:r.message})})),fd}async function iS(r){try{const t=(await h_()).transaction(Fa),s=await t.objectStore(Fa).get(d_(r));return await t.done,s}catch(e){if(e instanceof kr)Rr.warn(e.message);else{const t=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Cg(r,e){try{const s=(await h_()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,d_(r)),await s.done}catch(t){if(t instanceof kr)Rr.warn(t.message);else{const s=li.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function d_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const sS=1024,oS=30*24*60*60*1e3;class aS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Pg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=oS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pg(),{heartbeatsToSend:s,unsentEntries:o}=uS(this._heartbeatsCache.heartbeats),u=Fl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function uS(r,e=sS){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),kg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),kg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class lS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Cg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function kg(r){return Fl(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function cS(r){co(new ns("platform-logger",e=>new II(e),"PRIVATE")),co(new ns("heartbeat",e=>new aS(e),"PRIVATE")),ci(Nd,Ag,r),ci(Nd,Ag,"esm2017"),ci("fire-js","")}cS("");function lf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=f_,p_=new qa("auth","Firebase",f_());/**
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
 */const jl=new of("@firebase/auth");function dS(r,...e){jl.logLevel<=Ae.WARN&&jl.warn(`Auth (${Eo}): ${r}`,...e)}function Il(r,...e){jl.logLevel<=Ae.ERROR&&jl.error(`Auth (${Eo}): ${r}`,...e)}/**
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
 */function bn(r,...e){throw cf(r,...e)}function Jn(r,...e){return cf(r,...e)}function m_(r,e,t){const s=Object.assign(Object.assign({},hS()),{[e]:t});return new qa("auth","Firebase",s).create(e,{appName:r.name})}function hi(r){return m_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return p_.create(r,...e)}function _e(r,e,...t){if(!r)throw cf(e,...t)}function wr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Il(e),new Error(e)}function Cr(r,e){r||wr(e)}/**
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
 */function Vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function fS(){return Ng()==="http:"||Ng()==="https:"}function Ng(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||HT()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Wa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cr(t>e,"Short delay should be less than long delay!"),this.isMobile=BT()||WT()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(r,e){Cr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class g_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yS=new Wa(3e4,6e4);function ss(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ei(r,e,t,s,o={}){return y_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const f=Ha(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return qT()||(_.referrerPolicy="no-referrer"),g_.fetch()(__(r,r.config.apiHost,t,f),_)})}async function y_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},gS),e);try{const o=new vS(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gl(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gl(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw gl(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw m_(r,E,_);bn(r,E)}}catch(o){if(o instanceof kr)throw o;bn(r,"network-request-failed",{message:String(o)})}}async function sc(r,e,t,s,o={}){const u=await Ei(r,e,t,s,o);return"mfaPendingCredential"in u&&bn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function __(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?hf(r.config,o):`${r.config.apiScheme}://${o}`}function _S(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),yS.get())})}}function gl(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(r,e,s);return o.customData._tokenResponse=t,o}function Dg(r){return r!==void 0&&r.enterprise!==void 0}class ES{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _S(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wS(r,e){return Ei(r,"GET","/v2/recaptchaConfig",ss(r,e))}/**
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
 */async function TS(r,e){return Ei(r,"POST","/v1/accounts:delete",e)}async function v_(r,e){return Ei(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Na(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IS(r,e=!1){const t=Zt(r),s=await t.getIdToken(e),o=df(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(pd(o.auth_time)),issuedAtTime:Na(pd(o.iat)),expirationTime:Na(pd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function pd(r){return Number(r)*1e3}function df(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const o=r_(t);return o?JSON.parse(o):(Il("Failed to decode base64 JWT payload"),null)}catch(o){return Il("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Og(r){const e=df(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kr&&SS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function SS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class AS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bl(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Ua(r,v_(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?E_(u.providerUserInfo):[],f=CS(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new xd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,R)}async function RS(r){const e=Zt(r);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function E_(r){return r.map(e=>{var{providerId:t}=e,s=lf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function PS(r,e){const t=await y_(r,{},async()=>{const s=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=__(r,o,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kS(r,e){return Ei(r,"POST","/v2/accounts:revokeToken",ss(r,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Og(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await PS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new io;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function ti(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new xd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IS(this,e)}reload(){return RS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Er(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await Ua(this,TS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,f,g,_,E;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,O=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,H=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(f=t.tenantId)!==null&&f!==void 0?f:void 0,j=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,he=(_=t.createdAt)!==null&&_!==void 0?_:void 0,le=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:te,isAnonymous:me,providerData:oe,stsTokenManager:P}=t;_e(Z&&P,e,"internal-error");const T=io.fromJSON(this.name,P);_e(typeof Z=="string",e,"internal-error"),ti(R,e.name),ti(O,e.name),_e(typeof te=="boolean",e,"internal-error"),_e(typeof me=="boolean",e,"internal-error"),ti(z,e.name),ti(H,e.name),ti(Y,e.name),ti(j,e.name),ti(he,e.name),ti(le,e.name);const S=new Tr({uid:Z,auth:e,email:O,emailVerified:te,displayName:R,isAnonymous:me,photoURL:H,phoneNumber:z,tenantId:Y,stsTokenManager:T,createdAt:he,lastLoginAt:le});return oe&&Array.isArray(oe)&&(S.providerData=oe.map(k=>Object.assign({},k))),j&&(S._redirectEventId=j),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new io;o.updateFromServerResponse(t);const u=new Tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bl(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?E_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new io;f.updateFromIdToken(s);const g=new Tr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Vg=new Map;function Ir(r){Cr(r instanceof Function,"Expected a class definition");let e=Vg.get(r);return e?(Cr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Vg.set(r,e),e)}/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}w_.type="NONE";const xg=w_;/**
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
 */function Sl(r,e,t){return`firebase:${r}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Sl(this.userKey,o.apiKey,u),this.fullPersistenceKey=Sl("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Ir(xg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ir(xg);const h=Sl(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){const R=Tr._fromJSON(e,E);_!==u&&(f=R),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new so(u,e,s):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new so(u,e,s))}}/**
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
 */function Lg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C_(e))return"Blackberry";if(P_(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||S_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function T_(r=Ut()){return/firefox\//i.test(r)}function I_(r=Ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S_(r=Ut()){return/crios\//i.test(r)}function A_(r=Ut()){return/iemobile/i.test(r)}function R_(r=Ut()){return/android/i.test(r)}function C_(r=Ut()){return/blackberry/i.test(r)}function P_(r=Ut()){return/webos/i.test(r)}function ff(r=Ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function NS(r=Ut()){var e;return ff(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DS(){return KT()&&document.documentMode===10}function k_(r=Ut()){return ff(r)||R_(r)||P_(r)||C_(r)||/windows phone/i.test(r)||A_(r)}/**
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
 */function N_(r,e=[]){let t;switch(r){case"Browser":t=Lg(Ut());break;case"Worker":t=`${Lg(Ut())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class OS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function VS(r,e={}){return Ei(r,"GET","/v2/passwordPolicy",ss(r,e))}/**
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
 */const xS=6;class LS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:xS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class MS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mg(this),this.idTokenSubscription=new Mg(this),this.beforeStateQueue=new OS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await v_(this,{idToken:e}),s=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Er(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Er(this.app))return Promise.reject(hi(this));const t=e?Zt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Er(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Er(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VS(this),t=new LS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await kS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wo(r){return Zt(r)}class Mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=tI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bS(r){oc=r}function D_(r){return oc.loadJS(r)}function FS(){return oc.recaptchaEnterpriseScript}function US(){return oc.gapiScript}function zS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class jS{constructor(){this.enterprise=new BS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class BS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $S="recaptcha-enterprise",O_="NO_RECAPTCHA";class qS{constructor(e){this.type=$S,this.auth=wo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,f)=>{wS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new ES(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(u,h,f){const g=window.grecaptcha;Dg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(O_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jS().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(f=>{if(!t&&Dg(window.grecaptcha))o(f,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=FS();g.length!==0&&(g+=f),D_(g).then(()=>{o(f,u,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function bg(r,e,t,s=!1,o=!1){const u=new qS(r);let h;if(o)h=O_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Fg(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await bg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await bg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function HS(r,e){const t=uf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ul(u,e??{}))return o;bn(o,"already-initialized")}return t.initialize({options:e})}function WS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function KS(r,e,t){const s=wo(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=V_(e),{host:h,port:f}=GS(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),QS()}function V_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function GS(r){const e=V_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ug(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ug(h)}}}function Ug(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function QS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class pf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function YS(r,e){return Ei(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XS(r,e){return sc(r,"POST","/v1/accounts:signInWithPassword",ss(r,e))}/**
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
 */async function JS(r,e){return sc(r,"POST","/v1/accounts:signInWithEmailLink",ss(r,e))}async function ZS(r,e){return sc(r,"POST","/v1/accounts:signInWithEmailLink",ss(r,e))}/**
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
 */class za extends pf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new za(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new za(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,t,"signInWithPassword",XS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,s,"signUpPassword",YS);case"emailLink":return ZS(e,{idToken:t,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oo(r,e){return sc(r,"POST","/v1/accounts:signInWithIdp",ss(r,e))}/**
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
 */const e0="http://localhost";class rs extends pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=lf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ha(t)}return e}}/**
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
 */function t0(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(r){const e=Sa(Aa(r)).link,t=e?Sa(Aa(e)).deep_link_id:null,s=Sa(Aa(r)).deep_link_id;return(s?Sa(Aa(s)).link:null)||s||t||e||r}class mf{constructor(e){var t,s,o,u,h,f;const g=Sa(Aa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,R=t0((o=g.mode)!==null&&o!==void 0?o:null);_e(_&&E&&R,"argument-error"),this.apiKey=_,this.operation=R,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=n0(e);try{return new mf(t)}catch{return null}}}/**
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
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,t){return za._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=mf.parseLink(t);return _e(s,"argument-error"),za._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class x_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends x_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ni extends Ka{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";ni.PROVIDER_ID="facebook.com";/**
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
 */class ri extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.GOOGLE_SIGN_IN_METHOD="google.com";ri.PROVIDER_ID="google.com";/**
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
 */class ii extends Ka{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
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
 */class si extends Ka{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return si.credential(t,s)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
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
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Tr._fromIdTokenResponse(e,s,o),h=zg(s);return new ho({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=zg(s);return new ho({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function zg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class $l extends kr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new $l(e,t,s,o)}}function L_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(r,u,e,s):u})}async function r0(r,e,t=!1){const s=await Ua(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ho._forOperation(r,"link",s)}/**
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
 */async function i0(r,e,t=!1){const{auth:s}=r;if(Er(s.app))return Promise.reject(hi(s));const o="reauthenticate";try{const u=await Ua(r,L_(s,o,e,r),t);_e(u.idToken,s,"internal-error");const h=df(u.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),ho._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),u}}/**
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
 */async function M_(r,e,t=!1){if(Er(r.app))return Promise.reject(hi(r));const s="signIn",o=await L_(r,s,e),u=await ho._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function s0(r,e){return M_(wo(r),e)}/**
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
 */async function o0(r){const e=wo(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function a0(r,e,t){return Er(r.app)?Promise.reject(hi(r)):s0(Zt(r),To.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&o0(r),s})}function u0(r,e,t,s){return Zt(r).onIdTokenChanged(e,t,s)}function l0(r,e,t){return Zt(r).beforeAuthStateChanged(e,t)}function c0(r,e,t,s){return Zt(r).onAuthStateChanged(e,t,s)}function h0(r){return Zt(r).signOut()}const ql="__sak";/**
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
 */class b_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const d0=1e3,f0=10;class F_ extends b_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);DS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,f0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}F_.type="LOCAL";const p0=F_;/**
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
 */class U_ extends b_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}U_.type="SESSION";const z_=U_;/**
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
 */function m0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,u)),g=await m0(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function gf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class g0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const _=gf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const O=R;if(O.data.eventId===_)switch(O.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(O.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function y0(r){Zn().location.href=r}/**
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
 */function j_(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function _0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function E0(){return j_()?self:null}/**
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
 */const B_="firebaseLocalStorageDb",w0=1,Hl="firebaseLocalStorage",$_="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(r,e){return r.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function T0(){const r=indexedDB.deleteDatabase(B_);return new Ga(r).toPromise()}function Ld(){const r=indexedDB.open(B_,w0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hl,{keyPath:$_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hl)?e(s):(s.close(),await T0(),e(await Ld()))})})}async function jg(r,e,t){const s=uc(r,!0).put({[$_]:e,value:t});return new Ga(s).toPromise()}async function I0(r,e){const t=uc(r,!1).get(e),s=await new Ga(t).toPromise();return s===void 0?null:s.value}function Bg(r,e){const t=uc(r,!0).delete(e);return new Ga(t).toPromise()}const S0=800,A0=3;class q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>A0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(E0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _0(),!this.activeServiceWorker)return;this.sender=new g0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await jg(e,ql,"1"),await Bg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>I0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=uc(o,!1).getAll();return new Ga(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q_.type="LOCAL";const R0=q_;new Wa(3e4,6e4);/**
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
 */function C0(r,e){return e?Ir(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class yf extends pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function P0(r){return M_(r.auth,new yf(r),r.bypassAuthState)}function k0(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),i0(t,new yf(r),r.bypassAuthState)}async function N0(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),r0(t,new yf(r),r.bypassAuthState)}/**
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
 */class H_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P0;case"linkViaPopup":case"linkViaRedirect":return N0;case"reauthViaPopup":case"reauthViaRedirect":return k0;default:bn(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D0=new Wa(2e3,1e4);class ro extends H_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D0.get())};e()}}ro.currentPopupAction=null;/**
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
 */const O0="pendingRedirect",Al=new Map;class V0 extends H_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const s=await x0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x0(r,e){const t=b0(e),s=M0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function L0(r,e){Al.set(r._key(),e)}function M0(r){return Ir(r._redirectPersistence)}function b0(r){return Sl(O0,r.config.apiKey,r.name)}async function F0(r,e,t=!1){if(Er(r.app))return Promise.reject(hi(r));const s=wo(r),o=C0(s,e),h=await new V0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const U0=10*60*1e3;class z0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!W_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function W_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j0(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(r);default:return!1}}/**
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
 */async function B0(r,e={}){return Ei(r,"GET","/v1/projects",e)}/**
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
 */const $0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function H0(r){if(r.config.emulator)return;const{authorizedDomains:e}=await B0(r);for(const t of e)try{if(W0(t))return}catch{}bn(r,"unauthorized-domain")}function W0(r){const e=Vd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!q0.test(t))return!1;if($0.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const K0=new Wa(3e4,6e4);function qg(){const r=Zn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function G0(r){return new Promise((e,t)=>{var s,o,u;function h(){qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qg(),t(Jn(r,"network-request-failed"))},timeout:K0.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const f=zS("iframefcb");return Zn()[f]=()=>{gapi.load?h():t(Jn(r,"network-request-failed"))},D_(`${US()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function Q0(r){return Rl=Rl||G0(r),Rl}/**
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
 */const Y0=new Wa(5e3,15e3),X0="__/auth/iframe",J0="emulator/auth/iframe",Z0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tA(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?hf(e,J0):`https://${r.config.authDomain}/${X0}`,s={apiKey:e.apiKey,appName:r.name,v:Eo},o=eA.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ha(s).slice(1)}`}async function nA(r){const e=await Q0(r),t=Zn().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:tA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z0,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(r,"network-request-failed"),f=Zn().setTimeout(()=>{u(h)},Y0.get());function g(){Zn().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const rA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iA=500,sA=600,oA="_blank",aA="http://localhost";class Hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(r,e,t,s=iA,o=sA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},rA),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ut().toLowerCase();t&&(f=S_(_)?oA:t),T_(_)&&(e=e||aA,g.scrollbars="yes");const E=Object.entries(g).reduce((O,[z,H])=>`${O}${z}=${H},`,"");if(NS(_)&&f!=="_self")return lA(e||"",f),new Hg(null);const R=window.open(e||"",f,E);_e(R,r,"popup-blocked");try{R.focus()}catch{}return new Hg(R)}function lA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cA="__/auth/handler",hA="emulator/auth/handler",dA=encodeURIComponent("fac");async function Wg(r,e,t,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof x_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",eI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,R]of Object.entries({}))h[E]=R}if(e instanceof Ka){const E=e.getScopes().filter(R=>R!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${dA}=${encodeURIComponent(g)}`:"";return`${fA(r)}?${Ha(f).slice(1)}${_}`}function fA({config:r}){return r.emulator?hf(r,hA):`https://${r.authDomain}/${cA}`}/**
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
 */const md="webStorageSupport";class pA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=F0,this._overrideRedirectResult=L0}async _openPopup(e,t,s,o){var u;Cr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Wg(e,t,s,Vd(),o);return uA(e,h,gf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Wg(e,t,s,Vd(),o);return y0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nA(e),s=new z0(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(md,{type:md},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[md];h!==void 0&&t(!!h),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=H0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return k_()||I_()||ff()}}const mA=pA;var Kg="@firebase/auth",Gg="1.8.2";/**
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
 */class gA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _A(r){co(new ns("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N_(r)},_=new MS(s,o,u,g);return WS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),co(new ns("auth-internal",e=>{const t=wo(e.getProvider("auth").getImmediate());return(s=>new gA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(Kg,Gg,yA(r)),ci(Kg,Gg,"esm2017")}/**
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
 */const vA=5*60,EA=o_("authIdTokenMaxAge")||vA;let Qg=null;const wA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>EA)return;const o=t==null?void 0:t.token;Qg!==o&&(Qg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TA(r=c_()){const e=uf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=HS(r,{popupRedirectResolver:mA,persistence:[R0,p0,z_]}),s=o_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=wA(u.toString());l0(t,h,()=>h(t.currentUser)),u0(t,f=>h(f))}}const o=i_("auth");return o&&KS(t,`http://${o}`),t}function IA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}bS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",IA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_A("Browser");var SA="firebase",AA="11.2.0";/**
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
 */ci(SA,AA,"app");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,K_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function S(){}S.prototype=T.prototype,P.D=T.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(k,D,x){for(var A=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)A[Ze-2]=arguments[Ze];return T.prototype[D].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)k[D]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(D=0;16>D;++D)k[D]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=P.g[0],S=P.g[1],D=P.g[2];var x=P.g[3],A=T+(x^S&(D^x))+k[0]+3614090360&4294967295;T=S+(A<<7&4294967295|A>>>25),A=x+(D^T&(S^D))+k[1]+3905402710&4294967295,x=T+(A<<12&4294967295|A>>>20),A=D+(S^x&(T^S))+k[2]+606105819&4294967295,D=x+(A<<17&4294967295|A>>>15),A=S+(T^D&(x^T))+k[3]+3250441966&4294967295,S=D+(A<<22&4294967295|A>>>10),A=T+(x^S&(D^x))+k[4]+4118548399&4294967295,T=S+(A<<7&4294967295|A>>>25),A=x+(D^T&(S^D))+k[5]+1200080426&4294967295,x=T+(A<<12&4294967295|A>>>20),A=D+(S^x&(T^S))+k[6]+2821735955&4294967295,D=x+(A<<17&4294967295|A>>>15),A=S+(T^D&(x^T))+k[7]+4249261313&4294967295,S=D+(A<<22&4294967295|A>>>10),A=T+(x^S&(D^x))+k[8]+1770035416&4294967295,T=S+(A<<7&4294967295|A>>>25),A=x+(D^T&(S^D))+k[9]+2336552879&4294967295,x=T+(A<<12&4294967295|A>>>20),A=D+(S^x&(T^S))+k[10]+4294925233&4294967295,D=x+(A<<17&4294967295|A>>>15),A=S+(T^D&(x^T))+k[11]+2304563134&4294967295,S=D+(A<<22&4294967295|A>>>10),A=T+(x^S&(D^x))+k[12]+1804603682&4294967295,T=S+(A<<7&4294967295|A>>>25),A=x+(D^T&(S^D))+k[13]+4254626195&4294967295,x=T+(A<<12&4294967295|A>>>20),A=D+(S^x&(T^S))+k[14]+2792965006&4294967295,D=x+(A<<17&4294967295|A>>>15),A=S+(T^D&(x^T))+k[15]+1236535329&4294967295,S=D+(A<<22&4294967295|A>>>10),A=T+(D^x&(S^D))+k[1]+4129170786&4294967295,T=S+(A<<5&4294967295|A>>>27),A=x+(S^D&(T^S))+k[6]+3225465664&4294967295,x=T+(A<<9&4294967295|A>>>23),A=D+(T^S&(x^T))+k[11]+643717713&4294967295,D=x+(A<<14&4294967295|A>>>18),A=S+(x^T&(D^x))+k[0]+3921069994&4294967295,S=D+(A<<20&4294967295|A>>>12),A=T+(D^x&(S^D))+k[5]+3593408605&4294967295,T=S+(A<<5&4294967295|A>>>27),A=x+(S^D&(T^S))+k[10]+38016083&4294967295,x=T+(A<<9&4294967295|A>>>23),A=D+(T^S&(x^T))+k[15]+3634488961&4294967295,D=x+(A<<14&4294967295|A>>>18),A=S+(x^T&(D^x))+k[4]+3889429448&4294967295,S=D+(A<<20&4294967295|A>>>12),A=T+(D^x&(S^D))+k[9]+568446438&4294967295,T=S+(A<<5&4294967295|A>>>27),A=x+(S^D&(T^S))+k[14]+3275163606&4294967295,x=T+(A<<9&4294967295|A>>>23),A=D+(T^S&(x^T))+k[3]+4107603335&4294967295,D=x+(A<<14&4294967295|A>>>18),A=S+(x^T&(D^x))+k[8]+1163531501&4294967295,S=D+(A<<20&4294967295|A>>>12),A=T+(D^x&(S^D))+k[13]+2850285829&4294967295,T=S+(A<<5&4294967295|A>>>27),A=x+(S^D&(T^S))+k[2]+4243563512&4294967295,x=T+(A<<9&4294967295|A>>>23),A=D+(T^S&(x^T))+k[7]+1735328473&4294967295,D=x+(A<<14&4294967295|A>>>18),A=S+(x^T&(D^x))+k[12]+2368359562&4294967295,S=D+(A<<20&4294967295|A>>>12),A=T+(S^D^x)+k[5]+4294588738&4294967295,T=S+(A<<4&4294967295|A>>>28),A=x+(T^S^D)+k[8]+2272392833&4294967295,x=T+(A<<11&4294967295|A>>>21),A=D+(x^T^S)+k[11]+1839030562&4294967295,D=x+(A<<16&4294967295|A>>>16),A=S+(D^x^T)+k[14]+4259657740&4294967295,S=D+(A<<23&4294967295|A>>>9),A=T+(S^D^x)+k[1]+2763975236&4294967295,T=S+(A<<4&4294967295|A>>>28),A=x+(T^S^D)+k[4]+1272893353&4294967295,x=T+(A<<11&4294967295|A>>>21),A=D+(x^T^S)+k[7]+4139469664&4294967295,D=x+(A<<16&4294967295|A>>>16),A=S+(D^x^T)+k[10]+3200236656&4294967295,S=D+(A<<23&4294967295|A>>>9),A=T+(S^D^x)+k[13]+681279174&4294967295,T=S+(A<<4&4294967295|A>>>28),A=x+(T^S^D)+k[0]+3936430074&4294967295,x=T+(A<<11&4294967295|A>>>21),A=D+(x^T^S)+k[3]+3572445317&4294967295,D=x+(A<<16&4294967295|A>>>16),A=S+(D^x^T)+k[6]+76029189&4294967295,S=D+(A<<23&4294967295|A>>>9),A=T+(S^D^x)+k[9]+3654602809&4294967295,T=S+(A<<4&4294967295|A>>>28),A=x+(T^S^D)+k[12]+3873151461&4294967295,x=T+(A<<11&4294967295|A>>>21),A=D+(x^T^S)+k[15]+530742520&4294967295,D=x+(A<<16&4294967295|A>>>16),A=S+(D^x^T)+k[2]+3299628645&4294967295,S=D+(A<<23&4294967295|A>>>9),A=T+(D^(S|~x))+k[0]+4096336452&4294967295,T=S+(A<<6&4294967295|A>>>26),A=x+(S^(T|~D))+k[7]+1126891415&4294967295,x=T+(A<<10&4294967295|A>>>22),A=D+(T^(x|~S))+k[14]+2878612391&4294967295,D=x+(A<<15&4294967295|A>>>17),A=S+(x^(D|~T))+k[5]+4237533241&4294967295,S=D+(A<<21&4294967295|A>>>11),A=T+(D^(S|~x))+k[12]+1700485571&4294967295,T=S+(A<<6&4294967295|A>>>26),A=x+(S^(T|~D))+k[3]+2399980690&4294967295,x=T+(A<<10&4294967295|A>>>22),A=D+(T^(x|~S))+k[10]+4293915773&4294967295,D=x+(A<<15&4294967295|A>>>17),A=S+(x^(D|~T))+k[1]+2240044497&4294967295,S=D+(A<<21&4294967295|A>>>11),A=T+(D^(S|~x))+k[8]+1873313359&4294967295,T=S+(A<<6&4294967295|A>>>26),A=x+(S^(T|~D))+k[15]+4264355552&4294967295,x=T+(A<<10&4294967295|A>>>22),A=D+(T^(x|~S))+k[6]+2734768916&4294967295,D=x+(A<<15&4294967295|A>>>17),A=S+(x^(D|~T))+k[13]+1309151649&4294967295,S=D+(A<<21&4294967295|A>>>11),A=T+(D^(S|~x))+k[4]+4149444226&4294967295,T=S+(A<<6&4294967295|A>>>26),A=x+(S^(T|~D))+k[11]+3174756917&4294967295,x=T+(A<<10&4294967295|A>>>22),A=D+(T^(x|~S))+k[2]+718787259&4294967295,D=x+(A<<15&4294967295|A>>>17),A=S+(x^(D|~T))+k[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+x&4294967295}s.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var S=T-this.blockSize,k=this.B,D=this.h,x=0;x<T;){if(D==0)for(;x<=S;)o(this,P,x),x+=this.blockSize;if(typeof P=="string"){for(;x<T;)if(k[D++]=P.charCodeAt(x++),D==this.blockSize){o(this,k),D=0;break}}else for(;x<T;)if(k[D++]=P[x++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var S=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=S&255,S/=256;for(this.u(P),P=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)P[S++]=this.g[T]>>>k&255;return P};function u(P,T){var S=f;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=T(P)}function h(P,T){this.h=T;for(var S=[],k=!0,D=P.length-1;0<=D;D--){var x=P[D]|0;k&&x==T||(S[D]=x,k=!1)}this.g=S}var f={};function g(P){return-128<=P&&128>P?u(P,function(T){return new h([T|0],0>T?-1:0)}):new h([P|0],0>P?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return R;if(0>P)return j(_(-P));for(var T=[],S=1,k=0;P>=S;k++)T[k]=P/S|0,S*=4294967296;return new h(T,0)}function E(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return j(E(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(T,8)),k=R,D=0;D<P.length;D+=8){var x=Math.min(8,P.length-D),A=parseInt(P.substring(D,D+x),T);8>x?(x=_(Math.pow(T,x)),k=k.j(x).add(_(A))):(k=k.j(S),k=k.add(_(A)))}return k}var R=g(0),O=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-j(this).m();for(var P=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);P+=(0<=k?k:4294967296+k)*T,T*=4294967296}return P},r.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(H(this))return"0";if(Y(this))return"-"+j(this).toString(P);for(var T=_(Math.pow(P,6)),S=this,k="";;){var D=te(S,T).g;S=he(S,D.j(T));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=D,H(S))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},r.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function H(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function Y(P){return P.h==-1}r.l=function(P){return P=he(this,P),Y(P)?-1:H(P)?0:1};function j(P){for(var T=P.g.length,S=[],k=0;k<T;k++)S[k]=~P.g[k];return new h(S,~P.h).add(O)}r.abs=function(){return Y(this)?j(this):this},r.add=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0,D=0;D<=T;D++){var x=k+(this.i(D)&65535)+(P.i(D)&65535),A=(x>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);k=A>>>16,x&=65535,A&=65535,S[D]=A<<16|x}return new h(S,S[S.length-1]&-2147483648?-1:0)};function he(P,T){return P.add(j(T))}r.j=function(P){if(H(this)||H(P))return R;if(Y(this))return Y(P)?j(this).j(j(P)):j(j(this).j(P));if(Y(P))return j(this.j(j(P)));if(0>this.l(z)&&0>P.l(z))return _(this.m()*P.m());for(var T=this.g.length+P.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<P.g.length;D++){var x=this.i(k)>>>16,A=this.i(k)&65535,Ze=P.i(D)>>>16,Pt=P.i(D)&65535;S[2*k+2*D]+=A*Pt,le(S,2*k+2*D),S[2*k+2*D+1]+=x*Pt,le(S,2*k+2*D+1),S[2*k+2*D+1]+=A*Ze,le(S,2*k+2*D+1),S[2*k+2*D+2]+=x*Ze,le(S,2*k+2*D+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function le(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function Z(P,T){this.g=P,this.h=T}function te(P,T){if(H(T))throw Error("division by zero");if(H(P))return new Z(R,R);if(Y(P))return T=te(j(P),T),new Z(j(T.g),j(T.h));if(Y(T))return T=te(P,j(T)),new Z(j(T.g),T.h);if(30<P.g.length){if(Y(P)||Y(T))throw Error("slowDivide_ only works with positive integers.");for(var S=O,k=T;0>=k.l(P);)S=me(S),k=me(k);var D=oe(S,1),x=oe(k,1);for(k=oe(k,2),S=oe(S,2);!H(k);){var A=x.add(k);0>=A.l(P)&&(D=D.add(S),x=A),k=oe(k,1),S=oe(S,1)}return T=he(P,D.j(T)),new Z(D,T)}for(D=R;0<=P.l(T);){for(S=Math.max(1,Math.floor(P.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=_(S),A=x.j(T);Y(A)||0<A.l(P);)S-=k,x=_(S),A=x.j(T);H(x)&&(x=O),D=D.add(x),P=he(P,A)}return new Z(D,P)}r.A=function(P){return te(this,P).h},r.and=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&P.i(k);return new h(S,this.h&P.h)},r.or=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|P.i(k);return new h(S,this.h|P.h)},r.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^P.i(k);return new h(S,this.h^P.h)};function me(P){for(var T=P.g.length+1,S=[],k=0;k<T;k++)S[k]=P.i(k)<<1|P.i(k-1)>>>31;return new h(S,P.h)}function oe(P,T){var S=T>>5;T%=32;for(var k=P.g.length-S,D=[],x=0;x<k;x++)D[x]=0<T?P.i(x+S)>>>T|P.i(x+S+1)<<32-T:P.i(x+S);return new h(D,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,K_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,di=h}).apply(typeof Yg<"u"?Yg:typeof self<"u"?self:typeof window<"u"?window:{});var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G_,Ra,Q_,Cl,Md,Y_,X_,J_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,y){return l==Array.prototype||l==Object.prototype||(l[p]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yl=="object"&&yl];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in y))break e;y=y[L]}l=l[l.length-1],w=y[l],p=p(w),p!=w&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}function u(l,p){l instanceof String&&(l+="");var y=0,w=!1,L={next:function(){if(!w&&y<l.length){var U=y++;return{value:p(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function _(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function E(l,p,y){return l.call.apply(l.bind,arguments)}function R(l,p,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(p,L)}}return function(){return l.apply(p,arguments)}}function O(l,p,y){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,O.apply(null,arguments)}function z(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function H(l,p){function y(){}y.prototype=p.prototype,l.aa=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,L,U){for(var X=Array(arguments.length-2),be=2;be<arguments.length;be++)X[be-2]=arguments[be];return p.prototype[L].apply(w,X)}}function Y(l){const p=l.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=l[w];return y}return[]}function j(l,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=l.length||0,U=w.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=w[X]}else l.push(w)}}class he{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function le(l){return/^[\s\xa0]*$/.test(l)}function Z(){var l=f.navigator;return l&&(l=l.userAgent)?l:""}function te(l){return te[" "](l),l}te[" "]=function(){};var me=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function oe(l,p,y){for(const w in l)p.call(y,l[w],w,l)}function P(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function T(l){const p={};for(const y in l)p[y]=l[y];return p}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)l[y]=w[y];for(let U=0;U<S.length;U++)y=S[U],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function D(l){var p=1;l=l.split(":");const y=[];for(;0<p&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function x(l){f.setTimeout(()=>{throw l},0)}function A(){var l=fe;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class Ze{constructor(){this.h=this.g=null}add(p,y){const w=Pt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Pt=new he(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,J=!1,fe=new Ze,ne=()=>{const l=f.Promise.resolve(void 0);Fe=()=>{l.then(V)}};var V=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){x(y)}var p=Pt;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return l}();function Ie(l,p){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(me){e:{try{te(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}H(Ie,de);var Ce={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function ze(l,p,y,w,L){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Me,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,p,y,w,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Nr(l,p,w,L);return-1<X?(p=l[X],y||(p.fa=!1)):(p=new ze(p,this.src,U,!!w,L),p.fa=y,l.push(p)),p};function as(l,p){var y=p.type;if(y in l.g){var w=l.g[y],L=Array.prototype.indexOf.call(w,p,void 0),U;(U=0<=L)&&Array.prototype.splice.call(w,L,1),U&&(pt(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Nr(l,p,y,w){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==p&&U.capture==!!y&&U.ha==w)return L}return-1}var wi="closure_lm_"+(1e6*Math.random()|0),us={};function Po(l,p,y,w,L){if(Array.isArray(p)){for(var U=0;U<p.length;U++)Po(l,p[U],y,w,L);return null}return y=Do(y),l&&l[Le]?l.K(p,y,_(w)?!!w.capture:!1,L):ko(l,p,y,!1,w,L)}function ko(l,p,y,w,L,U){if(!p)throw Error("Invalid event type");var X=_(L)?!!L.capture:!!L,be=cs(l);if(be||(l[wi]=be=new nr(l)),y=be.add(p,y,w,X,U),y.proxy)return y;if(w=Za(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Te||(L=X),L===void 0&&(L=!1),l.addEventListener(p.toString(),w,L);else if(l.attachEvent)l.attachEvent(ir(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Za(){function l(y){return p.call(l.src,l.listener,y)}const p=No;return l}function ls(l,p,y,w,L){if(Array.isArray(p))for(var U=0;U<p.length;U++)ls(l,p[U],y,w,L);else w=_(w)?!!w.capture:!!w,y=Do(y),l&&l[Le]?(l=l.i,p=String(p).toString(),p in l.g&&(U=l.g[p],y=Nr(U,y,w,L),-1<y&&(pt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[p],l.h--)))):l&&(l=cs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Nr(p,y,w,L)),(y=-1<l?p[l]:null)&&rr(y))}function rr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Le])as(p.i,l);else{var y=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(y,w,l.capture):p.detachEvent?p.detachEvent(ir(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=cs(p))?(as(y,l),y.h==0&&(y.src=null,p[wi]=null)):pt(l)}}}function ir(l){return l in us?us[l]:us[l]="on"+l}function No(l,p){if(l.da)l=!0;else{p=new Ie(p,this);var y=l.listener,w=l.ha||l.src;l.fa&&rr(l),l=y.call(w,p)}return l}function cs(l){return l=l[wi],l instanceof nr?l:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(l){return typeof l=="function"?l:(l[hs]||(l[hs]=function(p){return l.handleEvent(p)}),l[hs])}function ut(){B.call(this),this.i=new nr(this),this.M=this,this.F=null}H(ut,B),ut.prototype[Le]=!0,ut.prototype.removeEventListener=function(l,p,y,w){ls(this,l,p,y,w)};function lt(l,p){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new de(p,l);else if(p instanceof de)p.target=p.target||l;else{var L=p;p=new de(w,l),k(p,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var X=p.g=y[U];L=sr(X,w,!0,p)&&L}if(X=p.g=l,L=sr(X,w,!0,p)&&L,L=sr(X,w,!1,p)&&L,y)for(U=0;U<y.length;U++)X=p.g=y[U],L=sr(X,w,!1,p)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var y=l.g[p],w=0;w<y.length;w++)pt(y[w]);delete l.g[p],l.h--}}this.F=null},ut.prototype.K=function(l,p,y,w){return this.i.add(String(l),p,!1,y,w)},ut.prototype.L=function(l,p,y,w){return this.i.add(String(l),p,!0,y,w)};function sr(l,p,y,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,U=0;U<p.length;++U){var X=p[U];if(X&&!X.da&&X.capture==y){var be=X.listener,ct=X.ha||X.src;X.fa&&as(l.i,X),L=be.call(ct,w)!==!1&&L}}return L&&!w.defaultPrevented}function Oo(l,p,y){if(typeof l=="function")y&&(l=O(l,y));else if(l&&typeof l.handleEvent=="function")l=O(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(l,p||0)}function Dr(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,Dr(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Ti extends B{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Dr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(l){B.call(this),this.h=l,this.g={}}H(Ii,B);var Vo=[];function xo(l){oe(l.g,function(p,y){this.g.hasOwnProperty(y)&&rr(p)},l),l.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),xo(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lo=f.JSON.stringify,Mo=f.JSON.parse,bo=class{stringify(l){return f.JSON.stringify(l,void 0)}parse(l){return f.JSON.parse(l,void 0)}};function Si(){}Si.prototype.h=null;function ds(l){return l.h||(l.h=l.i())}function fs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){de.call(this,"d")}H(Un,de);function ps(){de.call(this,"c")}H(ps,de);var zn={},Fo=null;function Ai(){return Fo=Fo||new ut}zn.La="serverreachability";function Uo(l){de.call(this,zn.La,l)}H(Uo,de);function or(l){const p=Ai();lt(p,new Uo(p))}zn.STAT_EVENT="statevent";function zo(l,p){de.call(this,zn.STAT_EVENT,l),this.stat=p}H(zo,de);function et(l){const p=Ai();lt(p,new zo(p,l))}zn.Ma="timingevent";function ms(l,p){de.call(this,zn.Ma,l),this.size=p}H(ms,de);function wn(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){l()},p)}function Ri(){this.g=!0}Ri.prototype.xa=function(){this.g=!1};function Ci(l,p,y,w,L,U){l.info(function(){if(l.g)if(U)for(var X="",be=U.split("&"),ct=0;ct<be.length;ct++){var Pe=be[ct].split("=");if(1<Pe.length){var mt=Pe[0];Pe=Pe[1];var it=mt.split("_");X=2<=it.length&&it[1]=="type"?X+(mt+"="+Pe+"&"):X+(mt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+X})}function gs(l,p,y,w,L,U,X){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+U+" "+X})}function Tn(l,p,y,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ic(l,y)+(w?" "+w:"")})}function jo(l,p){l.info(function(){return"TIMEOUT: "+p})}Ri.prototype.info=function(){};function Ic(l,p){if(!l.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return Lo(y)}catch{return p}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Pi(){}H(Pi,Si),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},In=new Pi;function Sn(l,p,y,w){this.j=l,this.i=p,this.l=y,this.R=w||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var Bo={},_s={};function vs(l,p,y){l.L=1,l.v=Mr(tn(p)),l.m=y,l.P=!0,$o(l,null)}function $o(l,p){l.F=Date.now(),je(l),l.A=tn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Fr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new tu,l.g=vu(l.j,y?p:null,!l.m),0<l.O&&(l.M=new Ti(O(l.Y,l,l.g),l.O)),p=l.U,y=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Vo[0]=L.toString()),L=Vo);for(var U=0;U<L.length;U++){var X=Po(y,L[U],w||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),or(),Ci(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const p=this.M;p&&Ht(l)==3?p.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var p=this.g.Ba();const fn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||it!=4||p==7||(p==8||0>=fn?or(3):or(2)),ki(this);var y=this.g.Z();this.X=y;t:if(nu(this)){var w=Qo(this.g);l="";var L=w.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Or(this);var X="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,l+=this.h.i.decode(w[p],{stream:!(U&&p==L-1)});w.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,gs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ct=this.g;if((be=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(be)){var Pe=be;break t}}Pe=null}if(y=Pe)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qo(this,y);else{this.o=!1,this.s=3,et(12),hn(this),Or(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<X.length;)if(rn=Sc(this,X),rn==_s){it==4&&(this.s=4,et(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bo){this.s=4,et(15),Tn(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,rn,null),qo(this,rn);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,et(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,X,"[Invalid Chunked Response]"),hn(this),Or(this);else if(0<X.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Xo(mt),mt.M=!0,et(11))}}else Tn(this.i,this.l,X,null),qo(this,X);it==4&&hn(this),this.o&&!this.J&&(it==4?Ns(this.j,this):(this.o=!1,je(this)))}else As(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),hn(this),Or(this)}}}catch{}finally{}};function nu(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Sc(l,p){var y=l.C,w=p.indexOf(`
`,y);return w==-1?_s:(y=Number(p.substring(y,w)),isNaN(y)?Bo:(w+=1,w+y>p.length?_s:(p=p.slice(w,w+y),l.C=w+y,p)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function je(l){l.S=Date.now()+l.I,ru(l,l.I)}function ru(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(O(l.ba,l),p)}function ki(l){l.B&&(f.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(jo(this.i,this.A),this.L!=2&&(or(),et(17)),hn(this),this.s=2,Or(this)):ru(this,this.S-l)};function Or(l){l.j.G==0||l.J||Ns(l.j,l)}function hn(l){ki(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,xo(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function qo(l,p){try{var y=l.j;if(y.G!=0&&(y.g==l||zt(y.h,l))){if(!l.K&&zt(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)ks(y),kn(y);else break e;Ps(y),et(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(O(y.Za,y),6e3));if(1>=su(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else hr(y,11)}else if((l.K||y.g==l)&&ks(y),!le(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let Pe=L[p];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const mt=Pe[3];mt!=null&&(y.la=mt,y.j.info("VER="+y.la));const it=Pe[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const fn=Pe[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const rn=l.g;if(rn){const Mi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var U=w.h;U.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ho(U,U.h),U.h=null))}if(w.D){const Os=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Os&&(w.ya=Os,Ue(w.I,w.D,Os))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var X=l;if(w.qa=_u(w,w.J?w.ia:null,w.W),X.K){ou(w.h,X);var be=X,ct=w.L;ct&&(be.I=ct),be.B&&(ki(be),je(be)),w.g=X}else Li(w);0<y.i.length&&qn(y)}else Pe[0]!="stop"&&Pe[0]!="close"||hr(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?hr(y,7):Tt(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}or(4)}catch{}}var iu=class{constructor(l,p){this.g=l,this.map=p}};function Ni(l){this.l=l||10,f.PerformanceNavigationTiming?(l=f.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function su(l){return l.h?1:l.g?l.g.size:0}function zt(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ho(l,p){l.g?l.g.add(p):l.h=p}function ou(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ni.prototype.cancel=function(){if(this.i=au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function au(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.D);return p}return Y(l.i)}function Es(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var p=[],y=l.length,w=0;w<y;w++)p.push(l[w]);return p}p=[],y=0;for(w in l)p[y++]=l[w];return p}function ws(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var p=[];l=l.length;for(var y=0;y<l;y++)p.push(y);return p}p=[],y=0;for(const w in l)p[y++]=w;return p}}}function Vr(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var y=ws(l),w=Es(l),L=w.length,U=0;U<L;U++)p.call(void 0,w[U],y&&y[U],l)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(l,p){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),L=null;if(0<=w){var U=l[y].substring(0,w);L=l[y].substring(w+1)}else U=l[y];p(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var p=l.i,y=new jn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Lr(this,y),this.m=l.m}else l&&(p=String(l).match(Di))?(this.h=!1,Oi(this,p[1]||"",!0),this.o=Re(p[2]||""),this.g=Re(p[3]||"",!0),xr(this,p[4]),this.l=Re(p[5]||"",!0),Lr(this,p[6]||"",!0),this.m=Re(p[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}ar.prototype.toString=function(){var l=[],p=this.j;p&&l.push(br(p,Ts,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push(br(p,Ts,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(br(y,y.charAt(0)=="/"?cu:lu,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",br(y,Wo)),l.join("")};function tn(l){return new ar(l)}function Oi(l,p,y){l.j=y?Re(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Lr(l,p,y){p instanceof jn?(l.i=p,Bn(l.i,l.h)):(y||(p=br(p,hu)),l.i=new jn(p,l.h))}function Ue(l,p,y){l.i.set(p,y)}function Mr(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Re(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function br(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,uu),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function uu(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ts=/[#\/\?@]/g,lu=/[#\?:]/g,cu=/[#\?]/g,hu=/[#\?@]/g,Wo=/#/g;function jn(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ac(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=jn.prototype,r.add=function(l,p){wt(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function An(l,p){wt(l),p=dn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rn(l,p){return wt(l),p=dn(l,p),l.g.has(p)}r.forEach=function(l,p){wt(this),this.g.forEach(function(y,w){y.forEach(function(L){l.call(p,L,w,this)},this)},this)},r.na=function(){wt(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=l[w];for(let U=0;U<L.length;U++)y.push(p[w])}return y},r.V=function(l){wt(this);let p=[];if(typeof l=="string")Rn(this,l)&&(p=p.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)p=p.concat(l[y])}return p},r.set=function(l,p){return wt(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Fr(l,p,y){An(l,p),0<y.length&&(l.i=null,l.g.set(dn(l,p),Y(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const U=encodeURIComponent(String(w)),X=this.V(w);for(w=0;w<X.length;w++){var L=U;X[w]!==""&&(L+="="+encodeURIComponent(String(X[w]))),l.push(L)}}return this.i=l.join("&")};function dn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Bn(l,p){p&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(An(this,w),Fr(this,L,y))},l)),l.j=p}function Rc(l,p){const y=new Ri;if(f.Image){const w=new Image;w.onload=z(qt,y,"TestLoadImage: loaded",!0,p,w),w.onerror=z(qt,y,"TestLoadImage: error",!1,p,w),w.onabort=z(qt,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=z(qt,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function du(l,p){const y=new Ri,w=new AbortController,L=setTimeout(()=>{w.abort(),qt(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?qt(y,"TestPingServer: ok",!0,p):qt(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,p)})}function qt(l,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Cc(){this.g=new bo}function fu(l,p,y){const w=y||"";try{Vr(l,function(L,U){let X=L;_(L)&&(X=Lo(L)),p.push(w+U+"="+encodeURIComponent(X))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function ur(l){this.l=l.Ub||null,this.j=l.eb||!1}H(ur,Si),ur.prototype.g=function(){return new Vi(this.l,this.j)},ur.prototype.i=function(l){return function(){return l}}({});function Vi(l,p){ut.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Vi,ut),r=Vi.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Pn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pu(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function pu(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Cn(this):Pn(this),this.readyState==3&&pu(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},r.Qa=function(l){this.g&&(this.response=l,Cn(this))},r.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}r.setRequestHeader=function(l,p){this.u.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function lr(l){let p="";return oe(l,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Ur(l,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=lr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Ue(l,p,y))}function We(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(We,ut);var Pc=/^https?$/i,Ko=["POST","PUT"];r=We.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?ds(this.o):ds(In),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){xi(this,U);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())y.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=f.FormData&&l instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ko,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){xi(this,U)}};function xi(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,Is(l),nn(l)}function Is(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),We.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Go(this):this.bb())},r.bb=function(){Go(this)};function Go(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Oo(l.Ea,0,l);else if(lt(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=X===0){var L=String(l.D).match(Di)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!Pc.test(L?L.toLowerCase():"")}y=w}if(y)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Is(l)}}finally{nn(l)}}}}function nn(l,p){if(l.g){Ss(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||lt(l,"ready");try{y.onreadystatechange=w}catch{}}}function Ss(l){l.I&&(f.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Mo(p)}};function Qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const p={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(le(l[w]))continue;var y=D(l[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=p[L]||[];p[L]=U,U.push(y)}P(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Yo(l){this.Aa=0,this.i=[],this.j=new Ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(l&&l.concurrentRequestLimit),this.Da=new Cc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Yo.prototype,r.la=8,r.G=1,r.connect=function(l,p,y,w){et(0),this.W=l,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=_u(this,null,this.W),qn(this)};function Tt(l){if(Rs(l),l.G==3){var p=l.U++,y=tn(l.I);if(Ue(y,"SID",l.K),Ue(y,"RID",p),Ue(y,"TYPE","terminate"),cr(l,y),p=new Sn(l,l.j,p),p.L=2,p.v=Mr(tn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=vu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),je(p)}yu(l)}function kn(l){l.g&&(Xo(l),l.g.cancel(),l.g=null)}function Rs(l){kn(l),l.u&&(f.clearTimeout(l.u),l.u=null),ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&f.clearTimeout(l.s),l.s=null)}function qn(l){if(!en(l.h)&&!l.s){l.s=!0;var p=l.Ga;Fe||ne(),J||(Fe(),J=!0),fe.add(p,l),l.B=0}}function kc(l,p){return su(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(O(l.Ga,l,p),gu(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=zr(this,L,p),y=tn(this.I),Ue(y,"RID",l),Ue(y,"CVER",22),this.D&&Ue(y,"X-HTTP-Session-Id",this.D),cr(this,y),U&&(this.O?p="headers="+encodeURIComponent(String(lr(U)))+"&"+p:this.m&&Ur(y,this.m,U)),Ho(this.h,L),this.Ua&&Ue(y,"TYPE","init"),this.P?(Ue(y,"$req",p),Ue(y,"SID","null"),L.T=!0,vs(L,y,null)):vs(L,y,p),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||en(this.h)||Cs(this))};function Cs(l,p){var y;p?y=p.l:y=l.U++;const w=tn(l.I);Ue(w,"SID",l.K),Ue(w,"RID",y),Ue(w,"AID",l.T),cr(l,w),l.m&&l.o&&Ur(w,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),p&&(l.i=p.D.concat(l.i)),p=zr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ho(l.h,y),vs(y,w,p)}function cr(l,p){l.H&&oe(l.H,function(y,w){Ue(p,w,y)}),l.l&&Vr({},function(y,w){Ue(p,w,y)})}function zr(l,p,y){y=Math.min(l.i.length,y);var w=l.l?O(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+y];U==-1?0<y?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let be=!0;for(let ct=0;ct<y;ct++){let Pe=L[ct].g;const mt=L[ct].map;if(Pe-=U,0>Pe)U=Math.max(0,L[ct].g-100),be=!1;else try{fu(mt,X,"req"+Pe+"_")}catch{w&&w(mt)}}if(be){w=X.join("&");break e}}}return l=l.i.splice(0,y),p.D=l,w}function Li(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;Fe||ne(),J||(Fe(),J=!0),fe.add(p,l),l.v=0}}function Ps(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(O(l.Fa,l),gu(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(O(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),kn(this),mu(this))};function Xo(l){l.A!=null&&(f.clearTimeout(l.A),l.A=null)}function mu(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=tn(l.qa);Ue(p,"RID","rpc"),Ue(p,"SID",l.K),Ue(p,"AID",l.T),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(p,"TO",l.ja),Ue(p,"TYPE","xmlhttp"),cr(l,p),l.m&&l.o&&Ur(p,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Mr(tn(p)),y.m=null,y.P=!0,$o(y,l)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Ps(this),et(19))};function ks(l){l.C!=null&&(f.clearTimeout(l.C),l.C=null)}function Ns(l,p){var y=null;if(l.g==p){ks(l),Xo(l),l.g=null;var w=2}else if(zt(l.h,p))y=p.D,ou(l.h,p),w=1;else return;if(l.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=l.B;w=Ai(),lt(w,new ms(w,y)),qn(l)}else Li(l);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&kc(l,p)||w==2&&Ps(l)))switch(y&&0<y.length&&(p=l.h,p.i=p.i.concat(y)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function gu(l,p){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*p}function hr(l,p){if(l.j.info("Error code "+p),p==2){var y=O(l.fb,l),w=l.Xa;const L=!w;w=new ar(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Oi(w,"https"),Mr(w),L?Rc(w.toString(),y):du(w.toString(),y)}else et(2);l.G=0,l.l&&l.l.sa(p),yu(l),Rs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function yu(l){if(l.G=0,l.ka=[],l.l){const p=au(l.h);(p.length!=0||l.i.length!=0)&&(j(l.ka,p),j(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function _u(l,p,y){var w=y instanceof ar?tn(y):new ar(y);if(w.g!="")p&&(w.g=p+"."+w.g),xr(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var U=new ar(null);w&&Oi(U,w),p&&(U.g=p),L&&xr(U,L),y&&(U.l=y),w=U}return y=l.D,p=l.ya,y&&p&&Ue(w,y,p),Ue(w,"VER",l.la),cr(l,w),w}function vu(l,p,y){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new We(new ur({eb:y})):new We(l.pa),p.Ha(l.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}r=Jo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ds(){}Ds.prototype.g=function(l,p){return new jt(l,p)};function jt(l,p){ut.call(this),this.g=new Yo(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!le(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!le(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Hn(this)}H(jt,ut),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Tt(this.g)},jt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Lo(l),l=y);p.i.push(new iu(p.Ya++,l)),p.G==3&&qn(p)},jt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,jt.aa.N.call(this)};function Eu(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}H(Eu,Un);function wu(){ps.call(this),this.status=1}H(wu,ps);function Hn(l){this.g=l}H(Hn,Jo),Hn.prototype.ua=function(){lt(this.g,"a")},Hn.prototype.ta=function(l){lt(this.g,new Eu(l))},Hn.prototype.sa=function(l){lt(this.g,new wu)},Hn.prototype.ra=function(){lt(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,J_=function(){return new Ds},X_=function(){return Ai()},Y_=zn,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,Cl=ys,eu.COMPLETE="complete",Q_=eu,fs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ra=fs,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,G_=We}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});const Xg="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let Io="11.2.0";/**
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
 */const is=new of("@firebase/firestore");function Zs(){return is.logLevel}function re(r,...e){if(is.logLevel<=Ae.DEBUG){const t=e.map(_f);is.debug(`Firestore (${Io}): ${r}`,...t)}}function Pr(r,...e){if(is.logLevel<=Ae.ERROR){const t=e.map(_f);is.error(`Firestore (${Io}): ${r}`,...t)}}function fo(r,...e){if(is.logLevel<=Ae.WARN){const t=e.map(_f);is.warn(`Firestore (${Io}): ${r}`,...t)}}function _f(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function we(r="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+r;throw Pr(e),new Error(e)}function Xe(r,e){r||we()}function De(r,e){return r}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ji{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Z_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class CA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ji,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ji)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new Z_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Lt(e)}}class kA{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class NA{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new kA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Xe(this.o===void 0);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new DA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function VA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class ev{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=VA(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Ne(r,e){return r<e?-1:r>e?1:0}function po(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Et(0,0))}static max(){return new Ee(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(),s===void 0?s=e.length-t:s>e.length-t&&we(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class He extends Yn{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new He(t)}static emptyPath(){return new He([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Yn{construct(e,t,s){return new bt(e,t,s)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ue(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(u(),o++)}if(u(),h)throw new ue(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(He.fromString(e))}static fromName(e){return new pe(He.fromString(e).popFirst(5))}static empty(){return new pe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new He(e.slice()))}}function LA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Et(t+1,0):new Et(t,s));return new mi(o,pe.empty(),e)}function MA(r){return new mi(r.readTime,r.key,-1)}class mi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new mi(Ee.min(),pe.empty(),-1)}static max(){return new mi(Ee.max(),pe.empty(),-1)}}function bA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const FA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lc(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==FA)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(E=>{h[_]=E,++f,f===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function zA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cc.oe=-1;function hc(r){return r==null}function Wl(r){return r===0&&1/r==-1/0}function jA(r){return typeof r=="number"&&Number.isInteger(r)&&!Wl(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function BA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Jg(e)),e=$A(r.get(t),e);return Jg(e)}function $A(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Jg(r){return r+""}/**
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
 */function Zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ao(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function tv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _l(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _l(this.root,e,this.comparator,!1)}getReverseIterator(){return new _l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _l(this.root,e,this.comparator,!0)}}class _l{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ft(this.comparator);return t.data=e,t}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class oi{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new oi([])}unionWith(e){let t=new ft(bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new oi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class nv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new nv("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const qA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(r){if(Xe(!!r),typeof r=="string"){let e=0;const t=qA.exec(r);if(Xe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yi(r){return typeof r=="string"?Ct.fromBase64String(r):Ct.fromUint8Array(r)}/**
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
 */function vf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function dc(r){const e=r.mapValue.fields.__previous_value__;return vf(e)?dc(e):e}function ja(r){const e=gi(r.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class HA{constructor(e,t,s,o,u,h,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class Ba{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vl={mapValue:{}};function _i(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?vf(r)?4:KA(r)?9007199254740991:WA(r)?10:11:we()}function tr(r,e){if(r===e)return!0;const t=_i(r);if(t!==_i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ja(r).isEqual(ja(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=gi(o.timestampValue),f=gi(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return yi(o.bytesValue).isEqual(yi(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return nt(o.geoPointValue.latitude)===nt(u.geoPointValue.latitude)&&nt(o.geoPointValue.longitude)===nt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return nt(o.integerValue)===nt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=nt(o.doubleValue),f=nt(u.doubleValue);return h===f?Wl(h)===Wl(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return po(r.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(Zg(h)!==Zg(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!tr(h[g],f[g])))return!1;return!0}(r,e);default:return we()}}function $a(r,e){return(r.values||[]).find(t=>tr(t,e))!==void 0}function mo(r,e){if(r===e)return 0;const t=_i(r),s=_i(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return function(u,h){const f=nt(u.integerValue||u.doubleValue),g=nt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return ty(r.timestampValue,e.timestampValue);case 4:return ty(ja(r),ja(e));case 5:return Ne(r.stringValue,e.stringValue);case 6:return function(u,h){const f=yi(u),g=yi(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const f=u.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Ne(f[_],g[_]);if(E!==0)return E}return Ne(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const f=Ne(nt(u.latitude),nt(h.latitude));return f!==0?f:Ne(nt(u.longitude),nt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ny(r.arrayValue,e.arrayValue);case 10:return function(u,h){var f,g,_,E;const R=u.fields||{},O=h.fields||{},z=(f=R.value)===null||f===void 0?void 0:f.arrayValue,H=(g=O.value)===null||g===void 0?void 0:g.arrayValue,Y=Ne(((_=z==null?void 0:z.values)===null||_===void 0?void 0:_.length)||0,((E=H==null?void 0:H.values)===null||E===void 0?void 0:E.length)||0);return Y!==0?Y:ny(z,H)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===vl.mapValue&&h===vl.mapValue)return 0;if(u===vl.mapValue)return 1;if(h===vl.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let R=0;R<g.length&&R<E.length;++R){const O=Ne(g[R],E[R]);if(O!==0)return O;const z=mo(f[g[R]],_[E[R]]);if(z!==0)return z}return Ne(g.length,E.length)}(r.mapValue,e.mapValue);default:throw we()}}function ty(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=gi(r),s=gi(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function ny(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return Ne(t.length,s.length)}function go(r){return bd(r)}function bd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=gi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return pe.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=bd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${bd(t.fields[h])}`;return o+"}"}(r.mapValue):we()}function Pl(r){switch(_i(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dc(r);return e?16+Pl(e):16;case 5:return 2*r.stringValue.length;case 6:return yi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Pl(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ao(s.fields,(u,h)=>{o+=u.length+Pl(h)}),o}(r.mapValue);default:throw we()}}function ry(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Fd(r){return!!r&&"integerValue"in r}function Ef(r){return!!r&&"arrayValue"in r}function iy(r){return!!r&&"nullValue"in r}function sy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gd(r){return!!r&&"mapValue"in r}function WA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Da(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ao(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Da(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(r.arrayValue.values[t]);return e}return Object.assign({},r)}function KA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!gd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=bt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Da(h):o.push(f.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());gd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];gd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ao(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Xn(Da(this.value))}}/**
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
 */class Mt{constructor(e,t,s,o,u,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Mt(e,0,Ee.min(),Ee.min(),Ee.min(),Xn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,Ee.min(),Ee.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,Ee.min(),Ee.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kl{constructor(e,t){this.position=e,this.inclusive=t}}function oy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ay(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!tr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gl{constructor(e,t="asc"){this.field=e,this.dir=t}}function GA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class rv{}class at extends rv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YA(e,t,s):t==="array-contains"?new ZA(e,s):t==="in"?new eR(e,s):t==="not-in"?new tR(e,s):t==="array-contains-any"?new nR(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new XA(e,s):new JA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(mo(t,this.value)):t!==null&&_i(this.value)===_i(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends rv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Fn(e,t)}matches(e){return iv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function iv(r){return r.op==="and"}function sv(r){return QA(r)&&iv(r)}function QA(r){for(const e of r.filters)if(e instanceof Fn)return!1;return!0}function Ud(r){if(r instanceof at)return r.field.canonicalString()+r.op.toString()+go(r.value);if(sv(r))return r.filters.map(e=>Ud(e)).join(",");{const e=r.filters.map(t=>Ud(t)).join(",");return`${r.op}(${e})`}}function ov(r,e){return r instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)}(r,e):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,f)=>u&&ov(h,o.filters[f]),!0):!1}(r,e):void we()}function av(r){return r instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`}(r):r instanceof Fn?function(t){return t.op.toString()+" {"+t.getFilters().map(av).join(" ,")+"}"}(r):"Filter"}class YA extends at{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class XA extends at{constructor(e,t){super(e,"in",t),this.keys=uv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class JA extends at{constructor(e,t){super(e,"not-in",t),this.keys=uv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>pe.fromName(s.referenceValue))}class ZA extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ef(t)&&$a(t.arrayValue,this.value)}}class eR extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$a(this.value.arrayValue,t)}}class tR extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$a(this.value.arrayValue,t)}}class nR extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>$a(this.value.arrayValue,s))}}/**
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
 */class rR{constructor(e,t=null,s=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.ue=null}}function uy(r,e=null,t=[],s=[],o=null,u=null,h=null){return new rR(r,e,t,s,o,u,h)}function wf(r){const e=De(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ud(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>go(s)).join(",")),e.ue=t}return e.ue}function Tf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!GA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ay(r.startAt,e.startAt)&&ay(r.endAt,e.endAt)}function zd(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Qa{constructor(e,t=null,s=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iR(r,e,t,s,o,u,h,f){return new Qa(r,e,t,s,o,u,h,f)}function lv(r){return new Qa(r)}function ly(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function cv(r){return r.collectionGroup!==null}function Oa(r){const e=De(r);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new ft(bt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Gl(u,s))}),t.has(bt.keyField().canonicalString())||e.ce.push(new Gl(bt.keyField(),s))}return e.ce}function er(r){const e=De(r);return e.le||(e.le=sR(e,Oa(r))),e.le}function sR(r,e){if(r.limitType==="F")return uy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Gl(o.field,u)});const t=r.endAt?new Kl(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Kl(r.startAt.position,r.startAt.inclusive):null;return uy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function jd(r,e){const t=r.filters.concat([e]);return new Qa(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Bd(r,e,t){return new Qa(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function fc(r,e){return Tf(er(r),er(e))&&r.limitType===e.limitType}function hv(r){return`${wf(er(r))}|lt:${r.limitType}`}function eo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>av(o)).join(", ")}]`),hc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>go(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>go(o)).join(",")),`Target(${s})`}(er(r))}; limitType=${r.limitType})`}function pc(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const _=oy(h,f,g);return h.inclusive?_<=0:_<0}(s.startAt,Oa(s),o)||s.endAt&&!function(h,f,g){const _=oy(h,f,g);return h.inclusive?_>=0:_>0}(s.endAt,Oa(s),o))}(r,e)}function oR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function dv(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const u=aR(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function aR(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):function(u,h,f){const g=h.data.field(u),_=f.data.field(u);return g!==null&&_!==null?mo(g,_):we()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we()}}/**
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
 */class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ao(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return tv(this.inner)}size(){return this.innerSize}}/**
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
 */const uR=new rt(pe.comparator);function vi(){return uR}const fv=new rt(pe.comparator);function Ca(...r){let e=fv;for(const t of r)e=e.insert(t.key,t);return e}function lR(r){let e=fv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xi(){return Va()}function pv(){return Va()}function Va(){return new os(r=>r.toString(),(r,e)=>r.isEqual(e))}const cR=new ft(pe.comparator);function Ve(...r){let e=cR;for(const t of r)e=e.add(t);return e}const hR=new ft(Ne);function dR(){return hR}/**
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
 */function If(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function mv(r){return{integerValue:""+r}}function fR(r,e){return jA(e)?mv(e):If(r,e)}/**
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
 */class mc{constructor(){this._=void 0}}function pR(r,e,t){return r instanceof $d?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&vf(u)&&(u=dc(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):r instanceof Ql?gv(r,e):r instanceof Yl?yv(r,e):function(o,u){const h=gR(o,u),f=cy(h)+cy(o.Pe);return Fd(h)&&Fd(o.Pe)?mv(f):If(o.serializer,f)}(r,e)}function mR(r,e,t){return r instanceof Ql?gv(r,e):r instanceof Yl?yv(r,e):t}function gR(r,e){return r instanceof qd?function(s){return Fd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class $d extends mc{}class Ql extends mc{constructor(e){super(),this.elements=e}}function gv(r,e){const t=_v(e);for(const s of r.elements)t.some(o=>tr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Yl extends mc{constructor(e){super(),this.elements=e}}function yv(r,e){let t=_v(e);for(const s of r.elements)t=t.filter(o=>!tr(o,s));return{arrayValue:{values:t}}}class qd extends mc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function cy(r){return nt(r.integerValue||r.doubleValue)}function _v(r){return Ef(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function yR(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ql&&o instanceof Ql||s instanceof Yl&&o instanceof Yl?po(s.elements,o.elements,tr):s instanceof qd&&o instanceof qd?tr(s.Pe,o.Pe):s instanceof $d&&o instanceof $d}(r.transform,e.transform)}class Zi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zi}static exists(e){return new Zi(void 0,e)}static updateTime(e){return new Zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Sf{}function vv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new vR(r.key,Zi.none()):new Af(r.key,r.data,Zi.none());{const t=r.data,s=Xn.empty();let o=new ft(bt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new gc(r.key,s,new oi(o.toArray()),Zi.none())}}function _R(r,e,t){r instanceof Af?function(o,u,h){const f=o.value.clone(),g=dy(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof gc?function(o,u,h){if(!kl(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=dy(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Ev(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function xa(r,e,t,s){return r instanceof Af?function(u,h,f,g){if(!kl(u.precondition,h))return f;const _=u.value.clone(),E=fy(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof gc?function(u,h,f,g){if(!kl(u.precondition,h))return f;const _=fy(u.fieldTransforms,g,h),E=h.data;return E.setAll(Ev(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,t,s):function(u,h,f){return kl(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function hy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,(u,h)=>yR(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Af extends Sf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gc extends Sf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function dy(r,e,t){const s=new Map;Xe(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,f=e.data.field(u.field);s.set(u.field,mR(h,f,t[o]))}return s}function fy(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,pR(u,h,e))}return s}class vR extends Sf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ER{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&_R(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=pv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=t.has(o.key)?null:f;const g=vv(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ve())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(t,s)=>hy(t,s))&&po(this.baseMutations,e.baseMutations,(t,s)=>hy(t,s))}}/**
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
 */class wR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,ke;function wv(r){if(r===void 0)return Pr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case ot.OK:return Q.OK;case ot.CANCELLED:return Q.CANCELLED;case ot.UNKNOWN:return Q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return Q.INTERNAL;case ot.UNAVAILABLE:return Q.UNAVAILABLE;case ot.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ot.NOT_FOUND:return Q.NOT_FOUND;case ot.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ot.ABORTED:return Q.ABORTED;case ot.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ot.DATA_LOSS:return Q.DATA_LOSS;default:return we()}}(ke=ot||(ot={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IR(){return new TextEncoder}/**
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
 */const SR=new di([4294967295,4294967295],0);function py(r){const e=IR().encode(r),t=new K_;return t.update(e),new Uint8Array(t.digest())}function my(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new di([t,s],0),new di([o,u],0)]}class Rf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Pa(`Invalid padding: ${t}`);if(s<0)throw new Pa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=di.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(di.fromNumber(s)));return o.compare(SR)===1&&(o=new di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=py(e),[s,o]=my(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Rf(u,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=py(e),[s,o]=my(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(Ee.min(),o,new rt(Ne),vi(),Ve())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Ve(),Ve(),Ve())}}/**
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
 */class Nl{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Tv{constructor(e,t){this.targetId=e,this.me=t}}class Iv{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class gy{constructor(){this.fe=0,this.ge=yy(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ve(),t=Ve(),s=Ve();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we()}}),new Ya(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=yy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AR{constructor(e){this.Be=e,this.Le=new Map,this.ke=vi(),this.qe=El(),this.Qe=El(),this.Ke=new rt(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(zd(u))if(s===0){const h=new pe(u.path);this.We(t,h,Mt.newNoDocument(h,Ee.min()))}else Xe(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),g=f?this.et(f,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,f;try{h=yi(s).toUint8Array()}catch(g){if(g instanceof nv)return fo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new Rf(h,o,u)}catch(g){return fo(g instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Be.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(f)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((u,h)=>{const f=this.Ye(h);if(f){if(u.current&&zd(f.target)){const g=new pe(f.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Mt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ve();this.Qe.forEach((u,h)=>{let f=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new yc(e,t,this.Ke,this.ke,s);return this.ke=vi(),this.qe=El(),this.Qe=El(),this.Ke=new rt(Ne),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new gy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new ft(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ft(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new gy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function El(){return new rt(pe.comparator)}function yy(){return new rt(pe.comparator)}const RR={asc:"ASCENDING",desc:"DESCENDING"},CR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PR={and:"AND",or:"OR"};class kR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hd(r,e){return r.useProto3Json||hc(e)?e:{value:e}}function Wd(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ao(r){return Xe(!!r),Ee.fromTimestamp(function(t){const s=gi(t);return new Et(s.seconds,s.nanos)}(r))}function Av(r,e){return Kd(r,e).canonicalString()}function Kd(r,e){const t=function(o){return new He(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Rv(r){const e=He.fromString(r);return Xe(Dv(e)),e}function yd(r,e){const t=Rv(e);if(t.get(1)!==r.databaseId.projectId)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(Pv(t))}function Cv(r,e){return Av(r.databaseId,e)}function NR(r){const e=Rv(r);return e.length===4?He.emptyPath():Pv(e)}function _y(r){return new He(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Pv(r){return Xe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function DR(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(_,E){return _.useProto3Json?(Xe(E===void 0||typeof E=="string"),Ct.fromBase64String(E||"")):(Xe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ct.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(_){const E=_.code===void 0?Q.UNKNOWN:wv(_.code);return new ue(E,_.message||"")}(h);t=new Iv(s,o,u,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=yd(r,s.document.name),u=ao(s.document.updateTime),h=s.document.createTime?ao(s.document.createTime):Ee.min(),f=new Xn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,f),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Nl(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=yd(r,s.document),u=s.readTime?ao(s.readTime):Ee.min(),h=Mt.newNoDocument(o,u),f=s.removedTargetIds||[];t=new Nl([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=yd(r,s.document),u=s.removedTargetIds||[];t=new Nl([],u,o,null)}else{if(!("filter"in e))return we();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new TR(o,u),f=s.targetId;t=new Tv(f,h)}}return t}function OR(r,e){return{documents:[Cv(r,e.path)]}}function VR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Cv(r,o);const u=function(_){if(_.length!==0)return Nv(Fn.create(_,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(E=>function(O){return{field:to(O.field),direction:MR(O.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Hd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function xR(r){let e=NR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Xe(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(R){const O=kv(R);return O instanceof Fn&&sv(O)?O.getFilters():[O]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(O=>function(H){return new Gl(no(H.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(O))}(t.orderBy));let f=null;t.limit&&(f=function(R){let O;return O=typeof R=="object"?R.value:R,hc(O)?null:O}(t.limit));let g=null;t.startAt&&(g=function(R){const O=!!R.before,z=R.values||[];return new Kl(z,O)}(t.startAt));let _=null;return t.endAt&&(_=function(R){const O=!R.before,z=R.values||[];return new Kl(z,O)}(t.endAt)),iR(e,o,h,u,f,"F",g,_)}function LR(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(r):r.fieldFilter!==void 0?function(t){return at.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Fn.create(t.compositeFilter.filters.map(s=>kv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(r):we()}function MR(r){return RR[r]}function bR(r){return CR[r]}function FR(r){return PR[r]}function to(r){return{fieldPath:r.canonicalString()}}function no(r){return bt.fromServerFormat(r.fieldPath)}function Nv(r){return r instanceof at?function(t){if(t.op==="=="){if(sy(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(iy(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sy(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(iy(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:bR(t.op),value:t.value}}}(r):r instanceof Fn?function(t){const s=t.getFilters().map(o=>Nv(o));return s.length===1?s[0]:{compositeFilter:{op:FR(t.op),filters:s}}}(r):we()}function Dv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ai{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),f=Ct.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class UR{constructor(e){this.ht=e}}function zR(r){const e=xR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Bd(e,e.limit,"L"):e}/**
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
 */class jR{constructor(){this.ln=new BR}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(mi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class BR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new ft(He.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new ft(He.comparator)).toArray()}}/**
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
 */const vy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class yo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new yo(0)}static Qn(){return new yo(-1)}}/**
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
 */function Ey([r,e],[t,s]){const o=Ne(r,t);return o===0?Ne(e,s):o}class $R{constructor(e){this.Gn=e,this.buffer=new ft(Ey),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ey(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){re("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?re("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await lc(t)}await this.Yn(3e5)})}}class HR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(cc.oe);const s=new $R(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(vy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,f=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),Zs()<=Ae.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${u} targets in `+(g-f)+`ms
	Removed ${R} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function WR(r,e){return new HR(r,e)}/**
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
 */class KR{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class QR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&xa(s.mutation,o,oi.empty(),Et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ve()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ve()){const o=Xi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ca();return u.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Xi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ve()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let u=vi();const h=Va(),f=function(){return Va()}();return t.forEach((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof gc)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),xa(E.mutation,_,E.mutation.getFieldMask(),Et.now())):h.set(_.key,oi.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,E)=>h.set(_,E)),t.forEach((_,E)=>{var R;return f.set(_,new GR(E,(R=h.get(_))!==null&&R!==void 0?R:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new rt((h,f)=>h-f),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||oi.empty();E=f.applyToLocalView(_,E),s.set(g,E);const R=(o.get(f.batchId)||Ve()).add(g);o=o.insert(f.batchId,R)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,R=pv();E.forEach(O=>{if(!u.has(O)){const z=vv(t.get(O),s.get(O));z!==null&&R.set(O,z),u=u.add(O)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Xi());let f=-1,g=u;return h.next(_=>$.forEach(_,(E,R)=>(f<R.largestBatchId&&(f=R.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next(O=>{g=g.insert(E,O)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,Ve())).next(E=>({batchId:f,changes:lR(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next(f=>$.forEach(f,g=>{const _=function(R,O){return new Qa(O,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(E=>{E.forEach((R,O)=>{h=h.insert(R,O)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Mt.newInvalidDocument(E)))});let f=Ca();return h.forEach((g,_)=>{const E=u.get(g);E!==void 0&&xa(E.mutation,_,oi.empty(),Et.now()),pc(t,_)&&(f=f.insert(g,_))}),f})}}/**
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
 */class YR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ao(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:zR(o.bundledQuery),readTime:ao(o.readTime)}}(t)),$.resolve()}}/**
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
 */class XR{constructor(){this.overlays=new rt(pe.comparator),this.dr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xi();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Xi(),u=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new rt((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Xi(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=Xi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,E)=>f.set(_,E)),!(f.size()>=o)););return $.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new wR(t,s));let u=this.dr.get(t);u===void 0&&(u=Ve(),this.dr.set(t,u)),this.dr.set(t,u.add(s.key))}}/**
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
 */class JR{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Cf{constructor(){this.Er=new ft(vt.Ar),this.Rr=new ft(vt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new vt(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new vt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new pe(new He([])),s=new vt(t,e),o=new vt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new He([])),s=new vt(t,e),o=new vt(t,e+1);let u=Ve();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new vt(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
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
 */class ZR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new ft(vt.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new ER(u,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new vt(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),o=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);u.push(f)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ft(Ne);return t.forEach(o=>{const u=new vt(o,0),h=new vt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],f=>{s=s.add(f.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const h=new vt(new pe(u),0);let f=new ft(Ne);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.br)),!0)},h),$.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Xe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,o=>{const u=new vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new vt(t,0),o=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class eC{constructor(e){this.Nr=e,this.docs=function(){return new rt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=vi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=vi();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||bA(MA(E),s)<=0||(o.has(E.key)||pc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){we()}Br(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new tC(this)}getSize(e){return $.resolve(this.size)}}class tC extends KR{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class nC{constructor(e){this.persistence=e,this.Lr=new os(t=>wf(t),Tf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new Cf,this.targetCount=0,this.Qr=yo.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new yo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Lr.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Lr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
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
 */class Ov{constructor(e,t){this.Kr={},this.overlays={},this.$r=new cc(0),this.Ur=!1,this.Ur=!0,this.Wr=new JR,this.referenceDelegate=e(this),this.Gr=new nC(this),this.indexManager=new jR,this.remoteDocumentCache=function(o){return new eC(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new UR(t),this.jr=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new ZR(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new rC(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class rC extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class Pf{constructor(e){this.persistence=e,this.Zr=new Cf,this.Xr=null}static ei(e){return new Pf(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const o=pe.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Xl{constructor(e,t){this.persistence=e,this.ri=new os(s=>BA(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=WR(this,t)}static ei(e,t){return new Xl(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(f=>{f||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pl(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class kf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new kf(e,t.fromCache,s,o)}}/**
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
 */class iC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return GT()?8:zA(Ut())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new iC;return this.ts(e,t,h).next(f=>{if(u.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Zs()<=Ae.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Zs()<=Ae.DEBUG&&re("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Zs()<=Ae.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):$.resolve())}Xi(e,t){if(ly(t))return $.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Bd(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ve(...u);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,f);return this.ss(t,_,h,g.readTime)?this.Xi(e,Bd(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return ly(t)||o.isEqual(Ee.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?$.resolve(null):(Zs()<=Ae.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.os(e,h,t,LA(o,-1)).next(f=>f))})}rs(e,t){let s=new ft(dv(e));return t.forEach((o,u)=>{pc(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Zs()<=Ae.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",eo(t)),this.Zi.getDocumentsMatchingQuery(e,t,mi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class oC{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(Ne),this.cs=new os(u=>wf(u),Tf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function aC(r,e,t,s){return new oC(r,e,t,s)}async function Vv(r,e){const t=De(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],f=[];let g=Ve();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:f}))})})}function xv(r){const e=De(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function uC(r,e){const t=De(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,R)=>{const O=o.get(R);if(!O)return;f.push(t.Gr.removeMatchingKeys(u,E.removedDocuments,R).next(()=>t.Gr.addMatchingKeys(u,E.addedDocuments,R)));let z=O.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?z=z.withResumeToken(Ct.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(R,z),function(Y,j,he){return Y.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0}(O,z,E)&&f.push(t.Gr.updateTargetData(u,z))});let g=vi(),_=Ve();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),f.push(lC(u,h,e.documentUpdates).next(E=>{g=E.Is,_=E.ds})),!s.isEqual(Ee.min())){const E=t.Gr.getLastRemoteSnapshotVersion(u).next(R=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));f.push(E)}return $.waitFor(f).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,_)).next(()=>g)}).then(u=>(t.us=o,u))}function lC(r,e,t){let s=Ve(),o=Ve();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=vi();return t.forEach((f,g)=>{const _=u.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):re("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)}),{Is:h,ds:o}})}function cC(r,e){const t=De(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ai(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Gd(r,e,t){const s=De(r),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!So(h))throw h;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function wy(r,e,t){const s=De(r);let o=Ee.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,E){const R=De(g),O=R.cs.get(E);return O!==void 0?$.resolve(R.us.get(O)):R.Gr.getTargetData(_,E)}(s,h,er(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Ve())).next(f=>(hC(s,oR(e),f),{documents:f,Es:u})))}function hC(r,e,t){let s=r.ls.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.ls.set(e,s)}class Ty{constructor(){this.activeTargetIds=dR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dC{constructor(){this._o=new Ty,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fC{uo(e){}shutdown(){}}/**
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
 */class Iy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wl=null;function _d(){return wl===null?wl=function(){return 268435456+Math.round(2147483648*Math.random())}():wl++,"0x"+wl.toString(16)}/**
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
 */const pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const xt="WebChannelConnection";class gC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const f=_d(),g=this.No(t,s.toUriEncodedString());re("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(_,u,h),this.Lo(t,g,_,o).then(E=>(re("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw fo("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",g,"request:",o),E})}ko(t,s,o,u,h,f){return this.Oo(t,s,o,u,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=pC[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const u=_d();return new Promise((h,f)=>{const g=new G_;g.setWithCredentials(!0),g.listenOnce(Q_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Cl.NO_ERROR:const E=g.getResponseJson();re(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case Cl.TIMEOUT:re(xt,`RPC '${e}' ${u} timed out`),f(new ue(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const R=g.getStatus();if(re(xt,`RPC '${e}' ${u} failed with status:`,R,"response text:",g.getResponseText()),R>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const z=O==null?void 0:O.error;if(z&&z.status&&z.message){const H=function(j){const he=j.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(he)>=0?he:Q.UNKNOWN}(z.status);f(new ue(H,z.message))}else f(new ue(Q.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ue(Q.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{re(xt,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(o);re(xt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=_d(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=J_(),f=X_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Bo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");re(xt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const R=h.createWebChannel(E,g);let O=!1,z=!1;const H=new mC({Eo:j=>{z?re(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(O||(re(xt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),O=!0),re(xt,`RPC '${e}' stream ${o} sending:`,j),R.send(j))},Ao:()=>R.close()}),Y=(j,he,le)=>{j.listen(he,Z=>{try{le(Z)}catch(te){setTimeout(()=>{throw te},0)}})};return Y(R,Ra.EventType.OPEN,()=>{z||(re(xt,`RPC '${e}' stream ${o} transport opened.`),H.So())}),Y(R,Ra.EventType.CLOSE,()=>{z||(z=!0,re(xt,`RPC '${e}' stream ${o} transport closed`),H.Do())}),Y(R,Ra.EventType.ERROR,j=>{z||(z=!0,fo(xt,`RPC '${e}' stream ${o} transport errored:`,j),H.Do(new ue(Q.UNAVAILABLE,"The operation could not be completed")))}),Y(R,Ra.EventType.MESSAGE,j=>{var he;if(!z){const le=j.data[0];Xe(!!le);const Z=le,te=(Z==null?void 0:Z.error)||((he=Z[0])===null||he===void 0?void 0:he.error);if(te){re(xt,`RPC '${e}' stream ${o} received error:`,te);const me=te.status;let oe=function(S){const k=ot[S];if(k!==void 0)return wv(k)}(me),P=te.message;oe===void 0&&(oe=Q.INTERNAL,P="Unknown error status: "+me+" with message "+te.message),z=!0,H.Do(new ue(oe,P)),R.close()}else re(xt,`RPC '${e}' stream ${o} received:`,le),H.vo(le)}}),Y(f,Y_.STAT_EVENT,j=>{j.stat===Md.PROXY?re(xt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Md.NOPROXY&&re(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{H.bo()},0),H}}function vd(){return typeof document<"u"?document:null}/**
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
 */function _c(r){return new kR(r,!0)}/**
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
 */class Lv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class yC{constructor(e,t,s,o,u,h,f,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Lv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ue(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _C extends yC{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=DR(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?ao(h.readTime):Ee.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=_y(this.serializer),t.addTarget=function(u,h){let f;const g=h.target;if(f=zd(g)?{documents:OR(u,g)}:{query:VR(u,g).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Sv(u,h.resumeToken);const _=Hd(u,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){f.readTime=Wd(u,h.snapshotVersion.toTimestamp());const _=Hd(u,h.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,e);const s=LR(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=_y(this.serializer),t.removeTarget=e,this.c_(t)}}/**
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
 */class vC extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Kd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(Q.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Kd(t,s),o,h,f,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(Q.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class EC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Pr(t),this.C_=!1):re("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class wC{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Ja(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=De(g);_.k_.add(4),await Xa(_),_.K_.set("Unknown"),_.k_.delete(4),await vc(_)}(this))})}),this.K_=new EC(s,o)}}async function vc(r){if(Ja(r))for(const e of r.q_)await e(!0)}async function Xa(r){for(const e of r.q_)await e(!1)}function Mv(r,e){const t=De(r);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Vf(t)?Of(t):Ro(t).s_()&&Df(t,e))}function Nf(r,e){const t=De(r),s=Ro(t);t.L_.delete(e),s.s_()&&bv(t,e),t.L_.size===0&&(s.s_()?s.a_():Ja(t)&&t.K_.set("Unknown"))}function Df(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ro(r).V_(e)}function bv(r,e){r.U_.xe(e),Ro(r).m_(e)}function Of(r){r.U_=new AR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.L_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),Ro(r).start(),r.K_.F_()}function Vf(r){return Ja(r)&&!Ro(r).i_()&&r.L_.size>0}function Ja(r){return De(r).k_.size===0}function Fv(r){r.U_=void 0}async function TC(r){r.K_.set("Online")}async function IC(r){r.L_.forEach((e,t)=>{Df(r,e)})}async function SC(r,e){Fv(r),Vf(r)?(r.K_.O_(e),Of(r)):r.K_.set("Unknown")}async function AC(r,e,t){if(r.K_.set("Online"),e instanceof Iv&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const f of u.targetIds)o.L_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.L_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sy(r,s)}else if(e instanceof Nl?r.U_.$e(e):e instanceof Tv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(Ee.min()))try{const s=await xv(r.localStore);t.compareTo(s)>=0&&await function(u,h){const f=u.U_.it(h);return f.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.L_.get(_);E&&u.L_.set(_,E.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,_)=>{const E=u.L_.get(g);if(!E)return;u.L_.set(g,E.withResumeToken(Ct.EMPTY_BYTE_STRING,E.snapshotVersion)),bv(u,g);const R=new ai(E.target,g,_,E.sequenceNumber);Df(u,R)}),u.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){re("RemoteStore","Failed to raise snapshot:",s),await Sy(r,s)}}async function Sy(r,e,t){if(!So(e))throw e;r.k_.add(1),await Xa(r),r.K_.set("Offline"),t||(t=()=>xv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await vc(r)})}async function Ay(r,e){const t=De(r);t.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const s=Ja(t);t.k_.add(3),await Xa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await vc(t)}async function RC(r,e){const t=De(r);e?(t.k_.delete(2),await vc(t)):e||(t.k_.add(2),await Xa(t),t.K_.set("Unknown"))}function Ro(r){return r.W_||(r.W_=function(t,s,o){const u=De(t);return u.b_(),new _C(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Ro:TC.bind(null,r),mo:IC.bind(null,r),po:SC.bind(null,r),R_:AC.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Vf(r)?Of(r):r.K_.set("Unknown")):(await r.W_.stop(),Fv(r))})),r.W_}/**
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
 */class xf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,f=new xf(e,t,h,o,u);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uv(r,e){if(Pr("AsyncQueue",`${e}: ${r}`),So(r))return new ue(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class uo{static emptySet(e){return new uo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ry{constructor(){this.z_=new rt(pe.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class _o{constructor(e,t,s,o,u,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new _o(e,t,uo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class CC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class PC{constructor(){this.queries=Cy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=De(t),u=o.queries;o.queries=Cy(),u.forEach((h,f)=>{for(const g of f.J_)g.onError(s)})})(this,new ue(Q.ABORTED,"Firestore shutting down"))}}function Cy(){return new os(r=>hv(r),fc)}async function kC(r,e){const t=De(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new CC,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Uv(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Lf(t)}async function NC(r,e){const t=De(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function DC(r,e){const t=De(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&Lf(t)}function OC(r,e,t){const s=De(r),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function Lf(r){r.X_.forEach(e=>{e.next()})}var Qd,Py;(Py=Qd||(Qd={})).na="default",Py.Cache="cache";class VC{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new _o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Qd.Cache}}/**
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
 */class zv{constructor(e){this.key=e}}class jv{constructor(e){this.key=e}}class xC{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ve(),this.mutatedKeys=Ve(),this.Va=dv(e),this.ma=new uo(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new Ry,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,R)=>{const O=o.get(E),z=pc(this.query,R)?R:null,H=!!O&&this.mutatedKeys.has(O.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let j=!1;O&&z?O.data.isEqual(z.data)?H!==Y&&(s.track({type:3,doc:z}),j=!0):this.ya(O,z)||(s.track({type:2,doc:z}),j=!0,(g&&this.Va(z,g)>0||_&&this.Va(z,_)<0)&&(f=!0)):!O&&z?(s.track({type:0,doc:z}),j=!0):O&&!z&&(s.track({type:1,doc:O}),j=!0,(g||_)&&(f=!0)),j&&(z?(h=h.add(z),u=Y?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{ma:h,pa:s,ss:f,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,R)=>function(z,H){const Y=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return Y(z)-Y(H)}(E.type,R.type)||this.Va(E.doc,R.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new _o(this.query,e.ma,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ry,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ve(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new jv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new zv(s))}),t}va(e){this.Ea=e.Es,this.Ra=Ve();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return _o.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class LC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class MC{constructor(e){this.key=e,this.Fa=!1}}class bC{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new os(f=>hv(f),fc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(pe.comparator),this.La=new Map,this.ka=new Cf,this.qa={},this.Qa=new Map,this.Ka=yo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function FC(r,e,t=!0){const s=Wv(r);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await Bv(s,e,t,!0),o}async function UC(r,e){const t=Wv(r);await Bv(t,e,!0,!1)}async function Bv(r,e,t,s){const o=await cC(r.localStore,er(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let f;return s&&(f=await zC(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Mv(r.remoteStore,o),f}async function zC(r,e,t,s,o){r.Ua=(R,O,z)=>async function(Y,j,he,le){let Z=j.view.ga(he);Z.ss&&(Z=await wy(Y.localStore,j.query,!1).then(({documents:P})=>j.view.ga(P,Z)));const te=le&&le.targetChanges.get(j.targetId),me=le&&le.targetMismatches.get(j.targetId)!=null,oe=j.view.applyChanges(Z,Y.isPrimaryClient,te,me);return Ny(Y,j.targetId,oe.ba),oe.snapshot}(r,R,O,z);const u=await wy(r.localStore,e,!0),h=new xC(e,u.Es),f=h.ga(u.documents),g=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);Ny(r,t,_.ba);const E=new LC(e,t,h);return r.xa.set(e,E),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),_.snapshot}async function jC(r,e,t){const s=De(r),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!fc(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Gd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Nf(s.remoteStore,o.targetId),Yd(s,o.targetId)}).catch(lc)):(Yd(s,o.targetId),await Gd(s.localStore,o.targetId,!0))}async function BC(r,e){const t=De(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Nf(t.remoteStore,s.targetId))}async function $v(r,e){const t=De(r);try{const s=await uC(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.La.get(u);h&&(Xe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Xe(h.Fa):o.removedDocuments.size>0&&(Xe(h.Fa),h.Fa=!1))}),await Hv(t,s,e)}catch(s){await lc(s)}}function ky(r,e,t){const s=De(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=De(h);g.onlineState=f;let _=!1;g.queries.forEach((E,R)=>{for(const O of R.J_)O.ea(f)&&(_=!0)}),_&&Lf(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $C(r,e,t){const s=De(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),u=o&&o.key;if(u){let h=new rt(pe.comparator);h=h.insert(u,Mt.newNoDocument(u,Ee.min()));const f=Ve().add(u),g=new yc(Ee.min(),new Map,new rt(Ne),h,f);await $v(s,g),s.Ba=s.Ba.remove(u),s.La.delete(e),Mf(s)}else await Gd(s.localStore,e,!1).then(()=>Yd(s,e,t)).catch(lc)}function Yd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||qv(r,s)})}function qv(r,e){r.Na.delete(e.path.canonicalString());const t=r.Ba.get(e);t!==null&&(Nf(r.remoteStore,t),r.Ba=r.Ba.remove(e),r.La.delete(t),Mf(r))}function Ny(r,e,t){for(const s of t)s instanceof zv?(r.ka.addReference(s.key,e),qC(r,s)):s instanceof jv?(re("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||qv(r,s.key)):we()}function qC(r,e){const t=e.key,s=t.path.canonicalString();r.Ba.get(t)||r.Na.has(s)||(re("SyncEngine","New document in limbo: "+t),r.Na.add(s),Mf(r))}function Mf(r){for(;r.Na.size>0&&r.Ba.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new pe(He.fromString(e)),s=r.Ka.next();r.La.set(s,new MC(t)),r.Ba=r.Ba.insert(t,s),Mv(r.remoteStore,new ai(er(lv(t.path)),s,"TargetPurposeLimboResolution",cc.oe))}}async function Hv(r,e,t){const s=De(r),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,g)=>{h.push(s.Ua(g,e,t).then(_=>{var E;if((_||t)&&s.isPrimaryClient){const R=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(_){o.push(_);const R=kf.zi(g.targetId,_);u.push(R)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const E=De(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>$.forEach(_,O=>$.forEach(O.Wi,z=>E.persistence.referenceDelegate.addReference(R,O.targetId,z)).next(()=>$.forEach(O.Gi,z=>E.persistence.referenceDelegate.removeReference(R,O.targetId,z)))))}catch(R){if(!So(R))throw R;re("LocalStore","Failed to update sequence numbers: "+R)}for(const R of _){const O=R.targetId;if(!R.fromCache){const z=E.us.get(O),H=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(H);E.us=E.us.insert(O,Y)}}}(s.localStore,u))}async function HC(r,e){const t=De(r);if(!t.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const s=await Vv(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(f=>{f.forEach(g=>{g.reject(new ue(Q.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hv(t,s.Ts)}}function WC(r,e){const t=De(r),s=t.La.get(e);if(s&&s.Fa)return Ve().add(s.key);{let o=Ve();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function Wv(r){const e=De(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=$v.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$C.bind(null,e),e.Ma.R_=DC.bind(null,e.eventManager),e.Ma.Wa=OC.bind(null,e.eventManager),e}class Jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return aC(this.persistence,new sC,e.initialUser,this.serializer)}ja(e){return new Ov(Pf.ei,this.serializer)}za(e){return new dC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jl.provider={build:()=>new Jl};class KC extends Jl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Xe(this.persistence.referenceDelegate instanceof Xl);const s=this.persistence.referenceDelegate.garbageCollector;return new qR(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Ov(s=>Xl.ei(s,t),this.serializer)}}class Xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ky(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PC}()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=function(u){return new gC(u)}(e.databaseInfo);return function(u,h,f,g){return new vC(u,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,f){return new wC(s,o,u,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>ky(this.syncEngine,t,0),function(){return Iy.p()?new Iy:new fC}())}createSyncEngine(e,t){return function(o,u,h,f,g,_,E){const R=new bC(o,u,h,f,g,_);return E&&(R.$a=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=De(o);re("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Xa(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xd.provider={build:()=>new Xd};/**
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
 */class GC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class QC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=ev.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{re("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(re("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Uv(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ed(r,e){r.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Vv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Dy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await YC(r);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Ay(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Ay(e.remoteStore,o)),r._onlineComponents=e}async function YC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ed(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;fo("Error using user provided cache. Falling back to memory cache: "+t),await Ed(r,new Jl)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Ed(r,new KC(void 0));return r._offlineComponents}async function XC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Dy(r,r._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Dy(r,new Xd))),r._onlineComponents}async function JC(r){const e=await XC(r),t=e.eventManager;return t.onListen=FC.bind(null,e.syncEngine),t.onUnlisten=jC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=UC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BC.bind(null,e.syncEngine),t}function ZC(r,e,t={}){const s=new Ji;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,f,g,_){const E=new GC({next:O=>{E.eu(),h.enqueueAndForget(()=>NC(u,R)),O.fromCache&&g.source==="server"?_.reject(new ue(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(O)},error:O=>_.reject(O)}),R=new VC(f,E,{includeMetadataChanges:!0,ua:!0});return kC(u,R)}(await JC(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function Kv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
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
 */function Gv(r,e,t){if(!t)throw new ue(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function eP(r,e,t,s){if(e===!0&&s===!0)throw new ue(Q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vy(r){if(!pe.isDocumentKey(r))throw new ue(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xy(r){if(pe.isDocumentKey(r))throw new ue(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ec(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we()}function Jd(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(r);throw new ue(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Ly{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new RA;switch(s.type){case"firstParty":return new NA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Oy.get(t);s&&(re("ComponentProvider","Removing Datastore"),Oy.delete(t),s.terminate())}(this),Promise.resolve()}}function tP(r,e,t,s={}){var o;const u=(r=Jd(r,wc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Lt.MOCK_USER;else{f=jT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ue(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Lt(_)}r._authCredentials=new CA(new Z_(f,g))}}/**
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
 */class Co{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Co(this.firestore,e,this._query)}}class En{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}}class fi extends Co{constructor(e,t,s){super(e,t,lv(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new pe(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function nP(r,e,...t){if(r=Zt(r),Gv("collection","path",e),r instanceof wc){const s=He.fromString(e,...t);return xy(s),new fi(r,null,s)}{if(!(r instanceof En||r instanceof fi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return xy(s),new fi(r.firestore,null,s)}}function rP(r,e,...t){if(r=Zt(r),arguments.length===1&&(e=ev.newId()),Gv("doc","path",e),r instanceof wc){const s=He.fromString(e,...t);return Vy(s),new En(r,null,new pe(s))}{if(!(r instanceof En||r instanceof fi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return Vy(s),new En(r.firestore,r instanceof fi?r.converter:null,new pe(s))}}/**
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
 */class My{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Lv(this,"async_queue_retry"),this.fu=()=>{const s=vd();s&&re("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=vd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=vd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ji;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!So(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Pr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=xf.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Qv extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new My,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}function iP(r,e){const t=typeof r=="object"?r:c_(),s=typeof r=="string"?r:"(default)",o=uf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=UT("firestore");u&&tP(o,...u)}return o}function sP(r){if(r._terminated)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oP(r),r._firestoreClient}function oP(r){var e,t,s;const o=r._freezeSettings(),u=function(f,g,_,E){return new HA(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Kv(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new QC(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vo(Ct.fromBase64String(e))}catch(t){throw new ue(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vo(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xv{constructor(e){this._methodName=e}}/**
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
 */class bf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
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
 */class Ff{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const aP=/^__.*__$/;function Jv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Uf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Zd(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Jv(this.Mu)&&aP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class uP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}$u(e,t,s,o=!1){return new Uf({Mu:e,methodName:t,Ku:s,path:bt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lP(r){const e=r._freezeSettings(),t=_c(r._databaseId);return new uP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function cP(r,e,t,s=!1){return zf(t,r.$u(s?4:3,e))}function zf(r,e){if(Zv(r=Zt(r)))return dP("Unsupported field value:",e,r),hP(r,e);if(r instanceof Xv)return function(s,o){if(!Jv(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const f of s){let g=zf(f,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Et.fromDate(s);return{timestampValue:Wd(o.serializer,u)}}if(s instanceof Et){const u=new Et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wd(o.serializer,u)}}if(s instanceof bf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vo)return{bytesValue:Sv(o.serializer,s._byteString)};if(s instanceof En){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Av(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ff)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return If(f.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Ec(s)}`)}(r,e)}function hP(r,e){const t={};return tv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ao(r,(s,o)=>{const u=zf(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Zv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Et||r instanceof bf||r instanceof vo||r instanceof En||r instanceof Xv||r instanceof Ff)}function dP(r,e,t){if(!Zv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Ec(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}const fP=new RegExp("[~\\*/\\[\\]]");function pP(r,e,t){if(e.search(fP)>=0)throw Zd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Yv(...e.split("."))._internalPath}catch{throw Zd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Zd(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ue(Q.INVALID_ARGUMENT,f+r+g)}/**
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
 */class eE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new En(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class mP extends eE{data(){return super.data()}}function jf(r,e){return typeof e=="string"?pP(r,e):e instanceof Yv?e._internalPath:e._delegate._internalPath}/**
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
 */function gP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bf{}class yP extends Bf{}function _P(r,e,...t){let s=[];e instanceof Bf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof $f).length,f=u.filter(g=>g instanceof Tc).length;if(h>1||h>0&&f>0)throw new ue(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Tc extends yP{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Tc(e,t,s)}_apply(e){const t=this._parse(e);return tE(e._query,t),new Co(e.firestore,e.converter,jd(e._query,t))}_parse(e){const t=lP(e.firestore);return function(u,h,f,g,_,E,R){let O;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Fy(R,E);const z=[];for(const H of R)z.push(by(g,u,H));O={arrayValue:{values:z}}}else O=by(g,u,R)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Fy(R,E),O=cP(f,h,R,E==="in"||E==="not-in");return at.create(_,E,O)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vP(r,e,t){const s=e,o=jf("where",r);return Tc._create(o,s,t)}class $f extends Bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $f(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const f=u.getFlattenedFilters();for(const g of f)tE(h,g),h=jd(h,g)}(e._query,t),new Co(e.firestore,e.converter,jd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function by(r,e,t){if(typeof(t=Zt(t))=="string"){if(t==="")throw new ue(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cv(e)&&t.indexOf("/")!==-1)throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!pe.isDocumentKey(s))throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ry(r,new pe(s))}if(t instanceof En)return ry(r,t._key);throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ec(t)}.`)}function Fy(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tE(r,e){const t=function(o,u){for(const h of o)for(const f of h.getFlattenedFilters())if(u.indexOf(f.op)>=0)return f.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EP{convertValue(e,t="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ao(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>nt(h.doubleValue));return new Ff(u)}convertGeoPoint(e){return new bf(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=gi(e);return new Et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);Xe(Dv(s));const o=new Ba(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class Tl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wP extends eE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Dl extends wP{data(e={}){return super.data(e)}}class TP{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Tl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Dl(this._firestore,this._userDataWriter,s.key,s,new Tl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new Dl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Tl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>u||f.type!==3).map(f=>{const g=new Dl(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Tl(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:IP(f.type),doc:g,oldIndex:_,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function IP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class SP extends EP{constructor(e){super(),this.firestore=e}convertBytes(e){return new vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new En(this.firestore,null,t)}}function AP(r){r=Jd(r,Co);const e=Jd(r.firestore,Qv),t=sP(e),s=new SP(e);return gP(r._query),ZC(t,r._query).then(o=>new TP(e,s,r,o))}(function(e,t=!0){(function(o){Io=o})(Eo),co(new ns("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),f=new Qv(new PA(s.getProvider("auth-internal")),new OA(s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ue(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(_.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),f._setSettings(u),f},"PUBLIC").setMultipleInstances(!0)),ci(Xg,"4.7.6",e),ci(Xg,"4.7.6","esm2017")})();const RP={apiKey:"AIzaSyAVhypyG5YZt8876a7Xbb9pduDXRcmryuw",authDomain:"poe2-spread.firebaseapp.com",projectId:"poe2-spread",storageBucket:"poe2-spread.firebasestorage.app",messagingSenderId:"549891306635",appId:"1:549891306635:web:45542073d1e4f95aab508e",measurementId:"G-7CCJM79TV8"},nE=l_(RP),qf=TA(nE),rE=iP(nE),CP=r=>r instanceof Error?r.message:String(r),PP={user:null,status:"idle",error:null},Ol=sf("user/loginUser",async({email:r,password:e},{rejectWithValue:t})=>{try{const{user:s}=await a0(qf,r,e),{uid:o,displayName:u,photoURL:h}=s;return{uid:o,email:r,displayName:u,photoURL:h}}catch(s){return t(CP(s))}}),Hf=sf("user/logoutUser",async()=>{await h0(qf)}),iE=e_({name:"user",initialState:PP,reducers:{setUser:(r,e)=>{r.user=e.payload,r.status=e.payload?"authenticated":"unauthenticated"}},extraReducers:r=>{r.addCase(Ol.pending,e=>{e.status="loading"}).addCase(Ol.fulfilled,(e,t)=>{e.status="authenticated",e.user=t.payload,e.error=null}).addCase(Ol.rejected,(e,t)=>{e.status="unauthenticated",e.error=t.payload}).addCase(Hf.fulfilled,e=>{e.status="unauthenticated",e.user=null})}}),kP=()=>r=>{c0(qf,e=>{if(e){const{uid:t,email:s,displayName:o,photoURL:u}=e;r(NP({uid:t,email:s,displayName:o,photoURL:u}))}else r(Hf())})},{setUser:NP}=iE.actions,DP=iE.reducer,OP=()=>{const r=By(),{user:e,status:t,error:s}=wd(({user:_})=>_),[o,u]=Ft.useState(""),[h,f]=Ft.useState(""),g=_=>{_.preventDefault(),r(Ol({email:o,password:h}))};return Ye.jsxs("div",{children:[e?Ye.jsxs("div",{children:[Ye.jsxs("p",{children:["Willkommen, ",e.email]}),Ye.jsx("button",{onClick:()=>r(Hf()),children:"Logout"})]}):Ye.jsxs("form",{onSubmit:g,children:[Ye.jsx("input",{type:"email",placeholder:"E-Mail",value:o,onChange:_=>u(_.target.value),required:!0}),Ye.jsx("input",{type:"password",placeholder:"Passwort",value:h,onChange:_=>f(_.target.value),required:!0}),Ye.jsx("button",{type:"submit",disabled:t==="loading",children:"Login"})]}),s&&Ye.jsx("p",{style:{color:"red"},children:s})]})},VP={toFirestore(r){const e=rP(rE,"users",r.currency);return{...r,currency:e}},fromFirestore(r){const{currency:e,quantity:t}=r.data();return{id:r.id,currency:e.id,quantity:t}}},xP=nP(rE,"trades"),La=sf("trades/fetchTrades",async r=>{const e=_P(xP,vP("uid","==",r.uid)).withConverter(VP);return console.log("fetch"),(await AP(e)).docs.map(s=>s.data())}),LP=()=>{const r=By(),{trades:e,status:t,error:s}=wd(({trades:u})=>u),{user:o}=wd(({user:u})=>u);return Uy.useEffect(()=>{o&&r(La(o))},[r,o]),Ye.jsx(zw,{children:Ye.jsxs("div",{style:{padding:24},children:[Ye.jsx("h1",{children:"Welcome to the site!"}),Ye.jsx("p",{children:"This is the main content area."}),Ye.jsx(OP,{}),Ye.jsx("p",{children:Ye.jsx("button",{onClick:()=>{o&&r(La(o)),console.log({trades:e,status:t,error:s})},children:"reload data"})}),Ye.jsx("p",{children:JSON.stringify(o)}),Ye.jsx("p",{children:JSON.stringify(e)})]})})},MP={trades:[],status:"idle",error:null},bP=e_({name:"trades",initialState:MP,reducers:{},extraReducers:r=>{r.addCase(La.pending,e=>{e.status="loading"}).addCase(La.fulfilled,(e,t)=>{e.status="succeeded",e.trades=t.payload}).addCase(La.rejected,(e,t)=>{e.status="failed",e.error=t.error.message})}}),FP=bP.reducer,sE=dT({reducer:{trades:FP,user:DP}});sE.dispatch(kP());const UP=Ew.createRoot(document.getElementById("root"));UP.render(Ye.jsx(Uy.StrictMode,{children:Ye.jsx(Lw,{store:sE,children:Ye.jsx(LP,{})})}));
