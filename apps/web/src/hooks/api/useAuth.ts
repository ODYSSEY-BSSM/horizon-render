'use client';

import { userApi } from '@horizon/api';
import type { LoginRequest, LoginResponse, RegisterRequest, UserInfoResponse } from '@horizon/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => userApi.login(data),
    onSuccess: () => {
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
    mutationFn: userApi.logout,
    onSettled: () => {
      queryClient.removeQueries({ queryKey: ['user'] });
    },
  });
};

export const useUserProfile = () => {
  return useQuery<UserInfoResponse>({
    queryKey: ['user', 'profile'],
    queryFn: userApi.getProfile,
    retry: false,
  });
};
