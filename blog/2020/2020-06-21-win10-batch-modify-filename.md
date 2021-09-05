---
slug: win10-batch-modify-filename
title: win10 批量修改文件名
authors: zeffon
tags: [notes]
date: 2020-06-21
---

记录在 win10 系统下批量修改文件名的方法

<!--truncate-->

## 正文

### 生成 rename.xls 文件

使用 win 键+R cmd 指令打开控制台（别关掉 ~）

```sh
$ chcp 65001 # 先切换为编码，防止后续出现乱码
$ cd 需要修改文件的目录
$ dir /b>rename.xls # 会在目录生成rename.xls文件
```

### 定制 rename.xls

生成的 rename.xls 如图所示
第一列是`**固定为ren指令**`   第二列是`**原文件名**`   第三列是`**新文件名**`
![21-rename.xls.png](https://cdn.nlark.com/yuque/0/2021/png/656137/1610714746349-53c7f858-7425-4257-954c-72841f1b82af.png#height=292&id=iRR3I&margin=%5Bobject%20Object%5D&name=21-rename.xls.png&originHeight=292&originWidth=527&originalType=binary&ratio=1&size=10634&status=done&style=none&width=527)

> **可以利用替换(Ctrl+h)的方式来实现批量修改文件名** > **如果文件名中出现有空格，需要整个文件名前后加上英文双引号**

### 执行 bat 批量文件

1. 将上面 xls 文件(除开第一行)的内容复制
2. 在之前的目录中新建文件 ren.txt
3. 在 ren.txt 文件中进行粘贴
4. 修改 ren.txt 的扩展名为 bat 即 ren.bat 文件
   在控制台执行

```sh
$ .\ren.bat
```
