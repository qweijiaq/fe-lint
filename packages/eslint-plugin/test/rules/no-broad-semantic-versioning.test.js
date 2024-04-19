const rule = require('../../rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

// 创建规则测试器
const ruleTester = new RuleTester();

// 运行规则测试
ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      // 有效的测试用例：package.json 文件中的依赖版本号为精确版本号
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wj-fe-eslint-plugin': '^0.0.5' },
      })}`,
    },
    {
      // 有效的测试用例：非 package.json 文件
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      // 无效的测试用例：package.json 文件中的依赖版本号为广义语义版本号
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'wj-fe-eslint-plugin': '*' },
      })}`,
      errors: [
        {
          // 报错消息
          message: '不建议使用 "wj-fe-eslint-plugin" 的 "*" 版本',
        },
      ],
    },
  ],
});
