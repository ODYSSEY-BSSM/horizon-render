import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import SecondaryAction from '../../SecondaryAction/SecondaryAction';
import VerificationInput from '../../VerificationInput/VerificationInput';
import type { VerificationStepProps } from '../types';

const VerificationStep = ({
  verificationCode,
  setVerificationCode,
  onSubmit,
  isLoading,
  errors,
  email,
}: VerificationStepProps) => {
  return (
    <>
      <VerificationInput
        value={verificationCode}
        onChange={setVerificationCode}
        error={errors.code}
        email={email}
      />

      <StyledButtonSection direction='column' gap='40px'>
        <StyledSubmitButton
          onClick={onSubmit}
          disabled={verificationCode.length !== 6 || !!errors.code || isLoading}
        >
          <Text variant='ST' color={tokens.colors.white}>
            {isLoading ? '인증 중...' : '확인'}
          </Text>
        </StyledSubmitButton>

        <SecondaryAction
          primaryText='인증번호를 받지 못하셨나요?'
          actionText='다시 보내기'
          onActionClick={() => {
            // Resend verification code
          }}
          showTimer={true}
          timerDuration={30}
        />
      </StyledButtonSection>
    </>
  );
};

const StyledSubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 48px;
  background-color: ${({ disabled }) => (disabled ? tokens.colors.neutral[300] : tokens.colors.primary[500])};
  border: none;
  border-radius: ${tokens.rounding.object};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ disabled }) => (disabled ? tokens.colors.neutral[300] : tokens.colors.primary[600])};
  }
  
  &:disabled {
    opacity: 1;
  }
`;

const StyledButtonSection = styled(Flexbox)`
  margin-top: 60px;
`;

export default VerificationStep;
