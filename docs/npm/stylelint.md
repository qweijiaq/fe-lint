---
title: wj-fe-stylelint-config
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: Pony Wei
  link: https://github.com/qweijiaq
---

# wj-fe-stylelint-config

:::tip
GopherLint CSS 规范
:::

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install wj-fe-stylelint-config stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "wj-fe-stylelint-config"
}
```