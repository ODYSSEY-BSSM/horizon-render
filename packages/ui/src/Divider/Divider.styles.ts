import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { BLOCKED_PROPS } from './Divider.constants';
import type { StyledDividerProps } from './Divider.types';

export const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

export const StyledHorizontalDivider = styled('hr', { shouldForwardProp })<StyledDividerProps>`
  width: ${({ length }) => length};
  border-top: 8px solid ${tokens.colors.neutral[300]};
`;

export const StyledVerticalDivider = styled('div', { shouldForwardProp })<StyledDividerProps>`
  height: ${({ length }) => length};
  display: inline-block;
  border-left: 8px solid ${tokens.colors.neutral[300]};
`;
