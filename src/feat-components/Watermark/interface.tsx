type WatermarkProps = {
  /**
   * @description 图片地址
   */
  url: string;
  /**
   * @description 图片样式
   * @default -
   */
  className?: string;
  /**
   * @description 文本对齐方式
   */
  textAlign: 'center' | 'end' | 'left' | 'right' | 'start';
  /**
   * @description 文本基线
   */
  textBaseline:
    | 'alphabetic'
    | 'top'
    | 'hanging'
    | 'middle'
    | 'ideographic'
    | 'bottom';
  /**
   * @description 字体
   */
  font?: string;
  /**
   * @description 样式
   */
  fillStyle?: string;
  /**
   * @description 文本内容
   */
  content?: string;
  /**
   * @description 回调，渲染完成后调用
   */
  cb?: Function;
  /**
   * @description 右边距
   */
  right?: number;
  /**
   * @description 下边距
   */
  bottom?: number;
};

export { WatermarkProps };
