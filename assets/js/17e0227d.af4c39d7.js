"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2092],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return o}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),g=k(a),o=r,c=g["".concat(i,".").concat(o)]||g[o]||N[o]||l;return a?n.createElement(c,p(p({ref:e},d),{},{components:a})):n.createElement(c,p({ref:e},d))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6359:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return k},assets:function(){return d},toc:function(){return N},default:function(){return o}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],m={slug:"vim",title:"Vim\u7684\u57fa\u672c\u5165\u95e8",authors:"zeffon",tags:["notes"],date:new Date("2019-11-03T00:00:00.000Z")},i=void 0,k={permalink:"/blog/vim",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019/2019-11-03-vim.md",source:"@site/blog/2019/2019-11-03-vim.md",title:"Vim\u7684\u57fa\u672c\u5165\u95e8",description:"\u5de5\u5584\u5176\u4e8b\uff0c\u5fc5\u5229\u5176\u5668\u3002Linux \u7cfb\u7edf\u4e2d\u5e38\u89c1\u7684\u7f16\u8f91\u6280\u5de7\uff0cvim \u5fc5\u4e0d\u53ef\u5c11\u3002",date:"2019-11-03T00:00:00.000Z",formattedDate:"November 3, 2019",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:2.76,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Vimium\u7684\u4f7f\u7528",permalink:"/blog/vimium"},nextItem:{title:"\u642d\u5efaGitLab\u79c1\u670d",permalink:"/blog/docker-gitlab-gitlab"}},d={authorsImageUrls:[void 0]},N=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u79fb\u52a8\u3001\u8df3\u8f6c\u548c\u7f29\u8fdb",id:"\u79fb\u52a8\u8df3\u8f6c\u548c\u7f29\u8fdb",children:[]},{value:"\u5220\u9664\u3001\u590d\u5236\u548c\u7c98\u8d34",id:"\u5220\u9664\u590d\u5236\u548c\u7c98\u8d34",children:[]},{value:"\u4fee\u6539\u3001\u67e5\u627e\u548c\u66ff\u6362",id:"\u4fee\u6539\u67e5\u627e\u548c\u66ff\u6362",children:[]}]}],g={toc:N};function o(t){var e=t.components,m=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},g,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5de5\u5584\u5176\u4e8b\uff0c\u5fc5\u5229\u5176\u5668\u3002Linux \u7cfb\u7edf\u4e2d\u5e38\u89c1\u7684\u7f16\u8f91\u6280\u5de7\uff0cvim \u5fc5\u4e0d\u53ef\u5c11\u3002"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5de5\u5584\u5176\u4e8b\uff0c\u5fc5\u5229\u5176\u5668\u3002Linux \u7cfb\u7edf\u4e2d\u5e38\u89c1\u7684\u7f16\u8f91\u6280\u5de7\uff0cvim \u5fc5\u4e0d\u53ef\u5c11\u3002\nVim \u662f\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"vi"),"\u53d1\u5c55\u51fa\u6765\u7684\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"\u6587\u672c\u7f16\u8f91\u5668"),"\u3002\u5176\u4ee3\u7801\u8865\u5b8c\u3001\u7f16\u8bd1\u53ca\u9519\u8bef\u8df3\u8f6c\u7b49\u65b9\u4fbf\u7f16\u7a0b\u7684\u529f\u80fd\u7279\u522b\u4e30\u5bcc\uff0c\u5728\u7a0b\u5e8f\u5458\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002Vim \u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u7531\u5e03\u83b1\u59c6\xb7\u7c73\u52d2\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ADM-3A"),"\u7ec8\u7aef\u4e0a\u5f00\u53d1\u7684\uff0c\u4e8e 1991 \u5e74\u53d1\u5e03\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"vim.png",src:a(1416).Z})),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u672c\u7bc7\u5b66\u4e60\u4e8e\u6155\u8bfe\u7f51",(0,l.kt)("inlineCode",{parentName:"p"},"DevOps24h"),"\u8bb2\u5e08\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f18\u96c5\u73a9\u8f6cVim"),"-",(0,l.kt)("a",{parentName:"p",href:"https://www.imooc.com/learn/1049"},"\u8bfe\u7a0b")),(0,l.kt)("h3",{id:"\u79fb\u52a8\u8df3\u8f6c\u548c\u7f29\u8fdb"},"\u79fb\u52a8\u3001\u8df3\u8f6c\u548c\u7f29\u8fdb"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u5149\u6807\u79fb\u52a8"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"h/j/k/l"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5de6/\u4e0b/\u4e0a/\u53f3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"^/0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u79fb\u52a8\u5230\u884c\u9996/\u5305\u62ec\u7f29\u8fdb\u7a7a\u683c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"$"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u79fb\u52a8\u5230\u884c\u5c3e"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u5355\u8bcd\u548c\u5b57\u7b26\u4e32\u79fb\u52a8"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"w/W"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5411\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u5f00\u5934"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"b/B"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53cd\u5411\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u5f00\u5934"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"e/E"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5411\u79fb\u52a8\u4e0b\u4e00\u4e2a\u5355\u8bcd\u884c\u5c3e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"ge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53cd\u5411\u79fb\u52a8\u4e0b\u4e00\u4e2a\u5355\u8bcd\u884c\u5c3e"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u8df3\u8f6c"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Ctrl-f/F"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e0b\u4e00\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Ctrl-b/B"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e0a\u4e00\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Ctrl-d/u"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5411\u4e0b/\u4e0a\u7ffb\u534a\u9875"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"gg"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8df3\u8f6c\u5230\u9996\u884c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"<:Line_Number>gg/G"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8df3\u8f6c\u5230\u6307\u5b9a\u884c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{g} + Ctrl-g/G"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8df3\u8f6c\u5230\u6700\u540e\u4e00\u884c"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u7f29\u8fdb"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},">> / :>"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53f3\u7f29\u8fdb"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m,n> / :m>(n-m+1)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"m \u5230 n \u884c\u7f29\u8fdb"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m>n \u7b49\u4ef7\u4e8e\u547d\u4ee4:m,m+n-1>"),(0,l.kt)("td",{parentName:"tr",align:"center"},"m \u884c\u5f00\u59cb\u5171 n \u884c\u7f29\u8fdb\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("h3",{id:"\u5220\u9664\u590d\u5236\u548c\u7c98\u8d34"},"\u5220\u9664\u3001\u590d\u5236\u548c\u7c98\u8d34"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u5bf9\u6bd4"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"window"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Vim"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0d\u540c\u5904"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"cut"),(0,l.kt)("td",{parentName:"tr",align:"center"},"delete"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u548c\u526a\u5207\u76f8\u540c\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5220\u9664"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"copy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yank"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7b49\u540c\u4e8e\u590d\u5236\u7531\u4e8e c \u7528\u4e8e\u4fee\u6539(change)\u88ab\u8feb\u9009\u4e86 yank"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"paste"),(0,l.kt)("td",{parentName:"tr",align:"center"},"put"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7c98\u8d34\u5b8c\u5168\u76f8\u540c"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u57fa\u672c\u64cd\u4f5c"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"d = delete = cut"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u526a\u5207"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"dd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u526a\u5207\u5f53\u524d\u5149\u6807\u6574\u884c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"y = yank \u2248 copy"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7c7b\u4f3c\u4e8e\u590d\u5236"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"p/P = put \u2248 paste"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7c98\u8d34\u5230\u5149\u6807\u540e/\u5149\u6807\u524d"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"u = undo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u64a4\u9500\u4e4b\u524d\u64cd\u4f5c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Ctrl-r = redo"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u505a/\u6062\u590d\u4e4b\u524d\u64cd\u4f5c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"yw"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u590d\u5236\u5f53\u524d\u5149\u6807\u5355\u8bcd"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"y2w"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u590d\u5236\u6b63\u5411\u4e24\u4e2a\u5355\u8bcd"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"yy \u7c7b\u4f3c\u4e8e dd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u590d\u5236\u5f53\u524d\u5149\u6807\u6574\u884c"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u7ec4\u5408\u5220\u9664"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"x/X"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5149\u6807\u4e0b/\u524d\u5355\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"dw(d=delete, w=word)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u4e00\u5355\u8bcd(\u5fc5\u987b\u5728\u8bcd\u9996)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"d{hjkl}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5230\u5de6\u4e0b\u4e0a\u53f3\u4e00\u4e2a\u64cd\u4f5c\u524d\u7684\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"d$=D"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5149\u6807\u5230\u884c\u5c3e\u7684\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"d^"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5149\u6807\u5230\u884c\u9996\u7684\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"dd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5f53\u524d\u6574\u884c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n}dd"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5411\u4e0b\u5220\u9664 n \u884c(\u5305\u62ec\u5f53\u524d\u884c)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"5dw"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u6b63\u5411\u5355\u8bcd 5 \u6b21"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"3w"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5411\u79fb\u52a8\u5355\u8bcd 3 \u6b21"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"D3w"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5411\u5220\u9664 3w \u52a8\u4f5c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2d3w"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5411\u5220\u9664 3w \u52a8\u4f5c 2 \u6b21"),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("h3",{id:"\u4fee\u6539\u67e5\u627e\u548c\u66ff\u6362"},"\u4fee\u6539\u3001\u67e5\u627e\u548c\u66ff\u6362"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u63d2\u5165"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Shift+i/A"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u63d2\u5165\u6a21\u5f0f\u5e76\u79fb\u52a8\u5230\u884c\u9996/\u884c\u5c3e"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"a/i"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5149\u6807\u540e/\u524d\u63d2\u5165"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n}O/o"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u884c\u524d/\u884c\u540e\u63d2\u5165 n \u6b21"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n}+i"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u63d2\u5165\u6a21\u5f0f\u91cd\u590d n \u6b21"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u8f6c\u6362"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"~"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5355\u4e2a\u5b57\u7b26\u5927\u5c0f\u5199\u8f6c\u6362"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"g ~ w"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5355\u8bcd\u5927\u5c0f\u5199\u8f6c\u6362"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"g ~ $ / g ~ ~"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6574\u884c\u5927\u5c0f\u5199\u8f6c\u6362"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"gU/uw"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5355\u8bcd\u8f6c\u6362\u6210\u5927/\u5c0f\u5199"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u67e5\u627e"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"F/f{char}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53cd\u5411/\u6b63\u5411\u67e5\u627e\u5355\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"t{char}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u67e5\u627e\u5b57\u7b26\u524d\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"dt{char} / df{space}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5220\u9664\u5149\u6807\u5230\u67e5\u627e\u5b57\u7b26\u95f4\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"/{char}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u547d\u4ee4\u884c\u67e5\u627e"),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u66ff\u6362"))),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u6309\u952e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6548\u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Shift + r/R"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u66ff\u6362\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"r"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5355\u4e2a\u5b57\u7b26\u66ff\u6362"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"cw"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4fee\u6539\u5355\u4e2a\u5355\u8bcd"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"c$ / C"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4fee\u6539\u5149\u6807\u4e4b\u540e\u884c\u5185\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"s/going/rolling/g"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5f53\u524d\u884c\u6240\u6709 going \u66ff\u6362\u6210 rolling"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"%s/going/rolling/g"),(0,l.kt)("td",{parentName:"tr",align:"center"},"%\u5339\u914d\u6240\u6709\u8303\u56f4"),(0,l.kt)("td",{parentName:"tr",align:null})))))))}o.isMDXComponent=!0},1416:function(t,e,a){e.Z=a.p+"assets/images/vim-ae4e7990be359d8b4f8b1aa1687fa6e4.png"}}]);