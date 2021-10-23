declare module Courner {
  type ButtonVariants = 'default'
  | 'outlined'
  | 'filled';

  type ButtonSizes = 'medium'
  | 'large'
  | 'small';

  interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    variant?: ButtonVariants,
    theme?: Theme,
    size?: ButtonSizes,
    type?: AllowedButtonTypes
  }

  type AllowedButtonTypes = 'button'
  | 'reset'
  | 'submit'
}