"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3113],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2174:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={slug:"docker-deploy-jar",title:"Docker\u90e8\u7f72Java\u9879\u76ee",authors:"zeffon",tags:["docker","java"],date:new Date("2019-09-11T00:00:00.000Z")},l=void 0,u={permalink:"/blog/docker-deploy-jar",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019/2019-09-11-docker-deploy-jar.md",source:"@site/blog/2019/2019-09-11-docker-deploy-jar.md",title:"Docker\u90e8\u7f72Java\u9879\u76ee",description:"\u4ecb\u7ecd\u4f7f\u7528 Docker \u901a\u8fc7 Dockerfile \u6587\u4ef6\u5b9a\u5236 SpringBoot \u9879\u76ee\u7684 Jar \u6210\u955c\u50cf\uff0c\u5e76\u63a8\u9001\u5230\u963f\u91cc\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\u3002",date:"2019-09-11T00:00:00.000Z",formattedDate:"September 11, 2019",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"java",permalink:"/blog/tags/java"}],readingTime:1.52,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Redis\u7684\u4f7f\u7528",permalink:"/blog/install-redis"},nextItem:{title:"Linux\u642d\u5efaDocker\u73af\u5883",permalink:"/blog/linux-install-docker"}},p={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ecb\u7ecd\u4f7f\u7528 Docker \u901a\u8fc7 Dockerfile \u6587\u4ef6\u5b9a\u5236 SpringBoot \u9879\u76ee\u7684 Jar \u6210\u955c\u50cf\uff0c\u5e76\u63a8\u9001\u5230\u963f\u91cc\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\u3002"))}m.isMDXComponent=!0}}]);