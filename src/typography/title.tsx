import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';

type VisualLevel = 'title' | 'subtitle' | 'blocktitle';

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  semanticLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  visualLevel: VisualLevel;
}

const visualLevelMap = {
  title: 'c-title',
  subtitle: 'c-subtitle',
  blocktitle: 'c-blocktitle',
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({
  children,
  semanticLevel,
  visualLevel,
  ...props
}, ref) => {
  const classes = classNames({
    'c-header': true,
    [visualLevelMap[visualLevel]]: true,
  }, props.className);

  return React.createElement(semanticLevel, {
      ...props,
      ref,
      className: classes
    }, children);
});

export default Title;
