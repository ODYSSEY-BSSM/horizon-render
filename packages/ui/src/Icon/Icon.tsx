import { type IconVariant, iconVariantStyles } from '@/constants';
import { toPx } from '@/toPx';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { useMemo } from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  decorative?: boolean;
}

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
  
  ${({ variant }) => iconVariantStyles[variant]}
  
  ${({ filled }) => filled && 'font-variation-settings: "FILL" 1 !important;'}
`;
