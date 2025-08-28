import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export type IconVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const iconSizes = {
  xs: { size: 16, weight: tokens.fontWeight.light, opsz: 20 },
  sm: { size: 20, weight: tokens.fontWeight.regular, opsz: 24 },
  md: { size: 24, weight: tokens.fontWeight.regular, opsz: 24 },
  lg: { size: 32, weight: tokens.fontWeight.medium, opsz: 40 },
  xl: { size: 40, weight: tokens.fontWeight.semibold, opsz: 48 },
} as const;

interface StyledIconProps {
  variant: IconVariant;
  filled: boolean;
  size?: number | string;
  color?: string;
}

export const Icon = ({
  name,
  variant = 'md',
  filled = false,
  size,
  color,
  decorative = false,
  'aria-label': ariaLabel,
  ...restProps
}: IconProps) => {
  const accessibilityProps = getAccessibilityProps(decorative, ariaLabel, name);
  return (
    <StyledIcon
      variant={variant}
      filled={filled}
      size={size}
      color={color}
      {...accessibilityProps}
      {...restProps}
    >
      {name}
    </StyledIcon>
  );
};

const StyledIcon = styled.span<StyledIconProps>`
  font-family: 'Material Symbols Rounded', sans-serif;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  font-size: ${({ variant, size }) =>
    size ? (typeof size === 'number' ? `${size}px` : size) : `${iconSizes[variant].size}px`};
  
  color: ${({ color }) => color || 'inherit'};
  
  font-variation-settings: 
    'FILL' ${({ filled }) => (filled ? '1' : '0')},
    'wght' ${({ variant }) => iconSizes[variant].weight},
    'GRAD' ${tokens.icons.grade[0]},
    'opsz' ${({ variant }) => iconSizes[variant].opsz};
`;

interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  decorative?: boolean;
}

const getAccessibilityProps = (decorative: boolean, ariaLabel?: string, name?: string) => {
  if (decorative) return { 'aria-hidden': true };
  return { 'aria-label': ariaLabel || name };
};
