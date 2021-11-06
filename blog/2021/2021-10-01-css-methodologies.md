---
slug: css-methodologies
title: CSS 方法论
authors: zeffon
tags: [css]
date: 2021-10-01 08:40
---

一个前端项目中，CSS 实现各种样式效果并不困难。但在后期维护中，CSS 不规范的书写或者是杂乱命名之类却经常让我们厌恶，从而重新书写自己的样式。因此，CSS 规范书写对于前端项目是至关重要的。它这样不仅可以让我们写出优雅的代码，也方便他人阅读和维护。
本文内容学于 **《前端躬行记》-** [**CSS 方法论**](https://www.kancloud.cn/pwstrick/fe-questions/1627447)，由此将其记录在此，方便阅读和查看。

<!--truncate-->

## 前言

首先我们先来理解一下什么是 CSS 方法论呢？
方法论是一个哲学术语，会对一系列具体的方法进行分析研究、系统总结并最终提出较为一般性的原则。CSS 方法论是一种面向 CSS、由个人和组织设计、已被诸多项目检验且公认有效的最佳实践。这些方法论都会涉及结构化的命名约定，并且在组织 CSS 时可提供相应的指南，从而提升代码的性能、可读性以及可维护性。
根据编写 CSS 样式所遇到的问题而总结出来的方法论有：

- OOCSS
- BEM
- SMACSS
- Atomic CSS

## OOCSS

> [OOCSS](http://oocss.org/)（Object-Oriented CSS）是指面向对象的 CSS，由**Nicole Sullivan**在 2009 年提出，借鉴了**面向对象编程**的抽象思维。其核心概念是采用**模块化**的实现方式，将 CSS 分解成**可复用**和**继承**的**对象**，也就是**将关注点从页面转移到页面内的组件**。OOCSS 包含两条核心原则，如下所列，每条原则下都给出了相应的示例。

1. **结构**与**皮肤**分离，即不要将位置、尺寸等结构属性和字体、颜色等皮肤属性写在一个选择器中。

```html
<style>
  .col {
    float: left;
    width: 200px;
  }
  .line {
    background: #f60;
  }
</style>
<div class="line col"></div>
```

2. **内容**与**容器**分离，即让对象的行为可预测，避免对位置的依赖，子元素即使离开了容器也应该能正确显示。

```html
<style>
  .line {
    background: #f60;
  }
  .unit {
    width: 50%;
  }
</style>
<div class="line">
  <div class="unit"></div>
</div>
```

**1）命名约定**
在**OOCSS**中，类名既要能传递对象的用途，也要有通用性，例如 mod、complex、pop 等。如果将 CSS 类命名的太语义化，例如 navigation-bar，那么就会将其限制在导航栏，无法应用到网页的其它位置。
**2）缺点**
OOCSS 的缺点也很明显，如下所列。

1. 虽然样式的粒度变小了，但同时会产生许多充满类的 HTML 元素。
1. 在避免特殊性冲突时，OOCSS 选择的方案是放弃层叠，这样就无法最大程度地利用关系选择器的优势。
1. 为了让类能更通用，在命名时就得弱化语义。

## BEM

[BEM](http://getbem.com/)（Block Element Modifier）是指块级元素修饰符，也是在 2009 年提出，起源于 Yandex（俄语版的 Google）。BEM 分为三部分：

1. 块（Block）是一个独立实体，最高级抽象，相当于 OOCSS 中的对象，例如菜单、文本框等。
1. 元素（Element）是块的组成部分，被包含在块中，无法自成一体，例如菜单项、标题等。
1. 修饰符（Modifier）是块或元素的状态，可更改它们的外观或行为，例如高亮、选中等。
   **1）命名约定**
   BEM 中的块、元素和修饰符需要全部小写，名称中的单词用连字符（-）分隔，元素由双下划线（**）分隔，修饰符由双连字符（--）分隔。注意，块和元素都既不能是 HTML 元素名或 ID，也不依赖其它块或元素。
   在下面的示例中，.form 是块，.form**input 和.form**submit 是其元素，.form--theme-xmas 是其修饰符，而.form**submit--disabled 是.form\_\_submit 的修饰符。

```html
<style>
  .form {
  }
  .form--theme-xmas {
  }
  .form__input {
  }
  .form__submit {
  }
  .form__submit--disabled {
  }
</style>
<form class="form form--theme-xmas">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

BEM 的核心思想就是用这种命名约定来清晰的表达出类的含义以及与其它类之间的关系。
**2）缺点**
BEM 的缺点如下所列。

1. BEM 与 OOCSS 一样，也抛弃了层叠，因此也不能完全挖掘出关系选择器的潜力。
1. CSS 类名可能会比较长而且复杂。
1. 需要完善规则说明文档，否则 HTML 结构将难以阅读。

## SMACSS

[SMACSS](http://smacss.com/)（Scalable and Modular Architecture for CSS）是指可伸缩及模块化的 CSS 架构，由 Jonathan Snook 在 2011 年雅虎工作时提出。他在 OOCSS 和 BEM 的基础上添加了五种类别的组件的处理规则，具体如下所列。

1. 基础（Base）是为 HTML 元素定义默认样式，可以包含属性、伪类等选择器。
1. 布局（Layout）会将页面分为几部分，可作为高级容器包含一个或多个模块，例如左右分栏、栅格系统等。
1. 模块（Module）又名对象或块，是可重用的模块化部分，例如导航栏、产品列表等。
1. 状态（State）描述的是任一模块或布局在特定状态下的外观，例如隐藏、激活等。
1. 主题（Theme）也就是换肤，描述了页面的外观，它可修改前面四个类别的样式，例如链接颜色、布局方式等。

​

**1）命名约定**
推荐使用前缀来区分布局、模块、状态和主题，如下所列。

1. "l-" 或 "layout-"用作布局的前缀，例如.l-inline、.layout-grid 等。
1. "m-"或模块自身的命名用作其前缀，例如.m-profile、.m-field 等。
1. "is-"用作状态的前缀，例如.is-collapsed、.is-active 等。
1. "theme-"用作主题的前缀，例如.theme-a-background、.theme-l-grid 等。
   **注意，由于基础规则是直接作用于元素的，因此不需要前缀。**
   ​

**2）共享**
在实际工作中，不需要局限于某一个 CSS 方法论，很多时候可以结合使用，共享模块化 CSS 的规则。例如遵循 OOCSS 的第一条分离原则，BEM 的命名约定，以及 SMACSS 的分类前缀，具体如下所列。

1. 基础仍旧沿用 SMACSS 的规则，布局和模块使用 SMACSS 的前缀。
1. 子元素用双下划线（\_\_）分隔，其状态前缀沿用"is-"。
1. 修饰符也以"is-"为前缀，与模块组合时用双连字符（--）分隔。
1. 适当层叠，最好保持在一层。
   在下面的示例中，.m-notice**img 和.m-notice**content 是模块的子元素，.is-important 是子元素 h6 的状态，.m-notice--is-active 是模块的修饰符。

```html
<style>
  .l-notice {
  }
  .m-notice {
  }
  .m-notice--is-active {
  }
  .m-notice__img {
  }
  .m-notice__content h6 {
  }
  .is-important {
  }
</style>
<div class="m-notice l-notice">
  <img class="m-notice__img" />
  <div class="m-notice__content">
    <h6>......</h6>
    <h6 class="is-important">......</h6>
  </div>
</div>
```

## Atomic CSS

Atomic CSS 是由**Yahoo**的 Thierry Koblentz 在他的 2013 年论文“[具有挑战性 CSS 最佳实践](http://www.smashingmagazine.com/2013/10/21/challenging-css-best-practices-atomic-approach/)”中进行了命名和解释。
Atomic CSS 主要是想要解决大型项目中，CSS 存在的问题：

1. CSS class 命名使用的冲突问题
1. stylesheet 过于臃肿的问题

​

Atomic CSS 规定每个类都与一种特定的样式相关联。也就是说在大多数情况下，所有 CSS 类都有一个唯一的 CSS 规则。这样就可以规避上述的 CSS 问题。
​

**1）使用规则**
用海量的实用工具类（utility classes）组成的样式表：

```html
.Bfc { overflow: hidden; zoom: 1; } .M-10 { margin: 10px; } .Fl-start { float:
left; } .Mend-10 { margin-right: 10px; } .Fz-s { font-size: smaller; } .F-bold {
font-weight: bold; } ...
```

这样就可以在编写 html 代码时直接使用：

```html
<div class="Fz-s M-10 F-bold">我是标题</div>
```

如果我们想要修改样式，不需要修改 css 中代码，而是直接修改 html 的 css 类名。

**2）缺点**
Atomic CSS 的缺点如下所列。

1. 唯一的 CSS 类名规则会造成 html 代码臃肿
1. 使用 Atomic CSS 需要提前开发一个实用的原子样式表，一定上增加开发难度的系数
1. 如果使用他人的原子样式表或者多人开发，这些也会有学习成本和开发阻碍
