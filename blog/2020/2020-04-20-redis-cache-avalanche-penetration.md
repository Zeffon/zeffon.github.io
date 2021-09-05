---
slug: redis-cache-avalanche-penetration
title: Redis缓存雪崩和穿透
authors: zeffon
tags: [redis]
date: 2020-04-20
---

在使用 redis 作为缓存层时，有时候不好的程序设计会导致 Redis 缓存雪崩和穿透问题。

<!--truncate-->

## 前言

## 正文

### 缓存雪崩

`**雪崩**` ：Redis 中有大量的 key，会设置过期时间。如果过期时间有太多重合的，那么在某个时间点会有大量`key失效了`或是由于`Redis宕机`了
恰好这时候有很大很大的流量流入进来。那么这个时候所有的请求不会再`经过Redis缓存层`，而是都会直接打在数据库上，数据库可能会处理不过来导致`宕机崩溃`。

原本是会经过缓冲层
![20-aualanche-01.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610715020118-145dbfb1-a3ae-4156-97d4-22df2898ea68.png#height=198&id=rOHbn&margin=%5Bobject%20Object%5D&name=20-aualanche-01.png&originHeight=198&originWidth=525&originalType=binary&ratio=1&size=27941&status=done&style=none&width=525)
由于缓存失效或者宕机
![20-aualanche-02.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610715069242-9ae5ed0e-6820-44fd-881f-e043a6f6be73.png#height=204&id=Eixvi&margin=%5Bobject%20Object%5D&name=20-aualanche-02.png&originHeight=204&originWidth=528&originalType=binary&ratio=1&size=29230&status=done&style=none&width=528)
请求直接访问 Mysql
![20-aualanche-03.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610715078503-80200c8b-f0e2-422e-84ed-c1a972cb6485.png#height=187&id=mvCrn&margin=%5Bobject%20Object%5D&name=20-aualanche-03.png&originHeight=187&originWidth=532&originalType=binary&ratio=1&size=37714&status=done&style=none&width=532)

`**预防方案**` ：

1. 采用 Key 永不过期机制
2. 采用 key 过期时间错开(推荐)
3. 多缓存结合使用

### 缓存穿透

`**穿透**` ： 接受一个 id，先从 redis 查询有没有对应值，没有再从数据中查询，查询结果进行判断，`有数据`才将其写进 redis 里。下次再查询就不要查询数据库了，而 redis 起了一个缓存的作用。但是这种情况只适合`id是存在数据库`。如果用户传入一个非法、数据库不存在的 id，那么一直使用该 id 请求的话，程序就会一直访问数据库，这样无法缓存了，直接把缓存穿透了。

`**处理方案**` ：不管数据库查询的结果有没有数据，都将其进行缓存。把空的数据(空字符串、空对象、空数组、空列表)缓存起来。（就是针对一个不存在的 key 去为它设置一个空值，即使后面我们可能会使用这个不存在的 key 时，set 时也会把之前的空值覆盖的）

`**布隆过滤器**` ： 可以迅速地判断一个元素是否在一个集合里，相当一种拦截器，是在 redis 前面进行拦截。以 HashMap 的 Key-Value 的形式可以在 O(1) 的时间复杂度内返回结果，效率奇高。但是存储容量占比高，数据量太多时会占据内存并且有 1%误判率的缺点。

### 区别

`缓存穿透`是`单个key`的大量请求打在数据库上，`缓存雪崩`是`大量key`失效导致大量请求直接打在数据库
