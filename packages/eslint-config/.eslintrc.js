module.exports = {
  extends: [
    './index', // 使用自定义的 ESLint 配置文件
  ].map(require.resolve), // 将相对路径解析为绝对路径
};
