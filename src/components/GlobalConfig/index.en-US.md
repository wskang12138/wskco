---
title: GlobalConfig
nav:
  title: Components
  path: /components
group:
  title: base
---

# GlobalConfig

Provides unified global configuration for components.

## Using

GlobalConfig uses the context feature of React, which only needs to be wrapped around the application once to take effect globally.

```tsx pure
import { GlobalConfig } from 'wskco';

// ...

export default () => (
  <GlobalConfig globalColor="orange">
    <App />
  </GlobalConfig>
);
```

## System theme

All components support theme color customization are listed here. You can switch theme colors in the demo.

<code src="./demos/index1.tsx"/>

## Custom Theme

Turn on dark mode through darkTheme, and add dark style .

Based on the use of dark mode, does not recommend using a custom theme at the same time, although it is also compatible.

<code src="./demos/index2.tsx"/>

## Light and dark theme

<code src="./demos/index3.tsx"/>

We recommend using the project background color and font color provided by WSK. The configuration is as follows:

```css pure
@import 'wskco/global.scss';
```

<API />
