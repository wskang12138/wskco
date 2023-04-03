---
title: Layout
nav:
  title: Components
  path: /components
group:
  title: base
---

# Layout

Handling the overall layout of a page.

## Component Overview

- Layout: a layout container, under which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container.

- Header: top layout, with its own default style, under which any element can be nested, and can only be placed in Layout.

- Sider: The sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout.

- Content: The content part has its own default style, under which any element can be nested and can only be placed in Layout.

- Footer: The bottom layout has its own default style. Any element can be nested under it and can only be placed in Layout.

## Basic Structure

Classic page layouts.

<code src="./demos/index1.tsx"/>

## Custom Layout

Customize the layout style according to the business requirements.

<code src="./demos/index2.tsx"/>

<API></API>
