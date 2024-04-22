module.exports = {
  extends: [
    // 引入基础规则集合
    './index',
    // 引入 Node.js 相关规则集合
    './rules/node',
  ].map(require.resolve), // 将路径解析为绝对路径
};
