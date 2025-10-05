import ContinueWithGoogle from '@/components/signin/ContinueWithGoogle/ContinueWithGoogle';
import type { EmailStepProps } from '@/types';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import SecondaryAction from '../../../components/signup/SecondaryAction/SecondaryAction';

const EmailStep = ({
  email,
  onSubmit,
  isLoading,
  errors,
  onGoogleSignUp,
  onSignIn,
}: Pick<
  EmailStepProps,
  'email' | 'onSubmit' | 'isLoading' | 'errors' | 'onGoogleSignUp' | 'onSignIn'
>) => {
  return (
    <Flexbox direction='column' gap='40px'>
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
      <SecondaryAction
        primaryText='이미 계정이 있으신가요?'
        actionText='로그인하기'
        onActionClick={onSignIn}
      />
    </Flexbox>
  );
};

export default EmailStep;

const StyledSubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 48px;
  background-color: ${({ disabled }) => (disabled ? tokens.colors.neutral[300] : tokens.colors.primary[500])};
  border: none;
  border-radius: 8px;
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

  &:focus-visible {
    outline: 2px solid ${({ disabled }) => (disabled ? tokens.colors.neutral[400] : tokens.colors.primary[600])};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
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
