import React, { useMemo, memo, FC } from 'react';
import classNames from 'classnames';
import { layoutProps } from './interface';

const Layout: FC<layoutProps> = (props: layoutProps) => {
  const { children, className, style, ...restProps } = props;

  const classes = classNames(className, 'layout');

  const propsStyles = useMemo(() => {
    if (style) {
      return style;
    }
    return {};
  }, [style]);

  return (
    <div className={classes} style={propsStyles} {...restProps}>
      {children}
    </div>
  );
};
export default memo(Layout);
