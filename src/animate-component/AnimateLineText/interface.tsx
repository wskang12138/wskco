type LineTextProps = {
    /**
     * @description 用于定义原生 symbol 标签的 id，不设置则内部采用随机 ID
     */
    id: string;
    /**
     * @description 传入文字
     */
    content: {
        value: string;
        x: string;
        y: string;
        style: object;
    }[];
    /**
     * @description 字体宽度
     */
    strokeWidth: string;
}
export  { LineTextProps }