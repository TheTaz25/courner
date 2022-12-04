import { forwardRef } from 'react'
export interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
  children,
  ...props
}, ref) => {
  return (
    <p {...props} className={['c-typo', 'c-paragraph', props.className].join(' ')} ref={ref}>
      {children}
    </p>
  );
});

export default Paragraph;
