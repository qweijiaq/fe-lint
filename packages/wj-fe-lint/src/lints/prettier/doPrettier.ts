import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname, join } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

/**
 * 执行 Prettier 格式化。
 * @param options 扫描选项。
 */
export interface DoPrettierOptions extends ScanOptions {}

/**
 * 格式化文件。
 * @param filepath 文件路径。
 */
async function formatFile(filepath: string) {
  // 读取文件内容
  const text = await readFile(filepath, 'utf8');
  // 获取 Prettier 配置
  const options = await prettier.resolveConfig(filepath);
  // 格式化文件内容
  const formatted = prettier.format(text, { ...options, filepath });
  // 写入格式化后的内容
  await writeFile(filepath, formatted, 'utf8');
}

/**
 * 执行 Prettier 格式化。
 * @param options 扫描选项。
 */
export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    // 如果指定了文件列表，则只格式化指定的文件
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    // 否则，格式化匹配指定类型的文件
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }
  // 格式化所有文件
  await Promise.all(files.map(formatFile));
}
