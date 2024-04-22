module.exports = {
  defaultSeverity: 'warning', // 默认使用警告级别
  plugins: ['stylelint-scss'], // 使用 stylelint-scss 插件
  rules: {
    /**
     * 可能的错误
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    'at-rule-no-unknown': null, // 禁止未知的 @ 规则，scss/at-rule-no-unknown 规则已经包含
    'scss/at-rule-no-unknown': true, // scss 中禁止未知的 @ 规则
    'block-no-empty': null, // 禁止空的代码块
    'color-no-invalid-hex': true, // 禁止无效的十六进制颜色
    'comment-no-empty': true, // 禁止空注释
    'declaration-block-no-duplicate-properties': [
      // 禁止重复的属性
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'], // 忽略具有不同值的连续重复属性
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true, // 禁止缩写属性覆盖
    'font-family-no-duplicate-names': true, // 禁止重复的字体名称
    'function-calc-no-unspaced-operator': true, // 禁止在 calc 函数内使用不加空格的操作符
    'function-linear-gradient-no-nonstandard-direction': true, // 禁止非标准方向的线性渐变
    'keyframe-declaration-no-important': true, // 禁止在关键帧声明中使用 !important
    'media-feature-name-no-unknown': true, // 禁止未知的媒体特性名称
    'no-descending-specificity': null, // 不检查特定性下降，许多人熟悉 CSS 优先级
    'no-duplicate-at-import-rules': true, // 禁止重复的 @import 规则
    'no-duplicate-selectors': true, // 禁止重复的选择器
    'no-empty-source': null, // 禁止空源码
    'no-extra-semicolons': true, // 禁止额外的分号
    'no-invalid-double-slash-comments': true, // 禁止无效的双斜杠注释
    'property-no-unknown': true, // 禁止未知属性
    'selector-pseudo-class-no-unknown': [
      // 禁止未知伪类选择器
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'], // 忽略 global、local、export 伪类选择器
      },
    ],
    'selector-pseudo-element-no-unknown': true, // 禁止未知伪元素选择器
    'string-no-newline': true, // 禁止字符串中的换行符
    'unit-no-unknown': [
      // 禁止未知单位
      true,
      {
        ignoreUnits: ['rpx'], // 忽略 rpx 单位
      },
    ],

    /**
     * 风格问题
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    indentation: 2, // 缩进为 2 个空格
    'block-closing-brace-newline-before': 'always-multi-line', // 多行代码块结束大括号前换行
    'block-closing-brace-space-before': 'always-single-line', // 单行代码块结束大括号前加空格
    'block-opening-brace-newline-after': 'always-multi-line', // 多行代码块开始大括号后换行
    'block-opening-brace-space-before': 'always', // 代码块开始大括号前加空格
    'block-opening-brace-space-after': 'always-single-line', // 单行代码块开始大括号后加空格
    'color-hex-case': 'lower', // 十六进制颜色小写
    'color-hex-length': 'short', // 十六进制颜色使用缩写
    'comment-whitespace-inside': 'always', // 注释内部始终有空格
    'declaration-colon-space-before': 'never', // 冒号前不加空格
    'declaration-colon-space-after': 'always', // 冒号后始终加空格
    'declaration-block-single-line-max-declarations': 1, // 单行声明块最多一个声明
    'declaration-block-trailing-semicolon': [
      // 声明块后要有分号
      'always',
      {
        severity: 'error', // 错误级别
      },
    ],
    'length-zero-no-unit': [
      // 长度为零不加单位
      true,
      {
        ignore: ['custom-properties'], // 忽略自定义属性
      },
    ],
    'max-line-length': 100, // 最大行长度为 100
    'selector-max-id': 0, // 选择器中不允许使用 id
    'value-list-comma-space-after': 'always-single-line', // 值列表逗号后始终有空格

    /**
     * stylelint-scss 规则
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always', // scss 中双斜杠注释内部始终有空格
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // 忽略的文件类型
};
