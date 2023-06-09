import { defineConfig } from 'dumi';

const repo = 'wsk';

export default defineConfig({
  title: 'wskco',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash', //采用hash模式刷新路由不会丢失
  },
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: process?.env?.NODE_ENV === 'development' ? `/${repo}/` : './',
  navs: {
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/wskang12138/wskco',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/wskang12138/wskco',
      },
    ],
  },
  exportStatic: {} // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // more config: https://d.umijs.org/config
});
