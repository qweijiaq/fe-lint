/**
 * 本文件的规则由 eslint-plugin-import 提供
 * 与 eslint-plugin-import 推荐配置对齐
 * @see https://github.com/import-js/eslint-plugin-import
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js
 */

module.exports = {
  plugins: [
    'import', // 启用 import 相关的 lint 规则
  ],
  settings: {
    'import/ignore': [
      // 配置哪些文件/文件类型不进行 import lint 检查
      'node_modules', // 忽略 node_modules 文件夹下的所有文件
      '\\.(coffee|scss|css|less|hbs|svg|json)$', // 忽略特定后缀名的文件
    ],
  },
  rules: {
    /**
     * Static analysis
     */

    // 确保 import 的模块能够被解析到
    'import/no-unresolved': 'error',

    // 确保命名 import 与命名 export 相对应
    'import/named': 'error',

    // 确保 default import 与 default export 相对应
    'import/default': 'error',

    // 确保导入的命名空间包含已解引用的属性
    'import/namespace': 'error',

    /**
     * Helpful warnings
     */

    // 禁止使用无效的 exports，例如多个默认导出
    'import/export': 'error',

    // 当 import 一个文件时，禁止 default import 的名字与文件内的命名 export 相同
    'import/no-named-as-default': 'error',

    // 访问 default export 的属性时，如果文件中有与属性同名的命名 export，则给出警告
    'import/no-named-as-default-member': 'warn',

    // 禁止使用带有 jsdoc-marked-deprecated 的 import
    'import/no-deprecated': 'off',

    // 禁止使用不必要的包
    'import/no-extraneous-dependencies': 'off',

    // 禁止可变的导出
    'import/no-mutable-exports': 'off',

    /**
     * Module systems
     */

    // 报告可能存在歧义的解析目标（脚本 vs. 模块）
    'import/unambiguous': 'off',

    // 禁止使用 require()
    'import/no-commonjs': 'off',

    // 禁止 AMD 的 require/define
    'import/no-amd': 'warn',

    // 不允许使用 Node.js 内置模块
    'import/no-nodejs-modules': 'off',

    /**
     * Style guide
     */

    // import 语句需要放到模块的最上方
    'import/first': 'error',

    // 不允许使用多个 import 引入同一模块
    'import/no-duplicates': 'error',

    // 禁止使用命名空间导入
    'import/no-namespace': 'off',

    // 确保在导入路径中一致使用文件扩展名
    'import/extensions': 'off',

    // import 语句的排序
    'import/order': [
      'off',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],

    // 在最后一个 import / require 语句后保留一个空行
    'import/newline-after-import': 'warn',

    // 当模块内只有一个 export 时，使用 default export
    'import/prefer-default-export': 'off',

    // 限制特定文件夹中可导入的文件
    'import/no-restricted-paths': 'off',

    // 禁止模块具有过多的依赖项
    'import/max-dependencies': ['off', { max: 10 }],

    // 禁止绝对路径引入模块
    'import/no-absolute-path': 'off',

    // 禁止 require() 使用表达式
    'import/no-dynamic-require': 'off',

    // 阻止导入其他模块的子模块
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],

    // 禁止在导入语句中使用 Webpack loader 语法
    'import/no-webpack-loader-syntax': 'off',

    // 防止未分配的导入
    'import/no-unassigned-import': 'off',

    // 禁止 import { default as foo } from './foo.js'
    // 应改写为 import foo from './foo.js'
    'import/no-named-default': 'off',

    // 报告模块的默认导出是否未命名
    'import/no-anonymous-default-export': [
      'off', // 关闭此规则
      {
        allowArray: false, // 不允许匿名数组导出
        allowArrowFunction: false, // 不允许匿名箭头函数导出
        allowAnonymousClass: false, // 不允许匿名类导出
        allowAnonymousFunction: false, // 不允许匿名函数导出
        allowLiteral: false, // 不允许字面量对象导出
        allowObject: false, // 不允许匿名对象导出
      },
    ],

    // 此规则强制所有导出声明在文件底部
    'import/exports-last': 'off',

    // 首选将命名导出组合在单个导出声明中
    'import/group-exports': 'off',

    // 禁止默认导出。这是一个糟糕的规则，请不要使用它
    'import/no-default-export': 'off',

    // 不要产生自引用
    'import/no-self-import': 'error',

    // 不要产生循环引用
    'import/no-cycle': ['error', { maxDepth: Infinity }], // 禁止模块之间的循环引用，任意深度

    // 确保没有无用的路径段
    'import/no-useless-path-segments': 'off',

    // 动态导入需要一个带有 webpackChunkName 的前导注释
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [], // 动态导入函数列表
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+', // webpackChunkName 格式正则表达式
      },
    ],

    // 使用此规则防止相对父路径的文件夹导入
    'import/no-relative-parent-imports': 'off',
  },
};
