module.exports = {
  extends: [
    // 引入基础规则集合
    './index',
    // 引入 React 相关规则集合
    './rules/react',
  ].map(require.resolve), // 将路径解析为绝对路径
  parserOptions: {
    // 使用 Babel 解析器选项
    babelOptions: {
      // 设置 Babel 预设为 React，以支持解析 JSX
      presets: ['@babel/preset-react'],
    },
  },
};
