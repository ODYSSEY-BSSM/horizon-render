'use client';

import { NotFoundContent, SlotMachineDigits } from '@/components/notfound';
import { useSlotMachine } from '@/hooks/notfound/useSlotMachine';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Button } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import Link from 'next/link';

const NotFound = () => {
  const { digits, spinningStates, isJackpot, handleDigitClick, handleContainerClick } =
    useSlotMachine();

  return (
    <StyledContainer>
      <StyledWhiteCircle>
        <StyledAnimatedContainer direction='column' align='center' gap={40}>
          {isJackpot && (
            <StyledCongratulationMessage>
              축하합니다, 가서 공부나 하세요!
            </StyledCongratulationMessage>
          )}
          <SlotMachineDigits
            digits={digits}
            spinningStates={spinningStates}
            onDigitClick={handleDigitClick}
            onContainerClick={handleContainerClick}
          />
          <StyledAnimatedContent direction='column' gap={20} align='center'>
            <NotFoundContent />
          </StyledAnimatedContent>
          <StyledAnimatedButton as={Link} href='/' size='large'>
            메인으로 돌아가기
          </StyledAnimatedButton>
        </StyledAnimatedContainer>
      </StyledWhiteCircle>
    </StyledContainer>
  );
};

export default NotFound;

const StyledContainer = styled.div`
  background-color: ${tokens.colors.primary[200]};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledWhiteCircle = styled.div`
  background-color: ${tokens.colors.white};
  width: 1200px;
  height: 1200px;
  border-radius: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledAnimatedContainer = styled(Flexbox)`
  & > * {
    transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const StyledAnimatedContent = styled(Flexbox)``;

const StyledAnimatedButton = styled(Button)``;

const StyledCongratulationMessage = styled.p`
  font-family: 'SUIT Variable', sans-serif;
  font-size: 32px;
  font-weight: normal;
  color: ${tokens.colors.black};
  margin: 0;
  margin-bottom: 40px;
  line-height: normal;
  text-align: center;
  animation: slideInFromTop 0.8s ease-out;

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
