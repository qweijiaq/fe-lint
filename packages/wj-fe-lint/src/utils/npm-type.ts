import { sync as commandExistsSync } from 'command-exists'; // 导入 commandExistsSync 函数，用于检查命令是否存在

/**
 * npm 类型
 * 如果存在 pnpm 命令，则返回 'pnpm'，否则返回 'npm'
 */
const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!commandExistsSync('pnpm')) return resolve('npm'); // 如果不存在 pnpm 命令，则返回 'npm'

  resolve('pnpm'); // 如果存在 pnpm 命令，则返回 'pnpm'
});

export default promise;
