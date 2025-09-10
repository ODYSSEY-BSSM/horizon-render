import { Icon } from '@/Icon';
import { Text } from '@/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { forwardRef, useCallback, useId, useState } from 'react';

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'width'> {
  id?: string;
  value?: string | number;
  defaultValue?: string | number;
  label?: string;
  icon?: string;
  error?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
  width?: string | number;
}

const shouldForwardProp = (prop: string) =>
  ['hasError', 'hasIcon', 'filled', 'hasVisibilityToggle'].indexOf(prop) === -1;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      value,
      defaultValue,
      onChange,
      label,
      icon,
      error = false,
      errorMessage,
      containerClassName,
      labelClassName,
      width,
      ...restProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const resolvedId = id ?? generatedId;
    const errorId = `${resolvedId}-error`;
    const [internalValue, setInternalValue] = useState(String(defaultValue ?? ''));
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = (restProps.type ?? 'text') === 'password';
    const hasIcon = !!icon || isPasswordType;
    const currentValue = value !== undefined ? value : internalValue;
    const isFilled = !!String(currentValue).trim();

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [value, onChange],
    );

    const togglePasswordVisibility = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    const renderIcon = () => {
      if (!hasIcon) return null;

      return (
        <StyledIconWrapper aria-hidden>
          <Icon
            name={icon ?? 'lock'}
            variant='SM'
            color={isFilled ? 'black' : tokens.colors.neutral[400]}
          />
        </StyledIconWrapper>
      );
    };

    const renderVisibilityToggle = () => {
      if (!isPasswordType) return null;
      return (
        <StyledVisibilityToggle
          type='button'
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'}
        >
          <Icon
            name={showPassword ? 'visibility' : 'visibility_off'}
            variant='SM'
            color={tokens.colors.neutral[400]}
          />
        </StyledVisibilityToggle>
      );
    };

    const renderErrorMessage = () => {
      if (!error || !errorMessage) return null;

      return (
        <StyledErrorMessage id={errorId} aria-live='polite'>
          <Text variant='C' color={tokens.colors.warning[200]} textAlign='center'>
            {errorMessage}
          </Text>
        </StyledErrorMessage>
      );
    };

    return (
      <StyledContainer className={containerClassName}>
        {label && (
          <Text
            as='label'
            variant='O'
            color={isFilled ? 'black' : tokens.colors.neutral[400]}
            htmlFor={resolvedId}
            className={labelClassName}
          >
            {label}
          </Text>
        )}
        <StyledInputWrapper width={width}>
          {renderIcon()}
          <StyledInput
            {...restProps}
            id={resolvedId}
            ref={ref}
            type={isPasswordType ? (showPassword ? 'text' : 'password') : restProps.type}
            hasError={error}
            hasIcon={hasIcon}
            filled={isFilled}
            hasVisibilityToggle={isPasswordType}
            onChange={handleChange}
            aria-invalid={error || undefined}
            aria-describedby={error && errorMessage ? errorId : undefined}
            value={currentValue}
          />
          {renderVisibilityToggle()}
        </StyledInputWrapper>
        {renderErrorMessage()}
      </StyledContainer>
    );
  },
);

TextField.displayName = 'TextField';

interface StyledInputWrapperProps {
  width?: string | number;
}

interface StyledInputProps {
  hasError: boolean;
  hasIcon: boolean;
  filled: boolean;
  hasVisibilityToggle: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : (width ?? '100%'))};
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const StyledVisibilityToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: ${tokens.colors.neutral[100]};
  }

  &:focus {
    outline: none;
    background-color: ${tokens.colors.neutral[200]};
  }
`;

const StyledInput = styled('input', { shouldForwardProp })<StyledInputProps>`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  border-radius: ${tokens.rounding.object};
  border: ${tokens.stroke.weight} solid transparent;
  box-shadow: inset 0 0 0 ${tokens.stroke.weight};
  background-color: white;
  padding: 10px 12px;
  font-size: ${tokens.fontSize[14]};
  font-weight: ${tokens.fontWeight.light};
  line-height: ${tokens.lineHeight[22]};
  font-family: ${tokens.fontFamily.suit.join(', ')};
  color: black;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${tokens.colors.neutral[400]};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 36px;
    `}

  ${({ hasVisibilityToggle }) =>
    hasVisibilityToggle &&
    css`
      padding-right: 36px;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.warning[200]};
      
      &:focus {
        box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.warning[200]};
      }
    `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    filled &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.primary[500]};
      
      &:focus {
        box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
      }
    `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    !filled &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.neutral[300]};
      
      &:focus {
        box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
      }
    `}
`;

const StyledErrorMessage = styled.output`
  text-align: center;
`;
