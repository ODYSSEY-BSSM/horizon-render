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
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
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
    mutationFn: () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('No access token');
      return userApi.logout(accessToken);
    },
    onSuccess: () => {
      // 토큰 제거
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // 모든 쿼리 초기화
      queryClient.clear();
    },
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) throw new Error('No access token');
      return userApi.getProfile(accessToken);
    },
    enabled: !!localStorage.getItem('accessToken'),
  });
};

export const useRefreshToken = () => {
  return useMutation({
    mutationFn: () => {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token');
      return userApi.refresh(refreshToken);
    },
    onSuccess: (response: RefreshTokenResponse) => {
      localStorage.setItem('accessToken', response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem('refreshToken', response.data.refreshToken);
      }
    },
  });
};
