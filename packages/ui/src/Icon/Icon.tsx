import type React from 'react';
import type { IconProps } from './Icon.types';
import { StyledIcon } from './styles';

const Icon = ({
  name,
  variant = 'MD',
  filled = false,
  size,
  color,
  as,
  decorative = false,
  ...restProps
}: IconProps) => {
  return (
    <StyledIcon
      as={as}
      {...{ variant, filled, size, color }}
      aria-hidden={decorative}
      {...restProps}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
