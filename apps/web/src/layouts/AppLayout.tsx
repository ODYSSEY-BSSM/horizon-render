import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <StyledAppLayout>{children}</StyledAppLayout>;
}

const StyledAppLayout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${tokens.colors.background};
`;
