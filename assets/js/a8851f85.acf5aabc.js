"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9021],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),N=m(n),g=r,k=N["".concat(p,".").concat(g)]||N[g]||u[g]||l;return n?a.createElement(k,i(i({ref:e},o),{},{components:n})):a.createElement(k,i({ref:e},o))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},19569:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(83117),r=(n(67294),n(3905));const l={slug:"spring-data-jpa-method-naming-rules",title:"Java JPA \u65b9\u6cd5\u547d\u540d\u89c4\u5219",authors:"zeffon",tags:["java"],date:new Date("2020-03-04T00:00:00.000Z")},i=void 0,d={permalink:"/blog/spring-data-jpa-method-naming-rules",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-03-04-spring-data-jpa-method-naming-rules.md",source:"@site/blog/2020/2020-03-04-spring-data-jpa-method-naming-rules.md",title:"Java JPA \u65b9\u6cd5\u547d\u540d\u89c4\u5219",description:"\u8bb0\u5f55\u5728 SpringBoot \u9879\u76ee\u4f7f\u7528 JPA \u8bbf\u95ee\u6570\u636e\u5e93\u6570\u636e\u65f6\uff0cRepository \u6301\u4e45\u5c42\u7684\u65b9\u6cd5\u547d\u540d\u89c4\u5219",date:"2020-03-04T00:00:00.000Z",formattedDate:"March 4, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:2.26,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"spring-data-jpa-method-naming-rules",title:"Java JPA \u65b9\u6cd5\u547d\u540d\u89c4\u5219",authors:"zeffon",tags:["java"],date:"2020-03-04T00:00:00.000Z"},prevItem:{title:"CentOS7\u5b89\u88c5mysql",permalink:"/blog/centos7-install-mysql"},nextItem:{title:"Java\u4e8b\u52a1\u4f20\u64ad",permalink:"/blog/java-transaction"}},p={authorsImageUrls:[void 0]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2}],o={toc:m};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bb0\u5f55\u5728 SpringBoot \u9879\u76ee\u4f7f\u7528 JPA \u8bbf\u95ee\u6570\u636e\u5e93\u6570\u636e\u65f6\uff0cRepository \u6301\u4e45\u5c42\u7684\u65b9\u6cd5\u547d\u540d\u89c4\u5219"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Repository \u6301\u4e45\u5c42\u7684\u65b9\u6cd5\u901a\u8fc7\u65b9\u6cd5\u7684\u547d\u540d\u89c4\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u51fa\u5bf9\u5e94\u7684 SQL \u8bed\u53e5\u7684\uff0c\u56e0\u6b64\u4f7f\u7528 JPA \u4f5c\u4e3a\u6570\u636e\u8bbf\u95ee\u5c42\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u5bf9\u5e94\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u5230\u6570\u636e\u5e93\u7684\u6570\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u800c\u4e0d\u9700\u8981\u7f16\u5199SQL\u8bed\u53e5"),"\uff0c\u76f8\u6bd4\u4e8e Mybatis\uff0c\u8fd9\u6837\u7b80\u5316\u7f16\u7801\u6d41\u7a0b\uff0c\u63d0\u9ad8\u4e86\u5f00\u53d1\u6548\u7387\uff0c\u4f46\u4e5f\u662f\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\u5c40\u9650\u6027"),"\u7684\u3002\u5176\u65e0\u6cd5\u5e94\u5bf9\u592a\u590d\u6742\u7684 SQL \u8bed\u53e5\uff0c\u540c\u65f6\u4e5f\u4f1a\u9020\u6210\u65b9\u6cd5\u7684\u547d\u540d\u592a\u957f\u800c\u4e0d\u4f18\u96c5\u3002\u4f46\u662f\u7f16\u5199\u7b80\u5355\u7684 SQL \u65f6\uff0c\u7684\u786e\u975e\u5e38\u6709\u52a9\u4e8e\u6211\u4eec\u5f00\u53d1\u3002"),(0,r.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5\u547d\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"sql where \u5b57\u53e5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"And"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameAndPwd"),(0,r.kt)("td",{parentName:"tr",align:null},"where name= ? and pwd =?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Or"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameOrSex"),(0,r.kt)("td",{parentName:"tr",align:null},"where name= ? or sex=?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is,Equals"),(0,r.kt)("td",{parentName:"tr",align:null},"findById,findByIdEquals"),(0,r.kt)("td",{parentName:"tr",align:null},"where id= ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Between"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdBetween"),(0,r.kt)("td",{parentName:"tr",align:null},"where id between ? and ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LessThan"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdLessThan"),(0,r.kt)("td",{parentName:"tr",align:null},"where id < ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LessThanEquals"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdLessThanEquals"),(0,r.kt)("td",{parentName:"tr",align:null},"where id <= ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GreaterThan"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdGreaterThan"),(0,r.kt)("td",{parentName:"tr",align:null},"where id > ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GreaterThanEquals"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdGreaterThanEquals"),(0,r.kt)("td",{parentName:"tr",align:null},"where id > = ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"After"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdAfter"),(0,r.kt)("td",{parentName:"tr",align:null},"where id > ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Before"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdBefore"),(0,r.kt)("td",{parentName:"tr",align:null},"where id < ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IsNull"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameIsNull"),(0,r.kt)("td",{parentName:"tr",align:null},"where name is null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isNotNull,NotNull"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameNotNull"),(0,r.kt)("td",{parentName:"tr",align:null},"where name is not null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Like"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameLike"),(0,r.kt)("td",{parentName:"tr",align:null},"where name like ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotLike"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameNotLike"),(0,r.kt)("td",{parentName:"tr",align:null},"where name not like ?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StartingWith"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameStartingWith"),(0,r.kt)("td",{parentName:"tr",align:null},"where name like '?%'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EndingWith"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameEndingWith"),(0,r.kt)("td",{parentName:"tr",align:null},"where name like '%?'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Containing"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameContaining"),(0,r.kt)("td",{parentName:"tr",align:null},"where name like '%?%'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OrderBy"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdOrderByXDesc"),(0,r.kt)("td",{parentName:"tr",align:null},"where id=? order by x desc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Not"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameNot"),(0,r.kt)("td",{parentName:"tr",align:null},"where name ",(0,r.kt)("inlineCode",{parentName:"td"},"<>")," ?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In"),(0,r.kt)("td",{parentName:"tr",align:null},"findByIdIn(Collection<?> c)"),(0,r.kt)("td",{parentName:"tr",align:null},"where id in (?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameNot"),(0,r.kt)("td",{parentName:"tr",align:null},"where name ",(0,r.kt)("inlineCode",{parentName:"td"},"<>")," ?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"findByAaaTue"),(0,r.kt)("td",{parentName:"tr",align:null},"where aaa = true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"findByAaaFalse"),(0,r.kt)("td",{parentName:"tr",align:null},"where aaa = false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IgnoreCase"),(0,r.kt)("td",{parentName:"tr",align:null},"findByNameIgnoreCase"),(0,r.kt)("td",{parentName:"tr",align:null},"where UPPER(name)=UPPER(?)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"top"),(0,r.kt)("td",{parentName:"tr",align:null},"findTop100"),(0,r.kt)("td",{parentName:"tr",align:null},"top 10/where ROWNUM <=10")))))}u.isMDXComponent=!0}}]);