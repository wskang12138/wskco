---
title: GlobalConfig 全局配置
nav:
  title: 组件
  path: /components
group:
  title: 基础
---

# GlobalConfig 全局配置

为组件提供统一的全局化配置。

## 使用

GlobalConfig 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```tsx pure
import { GlobalConfig } from 'wskco';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

## 系统主题

此处列出了所有支持主题色自定义的组件，你可以在演示中切换主题色。

<code src="./demos/index1.tsx"/>

## 自定义主题

通过 darkTheme 开启暗黑模式，为所有添加暗黑样式。

在使用了暗黑模式的基础下， 不建议同时使用自定义主题，虽然也做了兼容。

<code src="./demos/index2.tsx"/>

## 明暗主题

<code src="./demos/index3.tsx"/>

我们推荐使用自带的项目背景色和字体色，配置如下：

```css pure
@import 'wskco/global.scss';
```

<API />
