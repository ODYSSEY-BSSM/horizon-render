export function toPx(value?: string | number): string | undefined {
  if (typeof value === 'number') return `${value}px`;
  return value;
}
