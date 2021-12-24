---
slug: npm-dependencies
title: npm 依赖管理 dependencies devDependencies
authors: zeffon
tags: [notes]
date: 2021-09-24 10:15
---

在平常导入依赖时，我们大多会使用 **yarn add xxx** 或者 **npm install xxx** 命令。而在使用这些命令时通常都会在后面加上 **-D**、**-S**或者 **--save、--save-dev** 等参数。使用不同参数的结果会导致安装依赖出现在 **package.json 文件**依赖管理中的 **dependencies 、devDependencies** 的不同。

<!--truncate-->

## dependencies

[npm 官方](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies)的字段解释为：

> **Please do not put test harnesses or transpilers or other "development" time tools in your dependencies object.**
> 翻译：在 **dependencies** 里不要存放 测试工具或转译器或其他“开发”时间工具。

也就是说，该字段**dependencies** 里的依赖**原则上**是只能存放一些**编译后，**项目在**生产环境**所使用的依赖。这里很常见的如：react、vue、vue-router、element-ui 等等。这些依赖如果在**生产环境缺少**的话，会导致代码运行不了，项目无法访问。​

## devDependencies

**devDependencies**从字面上顾名思义就是 **dev 开发环境**所使用的依赖存放的地方。像测试工具或转译器或其他“开发”时间工具不允许放在 **dependencies** 里的依赖就可以放在**devDependencies**里。我们很常见比如 eslint、sass、sass-loader、prettier 等等。

## 差异

**dependencies** 和 **devDependencies** 的差异看上去好像就是根据不同类型的依赖，存放位置需要放在对应的**dependencies**或者 **devDependencies**里。

可是，如果我识别不出该依赖的类型放错位置怎么办？会出现代码报错吗？
其实是**不会的**，我们平常的项目开发中，不规范的引入依赖并不会产生因依赖位置存放问题而产生的错误。

那么问题来了，**dependencies** 和 **devDependencies** 为什么需要这样设计根据依赖类型规定来存放。其实官方给出了答案：

> If someone is planning on downloading and using your module in their program, then they probably don't want or need to download and build the external test or documentation framework that you use.
> In this case, it's best to map these additional items in a devDependencies object.
> 翻译：如果有人计划在他们的程序中下载和使用您的模块，那么他们可能不想或不需要下载和构建您使用的外部测试或文档框架。
> 在这种情况下，最好将这些附加项映射到 **devDependencies** 对象中。

也就是说，其实如果项目只是自己使用，编译后运行的服务器上。这种项目的依赖存放的位置是可以不用按照规定来的。无论存放在 **dependencies** 或者 **devDependencies**，项目都可以正常的运行，编译。

**但是**，如果我们的项目会打包成类库给他人使用时，就必须按照规定来做。因为他们的程序在下载和使用我们的项目模块（打包成类库，也就是依赖）时，**npm 只会**帮助他们程序加载我们项目中 **dependencies** 的依赖，不会加载 **devDependencies** 的依赖。毕竟他们的项目中可能已经使用我们使用过像测试工具或转译器或其他“开发”时间工具这些依赖了，已经不需要再从我们的项目中再次加载。这样只能导致他们的项目变得臃肿。

所以，我们在开发类库的时候需要额外注意 **dependencies** 和 **devDependencies** 的依赖，平常的项目也要正确的书写依赖正确的位置。

## peerDependencies

除了 **dependencies** 和 **devDependencies** 这两个常用的字段， **peerDependencies** 字段也在**类库项目**中使用。

> In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a require of this host. This is usually referred to as a _plugin_. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.
> 翻译：在某些情况下，您希望表达您的包与主机工具或库的兼容性，而不必要求该主机。这通常称为插件。值得注意的是，您的模块可能会公开主机文档所预期和指定的特定接口。

看上去也不知道啥意思，那就先举个例子吧！

1. 现在我使用 **vue3** 版本是 **^3.0.11** 写了一个插件，打包成类库给其他人使用

```json
{
  "name": "vue-auto-logout",
  "version": "1.0.0",
  "dependencies": {
    "vue": "^3.0.11"
  }
}
```

2. 现在别人在项目使用的时候，也是 **vue** 项目，但是版本跟我的不一样。那这样导入我的依赖的时候，也会将我的项目 **dependencies vue** **再次**加载进他们的项目中。这样就会出现我的包与他们的包 **两者不兼容** 或者是 **两者共存多余** 的情况。

3. 为了让库的依赖尽可能少，可以使用 **peerDependencies**

如果别人已经在项目中加载的**vue**依赖，与我们的不同，版本可能是 **3.0.0**。但是 node_modules 已经有 vue
的依赖包后，**peerDependencies vue** 的 **^3.0.11**，就不会再次进行导入了。而是选择他们的 **vue **依赖版本。
如果别人没有在项目中加载的**vue**依赖，也就是 node_modules 没有 vue 版本的依赖包，那么我们项目中的
**peerDependencies vue** 的 **^3.0.11** 就会进行导入该依赖。

```json
{
  "name": "vue-auto-logout",
  "version": "1.0.0",
  "peerDependencies": {
    "vue": "^3.0.11"
  }
}
```
