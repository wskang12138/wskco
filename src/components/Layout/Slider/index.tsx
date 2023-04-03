import React, { useMemo, memo } from 'react';
import classNames from 'classnames';
import { layoutProps } from '../interface';

const Slider = (props: layoutProps) => {
  const { className, style, ...restProps } = props;

  const classes = classNames(className, 'layout-slider');

  const propsStyle = useMemo(() => {
    if (style) {
      return style;
    }
    return {};
  }, [style]);

  return (
    <div className={classes} style={{ ...propsStyle }} {...restProps}>
      {props.children}
    </div>
  );
};
export default memo(Slider);
