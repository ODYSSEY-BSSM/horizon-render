import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { StyledDividerProps } from './Divider.types';

const blockedProps = new Set(['length']);
export const shouldForwardProp = (prop: string): boolean => {
  return !blockedProps.has(prop);
};

export const StyledHorizontalDivider = styled('hr', { shouldForwardProp })<StyledDividerProps>`
  width: ${({ length }) => length};
  border-top: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;

export const StyledVerticalDivider = styled('div', { shouldForwardProp })<StyledDividerProps>`
  height: ${({ length }) => length};
  display: inline-block;
  border-left: ${tokens.stroke.weight} solid ${tokens.stroke.color};
`;
