import { type TextVariant, getTextStyle } from '@/constants';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import type { CSSProperties } from 'react';

export type AllowedHTMLElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  children: React.ReactNode;
  color?: string;
  width?: string;
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  ellipsis?: boolean;
  as?: AllowedHTMLElement;
  htmlFor?: string;
}

const defaultElement: Record<TextVariant, AllowedHTMLElement> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  ST: 'h4',
  B1: 'p',
  B2: 'p',
  C: 'span',
  O: 'span',
};

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
  const element = as || defaultElement[variant];

  return (
    <StyledText
      as={element}
      {...{ variant, color, width, textAlign, whiteSpace, ellipsis }}
      {...restProps}
    >
      {children}
    </StyledText>
  );
};

interface StyledTextProps {
  variant: TextVariant;
  color: string;
  width: string;
  textAlign: CSSProperties['textAlign'];
  whiteSpace: CSSProperties['whiteSpace'];
  ellipsis: boolean;
}

const StyledText = styled.div<StyledTextProps>`
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
