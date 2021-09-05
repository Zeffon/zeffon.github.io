---
slug: nginx-configuration-file
title: nginx.conf 配置文件
authors: zeffon
tags: [nginx]
date: 2020-05-04
---

Nginx 的核心配置文件 nginx.conf 的配置结构和指令语法

<!--truncate-->

## 前文

想要使用好 Nginx，绕不开其核心配置文件的熟练掌握，以下主要是 nginx.conf 的配置结构和相关的指令语法
![04-01-nginx.conf.png](./img/05/04-01-nginx.conf.png)

## 正文

### main 全局配置

main 配置影响 nginx 全局的指令。
一般有运行 nginx 服务器的用户组、允许运行的工作进行数 worker process、nginx 进程 pid 存放路径、日志存放路径，配置文件引入等。

1. 设置 work 进程的用户，指的是 linux 中的用户，会涉及到 nginx 操作目录或文件的一些权限，默认是`nobody`

```sh
user root
```

1. work 工作进程数设置，一般来说 CPU 有几个，就设置几个，或者设置 N-1 也可以

```sh
worker_processes 1;
```

1. 设置 nginx 进程 pid

```sh
pid logs/nginx.pid
```

1. nginx 日志级别(级别从左到右越来越大)
   debug -> info -> notice -> warn -> error -> crit -> alert -> emerg
2. nginx 日志存放路径设置

```sh
error_log  logs/error.log;
```

### events 工作模式配置

配置影响 nginx 服务器或与用户的网络连接。
有每个工作进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。

```conf
events {
    # 默认使用epoll（多路复用）
    use epoll;
    # 每个work工作进行允许连接的客户端最大连接数
    worker_connections 10240;
}
```

### http 指令块配置

http 是指令块，针对 http 网络传输的一些指令配置
在 http 模块中可以嵌套多个 server，配置相关代理、设置缓存、自定义日志（日志切割）等绝大多数功能和第三方模块的配置。
如外部配置文件引入、日志自定义、是否使用 sendfile 传输文件、连接超时时间、gzip 压缩等。

1. 引入外部配置文件，提高可读性，避免单个文件配置过大

```sh
include /usr/local/nginx/conf/vhosts/*.conf;
```

1. 自定义日志
   |参数名|参数意义|
   | :----: | :----: |
   |![](https://g.yuque.com/gr/latex?romote_addr%7C%E5%AE%A2%E6%88%B7%E7%AB%AFip%7C%0A%7C#card=math&code=romote_addr%7C%E5%AE%A2%E6%88%B7%E7%AB%AFip%7C%0A%7C&id=sDli3)romote_user|远程客户端用户名，一般为"-"|
   |![](https://g.yuque.com/gr/latex?time_local%7C%E6%97%B6%E9%97%B4%E4%B8%8E%E6%97%B6%E5%8C%BA%7C%0A%7C#card=math&code=time_local%7C%E6%97%B6%E9%97%B4%E4%B8%8E%E6%97%B6%E5%8C%BA%7C%0A%7C&id=efPHL)request|请求 url 与 method|
   |![](https://g.yuque.com/gr/latex?status%7C%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81%7C%0A%7C#card=math&code=status%7C%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81%7C%0A%7C&id=V240c)body_bytes_send|响应客户端内容字节数|
   |![](https://g.yuque.com/gr/latex?http_referer%7C%E8%AE%B0%E5%BD%95%E7%94%A8%E6%88%B7%E4%BB%8E%E5%93%AA%E4%B8%AA%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%BF%87%E6%9D%A5%E7%9A%84%7C%0A%7C#card=math&code=http_referer%7C%E8%AE%B0%E5%BD%95%E7%94%A8%E6%88%B7%E4%BB%8E%E5%93%AA%E4%B8%AA%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%BF%87%E6%9D%A5%E7%9A%84%7C%0A%7C&id=K5CAh)http_user_agent|用户所使用的代理，一般都是浏览器|
   |$http_x_forwarded_for|通过代理服务器来记录客户端的 ip|
2. sendfile 使用高效文件传输，提升传输性能。启用后才能使用 tcp_nopush,是指当数据表累计一定大小才发送，提高效率

```conf
sendfile      on;
tcp_nopush    on;
```

1. keepalive_timeout 设置客户端与服务端请求的超时时间，保证客户端多次请求的时候不会重复建立新的连接，节约资源损耗

```conf
keepalive_timeout 65;
```

1. gzip 启用压缩，html/js/css 等静态资源压缩后传输会更快

```shell
gzip on;
```

### server 模块配置

#### location 路由规则

server 可以在 http 指令块中设置多个虚拟主机

- listen 监听端口
- server_name localhost、ip、域名
- location 请求路由映射、匹配拦截
- root 请求位置
- index 首页设置

```conf
server {
    listen 8080;
    server_name localhost;

    location / {
        root html;
        index index.html index.htm;
    }
}
```

#### upstream 集群 内网服务器
