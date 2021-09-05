---
slug: java-generic
title: Java泛型的运用
authors: zeffon
tags: [java]
date: 2020-09-14
---

Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。**泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。**

<!--truncate-->

## 前言

Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。**泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。**

像 Java、C#这类静态编译型语言在传递参数时，要求参数的`类型是明确`的，不然则会在语法检测阶段就会给出报错提醒。

泛型解决的问题：

1. 参数不安全的问题(引入泛型以后，可以在编译阶段找出代码问题，而不用在运行阶段才发现 bug)
2. 解决重复编码的问题

## 正文

以栈举例，通过简单数据结构来呈现出这其中的不足。

### StackInt 类

- StackInt 类中，有 maxSize 栈容量、items 栈存储的数组、top 栈头指针(从零开始)

```java
public class StackInt {
    private int maxSize;
    private int[] items;
    private int top;
    public StackInt(int maxSize) {
        this.maxSize = maxSize;
        this.items = new int[maxSize];
        this.top = -1;
    }

    public boolean isFull() {
        return this.top == this.maxSize - 1;
    }

    public boolean isNull() {
        return this.top <= -1;
    }

    public boolean push(int value) {
        if(this.isFull()) {
            return false;
        }
        this.items[++this.top] = value;
        return true;
    }

    public int pop() {
        if(this.isNull()) {
            throw new RuntimeException("当前栈中无数据");
        }
        int value = this.items[top];
        --top;
        return value;
    }
}
```

- 进行简单地调用，发现 int 类型没问题，但是其它类型如 String 传参的话就会报错

```java
public class Main {
    public static void main(String[] args) {
        StackInt stackInt = new StackInt(3);
        stackInt.push(7);
        stackInt.push(8);
        int value1 = stackInt.pop();
        int value2 = stackInt.pop();
    }
}
```

> StackInt 太具体了，只能保存 int 类型，无法保存其它类型
> 如果想要保存其它类型，那么需要再写一个类型 Stack 类，这样的话，就会导致重复编码的问题

### StackObject 类

如上所述，StackInt 只能保存 int 类型，无法保存其它类型，但是想要 StackInt 存储任意类型的数据该咋办？
在一切都是对象的 Java 中，对此我们是否利用 Object 来解决这一问题呢？

- 将 StackInt 改造成 StackObject

```java
public class StackObject {

    private int maxSize;
    private Object[] items;
    private int top;

    public StackObject(int maxSize) {
        this.maxSize = maxSize;
        this.items = new Object[maxSize];
        this.top = -1;
    }

    public boolean isFull() {
        return this.top == this.maxSize - 1;
    }

    public boolean isNull() {
        return this.top <= -1;
    }

    public boolean push(int value) {
        if(this.isFull()) {
            return false;
        }
        this.items[++this.top] = value;
        return true;
    }

    public Object pop() {
        if(this.isNull()) {
            throw new RuntimeException("当前栈中无数据");
        }
        Object value = this.items[top];
        --top;
        return value;
    }
}
```

- 使用 Object + 类型转换，看似就可以传入和接收任意类型参数

```java
public class Main {
    public static void main(String[] args) {
        StackObject stackObject = new StackObject(3);
        stackObject.push("abc");
        stackObject.push("8");
        Object value1 = (int) stackObject.pop();
        Object value2 = (String) stackObject.pop();
        int sum = (int) value1 + (int) value2; // 编译阶段不报错，运行阶段才报错
    }
}
```

- 存在的弊端：

1. 装箱拆箱损耗性能
   装箱： `值类型`(int)的数据转换成`包装类型`(Object)的数据，拆箱反之。
2. 写法麻烦，需要强制转型
3. Object 是所有的基类，会抹除具体类型的特点，Object 表示起来太模糊了。
4. Object 是不安全，由于传参不正确会导致在运行阶段才发现 bug。

### StackT 类

StackT 使用泛型会存在一个大问题，泛型是无法直接实例化的。

> 泛型在编译之后泛型 T 就会被擦除,而实例化操作是发生在运行阶段进行的，所以在`程序运行时`无法进行实例化操作，毕竟**泛型相关信息已丢失**。所以 Java`很难`直接实例化或者获取当前泛型真实的类型。而 Java 的实例化对象不一定需要通过`new Object()`的方式, 也可以通过`类的元类`的方式来动态实例化一个对象。

