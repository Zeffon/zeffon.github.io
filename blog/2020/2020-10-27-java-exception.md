---
slug: java-exception
title: Java 异常
authors: zeffon
tags: [java]
date: 2020-10-27
---

写一文章简单地回顾对 Java 异常的认识

<!--truncate-->

## 正文

### 异常的分类

在 Java 所有的异常类中，有一个`基类Throwable`。大部分的异常类都是继承自该类的。
Java 异常是可以分成两大类：一种是**Error**, 另一种是**Exception**

### Error 和 Exception

Error 其实在严格上并不算是一种异常，而算是一种错误。字如其名，可以称作是错误。
而 Exception 才算是一种异常。就如我们常见的`空指针异常`或者是`1除以0`的异常。主要是由于我们自身的代码引起的问题。

那什么是错误呢？
所谓的错误是指你的应用程序`根本启动不起来`，它通常来讲是发生在`操作系统层面`或者`JVM虚拟机`方面的错误。一旦它发生后，你的应用程序根本就运行不起来了。所以一般来说 Error 是不能通过我们的代码能解决的。而异常是可以通过我们的`代码来解决`的。

### Exception

Exception 可以分成`CheckedException`和`RuntimeException`

#### CheckedException

必须要求我们在代码里进行处理，如果我们不处理`CheckedException`的话，我们的应用程序是无法通过编译阶段的。

```java
public class TestException {
    public void test1() {
        System.out.println("test exception");
        throw new Exception("this is a error");
    }
}
```

就如上面代码，如果我们不在`test1()`方法上显示抛出 throws `Exception`（将异常抛给调用方进行处理，不在本方法来处理），那么 IDEA 就会给我提示红色警告。这个就是不处理`CheckedException`的结果。
或者我们不将异常直接抛出去，而是选择在`test1()`方法内进行`try...catch`捕捉异常，这时候我们有两种方式来处理我们捕捉到的异常：

1. 选择记录日志的方式处理异常问题
2. 将异常信息直接返回回去

#### RuntimeException

RuntimeException 是运行时异常
这种异常是指并不一定在编译阶段就能发现异常，它也不要求你强制进行处理。

```java
public class TestException {
    public void test1() {
        System.out.println("test exception");
        throw new RuntimeException("this is a error");
    }
}
```

将之前的代码`throw new Exception("this is a error");`改为`throw new RuntimeException("this is a error");`。我们会发现即使我们不在`test1()`方法上使用**throws Exception**或者没有在`test1()`方法内进行`try...catch`捕捉异常，IDEA 也不会给我们进行报错。甚至它还会提示 throws 是多余的。所以`RuntimeException`是不强制我们处理异常的。

#### 总结

`CheckedException`算是一种分类来着吧，其实是`Exception`. 检查型异常
`RuntimeException`是有一个实际类，它继承自`Exception`.   运行时异常

1. 检查型异常
   这种类型的异常是难以避免的，所以是必须要进行`tr...catch`进行处理的。编译器会帮助我们进行检查，一旦我们没有进行处理（throws 或者 try...catch）。编译器便会在编译前给我们提示报错。需要进行处理才能通过编译。
2. 运行时异常
   这种类型的异常是可以避免的。既然是可以避免的话，那我们就可以不用进行处理。但是，有时候我们是很难发现这类异常，不能将它避免开的。可编译器以为我们能避免这异常，它就不会帮助我们进行检查，所以也不会在编译阶段提示报错。但是，我们代码运行至此时，这时候异常就发生了。那就 GG 了...

### 异常处理

有时候我们在处理异常时，自定义异常`HttpException`是该继承自`RuntimeException`还是`Exception`？
其实如果当我们使用`@ControllerAdvice`和`@ExceptionHandler`全局来统一的处理异常时，我们继承哪一个异常类都没有关系的，因为最后都会汇总到`@ControllerAdvice`类下来处理。
如果没有全局异常类来处理的话，而我们`大多自定义的异常`是处理`与数据库增删改查操作`的异常，使用`RuntimeException`会比较好一点。因为我们不能因为数据库的`数据查询或者访问权限不足`而在编译阶段进行异常处理，而这种应该是`运行时异常`。
