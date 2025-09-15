'use client';

import AppLayout from '@/layouts/AppLayout';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Flexbox } from '@horizon/utils';
import type React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledContainer>
      <AppLayout>
        <Flexbox
          justify='center'
          align='center'
          direction='column'
          shrink={0}
          gap='60px'
          width='720px'
          height='100vh'
        >
          <StyledAuthLayout>{children}</StyledAuthLayout>
        </Flexbox>
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
  width: 100%;
  height: 100%;
  background-color: ${tokens.colors.white};
  padding: 0 160px;
  overflow: hidden;
`;
