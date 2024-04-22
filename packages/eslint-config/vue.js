module.exports = {
  extends: [
    // 引入基础规则集合
    './index',
    // 引入 Vue 相关规则集合
    './rules/vue',
  ].map(require.resolve), // 将路径解析为绝对路径
  parserOptions: {
    // 使用 Babel 解析器
    parser: '@babel/eslint-parser',
  },
};
