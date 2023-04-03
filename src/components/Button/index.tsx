import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { ButtonProps, BaseButtonProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import { globalCtx } from '../GlobalConfig';

export const API = (props: BaseButtonProps) => {};

export const Button = (props: ButtonProps) => {
  const {
    type,
    disabled,
    size,
    children,
    href,
    circle,
    className,
    ...restProps
  } = props;
  // btn, btn-large, btn-primary

  const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

  const { style = {} } = { ...restProps };

  const buttonStyle = useMemo(() => {
    if (type === 'link') {
      return {
        color: globalColor,
      };
    }
    return {
      backgroundColor: globalColor,
      borderColor: globalColor,
    };
  }, [globalColor]);

  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === 'link' && disabled,
    circle: type !== 'link' && circle,
  });
  if (type === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
        style={{ ...buttonStyle, ...style }}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
        style={{ ...buttonStyle, ...style }}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  type: 'defalut',
};

export default Button;
