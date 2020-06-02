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

## 安装

```bash
$ npm i
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
$ git add .
$ git push
```

此时你的组件已经开发完成，提交 MR 即可

## 打包发布组件

```bash
$ npm run build:comp
$ npm run publish
```


## 打包发布组件库主页

```bash
# 打包组件库主页
$ npm run build:page
```
