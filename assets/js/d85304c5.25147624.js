"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2402],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),s=i,k=d["".concat(l,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50130:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(83117),i=(n(67294),n(3905));const a={slug:"java-exception",title:"Java \u5f02\u5e38",authors:"zeffon",tags:["java"],date:new Date("2020-10-27T00:00:00.000Z")},o=void 0,p={permalink:"/blog/java-exception",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-10-27-java-exception.md",source:"@site/blog/2020/2020-10-27-java-exception.md",title:"Java \u5f02\u5e38",description:"\u5199\u4e00\u6587\u7ae0\u7b80\u5355\u5730\u56de\u987e\u5bf9 Java \u5f02\u5e38\u7684\u8ba4\u8bc6",date:"2020-10-27T00:00:00.000Z",formattedDate:"October 27, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:5.385,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"java-exception",title:"Java \u5f02\u5e38",authors:"zeffon",tags:["java"],date:"2020-10-27T00:00:00.000Z"},prevItem:{title:"MySQL \u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u6388\u4e88",permalink:"/blog/mysql-new-user-and-grant-authority"},nextItem:{title:"MySQL \u5d4c\u5957 IFNULL \u7684\u4f7f\u7528",permalink:"/blog/mysql-nested-ifnull"}},l={authorsImageUrls:[void 0]},c=[{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u5f02\u5e38\u7684\u5206\u7c7b",id:"\u5f02\u5e38\u7684\u5206\u7c7b",level:3},{value:"Error \u548c Exception",id:"error-\u548c-exception",level:3},{value:"Exception",id:"exception",level:3},{value:"CheckedException",id:"checkedexception",level:4},{value:"RuntimeException",id:"runtimeexception",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:4},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5199\u4e00\u6587\u7ae0\u7b80\u5355\u5730\u56de\u987e\u5bf9 Java \u5f02\u5e38\u7684\u8ba4\u8bc6"),(0,i.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,i.kt)("h3",{id:"\u5f02\u5e38\u7684\u5206\u7c7b"},"\u5f02\u5e38\u7684\u5206\u7c7b"),(0,i.kt)("p",null,"\u5728 Java \u6240\u6709\u7684\u5f02\u5e38\u7c7b\u4e2d\uff0c\u6709\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"\u57fa\u7c7bThrowable"),"\u3002\u5927\u90e8\u5206\u7684\u5f02\u5e38\u7c7b\u90fd\u662f\u7ee7\u627f\u81ea\u8be5\u7c7b\u7684\u3002\nJava \u5f02\u5e38\u662f\u53ef\u4ee5\u5206\u6210\u4e24\u5927\u7c7b\uff1a\u4e00\u79cd\u662f",(0,i.kt)("strong",{parentName:"p"},"Error"),", \u53e6\u4e00\u79cd\u662f",(0,i.kt)("strong",{parentName:"p"},"Exception")),(0,i.kt)("h3",{id:"error-\u548c-exception"},"Error \u548c Exception"),(0,i.kt)("p",null,"Error \u5176\u5b9e\u5728\u4e25\u683c\u4e0a\u5e76\u4e0d\u7b97\u662f\u4e00\u79cd\u5f02\u5e38\uff0c\u800c\u7b97\u662f\u4e00\u79cd\u9519\u8bef\u3002\u5b57\u5982\u5176\u540d\uff0c\u53ef\u4ee5\u79f0\u4f5c\u662f\u9519\u8bef\u3002\n\u800c Exception \u624d\u7b97\u662f\u4e00\u79cd\u5f02\u5e38\u3002\u5c31\u5982\u6211\u4eec\u5e38\u89c1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u7a7a\u6307\u9488\u5f02\u5e38"),"\u6216\u8005\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"1\u9664\u4ee50"),"\u7684\u5f02\u5e38\u3002\u4e3b\u8981\u662f\u7531\u4e8e\u6211\u4eec\u81ea\u8eab\u7684\u4ee3\u7801\u5f15\u8d77\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u90a3\u4ec0\u4e48\u662f\u9519\u8bef\u5462\uff1f\n\u6240\u8c13\u7684\u9519\u8bef\u662f\u6307\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",(0,i.kt)("inlineCode",{parentName:"p"},"\u6839\u672c\u542f\u52a8\u4e0d\u8d77\u6765"),"\uff0c\u5b83\u901a\u5e38\u6765\u8bb2\u662f\u53d1\u751f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c\u7cfb\u7edf\u5c42\u9762"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"JVM\u865a\u62df\u673a"),"\u65b9\u9762\u7684\u9519\u8bef\u3002\u4e00\u65e6\u5b83\u53d1\u751f\u540e\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6839\u672c\u5c31\u8fd0\u884c\u4e0d\u8d77\u6765\u4e86\u3002\u6240\u4ee5\u4e00\u822c\u6765\u8bf4 Error \u662f\u4e0d\u80fd\u901a\u8fc7\u6211\u4eec\u7684\u4ee3\u7801\u80fd\u89e3\u51b3\u7684\u3002\u800c\u5f02\u5e38\u662f\u53ef\u4ee5\u901a\u8fc7\u6211\u4eec\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ee3\u7801\u6765\u89e3\u51b3"),"\u7684\u3002"),(0,i.kt)("h3",{id:"exception"},"Exception"),(0,i.kt)("p",null,"Exception \u53ef\u4ee5\u5206\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"CheckedException"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeException")),(0,i.kt)("h4",{id:"checkedexception"},"CheckedException"),(0,i.kt)("p",null,"\u5fc5\u987b\u8981\u6c42\u6211\u4eec\u5728\u4ee3\u7801\u91cc\u8fdb\u884c\u5904\u7406\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"CheckedException"),"\u7684\u8bdd\uff0c\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u65e0\u6cd5\u901a\u8fc7\u7f16\u8bd1\u9636\u6bb5\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class TestException {\n    public void test1() {\n        System.out.println("test exception");\n        throw new Exception("this is a error");\n    }\n}\n')),(0,i.kt)("p",null,"\u5c31\u5982\u4e0a\u9762\u4ee3\u7801\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"test1()"),"\u65b9\u6cd5\u4e0a\u663e\u793a\u629b\u51fa throws ",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),"\uff08\u5c06\u5f02\u5e38\u629b\u7ed9\u8c03\u7528\u65b9\u8fdb\u884c\u5904\u7406\uff0c\u4e0d\u5728\u672c\u65b9\u6cd5\u6765\u5904\u7406\uff09\uff0c\u90a3\u4e48 IDEA \u5c31\u4f1a\u7ed9\u6211\u63d0\u793a\u7ea2\u8272\u8b66\u544a\u3002\u8fd9\u4e2a\u5c31\u662f\u4e0d\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"CheckedException"),"\u7684\u7ed3\u679c\u3002\n\u6216\u8005\u6211\u4eec\u4e0d\u5c06\u5f02\u5e38\u76f4\u63a5\u629b\u51fa\u53bb\uff0c\u800c\u662f\u9009\u62e9\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"test1()"),"\u65b9\u6cd5\u5185\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u6355\u6349\u5f02\u5e38\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5904\u7406\u6211\u4eec\u6355\u6349\u5230\u7684\u5f02\u5e38\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8bb0\u5f55\u65e5\u5fd7\u7684\u65b9\u5f0f\u5904\u7406\u5f02\u5e38\u95ee\u9898"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u5f02\u5e38\u4fe1\u606f\u76f4\u63a5\u8fd4\u56de\u56de\u53bb")),(0,i.kt)("h4",{id:"runtimeexception"},"RuntimeException"),(0,i.kt)("p",null,"RuntimeException \u662f\u8fd0\u884c\u65f6\u5f02\u5e38\n\u8fd9\u79cd\u5f02\u5e38\u662f\u6307\u5e76\u4e0d\u4e00\u5b9a\u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u80fd\u53d1\u73b0\u5f02\u5e38\uff0c\u5b83\u4e5f\u4e0d\u8981\u6c42\u4f60\u5f3a\u5236\u8fdb\u884c\u5904\u7406\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class TestException {\n    public void test1() {\n        System.out.println("test exception");\n        throw new RuntimeException("this is a error");\n    }\n}\n')),(0,i.kt)("p",null,"\u5c06\u4e4b\u524d\u7684\u4ee3\u7801",(0,i.kt)("inlineCode",{parentName:"p"},'throw new Exception("this is a error");'),"\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},'throw new RuntimeException("this is a error");'),"\u3002\u6211\u4eec\u4f1a\u53d1\u73b0\u5373\u4f7f\u6211\u4eec\u4e0d\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"test1()"),"\u65b9\u6cd5\u4e0a\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"throws Exception"),"\u6216\u8005\u6ca1\u6709\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"test1()"),"\u65b9\u6cd5\u5185\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),"\u6355\u6349\u5f02\u5e38\uff0cIDEA \u4e5f\u4e0d\u4f1a\u7ed9\u6211\u4eec\u8fdb\u884c\u62a5\u9519\u3002\u751a\u81f3\u5b83\u8fd8\u4f1a\u63d0\u793a throws \u662f\u591a\u4f59\u7684\u3002\u6240\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeException"),"\u662f\u4e0d\u5f3a\u5236\u6211\u4eec\u5904\u7406\u5f02\u5e38\u7684\u3002"),(0,i.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CheckedException"),"\u7b97\u662f\u4e00\u79cd\u5206\u7c7b\u6765\u7740\u5427\uff0c\u5176\u5b9e\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),". \u68c0\u67e5\u578b\u5f02\u5e38\n",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeException"),"\u662f\u6709\u4e00\u4e2a\u5b9e\u9645\u7c7b\uff0c\u5b83\u7ee7\u627f\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),". \xa0 \u8fd0\u884c\u65f6\u5f02\u5e38"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u578b\u5f02\u5e38\n\u8fd9\u79cd\u7c7b\u578b\u7684\u5f02\u5e38\u662f\u96be\u4ee5\u907f\u514d\u7684\uff0c\u6240\u4ee5\u662f\u5fc5\u987b\u8981\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"tr...catch"),"\u8fdb\u884c\u5904\u7406\u7684\u3002\u7f16\u8bd1\u5668\u4f1a\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u68c0\u67e5\uff0c\u4e00\u65e6\u6211\u4eec\u6ca1\u6709\u8fdb\u884c\u5904\u7406\uff08throws \u6216\u8005 try...catch\uff09\u3002\u7f16\u8bd1\u5668\u4fbf\u4f1a\u5728\u7f16\u8bd1\u524d\u7ed9\u6211\u4eec\u63d0\u793a\u62a5\u9519\u3002\u9700\u8981\u8fdb\u884c\u5904\u7406\u624d\u80fd\u901a\u8fc7\u7f16\u8bd1\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u65f6\u5f02\u5e38\n\u8fd9\u79cd\u7c7b\u578b\u7684\u5f02\u5e38\u662f\u53ef\u4ee5\u907f\u514d\u7684\u3002\u65e2\u7136\u662f\u53ef\u4ee5\u907f\u514d\u7684\u8bdd\uff0c\u90a3\u6211\u4eec\u5c31\u53ef\u4ee5\u4e0d\u7528\u8fdb\u884c\u5904\u7406\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u6211\u4eec\u662f\u5f88\u96be\u53d1\u73b0\u8fd9\u7c7b\u5f02\u5e38\uff0c\u4e0d\u80fd\u5c06\u5b83\u907f\u514d\u5f00\u7684\u3002\u53ef\u7f16\u8bd1\u5668\u4ee5\u4e3a\u6211\u4eec\u80fd\u907f\u514d\u8fd9\u5f02\u5e38\uff0c\u5b83\u5c31\u4e0d\u4f1a\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u68c0\u67e5\uff0c\u6240\u4ee5\u4e5f\u4e0d\u4f1a\u5728\u7f16\u8bd1\u9636\u6bb5\u63d0\u793a\u62a5\u9519\u3002\u4f46\u662f\uff0c\u6211\u4eec\u4ee3\u7801\u8fd0\u884c\u81f3\u6b64\u65f6\uff0c\u8fd9\u65f6\u5019\u5f02\u5e38\u5c31\u53d1\u751f\u4e86\u3002\u90a3\u5c31 GG \u4e86...")),(0,i.kt)("h3",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5728\u5904\u7406\u5f02\u5e38\u65f6\uff0c\u81ea\u5b9a\u4e49\u5f02\u5e38",(0,i.kt)("inlineCode",{parentName:"p"},"HttpException"),"\u662f\u8be5\u7ee7\u627f\u81ea",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeException"),"\u8fd8\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Exception"),"\uff1f\n\u5176\u5b9e\u5982\u679c\u5f53\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@ControllerAdvice"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"@ExceptionHandler"),"\u5168\u5c40\u6765\u7edf\u4e00\u7684\u5904\u7406\u5f02\u5e38\u65f6\uff0c\u6211\u4eec\u7ee7\u627f\u54ea\u4e00\u4e2a\u5f02\u5e38\u7c7b\u90fd\u6ca1\u6709\u5173\u7cfb\u7684\uff0c\u56e0\u4e3a\u6700\u540e\u90fd\u4f1a\u6c47\u603b\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"@ControllerAdvice"),"\u7c7b\u4e0b\u6765\u5904\u7406\u3002\n\u5982\u679c\u6ca1\u6709\u5168\u5c40\u5f02\u5e38\u7c7b\u6765\u5904\u7406\u7684\u8bdd\uff0c\u800c\u6211\u4eec",(0,i.kt)("inlineCode",{parentName:"p"},"\u5927\u591a\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38"),"\u662f\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0e\u6570\u636e\u5e93\u589e\u5220\u6539\u67e5\u64cd\u4f5c"),"\u7684\u5f02\u5e38\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeException"),"\u4f1a\u6bd4\u8f83\u597d\u4e00\u70b9\u3002\u56e0\u4e3a\u6211\u4eec\u4e0d\u80fd\u56e0\u4e3a\u6570\u636e\u5e93\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u67e5\u8be2\u6216\u8005\u8bbf\u95ee\u6743\u9650\u4e0d\u8db3"),"\u800c\u5728\u7f16\u8bd1\u9636\u6bb5\u8fdb\u884c\u5f02\u5e38\u5904\u7406\uff0c\u800c\u8fd9\u79cd\u5e94\u8be5\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u65f6\u5f02\u5e38"),"\u3002"))}m.isMDXComponent=!0}}]);