const path = require('path');

// 规则名称
const RULE_NAME = 'no-js-in-ts-project';

// JavaScript 文件的正则表达式
const JS_REG = /\.jsx?$/;

// 默认白名单列表
const DEFAULT_WHITE_LIST = [
  'commitlint.config.js',
  'eslintrc.js',
  'prettierrc.js',
  'stylelintrc.js',
];

module.exports = {
  // 规则名称
  name: RULE_NAME,
  meta: {
    // 规则类型
    type: 'suggestion',
    // 是否可修复
    fixable: null,
    messages: {
      // 错误消息模板
      noJSInTSProject: '不建议在 TypeScript 项目中使用 "{{fileName}}"',
    },
  },

  create(context) {
    // 获取文件名和文件扩展名
    const fileName = context.getFilename();
    const extName = path.extname(fileName);

    // 获取规则选项
    const ruleOptions = context.options[0] || {};
    let { whiteList = [], autoMerge = true } = ruleOptions;

    // 如果白名单为空，则使用默认白名单
    if (whiteList.length === 0) {
      whiteList = DEFAULT_WHITE_LIST;
    } else if (autoMerge) {
      // 如果开启自动合并，则将默认白名单与用户提供的白名单合并，并去重
      whiteList = [...new Set([...DEFAULT_WHITE_LIST, ...whiteList])];
    }

    // 构建白名单正则表达式
    const whiteListReg = new RegExp(`(${whiteList.join('|')})$`);

    // 如果文件名不在白名单中且扩展名为 .js 或 .jsx，则报告错误
    if (!whiteListReg.test(fileName) && JS_REG.test(extName)) {
      context.report({
        // 报错位置（文件的起始位置）
        loc: {
          start: {
            line: 0,
            column: 0,
          },
          end: {
            line: 0,
            column: 0,
          },
        },
        // 报错消息模板的 messageId
        messageId: 'noJSInTSProject',
        // 提供给报错消息的数据
        data: {
          fileName,
        },
      });
    }

    // 返回一个空对象，以满足 create 函数的必要性
    return {};
  },
};
