---
slug: get-param-array
title: GET请求如何传递数组参数
authors: zeffon
tags: [js]
date: 2021-12-31 10:33
---

在平时开发中，HTTP 中 GET 请求参数传递的交互是很简单的，无非就是在 URL 设置参数或者 URL 后加上参数的形式。但有时我们会面对 GET 请求传递数组参数的形式，那么又该如何面对呢？

<!--truncate-->

## 常规请求方式

1. 参数作为 URL 的一部分进行链接跳转

   ```typescript
   `https://www.yuque.com/zeffon/blog/${name}`;
   ```

   其中的 name 为变量，直接将 URL 构造成一个链接

2. 参数作为 URL 后的参数形式，以问好 ? 隔开，多个以 & 切分。

   ```typescript
   https://www.yuque.com/zeffon/blog/toc?tempStore=1
   ```

   其中的 tempStore 就是 GET 请求传递的参数

以上就是 GET 请求中很常见的请求方式，那么 GET 是否也可以传递 body 的参数形式吗？答案是可以的，但是 GET 请求传递 body 类型的参数不符合 RestFul 的风格，所以大家很少在 GET 请求中使用这种复杂方式传递。

## 不寻常请求方式

1. 其实 GET 请求传递数组也是很简单的，一般前端将数组参数拼接成一个字符串，再由后端接收处理成数组。

   ```typescript
   https://www.yuque.com/zeffon/blog?tags=1,2,3
   ```

2. 但是有时候事与愿违，前端就需要传递这种数组方式，结构：

   参数 tags，参数值：[1, 2, 3]

   如果我们使用在 URL 后的参数形式的话，解析后的 URL 为：

   ```typescript
   https://www.yuque.com/zeffon/blog?tags[]=1&tags[]=2&tags[]=3
   ```

   很明显，这种参数形式给后端解析不到对应的参数值的，后端能解析的方式是这种的：

   ```typescript
   https://www.yuque.com/zeffon/blog?tags=1,2,3
   ```

   或者

   ```typescript
   https://www.yuque.com/zeffon/blog?tags=1&tags=2&tags=3
   ```

## 解决方案

### 单独处理

单独处理比较简单，就是在参数传递的时候，额外的处理参数形式

```typescript
axios
  .get("https://www.yuque.com/zeffon/blog",{
    params: {
      tags：this.tags
    },
    paramsSerializer: function(params) {
      const tags = params.keys.join(',');
      return `tags=${tags}`;
    }
  }).then((res) => {
});
```

或者

```typescript
axios
  .get("https://www.yuque.com/zeffon/blog",{
    params: {
      tags：this.tags
    },
    paramsSerializer: function(params) {
      const tags = params.tags.map(_=>`tags=${_}`).join('&');
      return `${tags}`;
    }
  }).then((res) => {
});
```

显然，这种方式处理参数的话，每一次遇到这种参数都要额外处理，所以是否有个全局处理的方法。

### **axios** 处理

axios 处理可以在框架上全局处理（这样就需要自己配置 axios）

```typescript
axios.interceptors.request.use((config) => {
 if (config.method === 'get') {
   config.paramsSerializer = function (params) {
     return qs.stringify(params, { arrayFormat: 'indices', allowDots: true })
   }
 }
}
```

或者

```typescript
axios.interceptors.request.use((config) => {
 if (config.method === 'get') {
   config.paramsSerializer = function (params) {
     return qs.stringify(params, { arrayFormat: 'repeat' })
   }
 }
}
```
