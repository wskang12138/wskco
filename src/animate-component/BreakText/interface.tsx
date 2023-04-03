type  BreakTextProps = {
    /**
     * @description 文字内容
     */
    text: string;
    /**
     * @description 文字缩放。由于动画采用固定的 px 值及绝对定位进行设计，因此尽量通过 scale 调整文字大小，字体基准大小为 36px。
     */
    scale: number;
    /**
     * @description 容器样式
     * @default -
     */
    className: string;
    /**
     * @description 文字样式
     * @default -
     */
    textStyle: object;
  }
  export { BreakTextProps }