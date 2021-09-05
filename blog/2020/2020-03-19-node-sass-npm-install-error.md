---
slug: node-sass-npm-install-error
title: npm安装node-sass的报错
authors: zeffon
tags: [vue]
date: 2020-03-19
---

记录 npm 安装 node-sass 的报错处理

<!--truncate-->

## 前言

昨晚在跑 vue 项目时，由于换了一台 win10 的电脑，竟然报了一些错误。原因由 npm install 中依赖包的`node-sass`模块引起的。
其中有需要 python.exe 环境，node-sass 拉取失败问题。

## 正文

报错分析
第一个是 python.exe，因此我们需要安装 python 环境。注意是需要`python2`的环境，并且需要放在 C 盘根目录

第二个是拉取不下来 node-sass。node-sass 是从 github 拉取的，可能会受网络问题的影响，使用 npm 一直从 github 拉取不下来 node-sass,所以更换了思路使用淘宝镜像来拉取。

### 安装 python2 环境

1. 需要下载 python2 的环境(需要在管理员的 cmd 操作),所以安装 windows-build-tools

```sh
$ npm install --global windows-build-tools
```

1. 安装的 python2 目录是默认在`C:\Users\Admin\.windows-build-tools`目录，需要将他移动放在 C 盘根目录
   因为 npm 拉取时默认读取的是`C:\python2\python.exe`
2. 设置一下 Path 环境变量

### node-sass 拉取失败问题

1. 使用淘宝源拉取 node-sass

```sh
$ npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

### 重启项目

1. 先删除之前安装的依赖包，将项目根目录下的 node-mudules 整个删除
2. 重新安装依赖包

```sh
$ npm install
```

1. 启动项目

```sh
npm run server
```
