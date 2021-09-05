"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8849],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={slug:"vscode-package-and-install-vsix",title:"vscode\u6253\u5305\u548c\u5b89\u88c5vsix\u6269\u5c55\u5305",authors:"zeffon",tags:["notes"],date:new Date("2020-09-08T00:00:00.000Z")},l=void 0,u={permalink:"/blog/vscode-package-and-install-vsix",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2020/2020-09-08-vscode-package-and-install-vsix.md",source:"@site/blog/2020/2020-09-08-vscode-package-and-install-vsix.md",title:"vscode\u6253\u5305\u548c\u5b89\u88c5vsix\u6269\u5c55\u5305",description:"vscode \u4f5c\u4e3a\u5f00\u53d1\u8005\u9752\u7750\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u5176\u5f3a\u5927\u4e4b\u5904\u5c31\u662f\u514d\u8d39\u5f00\u6e90\u3001\u7cbe\u5c0f\u8f7b\u4fbf\uff0c\u8fd8\u6709\u5c31\u662f\u53ef\u4ee5\u968f\u610f\u5b89\u88c5\u5404\u79cd\u6269\u5c55\u5e94\u7528\u3002",date:"2020-09-08T00:00:00.000Z",formattedDate:"September 8, 2020",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.4,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Java\u6cdb\u578b\u7684\u8fd0\u7528",permalink:"/blog/java-generic"},nextItem:{title:"Ajax\u4e2dformdata\u4e0a\u4f20\u56fe\u7247",permalink:"/blog/ajax-formdata-object"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"vscode \u4f5c\u4e3a\u5f00\u53d1\u8005\u9752\u7750\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u5176\u5f3a\u5927\u4e4b\u5904\u5c31\u662f\u514d\u8d39\u5f00\u6e90\u3001\u7cbe\u5c0f\u8f7b\u4fbf\uff0c\u8fd8\u6709\u5c31\u662f\u53ef\u4ee5\u968f\u610f\u5b89\u88c5\u5404\u79cd\u6269\u5c55\u5e94\u7528\u3002"))}m.isMDXComponent=!0}}]);