import type { ImgHTMLAttributes } from 'react';
import styles from './Image.module.scss';

export type ImageVariant = 'card' | 'thumbnail';

const variantClassName: Record<ImageVariant, string> = {
  card: styles.card,
  thumbnail: styles.thumbnail,
};

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: ImageVariant;
}

export const Image = ({ variant = 'card', className, alt, ...rest }: ImageProps) => (
  <img
    alt={alt}
    className={[styles.root, variantClassName[variant], className].filter(Boolean).join(' ')}
    {...rest}
  />
);
