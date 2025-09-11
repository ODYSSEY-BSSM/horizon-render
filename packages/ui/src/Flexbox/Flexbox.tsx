import styled from '@emotion/styled';
import { toPx } from '@horizon/utils';
import type React from 'react';

interface FlexboxProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  wrap?: React.CSSProperties['flexWrap'];
  gap?: string | number;
  width?: string | number;
  height?: string | number;
  grow?: number;
  shrink?: number;
  basis?: React.CSSProperties['flexBasis'];
  inline?: boolean;
  children: React.ReactNode;
  className?: string;
}

const shouldForwardProp = (prop: string) =>
  [
    'direction',
    'justify',
    'align',
    'wrap',
    'gap',
    'width',
    'height',
    'grow',
    'shrink',
    'basis',
    'inline',
  ].indexOf(prop) === -1;

const Flexbox = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  width,
  height,
  grow,
  shrink,
  basis,
  inline = false,
  children,
  className,
  ...restProps
}: FlexboxProps) => {
  return (
    <StyledFlexbox
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={toPx(gap)}
      width={toPx(width)}
      height={toPx(height)}
      grow={grow}
      shrink={shrink}
      basis={toPx(basis)}
      inline={inline}
      className={className}
      {...restProps}
    >
      {children}
    </StyledFlexbox>
  );
};

const StyledFlexbox = styled('div', { shouldForwardProp })<FlexboxProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};
`;

export default Flexbox;
