import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface HorizontalProps extends Omit<React.HTMLAttributes<HTMLHRElement>, 'length'> {
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
      {...{ length }}
    />
  ) : (
    <StyledHorizontalDivider {...props} {...{ length }} />
  );
};

Divider.displayName = 'Divider';

interface StyledDividerProps {
  length: string;
}

const StyledHorizontalDivider = styled.hr<StyledDividerProps>`
  width: ${({ length }) => length};
  border-top: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;

const StyledVerticalDivider = styled.div<StyledDividerProps>`
  height: ${({ length }) => length};
  display: inline-block;
  border-left: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;
