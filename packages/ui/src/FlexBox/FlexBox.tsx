import styled from '@emotion/styled';
import type React from 'react';

interface FlexBoxProps extends React.HTMLAttributes<HTMLDivElement> {
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

export const FlexBox = ({
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  width,
  height,
  grow,
  basis,
  inline,
  children,
  className,
  ...restProps
}: FlexBoxProps) => {
  return (
    <StyledFlexBox
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      width={width}
      height={height}
      grow={grow}
      basis={basis}
      inline={inline}
      className={className}
      {...restProps}
    >
      {children}
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled('div', { shouldForwardProp })<FlexBoxProps>`
  display: flex;
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
