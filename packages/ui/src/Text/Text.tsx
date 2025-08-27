import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export type TextVariant = 'H1' | 'H2' | 'H3' | 'ST' | 'B1' | 'B2' | 'C' | 'O';

export const ALLOWED_HTML_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'div',
  'label',
  'li',
  'blockquote',
  'caption',
  'legend',
  'figcaption',
  'dt',
  'dd',
  'small',
  'strong',
  'em',
  'button',
] as const;

export type AllowedHTMLElement = (typeof ALLOWED_HTML_ELEMENTS)[number];

export const VARIANT_TO_SEMANTIC_ELEMENT: Record<TextVariant, string> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  ST: 'h4',
  B1: 'p',
  B2: 'p',
  C: 'span',
  O: 'span',
} as const;

const getTextStyles = (variant: TextVariant) => {
  const styles = {
    H1: css`
      font-size: 32px;
      font-weight: ${tokens.fontWeight.heavy};
      line-height: 44px;
      letter-spacing: -0.02em;
    `,
    H2: css`
      font-size: 24px;
      font-weight: ${tokens.fontWeight.extrabold};
      line-height: 34px;
      letter-spacing: -0.015em;
    `,
    H3: css`
      font-size: 20px;
      font-weight: ${tokens.fontWeight.bold};
      line-height: 28px;
      letter-spacing: -0.01em;
    `,
    ST: css`
      font-size: 18px;
      font-weight: ${tokens.fontWeight.semibold};
      line-height: 26px;
      letter-spacing: normal;
    `,
    B1: css`
      font-size: 16px;
      font-weight: ${tokens.fontWeight.regular};
      line-height: 24px;
      letter-spacing: normal;
    `,
    B2: css`
      font-size: 14px;
      font-weight: ${tokens.fontWeight.light};
      line-height: 22px;
      letter-spacing: normal;
    `,
    C: css`
      font-size: 12px;
      font-weight: ${tokens.fontWeight.extralight};
      line-height: 18px;
      letter-spacing: 0.01em;
    `,
    O: css`
      font-size: 11px;
      font-weight: ${tokens.fontWeight.medium};
      line-height: 16px;
      letter-spacing: 0.05em;
    `,
  };
  return styles[variant];
};

interface StyledTextProps {
  variant: TextVariant;
  customColor?: string;
  customWidth?: string | number;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  whiteSpace: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis: boolean;
}

const StyledText = styled.div<StyledTextProps>`
  font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  margin: 0;
  
  ${({ variant }) => getTextStyles(variant)}
  
  color: ${({ customColor }) => customColor || 'inherit'};
  width: ${({ customWidth }) =>
    customWidth ? (typeof customWidth === 'number' ? `${customWidth}px` : customWidth) : 'auto'};
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ whiteSpace, ellipsis }) => (ellipsis ? 'nowrap' : whiteSpace)};
  
  ${({ ellipsis }) =>
    ellipsis &&
    css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: AllowedHTMLElement;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis?: boolean;
  htmlFor?: string;
}

export const Text = ({
  variant = 'B1',
  as,
  children,
  color,
  width = 'auto',
  textAlign = 'left',
  whiteSpace = 'normal',
  ellipsis = false,
  htmlFor,
  ...props
}: TextProps) => {
  const Component = as || (VARIANT_TO_SEMANTIC_ELEMENT[variant] as React.ElementType);

  const textProps = {
    variant,
    customColor: color,
    customWidth: width,
    textAlign,
    whiteSpace,
    ellipsis,
    ...(htmlFor && { htmlFor }),
    ...props,
  };

  return (
    <StyledText as={Component} {...textProps}>
      {children}
    </StyledText>
  );
};
