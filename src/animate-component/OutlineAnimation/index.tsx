import classnames from 'classnames';
import React from 'react';
import {OutlineProps} from './interface'

const OutlineAnimation: React.FC<OutlineProps> = ({
  width,
  height,
  className,
  rectStyle,
  children,
  ...rest
}) => {
  if (!width || !height) return children;

  return (
    <hgroup
      className={classnames('wskco-outline-animation', className)}
      style={{ width, height }}
      {...rest}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="wskco-outline-animation__svg"
      >
        <rect
          className={classnames('wskco-outline-animation__shape')}
          style={{
            stroke: '#333',
            strokeWidth: '4px',
            strokeDasharray: `${width >> 1} ${
              (width + height) * 2 - (width >> 1)
            }`,
            strokeDashoffset: `${height + Math.round((width * 3) / 4)}`,
            ...rectStyle
          }}
          height={height}
          width={width}
        ></rect>
      </svg>
      {children}
    </hgroup>
  );
};

export default OutlineAnimation;
