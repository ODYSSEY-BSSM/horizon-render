'use client';

import AppLayout from '@/layouts/AppLayout/AppLayout';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledContainer>
      <AppLayout centered>
        <StyledAuthLayout>{children}</StyledAuthLayout>
      </AppLayout>
    </StyledContainer>
  );
};

export default AuthLayout;

const StyledContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const StyledAuthLayout = styled.div`
  width: 720px;
  height: 100vh;
  background-color: ${tokens.colors.white};
  padding: 0 160px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
