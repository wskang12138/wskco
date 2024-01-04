import { CSSProperties, SyntheticEvent } from 'react';

export interface CombinationProps {
  /**id */
  id?: string;
  /**类名 */
  className?: string;
  /**样式 */
  style?: CSSProperties;
  /**颜色 */
  color?: string;
  /**方向 */
  direction?: 'ltr' | 'rtl';
  /**图标颜色 */
  iconColor?: string;
  /**图标尺寸 */
  iconSize?: number | { width: number; height: number };
  /**字体大小 */
  fontSize?: number;
  /**图标 */
  icon?: string;
  /**文字 */
  text?: string;
  /**文字阴影 */
  textShadow?: boolean;
  /**透明度 */
  opacity?: number;
  /**点击事件 */
  onClick?: (e: SyntheticEvent<any>) => void;
}
