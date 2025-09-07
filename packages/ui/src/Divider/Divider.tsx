import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface HorizontalProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal';
}

interface VerticalProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation: 'vertical';
}

export type DividerProps = HorizontalProps | VerticalProps;

export const Divider = ({ orientation = 'horizontal', ...props }: DividerProps) => {
  return orientation === 'vertical' ? (
    <StyledVerticalDivider {...props} role='separator' aria-orientation='vertical' />
  ) : (
    <StyledHorizontalDivider {...props} />
  );
};

Divider.displayName = 'Divider';

const StyledHorizontalDivider = styled.hr`
    margin: 0;
    border: none;
    width: 100%;
    border-top: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;

const StyledVerticalDivider = styled.div`
  margin: 0;
  border: none;
  height: 100%;
  display: inline-block;
  border-left: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;
