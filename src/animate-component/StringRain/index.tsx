import classnames from 'classnames';
import React, {useEffect } from 'react';
import {StringRainProps} from './interface'

const StringRain: React.FC<StringRainProps> = ({
  children,
  col = 50,
  fontSize = 16,
  color = 'rgb(179, 255, 199)',
  className,
  ...rest
}) => {
  // 计算布局
  useEffect(() => {
    document.body.style.setProperty('--string-rain-color', color);
  }, []);

  return (
    <div className={classnames('wskco-string-rain', className)} {...rest}>
      <div className="wskco-string-rain__wrapper" style={{ fontSize }}>
        {new Array(col).fill(0).map((_, idx) => (
          <p key={idx} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default StringRain;
