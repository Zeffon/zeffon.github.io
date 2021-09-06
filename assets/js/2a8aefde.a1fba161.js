"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8639],{3905:function(e,n,t){t.d(n,{Zo:function(){return A},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},A=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,u=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(u,i(i({ref:n},A),{},{components:t})):a.createElement(u,i({ref:n},A))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8594:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return A},toc:function(){return m},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={slug:"centos7-install-mariadb",title:"CentOS7\u5b89\u88c5mariaDB",authors:"zeffon",tags:["database"],date:new Date("2020-03-15T00:00:00.000Z")},s=void 0,p={permalink:"/blog/centos7-install-mariadb",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-03-15-centos7-install-mariadb.md",source:"@site/blog/2020/2020-03-15-centos7-install-mariadb.md",title:"CentOS7\u5b89\u88c5mariaDB",description:"\u8bb0\u5f55\u4e00\u4e0b\u4f7f\u7528\u79bb\u7ebf\u7684\u65b9\u5f0f\u5728 CentOS7 \u4e2d\u5b89\u88c5 mariaDB 10.4.x",date:"2020-03-15T00:00:00.000Z",formattedDate:"March 15, 2020",tags:[{label:"database",permalink:"/blog/tags/database"}],readingTime:1.935,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"npm\u5b89\u88c5node-sass\u7684\u62a5\u9519",permalink:"/blog/node-sass-npm-install-error"},nextItem:{title:"CentOS7\u5b89\u88c5mysql",permalink:"/blog/centos7-install-mysql"}},A={authorsImageUrls:[void 0]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u4e0b\u8f7d RPM \u5305",id:"\u4e0b\u8f7d-rpm-\u5305",children:[]},{value:"\u9010\u6b65\u5b89\u88c5 RPM \u5305(\u4e00\u5b9a\u8981\u6309\u987a\u5e8f)",id:"\u9010\u6b65\u5b89\u88c5-rpm-\u5305\u4e00\u5b9a\u8981\u6309\u987a\u5e8f",children:[]},{value:"\u89e3\u51b3\u62a5\u9519\u95ee\u9898",id:"\u89e3\u51b3\u62a5\u9519\u95ee\u9898",children:[]},{value:"\u8fd0\u884c\u5e76\u914d\u7f6e MariaDB",id:"\u8fd0\u884c\u5e76\u914d\u7f6e-mariadb",children:[]},{value:"\u8fdc\u7a0b ip \u767b\u5f55",id:"\u8fdc\u7a0b-ip-\u767b\u5f55",children:[]},{value:"\u5728\u7ebf\u5b89\u88c5",id:"\u5728\u7ebf\u5b89\u88c5",children:[]},{value:"win \u5b89\u88c5",id:"win-\u5b89\u88c5",children:[]}]},{value:"\u6587\u732e\u53c2\u8003",id:"\u6587\u732e\u53c2\u8003",children:[]}],c={toc:m};function d(e){var n=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e0b\u4f7f\u7528\u79bb\u7ebf\u7684\u65b9\u5f0f\u5728 CentOS7 \u4e2d\u5b89\u88c5 mariaDB 10.4.x"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"MariaDB \u662f\u5f00\u6e90\u5173\u7cfb\u6570\u636e\u5e93\uff0c\u662f MySQL \u7684\u539f\u59cb\u5f00\u53d1\u4eba\u5458\u5236\u4f5c\uff0c\u5e76\u4fdd\u8bc1\u4fdd\u6301\u5f00\u6e90\uff0c\u53ef\u4ee5\u8bf4\u662f MySQL \u7684\u5b6a\u751f\u5144\u5f1f\u3002\u968f\u7740\u7532\u9aa8\u6587\u6536\u8d2d\u4e86 MySQL\uff0c\u5e76\u4e14\u534a\u95ed\u6e90 Java\uff0c\u6240\u4ee5 MySQL \u5b58\u5728\u7740\u95ed\u6e90\u7684\u6f5c\u5728\u5371\u9669\u3002\u56e0\u6b64\u4e4b\u524d MySQL \u7684\u539f\u73ed\u4eba\u9a6c\u91c7\u7528 MariaDB \u8fd9\u4e2a\u5206\u652f\u6765\u907f\u514d\u98ce\u9669\u3002\nMariaDB \u662f\u5b8c\u5168\u517c\u5bb9\u4e8e MySQL \u7684\uff0c\u5305\u62ec API \u548c\u547d\u4ee4\u884c\u3002"),(0,l.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,l.kt)("h3",{id:"\u4e0b\u8f7d-rpm-\u5305"},"\u4e0b\u8f7d RPM \u5305"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 7 \u4e2a\u6240\u9700\u7684 RPM \u5305\uff0c\u8fd9\u4e9b\u5305\u90fd\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"li",href:"http://yum.mariadb.org/10.4/centos7-amd64/rpms/"},"MariaDB \u7f51\u7ad9"),"\u4e0a\u627e\u5230")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"15-01-rpms-list.png",src:t(5701).Z})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9 client\u3001common\u3001compat\u3001server \u5305\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"\u7248\u672c\u8981\u4e00\u81f4"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"15-02-find-rpms.png",src:t(4461).Z})),(0,l.kt)("h3",{id:"\u9010\u6b65\u5b89\u88c5-rpm-\u5305\u4e00\u5b9a\u8981\u6309\u987a\u5e8f"},"\u9010\u6b65\u5b89\u88c5 RPM \u5305(\u4e00\u5b9a\u8981\u6309\u987a\u5e8f)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 yum \u5b89\u88c5\u6240\u9700\u7684\u6240\u6709\u4f9d\u8d56\u9879")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install rsync nmap lsof perl-DBI nc\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"li"},"jemalloc-3.6.0-1.el7.x86_64.rpm"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -ivh jemalloc-3.6.0-1.el7.x86_64.rpm\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"li"},"jemalloc-devel-3.6.0-1.el7.x86_64.rpm"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -ivh jemalloc-devel-3.6.0-1.el7.x86_64.rpm\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 5 \u4e2a\u5269\u4e0b\u7684\u5305(",(0,l.kt)("inlineCode",{parentName:"li"},"\u8981\u6309\u5148\u540e\u987a\u5e8f\u6765"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -ivh MariaDB-common-10.4.12-1.el7.centos.x86_64.rpm \\\nMariaDB-compat-10.4.12-1.el7.centos.x86_64.rpm \\\nMariaDB-client-10.4.12-1.el7.centos.x86_64.rpm \\\ngalera-4-26.4.3-1.rhel7.el7.centos.x86_64.rpm \\\nMariaDB-server-10.4.12-1.el7.centos.x86_64.rpm\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5b89\u88c5 MariaDB-common-10.4.12-1.el7.centos.x86_64.rpm \u65f6\uff0c\u53ef\u80fd\u4e0e\u8f83\u65e7\u7684 MariaDB \u8f6f\u4ef6\u5305\u51b2\u7a81\u3002\u6211\u4eec\u9700\u8981\u5220\u9664\u5b83\u4eec\u5e76\u91cd\u65b0\u5b89\u88c5\u539f\u59cb rpm\u3002\n#rpm -ivh MariaDB-10.1.21-centos7-x86_64-common.rpm\nwarning: MariaDB-10.1.21-centos7-x86_64-common.rpm: Header V4 DSA/SHA1 Signature, key ID 1bb943db: NOKEY\nerror: Failed dependencies:\nmariadb-libs < 1:10.1.21-1.el7.centos conflicts with MariaDB-common-10.1.21-1.el7.centos.x86_64\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u4e00\u4e2a\u8b66\u544a\u7f3a\u5c11\u5bfc\u5165MariaDb\u7684key"))," \u548c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u4e0emariadb-libs\u5305\u51b2\u7a81\u4e86")))),(0,l.kt)("h3",{id:"\u89e3\u51b3\u62a5\u9519\u95ee\u9898"},"\u89e3\u51b3\u62a5\u9519\u95ee\u9898"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5378\u8f7d\u51b2\u7a81\u7684 mariadb-libs\n\u5148\u641c\u7d22")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -qa | grep mariadb-libs\nmariadb-libs-5.5.60-1.el7_5.x86_64\n")),(0,l.kt)("p",null,"\u8fdb\u884c\u5378\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -ev --nodeps mariadb-libs-5.5.60-1.el7_5.x86_64\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u5165 MariaDb \u7684 key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm --import http://yum.mariadb.org/RPM-GPG-KEY-MariaDB\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5728\u5b89\u88c5 Galera \u8f6f\u4ef6\u5305\u65f6\uff0c\u4f9d\u8d56\u8f6f\u4ef6\u5305\u7684\u5b89\u88c5\u53ef\u80fd\u4f1a\u53d1\u751f\u51b2\u7a81\u3002\u8fd9\u662f\u9519\u8bef\u6d88\u606f\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"error: Failed dependencies:\nlibboost_program_options.so.1.53.0()(64bit) is needed by galera-25.3.19-1.rhel7.el7.centos.x86_64\nThe dependencies for Galera package is: libboost_program_options.so.1.53.0")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"li"},"boost-devel"),"\u4f9d\u8d56\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install boost-devel.x86_64\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7ee7\u7eed\u6267\u884c\u5b89\u88c5 5 \u4e2a\u5269\u4e0b\u7684\u5305\u547d\u4ee4\u65f6\uff0c\u4f1a\u518d\u6b21\u62a5\u7f3a\u5931",(0,l.kt)("inlineCode",{parentName:"p"},"libaio\u5305"),"\u9519\u8bef")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5")," libaio \u5305 (\u6b64\u6b65\u9aa4\u5728\u5b89\u88c5 10.4.8+\u9700\u8981)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ wget http://mirror.centos/6/os/x86_64/Packages/libaio-0.3.107-10.e16.x86_64.rpm\n$ rpm -ivh libaio-0.3.107-10.e16.x86_64.rpm\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e\u6267\u884c\u5b89\u88c5 5 \u4e2a\u5269\u4e0b\u7684\u5305\u547d\u4ee4\uff0c\u7b49\u5f85\u4e0b\u8f7d\u597d\u5c31\u5b8c\u6210\u4e86")),(0,l.kt)("h3",{id:"\u8fd0\u884c\u5e76\u914d\u7f6e-mariadb"},"\u8fd0\u884c\u5e76\u914d\u7f6e MariaDB"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8 MariaDB\uff08\u670d\u52a1\u540d\u662f\u4e0e MySQL \u4e00\u6837\u7684\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ service mysql start\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u5168\u914d\u7f6e(\u8bbe\u7f6e\u5bc6\u7801)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ mysql_secure_installation\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u65f6\u662f\u6ca1\u6709\u5bc6\u7801\u7684\uff0c\u76f4\u63a5\u56de\u8f66\n",(0,l.kt)("inlineCode",{parentName:"li"},"Enter current password for root (enter for none)")),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u6743\u9650\u5207\u6362\n",(0,l.kt)("inlineCode",{parentName:"li"},"Switch to unix_socket anthentication [Y/n] n")),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u66f4\u6539\u5bc6\u7801\n",(0,l.kt)("inlineCode",{parentName:"li"},"Change the root password? [Y/n] Y")),(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u5bc6\u7801\n",(0,l.kt)("inlineCode",{parentName:"li"},"New password: yourPassword")),(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u5bc6\u7801\n",(0,l.kt)("inlineCode",{parentName:"li"},"Re-enter new password: yourPassword")),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u79fb\u9664\u533f\u540d\u7528\u6237\uff08\u5b89\u5168\u8d77\u89c1\u53ef\u4ee5\u5220\u9664\uff09\n",(0,l.kt)("inlineCode",{parentName:"li"},"Remove anonymous users? [Y/n] Y")),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u5141\u8bb8\u8fdc\u7a0b\u767b\u5f55(\u4e5f\u53ef\u4ee5\u8bbe\u7f6e n\uff0c\u5982\u679c\u540e\u9762\u9700\u8981\u8fdc\u7a0b\u8fde\u63a5\u65f6\u4e5f\u53ef\u4ee5\u4fee\u6539)\n",(0,l.kt)("inlineCode",{parentName:"li"},"Disallow root login remotely? [Y/n] Y")),(0,l.kt)("li",{parentName:"ol"},"\u662f\u5426\u5220\u9664 test \u6570\u636e\u5e93\uff08\u7559\u7740\u4e5f\u597d\uff09\n",(0,l.kt)("inlineCode",{parentName:"li"},"Remove test database and access to it? [Y/n] n")),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u52a0\u8f7d tables \u7684\u5185\u5bb9\n",(0,l.kt)("inlineCode",{parentName:"li"},"Reload privilege tables now? [Y/n] Y"))),(0,l.kt)("h3",{id:"\u8fdc\u7a0b-ip-\u767b\u5f55"},"\u8fdc\u7a0b ip \u767b\u5f55"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u8bbe\u7f6e\u5141\u8bb8\u5c31\u4e0d\u9700\u8981\u4e0b\u9762\u64cd\u4f5c\u4e86\u3002"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u5728\u914d\u7f6e MariaDB",(0,l.kt)("inlineCode",{parentName:"strong"},"\u6b65\u9aa49"),"\u65f6\uff0c\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"strong"},"\u4e0d\u5141\u8bb8\u8fdc\u7a0b\u767b\u5f55"),"\u65f6\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u8fdb\u884c\u4fee\u6539\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165 MariaDB \u63a7\u5236\u53f0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ mysql -u root -p\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u5c06 localhost \u6539\u4e3a%,\u8ba9\u5916\u7f51\u80fd\u8bbf\u95ee")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'yourPassword' WITH GRANT OPTION;\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5237\u65b0\u6743\u9650")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ FLUSH  PRIVILEGES;\n")),(0,l.kt)("h3",{id:"\u5728\u7ebf\u5b89\u88c5"},"\u5728\u7ebf\u5b89\u88c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9664\u4e86\u79bb\u7ebf\u4f7f\u7528\u4e0b\u8f7d\u7684\u5b89\u88c5\u5305\u8fdb\u884c\u5b89\u88c5\u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 yum \u7684\u65b9\u5f0f\u8fdb\u884c\u5728\u7ebf\u5b89\u88c5")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"15-03-online-install.png",src:t(6166).Z})),(0,l.kt)("h3",{id:"win-\u5b89\u88c5"},"win \u5b89\u88c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"win \u5b89\u88c5\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u4e0b MSI \u5305\u4e00\u952e\u5b89\u88c5\u5373\u53ef")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"15-04-win-install.png",src:t(7824).Z})),(0,l.kt)("h2",{id:"\u6587\u732e\u53c2\u8003"},"\u6587\u732e\u53c2\u8003"),(0,l.kt)("p",null,"MariaDB \u5b98\u7f51 - ",(0,l.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mariadb-installation-version-10121-via-rpms-on-centos-7/"},"MariaDB Installation")))}d.isMDXComponent=!0},5701:function(e,n){n.Z="data:image/png;base64,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"},4461:function(e,n,t){n.Z=t.p+"assets/images/15-02-find-rpms-9f077b543f0056a6696c30d9c55bf148.png"},6166:function(e,n,t){n.Z=t.p+"assets/images/15-03-online-install-30ee5eae7a1d86fdc8f6fafbb552a4e5.png"},7824:function(e,n,t){n.Z=t.p+"assets/images/15-04-win-install-618110f8825641ff2f301a7affc1df17.png"}}]);