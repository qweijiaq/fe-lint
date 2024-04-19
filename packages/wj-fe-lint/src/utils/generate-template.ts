import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import glob from 'glob';
import ejs from 'ejs';
import {
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_EXT,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWN_LINT_IGNORE_PATTERN,
} from './constants';

/**
 * 合并 vscode 配置文件
 * @param filepath 目标文件路径
 * @param content 待合并的内容
 */
const mergeVSCodeConfig = (filepath: string, content: string) => {
  // 如果目标文件不存在，直接返回待合并的内容
  if (!fs.existsSync(filepath)) return content;

  try {
    const targetData = fs.readJSONSync(filepath); // 读取目标文件内容
    const sourceData = JSON.parse(content); // 解析待合并的内容为 JSON 格式
    return JSON.stringify(
      _.mergeWith(targetData, sourceData, (target, source) => {
        if (Array.isArray(target) && Array.isArray(source)) {
          return [...new Set(source.concat(target))]; // 合并数组并去重
        }
      }),
      null,
      2,
    );
  } catch (e) {
    return ''; // 发生错误时返回空字符串
  }
};

/**
 * 生成模板文件
 * @param cwd 当前工作目录
 * @param data 模板数据
 * @param vscode 是否为 VSCode 配置
 */
export default (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  const templatePath = path.resolve(__dirname, '../config'); // 模板文件路径
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath }); // 获取模板文件列表
  for (const name of templates) {
    const filepath = path.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.')); // 目标文件路径
    let content = ejs.render(fs.readFileSync(path.resolve(templatePath, name), 'utf8'), {
      eslintIgnores: ESLINT_IGNORE_PATTERN, // ESLint 忽略规则
      stylelintExt: STYLELINT_FILE_EXT, // Stylelint 扫描文件扩展名
      stylelintIgnores: STYLELINT_IGNORE_PATTERN, // Stylelint 忽略规则
      markdownLintIgnores: MARKDOWN_LINT_IGNORE_PATTERN, // MarkdownLint 忽略规则
      ...data, // 其他模板数据
    });

    // 合并 vscode 配置文件
    if (/^_vscode/.test(name)) {
      content = mergeVSCodeConfig(filepath, content);
    }

    // 如果内容为空，则跳过写入文件的操作
    if (!content.trim()) continue;

    fs.outputFileSync(filepath, content, 'utf8'); // 写入文件
  }
};
