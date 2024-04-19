const rule = require('../../rules/no-js-in-ts-project');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-js-in-ts-project', rule, {
  valid: [
    {
      // 验证通过的示例：文件名为 index.ts，代码为空
      filename: 'index.ts',
      code: '',
    },
    {
      // 验证通过的示例：文件名以 .stylelintrc.js 结尾，代码为空
      filename: '.stylelintrc.js',
      code: '',
    },
    {
      // 验证通过的示例：文件名为 home.ts，代码为空
      filename: 'home.ts',
      code: '',
    },
  ],

  invalid: [
    {
      // 验证不通过的示例：文件名为 home.js，代码为空
      filename: 'demo.js',
      code: '',
      errors: [
        {
          // 报错消息
          message: '不建议在 TypeScript 项目中使用 "demo.js"',
        },
      ],
    },
  ],
});
