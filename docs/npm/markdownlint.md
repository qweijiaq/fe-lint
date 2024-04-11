---
title: wj-fe-markdownlint-config
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: Pony Wei
  link: https://github.com/qweijiaq
---

# wj-fe-markdownlint-config

:::tip
GopherLint 文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install wj-fe-markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "wj-fe-markdownlint-config"
}
```
