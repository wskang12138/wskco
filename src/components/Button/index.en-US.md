---
title: Button
nav:
  title: Components
  path: /components
group:
  title: base
---

# Button

The button is used to start an instant operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

We provide 7 types of button.

- Default button: for a set of action points with no primary or secondary.

- Base button: used for primary action points, there can only be one primary button in an operation area.

- Danger button: Dangerous operations such as deleting, moving, or modifying permissions.

- Warning button: unknown dangerous operation.

- Info button: generally used as a prompt.

- Text button: used for the lowest action point.

- Link button: generally used for linking, that is, navigation to a certain location.

- Dotted button: This button is often used for adding operations.

And 1 other properties additionally.

- disabled: when actions are not available.

## Basic use

The most basic button has 7 states.

<code src="./demos/index1.tsx" />

## Size

If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.

<code src="./demos/index2.tsx" />

## Font Button

Configure the Circle button.

<code src="./demos/index3.tsx" />

## Disable button

Configure the disabled disable button.

<code src="./demos/index4.tsx" />

<API exports='["API"]'></API>
