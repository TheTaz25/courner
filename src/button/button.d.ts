declare module Courner {
  type ButtonVariants = 'default'
  | 'outlined'
  | 'filled';

  type ButtonSizes = 'medium'
  | 'large'
  | 'small';

  interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
    variant?: ButtonVariants,
    theme?: Theme,
    size?: ButtonSizes,
    type?: AllowedButtonTypes,
    block?: boolean,
  }

  type AllowedButtonTypes = 'button'
  | 'reset'
  | 'submit'
}