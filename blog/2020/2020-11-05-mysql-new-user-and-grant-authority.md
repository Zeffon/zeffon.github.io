---
slug: mysql-new-user-and-grant-authority
title: MySQL 用户管理和权限授予
authors: zeffon
tags: [mysql]
date: 2020-11-05
---

MySQL 用户权限管理是 MySQL 主要功能之一。平时我们新建好的 MySQL 默认使用的是 root 账户。虽然在个人使用的时候很方便，但是这是很不安全的做法。

<!--truncate-->

## 前言

MySQL 用户权限管理是 MySQL 主要功能之一。平时我们新建好的 MySQL 默认使用的是 root 账户。虽然在个人使用的时候很方便，但是这是很不安全的做法。
所以我们需要分用户管理不同数据库。

## 正文

### 用户管理

创建用户是需要用到 mysql 指令的，所以的话就需要进入 mysql 的控制台进行相关的指令操作。

1. 使用默认`root用户`登陆 mysql

```shell
$ mysql -u root -p
$ Enter password:   # 输入mysql的密码
$ mysql>            # 成功进入mysql的控制台
```

1. 创建用户

```shell
mysql> create user 'test123'@'localhost' identified by 'password';  # 创建本地服务器才可访问的
mysql> create user 'test123'@'%' identified by 'password'; # 创建远程可访问的
```

1. 更新权限

```shell
mysql> flush privileges;  # 创建成功后记得更新数据库的权限
```

1. 查看数据库的用户

```shell
mysql> use mysql;
mysql> select host, user from user;
```

1. 删除用户

```shell
mysql> delete from user where user='test123' and host='localhost';
mysql> flush privileges;
```

1. 修改用户密码

```shell
mysql> update mysql.user set password=password('newpassword') where user="test123" and host="%";
mysql> flush privileges;
```

### 授予权限

创建好用户之后，该用户下是没有任何可操作的数据可，所以需要进行相关的授权操作

1. 分配权限

> 命令：grant 权限 on 数据库.数据表 to '用户' @ '主机名' 密码认证;
> 所以当我们要分配所有数据库给用户时，可以采用 `*.*`来代替

```shell
# 指定数据库授权
mysql> grant all privileges on `dbname`.* to 'test123'@'%' identified by 'newpassword';
# 所有数据库授权
mysql> grant all privileges on *.* to 'test123'@'%' identified by 'newpassword';
```

2. 更新权限

```shell
mysql> flush privileges;
```

3. 回收权限

> 命令：revoke 权限 on 数据库.数据表 from '用户'@'主机名';
> 收回某一用户某一张数据表的所有权限

```shell
# 回收test123表的所有权限
mysql> revoke all on *.* from 'test123'@'%';
```
