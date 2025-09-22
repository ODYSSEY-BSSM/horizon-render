import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';

import NotFoundContent from '../NotFoundContent/NotFoundContent';

const WinMessage = () => {
  return (
    <>
      <StyledMainMessage>축하합니다, 가서 공부나 하세요!</StyledMainMessage>
      <NotFoundContent showMainMessage={false} />
    </>
  );
};

export default WinMessage;

const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledMainMessage = styled.h1`
  font-family: 'SUIT Variable', sans-serif;
  font-size: 32px;
  font-weight: normal;
  color: ${tokens.colors.black};
  margin: 0;
  margin-bottom: 40px;
  line-height: normal;
  text-align: center;
  animation: ${slideInFromTop} 0.8s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
