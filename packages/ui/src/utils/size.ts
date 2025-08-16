export const getSizeValue = (size?: number | string): string | undefined => {
  if (!size) return undefined;
  return typeof size === 'number' ? `${size}px` : size;
};
