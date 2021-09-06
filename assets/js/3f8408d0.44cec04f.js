"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4961],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),s=o,d=k["".concat(c,".").concat(s)]||k[s]||m[s]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1665:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={slug:"linux-install-rocketmq",title:"Linux \u5b89\u88c5 RocketMQ",authors:"zeffon",tags:["linux","mq"],date:new Date("2020-06-30T00:00:00.000Z")},c=void 0,p={permalink:"/blog/linux-install-rocketmq",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-06-30-linux-install-rocketmq.md",source:"@site/blog/2020/2020-06-30-linux-install-rocketmq.md",title:"Linux \u5b89\u88c5 RocketMQ",description:"\u5728 Linux \u7cfb\u7edf\u6216\u8005\u5176\u5b83\u7cfb\u7edf\u5b89\u88c5\u6d88\u606f\u4e2d\u95f4\u4ef6 RocketMQ",date:"2020-06-30T00:00:00.000Z",formattedDate:"June 30, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"mq",permalink:"/blog/tags/mq"}],readingTime:.705,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",permalink:"/blog/springboot-bulid-rocketmq"},nextItem:{title:"win10 \u6279\u91cf\u4fee\u6539\u6587\u4ef6\u540d",permalink:"/blog/win10-batch-modify-filename"}},u={authorsImageUrls:[void 0]},m=[{value:"\u524d\u6587",id:"\u524d\u6587",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u4e0b\u8f7d RocketMQ \u7684\u538b\u7f29\u5305",id:"\u4e0b\u8f7d-rocketmq-\u7684\u538b\u7f29\u5305",children:[]},{value:"\u89e3\u538b\u538b\u7f29\u5305",id:"\u89e3\u538b\u538b\u7f29\u5305",children:[]},{value:"\u8fdb\u5165\u76ee\u5f55\uff0c\u6307\u5b9a Java \u73af\u5883",id:"\u8fdb\u5165\u76ee\u5f55\u6307\u5b9a-java-\u73af\u5883",children:[]},{value:"\u542f\u52a8 Name Server",id:"\u542f\u52a8-name-server",children:[]},{value:"\u542f\u52a8 Start Broker",id:"\u542f\u52a8-start-broker",children:[]},{value:"\u8fdb\u884c\u6d4b\u8bd5",id:"\u8fdb\u884c\u6d4b\u8bd5",children:[]},{value:"\u5173\u95ed RocketMQ",id:"\u5173\u95ed-rocketmq",children:[]}]}],k={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Linux \u7cfb\u7edf\u6216\u8005\u5176\u5b83\u7cfb\u7edf\u5b89\u88c5\u6d88\u606f\u4e2d\u95f4\u4ef6 RocketMQ"),(0,a.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,a.kt)("p",null,"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u963f\u91cc"),"\u5f00\u6e90\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6 RocketMQ\uff08\u6350\u732e\u7ed9\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Apache\u793e\u533a"),"\uff09\u662f\u4e00\u6b3e\u975e\u5e38\u4e0d\u9519\u7684\u4e2d\u95f4\u4ef6\uff0c\u4e3b\u8981\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f02\u6b65\u3001\u89e3\u8026\u3001\u524a\u5cf0"),"\u7684\u5e94\u7528\u573a\u666f\u3002\nRocketMQ \u7531",(0,a.kt)("inlineCode",{parentName:"p"},"Java"),"\u5f00\u53d1\u7684\uff0c\u5f53\u65f6\u7684\u5e94\u7528\u573a\u666f\u65f6\u53cc\u5341\u4e00\u62a2\u8d2d\uff0c\u6240\u4ee5\u5728\u541e\u5410\u91cf\u65b9\u9762\u662f\u53ef\u4ee5\u8fbe\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"10\u4e07+"),"\u7ea7\u522b\u7684\u3002\n\u57fa\u4e8e\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u5b83\u7684\u53ef\u7528\u6027\u662f\u76f8\u5f53\u53ef\u9760\u7684\u3002\u540c\u65f6\uff0c\u5b83\u8fd8\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b9a\u65f6\u63a8\u9001"),"\u7684\u529f\u80fd,\u8fd9\u4e2a\u662f\u5176\u5b83\u4e2d\u95f4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u5ef6\u8fdf\u63a8\u9001"),"\u65e0\u6cd5\u76f8\u6bd4\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8fdb\u5165 RocketMQ",(0,a.kt)("a",{parentName:"p",href:"http://rocketmq.apache.org/docs/quick-start/"},"\u5b98\u65b9\u6587\u6863"),"\u67e5\u770b\u76f8\u5173\u7684\u4ecb\u7ecd\u4ee5\u53ca\u5b89\u88c5\u6559\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,a.kt)("h3",{id:"\u4e0b\u8f7d-rocketmq-\u7684\u538b\u7f29\u5305"},"\u4e0b\u8f7d RocketMQ \u7684\u538b\u7f29\u5305"),(0,a.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u6700\u65b0\u7248\u7684\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\uff08\u8fd9\u91cc\u4ee5\u6700\u65b0\u7248\u672c",(0,a.kt)("a",{parentName:"p",href:"https://mirror.bit.edu.cn/apache/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip"},"4.7.1"),"\u4e3a\u4f8b\uff09"),(0,a.kt)("h3",{id:"\u89e3\u538b\u538b\u7f29\u5305"},"\u89e3\u538b\u538b\u7f29\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ unzip rocketmq-all-4.7.1-source-release.zip\n")),(0,a.kt)("h3",{id:"\u8fdb\u5165\u76ee\u5f55\u6307\u5b9a-java-\u73af\u5883"},"\u8fdb\u5165\u76ee\u5f55\uff0c\u6307\u5b9a Java \u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd rocketmq-all-4.7.1/\n$ mvn -Prelease-all -DskipTests clean install -U\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728\u6587\u4ef6\u4e2d\u624b\u52a8\u8bbe\u7f6e jdk \u73af\u5883\uff0c\u5728 runserver.sh \u6587\u4ef6\u4e2d JAVA_HOME \u4e0a\u9762\u6dfb\u52a0\u4e00\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JAVA_HOME=\u4f60\u7684jdk\u5b89\u88c5\u76ee\u5f55\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-name-server"},"\u542f\u52a8 Name Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-4.7.1/rocketmq-4.7.1  # \u8fdb\u5165\u76ee\u5f55\n$ nohup sh bin/mqnamesrv &  # \u540e\u53f0\u542f\u52a8\n$ tail -f ~/logs/rocketmqlogs/namesrv.log  # \u6253\u5370\u65e5\u5fd7\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-start-broker"},"\u542f\u52a8 Start Broker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ nohup sh bin/mqbroker -n localhost:9876 &\n$ tail -f ~/logs/rocketmqlogs/broker.log  # \u6253\u5370\u65e5\u5fd7\n")),(0,a.kt)("h3",{id:"\u8fdb\u884c\u6d4b\u8bd5"},"\u8fdb\u884c\u6d4b\u8bd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5148\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"li"},"NAMESRV_ADDR"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ export NAMESRV_ADDR=localhost:9876\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6a21\u62df\u751f\u4ea7\u8005\u8fdb\u884c\u751f\u6210\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6a21\u62df\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n")),(0,a.kt)("h3",{id:"\u5173\u95ed-rocketmq"},"\u5173\u95ed RocketMQ"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sh bin/mqshutdown broker  # \u5173\u95ed broker\n$ sh bin/mqshutdown namesrv  # \u5173\u95ed namesrv\n")))}s.isMDXComponent=!0}}]);