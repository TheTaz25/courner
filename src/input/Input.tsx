import React from 'react';
import { forwardRef } from 'react';
import { classNames } from '../utils/cls';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  theme?: Theme,
  hasError?: boolean
}

type Theme =
| 'primary'
| 'secondary';

const Input = forwardRef<HTMLInputElement, InputProps>(({
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

export default Input;
