import { ReactNode, CSSProperties } from 'react';

type spaceAlignParams = {
  display?: 'flex';
  flexDirection?: 'row' | 'column';
  alignItems?: any;
};

interface SpaceProps<T> {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 间距大小
   * @default small
   */
  size?: 'mini' | 'small' | 'medium' | 'large' | number | Array<number>;
  /**
   * @description 垂直对齐方式
   * @default center
   */
  align?: 'start' | 'center' | 'end' | 'baseline';
}

export { SpaceProps, spaceAlignParams };
