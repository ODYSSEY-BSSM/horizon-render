export const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

/**
 * FIXME: 액세스/리프레시 토큰을 localStorage에 저장하는 것은 XSS 공격에 취약함
 *
 * 현재 문제:
 * - JavaScript로 localStorage 접근 시 토큰 탈취 가능
 * - XSS 공격으로 인한 계정 탈취 위험
 *
 * 해결 방안:
 * 1. 백엔드: HttpOnly + Secure + SameSite 쿠키로 토큰 발급
 * 2. 프론트엔드: fetch 요청에 credentials: 'include' 설정
 * 3. API 변경: userApi.login() → Set-Cookie 응답, userApi.getProfile() → 토큰 파라미터 제거
 * 4. CORS: Access-Control-Allow-Credentials: true 설정
 *
 * 마이그레이션 순서:
 * - 백엔드 팀과 쿠키 인증 방식 협의
 * - 백엔드 API 쿠키 지원 추가 (/api/auth/login, /api/auth/logout 등)
 * - 프론트엔드 authStorage.ts → 쿠키 기반으로 변경
 * - 통합 테스트 및 XSS 방어 검증
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
