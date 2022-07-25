"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3861],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,k=g["".concat(u,".").concat(m)]||g[m]||c[m]||a;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s}});var l=n(83117),r=(n(67294),n(3905));const a={slug:"install-git",title:"\u5b89\u88c5Git",authors:"zeffon",tags:["git"],date:new Date("2019-08-30T00:00:00.000Z")},i=void 0,o={permalink:"/blog/install-git",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-08-30-linux-build-git.md",source:"@site/blog/2019/2019-08-30-linux-build-git.md",title:"\u5b89\u88c5Git",description:"\u4e00\u6587\u7b80\u5355\u4ecb\u7ecd Git \u7684\u5b89\u88c5",date:"2019-08-30T00:00:00.000Z",formattedDate:"August 30, 2019",tags:[{label:"git",permalink:"/blog/tags/git"}],readingTime:2.28,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"install-git",title:"\u5b89\u88c5Git",authors:"zeffon",tags:["git"],date:"2019-08-30T00:00:00.000Z"},prevItem:{title:"\u975e\u7ebf\u6027\u7ed3\u6784 - \u6811",permalink:"/blog/no-structure-tree"},nextItem:{title:"\u57fa\u7840\u7ebf\u6027\u7ed3\u6784",permalink:"/blog/linear-structure"}},u={authorsImageUrls:[void 0]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u5b89\u88c5\u7f16\u8bd1",id:"\u5b89\u88c5\u7f16\u8bd1",level:3},{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e00\u6587\u7b80\u5355\u4ecb\u7ecd Git \u7684\u5b89\u88c5"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6ce8"))," \xa0yum \u6e90\u4ed3\u5e93\u91cc\u7684 Git \u7248\u672c\u66f4\u65b0\u4e0d\u53ca\u65f6\uff0c\u6700\u65b0\u7248\u672c\u7684 Git \u662f 1.8.3.1\uff0c\u4f46\u662f\u5b98\u65b9\u6700\u65b0\u7248\u672c\u5df2\u7ecf\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"2+"),"\u3002\u60f3\u8981\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684\u7684 Git\uff0c\u53ea\u80fd\u4e0b\u8f7d\u6e90\u7801\u8fdb\u884c\u5b89\u88c5\u3002")),(0,r.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u7f16\u8bd1"},"\u5b89\u88c5\u7f16\u8bd1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b yum \u6e90\u4ed3\u5e93 git \u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum info git\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f9d\u8d56\u5e93\u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel\n$ yum install gcc perl-ExtUtils-MakeMaker\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d\u4f4e\u7248\u672c\u7684 Git")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum remove git\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u65b0\u7248\u7684 Git \u6e90\u7801\u5305")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir git # \u6211\u653e\u7684\u4e86 /usr/local/git \u7684\u76ee\u5f55\u4e0b\u4e86\uff0cgit\u662f\u6211\u81ea\u5df1mkdir\u7684\u76ee\u5f55\n$ cd git\n$ wget https://github.com/git/git/archive/v2.9.2.tar.gz\n$ tar -xzvf v2.9.2.tar.gz\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5b89\u88c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd git-2.9.2\n$ make prefix=/usr/local/git all\n$ make prefix=/usr/local/git install\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ vim ~/.bash_profile  # \u5982\u679c\u6ca1\u6709vim\uff0c\u5219\u5b89\u88c5vim\u5de5\u5177 yum install vim\nexport PATH="/usr/local/git/bin:$PATH"\n$ source ~/.bash_profile   # \u4f7f\u914d\u7f6e\u7acb\u5373\u751f\u6548\n$ git --version  # \u67e5\u770b\u7248\u672c\u53f7\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06 git \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u8def\u5f84(\u4e0d\u7136\u540e\u9762\u514b\u9686\u65f6\u4f1a\u62a5\u9519)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ln -s /usr/local/git/bin/git-upload-pack /usr/bin/git-upload-pack\n$ ln -s /usr/local/git/bin/git-receive-pack /usr/bin/git-receive-pack\n")),(0,r.kt)("h3",{id:"\u670d\u52a1\u914d\u7f6e"},"\u670d\u52a1\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u90ae\u7bb1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ git config --global user.name '\u7528\u6237\u540d'\n$ git config --global user.email '\u90ae\u7bb1\u5730\u5740'\n$ git config --list # \u67e5\u770b\u914d\u7f6e\u9879\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u67e5\u770b\u662f\u5426\u5b58\u5728 ssh keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ~/.ssh\n$ ls\nauthorized_keys\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ca1\u51fa\u73b0",(0,r.kt)("inlineCode",{parentName:"strong"},"id_rsa \u548c id_rsa.pub"),",\u5219\u8868\u793a\u9700\u8981\u521b\u5efa\u4e00\u4e2a ssh keys")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684 ssh keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ ssh-keygen -t rsa -C "\u90ae\u7bb1"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f"))," \u5982\u679c\u4e09\u6b21\u76f4\u63a5\u56de\u8f66(",(0,r.kt)("inlineCode",{parentName:"p"},"\u65e0\u5bc6\u7801"),"push \u548c pull)\uff0c\u4e5f\u53ef\u4ee5\u7b2c\u4e8c\u6b21\u548c\u7b2c\u4e09\u6b21\u8f93\u5165\u5bc6\u7801\uff08push \u548c pull \u64cd\u4f5c\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"\u8be5\u5bc6\u7801"),"\u9a8c\u8bc1\uff09")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u4e00\u4e0b\u8fde\u63a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ssh -T -v git@github.com\nYou've successfully authenticated\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"~/.ssh"),"\u4e2d\u516c\u94a5",(0,r.kt)("inlineCode",{parentName:"li"},"id_rsa.pub"),"\u7684\u5185\u5bb9\u590d\u5236\u5230\u5404\u4e2a\u5e73\u53f0(\u5982 github\u3001gitee)\u7684\u4e0a\u516c\u94a5\u914d\u7f6e\uff0c\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"li"},"ssh\u65b9\u5f0f"),"\u63a8\u9001\u4ee3\u7801\u3002")))}c.isMDXComponent=!0}}]);