import { clsx } from 'clsx';
import type React from 'react';
import { getSizeValue } from '../../utils';
import { type TextVariant, textVariants } from './variants';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis?: boolean;
}

export const Text = ({
  variant = 'B1',
  as: Component = 'p',
  className,
  children,
  color,
  width = 'auto',
  textAlign = 'left',
  whiteSpace = 'normal',
  ellipsis = false,
  ...props
}: TextProps) => {
  const baseClasses = textVariants[variant];

  const ellipsisClasses = ellipsis ? 'overflow-hidden text-ellipsis whitespace-nowrap' : '';

  const widthValue = getSizeValue(width);

  const styles: React.CSSProperties = {
    color,
    width: widthValue,
    textAlign,
    whiteSpace: ellipsis ? 'nowrap' : whiteSpace,
  };

  return (
    <Component
      className={clsx(baseClasses, 'font-suit', ellipsisClasses, className)}
      style={styles}
      {...props}
    >
      {children}
    </Component>
  );
};
