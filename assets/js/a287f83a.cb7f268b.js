"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,k=m["".concat(i,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905));const o={slug:"github-action",title:"GitHub Actions\u7684\u5e94\u7528",authors:"zeffon",tags:["notes"],date:"2021-10-21 10:08"},l=void 0,s={permalink:"/blog/github-action",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-10-21-github-action.md",source:"@site/blog/2021/2021-10-21-github-action.md",title:"GitHub Actions\u7684\u5e94\u7528",description:"\u8bb0\u5f97 2019 \u5e74\u4f7f\u7528 Jekyll \u548c hoxe \u5199\u535a\u5ba2\u65f6\uff0c\u90a3\u65f6\u5019\u8fd8\u4e0d\u77e5\u9053\u6709 github actions\uff0c\u53ea\u80fd\u624b\u52a8\u7f16\u8bd1\u540e\u4ee3\u7801\u5355\u72ec\u5c06\u5176\u90e8\u7f72\u5728 github pages\u3002\u540e\u6765\u77e5\u9053\u6301\u7eed\u96c6\u6210\u3001github actions \u540e\uff0cdocusaurus \u535a\u5ba2\u4f7f\u7528 actions \u7279\u522b\u65b9\u4fbf\uff0c\u4e00\u63d0\u4ea4\u4ee3\u7801\u540e\u4fbf\u4f1a\u81ea\u5df1\u7f16\u8bd1\u4ee3\u7801\u5230\u81ea\u6307\u5b9a pages \u5206\u652f\u4e2d\u3002",date:"2021-10-21T10:08:00.000Z",formattedDate:"October 21, 2021",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:6.4,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"github-action",title:"GitHub Actions\u7684\u5e94\u7528",authors:"zeffon",tags:["notes"],date:"2021-10-21 10:08"},prevItem:{title:"\u524d\u7aef\u8def\u7531 hash \u548c history \u6a21\u5f0f",permalink:"/blog/web-route"},nextItem:{title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u5dee\u5f02",permalink:"/blog/browser-storage"}},i={authorsImageUrls:[void 0]},u=[{value:"\u57fa\u672c\u77e5\u8bc6",id:"\u57fa\u672c\u77e5\u8bc6",level:2},{value:"workflow \u6587\u4ef6",id:"workflow-\u6587\u4ef6",level:2},{value:"name",id:"name",level:4},{value:"on",id:"on",level:4},{value:"jobs",id:"jobs",level:4},{value:"docusaurus \u535a\u5ba2\u53d1\u5e03\u5230 Github Pages",id:"docusaurus-\u535a\u5ba2\u53d1\u5e03\u5230-github-pages",level:2},{value:"\u642d\u5efa\u4e00\u4e2a docusaurus \u535a\u5ba2",id:"\u642d\u5efa\u4e00\u4e2a-docusaurus-\u535a\u5ba2",level:3},{value:"\u4ed3\u5e93\u51c6\u5907",id:"\u4ed3\u5e93\u51c6\u5907",level:3},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3},{value:"\u8bbe\u7f6e ACCESS_TOKEN",id:"\u8bbe\u7f6e-access_token",level:3},{value:"\u914d\u7f6e GitHub Pages",id:"\u914d\u7f6e-github-pages",level:3},{value:"\u63d0\u4ea4\u6d4b\u8bd5",id:"\u63d0\u4ea4\u6d4b\u8bd5",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8bb0\u5f97 2019 \u5e74\u4f7f\u7528 Jekyll \u548c hoxe \u5199\u535a\u5ba2\u65f6\uff0c\u90a3\u65f6\u5019\u8fd8\u4e0d\u77e5\u9053\u6709 github actions\uff0c\u53ea\u80fd\u624b\u52a8\u7f16\u8bd1\u540e\u4ee3\u7801\u5355\u72ec\u5c06\u5176\u90e8\u7f72\u5728 github pages\u3002\u540e\u6765\u77e5\u9053\u6301\u7eed\u96c6\u6210\u3001github actions \u540e\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://zeffon.github.io/"},"docusaurus")," \u535a\u5ba2\u4f7f\u7528 actions \u7279\u522b\u65b9\u4fbf\uff0c\u4e00\u63d0\u4ea4\u4ee3\u7801\u540e\u4fbf\u4f1a\u81ea\u5df1\u7f16\u8bd1\u4ee3\u7801\u5230\u81ea\u6307\u5b9a pages \u5206\u652f\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u77e5\u8bc6"},"\u57fa\u672c\u77e5\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," \u662f ",(0,r.kt)("strong",{parentName:"p"},"GitHub")," \u7684",(0,r.kt)("a",{parentName:"p",href:"https://www.yuque.com/zeffon/blog/ci-and-cd#VczYS"},"\u6301\u7eed\u96c6\u6210"),"\u670d\u52a1\uff0c\u5728 2018 \u5e74 10 \u6708\u65f6\u63a8\u51fa\u7684\u670d\u52a1\u3002\u6301\u7eed\u96c6\u6210\u7531\u5f88\u591a\u64cd\u4f5c\u7ec4\u6210\uff0c\u6bd4\u5982\u6293\u53d6\u4ee3\u7801\u3001\u8fd0\u884c\u6d4b\u8bd5\u3001\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u53d1\u5e03\u5230\u7b2c\u4e09\u65b9\u670d\u52a1\u7b49\u7b49\u3002GitHub \u628a\u8fd9\u4e9b\u64cd\u4f5c\u5c31\u79f0\u4e3a actions\u3002"),(0,r.kt)("p",null,"GitHub Actions \u672f\u8bed\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"workflow"),"\uff1a\u6301\u7eed\u96c6\u6210\u4e00\u6b21\u8fd0\u884c\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"workflow"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"job"),"\uff1a\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"workflow")," \u7531\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"jobs")," \u6784\u6210\uff0c\u542b\u4e49\u662f\u4e00\u6b21\u6301\u7eed\u96c6\u6210\u7684\u8fd0\u884c\uff0c\u53ef\u4ee5\u5b8c\u6210\u591a\u4e2a\u4efb\u52a1\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"step"),"\uff1a\u6bcf\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"job")," \u7531\u591a\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"step")," \u6784\u6210\uff0c\u4e00\u6b65\u6b65\u5b8c\u6210\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"action"),"\uff1a\u6bcf\u4e2a ",(0,r.kt)("strong",{parentName:"li"},"step")," \u53ef\u4ee5\u4f9d\u6b21\u6267\u884c\u4e00\u4e2a\u6216\u591a\u4e2a\u547d\u4ee4\uff08",(0,r.kt)("strong",{parentName:"li"},"action"),"\uff09\u3002")),(0,r.kt)("h2",{id:"workflow-\u6587\u4ef6"},"workflow \u6587\u4ef6"),(0,r.kt)("p",null,"GitHub Actions \u7684\u914d\u7f6e\u6587\u4ef6\u53eb\u505a ",(0,r.kt)("strong",{parentName:"p"},"workflow")," \u6587\u4ef6\uff0c\u5b58\u653e\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u76ee\u5f55\u3002"),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u6587\u4ef6\u662f\u5f88\u5e38\u89c1\u7684 \u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"<YAML>"),"\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," \u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u79f0\u662f\u53ef\u4ee5\u4efb\u610f\u547d\u540d\u7684\uff0c\u800c\u4e14\u4e5f\u53ef\u4ee5\u6709\u591a\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"workflow")," \u6587\u4ef6\u3002\u53ea\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u76ee\u5f55\u5b58\u5728 ",(0,r.kt)("strong",{parentName:"p"},"workflow")," \u6587\u4ef6\uff0c\u5c31\u4f1a\u81ea\u52a8\u8fd0\u884c\u8fd9\u4e9b\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy Github pages\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@master\n        with:\n          persist-credentials: false\n      - name: Install and Build\n        run: |\n          npm install\n          npm run-script build\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with:\n          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}\n          BRANCH: gh-pages\n          FOLDER: build\n          BUILD_SCRIPT: npm install && npm run build\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7684\u914d\u7f6e\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},"workflow")," \u6587\u4ef6\uff0c\u7531\u4ee5\u4e0b\u4e3b\u8981\u53c2\u6570\uff08\u66f4\u591a\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://link.segmentfault.com/?url=https%3A%2F%2Fdocs.github.com%2Fen%2Ffree-pro-team%40latest%2Factions%2Freference%2Fevents-that-trigger-workflows"},"\u5b98\u65b9\u6587\u6863")," \uff09"),(0,r.kt)("h4",{id:"name"},"name"),(0,r.kt)("p",null,"name \u662f workflow \u7684\u540d\u79f0\u3002\u5982\u679c\u7701\u7565\u8be5\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d workflow \u7684\u6587\u4ef6\u540d\u3002"),(0,r.kt)("h4",{id:"on"},"on"),(0,r.kt)("p",null,"on \u662f \u89e6\u53d1 workflow \u7684\u6761\u4ef6\uff0c\u901a\u5e38\u662f\u67d0\u4e9b\u4e8b\u4ef6\uff0c\u6bd4\u5982\uff1apush\u3001pull_request \u7b49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"on: push\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u5230\u4e8b\u4ef6\u5177\u4f53\u7684\u5206\u652f\u6216\u8005\u6807\u7b7e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"on:\n  push:\n    branches:\n      - master\n")),(0,r.kt)("h4",{id:"jobs"},"jobs"),(0,r.kt)("p",null,"jobs \u662f workflow \u6587\u4ef6\u7684\u4e3b\u4f53\u5185\u5bb9\uff0c\u8868\u793a\u8981\u6267\u884c\u7684\u4e00\u9879\u6216\u591a\u9879\u4efb\u52a1\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"jobs.<job_id>.name: job_id \u662f\u4efb\u52a1\u7684 id\uff0cname \u662f\u4efb\u52a1\u7684\u63cf\u8ff0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job1:\n    name: This is job1\n  job2:\n    name: This is job2\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"jobs.<job_id>.runs-on: runs-on \u8fd0\u884c\u6240\u9700\u8981\u7684\u865a\u62df\u673a\u73af\u5883\uff0c\u53ef\u4ee5\u6307\u5b9a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5177\u4f53\u7248\u672c\u6216\u8005\u6700\u65b0\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job1:\n        runs-on: ubuntu-latest\n      # runs-on: ubuntu-18.04\n      # runs-on: windows-latest\n      # runs-on: windows-2020\n      # runs-on: macOS-latest\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"jobs.<job_id>.steps: steps \u6307\u5b9a\u6bcf\u4e2a\u4efb\u52a1\u7684\u8fd0\u884c\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u6b65\u9aa4\u3002\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u4e09\u4e2a\u5b57\u6bb5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs.<job_id>.steps.name\uff1a\u6b65\u9aa4\u540d\u79f0\u3002\njobs.<job_id>.steps.run\uff1a\u8be5\u6b65\u9aa4\u8fd0\u884c\u7684\u547d\u4ee4\u6216\u8005 action\u3002\njobs.<job_id>.steps.env\uff1a\u8be5\u6b65\u9aa4\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf\u3002\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"jobs.<job_id>.needs: needs \u591a\u4e2a\u4efb\u52a1\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 job_id \u6765\u6307\u5b9a\u5f53\u524d\u4efb\u52a1\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f7f\u5f97\u4efb\u52a1\u7684\u8fd0\u884c\u987a\u5e8f\u6309\u7167\u4f9d\u8d56\u5173\u7cfb\u6765\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job1:\n        name: I execute first\n  job2:\n    name: I need to rely on job1, execute second\n    needs: job1\n  job3:\n    name: I need to rely on job1 and job2, execute finally\n    needs: [job1, job2]\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u6267\u884c\u987a\u5e8f job1 -> job2 -> job3"),(0,r.kt)("h2",{id:"docusaurus-\u535a\u5ba2\u53d1\u5e03\u5230-github-pages"},"docusaurus \u535a\u5ba2\u53d1\u5e03\u5230 Github Pages"),(0,r.kt)("h3",{id:"\u642d\u5efa\u4e00\u4e2a-docusaurus-\u535a\u5ba2"},"\u642d\u5efa\u4e00\u4e2a docusaurus \u535a\u5ba2"),(0,r.kt)("p",null,"\u76f4\u63a5\u6839\u636e",(0,r.kt)("a",{parentName:"p",href:"https://www.docusaurus.cn/docs/installation"},"\u5b98\u7f51\u6559\u7a0b"),"\u7b80\u5355\u642d\u5efa\u4e00\u4e2a\u5373\u53ef\uff0c\u7b80\u5355\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn add @docusaurus/init@latest init my-website classic\n$ cd my-website\n$ yarn install\n$ yarn run start\n$ yarn run build\n")),(0,r.kt)("h3",{id:"\u4ed3\u5e93\u51c6\u5907"},"\u4ed3\u5e93\u51c6\u5907"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"github")," \u65b0\u5efa\u4e00\u4e2a\u4ed3\u5e93\uff08\u4f5c\u4e3a\u535a\u5ba2\u7684\u8bdd\uff0c\u4e00\u822c\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<username>.github.io"),"\uff09\u5b58\u653e\u535a\u5ba2\u4ee3\u7801\uff0c\u5c06\u4ee3\u7801\u63a8\u9001\u5230 github \u4e0a\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u672c\u5730\u4ed3\u5e93\u51c6\u5907\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ git init\n$ git add .\n$ git commit -m "init project"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8fde\u63a5\u8fdc\u7a0b\u4ed3\u5e93\u5e76\u63a8\u9001\u81f3 master")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git remote add origin git@github.com:Zeffon/vue-activity-chart.git\n$ git push origin master\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u672c\u5730\u65b0\u5efa ",(0,r.kt)("strong",{parentName:"li"},"gh-pages")," \u5206\u652f\uff0c\u5e76\u540c\u6b65\u81f3\u8fdc\u7a0b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gh-pages")," \u5206\u652f\u662f\u7528\u6765\u5b58\u653e ",(0,r.kt)("strong",{parentName:"p"},"master")," \u5206\u652f\u7f16\u8bd1\u540e\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git branch gh-pages\n$ git checkout gh-pages\n$ git push origin gh-pages\n$ git checkout master # \u518d\u5207\u56demaster\u5206\u652f\uff0c\u4e4b\u540egh-pages\u5206\u652f\u57fa\u672c\u4e0d\u4f1a\u7528\u5230\n")),(0,r.kt)("h3",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u4e2d ",(0,r.kt)("strong",{parentName:"li"},"docusaurus.config.js")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u4e0b\u9762\u56db\u4e2a\u53c2\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"url: 'https://<username>.github.io',    // \u90e8\u7f72\u540e\u7684url\nbaseUrl: '/',   // \u6839\u8def\u5f84\norganizationName: 'username', // \u4f60\u7684\u7528\u6237\u540d\nprojectName: '<username>.github.io', // \u4ed3\u5e93\u540d\u79f0\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5efa\u7acb ",(0,r.kt)("strong",{parentName:"li"},".github/workflows/documentation.yml")," \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy Github pages\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@master\n        with:\n          persist-credentials: false\n      - name: Install and Build\n        run: |\n          npm install\n          npm run-script build\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with:\n          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # \u9700\u8981\u5728\u8be5\u9879\u76ee\u4ed3\u5e93\u4e2d\u8bbe\u7f6e ACCESS_TOKEN\n          BRANCH: gh-pages\n          FOLDER: build\n          BUILD_SCRIPT: npm install && npm run build\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CNAME"),"\u6587\u4ef6")),(0,r.kt)("p",null,"\u5982\u679c\u90e8\u7f72\u4e3a\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"p"},"CNAME")," \u6587\u4ef6\u3002\u5982\u679c\u57df\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"<username>.github.io")," \u53ef\u4ee5\u4e0d\u6dfb\u52a0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"<username>.github.io\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u540e\u8bb0\u5f97\u63d0\u4ea4\u4ee3\u7801")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e-access_token"},"\u8bbe\u7f6e ACCESS_TOKEN"),(0,r.kt)("p",null,"\u8bbe\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"ACCESS_TOKEN")," \u53ef\u4ee5\u6839\u636e",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"\u5b98\u7f51\u6559\u7a0b"),"\u914d\u7f6e\u3002\n\u5927\u81f4\u6559\u7a0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bbf\u95ee Token")),(0,r.kt)("p",null,"\u7528\u6237 -> Settings -> Developer settings -> Personal access tokens -> Generate new token"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u7ed9\u9879\u76ee\u914d\u7f6e ACCESS_TOKEN")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<username.github.io>"),"\u4ed3\u5e93 -> Settings -> Secrets -> New repository secret -> \u53d6\u540d\u4e3a ACCESS_TOKEN"),(0,r.kt)("h3",{id:"\u914d\u7f6e-github-pages"},"\u914d\u7f6e GitHub Pages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<username.github.io>"),"\u4ed3\u5e93 -> Settings -> Pages -> \u5c06 Source \u4e2d\u5207\u6362\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"gh-pages")," \u5206\u652f\n",(0,r.kt)("img",{alt:"image.png",src:n(63216).Z,width:"788",height:"409"})),(0,r.kt)("h3",{id:"\u63d0\u4ea4\u6d4b\u8bd5"},"\u63d0\u4ea4\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"master")," \u5206\u652f\u63a8\u9001\u4ee3\u7801\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 github \u4ed3\u5e93\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"action")," \u67e5\u770b ",(0,r.kt)("strong",{parentName:"p"},"workflow")," \u6587\u4ef6 ",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u6210\u72b6\u6001"),"\u3002\n",(0,r.kt)("img",{alt:"image.png",src:n(5147).Z,width:"1221",height:"403"})))}c.isMDXComponent=!0},63216:function(e,t,n){t.Z=n.p+"assets/images/10-21-01-052e81072c5a93bf74578e05c1670346.png"},5147:function(e,t,n){t.Z=n.p+"assets/images/10-21-02-8ceaf4bda22a2b3e8c1d9539080aee4d.png"}}]);