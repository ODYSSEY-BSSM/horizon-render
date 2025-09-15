import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text, TextField } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import { useState } from 'react';
import ContinueWithGoogle from './ContinueWithGoogle';
import SecondaryAction from './SecondaryAction';

const SignInContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormValid) {
      // TODO: Implement login logic
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic
  };

  const handleSignUp = () => {
    // TODO: Navigate to signup page
  };

  return (
    <StyledContainer>
      {/* Header */}
      <Flexbox direction='column' gap='8px' align='start' width='400px'>
        <Text variant='H2' color={tokens.colors.primary[500]}>
          HORIZON
        </Text>
        <Text variant='B1' color={tokens.colors.neutral[500]}>
          환영합니다, 로그인을 진행해주세요
        </Text>
      </Flexbox>

      {/* Form Fields */}
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

      {/* Buttons */}
      <Flexbox direction='column' gap='40px' width='400px'>
        <Flexbox direction='column' gap='16px'>
          {/* Login Button */}
          <StyledLoginButton disabled={!isFormValid} onClick={handleLogin}>
            <Text variant='ST' color={tokens.colors.white}>
              로그인
            </Text>
          </StyledLoginButton>

          {/* Divider with Text */}
          <StyledDividerWrapper>
            <StyledDividerLine />
            <StyledDividerText>
              <Text variant='O' color={tokens.colors.neutral[400]}>
                또는
              </Text>
            </StyledDividerText>
          </StyledDividerWrapper>

          {/* Google Button */}
          <ContinueWithGoogle onClick={handleGoogleLogin} />
        </Flexbox>

        {/* Signup Link */}
        <SecondaryAction onSignUpClick={handleSignUp} />
      </Flexbox>
    </StyledContainer>
  );
};

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

export default SignInContent;
