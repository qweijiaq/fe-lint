/**
 * 本文件的规则由 eslint-plugin-jsx-a11y 提供
 * @link https://github.com/evcohen/eslint-plugin-jsx-a11y
 */

module.exports = {
  plugins: ['jsx-a11y'], // 使用 jsx-a11y 插件
  rules: {
    // 对 alt 属性的警告
    'jsx-a11y/alt-text': 'warn',
    // 对冗余的 alt 属性的警告
    'jsx-a11y/img-redundant-alt': 'warn',
    // 锚点需要内容的警告
    'jsx-a11y/anchor-has-content': 'warn',
    // 对 aria-props 的警告
    'jsx-a11y/aria-props': 'warn',
    // 对 aria-proptypes 的警告
    'jsx-a11y/aria-proptypes': 'warn',
    // 对不支持的 aria 元素的警告
    'jsx-a11y/aria-unsupported-elements': 'warn',
    // 对 aria-role 的警告，ignoreNonDOM 为 true 时不检查用户自定义元素
    'jsx-a11y/aria-role': ['warn', { ignoreNonDOM: true }],
    // 对具有必需 aria 属性的角色的警告
    'jsx-a11y/role-has-required-aria-props': 'warn',
    // 对支持 aria 属性的角色的警告
    'jsx-a11y/role-supports-aria-props': 'warn',
    // 对没有标题的 iframe 的警告
    'jsx-a11y/iframe-has-title': 'warn',
    // 禁止使用访问键的警告
    'jsx-a11y/no-access-key': 'warn',
    // 禁止使用令人分心的元素的警告
    'jsx-a11y/no-distracting-elements': 'warn',
    // scope 属性的警告
    'jsx-a11y/scope': 'warn',
  },
};
