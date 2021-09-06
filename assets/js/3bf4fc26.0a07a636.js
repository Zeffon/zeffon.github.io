"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5984],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),A=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=A(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=A(n),d=r,p=g["".concat(i,".").concat(d)]||g[d]||s[d]||u;return n?a.createElement(p,o(o({ref:t},c),{},{components:n})):a.createElement(p,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,o=new Array(u);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var A=2;A<u;A++)o[A]=n[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return A},assets:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),u=(n(7294),n(3905)),o=["components"],l={slug:"group-by-and-having",title:"GROUP BY\u548cHAVING\u7684\u7528\u6cd5",authors:"zeffon",tags:["database"],date:new Date("2019-11-05T00:00:00.000Z")},i=void 0,A={permalink:"/blog/group-by-and-having",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-05-group-by-and-having.md",source:"@site/blog/2019/2019-11-05-group-by-and-having.md",title:"GROUP BY\u548cHAVING\u7684\u7528\u6cd5",description:"GROUP BY \u548c HAVING \u7684\u7528\u6cd5",date:"2019-11-05T00:00:00.000Z",formattedDate:"November 5, 2019",tags:[{label:"database",permalink:"/blog/tags/database"}],readingTime:1.11,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Java \u6ce8\u89e3",permalink:"/blog/java-annotation"},nextItem:{title:"Vimium\u7684\u4f7f\u7528",permalink:"/blog/vimium"}},c={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"GROUP BY",id:"group-by",children:[]},{value:"HAVING",id:"having",children:[]}]}],g={toc:s};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,u.kt)("wrapper",(0,a.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"GROUP BY \u548c HAVING \u7684\u7528\u6cd5"),(0,u.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"GROUP BY \u662f\u5206\u7ec4\u67e5\u8be2, \u4e00\u822c GROUP BY \u662f\u548c\u805a\u5408\u51fd\u6570\u914d\u5408\u4f7f\u7528\u3002")),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"group by \u6709\u4e00\u4e2a\u539f\u5219,\u5c31\u662f \u6ee1\u8db3",(0,u.kt)("inlineCode",{parentName:"li"},"SELECT\u5b50\u53e5\u4e2d\u7684\u5217\u540d\u5fc5\u987b\u4e3a\u5206\u7ec4\u5217\u6216\u5217\u51fd\u6570"),"\u3002"),(0,u.kt)("li",{parentName:"ol"},"\u5217\u51fd\u6570\u5bf9\u4e8e group by \u5b50\u53e5\u5b9a\u4e49\u7684\u6bcf\u4e2a\u7ec4\u5404\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u3002")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"HAVING \u901a\u5e38\u4e0e GROUP BY \u5b50\u53e5\u4e00\u8d77\u4f7f\u7528")),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"WHERE \u8fc7\u6ee4\u884c\uff0cHAVING \u8fc7\u6ee4\u7ec4"),(0,u.kt)("li",{parentName:"ol"},"\u51fa\u73b0\u5728\u540c\u4e00 sql \u7684\u987a\u5e8f\uff1aWHERE -> GROUP BY -> HAVING")),(0,u.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,u.kt)("p",null,"\u4e09\u5f20\u6570\u636e\u8868-\u5b66\u751f\u8868(student_id\u3001name\u3001age\u3001sex)\u3001\u8bfe\u7a0b\u8868(course_id\u3001name)\u3001\u6210\u7ee9\u8868(student_id\u3001course_id\u3001score)"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5b66\u751f\u8868(student_id\u3001name\u3001age\u3001sex)")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-01.png",src:n(2166).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bfe\u7a0b\u8868(course_id\u3001name)")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-02.png",src:n(2830).Z})),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6210\u7ee9\u8868(student_id\u3001course_id\u3001score)")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-03.png",src:n(4e3).Z})),(0,u.kt)("h3",{id:"group-by"},"GROUP BY"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u3001\u9009\u8bfe\u6570\u3001\u603b\u6210\u7ee9")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"select student_id, count(course_id), sum(score)\nfrom score\ngroup by student_id;\n")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u5217\u51fd\u6570\u5bf9\u4e8e group by \u5b50\u53e5\u5b9a\u4e49\u7684\u6bcf\u4e2a\u7ec4\u5404\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u3002\n\u5982\u679c\u7528 group by\uff0c\u90a3\u4e48\u4f60\u7684 select \u8bed\u53e5\u4e2d\u9009\u51fa\u7684\u5217\u8981\u4e48\u662f\u4f60 group by \u91cc\u7528\u5230\u7684\u5217\uff0c\u8981\u4e48\u5c31\u662f\u5e26\u6709 sum min count \u7b49\u51fd\u6570\u7684\u5217")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-04.png",src:n(4408).Z})),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6240\u6709\u540c\u5b66\u7684\u5b66\u53f7\u3001\u59d3\u540d\u3001\u9009\u8bfe\u6570\u3001\u603b\u6210\u7ee9")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"select s.student_id, stu.name, count(s.course_id), sum(s.score)\nfrom score s, student stu\nwhere s.student_id = stu.student_id\ngroup by s.student_id;\n")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"group by \u91cc\u51fa\u73b0\u67d0\u4e2a\u8868\u7684\u5b57\u6bb5\uff0cselect \u91cc\u9762\u7684\u5217\u8981\u4e48\u662f\u8be5 group by \u91cc\u9762\u7684\u5217\uff0c\u8981\u4e48\u662f",(0,u.kt)("inlineCode",{parentName:"p"},"\u522b\u7684\u8868"),"\u7684\u5217\u6216\u8005\u5e26\u6709\u51fd\u6570\u7684\u5217")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-05.png",src:n(7132).Z})),(0,u.kt)("h3",{id:"having"},"HAVING"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u5e73\u5747\u6210\u7ee9\u5927\u4e8e 60 \u5206\u7684\u540c\u5b66\u7684\u5b66\u53f7\u548c\u5e73\u5747\u6210\u7ee9")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"select student_id, avg(score)\nfrom score\ngroup by student_id\nhaving avg(score) > 60\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-07.png",src:n(3343).Z})),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"having \u5fc5\u987b\u8981\u5728 group by \u4e4b\u540e\uff0c\u4e0d\u7136\u4f1a\u62a5\u9519\u3002\u5982\u679c\u7701\u7565\u4e86 group by \u8bed\u53e5\uff0chaving \u5b50\u53e5\u5c31\u8ddf where \u8bed\u53e5\u4e00\u6837")),(0,u.kt)("ol",{start:2},(0,u.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6ca1\u6709\u5b66\u5168\u6240\u6709\u8bfe\u7684\u540c\u5b66\u7684\u5b66\u53f7\u3001\u59d3\u540d")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"select stu.student_id, stu.name\nfrom student stu, score s\nwhere stu.student_id = s.student_id\ngroup by s.student_id\nhaving count(*) <\n(\n    select count(*) from course\n)\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-07.png",src:n(8087).Z})),(0,u.kt)("ol",{start:3},(0,u.kt)("li",{parentName:"ol"},"\u53d6\u51fa student_id \u4e3a 1 \u7684\u5b66\u751f\u7684\u6210\u7ee9\u60c5\u51b5")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"select s.student_id, c.name, s.score\nfrom  score s, course c\nwhere s.course_id = c.course_id\nhaving s.student_id = 1\n")),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"group-by-and-having-08.png",src:n(5691).Z})),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("inlineCode",{parentName:"p"},"where")," \u5b50\u53e5\u7684\u4f5c\u7528\u662f\u5728\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c",(0,u.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4\u524d"),"\uff0c\u5c06\u4e0d\u7b26\u5408 where \u6761\u4ef6\u7684\u884c\u53bb\u6389\uff0c\u5373\u5728",(0,u.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4\u4e4b\u524d"),"\u8fc7\u6ee4\u6570\u636e\uff0c\u6761\u4ef6\u4e2d\u4e0d\u80fd\u5305\u542b\u805a\u7ec4\u51fd\u6570\uff0c\u4f7f\u7528 where \u6761\u4ef6\u663e\u793a\u7279\u5b9a\u7684\u884c\u3002\n",(0,u.kt)("inlineCode",{parentName:"p"},"having")," \u5b50\u53e5\u7684\u4f5c\u7528\u662f\u7b5b\u9009\u6ee1\u8db3\u6761\u4ef6\u7684\u7ec4\uff0c\u5373\u5728",(0,u.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4\u4e4b\u540e"),"\u8fc7\u6ee4\u6570\u636e\uff0c\u6761\u4ef6\u4e2d\u7ecf\u5e38\u5305\u542b\u805a\u7ec4\u51fd\u6570\uff0c\u4f7f\u7528 having \u6761\u4ef6\u663e\u793a\u7279\u5b9a\u7684\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u5206\u7ec4\u6807\u51c6\u8fdb\u884c\u5206\u7ec4\u3002")))}d.isMDXComponent=!0},2166:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-01-2f366050e9b273184cfe5533198f70a9.png"},2830:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-02-000170f89288d2540d621c2d4b20d843.png"},4e3:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-03-4a25a4fbf41f0b3c4dcd8589d3b93570.png"},4408:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-04-75f0cd5a4d84ed1caec3849acde89b1f.png"},7132:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-05-1d7ad266dd54ded577949789eb5d2d3b.png"},3343:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-06-17cb7c181dc7a94e902cc2162d6b11e8.png"},8087:function(e,t,n){t.Z=n.p+"assets/images/group-by-and-having-07-ce75782eb5d4f6cd2b99fcfeec8c5bc2.png"},5691:function(e,t){t.Z="data:image/png;base64,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"}}]);