const RULE_NAME = 'no-secret-info';

// 默认的敏感关键词列表
const DEFAULT_DANGEROUS_KEYS = ['secret', 'token', 'password'];

module.exports = {
  meta: {
    type: 'problem',
    fixable: null,
    messages: {
      noSecretInfo: '发现疑似是私密信息的 "{{secret}}"，请检查！如果是，请不要将其明文暴露出来',
    },
  },

  create(context) {
    const ruleOptions = context.options[0] || {};
    let { dangerousKeys = [], autoMerge = true } = ruleOptions;

    // 如果没有提供自定义敏感关键词列表，则使用默认列表
    if (dangerousKeys.length === 0) {
      dangerousKeys = DEFAULT_DANGEROUS_KEYS;
    } else if (autoMerge) {
      // 如果开启了自动合并，将默认列表和自定义列表合并，并去重
      dangerousKeys = [...new Set(...DEFAULT_DANGEROUS_KEYS, ...dangerousKeys)];
    }

    // 创建正则表达式，用于匹配敏感关键词
    const reg = new RegExp(dangerousKeys.join('|'));

    return {
      Literal: function handleRequires(node) {
        if (
          node.value && // 如果节点有值
          node.parent && // 如果有父节点
          // 如果父节点是变量声明，并且变量名匹配敏感关键词
          ((node.parent.type === 'VariableDeclarator' &&
            node.parent.id &&
            node.parent.id.name &&
            reg.test(node.parent.id.name.toLocaleLowerCase())) ||
            // 或者如果父节点是属性，并且属性名匹配敏感关键词
            (node.parent.type === 'Property' &&
              node.parent.key &&
              node.parent.key.name &&
              reg.test(node.parent.key.name.toLocaleLowerCase())))
        ) {
          // 报告敏感信息
          context.report({
            node,
            messageId: 'noSecretInfo',
            data: {
              secret: node.value,
            },
          });
        }
      },
    };
  },
};
