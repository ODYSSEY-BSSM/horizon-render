import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { BLOCKED_PROPS, ICON_VARIANTS } from './Icon.constants';
import type { IconVariant } from './Icon.types';

const makeIconStyle = (
  fontSize: string,
  fontWeight: keyof typeof tokens.fontWeight,
  opticalSize: keyof typeof tokens.icons.opticalSize,
  filled = false,
) => css`
  font-size: ${fontSize};
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

export const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

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
  
  ${({ variant, filled }) => {
    const config = ICON_VARIANTS[variant];
    return css`
      ${getIconStyle(variant, filled)}
      font-variation-settings: 
        'FILL' ${filled ? tokens.icons.fill[1] : tokens.icons.fill[0]},
        'wght' ${tokens.fontWeight[config.fontWeight]},
        'GRAD' ${tokens.icons.grade[0]},
        'opsz' ${tokens.icons.opticalSize[config.opticalSize]};
    `;
  }}

  ${({ size }) =>
    size != null ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined}
`;
