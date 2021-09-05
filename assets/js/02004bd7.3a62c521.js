"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9618],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,y=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return l},toc:function(){return f},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:"jpa-customize-entity",title:"Jpa\u8fd4\u56de\u81ea\u5b9a\u4e49\u5bf9\u8c61",authors:"zeffon",tags:["java"],date:new Date("2020-04-13T00:00:00.000Z")},u=void 0,p={permalink:"/blog/jpa-customize-entity",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2020/2020-04-13-jpa-customize-entity.md",source:"@site/blog/2020/2020-04-13-jpa-customize-entity.md",title:"Jpa\u8fd4\u56de\u81ea\u5b9a\u4e49\u5bf9\u8c61",description:"\u5728\u4f7f\u7528 Jpa \u4f5c\u4e3a\u6301\u4e45\u5c42\u65f6\uff0cRepository \u5c42\u7684\u8fd4\u56de\u5bf9\u8c61\u5f80\u5f80\u662f\u6a21\u578b\u7ee7\u627f JpaRepository \u4e2d\u7684\u5bf9\u8c61\uff0c\u60f3\u8981\u76f4\u63a5\u4f7f\u7528\u5176\u5b83\u5bf9\u8c61\u662f\u4e0d\u884c\u7684\u3002\u90a3\u4e48\u6211\u4eec\u8be5\u600e\u4e48\u5904\u7406\u5462\uff1f",date:"2020-04-13T00:00:00.000Z",formattedDate:"April 13, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:.895,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Redis\u7f13\u5b58\u96ea\u5d29\u548c\u7a7f\u900f",permalink:"/blog/redis-cache-avalanche-penetration"},nextItem:{title:"Java \u6ce8\u89e3\u68c0\u9a8c\u5668",permalink:"/blog/java-annotation-validator"}},l={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 Jpa \u4f5c\u4e3a\u6301\u4e45\u5c42\u65f6\uff0cRepository \u5c42\u7684\u8fd4\u56de\u5bf9\u8c61\u5f80\u5f80\u662f\u6a21\u578b\u7ee7\u627f JpaRepository \u4e2d\u7684\u5bf9\u8c61\uff0c\u60f3\u8981\u76f4\u63a5\u4f7f\u7528\u5176\u5b83\u5bf9\u8c61\u662f\u4e0d\u884c\u7684\u3002\u90a3\u4e48\u6211\u4eec\u8be5\u600e\u4e48\u5904\u7406\u5462\uff1f"))}m.isMDXComponent=!0}}]);