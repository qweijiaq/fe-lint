import glob from 'glob';
import type { PKG } from '../../types';

/**
 * 获取 ESLint 配置类型
 * @param cwd 当前工作目录
 * @param pkg 包信息
 * @returns ESLint 配置类型
 * - `wj-fe-eslint-config/index`
 * - `wj-fe-eslint-config/react`
 * - `wj-fe-eslint-config/typescript/index`
 * - `wj-fe-eslint-config/typescript/react`
 */
export function getESLintConfigType(cwd: string, pkg: PKG): string {
  const tsFiles = glob.sync('./!(node_modules)/**/*.@(ts|tsx)', { cwd });
  const reactFiles = glob.sync('./!(node_modules)/**/*.@(jsx|tsx)', { cwd });
  const vueFiles = glob.sync('./!(node_modules)/**/*.vue', { cwd });
  const dependencies = Object.keys(pkg.dependencies || {});
  const language = tsFiles.length > 0 ? 'typescript' : '';
  let dsl = '';

  // DSL 判断
  if (reactFiles.length > 0 || dependencies.some((name) => /^react(-|$)/.test(name))) {
    dsl = 'react';
  } else if (vueFiles.length > 0 || dependencies.some((name) => /^vue(-|$)/.test(name))) {
    dsl = 'vue';
  } else if (dependencies.some((name) => /^rax(-|$)/.test(name))) {
    dsl = 'rax';
  }

  return 'wj-fe-eslint-config/' + `${language}/${dsl}`.replace(/\/$/, '/index').replace(/^\//, '');
}
