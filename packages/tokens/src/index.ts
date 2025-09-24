import { colors } from './colors';
import { gradients } from './gradients';
import { icons } from './icons';
import { shadows } from './shadows';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from './typography';

export const tokens = {
  colors,
  gradients,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  icons,
  shadows,
} as const;
