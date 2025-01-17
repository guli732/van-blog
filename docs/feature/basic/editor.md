---
title: 编辑器
---

::: info 公告
自 `v0.22.1` 起，`VanBlog` 切换为 [bytemd](https://github.com/bytedance/bytemd)（掘金同款编） 作为 markdown 编辑器。因为老的编辑器有些臃肿，还有些小毛病。

虽然新的编辑器不支持即时预览模式，但比较稳定简洁，易于拓展。
:::
`vanBlog` 后台内置了 [bytemd](https://github.com/bytedance/bytemd)（掘金同款） 作为 `markdown` 编辑器：

![](https://pic.mereith.com/img/577da489715c94c183247ba63887aac5.clipboard-2022-08-30.png)

支持数学公式和图表、支持一键上传剪切板图片到图床、一键插入 `more` 标记、快捷键、自动保存等功能。

## 一键插入 more 标记

`more` 标记是下面代码的简写，会被用来分割博客前台预览卡片中`阅读全文`之前的内容。

```html
<!-- more -->
```

![](https://pic.mereith.com/img/b613474a616f7e2b714735cb79aeff6a.clipboard-2022-08-15.png)

你可以点击工具栏最后第一个按钮快速在当前焦点插入 more 标记。

![](https://pic.mereith.com/img/59550a500ed84dea504f897dbe12ed07.clipboard-2022-08-29.png)

## 上传到图床

编辑器支持两种方式上传到图床：剪切板快捷上传、从文件上传。点击编辑器工具栏按钮后，后在当前焦点处插入上传后的图片并复制图片链接到剪切板，如果没有焦点就会上传到最上面。

![](https://pic.mereith.com/img/0a54a1e4fe8ac47cea8fa7aea89964ca.clipboard-2022-08-29.png)

## 自动保存

如果当前编辑的是 `草稿`，那当编辑器失去焦点的时候将会自动保存。console 日志会打印此行为，但前台不会有提示。

![](https://pic.mereith.com/img/c27465503f120c91d356ca5d91b94fbb.clipboard-2022-08-28.png)

## 导入内容

点击右上角操作按钮，选择 `导入内容`，选中需要导入的 `markdown` 文件即可。

![](https://pic.mereith.com/img/4218768fe6d1c8d69433bde3fd98c01b.clipboard-2022-08-30.png)

## 导出

点击右上角操作按钮，选择 `导出`，即可导出为 `markdown` 文件，相关数据会自动放置到 `front-matter` 中。

![](https://pic.mereith.com/img/4218768fe6d1c8d69433bde3fd98c01b.clipboard-2022-08-30.png)

## 修改信息

点击右上角操作按钮，选择 `修改信息`，即可对当前编辑的 `文章/草稿` 的信息就行修改。

![](https://pic.mereith.com/img/4218768fe6d1c8d69433bde3fd98c01b.clipboard-2022-08-30.png)

## 语法速查、快捷键与帮助

点击编辑器帮助按钮会显示 markdown 语法与快捷键信息：

![](https://pic.mereith.com/img/cabe5cdfddeedbd6e592f7aaea2f4afc.clipboard-2022-08-29.png)

## 图标和数学公式

> 图表语法速查 [Mermaid 从入门到入土——Markdown 进阶语法](https://zhuanlan.zhihu.com/p/355997933)
>
> 数学公式语法速查 [使用 Markdown 输出 LaTex 数学公式](https://zhuanlan.zhihu.com/p/59412540)
