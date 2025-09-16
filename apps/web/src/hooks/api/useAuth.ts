'use client';

import { tokenResponseSchema } from '@/schemas/auth';
import { authStorage } from '@/utils/authStorage';
import { userApi } from '@horizon/api';
import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  RegisterRequest,
  UserInfoResponse,
} from '@horizon/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => userApi.login(data),
    onSuccess: (response: LoginResponse) => {
      // Zod로 토큰 응답 검증
      const tokens = tokenResponseSchema.parse(response.data);

      // 토큰 저장
      authStorage.setTokens(tokens.accessToken, tokens.refreshToken);

      // 프로필 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => userApi.register(data),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const accessToken = authStorage.getAccessToken();
      if (!accessToken) return; // 멱등적 처리

      try {
        await userApi.logout(accessToken);
      } finally {
        // 네트워크 실패여도 로컬 정리는 보장
      }
    },
    onSettled: () => {
      // 토큰 제거
      authStorage.clearTokens();
      // 사용자 관련 쿼리만 정리
      queryClient.removeQueries({ queryKey: ['user'] });
    },
  });
};

export const useUserProfile = () => {
  return useQuery<UserInfoResponse>({
    queryKey: ['user', 'profile'],
    queryFn: () => userApi.getProfile(authStorage.getAccessToken()!),
    enabled: authStorage.hasAccessToken(),
  });
};

export const useRefreshToken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      const refreshToken = authStorage.getRefreshToken();
      if (!refreshToken) throw new Error('No refresh token');
      return userApi.refresh(refreshToken);
    },
    onSuccess: (response: RefreshTokenResponse) => {
      // Zod로 토큰 응답 검증
      const tokens = tokenResponseSchema.parse(response.data);

      // 토큰 저장
      authStorage.setTokens(tokens.accessToken, tokens.refreshToken);

      // 실패했던 민감 쿼리 재시도
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
  });
};
