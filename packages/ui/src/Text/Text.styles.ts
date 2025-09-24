import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { BLOCKED_PROPS, TEXT_VARIANTS } from './Text.constants';
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
  const config = TEXT_VARIANTS[variant];
  return makeTextStyle(config.fontSize, config.fontWeight, config.lineHeight, config.letterSpacing);
};

const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

const getEllipsisStyles = (ellipsis: boolean, whiteSpace?: string) => {
  if (ellipsis) {
    return {
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden' as const,
      textOverflow: 'ellipsis' as const,
    };
  }
  return { whiteSpace };
};

export const StyledText = styled('div', { shouldForwardProp })<StyledTextProps>`
  ${({ color, textAlign, width }) => ({ color, textAlign, width })}
  
  ${({ whiteSpace, ellipsis }) => getEllipsisStyles(!!ellipsis, whiteSpace)}
  ${({ variant }) => getTextStyle(variant)}
`;
