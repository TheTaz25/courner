declare module Courner {
  type ButtonVariants = 'default'
  | 'outlined'
  | 'filled';

interface ButtonProps {
  variant?: ButtonVariants,
  theme?: Theme,
}
}