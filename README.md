# 🌟 WSK 前端组件库

简体中文 | [English](./README.en-US.md)

## 📒 目录介绍


```

├─ .editorconfig
├─ .fatherrc.ts         father 配置
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ docs                              文档存放路径
│  ├─ guide
│  ├─ index.en-US.md
│  └─ index.md                       首页展示
├─ LICENSE
├─ package.json
├─ README.en-US.md
├─ README1.md
├─ src                               组件主目录
│  ├─ animate-component              动画组件
│  │  ├─ AnimateLineSimpleText
│  │  ├─ AnimateLineText
│  │  ├─ BreakText
│  │  ├─ NumberCount3D
│  │  ├─ OutlineAnimation
│  │  └─ StringRain
│  ├─ components                     基础组件
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
│  ├─ design                          设计
│  │  ├─ Colors
│  │  └─ Font
│  ├─ feat-components                 功能组件
│  │  ├─ DownloadButton
│  │  ├─ DragList
│  │  ├─ FPS
│  │  ├─ RightMenu
│  │  ├─ SliceUpload
│  │  ├─ VirtualList
│  │  └─ Watermark
│  ├─ global.scss                     全局样式
│  ├─ index.d.ts
│  ├─ index.ts
│  └─ styles                            自定义样式
├─ tsconfig.json
├─ typings.d.ts
└─ yarn.lock

```

其余文件可自行查阅了解。

## 🤖 命令介绍

| 名称                    | 描述           | 备注                                                                 |
| ----------------------- | -------------- | -------------------------------------------------------------------- |
| `npm run start`         | 项目启动       | 使用 [dumi](https://github.com/umijs/dumi)，组件开发和文档开发在一起 |
| `npm run test`          | 组件测试       | -                                                                    |
| `npm run test:coverage` | 代码覆盖率查看 | -                                                                    |
| `npm run prettier`      | 代码美化       | -                                                                    |
| `npm run build`         | 组件打包       | 使用 [father](https://github.com/umijs/father) 工具                  |
| `npm run release`       | 组件打包发布   | -                                                                    |
| `npm run docs:build`    | 文档打包       | -                                                                    |
| `npm run docs:deploy`   | 文档发布       | 这里默认是使用了 GitHub Pages                                        |
| `npm run deploy`        | 文档打包发布   | -                                                                    |

