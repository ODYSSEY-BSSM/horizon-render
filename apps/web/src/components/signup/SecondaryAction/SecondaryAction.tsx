import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import { useEffect, useState } from 'react';

interface SecondaryActionProps {
  primaryText: string;
  actionText: string;
  onActionClick?: () => void;
  showTimer?: boolean;
  timerDuration?: number;
}

const SecondaryAction = ({
  primaryText,
  actionText,
  onActionClick,
  showTimer = false,
  timerDuration = 30,
}: SecondaryActionProps) => {
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [isTimerActive, setIsTimerActive] = useState(showTimer);

  useEffect(() => {
    if (showTimer) {
      setTimeLeft(timerDuration);
      setIsTimerActive(true);
    }
  }, [showTimer, timerDuration]);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, timeLeft]);

  const handleActionClick = () => {
    if (showTimer) {
      setTimeLeft(timerDuration);
      setIsTimerActive(true);
    }
    onActionClick?.();
  };

  if (showTimer) {
    return (
      <StyledTimerWrapper>
        <Flexbox direction='column' align='center' gap='0'>
          <Flexbox gap='4px'>
            <Text
              variant='B2'
              color={tokens.colors.neutral[600]}
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              {primaryText}
            </Text>
            <StyledActionButton
              onClick={handleActionClick}
              disabled={isTimerActive}
              isActive={!isTimerActive}
            >
              <Text
                variant='B2'
                color={isTimerActive ? tokens.colors.primary[400] : tokens.colors.primary[500]}
                style={{ fontSize: '14px', lineHeight: '20px' }}
              >
                {actionText}
              </Text>
            </StyledActionButton>
          </Flexbox>
          {isTimerActive && (
            <Text
              variant='B2'
              color={tokens.colors.neutral[400]}
              style={{ fontSize: '14px', lineHeight: '20px' }}
            >
              ({timeLeft}초 후 다시 보내기)
            </Text>
          )}
        </Flexbox>
      </StyledTimerWrapper>
    );
  }

  return (
    <Flexbox justify='center'>
      <Flexbox gap='4px'>
        <Text
          variant='B2'
          color={tokens.colors.neutral[600]}
          style={{ fontSize: '14px', lineHeight: '20px' }}
        >
          {primaryText}
        </Text>
        <StyledActionButton onClick={onActionClick} isActive={true}>
          <Text
            variant='B2'
            color={tokens.colors.primary[500]}
            style={{ fontSize: '14px', lineHeight: '20px' }}
          >
            {actionText}
          </Text>
        </StyledActionButton>
      </Flexbox>
    </Flexbox>
  );
};

const StyledTimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledActionButton = styled.button<{ isActive: boolean; disabled?: boolean }>`
  border: none;
  background: none;
  padding: 0;
  cursor: ${({ isActive, disabled }) => (disabled || !isActive ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }
`;

export default SecondaryAction;
