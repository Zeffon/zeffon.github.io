"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(n),b=a,k=m["".concat(u,".").concat(b)]||m[b]||s[b]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i}});var r=n(83117),a=(n(67294),n(3905));const l={slug:"how-use-crontab",title:"Crontab\u7684\u4f7f\u7528",authors:"zeffon",tags:["linux"],date:new Date("2019-09-06T00:00:00.000Z")},o=void 0,c={permalink:"/blog/how-use-crontab",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-09-06-how-use-crontab.md",source:"@site/blog/2019/2019-09-06-how-use-crontab.md",title:"Crontab\u7684\u4f7f\u7528",description:"Linux crontab \u547d\u4ee4 Linux \u547d\u4ee4\u5927\u5168 Linux crontab \u662f\u7528\u6765\u5b9a\u671f\u6267\u884c\u7a0b\u5e8f\u7684\u547d\u4ee4\u3002\u5f53\u5b89\u88c5\u5b8c\u6210\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u540e\uff0c\u9ed8\u8ba4\u4fbf\u4f1a\u542f\u52a8\u6b64\u4efb\u52a1\u8c03\u5ea6\u547d\u4ee4\u3002",date:"2019-09-06T00:00:00.000Z",formattedDate:"September 6, 2019",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:5.79,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"how-use-crontab",title:"Crontab\u7684\u4f7f\u7528",authors:"zeffon",tags:["linux"],date:"2019-09-06T00:00:00.000Z"},prevItem:{title:"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6",permalink:"/blog/segment-tree-and-trie-and-union-find"},nextItem:{title:"\u4e8c\u53c9\u5806\u548c\u4f18\u5148\u961f\u5217",permalink:"/blog/priority-queue-and-binary-heap"}},u={authorsImageUrls:[void 0]},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"crontab \u5b9a\u65f6\u4efb\u52a1",id:"crontab-\u5b9a\u65f6\u4efb\u52a1",level:3},{value:"\u547d\u4ee4\u53c2\u6570",id:"\u547d\u4ee4\u53c2\u6570",level:3},{value:"\u547d\u4ee4\u683c\u5f0f",id:"\u547d\u4ee4\u683c\u5f0f",level:3},{value:"\u5b89\u88c5&amp;\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",level:2},{value:"crontab \u5b89\u88c5",id:"crontab-\u5b89\u88c5",level:3},{value:"crontab \u4f7f\u7528",id:"crontab-\u4f7f\u7528",level:3}],p={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Linux crontab \u547d\u4ee4 Linux \u547d\u4ee4\u5927\u5168 Linux crontab \u662f\u7528\u6765\u5b9a\u671f\u6267\u884c\u7a0b\u5e8f\u7684\u547d\u4ee4\u3002\u5f53\u5b89\u88c5\u5b8c\u6210\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u540e\uff0c\u9ed8\u8ba4\u4fbf\u4f1a\u542f\u52a8\u6b64\u4efb\u52a1\u8c03\u5ea6\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"Linux crontab \u547d\u4ee4 Linux \u547d\u4ee4\u5927\u5168 Linux crontab \u662f\u7528\u6765\u5b9a\u671f\u6267\u884c\u7a0b\u5e8f\u7684\u547d\u4ee4\u3002\u5f53\u5b89\u88c5\u5b8c\u6210\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u540e\uff0c\u9ed8\u8ba4\u4fbf\u4f1a\u542f\u52a8\u6b64\u4efb\u52a1\u8c03\u5ea6\u547d\u4ee4\u3002"),(0,a.kt)("h3",{id:"crontab-\u5b9a\u65f6\u4efb\u52a1"},"crontab \u5b9a\u65f6\u4efb\u52a1"),(0,a.kt)("p",null,"\u901a\u8fc7 crontab \u547d\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u56fa\u5b9a\u7684\u95f4\u9694\u65f6\u95f4\u6267\u884c\u6307\u5b9a\u7684\u7cfb\u7edf\u6307\u4ee4\u6216 shell script \u811a\u672c\u3002\u65f6\u95f4\u95f4\u9694\u7684\u5355\u4f4d\u53ef\u4ee5\u662f\u5206\u949f\u3001\u5c0f\u65f6\u3001\u65e5\u3001\u6708\u3001\u5468\u53ca\u4ee5\u4e0a\u7684\u4efb\u610f\u7ec4\u5408\u3002\u8fd9\u4e2a\u547d\u4ee4\u975e\u5e38\u9002\u5408\u5468\u671f\u6027\u7684\u65e5\u5fd7\u5206\u6790\u6216\u6570\u636e\u5907\u4efd\u7b49\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"\u547d\u4ee4\u53c2\u6570"},"\u547d\u4ee4\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"-u user\uff1a\u7528\u6765\u8bbe\u5b9a\u67d0\u4e2a\u7528\u6237\u7684crontab\u670d\u52a1\uff1b\nfile\uff1afile\u662f\u547d\u4ee4\u6587\u4ef6\u7684\u540d\u5b57,\u8868\u793a\u5c06file\u505a\u4e3acrontab\u7684\u4efb\u52a1\u5217\u8868\u6587\u4ef6\u5e76\u8f7d\u5165crontab\u3002\u5982\u679c\u5728\u547d\u4ee4\u884c\u4e2d\u6ca1\u6709\u6307\u5b9a\u8fd9\u4e2a\u6587\u4ef6\uff0ccrontab\u547d\u4ee4\u5c06\u63a5\u53d7\u6807\u51c6\u8f93\u5165\uff08\u952e\u76d8\uff09\u4e0a\u952e\u5165\u7684\u547d\u4ee4\uff0c\u5e76\u5c06\u5b83\u4eec\u8f7d\u5165crontab\u3002\n-e\uff1a\u7f16\u8f91\u67d0\u4e2a\u7528\u6237\u7684crontab\u6587\u4ef6\u5185\u5bb9\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u7528\u6237\uff0c\u5219\u8868\u793a\u7f16\u8f91\u5f53\u524d\u7528\u6237\u7684crontab\u6587\u4ef6\u3002\n-l\uff1a\u663e\u793a\u67d0\u4e2a\u7528\u6237\u7684crontab\u6587\u4ef6\u5185\u5bb9\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7528\u6237\uff0c\u5219\u8868\u793a\u663e\u793a\u5f53\u524d\u7528\u6237\u7684crontab\u6587\u4ef6\u5185\u5bb9\u3002\n-r\uff1a\u4ece/var/spool/cron\u76ee\u5f55\u4e2d\u5220\u9664\u67d0\u4e2a\u7528\u6237\u7684crontab\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u7528\u6237\uff0c\u5219\u9ed8\u8ba4\u5220\u9664\u5f53\u524d\u7528\u6237\u7684crontab\u6587\u4ef6\u3002\n-i\uff1a\u5728\u5220\u9664\u7528\u6237\u7684crontab\u6587\u4ef6\u65f6\u7ed9\u786e\u8ba4\u63d0\u793a\u3002\n")),(0,a.kt)("h3",{id:"\u547d\u4ee4\u683c\u5f0f"},"\u547d\u4ee4\u683c\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6807\u51c6\u7684 crontab \u914d\u7f6e\u9700\u8981\u7b26\u5408\u5982\u4e0b :\n",(0,a.kt)("inlineCode",{parentName:"li"},"\u5206 \u65f6 \u65e5 \u6708 \u661f\u671f")," \u8981\u8fd0\u884c\u7684\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"*     *     *     *     *     command to be executed\n-     -     -     -     -\n|     |     |     |     |\n|     |     |     |     +----- day of week (0 - 6) (Sunday=0)\n|     |     |     +------- month (1 - 12)\n|     |     +--------- day of month (1 - 31)\n|     +----------- hour (0 - 23)\n+------------- min (0 - 59)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a crontab \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u901a\u8fc7\u524d\u4e94\u4e2a\u57df\u6765\u8868\u793a\u65f6\u523b\uff0c\u65f6\u671f\uff0c\u751a\u81f3\u662f\u65f6\u95f4\u6bb5\u3002\u6bcf\u4e00\u4e2a\u57df\u4e2d\uff0c\u53ef\u4ee5\u5305\u542b ","*"," \u6216\u8005\u9017\u53f7\u5206\u5272\u7684\u6570\u5b57\uff0c\u6216\u8005 - \u8fde\u63a5\u7684\u6570\u5b57\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," * \u53f7\u8868\u793a\u4efb\u610f\n , \u9017\u53f7\u5206\u5272\u8868\u793a\u65f6\u523b\uff0c separator\n - \u77ed\u6a2a\u7ebf\u8fde\u63a5\uff0c\u8868\u793a\u65f6\u95f4\u6bb5\uff0c range of values\n / \u8868\u793a\u95f4\u9694\uff0c \u5982\u679c\u7b2c\u4e00\u4e2a\u57df\u4e3a /2 \uff0c\u5219\u8868\u793a\u6bcf\u9694\u4e24\u5206\u949f\uff0c step value\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u800c\u7a7a\u683c\u5206\u5272\u7684\u516d\u4e2a\u57df\u5206\u522b\u8868\u793a\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c 1 \u5217\u5206\u949f\uff0c\u53d6\u503c\u8303\u56f4 0 \uff5e 59"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c 2 \u5217\u5c0f\u65f6 0 \uff5e 23\uff080 \u8868\u793a\u5b50\u591c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c 3 \u5217\u65e5 1 \uff5e 31"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c 4 \u5217\u6708 1 \uff5e 12"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c 5 \u5217\u661f\u671f 0 \uff5e 7\uff080 \u548c 7 \u8868\u793a\u661f\u671f\u5929\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c 6 \u5217\u8981\u8fd0\u884c\u7684\u547d\u4ee4")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879"),":\n\u91cd\u590d\u683c\u5f0f /2 \u8868\u793a\u6ca1\u4e24\u5206\u949f\u6267\u884c\u4e00\u6b21 \u6216\u8005 /10 \u8868\u793a\u6bcf 10 \u5206\u949f\u6267\u884c\u4e00\u6b21\uff0c\u8fd9\u6837\u7684\u8bed\u6cd5\u683c\u5f0f\u5e76\u4e0d\u662f\u88ab\u6240\u6709\u7cfb\u7edf\u652f\u6301\u3002\n\u5177\u4f53\u67d0\u4e00\u5929\u7684\u6307\u5b9a\uff0c\u53ef\u4ee5\u7531\u7b2c\u4e09\u9879\uff08month day\uff09\u548c\u7b2c\u4e94\u9879\uff08weekday\uff09\u6307\u5b9a\uff0c\u5982\u679c\u4e24\u9879\u90fd\u88ab\u8bbe\u5b9a\uff0c\u90a3\u4e48 cron \u90fd\u4f1a\u6267\u884c\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5&\u4f7f\u7528"),(0,a.kt)("h3",{id:"crontab-\u5b89\u88c5"},"crontab \u5b89\u88c5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u4e86 crontab\uff0c\u5982\u679c\u63d0\u793a\u672a\u5b89\u88c5\u8bf7\u81ea\u884c\u5b89\u88c5\uff0ccrontab \u5b89\u88c5\u5305\u5728\u7cfb\u7edf\u5149\u76d8\u91cc\u9762\u7684 pacekage \u6587\u4ef6\u5939 crontabs \u5b89\u88c5\u5305\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -qa | grep crontab\ncrontabs-1.11-6.20121102git.el7.noarch # \u5df2\u5b89\u88c5\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"crontabs \u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install -y cronie crontabs\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5 crond \u670d\u52a1\u662f\u5426\u5b89\u88c5\u53ca\u542f\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum list crontabs && which crontab && crontab -l\n")),(0,a.kt)("h3",{id:"crontab-\u4f7f\u7528"},"crontab \u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"systemctl")," \u64cd\u4f5c crontab")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8\n$ systemctl enable crond\n# \u5f00\u542f\n$ systemctl start crond\n# \u505c\u6b62\n$ systemctl stop crond\n# \u91cd\u542f\n$ systemctl restart crond\n# \u67e5\u770b\u5f53\u524d\u72b6\u6001\n$ systemctl status crond\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528-l \u53c2\u6570\u5217\u51fa crontab \u6587\u4ef6:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ crontab -l\n10 0 * 1 * /usr/local/certbot/certbot-auto --force-renew --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx"\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u5728 $HOME \u76ee\u5f55\u4e2d\u5bf9 crontab \u6587\u4ef6\u505a\u4e00\u5907\u4efd\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ crontab -l > $HOME/mycron\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u4e00\u65e6\u4e0d\u5c0f\u5fc3\u8bef\u5220\u4e86 crontab \u6587\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e0a\u9762\u6240\u8bb2\u8ff0\u7684\u65b9\u6cd5\u8fc5\u901f\u6062\u590d\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 crontab \u4efb\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ crontab -e\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 crontab \u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"crontab -r\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f"))," \u5343\u4e07\u522b\u4e71\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"crontab -r"),"\u3002\u5b83\u4ece Crontab \u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/spool/cron")," \u4e2d\u5220\u9664\u7528\u6237\u7684 Crontab \u6587\u4ef6\u3002\u5220\u9664\u4e86\u8be5\u7528\u6237\u7684\u6240\u6709 crontab \u90fd\u6ca1\u4e86\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ed9\u67d0\u4e00\u4e2a\u7528\u6237\u65b0\u5efa crontab \u4efb\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo crontab -u test -e     # \u7ed9test\u7684\u7528\u6237\u8bbe\u5b9a\u5b9a\u65f6\u4efb\u52a1\uff0c\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"crontab \u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ vim /etc/crontab\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"crontab \u65e5\u5fd7")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ tail -n 5 /var/log/cron // \u67e5\u770b\u6700\u8fd1\u4e94\u6b21\u65e5\u5fd7\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6e05\u7406\u7cfb\u7edf\u65e5\u5fd7\n\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log"),"\u8def\u5f84\uff0c\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u6587\u4ef6\u5927\u5c0f",(0,a.kt)("inlineCode",{parentName:"li"},"du -sh *"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"* * 1 * * cat /dev/null > /var/log/messages\n")))}s.isMDXComponent=!0}}]);