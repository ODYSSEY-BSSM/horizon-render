import { colors } from './colors';

export const grid = {
  columns: 12,
  gutterWidth: '24px',
  margin: '8vw'
} as const;

export const stroke = {
  color: colors.neutral[300],
  weight: '1px'
} as const;

export const rounding = {
  object: '8px',
  section: '12px'
} as const;

refactor(#1): 아이콘 유틸리티 헬퍼 함수로 코드 중복 제거