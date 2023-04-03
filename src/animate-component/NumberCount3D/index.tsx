import classnames from 'classnames';
import React, { Fragment} from 'react';
import { Count3DProps } from './interface'

const NumberCount3D: React.FC<Count3DProps> = ({
  number = 0,
  rotate = true,
  className,
  ...rest
}) => {
  if (typeof number !== 'number') throw new Error('请输入数字');
  const numberArray = String(number).split('');
  const { length } = numberArray;

  return (
    <div className={classnames('wskco-number-count-3d', className)} {...rest}>
      <div
        className={classnames(
          'wskco-number-count-3d__wrapper',
          'wskco-number-count-3d__preserve',
          {
            'wskco-number-count-3d__rotate': rotate
          }
        )}
      >
        <div
          className={classnames('wskco-number-count-3d__preserve', {
            'wskco-number-count-3d__number-rotate': rotate
          })}
        >
          {numberArray.map((number, index) => (
            <Fragment key={index}>
              <div
                className={classnames(
                  'wskco-number-count-3d__number',
                  'wskco-number-count-3d__preserve'
                )}
                data-digit={number}
              >
                {new Array(7).fill(true).map((_, idx) => (
                  <div
                    key={idx}
                    className={classnames(
                      'wskco-number-count-3d__number-line',
                      'wskco-number-count-3d__preserve',
                      'wskco-number-count-3d__number-line--translate'
                    )}
                  ></div>
                ))}
              </div>
              {length - index > 1 && (length - index) % 3 === 1 && (
                <div
                  className={classnames(
                    'wskco-number-count-3d__comma',
                    'wskco-number-count-3d__preserve'
                  )}
                ></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberCount3D;
