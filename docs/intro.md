---
nav:
  title: 介绍
---

## 项目介绍

本项目基于 lerna + dumi 进行开发。

lerna 是一个 Javascript 多包管理工具。主要用于团队组件代码的管理以及维护。

lerna 官方文档：https://github.com/lerna/lerna/blob/master/README.md

dumi 是一个开源工具，用于开发以及展示 UI 组件库。

dumi 官方文档：https://d.umijs.org/

## 准备工作

本项目会发布 package 到 Tiger NPM, 所以在使用之前需要保证你已经注册了 Tiger NPM 账号。如果还没有请按照一下步骤注册：

```bash
$ tnpm adduser // 根据提示输入name, password, email。
$ tnpm login --registry=http://r.npm.tigerfintech.com // 登陆TigerNPM
```

详情可参考此链接：[如何注册 tnpm 账号](https://wiki.tigerbrokers.net/pages/viewpage.action?pageId=44040736)

## 安装

有了 Tiger NPM 账号之后，接下来就是安装运行所需环境了

```bash
$ tnpm i
```

## 初始化组件

前面的准备工作都已经做好了，接下来就可以开始开发团队公共代码了

在 packages 文件夹下创建你的组件目录

```
|-- button
    |-- src
    |   |-- index.tsx
    |-- tsconfig.json
    |-- package.json
```

`src/index.tsx`中开发你的组件<br><br>
`package.json`以及`tsconfig.json`参考其他组件即可

## 开发

```bash
# 开始本地开发你的组件
$ npm start
```

现在本地的开发环境已经准备好了，可以开始进行开发了

## 提交代码

```bash
# staged all changed files
$ git add .
# commit命令行工具，可按照提示一步一步填写（建议使用，可以生成changelog），也可用git-tower等工具commit，提交内容规则与BOS2.0项目相同
$ git-cz
$ git push
```

此时你的组件已经开发完成，提交 MR 即可

## 打包发布组件

```bash
# 构建每一个组件
$ npm run build:comp
# 发到到Tiger NPM(目前添加了branch限制，只能在master分支执行。如果使用过程中发现可以在其他分支执行，请执行之后务必及时合并当前分支到master分支)
$ npm run publish
```

此时你的组件已经成功发布到 Tiger NPM 上了，可以下载并使用此 npm 包了

## 打包发布组件库主页

```bash
# 打包组件库主页
$ npm run build:page
# 将打包好的文件发布到cdn
$ npm run upload
```

组件库已经发布到 cdn 上了，地址：http://s.tigerfintech.com/desktop/cdn/tiger-comp/

## Issues

https://git.tigerbrokers.net/fed/npm/tiger-comp/issues

## Wiki

https://wiki.tigerbrokers.net/pages/viewpage.action?pageId=60938552
