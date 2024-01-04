import React from 'react';
import ic_close from '../../images/svg/close.svg';
import { Combination } from '../combination';
import { CloseIconProps } from './interface';
import classNames from 'classnames';
export * from './interface';
import './_index.scss';
const CloseIcon = React.memo(function (props: CloseIconProps) {
  const { className, onClose } = props;

  return (
    <Combination
      className={`${classNames('root')} ${className}`}
      icon={ic_close}
      iconSize={16}
      opacity={0.72}
      iconColor="#fff"
      onClick={onClose}
    />
  );
});
export default CloseIcon;
