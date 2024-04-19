const rule = require('../../rules/no-secret-info');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-secret-info', rule, {
  valid: [
    {
      // 正常的变量声明，不包含敏感信息
      code: 'var accessKeySecret = process.env.ACCESS_KEY_SECRET;',
    },
    {
      // 正常的变量声明，不包含敏感信息
      code: 'var password = "";',
    },
    {
      // 对象属性的赋值，不包含敏感信息
      code: `
    var client ={
      accessKeyToken: process.env.ACCESS_KEY_SECRET
    };
    `,
    },
  ],

  invalid: [
    {
      // 包含敏感信息的变量声明
      code: "var accessKeySecret = 'xxxx';",
      errors: [
        {
          // 报告发现的敏感信息
          message: '发现疑似是私密信息的 "xxxx"，请检查！如果是，请不要将其明文暴露出来',
        },
      ],
    },
    {
      // 包含敏感信息的对象属性赋值
      code: `
    var client ={
      accessKeyToken: 'xxxx'
    };
    `,
      errors: [
        {
          // 报告发现的敏感信息
          message: '发现疑似是私密信息的 "xxxx"，请检查！如果是，请不要将其明文暴露出来',
        },
      ],
    },
  ],
});
