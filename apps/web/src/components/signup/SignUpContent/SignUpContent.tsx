import ContinueWithGoogle from '@/components/signin/ContinueWithGoogle/ContinueWithGoogle';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon, Text, TextField } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import SecondaryAction from '../SecondaryAction/SecondaryAction';
import VerificationInput from '../VerificationInput/VerificationInput';

type SignUpStep = 'email' | 'verification' | 'password' | 'username';

interface SignUpData {
  email: string;
  verificationCode: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const SignUpContent = () => {
  const [currentStep, setCurrentStep] = useState<SignUpStep>('email');
  const [signUpData, setSignUpData] = useState<Partial<SignUpData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  // Form values
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  // Validation functions
  const validateEmail = (email: string) => {
    if (!email.trim()) return '이메일을 입력해주세요';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return '올바른 이메일 형식이 아닙니다';
    return '';
  };

  const validateVerificationCode = (code: string) => {
    if (!code.trim()) return '인증번호를 입력해주세요';
    if (code.length !== 6) return '인증번호 6자리를 입력해주세요';
    if (!/^\d{6}$/.test(code)) return '숫자 6자리를 입력해주세요';
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password.trim()) return '비밀번호를 입력해주세요';
    if (password.length < 8) return '비밀번호는 8자 이상이어야 합니다';
    if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(password)) return '영문과 숫자를 포함해야 합니다';
    return '';
  };

  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword.trim()) return '비밀번호 확인을 입력해주세요';
    if (confirmPassword !== password) return '비밀번호가 일치하지 않습니다';
    return '';
  };

  const validateUsername = (username: string) => {
    if (!username.trim()) return '이름을 입력해주세요';
    if (username.length < 2) return '이름은 2자 이상이어야 합니다';
    if (username.length > 20) return '이름은 20자 이하여야 합니다';
    if (!/^[가-힣a-zA-Z\s]+$/.test(username)) return '한글, 영문만 사용 가능합니다';
    return '';
  };

  // Submit handlers
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setIsLoading(true);
    setErrors({});
    try {
      // API call to send verification code
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
      setSignUpData((prev) => ({ ...prev, email }));
      setCurrentStep('verification');
    } catch (_error) {
      setErrors({ email: '이미 가입된 이메일입니다' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const codeError = validateVerificationCode(verificationCode);
    if (codeError) {
      setErrors({ code: codeError });
      return;
    }

    setIsLoading(true);
    setErrors({});
    try {
      // API call to verify code
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
      setSignUpData((prev) => ({ ...prev, verificationCode }));
      setCurrentStep('password');
    } catch (_error) {
      setErrors({ code: '인증번호가 올바르지 않습니다' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword, password);

    if (passwordError || confirmPasswordError) {
      setErrors({
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    setIsLoading(true);
    setErrors({});
    try {
      setSignUpData((prev) => ({ ...prev, password, confirmPassword }));
      setCurrentStep('username');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    if (usernameError) {
      setErrors({ username: usernameError });
      return;
    }

    setIsLoading(true);
    setErrors({});
    try {
      // API call to complete signup
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
      // const _finalData = { ...signUpData, username };
      // Signup completed
      router.push('/');
    } catch (_error) {
      setErrors({ username: '이미 사용중인 이름입니다' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    router.push('/');
  };

  const handleSignIn = () => {
    router.push('/auth/signin');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'verification':
        setCurrentStep('email');
        break;
      case 'password':
        setCurrentStep('verification');
        break;
      case 'username':
        setCurrentStep('password');
        break;
      default:
        router.back();
    }
  };

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
                  setErrors((prev) => ({ ...prev, email: '' }));
                }
              }}
              error={!!errors.email}
              helperText={errors.email}
            />

            <Flexbox direction='column' gap='40px' style={{ marginTop: '82px' }}>
              <Flexbox direction='column' gap='12px'>
                <StyledSubmitButton
                  onClick={handleEmailSubmit}
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

                <ContinueWithGoogle onClick={handleGoogleSignUp} />
              </Flexbox>
            </Flexbox>
          </>
        );

      case 'verification':
        return (
          <>
            <VerificationInput
              value={verificationCode}
              onChange={setVerificationCode}
              error={errors.code}
              email={signUpData.email}
            />

            <Flexbox direction='column' gap='40px' style={{ marginTop: '60px' }}>
              <StyledSubmitButton
                onClick={handleVerificationSubmit}
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
            </Flexbox>
          </>
        );

      case 'password':
        return (
          <>
            <Flexbox direction='column' gap='16px'>
              <TextField
                label='비밀번호'
                placeholder='비밀번호 입력'
                type='password'
                width='100%'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                label='비밀번호 확인'
                placeholder='비밀번호 재입력'
                type='password'
                width='100%'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Flexbox>

            <StyledSubmitButton
              onClick={handlePasswordSubmit}
              disabled={
                !password.trim() ||
                !confirmPassword.trim() ||
                !!errors.password ||
                !!errors.confirmPassword ||
                isLoading
              }
              style={{ marginTop: '60px' }}
            >
              <Text variant='ST' color={tokens.colors.white}>
                {isLoading ? '설정 중...' : '완료'}
              </Text>
            </StyledSubmitButton>
          </>
        );

      case 'username':
        return (
          <>
            <TextField
              label='이름'
              placeholder='이름 입력'
              type='text'
              width='100%'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
            />

            <StyledSubmitButton
              onClick={handleUsernameSubmit}
              disabled={!username.trim() || !!errors.username || isLoading}
              style={{ marginTop: '60px' }}
            >
              <Text variant='ST' color={tokens.colors.white}>
                {isLoading ? '완료 중...' : '완료'}
              </Text>
            </StyledSubmitButton>
          </>
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
                <Text
                  variant='H1'
                  color={tokens.colors.primary[500]}
                  style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    lineHeight: '34px',
                    letterSpacing: '-0.36px',
                  }}
                >
                  {getStepTitle()}
                </Text>
                <Text
                  variant='B1'
                  color={tokens.colors.neutral[900]}
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  {getStepDescription()}
                </Text>
              </Flexbox>
            </Flexbox>

            {/* Content Section */}
            {renderStepContent()}
          </Flexbox>

          {/* Bottom Section */}
          {currentStep === 'email' && (
            <div style={{ marginTop: '40px' }}>
              <SecondaryAction
                primaryText='이미 계정이 있으신가요?'
                actionText='로그인하기'
                onActionClick={handleSignIn}
              />
            </div>
          )}
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

export default SignUpContent;
