import type { ComponentType, SVGProps } from 'react';
import styles from './Icon.module.scss';

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconProps {
  component: SvgComponent;
  className?: string;
}

export const Icon = ({ component: Svg, className }: IconProps) => (
  <Svg
    aria-hidden="true"
    focusable="false"
    className={[styles.root, className].filter(Boolean).join(' ')}
  />
);
