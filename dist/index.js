"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=s(function(z,x){
var l=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function O(a,r,n){var t,e,i,u;if(a<=0)return NaN;if(a===1||n===0)return f(r[0]);for(n<0?e=(1-a)*n:e=0,t=f(r[e]),u=1;u<a;u++){if(e+=n,i=f(r[e]),l(i))return i;i>t&&(t=i)}return t}x.exports=O
});var c=s(function(A,b){
var R=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function g(a,r,n,t){var e,i,u,v;if(a<=0)return NaN;if(a===1||n===0)return q(r[t]);for(i=t,e=q(r[i]),v=1;v<a;v++){if(i+=n,u=q(r[i]),R(u))return u;u>e&&(e=u)}return e}b.exports=g
});var y=s(function(B,p){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),j=c();h(m,"ndarray",j);p.exports=m
});var k=y();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
