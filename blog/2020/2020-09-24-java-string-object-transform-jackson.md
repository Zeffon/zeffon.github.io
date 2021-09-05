---
slug: java-string-object-transform-jackson
title: Java中json字符串与对象的转换jackson
authors: zeffon
tags: [java]
date: 2020-09-24
---

我们经常遇到 json 字符串与对象之间的相互转换（即序列化和反序列化），常用的第三方框架有 Gson、FastJson、Jackson。而 Jackson 在 SpringBoot 项目已默认引来该依赖，Gson 和 FastJson 则需要额外的引入第三方依赖。

<!--truncate-->

## 前文

Jackson 是当前用的比较广泛的，用来`序列化和反序列化json`的 Java 的开源框架。Jackson 社区相对比较活跃，更新速度也比较快， 从 Github 中的统计来看，Jackson 是最流行的 json 解析器之一 。 Spring MVC 的默认 json 解析器便是 Jackson。 Jackson 优点很多。 Jackson 所依赖的 jar 包较少 ，简单易用。与其他 Java 的 json 的框架 Gson 等相比， Jackson 解析大的 json 文件速度比较快；Jackson 运行时**占用内存比较低**，**性能比较好**；Jackson 有灵活的 API，可以很容易进行**扩展和定制**。

**Jackson 的核心模块由三部分组成:**

- jackson-core，核心包，提供基于”流模式”解析的相关 API，它包括 JsonPaser 和 JsonGenerator。 Jackson 内部实现正是通过高性能的流模式 API 的 JsonGenerator 和 JsonParser 来生成和解析 json。
- jackson-annotations，注解包，提供标准注解功能；
- jackson-databind ，数据绑定包， 提供基于”对象绑定” 解析的相关 API （ ObjectMapper ） 和”树模型” 解析的相关 API （JsonNode）；基于”对象绑定” 解析的 API 和”树模型”解析的 API 依赖基于”流模式”解析的 API。

## 正文

### 序列化

objectToJson(): 将对象转换成 json 字符串。即便是`列表对象`也可以转成`嵌套json字符串`。由于要`通用接收任意参数`，使用泛型来接收参数，这样任意的调用方也都传来参数。

```java
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GenericAndJson {

    private static ObjectMapper mapper;

    @Autowired
    public void setMapper(ObjectMapper mapper) {
        GenericAndJson.mapper = mapper;
    }

    /**
     * 对象转化成json字符串
     * @param o 传入的对象
     * @param <T> 泛型处理
     * @return String
     */
    public static <T> String objectToJson(T o) {
        try {
            return GenericAndJson.mapper.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

### 反序列化

jsonToObject(): 将 json 字符串转成指定对象。由于要将**返回的结果**由`调用方`来指定类型，所以采用泛型来返回结果，而在泛型方法内的 Jackson 的 readValue 方法在传入参数时需要指定转化结果的类型，所以 jsonToObject 需要接收多一个参数来`指明json字符串转成哪个类型对象`。

> 泛型在编译之后泛型 T 就会被擦除, 而实例化操作是发生在运行阶段进行的，所以在`程序运行时`无法进行实例化操作，毕竟**泛型相关信息已丢失**。 而在泛型方法内 Jackson 的 readValue 是需要传入`相对应的类`来指明转成的`类型对象`，可是如果传入的泛型参数是无法获取到`实例化对象`，所以就需要多参入一个元类参数。而采用`TypeReference`可接收任意类型参数形式。

```java
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zeffon.missyou.exception.http.ServerErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GenericAndJson {

    // 依赖注入就是对实例对象的成员变量进行注入，它需要有个实例化的过程
    private static ObjectMapper mapper;

    @Autowired
    public void setMapper(ObjectMapper mapper) {
        GenericAndJson.mapper = mapper;
    }

    /**
     * json转变成单一对象
     * @param s json字符
     * @param tr
     * @param <T>
     * @return 单一对象
     */
    public static <T> T jsonToObject(String s, Class<T> clazz) {
        if (s == null) {
            return null;
        }
        try {
            T o = GenericAndJson.mapper.readValue(s, clazz);
            return o;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new ServerErrorException(9999);
        }
    }

    /**
     * 这种写法完全可以代替上面的（上面只能转成单一对象，这样可以转成单一对象和列表对象）
     * json转变成对象
     * @param s json字符
     * @param tr
     * @param <T>
     * @return 对象
     */
    public static <T> T jsonToObject(String s, TypeReference<T> tr) {
        if (s == null) {
            return null;
        }
        try {
            T o = GenericAndJson.mapper.readValue(s, tr);
            return o;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new ServerErrorException(9999);
        }
    }
}
```

### 代码

```java
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zeffon.missyou.exception.http.ServerErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GenericAndJson {

    private static ObjectMapper mapper;

    @Autowired
    public void setMapper(ObjectMapper mapper) {
        GenericAndJson.mapper = mapper;
    }

    /**
     * 对象转化成json字符串
     * @param o 传入的对象
     * @param <T> 泛型处理
     * @return String
     */
    public static <T> String objectToJson(T o) {
        try {
            return GenericAndJson.mapper.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new ServerErrorException(9999);
        }
    }

    /**
     * json转变成对象
     * @param s json字符
     * @param tr
     * @param <T>
     * @return 对象
     */
    public static <T> T jsonToObject(String s, TypeReference<T> tr) {
        if (s == null) {
            return null;
        }
        try {
            T o = GenericAndJson.mapper.readValue(s, tr);
            return o;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            throw new ServerErrorException(9999);
        }
    }
}
```
