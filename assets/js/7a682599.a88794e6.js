"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[226],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),i=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},l=function(n){var e=i(n.components);return r.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=i(t),f=o,j=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(j,p(p({ref:e},l),{},{components:t})):r.createElement(j,p({ref:e},l))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,p=new Array(a);p[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:o,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14872:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return i}});var r=t(83117),o=(t(67294),t(3905));const a={slug:"java-string-object-transform-jackson",title:"Java\u4e2djson\u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u7684\u8f6c\u6362jackson",authors:"zeffon",tags:["java"],date:new Date("2020-09-24T00:00:00.000Z")},p=void 0,s={permalink:"/blog/java-string-object-transform-jackson",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-09-24-java-string-object-transform-jackson.md",source:"@site/blog/2020/2020-09-24-java-string-object-transform-jackson.md",title:"Java\u4e2djson\u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u7684\u8f6c\u6362jackson",description:"\u6211\u4eec\u7ecf\u5e38\u9047\u5230 json \u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\uff08\u5373\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff09\uff0c\u5e38\u7528\u7684\u7b2c\u4e09\u65b9\u6846\u67b6\u6709 Gson\u3001FastJson\u3001Jackson\u3002\u800c Jackson \u5728 SpringBoot \u9879\u76ee\u5df2\u9ed8\u8ba4\u5f15\u6765\u8be5\u4f9d\u8d56\uff0cGson \u548c FastJson \u5219\u9700\u8981\u989d\u5916\u7684\u5f15\u5165\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002",date:"2020-09-24T00:00:00.000Z",formattedDate:"September 24, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:5.745,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"java-string-object-transform-jackson",title:"Java\u4e2djson\u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u7684\u8f6c\u6362jackson",authors:"zeffon",tags:["java"],date:"2020-09-24T00:00:00.000Z"},prevItem:{title:"LaTex \u5728 vscode \u4e0a\u7f16\u8bd1\u8fd0\u884c",permalink:"/blog/vscode-build-latex"},nextItem:{title:"Java\u6cdb\u578b\u7684\u8fd0\u7528",permalink:"/blog/java-generic"}},c={authorsImageUrls:[void 0]},i=[{value:"\u524d\u6587",id:"\u524d\u6587",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",level:3},{value:"\u53cd\u5e8f\u5217\u5316",id:"\u53cd\u5e8f\u5217\u5316",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],l={toc:i};function m(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u9047\u5230 json \u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u4e4b\u95f4\u7684\u76f8\u4e92\u8f6c\u6362\uff08\u5373\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\uff09\uff0c\u5e38\u7528\u7684\u7b2c\u4e09\u65b9\u6846\u67b6\u6709 Gson\u3001FastJson\u3001Jackson\u3002\u800c Jackson \u5728 SpringBoot \u9879\u76ee\u5df2\u9ed8\u8ba4\u5f15\u6765\u8be5\u4f9d\u8d56\uff0cGson \u548c FastJson \u5219\u9700\u8981\u989d\u5916\u7684\u5f15\u5165\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002"),(0,o.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,o.kt)("p",null,"Jackson \u662f\u5f53\u524d\u7528\u7684\u6bd4\u8f83\u5e7f\u6cdb\u7684\uff0c\u7528\u6765",(0,o.kt)("inlineCode",{parentName:"p"},"\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316json"),"\u7684 Java \u7684\u5f00\u6e90\u6846\u67b6\u3002Jackson \u793e\u533a\u76f8\u5bf9\u6bd4\u8f83\u6d3b\u8dc3\uff0c\u66f4\u65b0\u901f\u5ea6\u4e5f\u6bd4\u8f83\u5feb\uff0c \u4ece Github \u4e2d\u7684\u7edf\u8ba1\u6765\u770b\uff0cJackson \u662f\u6700\u6d41\u884c\u7684 json \u89e3\u6790\u5668\u4e4b\u4e00 \u3002 Spring MVC \u7684\u9ed8\u8ba4 json \u89e3\u6790\u5668\u4fbf\u662f Jackson\u3002 Jackson \u4f18\u70b9\u5f88\u591a\u3002 Jackson \u6240\u4f9d\u8d56\u7684 jar \u5305\u8f83\u5c11 \uff0c\u7b80\u5355\u6613\u7528\u3002\u4e0e\u5176\u4ed6 Java \u7684 json \u7684\u6846\u67b6 Gson \u7b49\u76f8\u6bd4\uff0c Jackson \u89e3\u6790\u5927\u7684 json \u6587\u4ef6\u901f\u5ea6\u6bd4\u8f83\u5feb\uff1bJackson \u8fd0\u884c\u65f6",(0,o.kt)("strong",{parentName:"p"},"\u5360\u7528\u5185\u5b58\u6bd4\u8f83\u4f4e"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u6027\u80fd\u6bd4\u8f83\u597d"),"\uff1bJackson \u6709\u7075\u6d3b\u7684 API\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u8fdb\u884c",(0,o.kt)("strong",{parentName:"p"},"\u6269\u5c55\u548c\u5b9a\u5236"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Jackson \u7684\u6838\u5fc3\u6a21\u5757\u7531\u4e09\u90e8\u5206\u7ec4\u6210:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"jackson-core\uff0c\u6838\u5fc3\u5305\uff0c\u63d0\u4f9b\u57fa\u4e8e\u201d\u6d41\u6a21\u5f0f\u201d\u89e3\u6790\u7684\u76f8\u5173 API\uff0c\u5b83\u5305\u62ec JsonPaser \u548c JsonGenerator\u3002 Jackson \u5185\u90e8\u5b9e\u73b0\u6b63\u662f\u901a\u8fc7\u9ad8\u6027\u80fd\u7684\u6d41\u6a21\u5f0f API \u7684 JsonGenerator \u548c JsonParser \u6765\u751f\u6210\u548c\u89e3\u6790 json\u3002"),(0,o.kt)("li",{parentName:"ul"},"jackson-annotations\uff0c\u6ce8\u89e3\u5305\uff0c\u63d0\u4f9b\u6807\u51c6\u6ce8\u89e3\u529f\u80fd\uff1b"),(0,o.kt)("li",{parentName:"ul"},"jackson-databind \uff0c\u6570\u636e\u7ed1\u5b9a\u5305\uff0c \u63d0\u4f9b\u57fa\u4e8e\u201d\u5bf9\u8c61\u7ed1\u5b9a\u201d \u89e3\u6790\u7684\u76f8\u5173 API \uff08 ObjectMapper \uff09 \u548c\u201d\u6811\u6a21\u578b\u201d \u89e3\u6790\u7684\u76f8\u5173 API \uff08JsonNode\uff09\uff1b\u57fa\u4e8e\u201d\u5bf9\u8c61\u7ed1\u5b9a\u201d \u89e3\u6790\u7684 API \u548c\u201d\u6811\u6a21\u578b\u201d\u89e3\u6790\u7684 API \u4f9d\u8d56\u57fa\u4e8e\u201d\u6d41\u6a21\u5f0f\u201d\u89e3\u6790\u7684 API\u3002")),(0,o.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("h3",{id:"\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316"),(0,o.kt)("p",null,"objectToJson(): \u5c06\u5bf9\u8c61\u8f6c\u6362\u6210 json \u5b57\u7b26\u4e32\u3002\u5373\u4fbf\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u5217\u8868\u5bf9\u8c61"),"\u4e5f\u53ef\u4ee5\u8f6c\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"\u5d4c\u5957json\u5b57\u7b26\u4e32"),"\u3002\u7531\u4e8e\u8981",(0,o.kt)("inlineCode",{parentName:"p"},"\u901a\u7528\u63a5\u6536\u4efb\u610f\u53c2\u6570"),"\uff0c\u4f7f\u7528\u6cdb\u578b\u6765\u63a5\u6536\u53c2\u6570\uff0c\u8fd9\u6837\u4efb\u610f\u7684\u8c03\u7528\u65b9\u4e5f\u90fd\u4f20\u6765\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.core.JsonProcessingException;\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class GenericAndJson {\n\n    private static ObjectMapper mapper;\n\n    @Autowired\n    public void setMapper(ObjectMapper mapper) {\n        GenericAndJson.mapper = mapper;\n    }\n\n    /**\n     * \u5bf9\u8c61\u8f6c\u5316\u6210json\u5b57\u7b26\u4e32\n     * @param o \u4f20\u5165\u7684\u5bf9\u8c61\n     * @param <T> \u6cdb\u578b\u5904\u7406\n     * @return String\n     */\n    public static <T> String objectToJson(T o) {\n        try {\n            return GenericAndJson.mapper.writeValueAsString(o);\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n        return null;\n    }\n}\n")),(0,o.kt)("h3",{id:"\u53cd\u5e8f\u5217\u5316"},"\u53cd\u5e8f\u5217\u5316"),(0,o.kt)("p",null,"jsonToObject(): \u5c06 json \u5b57\u7b26\u4e32\u8f6c\u6210\u6307\u5b9a\u5bf9\u8c61\u3002\u7531\u4e8e\u8981\u5c06",(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u7684\u7ed3\u679c"),"\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"\u8c03\u7528\u65b9"),"\u6765\u6307\u5b9a\u7c7b\u578b\uff0c\u6240\u4ee5\u91c7\u7528\u6cdb\u578b\u6765\u8fd4\u56de\u7ed3\u679c\uff0c\u800c\u5728\u6cdb\u578b\u65b9\u6cd5\u5185\u7684 Jackson \u7684 readValue \u65b9\u6cd5\u5728\u4f20\u5165\u53c2\u6570\u65f6\u9700\u8981\u6307\u5b9a\u8f6c\u5316\u7ed3\u679c\u7684\u7c7b\u578b\uff0c\u6240\u4ee5 jsonToObject \u9700\u8981\u63a5\u6536\u591a\u4e00\u4e2a\u53c2\u6570\u6765",(0,o.kt)("inlineCode",{parentName:"p"},"\u6307\u660ejson\u5b57\u7b26\u4e32\u8f6c\u6210\u54ea\u4e2a\u7c7b\u578b\u5bf9\u8c61"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6cdb\u578b\u5728\u7f16\u8bd1\u4e4b\u540e\u6cdb\u578b T \u5c31\u4f1a\u88ab\u64e6\u9664, \u800c\u5b9e\u4f8b\u5316\u64cd\u4f5c\u662f\u53d1\u751f\u5728\u8fd0\u884c\u9636\u6bb5\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u8fd0\u884c\u65f6"),"\u65e0\u6cd5\u8fdb\u884c\u5b9e\u4f8b\u5316\u64cd\u4f5c\uff0c\u6bd5\u7adf",(0,o.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u76f8\u5173\u4fe1\u606f\u5df2\u4e22\u5931"),"\u3002 \u800c\u5728\u6cdb\u578b\u65b9\u6cd5\u5185 Jackson \u7684 readValue \u662f\u9700\u8981\u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"\u76f8\u5bf9\u5e94\u7684\u7c7b"),"\u6765\u6307\u660e\u8f6c\u6210\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u7c7b\u578b\u5bf9\u8c61"),"\uff0c\u53ef\u662f\u5982\u679c\u4f20\u5165\u7684\u6cdb\u578b\u53c2\u6570\u662f\u65e0\u6cd5\u83b7\u53d6\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f8b\u5316\u5bf9\u8c61"),"\uff0c\u6240\u4ee5\u5c31\u9700\u8981\u591a\u53c2\u5165\u4e00\u4e2a\u5143\u7c7b\u53c2\u6570\u3002\u800c\u91c7\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"TypeReference"),"\u53ef\u63a5\u6536\u4efb\u610f\u7c7b\u578b\u53c2\u6570\u5f62\u5f0f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.core.JsonProcessingException;\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.zeffon.missyou.exception.http.ServerErrorException;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class GenericAndJson {\n\n    // \u4f9d\u8d56\u6ce8\u5165\u5c31\u662f\u5bf9\u5b9e\u4f8b\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u8fdb\u884c\u6ce8\u5165\uff0c\u5b83\u9700\u8981\u6709\u4e2a\u5b9e\u4f8b\u5316\u7684\u8fc7\u7a0b\n    private static ObjectMapper mapper;\n\n    @Autowired\n    public void setMapper(ObjectMapper mapper) {\n        GenericAndJson.mapper = mapper;\n    }\n\n    /**\n     * json\u8f6c\u53d8\u6210\u5355\u4e00\u5bf9\u8c61\n     * @param s json\u5b57\u7b26\n     * @param tr\n     * @param <T>\n     * @return \u5355\u4e00\u5bf9\u8c61\n     */\n    public static <T> T jsonToObject(String s, Class<T> clazz) {\n        if (s == null) {\n            return null;\n        }\n        try {\n            T o = GenericAndJson.mapper.readValue(s, clazz);\n            return o;\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n            throw new ServerErrorException(9999);\n        }\n    }\n\n    /**\n     * \u8fd9\u79cd\u5199\u6cd5\u5b8c\u5168\u53ef\u4ee5\u4ee3\u66ff\u4e0a\u9762\u7684\uff08\u4e0a\u9762\u53ea\u80fd\u8f6c\u6210\u5355\u4e00\u5bf9\u8c61\uff0c\u8fd9\u6837\u53ef\u4ee5\u8f6c\u6210\u5355\u4e00\u5bf9\u8c61\u548c\u5217\u8868\u5bf9\u8c61\uff09\n     * json\u8f6c\u53d8\u6210\u5bf9\u8c61\n     * @param s json\u5b57\u7b26\n     * @param tr\n     * @param <T>\n     * @return \u5bf9\u8c61\n     */\n    public static <T> T jsonToObject(String s, TypeReference<T> tr) {\n        if (s == null) {\n            return null;\n        }\n        try {\n            T o = GenericAndJson.mapper.readValue(s, tr);\n            return o;\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n            throw new ServerErrorException(9999);\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.core.JsonProcessingException;\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.zeffon.missyou.exception.http.ServerErrorException;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@Component\npublic class GenericAndJson {\n\n    private static ObjectMapper mapper;\n\n    @Autowired\n    public void setMapper(ObjectMapper mapper) {\n        GenericAndJson.mapper = mapper;\n    }\n\n    /**\n     * \u5bf9\u8c61\u8f6c\u5316\u6210json\u5b57\u7b26\u4e32\n     * @param o \u4f20\u5165\u7684\u5bf9\u8c61\n     * @param <T> \u6cdb\u578b\u5904\u7406\n     * @return String\n     */\n    public static <T> String objectToJson(T o) {\n        try {\n            return GenericAndJson.mapper.writeValueAsString(o);\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n            throw new ServerErrorException(9999);\n        }\n    }\n\n    /**\n     * json\u8f6c\u53d8\u6210\u5bf9\u8c61\n     * @param s json\u5b57\u7b26\n     * @param tr\n     * @param <T>\n     * @return \u5bf9\u8c61\n     */\n    public static <T> T jsonToObject(String s, TypeReference<T> tr) {\n        if (s == null) {\n            return null;\n        }\n        try {\n            T o = GenericAndJson.mapper.readValue(s, tr);\n            return o;\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n            throw new ServerErrorException(9999);\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);