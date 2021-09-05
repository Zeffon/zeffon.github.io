"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4622],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],l={slug:"elasticsearch",title:"ES\u6570\u636e\u5e93\u7684\u4f7f\u7528",authors:"zeffon",tags:["java","database"],date:new Date("2021-04-19T00:00:00.000Z")},i=void 0,c={permalink:"/blog/elasticsearch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021/2021-04-19-elasticsearch.md",source:"@site/blog/2021/2021-04-19-elasticsearch.md",title:"ES\u6570\u636e\u5e93\u7684\u4f7f\u7528",description:"\u4e00\u6587\u4ecb\u7ecdelasticsearch\u7684\u5b89\u88c5\u8fc7\u7a0b\u4ee5\u53ca\u7b80\u5355\u4f7f\u7528\u3002",date:"2021-04-19T00:00:00.000Z",formattedDate:"April 19, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"database",permalink:"/blog/tags/database"}],readingTime:1.175,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",permalink:"/blog/springboot-elasticsearch"},nextItem:{title:"\u9879\u76ee\u914d\u7f6eprettier\u548ccommitlint",permalink:"/blog/prettier-commitlint"}},u={authorsImageUrls:[void 0]},p=[{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",children:[]},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",children:[{value:"elasticsearch.yml",id:"elasticsearchyml",children:[]},{value:"jvm.options",id:"jvmoptions",children:[]}]},{value:"\u521b\u5efa ES \u7528\u6237",id:"\u521b\u5efa-es-\u7528\u6237",children:[]},{value:"\u89e3\u51b3\u62a5\u9519",id:"\u89e3\u51b3\u62a5\u9519",children:[]},{value:"\u5b89\u88c5 es-head \u63d2\u4ef6",id:"\u5b89\u88c5-es-head-\u63d2\u4ef6",children:[]},{value:"\u5efa\u7acb Ik \u4e2d\u6587\u5206\u8bcd\u5668",id:"\u5efa\u7acb-ik-\u4e2d\u6587\u5206\u8bcd\u5668",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4e00\u6587\u4ecb\u7ecd",(0,s.kt)("strong",{parentName:"p"},"elasticsearch"),"\u7684\u5b89\u88c5\u8fc7\u7a0b\u4ee5\u53ca\u7b80\u5355\u4f7f\u7528\u3002"),(0,s.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,s.kt)("p",null,"\u53ef\u4ee5\u5728",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html"},"es \u5b98\u7f51"),"\u8fdb\u884c\u4e0b\u8f7d\uff0c\u4ee5 7.11.1-linux \u4e3a\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ tar -zxvf elasticsearch-7.11.1-linux-x86_64.tar.gz\n$ mv elasticsearch-7.11.1 /usr/local/es\n$ cd /usr/local/es\n# \u521b\u5efadata\u76ee\u5f55\u5b58\u653e\u6570\u636e\n$ mkdir data\n")),(0,s.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,s.kt)("p",null,"\u5728 es \u76ee\u5f55\u4e0b\u6709 config \u914d\u7f6e\u76ee\u5f55\uff0c\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6",(0,s.kt)("strong",{parentName:"p"},"elasticsearch.yml"),"\u548c",(0,s.kt)("strong",{parentName:"p"},"jvm.options")),(0,s.kt)("h3",{id:"elasticsearchyml"},"elasticsearch.yml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ cd ./config\n$ vim elasticsearch.yml\n\n# \u96c6\u7fa4\u548c\u8282\u70b9(\u4e5f\u53ef\u4ee5\u9ed8\u8ba4)\ncluster.name: my-es\nnode.name: es-node0\n\n# \u6570\u636e\u548c\u65e5\u5fd7\npath.data: /usr/local/es/data\npath.logs: /usr/local/es/logs\n\n# \u7f51\u7edc\u548c\u7aef\u53e3\nnetwork.host: 0.0.0.0\nhttp.port: 9200\n\n# \u53d1\u73b0\u8282\u70b9\ncluster.initial_master_nodes: ["es-node0"]\n')),(0,s.kt)("h3",{id:"jvmoptions"},"jvm.options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vim jvm.options\n\n# \u4fee\u6539\u5806\u5185\u5b58\u5927\u5c0f(\u8db3\u591f\u5185\u5b58\u53ef\u4ee5\u4e0d\u4fee\u6539)\n-Xms256m\n-Xmx256m\n")),(0,s.kt)("h2",{id:"\u521b\u5efa-es-\u7528\u6237"},"\u521b\u5efa ES \u7528\u6237"),(0,s.kt)("p",null,"es \u6570\u636e\u5e93\u4e0d\u80fd\u7531 root \u7528\u6237\u542f\u52a8\uff0c\u6240\u4ee5\u9700\u8981\u65b0\u5efa\u7528\u6237\u8fdb\u884c\u542f\u52a8\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ whoami\nroot\n# \u6dfb\u52a0\u7528\u6237\n$ useradd esuser\n$ cd /usr/local/es\n# \u7ed9esuser\u6743\u9650\n$ chown -R esuser:esuser /usr/local/es\n# \u5207\u6362\u89d2\u8272\u542f\u52a8es\n$ su esuser\n# \u8fd0\u884c\u4f1a\u62a5\u9519\n$ ./bin/elasticsearch\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[1]",": max file descriptor ","[4096]"," for elasticsearch process is too low, increase to at least ","[65535]"," > ","[2]",": max number of threads ","[3756]"," for user ","[esuser]"," is too low, ubcrease to at least ","[4096]"," > ","[3]",": max virtual memory areas vm.max_map_count ","[65530]"," is too low, increase to at least ","[262114]")),(0,s.kt)("h2",{id:"\u89e3\u51b3\u62a5\u9519"},"\u89e3\u51b3\u62a5\u9519"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362root\u7528\u6237\u8fdb\u884c\u4fee\u6539\n$ su root\n$ vim /etc/security/limits.conf\n# \u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\n* soft nofile 65536\n* hard nofile 131072\n* soft nproc 2048\n* hard nproc 4096\n\n$ vim /etc/sysctl.conf\n# \u52a0\u5927max_map_count\u503c\nvm.max_map_count=266145\n# \u5237\u65b0\u914d\u7f6e\n$ sysctl -p\n# \u540e\u53f0\u542f\u52a8\n$ /usr/local/es/bin/elasticsearch -d\n")),(0,s.kt)("h2",{id:"\u5b89\u88c5-es-head-\u63d2\u4ef6"},"\u5b89\u88c5 es-head \u63d2\u4ef6"),(0,s.kt)("p",null,"\u4f7f\u7528\u53ef\u89c6\u5316\u5de5\u5177 elasticsearch-head \u64cd\u4f5c es \u6570\u636e\u5e93\uff0c\u5177\u4f53\u53ef\u5728",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mobz/elasticsearch-head"},"Github \u5b98\u7f51"),"\u67e5\u770b\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u63d2\u4ef6\u6bd4\u8f83\u65b9\u4fbf\u3002"),(0,s.kt)("h2",{id:"\u5efa\u7acb-ik-\u4e2d\u6587\u5206\u8bcd\u5668"},"\u5efa\u7acb Ik \u4e2d\u6587\u5206\u8bcd\u5668"),(0,s.kt)("p",null,"\u4e2d\u6587\u5206\u8bcd\u5668",(0,s.kt)("a",{parentName:"p",href:"https://github.com/medcl/elasticsearch-analysis-ik"},(0,s.kt)("strong",{parentName:"a"},"elasticsearch-analysis-ik")),"\uff0c\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684\u538b\u7f29\u5305(zip)\uff0c\u4e0a\u4f20\u81f3\u670d\u52a1\u5668"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# \u89e3\u538b\u538b\u7f29\u5305\u81f3es\u63d2\u4ef6\u76ee\u5f55plugins/ik\u76ee\u5f55\u4e0b\n$ unzip elasticsearch-analysis-ik-7.11.1.zip -d /usr/local/es/plugins/ik\n# \u91cd\u542fes\u6570\u636e\u5e93\u5373\u53ef\n")))}d.isMDXComponent=!0}}]);