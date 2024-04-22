const path = require('path'); // 引入 path 模块，用于处理文件路径
const requireAll = require('require-all'); // 引入 require-all 模块，用于加载指定目录下的所有文件

// 导出 rules 对象，该对象包含了所有规则
exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules'), // 指定规则文件所在的目录路径
});

// 导出 configs 对象，该对象包含了所有配置文件
exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs'), // 指定配置文件所在的目录路径
});

// 定义 processors 对象，用于处理特定类型的文件，这里处理 json 类型的文件
exports.processors = {
  '.json': {
    preprocess(text) {
      // 预处理函数，将文本作为 JavaScript 文件处理
      return [`module.exports = ${text}`];
    },
  },
};
