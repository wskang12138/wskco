---
title: 字体
nav:
  title: 设计
  path: /design
group:
  title: 全局样式
---

# 字体

字体是体系化界面设计中最基本的构成之一。

我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。Ant Design 字体方案，是基于「动态秩序」的设计原则，结合了自然对数以及音律的规则得出的，再经过了大量的蚂蚁中后台产品验证之后，推荐给大家。在中后台视觉体系中定义字体系统，我们建议从下面五个方面出发：

1. 主字体

2. 字体家族

3. 字阶与行高

4. 字重

5. 字体颜色

## 主字体

主字体为 14，以保证在多数常用显示器上的用户阅读效率最佳。

## 字体家族

优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。

```
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$font-family-base: $font-family-sans-serif !default;
```

## 字阶与行高

字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。

以下是该项目 3 个不同尺寸的字体以及与之相对应的行高。

| 对应关系    |     |     |     |
| ----------- | --- | --- | --- |
| Font Size   | 12  | 14  | 16  |
| Line Height | 20  | 22  | 24  |
