// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return o.call(n);r=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return o.call(n)}return f=o.call(n),t?n[i]=r:delete n[i],f}:function(n){return o.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var b,d=c,m="function"==typeof Uint8Array,v="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var s,h=b,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var g,j={uint16:s,uint8:h};(g=new j.uint16(1))[0]=4660;var E=52===new j.uint8(g.buffer)[0],T=!0===E?1:0,I=new d(1),x=new l(I.buffer);function O(n){return I[0]=n,x[T]}var G=!0===E?1:0,P=new d(1),V=new l(P.buffer),Y=Number.NEGATIVE_INFINITY,_=.6931471803691238,k=1.9082149292705877e-10,q=1048575;function z(t){var r,o,e,i,f,u,a,y,c,l,p,A;return 0===t?Y:n(t)||t<0?NaN:(f=0,(o=O(t))<1048576&&(f-=54,o=O(t*=0x40000000000000)),o>=2146435072?t+t:(f+=(o>>20)-1023|0,f+=(y=614244+(o&=q)&1048576|0)>>20|0,a=(t=function(n,t){return P[0]=n,V[G]=t>>>0,P[0]}(t,o|1072693248^y))-1,(q&2+o)<3?0===a?0===f?0:f*_+f*k:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*_-(u-f*k-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*_-(r-(l*(r+u)+f*k)-a)):0===f?a-l*(a-u):f*_-(l*(a-u)-f*k-a))))}return function(t,r){return n(t)||n(r)||r<=0?NaN:(2.7316469947045987+z(16*r*r*3.141592653589793))/2}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).entropy=t();
//# sourceMappingURL=browser.js.map