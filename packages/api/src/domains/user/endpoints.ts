import { api } from '../../shared/utils/api';
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
    api.post('users', { json: data }).json<RegisterResponse>(),

  // 로그인 (POST /users/login)
  login: (data: LoginRequest): Promise<LoginResponse> =>
    api.post('users/login', { json: data }).json<LoginResponse>(),

  // 토큰 갱신 (GET /users/refresh)
  refresh: (refreshToken: string): Promise<RefreshTokenResponse> =>
    api
      .get('users/refresh', {
        headers: { 'Refresh-Token': refreshToken },
      })
      .json<RefreshTokenResponse>(),

  // 사용자 정보 조회 (GET /users/info)
  getProfile: (accessToken: string): Promise<UserInfoResponse> =>
    api
      .get('users/info', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .json<UserInfoResponse>(),

  // 로그아웃 (GET /users/logout)
  logout: (accessToken: string): Promise<void> =>
    api
      .get('users/logout', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .text()
      .then(() => undefined),
};
