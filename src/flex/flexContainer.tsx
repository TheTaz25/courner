import { CSSProperties } from 'react';
import { classNames } from '../utils/cls';

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  container?: boolean,
  inline?: boolean,
  flexDirection?: CSSProperties['flexDirection'],
  flexWrap?: CSSProperties['flexWrap'],
  justifyContent?: CSSProperties['justifyContent'],
  alignItems?: CSSProperties['alignItems']
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  container,
  inline,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  ...props
}) => {
  const flexClasses = classNames({
    'c-flex-container': container,
    'inline': inline,
    'c-flex-row': flexDirection === 'row',
    'c-flex-rev-row': flexDirection === 'row-reverse',
    'c-flex-col': flexDirection === 'column',
    'c-flex-rev-col': flexDirection === 'column-reverse',
    'c-flex-nowrap': flexWrap === 'nowrap',
    'c-flex-wrap': flexWrap === 'wrap',
    'c-flex-rev-wrap': flexWrap === 'wrap-reverse',
    'c-flex-jc-fs': justifyContent === 'flex-start',
    'c-flex-jc-fe': justifyContent === 'flex-end',
    'c-flex-jc-start': justifyContent === 'start',
    'c-flex-jc-end': justifyContent === 'end',
    'c-flex-jc-left': justifyContent === 'left',
    'c-flex-jc-right': justifyContent === 'right',
    'c-flex-jc-center': justifyContent === 'center',
    'c-flex-jc-sb': justifyContent === 'space-between',
    'c-flex-jc-sa': justifyContent === 'space-around',
    'c-flex-jc-se': justifyContent === 'space-evenly',
    'c-flex-ai-stretch': alignItems === 'stretch',
    'c-flex-ai-fs': alignItems === 'flex-start',
    'c-flex-ai-start': alignItems === 'start',
    'c-flex-ai-fe': alignItems === 'flex-end',
    'c-flex-ai-end': alignItems === 'end',
    'c-flex-ai-center': alignItems === 'center',
    'c-flex-ai-baseline': alignItems === 'baseline',
  }, className);
  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
};

export default Flex;
