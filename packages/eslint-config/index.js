module.exports = {
  extends: [
    // 引入基本最佳实践规则
    './rules/base/best-practices',
    // 引入基本可能的错误规则
    './rules/base/possible-errors',
    // 引入基本样式规则
    './rules/base/style',
    // 引入基本变量规则
    './rules/base/variables',
    // 引入 ES6 相关规则
    './rules/base/es6',
    // 引入严格模式规则
    './rules/base/strict',
    // 引入导入规则
    './rules/imports',
  ].map(require.resolve), // 将路径解析为绝对路径
  parser: '@babel/eslint-parser', // 使用 Babel ESLint 解析器
  parserOptions: {
    requireConfigFile: false, // 不需要 ESLint 配置文件
    ecmaVersion: 2020, // 使用 ECMAScript 2020 版本
    sourceType: 'module', // 使用 ES 模块语法
    ecmaFeatures: {
      globalReturn: false, // 不允许全局 return
      impliedStrict: true, // 隐式严格模式
      jsx: true, // 启用 JSX
    },
  },
  root: true, // 根配置文件 ESLint 将停止在父目录中寻找其他配置文件
};
