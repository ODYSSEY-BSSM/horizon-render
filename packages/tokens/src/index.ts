import { colors } from './colors';
import { gradients } from './gradients';
import { icons } from './icons';
import { grid, rounding, stroke } from './layout';
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
  grid,
  stroke,
  rounding,
  shadows,
} as const;
