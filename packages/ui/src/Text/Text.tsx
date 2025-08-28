import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import type { CSSProperties } from 'react';
import { toPx } from '../toPx';

export type TextVariant = 'H1' | 'H2' | 'H3' | 'ST' | 'B1' | 'B2' | 'C' | 'O';

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

const variantStyles: Record<TextVariant, ReturnType<typeof css>> = {
  H1: css({
    fontSize: tokens.fontSize[32],
    fontWeight: tokens.fontWeight.heavy,
    lineHeight: tokens.lineHeight[44],
    letterSpacing: tokens.letterSpacing['-2'],
  }),
  H2: css({
    fontSize: tokens.fontSize[24],
    fontWeight: tokens.fontWeight.extrabold,
    lineHeight: tokens.lineHeight[34],
    letterSpacing: tokens.letterSpacing['-1.5'],
  }),
  H3: css({
    fontSize: tokens.fontSize[20],
    fontWeight: tokens.fontWeight.bold,
    lineHeight: tokens.lineHeight[28],
    letterSpacing: tokens.letterSpacing['-1'],
  }),
  ST: css({
    fontSize: tokens.fontSize[18],
    fontWeight: tokens.fontWeight.semibold,
    lineHeight: tokens.lineHeight[26],
    letterSpacing: tokens.letterSpacing[0],
  }),
  B1: css({
    fontSize: tokens.fontSize[16],
    fontWeight: tokens.fontWeight.regular,
    lineHeight: tokens.lineHeight[24],
    letterSpacing: tokens.letterSpacing[0],
  }),
  B2: css({
    fontSize: tokens.fontSize[14],
    fontWeight: tokens.fontWeight.light,
    lineHeight: tokens.lineHeight[22],
    letterSpacing: tokens.letterSpacing[0],
  }),
  C: css({
    fontSize: tokens.fontSize[12],
    fontWeight: tokens.fontWeight.extralight,
    lineHeight: tokens.lineHeight[18],
    letterSpacing: tokens.letterSpacing[1],
  }),
  O: css({
    fontSize: tokens.fontSize[11],
    fontWeight: tokens.fontWeight.medium,
    lineHeight: tokens.lineHeight[16],
    letterSpacing: tokens.letterSpacing[5],
  }),
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

    ${({ variant }) => variantStyles[variant]};
`;
