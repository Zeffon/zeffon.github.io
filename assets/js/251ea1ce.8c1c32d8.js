"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1279],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,b=m["".concat(c,".").concat(g)]||m[g]||s[g]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"docker-gitlab-gitlab",title:"\u642d\u5efaGitLab\u79c1\u670d",authors:"zeffon",tags:["docker"],date:new Date("2019-11-02T00:00:00.000Z")},c=void 0,p={permalink:"/blog/docker-gitlab-gitlab",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-02-docker-gitlab-gitlab.md",source:"@site/blog/2019/2019-11-02-docker-gitlab-gitlab.md",title:"\u642d\u5efaGitLab\u79c1\u670d",description:"\u57fa\u4e8e Docker \u90e8\u7f72 GitLab \u73af\u5883\u642d\u5efa\uff0c\u642d\u5efa\u81ea\u5df1\u7684git\u670d\u52a1\u5668\u3002",date:"2019-11-02T00:00:00.000Z",formattedDate:"November 2, 2019",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:.83,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Vim\u7684\u57fa\u672c\u5165\u95e8",permalink:"/blog/vim"},nextItem:{title:"Docker\u642d\u5efaMaven\u79c1\u670d",permalink:"/blog/docker-build-maven"}},u={authorsImageUrls:[void 0]},s=[{value:"\u8fd0\u884c\u642d\u5efa",id:"\u8fd0\u884c\u642d\u5efa",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u57fa\u4e8e Docker \u90e8\u7f72 GitLab \u73af\u5883\u642d\u5efa\uff0c\u642d\u5efa\u81ea\u5df1\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"git"),"\u670d\u52a1\u5668\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e GitLab \u8fd0\u884c\u7684\u5360\u7528\u5185\u5b58\u8f83\u5927\uff0c\u6240\u4ee5\u5efa\u8bae\u670d\u52a1\u5668\u5185\u5b58 2G \u4ee5\u4e0a")),(0,l.kt)("h2",{id:"\u8fd0\u884c\u642d\u5efa"},"\u8fd0\u884c\u642d\u5efa"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u955c\u50cf\u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker pull beginor/gitlab-ce:11.0.1-ce.0\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f"))," \u5982\u679c\u4e0b\u8f7d\u901f\u5ea6\u6162\u7684\u8bdd\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u963f\u91cc\u4e91\u7684\u955c\u50cf",(0,l.kt)("inlineCode",{parentName:"p"},"\u52a0\u901f\u5730\u5740")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'Docker \u955c\u50cf\u52a0\u901f\u5730\u5740\n$ vim /etc/docker/daemon.json\n{\n    "registry-mirrors": ["https://fy707np5.mirror.aliyuncs.com"]\n}\n$ systemctl daemon-reload # \u4ee4daemon.json\u751f\u6548\n$ systemctl restart docker # \u91cd\u542fDocker\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa GitLab \u7684",(0,l.kt)("inlineCode",{parentName:"li"},"\u914d\u7f6e(config)")," \u3001 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u65e5\u5fd7(logs)")," \u3001",(0,l.kt)("inlineCode",{parentName:"li"},"\u6570\u636e(data)")," \u653e\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"\u5bb9\u5668\u4e4b\u5916"),"\uff0c \u4fbf\u4e8e\u65e5\u540e\u5347\u7ea7\uff0c \u56e0\u6b64\u8bf7\u5148\u51c6\u5907\u8fd9\u4e09\u4e2a\u76ee\u5f55\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir -p /srv/gitlab/config\n$ mkdir -p /srv/gitlab/logs\n$ mkdir -p /srv/gitlab/data\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c GitLab \u5bb9\u5668\uff08\u6ce8\u610f\u673a\u5668\u662f\u5426\u5173\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"SELinux"),"\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --detach \\\n--publish 8443:443 \\\n--publish 8090:80 \\\n--name gitlab \\\n--restart always \\\n--volume /srv/gitlab/config:/etc/gitlab \\\n--volume /srv/gitlab/logs:/var/log/gitlab \\\n--volume /srv/gitlab/data:/var/opt/gitlab \\\ngitlab/gitlab-ce:latest\n")),(0,l.kt)("p",null,"\u5982\u679c\u673a\u5668\u6ca1\u5173",(0,l.kt)("inlineCode",{parentName:"p"},"SELinux"),"(\u4e00\u822c\u7684\u670d\u52a1\u5668\u9ed8\u8ba4\u662f\u5173\u7684\uff0c\u865a\u62df\u673a\u53ef\u80fd\u6ca1\u5173)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ vi /etc/selinux/config\n\u5c06SELINUX=enforcing\u6539\u4e3aSELINUX=disabled\n\u8bbe\u7f6e\u540e\u9700\u8981\u91cd\u542f\u673a\u5668\u624d\u80fd\u751f\u6548\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539/srv/gitlab/config/gitlab.rb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u628aexternal_url\u6539\u6210\u90e8\u7f72\u673a\u5668\u7684\u57df\u540d\u6216\u8005IP\u5730\u5740\n$ vi /srv/gitlab/config/gitlab.rb\nexternal_url 'http://10.71.29.81'\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539/srv/gitlab/data/gitlab-rails/etc/gitlab.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ vi /srv/gitlab/data/gitlab-rails/etc/gitlab.yml\n\u627e\u5230\u5173\u952e\u5b57 * ## Web server settings *\n\u5c06host\u7684\u503c\u6539\u6210\u6620\u5c04\u7684\u5916\u90e8\u4e3b\u673aip\u5730\u5740\u548c\u7aef\u53e3\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5728gitlab\u514b\u9686\u5730\u5740\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u540e\u9700\u8981\u505c\u6b62 docker \u5bb9\u5668\uff0c\u5e76\u4e14\u5220\u9664\uff0c\u540e\u91cd\u542f docker, \u6700\u540e\u518d\u8fd0\u884c GitLab \u5bb9\u5668")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop \u5bb9\u5668id\ndocker rm \u5bb9\u5668id\nsystemctl restart docker\ndocker run  \u2026\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"gitlab \u7684 web \u7ba1\u7406\u9875\u9762\u5c31\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"li"},"http://10.71.29.81:8090"))),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/omnibus/docker/"},"GitLab \u6587\u6863")))}g.isMDXComponent=!0}}]);