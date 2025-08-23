import type { TextVariant } from './components/Text/variants';

// Icon constants
export const ICON_CONSTANTS = {
  FILL: {
    FILLED: '1',
    OUTLINED: '0',
  },
} as const;

// Text constants
export const VARIANT_TO_SEMANTIC_ELEMENT: Record<TextVariant, string> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  ST: 'h4',
  B1: 'p',
  B2: 'p',
  C: 'span',
  O: 'span',
} as const;

export const ALLOWED_HTML_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'div',
  'label',
  'li',
  'blockquote',
  'caption',
  'legend',
  'figcaption',
  'dt',
  'dd',
  'small',
  'strong',
  'em',
  'button',
] as const;

export type AllowedHTMLElement = (typeof ALLOWED_HTML_ELEMENTS)[number];

// Divider constants
export const DIVIDER_CONSTANTS = {
  SPACING: {
    SM: '0.5rem', // 8px
    MD: '1rem', // 16px
    LG: '1.5rem', // 24px
    XL: '2rem', // 32px
  },
  CONTENT_SPACING: {
    HORIZONTAL: '1rem', // 16px (px-4)
    VERTICAL: '1rem', // 16px (py-4)
  },
} as const;

// Flexbox constants
export const FLEXBOX_CONSTANTS = {
  GAP: {
    XS: 'gap-1', // 4px
    SM: 'gap-2', // 8px
    MD: 'gap-4', // 16px
    LG: 'gap-6', // 24px
    XL: 'gap-8', // 32px
  },
} as const;
