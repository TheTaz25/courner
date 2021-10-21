import { jsx as _jsx } from "react/jsx-runtime";
import cls from '../utils/cls';
import './button.scss';
const buttonVariants = {
    default: 'c-button-default',
    filled: 'c-button-filled',
    outlined: 'c-button-outlined',
    light: 'c-button-light',
};
const buttonThemes = {
    default: 'c-button-gray',
    primary: 'c-button-primary',
    secondary: 'c-button-secondary',
    success: 'c-button-success',
    warning: 'c-button-warning',
    error: 'c-button-error',
    info: 'c-button-info',
};
const Button = ({ children, variant = 'default', theme = 'default', }) => {
    var _a, _b;
    const buttonClasses = [
        'c-button',
        'c-corner-tr',
        (_a = buttonVariants[variant]) !== null && _a !== void 0 ? _a : buttonVariants.default,
        (_b = buttonThemes[theme]) !== null && _b !== void 0 ? _b : buttonThemes.default,
    ];
    return (_jsx("button", Object.assign({ type: "button", className: cls(buttonClasses) }, { children: children }), void 0));
};
export default Button;
