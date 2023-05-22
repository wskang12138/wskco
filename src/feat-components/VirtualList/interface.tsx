import { ReactElement } from 'react';

type FixedSizeListProps = {
  children: ReactElement;
  /**
   * @description 列表可视区域宽度
   * @default -
   */
  width?: number;
  /**
   * @description 列表可视区域高度
   */
  height: number;
  /**
   * @description 列表数据长度
   */
  itemCount: number;
  /**
   * @description 列表行高
   */
  itemSize: number;
};
type VariableSizeListProps = {
  children: ReactElement;
  /**
   * @description 列表可视区域宽度
   * @default -
   */
  width?: number;
  /**
   * @description 列表可视区域高度
   */
  height: number;
  /**
   * @description 列表数据长度
   */
  itemCount: number;
  /**
   * @description 列表预估行高
   */
  itemSize?: number;
};
export { FixedSizeListProps, VariableSizeListProps };
