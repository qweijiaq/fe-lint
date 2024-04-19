import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import markdownlint, { LintError } from 'markdownlint';
import markdownlintRuleHelpers from 'markdownlint-rule-helpers';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types';
import { MARKDOWN_LINT_FILE_EXT, MARKDOWN_LINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatMarkdownlintResults } from './formatMarkdownlintResults';
import { getMarkdownlintConfig } from './getMarkdownlintConfig';

export interface DoMarkdownlintOptions extends ScanOptions {
  pkg: PKG; // 扫描选项中的项目包信息
  config?: Config; // 扫描选项中的配置信息
}

/**
 * 执行 Markdownlint 来检查 markdown 文件。
 * @param options 扫描选项。
 * @returns 扫描结果的 Promise。
 */
export async function doMarkdownlint(options: DoMarkdownlintOptions) {
  let files: string[];

  // 如果提供了文件列表，则仅筛选出 markdown 文件，否则搜索目录下所有 markdown 文件。
  if (options.files) {
    files = options.files.filter((name) => MARKDOWN_LINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${MARKDOWN_LINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: MARKDOWN_LINT_IGNORE_PATTERN,
    });
  }

  // 使用 markdownlint 对文件进行 lint
  const results = await markdownlint.promises.markdownlint({
    ...getMarkdownlintConfig(options, options.pkg, options.config),
    files,
  });

  // 如果启用了修复选项，则修复 markdown 文件中的 lint 错误
  if (options.fix) {
    await Promise.all(
      Object.keys(results).map((filename) => formatMarkdownFile(filename, results[filename])),
    );
  }

  // 格式化并返回扫描结果
  return formatMarkdownlintResults(results, options.quiet);
}

/**
 * 格式化 markdown 文件中的 lint 错误并进行修复。
 * @param filename 文件名。
 * @param errors lint 错误列表。
 * @returns 格式化后的 lint 错误列表。
 */
async function formatMarkdownFile(filename: string, errors: LintError[]) {
  const fixes = errors?.filter((error) => error.fixInfo);

  if (fixes?.length > 0) {
    // 读取原始文件内容
    const originalText = await readFile(filename, 'utf8');
    // 应用 lint 错误的修复
    const fixedText = markdownlintRuleHelpers.applyFixes(originalText, fixes);
    // 如果文件内容发生变化，则写入修复后的内容
    if (originalText !== fixedText) {
      await writeFile(filename, fixedText, 'utf8');
      // 返回无法修复的 lint 错误
      return errors.filter((error) => !error.fixInfo);
    }
  }
  // 返回无需修复的 lint 错误
  return errors;
}
