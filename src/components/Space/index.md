---
title: Space 间距
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。

- 可以设置各种水平对齐方式。

## 基本使用

相邻组件水平间距。

<code src="./demos/index1.tsx" />

## 垂直间距

可以设置垂直方向排列的间距。

<code src="./demos/index2.tsx" />

## 间距大小

间距预设大、中、小三种大小。

通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。

<code src="./demos/index3.tsx" />

## 环绕间距

环绕类型的间距，四周都有间距，一般用于换行的场景，配置 size 为[12,18]分别表示水平、垂直间距。

<code src="./demos/index5.tsx" />

## 自定义尺寸

自定义间距大小。
<code src="./demos/index4.tsx" />

## 对齐

设置对齐模式。内置 4 种对齐方式，分别为 start center end baseline，在水平模式下默认为 center。
<code src="./demos/index6.tsx" />

<API />
