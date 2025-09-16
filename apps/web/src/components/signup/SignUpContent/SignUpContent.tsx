import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon, Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import { useSignUpHandlers } from './hooks/useSignUpHandlers';
import EmailStep from './steps/EmailStep';
import PasswordStep from './steps/PasswordStep';
import UsernameStep from './steps/UsernameStep';
import VerificationStep from './steps/VerificationStep';

const SignUpContent = () => {
  const {
    currentStep,
    signUpData,
    isLoading,
    errors,
    setErrors,
    email,
    setEmail,
    verificationCode,
    setVerificationCode,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    username,
    setUsername,
    handleEmailSubmit,
    handleVerificationSubmit,
    handlePasswordSubmit,
    handleUsernameSubmit,
    handleGoogleSignUp,
    handleSignIn,
    handleBack,
  } = useSignUpHandlers();

  const getStepTitle = () => {
    switch (currentStep) {
      case 'email':
        return '회원가입';
      case 'verification':
        return '인증번호 입력';
      case 'password':
        return '비밀번호 설정';
      case 'username':
        return '사용자 이름';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 'email':
        return '이메일 주소를 입력하고 인증을 완료하세요';
      case 'verification':
        return `${signUpData.email}으로 인증번호를 전송했습니다`;
      case 'password':
        return '비밀번호를 지정해주세요.';
      case 'username':
        return '이름을 입력해주세요 (변경 가능)';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'email':
        return (
          <EmailStep
            email={email}
            setEmail={(value) => {
              setEmail(value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: '' }));
              }
            }}
            onSubmit={handleEmailSubmit}
            isLoading={isLoading}
            errors={errors}
            onGoogleSignUp={handleGoogleSignUp}
            onSignIn={handleSignIn}
          />
        );

      case 'verification':
        return (
          <VerificationStep
            verificationCode={verificationCode}
            setVerificationCode={setVerificationCode}
            onSubmit={handleVerificationSubmit}
            isLoading={isLoading}
            errors={errors}
            email={signUpData.email}
          />
        );

      case 'password':
        return (
          <PasswordStep
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onSubmit={handlePasswordSubmit}
            isLoading={isLoading}
            errors={errors}
          />
        );

      case 'username':
        return (
          <UsernameStep
            username={username}
            setUsername={setUsername}
            onSubmit={handleUsernameSubmit}
            isLoading={isLoading}
            errors={errors}
          />
        );
    }
  };

  return (
    <StyledContainer>
      <StyledMainWrapper>
        <StyledContentWrapper>
          {/* Header Section */}
          <Flexbox direction='column' gap={currentStep === 'email' ? '40px' : '60px'}>
            <Flexbox direction='column' gap='16px'>
              <StyledBackButton onClick={handleBack}>
                <Icon name='arrow_left_alt' color={tokens.colors.neutral[400]} size='24px' />
              </StyledBackButton>
              <Flexbox direction='column' gap='8px' align='start'>
                <StyledTitle>{getStepTitle()}</StyledTitle>
                <StyledDescription>{getStepDescription()}</StyledDescription>
              </Flexbox>
            </Flexbox>

            {/* Content Section */}
            {renderStepContent()}
          </Flexbox>
        </StyledContentWrapper>
      </StyledMainWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: ${tokens.colors.neutral[100]};
  padding: 0;
`;

const StyledMainWrapper = styled.div`
  background-color: ${tokens.colors.white};
  width: 720px;
  min-height: 100vh;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  padding-top: 140px;
`;

const StyledContentWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const StyledBackButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover {
    opacity: 0.7;
  }
`;

const StyledTitle = styled(Text)`
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: -0.36px;
  color: ${tokens.colors.primary[500]};
`;

const StyledDescription = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  color: ${tokens.colors.neutral[900]};
`;

export default SignUpContent;
