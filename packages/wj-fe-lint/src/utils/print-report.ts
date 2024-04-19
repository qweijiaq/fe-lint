import chalk from 'chalk';
import table from 'text-table';
import terminalLink from 'terminal-link';
import isDocker from 'is-docker';
import stripAnsi from 'strip-ansi';
import { PKG_NAME, UNICODE } from './constants';
import type { ScanResult } from '../types';

/**
 * 在控制台打印扫描报告
 * @param results 扫描结果列表
 * @param fix 是否进行代码修复
 */
export default (results: ScanResult[], fix: boolean): void => {
  let output = '\n';
  let errorCount = 0;
  let warningCount = 0;
  let fixableErrorCount = 0;
  let fixableWarningCount = 0;
  let summaryColor = 'yellow';

  /**
   * 转换扫描消息格式
   * @param {*} param0 扫描消息
   * @returns {string[]} 格式化后的消息数组
   */
  const transformMessage = ({ line, column, rule, url, message, errored }) => {
    if (errored) summaryColor = 'red';
    let text = '';
    // 如果存在规则和相关URL，则使用超链接格式化规则名称，否则使用普通规则名称
    if (rule && url) {
      text = terminalLink(chalk.blue(rule), chalk.dim(` ${url} `), { fallback: !isDocker() });
    } else if (rule) {
      text = chalk.blue(rule);
    }

    // 返回格式化后的消息数组
    return [
      '',
      chalk.dim(`${line}:${column}`),
      errored ? chalk.red('error') : chalk.yellow('warning'),
      message,
      text,
    ];
  };

  // 遍历结果列表，生成报告
  for (const result of results) {
    if (result.messages.length === 0) continue;
    const { messages } = result;

    // 统计错误、警告数量
    errorCount += result.errorCount;
    warningCount += result.warningCount;
    fixableErrorCount += result.fixableErrorCount;
    fixableWarningCount += result.fixableWarningCount;

    // 构建文件路径和消息表格
    output += `${chalk.underline(result.filePath)}\n`;
    output += `${table(messages.map(transformMessage), {
      align: ['.', 'r', 'l'],
      stringLength: (str) => stripAnsi(str).length,
    })}\n\n`;
  }

  const total = errorCount + warningCount;
  const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

  // 修复日志
  if (fix) output += chalk.green('代码规范问题自动修复完成，请通过 git diff 确认修复效果 :D\n');
  if (fix && total > 0) {
    output += chalk.green('ps. 以上显示的是无法被自动修复的问题，需要手动进行修复\n');
  }

  // 扫描日志，预期:
  // ✖ x problems (y errors, z warnings)
  // y error and z warnings potentially fixable with the `wj-fe-lint fix`
  //
  // ✔ no problems
  if (!fix && total > 0) {
    output += chalk[summaryColor].bold(
      [
        `${UNICODE.failure} `,
        total,
        pluralize(' problem', total),
        ' (',
        errorCount,
        pluralize(' error', errorCount),
        ', ',
        warningCount,
        pluralize(' warning', warningCount),
        ')\n',
      ].join(''),
    );
    if (fixableErrorCount > 0 || fixableWarningCount > 0) {
      output += chalk[summaryColor].bold(
        [
          '  ',
          fixableErrorCount,
          pluralize(' error', fixableErrorCount),
          ' and ',
          fixableWarningCount,
          pluralize(' warning', fixableWarningCount),
          ` potentially fixable with the \`${PKG_NAME} fix\``,
        ].join(''),
      );
    }
  }
  if (!fix && total === 0) output = chalk.green.bold(`${UNICODE.success} no problems`);

  // 打印报告
  console.log(chalk.reset(output));
};
