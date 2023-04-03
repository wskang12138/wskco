import React, { useRef } from 'react';
import  { LineTextProps } from './interface'

const AnimateLineText: React.FC< LineTextProps> = ({
  id,
  content,
  strokeWidth = '3px',
  ...rest
}) => {
  const _id = useRef(`wskco-text__${Math.round(Math.random() * 10000)}`);

  return (
    <svg className="wskco-animation-line-text" {...rest}>
      <symbol id={id || _id.current}>
        {content.map(({ x, y, style, value }, idx) => (
          <text
            key={idx}
            textAnchor="middle"
            x={x || '50%'}
            y={y || '75%'}
            className="wskco-animation-line-text__text"
            style={style}
          >
            {value}
          </text>
        ))}
      </symbol>
      <g>
        {new Array(5).fill(0).map((_, idx) => (
          <use
            key={idx}
            xlinkHref={`#${id || _id.current}`}
            className="wskco-animation-line-text__text-copy"
            style={{ strokeWidth: strokeWidth }}
          ></use>
        ))}
      </g>
    </svg>
  );
};

export default AnimateLineText;
