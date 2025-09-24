'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import Link from 'next/link';

const LogoArea = () => {
  return (
    <StyledLogoLink href='/' aria-label='홈으로 이동'>
      <StyledLogoArea>
        <StyledLogo src='/svg/logo.svg' alt='' aria-hidden='true' />
        <Text variant='H2' color={tokens.colors.black} as='span'>
          HORIZON
        </Text>
      </StyledLogoArea>
    </StyledLogoLink>
  );
};

export default LogoArea;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

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
