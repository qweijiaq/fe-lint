import fg from 'fast-glob';
import { extname, join } from 'path';
import stylelint from 'stylelint';
import { PKG, ScanOptions } from '../../types';
import { STYLELINT_FILE_EXT, STYLELINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatStylelintResults } from './formatStylelintResults';
import { getStylelintConfig } from './getStylelintConfig';

/**
 * 执行 Stylelint 静态分析。
 * @param options 扫描选项。
 */
export interface DoStylelintOptions extends ScanOptions {
  pkg: PKG;
}

/**
 * 执行 Stylelint 静态分析。
 * @param options 扫描选项。
 */
export async function doStylelint(options: DoStylelintOptions) {
  let files: string[];
  if (options.files) {
    // 如果指定了文件列表，则只对指定的文件进行分析
    files = options.files.filter((name) => STYLELINT_FILE_EXT.includes(extname(name)));
  } else {
    // 否则，对匹配指定类型的文件进行分析
    const pattern = join(
      options.include,
      `**/*.{${STYLELINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: STYLELINT_IGNORE_PATTERN,
    });
  }
  // 执行 Stylelint 静态分析
  const data = await stylelint.lint({
    ...getStylelintConfig(options, options.pkg, options.config),
    files,
  });
  // 格式化分析结果
  return formatStylelintResults(data.results, options.quiet);
}
