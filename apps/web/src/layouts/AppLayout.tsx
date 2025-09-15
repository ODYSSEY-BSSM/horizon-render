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
    background-color: ${tokens.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
`;
