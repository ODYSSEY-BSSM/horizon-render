import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { IconVariant } from './Icon.types';

const makeIconStyle = (
  fontSizePx: string,
  fontWeight: keyof typeof tokens.fontWeight,
  opticalSize: keyof typeof tokens.icons.opticalSize,
) =>
  css({
    fontSize: fontSizePx,
    fontVariationSettings: `'FILL' ${tokens.icons.fill[0]}, 'wght' ${tokens.fontWeight[fontWeight]}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[opticalSize]}`,
  });

export const getIconStyle = (variant: IconVariant) => {
  const styles: Record<IconVariant, ReturnType<typeof css>> = {
    XS: makeIconStyle('16px', 'light', 20),
    SM: makeIconStyle('20px', 'regular', 24),
    MD: makeIconStyle('24px', 'regular', 24),
    LG: makeIconStyle('32px', 'medium', 40),
    XL: makeIconStyle('40px', 'semibold', 48),
  };

  return styles[variant];
};

const blockedProps = new Set(['variant', 'filled', 'size', 'color']);
export const shouldForwardProp = (prop: string): boolean => {
  return !blockedProps.has(prop);
};

export const StyledIcon = styled('span', { shouldForwardProp })<{
  variant: IconVariant;
  filled: boolean;
  size?: number | string;
  color?: string;
}>`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ color }) => color && `color: ${color};`}
  ${({ size }) =>
    size != null ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined}

  ${({ variant }) => getIconStyle(variant)}

  ${({ filled }) => filled && 'font-variation-settings: "FILL" 1 !important;'}
`;
