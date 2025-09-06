import { css } from '@emotion/react';
import { tokens } from '@horizon/tokens';

export type IconVariant = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

export const iconVariantStyles: Record<IconVariant, ReturnType<typeof css>> = {
  XS: css({
    fontSize: '16px',
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight.light}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[20]}`,
  }),
  SM: css({
    fontSize: '20px',
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight.regular}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[24]}`,
  }),
  MD: css({
    fontSize: '24px',
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight.regular}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[24]}`,
  }),
  LG: css({
    fontSize: '32px',
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight.medium}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[40]}`,
  }),
  XL: css({
    fontSize: '40px',
    fontVariationSettings: `'FILL' 0, 'wght' ${tokens.fontWeight.semibold}, 'GRAD' ${tokens.icons.grade[0]}, 'opsz' ${tokens.icons.opticalSize[48]}`,
  }),
};
