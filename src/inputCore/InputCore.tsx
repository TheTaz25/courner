import React from 'react';
import { forwardRef } from 'react';
import { classNames } from '../utils/cls';

export interface InputCoreProps extends React.HTMLProps<HTMLInputElement> {
  theme?: Theme,
  hasError?: boolean
}

type Theme =
| 'primary'
| 'secondary';

const InputCore = forwardRef<HTMLInputElement, InputCoreProps>(({
  children,
  className,
  hasError,
  theme = 'primary',
  ...props
}, ref) => {
  const classes = classNames({
    'c-input': true,
    'c-corner-tr': true,
    'c-error': hasError,
    [`c-${theme}`]: true,
  }, className);

  return (
    <input {...props} className={classes} ref={ref} />
  )
});

export default InputCore;
