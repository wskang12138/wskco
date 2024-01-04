import React from 'react';
import { CombinationProps } from './types';
import classNames from 'classnames';
export * from './types';
import './index.scss';
export const Combination = React.memo(function (props: CombinationProps) {
  const {
    id,
    className,
    style,
    icon,
    text = '',
    direction = 'ltr',
    iconSize = 16,
    fontSize = 14,
    iconColor = '#fff',
    color = '#fff',
    textShadow = false,
    opacity = 1,
    onClick,
  } = props;

  return (
    <div
      id={id}
      className={`${classNames('root')} ${className}`}
      onClick={onClick}
      style={{
        direction,
        opacity,
        ...style,
      }}
    >
      {icon && (
        <div
          className={classNames('root__icon')}
          style={{
            width: `${
              typeof iconSize === 'number' ? iconSize : iconSize.width
            }px`,
            height: `${
              typeof iconSize === 'number' ? iconSize : iconSize.height
            }px`,
            WebkitMaskImage: `url(${icon})`,
            maskImage: `url(${icon})`,
            WebkitMaskSize: ` ${iconSize}px`,
            maskSize: `${iconSize}px`,
            backgroundColor: iconColor,
          }}
        />
      )}
      <div
        className={classNames('root__text')}
        style={{
          color,
          fontSize: `${fontSize}px`,
          textShadow: textShadow ? '1px 1px 2px rgba(0, 0, 0, 0.2)' : undefined,
        }}
        children={text}
        title={text}
      />
    </div>
  );
});
