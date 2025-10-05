import ContinueWithGoogle from '@/components/signin/ContinueWithGoogle/ContinueWithGoogle';
import SecondaryAction from '@/components/signin/SecondaryAction/SecondaryAction';
import { useLogin } from '@/hooks/auth/signin/useSignIn';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text, TextField } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignInContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const loginMutation = useLogin();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    if (!isFormValid) {
      return;
    }

    try {
      await loginMutation.mutateAsync({
        email,
        password,
      });
      router.push('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      // TODO: 에러 토스트 또는 에러 메시지 표시
    }
  };

  const handleGoogleLogin = () => {
    router.push('/');
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  return (
    <StyledContainer>
      <Flexbox direction='column' gap='8px' align='start' width='400px'>
        <Text variant='H2' color={tokens.colors.primary[500]}>
          HORIZON
        </Text>
        <Text variant='B1' color={tokens.colors.neutral[500]}>
          환영합니다, 로그인을 진행해주세요.
        </Text>
      </Flexbox>

      <Flexbox direction='column' gap='16px' width='400px'>
        <TextField
          label='이메일'
          placeholder='이메일 입력'
          type='email'
          leftIcon='person'
          width='100%'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='비밀번호'
          placeholder='비밀번호 입력'
          type='password'
          leftIcon='lock'
          width='100%'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Flexbox>

      <Flexbox direction='column' gap='40px' width='400px'>
        <Flexbox direction='column' gap='16px'>
          <StyledLoginButton
            disabled={!isFormValid || loginMutation.isPending}
            onClick={handleLogin}
          >
            <Text variant='ST' color={tokens.colors.white}>
              {loginMutation.isPending ? '로그인 중...' : '로그인'}
            </Text>
          </StyledLoginButton>

          <StyledDividerWrapper>
            <StyledDividerLine />
            <StyledDividerText>
              <Text variant='O' color={tokens.colors.neutral[400]}>
                또는
              </Text>
            </StyledDividerText>
          </StyledDividerWrapper>

          <ContinueWithGoogle onClick={handleGoogleLogin} />
        </Flexbox>

        <SecondaryAction onSignUpClick={handleSignUp} />
      </Flexbox>
    </StyledContainer>
  );
};

export default SignInContent;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledLoginButton = styled.button<{ disabled: boolean }>`
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
