// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r){return r!=r};var b=function(r){return Math.abs(r)};function v(r,e,t){var n,o,a,u;if(r<=0)return NaN;if(1===r||0===t)return b(e[0]);for(n=b(e[o=t<0?(1-r)*t:0]),u=1;u<r;u++){if(a=b(e[o+=t]),p(a))return a;a>n&&(n=a)}return n}(function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})})(v,"ndarray",(function(r,e,t,n){var o,a,u,i;if(r<=0)return NaN;if(1===r||0===t)return b(e[n]);for(o=b(e[a=n]),i=1;i<r;i++){if(u=b(e[a+=t]),p(u))return u;u>o&&(o=u)}return o}));export{v as default};
//# sourceMappingURL=mod.js.map
