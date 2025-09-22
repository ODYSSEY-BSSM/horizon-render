'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import type { BreadcrumbItem } from '../../../types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <StyledBreadcrumb>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <StyledBreadcrumbItem key={item.path || item.label} isLast={isLast}>
            <Text
              variant='ST'
              color={isLast ? tokens.colors.neutral[700] : tokens.colors.neutral[500]}
              as='span'
            >
              {item.label}
            </Text>
            {!isLast && (
              <StyledSeparator>
                <Text variant='ST' color={tokens.colors.neutral[500]} as='span'>
                  /
                </Text>
              </StyledSeparator>
            )}
          </StyledBreadcrumbItem>
        );
      })}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledBreadcrumbItem = styled.div<{ isLast: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledSeparator = styled.div`
  color: ${tokens.colors.neutral[500]};
`;
