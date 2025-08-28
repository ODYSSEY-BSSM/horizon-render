import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

type ColorToken = string;

export type TextVariant = 'H1' | 'H2' | 'H3' | 'ST' | 'B1' | 'B2' | 'C' | 'O';

export type AllowedHTMLElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label';

interface StyledTextProps {
  variant: TextVariant;
  color?: ColorToken;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis?: boolean;
}

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: ColorToken;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
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

export const Text = ({
  variant = 'B1',
  as,
  children,
  color,
  width,
  textAlign,
  whiteSpace,
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

const StyledText = styled.div<StyledTextProps>`
  font-family: ${tokens.fontFamily.suit.join(', ')};
  margin: 0;
  color: ${({ color = 'inherit' }) => color};
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : 'auto')};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  white-space: ${({ whiteSpace = 'normal', ellipsis }) => (ellipsis ? 'nowrap' : whiteSpace)};
  
  ${({ variant }) => {
    switch (variant) {
      case 'H1':
        return {
          fontSize: tokens.fontSize[32],
          fontWeight: tokens.fontWeight.heavy,
          lineHeight: tokens.lineHeight[44],
          letterSpacing: tokens.letterSpacing['-2'],
        };
      case 'H2':
        return {
          fontSize: tokens.fontSize[24],
          fontWeight: tokens.fontWeight.extrabold,
          lineHeight: tokens.lineHeight[34],
          letterSpacing: tokens.letterSpacing['-1.5'],
        };
      case 'H3':
        return {
          fontSize: tokens.fontSize[20],
          fontWeight: tokens.fontWeight.bold,
          lineHeight: tokens.lineHeight[28],
          letterSpacing: tokens.letterSpacing['-1'],
        };
      case 'ST':
        return {
          fontSize: tokens.fontSize[18],
          fontWeight: tokens.fontWeight.semibold,
          lineHeight: tokens.lineHeight[26],
          letterSpacing: tokens.letterSpacing[0],
        };
      case 'B1':
        return {
          fontSize: tokens.fontSize[16],
          fontWeight: tokens.fontWeight.regular,
          lineHeight: tokens.lineHeight[24],
          letterSpacing: tokens.letterSpacing[0],
        };
      case 'B2':
        return {
          fontSize: tokens.fontSize[14],
          fontWeight: tokens.fontWeight.light,
          lineHeight: tokens.lineHeight[22],
          letterSpacing: tokens.letterSpacing[0],
        };
      case 'C':
        return {
          fontSize: tokens.fontSize[12],
          fontWeight: tokens.fontWeight.extralight,
          lineHeight: tokens.lineHeight[18],
          letterSpacing: tokens.letterSpacing[1],
        };
      case 'O':
        return {
          fontSize: tokens.fontSize[11],
          fontWeight: tokens.fontWeight.medium,
          lineHeight: tokens.lineHeight[16],
          letterSpacing: tokens.letterSpacing[5],
        };
    }
  }}
  
  ${({ ellipsis }) =>
    ellipsis && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
`;
