import React from 'react';
import { forwardRef } from 'react';
import { classNames } from '../utils/cls';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  theme?: Theme,
}

type Theme =
| 'primary'
| 'secondary';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  children,
  className,
  theme = 'primary',
  ...props
}, ref) => {
  const classes = classNames({
    'c-input': true,
    'c-corner-tr': true,
    [`c-${theme}`]: true,
  }, className);

  return (
    <input {...props} className={classes} ref={ref} />
  )
});

export default Input;
