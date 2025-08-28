import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

type ColorToken =
  | `primary.${keyof typeof tokens.colors.primary}`
  | `accent.${keyof typeof tokens.colors.accent}`
  | `neutral.${keyof typeof tokens.colors.neutral}`
  | `warning.${keyof typeof tokens.colors.warning}`;

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

const createTextStyle = (
  fontSize: number,
  fontWeight: keyof typeof tokens.fontWeight,
  lineHeight: number,
  letterSpacing: keyof typeof tokens.letterSpacing,
  textTransform?: string
) => css`
  font-size: ${tokens.fontSize[fontSize as keyof typeof tokens.fontSize]};
  font-weight: ${tokens.fontWeight[fontWeight]};
  line-height: ${tokens.lineHeight[lineHeight as keyof typeof tokens.lineHeight]};
  letter-spacing: ${(tokens.letterSpacing as any)[letterSpacing]};
  ${textTransform ? `text-transform: ${textTransform};` : ''}
`;

const textStyles = {
  h1: createTextStyle(32, 'heavy', 44, '-2'),
  h2: createTextStyle(24, 'extrabold', 34, '-1.5'),
  h3: createTextStyle(20, 'bold', 28, '-1'),
  subtitle: createTextStyle(18, 'semibold', 26, 0),
  body: createTextStyle(16, 'regular', 24, 0),
  small: createTextStyle(14, 'light', 22, 0),
  caption: createTextStyle(12, 'extralight', 18, 1),
  overline: createTextStyle(11, 'medium', 16, 5, 'uppercase'),
} as const;

const STYLE_MAPPING: Record<TextVariant, keyof typeof textStyles> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  ST: 'subtitle',
  B1: 'body',
  B2: 'small',
  C: 'caption',
  O: 'overline',
};

const getTextStyle = (variant: TextVariant) => {
  return textStyles[STYLE_MAPPING[variant]];
};

interface StyledTextProps {
  variant: TextVariant;
  color?: ColorToken;
  width?: string | number;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  ellipsis?: boolean;
}

const StyledText = styled.div<StyledTextProps>`
    font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    margin: 0;

    ${({ variant }) => getTextStyle(variant)}

    color: ${({ color }) => {
      if (!color) return 'inherit';
      const [colorGroup, shade] = color.split('.') as [keyof typeof tokens.colors, string];
      return (tokens.colors[colorGroup] as any)[shade];
    }};
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
  color?: ColorToken;
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
      {...(htmlFor && element === 'label' && { htmlFor })}
      {...restProps}
    >
      {children}
    </StyledText>
  );
};
