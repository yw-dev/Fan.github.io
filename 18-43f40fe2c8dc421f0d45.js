(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{262:function(t,e,n){var r=n(152)("wks"),o=n(139),i=n(48).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},287:function(t,e){t.exports={}},288:function(t,e,n){var r=n(131),o=n(566),i=n(153),u=n(151)("IE_PROTO"),a=function(){},c=function(){var t,e=n(172)("iframe"),r=i.length;for(e.style.display="none",n(567).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},289:function(t,e,n){var r=n(70).f,o=n(71),i=n(262)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},290:function(t,e,n){e.f=n(262)},291:function(t,e,n){var r=n(48),o=n(19),i=n(138),u=n(290),a=n(70).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},325:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(561)),o=u(n(573)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},326:function(t,e,n){"use strict";var r=n(138),o=n(50),i=n(327),u=n(127),a=n(287),c=n(565),f=n(289),s=n(568),l=n(262)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,h,m){c(n,e,y);var b,g,_,w=function(t){if(!p&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O="values"==v,x=!1,k=t.prototype,E=k[l]||k["@@iterator"]||v&&k[v],j=E||w(v),P=v?O?w("entries"):j:void 0,L="Array"==e&&k.entries||E;if(L&&(_=s(L.call(new t)))!==Object.prototype&&_.next&&(f(_,S,!0),r||"function"==typeof _[l]||u(_,l,d)),O&&E&&"values"!==E.name&&(x=!0,j=function(){return E.call(this)}),r&&!m||!p&&!x&&k[l]||u(k,l,j),a[e]=j,a[S]=d,v)if(b={values:O?j:w("values"),keys:h?j:w("keys"),entries:P},m)for(g in b)g in k||i(k,g,b[g]);else o(o.P+o.F*(p||x),e,b);return b}},327:function(t,e,n){t.exports=n(127)},328:function(t,e,n){var r=n(173),o=n(153).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},329:function(t,e,n){var r=n(140),o=n(137),i=n(72),u=n(150),a=n(71),c=n(171),f=Object.getOwnPropertyDescriptor;e.f=n(36)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},558:function(t,e,n){"use strict";e.__esModule=!0;var r=c(n(559)),o=c(n(560)),i=c(n(583)),u=n(0),a=c(u);function c(t){return t&&t.__esModule?t:{default:t}}var f=!1;var s=function(t){function e(n){return(0,r.default)(this,e),(0,o.default)(this,t.call(this,n))}return(0,i.default)(e,t),e.prototype.componentDidMount=function(){var t=f;!function(){if(!f){var t=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src=window.talkyardScriptUrl||"https://c1.ty-cdn.net/-/talkyard-comments.min.js",window.talkyardServerUrl=window.talkyardServerUrl||"https://comments-demo.talkyard.io",e.appendChild(t),f=!0}}(),t&&window.talkyardReloadCommentsAndEditor&&window.talkyardReloadCommentsAndEditor()},e.prototype.componentWillUnmount=function(){window.talkyardRemoveCommentsAndEditor&&window.talkyardRemoveCommentsAndEditor()},e.prototype.render=function(){return a.default.createElement("div",{className:"talkyard-comments","data-discussion-id":this.props.discussionId||"","data-talkyard-page-id":this.props.talkyardPageId||this.props.edPageId||""},a.default.createElement("noscript",null,"Please enable Javascript to view comments."),a.default.createElement("p",{style:{marginTop:25,opacity:.9,fontSize:"96%"}},"Comments powered by ",a.default.createElement("a",{href:"https://www.talkyard.io"},"Talkyard"),"."))},e}(u.Component);e.default=s},559:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},560:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(325),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},561:function(t,e,n){t.exports={default:n(562),__esModule:!0}},562:function(t,e,n){n(563),n(569),t.exports=n(290).f("iterator")},563:function(t,e,n){"use strict";var r=n(564)(!0);n(326)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},564:function(t,e,n){var r=n(86),o=n(85);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},565:function(t,e,n){"use strict";var r=n(288),o=n(137),i=n(289),u={};n(127)(u,n(262)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},566:function(t,e,n){var r=n(70),o=n(131),i=n(75);t.exports=n(36)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},567:function(t,e,n){var r=n(48).document;t.exports=r&&r.documentElement},568:function(t,e,n){var r=n(71),o=n(87),i=n(151)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},569:function(t,e,n){n(570);for(var r=n(48),o=n(127),i=n(287),u=n(262)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},570:function(t,e,n){"use strict";var r=n(571),o=n(572),i=n(287),u=n(72);t.exports=n(326)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},571:function(t,e){t.exports=function(){}},572:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},573:function(t,e,n){t.exports={default:n(574),__esModule:!0}},574:function(t,e,n){n(575),n(580),n(581),n(582),t.exports=n(19).Symbol},575:function(t,e,n){"use strict";var r=n(48),o=n(71),i=n(36),u=n(50),a=n(327),c=n(576).KEY,f=n(37),s=n(152),l=n(289),p=n(139),d=n(262),y=n(290),v=n(291),h=n(577),m=n(578),b=n(131),g=n(52),_=n(72),w=n(150),S=n(137),O=n(288),x=n(579),k=n(329),E=n(70),j=n(75),P=k.f,L=E.f,T=x.f,M=r.Symbol,A=r.JSON,C=A&&A.stringify,N=d("_hidden"),F=d("toPrimitive"),I={}.propertyIsEnumerable,R=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),J=Object.prototype,V="function"==typeof M,W=r.QObject,H=!W||!W.prototype||!W.prototype.findChild,U=i&&f(function(){return 7!=O(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(J,e);r&&delete J[e],L(t,e,n),r&&t!==J&&L(J,e,r)}:L,B=function(t){var e=D[t]=O(M.prototype);return e._k=t,e},K=V&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},z=function(t,e,n){return t===J&&z(G,e,n),b(t),e=w(e,!0),b(n),o(D,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=O(n,{enumerable:S(0,!1)})):(o(t,N)||L(t,N,S(1,{})),t[N][e]=!0),U(t,e,n)):L(t,e,n)},Y=function(t,e){b(t);for(var n,r=h(e=_(e)),o=0,i=r.length;i>o;)z(t,n=r[o++],e[n]);return t},q=function(t){var e=I.call(this,t=w(t,!0));return!(this===J&&o(D,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,N)&&this[N][t])||e)},Q=function(t,e){if(t=_(t),e=w(e,!0),t!==J||!o(D,e)||o(G,e)){var n=P(t,e);return!n||!o(D,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=T(_(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==N||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===J,r=T(n?G:_(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(J,e)||i.push(D[e]);return i};V||(a((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(G,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),U(this,t,S(1,n))};return i&&H&&U(J,t,{configurable:!0,set:e}),B(t)}).prototype,"toString",function(){return this._k}),k.f=Q,E.f=z,n(328).f=x.f=X,n(140).f=q,n(154).f=Z,i&&!n(138)&&a(J,"propertyIsEnumerable",q,!0),y.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!V,{Symbol:M});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=j(d.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,e){return void 0===e?O(t):Y(O(t),e)},defineProperty:z,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),A&&u(u.S+u.F*(!V||f(function(){var t=M();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!K(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,C.apply(A,r)}}),M.prototype[F]||n(127)(M.prototype,F,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},576:function(t,e,n){var r=n(139)("meta"),o=n(52),i=n(71),u=n(70).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(37)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},577:function(t,e,n){var r=n(75),o=n(154),i=n(140);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},578:function(t,e,n){var r=n(174);t.exports=Array.isArray||function(t){return"Array"==r(t)}},579:function(t,e,n){var r=n(72),o=n(328).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return u.slice()}}(t):o(r(t))}},580:function(t,e){},581:function(t,e,n){n(291)("asyncIterator")},582:function(t,e,n){n(291)("observable")},583:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(584)),o=u(n(588)),i=u(n(325));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},584:function(t,e,n){t.exports={default:n(585),__esModule:!0}},585:function(t,e,n){n(586),t.exports=n(19).Object.setPrototypeOf},586:function(t,e,n){var r=n(50);r(r.S,"Object",{setPrototypeOf:n(587).set})},587:function(t,e,n){var r=n(52),o=n(131),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(170)(Function.call,n(329).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},588:function(t,e,n){t.exports={default:n(589),__esModule:!0}},589:function(t,e,n){n(590);var r=n(19).Object;t.exports=function(t,e){return r.create(t,e)}},590:function(t,e,n){var r=n(50);r(r.S,"Object",{create:n(288)})}}]);
//# sourceMappingURL=18-43f40fe2c8dc421f0d45.js.map