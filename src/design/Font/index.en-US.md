---
title: Font
nav:
  title: Design
  path: /design
group:
  title:  Global Styles
---

# Font

Font is one of the most basic components in systematic interface design.

Our users understand content and complete work through text, and a scientific font system will greatly improve the user's reading experience and work efficiency. Ant Design font scheme is based on the design principle of "dynamic order", combined with the rules of natural logarithm and rhythm, and is recommended to everyone after being verified by a large number of ants in the background products. To define a font system in the background visual system, we suggest starting from the following five aspects:


1. Main font

2. Font Family

3. Word Scale and Line Height

4. Word weight

5. Font color

## Main font

The main font is 14 to ensure optimal reading efficiency for users on most commonly used displays.

## Font Family

The default interface font of the system is preferred, and a set of standby font library for screen display is provided to maintain good legibility and readability of fonts under the display of different platforms and browsers, reflecting friendly, stable and professional characteristics.

```
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$font-family-base: $font-family-sans-serif !default;
```

## Word Scale and Line Height

The font scale and line height determine the dynamic and orderly beauty of a font system. Font scale refers to a series of regular fonts of different sizes. Line height can be understood as an invisible box wrapped around a font.

The following are three different font sizes and corresponding line heights for this project.

| Correspondence  |     |     |     |
| ----------- | --- | --- | --- |
| Font Size   | 12  | 14  | 16  |
| Line Height | 20  | 22  | 24  |
