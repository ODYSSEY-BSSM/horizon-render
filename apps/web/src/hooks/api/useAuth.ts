import { safeStorage } from '@/utils/storage';
import { userApi } from '@horizon/api';
import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  RegisterRequest,
} from '@horizon/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => userApi.login(data),
    onSuccess: (response: LoginResponse) => {
      // 토큰을 localStorage에 저장
      safeStorage.set('accessToken', response.data.accessToken);
      safeStorage.set('refreshToken', response.data.refreshToken);
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
      const accessToken = safeStorage.get('accessToken');
      if (!accessToken) return; // 멱등적 처리

      try {
        await userApi.logout(accessToken);
      } finally {
        // 네트워크 실패여도 로컬 정리는 보장
      }
    },
    onSettled: () => {
      // 토큰 제거
      safeStorage.remove('accessToken');
      safeStorage.remove('refreshToken');
      // 사용자 관련 쿼리만 정리
      queryClient.removeQueries({ queryKey: ['user'] });
    },
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => {
      const accessToken = safeStorage.get('accessToken');
      if (!accessToken) throw new Error('No access token');
      return userApi.getProfile(accessToken);
    },
    enabled: !!safeStorage.get('accessToken'),
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => {
      const refreshToken = safeStorage.get('refreshToken');
      if (!refreshToken) throw new Error('No refresh token');
      return userApi.refresh(refreshToken);
    },
    onSuccess: (response: RefreshTokenResponse) => {
      safeStorage.set('accessToken', response.data.accessToken);
      if (response.data.refreshToken) {
        safeStorage.set('refreshToken', response.data.refreshToken);
      }
    },
  });
};
