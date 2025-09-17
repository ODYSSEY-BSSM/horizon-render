import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import OtpInput from 'react-otp-input';

interface VerificationInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  email?: string;
}

const VerificationInput = ({ value, onChange, error }: VerificationInputProps) => {
  return (
    <Flexbox direction='column' gap='8px' width='100%'>
      <StyledOtpWrapper>
        <OtpInput
          value={value}
          onChange={onChange}
          numInputs={6}
          inputStyle={{
            width: '56px',
            height: '80px',
            fontSize: '40px',
            fontWeight: 'bold',
            border: `1px solid ${error ? tokens.colors.error[200] : tokens.colors.neutral[400]}`,
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: tokens.colors.white,
            transition: 'border-color 0.2s ease',
            letterSpacing: '-0.8px',
            lineHeight: '44px',
            color: tokens.colors.neutral[900],
          }}
          shouldAutoFocus
          renderInput={(props, index) => (
            <input
              {...props}
              style={{
                ...props.style,
                marginRight: index < 5 ? '12.8px' : '0',
              }}
            />
          )}
        />
      </StyledOtpWrapper>

      {error && (
        <Text variant='B2' color={tokens.colors.error[200]}>
          {error}
        </Text>
      )}
    </Flexbox>
  );
};

export default VerificationInput;

const StyledOtpWrapper = styled.div`
  display: flex;
  width: 400px;

  input:focus-visible {
    border-color: ${tokens.colors.primary[500]} !important;
    outline: 2px solid ${tokens.colors.primary[500]};
    outline-offset: 1px;
  }

  input:focus:not(:focus-visible) {
    outline: none;
  }
`;
