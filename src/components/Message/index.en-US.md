---
title: Message
nav:
  title: Component
  path: /components
group:
  title: base
mobile: false
---

# Message

Lightweight global feedback triggered by user actions.

## Basic use

The simplest example.

<code src="./demos/index1.tsx"/>

## Different types

There are six different types of global prompts: info, success, warning, error, normal, and loading.

<code src="./demos/index2.tsx"/>

## State change

Multiple states appear continuously through the duration attribute.

Note: There is 200ms animation before each message disappears, and the specific time needs to be calculated so that the position display is correct.

<code src="./demos/index3.tsx"/>

## Different locations

Through the position attribute, the selection appears above/below.

<code src="./demos/index4.tsx"/>

## Manual shutdown

The clearable attribute allows you to manually close.

<code src="./demos/index5.tsx"/>

<API ></API>
