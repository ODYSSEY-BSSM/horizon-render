'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';

const LogoArea = () => {
  return (
    <StyledLogoArea>
      <StyledLogo src='/svg/logo.svg' alt='HORIZON' />
      <Text variant='H2' color={tokens.colors.black} as='span'>
        HORIZON
      </Text>
    </StyledLogoArea>
  );
};

export default LogoArea;

const StyledLogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  height: 64px;
  box-sizing: border-box;
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;
