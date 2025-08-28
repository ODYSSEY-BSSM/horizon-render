import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { useMemo } from 'react';

type ColorToken =
  | `primary.${keyof typeof tokens.colors.primary}`
  | `accent.${keyof typeof tokens.colors.accent}`
  | `neutral.${keyof typeof tokens.colors.neutral}`
  | `warning.${keyof typeof tokens.colors.warning}`;

export type IconVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const iconSizes = {
  xs: { size: 16, weight: tokens.fontWeight.light, opsz: tokens.icons.opticalSize[20] },
  sm: { size: 20, weight: tokens.fontWeight.regular, opsz: tokens.icons.opticalSize[24] },
  md: { size: 24, weight: tokens.fontWeight.regular, opsz: tokens.icons.opticalSize[24] },
  lg: { size: 32, weight: tokens.fontWeight.medium, opsz: tokens.icons.opticalSize[40] },
  xl: { size: 40, weight: tokens.fontWeight.semibold, opsz: tokens.icons.opticalSize[48] },
} as const;

const getColorValue = (color: ColorToken | undefined): string => {
  if (!color) return 'inherit';
  const [colorGroup, shade] = color.split('.') as [keyof typeof tokens.colors, string];
  const colorObject = tokens.colors[colorGroup];
  return (colorObject as Record<string, string>)[shade];
};

const getSizeValue = (variant: IconVariant, size: number | string | undefined): string => {
  if (size) return typeof size === 'number' ? `${size}px` : size;
  return `${iconSizes[variant].size}px`;
};

const getAccessibilityProps = (decorative: boolean, ariaLabel?: string, name?: string) => {
  if (decorative) return { 'aria-hidden': true };
  return { 'aria-label': ariaLabel || name };
};

interface StyledIconProps {
  variant: IconVariant;
  filled: boolean;
  size?: number | string;
  color?: ColorToken;
}

const StyledIcon = styled.span<StyledIconProps>`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  font-size: ${({ variant, size }) => getSizeValue(variant, size)};
  color: ${({ color }) => getColorValue(color)};
  
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
  color?: ColorToken;
  decorative?: boolean;
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
  const accessibilityProps = useMemo(
    () => getAccessibilityProps(decorative, ariaLabel, name),
    [decorative, ariaLabel, name]
  );

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
