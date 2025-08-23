import { type AllowedHTMLElement, VARIANT_TO_SEMANTIC_ELEMENT } from '@/constants';
import { clsx } from 'clsx';
import type React from 'react';
import { type TextVariant, textVariants } from './variants';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  htmlFor?: string;
  variant?: TextVariant;
  as?: AllowedHTMLElement;
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
  as,
  className,
  children,
  color,
  width = 'auto',
  textAlign = 'left',
  whiteSpace = 'normal',
  ellipsis = false,
  htmlFor,
  ...props
}: TextProps) => {
  const Component = as || (VARIANT_TO_SEMANTIC_ELEMENT[variant] as React.ElementType);
  const baseClasses = textVariants[variant];

  const ellipsisClasses = ellipsis ? 'overflow-hidden text-ellipsis whitespace-nowrap' : '';

  const styles: React.CSSProperties = {
    color,
    width: typeof width === 'number' ? `${width}px` : width,
    textAlign,
    ...(!ellipsis && { whiteSpace }),
  };

  return (
    <Component
      className={clsx(baseClasses, 'font-suit', ellipsisClasses, className)}
      style={styles}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Component>
  );
};
