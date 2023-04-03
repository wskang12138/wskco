import React, { memo, Children, useMemo, ReactNode } from 'react';
import { SpaceProps, spaceAlignParams } from './interface';
import classNames from 'classnames';

const defalutSizeList: any = {
  mini: 4,
  small: 8,
  medium: 16,
  large: 24,
};

const defalutAlignItems: any = {
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
};

const sizeAgent = new Proxy(defalutSizeList, {
  get(target, prop) {
    return typeof prop === 'number' || !isNaN(Number(prop))
      ? prop
      : target?.[prop] ?? target?.['small'];
  },
});

const alignItemsAgent = new Proxy(defalutAlignItems, {
  get(target, prop) {
    return target?.[prop] ?? target?.['center'];
  },
});

const Space = <T,>(props: SpaceProps<T>) => {
  const {
    children,
    className,
    style,
    direction = 'horizontal',
    size = 'small',
    align = 'center',
  } = props;

  const classes = classNames(className, 'space');
  const childrenList = Children.toArray(children);

  const spaceStyles = useMemo(() => {
    const returnStyle: spaceAlignParams =
      direction === 'horizontal' ? alignItemsAgent[align] : {};
    if (direction === 'vertical') {
      returnStyle.flexDirection = 'column';
    } else {
      returnStyle.flexDirection = 'row';
    }
    return returnStyle;
  }, [direction, align]);

  return (
    <div
      className={classes}
      style={{
        ...spaceStyles,
        gap: Array.isArray(size)
          ? [...size, '']?.join('px ')
          : `${sizeAgent[size]}px`,
        ...style,
      }}
    >
      {childrenList?.map((child: ReactNode, index: number) => {
        return (
          <div key={index} className="space-item">
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Space);
