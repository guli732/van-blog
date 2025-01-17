---
title: 黑暗模式与响应式
---

`vanBlog` 的前后台都支持黑暗模式和自动切换。并且都适配了从移动端到 PC 端的各种尺寸布局。

## 暗色模式

你可以在页面右上角找到主题切换 `logo` 点击后就可以切换主题了。默认为自动模式。

![](https://pic.mereith.com/img/0d46e2d13a493cc16ddba9d98e67d743.clipboard-2022-08-16.png)

- 自动模式：会先匹配系统的颜色模式，如果没有设置或者也为自动，就会匹配当前时间，如果为下午 6 点到早上 8 点直接，就会切换到暗色模式，其他时间为亮色模式。并维护一个自动模式主题切换定时器，以便在系统设置更改或时间变化时自动切换主题。

## 响应式

`vanBlog` 前后台都支持不同尺寸自适应，需要注意的是：

- 后台的`文章管理`和`草稿管理`中的列表会根据`屏幕尺寸大小`灵活显示不同数量的列。
- 后台的`图床管理` 目前是通过鼠标右键触发高级操作的，移动端不支持。
