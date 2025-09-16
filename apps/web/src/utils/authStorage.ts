'use client';

import { safeStorage } from './storage';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const authStorage = {
  getAccessToken: (): string | null => {
    return safeStorage.get(ACCESS_TOKEN_KEY);
  },

  getRefreshToken: (): string | null => {
    return safeStorage.get(REFRESH_TOKEN_KEY);
  },

  setTokens: (accessToken: string, refreshToken?: string): void => {
    safeStorage.set(ACCESS_TOKEN_KEY, accessToken);
    if (refreshToken) {
      safeStorage.set(REFRESH_TOKEN_KEY, refreshToken);
    }
  },

  clearTokens: (): void => {
    safeStorage.remove(ACCESS_TOKEN_KEY);
    safeStorage.remove(REFRESH_TOKEN_KEY);
  },

  hasAccessToken: (): boolean => {
    return Boolean(safeStorage.get(ACCESS_TOKEN_KEY));
  },
};
