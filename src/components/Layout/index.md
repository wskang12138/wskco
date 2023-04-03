---
title: Layout 布局
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

# Layout 快速布局

<p>快速成型常见网页布局</p>

## 组件概述

- Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中
- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

## 基本结构

典型的页面布局。

<code src="./demos/index1.tsx"/>

## 自定义布局

<p>根据业务需求，自定义布局样式</p>

<code src="./demos/index2.tsx"/>

<API src='./index.tsx'></API>
