import ora from 'ora'; // 导入 ora 模块，用于显示加载动画
import scanAction from './actions/scan'; // 导入 scanAction 函数，用于执行扫描操作
import initAction from './actions/init'; // 导入 initAction 函数，用于执行初始化操作
import { PKG_NAME } from './utils/constants'; // 导入常量 PKG_NAME，用于显示包名
import printReport from './utils/print-report'; // 导入 printReport 函数，用于打印报告
import type { InitOptions, ScanOptions } from './types'; // 导入类型定义，用于初始化选项和扫描选项

// 定义初始化选项类型，排除 checkVersionUpdate 属性
type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;

// 导出 init 函数，用于执行初始化操作
export const init = async (options: IInitOptions) => {
  // 调用 initAction 函数执行初始化操作，禁止检查版本更新
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};

// 导出 scan 函数，用于执行代码扫描操作
export const scan = async (options: ScanOptions) => {
  // 创建 ora 实例，用于显示加载动画
  const checking = ora();
  // 开始加载动画，显示扫描操作提示信息
  checking.start(`执行 ${PKG_NAME} 代码检查`);

  // 执行代码扫描操作，获取报告结果
  const report = await scanAction(options);
  const { results, errorCount, warningCount } = report;
  let type = 'succeed'; // 默认为成功状态
  if (errorCount > 0) {
    type = 'fail'; // 如果存在错误，状态为失败
  } else if (warningCount > 0) {
    type = 'warn'; // 如果存在警告，状态为警告
  }

  // 根据状态结束加载动画
  checking[type]();
  // 如果存在扫描结果，打印报告
  if (results.length > 0) printReport(results, false);

  // 返回扫描报告
  return report;
};
