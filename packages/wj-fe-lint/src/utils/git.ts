import execa from 'execa';

/**
 * 获取此次 commit 修改的文件列表
 * @param options execa 的选项
 * @returns 修改的文件列表
 */
export const getCommitFiles = async (options: execa.Options = {}): Promise<string[]> => {
  try {
    const { stdout } = await execa(
      'git',
      [
        'diff',
        '--staged', // 比较暂存区和上次提交的差异
        '--diff-filter=ACMR', // 仅显示添加、复制、修改、重命名的文件
        '--name-only', // 仅显示修改的文件名称
        '--ignore-submodules',
      ],
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

    return stdout ? stdout.split(/\s/).filter(Boolean) : [];
  } catch (e) {
    return [];
  }
};

/**
 * 获取未添加到暂存区的修改文件列表
 * @param options execa 的选项
 * @returns 未添加的修改文件列表
 */
export const getAmendFiles = async (options: execa.Options = {}): Promise<string> => {
  try {
    const { stdout } = await execa(
      'git',
      [
        'diff', // 比较工作区和暂存区的差异
        '--name-only',
      ],
      {
        ...options,
        all: true,
        cwd: options.cwd || process.cwd(),
      },
    );

    return stdout;
  } catch (e) {
    return '';
  }
};
