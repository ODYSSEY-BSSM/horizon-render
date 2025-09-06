import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
  UserInfoResponse,
} from './types';

const BASE_URL = '/api';

async function fetchApi<T>(
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    data?: unknown;
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
  } = {},
): Promise<T> {
  const { method = 'GET', data, headers = {}, params } = options;

  const fullUrl = new URL(url, BASE_URL);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        fullUrl.searchParams.append(key, String(value));
      }
    }
  }

  const config: RequestInit = {
    method,
    headers: {
      ...(!(data instanceof FormData) && { 'Content-Type': 'application/json' }),
      ...headers,
    },
  };

  if (data) {
    config.body = data instanceof FormData ? data : JSON.stringify(data);
  }

  const response = await fetch(fullUrl.toString(), config);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export const userApi = {
  // 회원가입 (POST /users)
  register: (data: RegisterRequest): Promise<RegisterResponse> =>
    fetchApi('/users', { method: 'POST', data }),

  // 로그인 (POST /users/login)
  login: (data: LoginRequest): Promise<LoginResponse> =>
    fetchApi('/users/login', { method: 'POST', data }),

  // 토큰 갱신 (GET /users/refresh)
  refresh: (refreshToken: string): Promise<RefreshTokenResponse> =>
    fetchApi('/users/refresh', {
      method: 'GET',
      headers: { 'Refresh-Token': refreshToken },
    }),

  // 사용자 정보 조회 (GET /users/info)
  getProfile: (accessToken: string): Promise<UserInfoResponse> =>
    fetchApi('/users/info', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    }),

  // 로그아웃 (GET /users/logout)
  logout: (accessToken: string): Promise<void> =>
    fetchApi('/users/logout', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    }),
};
