---
slug: centos7-deploy-flask
title: flask项目在centos7部署流程
authors: zeffon
tags: [flask]
date: 2019-09-01
---

Flask 是一个 web 框架，而非 web server，直接用 Flask 拉起的 web 服务仅限于开发环境使用，生产环境不够稳定，也无法承受大量请求的并发。基于 Flask 开发 API 项目是，部署时用 uwsgi 和 Nginx，是一个很好的选择。

<!--truncate-->

## 前言

Flask 是一个 web 框架，而非 web server，直接用 Flask 拉起的 web 服务仅限于开发环境使用，生产环境不够稳定，也无法承受大量请求的并发。基于 Flask 开发 API 项目是，部署时用 uwsgi 和 Nginx，是一个很好的选择。

## 环境搭建

### Python3 环境

由于 CentOS7 原本就安装了 Python2，而且这个 Python2 不能被删除，因为有很多系统命令，比如 yum 都要用到。所以我们要额外安装 Python3，而且系统一般允许多个版本的 python 同时存在

- 我们先来查看 python 安装位置，一般是位于/usr/bin/python 目录下。

```sh
$ which python
>> /usr/bin/python
```

### 安装 Python3 的方法

1. 安装依赖包（切记安装）

```sh
$ yum -y groupinstall "Development tools"
$ yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
```

1. 下载 Python3 安装包
   大家可根据自己需求下载不同版本的 Python3，我下载的是 Python3.6.2

```sh
$ wget https://www.python.org/ftp/python/3.6.2/Python-3.6.2.tar.xz
```

1. 新建 python3 存放目录

```sh
$ mkdir /usr/local/python3
```

1. 安装 Python3
   解压压缩包，进入解压目录，指定安装目录，安装 Python3。

```sh
$ tar -xvJf  Python-3.6.2.tar.xz
$ cd Python-3.6.2
$ ./configure --prefix=/usr/local/python3
$ make && make install
```

安装 Python3 时，会自动安装 pip。假如没有，需要自己手动安装。

```sh
$ yum -y install python-pip
```

1. 创建软链接

```sh
$ ln -s /usr/local/python3/bin/python3 /usr/bin/python3
$ ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
```

1. 安装完成，输入 python3 测试

```sh
$ python3
Python 3.6.2 (default, Mar  3 2019, 17:47:45)
[GCC 4.8.5 20150623 (Red Hat 4.8.5-36)] on linux
Type "help", "copyright", "credits" or "license" for more information.
```

### pipenv 创建虚拟环境

pipenv 是一个可以在同一计算机中隔离多个 python 版本的工具。有时，两个不同的项目可能需要不同版本的 python，如 python2.7 / python3.6 ，但是如果都装到一起，经常会导致问题。pipenv 能够用于创建独立的 Python 虚拟环境，多个 Python 相互独立，互不影响。
pipenv 这个软件包可以让我们管理虚拟环境变得更加简单。不用再跑到某个目录下通过 pipenv 来创建虚拟环境，并且激活的时候也要跑到具体的目录下去激活。

1. 使用 pip 安装包前，先更新 pip。

```sh
$ pip3 install --upgrade pip
```

1. 安装 pipenv

```sh
$ pip3 install pipenv
```

1. 在项目目录进行虚拟环境搭建
   项目上传到服务器（推荐使用 git 的方式）
   进入项目目录，创建该项目的虚拟环境

```sh
$ pipenv install # 需要进入项目的根目录
```

> `注意` 如果报：`Pipenv: Command Not Found` 的错误用 `$sudo pip install pipenv` 重新安装 pipenv

1. 安装 uwsig
   用 pip 安装 uwsgi 库

```sh
$ pip install uwsgi
```

1. 激活虚拟环境并在项目下新建一个 uwsgi.ini 配置文件

```sh
$ pipenv shell   # 激活虚拟环境
$ touch uwsgi.ini  # 新建文件
$ vi uwsgi.ini   # 写入内容
```

```conf
[uwsgi]
chdir = /home/flask/lesson # manage.py文件所在目录
callable = app # 为你的项目实例命名，flask项目需要这一句
wsgi-file= lesson.py # flask文件名 运行文件
processes = 4 # 进程数
threads = 2 # 线程数
master = true # 开启一个master进程监控项目运行
socket = 127.0.0.1:5000 # uwsgi的端口。要与项目运行的端口一致
# daemonize = /home/flask/lesson/logs/lesson.log
daemonize = /tmp/flask/lesson.log # 日志输出目录
touch-logreopen = /tmp/flask/.touchforlogrotate # 该文件变动时重新指定新的输出流到daemonize
pidfile = uwsgi.pid
```

1. 启动项目

```sh
$ pipenv shell  # 进入项目虚拟环境
$ uwsgi uwsgi.ini # 启动命令（在lesson目录下）
$ ps -ef | grep uwsgi  # 查看进程是否启动成功
```

1. 打开页面地址   服务器 ip:5000 ，看看没有显示

## Nginx 配置

### Nginx 下载

Nginx 不在默认的 yum 源中，可以使用 epel 或者官网的 yum 源，本例使用官网的 yum 源。

