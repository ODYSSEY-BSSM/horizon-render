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
    <>
      {/* SR 전용 전체 회전 버튼: 키보드/스크린리더 접근 지점 제공 */}
      <StyledSpinAllButton type='button' onClick={onContainerClick}>
        슬롯머신 전체 회전 시작
      </StyledSpinAllButton>
      <StyledNotFoundTextContainer
        // biome-ignore lint/a11y/useSemanticElements: 내부에 button 요소들이 있어서 button 요소 사용 불가
        role='group'
        aria-label='슬롯머신 숫자 그룹'
        onClick={onContainerClick}
      >
        {digits.map((digit, index) => (
          <StyledDigit
            // biome-ignore lint/suspicious/noArrayIndexKey: 3개의 요소로 고정된 배열이며, 순서는 변하지 않습니다.
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
    </>
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
`;

const StyledSpinAllButton = styled.button`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
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
