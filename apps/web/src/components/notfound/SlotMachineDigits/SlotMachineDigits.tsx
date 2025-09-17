import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface SlotMachineDigitsProps {
  digits: string[];
  spinningStates: boolean[];
  onDigitClick: (index: number) => void;
  onContainerClick: () => void;
}

const SlotMachineDigits = ({
  digits,
  spinningStates,
  onDigitClick,
  onContainerClick,
}: SlotMachineDigitsProps) => {
  const handleDigitClick = (e: React.MouseEvent, index: number) => {
    if (spinningStates[index]) {
      e.stopPropagation();
      onDigitClick(index);
    }
  };

  return (
    <StyledNotFoundTextContainer
      // biome-ignore lint/a11y/useSemanticElements: 내부에 button 요소들이 있어서 button 요소 사용 불가
      role='button'
      tabIndex={0}
      aria-label='슬롯머신 전체 회전 시작'
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          e.currentTarget.click();
        }
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onKeyUp={(e) => {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          e.stopPropagation();
          e.currentTarget.click();
        }
      }}
      onClick={onContainerClick}
    >
      {digits.map((digit, index) => (
        <StyledDigit
          // biome-ignore lint/suspicious/noArrayIndexKey: Fixed array with 3 elements, order won't change
          key={`digit-${index}`}
          aria-label={`슬롯 ${
            index + 1
          }번째 숫자 ${digit}${spinningStates[index] ? ', 멈추려면 Enter' : ''}`}
          disabled={!spinningStates[index]}
          onClick={(e) => handleDigitClick(e, index)}
          isSpinning={spinningStates[index]}
        >
          {digit}
        </StyledDigit>
      ))}
    </StyledNotFoundTextContainer>
  );
};

const StyledNotFoundTextContainer = styled.div`
  display: flex;
  gap: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;

  &:focus-visible {
    outline: 2px solid ${tokens.colors.primary[500]};
    border-radius: ${tokens.rounding.object};
  }
`;

const StyledDigit = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isSpinning',
})<{ isSpinning: boolean }>`
  font-family: 'SUIT Variable', sans-serif;
  font-weight: bold;
  font-size: 240px;
  line-height: 200px;
  color: ${tokens.colors.neutral[800]};
  margin: 0;
  text-align: center;
  user-select: none;
  appearance: none;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: ${({ isSpinning }) => (isSpinning ? 'pointer' : 'default')};
  min-width: 150px;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export default SlotMachineDigits;
