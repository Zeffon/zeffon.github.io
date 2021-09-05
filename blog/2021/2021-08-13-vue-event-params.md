---
slug: vue-event-params
title: Vue 事件自定参数传递
authors: zeffon
tags: [vue]
date: 2021-08-13
---

在开发 Vue 项目的时候，有时候我们使用一些组件的自定义方法时，比如 **el-input**组件中的 input、focus、change 等事件。我们在监听后是要进行书写自己的方法事件的。简单业务下，我们直接 **@input="inputText"**然后再 methods 中编写对应的方法**inputText(data)**。其中**data**参数是**el-input**组件传递出来的，打印出来的值正是我们在输入框输入的值。

<!--truncate-->

## 常见场景

在开发 Vue 项目的时候，有时候我们使用一些组件的自定义方法时，比如 **el-input**组件中的 input、focus、change 等事件。我们在监听后是要进行书写自己的方法事件的。简单业务下，我们直接 **@input="inputText"**然后再 methods 中编写对应的方法**inputText(data)**。其中 **data**参数是 **el-input**组件传递出来的，打印出来的值正是我们在输入框输入的值。

```html
<template>
  <el-input
    @input="inputText"
    v-model="input"
    placeholder="请输入内容"
  ></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      inputText(data) {
        console.log(data); // 打印出input值的对象
      },
    },
  };
</script>
```

如果我们在 **@input**监听的时候，用 **@input="inputText()"**来接收。这样会导致我们在 **methods**方法实现的时候，获取不到 **input**值。原因是：我们已经重写了 **el-input**抛出来的方法，使得自定义的**inputText()** 方法是一个无参的方法。

```html
<template>
  <el-input
    @input="inputText()"
    v-model="input"
    placeholder="请输入内容"
  ></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      inputText(data) {
        console.log(data); // undefined
      },
    },
  };
</script>
```

以上的场景在使用 **Vue**组件监听事件的时候是很常见的，其实我们只需要在接收监听事件时，不给自定义的方法加上 **()**就能解决了。但是，有时候我们的应用场景是复杂的。刚好需要我们在自定义方法上传递参数。比如传递个 abc，这时候在**inputText()**可以打印出**abc**这个参数来。但是，这样我们就无法在 **inputText()**方法中获取到 **input** 值。

```html
<template>
  <el-input
    @input="inputText('abc')"
    v-model="input"
    placeholder="请输入内容"
  ></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      inputText(data) {
        console.log(data); // 只打印出 abc，无法获取到input的值
      },
    },
  };
</script>
```

## 解决方法

### 传递事件对象

在 Vue 的官方文档中就有提到使用 **$event **来获取监听事件抛出来的参数 -- [使用事件抛出一个值](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)
在 **el-input**组件监听这个 **@input** 事件的时候，我们可以通过 $event 访问到被抛出的这个值。所以，我们可以在此加上自定义的参数进行传递。

```html
<template>
  <el-input
    @input="inputText($event, 'abc')"
    v-model="input"
    placeholder="请输入内容"
  ></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      inputText(e, data) {
        console.log(e); // 打印input的值
        console.log(data); // 打印 abc
      },
    },
  };
</script>
```

### 回调函数

在监听 **@input**事件的时候，使用一个回调函数来接收，获取到 **el-input**组件抛出的参数 **item，**再将参数 **item**传入我们自定的方法 **inputText(item, 'abc')。**在此，我们还将自定的参数 **'abc'**进行传递。这样在实现 **inputText()**方法的时候，就可以接收到 **input**值和自定参数 **'abc'。**

```html
<template>
  <el-input
    @input="
      (item) => {
        inputText(item, 'abc');
      }
    "
    v-model="input"
    placeholder="请输入内容"
  ></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      inputText(data1, data2) {
        console.log(data1); // 打印input的值
        console.log(data2); // 打印 abc
      },
    },
  };
</script>
```
