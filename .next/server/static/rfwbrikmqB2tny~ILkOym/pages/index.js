module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}},o=!0;try{e[r].call(a.exports,a,a.exports,n),o=!1}finally{o&&delete t[r]}return a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},0:function(e,t,n){e.exports=n("RNiq")},"0bYB":function(e,t){e.exports=require("isomorphic-unfetch")},"2Eek":function(e,t,n){e.exports=n("ltjX")},Bhuq:function(e,t,n){e.exports=n("/+oN")},Dtiu:function(e,t){e.exports=require("styled-components")},FbiP:function(e,t,n){e.exports=n("Gf4D")},Gf4D:function(e,t){e.exports=require("core-js/library/fn/object/freeze")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("eVuF"),i=n.n(o);function c(e,t,n,r,a,o,c){try{var u=e[o](c),l=u.value}catch(e){return void n(e)}u.done?t(l):i.a.resolve(l).then(r,a)}var u=n("hfKm"),l=n.n(u);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),l()(e,r.key,r)}}var f=n("XVgq"),p=n.n(f),m=n("Z7t5"),v=n.n(m);function d(e){return(d="function"==typeof v.a&&"symbol"==typeof p.a?function(e){return typeof e}:function(e){return e&&"function"==typeof v.a&&e.constructor===v.a&&e!==v.a.prototype?"symbol":typeof e})(e)}function g(e){return(g="function"==typeof v.a&&"symbol"===d(p.a)?function(e){return d(e)}:function(e){return e&&"function"==typeof v.a&&e.constructor===v.a&&e!==v.a.prototype?"symbol":d(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=n("Bhuq"),b=n.n(y),E=n("TRZx"),x=n.n(E);function w(e){return(w=x.a?b.a:function(e){return e.__proto__||b()(e)})(e)}var N=n("SqZg"),j=n.n(N);function q(e,t){return(q=x.a||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?l()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=n("cDcd"),S=n.n(_),k=(n("faye"),n("0bYB")),C=n.n(k),T=n("2Eek"),O=n.n(T),D=n("FbiP"),F=n.n(D);var M=n("Dtiu"),R=n.n(M);function Z(){var e,t,n=(e=["\n        ::after{\n        width: ","px;\n      }"],t||(t=e.slice(0)),F()(O()(e,{raw:{value:F()(t)}})));return Z=function(){return n},n}var A=function(e){var t=e.rating,n=[],r=Math.floor(t),a=(25*(t-r)).toFixed(0),o=R.a.span(Z(),a);return S.a.createElement("div",{className:"stars"},function(e){if(e>r){for(var t=0;t<e-1;t++)n.push(S.a.createElement("span",{className:"star on"}));n.push(S.a.createElement(o,{className:"star half"}))}else for(var a=0;a<e;a++)n.push(S.a.createElement("span",{className:"star on"}));for(;n.length<5;)n.push(S.a.createElement("span",{className:"star"}));return n}(t))},B=function(e){var t=e.data;return S.a.createElement("div",{className:"ui-grid-container"},S.a.createElement("div",{className:"ui-grid"},S.a.createElement("div",{className:"ui-grid-col is-quarter"},S.a.createElement("h4",null,t.name),S.a.createElement("span",null,"Overall rating: ",t.rating),S.a.createElement("br",null),S.a.createElement("span",null,t.date),S.a.createElement("br",null),S.a.createElement("span",null,"Member Since: ",t.startdate)),S.a.createElement("div",{className:"ui-grid-col is-half"},S.a.createElement("h3",null,t.title),S.a.createElement("p",null,t.description)),S.a.createElement("div",{className:"text-right ui-grid-col is-quarter"},S.a.createElement("span",null,"Quality: ",t.quality),S.a.createElement("br",null),S.a.createElement("span",null,"Value: ",t.value))))},V=function(e){var t=e.rating;return S.a.createElement("section",{className:"rating"},S.a.createElement("span",{className:"rating-total"},t),S.a.createElement("p",null,"out of 5"),S.a.createElement(A,{rating:t}))},K=function(e){var t=e.sort;return S.a.createElement("div",{className:"sort-wrap"},S.a.createElement("label",{htmlFor:"sort"},"Sort By"),S.a.createElement("select",{onChange:t,name:"sort",id:"sort",className:"sort"},S.a.createElement("option",{value:"new"},"Newest"),S.a.createElement("option",{value:"old"},"Oldest"),S.a.createElement("option",{value:"high"},"High to low"),S.a.createElement("option",{value:"low"},"Low to high")))},X=function(e){var t=e.page,n=e.lastPage,r=e.changePage;return S.a.createElement("section",{className:"pagination"},S.a.createElement("button",{value:"prev",className:"arrow prev ".concat(1===t?"hide":""),onClick:r}),S.a.createElement("span",null,"Page ",t," of ",n),S.a.createElement("button",{value:"next",className:"arrow next ".concat(t===n?"hide":""),onClick:r}))},H=(n("TIwn"),function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,a=(e=w(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==g(a)&&"function"!=typeof a?h(r):a,P(h(n),"state",{reviews:n.props.reviews,page:1}),P(h(n),"sort",function(e){var t=n.state.reviews,r=e.target.value;e.preventDefault(),"old"===r?t.sort(function(e,t){return e.date.localeCompare(t.date)}):"low"===r?t.sort(function(e,t){return e.rating-t.rating}):"high"===r?t.sort(function(e,t){return t.rating-e.rating}):t.sort(function(e,t){return t.date.localeCompare(e.date)}),n.setState({reviews:t,page:1})}),P(h(n),"changePage",function(e){var t=n.state.page;e.preventDefault(),"next"===e.target.value?n.setState({page:t+1}):n.setState({page:t-1})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=j()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,_["Component"]),n=t,r=[{key:"render",value:function(){var e=this.state,t=e.page,n=e.reviews,r=n.length,a=4*t,o=a-4,i=function(e,t,n){return--n,e.slice(n*t,(n+1)*t)}(n,4,t),c=Math.ceil(r/4),u=Math.round(n.reduce(function(e,t){return t.rating+e},0)/n.length*10)/10||5,l=i.map(function(e,t){return S.a.createElement(B,{data:e,key:t})});return S.a.createElement("div",{className:"content"},u&&S.a.createElement(V,{rating:u}),S.a.createElement("section",{className:"toolbar"},S.a.createElement("div",{className:"ui-grid-container"},S.a.createElement("div",{className:"ui-grid"},S.a.createElement("div",{className:"ui-grid-col"},S.a.createElement("div",{className:"review-total"},t===c?"".concat(o+1," of ").concat(r," Reviews"):"".concat(o+1,"-").concat(a," of ").concat(r," Reviews"))),S.a.createElement("div",{className:"ui-grid-col"},S.a.createElement(K,{sort:this.sort.bind(this)}))))),S.a.createElement("section",{className:"reviews"},l),S.a.createElement(X,{page:t,lastPage:c,changePage:this.changePage.bind(this)}))}}],o=[{key:"getInitialProps",value:function(){var e,t=(e=a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("http://localhost:3000/static/data/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{reviews:n.sort(function(e,t){return t.date.localeCompare(e.date)})});case 7:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new i.a(function(r,a){var o=e.apply(t,n);function i(e){c(o,r,a,i,u,"next",e)}function u(e){c(o,r,a,i,u,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&s(n.prototype,r),o&&s(n,o),t}());t.default=H},SqZg:function(e,t,n){e.exports=n("o5io")},TIwn:function(e,t){},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},Z7t5:function(e,t,n){e.exports=n("vqFK")},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},eVuF:function(e,t,n){e.exports=n("aC71")},faye:function(e,t){e.exports=require("react-dom")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,n){e.exports=n("TUA0")},ln6h:function(e,t,n){e.exports=n("cu1A")},ltjX:function(e,t){e.exports=require("core-js/library/fn/object/define-properties")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});