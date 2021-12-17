---
title: 白嫖永久服务器+域名搭建个人博客
date: 2021-12-17
tags:
 - 教程
categories: 
 - 教程
---
::: tip 介绍
服务器和域名利用vercel的免费资源，博客框架采用vuepress,主题采用 `vuepress-theme-reco@1.6.1`
:::
# 博客搭建
首先我们需要把博客初始化
## **安装**
```
npx @vuepress-reco/theme-cli init

# or

npm install @vuepress-reco/theme-cli -g
theme-cli init

# or 

yarn global add @vuepress-reco/theme-cli
theme-cli init

```
网络不好的同学使用cli可能会存在一些问题，可以去demo仓库拉下来一个，选择对应版本就可以了，这里我们选择1.x版本
https://github.com/vuepress-reco/vuepress-theme-reco-demo/tree/demo/1.x
> 制作教程的时候网络不是很好，感谢作者的热心解答
## github
如果没有github账号，可以自行注册一个。
**连接github仓库**
首先我们创建一个github仓库，然后连接他。

```git
git remote add origin 你的github仓库地址
git branch -M main
git push -u origin main
```
# 博客部署
我们利用的是vercel的免费资源，所以我们需要先注册个[vercel](https://vercel.com)账号

登录之后进入 [dashboard](https://vercel.com/dashboard) 页面
<img :src="$withBase('/course/vercel.jpg')"></img>
点击New Project按钮导入刚刚创建的github仓库

导入之后全部选择默认配置，博客会自己构建，以后每次本地push之后，vercel会自动构建

::: tip 
如果有什么疑问，可以在评论区提出。
关注人数较多的话，会考虑出更加详细的教程
[b站视频链接](https://www.bilibili.com/video/BV17Q4y1Y7LF?spm_id_from=333.999.0.0)

:::