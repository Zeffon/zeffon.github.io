"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8767],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2945:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return m},default:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={slug:"vscode-build-latex",title:"LaTex \u5728 vscode \u4e0a\u7f16\u8bd1\u8fd0\u884c",authors:"zeffon",tags:["notes"],date:new Date("2020-10-01T00:00:00.000Z")},c=void 0,p={permalink:"/blog/vscode-build-latex",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2020/2020-10-01-vscode-build-latex.md",source:"@site/blog/2020/2020-10-01-vscode-build-latex.md",title:"LaTex \u5728 vscode \u4e0a\u7f16\u8bd1\u8fd0\u884c",description:"Latex \u6ce8\u91cd\u6587\u5b57\u7f16\u5199\uff0c\u4e0d\u9700\u8981\u53bb\u5173\u6ce8\u6392\u7248\u3002\u8fd9\u4e2a\u5bf9\u4e8e\u5199\u8bba\u6587\u4e4b\u7c7b\u7684\u7279\u6b8a\u6587\u7ae0\u7b80\u76f4\u662f\u4e2a\u795e\u5947\u3002\u8bb0\u5f55\u4e00\u4e0b LaTex \u5728 vscode \u4e0a\u8fdb\u884c\u7f16\u8bd1\u8fd0\u884c\u7684\u6559\u7a0b\u3002",date:"2020-10-01T00:00:00.000Z",formattedDate:"October 1, 2020",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:1.645,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Git Commit \u89c4\u8303\u63d0\u4ea4",permalink:"/blog/git-commit"},nextItem:{title:"Java\u4e2djson\u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u7684\u8f6c\u6362jackson",permalink:"/blog/java-string-object-transform-jackson"}},s={authorsImageUrls:[void 0]},m=[{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"mac \u7cfb\u7edf",id:"mac-\u7cfb\u7edf",children:[]},{value:"win \u7cfb\u7edf",id:"win-\u7cfb\u7edf",children:[]},{value:"\u62a5\u9519\u5904\u7406",id:"\u62a5\u9519\u5904\u7406",children:[]}]}],u={toc:m};function d(e){var n=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Latex \u6ce8\u91cd\u6587\u5b57\u7f16\u5199\uff0c\u4e0d\u9700\u8981\u53bb\u5173\u6ce8\u6392\u7248\u3002\u8fd9\u4e2a\u5bf9\u4e8e\u5199\u8bba\u6587\u4e4b\u7c7b\u7684\u7279\u6b8a\u6587\u7ae0\u7b80\u76f4\u662f\u4e2a\u795e\u5947\u3002\u8bb0\u5f55\u4e00\u4e0b LaTex \u5728 vscode \u4e0a\u8fdb\u884c\u7f16\u8bd1\u8fd0\u884c\u7684\u6559\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("h3",{id:"mac-\u7cfb\u7edf"},"mac \u7cfb\u7edf"),(0,r.kt)("h4",{id:"\u5b89\u88c5\u6d41\u7a0b"},"\u5b89\u88c5\u6d41\u7a0b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d mactex \u5b89\u88c5\u5305\n\u5728",(0,r.kt)("a",{parentName:"li",href:"https://tug.org/mactex/mactex-download.html"},"mactex \u5b98\u7f51\u4e0b\u8f7d"),"(\u63a5\u8fd1 4G,\u4e0b\u8f7d\u8981\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4)"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 LaTex \u6269\u5c55\n\u5728 vscode \u6269\u5c55\u5e94\u7528\u5546\u57ce\u4e2d\uff0c\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"li"},"LaTeX Workshop"),"\u6269\u5c55"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 XeFLaTeX \u914d\u7f6e\nLaTeX WorkShop \u63d2\u4ef6\u9ed8\u8ba4\u53ea\u63d0\u4f9b",(0,r.kt)("strong",{parentName:"li"},"PDFLaTeX"),"\uff0c\u5982\u679c\u662f\u4e2d\u6587\u7f16\u8bd1\u5219\u9700\u8981",(0,r.kt)("strong",{parentName:"li"},"XeFLaTeX"),"\uff0c\u6240\u4ee5\u8fd8\u9700\u53e6\u884c\u914d\u7f6e\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01-01-add-XeFLaTex-config.jpg",src:t(9856).Z})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4ee3\u7801\n\u4f9d\u6b21\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Code > Preferences > Settings"),"\uff0c\u70b9\u51fb\u4e0b\u56fe\u6240\u793a\u82b1\u62ec\u53f7\u56fe\u6807\u8fdb\u5165 Settings \u7684 JSON \u6587\u4ef6\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"\u7528\u6237\u914d\u7f6e"),"\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "latex-workshop.latex.recipes": [\n        {\n          "name": "xelatex",\n          "tools": [\n            "xelatex"\n          ]\n        },\n        {\n          "name": "xe*2",\n          "tools": [\n            "xelatex",\n            "xelatex"\n          ]\n        },\n        {\n          "name": "xelatex -> bibtex -> xelatex*2",\n          "tools": [\n            "xelatex",\n            "bibtex",\n            "xelatex",\n            "xelatex"\n          ]\n        }\n      ],\n      "latex-workshop.latex.tools": [\n        {\n          "name": "latexmk",\n          "command": "latexmk",\n          "args": [\n            "-synctex=1",\n            "-interaction=nonstopmode",\n            "-file-line-error",\n            "-pdf",\n            "%DOC%"\n          ]\n        },\n        {\n          "name": "xelatex",\n          "command": "xelatex",\n          "args": [\n            "-synctex=1",\n            "-interaction=nonstopmode",\n            "-file-line-error",\n            "%DOC%"\n          ]\n        },\n        {\n          "name": "bibtex",\n          "command": "bibtex",\n          "args": [\n            "%DOCFILE%"\n          ]\n        }\n      ],\n      "latex-workshop.view.pdf.viewer": "tab"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u5728.tex \u6587\u4ef6\u7684\u53f3\u4e0a\u89d2\u7684\u542f\u52a8\u6309\u94ae->\u70b9\u51fb\u8fd0\u884c")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"01-02-build-LaTex.jpg",src:t(6202).Z})),(0,r.kt)("h3",{id:"win-\u7cfb\u7edf"},"win \u7cfb\u7edf"),(0,r.kt)("h4",{id:"\u4e0b\u8f7d\u5b89\u88c5-texlive"},"\u4e0b\u8f7d\u5b89\u88c5 texlive"),(0,r.kt)("p",null,"\u9009\u62e9\u6e05\u534e\u5927\u5b66\u955c\u50cf\u4e0b\u8f7d\u4f1a\u66f4\u5feb-",(0,r.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/"},"\u5730\u5740")),(0,r.kt)("p",null,"\u5b89\u88c5 - \u4ee5\u7ba1\u7406\u5458\u65b9\u5f0f\u8fd0\u884c\u5b89\u88c5\u811a\u672c",(0,r.kt)("inlineCode",{parentName:"p"},"install-tl-windows.bat"),"\n\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u8bb0\u5f97\u7ed9 \u5168\u90e8\u7528\u6237\u8fdb\u884c\u5b89\u88c5"),(0,r.kt)("h4",{id:"vscode-\u914d\u7f6e"},"vscode \u914d\u7f6e"),(0,r.kt)("p",null,"win \u7684",(0,r.kt)("strong",{parentName:"p"},"xelatex \u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "latex-workshop.latex.tools": [\n      {\n          "name": "xelatex",\n          "command": "xelatex",\n          "args": [\n              "-synctex=1",\n              "-interaction=nonstopmode",\n              "-file-line-error",\n              "-pdf",\n              "%DOCFILE%"\n          ]\n      },\n      {\n          "name": "pdflatex",\n          "command": "pdflatex",\n          "args": [\n              "-synctex=1",\n              "-interaction=nonstopmode",\n              "-file-line-error",\n              "%DOCFILE%"\n          ]\n      },\n      {\n          "name": "bibtex",\n          "command": "bibtex",\n          "args": [\n              "%DOCFILE%"\n          ]\n      }\n    ],\n    "latex-workshop.latex.recipes": [\n      {\n          "name": "xelatex",\n          "tools": [\n              "xelatex"\n          ]\n      },\n      {\n          "name": "xe->bib->xe->xe",\n          "tools": [\n              "xelatex",\n              "bibtex",\n              "xelatex",\n              "xelatex"\n          ]\n      },\n      {\n          "name": "pdflatex",\n          "tools":[\n              "pdflatex"\n          ]\n      }\n    ],\n    "latex-workshop.view.pdf.viewer": "tab",\n')),(0,r.kt)("p",null,"\u4e0e mac \u7cfb\u7edf\u4e00\u6837\u5c31\u4e0d\u7ec6\u8bf4\u4e86"),(0,r.kt)("h3",{id:"\u62a5\u9519\u5904\u7406"},"\u62a5\u9519\u5904\u7406"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\u4e2d\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5b57\u4f53\u5bfc\u4e0d\u8fdb\u6765\u800c\u62a5\u9519"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fee\u6539\u5b57\u4f53\u7684\u540d\u5b57"),"\u6216\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u589e\u52a0\u5b57\u4f53"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u5728 Mac \u7cfb\u7edf\u4e2d\u56e0\u4e3a\u5b57\u4f53\u95ee\u9898\u800c\u4ea7\u751f\u62a5\u9519\u95ee\u9898\uff1a\nCould not map source abbreviation O for OT.\nNeed to update /usr/local/texlive/2020/texmf-dist/fonts/map/fontname/special.map\nPackage fontspec Error: The font "FangSong" cannot be found.\uff08',(0,r.kt)("strong",{parentName:"p"},"\u627e\u4e0d\u5230\u4eff\u5b8b\u5b57\u4f53\u76f8\u5173\u7684\u5305"),"\uff09")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u62a5\u9519\u539f\u56e0\uff1a"),"\n\u5b8b\u5b57\u4f53\u5728 mactex \u4e2d\u6ca1\u6709\u5b58\u5728\u7684\u5b57\u4f53\u5305\uff0c\u6240\u4ee5\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u6539\u6837\u5f0f\u4e2d\u5b57\u4f53\u540d\n\u66f4\u6539\u6210\u8ba1\u7b97\u673a\u6709\u4eff\u5b8b\u5b57\u4f53\u7684\u540d\u5b57"),(0,r.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u673a\u6dfb\u52a0\u5b57\u4f53\n~/Library/Fonts \u6dfb\u52a0\u5165",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolbydu/font"},"font"),"(\u4e0b\u8f7d\u540e\u8bb0\u5f97\u91cd\u547d\u540d\u4e3a font)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4f7f\u7528\u4e2d\u6587\u5b57\u4f53\u4f1a\u6709\u6587\u4ef6\u7f16\u7801\u7684\u95ee\u9898\u4ee5\u53ca\u4f1a\u9020\u6210\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\uff0c\u4e0d\u540c\u7cfb\u7edf\u8bed\u8a00\u7684\u4e0d\u517c\u5bb9\n\u6240\u4ee5\u5efa\u8bae\u4f7f\u7528\u4e2d\u6587\u5b57\u4f53\u7684\u82f1\u6587\u8868\u793a\u3002 \u5982\u4e0b\uff1a\n\nMac OS\u7684\u4e00\u4e9b\uff1a\n\u534e\u6587\u7ec6\u9ed1\uff1aSTHeiti Light [STXihei]\n\u534e\u6587\u9ed1\u4f53\uff1aSTHeiti\n\u534e\u6587\u6977\u4f53\uff1aSTKaiti\n\u534e\u6587\u5b8b\u4f53\uff1aSTSong\n\u534e\u6587\u4eff\u5b8b\uff1aSTFangsong\n\u5137\u9ed1 Pro\uff1aLiHei Pro Medium\n\u5137\u5b8b Pro\uff1aLiSong Pro Light\n\u6a19\u6977\u9ad4\uff1aBiauKai\n\u860b\u679c\u5137\u4e2d\u9ed1\uff1aApple LiGothic Medium\n\u860b\u679c\u5137\u7d30\u5b8b\uff1aApple LiSung Light\n\nWindows\u7684\u4e00\u4e9b\uff1a\n\u65b0\u7d30\u660e\u9ad4\uff1aPMingLiU\n\u7d30\u660e\u9ad4\uff1aMingLiU\n\u6a19\u6977\u9ad4\uff1aDFKai-SB\n\u9ed1\u4f53\uff1aSimHei\n\u5b8b\u4f53\uff1aSimSun\n\u65b0\u5b8b\u4f53\uff1aNSimSun\n\u4eff\u5b8b\uff1aFangSong\n\u6977\u4f53\uff1aKaiTi\n\u4eff\u5b8b_GB2312\uff1aFangSong_GB2312\n\u6977\u4f53_GB2312\uff1aKaiTi_GB2312\n\u5fae\u8edf\u6b63\u9ed1\u9ad4\uff1aMicrosoft JhengHei\n\u5fae\u8f6f\u96c5\u9ed1\u4f53\uff1aMicrosoft YaHei\n\n\u88c5Office\u4f1a\u751f\u51fa\u6765\u7684\u4e00\u4e9b\uff1a\n\u96b6\u4e66\uff1aLiSu\n\u5e7c\u5706\uff1aYouYuan\n\u534e\u6587\u7ec6\u9ed1\uff1aSTXihei\n\u534e\u6587\u6977\u4f53\uff1aSTKaiti\n\u534e\u6587\u5b8b\u4f53\uff1aSTSong\n\u534e\u6587\u4e2d\u5b8b\uff1aSTZhongsong\n\u534e\u6587\u4eff\u5b8b\uff1aSTFangsong\n\u65b9\u6b63\u8212\u4f53\uff1aFZShuTi\n\u65b9\u6b63\u59da\u4f53\uff1aFZYaoti\n\u534e\u6587\u5f69\u4e91\uff1aSTCaiyun\n\u534e\u6587\u7425\u73c0\uff1aSTHupo\n\u534e\u6587\u96b6\u4e66\uff1aSTLiti\n\u534e\u6587\u884c\u6977\uff1aSTXingkai\n\u534e\u6587\u65b0\u9b4f\uff1aSTXinwei\n")))}d.isMDXComponent=!0},9856:function(e,n,t){n.Z=t.p+"assets/images/01-01-add-XeFLaTex-config-a0e6fcab3c229cf05ab0a89d0a934e6f.jpg"},6202:function(e,n,t){n.Z=t.p+"assets/images/01-02-build-LaTex-e462df5d3b510a836e732adb4258a0da.jpg"}}]);