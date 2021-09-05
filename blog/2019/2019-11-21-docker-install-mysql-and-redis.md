---
slug: docker-install-mysql-and-redis
title: Docker安装Mysql和Redis
authors: zeffon
tags: [docker, redis, mysql]
date: 2019-11-21
---

Docker 安装 Mysql 和 Redis

<!--truncate-->

## Docker 安装

请观看之前的博客内容 Docker 安装教程

## 应用安装

### 安装 Mysql

#### 安装 mysql 5.7 版本

1. 拉取镜像

```sh
$ docker pull mysql:5.7
```

1. 新建需要`挂载`文件夹

```
$ mkdir /docker-data/mysql/data
$ mkdir /docker-data/mysql/conf.d
```

1. 在`conf.d`目录创建 my.cnf

```
$ vi my.cnf
[mysqld]
skip-grant-tables
# skip-grant-tables作为启动参数的作用：MYSQL服务器不加载权限判断，任何用户都能访问数据库。
default-time_zone = '+8:00'
# 设置北京时区
```

1. 运行并挂载在本机

```sh
$ docker run --name mysql5.7 -p 3306:3306 \
--restart=always --privileged=true \
-v /docker-data/mysql/data:/var/lib/mysql \
-v /docker-data/mysql/conf.d:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```

1. 修改密码为空

```sh
$ docker exec -it CONTAINER ID bash
$ mysql -uroot -p
# 不用输密码直接回车，进入mysql命令
mysql> use mysql
mysql> select user,authentication_string,host from user; # 查看账号、密码、可连接的host
mysql> update user set authentication_string='' where user='root';  #修改密码
mysql> flush privileges;  #刷新权限
```

```
> mysql> select user,authentication_string,host from user; # 查看账号、密码、可连接的host
> root需要有两个host -- localhost、% 并且密码不为空，没有 % 的话无法外网访问
> mysql> CREATE USER 'root'@'%' IDENTIFIED BY '123456'; # 没有的话进行新建
```

1. 注释掉`my.cnf`中，文件中的`skip-grant-tables`，重启`mysql`服务

```sh
$ docker ps
$ docker stop CONTAINER ID
$ docker start CONTAINER ID
```

1. 修改 root 密码

```sh
mysql> use mysql
mysql> alter user 'root'@'localhost' IDENTIFIED BY '123456';
mysql> alter user 'root'@'%' IDENTIFIED BY '123456';
mysql> flush privileges;
```

#### 安装 mysql 8 版本

**`步骤与mysql 5.7的流程相似`**

1. 拉取镜像

```sh
$ docker pull mysql:latest
```

1. 新建需要`挂载`文件夹

```sh
$ mkdir /docker-data/mysql8/data
$ mkdir /docker-data/mysql8/conf.d
```

1. 在`conf.d`目录创建 my.cnf

```sh
$ vi my.cnf
[mysqld]
skip-grant-tables
default-time_zone = '+8:00'
```

1. 运行并挂载在本机

```sh
$ docker run --name mysql8 -p 3306:3306 \
-v /docker-data/mysql8/data:/var/lib/mysql \
-v /docker-data/mysql8/conf.d:/etc/mysql/conf.d \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

1. 修改密码为空

```sh
$ docker exec -it CONTAINER ID bash
$ mysql -uroot -p
# 不用输密码直接回车，进入mysql命令
mysql> use mysql
mysql> select user,authentication_string,host from user; # 查看账号、密码、可连接的host
mysql> update user set authentication_string='' where user='root';  #修改密码
mysql> flush privileges;  #刷新权限
```

1. 注释掉`my.cnf`中，文件中的`skip-grant-tables`，重启`mysql`服务

```sh
$ docker ps
$ docker stop CONTAINER ID
$ docker start CONTAINER ID
```

```
> MYSQL 8.0内新增加`mysql_native_password`函数，通过更改这个函数密码来进行`远程连接`。
> mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
> 没有 `root - %` 添加即可。
> mysql> CREATE USER 'root'@'%' IDENTIFIED BY '123456';
```

1. 修改 root 密码

```sh
mysql> use mysql
mysql> alter user 'root'@'localhost' IDENTIFIED BY '123456';
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
mysql> flush privileges;
```

### 安装 redis

1. 拉取官方的 redis 镜像指定版本

```sh
$ docker pull redis:5.0.5
```

1. 修改启动默认配置，官方 [redis.conf](http://download.redis.io/redis-stable/redis.conf) 配置文件
   **`注意需要修改四个地方：`**

```sh
bind 127.0.0.1 #注释掉这部分，用来限制redis只能本地访问
protected-mode no #默认yes表示开启保护模式，用来限制redis只能本地访问
appendonly yes #持久化
requirepass password #密码
```

1. 新建文件夹用于`redis`外部挂载

```sh
$ mkdir /docker-data/redis/data
$ mkdir /docker-data/redis/conf
```

1. 启动 redis

```sh
$ docker run --name my-redis -d -p 6379:6379 \
--restart=always --privileged=true \
-v /docker-data/redis/conf/redis.conf:/etc/redis/redis.conf \
-v /docker-data/redis/data:/data \
redis:5.0.5 redis-server /etc/redis/redis.conf
```

1. 查看 redis 是否正常启动，如果没有问题就可以使用`远程`连接 redis

```sh
$ docker ps
```
