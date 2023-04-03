
type FPSProps = {
    /**
     * @description 是否渲染成DOM元素
     * @default true
     */
    render?: boolean;
    /**
     * @description 元素节点样式，仅在render为true时生效
     * @default -
     */
    className?: string;
    /**
     * @description FPS变化回调，传入新的FPS
     */
    onChange?: Function;
}
export {FPSProps}