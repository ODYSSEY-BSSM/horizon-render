import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { IconVariant } from './Icon.types';

// Icon variant configurations
const ICON_VARIANTS = {
  XS: { fontSize: '16px', fontWeight: 'light' as const, opticalSize: 20 as const },
  SM: { fontSize: '20px', fontWeight: 'regular' as const, opticalSize: 24 as const },
  MD: { fontSize: '24px', fontWeight: 'regular' as const, opticalSize: 24 as const },
  LG: { fontSize: '32px', fontWeight: 'medium' as const, opticalSize: 40 as const },
  XL: { fontSize: '40px', fontWeight: 'semibold' as const, opticalSize: 48 as const },
} as const;

const makeIconStyle = (
  fontSizePx: string,
  fontWeight: keyof typeof tokens.fontWeight,
  opticalSize: keyof typeof tokens.icons.opticalSize,
  filled = false,
) => css`
  font-size: ${fontSizePx};
  font-variation-settings: 
    'FILL' ${filled ? 1 : tokens.icons.fill[0]},
    'wght' ${tokens.fontWeight[fontWeight]},
    'GRAD' ${tokens.icons.grade[0]},
    'opsz' ${tokens.icons.opticalSize[opticalSize]};
`;

export const getIconStyle = (variant: IconVariant, filled = false) => {
  const config = ICON_VARIANTS[variant];
  return makeIconStyle(config.fontSize, config.fontWeight, config.opticalSize, filled);
};

const BLOCKED_PROPS = new Set(['variant', 'filled', 'size', 'color']);

export const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

// Base icon styles
const baseIconStyles = css`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled('span', { shouldForwardProp })<{
  variant: IconVariant;
  filled: boolean;
  size?: number | string;
  color?: string;
}>`
  ${baseIconStyles}

  ${({ color }) => color && `color: ${color};`}
  
  ${({ size }) =>
    size != null ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined}

  ${({ variant, filled }) => getIconStyle(variant, filled)}
`;
