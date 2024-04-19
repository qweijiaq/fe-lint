import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import inquirer from 'inquirer';
import log from './log';
import { PKG_NAME } from './constants';
import type { PKG } from '../types';

// 精确移除依赖
const packageNamesToRemove = [
  '@babel/eslint-parser',
  '@commitlint/cli',
  '@iceworks/spec',
  'babel-eslint',
  'eslint',
  'husky',
  'markdownlint',
  'prettier',
  'stylelint',
  'tslint',
];

// 按前缀移除依赖
const packagePrefixesToRemove = [
  '@commitlint/',
  '@typescript-eslint/',
  'eslint-',
  'stylelint-',
  'markdownlint-',
  'commitlint-',
];

/**
 * 待删除的无用配置
 * @param cwd 当前工作目录
 */
const checkUselessConfig = (cwd: string): string[] => {
  return []
    .concat(glob.sync('.eslintrc?(.@(yaml|yml|json))', { cwd })) // 查找并返回所有匹配的文件路径
    .concat(glob.sync('.stylelintrc?(.@(yaml|yml|json))', { cwd })) // 查找并返回所有匹配的文件路径
    .concat(glob.sync('.markdownlint@(rc|.@(yaml|yml|jsonc))', { cwd })) // 查找并返回所有匹配的文件路径
    .concat(
      glob.sync('.prettierrc?(.@(cjs|config.js|config.cjs|yaml|yml|json|json5|toml))', { cwd }), // 查找并返回所有匹配的文件路径
    )
    .concat(glob.sync('tslint.@(yaml|yml|json)', { cwd })) // 查找并返回所有匹配的文件路径
    .concat(glob.sync('.kylerc?(.@(yaml|yml|json))', { cwd })); // 查找并返回所有匹配的文件路径
};

/**
 * 待重写的配置
 * @param cwd 当前工作目录
 */
const checkReWriteConfig = (cwd: string) => {
  return glob
    .sync('**/*.ejs', { cwd: path.resolve(__dirname, '../config') }) // 查找并返回所有匹配的文件路径
    .map((name) => name.replace(/^_/, '.').replace(/\.ejs$/, '')) // 替换文件名的前缀和后缀
    .filter((filename) => fs.existsSync(path.resolve(cwd, filename))); // 检查文件是否存在，并返回所有匹配的文件路径
};

/**
 * 检查和解决项目中的依赖和配置冲突
 * @param cwd 当前工作目录
 * @param rewriteConfig 是否需要重写配置
 */
export default async (cwd: string, rewriteConfig?: boolean) => {
  const pkgPath = path.resolve(cwd, 'package.json'); // package.json 文件路径
  const pkg: PKG = fs.readJSONSync(pkgPath); // 读取 package.json 文件内容
  const dependencies = [].concat(
    Object.keys(pkg.dependencies || {}),
    Object.keys(pkg.devDependencies || []),
  ); // 获取所有依赖列表
  const willRemovePackage = dependencies.filter(
    (name) =>
      packageNamesToRemove.includes(name) ||
      packagePrefixesToRemove.some((prefix) => name.startsWith(prefix)), // 筛选需要移除的依赖
  );
  const uselessConfig = checkUselessConfig(cwd); // 获取无用的配置文件列表
  const reWriteConfig = checkReWriteConfig(cwd); // 获取需要重写的配置文件列表
  const willChangeCount = willRemovePackage.length + uselessConfig.length + reWriteConfig.length; // 计算需要变更的数量

  // 提示是否移除原配置
  if (willChangeCount > 0) {
    log.warn(`检测到项目中存在可能与 ${PKG_NAME} 冲突的依赖和配置，为保证正常运行将`);

    if (willRemovePackage.length > 0) {
      log.warn('删除以下依赖：');
      log.warn(JSON.stringify(willRemovePackage, null, 2)); // 打印需要移除的依赖列表
    }

    if (uselessConfig.length > 0) {
      log.warn('删除以下配置文件：');
      log.warn(JSON.stringify(uselessConfig, null, 2)); // 打印需要删除的配置文件列表
    }

    if (reWriteConfig.length > 0) {
      log.warn('覆盖以下配置文件：');
      log.warn(JSON.stringify(reWriteConfig, null, 2)); // 打印需要重写的配置文件列表
    }

    if (typeof rewriteConfig === 'undefined') {
      const { isOverWrite } = await inquirer.prompt({
        type: 'confirm',
        name: 'isOverWrite',
        message: '请确认是否继续：',
      }); // 提示用户是否继续执行操作

      if (!isOverWrite) process.exit(0); // 如果用户选择不继续，则退出程序
    } else if (!reWriteConfig) {
      process.exit(0); // 如果不需要重写配置，则退出程序
    }
  }

  // 删除配置文件
  for (const name of uselessConfig) {
    fs.removeSync(path.resolve(cwd, name)); // 删除无用的配置文件
  }

  // 修正 package.json
  delete pkg.eslintConfig;
  delete pkg.eslintIgnore;
  delete pkg.stylelint;
  for (const name of willRemovePackage) {
    delete (pkg.dependencies || {})[name];
    delete (pkg.devDependencies || {})[name]; // 移除 package.json 中的依赖
  }
  fs.writeFileSync(path.resolve(cwd, 'package.json'), JSON.stringify(pkg, null, 2), 'utf8'); // 写入修正后的 package.json

  return pkg; // 返回修正后的 package.json
};
