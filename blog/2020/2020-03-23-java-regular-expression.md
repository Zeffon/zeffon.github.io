---
slug: java-regular-expression
title: Java正则表达式
authors: zeffon
tags: [java]
date: 2020-03-23
---

记录 Java 正则表达式的使用以及提取 HTML 文本信息

<!--truncate-->

## 前言

正则表达式定义一个搜索模式的字符串，我们可以用来搜索、编辑或处理文本。
正则表达式并不仅限于某一种语言，但是在每种语言中有细微的差别。
在 Java 中，java.util.regex 是一个用正则表达式所订制的模式来对字符串进行匹配工作的类库包。它包括两个类：`Pattern`和`Matcher Pattern`。

> Pattern 是一个正则表达式经编译后的表现模式。Matcher 的一个对象是一个状态机器，它依据 Pattern 对象做为匹配模式对字符串展开匹配检查。所以在使用 Java 正则表达式时，需要先有一个 Pattern 实例订制了一个所用语法与 PERL 的类似的正则表达式经编译后的模式，然后实例一个 Matcher 对象在这个给定的 Pattern 实例的模式控制下进行字符串的匹配工作。

## 正文

### 正则表达式语法

| 字符                   | 说明                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| \                      | 将下一字符标记为特殊字符、文本、反向引用或八进制转义符                                                   |
| ^                      | 从字符开始匹配                                                                                           |
| $                      | 从字符末尾匹配                                                                                           |
| \*                     | 匹配 0 次或者无限多次                                                                                    |
| +                      | 匹配 1 次或者无限多次                                                                                    |
| ?                      | 匹配 0 次或者 1 次。当此字符紧随任何其他限定符（\*、+、?、{n}、{n,}、{n,m}）之后时，匹配模式是`非贪心的` |
| 。非贪心取短，贪心取长 |
| []                     | []里面的关系是或关系                                                                                     |
| [^]                    | []内的^是非字符, 表示取反                                                                                |
| [-]                    | []内的-是连续字符, 表示字符连续下去                                                                      |
| .                      | 匹配除换行符\n 之外其它所有字符                                                                          |
| \d                     | 匹配数字字符, 等同于匹配[0-9]                                                                            |
| \D                     | 匹配非数字字符, 等同于匹配[^0-9]                                                                         |
| \w                     | 匹配任何字类字符, 包括下划线, 等同于匹配[A-Za-z0-9_]                                                     |
| \W                     | 匹配任何非单词字符, 等同于匹配[^a-za-z0-9_]                                                              |
| \s                     | 匹配任何空白字符，包括空格、回车、制表符、换页符等。等同于匹配[\f\n\r\t\v]                               |
| \S                     | 匹配任何非空白字符。等同于匹配[^\f\n\r\t\v]                                                              |

