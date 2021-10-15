---
slug: browser-storage
title: 浏览器缓存的差异
authors: zeffon
tags: [notes]
date: 2021-10-15 10:08
---

平时在开发Web页面的时候，借助于浏览器的缓存来储存数据是很常见的。但是，浏览器缓存有三种，分别是 **Cookie**，**Local Storage**，**Session Storage**。三者是有所区别的，所以我们需要对这三者有深刻的认识。这样在开发的时候才能正确地选择我们需要的缓存类型。

<!--truncate-->

## 对比
| 特性 | Cookie | Local Storage | Session Storage |
| --- | --- | --- | --- |
| 生命周期 | 一般有服务器生成的数值，可设置失效时间。在浏览器生成的Cookie，在浏览器的关闭会被清除。 | 该缓存值不会过期，只能手动清除。 | 该缓存值只有在当前的会话下存在，关闭页面或者浏览器会被清除。 |
| 数据大小 | 4k左右 | 一般为5MB | 一般为5MB |
| 与服务端通信 | 每次请求都会携带在HTTP | 只存在浏览器,不参与服务端通信 | 只存在浏览器,不参与服务端通信 |
| 使用场景 | 数据量小, 保存周期短的数据。比如token值 | 该数据只能手动清除 , 所以不要保存比较重要的数据。适合缓存一些公开数据。 | 相比Cookie的缓存空间比较大 , 也缓存一些保存周期短的数据 , 比如编辑表单时数据。 |

## API
### Cookie

- 原生的API并不友好,兼容性也差
- 推荐第三方API [js-cookie](https://github.com/js-cookie/js-cookie)
### Local Storage

- 可以使用原生API [Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 
- 也可以使用第三方API (更多类型存储)
   1. [vue-ls](https://github.com/RobinCK/vue-ls)
   1. [storage ](https://github.com/ustbhuangyi/storage)
### Session Storage

-  可以使用原生API [Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)
- 也可以使用第三方API
   1. [storage ](https://github.com/ustbhuangyi/storage)(更多类型存储)
