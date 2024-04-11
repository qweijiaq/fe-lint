```json
{
  "version": "1.0.1", // 包的版本号
  "npmClient": "pnpm", // 使用的 npm 客户端
  "useWorkspaces": true, // 是否使用工作区
  "command": {
    "publish": {
      // 发布命令配置
      "npmClient": "npm", // 发布时使用的 npm 客户端
      "message": "chore(release): publish %s", // 发布提交的信息模板
      "registry": "https://registry.npmjs.org" // 发布到的 npm registry 地址
    },
    "packages": [
      // 指定发布的包路径
      "packages/*"
    ]
  }
}
```
