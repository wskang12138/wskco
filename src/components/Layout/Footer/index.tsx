import React, { useMemo, memo } from 'react';
import classNames from 'classnames';
import { layoutProps } from '../interface';

const Footer = (props: layoutProps) => {
  const { className, children, style, ...restProps } = props;

  const classes = classNames(className, 'layout-footer');

  const propsStyle = useMemo(() => {
    if (style) {
      return style;
    }
    return {};
  }, [style]);

  return (
    <div className={classes} style={propsStyle} {...restProps}>
      {children}
    </div>
  );
};
export default memo(Footer);
