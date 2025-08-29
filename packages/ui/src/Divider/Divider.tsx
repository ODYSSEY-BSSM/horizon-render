import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import React from 'react';

type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  orientation?: DividerOrientation;
  className?: string;
}

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  ({ orientation = 'horizontal', ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <StyledVerticalDivider
          ref={ref as React.Ref<HTMLDivElement>}
          {...props}
          role='separator'
          aria-orientation='vertical'
        />
      );
    }

    return <StyledDivider ref={ref as React.Ref<HTMLHRElement>} {...props} />;
  }
);

Divider.displayName = 'Divider';

const StyledDivider = styled.hr`
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
