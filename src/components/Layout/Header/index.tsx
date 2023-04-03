import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { layoutProps } from '../interface';

const Header = (props: layoutProps) => {
  const { className, children, style, ...restProps } = props;

  const classes = classNames(className, 'layout-header');

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
export default memo(Header);
