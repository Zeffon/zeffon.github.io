---
slug: linux-environment-variable
title: Linux中的环境变量配置文件
authors: zeffon
tags: [linux]
date: 2019-11-30
---

平时在 linux 上安装一些应用，有时候需要设置环境变量，环境变量按照其作用范围不同大致可以分为系统级环境变量和用户级环境变量。

<!--truncate-->

## 前言

平时在 linux 上安装一些应用，有时候需要设置环境变量，环境变量按照其作用范围不同大致可以分为系统级环境变量和用户级环境变量。

- 系统级环境变量：每一个登录到系统的用户都能够读取到系统级的环境变量；
- 用户级环境变量：每一个登录到系统的用户只能够读取属于自己的用户级的环境变量；

## 正文

### 系统级环境变量

#### 1. /etc/profile

1. 在系统启动后第一个用户登录时运行，并从`/etc/profile.d`目录的配置文件中搜集 shell 的设置，使用该文件配置的环境变量将应用于登录到系统的`每一个用户`。

```
# /etc/profile
#
# System wide environment and startup programs, for login setup
# Functions and aliases go in /etc/bashrc
#
# It's NOT a good idea to change this file unless you know what you
# are doing. It's much better to create a custom.sh shell script in
# /etc/profile.d/ to make custom changes to your environment, as this
# will prevent the need for merging in future updates.
```

2. 在该文件中添加环境变量即可，后使用以下命令可以使配置文件立刻生效。以下都是使用`source`来生效。

```sh
$ source /etc/profile
```

#### 2. /etc/bashrc

1. 在`bash shell`打开时运行，修改该文件配置的环境变量将会影响所有用户使用的`bash shell`。

```
# /etc/bashrc
#
# System wide functions and aliases
# Environment stuff goes in /etc/profile
#
# It's NOT a good idea to change this file unless you know what you
# are doing. It's much better to create a custom.sh shell script in
# /etc/profile.d/ to make custom changes to your environment, as this
# will prevent the need for merging in future updates.
```

1. 这里的 bash shell 有不同的类别，不同的类别所使用的环境变量配置文件也有所不同。一般情况下，非登录 shell 不会执行任何 profile 文件，`非交互shell`模式不会执行任何 bashrc 文件。

> `/etc/bashrc`在 Ubuntu 和 Debian 中是/etc/bash.bashrc

#### 3. /etc/environment

1. 在系统启动时运行，用于配置与系统运行相关但与`用户无关`的环境变量，修改该文件配置的环境变量将`影响全局`。

### 用户级环境变量

> **其中/.bash_profile、/.bash_login、~/.profile 三个文件中往往系统中往往只存在一个，在不同的发行版中不同，如 CentOS 和 RedHat 中是**`**~/.bash_profile**`**，而 Debian 和 Ubunto 等系列中往往是**`**~/.profile**`

#### 1. ~/.bash_profile(建议首选)

1. 每个用户都可使用该文件输入专用于自己使用的 shell 信息,当用户登录时,该文件仅仅执行一次!默认情况下,他设置一些环境变量,执行用户的.bashrc 文件.
2. 此文件类似于/etc/profile，也是需要需要重启才会生效，/etc/profile 对所有用户生效，~/.bash_profile 只对当前用户生效。

#### 2. ~/.profile

1. 当用户登录时执行，`每个用户`都可以使用该文件来配置专属于自己使用的 shell 信息。

#### 3. ~/.bashrc

1. 当用户登录时以及每次打开`新的shell`时该文件都将被读取，不推荐在这里配置用户专用的环境变量，因为每开一个 shell，该文件都会被读取一次，效率肯定受影响。
2. 此文件类似于/etc/bashrc，不需要重启生效，重新打开一个 bash 即可生效， /etc/bashrc 对`所有用户`新打开的 bash 都生效，但~/.bashrc 只对`当前用户`新打开的 bash 生效。

#### 4. ~/.bash_logout

1. 当每次退出系统(退出 bash shell)时执行该文件。

> 注意：Linux 系统使用 $VARIABLE_NAME 访问环境变量，多个环境变量之间使用 “:”分隔，Windows 系统使用 %VARIABLE_NAME% 访问环境变量，多个环境变量之间使用 ; 分隔。

#### 联系

1. ~/.bash_profile 是交互式、login 方式进入 bash 运行的；
2. ~/.bashrc 是交互式 non-login 方式进入 bash 运行的；
3. 通常二者设置大致相同，所以通常前者会调用后者。
4. 设置生效：可以重启生效，也可以使用命令：source

### 执行顺序

一般情况下，Linux 加载环境变量配置文件的执行顺序为：

```
      -------- 登陆 --------
     |                      |
     |                   登陆shell
     |                      |
     |                  /etc/profile
     |                      |
     |                  /etc/profile.d
     |                      |
     |                  ~/.bash_profile
     |                      |
     |                  ~/.bash_login
     |                      |
 ~/.bashrc  <----------  ~/.profile
```

## 参考文献

`**JeanCheng**` [Linux 中 profile、bashrc、/.bash_profile、/.bashrc、~/.bash_profile 之间的区别和联系以及执行顺序](https://blog.csdn.net/gatieme/article/details/45064705)

`**细雨微光**` - [linux 命令（56）：环境变量：/etc/profile、/etc/bashrc 、/.profile、/.bashrc](https://www.cnblogs.com/lovychen/p/10911699.html)
