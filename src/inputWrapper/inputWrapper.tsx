import React, { forwardRef } from 'react';
import { classNames } from '../utils/cls';

import InputCore, { InputCoreProps } from '../inputCore';
import { Label, Accessory } from '../typography';

export interface InputProps extends React.HTMLProps<HTMLDivElement> {
  error?: boolean,
  errorText?: string,
  label: string,
  description?: JSX.Element,
  inputProps: Omit<InputCoreProps, 'ref'>,
  inputRef?: React.ForwardedRef<HTMLInputElement>,
  replaceDescriptionWithError?: boolean,
}

const InputWrapper = forwardRef<HTMLDivElement, InputProps>(({
  children,
  className,
  error,
  errorText,
  label,
  description,
  inputProps,
  inputRef,
  replaceDescriptionWithError,
  ...props
}, ref) => {
  const classes = classNames({
    'c-input-wrapper': true,
  }, className);

  const showDescription = (!replaceDescriptionWithError && !!description) || (replaceDescriptionWithError && !error);

  return (
    <div {...props} ref={ref} className={classes}>
      <Label error={error}>{label}</Label>
      <div className="c-input-wrapper__inner">
        <InputCore {...inputProps} ref={inputRef} hasError={error} />
        { error && (
          <Accessory theme='error'>
            {errorText}
          </Accessory>
        )}
        { showDescription && (
          <Accessory>
            {description}
          </Accessory>
        )}
      </div>
    </div>
  );
});

export default InputWrapper;
