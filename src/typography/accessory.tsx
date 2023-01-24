import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';
import { getFontColorClass } from '../utils/fontColor';

type Themes =
| 'error'
| 'warning'
| 'info'
| 'grey'
| 'primary'
| 'secondary';

export interface AccessoryProps extends React.HTMLProps<HTMLSpanElement> {
  theme?: Themes
}

const AccessoryText = forwardRef<HTMLSpanElement, AccessoryProps>(({
  children,
  theme,
  ...props
}, ref) => {
  const classes = classNames({
    'c-typo': true,
    'c-accessory': true,
    [getFontColorClass(theme)]: !!theme,
  }, props.className);

  return (
    <span {...props} ref={ref} className={classes}>{children}</span>
  )
});

export default AccessoryText