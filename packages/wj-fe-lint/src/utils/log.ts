import chalk from 'chalk';
import { PKG_NAME, UNICODE } from './constants';

const { green, blue, yellow, red } = chalk;

/**
 * 打印成功信息
 * @param text 成功信息文本
 */
export default {
  success(text: string) {
    console.log(green(text));
  },
  /**
   * 打印信息
   * @param text 信息文本
   */
  info(text: string) {
    console.info(blue(text));
  },
  /**
   * 打印警告信息
   * @param text 警告信息文本
   */
  warn(text: string) {
    console.info(yellow(text));
  },
  /**
   * 打印错误信息
   * @param text 错误信息文本
   */
  error(text: string) {
    console.error(red(text));
  },
  /**
   * 打印结果信息
   * @param text 结果信息文本
   * @param pass 是否通过
   */
  result(text: string, pass: boolean) {
    console.info(
      blue(`[${PKG_NAME}] ${text}`),
      pass ? green(UNICODE.success) : red(UNICODE.failure),
    );
  },
};
