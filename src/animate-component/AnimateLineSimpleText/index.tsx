import React, { useLayoutEffect } from 'react';
import classnames from 'classnames';
import { TextProps } from './interface'

declare interface NewCSSRule extends CSSRule {
  selectorText: string;
}

function insertCssRule(rule: string) {
  const { styleSheets } = document;
  console.log('styleSheets: ', styleSheets);

  let _styleSheet, cssRules;
  for (const styleSheet of styleSheets) {
    if (
      styleSheet.cssRules &&
      Array.from(styleSheet.cssRules).some((item) => {
        const selectorText = (item as NewCSSRule).selectorText;
        return selectorText && selectorText.indexOf('.noteco') > -1;
      })
    ) {
      cssRules = styleSheet.cssRules;
      _styleSheet = styleSheet;
      break;
    }
  }
  if (!_styleSheet || !cssRules) return;
  if (
    Array.from(cssRules).some(({ cssText }) => {
      return cssText && cssText.indexOf(rule) > -1;
    })
  ) {
    return;
  }
  _styleSheet.insertRule(rule, cssRules.length);
}



const AnimateLineSimpleText: React.FC<TextProps> = ({
  text = 'Lorem',
  x = '50%',
  y = '70%',
  textStyle = {},
  borderColor = '#999',
  textColor = '#888',
  className,
  ...rest
}) => {
  const keyFrames = `@keyframes wskco-simple-stroke {
    0% {
      fill-opacity: 0;
      stroke: ${borderColor};
      stroke-opacity: 1;
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 0.8;
    }
    50% {
      fill-opacity: 0;
      stroke: ${borderColor};
      stroke-opacity: 1;
      stroke-width: 1.2;
    }
    70% {
      fill-opacity: none;
      stroke: ${borderColor};
      stroke-opacity: 1;
      stroke-width: 1.5;
    }
    90%,
    100% {
      fill: ${textColor};
      fill-opacity: 1;
      stroke: ${borderColor};
      stroke-opacity: 0;
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
  `;
  useLayoutEffect(() => {
    insertCssRule(keyFrames);
  }, []);
  return (
    <svg
      className={classnames('wskco-animate-line-simple-text', className)}
      {...rest}
    >
      <text
        className="wskco-animate-line-simple-text__text"
        textAnchor="middle"
        x={x}
        y={y}
        style={textStyle}
      >
        {text}
      </text>
    </svg>
  );
};

export default AnimateLineSimpleText;
