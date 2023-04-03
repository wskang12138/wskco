import { ReactElement } from 'react';
type StringRainProps = {
    /**
     * @description 字体大小
     */
    fontSize: number;
    /**
     * @description 字符雨列数，最大值 50
     */
    col: number;
    /**
     * @description 字符雨颜色
     */
    color: string;
    /**
     * @description 注入自定义样式
     */
    className?: string;
    children: ReactElement;
  }
  
  export {StringRainProps}