import { Icon } from '@/Icon';
import { Text } from '@/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { forwardRef, useCallback, useId, useState } from 'react';

interface TextFieldStyleProps {
  hasError: boolean;
  hasIcon: boolean;
  filled: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.grid.gutterWidth};
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  left: ${tokens.grid.gutterWidth};
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
  border-radius: ${tokens.rounding.object};
  border: ${tokens.stroke.weight} solid;
  background-color: white;
  padding: 10px ${tokens.grid.gutterWidth};
  font-size: ${tokens.fontSize[14]};
  font-weight: ${tokens.fontWeight.light};
  line-height: ${tokens.lineHeight[22]};
  font-family: ${tokens.fontFamily.suit.join(', ')};
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

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 44px;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
    border-color: ${tokens.colors.warning[200]};
    
    &:focus {
      border-color: ${tokens.colors.warning[200]};
    }
  `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    filled &&
    css`
    border-color: ${tokens.colors.primary[500]};
    
    &:focus {
      border-color: ${tokens.colors.primary[500]};
    }
  `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    !filled &&
    css`
    border-color: ${tokens.colors.neutral[300]};
    
    &:focus {
      border-color: ${tokens.colors.primary[500]};
    }
  `}
`;

const StyledErrorMessage = styled.div`
  margin-top: 4px;
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
    const [internalValue, setInternalValue] = useState(props.defaultValue ?? '');

    const hasIcon = !!icon;
    const currentValue = props.value !== undefined ? props.value : internalValue;
    const filled = !!String(currentValue).trim();

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
            <Text variant='C' color='warning.200'>
              {errorMessage}
            </Text>
          </StyledErrorMessage>
        )}
      </StyledContainer>
    );
  }
);

TextField.displayName = 'TextField';
