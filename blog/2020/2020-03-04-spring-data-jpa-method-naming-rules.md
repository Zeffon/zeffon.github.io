---
slug: spring-data-jpa-method-naming-rules
title: Java JPA 方法命名规则
authors: zeffon
tags: [java]
date: 2020-03-04
---

记录在 SpringBoot 项目使用 JPA 访问数据库数据时，Repository 持久层的方法命名规则

<!--truncate-->

## 前言

Repository 持久层的方法通过方法的命名规则会自动创建出对应的 SQL 语句的，因此使用 JPA 作为数据访问层时，我们可以通过编写对应的方法来获取到数据库的数据，`而不需要编写SQL语句`，相比于 Mybatis，这样简化编码流程，提高了开发效率，但也是有`局限性`的。其无法应对太复杂的 SQL 语句，同时也会造成方法的命名太长而不优雅。但是编写简单的 SQL 时，的确非常有助于我们开发。

## 正文

| 关键字            | 方法命名                    | sql where 字句             |
| ----------------- | --------------------------- | -------------------------- |
| And               | findByNameAndPwd            | where name= ? and pwd =?   |
| Or                | findByNameOrSex             | where name= ? or sex=?     |
| Is,Equals         | findById,findByIdEquals     | where id= ?                |
| Between           | findByIdBetween             | where id between ? and ?   |
| LessThan          | findByIdLessThan            | where id < ?               |
| LessThanEquals    | findByIdLessThanEquals      | where id <= ?              |
| GreaterThan       | findByIdGreaterThan         | where id > ?               |
| GreaterThanEquals | findByIdGreaterThanEquals   | where id > = ?             |
| After             | findByIdAfter               | where id > ?               |
| Before            | findByIdBefore              | where id < ?               |
| IsNull            | findByNameIsNull            | where name is null         |
| isNotNull,NotNull | findByNameNotNull           | where name is not null     |
| Like              | findByNameLike              | where name like ?          |
| NotLike           | findByNameNotLike           | where name not like ?      |
| StartingWith      | findByNameStartingWith      | where name like '?%'       |
| EndingWith        | findByNameEndingWith        | where name like '%?'       |
| Containing        | findByNameContaining        | where name like '%?%'      |
| OrderBy           | findByIdOrderByXDesc        | where id=? order by x desc |
| Not               | findByNameNot               | where name `<>` ?)         |
| In                | findByIdIn(Collection<?> c) | where id in (?)            |
| NotIn             | findByNameNot               | where name `<>` ?)         |
| True              | findByAaaTue                | where aaa = true           |
| False             | findByAaaFalse              | where aaa = false          |
| IgnoreCase        | findByNameIgnoreCase        | where UPPER(name)=UPPER(?) |
| top               | findTop100                  | top 10/where ROWNUM <=10   |
