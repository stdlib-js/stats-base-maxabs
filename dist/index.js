"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=o(function(D,b){
var g=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function j(a,r,i,s){var u,n,v,e,t,c;if(u=r.data,n=r.accessors[0],a===1||i===0)return q(n(u,s));for(e=s,v=q(n(u,e)),c=1;c<a;c++){if(e+=i,t=q(n(u,e)),g(t))return t;t>v&&(v=t)}return v}b.exports=j
});var x=o(function(E,y){
var k=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=m();function R(a,r,i,s){var u,n,v,e,t;if(a<=0)return NaN;if(v=O(r),v.accessorProtocol)return P(a,v,i,s);if(a===1||i===0)return f(r[s]);for(n=s,u=f(r[n]),t=1;t<a;t++){if(n+=i,e=f(r[n]),k(e))return e;e>u&&(u=e)}return u}y.exports=R
});var l=o(function(F,p){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=x();function z(a,r,i){return w(a,r,i,h(a,i))}p.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),B=x();A(d,"ndarray",B);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
