import cls from '../utils/cls';

type ButtonVariants = 'default'
  | 'outlined';

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

type Theme = 'primary'
| 'secondary'
| 'warn'
| 'error'
| 'info'
| 'success';

const buttonSizes: Record<ButtonSizes, string> = {
  medium: 'c-button-medium',
  large: 'c-button-large',
  small: 'c-button-small',
};

const getThemeVariant = (theme: Theme, variant: ButtonVariants) => {
  const variantModulation = variant === 'default' ? 'fill' : 'outline';
  return `c-${variantModulation}-${theme}`;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  theme = 'primary',
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
    'c-interactive',
    getThemeVariant(theme, variant),
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
