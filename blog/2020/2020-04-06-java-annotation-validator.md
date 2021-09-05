---
slug: java-annotation-validator
title: Java 注解检验器
authors: zeffon
tags: [java]
date: 2020-04-06
---

平时在写参数校验可能大多会在 service 层使用 if 语句的方式来判断，其实我们可以很优雅的使用参数校验--注解检验器

<!--truncate-->

## 前言

平时在写参数校验可能大多会在 service 层使用 if 语句的方式来判断，其实我们可以很优雅的使用参数校验--注解检验器。
注解验证器是通过注解的方式给一些字段、方法、类加上了注解，不同的注解有着不同的校验，这样能帮助我们更优雅的写出代码来，可读性也是不错。

## 正文

### JSR-303

JSR-303 提供一个验证标准 Validation，我们会常常使用到的：

1. `@Min`和`@Max` 最小和最大数限制
2. `@Positive` 整数校验
3. `@NotBlank` 校验字符串非空，长度大于 0
4. `@Email` 邮箱校验
5. `@Range` 范围校验
6. `@Lenght` 长度校验
7. `@NotNull` 不为空检验
8. `@Future` 必须是将来日期校验
   ... ...

### 简单字段校验

**JSR-303**的注解用在简单字段上，如要求 id 为整数，最大不可超过 10

```java
@RestController
@RequestMapping("/hello")
public class Hello() {
    @GetMapping("")
    public void hello(@Positive @Max(value=10, message="不用超过10咯") Integer id) {
        System.out.println(id);
    }
}
```

**但是这样是不能开启验证的，我们需要的类上加上注解**`**@Validated**`**才能使注解验证生效。**（还可以自定义错误消息）

```java
@RestController
@RequestMapping("/hello")
@Validated // 这里加上 @Validated
public class Hello() {
    @GetMapping("")
    public void hello(@Positive @Max(value=10, message="不用超过10咯") Integer id) {
        System.out.println(id);
    }
}
```

### Body 校验

有时候我们需要校验 body 里面的参数校验

```java
@RestController
@RequestMapping("/hello")
@Validated
public class Hello {
    @PostMapping("")
    public void say(@RequestBody Person person) {
        System.out.println(person.age);
    }
}

@Getter
@Setter
pubilc class Person {
    @Lenght(min=2, max=10, message="别超出范围")
    private String name;

    private Integer age;
}
```

这时候还是不能校验 body 里面的参数，原因是校验没有生效。类上的`@Validated`是给该类下字段开启校验的，而我们要校验的 age 是在 Person 类下，那我们需要跑到 Person 类打上注解吗？并不需要, 只需要在对应传入参数打上就行了

```java
@RestController
@RequestMapping("/hello")
@Validated
public class Hello {
    @PostMapping("")
    public void say(@RequestBody @Validated Person person) { // 这里加上 @Validated
        System.out.println(person.age);
    }
}
```

### 级联校验

有时候传入的 body 对象又包含了对象，那这时候又如何校验呢？

```java
@RestController
@RequestMapping("/hello")
@Validated
public class Hello {
    @PostMapping("")
    public void say(@RequestBody Person person) {
        System.out.println(person.age);
    }
}

@Getter
@Setter
pubilc class Person {
    @Lenght(min=2, max=10, message="别超出范围")
    private String name;

    private Integer age;

    private Car car;
}

@Getter
@Setter
pubilc class Car {
    @Lenght(min=2, max=10, message="别超出范围")
    private String name;
}
```

那显然对 Car 类的 name 校验是没有成功，其没有生效。需要在 Person 类下 car 字段上打上`@Valid` **标志级联检验**

```java
@Getter
@Setter
pubilc class Person {
    @Lenght(min=2, max=10, message="别超出范围")
    private String name;

    private Integer age;
    @Valid // 这里加上 @Valid
    private Car car;
}
```

> `@Validated`和`@Valid`
> 这两个都是可以用来校验的，使用的场景和功能上有点区别，但是总体上是差不多的，两者都可以用来开启校验。`@Valid`是 Java 提供的一种标准，而`@Validated`是 Spring 对`@Valid`的扩展，所以说两者是很相似的。一般会使用`@Validated`来开启验证，而`@Valid`则用在级联检验上

### 自定义校验注解

1. 编写注解类

```java
@Documented // 注解里的注释加入文档
@Retention(RetentionPolicy.RUNTIME) // 注解保留到运行阶段
@Target({ElementType.TYPE, ElementType.FIELD}) // 目标使用类上和方法上
@Constraint(validatedBy = PasswordValidator.class) // 关联逻辑类，编写具体逻辑判断（没有指定的话会报HV000030错）
public @interface PasswordEqual {

    int min() default 4;

    int max() default 6;

    String message() default "password are not equal";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```

2. 关联注解类(具体判断逻辑)

```java
/**
 * 需要实现ConstraintValidator并需要两个参数
 * 第一个参数是指定注解类 第二个参数：自定义注解修饰的目标的类型
 * 需要覆盖两个方法initialize()和isValid()
 */
public class PasswordValidator implements ConstraintValidator<PasswordEqual, PersonDTO> {
    private int min;
    private int max;

    @Override
    public void initialize(PasswordEqual constrainAnnotation) {
        this.min = constrainAnnotation.min();
        this.max = constrainAnnotation.max();
    }

    @Override
    public boolean isValid(PersonDTO personDTO, ConstraintValidatorContext constraintValidatorContext) {
        String password1 = personDTO.getPassword1();
        String password2 = personDTO.getPassword2();
        boolean match = password1.equals(password2);
        return match;
    }
}
```

3. 使用在需要校验的类上

```java
@Builder
@Getter
@PasswordEqual(min=1) // 这里使用
public class PersonDTO {

    private String password1;
    private String password2;
}
```

### 相关异常

#### HV000030

HV000030: No validator could be found for type
原因是注解类 PasswordEqual 没有与关联类 PasswordValidator，

```java
@Constraint(validatedBy = PasswordValidator.class)
```

#### HV000028

HV000028: Unexpected exception during isValid call
原因是 PasswordValidator 的方法 isValid 出现异常了，具体报错需要打断点分析即可。

```java
    @Override
    public boolean isValid(PersonDTO personDTO, ConstraintValidatorContext constraintValidatorContext) {
        String password1 = personDTO.getPassword1();
        String password2 = personDTO.getPassword2();
        boolean match = password1.equals(password2);
        return match;
    }
```
