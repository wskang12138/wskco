---
title:  VirtualList - 虚拟列表
nav:
  title: 组件
  path: /components
group:
  title: 功能
---
# VirtualList - 虚拟列表

虚拟列表是一种根据滚动容器元素的可视区域来渲染长列表数据中某一部分数据的技术。

## 前言

### 建议

生产环境中推荐使用成熟的库，如：

- react-window
- react-virtualized

### 普通列表 VS 虚拟列表

<code src="./demo/index1.tsx"></code>

通过控制台，可以看到：

- 普通列表一次性渲染 1000 个 DOM 元素，因此耗时较长，约 36 ms。
- 虚拟列表通过计算，只渲染可视区域部分 DOM 元素，约 1.3 ms。
- 后续滚动列表时，普通列表不会再次触发视图更新；而虚拟列表由于需要重新计算可视区域元素，因此会频繁触发视图更新。

## 简易实现虚拟列表

接下来将简易实现虚拟列表，并且会有两种情况：元素定高 & 元素不定高。

## 【元素定高】FixedSizeList

### 基础使用
<code src="./demo/index2.tsx"></code>

## 【元素不定高】VariableSizeList

### 基础使用

<code src="./demo/index3.tsx"></code>

<API exports='["FixedSizeList"]' />

<API exports='["VariableSizeList"]' />