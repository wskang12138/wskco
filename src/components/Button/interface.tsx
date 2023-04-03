import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseButtonProps = {
  /**
   * @description 按钮类名
   */
  className?: string;
  /**
   * @description 按钮失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置按钮大小
   * @default 'middle'
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * @description 设置按钮类型
   * @default 'default'
   */
  /**设置 Button 的类型 */
  type?:
    | 'primary'
    | 'default'
    | 'danger'
    | 'link'
    | 'warning'
    | 'info'
    | 'dashed';
  /**
   * @description 按钮内容
   */
  children?: React.ReactNode;
  /**
   * @description 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href?: string;
  /**
   * @description 设置按钮形状为圆形
   * @default false
   */
  circle?: boolean;
};

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export { BaseButtonProps, ButtonProps };
