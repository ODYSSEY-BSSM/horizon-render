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
      const tokens = tokenResponseSchema.parse(response.data);
      authStorage.setTokens(tokens.accessToken, tokens.refreshToken);
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
      if (!accessToken) return;
      await userApi.logout(accessToken);
    },
    onSettled: () => {
      authStorage.clearTokens();
      queryClient.removeQueries({ queryKey: ['user'] });
    },
  });
};

export const useUserProfile = () => {
  return useQuery<UserInfoResponse>({
    queryKey: ['user', 'profile'],
    queryFn: () => {
      const token = authStorage.getAccessToken();
      if (!token) throw new Error('No access token');
      return userApi.getProfile(token);
    },
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
      const tokens = tokenResponseSchema.parse(response.data);
      authStorage.setTokens(tokens.accessToken, tokens.refreshToken);
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
  });
};
