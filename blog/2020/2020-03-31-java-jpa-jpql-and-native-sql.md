---
slug: java-jpa-jpql-and-native-sql
title: Java JPA 原生SQL和JPQL
authors: zeffon
tags: [java]
date: 2020-03-31
---

记录 Java JPA 使用 jPQL 和原生 SQL 的方式获取数据。

<!--truncate-->

## 前言

SpringBoot 项目中，通常会使用`jpa`或者`mybatis` ORM 框架来作为 Java 持久层。或许我们习惯性地认为 JPA 不能处理复杂的 SQL 语句。
其实这是不太正确地对 JPA 的认识。Java jpa 其实是非常强大的，它是有多种方式操作数据库来获取数据，常见是`Repository持久层的方法命名规则`来获取数据。这种是大家最常见的使用方式，它对于简单的 SQL 语句真的非常方便，面对复杂 SQL 查询可能把写方法名写得很长很不优雅。这时候我们可以采取其他的方式来获取数据--`原生SQL`和`JPQL`。

在 [**spring data jpa 方法命名规则**](https://www.yuque.com/zeffon/blog/pb5eez) 一文中介绍 jpa 方法的命名规则。

## 正文

### 模型关系

有四张数据表：3 张业务表 activity、coupon、category，1 张中间表 coupon_category。对此在 Java 中需要 3 个模型(中间表无业务操作，故不需要建立模型)。

`**Activity**` <--- 一对多 ---> `**Coupon**` <--- 多对多(中间表 coupon_category) ---> `**Category**`

1. 活动模型

```java
@Entity
@Getter
@Setter
public class Activity {
    @Id
    private Long id;
    private String title;
    private String name;
    // 导航属性 1对多关联Coupon模型中的activityId字段
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "activityId")
    private List<Coupon> couponList;
}
```

2. 优惠券模型

```java
@Entity
@Getter
@Setter
public class Coupon {
    @Id
    private Long id;
    private Long activityId;
    private String title;
    private Date startTime;
    private Date endTime;
    // 导航属性 多对多关联Category
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "couponList")
    private List<Category> categoryList;
}
```

2. 分类模型

```java
@Entity
@Setter
@Getter
public class Category {
    @Id
    private Long id;
    private String name;
    // 导航属性 多对多关联Coupon 加入中间表coupon_category，以category_id和coupon_id进行桥接
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "coupon_category",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "coupon_id"))
    private List<Coupon> couponList;
}
```

### 原生 SQL

在方法上打上`@Query`,并且传入`nativeQuery=true`和 `value="sql原生语句"`。

1. 传入参数方式：`cid -> :cid , now -> :now` 也可以`cid -> ?1 , now -> ?2` (比较推荐`前者`，可读性比较高)

```java
    @Query(nativeQuery=true,
            value = "select * from coupon c\n" +
            "join coupon_category cc on c.id = cc.coupon_id\n" +
            "join category ca on ca.id = cc.category_id\n" +
            "join activity a on a.id = c.activity_id\n" +
            "where c.id = :cid\n" +
            "and a.startTime < :now \n" +
            "and a.endTime > :now\n")
    List<Coupon> findByCategory(Long cid, Date now);
```

> `**小技巧**` 编写@Query 注解里面的 SQL 语句时，按住 alt+enter 会弹出选择框，选择`Edit Generic SQL Fragment`选项。随后我们进入一个 SQL 编写的控制面板。在这里是与@Query 注解里面是同步的，有智能提示，回车也方便。

### JPQL

JPQL 全称 Java Persistence Query Language，它是一种查询语言，具有与 SQL 相类似的特征，JPQL 是完全面向对象的，具备继承、多态和关联等特性，和 hibernate 的 HQL 很相似。

1. 由于 JPQL 操作的是模型对象而不再是数据库的表，因此这里的字段属性需要与模型中的字段保持一致

```java
    @Query("SELECT c from Coupon c\n" +
            "join c.categoryList ca\n" +
            "join Activity a on a.id = c.activityId\n" +
            "where ca.id = :cid\n" +
            "and a.startTime < :now \n" +
            "and a.endTime > :now\n")
    List<Coupon> findByCategory(Long cid, Date now);
```

> 由于 Coupon 中有导航属性 categoryList，可以通过模型让 Coupon 与 Category 创建多对多联系。对此在编写 JPQL 时就不要像原生 SQL 语句那样要借助中间表 coupon_category

### 非幂等性操作

首先`JPQL不支持INSERT`，但是 UPDATE,DELETE 操作是支持的。可能是 jpa 的理念就是更加注重别用 SQL 语句
而原生的是可以支持 INSERT,UPDATE,DELETE

1. 加上`@Modifying`注解标注该操作是非查询操作，不然是会报错的。还可以加上事务`@Transactional`注解

```java
    @Transactional
    @Modifying
    @Query("update Activity set\n" +
            "name = :name\n" +
            "where id = :id")
    void updateTitle(Long id, String name);
```