1. 添加 nginx 的 yum 源

```sh
$ sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

安装完 yum 源之后，可以查看一下。

```sh
$ sudo yum repolist
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * extras: mirrors.aliyun.com
 * updates: mirrors.aliyun.com
repo id                          repo name                          status
base/7/x86_64                    CentOS-7 - Base                    9,911
extras/7/x86_64                  CentOS-7 - Extras                    368
nginx/x86_64                     nginx repo                           108
updates/7/x86_64                 CentOS-7 - Updates                 1,041
repolist: 11,428
```

可以发现  nginx repo  已经安装到本机了。

1. yum 安装 Nginx

```sh
$ sudo yum install nginx
```

1. 配置 Nginx 服务

```sh
$ sudo systemctl enable nginx # 设置开机启动(两次)
$ sudo systemctl start nginx # 启动服务
$ sudo systemctl stop nginx # 停止服务
$ sudo systemctl reload nginx # 重新加载
```

### nginx 部署项目

1. 进入 nginx 目录

```sh
$ cd /etc/nginx
```

1. 在 conf.d 中创建 lesson.conf

```sh
$ cd conf.d/
$ vi lesson.conf
```

```conf
server {
    # listen 80;
    listen 443;
    ssl on;
    server_name thxycn.xin;
    # 证书.pem的存放地址
    ssl_certificate /etc/nginx/cert/a.pem;
    # 证书.key的存放地址
    ssl_certificate_key /etc/nginx/cert/a.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    
    # 项目根目录 
    root /home/flask/lesson;
    # charset koi8-r;
    # access_log /var/log/nginx/lesson.log main;
	location / {
        include uwsgi_params;
        uwsgi_pass 127.0.0.1:5000;
        root /usr/share/nginx/html;
        index index.html index.htm;
    }
}
server {
    listen 80;
    server_name thxycn.xin;
    rewrite ^/(.*) https://$server_name$request_uri? permanent;
}
```

1. 重启 Nginx

```sh
$ sudo systemctl start nginx # 启动服务
```

## 日志切割

### uwsgi 日志按天切割

1. 指定 touch-logreope 文件
   在[uwsgi.ini]文件中

```conf
daemonize = /tmp/flask/lesson.log # 日志输出目录
touch-logreopen = /tmp/flask/.touchforlogrotate # 该文件变动时重新指定新的输出流到daemonize
```

这里把 uwsgi 的日志放在了/tmp/flask/下，这里有个 trick，既 touch-logreopen 参数监控的文件就是后面要定时执行的 shell 脚本本身。可以精简一个空白文件。

1. 创建一个自动 sh 脚本`touchforlogrotate.sh`放在日志目录`/tmp/flask/`下

```conf
#!/bin/bash
#获取当前目录
DIR=`echo $(cd "$(dirname "$0")"; pwd)`
sourcelogfile="${DIR}/lesson.log"
touchfile="${DIR}/.touchforlogrotate"
DATE=`date -d "yesterday" +"%Y%m%d"`
#重命名后的文件
destlogpath="${DIR}/lesson-${DATE}.log"
mv $sourcelogfile $destlogpath
# 更新文件时间戳
touch $touchfile
```

1. crontab 定时调用

```s
0 0 * * * sh /tmp/flask/touchforlogrotate.sh
```

重启 uwsgi，每天 0 时自动执行时，会把昨天的 lesson-![](https://g.yuque.com/gr/latex?%7BDATE%7D.log%E5%AF%B9%E5%BA%94%E5%88%B0%E6%98%A8%E5%A4%A9%E6%97%A5%E6%9C%9F%E7%9A%84log%E6%96%87%E4%BB%B6%E3%80%82%E9%9A%8F%E7%9D%80%E6%9C%80%E5%90%8E%E8%84%9A%E6%9C%ACtouch%E4%BA%86%E8%87%AA%E5%B7%B1%EF%BC%8C%E4%BB%8A%E5%A4%A9%E5%8F%88%E6%98%AF%E5%85%A8%E6%96%B0%E7%9A%84lesson-#card=math&code=%7BDATE%7D.log%E5%AF%B9%E5%BA%94%E5%88%B0%E6%98%A8%E5%A4%A9%E6%97%A5%E6%9C%9F%E7%9A%84log%E6%96%87%E4%BB%B6%E3%80%82%E9%9A%8F%E7%9D%80%E6%9C%80%E5%90%8E%E8%84%9A%E6%9C%ACtouch%E4%BA%86%E8%87%AA%E5%B7%B1%EF%BC%8C%E4%BB%8A%E5%A4%A9%E5%8F%88%E6%98%AF%E5%85%A8%E6%96%B0%E7%9A%84lesson-){DATE}.log。至此，就可以实现简单的日志按日期分片啦。

1. 重启项目

```sh
$ pipenv shell  # 先进入项目根目录，再进入项目虚拟环境
$ uwsgi uwsgi.ini # 启动命令（在lesson目录下）
$ ps -ef | grep uwsgi  # 查看进程是否启动成功
```
