import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';

export interface CenterProps extends React.HTMLProps<HTMLDivElement> {
  expand?: boolean,
}

const Center = forwardRef<HTMLDivElement, CenterProps>(({
  children,
  className,
  expand,
  ...props
}, ref) => {
  const centerClasses = classNames({
    'c-center': true,
    'c-expand': expand,
  }, className);

  return (
    <div {...props} className={centerClasses} ref={ref}>
      {children}
    </div>
  );
});

export default Center;