(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"Highlight",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),a=(r(0),r(373)),c={id:"mdx",title:"Powered by MDX"},i={id:"adapter/mdx",isDocsHomePage:!1,title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/adapter/mdx.md",permalink:"/docs/adapter/mdx",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/adapter/mdx.md",sidebar:"someSidebar",previous:{title:"docwhywhywhy",permalink:"/docs/adapter/doc5"},next:{title:"\u4ece\u8fd9\u91cc\u5f00\u59cb",permalink:"/docs/adapter/doc0"}},p=[],u=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={rightToc:p,Highlight:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(a.b)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(a.b)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(a.b)("p",null,"I can write ",Object(a.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(a.b)("em",{parentName:"p"},"JSX"),"!"))}l.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||s[b]||a;return r?o.a.createElement(f,i(i({ref:t},u),{},{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);