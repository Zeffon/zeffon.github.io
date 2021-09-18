"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5287],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9754:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={slug:"springboot-elasticsearch",title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",authors:"zeffon",tags:["java","database"],date:"2021-05-05 10:00"},c=void 0,l={permalink:"/blog/springboot-elasticsearch",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-05-05-springboot-elasticsearch.md",source:"@site/blog/2021/2021-05-05-springboot-elasticsearch.md",title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",description:"\u4e0a\u6587\u4e3b\u8981\u6709\u5199\u5173\u4e8e ES \u6570\u636e\u5e93\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 SpringBoot \u4e2d\u5e94\u7528 ES \u6570\u636e\u5e93\u7684\u76f8\u5173\u6d41\u7a0b\u3002",date:"2021-05-05T10:00:00.000Z",formattedDate:"May 5, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"database",permalink:"/blog/tags/database"}],readingTime:3.52,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"TypeScript \u57fa\u7840\u68b3\u7406",permalink:"/blog/typeScript"},nextItem:{title:"ES\u6570\u636e\u5e93\u7684\u4f7f\u7528",permalink:"/blog/elasticsearch"}},u={authorsImageUrls:[void 0]},p=[{value:"\u5f15\u8fdb\u4f9d\u8d56",id:"\u5f15\u8fdb\u4f9d\u8d56",children:[]},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",children:[]},{value:"\u914d\u7f6e\u8fde\u63a5",id:"\u914d\u7f6e\u8fde\u63a5",children:[]},{value:"\u521b\u5efa\u76f8\u5173\u7684\u5b9e\u4f53",id:"\u521b\u5efa\u76f8\u5173\u7684\u5b9e\u4f53",children:[]},{value:"\u521b\u5efa\u76f8\u5173\u7684\u65b9\u6cd5",id:"\u521b\u5efa\u76f8\u5173\u7684\u65b9\u6cd5",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u6587\u4e3b\u8981\u6709\u5199\u5173\u4e8e ES \u6570\u636e\u5e93\u7684\u5b89\u88c5\u4e0e\u914d\u7f6e\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 SpringBoot \u4e2d\u5e94\u7528 ES \u6570\u636e\u5e93\u7684\u76f8\u5173\u6d41\u7a0b\u3002\n\u7531\u4e8e\u9ad8\u7248\u672c\u7684 ES \u6570\u636e\u5e93\u5728 spring-boot-starter-data-elasticsearch \u7684\u4f9d\u8d56\u4e2d\u652f\u6301\u90fd\u662f\u6bd4\u8f83\u65e7\u7248\u672c\u7684\uff0c\u6240\u4ee5\u4e0d\u91c7\u7528\u8be5\u4f9d\u8d56\uff0c\u800c\u662f\u91c7\u7528 elasticsearch \u548c elasticsearch-rest-high-level-client \u8fdb\u884c\u914d\u7f6e\u3002\u8fd9\u4e2a\u4e00\u76f4\u6709\u518d\u7ef4\u62a4\uff0c\u76f4\u63a5\u5f15\u8fdb\u76f8\u5bf9\u5e94\u7248\u672c\u7684\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u5f15\u8fdb\u4f9d\u8d56"},"\u5f15\u8fdb\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- ES\u6570\u636e\u5e93\u76f8\u5173\u4f9d\u8d56 --\x3e\n        \x3c!-- https://mvnrepository.com/artifact/org.elasticsearch/elasticsearch --\x3e\n        <dependency>\n            <groupId>org.elasticsearch</groupId>\n            <artifactId>elasticsearch</artifactId>\n            <version>7.11.1</version>\n        </dependency>\n        \x3c!-- https://mvnrepository.com/artifact/org.elasticsearch.client/elasticsearch-rest-high-level-client --\x3e\n        <dependency>\n            <groupId>org.elasticsearch.client</groupId>\n            <artifactId>elasticsearch-rest-high-level-client</artifactId>\n            <version>7.11.1</version>\n        </dependency>\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u8fd9\u6837\u914d\u7f6e\u662f\u65e0\u6cd5\u81ea\u52a8\u914d\u7f6e\u5230 ES \u6570\u636e\u5e93\u7684\uff0c\u9700\u8981\u624b\u52a8\u914d\u7f6e ES \u6570\u636e\u5e93\u7684\u8fde\u63a5\uff0c\u8fd9\u4e9b\u53c2\u6570\u4e5f\u662f\u901a\u8fc7@Value \u6765\u8bfb\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"spring:\n  es:\n    host: 118.25.210.135\n    port: 9200\n    connTimeout: 3000\n    socketTimeout: 5000\n    connectionRequestTimeout: 1000\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u8fde\u63a5"},"\u914d\u7f6e\u8fde\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.http.HttpHost;\nimport org.elasticsearch.client.RestClient;\nimport org.elasticsearch.client.RestClientBuilder;\nimport org.elasticsearch.client.RestHighLevelClient;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class ElasticsearchConfig {\n\n    @Value("${spring.es.host}")\n    private String host;\n    @Value("${spring.es.port}")\n    private int port;\n    @Value("${spring.es.connTimeout}")\n    private int connTimeout;\n    @Value("${spring.es.socketTimeout}")\n    private int socketTimeout;\n    @Value("${spring.es.connectionRequestTimeout}")\n    private int connectionRequestTimeout;\n\n    // \u5c06\u521d\u59cb\u5316\u540e\u52a0\u5165Bean\u4e2d\uff0c\u5e76\u53d6\u540d\u4e3aesClient\n    @Bean(destroyMethod = "close", name = "esClient")\n    public RestHighLevelClient elasticsearchClient() {\n        RestClientBuilder builder = RestClient.builder(new HttpHost(host, port))\n                .setRequestConfigCallback(requestConfigBuilder -> requestConfigBuilder\n                        .setConnectTimeout(connTimeout)\n                        .setSocketTimeout(socketTimeout)\n                        .setConnectionRequestTimeout(connectionRequestTimeout));\n        return new RestHighLevelClient(builder);\n    }\n}\n')),(0,a.kt)("h2",{id:"\u521b\u5efa\u76f8\u5173\u7684\u5b9e\u4f53"},"\u521b\u5efa\u76f8\u5173\u7684\u5b9e\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import lombok.Getter;\nimport lombok.Setter;\nimport java.util.Date;\n\n@Getter\n@Setter\npublic class FileDocument {\n    private Integer id;\n    private Integer userId;\n    private String title;\n    private String url;\n    private Integer size;\n    private Date createTime;\n}\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u76f8\u5173\u7684\u65b9\u6cd5"},"\u521b\u5efa\u76f8\u5173\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4e3b\u8981\u662f\u4e09\u4e2a\u65b9\u6cd5\uff0c\u521b\u5efa\u7d22\u5f15\uff0c\u6dfb\u52a0\u6587\u6863\u3001\u5220\u9664\u6587\u6863\u7684\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package com.zeffon.danzhu.manager.es7;\n\nimport com.alibaba.fastjson.JSON;\nimport com.zeffon.danzhu.manager.es7.document.FileDocument;\nimport org.elasticsearch.action.delete.DeleteRequest;\nimport org.elasticsearch.action.index.IndexRequest;\nimport org.elasticsearch.action.search.SearchRequest;\nimport org.elasticsearch.action.search.SearchResponse;\nimport org.elasticsearch.client.RequestOptions;\nimport org.elasticsearch.client.RestHighLevelClient;\nimport org.elasticsearch.client.indices.CreateIndexRequest;\nimport org.elasticsearch.client.indices.CreateIndexResponse;\nimport org.elasticsearch.common.settings.Settings;\nimport org.elasticsearch.common.xcontent.XContentType;\nimport org.elasticsearch.index.query.QueryBuilders;\nimport org.elasticsearch.index.query.TermQueryBuilder;\nimport org.elasticsearch.search.SearchHit;\nimport org.elasticsearch.search.builder.SearchSourceBuilder;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Service\npublic class ES7Service {\n\n    @Autowired\n    private RestHighLevelClient esClient;\n\n    // \u6839\u636etitle\u5b57\u6bb5\u8fdb\u884c\u641c\u7d22\n    public List<FileDocument> getDoc(String title) {\n        SearchRequest searchRequest = new SearchRequest();\n        searchRequest.indices("file");\n        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();\n        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("title", title);\n        searchSourceBuilder.query(termQueryBuilder);\n        searchRequest.source(searchSourceBuilder);\n        SearchResponse searchResponse = null;\n        try {\n            searchResponse = esClient.search(searchRequest, RequestOptions.DEFAULT);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        return getSearchResult(searchResponse);\n    }\n\n    // \u6dfb\u52a0\u6587\u6863(\u76f8\u5f53\u4e8e\u6dfb\u52a0\u4e00\u6761\u8bb0\u5f55)\n    public void addDoc(FileDocument document) {\n        IndexRequest indexRequest = new IndexRequest("file")\n                .id(String.valueOf(document.getId()))\n                .source(JSON.toJSONString(document), XContentType.JSON);\n        try {\n            esClient.index(indexRequest, RequestOptions.DEFAULT);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    // \u5220\u9664\u6587\u6863\n    public void deleteDoc(String id) {\n        DeleteRequest deleteRequest = new DeleteRequest("file", id);\n        try {\n            esClient.delete(deleteRequest, RequestOptions.DEFAULT);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n\n    // \u521b\u5efa\u7d22\u5f15\u7684\u65b9\u6cd5(\u76f8\u5f53\u4e8eMySQL\u5efa\u8868)\n    public boolean createIndex(String index) throws IOException {\n        CreateIndexRequest createIndexRequest = new CreateIndexRequest(index);\n        createIndexRequest.settings(Settings.builder()\n                .put("index.number_of_shards", 1)\n                .put("index.number_of_replicas", 0)\n        );\n        createIndexRequest.mapping("{\\n" +\n                "  \\"properties\\": {\\n" +\n                "    \\"id\\": {\\n" +\n                "      \\"type\\": \\"integer\\"\\n" +\n                "    },\\n" +\n                "    \\"userId\\": {\\n" +\n                "      \\"type\\": \\"integer\\"\\n" +\n                "    },\\n" +\n                "    \\"size\\": {\\n" +\n                "      \\"type\\": \\"integer\\"\\n" +\n                "    },\\n" +\n                "    \\"createTime\\": {\\n" +\n                "      \\"type\\": \\"text\\"\\n" +\n                "    },\\n" +\n                "    \\"url\\": {\\n" +\n                "      \\"type\\": \\"keyword\\",\\n" +\n                "      \\"index\\": false\\n" +\n                "    },\\n" +\n                "    \\"title\\": {\\n" +\n                "      \\"type\\": \\"text\\",\\n" +\n                "      \\"analyzer\\": \\"ik_max_word\\",\\n" +\n                "      \\"fields\\": {\\n" +\n                "          \\"keyword\\": {\\n" +\n                "             \\"ignore_above\\": 256,\\n" +\n                "             \\"type\\": \\"keyword\\"\\n" +\n                "          }\\n" +\n                "       }\\n" +\n                "    }\\n" +\n                "  }\\n" +\n                "}", XContentType.JSON);\n        CreateIndexResponse createIndexResponse = esClient.indices().create(createIndexRequest, RequestOptions.DEFAULT);\n        return createIndexResponse.isAcknowledged();\n    }\n\n    private List<FileDocument> getSearchResult(SearchResponse response) {\n        SearchHit[] searchHit = response.getHits().getHits();\n        List<FileDocument> fileDocuments = new ArrayList<>();\n        for (SearchHit hit : searchHit) {\n            fileDocuments.add(JSON.parseObject(hit.getSourceAsString(), FileDocument.class));\n        }\n        return fileDocuments;\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);