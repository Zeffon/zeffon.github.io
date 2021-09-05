---
slug: install-redis
title: Redis的使用
authors: zeffon
tags: [redis]
date: 2019-09-12
---

Redis 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

<!--truncate-->

## 前言

Redis 是一个使用 ANSI C 编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。

## 正文

### 安装包安装

在[Redis](https://redis.io/)官网，下载 Redis 安装包，当前最新版本[5.0.5](http://download.redis.io/releases/redis-5.0.5.tar.gz)。安装 Redis 需要先提前安装好 gcc 相关的包。
如果不需要太高的版本，5.x.x+版本也可以了。这里就使用 5.0.5 演示。

1. 验证 linux 中是否已安装 redis (下面这种情况是已安装的)

```sh
$ whereis redis-cli
redis-cli: /usr/local/bin/redis-cli
$ whereis redis-server
redis-server: /usr/local/bin/redis-server
```

1. 安装 gcc

```sh
$ yum install -y open-ssl-devel gcc glibc gcc-c*
```

1. 安装包下载

```java
$ wget http://download.redis.io/releases/redis-5.0.5.tar.gz
```

1. 解压安装包

```java
$ tar xzf redis-5.0.5.tar.gz
```

1. 移动到 local 目录下并进入该目录

```bash
$ mv redis-5.0.5 /usr/local/redis
$ cd /usr/local/redis
```

1. 编译安装

```bash
$ make
$ make install
```

1. 添加 redis 到命令到全局变量，方便在任何目录执行；

```bash
$ vi /etc/profile
export PATH="$PATH:/usr/local/redis/bin"
```

### 运行使用

1. 服务端启动 redis 服务器，命令如下，指定配置文件：

```bash
$ redis-server /usr/local/redis/src/redis.conf
```

1. 客户端启动

```bash
$ ./redis-cli  -h 127.0.0.1  -p 6379 -n 2  -a test123
-h  指定远程登陆ip
-p  指定远程redis访问端口
-n  指定库b编号
-a  指定密码
```

1. 关闭 redis 服务

```bash
$ ps -ef | grep redis
root     29185     1  0 09:58 ?        00:00:00 redis-server 0.0.0.0:6379
root     29190 29159  0 09:58 pts/0    00:00:00 grep --color=auto redis
$ kill -9 29185
```

### redis 配置参数

```shell
1. Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程
daemonize yes

2. 指定Redis监听端口，默认端口为6379
port 6379

3.当客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能
timeout 300

4. 设置Redis连接密码，默认关闭
requirepass password

5. 在logfile中配置日志文件路径。
logfile "/usr/local/redis/log/redis.log"

6. 设置数据库的数量，默认数据库为0，可以使用SELECT <dbid>命令在连接上指定数据库id
databases 1
```

### 解决无法连接问题

- 先修改`redis.conf`的配置内容
  设置禁用模式为`no`和设置`密码`

```bash
a>protected-mode no
b>requirepass password
c>注释bind:127.0.0.1(或者修改为bind 0.0.0.0 ->>代表允许任意ip的请求)
d>重新启动：./src/redis-server redis.conf
```
