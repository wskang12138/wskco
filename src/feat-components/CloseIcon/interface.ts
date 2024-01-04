import { SyntheticEvent } from 'react';

export interface CloseIconProps {
  /**类名 */
  className?: string;
  /**点击事件 */
  onClose?: (e: SyntheticEvent<any>) => void;
}
