import { ReactElement } from 'react';
type DragProps = {
    children: ReactElement[];
    /**
     * @description 拖拽后触发。参数分别为：新数组、拖拽元素 index、目标位置元素 index
     */
    onChange?: Function;
    /**
     * @description 对应原生 onDragEnd 回调
     */
    onDragEnd?: Function;
}
export { DragProps }
  