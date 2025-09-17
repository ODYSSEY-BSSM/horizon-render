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
    <StyledNotFoundTextContainer onClick={onContainerClick}>
      {digits.map((digit, index) => (
        <StyledDigit
          // biome-ignore lint/suspicious/noArrayIndexKey: Fixed array with 3 elements, order won't change
          key={`digit-${index}`}
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
`;

const StyledDigit = styled.span<{ isSpinning: boolean }>`
  font-family: 'SUIT Variable', sans-serif;
  font-weight: bold;
  font-size: 240px;
  line-height: 200px;
  color: ${tokens.colors.neutral[800]};
  margin: 0;
  text-align: center;
  user-select: none;
  cursor: pointer;
  min-width: 150px;
`;

export default SlotMachineDigits;
