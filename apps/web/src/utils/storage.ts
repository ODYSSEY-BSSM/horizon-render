export const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

/**
 * FIXME: 액세스/리프레시 토큰을 localStorage에 저장하는 것은 XSS 공격에 취약함
 * HttpOnly+Secure+SameSite 쿠키 기반 인증으로 마이그레이션 필요 (백엔드 API 변경 포함)
 */
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
