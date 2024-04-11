module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits', // 使用的解析器预设
  rules: {
    // 定义提交消息规则
    'body-leading-blank': [1, 'always'], // 正文前需要空行
    'body-max-line-length': [2, 'always', 100], // 正文最大长度限制为100字符
    'footer-leading-blank': [1, 'always'], // 页脚前需要空行
    'footer-max-line-length': [2, 'always', 100], // 页脚最大长度限制为100字符
    'header-max-length': [2, 'always', 100], // 头部最大长度限制为100字符
    'scope-case': [2, 'always', 'lower-case'], // 作用域小写
    'subject-case': [0], // 主题不做大小写检查
    'subject-empty': [2, 'never'], // 主题不允许为空
    'subject-full-stop': [2, 'never', '.'], // 主题不允许以句号结尾
    'type-case': [2, 'always', 'lower-case'], // 类型小写
    'type-empty': [2, 'never'], // 类型不允许为空
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert'],
    ], // 类型枚举
  },
};
