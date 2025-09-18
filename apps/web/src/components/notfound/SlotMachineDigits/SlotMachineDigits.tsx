import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';

interface SlotMachineDigitsProps {
  digits: string[];
  spinningStates: boolean[];
  onDigitClick: (index: number) => void;
}

const SlotMachineDigits = ({ digits, spinningStates, onDigitClick }: SlotMachineDigitsProps) => {
  const handleDigitClick = (index: number) => {
    onDigitClick(index);
  };

  return (
    <StyledNotFoundTextContainer
      // biome-ignore lint/a11y/useSemanticElements: 내부에 button 요소들이 있어서 button 요소 사용 불가
      role='group'
      aria-label='슬롯머신 숫자 그룹'
    >
      {digits.map((digit, index) => (
        <StyledDigit
          // biome-ignore lint/suspicious/noArrayIndexKey: 3개의 요소로 고정된 배열이며, 순서는 변하지 않습니다.
          key={`digit-${index}`}
          aria-label={`슬롯 ${
            index + 1
          }번째 숫자 ${digit}${spinningStates[index] ? ', 클릭하면 멈춤' : ', 클릭하면 시작'}`}
          onClick={() => handleDigitClick(index)}
          isSpinning={spinningStates[index]}
        >
          {digit}
        </StyledDigit>
      ))}
    </StyledNotFoundTextContainer>
  );
};

export default SlotMachineDigits;

const StyledNotFoundTextContainer = styled.div`
  display: flex;
  gap: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
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
  cursor: pointer;
  min-width: 150px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
