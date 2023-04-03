import React, { FC, memo, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

interface dividerProps {
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
   * @description 水平还是垂直类型
   * @default 'horizontal'
   */
  type?: 'horizontal' | 'vertical';
  /**
   * @description 分割线标题的位置
   * @default 'center'
   */
  orientation?: 'left' | 'right' | 'center';
  /**
   * @description 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * @description 文字的样式
   */
  textStyle?: CSSProperties;
  /**
   * @description 标题和最近 left 边框之间的距离
   */
  left?: string | number;
  /**
   * @description 标题和最近 right 边框之间的距离
   */
  right?: string | number;
}

const Divider: FC<dividerProps> = memo(props => {
  const {
    type = 'horizontal',
    children,
    style,
    className,
    textStyle,
    orientation = 'center',
    dashed,
    left,
    right,
  } = props;

  const classes = classNames(
    'divider',
    {
      [`divider-${type}`]: type,
      [`divider-with-text`]: !!children,
      [`divider-with-text-${orientation}`]: orientation,
      dashed,
      left,
      right,
    },
    className,
  );

  return (
    <div className={classes} style={style}>
      {children && (
        <span
          className="divider-inner-text"
          style={{
            marginLeft: left ?? '',
            marginRight: right ?? '',
            ...textStyle,
          }}
        >
          {children}
        </span>
      )}
    </div>
  );
});

export default Divider;
