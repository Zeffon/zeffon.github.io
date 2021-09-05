---
slug: modify-git-submitted-user-and-email
title: 修改Git已提交的用户名和邮箱
authors: zeffon
tags: [git]
date: 2019-10-12
---

修改本地全局 Git 的提交用户名和邮箱和推送过的 git 用户名和邮箱

<!--truncate-->

## 前言

修改本地全局 Git 的提交用户名和邮箱和推送过的 git 用户名和邮箱

## 正文

### 本地全局 Git 的提交用户名和邮箱

```sh
$ git config –global user.name “Your Name”
$ git config –global user.email “Your Email”
```

> **`注意：`** 这种方法只对之后的`Commit`有效，之前提交过记录就改不了了。

### 强行修改推送过的 git 用户名和邮箱

1. 打开本地终端
2. 打开需要修改的项目的根目录
3. 复制下面的脚本，可以直接复制到终端命令行里或新建 Shell 脚本，并修改 oldEmail, newName, newEmail 三个变量为你自己的```sh
   #!/bin/bash

git filter-branch --env-filter '

oldEmail="Your Old Email"
newName="Your New Name"
newEmail="Your New Email"

if [ "$GIT_COMMITTER_EMAIL" = "$oldEmail" ]; then
export GIT_COMMITTER_NAME="$newName"
    export GIT_COMMITTER_EMAIL="$newEmail"
fi

if [ "$GIT_AUTHOR_EMAIL" = "$oldEmail" ]; then
export GIT_AUTHOR_NAME="$newName"
    export GIT_AUTHOR_EMAIL="$newEmail"
fi

' --tag-name-filter cat -- --branches --tags

````

4. 执行脚本，看到一堆 rewritten 的时候就说明写入完成了
5. git log 查看新的 Commit 信息是否正确
6. 再次推送时会失败，只能强制推送了



```sh
$ git push -u origin master -f
````

1. 删除临时文件

```sh
$ cd ..
$ rm -rf repo.git
```
