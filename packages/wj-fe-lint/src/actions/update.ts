import { execSync } from 'child_process'; // 导入 execSync 函数，用于执行 shell 命令
import ora from 'ora'; // 导入 ora 模块，用于显示加载动画
import log from '../utils/log'; // 导入 log 模块，用于记录日志
import npmType from '../utils/npm-type'; // 导入 npmType 模块，用于获取 npm 类型
import { PKG_NAME, PKG_VERSION } from '../utils/constants'; // 导入常量 PKG_NAME 和 PKG_VERSION

/**
 * 检查最新版本号
 */
const checkLatestVersion = async (): Promise<string | null> => {
  const npm = await npmType; // 获取 npm 类型
  // 执行 shell 命令获取最新版本号
  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString('utf-8').trim();

  // 如果最新版本号与当前版本号相同，则返回 null
  if (PKG_VERSION === latestVersion) return null;

  // 将版本号字符串转换为数字数组，便于比较版本大小
  const compareArr = PKG_VERSION.split('.').map(Number);
  const beComparedArr = latestVersion.split('.').map(Number);

  // 依次比较版本号每一位大小
  for (let i = 0; i < compareArr.length; i++) {
    if (compareArr[i] > beComparedArr[i]) {
      return null; // 如果当前版本号大于最新版本号，则返回 null
    } else if (compareArr[i] < beComparedArr[i]) {
      return latestVersion; // 如果当前版本号小于最新版本号，则返回最新版本号
    }
  }
};

/**
 * 检查包的版本
 * @param install - 是否自动安装最新包，默认为 true
 */
export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本...`); // 创建 ora 实例，用于显示加载动画
  checking.start(); // 开始加载动画

  try {
    const npm = await npmType; // 获取 npm 类型
    const latestVersion = await checkLatestVersion(); // 获取最新版本号
    checking.stop(); // 停止加载动画

    // 如果存在最新版本并且允许自动安装，则执行更新操作
    if (latestVersion && install) {
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${latestVersion}`); // 创建 ora 实例，用于显示更新提示
      update.start(); // 开始加载动画

      // 执行 shell 命令安装最新版本
      execSync(`${npm} i -g ${PKG_NAME}`);

      update.stop(); // 停止加载动画
    } else if (latestVersion) {
      // 如果存在最新版本但不允许自动安装，则显示警告信息
      log.warn(
        `最新版本为 ${latestVersion}，本地版本为 ${PKG_VERSION}，请尽快升级到最新版本。\n您可以执行 ${npm} install -g ${PKG_NAME}@latest 来安装此版本\n`,
      );
    } else if (install) {
      // 如果不存在最新版本并且允许自动安装，则显示提示信息
      log.info(`当前没有可用的更新`);
    }
  } catch (e) {
    // 捕获异常并记录错误日志
    checking.stop(); // 停止加载动画
    log.error(e); // 记录错误日志
  }
};
