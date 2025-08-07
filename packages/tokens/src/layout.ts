import { colors } from './colors';

export const grid = {
  columns: 12,
  gutterWidth: '24px',
  margin: '120px'
} as const;

export const stroke = {
  color: colors.neutral[300],
  weight: '1px'
} as const;

export const rounding = {
  object: '8px',
  section: '12px'
} as const;