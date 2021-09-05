---
slug: prettier-commitlint
title: 项目配置prettier和commitlint
authors: zeffon
tags: [react]
date: 2021-03-17
---

**React**项目中，**prettier**配置和**commitlint**配置。

<!--truncate-->

## 创建 React 项目

直接根据[React 官网](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html)文档创建 React 项目(这里使用 TypeScript 创建)

```bash
npx create-react-app my-app --template typescript
cd my-app
yarn
```

## 配置 prettier

prettier 可以非常友好地帮助我们规范代码格式

### 安装依赖，输出文件

具体文档可以查看[官网](https://prettier.io/docs/en/install.html)

```bash
yarn add --dev --exact prettier
echo {}> .prettierrc.json
```

### 创建[.prettierignore](https://prettier.io/docs/en/ignore.html)，并且编辑如下内容

```
# Ignore artifacts:
build
coverage
```

### 安装 pre-commit

具体文档可以查看[官网](https://prettier.io/docs/en/precommit.html)

```bash
npx mrm lint-staged
```

安装成功后，可以在每次提交前可以规范指定的文件样式(默认只规范 js、css、md)，所以需要在 package.json 文件的 lint-staged 配置中进行添加文件后缀。

```json
  "lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
```

### 安装 eslint 的 prettier 配置

```bash
yarn add eslint-config-prettier -D
```

成功之后还需要在 package.json 中 eslintConfig 中添加上 prettier

```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier"
    ]
  },
```

## 升级 Husky

Husky 之前默认是 4 版本的，如果后续需要配置 commitlint，需要升级为 Husky5+版本

### 安装 Husky5+

```bash
yarn add husky --dev
yarn husky install
```

### 删除 package.json 这个配置

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

### 添加配置

```json
npx husky add .husky/pre-commit "yarn lint-staged"
```

## 配置 commitlint

commitlint 可以规范提交格式，[官网 Github](https://github.com/conventional-changelog/commitlint)有相关的介绍

### 安装 commitlint

```bash
# win
yarn add @commitlint/config-conventional @commitlint/cli -D
# other
yarn add @commitlint/{config-conventional,cli} -D
```

### 创建配置文件

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

> 注意，上面命令执行完的 commitlint.config.js 格式需要是如下：

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

### 安装 husky5+

（之前安装过就不需要）

```bash
yarn add husky --dev
yarn husky install
```

### package.js 添加配置

在 package.json 中添加 postinstall script：

```json
{
  "scripts": {
    "postinstall": "husky install"
  }
}
```

### 执行

```bash
npx husky add .husky/commit-msg "yarn commitlint --edit $1"
```
