import ContinueWithGoogle from '@/components/signin/ContinueWithGoogle/ContinueWithGoogle';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text, TextField } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import SecondaryAction from '../../SecondaryAction/SecondaryAction';
import type { EmailStepProps } from '../types';

const EmailStep = ({
  email,
  setEmail,
  onSubmit,
  isLoading,
  errors,
  onGoogleSignUp,
  onSignIn,
}: EmailStepProps) => {
  return (
    <>
      <TextField
        label='이메일'
        placeholder='이메일 입력'
        type='email'
        width='100%'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) {
            // Clear error when user starts typing
          }
        }}
        error={!!errors.email}
        helperText={errors.email}
      />

      <Flexbox direction='column' gap='40px' style={{ marginTop: '82px' }}>
        <Flexbox direction='column' gap='12px'>
          <StyledSubmitButton
            onClick={onSubmit}
            disabled={!email.trim() || !!errors.email || isLoading}
          >
            <Text variant='ST' color={tokens.colors.white}>
              {isLoading ? '전송 중...' : '인증번호 보내기'}
            </Text>
          </StyledSubmitButton>

          <StyledDividerWrapper>
            <StyledDividerLine />
            <StyledDividerText>
              <Text variant='O' color={tokens.colors.neutral[400]}>
                또는
              </Text>
            </StyledDividerText>
          </StyledDividerWrapper>

          <ContinueWithGoogle onClick={onGoogleSignUp} />
        </Flexbox>
      </Flexbox>

      <div style={{ marginTop: '40px' }}>
        <SecondaryAction
          primaryText='이미 계정이 있으신가요?'
          actionText='로그인하기'
          onActionClick={onSignIn}
        />
      </div>
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

const StyledDividerWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDividerLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${tokens.colors.neutral[400]};
`;

const StyledDividerText = styled.div`
  background-color: ${tokens.colors.white};
  padding: 0 16px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export default EmailStep;
