"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2075],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?t.createElement(k,i(i({ref:r},p),{},{components:n})):t.createElement(k,i({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7166:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var t=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"install-redis",title:"Redis\u7684\u4f7f\u7528",authors:"zeffon",tags:["redis"],date:new Date("2019-09-12T00:00:00.000Z")},s=void 0,c={permalink:"/blog/install-redis",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019/2019-09-12-install-redis.md",source:"@site/blog/2019/2019-09-12-install-redis.md",title:"Redis\u7684\u4f7f\u7528",description:"Redis \u662f\u4e00\u4e2a\u4f7f\u7528 ANSI C \u7f16\u5199\u7684\u5f00\u6e90\u3001\u652f\u6301\u7f51\u7edc\u3001\u57fa\u4e8e\u5185\u5b58\u3001\u53ef\u9009\u6301\u4e45\u6027\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u6570\u636e\u5e93\u3002",date:"2019-09-12T00:00:00.000Z",formattedDate:"September 12, 2019",tags:[{label:"redis",permalink:"/blog/tags/redis"}],readingTime:1.09,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u521d\u8bc6spu-and-sku",permalink:"/blog/spu-and-sku"},nextItem:{title:"Docker\u90e8\u7f72Java\u9879\u76ee",permalink:"/blog/docker-deploy-jar"}},p={authorsImageUrls:[void 0]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u5b89\u88c5\u5305\u5b89\u88c5",id:"\u5b89\u88c5\u5305\u5b89\u88c5",children:[]},{value:"\u8fd0\u884c\u4f7f\u7528",id:"\u8fd0\u884c\u4f7f\u7528",children:[]},{value:"redis \u914d\u7f6e\u53c2\u6570",id:"redis-\u914d\u7f6e\u53c2\u6570",children:[]},{value:"\u89e3\u51b3\u65e0\u6cd5\u8fde\u63a5\u95ee\u9898",id:"\u89e3\u51b3\u65e0\u6cd5\u8fde\u63a5\u95ee\u9898",children:[]}]}],u={toc:d};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Redis \u662f\u4e00\u4e2a\u4f7f\u7528 ANSI C \u7f16\u5199\u7684\u5f00\u6e90\u3001\u652f\u6301\u7f51\u7edc\u3001\u57fa\u4e8e\u5185\u5b58\u3001\u53ef\u9009\u6301\u4e45\u6027\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u6570\u636e\u5e93\u3002"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"Redis \u662f\u4e00\u4e2a\u4f7f\u7528 ANSI C \u7f16\u5199\u7684\u5f00\u6e90\u3001\u652f\u6301\u7f51\u7edc\u3001\u57fa\u4e8e\u5185\u5b58\u3001\u53ef\u9009\u6301\u4e45\u6027\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u6570\u636e\u5e93\u3002"),(0,l.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u5305\u5b89\u88c5"},"\u5b89\u88c5\u5305\u5b89\u88c5"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis"),"\u5b98\u7f51\uff0c\u4e0b\u8f7d Redis \u5b89\u88c5\u5305\uff0c\u5f53\u524d\u6700\u65b0\u7248\u672c",(0,l.kt)("a",{parentName:"p",href:"http://download.redis.io/releases/redis-5.0.5.tar.gz"},"5.0.5"),"\u3002\u5b89\u88c5 Redis \u9700\u8981\u5148\u63d0\u524d\u5b89\u88c5\u597d gcc \u76f8\u5173\u7684\u5305\u3002\n\u5982\u679c\u4e0d\u9700\u8981\u592a\u9ad8\u7684\u7248\u672c\uff0c5.x.x+\u7248\u672c\u4e5f\u53ef\u4ee5\u4e86\u3002\u8fd9\u91cc\u5c31\u4f7f\u7528 5.0.5 \u6f14\u793a\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1 linux \u4e2d\u662f\u5426\u5df2\u5b89\u88c5 redis (\u4e0b\u9762\u8fd9\u79cd\u60c5\u51b5\u662f\u5df2\u5b89\u88c5\u7684)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ whereis redis-cli\nredis-cli: /usr/local/bin/redis-cli\n$ whereis redis-server\nredis-server: /usr/local/bin/redis-server\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 gcc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install -y open-ssl-devel gcc glibc gcc-c*\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5305\u4e0b\u8f7d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"$ wget http://download.redis.io/releases/redis-5.0.5.tar.gz\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u89e3\u538b\u5b89\u88c5\u5305")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"$ tar xzf redis-5.0.5.tar.gz\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u79fb\u52a8\u5230 local \u76ee\u5f55\u4e0b\u5e76\u8fdb\u5165\u8be5\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv redis-5.0.5 /usr/local/redis\n$ cd /usr/local/redis\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make\n$ make install\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 redis \u5230\u547d\u4ee4\u5230\u5168\u5c40\u53d8\u91cf\uff0c\u65b9\u4fbf\u5728\u4efb\u4f55\u76ee\u5f55\u6267\u884c\uff1b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ vi /etc/profile\nexport PATH="$PATH:/usr/local/redis/bin"\n')),(0,l.kt)("h3",{id:"\u8fd0\u884c\u4f7f\u7528"},"\u8fd0\u884c\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u542f\u52a8 redis \u670d\u52a1\u5668\uff0c\u547d\u4ee4\u5982\u4e0b\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-server /usr/local/redis/src/redis.conf\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u542f\u52a8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./redis-cli  -h 127.0.0.1  -p 6379 -n 2  -a test123\n-h  \u6307\u5b9a\u8fdc\u7a0b\u767b\u9646ip\n-p  \u6307\u5b9a\u8fdc\u7a0bredis\u8bbf\u95ee\u7aef\u53e3\n-n  \u6307\u5b9a\u5e93b\u7f16\u53f7\n-a  \u6307\u5b9a\u5bc6\u7801\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5173\u95ed redis \u670d\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps -ef | grep redis\nroot     29185     1  0 09:58 ?        00:00:00 redis-server 0.0.0.0:6379\nroot     29190 29159  0 09:58 pts/0    00:00:00 grep --color=auto redis\n$ kill -9 29185\n")),(0,l.kt)("h3",{id:"redis-\u914d\u7f6e\u53c2\u6570"},"redis \u914d\u7f6e\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'1. Redis\u9ed8\u8ba4\u4e0d\u662f\u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u65b9\u5f0f\u8fd0\u884c\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u914d\u7f6e\u9879\u4fee\u6539\uff0c\u4f7f\u7528yes\u542f\u7528\u5b88\u62a4\u8fdb\u7a0b\ndaemonize yes\n\n2. \u6307\u5b9aRedis\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u4e3a6379\nport 6379\n\n3.\u5f53\u5ba2\u6237\u7aef\u95f2\u7f6e\u591a\u957f\u65f6\u95f4\u540e\u5173\u95ed\u8fde\u63a5\uff0c\u5982\u679c\u6307\u5b9a\u4e3a0\uff0c\u8868\u793a\u5173\u95ed\u8be5\u529f\u80fd\ntimeout 300\n\n4. \u8bbe\u7f6eRedis\u8fde\u63a5\u5bc6\u7801\uff0c\u9ed8\u8ba4\u5173\u95ed\nrequirepass password\n\n5. \u5728logfile\u4e2d\u914d\u7f6e\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\u3002\nlogfile "/usr/local/redis/log/redis.log"\n\n6. \u8bbe\u7f6e\u6570\u636e\u5e93\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u6570\u636e\u5e93\u4e3a0\uff0c\u53ef\u4ee5\u4f7f\u7528SELECT <dbid>\u547d\u4ee4\u5728\u8fde\u63a5\u4e0a\u6307\u5b9a\u6570\u636e\u5e93id\ndatabases 1\n')),(0,l.kt)("h3",{id:"\u89e3\u51b3\u65e0\u6cd5\u8fde\u63a5\u95ee\u9898"},"\u89e3\u51b3\u65e0\u6cd5\u8fde\u63a5\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"li"},"redis.conf"),"\u7684\u914d\u7f6e\u5185\u5bb9\n\u8bbe\u7f6e\u7981\u7528\u6a21\u5f0f\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"no"),"\u548c\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"\u5bc6\u7801"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"a>protected-mode\xa0no\nb>requirepass password\nc>\u6ce8\u91cabind:127.0.0.1(\u6216\u8005\u4fee\u6539\u4e3abind 0.0.0.0 ->>\u4ee3\u8868\u5141\u8bb8\u4efb\u610fip\u7684\u8bf7\u6c42)\nd>\u91cd\u65b0\u542f\u52a8\uff1a./src/redis-server redis.conf\n")))}m.isMDXComponent=!0}}]);