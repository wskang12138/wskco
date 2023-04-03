type TextProps = {
    /**
     * @description 文字内容
     */
    text: string;
    /**
     * @description 原生 SVG - text 标签中的 x 属性
     */
    x: string;
    /**
     * @description 原生 SVG - text 标签中的 y 属性
     */
    y: string;
    /**
     * @description 原生 SVG className
     * @default -
     */
    className: string;
    /**
     * @description 原生 SVG - text 标签样式
     */
    textStyle?: object;
    /**
     * @description 边框颜色
     */
    borderColor: string;
    /**
     * @description 字体颜色
     */
    textColor: string;
  }
  export { TextProps };
