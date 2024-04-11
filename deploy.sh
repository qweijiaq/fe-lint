#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 获取远程仓库的推送地址和当前提交信息
push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`

# 指定生成的静态文件路径、推送的分支名称
dist_path=docs/.vuepress/dist
push_branch=gh-pages

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd $dist_path

# 初始化 Git 仓库、添加所有文件、提交并推送到远程分支
git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $push_addr HEAD:$push_branch

# 返回到原始目录，并删除生成的静态文件
cd -
rm -rf $dist_path

