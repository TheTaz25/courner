import React from 'react';
import cls from '../utils/cls';
import './button.scss';

interface ButtonProps {
  variant?: ButtonVariants,
  theme?: Theme,
}

const buttonVariants: Record<ButtonVariants, string> = {
  default: 'c-button-default',
  filled: 'c-button-filled',
  outlined: 'c-button-outlined',
  light: 'c-button-light',
};

const buttonThemes: Record<Theme, string> = {
  default: 'c-button-gray',
  primary: 'c-button-primary',
  secondary: 'c-button-secondary',
  success: 'c-button-success',
  warning: 'c-button-warning',
  error: 'c-button-error',
  info: 'c-button-info',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  theme = 'default',
}) => {
  const buttonClasses = [
    'c-button',
    'c-corner-tr',
    buttonVariants[variant] ?? buttonVariants.default,
    buttonThemes[theme] ?? buttonThemes.default,
  ];
  return (
    <button type="button" className={cls(buttonClasses)}>
      {children}
    </button>
  );
};

export default Button;
