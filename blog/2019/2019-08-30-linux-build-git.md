---
slug: install-git
title: 安装Git
authors: zeffon
tags: [git]
date: 2019-08-30
---

一文简单介绍 Git 的安装

<!--truncate-->

## 前言

> **`注`**  yum 源仓库里的 Git 版本更新不及时，最新版本的 Git 是 1.8.3.1，但是官方最新版本已经到了`2+`。想要安装最新版本的的 Git，只能下载源码进行安装。

## 正文

### 安装编译

1. 查看 yum 源仓库 git 信息

```sh
$ yum info git
```

1. 依赖库安装

```sh
$ yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
$ yum install gcc perl-ExtUtils-MakeMaker
```

1. 卸载低版本的 Git

```sh
$ yum remove git
```

1. 下载新版的 Git 源码包

```sh
$ mkdir git # 我放的了 /usr/local/git 的目录下了，git是我自己mkdir的目录
$ cd git
$ wget https://github.com/git/git/archive/v2.9.2.tar.gz
$ tar -xzvf v2.9.2.tar.gz
```

1. 编译安装

```sh
$ cd git-2.9.2
$ make prefix=/usr/local/git all
$ make prefix=/usr/local/git install
```

1. 添加到环境变量

```sh
$ vim ~/.bash_profile  # 如果没有vim，则安装vim工具 yum install vim
export PATH="/usr/local/git/bin:$PATH"
$ source ~/.bash_profile   # 使配置立即生效
$ git --version  # 查看版本号
```

1. 将 git 设置为默认路径(不然后面克隆时会报错)

```sh
$ ln -s /usr/local/git/bin/git-upload-pack /usr/bin/git-upload-pack
$ ln -s /usr/local/git/bin/git-receive-pack /usr/bin/git-receive-pack
```

### 服务配置

1. 设置用户名和邮箱

```sh
$ git config --global user.name '用户名'
$ git config --global user.email '邮箱地址'
$ git config --list # 查看配置项
```

1. 查看是否存在 ssh keys

```sh
$ cd ~/.ssh
$ ls
authorized_keys
```

**没出现`id_rsa 和 id_rsa.pub`,则表示需要创建一个 ssh keys**

1. 创建新的 ssh keys

```sh
$ ssh-keygen -t rsa -C "邮箱"
```

> **`注意`** 如果三次直接回车(`无密码`push 和 pull)，也可以第二次和第三次输入密码（push 和 pull 操作需要`该密码`验证）

1. 测试一下连接

```sh
$ ssh -T -v git@github.com
You've successfully authenticated
```

1. 将`~/.ssh`中公钥`id_rsa.pub`的内容复制到各个平台(如 github、gitee)的上公钥配置，实现`ssh方式`推送代码。
