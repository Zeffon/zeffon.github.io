# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## 安装&&运行

1. 安装依赖

```
$ yarn install
```

2. 本地运行

```
$ yarn start
```

3. 构建

```
$ yarn build
```

## Github Actions

应用 Github Actions，`push`提交代码自动运行服务进行代码编译。编译后的文件会在存放`gh-pages`分支。

### 配置

1. 在`docusaurus.config.js`配置仓库地址

```yml
  url: 'https://zeffon.github.io', # 运行后的页面地址
  baseUrl: '/',                    # url前缀
  projectName: 'zeffon.github.io', # 项目名称
  organizationName: 'zeffon',      # github用户名
```

2. 在`.github\workflows`目录下，新建`documentation.yml`配置文件

```yml
name: Deploy Github pages
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@master
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run-script build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: build
          BUILD_SCRIPT: npm install && npm run build
```
