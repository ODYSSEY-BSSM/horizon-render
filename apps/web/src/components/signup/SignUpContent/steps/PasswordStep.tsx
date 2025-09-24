import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text, TextField } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import type { PasswordStepProps } from '../types';

const PasswordStep = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  isLoading,
  errors,
}: PasswordStepProps) => {
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
        onClick={onSubmit}
        disabled={
          !password.trim() ||
          !confirmPassword.trim() ||
          !!errors.password ||
          !!errors.confirmPassword ||
          isLoading
        }
      >
        <Text variant='ST' color={tokens.colors.white}>
          {isLoading ? '설정 중...' : '완료'}
        </Text>
      </StyledSubmitButton>
    </>
  );
};

export default PasswordStep;

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
  margin-top: 62px;
  
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
