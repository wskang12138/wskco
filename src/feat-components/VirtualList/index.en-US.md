---
title:  VirtualList 
nav:
  title: Component
  path: /components
group:
  title: feat
---
# VirtualList 

Virtual list is a technique for rendering a portion of long list data based on the visible area of scrolling container elements.

## preface

### propose

It is recommended to use mature libraries in production environments, such as:

- react-window
- react-virtualized

### Normal List VS Virtual List

<code src="./demo/index1.tsx"></code>

From the console, you can see:

- A normal list renders 1000 DOM elements at once, which takes a long time, approximately 36 ms.
- The virtual list is calculated to render only a portion of the DOM elements in the visible area, approximately 1.3 ms.
- During subsequent scrolling of the list, the normal list will not trigger the view update again; Due to the need to recalculate visual area elements in virtual lists, view updates are frequently triggered.。

## Simple implementation of virtual lists

Next, we will easily implement a virtual list, and there will be two situations: element fixed height and element not fixed height.

## 【Element height determination】FixedSizeList

###  Basic use
<code src="./demo/index2.tsx"></code>

## 【Element indeterminate height】VariableSizeList

### Basic use

<code src="./demo/index3.tsx"></code>

<API exports='["FixedSizeList"]' />

<API exports='["VariableSizeList"]' />