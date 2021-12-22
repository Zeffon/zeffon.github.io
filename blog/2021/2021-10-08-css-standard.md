---
slug: css-standard
title: CSS 书写规范
authors: zeffon
tags: [css]
date: 2021-10-08 10:28
---

在上文《[CSS 方法论](https://www.yuque.com/zeffon/blog/css-methodologies)》中，介绍了四种常见的方法论，但是在实际开发是很难完全落实某一方法论的约定的。所以我在实际开发的需要中，根据 CSS 方法论中 **BEM** + **SMACSS** 这两种方法论的结合命名约定总结出自己的一套 CSS 书写规范。

> 该 CSS 书写规范只是提供大致的规范准则及理论知识，在实际项目中应考虑具体情况而作出调整。

<!--truncate-->

## 规范规则

### 命名规范说明

1. 所有的样式命名都是**小写**，且采用驼峰式命名
1. 使用类选择器，不使用 ID 选择器
1. 命名缩写除了能一看就明白的单词外如 nav、btn 等等，其它不常见的不建议缩写
1. 数值中为 0 时的单位，如 0px、0em 等，统一缩写为 0
1. 为了防止后代选择器污染，尽量采用后代选择器 `>` 方式
1. 属性值可以简写应进行简写，如 padding、margin、background 等
1. 前缀来区分布局、模块、状态和主题，"g-"用作全局通用、"m-"用作通用模块、"is-"用作状态、"theme-"用作主题
1. 样式属性顺序：定位布局类属性，盒模型等自身属性，文本类及修饰类属性
1. 样式命名方式：采用**BEM**的约定方式，块-块\_\_元素，块-块\_\_元素--修饰符

### 样式属性顺序

1. 定位布局类属性：position、z-index、left、right、top、bottom、clip 等
1. 模型自身属性：width、height、min-height、max-height、min-width、max-width 等
1. 文本类及修饰类属性：color、font-size、text-align、text-align、vertical-align、text-wrap、text-transform、text-indent、text-decoration、letter-spacing、word-spacing、white-space、text-overflow 等
1. 背景相关的属性：background、border 等
1. css3 中属性：animation、transition、transform、box-shadow、border-radius 等
   > 其实这种采用一些插件都可以实现属性顺序自动排序，如 vscode 中 csscomb 插件

### CSS 布局样式命名

```
wrap ------------------ 用于最外层
header ---------------- 用于头部
main ------------------ 用于主体内容（中部）
main-left ------------- 左侧布局
main-right ------------ 右侧布局
nav ------------------- 网页菜单导航条
content --------------- 用于网页中部主体
footer ---------------- 用于底部
```

### CSS 全局状态样式命名

```html
is-select -------------------- 选中 is-open ---------------------- 打开 is-close
--------------------- 关闭 is-active -------------------- 激活 is-disable
------------------- 禁用 is-fixed --------------------- 固定
```

### CSS 编程语言选择

CSS 编程语言统一选择 SCSS。

## CSS 文件划分及功能分类

### CSS 文件划分

一般会对 CSS 进行文件划分，根据文件的性质与用途，大概会分成：

- **公共型样式**
- **特殊型样式**
- **皮肤型样式**

1. 公共型样式可命名为 **global.css** 或 **common.css** 等名字，主要包括网站通用样式编写，例如：重置默认样式、网站通用布局、通用模块和元件、通用响应式系统等。

```
/* 重置样式 */ 省略css代码...
/* 网站通用布局 */ 省略css代码...
/* 通用模块 */ 省略css代码...
/* 通用元件 */ 省略css代码...
/* 通用响应式系统 */ 省略css代码...
```

2. 特殊型样式主要是根据当前页面来决定的文件，只针对当前页面做出特殊处理的样式，例如只在首页中用到的样式可放置到 **index.css** 中，在登录页中用到的样式可放置到 **login.css** 中。

3. 皮肤型样式是针对网站需要皮肤功能时，把颜色、背景等抽离出来放到文件中的形式，例如 theme-pink.css、theme-skyblue.css 等。

   CSS 文件的引入顺序如下：

```html
<link href="assets/css/global.css" rel="stylesheet" type="text/css" />
<link href="assets/css/index.css" rel="stylesheet" type="text/css" />
<link href="assets/css/theme.css" rel="stylesheet" type="text/css" />
```

### CSS 功能分类

上面提到了公共型样式，大概可分为如下几类：

- **重置样式**
- **通用布局（g-）**
- **通用模块（m-）**
- **通用元件（u-）**
- **通用响应式系统**

1. 重置样式主要是去除默认样式和统一不同设备下的表现形态。

[reset.css.txt](https://www.yuque.com/attachments/yuque/0/2021/txt/656137/1633573819601-7b9673ad-22f6-43bf-9db4-b450b261adb5.txt?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Ftxt%2F656137%2F1633573819601-7b9673ad-22f6-43bf-9db4-b450b261adb5.txt%22%2C%22name%22%3A%22reset.css.txt%22%2C%22size%22%3A3448%2C%22type%22%3A%22text%2Fplain%22%2C%22ext%22%3A%22txt%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22ue566490d-2421-45ba-b362-eb3573fb5b7%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u20aa51d3%22%2C%22card%22%3A%22file%22%7D)

2. 网站通用布局主要指的是对网站中出现的大块结构进行排版。如：PC 端中的菜单、内容的左右布局方案；移动端中的头部、列表、尾部的上中下布局方案等。
3. 通用模块指的是网页中可以重复使用的较大的整体，比如导航、登录、注册、各种列表、评论、搜索等。
4. 通用元件指的是不可再分的较为小巧的个体，通常被重复用于各种模块中，比如按钮、输入框、loading、图标等。
5. 通用响应式系统指的是在不同设备下要实现响应式布局，当满足了某个断点设定后调用的相应变化样式，比如浮动添加、栅格生效、显示隐藏、版心宽度等。
