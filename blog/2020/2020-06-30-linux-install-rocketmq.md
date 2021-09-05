---
slug: linux-install-rocketmq
title: Linux 安装 RocketMQ
authors: zeffon
tags: [linux, mq]
date: 2020-06-30
---

在 Linux 系统或者其它系统安装消息中间件 RocketMQ

<!--truncate-->

## 前文

作为`阿里`开源的消息中间件 RocketMQ（捐献给了`Apache社区`）是一款非常不错的中间件，主要用于`异步、解耦、削峰`的应用场景。
RocketMQ 由`Java`开发的，当时的应用场景时双十一抢购，所以在吞吐量方面是可以达到`10万+`级别的。
基于分布式架构，它的可用性是相当可靠的。同时，它还提供了`定时推送`的功能,这个是其它中间件的`延迟推送`无法相比。

可以进入 RocketMQ[官方文档](http://rocketmq.apache.org/docs/quick-start/)查看相关的介绍以及安装教程。

## 正文

### 下载 RocketMQ 的压缩包

可以选择最新版的版本进行下载（这里以最新版本[4.7.1](https://mirror.bit.edu.cn/apache/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip)为例）

### 解压压缩包

```
$ unzip rocketmq-all-4.7.1-source-release.zip
```

### 进入目录，指定 Java 环境

```
$ cd rocketmq-all-4.7.1/
$ mvn -Prelease-all -DskipTests clean install -U
```

或者在文件中手动设置 jdk 环境，在 runserver.sh 文件中 JAVA_HOME 上面添加一行

```
JAVA_HOME=你的jdk安装目录
```

### 启动 Name Server

```
$ cd distribution/target/rocketmq-4.7.1/rocketmq-4.7.1  # 进入目录
$ nohup sh bin/mqnamesrv &  # 后台启动
$ tail -f ~/logs/rocketmqlogs/namesrv.log  # 打印日志
```

### 启动 Start Broker

```
$ nohup sh bin/mqbroker -n localhost:9876 &
$ tail -f ~/logs/rocketmqlogs/broker.log  # 打印日志
```

### 进行测试

1. 可以先设置环境变量`NAMESRV_ADDR`

```
$ export NAMESRV_ADDR=localhost:9876
```

1. 模拟生产者进行生成数据

```
$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

1. 模拟消费者进行消费数据

```
$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```

### 关闭 RocketMQ

```
$ sh bin/mqshutdown broker  # 关闭 broker
$ sh bin/mqshutdown namesrv  # 关闭 namesrv
```
