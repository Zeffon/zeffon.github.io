"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8814],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(g,o(o({ref:e},c),{},{components:n})):r.createElement(g,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2067:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),o=["components"],u={slug:"vue-event-params",title:"Vue \u4e8b\u4ef6\u81ea\u5b9a\u53c2\u6570\u4f20\u9012",authors:"zeffon",tags:["vue"],date:new Date("2021-08-13T00:00:00.000Z")},i=void 0,l={permalink:"/blog/vue-event-params",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021/2021-08-13-vue-event-params.md",source:"@site/blog/2021/2021-08-13-vue-event-params.md",title:"Vue \u4e8b\u4ef6\u81ea\u5b9a\u53c2\u6570\u4f20\u9012",description:'\u5728\u5f00\u53d1 Vue \u9879\u76ee\u7684\u65f6\u5019\uff0c\u6709\u65f6\u5019\u6211\u4eec\u4f7f\u7528\u4e00\u4e9b\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\u65f6\uff0c\u6bd4\u5982 el-input\u7ec4\u4ef6\u4e2d\u7684 input\u3001focus\u3001change \u7b49\u4e8b\u4ef6\u3002\u6211\u4eec\u5728\u76d1\u542c\u540e\u662f\u8981\u8fdb\u884c\u4e66\u5199\u81ea\u5df1\u7684\u65b9\u6cd5\u4e8b\u4ef6\u7684\u3002\u7b80\u5355\u4e1a\u52a1\u4e0b\uff0c\u6211\u4eec\u76f4\u63a5 @input="inputText"\u7136\u540e\u518d methods \u4e2d\u7f16\u5199\u5bf9\u5e94\u7684\u65b9\u6cd5inputText(data)\u3002\u5176\u4e2ddata\u53c2\u6570\u662fel-input\u7ec4\u4ef6\u4f20\u9012\u51fa\u6765\u7684\uff0c\u6253\u5370\u51fa\u6765\u7684\u503c\u6b63\u662f\u6211\u4eec\u5728\u8f93\u5165\u6846\u8f93\u5165\u7684\u503c\u3002',date:"2021-08-13T00:00:00.000Z",formattedDate:"August 13, 2021",tags:[{label:"vue",permalink:"/blog/tags/vue"}],readingTime:1.23,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"CSS\u5b57\u4f53\u53c2\u8003\u7ebf",permalink:"/blog/css-baseline"},nextItem:{title:"HTML\u4e2d\u7684\u5b9e\u4f53\u7a7a\u683c",permalink:"/blog/html-space"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5e38\u89c1\u573a\u666f",id:"\u5e38\u89c1\u573a\u666f",children:[]},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",children:[{value:"\u4f20\u9012\u4e8b\u4ef6\u5bf9\u8c61",id:"\u4f20\u9012\u4e8b\u4ef6\u5bf9\u8c61",children:[]},{value:"\u56de\u8c03\u51fd\u6570",id:"\u56de\u8c03\u51fd\u6570",children:[]}]}],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728\u5f00\u53d1 Vue \u9879\u76ee\u7684\u65f6\u5019\uff0c\u6709\u65f6\u5019\u6211\u4eec\u4f7f\u7528\u4e00\u4e9b\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\u65f6\uff0c\u6bd4\u5982 ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u4e2d\u7684 input\u3001focus\u3001change \u7b49\u4e8b\u4ef6\u3002\u6211\u4eec\u5728\u76d1\u542c\u540e\u662f\u8981\u8fdb\u884c\u4e66\u5199\u81ea\u5df1\u7684\u65b9\u6cd5\u4e8b\u4ef6\u7684\u3002\u7b80\u5355\u4e1a\u52a1\u4e0b\uff0c\u6211\u4eec\u76f4\u63a5 ",(0,p.kt)("strong",{parentName:"p"},'@input="inputText"'),"\u7136\u540e\u518d methods \u4e2d\u7f16\u5199\u5bf9\u5e94\u7684\u65b9\u6cd5",(0,p.kt)("strong",{parentName:"p"},"inputText(data)"),"\u3002\u5176\u4e2d",(0,p.kt)("strong",{parentName:"p"},"data"),"\u53c2\u6570\u662f",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u4f20\u9012\u51fa\u6765\u7684\uff0c\u6253\u5370\u51fa\u6765\u7684\u503c\u6b63\u662f\u6211\u4eec\u5728\u8f93\u5165\u6846\u8f93\u5165\u7684\u503c\u3002"),(0,p.kt)("h2",{id:"\u5e38\u89c1\u573a\u666f"},"\u5e38\u89c1\u573a\u666f"),(0,p.kt)("p",null,"\u5728\u5f00\u53d1 Vue \u9879\u76ee\u7684\u65f6\u5019\uff0c\u6709\u65f6\u5019\u6211\u4eec\u4f7f\u7528\u4e00\u4e9b\u7ec4\u4ef6\u7684\u81ea\u5b9a\u4e49\u65b9\u6cd5\u65f6\uff0c\u6bd4\u5982 ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u4e2d\u7684 input\u3001focus\u3001change \u7b49\u4e8b\u4ef6\u3002\u6211\u4eec\u5728\u76d1\u542c\u540e\u662f\u8981\u8fdb\u884c\u4e66\u5199\u81ea\u5df1\u7684\u65b9\u6cd5\u4e8b\u4ef6\u7684\u3002\u7b80\u5355\u4e1a\u52a1\u4e0b\uff0c\u6211\u4eec\u76f4\u63a5 ",(0,p.kt)("strong",{parentName:"p"},'@input="inputText"'),"\u7136\u540e\u518d methods \u4e2d\u7f16\u5199\u5bf9\u5e94\u7684\u65b9\u6cd5",(0,p.kt)("strong",{parentName:"p"},"inputText(data)"),"\u3002\u5176\u4e2d ",(0,p.kt)("strong",{parentName:"p"},"data"),"\u53c2\u6570\u662f ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u4f20\u9012\u51fa\u6765\u7684\uff0c\u6253\u5370\u51fa\u6765\u7684\u503c\u6b63\u662f\u6211\u4eec\u5728\u8f93\u5165\u6846\u8f93\u5165\u7684\u503c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <el-input\n    @input="inputText"\n    v-model="input"\n    placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n  ></el-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: "",\n      };\n    },\n    methods: {\n      inputText(data) {\n        console.log(data); // \u6253\u5370\u51fainput\u503c\u7684\u5bf9\u8c61\n      },\n    },\n  };\n<\/script>\n')),(0,p.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728 ",(0,p.kt)("strong",{parentName:"p"},"@input"),"\u76d1\u542c\u7684\u65f6\u5019\uff0c\u7528 ",(0,p.kt)("strong",{parentName:"p"},'@input="inputText()"'),"\u6765\u63a5\u6536\u3002\u8fd9\u6837\u4f1a\u5bfc\u81f4\u6211\u4eec\u5728 ",(0,p.kt)("strong",{parentName:"p"},"methods"),"\u65b9\u6cd5\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u83b7\u53d6\u4e0d\u5230 ",(0,p.kt)("strong",{parentName:"p"},"input"),"\u503c\u3002\u539f\u56e0\u662f\uff1a\u6211\u4eec\u5df2\u7ecf\u91cd\u5199\u4e86 ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u629b\u51fa\u6765\u7684\u65b9\u6cd5\uff0c\u4f7f\u5f97\u81ea\u5b9a\u4e49\u7684",(0,p.kt)("strong",{parentName:"p"},"inputText()")," \u65b9\u6cd5\u662f\u4e00\u4e2a\u65e0\u53c2\u7684\u65b9\u6cd5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <el-input\n    @input="inputText()"\n    v-model="input"\n    placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n  ></el-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: "",\n      };\n    },\n    methods: {\n      inputText(data) {\n        console.log(data); // undefined\n      },\n    },\n  };\n<\/script>\n')),(0,p.kt)("p",null,"\u4ee5\u4e0a\u7684\u573a\u666f\u5728\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"Vue"),"\u7ec4\u4ef6\u76d1\u542c\u4e8b\u4ef6\u7684\u65f6\u5019\u662f\u5f88\u5e38\u89c1\u7684\uff0c\u5176\u5b9e\u6211\u4eec\u53ea\u9700\u8981\u5728\u63a5\u6536\u76d1\u542c\u4e8b\u4ef6\u65f6\uff0c\u4e0d\u7ed9\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u52a0\u4e0a ",(0,p.kt)("strong",{parentName:"p"},"()"),"\u5c31\u80fd\u89e3\u51b3\u4e86\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u6211\u4eec\u7684\u5e94\u7528\u573a\u666f\u662f\u590d\u6742\u7684\u3002\u521a\u597d\u9700\u8981\u6211\u4eec\u5728\u81ea\u5b9a\u4e49\u65b9\u6cd5\u4e0a\u4f20\u9012\u53c2\u6570\u3002\u6bd4\u5982\u4f20\u9012\u4e2a abc\uff0c\u8fd9\u65f6\u5019\u5728",(0,p.kt)("strong",{parentName:"p"},"inputText()"),"\u53ef\u4ee5\u6253\u5370\u51fa",(0,p.kt)("strong",{parentName:"p"},"abc"),"\u8fd9\u4e2a\u53c2\u6570\u6765\u3002\u4f46\u662f\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u65e0\u6cd5\u5728 ",(0,p.kt)("strong",{parentName:"p"},"inputText()"),"\u65b9\u6cd5\u4e2d\u83b7\u53d6\u5230 ",(0,p.kt)("strong",{parentName:"p"},"input")," \u503c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <el-input\n    @input="inputText(\'abc\')"\n    v-model="input"\n    placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n  ></el-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: "",\n      };\n    },\n    methods: {\n      inputText(data) {\n        console.log(data); // \u53ea\u6253\u5370\u51fa abc\uff0c\u65e0\u6cd5\u83b7\u53d6\u5230input\u7684\u503c\n      },\n    },\n  };\n<\/script>\n')),(0,p.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,p.kt)("h3",{id:"\u4f20\u9012\u4e8b\u4ef6\u5bf9\u8c61"},"\u4f20\u9012\u4e8b\u4ef6\u5bf9\u8c61"),(0,p.kt)("p",null,"\u5728 Vue \u7684\u5b98\u65b9\u6587\u6863\u4e2d\u5c31\u6709\u63d0\u5230\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"$event "),"\u6765\u83b7\u53d6\u76d1\u542c\u4e8b\u4ef6\u629b\u51fa\u6765\u7684\u53c2\u6570 -- ",(0,p.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC"},"\u4f7f\u7528\u4e8b\u4ef6\u629b\u51fa\u4e00\u4e2a\u503c"),"\n\u5728 ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u76d1\u542c\u8fd9\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"@input")," \u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 $event \u8bbf\u95ee\u5230\u88ab\u629b\u51fa\u7684\u8fd9\u4e2a\u503c\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6b64\u52a0\u4e0a\u81ea\u5b9a\u4e49\u7684\u53c2\u6570\u8fdb\u884c\u4f20\u9012\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <el-input\n    @input="inputText($event, \'abc\')"\n    v-model="input"\n    placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n  ></el-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: "",\n      };\n    },\n    methods: {\n      inputText(e, data) {\n        console.log(e); // \u6253\u5370input\u7684\u503c\n        console.log(data); // \u6253\u5370 abc\n      },\n    },\n  };\n<\/script>\n')),(0,p.kt)("h3",{id:"\u56de\u8c03\u51fd\u6570"},"\u56de\u8c03\u51fd\u6570"),(0,p.kt)("p",null,"\u5728\u76d1\u542c ",(0,p.kt)("strong",{parentName:"p"},"@input"),"\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u63a5\u6536\uff0c\u83b7\u53d6\u5230 ",(0,p.kt)("strong",{parentName:"p"},"el-input"),"\u7ec4\u4ef6\u629b\u51fa\u7684\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"p"},"item\uff0c"),"\u518d\u5c06\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"p"},"item"),"\u4f20\u5165\u6211\u4eec\u81ea\u5b9a\u7684\u65b9\u6cd5 ",(0,p.kt)("strong",{parentName:"p"},"inputText(item, 'abc')\u3002"),"\u5728\u6b64\uff0c\u6211\u4eec\u8fd8\u5c06\u81ea\u5b9a\u7684\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"p"},"'abc'"),"\u8fdb\u884c\u4f20\u9012\u3002\u8fd9\u6837\u5728\u5b9e\u73b0 ",(0,p.kt)("strong",{parentName:"p"},"inputText()"),"\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u63a5\u6536\u5230 ",(0,p.kt)("strong",{parentName:"p"},"input"),"\u503c\u548c\u81ea\u5b9a\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"p"},"'abc'\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <el-input\n    @input="\n      (item) => {\n        inputText(item, \'abc\');\n      }\n    "\n    v-model="input"\n    placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9"\n  ></el-input>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        input: "",\n      };\n    },\n    methods: {\n      inputText(data1, data2) {\n        console.log(data1); // \u6253\u5370input\u7684\u503c\n        console.log(data2); // \u6253\u5370 abc\n      },\n    },\n  };\n<\/script>\n')))}d.isMDXComponent=!0}}]);