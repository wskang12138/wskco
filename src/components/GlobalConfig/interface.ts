import { ReactNode } from 'react';

type GlobalConfigProps = {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #325DFF
   */
  globalColor?: string;
  /**
   * @description 深色模式
   * @default false
   */
  darkTheme?: boolean;
};

export { GlobalConfigProps };
