```json
{
  "name": "wj-fe-lint", // 包名
  "private": true, // 是否为私有包
  "description": "前端编码规范工程化", // 包描述
  "scripts": {
    // npm 脚本命令
    "preinstall": "npx only-allow pnpm", // 安装前的钩子命令
    "prepare": "husky install", // 准备阶段的命令
    "init": "pnpm install", // 初始化命令
    "clean": "lerna clean && rm -rf node_modules", // 清理命令
    "test": "lerna run test", // 测试命令
    "docs:dev": "vuepress dev docs", // 开发文档命令
    "docs:build": "vuepress build docs", // 构建文档命令
    "deploy": "bash deploy.sh", // 部署命令
    "publish": "lerna publish", // 发布命令
    "lint": "markdownlint README.md", // 检查命令
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s" // 生成变更日志命令
  },
  "keywords": [
    // 关键词
    "GopherLint",
    "fe lint"
  ],
  "author": "Pony Wei", // 作者
  "license": "ISC", // 许可证
  "devDependencies": {
    // 开发依赖
    "@commitlint/cli": "^17.6.1",
    "husky": "^8.0.3",
    "lerna": "^6.6.2",
    "markdownlint": "^0.28.1",
    "pnpm": "^8.6.0",
    "rimraf": "^3.0.2",
    "ts-node": "^10.9.1",
    "tslib": "^2.5.2",
    "typedoc": "^0.24.7",
    "typescript": "^5.0.4",
    "vue-template-compiler": "^2.7.14",
    "vuepress": "^1.9.9",
    "vuepress-plugin-one-click-copy": "^1.0.2",
    "vuepress-plugin-zooming": "^1.1.7"
  },
  "dependencies": {
    // 依赖
    "conventional-changelog-conventionalcommits": "^4.5.0"
  },
  "publishConfig": {
    // 发布配置
    "access": "public", // 访问级别
    "registry": "https://registry.npmjs.org/" // 发布的 npm registry 地址
  }
}
```
