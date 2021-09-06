"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2843],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=c(n),s=a,d=k["".concat(p,".").concat(s)]||k[s]||m[s]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9455:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"java-ioc-di",title:"Java \u63a7\u5236\u53cd\u8f6c(IoC)\u548c\u4f9d\u8d56\u6ce8\u5165(DI)",authors:"zeffon",tags:["java"],date:new Date("2019-12-06T00:00:00.000Z")},p=void 0,c={permalink:"/blog/java-ioc-di",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-12-06-java-ioc-di.md",source:"@site/blog/2019/2019-12-06-java-ioc-di.md",title:"Java \u63a7\u5236\u53cd\u8f6c(IoC)\u548c\u4f9d\u8d56\u6ce8\u5165(DI)",description:"\u63a7\u5236\u53cd\u8f6c\u548c\u4f9d\u8d56\u6ce8\u5165\u7684\u6982\u5ff5\u53ef\u80fd\u6709\u4e9b\u62bd\u8c61\uff0c\u6211\u7ec6\u60f3\u4e00\u4e0b\u4ee5\u5f80\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u662f\u4e0d\u77e5\u9053\u5b83\u4eec\u5b9e\u9645\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff0c\u5bf9\u5b83\u4eec\u7684\u7406\u89e3\u4e5f\u662f\u4ec5\u4ec5\u6709\u4e2a\u6a21\u7cca\u7684\u5f71\u5b50\u800c\u5df2\u3002\u5bf9\u6b64\u518d\u6b21\u63d0\u53ca\u5b83\u4eec\u65f6\uff0c\u6211\u4e0d\u80fd\u518d\u5bf9\u6b64\u89c6\u800c\u4e0d\u89c1\u4e86\u3002\u6240\u4ee5\u5728\u7f51\u4e0a\u67e5\u9605\u4e00\u4e9b\u8d44\u6599\uff0c\u5305\u62ec\u4e00\u4e9b\u5927\u795e\u5199\u7684\u535a\u5ba2\uff0c\u5e0c\u671b\u81ea\u5df1\u80fd\u5728\u8fd9\u6b21\u6709\u6bd4\u8f83\u6709\u597d\u7684\u8ba4\u8bc6\u3002\u5982\u679c\u6709\u7406\u89e3\u4e0d\u5230\u4f4d\u6216\u8005\u7406\u89e3\u9519\u7684\u5730\u65b9\uff0c\u671b\u5927\u5bb6\u591a\u591a\u6307\u6b63\u3002",date:"2019-12-06T00:00:00.000Z",formattedDate:"December 6, 2019",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:.585,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f",permalink:"/blog/binary-tree-traversal"},nextItem:{title:"Linux\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6587\u4ef6",permalink:"/blog/linux-environment-variable"}},u={authorsImageUrls:[void 0]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u63a7\u5236\u53cd\u8f6c IoC",id:"\u63a7\u5236\u53cd\u8f6c-ioc",children:[]},{value:"IoC \u7684\u597d\u5904",id:"ioc-\u7684\u597d\u5904",children:[]},{value:"IoC \u548c DI",id:"ioc-\u548c-di",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],k={toc:m};function s(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165"),"\u7684\u6982\u5ff5\u53ef\u80fd\u6709\u4e9b\u62bd\u8c61\uff0c\u6211\u7ec6\u60f3\u4e00\u4e0b\u4ee5\u5f80\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u662f\u4e0d\u77e5\u9053\u5b83\u4eec\u5b9e\u9645\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff0c\u5bf9\u5b83\u4eec\u7684\u7406\u89e3\u4e5f\u662f\u4ec5\u4ec5\u6709\u4e2a\u6a21\u7cca\u7684\u5f71\u5b50\u800c\u5df2\u3002\u5bf9\u6b64\u518d\u6b21\u63d0\u53ca\u5b83\u4eec\u65f6\uff0c\u6211\u4e0d\u80fd\u518d\u5bf9\u6b64\u89c6\u800c\u4e0d\u89c1\u4e86\u3002\u6240\u4ee5\u5728\u7f51\u4e0a\u67e5\u9605\u4e00\u4e9b\u8d44\u6599\uff0c\u5305\u62ec\u4e00\u4e9b\u5927\u795e\u5199\u7684\u535a\u5ba2\uff0c\u5e0c\u671b\u81ea\u5df1\u80fd\u5728\u8fd9\u6b21\u6709\u6bd4\u8f83\u6709\u597d\u7684\u8ba4\u8bc6\u3002\u5982\u679c\u6709\u7406\u89e3\u4e0d\u5230\u4f4d\u6216\u8005\u7406\u89e3\u9519\u7684\u5730\u65b9\uff0c\u671b\u5927\u5bb6\u591a\u591a\u6307\u6b63\u3002"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165"),"\u7684\u6982\u5ff5\u53ef\u80fd\u6709\u4e9b\u62bd\u8c61\uff0c\u6211\u7ec6\u60f3\u4e00\u4e0b\u4ee5\u5f80\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u662f\u4e0d\u77e5\u9053\u5b83\u4eec\u5b9e\u9645\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff0c\u5bf9\u5b83\u4eec\u7684\u7406\u89e3\u4e5f\u662f\u4ec5\u4ec5\u6709\u4e2a\u6a21\u7cca\u7684\u5f71\u5b50\u800c\u5df2\u3002\u5bf9\u6b64\u518d\u6b21\u63d0\u53ca\u5b83\u4eec\u65f6\uff0c\u6211\u4e0d\u80fd\u518d\u5bf9\u6b64\u89c6\u800c\u4e0d\u89c1\u4e86\u3002\u6240\u4ee5\u5728\u7f51\u4e0a\u67e5\u9605\u4e00\u4e9b\u8d44\u6599\uff0c\u5305\u62ec\u4e00\u4e9b\u5927\u795e\u5199\u7684\u535a\u5ba2\uff0c\u5e0c\u671b\u81ea\u5df1\u80fd\u5728\u8fd9\u6b21\u6709\u6bd4\u8f83\u6709\u597d\u7684\u8ba4\u8bc6\u3002\u5982\u679c\u6709\u7406\u89e3\u4e0d\u5230\u4f4d\u6216\u8005\u7406\u89e3\u9519\u7684\u5730\u65b9\uff0c\u671b\u5927\u5bb6\u591a\u591a\u6307\u6b63\u3002"),(0,o.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("h3",{id:"\u63a7\u5236\u53cd\u8f6c-ioc"},"\u63a7\u5236\u53cd\u8f6c IoC"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5148\u660e\u767d\u4ec0\u4e48\u662f IoC\uff1f\u5728 Java \u5f00\u53d1\u4e2d\uff0cIoC \u662f\u610f\u5473\u7740\u5c06\u4f60\u8bbe\u8ba1\u597d\u7684\u5bf9\u8c61\u4ea4\u7ed9\u4e86",(0,o.kt)("strong",{parentName:"p"},"IoC \u5bb9\u5668"),"\u8fdb\u884c\u63a7\u5236\uff0c\u800c\u4e0d\u518d\u662f\u4f20\u7edf\u7684\u5728\u4f60\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u5185\u90e8"),"\u8fdb\u884c\u63a7\u5236\u3002\u6240\u8c13\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u5c31\u662f\u8981\u53bb",(0,o.kt)("strong",{parentName:"p"},"\u53cd\u8f6c\u63a7\u5236\u6743"),"\u3002\u800c\u7406\u89e3\u597d IoC \u9700\u8981\u660e\u767d\u5728\u8fd9",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236"),"\u4e2d,\u8c01\u63a7\u5236\u8c01\uff0c\u63a7\u5236\u7740\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u662f\u53cd\u8f6c\u5462\uff1f\u8fd8\u6709\u54ea\u4e9b\u65b9\u9762\u7684\u63a7\u5236\u88ab\u53cd\u8f6c\u4e86\uff1f"),(0,o.kt)("h4",{id:"\u8c01\u63a7\u5236\u8c01\u63a7\u5236\u4ec0\u4e48"},"\u8c01\u63a7\u5236\u8c01\uff0c\u63a7\u5236\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bbe\u8ba1\uff0c\u6211\u4eec\u9700\u8981\u76f4\u63a5\u5728\u5bf9\u8c61\u5185\u90e8\u901a\u8fc7 new \u7684\u65b9\u5f0f\u8fdb\u884c\u521b\u5efa\u5bf9\u8c61\uff0c\u8fd9\u79cd\u5c5e\u4e8e\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u4e3b\u52a8"),"\u53bb\u521b\u5efa\u4f9d\u8d56\u5bf9\u8c61\uff1b\u800c IoC \u662f\u6709\u4e13\u95e8\u4e00\u4e2a\u5bb9\u5668\u6765\u521b\u5efa\u8fd9\u4e9b\u5bf9\u8c61\uff0c\u5373\u7531",(0,o.kt)("strong",{parentName:"p"},"Ioc \u5bb9\u5668"),"\u6765\u63a7\u5236\u5bf9\u8c61\u7684\u521b\u5efa\uff1b\u8c01\u63a7\u5236\u8c01\uff1f\u5f53\u7136\u662f",(0,o.kt)("strong",{parentName:"p"},"IoC \u5bb9\u5668"),"\u63a7\u5236\u4e86\u5bf9\u8c61\uff1b\u63a7\u5236\u4ec0\u4e48\uff1f\u90a3\u5c31\u662f\u4e3b\u8981\u63a7\u5236\u4e86\u5916\u90e8\u8d44\u6e90\u83b7\u53d6\u3002\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"\u4f20\u7edf\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bbe\u8ba1"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"java-IoC-and-DI-01.png",src:n(3458).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"IoC\u5bb9\u5668"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"java-IoC-and-DI-02.png",src:n(5850).Z})),(0,o.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u662f\u53cd\u8f6c\u5462"},"\u4e3a\u4ec0\u4e48\u662f\u53cd\u8f6c\u5462\uff1f"),(0,o.kt)("p",null,"\u6709\u53cd\u8f6c\u5c31\u6709\u6b63\u8f6c\u3002\u5728\u4f20\u7edf\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8bbe\u8ba1\u4e2d\u662f\u7531\u6211\u4eec\u81ea\u5df1\u5728\u5bf9\u8c61\u4e2d\u4e3b\u52a8\u63a7\u5236\u53bb\u76f4\u63a5 new \u6765\u83b7\u53d6\u4f9d\u8d56\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6b63\u8f6c\uff1b\u800c\u53cd\u8f6c\u5219\u662f\u7531\u5bb9\u5668\u6765\u5e2e\u5fd9\u521b\u5efa\u53ca\u6ce8\u5165\u4f9d\u8d56\u5bf9\u8c61\u3002\u4e3a\u4f55\u662f\u53cd\u8f6c\uff1f\u56e0\u4e3a\u7531\u5bb9\u5668\u5e2e\u6211\u4eec\u67e5\u627e\u53ca\u6ce8\u5165\u4f9d\u8d56\u5bf9\u8c61\uff0c\u5bf9\u8c61\u53ea\u662f",(0,o.kt)("strong",{parentName:"p"},"\u88ab\u52a8"),"\u7684\u63a5\u53d7\u4f9d\u8d56\u5bf9\u8c61\uff0c\u6240\u4ee5\u662f\u53cd\u8f6c\u3002"),(0,o.kt)("h4",{id:"\u54ea\u4e9b\u65b9\u9762\u7684\u63a7\u5236\u88ab\u53cd\u8f6c\u4e86"},"\u54ea\u4e9b\u65b9\u9762\u7684\u63a7\u5236\u88ab\u53cd\u8f6c\u4e86\uff1f"),(0,o.kt)("p",null,"\u4f9d\u8d56\u5bf9\u8c61\u7684\u83b7\u53d6\u88ab\u53cd\u8f6c\u4e86\u3002\u539f\u672c\u662f",(0,o.kt)("strong",{parentName:"p"},"houseService \u5bf9\u8c61"),"\u9700\u8981\u4e3b\u52a8\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"houseDao \u5bf9\u8c61"),"\u7684\uff0c\u73b0\u5728\u53d8\u6210",(0,o.kt)("strong",{parentName:"p"},"houseDao \u5bf9\u8c61"),"\u6ce8\u5165\u5230",(0,o.kt)("strong",{parentName:"p"},"houseService \u5bf9\u8c61"),"\u4e2d\u3002",(0,o.kt)("strong",{parentName:"p"},"houseService \u5bf9\u8c61"),"\u4e0d\u9700\u8981\u521b\u5efa\u4ec0\u4e48\uff0cIoC \u5bb9\u5668\u4f1a\u5e2e\u5b83\u67e5\u627e\u5e76\u6ce8\u5165\u4f9d\u8d56\u5bf9\u8c61",(0,o.kt)("strong",{parentName:"p"},"houseDao \u5bf9\u8c61"),"\u3002"),(0,o.kt)("h3",{id:"ioc-\u7684\u597d\u5904"},"IoC \u7684\u597d\u5904"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"IoC"),"\u4e0d\u662f\u4e00\u79cd\u6280\u672f\uff0c\u53ea\u662f\u4e00\u79cd\u601d\u60f3\uff0c\u4e00\u4e2a\u91cd\u8981\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u7684\u6cd5\u5219\uff0c\u5b83\u80fd\u6307\u5bfc\u6211\u4eec\u5982\u4f55\u8bbe\u8ba1\u51fa\u677e\u8026\u5408\u3001\u66f4\u4f18\u826f\u7684\u7a0b\u5e8f\u3002\u5728\u5355\u4e00\u804c\u8d23\u539f\u5219\u7684\u8bbe\u8ba1\u4e0b\uff0c\u5f88\u5c11\u6709\u5355\u72ec\u4e00\u4e2a\u5bf9\u8c61\u5c31\u80fd\u5b8c\u6210\u7684\u4efb\u52a1\u3002\u5927\u591a\u6570\u4efb\u52a1\u90fd\u9700\u8981\u590d\u6570\u7684\u5bf9\u8c61\u6765\u534f\u4f5c\u5b8c\u6210\uff0c\u8fd9\u6837\u5bf9\u8c61\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u5c31\u6709\u4e86",(0,o.kt)("strong",{parentName:"li"},"\u4f9d\u8d56"),"\u3002\u4e00\u5f00\u59cb\u5bf9\u8c61\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u662f\u81ea\u5df1\u89e3\u51b3\u7684\uff0c\u9700\u8981\u4ec0\u4e48\u5bf9\u8c61\u4e86\u5c31",(0,o.kt)("strong",{parentName:"li"},"New"),"\u4e00\u4e2a\u51fa\u6765\u7528\uff0c\u63a7\u5236\u6743\u662f\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\u672c\u8eab"),"\u3002\u4f46\u662f\u8fd9\u6837\u8026\u5408\u5ea6\u5c31\u975e\u5e38\u9ad8\uff0c\u53ef\u80fd\u67d0\u4e2a\u5bf9\u8c61\u7684\u4e00\u70b9\u5c0f\u4fee\u6539\u5c31\u4f1a\u5f15\u8d77",(0,o.kt)("strong",{parentName:"li"},"\u8fde\u9501\u53cd\u5e94"),"\uff0c\u9700\u8981\u628a\u4f9d\u8d56\u7684\u5bf9\u8c61\u4e00\u8def\u4fee\u6539\u8fc7\u53bb\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8fd9\u6837\u4f1a\u5bfc\u81f4\u4ee3\u7801\u9ad8\u5ea6\u548c\u5e76\u4e14\u96be\u4ee5\u7ef4\u62a4\u548c\u8c03\u8bd5\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u9700\u8981\u5c06\u5bf9\u8c61\u5185\u90e8\u7684\u63a7\u5236\u6743",(0,o.kt)("inlineCode",{parentName:"li"},"\u53cd\u8f6c"),"\u5230\u5916\u90e8(IoC \u5bb9\u5668)\u3002\u6709\u4e86 IoC \u5bb9\u5668\u540e\uff0c\u628a\u521b\u5efa\u548c\u67e5\u627e\u4f9d\u8d56\u5bf9\u8c61\u7684\u63a7\u5236\u6743\u4ea4\u7ed9\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"\u5bb9\u5668"),"\uff0c\u7531\u5bb9\u5668\u8fdb\u884c\u6ce8\u5165\u7ec4\u5408\u5bf9\u8c61\uff0c\u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"li"},"\u5bf9\u8c61\u4e0e\u5bf9\u8c61"),"\u4e4b\u95f4\u662f\u677e\u6563\u8026\u5408\uff0c\u8fd9\u6837\u4e5f\u65b9\u4fbf\u6d4b\u8bd5\uff0c\u5229\u4e8e\u529f\u80fd\u590d\u7528\uff0c\u66f4\u91cd\u8981\u7684\u662f\u4f7f\u5f97\u7a0b\u5e8f\u7684\u6574\u4e2a\u4f53\u7cfb\u7ed3\u6784\u53d8\u5f97\u975e\u5e38\u7075\u6d3b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5176\u5b9e IoC \u5bf9\u7f16\u7a0b\u5e26\u6765\u7684\u6700\u5927\u6539\u53d8\u4e0d\u662f\u4ece\u4ee3\u7801\u4e0a\uff0c\u800c\u662f\u4ece\u601d\u60f3\u4e0a\uff0c\u53d1\u751f\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"\u4e3b\u4ece\u6362\u4f4d"),"\u7684\u53d8\u5316\u3002\u5e94\u7528\u7a0b\u5e8f\u539f\u672c\u662f\u8001\u5927\uff0c\u8981\u83b7\u53d6\u4ec0\u4e48\u8d44\u6e90\u90fd\u662f",(0,o.kt)("strong",{parentName:"li"},"\u4e3b\u52a8"),"\u51fa\u51fb\uff0c\u4f46\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"IoC/DI\u601d\u60f3"),"\u4e2d\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c31\u53d8\u6210",(0,o.kt)("strong",{parentName:"li"},"\u88ab\u52a8"),"\u7684\u4e86\uff0c\u88ab\u52a8\u7684\u7b49\u5f85",(0,o.kt)("inlineCode",{parentName:"li"},"IoC\u5bb9\u5668"),"\u6765\u521b\u5efa\u5e76\u6ce8\u5165\u5b83\u6240\u9700\u8981\u7684\u8d44\u6e90\u4e86\u3002\u7531",(0,o.kt)("inlineCode",{parentName:"li"},"IoC\u5bb9\u5668"),"\u5e2e\u5bf9\u8c61\u627e\u76f8\u5e94\u7684\u4f9d\u8d56\u5bf9\u8c61\u5e76\u6ce8\u5165\uff0c\u800c\u4e0d\u662f\u7531\u5bf9\u8c61\u4e3b\u52a8\u53bb\u627e\u3002")),(0,o.kt)("h3",{id:"ioc-\u548c-di"},"IoC \u548c DI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DI\u2014Dependency Injection\uff0c\u5373",(0,o.kt)("inlineCode",{parentName:"li"},"\u4f9d\u8d56\u6ce8\u5165"),"\uff1a\u662f\u7ec4\u4ef6\u4e4b\u95f4\u4f9d\u8d56\u5173\u7cfb\u7531\u5bb9\u5668\u5728\u8fd0\u884c\u671f\u51b3\u5b9a\uff0c\u5f62\u8c61\u7684\u8bf4\uff0c\u5373\u7531\u5bb9\u5668\u52a8\u6001\u7684\u5c06\u67d0\u4e2a\u4f9d\u8d56\u5173\u7cfb\u6ce8\u5165\u5230\u7ec4\u4ef6\u4e4b\u4e2d\u3002\u4f9d\u8d56\u6ce8\u5165\u7684\u76ee\u7684\u5e76\u975e\u4e3a\u8f6f\u4ef6\u7cfb\u7edf\u5e26\u6765\u66f4\u591a\u529f\u80fd\uff0c\u800c\u662f\u4e3a\u4e86\u63d0\u5347\u7ec4\u4ef6\u91cd\u7528\u7684\u9891\u7387\uff0c\u5e76\u4e3a\u7cfb\u7edf\u642d\u5efa\u4e00\u4e2a\u7075\u6d3b\u3001\u53ef\u6269\u5c55\u7684\u5e73\u53f0\u3002\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165\u673a\u5236\uff0c\u6211\u4eec\u53ea\u9700\u8981\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u4ee3\u7801\u5c31\u53ef\u6307\u5b9a\u76ee\u6807\u9700\u8981\u7684\u8d44\u6e90\uff0c\u5b8c\u6210\u81ea\u8eab\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u9700\u8981\u5173\u5fc3\u5177\u4f53\u7684\u8d44\u6e90\u6765\u81ea\u4f55\u5904\uff0c\u7531\u8c01\u5b9e\u73b0\u3002")),(0,o.kt)("p",null,"\u7406\u89e3 DI \u7684\u5173\u952e\u662f\uff1a\u201c\u8c01\u4f9d\u8d56\u8c01\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56\uff0c\u8c01\u6ce8\u5165\u8c01\uff0c\u6ce8\u5165\u4e86\u4ec0\u4e48\u201d\uff0c\u90a3\u6211\u4eec\u6765\u6df1\u5165\u5206\u6790\u4e00\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8c01\u4f9d\u8d56\u4e8e\u8c01\uff1a\u5f53\u7136\u662f\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u4e8e IoC \u5bb9\u5668\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56\uff1a\u5e94\u7528\u7a0b\u5e8f\u9700\u8981 IoC \u5bb9\u5668\u6765\u63d0\u4f9b\u5bf9\u8c61\u9700\u8981\u7684\u5916\u90e8\u8d44\u6e90\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8c01\u6ce8\u5165\u8c01\uff1a\u5f88\u660e\u663e\u662f IoC \u5bb9\u5668\u6ce8\u5165\u5e94\u7528\u7a0b\u5e8f\u67d0\u4e2a\u5bf9\u8c61\uff0c\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u7684\u5bf9\u8c61\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u6ce8\u5165\u4e86\u4ec0\u4e48\uff1a\u5c31\u662f\u6ce8\u5165\u67d0\u4e2a\u5bf9\u8c61\u6240\u9700\u8981\u7684\u5916\u90e8\u8d44\u6e90\uff08\u5305\u62ec\u5bf9\u8c61\u3001\u8d44\u6e90\u3001\u5e38\u91cf\u6570\u636e\uff09\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IoC \u548c DI \u7531\u4ec0\u4e48\u5173\u7cfb\u5462\uff1f\u5176\u5b9e\u5b83\u4eec\u662f\u540c\u4e00\u4e2a\u6982\u5ff5\u7684\u4e0d\u540c\u89d2\u5ea6\u63cf\u8ff0\uff0c\u7531\u4e8e\u63a7\u5236\u53cd\u8f6c\u6982\u5ff5\u6bd4\u8f83\u542b\u7cca\uff08\u53ef\u80fd\u53ea\u662f\u7406\u89e3\u4e3a\u5bb9\u5668\u63a7\u5236\u5bf9\u8c61\u8fd9\u4e00\u4e2a\u5c42\u9762\uff0c\u5f88\u96be\u8ba9\u4eba\u60f3\u5230\u8c01\u6765\u7ef4\u62a4\u5bf9\u8c61\u5173\u7cfb\uff09\uff0c\u6240\u4ee5 2004 \u5e74\u5927\u5e08\u7ea7\u4eba\u7269 Martin Fowler \u53c8\u7ed9\u51fa\u4e86\u4e00\u4e2a\u65b0\u7684\u540d\u5b57\uff1a\u201c\u4f9d\u8d56\u6ce8\u5165\u201d\uff0c\u76f8\u5bf9 IoC \u800c\u8a00\uff0c\u201c\u4f9d\u8d56\u6ce8\u5165\u201d\u660e\u786e\u63cf\u8ff0\u4e86\u201c\u88ab\u6ce8\u5165\u5bf9\u8c61\u4f9d\u8d56 IoC \u5bb9\u5668\u914d\u7f6e\u4f9d\u8d56\u5bf9\u8c61\u201d\u3002")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u662f\u4e00\u79cd\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\u7684\u4e00\u79cd\u8bbe\u8ba1\u539f\u5219\uff0c\u53ef\u4ee5\u7528\u6765\u51cf\u4f4e\u8ba1\u7b97\u673a\u4ee3\u7801\u4e4b\u95f4\u7684\u8026\u5408\u5ea6\u3002\u5176\u4e2d\u6700\u5e38\u89c1\u4e00\u79cd\u7684\u65b9\u5f0f\u53eb\u505a",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165"),"\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u4e0d\u662f\u4e00\u79cd\u6280\u672f\uff0c\u800c\u662f\u4e00\u79cd\u601d\u60f3\uff0c\u5176\u57fa\u672c\u601d\u60f3\u662f\uff1a\u501f\u52a9\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"\u7b2c\u4e09\u65b9"),"(IoC \u5bb9\u5668)\u5b9e\u73b0\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u5bf9\u8c61\u4e4b\u95f4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u89e3\u8026"),"\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53cd\u8f6c"),"\u4f5c\u4e3a Spring \u7684\u6838\u5fc3\uff0c\u8ba9",(0,o.kt)("strong",{parentName:"p"},"IoC \u5bb9\u5668"),"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165"),"\u7684\u65b9\u5f0f\u4f7f\u5f97\u521b\u5efa\u4f9d\u8d56\u5bf9\u8c61\u7684\u63a7\u5236\u6743\u7531",(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u8f6c\u79fb\u5230",(0,o.kt)("strong",{parentName:"p"},"IoC \u5bb9\u5668")),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.iteye.com/blog/jinnianshilongnian-1413846"},"IoC \u4e4b 2.1 IoC \u57fa\u7840 \u2014\u2014\u8ddf\u6211\u5b66 Spring3")))}s.isMDXComponent=!0},3458:function(e,t,n){t.Z=n.p+"assets/images/java-IoC-and-DI-01-de70fdc1ab06e69471eac46fc3e82119.png"},5850:function(e,t,n){t.Z=n.p+"assets/images/java-IoC-and-DI-02-11f8c3825b167f8c0060e0574a13ccba.png"}}]);