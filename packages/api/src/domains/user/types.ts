// 명세서 기반으로 정확한 타입 정의

// 기본 응답 구조 (명세서에서 확인된 구조)
export interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}

// 사용자 정보 (GET /users/info 응답)
export interface User {
  username: string;
  email: string;
  role: string;
  teams: Team[];
}

// 팀 정보 (User의 teams 필드)
export interface Team {
  id: number;
  name: string;
  // 추후 Team API 명세서 보고 추가
}

// 토큰 정보 (POST /users/login 응답의 data 부분)
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

// 회원가입 요청 (POST /users)
export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

// 로그인 요청 (POST /users/login)
export interface LoginRequest {
  email: string;
  password: string;
}

// 응답 타입들
export type RegisterResponse = ApiResponse<User>;
export type LoginResponse = ApiResponse<AuthTokens>;
export type UserInfoResponse = ApiResponse<User>;
export type RefreshTokenResponse = ApiResponse<AuthTokens>;
