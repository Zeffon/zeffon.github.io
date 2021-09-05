"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4211],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),b=o,g=f["".concat(l,".").concat(b)]||f[b]||s[b]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5924:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return b}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={slug:"springboot-elasticsearch",title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",authors:"zeffon",tags:["java","database"],date:new Date("2021-05-05T00:00:00.000Z")},l=void 0,u={permalink:"/blog/springboot-elasticsearch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021/2021-05-05-springboot-elasticsearch.md",source:"@site/blog/2021/2021-05-05-springboot-elasticsearch.md",title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",description:"\u4e0a\u6587\u4e3b\u8981\u6709\u5199\u5173\u4e8e ES \u6570\u636e\u5e93\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 SpringBoot \u4e2d\u5e94\u7528 ES \u6570\u636e\u5e93\u7684\u76f8\u5173\u6d41\u7a0b\u3002",date:"2021-05-05T00:00:00.000Z",formattedDate:"May 5, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"database",permalink:"/blog/tags/database"}],readingTime:2.43,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"TypeScript \u57fa\u7840\u68b3\u7406",permalink:"/blog/typeScript"},nextItem:{title:"ES\u6570\u636e\u5e93\u7684\u4f7f\u7528",permalink:"/blog/elasticsearch"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u6587\u4e3b\u8981\u6709\u5199\u5173\u4e8e ES \u6570\u636e\u5e93\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 SpringBoot \u4e2d\u5e94\u7528 ES \u6570\u636e\u5e93\u7684\u76f8\u5173\u6d41\u7a0b\u3002\n\u7531\u4e8e\u9ad8\u7248\u672c\u7684 ES \u6570\u636e\u5e93\u5728 spring-boot-starter-data-elasticsearch \u7684\u4f9d\u8d56\u4e2d\u652f\u6301\u90fd\u662f\u6bd4\u8f83\u65e7\u7248\u672c\u7684\uff0c\u6240\u4ee5\u4e0d\u91c7\u7528\u8be5\u4f9d\u8d56\uff0c\u800c\u662f\u91c7\u7528 elasticsearch \u548c elasticsearch-rest-high-level-client \u8fdb\u884c\u914d\u7f6e\u3002\u8fd9\u4e2a\u4e00\u76f4\u6709\u518d\u7ef4\u62a4\uff0c\u76f4\u63a5\u5f15\u8fdb\u76f8\u5bf9\u5e94\u7248\u672c\u7684\u5373\u53ef\u3002"))}b.isMDXComponent=!0}}]);