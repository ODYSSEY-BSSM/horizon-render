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
  // 회원가입 (POST /auth)
  register: (data: RegisterRequest): Promise<RegisterResponse> =>
    api.post('auth', { json: data }).json<RegisterResponse>(),

  // 로그인 (POST /auth/login)
  login: (data: LoginRequest): Promise<LoginResponse> =>
    api.post('auth/login', { json: data }).json<LoginResponse>(),

  // 토큰 갱신 (PUT /auth/token) - 삭제
  // refresh: (refreshToken: string): Promise<RefreshTokenResponse> =>
  //   api
  //     .put('auth/token', {
  //       headers: { 'Refresh-Token': refreshToken },
  //     })
  //     .json<RefreshTokenResponse>(),

  // 사용자 정보 조회 (GET /auth/info)
  getProfile: (): Promise<UserInfoResponse> => api.get('auth/info').json<UserInfoResponse>(),

  // 로그아웃 (DELETE /auth/logout)
  logout: (): Promise<void> =>
    api
      .delete('auth/logout')
      .text()
      .then(() => undefined),
};
