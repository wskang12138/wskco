import { CSSProperties, ReactNode } from 'react';

type layoutProps = {
  /**
   * @description 自定义内容
   */
  children?: ReactNode;
  /**
   * @description 容器 className
   */
  className?: string;
  /**
   * @description 指定样式
   * @default {}
   */
  style?: CSSProperties;
};

export { layoutProps };
