import { Icon } from '@/Icon';
import { Text } from '@/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { forwardRef, useCallback, useId, useState } from 'react';

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'width'> {
  label?: string;
  icon?: string;
  error?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
  width?: string | number;
}

const shouldForwardProp = (prop: string) => ['hasError', 'hasIcon', 'filled'].indexOf(prop) === -1;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      icon,
      error = false,
      errorMessage,
      containerClassName,
      labelClassName,
      width,
      ...restProps
    },
    ref
  ) => {
    const resolvedId = (restProps.id as string | undefined) ?? useId();
    const errorId = `${resolvedId}-error`;
    const [internalValue, setInternalValue] = useState(restProps.defaultValue ?? '');

    const hasIcon = !!icon;
    const currentValue = restProps.value !== undefined ? restProps.value : internalValue;
    const isFilled = !!String(currentValue).trim();

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (restProps.value === undefined) {
          setInternalValue(e.target.value);
        }
        restProps.onChange?.(e);
      },
      [restProps.value, restProps.onChange]
    );

    const renderIcon = () => {
      if (!hasIcon || !icon) return null;

      return (
        <StyledIconWrapper aria-hidden>
          <Icon name={icon} variant='SM' color={isFilled ? 'black' : tokens.colors.neutral[400]} />
        </StyledIconWrapper>
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
            hasError={error}
            hasIcon={hasIcon}
            filled={isFilled}
            onChange={handleChange}
            aria-invalid={error || undefined}
            aria-describedby={error && errorMessage ? errorId : undefined}
          />
        </StyledInputWrapper>
        {renderErrorMessage()}
      </StyledContainer>
    );
  }
);

TextField.displayName = 'TextField';

interface StyledInputWrapperProps {
  width?: string | number;
}

interface StyledInputProps {
  hasError: boolean;
  hasIcon: boolean;
  filled: boolean;
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
    opacity: 0.5;
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 36px;
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.warning[200]};
      
      &:focus {
        box-shadow: inset 0 0 0 2px ${tokens.colors.warning[200]};
      }
    `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    filled &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.primary[500]};
      
      &:focus {
        box-shadow: inset 0 0 0 2px ${tokens.colors.primary[500]};
      }
    `}
  
  ${({ filled, hasError }) =>
    !hasError &&
    !filled &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.neutral[300]};
      
      &:focus {
        box-shadow: inset 0 0 0 2px ${tokens.colors.primary[500]};
      }
    `}
`;

const StyledErrorMessage = styled.output`
  text-align: center;
`;
