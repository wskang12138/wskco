# WSK Design

[简体中文](./README.md) | English

## 📒 Catalog Introduction

```
├─ .editorconfig
├─ .fatherrc.ts                    father config
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ docs                            Document storage path
│  ├─ guide
│  ├─ index.en-US.md                 English Home page
│  └─ index.md                       Home page
├─ LICENSE
├─ package.json
├─ README.en-US.md
├─ README1.md
├─ src                              Component home directory
│  ├─ animate-component              Animate components
│  │  ├─ AnimateLineSimpleText
│  │  ├─ AnimateLineText
│  │  ├─ BreakText
│  │  ├─ NumberCount3D
│  │  ├─ OutlineAnimation
│  │  └─ StringRain
│  ├─ components                     Base components
│  │  ├─ Alert
│  │  ├─ Button
│  │  ├─ Divider
│  │  ├─ GlobalConfig
│  │  ├─ Layout
│  │  ├─ List
│  │  ├─ Menu
│  │  ├─ Message
│  │  ├─ Pagination
│  │  ├─ Select
│  │  ├─ Skeleton
│  │  ├─ Space
│  │  ├─ Switch
│  │  └─ Transition
│  ├─ design                          Description of Design
│  │  ├─ Colors
│  │  └─ Font
│  ├─ feat-components                 Eeat components
│  │  ├─ DownloadButton
│  │  ├─ DragList
│  │  ├─ FPS
│  │  ├─ RightMenu
│  │  ├─ SliceUpload
│  │  ├─ VirtualList
│  │  └─ Watermark
│  ├─ global.scss                     Global style
│  ├─ index.d.ts
│  ├─ index.ts
│  └─ styles                           Custom style
├─ tsconfig.json
├─ typings.d.ts
└─ yarn.lock

```
The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                    | Description               | Remarks                                                                                                            |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `npm run start`         | Project begining          | Document usage [dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm run test`          | Component test            | -                                                                                                                  |
| `npm run test:coverage` | Code coverage review      | -                                                                                                                  |
| `npm run prettier`      | Code prettier             | -                                                                                                                  |
| `npm run build`         | Component packaging       | Use [father](https://github.com/umijs/father)                                                                      |
| `npm run release`       | Component package release | -                                                                                                                  |
| `npm run docs:build`    | Document packaging        | -                                                                                                                  |
| `npm run docs:deploy`   | Document release          | The default is to use GitHub Pages                                                                                 |
| `npm run deploy`        | Document package release  | -                                                                                                                  |
