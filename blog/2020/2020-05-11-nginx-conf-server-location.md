---
slug: nginx-conf-server-location
title: nginx.conf 中 server 模块 location
authors: zeffon
tags: [nginx]
date: 2020-05-11
---

nginx.conf 配置中，http 指令块中的 server 模块的 location 是主要匹配客户端发送过来 url 的

<!--truncate-->

## nginx 服务器匹配

#### 单个 location

当我们访问 `localhost:88` 将会被转到 `/home/html` 目录下 主页是 index.html
例如我们访问 `localhost:88/img/a.png` 会访问到服务器 `/home/nginx/img/a.png`

```conf
server {
    listen 88;
    server_name localhost;

    location / {
        root /home/nginx;
        index index.html;
    }
}
```

#### 多个 location

如果访问 `localhost:88/img` 匹配到 `img` 这样会将 `/img` 拼接到 `/home/demo` 的后面，这时候就会访问到服务器`/home/demo/img`目录下
例如我们访问 `localhost:88/img/a.png` 会访问到服务器 `/home/demo/img/a.png`

```conf
server {
    listen 88;
    server_name  localhost;

    location / {
        root   /home;
        index   index.html;
    }

    location /img {
        root   /home/demo;
        index   index.html;
    }
}
```

采用别名 alias，这样可以自定义 url 上的参数
访问 `localhost:88/demo/a.png` 匹配 `demo` 会将 demo 拼接在 `/hemo` 后面，访问到服务器`/home/demo/a.png`
访问 `localhost:88/static/a.png` 识别出别名 alias 会将 `static` 替换 `/home/demo`，也访问到服务器`/home/demo/a.png`
所以`localhost:88/demo/a.png` 和 `localhost:88/static/a.png` 两者可以达到同样的效果，也可以同时使用

```conf
server {
    listen 88;
    server_name  localhost;

    location / {
        root   /home;
        index   index.html;
    }

    location /demo {
        root   /home;
        index   index.html;
    }

    location /static {
        alias   /home/demo;
        index   index.html;
    }
}
```

## location 匹配规则

#### 1. 空格 ：默认匹配，普通匹配

```shell
location / {
  root /home;
}
```

#### 2. = ：精确匹配

```shell
location = /demo/img/a.png {
	root /home;
}
```

#### 3. ~\* ：匹配正则表达式

不区分大小写，符合图片的显示

```shell
location ~* .(GIF|jpg|png|jpeg) {
	root /home;
}
```

#### 4. ~ ：匹配正则表达式

区分大小写，GIF 必须大写才能匹配到

```shell
location ~ .(GIF|jpg|png|jpeg) {
	root /home;
}
```

#### 5. ^~ ：以某个字符路径开头

```shell
location ^~ /demo/img {
	root /home;
}
```
