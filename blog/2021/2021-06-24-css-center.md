---
slug: css-center
title: CSS 居中方法整理
authors: zeffon
tags: [css]
date: 2021-06-24
---

最近学习完 CSS 基础后，发现实现样式居中的效果有很多种。就把一些常用的写法把它们整理一下，方便以后查看阅读。当然，显示居中效果有多种多样，但是，在我们日常开发的时候能将效果实现就好了，至于采用哪种方式这是因人而异。对自己熟悉哪种方法便采用那种方式，这样是比较方便的。

<!--truncate-->

## 水平居中

### 行盒（行块盒）水平居中

直接设置行盒（行块盒）父元素 **text-align: center;**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>行盒（行块盒）水平居中</title>
    <style>
      div {
        margin: 30px;
        background: lightblue;
        height: 100px;
        text-align: center;
      }
      .inline-block {
        display: inline-block;
        width: 300px;
        height: 50px;
        background: red;
      }
    </style>
  </head>
  <body>
    <div>
      <a href="">超链接</a>
    </div>
    <div>
      <span class="inline-block"></span>
    </div>
  </body>
</html>
```

### 常规流块盒水平居中

先定宽，设置左右 **margin **为 **auto**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>常规流块盒水平居中</title>
    <style>
      .container {
        margin: 30px;
        height: 200px;
        background: lightblue;
      }
      p {
        width: 500px;
        height: 100px;
        background: red;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p></p>
    </div>
  </body>
</html>
```

### 绝对定位元素的水平居中

定宽，设置左右的坐标为 0（left：0，right：0），将左右**margin**设置为**auto**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>绝对定位元素的水平居中</title>
    <style>
      .container {
        margin: 30px;
        height: 200px;
        background: lightblue;
        position: relative;
      }
      p {
        width: 500px;
        height: 100px;
        background: red;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p></p>
    </div>
  </body>
</html>
```

> 实际上，固定定位（fixed）是绝对定位（absolute）的特殊情况

### 弹性盒子水平居中

利用 **flex **布局的 **justify-content **属性实现居中效果。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>弹性盒子水平居中</title>
    <style>
      .flex {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .flex-item {
        width: 100px;
        height: 100px;
        background-color: #000;
      }
    </style>
  </head>
  <body>
    <div class="flex">
      <div class="flex-item"></div>
    </div>
  </body>
</html>
```

## 垂直居中

### 单行文本的垂直居中

设置文本所在元素的行高，为整个区域的高度（设置 **line-height = height**）

### 行块盒或块盒内多行文本的垂直居中

这种垂直居中效果是没有完美方案。
但是，可以设置盒子上下内边距相同，达到类似的效果。缺点：无法知道盒子的高度。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>行块盒或块盒内多行文本的垂直居中</title>
    <style>
      div {
        background: lightblue;
        display: inline-block;
        padding: 100px 0;
      }
    </style>
  </head>
  <body>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio
      ad consequuntur voluptas perspiciatis, illo repellat unde facilis
      voluptate pariatur, perferendis suscipit officia, et optio deserunt alias.
      Nostrum facere quidem minima quo rerum enim aliquam est modi eveniet
      explicabo reiciendis quae aperiam, sapiente velit aspernatur harum dolores
      iusto deserunt atque?
    </div>
  </body>
</html>
```

### 绝对定位的垂直居中

定高，设置上下的坐标为 0（top：0，bottom：0），将上下**margin**设置为**auto**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>绝对定位的垂直居中</title>
    <style>
      .container {
        margin: 30px;
        height: 200px;
        background: lightblue;
        position: relative;
      }
      p {
        width: 500px;
        height: 100px;
        background: red;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p></p>
    </div>
  </body>
</html>
```
