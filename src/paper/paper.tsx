import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';
import { Elevation, getElevationClass } from '../utils/elevation';


export interface PaperProps extends React.HTMLProps<HTMLDivElement> {
  elevation?: Elevation,
  interactive?: boolean
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(({
  elevation,
  interactive = false,
  className,
  children,
  ...props
}, ref) => {
  const classes = classNames({
    'c-paper': true,
    'c-corner-tr': true,
    [getElevationClass(elevation)]: !!elevation,
  }, className);
  return (
    <div
      {...props}
      ref={ref}
      className={classes}
      role={interactive ? 'button' : undefined}
    >
      {children}
    </div>
  );
});

export default Paper;
