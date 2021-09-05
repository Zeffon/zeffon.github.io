---
slug: centos7-install-mysql
title: CentOS7安装mysql
authors: zeffon
tags: [database]
date: 2020-03-07
---

最近在腾讯云新弄了一台云服务器(CentOS 7)，记录在上面普通安装 Mysql 服务的过程。

<!--truncate-->

## 前言

最近在腾讯云新弄了一台云服务器(CentOS 7)，记录在上面普通安装 Mysql 服务的过程。
本教程适合在 CentOS 7 上安装 mysql5.7 以上的版本，如果需要安装 Mysql5.6 以下版本可以参考[官网教程](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/)
在之前博客中有记录使用 docker 的安装教程[Docker 安装 Mysql 和 Redis](https://www.yuque.com/zeffon/blog/cvudeh)

{% meting "390345" "netease" "song" "theme:#555" "mutex:true" "listmaxheight:340px" "preload:auto" %}

## 正文

### 添加 MySQL Yum 存储库

1. 第一种方法：在`MySQL` [Yum 存储库](https://dev.mysql.com/downloads/repo/yum/)选择并下载适用于你平台的发行包

![07-01-yum-list.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610715239882-fad4b22b-c6b2-4d62-b777-c7442b7ed9d3.png#align=left&display=inline&height=539&margin=%5Bobject%20Object%5D&name=07-01-yum-list.png&originHeight=539&originWidth=819&size=62615&status=done&style=none&width=819)

2. 第二种方法：使用`wget`直接下载指定版本(这里指定下载 5.7 版本)

```sh
$ wget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm
```

### 安装 yum 发行包

1. 使用以下命令安装下载的发行包，并替换`platform-and-version-specific-package-name`为下载的包的名称

```sh
$ rpm -Uvh platform-and-version-specific-package-name.rpm
```

1. 例如，这里下载的发行包是`mysql57-community-release-el7-10.noarch.rpm`

```sh
$ rpm -Uvh mysql57-community-release-el7-10.noarch.rpm
```

### 安装 MySQL

1. 通过以下命令安装 MySQL(安装过程比较久，需要慢慢等待)

```sh
$ yum install mysql-community-server
```

### 启动 MySQL

1. 使用命令启动 Mysql

```sh
$ systemctl start mysqld.service
或者
$ service mysqld start
```

1. 检查是否成功启动

```sh
$ systemctl status mysqld.service
或者
$ service mysqld status
```

> 如果控制台输出如下面图片一样，则启动成功

> ![07-02-mysql-status.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610715252190-f0cd0601-6b83-472d-9e93-b2b1528dec70.png#align=left&display=inline&height=230&margin=%5Bobject%20Object%5D&name=07-02-mysql-status.png&originHeight=230&originWidth=968&size=27086&status=done&style=none&width=968)

### 修改密码

1. 默认创建 'root'@'localhost' 一个超级用户帐户。设置超级用户的密码并将其存储在错误日志文件中。要显示它，请使用以下命令：

```sh
$ grep 'temporary password' /var/log/mysqld.log
```

1. 通过使用生成的临时密码登录并尽快为超级用户帐户设置自定义密码，以更改 root 密码：

```sh
$ mysql -uroot -p
$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'yourPassword!';
```

> MySQL 的 validate_password 插件默认安装。这将要求密码至少包含一个大写字母，一个小写字母，一位数字和一个特殊字符，并且密码总长度至少为 8 个字符。

### 远程 ip 登录

1. 需要将 localhost 改为%,让外网能访问

```sh
$ GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'yourPassword' WITH GRANT OPTION;
```

1. 刷新权限

```sh
$ FLUSH  PRIVILEGES;
```

## 文献参考

[使用 MySQL Yum 存储库的快速指南](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/)
