/**
 * 获取 Stylelint 规则文档地址。
 * @param rule Stylelint 规则名称。
 * @returns 规则文档地址。
 */
export function getStylelintRuleDocUrl(rule: string): string {
  // 匹配 stylelint-scss 插件的规则
  const match = rule.match(/^@scss\/(\S+)$/);
  if (match) {
    return `https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/${match[1]}`;
  }

  // 根据规则名称返回对应的规则文档地址
  if (rule !== 'CssSyntaxError') {
    return `https://stylelint.io/user-guide/rules/list/${rule}`;
  }

  return ''; // 如果规则是 CssSyntaxError，则返回空字符串，因为它没有对应的文档地址
}
