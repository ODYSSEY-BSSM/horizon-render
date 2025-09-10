import { Icon } from '@/Icon';
import { Text } from '@/Text';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import type React from 'react';
import { forwardRef } from 'react';
import { StyledAffixLeft, StyledAffixRight, StyledAffixRightButton, StyledHelper } from './styles';
import { useTextFieldState } from './useTextFieldState';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'width'> {
  id?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  width?: string | number;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id,
    helperId,
    value,
    isFilled,
    showPassword,
    hasToggle,
    hasLeft,
    hasRight,
    resolvedType,
    leftIconResolved,
    borderColor,
    affixColor,
    onChange,
    onFocus,
    onBlur,
    togglePassword,
  } = useTextFieldState(props);

  const {
    label,
    helperText,
    error = false,
    rightIcon,
    width,
    containerClassName,
    labelClassName,
    helperClassName,
    ...restProps
  } = props;

  return (
    <StyledContainer className={containerClassName}>
      {label && (
        <Text as='label' variant='B1' color={borderColor} htmlFor={id} className={labelClassName}>
          {label}
        </Text>
      )}
      <StyledInputWrapper width={width}>
        {hasLeft && leftIconResolved && (
          <StyledAffixLeft aria-hidden>
            <Icon name={leftIconResolved} variant='SM' color={affixColor} />
          </StyledAffixLeft>
        )}
        <StyledInput
          {...restProps}
          id={id}
          ref={ref}
          type={resolvedType}
          hasError={error}
          filled={isFilled}
          hasLeft={hasLeft}
          hasRight={hasRight}
          hasToggle={hasToggle}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={error || undefined}
          aria-describedby={helperText ? helperId : undefined}
          value={value}
        />
        {hasToggle ? (
          <StyledAffixRightButton
            type='button'
            onClick={togglePassword}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 표시'}
          >
            <Icon
              name={showPassword ? 'visibility' : 'visibility_off'}
              variant='SM'
              color={isFilled ? 'black' : tokens.colors.neutral[400]}
            />
          </StyledAffixRightButton>
        ) : (
          props.rightIcon && (
            <StyledAffixRight aria-hidden>
              <Icon
                name={props.rightIcon}
                variant='SM'
                color={isFilled ? 'black' : tokens.colors.neutral[400]}
              />
            </StyledAffixRight>
          )
        )}
      </StyledInputWrapper>
      {helperText && (
        <StyledHelper id={helperId} className={helperClassName}>
          <Text variant='B1' color={borderColor}>
            {helperText}
          </Text>
        </StyledHelper>
      )}
    </StyledContainer>
  );
});

TextField.displayName = 'TextField';

interface StyledInputWrapperProps {
  width?: string | number;
}

interface StyledInputProps {
  hasError: boolean;
  filled: boolean;
  hasLeft: boolean;
  hasRight: boolean;
  hasToggle: boolean;
}

const blockedProps = new Set(['hasError', 'filled', 'hasLeft', 'hasRight', 'hasToggle']);
const shouldForwardProp = (prop: string): boolean => {
  return !blockedProps.has(prop);
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : (width ?? '100%'))};
`;

const StyledInput = styled('input', { shouldForwardProp })<StyledInputProps>`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  border-radius: ${tokens.rounding.object};
  border: ${tokens.stroke.weight} solid transparent;
  box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.neutral[300]};
  background-color: white;
  padding: 10px 12px;
  font-size: ${tokens.fontSize[16]};
  font-weight: ${tokens.fontWeight.regular};
  line-height: ${tokens.lineHeight[24]};
  font-family: ${tokens.fontFamily.suit.join(', ')};
  color: black;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${tokens.colors.neutral[400]};
    font-size: ${tokens.fontSize[16]};
    font-weight: ${tokens.fontWeight.regular};
    line-height: ${tokens.lineHeight[24]};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 calc(${tokens.stroke.weight} * 2) ${tokens.colors.primary[500]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ hasLeft }) =>
    hasLeft && {
      paddingLeft: `calc(${tokens.icon.size[24]} + ${tokens.spacing[12]})`,
    }}

  ${({ hasRight }) =>
    hasRight && {
      paddingRight: `calc(${tokens.icon.size[24]} + ${tokens.spacing[12]})`,
    }}

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: inset 0 0 0 ${tokens.stroke.weight} ${tokens.colors.warning[200]};
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
`;
