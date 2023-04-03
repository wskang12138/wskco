import React, { useMemo, memo } from 'react';
import classNames from 'classnames';
import { layoutProps } from '../interface';

const Content = (props: layoutProps) => {
  const { children, className, style, ...restProps } = props;

  const classes = classNames(className, 'layout-content');

  const propsStyle = useMemo(() => {
    if (style) {
      return style;
    }
    return {};
  }, [style]);

  return (
    <div className={classes} style={{ ...propsStyle }} {...restProps}>
      {children}
    </div>
  );
};
export default memo(Content);
