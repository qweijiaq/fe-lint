module.exports = {
  extends: [
    // 引入 JSX 可访问性规则
    './rules/jsx-a11y',
  ].map(require.resolve), // 将路径解析为绝对路径
};
