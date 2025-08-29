import { css } from '@emotion/react';
import { tokens } from '@horizon/tokens';

export type TextVariant = 'H1' | 'H2' | 'H3' | 'ST' | 'B1' | 'B2' | 'C' | 'O';
export type IconVariant = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

export const textVariantStyles: Record<TextVariant, ReturnType<typeof css>> = {
  H1: css({
    fontSize: tokens.fontSize[32],
    fontWeight: tokens.fontWeight.heavy,
    lineHeight: tokens.lineHeight[44],
    letterSpacing: tokens.letterSpacing['-2'],
  }),
  H2: css({
    fontSize: tokens.fontSize[24],
    fontWeight: tokens.fontWeight.extrabold,
    lineHeight: tokens.lineHeight[34],
    letterSpacing: tokens.letterSpacing['-1.5'],
  }),
  H3: css({
    fontSize: tokens.fontSize[20],
    fontWeight: tokens.fontWeight.bold,
    lineHeight: tokens.lineHeight[28],
    letterSpacing: tokens.letterSpacing['-1'],
  }),
  ST: css({
    fontSize: tokens.fontSize[18],
    fontWeight: tokens.fontWeight.semibold,
    lineHeight: tokens.lineHeight[26],
    letterSpacing: tokens.letterSpacing[0],
  }),
  B1: css({
    fontSize: tokens.fontSize[16],
    fontWeight: tokens.fontWeight.regular,
    lineHeight: tokens.lineHeight[24],
    letterSpacing: tokens.letterSpacing[0],
  }),
  B2: css({
    fontSize: tokens.fontSize[14],
    fontWeight: tokens.fontWeight.light,
    lineHeight: tokens.lineHeight[22],
    letterSpacing: tokens.letterSpacing[0],
  }),
  C: css({
    fontSize: tokens.fontSize[12],
    fontWeight: tokens.fontWeight.extralight,
    lineHeight: tokens.lineHeight[18],
    letterSpacing: tokens.letterSpacing[1],
  }),
  O: css({
    fontSize: tokens.fontSize[11],
    fontWeight: tokens.fontWeight.medium,
    lineHeight: tokens.lineHeight[16],
    letterSpacing: tokens.letterSpacing[5],
  }),
};

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
