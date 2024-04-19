const path = require('path');

// 规则名称常量
const RULE_NAME = 'no-broad-semantic-versioning';

module.exports = {
  // 规则元数据
  name: RULE_NAME,
  meta: {
    type: 'problem',
    fixable: null,
    messages: {
      noBroadSemanticVersioning: '不建议使用 "{{dependencyName}}" 的 "{{versioning}}" 版本',
    },
  },

  // 创建 ESLint 规则的函数
  create(context) {
    // 检查文件是否为 package.json 文件
    if (path.basename(context.getFilename()) !== 'package.json') {
      return {};
    }

    // 获取当前工作目录
    const cwd = context.getCwd();

    return {
      // 遍历 AST 中的所有属性节点
      Property(node) {
        // 检查属性是否表示依赖项或 devDependencies
        if (
          node.key &&
          node.key.value &&
          (node.key.value === 'dependencies' || node.key.value === 'devDependencies') &&
          node.value &&
          node.value.properties
        ) {
          // 遍历 dependencies 或 devDependencies 中的每个属性
          node.value.properties.forEach((property) => {
            if (property.key && property.key.value) {
              const dependencyName = property.key.value;
              const dependencyVersion = property.value.value;
              // 检查是否存在广义语义版本的模式
              if (
                dependencyVersion.indexOf('*') > -1 || // *
                dependencyVersion.indexOf('x') > -1 || // x.x
                dependencyVersion.indexOf('>') > -1 // > x
              ) {
                // 报告违规情况
                context.report({
                  loc: property.loc,
                  messageId: 'noBroadSemanticVersioning',
                  data: {
                    dependencyName,
                    versioning: dependencyVersion,
                  },
                });
              }
            }
          });
        }
      },
    };
  },
};
