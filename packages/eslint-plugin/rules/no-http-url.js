const RULE_NAME = 'no-http-url';

// 定义规则对象
module.exports = {
  // 规则名称
  name: RULE_NAME,
  // 规则元数据
  meta: {
    // 规则类型
    type: 'suggestion',
    // 是否可修复
    fixable: null,
    // 消息定义
    messages: {
      noHttpUrl: '建议将 "{{url}}" 切换到 HTTPS',
    },
  },
  // 创建规则处理函数
  create(context) {
    return {
      // 处理字面量节点
      Literal(node) {
        // 检查节点值是否为字符串并且以 'http:' 开头
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
          // 报告问题
          context.report({
            // 报告的节点
            node,
            // 使用的消息 ID
            messageId: 'noHttpUrl',
            // 传递的数据
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
