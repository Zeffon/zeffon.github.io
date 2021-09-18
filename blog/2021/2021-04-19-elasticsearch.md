---
slug: elasticsearch
title: ES数据库的使用
authors: zeffon
tags: [java, database]
date: 2021-04-19 10:00
---

一文介绍**elasticsearch**的安装过程以及简单使用。

<!--truncate-->

## 下载安装

可以在[es 官网](https://www.elastic.co/guide/cn/elasticsearch/guide/current/running-elasticsearch.html)进行下载，以 7.11.1-linux 为例

```bash
$ tar -zxvf elasticsearch-7.11.1-linux-x86_64.tar.gz
$ mv elasticsearch-7.11.1 /usr/local/es
$ cd /usr/local/es
# 创建data目录存放数据
$ mkdir data
```

## 修改配置

在 es 目录下有 config 配置目录，核心配置文件**elasticsearch.yml**和**jvm.options**

### elasticsearch.yml

```bash
$ cd ./config
$ vim elasticsearch.yml

# 集群和节点(也可以默认)
cluster.name: my-es
node.name: es-node0

# 数据和日志
path.data: /usr/local/es/data
path.logs: /usr/local/es/logs

# 网络和端口
network.host: 0.0.0.0
http.port: 9200

# 发现节点
cluster.initial_master_nodes: ["es-node0"]
```

### jvm.options

```bash
vim jvm.options

# 修改堆内存大小(足够内存可以不修改)
-Xms256m
-Xmx256m
```

## 创建 ES 用户

es 数据库不能由 root 用户启动，所以需要新建用户进行启动。

```bash
$ whoami
root
# 添加用户
$ useradd esuser
$ cd /usr/local/es
# 给esuser权限
$ chown -R esuser:esuser /usr/local/es
# 切换角色启动es
$ su esuser
# 运行会报错
$ ./bin/elasticsearch
```

> [1]: max file descriptor [4096] for elasticsearch process is too low, increase to at least [65535] > [2]: max number of threads [3756] for user [esuser] is too low, ubcrease to at least [4096] > [3]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262114]

## 解决报错

```bash
# 切换root用户进行修改
$ su root
$ vim /etc/security/limits.conf
# 添加下列配置
* soft nofile 65536
* hard nofile 131072
* soft nproc 2048
* hard nproc 4096

$ vim /etc/sysctl.conf
# 加大max_map_count值
vm.max_map_count=266145
# 刷新配置
$ sysctl -p
# 后台启动
$ /usr/local/es/bin/elasticsearch -d
```

## 安装 es-head 插件

使用可视化工具 elasticsearch-head 操作 es 数据库，具体可在[Github 官网](https://github.com/mobz/elasticsearch-head)查看，使用浏览器插件比较方便。

## 建立 Ik 中文分词器

中文分词器[**elasticsearch-analysis-ik**](https://github.com/medcl/elasticsearch-analysis-ik)，下载对应版本的压缩包(zip)，上传至服务器

```bash
# 解压压缩包至es插件目录plugins/ik目录下
$ unzip elasticsearch-analysis-ik-7.11.1.zip -d /usr/local/es/plugins/ik
# 重启es数据库即可
```
