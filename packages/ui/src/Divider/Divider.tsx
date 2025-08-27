import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

export const DIVIDER_CONSTANTS = {
  SPACING: {
    SM: '8px',
    MD: '16px',
    LG: '24px',
    XL: '32px',
  },
  CONTENT_SPACING: {
    HORIZONTAL: '16px',
    VERTICAL: '16px',
  },
} as const;

type DividerSpacing = keyof typeof DIVIDER_CONSTANTS.SPACING;
type DividerOrientation = 'horizontal' | 'vertical';

interface DividerStyleProps {
  orientation: DividerOrientation;
  spacing?: DividerSpacing | number;
  hasChildren: boolean;
}

const getSpacingValue = (spacing: DividerSpacing | number | undefined) => {
  if (!spacing) return undefined;
  return typeof spacing === 'string' ? DIVIDER_CONSTANTS.SPACING[spacing] : `${spacing}px`;
};

const StyledDividerContainer = styled.div<DividerStyleProps>`
  display: flex;
  align-items: center;
  
  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
    flex-direction: column;
    height: 100%;
  `
      : css`
    width: 100%;
  `}
  
  ${({ spacing, orientation }) => {
    const spacingValue = getSpacingValue(spacing);
    if (!spacingValue) return '';

    return orientation === 'horizontal'
      ? css`
      margin-top: ${spacingValue};
      margin-bottom: ${spacingValue};
    `
      : css`
      margin-left: ${spacingValue};
      margin-right: ${spacingValue};
    `;
  }}
`;

const StyledDividerLine = styled.div<{ orientation: DividerOrientation }>`
  flex: 1;
  border-color: ${tokens.colors.neutral[300]};
  
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
    border-top: 1px solid;
  `
      : css`
    border-left: 1px solid;
  `}
`;

const StyledDividerContent = styled.div<{ orientation: DividerOrientation }>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
    padding: 0 ${DIVIDER_CONSTANTS.CONTENT_SPACING.HORIZONTAL};
  `
      : css`
    padding: ${DIVIDER_CONSTANTS.CONTENT_SPACING.VERTICAL} 0;
  `}
`;

const StyledVerticalDivider = styled.div<DividerStyleProps>`
  height: 100%;
  border-left: 1px solid ${tokens.colors.neutral[300]};
  
  ${({ spacing }) => {
    const spacingValue = getSpacingValue(spacing);
    if (!spacingValue) return '';

    return css`
      margin-left: ${spacingValue};
      margin-right: ${spacingValue};
    `;
  }}
`;

const StyledHorizontalDivider = styled.hr<DividerStyleProps>`
  width: 100%;
  border: none;
  border-top: 1px solid ${tokens.colors.neutral[300]};
  margin: 0;
  
  ${({ spacing }) => {
    const spacingValue = getSpacingValue(spacing);
    if (!spacingValue) return '';

    return css`
      margin-top: ${spacingValue};
      margin-bottom: ${spacingValue};
    `;
  }}
`;

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: DividerOrientation;
  spacing?: DividerSpacing | number;
  children?: React.ReactNode;
}

export const Divider = ({
  orientation = 'horizontal',
  spacing,
  children,
  ...props
}: DividerProps) => {
  const hasChildren = Boolean(children);

  if (hasChildren) {
    return (
      <StyledDividerContainer
        orientation={orientation}
        spacing={spacing}
        hasChildren={hasChildren}
        {...props}
      >
        <StyledDividerLine orientation={orientation} />
        <StyledDividerContent orientation={orientation}>{children}</StyledDividerContent>
        <StyledDividerLine orientation={orientation} />
      </StyledDividerContainer>
    );
  }

  if (orientation === 'vertical') {
    return (
      <StyledVerticalDivider
        orientation={orientation}
        spacing={spacing}
        hasChildren={hasChildren}
        role='separator'
        aria-orientation='vertical'
        tabIndex={-1}
        {...props}
      />
    );
  }

  return (
    <StyledHorizontalDivider
      orientation={orientation}
      spacing={spacing}
      hasChildren={hasChildren}
      {...props}
    />
  );
};
