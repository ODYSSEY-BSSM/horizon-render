import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { StyledTextProps, TextVariant } from './Text.types';

const baseTextStyle = css`
  font-family: ${tokens.fontFamily.suit.join(', ')};
`;

const makeTextStyle = (
  fontSize: keyof typeof tokens.fontSize,
  fontWeight: keyof typeof tokens.fontWeight,
  lineHeight: keyof typeof tokens.lineHeight,
  letterSpacing: keyof typeof tokens.letterSpacing,
) => css`
  ${baseTextStyle};
  font-size: ${tokens.fontSize[fontSize]};
  font-weight: ${tokens.fontWeight[fontWeight]};
  line-height: ${tokens.lineHeight[lineHeight]};
  letter-spacing: ${tokens.letterSpacing[letterSpacing]};
`;

export const getTextStyle = (variant: TextVariant) => {
  const styles: Record<TextVariant, ReturnType<typeof css>> = {
    H1: makeTextStyle(32, 'heavy', 44, '-2'),
    H2: makeTextStyle(24, 'extrabold', 34, '-1.5'),
    H3: makeTextStyle(20, 'bold', 28, '-1'),
    ST: makeTextStyle(18, 'semibold', 26, 0),
    B1: makeTextStyle(16, 'regular', 24, 0),
    B2: makeTextStyle(14, 'light', 22, 0),
    C: makeTextStyle(12, 'extralight', 18, 1),
    O: makeTextStyle(11, 'medium', 16, 5),
  };

  return styles[variant];
};

const shouldForwardProp = (prop: string): boolean => {
  const blockedProps = new Set([
    'variant',
    'color',
    'width',
    'textAlign',
    'whiteSpace',
    'ellipsis',
  ]);
  return !blockedProps.has(prop);
};

export const StyledText = styled('div', { shouldForwardProp })<StyledTextProps>`
    ${({ color, textAlign, width }) => ({ color, textAlign, width })};
    ${({ whiteSpace, ellipsis }) =>
      ellipsis
        ? {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }
        : { whiteSpace }};

    ${({ variant }) => getTextStyle(variant)};
`;
