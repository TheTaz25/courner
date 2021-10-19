import React from 'react';
import cls from '../utils/cls';

const Button: React.FC = ({ children }) => {
  const buttonClasses = ['c-button'];
  return (
    <button type="button" className={cls(buttonClasses)}>
      {children}
    </button>
  );
};

export default Button;
