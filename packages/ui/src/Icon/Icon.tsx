import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export const ICON_CONSTANTS = {
  FILL: {
    FILLED: '1',
    OUTLINED: '0',
  },
} as const;

export type IconVariant = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

const iconVariants = {
  XS: {
    fontSize: '16px',
    fontWeight: tokens.fontWeight.light,
    wght: tokens.fontWeight.light,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[20],
  },
  SM: {
    fontSize: '20px',
    fontWeight: tokens.fontWeight.regular,
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  MD: {
    fontSize: '24px',
    fontWeight: tokens.fontWeight.regular,
    wght: tokens.fontWeight.regular,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[24],
  },
  LG: {
    fontSize: '32px',
    fontWeight: tokens.fontWeight.medium,
    wght: tokens.fontWeight.medium,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[40],
  },
  XL: {
    fontSize: '40px',
    fontWeight: tokens.fontWeight.semibold,
    wght: tokens.fontWeight.semibold,
    grad: tokens.icons.grade[0],
    opsz: tokens.icons.opticalSize[48],
  },
} as const;

interface StyledIconProps {
  variant: IconVariant;
  filled: boolean;
  customSize?: number | string;
  customColor?: string;
}

const StyledIcon = styled.span<StyledIconProps>`
  font-family: 'Material Symbols Rounded';
  user-select: none;
  display: inline-block;
  
  font-size: ${({ variant, customSize }) =>
    customSize
      ? typeof customSize === 'number'
        ? `${customSize}px`
        : customSize
      : iconVariants[variant].fontSize};
  
  font-weight: ${({ variant }) => iconVariants[variant].fontWeight};
  
  color: ${({ customColor }) => customColor || 'inherit'};
  
  font-variation-settings: 
    'FILL' ${({ filled }) => (filled ? ICON_CONSTANTS.FILL.FILLED : ICON_CONSTANTS.FILL.OUTLINED)}, 
    'wght' ${({ variant }) => iconVariants[variant].wght}, 
    'GRAD' ${({ variant }) => iconVariants[variant].grad}, 
    'opsz' ${({ variant }) => iconVariants[variant].opsz};
`;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
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
  decorative = false,
  ...props
}: IconProps) => {
  const accessibilityProps = decorative
    ? { 'aria-hidden': true }
    : props['aria-label']
      ? {}
      : { 'aria-label': name };

  return (
    <StyledIcon
      variant={variant}
      filled={filled}
      customSize={size}
      customColor={color}
      {...props}
      {...accessibilityProps}
    >
      {name}
    </StyledIcon>
  );
};
