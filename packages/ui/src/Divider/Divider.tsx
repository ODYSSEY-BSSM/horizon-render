import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import React from 'react';

type HorizontalProps = Omit<React.ComponentPropsWithoutRef<'hr'>, 'children'> & {
  orientation?: 'horizontal';
};

type VerticalProps = React.ComponentPropsWithoutRef<'div'> & {
  orientation: 'vertical';
};

export type DividerProps = HorizontalProps | VerticalProps;

export const Divider = React.forwardRef<HTMLHRElement | HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', ...props }, ref) => {
    if (orientation === 'vertical') {
      return (
        <StyledVerticalDivider
          ref={ref as React.ForwardedRef<HTMLDivElement>}
          {...props}
          role='separator'
          aria-orientation='vertical'
        />
      );
    }

    return <StyledDivider ref={ref as React.ForwardedRef<HTMLHRElement>} {...props} />;
  },
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
