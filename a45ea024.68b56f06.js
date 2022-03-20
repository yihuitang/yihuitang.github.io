(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{285:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),o=(r(0),r(373)),i={date:new Date("2020-06-28T00:00:00.000Z"),title:"CodeLab \u2764 Siri",slug:"codelab-like-siri",tags:["\u6280\u672f\u6587\u6863","\u73a9\u7ed9\u4f60\u770b","CodeLab\u2764\u9009","Adapter","Neverland"],author:"CodeLab",categories:["CodeLab"]},l={permalink:"/blog/2020/06/28/codelab-adapter-siri",editUrl:"https://github.com/CodeLabClub/NewCodeLabWeb/tree/master/blog/codelab-adapter-siri.md",source:"@site/blog/codelab-adapter-siri.md",description:"\u6211\u4eec\u8fd1\u671f\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684 Adapter \u63d2\u4ef6: extensionhttpeim.py (\u53ef\u5728\u63d2\u4ef6\u5e02\u573a\u4e0b\u8f7d)",date:"2020-06-28T00:00:00.000Z",tags:[{label:"\u6280\u672f\u6587\u6863",permalink:"/blog/tags/\u6280\u672f\u6587\u6863"},{label:"\u73a9\u7ed9\u4f60\u770b",permalink:"/blog/tags/\u73a9\u7ed9\u4f60\u770b"},{label:"CodeLab\u2764\u9009",permalink:"/blog/tags/code-lab-\u2764-\u9009"},{label:"Adapter",permalink:"/blog/tags/adapter"},{label:"Neverland",permalink:"/blog/tags/neverland"}],title:"CodeLab \u2764 Siri",readingTime:.68,truncated:!0,prevItem:{title:"\u7f16\u7a0b\u5c11\u5e74\u518d\u52a0\u4e00",permalink:"/blog/2020/06/29/\u7f16\u7a0b\u5c11\u5e74\u518d\u52a0\u4e00"},nextItem:{title:"Hey Siri, \u63a7\u5236\u4e50\u9ad8",permalink:"/blog/2020/06/28/hey-siri"}},c=[],p={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6211\u4eec\u8fd1\u671f\u53d1\u5e03\u4e86\u4e00\u4e2a\u65b0\u7684 Adapter \u63d2\u4ef6: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CodeLabClub/codelab_adapter_extensions/blob/master/extensions_v3/extension_http_eim.py"}),"extension_http_eim.py")," (\u53ef\u5728",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://adapter.codelab.club/extension_guide/extension_market/"}),"\u63d2\u4ef6\u5e02\u573a"),"\u4e0b\u8f7d)"),Object(o.b)("p",null,"\u4f7f\u7528\u8be5\u63d2\u4ef6\uff0c\u53ef\u5c06 Siri \u63a5\u5165\u5230 Scratch\uff0c\u5e76\u4e8e CodeLab \u53ef\u7f16\u7a0b\u7a7a\u95f4\u91cc\u7684\u4e00\u5207\u4e92\u52a8\u3002"))}b.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);