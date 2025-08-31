import { Icon } from '@/Icon';
import { Text } from '@/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { forwardRef, useCallback, useId, useMemo, useState } from 'react';

interface TextFieldStyleProps {
  hasError: boolean;
  hasIcon: boolean;
  filled: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 400px;
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

const StyledInput = styled.input<TextFieldStyleProps>`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid;
  background-color: white;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: ${tokens.fontWeight.light};
  line-height: 22px;
  font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  color: black;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${tokens.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Icon padding */
  ${({ hasIcon }) =>
    hasIcon &&
    css`
    padding-left: 44px;
  `}

  /* Border colors based on state */
  ${({ hasError, filled }) => {
    if (hasError) {
      return css`
        border-color: ${tokens.colors.warning[200]};
        
        &:focus {
          border-color: ${tokens.colors.warning[200]};
        }
      `;
    }

    if (filled) {
      return css`
        border-color: ${tokens.colors.primary[500]};
        
        &:focus {
          border-color: ${tokens.colors.primary[500]};
        }
      `;
    }

    return css`
      border-color: ${tokens.colors.neutral[300]};
      
      &:focus {
        border-color: ${tokens.colors.primary[500]};
      }
    `;
  }}
`;

const StyledErrorMessage = styled.div`
  margin-top: 3px;
`;

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  icon?: string;
  error?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, icon, error = false, errorMessage, containerClassName, labelClassName, ...props },
    ref
  ) => {
    const inputId = useId();
    const [internalValue, setInternalValue] = useState(props.defaultValue || '');

    const hasIcon = useMemo(() => !!icon, [icon]);
    const currentValue = props.value !== undefined ? props.value : internalValue;
    const filled = useMemo(() => !!currentValue, [currentValue]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.value === undefined) {
          setInternalValue(e.target.value);
        }
        props.onChange?.(e);
      },
      [props.value, props.onChange]
    );

    return (
      <StyledContainer className={containerClassName}>
        {label && (
          <Text
            as='label'
            variant='O'
            color='neutral.400'
            htmlFor={inputId}
            className={labelClassName}
          >
            {label}
          </Text>
        )}
        <StyledInputWrapper>
          {hasIcon && icon && (
            <StyledIconWrapper>
              <Icon name={icon} variant='SM' color='neutral.400' />
            </StyledIconWrapper>
          )}
          <StyledInput
            id={inputId}
            ref={ref}
            hasError={error}
            hasIcon={hasIcon}
            filled={filled}
            onChange={handleChange}
            {...props}
          />
        </StyledInputWrapper>
        {error && errorMessage && (
          <StyledErrorMessage>
            <Text variant='C' color='warning.200' textAlign='center'>
              {errorMessage}
            </Text>
          </StyledErrorMessage>
        )}
      </StyledContainer>
    );
  }
);

TextField.displayName = 'TextField';
