import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface HorizontalProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal';
  length?: string;
}

interface VerticalProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation: 'vertical';
  length?: string;
}

export type DividerProps = HorizontalProps | VerticalProps;

export const Divider = ({
  orientation = 'horizontal',
  length = '100%',
  ...props
}: DividerProps) => {
  return orientation === 'vertical' ? (
    <StyledVerticalDivider
      {...props}
      role='separator'
      aria-orientation='vertical'
      length={length}
    />
  ) : (
    <StyledHorizontalDivider {...props} length={length} />
  );
};

Divider.displayName = 'Divider';

interface StyledDividerProps {
  length: string;
}

const shouldForwardProp = (prop: string): boolean => {
  const blockedProps = new Set(['length']);
  return !blockedProps.has(prop);
};

const StyledHorizontalDivider = styled('hr', { shouldForwardProp })<StyledDividerProps>`
  width: ${({ length }) => length};
  border-top: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;

const StyledVerticalDivider = styled('div', { shouldForwardProp })<StyledDividerProps>`
  height: ${({ length }) => length};
  display: inline-block;
  border-left: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;
