'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  centered?: boolean;
}

const AppLayout = ({ children, centered = false }: AppLayoutProps) => {
  return <StyledAppLayout centered={centered}>{children}</StyledAppLayout>;
};

export default AppLayout;

const BLOCKED_PROPS = new Set(['centered']);

const shouldForwardProp = (prop: string): boolean => {
  return !BLOCKED_PROPS.has(prop);
};

const StyledAppLayout = styled('div', { shouldForwardProp })<{
  centered: boolean;
}>`
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    background-color: ${tokens.colors.background};
    display: ${({ centered }) => (centered ? 'flex' : 'block')};
    ${({ centered }) =>
      centered &&
      `
        justify-content: center;
        align-items: center;
      `}
`;
