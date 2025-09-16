export const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export const safeStorage = {
  get(key: string): string | null {
    if (!isBrowser) return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    if (!isBrowser) return;
    try {
      localStorage.setItem(key, value);
    } catch {
      /* noop */
    }
  },
  remove(key: string): void {
    if (!isBrowser) return;
    try {
      localStorage.removeItem(key);
    } catch {
      /* noop */
    }
  },
};
