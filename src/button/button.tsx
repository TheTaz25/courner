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

const Button: React.FC<Courner.ButtonProps> = ({
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
