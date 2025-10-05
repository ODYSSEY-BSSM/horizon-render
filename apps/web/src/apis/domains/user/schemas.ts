import { z } from 'zod';
import { ApiResponseSchema } from '../../shared/schemas';

// 팀 정보 스키마
export const TeamSchema = z.object({
  id: z.number(),
  name: z.string(),
});

// 사용자 정보 스키마
export const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  role: z.string(),
  teams: z.array(TeamSchema),
});

// 토큰 정보 스키마
export const AuthTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

// 요청 스키마들
export const RegisterRequestSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  username: z.string().min(1, '사용자명은 필수입니다'),
  password: z.string().min(1, '비밀번호는 필수입니다'),
});

export const LoginRequestSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(1, '비밀번호는 필수입니다'),
});

// 응답 스키마들
export const RegisterResponseSchema = ApiResponseSchema(UserSchema);
export const LoginResponseSchema = ApiResponseSchema(AuthTokensSchema);
export const UserInfoResponseSchema = ApiResponseSchema(UserSchema);
export const RefreshTokenResponseSchema = ApiResponseSchema(AuthTokensSchema);
