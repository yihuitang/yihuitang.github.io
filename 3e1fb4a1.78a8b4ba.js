(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(9),b=(r(0),r(373)),c={title:"\u53d1\u5e03 CodeLab Adapter 4.8",date:new Date("2021-05-07T00:00:00.000Z"),tags:["CodeLab"],Slug:"adapter-5-7"},o={permalink:"/blog/2021/05/07/4.8-release",editUrl:"https://github.com/CodeLabClub/NewCodeLabWeb/tree/master/blog/4.8-release.md",source:"@site/blog/4.8-release.md",description:"\u4ee5\u4e0b\u662f\u81ea 4.7 \u7248\u672c\u4ee5\u6765\u7684\u4e3b\u8981\u6539\u8fdb\u3002 \u5177\u4f53\u7ec6\u8282\u53c2\u8003changelog",date:"2021-05-07T00:00:00.000Z",tags:[{label:"CodeLab",permalink:"/blog/tags/code-lab"}],title:"\u53d1\u5e03 CodeLab Adapter 4.8",readingTime:.815,truncated:!0,prevItem:{title:"\u53d1\u5e03 CodeLab Adapter 4.9",permalink:"/blog/2021/05/31/4.9-release"},nextItem:{title:"\u53d1\u5e03 CodeLab Adapter 4.7",permalink:"/blog/2021/04/09/4.7-release"}},l=[{value:"webUI \u66f4\u65b0",id:"webui-\u66f4\u65b0",children:[]},{value:"Python \u63d2\u4ef6",id:"python-\u63d2\u4ef6",children:[{value:"demo",id:"demo",children:[]},{value:"\u4e00\u4e9b\u5947\u602a\u7684\u60f3\u6cd5",id:"\u4e00\u4e9b\u5947\u602a\u7684\u60f3\u6cd5",children:[]}]},{value:"OSC \u63d2\u4ef6",id:"osc-\u63d2\u4ef6",children:[]},{value:"microbit radio \u63d2\u4ef6",id:"microbit-radio-\u63d2\u4ef6",children:[]}],i={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",Object(a.a)({parentName:"p"},{src:"/img/63904194b51c887981829d54dc4d1935.png",alt:null}))),Object(b.b)("p",null,"\u4ee5\u4e0b\u662f\u81ea 4.7 \u7248\u672c\u4ee5\u6765\u7684\u4e3b\u8981\u6539\u8fdb\u3002 \u5177\u4f53\u7ec6\u8282\u53c2\u8003",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://adapter.codelab.club/changelog/"}),"changelog")),Object(b.b)("h1",{id:"\u5185\u6838core\u66f4\u65b0"},"\u5185\u6838(core)\u66f4\u65b0"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://adapter.codelab.club/dev_guide/%E5%AE%9A%E5%88%B6%E4%B8%8E%E5%88%86%E5%8F%91/#_2"}),"\u8f6f\u4ef6\u66f4\u65b0\u6e90(",Object(b.b)("inlineCode",{parentName:"a"},"LATEST_VERSION"),")"),"\u53ef\u914d\u7f6e\uff0c\u65b9\u4fbf\u5b9a\u5236\u540e\u4e8c\u6b21\u5206\u53d1\u3002"),Object(b.b)("h2",{id:"webui-\u66f4\u65b0"},"webUI \u66f4\u65b0"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u53ef\u6269\u5c55\u7684 webUI extension: ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CodeLabClub/codelab_adapter_extensions/blob/master/extensions_v3/extension_webUI_manager.py"}),"extension_webUI_manager.py"),",  \u4f7f\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u6269\u5c55 UI \u529f\u80fd\u3002\u8be5\u63d2\u4ef6\u5f00\u673a\u81ea\u542f\u3002"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://create.codelab.club/projects/editor/"}),"CodeLab \u793e\u533a\u521b\u4f5c\u5e73\u53f0")," \u66ff\u4ee3 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://scratch-beta.codelab.club/"}),"scratch beta")),Object(b.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u6253\u5f00 host \u76ee\u5f55\u529f\u80fd"),Object(b.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u5c0f\u56fe\u6807\u6dfb\u52a0\u6253\u5f00\u4e3b\u76ee\u5f55( ",Object(b.b)("strong",{parentName:"li"},"Open Adapter Home")," )\u83dc\u5355\u6309\u94ae")),Object(b.b)("h1",{id:"python-\u73af\u5883\u66f4\u65b0"},"Python \u73af\u5883\u66f4\u65b0"),Object(b.b)("p",null,"\u6dfb\u52a0 Toio \u548c microbit \u7684 Python \u9a71\u52a8; "),Object(b.b)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 Adapter Jupyterlab \u4e2d\u4e0e Toio \u548c microbit ",Object(b.b)("strong",{parentName:"p"},"\u4ea4\u4e92")," \uff01"),Object(b.b)("video",{width:"80%",src:"https://adapter.codelab.club/video/1620365683263637.mp4",controls:"controls"}),Object(b.b)("p",null,"\u5165\u95e8\u6848\u4f8b\u53ef\u4ee5\u770b Adapter \u5185\u7f6e\u7684 notebooks:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"hello_Toio.ipynb"),Object(b.b)("li",{parentName:"ul"},"hello_microbit.ipynb: \u5728\u672c\u5730 Python \u4e2d\u4e0e microbit \u5b9e\u65f6\u4ea4\u4e92\uff0c\u65e0\u9700\u70e7\u5165\uff0c\u610f\u5473\u7740\u53ef\u4ee5\u5728\u672c\u5730Python\u7a0b\u5e8f\u4e2d\uff0c\u628amicrobit\u89c6\u4e3a ",Object(b.b)("strong",{parentName:"li"},"\u6d3b\u7684")," \u5916\u8bbe")),Object(b.b)("h1",{id:"\u63d2\u4ef6\u66f4\u65b0"},"\u63d2\u4ef6\u66f4\u65b0"),Object(b.b)("h2",{id:"python-\u63d2\u4ef6"},"Python \u63d2\u4ef6"),Object(b.b)("p",null,"\u4e3a ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://adapter.codelab.club/extension_guide/extension_python_kernel/"}),"Python \u63d2\u4ef6"),"\u5f15\u5165 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python-requests.org/zh_CN/latest/"}),"requests"),"\u3002"),Object(b.b)("p",null,"\u8003\u8651\u5230\u7f51\u7edc\u6781\u4e3a\u5f3a\u5927\uff0cPython \u63d2\u4ef6\u5141\u8bb8\u7528\u6237\u5728 Scratch \u4e2d\u76f4\u63a5\u4e0e requests \u4ea4\u4e92\uff08\u53ea\u652f\u6301\u8868\u8fbe\u5f0f\uff0c\u5f62\u5982",Object(b.b)("inlineCode",{parentName:"p"},"requests.get(...), requests.post(...)"),"\uff09\u3002"),Object(b.b)("p",null,"\u7531\u4e8e requests \u7684 API \u6781\u4e3a\u6f02\u4eae(\u652f\u6301\u94fe\u5f0f\u98ce\u683c)\uff0c\u4f60\u51e0\u4e4e\u53ef\u4ee5\u5355\u4e2a\u8868\u8fbe\u5f0f\u4e2d\u5e72\u7edd\u5927\u591a\u6570\u7684\u4e8b\u60c5\uff01"),Object(b.b)("p",null,"\u4e00\u4e9b\u5178\u578b\u7684\u7528\u4f8b\u5305\u62ec:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://adapter.codelab.club/user_guide/%E4%B8%8E%E5%A4%96%E9%83%A8%E7%B3%BB%E7%BB%9F%E9%80%9A%E4%BF%A1/#requests"}),"\u4e24\u4e2a Adapter \u4e4b\u95f4\u7684\u6d88\u606f\u901a\u4fe1")),Object(b.b)("li",{parentName:"ul"},"\u89e6\u53d1 webhook"),Object(b.b)("li",{parentName:"ul"},"\u8bf7\u6c42",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/public-apis/public-apis"}),"\u516c\u5f00\u7684\u7f51\u7edc API")),Object(b.b)("li",{parentName:"ul"},"\u4e0e\u81ea\u5df1\u642d\u5efa\u7684 web server \u4ea4\u4e92")),Object(b.b)("h3",{id:"demo"},"demo"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'requests.get("http://httpbin.org/get")\n# \u94fe\u5f0f\u5199\u6cd5\nrequests.get("http://httpbin.org/get").text\nrequests.get("http://httpbin.org/get").json()\n\n# \u643a\u5e26\u53c2\u6570\nrequests.get("http://httpbin.org/get", params={"name": "codelab"})\n\n# post\nrequests.post(\'http://httpbin.org/post\', data = {\'key\':\'value\'})\n')),Object(b.b)("h3",{id:"\u4e00\u4e9b\u5947\u602a\u7684\u60f3\u6cd5"},"\u4e00\u4e9b\u5947\u602a\u7684\u60f3\u6cd5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u901a\u8fc7\u4e0e\u5e26\u6709\u5b58\u50a8\u80fd\u529b\u7684 API \u7ed3\u5408\uff0c\u53ef\u4ee5\u6784\u5efa\u51fa\u7c7b\u4f3c\u4e91\u53d8\u91cf\u8fd9\u79cd\u4e1c\u897f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6216\u8005\u4f7f\u7528 ",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/typicode/json-server"}),"json-server")," \u4e34\u65f6\u642d\u5efa\u4e00\u4e2a")))),Object(b.b)("h2",{id:"osc-\u63d2\u4ef6"},"OSC \u63d2\u4ef6"),Object(b.b)("p",null,"\u52a0\u901f ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://adapter.codelab.club/extension_guide/osc/"}),"OSC")," send \u7684\u901f\u5ea6\uff0c \u4ece Scratch \u53d1\u51fa\u7684\u6d88\u606f\uff0c\u5ef6\u8fdf\u57282-3\u6beb\u79d2\u3002 "),Object(b.b)("p",null,"\u97f3\u4e50\u9879\u76ee\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u5f88\u9ad8\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u652f\u6301",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.codelab.club/blog/2021/04/08/neverlandsle"}),"NeverlandBeats"),"\uff0c\u6211\u4eec\u6539\u8fdb\u4e86 OSC \u673a\u5236\uff0c\u7f29\u77ed\u6d88\u606f\u6d41\u8f6c\u7684\u65f6\u95f4\u3002"),Object(b.b)("h2",{id:"microbit-radio-\u63d2\u4ef6"},"microbit radio \u63d2\u4ef6"),Object(b.b)("p",null,"\u4e3a ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeLabClub/codelab_adapter_extensions/blob/master/extensions_v3/extension_microbit_radio.py#L116"}),"microbit radio")," \u63d2\u4ef6\u52a0\u9501"))}p.isMDXComponent=!0},373:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,O=u["".concat(c,".").concat(d)]||u[d]||s[d]||b;return r?n.a.createElement(O,o(o({ref:t},i),{},{components:r})):n.a.createElement(O,o({ref:t},i))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);