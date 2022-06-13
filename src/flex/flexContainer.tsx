import { classNames } from '../utils/cls';

export interface FlexContainerProps extends React.HTMLProps<HTMLDivElement> {}

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  className,
  ...props
}) => {

  const flexClasses = classNames({
    'c-flex-container': false,
    'inline': false,
    'c-flex-row': false,
    'c-flex-rev-row': false,
    'c-flex-col': false,
    'c-flex-rev-col': false,
    'c-flex-nowrap': false,
    'c-flex-wrap': false,
    'c-flex-rev-wrap': false,
    'c-flex-jc-fs': false,
    'c-flex-jc-fe': false,
    'c-flex-jc-start': false,
    'c-flex-jc-end': false,
    'c-flex-jc-left': false,
    'c-flex-jc-right': false,
    'c-flex-jc-center': false,
    'c-flex-jc-sb': false,
    'c-flex-jc-sa': false,
    'c-flex-jc-se': false,
    'c-flex-ai-stretch': false,
    'c-flex-ai-fs': false,
    'c-flex-ai-start': false,
    'c-flex-ai-fe': false,
    'c-flex-ai-end': false,
    'c-flex-ai-center': false,
    'c-flex-ai-baseline': false,
  }, className);
  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
};

export default FlexContainer;
