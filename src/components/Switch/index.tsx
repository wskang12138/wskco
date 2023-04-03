import React, { useState, useContext, useEffect, useMemo, forwardRef } from 'react';
import { SwitchProps } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from 'classnames';
import { globalCtx } from '../GlobalConfig';
import './_index.scss';

const Switch = (props:SwitchProps, ref: any) => {
  const {
    disabled,
    className,
    style,
    defaultChecked = false,
    small,
    checkedChildren,
    unCheckedChildren,
    loading,
    handleChange,
  } = props;

  const getSiteTheme = () => {
    const theme = window.localStorage.getItem('dumi:prefers-color');
    return theme;
  };
  const getRenderColor = (isDark: boolean, globalColor: string | undefined): string => {
  if (globalColor) {
    return globalColor;
  }
  return isDark ? '#3C7EFF' : '#325DFF';
};
  const [switchWidth, setSwitchWidth] = useState<number>(0);
  const [switchChildWidth, setSwitchChildWidth] = useState<number>(0);
  const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

  const theme = getSiteTheme();
  const { globalColor} = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(className, 'concis-switch');

  useEffect(() => {
    if (checkedChildren && unCheckedChildren && document.querySelector('.concis-switch-child')) {
      setSwitchChildWidth((document.querySelector('.concis-switch-child') as any).clientWidth);
      setSwitchWidth((document.querySelector('.concis-switch-child') as any).clientWidth + 30);
    } else {
      setSwitchWidth(small ? 28 : 40);
    }
  }, [
    document.querySelector('.concis-switch-child')?.clientWidth,
    checkedChildren,
    unCheckedChildren,
  ]);

  const toggleSwitch = () => {
    if (disabled || loading) return;
    setSwitchStatus(!switchStatus);
    handleChange && handleChange(!switchStatus);
  };
  const switchStyle = useMemo(() => {
    return {
      '--switch-width': `${switchWidth}px`,
      '--switch-height': `${small ? 16 : 24}`,
      '--dot-transformX': switchStatus ? `${switchWidth - 16 - (small ? -2 : 4)}px` : '4px',
      '--dot-transformY': small ? '2.5px' : '4px',
      '--dot-size': `${small ? '12px' : '16px'}`,
      '--child-transform': switchStatus
        ? typeof checkedChildren === 'string'
          ? `4px`
          : '8px'
        : `${switchWidth - switchChildWidth - (typeof checkedChildren === 'string' ? 6 : -2)}px`,
      '--switch-bg': switchStatus
        ? getRenderColor(theme === ('auto' || 'dark'), globalColor)
        : 'rgba(201,205,212,1)',
      '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
      '--opacity': disabled || loading ? '0.6' : '1',
    };
  }, [switchStatus, disabled, switchWidth, small, globalColor]);

  return (
    <div
      className={classNames}
      style={{ ...style, ...(switchStyle as any) }}
      onClick={toggleSwitch}
      ref={ref}
    >
      <div className="concis-switch-dot">{loading }</div>
      {checkedChildren && unCheckedChildren && (
        <div className="concis-switch-child">
          {switchStatus ? checkedChildren : unCheckedChildren}
        </div>
      )}
    </div>
  );
};

export default forwardRef<unknown, SwitchProps>(Switch);
