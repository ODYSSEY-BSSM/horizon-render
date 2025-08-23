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
  'caption',
  'blockquote',
] as const;

export type AllowedHTMLElement = (typeof ALLOWED_HTML_ELEMENTS)[number];
