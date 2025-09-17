'use client';

import { NotFoundContent, SlotMachineDigits } from '@/components/notfound';
import { useSlotMachine } from '@/hooks/notfound/useSlotMachine';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Button } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import Link from 'next/link';

const NotFound = () => {
  const { digits, spinningStates, handleDigitClick, handleContainerClick } = useSlotMachine();

  return (
    <StyledContainer>
      <StyledWhiteCircle>
        <Flexbox direction='column' align='center' gap={40}>
          <SlotMachineDigits
            digits={digits}
            spinningStates={spinningStates}
            onDigitClick={handleDigitClick}
            onContainerClick={handleContainerClick}
          />
          <Flexbox direction='column' gap={20} align='center'>
            <NotFoundContent />
          </Flexbox>
          <Button as={Link} href='/' size='large'>
            메인으로 돌아가기
          </Button>
        </Flexbox>
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
