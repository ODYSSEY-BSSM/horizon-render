import React from 'react';
import { textVariants, TextVariant } from './variants';
import { cn } from '../../utils';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'B1',
  as: Component = 'p',
  className,
  children,
  ...props
}) => {
  const baseClasses = variant ? textVariants[variant] : '';

  return (
    <Component className={cn(baseClasses, 'font-suit', className)} {...props}>
      {children}
    </Component>
  );
};