import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { type IconVariant, getIconStyle } from './styles';

export type AllowedHTMLElement = 'span' | 'i' | 'div' | 'button' | 'label';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  variant?: IconVariant;
  filled?: boolean;
  size?: number | string;
  color?: string;
  as?: AllowedHTMLElement;
  decorative?: boolean;
}

const shouldForwardProp = (prop: string) =>
  ['variant', 'filled', 'size', 'color'].indexOf(prop) === -1;

export const Icon = ({
  name,
  variant = 'MD',
  filled = false,
  size,
  color,
  as,
  decorative = false,
  ...restProps
}: IconProps) => {
  return (
    <StyledIcon
      as={as}
      {...{ variant, filled, size, color }}
      aria-hidden={decorative}
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
  ${({ size }) =>
    size != null ? { fontSize: typeof size === 'number' ? `${size}px` : size } : undefined}

  ${({ variant }) => getIconStyle(variant)}

  ${({ filled }) => filled && 'font-variation-settings: "FILL" 1 !important;'}
`;
