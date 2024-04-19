'use strict';

// 导入规则和规则测试工具
const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

// 创建规则测试对象
const ruleTester = new RuleTester();

// 运行测试
ruleTester.run('no-http-url', rule, {
  // 有效代码示例
  valid: [
    {
      code: "var test = 'https://blog.wei-jia.top';",
    },
  ],

  // 无效代码示例
  invalid: [
    {
      code: "var test = 'http://blog.wei-jia.top';",
      output: "var test = 'http://blog.wei-jia.top';",
      errors: [
        {
          message: '建议将 "http://blog.wei-jia.top" 切换到 HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://blog.wei-jia.top' />",
      output: "<img src='http://blog.wei-jia.top' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: '建议将 "http://blog.wei-jia.top" 切换到 HTTPS',
        },
      ],
    },
  ],
});
