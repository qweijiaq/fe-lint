import { ESLint } from 'eslint';
import fg from 'fast-glob';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types';
import { ESLINT_FILE_EXT, ESLINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatESLintResults } from './formatESLintResults';
import { getESLintConfig } from './getESLintConfig';

export interface DoESLintOptions extends ScanOptions {
  pkg: PKG;
  config?: Config;
}

/**
 * 执行 ESLint
 * @param options ESLint 执行选项
 * @returns ESLint 执行结果
 */
export async function doESLint(options: DoESLintOptions) {
  let files: string[];
  if (options.files) {
    files = options.files.filter((name) => ESLINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${ESLINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: ESLINT_IGNORE_PATTERN,
    });
  }

  // 创建 ESLint 实例
  const eslint = new ESLint(getESLintConfig(options, options.pkg, options.config));

  // 对文件进行 lint
  const reports = await eslint.lintFiles(files);

  // 如果需要修复，则输出修复结果
  if (options.fix) {
    await ESLint.outputFixes(reports);
  }

  // 格式化并返回 ESLint 执行结果
  return formatESLintResults(reports, options.quiet, eslint);
}
