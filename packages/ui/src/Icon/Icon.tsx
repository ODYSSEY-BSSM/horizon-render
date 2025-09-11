import { forwardRef } from 'react';
import { StyledIcon } from './Icon.styles';
import type { IconProps } from './Icon.types';

const Icon = forwardRef<HTMLElement, IconProps>(function Icon(
  { name, variant = 'MD', filled = false, size, color, as, decorative = true, ...restProps },
  ref,
) {
  const ariaProps = decorative
    ? { 'aria-hidden': true }
    : {
        role: 'img',
        'aria-hidden': false,
        'aria-label': ('aria-label' in restProps ? restProps['aria-label'] : undefined) ?? name,
      };

  return (
    <StyledIcon
      as={as}
      ref={ref}
      {...{ variant, filled, size, color }}
      {...ariaProps}
      {...restProps}
    >
      {name}
    </StyledIcon>
  );
});

export default Icon;
