"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6260],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=l,f=c["".concat(i,".").concat(y)]||c[y]||m[y]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(83117),l=(n(67294),n(3905));const a={slug:"mysql-new-user-and-grant-authority",title:"MySQL \u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u6388\u4e88",authors:"zeffon",tags:["mysql"],date:new Date("2020-11-05T00:00:00.000Z")},o=void 0,s={permalink:"/blog/mysql-new-user-and-grant-authority",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-11-05-mysql-new-user-and-grant-authority.md",source:"@site/blog/2020/2020-11-05-mysql-new-user-and-grant-authority.md",title:"MySQL \u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u6388\u4e88",description:"MySQL \u7528\u6237\u6743\u9650\u7ba1\u7406\u662f MySQL \u4e3b\u8981\u529f\u80fd\u4e4b\u4e00\u3002\u5e73\u65f6\u6211\u4eec\u65b0\u5efa\u597d\u7684 MySQL \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f root \u8d26\u6237\u3002\u867d\u7136\u5728\u4e2a\u4eba\u4f7f\u7528\u7684\u65f6\u5019\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u8fd9\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u505a\u6cd5\u3002",date:"2020-11-05T00:00:00.000Z",formattedDate:"November 5, 2020",tags:[{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:2.715,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"mysql-new-user-and-grant-authority",title:"MySQL \u7528\u6237\u7ba1\u7406\u548c\u6743\u9650\u6388\u4e88",authors:"zeffon",tags:["mysql"],date:"2020-11-05T00:00:00.000Z"},prevItem:{title:"\u9879\u76ee\u914d\u7f6eprettier\u548ccommitlint",permalink:"/blog/prettier-commitlint"},nextItem:{title:"Java \u5f02\u5e38",permalink:"/blog/java-exception"}},i={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:3},{value:"\u6388\u4e88\u6743\u9650",id:"\u6388\u4e88\u6743\u9650",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"MySQL \u7528\u6237\u6743\u9650\u7ba1\u7406\u662f MySQL \u4e3b\u8981\u529f\u80fd\u4e4b\u4e00\u3002\u5e73\u65f6\u6211\u4eec\u65b0\u5efa\u597d\u7684 MySQL \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f root \u8d26\u6237\u3002\u867d\u7136\u5728\u4e2a\u4eba\u4f7f\u7528\u7684\u65f6\u5019\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u8fd9\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u505a\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"MySQL \u7528\u6237\u6743\u9650\u7ba1\u7406\u662f MySQL \u4e3b\u8981\u529f\u80fd\u4e4b\u4e00\u3002\u5e73\u65f6\u6211\u4eec\u65b0\u5efa\u597d\u7684 MySQL \u9ed8\u8ba4\u4f7f\u7528\u7684\u662f root \u8d26\u6237\u3002\u867d\u7136\u5728\u4e2a\u4eba\u4f7f\u7528\u7684\u65f6\u5019\u5f88\u65b9\u4fbf\uff0c\u4f46\u662f\u8fd9\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u505a\u6cd5\u3002\n\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5206\u7528\u6237\u7ba1\u7406\u4e0d\u540c\u6570\u636e\u5e93\u3002"),(0,l.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,l.kt)("h3",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,l.kt)("p",null,"\u521b\u5efa\u7528\u6237\u662f\u9700\u8981\u7528\u5230 mysql \u6307\u4ee4\u7684\uff0c\u6240\u4ee5\u7684\u8bdd\u5c31\u9700\u8981\u8fdb\u5165 mysql \u7684\u63a7\u5236\u53f0\u8fdb\u884c\u76f8\u5173\u7684\u6307\u4ee4\u64cd\u4f5c\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"li"},"root\u7528\u6237"),"\u767b\u9646 mysql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mysql -u root -p\n$ Enter password:   # \u8f93\u5165mysql\u7684\u5bc6\u7801\n$ mysql>            # \u6210\u529f\u8fdb\u5165mysql\u7684\u63a7\u5236\u53f0\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u7528\u6237")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> create user 'test123'@'localhost' identified by 'password';  # \u521b\u5efa\u672c\u5730\u670d\u52a1\u5668\u624d\u53ef\u8bbf\u95ee\u7684\nmysql> create user 'test123'@'%' identified by 'password'; # \u521b\u5efa\u8fdc\u7a0b\u53ef\u8bbf\u95ee\u7684\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> flush privileges;  # \u521b\u5efa\u6210\u529f\u540e\u8bb0\u5f97\u66f4\u65b0\u6570\u636e\u5e93\u7684\u6743\u9650\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6570\u636e\u5e93\u7684\u7528\u6237")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> use mysql;\nmysql> select host, user from user;\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u7528\u6237")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> delete from user where user='test123' and host='localhost';\nmysql> flush privileges;\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u7528\u6237\u5bc6\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'mysql> update mysql.user set password=password(\'newpassword\') where user="test123" and host="%";\nmysql> flush privileges;\n')),(0,l.kt)("h3",{id:"\u6388\u4e88\u6743\u9650"},"\u6388\u4e88\u6743\u9650"),(0,l.kt)("p",null,"\u521b\u5efa\u597d\u7528\u6237\u4e4b\u540e\uff0c\u8be5\u7528\u6237\u4e0b\u662f\u6ca1\u6709\u4efb\u4f55\u53ef\u64cd\u4f5c\u7684\u6570\u636e\u53ef\uff0c\u6240\u4ee5\u9700\u8981\u8fdb\u884c\u76f8\u5173\u7684\u6388\u6743\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5206\u914d\u6743\u9650")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u547d\u4ee4\uff1agrant \u6743\u9650 on \u6570\u636e\u5e93.\u6570\u636e\u8868 to '\u7528\u6237' @ '\u4e3b\u673a\u540d' \u5bc6\u7801\u8ba4\u8bc1;\n\u6240\u4ee5\u5f53\u6211\u4eec\u8981\u5206\u914d\u6240\u6709\u6570\u636e\u5e93\u7ed9\u7528\u6237\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"*.*"),"\u6765\u4ee3\u66ff")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6307\u5b9a\u6570\u636e\u5e93\u6388\u6743\nmysql> grant all privileges on `dbname`.* to 'test123'@'%' identified by 'newpassword';\n# \u6240\u6709\u6570\u636e\u5e93\u6388\u6743\nmysql> grant all privileges on *.* to 'test123'@'%' identified by 'newpassword';\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> flush privileges;\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u56de\u6536\u6743\u9650")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u547d\u4ee4\uff1arevoke \u6743\u9650 on \u6570\u636e\u5e93.\u6570\u636e\u8868 from '\u7528\u6237'@'\u4e3b\u673a\u540d';\n\u6536\u56de\u67d0\u4e00\u7528\u6237\u67d0\u4e00\u5f20\u6570\u636e\u8868\u7684\u6240\u6709\u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u56de\u6536test123\u8868\u7684\u6240\u6709\u6743\u9650\nmysql> revoke all on *.* from 'test123'@'%';\n")))}m.isMDXComponent=!0}}]);