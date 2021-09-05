---
slug: java-transaction
title: Java事务传播
authors: zeffon
tags: [java]
date: 2020-02-18
---

记录 7 个 Java 事务传播属性的区别

<!--truncate-->

## 前言

```java
    @Transactional(propagation = Propagation.REQUIRED)
```

在 Java 中与数据层交互时，通常会使用事务，使用`@Transactional`注解的 propagation 用来设置事务的传播行为

事务的传播行为：一个方法运行在了一个开启事务的方法中，当前方法是使用依附的方法事务还是使用自身的事务

> Propagation propagation() default Propagation.REQUIRED; // Propagation 默认使用`REQUIRED`级别

## 正文

事务中常用就两种`REQUIRED`和`SUPPORTS`

### REQUIRED

Propagation propagation() default Propagation.REQUIRED; // Propagation 默认使用`REQUIRED`级别

```java
    @Transactional(propagation = Propagation.REQUIRED)
    // Support a current transaction, create a new one if none exists.
```

1. REQUIRED : 使用当前的事务，如果当前没有事务，则自己新建一个事务，子方法时必须运行在一个事务中的; 如果当前存在事务，则加入这个事务中，成为一个整体。
2. 主要用于：增、删、改操作

### SUPPORTS

```java
    @Transactional(propagation = Propagation.SUPPORTS)
    // Support a current transaction, execute non-transactionally
    // if none exists.
```

1. SUPPORTS : 如果当前有事务，则使用事务，如果当前没有事务，则不使用事务。
2. 主要用于：查操作

### MANDATORY

```java
    @Transactional(propagation = Propagation.MANDATORY)
    // Support a current transaction, throw an exception if none exists.
```

1. MANDATORY : 该传播属性强制必须存在一个事务，如果不存在，则抛出异常

### REQUIRED_NEW

```java
    @Transactional(propagation = Propagation.REQUIRED_NEW)
    // Create a new transaction, and suspend the current transaction
    // if one exists.
```

1. REQUIRED_NEW : 如果当前有事务，则挂起该事务，并且自己创建一个新的事务给自己使用; 如果当前没有事务，则同`REQUIRED`

### NOT_SUPPORTED

```java
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    // Execute non-transactionally, suspend the current transaction
    // if one exists.
```

1. NOT_SUPPORTED : 如果当前有事务，则把事务挂起，自己不使用事务去运行数据操作
2. 主要用于：查操作

### NEVER

```java
    @Transactional(propagation = Propagation.NEVER)
    // Execute non-transactionally, throw an exception
    // if a transaction exists.
```

1. NEVER : 如果当前有事务存在，则抛出异常

### NESTED

```java
    @Transactional(propagation = Propagation.NESTED)
    // Execute within a nested transaction if a current transaction
    // exists, behave like {@code REQUIRED} otherwise.
```

1. NESTED : 如果当前有事务，则开启子事务(嵌套事务)，嵌套事务是独立提交或者回滚; 如果当前没有事务，则同`REQUIRED`。但是如果主事务提交，则会携带子事务一起提交。如果主事务回滚，则子事务一起回滚。相反，子事务异常，则主事务可以回滚或者不回滚(捕捉异常，则不回滚；不捕捉，则回滚)
