import cls from '../utils/cls';

type ButtonVariants = 'default'
  | 'outlined'
  | 'filled';

type ButtonSizes = 'medium'
| 'large'
| 'small';

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariants,
  theme?: Theme,
  size?: ButtonSizes,
  type?: AllowedButtonTypes,
  block?: boolean,
}

type AllowedButtonTypes = 'button'
| 'reset'
| 'submit';

type Theme = 'default'
| 'primary'
| 'secondary'
| 'warning'
| 'error'
| 'info'
| 'success';

const buttonVariants: Record<ButtonVariants, string> = {
  default: 'c-button-default',
  filled: 'c-button-filled',
  outlined: 'c-button-outlined',
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

const buttonSizes: Record<ButtonSizes, string> = {
  medium: 'c-button-medium',
  large: 'c-button-large',
  small: 'c-button-small',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  theme = 'default',
  size = 'medium',
  className,
  type = 'button',
  block = false,
  ...props
}) => {
  const buttonClasses = [
    className,
    'c-button',
    'c-corner-tr',
    buttonVariants[variant] ?? buttonVariants.default,
    buttonThemes[theme] ?? buttonThemes.default,
    buttonSizes[size] ?? buttonSizes.medium,
    block ? 'c-button-block' : undefined,
  ];
  return (
    <button type={type} className={cls(buttonClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
