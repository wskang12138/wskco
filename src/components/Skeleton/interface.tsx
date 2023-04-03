import React from 'react';

type SkeletonProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 加载状态
   * @default true
   */
  loading?: boolean;
  /**
   * @description 显示标题
   * @default false
   */
  title?: boolean;
  /**
   * @description 显示头像
   * @default false
   */
  avatar?: boolean;
  /**
   * @description 自定义行数
   * @default 3
   */
  row?: number;
  /**
   * @description 自定义宽度
   * @default 100%
   */
  width?: Array<string | number>;
  /**
   * @description 头像尺寸
   * @default 40
   */
  size?: number;
};

export { SkeletonProps };
