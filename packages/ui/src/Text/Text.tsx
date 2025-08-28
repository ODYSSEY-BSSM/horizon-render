import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export type TextVariant = 'H1' | 'H2' | 'H3' | 'ST' | 'B1' | 'B2' | 'C' | 'O';

export type AllowedHTMLElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'li'
  | 'blockquote'
  | 'caption'
  | 'legend'
  | 'figcaption'
  | 'dt'
  | 'dd'
  | 'small'
  | 'strong'
  | 'em'
  | 'button';

const getSemanticElement = (variant: TextVariant): AllowedHTMLElement => {
  const mapping: Record<TextVariant, AllowedHTMLElement> = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    ST: 'h4',
    B1: 'p',
    B2: 'p',
    C: 'span',
    O: 'span',
  };
  return mapping[variant];
};

const textStyles = {
  h1: css`
    font-size: 32px;
    font-weight: ${tokens.fontWeight.heavy};
    line-height: 44px;
    letter-spacing: -0.02em;
  `,
  h2: css`
    font-size: 24px;
    font-weight: ${tokens.fontWeight.extrabold};
    line-height: 34px;
    letter-spacing: -0.015em;
  `,
  h3: css`
    font-size: 20px;
    font-weight: ${tokens.fontWeight.bold};
    line-height: 28px;
    letter-spacing: -0.01em;
  `,
  subtitle: css`
    font-size: 18px;
    font-weight: ${tokens.fontWeight.semibold};
    line-height: 26px;
    letter-spacing: normal;
  `,
  body: css`
    font-size: 16px;
    font-weight: ${tokens.fontWeight.regular};
    line-height: 24px;
    letter-spacing: normal;
  `,
  small: css`
    font-size: 14px;
    font-weight: ${tokens.fontWeight.light};
    line-height: 22px;
    letter-spacing: normal;
  `,
  caption: css`
    font-size: 12px;
    font-weight: ${tokens.fontWeight.extralight};
    line-height: 18px;
    letter-spacing: 0.01em;
  `,
  overline: css`
    font-size: 11px;
    font-weight: ${tokens.fontWeight.medium};
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  `,
} as const;

interface StyledTextProps {
  variant: TextVariant;
  color?: string;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis?: boolean;
}

const getTextStyle = (variant: TextVariant) => {
  const styleMapping: Record<TextVariant, keyof typeof textStyles> = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    ST: 'subtitle',
    B1: 'body',
    B2: 'small',
    C: 'caption',
    O: 'overline',
  };
  return textStyles[styleMapping[variant]];
};

const StyledText = styled.div<StyledTextProps>`
    font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    margin: 0;

    ${({ variant }) => getTextStyle(variant)}

    color: ${({ color }) => color || 'inherit'};
    width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : 'auto')};
    text-align: ${({ textAlign = 'left' }) => textAlign};
    white-space: ${({ whiteSpace = 'normal', ellipsis }) => (ellipsis ? 'nowrap' : whiteSpace)};

    ${({ ellipsis }) =>
      ellipsis &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
    `}
`;

interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
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
  width,
  textAlign,
  whiteSpace,
  ellipsis = false,
  htmlFor,
  ...restProps
}: TextProps) => {
  const element = as || getSemanticElement(variant);

  return (
    <StyledText
      as={element}
      variant={variant}
      color={color}
      width={width}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      ellipsis={ellipsis}
      {...(htmlFor && { htmlFor })}
      {...restProps}
    >
      {children}
    </StyledText>
  );
};
