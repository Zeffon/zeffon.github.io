---
slug: css3-animation
title: CSS3 动画
authors: zeffon
tags: [css]
date: 2021-11-12 09:00
---

在实现一些 CSS 特效中，比如元素的颜色随着高度而变化，或者是元素实现移动。这些效果都是属于动画效果。而动画效果不但可以给页面增加一些趣味性，还可以给用户视觉上的冲击感。而实现 **CSS 动画**可以采用的是 **CSS3** 中的新属性 [**transform**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)（变形）、[**transition**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)（过渡） 和 [**animation**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)（帧动画）**来实现**。

<!--truncate-->

## CSS3 动画

**CSS3** 动画主要包括 **transition**（过渡） 和 **animation**（帧动画）这两个动画属性。而我们在使用动画属性常常会与 **transform** 属性进行配合使用。

> **注意：transform** 并不是动画属性，只是个静态类，但它会主动开启浏览器的渲染加速（也就是 GPU 的加速），会让动画更加细腻，而且在实现动画的过程中，不会改变原本文档的结构，这样极大优化动画，减少动画的闪现。

1. transition，它是动画属性，主要负责过渡属性的变化
1. animation，它是动画属性，它能实现 transition 无法实现的动画，一上来就能加载动画，而 transition 需触发
1. transform，它不是动画属性，只是个静态类，它经常和动画属性进行配合使用

## transition

**transition** 属性主要负责过渡属性的变化。

> **transition** 属性是 [transition-property](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)，[transition-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)，[transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 和 [transition-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay) 的一个简写属性。

语法如下：
**transition**：<属性名称> <过渡时间> <时间函数> <延迟时间>

多个属性的过渡效果，语法如下：
**transition**：<属性 1> <时间 1> <模式 1>，<属性 2> <时间 2> <模式 2>，...

**transition** 在之前还没被规范时，不同浏览器使用的 **transition** 属性各有不同：

- -webkit-transition chrome 和 safari
- -moz-transition firebox
- -o-transition Opera

**transition** 中 **transition-timing-function** 属性有如下预设值：

- ease 缓慢开始，缓慢结束
- linear 均速
- ease-in 缓慢开始
- ease-out 缓慢结束
- ease-in-out 缓慢开始，缓慢结束（和 ease 稍微有区别）

1. 延迟**1**秒后，**width** 直线均速增至 **1000px**
   :::tip
   注意：**transition** 效果需要文档流中有变化，才会产生对应的效果。
   :::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>延迟1s直线均速变大</title>
  </head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: #000;
      transition: width 2s linear 1s;
    }
    .box:hover {
      width: 1000px;
    }
  </style>
  <body>
    <div class="box"></div>
  </body>
</html>
```

2. 与 [**transform**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform) 搭配使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>慢慢旋转45度，快速复原</title>
  </head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background: #000;
      transition: transform 2s ease-out;
    }
    .box:hover {
      transform: rotate(45deg);
    }
  </style>
  <body>
    <div class="box"></div>
  </body>
</html>
```

:::tip
**注意**：

1. **display** 不能和 **transition** 一起使用（**animation**可以）
1. **transition** 后面尽量不要跟 **all**
1. 页面闪动，我们可以使用 **perspective** 和 **backface-visibility** 属性

:::

## animation

**animation** 主要借助 [**@keyframes**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes) 关键帧实现动画效果，其主要场景适用于：

1. 跑马灯
1. 帧动画
1. 跳动元素...

> **animation** 属性是 [**animation-name**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name), [**animation-duration**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration), [**animation-timing-function**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function), [**animation-delay**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay), [**animation-iteration-count**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count), [**animation-direction**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction),[**animation-fill-mode**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode)和[**animation-play-state**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state) 这 8 个属性的一个简写属性形式。

1. 动画名称（name）-- @keyframes
1. 过渡时间（duration）
1. 时间函数（timing-function）
1. 延迟时间（delay）
1. 播放次数（itera-count）（infinite 无限次）
1. 播放方向（direction）即是否轮流播放和反向播放 （alternate 正向、reverse 反向）
1. 停止播放的状态（fill-mode）（forwards 播放完回到次数的状态）
1. 是否暂停（play-state）（running）

1. 直线均速平移

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>直线均速平移</title>
  </head>
  <style>
    .box .cell {
      width: 200px;
      height: 200px;
      background: red;
    }
    .box:hover .cell {
      animation: move 2s linear;
    }
    @keyframes move {
      100% {
        transform: translateX(200px);
      }
    }
  </style>
  <body>
    <div class="box">
      <div class="cell"></div>
    </div>
  </body>
</html>
```

2. 跳动元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>跳动元素</title>
  </head>
  <style>
    .box .cell {
      width: 100px;
      height: 100px;
      background: black;
      border-radius: 50%;
    }
    .box:hover .cell {
      animation: jump 2s ease-in infinite;
    }
    @keyframes jump {
      0% {
        transform: translateY(0px);
      }
      40% {
        transform: translateY(200px);
      }
      50% {
        transform: translateY(200px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  </style>
  <body>
    <div class="box">
      <div class="cell"></div>
    </div>
  </body>
</html>
```

## 时间函数

### 时间函数的属性

1. 时间函数，管理着动画在单位帧内播放的速度曲线
1. 它是使用的是名为三次贝塞尔函数的数学函数 cubic-bezier(n, n, n, n)
1. 预设值 linear、ease、ease-in、ease-out、ease-in-out

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>跳动的小球</title>
  </head>
  <style>
    .demo-3 .cell {
      width: 100px;
      height: 100px;
      background: black;
      border-radius: 50%;
    }
    .demo-3:hover .cell {
      animation: jump 1s cubic-bezier(0.41, -0.04, 0.93, 0.29) infinite alternate;
    }
    @keyframes jump {
      0% {
        transform: translateY(0px);
      }
      90% {
        transform: translateY(200px);
        clip-path: ellipse(50% 50% at 50% 50%);
      }
      100% {
        transform: translateY(210px);
        clip-path: ellipse(50% 45% at 50% 48%);
      }
    }
  </style>
  <body>
    <div class="box demo-3">
      <div class="cell"></div>
    </div>
  </body>
</html>
```

### 时间函数 - 非线性

Steps 作用的是每个关键帧，而不是整个时间

1. 能够实现动画的阶跃式变化，不是线性的过度
1. Steps(1, start | end)

比如：steps(12, start) 关键帧分为 12 步

![loading.png](./img/11-12-01.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <style>
    .loading {
      width: 115px;
      height: 115px;
      background: url(./img/loading.png) no-repeat;
      border-radius: 50%;
      animation: round 1s steps(16, start) infinite;
    }
    @keyframes round {
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  <body>
    <div class="loading"></div>
  </body>
</html>
```
