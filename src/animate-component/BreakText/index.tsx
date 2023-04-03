import classnames from 'classnames';
import React from 'react';
import { BreakTextProps } from './interface'

const BreakText: React.FC<BreakTextProps> = ({
  text = 'wskco',
  className,
  scale = 2.4,
  textStyle,
  ...rest
}) => {
  return (
    <div className={classnames('wskco-break-text', className)} {...rest}>
      <div
        className="wskco-break-text__content"
        data-word={text}
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          ...textStyle
        }}
      >
        {text}
        <div className="wskco-break-text__white"></div>
      </div>
    </div>
  );
};

export default BreakText;
