import { ESLint } from 'eslint';
import type { ScanResult } from '../../types';

/**
 * 格式化 ESLint 输出结果
 * @param results ESLint 检测结果
 * @param quiet 是否仅输出错误信息
 * @param eslint ESLint 实例
 * @returns 格式化后的扫描结果
 */
export function formatESLintResults(
  results: ESLint.LintResult[],
  quiet: boolean,
  eslint: ESLint,
): ScanResult[] {
  // 获取规则元数据
  const rulesMeta = eslint.getRulesMetaForResults(results);

  // 过滤出包含错误或警告的结果并进行格式化
  return results
    .filter(({ warningCount, errorCount }) => errorCount || warningCount)
    .map(
      ({
        filePath,
        messages,
        errorCount,
        warningCount,
        fixableErrorCount,
        fixableWarningCount,
      }) => ({
        filePath,
        errorCount,
        warningCount: quiet ? 0 : warningCount,
        fixableErrorCount,
        fixableWarningCount: quiet ? 0 : fixableWarningCount,
        messages: messages
          .map(({ line = 0, column = 0, ruleId, message, fatal, severity }) => {
            return {
              line,
              column,
              rule: ruleId,
              url: rulesMeta[ruleId]?.docs?.url || '',
              message: message.replace(/([^ ])\.$/u, '$1'),
              errored: fatal || severity === 2,
            };
          })
          // 过滤出符合要求的消息
          .filter(({ errored }) => (quiet ? errored : true)),
      }),
    );
}