```java
/**
 * 泛型是一种类型的约定。Object太通用了，所以说失去类型的约束，使用泛型可以对类型进行约束。
 * 在普通类后面添加<T>，相当对类型的约定，而T相当是一种类型。
 * T是不确定是什么类型的，是由调用方参入参数时来指定的
 */
public class StackT<T> {

    private int maxSize;
    private T[] items;
    private int top;

    // 在构造函数传入元类来动态地实例化对象
    public StackT(int maxSize, Class<T> clazz) {
        this.maxSize = maxSize;
        this.items = this.createArray(clazz);
        this.top = -1;
    }

    public boolean isFull() {
        return this.top == this.maxSize - 1;
    }

    public boolean isNull() {
        return this.top <= -1;
    }

    public boolean push(T value) {
        if(this.isFull()) {
            return false;
        }
        this.items[++this.top] = value;
        return true;
    }

    public T pop() {
        if(this.isNull()) {
            throw new RuntimeException("当前栈中无数据");
        }
        T value = this.items[top];
        --top;
        return value;
    }

    private T[] createArray(Class<T> clazz) {
        T[] array = (T[])Array.newInstance(clazz, this.maxSize);
        return array;
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        // 泛型在指定类型时，是不能用int基本类型来指定的，只能用Integer包装类型来指定
        // 传入的第二个参数是类的元类
        // 接收时也要用泛型来指定类型，不会让泛型转变成Object，这样就可以在编译阶段就可以发现报错了
        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);

        stackT.push(7);
        stackT.push(8);
        int value1 = stackObject.pop();
        int value2 = stackObject.pop();
        int sum = value1 + value2;
    }
}
```

### 泛型高级应用

#### 泛型方法

泛型类是在普通类后面加上，而泛型方法是在`修饰符`如 public 后面加上空格和 （类一般是用 T 占位，方法则用 E）

#### 泛型传参

把泛型类作为参数进行传递时，如果被调用方不指定泛型类型，则会把传进来的泛型转换成 Object

```java
public class Main {
    public static void main(String[] args) {

        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);
        stackT.push(7);

        StackT<String> stackT1 = new StackT<String>(3, String.class);
        stackT1.push("abc");

        test(stackT);
        test(stackT1);
    }
    // 可以使用StackT，则会把stackT当作Object
    // 如果使用StackT<Integer>或者StackT<String>，那么这样只能传递特点类型
    public static void test(StackT stackT) {
        System.out.println(stackT.pop());
    }
}
```

> 在泛型 StackT 传参过程中，可以使用 StackT 作为参数接收，但会把 stackT 当作 Object，如果使用 StackT 或者 StackT，那么这样只能传递特点类型

#### 泛型通配符

- 无边界通配符
  StackT<?> 是会转成`Object`
- 上边界通配符
  StackT<? extends Number>

```java
public class Main {
    public static void main(String[] args) {

        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);
        stackT.push(7);

        StackT<String> stackT1 = new StackT<String>(3, String.class);
        stackT1.push("abc");

        StackT<Double> stackT2 = new StackT<Double>(3, Double.class);
        stackT1.push(1.01);

        test(stackT);  // 成功
        test(stackT1); // stackT1是字符串 会报错
        test(stackT2); // 成功
    }
    public static void test(StackT<? extends Number> stackT) { // 上边界通配符
        System.out.println(stackT.pop());
    }
}
```

- 下边界通配符
  StackT<? super Integer>

```java
public class Main {
    public static void main(String[] args) {

        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);
        stackT.push(7);

        StackT<Double> stackT1 = new StackT<Double>(3, Double.class);
        stackT1.push(1.01);

        StackT<Object> stackT2 = new StackT<Object>(3, Object.class);

        test(stackT);  // stackT是Integer，作为Number的下级是会报错的
        test(stackT1); // stackT1是Double 会报错
        test(stackT2); // 成功
    }
    // Object -> Number -> Integer
    // 会限定Number自己和上级可以被识别，其它的不可以
    public static void test(StackT<? super Number> stackT) { // 下边界通配符
        System.out.println(stackT.pop());
    }
}
```
