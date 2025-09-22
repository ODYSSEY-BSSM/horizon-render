'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon } from '@horizon/ui';

interface ProfileProps {
  onClick?: () => void;
}

const Profile = ({ onClick }: ProfileProps) => {
  return (
    <StyledProfile
      onClick={onClick}
      type='button'
      aria-label='프로필 메뉴 열기'
      title='프로필 메뉴 열기'
    >
      <Icon name='person' variant='LG' color={tokens.colors.white} filled />
    </StyledProfile>
  );
};

export default Profile;

const StyledProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: ${tokens.colors.neutral[400]};
  cursor: pointer;
  padding: 4px;
  box-sizing: border-box;
`;
