import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import { LinterOptions } from 'stylelint';
import type { Config, PKG, ScanOptions } from '../../types';
import { STYLELINT_IGNORE_PATTERN } from '../../utils/constants';

/**
 * 获取 Stylelint 配置。
 * @param opts 扫描选项。
 * @param pkg 包信息。
 * @param config 扫描配置。
 * @returns Stylelint 配置对象。
 */
export function getStylelintConfig(opts: ScanOptions, pkg: PKG, config: Config): LinterOptions {
  const { cwd, fix } = opts;

  // 如果禁用了 Stylelint，则返回空对象
  if (config.enableStylelint === false) return {} as any;

  // 初始化 Stylelint 配置
  const lintConfig: any = {
    fix: Boolean(fix), // 是否启用修复
    allowEmptyInput: true, // 是否允许空输入
  };

  // 如果用户传入了 stylelintOptions，则使用用户的配置
  if (config.stylelintOptions) {
    Object.assign(lintConfig, config.stylelintOptions);
  } else {
    // 根据扫描目录下是否存在 .stylelintrc 文件来决定是否使用默认配置
    const lintConfigFiles = glob.sync('.stylelintrc?(.@(js|yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0 && !pkg.stylelint) {
      // 如果不存在 .stylelintrc 文件且包信息中未指定 Stylelint 配置，则使用默认配置
      lintConfig.config = {
        extends: 'wj-fe-stylelint-config', // 使用默认的 Stylelint 配置
      };
    }

    // 如果扫描目录下不存在 .stylelintignore 文件，则使用默认的 ignore 配置
    const ignoreFilePath = path.resolve(cwd, '.stylelintignore');
    if (!fs.existsSync(ignoreFilePath)) {
      lintConfig.ignorePattern = STYLELINT_IGNORE_PATTERN; // 使用默认的 ignore 规则
    }
  }

  return lintConfig;
}
