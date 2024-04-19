import path from 'path';
import glob from 'glob';
import markdownLint from 'markdownlint';
import markdownLintConfig from 'wj-fe-markdownlint-config';
import type { ScanOptions, PKG, Config } from '../../types';

type LintOptions = markdownLint.Options & { fix?: boolean };

/**
 * 获取 Markdownlint 配置。
 * @param opts 扫描选项。
 * @param pkg 包信息。
 * @param config 配置信息。
 * @returns Markdownlint 配置选项。
 */
export function getMarkdownlintConfig(opts: ScanOptions, pkg: PKG, config: Config): LintOptions {
  const { cwd } = opts;
  const lintConfig: LintOptions = {
    fix: Boolean(opts.fix), // 是否开启修复功能
    resultVersion: 3, // 结果版本
  };

  // 若用户传入了 markdownlintOptions，则使用用户的配置
  if (config.markdownlintOptions) {
    Object.assign(lintConfig, config.markdownlintOptions);
  } else {
    // 根据扫描目录下是否存在 markdownlint 配置文件来决定配置
    const lintConfigFiles = glob.sync('.markdownlint(.@(yaml|yml|json))', { cwd });
    if (lintConfigFiles.length === 0) {
      lintConfig.config = markdownLintConfig; // 使用默认的 markdownlint 配置
    } else {
      lintConfig.config = markdownLint.readConfigSync(path.resolve(cwd, lintConfigFiles[0])); // 读取指定的配置文件
    }
  }

  return lintConfig;
}
