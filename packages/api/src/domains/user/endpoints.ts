import { fetchApi } from '../../shared/utils/fetchApi';
import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
  UserInfoResponse,
} from './types';

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
