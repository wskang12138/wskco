import React, { forwardRef, useMemo, useState } from 'react';
import { AlertProps } from './interface';
import css from 'classnames';

const Alert = (props: AlertProps, ref: any) => {
  const {
    style,
    className,
    type = 'info',
    title,
    content,
    showClear = false,
    showIcon = true,
    closeElement,
    onClose,
  } = props;

  const [visible, setVisible] = useState(true);

  const classNames = css(className, `alert-${type}`);

  const leftIcon = useMemo(() => {
    switch (type) {
      case 'info':
        return <span className="alert-icon-info" />;
      case 'success':
        return <span className="alert-icon-success" />;
      case 'warning':
        return <span className="alert-icon-warning" />;
      case 'error':
        return <span className="alert-icon-error" />;
      default:
        return <span className="alert-icon-info" />;
    }
  }, [type]);

  const close = () => {
    setVisible(false);
    onClose && onClose();
  };

  return (
    <div className={classNames} ref={ref} style={style}>
      <div className="alert-content">
        {showIcon && <div className="alert-icon">{leftIcon}</div>}
        <div className="alert-text">
          {title && <div className="title">{title}</div>}
          {content}
        </div>
      </div>
      {showClear && (
        <div className="close-icon" onClick={close}>
          {closeElement}
        </div>
      )}
    </div>
  );
};

export default forwardRef<unknown, AlertProps>(Alert);
