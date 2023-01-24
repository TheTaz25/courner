import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';

export interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  error?: boolean,
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(({
  children,
  error,
  className,
  ...props
}, ref) => {
  const classes = classNames({
    'c-typo': true,
    'c-label': true,
    'c-error': error,
  }, className);

  return (
    <label {...props} className={classes}>{children}</label>
  );
});

export default Label;