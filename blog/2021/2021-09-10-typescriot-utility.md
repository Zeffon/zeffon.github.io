---
slug: typescriot-utility
title: TypeScript 中 Utility Types 的应用
authors: zeffon
tags: [ts]
date: 2021-09-10 10:00
---

一文介绍 `TypeScript`中 **Utility** 常见的类型使用。

<!--truncate-->

## interface 接口

在使用 **TypeScript**泛型的时候，很多时候我们大多使用采用 **interface**接口形式的类型。它能使用 **implements** 和 **extends**，使用起来是十分方便的。

```typescript
interface Person {
  name: string;
  age: number;
  height: number;
  weight: number;
  birthday: string;
}
```

而使用这种 **interface** 形式大多时候是参数固定情况使用的。但是，有时候我们在运用类型时，是不需要其他的类型。比如不需要 **age** 类型，虽然我们可以将其设置为可选类型，但是 **Person** 在修饰其他变量可能是必选，那么这样也是不能很准确地表达。
还有，如果我们使用的 **Person interface**接口不是自己定义的，而是其他组件的 **interface** 接口。那么我们肯定是不能侵入式地去修改 **age**为可选或者是删除掉。这样的话，就说明出 **interface** 接口在一定是上还是有些不灵活。这时候，**新建** 一个使用**类型别名**修饰简单的**对象**来代替 **Person** 接口。

## 类型别名

类型别名在本质上跟 **interface** 接口很相似，都是对变量进行修饰。**TypeScript** 提供了为类型注解设置别名的便捷语法，可以使用 **type 变量名 = 类型** 来创建别名：

```typescript
type StrOrNum = string | number;
type Title = string | { title: string };
type NumArr = [number, number];
type Callback = (data: string) => void;
```

以上是类型别名的简单运用，看上去似乎并没有比 **interface** 好用。但是 类型别名可以搭配**联合类型**和**交叉类型**进行应用。比如：

```typescript
interface Person {
	name: string
  age: number
  ...
}
// 比如我们需要知道小明的姓名和年龄，不太确认其他属性时
// 就可以借助 Partial将Person的属性变为可选，写上除了name和age的属性也不会报错
const UnknownPerson: Partial<Person> = {
  name: 'xiaoming',
  age: 18
}

// 如果我们只需要小明的姓名，其他属性都不需要，加上其他属性会报错
const OnlyNamePerson: Pick<Person, 'name'> = {
  name: 'xiaoming'
}
```

> **utility type** 的用法： 用泛型给它传入一个其它类型，然后** utility type **对这个类型进行某种操作

## 常用 Utility Types

### Partial 源码解析

**Partial** 作用是: 将类型定义的所有属性都修改为可选。

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
// T 是我们传入的类型
// {[P in keyof T]?: T[P];} 是返回后的类型
// [P in keyof T] 就是遍历传入类型的所有key，而 T[P] 当然是值value(也就是string、number...)
// 加上了?: [P in keyof T]?: T[P] 这样意味着返回出去的属性都是可选的

// 例子
// keyof操作符作用： 将修饰的类型的key全部取出来，联合在一起组成新的类型
type Person = {
  name: string;
  age: number;
};
type PersonKeys = keyof Person;
// PersonKeys 的类型就是 "name" | "age"
```

### Pick 源码解析

从类型定义的属性 T 中，选取指定一组属性 K，返回一个新的类型定义。

```javascript
type Pick<T, K extends keyof T> = {
	[P in K]: T[P];
}
// 传入两个参数，第二个参数K 必须是第一个参数T的子集
// [P in K] 就是遍历第二参数K中类型的key， T[P] 取到对应的value

// 例子
type Person = {
	name: string
  age: number
  ...
}
type PersonOnlyName = Pick<Person, 'name'> // PersonOnlyName只剩下name类型
```

### Omit 源码解析

**Omit** 作用是: 从类型定义的属性 T 中，删除指定的属性（可用 | 来连接多个需要删除的属性）

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type Exclude<T, U> = T extends U ? never : T;
// 这两个参数T、U接收的是联合类型，两者会进行比较，如果是参数T的类型中含有参数U的类型，则never掉
// 达到删除类型的效果，如果没有则返回T剩下的联合类型

// 例子
type PersonKeys = keyof Person;
type Age = Exclude<PersonKeys, "name">; // 将类型key中过滤掉name类型，只剩下age类型

// Omit 操作的是键值对，Exclude操作的是联合类型
```
