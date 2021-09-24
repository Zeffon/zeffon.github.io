---
slug: springboot-elasticsearch
title: SpringBoot配置ES数据库
authors: zeffon
tags: [java, database]
date: 2021-05-05 10:00
---

上文主要有写关于 ES 数据库的安装与配置，本文主要介绍在 SpringBoot 中应用 ES 数据库的相关流程。
由于高版本的 ES 数据库在 spring-boot-starter-data-elasticsearch 的依赖中支持都是比较旧版本的，所以不采用该依赖，而是采用 elasticsearch 和 elasticsearch-rest-high-level-client 进行配置。这个一直有再维护，直接引进相对应版本的即可。

<!--truncate-->

## 引进依赖

```xml
        <!-- ES数据库相关依赖 -->
        <!-- https://mvnrepository.com/artifact/org.elasticsearch/elasticsearch -->
        <dependency>
            <groupId>org.elasticsearch</groupId>
            <artifactId>elasticsearch</artifactId>
            <version>7.11.1</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.elasticsearch.client/elasticsearch-rest-high-level-client -->
        <dependency>
            <groupId>org.elasticsearch.client</groupId>
            <artifactId>elasticsearch-rest-high-level-client</artifactId>
            <version>7.11.1</version>
        </dependency>
```

## 配置参数

这样配置是无法自动配置到 ES 数据库的，需要手动配置 ES 数据库的连接，这些参数也是通过@Value 来读取。

```xml
spring:
  es:
    host: 118.25.210.135
    port: 9200
    connTimeout: 3000
    socketTimeout: 5000
    connectionRequestTimeout: 1000
```

## 配置连接

```java
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ElasticsearchConfig {

    @Value("${spring.es.host}")
    private String host;
    @Value("${spring.es.port}")
    private int port;
    @Value("${spring.es.connTimeout}")
    private int connTimeout;
    @Value("${spring.es.socketTimeout}")
    private int socketTimeout;
    @Value("${spring.es.connectionRequestTimeout}")
    private int connectionRequestTimeout;

    // 将初始化后加入Bean中，并取名为esClient
    @Bean(destroyMethod = "close", name = "esClient")
    public RestHighLevelClient elasticsearchClient() {
        RestClientBuilder builder = RestClient.builder(new HttpHost(host, port))
                .setRequestConfigCallback(requestConfigBuilder -> requestConfigBuilder
                        .setConnectTimeout(connTimeout)
                        .setSocketTimeout(socketTimeout)
                        .setConnectionRequestTimeout(connectionRequestTimeout));
        return new RestHighLevelClient(builder);
    }
}
```

## 创建相关的实体

```java
import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
public class FileDocument {
    private Integer id;
    private Integer userId;
    private String title;
    private String url;
    private Integer size;
    private Date createTime;
}
```

## 创建相关的方法

主要是三个方法，创建索引，添加文档、删除文档的接口

```java
package com.zeffon.danzhu.manager.es7;

import com.alibaba.fastjson.JSON;
import com.zeffon.danzhu.manager.es7.document.FileDocument;
import org.elasticsearch.action.delete.DeleteRequest;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.client.indices.CreateIndexRequest;
import org.elasticsearch.client.indices.CreateIndexResponse;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.TermQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ES7Service {

    @Autowired
    private RestHighLevelClient esClient;

    // 根据title字段进行搜索
    public List<FileDocument> getDoc(String title) {
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.indices("file");
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("title", title);
        searchSourceBuilder.query(termQueryBuilder);
        searchRequest.source(searchSourceBuilder);
        SearchResponse searchResponse = null;
        try {
            searchResponse = esClient.search(searchRequest, RequestOptions.DEFAULT);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return getSearchResult(searchResponse);
    }

    // 添加文档(相当于添加一条记录)
    public void addDoc(FileDocument document) {
        IndexRequest indexRequest = new IndexRequest("file")
                .id(String.valueOf(document.getId()))
                .source(JSON.toJSONString(document), XContentType.JSON);
        try {
            esClient.index(indexRequest, RequestOptions.DEFAULT);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 删除文档
    public void deleteDoc(String id) {
        DeleteRequest deleteRequest = new DeleteRequest("file", id);
        try {
            esClient.delete(deleteRequest, RequestOptions.DEFAULT);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // 创建索引的方法(相当于MySQL建表)
    public boolean createIndex(String index) throws IOException {
        CreateIndexRequest createIndexRequest = new CreateIndexRequest(index);
        createIndexRequest.settings(Settings.builder()
                .put("index.number_of_shards", 1)
                .put("index.number_of_replicas", 0)
        );
        createIndexRequest.mapping("{\n" +
                "  \"properties\": {\n" +
                "    \"id\": {\n" +
                "      \"type\": \"integer\"\n" +
                "    },\n" +
                "    \"userId\": {\n" +
                "      \"type\": \"integer\"\n" +
                "    },\n" +
                "    \"size\": {\n" +
                "      \"type\": \"integer\"\n" +
                "    },\n" +
                "    \"createTime\": {\n" +
                "      \"type\": \"text\"\n" +
                "    },\n" +
                "    \"url\": {\n" +
                "      \"type\": \"keyword\",\n" +
                "      \"index\": false\n" +
                "    },\n" +
                "    \"title\": {\n" +
                "      \"type\": \"text\",\n" +
                "      \"analyzer\": \"ik_max_word\",\n" +
                "      \"fields\": {\n" +
                "          \"keyword\": {\n" +
                "             \"ignore_above\": 256,\n" +
                "             \"type\": \"keyword\"\n" +
                "          }\n" +
                "       }\n" +
                "    }\n" +
                "  }\n" +
                "}", XContentType.JSON);
        CreateIndexResponse createIndexResponse = esClient.indices().create(createIndexRequest, RequestOptions.DEFAULT);
        return createIndexResponse.isAcknowledged();
    }

    private List<FileDocument> getSearchResult(SearchResponse response) {
        SearchHit[] searchHit = response.getHits().getHits();
        List<FileDocument> fileDocuments = new ArrayList<>();
        for (SearchHit hit : searchHit) {
            fileDocuments.add(JSON.parseObject(hit.getSourceAsString(), FileDocument.class));
        }
        return fileDocuments;
    }
}

```