[Java 在线表达式工具](http://www.regexplanet.com/advanced/java/index.html)

### Pattern 类和 Matcher 类

java 正则表达式通过 java.util.regex 包下的`Pattern类`与`Matcher类`实现。

1. 通过正则表达式创建模式对象 Pattern。
2. 通过模式对象 Pattern，根据指定字符串创建匹配对象 Matcher。
3. 通过匹配对象 Matcher，根据正则表达式操作字符串。

#### Pattern 常见 API

1. split() 在此模式的匹配周围拆分给定的输入序列。返回的是 String[]数组
2. matcher() 创建一个匹配器，该匹配器将使给定输入与此模式匹配
3. compile() 将给定的正则表达式编译为模式

```java
// Pattern.matcher(String regex,CharSequence input) 用于快速匹配字符串,该方法适合用于只匹配一次,且匹配全部字符串.
Boolean res1 = Pattern.matches("\\d+","123"); // 返回true
Boolean res2 = Pattern.matches("\\d+","123abc"); // 返回false,需要匹配到所有字符串才能返回true,这里abc不能匹配到

// split() 在此模式的匹配周围拆分给定的输入序列。返回的是String[]数组
Pattern pattern = Pattern.compile("\\d+");
String[] res = pattern.split("年龄:18手机:13800000000"); // 结果： [年龄:, 手机:]

// 返回pattern对象(\d+) 也就是返回该Matcher对象是由哪个Pattern对象的创建的
Pattern pattern = Pattern.compile("\\d+");
Matcher matcher = pattern.matcher("123abc123");
Pattern res = matcher.pattern();
```

#### Matcher 常见 API

1. start() 返回上一个匹配项的起始索引
2. end() 返回最后一个匹配字符后的偏移量
3. find() 尝试查找与模式匹配的输入序列的下一个子序列
4. group() 返回在上一个匹配操作期间给定组捕获的输入子序列

```java
Pattern p = Pattern.compile("\\d+");
Matcher m1 = p.matcher("abc123efg");
Boolean a1 = m1.find(); // 匹配到了123, 结果: true
Integer a2 = m1.start(); // 结果: 3,返回的是123中1的起始索引
Integer a3 = m1.end(); // 结果: 6,返回的是123后的偏移量
String a4 = m1.group(); // 结果: 123
```

### 爬虫案例

HTML 爬虫思路:

1. 明确自己想要爬去的网站，获取它的 url
2. 获取数据：根据想爬取的信息在网站定位标签
3. 分析数据：分析自己所获取到的信息，进行正则匹配
4. 数据精炼：通过列表、字典的操作，将数据精炼出来
5. 保存处理：对所精炼的数据保存至数据库

在定位到自己所需要的 HTML 标签后，需要获取标签内的所有字符。在正则表达式有三种方式可以获取所有字符：`/w/W` 、 `/s/S` 和 `.`

> 这里以获取腾讯视频首播影院--名称和简介为例
> `([\\s\\S]*?)`中`\\s`两个`\`是在 Java 需要一个`\`来转义。`[]`内是匹配所有字符，`*`是匹配 0 次或者无限多次，`?`是非贪婪模式，`()`是将其进行分组处理

```java
package com.zeffon.bait;

import org.junit.jupiter.api.Test;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.ObjectUtils;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 获取腾讯视频首播影院--名称和简介
 * Create by Zeffon on 2020/3/27
 */
public class TenxunTest {

    @Test
    public void fetch() {
        String html = fetchHtml();
        List<String> res = analysis(html);
        System.out.println(Arrays.toString(res.toArray()));
    }

    private String fetchHtml() {
        String url = "https://v.qq.com/channel/movie";
        RestTemplate restTemplate = new RestTemplate();
        setEncode(restTemplate); // 解决中文乱码问题
        String html = null;
        try {
            html = restTemplate.getForObject(url, String.class);
        } catch (ResourceAccessException e) {
            System.out.println("连接校园网超时");
        }
        return html;
    }

    private List<String> analysis(String html) {
        String rootPattern = "<div class=\"figure_detail figure_detail_two_row  \">([\\s\\S]*?)</div>";
        Pattern pattern = Pattern.compile(rootPattern);
        Matcher matcher = pattern.matcher(html);

        List<String> list = new ArrayList<>();
        // 获取到所匹配的分组数据
        while (matcher.find()) {
//            System.out.println(matcher.group(1));
            String content = matcher.group(1);
            String title = titleFetch(content);
            String desc = descFetch(content);
            String s = "title: " + title + " " + "desc: " + desc;
            list.add(s);
        }
        return list;
    }

    /**
     * 获取到一条数据的格式如下：
     * <a href="https://v.qq.com/x/cover/mzc00200i3sxjmo/d0936y5t23f.html" class="figure_title figure_title_two_row bold" title="我当摸金校尉的那些年" _stat="movie_v3_hot:title:我当摸金校尉的那些年" target="_blank">我当摸金校尉的那些年</a>
     *
     * <div class="figure_desc" title="电影再现正宗摸金范儿">电影再现正宗摸金范儿
     * 对此，我们需要根据对应内容的获取做不同正则表达式，以准确地定位到相关的匹配内容
     */

    private String titleFetch(String html) {
        String titlePattern = "target=\"_blank\">([\\s\\S]*?)</a>";
        Pattern pattern = Pattern.compile(titlePattern);
        Matcher matcher = pattern.matcher(html);

        if (matcher.find()) {
            return matcher.group(1);
        }
        return "";
    }

    private String descFetch(String html) {
        String descPattern = "<div class=\"figure_desc\" title=\"([\\s\\S]*?)\">";
        Pattern pattern = Pattern.compile(descPattern);
        Matcher matcher = pattern.matcher(html);

        if (matcher.find()) {
            return matcher.group(1);
        }
        return "";
    }

    private void setEncode(RestTemplate restTemplate) {
        if (null == restTemplate || ObjectUtils.isEmpty(restTemplate.getMessageConverters())) {
            return;
        }

        List<HttpMessageConverter<?>> messageConverters = restTemplate.getMessageConverters();
        for (int i = 0; i < messageConverters.size(); i++) {
            HttpMessageConverter<?> httpMessageConverter = messageConverters.get(i);
            if (httpMessageConverter.getClass().equals(StringHttpMessageConverter.class)) {
                messageConverters.set(i, new StringHttpMessageConverter(StandardCharsets.UTF_8));
            }
        }
    }
}
```
