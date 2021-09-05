---
slug: heroku-v2ray
title: Heroku 搭建 V2ray
authors: zeffon
tags: [notes]
date: 2019-11-25
---

Heroku 是一个支持多语言的 PaaS。简单来说这是一个可以免费快速将自己的应用部署在上面的云平台。

<!--truncate-->

### 搭建

1. 首先需要有 heroku 账号，所以需要先[注册](https://signup.heroku.com/)
2. 验证完 heroku 账号后，使用大神`zyp997`写插件[ss-heroku](https://github.com/zyp997/ss-heroku)。直接点击 README.md 中`Deploy to Heroku`图标，进行一键在 Heroku 进行搭建 v2ray
3. 跳转到 Heroku 填写信息：`名称`随便填写、`地区`选择就近的、`AppName`需要与前面的`名称`相同、`ENCRYPT`设置为`rc4-md5`加密算法，其他默认即可。
4. 点击`Deploy app`进行部署完后，点击`View`会跳转到一个动态页面，如果能正常在浏览器查看二维码`https://AppName.herokuapp.com/qr_img/v2.png`，则部署成功了。

### 连接

#### 手机(Android)

1. 下载[shadowsocks](https://apkcombo.com/tw-tw/shadowsocks/com.github.shadowsocks/)
2. 下载[v2ray 插件](https://github.com/shadowsocks/v2ray-plugin-android/releases)，我试过精简版的`安装不了`，所有选择`universal`通用版进行安装。
3. 打开`shadowsocks`，点击右上角上的 `+` ，选择扫描二维码。扫描之前的二维码`https://yourAppName.herokuapp.com/qr_img/v2.png`，即可添加节点。

#### win10

1. 下载[shadowsocks](https://github.com/shadowsocks/shadowsocks-windows/releases)
2. 下载[v2ray-plugin 插件](https://github.com/shadowsocks/v2ray-plugin/releases)
3. 打开`shadowsocks`客户端，添加一个服务器。

- 服务器地址 : `yourAppName.herokuapp.com`
- 端口 : 443
- 密码 : 密码默认为`5c301bb8-6c77-41a0-a606-4ba11bbab084`
- 加密算法 : rc4-md5
- 插件程序 : 插件的路径
- 插件选项 : path=/static;host=yourAppName.herokuapp.com;tls

> 或者扫描手机分享的二维码添加，再更改插件程序的路径即可

#### mac

- 待续
