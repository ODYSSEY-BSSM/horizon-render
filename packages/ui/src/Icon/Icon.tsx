import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { useMemo } from 'react';
import { toPx } from '../toPx';

export type IconVariant = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  decorative?: boolean;
}

const iconSizes = {
  XS: { size: 16, wght: tokens.fontWeight.light, opsz: tokens.icons.opticalSize[20] },
  SM: { size: 20, wght: tokens.fontWeight.regular, opsz: tokens.icons.opticalSize[24] },
  MD: { size: 24, wght: tokens.fontWeight.regular, opsz: tokens.icons.opticalSize[24] },
  LG: { size: 32, wght: tokens.fontWeight.medium, opsz: tokens.icons.opticalSize[40] },
  XL: { size: 40, wght: tokens.fontWeight.semibold, opsz: tokens.icons.opticalSize[48] },
} as const;

const shouldForwardProp = (prop: string) =>
  ['variant', 'filled', 'size', 'color', 'decorative'].indexOf(prop) === -1;

export const Icon = ({
  name,
  variant = 'MD',
  filled = false,
  size,
  color,
  decorative = false,
  'aria-label': ariaLabel,
  ...restProps
}: IconProps) => {
  const accessibilityProps = useMemo(() => {
    if (decorative) return { 'aria-hidden': true };
    return { 'aria-label': ariaLabel || name };
  }, [decorative, ariaLabel, name]);

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

interface StyledIconProps {
  variant: IconVariant;
  filled: boolean;
  size?: number | string;
  color?: string;
}

const StyledIcon = styled('span', { shouldForwardProp })<StyledIconProps>`
  font-family: ${tokens.fontFamily.icon.join(', ')};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${({ color }) => color && `color: ${color};`}
  ${({ size }) => size && `font-size: ${toPx(size)};`}
  
  ${({ variant, filled }) => {
    const fillValue = filled ? '1' : '0';
    const settings = iconSizes[variant];

    return css({
      fontSize: `${settings.size}px`,
      fontVariationSettings: `'FILL' ${fillValue}, 'wght' ${settings.wght}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${settings.opsz}`,
    });
  }}
`;
