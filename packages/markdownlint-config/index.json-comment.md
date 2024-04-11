```json
{
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  "default": true, // 默认开启 MarkdownLint 规则
  "ul-style": {
    "style": "dash" // 列表项样式为短横线
  },
  "no-trailing-spaces": {
    "br_spaces": 0, // 段落末尾不允许空格
    "list_item_empty_lines": false // 列表项不允许空行
  },
  "list-marker-space": false, // 列表标记后不允许空格
  "line-length": false, // 不限制行长度
  "no-inline-html": false, // 允许内联 HTML
  "no-duplicate-header": false, // 允许重复的标题
  "proper-names": {
    "names": [
      // 定义合法的专有名词列表
      "JavaScript",
      "HTML",
      "CSS",
      // 省略部分内容...
      "URI",
      "URLs",
      "URIs",
      "Visual Studio Code"
    ],
    "code_blocks": false // 不对代码块中的专有名词做处理
  }
}
```
