import markdownlint from 'markdownlint';
import type { ScanResult } from '../../types';

/**
 * 格式化 markdownlint 输出结果，将 markdownlint 的输出结果转换为扫描结果。
 * @param results markdownlint 的 lint 结果。
 * @param quiet 是否启用静默模式。
 * @returns 扫描结果数组。
 */
export function formatMarkdownlintResults(
  results: markdownlint.LintResults,
  quiet: boolean,
): ScanResult[] {
  const parsedResults = [];

  // 遍历每个文件的 lint 结果，将其转换为扫描结果
  for (const file in results) {
    // 如果启用了静默模式，则忽略警告消息
    if (!Object.prototype.hasOwnProperty.call(results, file) || quiet) continue;

    // 初始化警告数量和可修复警告数量
    let warningCount = 0;
    let fixableWarningCount = 0;

    // 格式化每个 lint 错误，并统计警告数量和可修复警告数量
    const messages = results[file].map(
      ({ lineNumber, ruleNames, ruleDescription, ruleInformation, errorRange, fixInfo }) => {
        // 如果存在修复信息，则增加可修复警告数量
        if (fixInfo) fixableWarningCount++;
        // 增加警告数量
        warningCount++;

        // 格式化 lint 错误信息
        return {
          line: lineNumber, // 错误所在行号
          column: Array.isArray(errorRange) ? errorRange[0] : 1, // 错误所在列号
          rule: ruleNames[0], // 错误规则名称
          url: ruleInformation, // 错误规则文档链接
          message: ruleDescription, // 错误描述
          errored: false, // 错误类型，默认为警告
        };
      },
    );

    // 将格式化后的结果添加到扫描结果数组中
    parsedResults.push({
      filePath: file, // 文件路径
      messages, // 文件中的错误消息数组
      errorCount: 0, // 错误数量，默认为0
      warningCount, // 警告数量
      fixableErrorCount: 0, // 可修复错误数量，默认为0
      fixableWarningCount, // 可修复警告数量
    });
  }

  // 返回转换后的扫描结果数组
  return parsedResults;
}
