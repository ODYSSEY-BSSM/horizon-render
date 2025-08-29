import { type TextVariant, textVariantStyles } from '@/constants';
import { toPx } from '@/toPx';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import type { CSSProperties } from 'react';

export type AllowedHTMLElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label';

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  ellipsis?: boolean;
  as?: AllowedHTMLElement;
  htmlFor?: string;
}

const getDefaultElement = (variant: TextVariant): AllowedHTMLElement => {
  switch (variant) {
    case 'H1':
      return 'h1';
    case 'H2':
      return 'h2';
    case 'H3':
      return 'h3';
    case 'ST':
      return 'h4';
    case 'B1':
      return 'p';
    case 'B2':
      return 'p';
    default:
      return 'span';
  }
};

const shouldForwardProp = (prop: string) =>
  ['variant', 'ellipsis', 'whiteSpace', 'textAlign', 'width', 'color'].indexOf(prop) === -1;

export const Text = ({
  variant = 'B1',
  as,
  children,
  color = 'inherit',
  width = 'auto',
  textAlign = 'left',
  whiteSpace = 'normal',
  ellipsis = false,
  ...restProps
}: TextProps) => {
  const element = as || getDefaultElement(variant);

  return (
    <StyledText
      as={element}
      variant={variant}
      color={color}
      width={width}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      ellipsis={ellipsis}
      {...restProps}
    >
      {children}
    </StyledText>
  );
};

interface StyledTextProps {
  variant: TextVariant;
  color?: string;
  width?: string | number;
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  ellipsis?: boolean;
}

const StyledText = styled('div', { shouldForwardProp })<StyledTextProps>`
    font-family: ${tokens.fontFamily.suit.join(', ')};
    ${({ color }) => color && `color: ${color};`}
    width: ${({ width }) => toPx(width)};
    text-align: ${({ textAlign }) => textAlign};
    ${({ whiteSpace, ellipsis }) =>
      ellipsis
        ? {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }
        : { whiteSpace }};

    ${({ variant }) => textVariantStyles[variant]};
`;
