"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5501],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3869:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={slug:"browser-storage",title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u5dee\u5f02",authors:"zeffon",tags:["notes"],date:"2021-10-15 10:08"},u=void 0,l={permalink:"/blog/browser-storage",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-10-15-browser-storage.md",source:"@site/blog/2021/2021-10-15-browser-storage.md",title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u5dee\u5f02",description:"\u5e73\u65f6\u5728\u5f00\u53d1Web\u9875\u9762\u7684\u65f6\u5019\uff0c\u501f\u52a9\u4e8e\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u6765\u50a8\u5b58\u6570\u636e\u662f\u5f88\u5e38\u89c1\u7684\u3002\u4f46\u662f\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\u6709\u4e09\u79cd\uff0c\u5206\u522b\u662f Cookie\uff0cLocal Storage\uff0cSession Storage\u3002\u4e09\u8005\u662f\u6709\u6240\u533a\u522b\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u8fd9\u4e09\u8005\u6709\u6df1\u523b\u7684\u8ba4\u8bc6\u3002\u8fd9\u6837\u5728\u5f00\u53d1\u7684\u65f6\u5019\u624d\u80fd\u6b63\u786e\u5730\u9009\u62e9\u6211\u4eec\u9700\u8981\u7684\u7f13\u5b58\u7c7b\u578b\u3002",date:"2021-10-15T10:08:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:2.2,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],nextItem:{title:"CSS \u4e66\u5199\u89c4\u8303",permalink:"/blog/css-standard"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5e73\u65f6\u5728\u5f00\u53d1Web\u9875\u9762\u7684\u65f6\u5019\uff0c\u501f\u52a9\u4e8e\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u6765\u50a8\u5b58\u6570\u636e\u662f\u5f88\u5e38\u89c1\u7684\u3002\u4f46\u662f\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\u6709\u4e09\u79cd\uff0c\u5206\u522b\u662f ",(0,a.kt)("strong",{parentName:"p"},"Cookie"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"Local Storage"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"Session Storage"),"\u3002\u4e09\u8005\u662f\u6709\u6240\u533a\u522b\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u8fd9\u4e09\u8005\u6709\u6df1\u523b\u7684\u8ba4\u8bc6\u3002\u8fd9\u6837\u5728\u5f00\u53d1\u7684\u65f6\u5019\u624d\u80fd\u6b63\u786e\u5730\u9009\u62e9\u6211\u4eec\u9700\u8981\u7684\u7f13\u5b58\u7c7b\u578b\u3002"))}m.isMDXComponent=!0}}]);