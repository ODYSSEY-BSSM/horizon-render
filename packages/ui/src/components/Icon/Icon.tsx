import { clsx } from 'clsx';
import type React from 'react';
import { getSizeValue } from '../../utils';
import { ICON_CONSTANTS } from './constants';
import { type IconVariant, iconVariants } from './variants';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  className?: string;
  decorative?: boolean;

  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  role?: string;
}

export const Icon = ({
  name,
  variant = 'MD',
  filled = false,
  size,
  color,
  className,
  decorative = false,
  ...props
}: IconProps) => {
  const variantConfig = iconVariants[variant];
  const sizeValue = getSizeValue(size);

  const styles: React.CSSProperties = {
    ...(sizeValue && { fontSize: sizeValue }),
    color,
    fontVariationSettings: `'FILL' ${filled ? ICON_CONSTANTS.FILL.FILLED : ICON_CONSTANTS.FILL.OUTLINED}, 'wght' ${variantConfig.wght}, 'GRAD' ${variantConfig.grad}, 'opsz' ${variantConfig.opsz}`,
  };

  const accessibilityProps = decorative
    ? { 'aria-hidden': true }
    : props['aria-label']
      ? {}
      : { 'aria-label': name };

  return (
    <span
      className={clsx('material-symbols-rounded select-none', variantConfig.classes, className)}
      style={styles}
      {...props}
      {...accessibilityProps}
    >
      {name}
    </span>
  );
};
