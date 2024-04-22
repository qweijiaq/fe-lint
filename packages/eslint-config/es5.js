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
    // 引入 ES5 相关规则
    './rules/es5',
  ].map(require.resolve), // 将路径解析为绝对路径
  root: true, // 根配置文件 ESLint 将停止在父目录中寻找其他配置文件
};
