"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7370],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=p,b=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55581:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(87462),p=n(63366),a=(n(67294),n(3905)),o=["components"],i={slug:"js-ip-compare",title:"JS \u5b57\u7b26\u4e32IP\u5730\u5740\u6bd4\u8f83\u5927\u5c0f",authors:"zeffon",tags:["js"],date:"2022-01-21 11:45"},l=void 0,c={permalink:"/blog/js-ip-compare",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2022/2022-01-21-js-ip-compare.md",source:"@site/blog/2022/2022-01-21-js-ip-compare.md",title:"JS \u5b57\u7b26\u4e32IP\u5730\u5740\u6bd4\u8f83\u5927\u5c0f",description:"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u6bd4\u8f83\u5927\u5c0f\u8fd9\u4e2a\u95ee\u9898\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\uff0c\u5927\u591a\u662f\u6bd4\u8f83\u6570\u5b57\u7684\u5927\u5c0f\uff0c\u800c\u5b57\u7b26\u4e32\u6bd4\u8f83\u5927\u5c0f\u4e00\u822c\u662f\u7279\u6b8a\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\uff0c\u6bd4\u5982\u5f00\u5934\u90fd\u662f\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\u3001IP \u5730\u5740\u3001\u5b57\u7b26\u4e32\u65f6\u95f4\u7b49\u3002\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5b57\u6bcd \u548c \u5b57\u7b26\u4e32\u65f6\u95f4\u90fd\u6bd4\u8f83\u597d\u5904\u7406\u3002\u5b57\u6bcd\u4f1a\u6839\u636e ASCII \u7801\u8fdb\u884c\u5927\u5c0f\u6bd4\u8f83\uff0c\u800c\u5b57\u7b26\u4e32\u65f6\u95f4\u53ef\u4ee5\u8f6c\u5316\u4e3a Date \u65f6\u95f4\u683c\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002\u800c\u5b57\u7b26\u4e32 IP \u5730\u5740\u6709\u5565\u597d\u7684\u5904\u7406\u65b9\u6848\uff1f",date:"2022-01-21T11:45:00.000Z",formattedDate:"January 21, 2022",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:1.21,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],nextItem:{title:"PNPM \u521d\u8bc6",permalink:"/blog/pnpm"}},u={authorsImageUrls:[void 0]},s=[{value:"IP \u5730\u5740",id:"ip-\u5730\u5740",children:[]},{value:"\u8ba8\u8bba",id:"\u8ba8\u8bba",children:[]},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",children:[]}],m={toc:s};function f(e){var t=e.components,n=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u6bd4\u8f83\u5927\u5c0f\u8fd9\u4e2a\u95ee\u9898\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\uff0c\u5927\u591a\u662f\u6bd4\u8f83\u6570\u5b57\u7684\u5927\u5c0f\uff0c\u800c\u5b57\u7b26\u4e32\u6bd4\u8f83\u5927\u5c0f\u4e00\u822c\u662f\u7279\u6b8a\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\uff0c\u6bd4\u5982\u5f00\u5934\u90fd\u662f\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32\u3001IP \u5730\u5740\u3001\u5b57\u7b26\u4e32\u65f6\u95f4\u7b49\u3002\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5b57\u6bcd \u548c \u5b57\u7b26\u4e32\u65f6\u95f4\u90fd\u6bd4\u8f83\u597d\u5904\u7406\u3002\u5b57\u6bcd\u4f1a\u6839\u636e ASCII \u7801\u8fdb\u884c\u5927\u5c0f\u6bd4\u8f83\uff0c\u800c\u5b57\u7b26\u4e32\u65f6\u95f4\u53ef\u4ee5\u8f6c\u5316\u4e3a Date \u65f6\u95f4\u683c\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002\u800c\u5b57\u7b26\u4e32 IP \u5730\u5740\u6709\u5565\u597d\u7684\u5904\u7406\u65b9\u6848\uff1f"),(0,a.kt)("h2",{id:"ip-\u5730\u5740"},"IP \u5730\u5740"),(0,a.kt)("p",null,"IP \u5730\u5740\uff08\u8fd9\u91cc\u6307\u7684\u662f IP V4\uff09\u662f\u4e00\u4e2a 32 \u4f4d\u7684\u4e8c\u8fdb\u5236\u6570\uff0c\u901a\u5e38\u88ab\u5206\u5272\u4e3a 4 \u4e2a\u201c8 \u4f4d",(0,a.kt)("a",{parentName:"p",href:"http://baike.baidu.com/view/18536.htm"},"\u4e8c\u8fdb\u5236"),"\u6570\u201d\uff08\u4e5f\u5c31\u662f 4 \u4e2a\u5b57\u8282\uff09\u3002IP \u5730\u5740\u901a\u5e38\u7528\u201c",(0,a.kt)("a",{parentName:"p",href:"http://baike.baidu.com/view/828066.htm"},"\u70b9\u5206\u5341\u8fdb\u5236"),"\u201d\u8868\u793a\u6210\uff08a.b.c.d\uff09\u7684\u5f62\u5f0f\uff0c\u5176\u4e2d\uff0ca,b,c,d \u90fd\u662f 0~255 \u4e4b\u95f4\u7684\u5341\u8fdb\u5236\u6574\u6570\u3002"),(0,a.kt)("p",null,"\u4f8b\uff1a\u70b9\u5206\u5341\u8fdb IP \u5730\u5740\uff081.2.3.4\uff09\uff0c\u5b9e\u9645\u4e0a\u662f 32 \u4f4d\u4e8c\u8fdb\u5236\u6570\uff0800000001.00000010.0000011.00000100\uff09\u3002"),(0,a.kt)("h2",{id:"\u8ba8\u8bba"},"\u8ba8\u8bba"),(0,a.kt)("p",null,"\u76f4\u63a5\u5c06 ip \u5730\u5740\u4e2d . \u53bb\u6389\uff0c\u518d\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u4e0d\u5c31\u89e3\u51b3\u4e86\u5417\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const ipStr1 = "192.168.1.35";\nconst ipStr2 = "192.168.2.35";\nconst ipNum1 = parseInt(ipStr1.replaceAll(".", ""));\nconst ipNum2 = parseInt(ipStr2.replaceAll(".", ""));\nconsole.log(ipNum1 > ipNum2); // false\n')),(0,a.kt)("p",null,"\u8fd9\u4e0d\u662f\u5f88\u597d\u89e3\u51b3\u4e86\u5417\uff1f\u8fd9\u662f\u57fa\u4e8e\u8f6c\u6362\u540e\u7684\u4f4d\u6570\u4e00\u6837\uff0c\u8981\u662f\u4e0d\u4e00\u6837\u5c31\u65e0\u6cd5\u4f7f\u7528\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const ipStr1 = "192.200.1.35";\nconst ipStr2 = "192.168.201.35";\nconst ipNum1 = parseInt(ipStr1.replaceAll(".", ""));\nconst ipNum2 = parseInt(ipStr2.replaceAll(".", ""));\nconsole.log(ipNum1 > ipNum2); // false\n')),(0,a.kt)("p",null,"\u6ca1\u6709\u8003\u8651\u5230\u6240\u5728\u6bb5\u4f4d\u7684\u4f4d\u6570\uff0c\u5bfc\u81f4\u8fd9\u6837\u6bd4\u8f83\u65e0\u6cd5\u51c6\u786e\u83b7\u53d6\u7ed3\u679c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u8fd9\u79cd\u65b9\u6848\u662f\u4e0d\u53ef\u53d6\u7684\u3002")),(0,a.kt)("h2",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4f8b\u5b50\uff0c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff0c\u4e00\u4e2a\u5341\u8fdb\u5236\u7684 IP\uff08a.b.c.d\uff09\u4e2d\uff0cabcd \u4e2d\u6bcf\u4e00\u4f4d\u6700\u591a\u90fd\u662f\u4e09\u4f4d\u6570\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e0d\u540c\u6bb5\u7684\u6570\u503c \u4e58\u4ee5 ip \u6bb5\u5185\u201c\u5355\u4f4d\u201d\u6570\uff0c\u518d\u5404\u4e2a\u4e4b\u548c\uff0c\u5c31\u662f\u8be5 IP \u7684\u6570\u503c\u4e86\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u600e\u4e48\u77e5\u9053\u201c\u5355\u4f4d\u201d\u6570\u5462\uff1f\n\u4ece\u53f3\u5230\u5de6\uff1a\nd \u662f\u4ece\u7b2c\u4e00\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 1\nc \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 1000\nb \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 1000000\na \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 1000000000"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function ipToInt(ip) {\n  const ipStrArr = ip.split(".");\n  return (\n    parseInt(ipStrArr[0]) * 1000000000 +\n    parseInt(ipStrArr[1]) * 1000000 +\n    parseInt(ipStrArr[2]) * 1000 +\n    parseInt(ipStrArr[3])\n  );\n}\n')),(0,a.kt)("p",null,"IP \u5730\u5740\u4e2d\uff0cabcd \u4e2d\u6700\u5c0f\u503c\u662f 0\uff0c\u6700\u5927\u503c\u662f 255\uff0c\u4e5f\u5c31\u662f 256 \u4e2a\u6570\u5b57\u3002\u521a\u597d\u662f 16 \u7684\u5e73\u65b9\uff0c\u8f6c\u5316\u4e3a\u5341\u516d\u8fdb\u5236\u4e5f\u5c31\u662f\u4e24\u4e2a\u4f4d\u6570\u3002\n\u90a3\u4e48\u201c\u5355\u4f4d\u201d\u6570\u53ef\u4ee5\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u7684\u6570\u503c\u6765\u8ba1\u7b97\n\u4ece\u53f3\u5230\u5de6\uff1a\nd \u662f\u4ece\u7b2c\u4e00\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 1\nc \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 0x100\nb \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 0x10000\na \u662f\u4ece\u7b2c\u56db\u4e2a\u4f4d\u6570\u5f00\u59cb\uff0c\u5355\u4f4d\u81ea\u7136\u662f 0x1000000"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function ipToInt(ip) {\n  const ipStrArr = ip.split(".");\n  return (\n    parseInt(ipStrArr[0]) * 0x1000000 +\n    parseInt(ipStrArr[1]) * 0x10000 +\n    parseInt(ipStrArr[2]) * 0x100 +\n    parseInt(ipStrArr[3])\n  );\n}\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528\u6309\u4f4d\u8ba1\u7b97"),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"\u5de6\u4f4d\u79fb\u8fd0\u7b97\u7b26"},"\u5de6\u4f4d\u79fb\u8fd0\u7b97\u7b26"),(0,a.kt)("p",{parentName:"blockquote"},"\u5de6\u79fb\u4f4d\u8fd0\u7b97\u7b26\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"<<"),"\uff0c\u5176\u8fd0\u7b97\u89c4\u5219\u662f\uff1a\u6309\u4e8c\u8fdb\u5236\u5f62\u5f0f\u628a\u6240\u6709\u7684\u6570\u5b57\u5411\u5de6\u79fb\u52a8\u5bf9\u5e94\u7684\u4f4d\u6570\uff0c\u9ad8\u4f4d\u79fb\u51fa\uff08\u820d\u5f03\uff09\uff0c\u4f4e\u4f4d\u7684\u7a7a\u4f4d\u8865\u96f6\u3002"),(0,a.kt)("h4",{parentName:"blockquote",id:"\u53f3\u4f4d\u79fb\u8fd0\u7b97\u7b26"},"\u53f3\u4f4d\u79fb\u8fd0\u7b97\u7b26"),(0,a.kt)("p",{parentName:"blockquote"},"\u53f3\u4f4d\u79fb\u8fd0\u7b97\u7b26\u4e3a ",(0,a.kt)("strong",{parentName:"p"},">>"),"\uff0c\u5176\u8fd0\u7b97\u89c4\u5219\u662f\uff1a\u6309\u4e8c\u8fdb\u5236\u5f62\u5f0f\u628a\u6240\u6709\u7684\u6570\u5b57\u5411\u53f3\u79fb\u52a8\u5bf9\u5e94\u7684\u4f4d\u6570\uff0c\u4f4e\u4f4d\u79fb\u51fa\uff08\u820d\u5f03\uff09\uff0c\u9ad8\u4f4d\u7684\u7a7a\u4f4d\u8865\u96f6\u3002\n8 >> 2 = 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function ipToInt(ip) {\n    const ipStrArr = ip.split('.')\n  return (\n    ((parseInt(ipStrArr[0]) << 24) |\n     (parseInt(ipStrArr[1]) << 16) |\n     (parseInt(ipStrArr[2]) << 8) |\n     (parseInt(ipStrArr[3]) >>> 0)\n  )\n}\n")))}f.isMDXComponent=!0}}]);