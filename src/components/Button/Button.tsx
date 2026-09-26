import type {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 'text' | 'primary' | 'icon';

const variantClassName: Record<ButtonVariant, string> = {
    text: styles.text,
    primary: styles.primary,
    icon: styles.icon,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export const Button = ({variant = 'text', className, type = 'button', ...rest}: ButtonProps) => (
    <button
        type={type}
        className={[styles.root, variantClassName[variant], className].filter(Boolean).join(' ')}
        {...rest}
    />
);
