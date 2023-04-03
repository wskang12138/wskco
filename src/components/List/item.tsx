import React, { useMemo, useContext, forwardRef } from 'react';
import cs from 'classnames';
import { listItemProps } from './interface';
import { ctx } from './index';
import './style/_item.scss';

const Item = (props:listItemProps, ref:any) => {

  const { children, className, style = {} } = props;
  const classNames = cs( className, 'list-item');
  const { size } = useContext(ctx);

  const listItemStyle = useMemo(() => {
    const defaultStyles = style;
    switch (size) {
      case 'default':
        defaultStyles.padding = '13px 20px';
        break;
      case 'small':
        defaultStyles.padding = '9px 20px';
        break;
      case 'large':
        defaultStyles.padding = '17px 20px';
        break;
      default: {
        defaultStyles.padding = '13px 20px';
      }
    }
    return defaultStyles;
  }, [size]);

  return (
    <div className={classNames} style={listItemStyle} ref={ref}>
      {children}
    </div>
  );
};

export default forwardRef<unknown, listItemProps>(Item);
