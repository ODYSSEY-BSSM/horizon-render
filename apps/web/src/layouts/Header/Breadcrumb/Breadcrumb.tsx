'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import Link from 'next/link';
import type { BreadcrumbItem } from '../../types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <StyledBreadcrumb aria-label='breadcrumb'>
      <StyledList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <StyledBreadcrumbItem
              key={`${item.path ?? item.label}-${index}`}
              isLast={isLast}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast || !item.path ? (
                <Text
                  variant='ST'
                  color={isLast ? tokens.colors.neutral[700] : tokens.colors.neutral[500]}
                  as='span'
                >
                  {item.label}
                </Text>
              ) : (
                <Link href={item.path}>
                  <Text variant='ST' color={tokens.colors.neutral[500]} as='span'>
                    {item.label}
                  </Text>
                </Link>
              )}
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
      </StyledList>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledList = styled.ol`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledBreadcrumbItem = styled.li<{ isLast: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledSeparator = styled.div`
  color: ${tokens.colors.neutral[500]};
`;
