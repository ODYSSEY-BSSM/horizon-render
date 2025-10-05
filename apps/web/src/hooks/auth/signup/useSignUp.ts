'use client';

import { userApi } from '@/apis/index';
import type { RegisterRequest } from '@/apis/index';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => userApi.register(data),
  });
};
