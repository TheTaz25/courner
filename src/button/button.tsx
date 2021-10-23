import React from 'react';
import cls from '../utils/cls';
import './button.scss';

const buttonVariants: Record<Courner.ButtonVariants, string> = {
  default: 'c-button-default',
  filled: 'c-button-filled',
  outlined: 'c-button-outlined',
};

const buttonThemes: Record<Courner.Theme, string> = {
  default: 'c-button-gray',
  primary: 'c-button-primary',
  secondary: 'c-button-secondary',
  success: 'c-button-success',
  warning: 'c-button-warning',
  error: 'c-button-error',
  info: 'c-button-info',
};

const buttonSizes: Record<Courner.ButtonSizes, string> = {
  medium: 'c-button-medium',
  large: 'c-button-large',
  small: 'c-button-small',
};

const Button: React.FC<Courner.ButtonProps> = ({
  children,
  variant = 'default',
  theme = 'default',
  size = 'medium',
  className,
  type,
  ...props
}) => {
  const buttonClasses = [
    className,
    'c-button',
    'c-corner-tr',
    buttonVariants[variant] ?? buttonVariants.default,
    buttonThemes[theme] ?? buttonThemes.default,
    buttonSizes[size] ?? buttonSizes.medium,
  ];
  return (
    <button type={type! || "button"} className={cls(buttonClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
