---
slug: mysql-nested-ifnull
title: MySQL 嵌套 IFNULL 的使用
authors: zeffon
tags: [java]
date: 2020-10-17
---

最近写项目时，遇到两张表中的数据有三种情况的返回值。为了查询速度考虑，写了一种一次查询的 sql 语句。

<!--truncate-->

## 前文

### IFNULL 语法

1. `IFNULL()`函数用于判断第一个表达式是否为**NULL**，如果为**NULL**则返回第二个参数的值，如果不为**NULL**则返回第一个参数的值。
2. 语法格式为：

```sql
IFNULL(expr1, expr2)
```

1. 简单使用的话：

```
mysql> SELECT IFNULL(1, 0)
     > 1

mysql> SELECT IFNULL(0, 2)
     > 0   #是根据是否为null作为判断的

mysql> SELECT IFNULL(1/0, 3)
     > 3.0000  # 1/0在mysql中运算结果为null
```

1. 经过上面简单的使用，大概知道`IFNULL`是怎么样的了。IFNULL(expr1, expr2)中的**expr1 和 expr2**不仅仅可以写数字、表达式、简单 SELECT 语句，还可以写带有`IFNULL`的**SELECT 嵌套语句**。

### IFNULL 嵌套

格式如下：

```sql
SELECT IFNULL(expr1, (SELECT IFNULL(expr2, expr3)))
```

## 正文

### 业务场景

比如有两张数据表，一张 master 表为主表（有 id，uid...），slave 表为从表(有 id, master_id, uid...)，是通过 slave 表中的 master_id 进行关联 master 表的。
这样就好比是拼购下单商品的场景。master 表就好比是订单主表。
如果用户是自己发起拼单的话，会在 master 表中新增一条记录（master 表中有记录订单新建者的字段），并且也会在 slave 生成一条记录；
如果不是自己发起的订单，自己是加入他人的订单，则只会在 slave 中新建一条记录。

### 查询要求

要求根据订单 id 和用户 uid 来查询订单：是用户创建的，还是用户只是加入，或者与用户无关。
如果用户是创建的话返回`3`，如果用户是加入的话返回`2`， 如果跟用户毫无关系的话返回`1`

如果采用单表查询的需要查询两次，然后进行逻辑判断即可。

但是要是采用一次 sql 查询的话，可以通过 IFNULL 来实现。

### IFNULL 写法

查询的订单 id 为 10 用户的 uid 为 199

```sql
SELECT IFNULL(
    (SELECT 3 FROM master_table m WHERE m.id = 10 AND m.uid = 199),
        (SELECT IFNULL((SELECT 2 FROM slave_table s WHERE s.master_id = 10 AND s.uid = 199), 1)
    )
)
```
