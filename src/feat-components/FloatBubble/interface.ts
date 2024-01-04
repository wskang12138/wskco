import { PropsWithChildren } from 'react';

/**悬浮窗口属性 */
export interface FloatBubbleProps extends PropsWithChildren<any> {
  /**是否展开 */
  isExpand: boolean;

  /**改变展开事件 */
  onChangeExpand?: (isExpand: boolean) => void;
}
