import React, { useCallback, forwardRef } from 'react';
import { SkeletonProps } from './interface';
// import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from 'classnames';
// import { globalCtx } from '../GlobalConfig';

const Skeleton = (props: SkeletonProps, ref: any) => {
  const {
    className,
    loading = true,
    title,
    avatar,
    row = 3,
    width = [],
    size = 40,
  } = props;

  const firstClass = 'skeleton';
  const classNames = cs(className, firstClass);

  const lineHeight = useCallback(
    (i: number) => {
      if (width && width.length) {
        if (typeof width[i] === 'string') {
          return {
            width: width[i],
          };
        }
        if (typeof width[i] === 'number') {
          return {
            width: `${width[i]}px`,
          };
        }
      }
      return {};
    },
    [width],
  );

  return loading ? (
    <div
      className={classNames}
      style={{ '--skeleton-container-avatar-size': `${size}px` } as any}
      ref={ref}
    >
      {avatar && <div className={`${firstClass}-avatar`} />}
      <div className={`${firstClass}-container`}>
        {title && <div className={`${firstClass}-container-title`} />}
        {new Array(row).fill('').map((r, i) => {
          return (
            <div
              className={`${firstClass}-container-line`}
              style={lineHeight(i)}
              key={i}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default forwardRef<unknown, SkeletonProps>(Skeleton);
