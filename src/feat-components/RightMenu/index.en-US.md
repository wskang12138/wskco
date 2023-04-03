---
title:  rightMenu 
nav:
  title: Component
  path: /components
group:
  title: feat
---
## When to use

Customize the right-click menu.

## Base use

<code src="./demo/index.tsx"></code>

## API

### RightMenuType

|    参数    |              说明              |          类型          | 默认值 | 
| :--------: | :----------------------------: | :--------------------: | :----: | 
| menuItems  |             菜单项             |     `TMenuItem[]`      |   -    |  
| visibility |            受控显隐            |        boolean         |   -    | 
|  position  |          受控显示位置          |    [number, number]    |   -    | 
| classnames |            外层样式            |         string         |   -    |  
|  seeState  | 是否让父组件刷新，或是手动刷新 |        boolean         |   -    | 
|  onCancel  |           关闭的回调           | `(v: boolean) => void` |   -    |  

### TMenuItem

|  参数   |      说明      |           类型            | 默认值 | 
| :-----: | :------------: | :-----------------------: | :----: | 
|   key   | 菜单项唯一标识 |      number\|string       |   -    |  
|  label  |      标题      | string \| React.ReactNode |   -    |  
| disable |    是否禁用    |          boolean          |   -    |
