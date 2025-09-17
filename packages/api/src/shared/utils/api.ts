import ky, { type KyInstance } from 'ky';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://develop-horizon.nananu.net';

export const api: KyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  credentials: 'include',
  timeout: 10000,
  retry: {
    limit: 2,
    methods: ['get'],
  },
  hooks: {
    beforeError: [
      async (error) => {
        const { response } = error;
        if (response?.body) {
          error.name = 'APIError';
          try {
            const data = await response.clone().json();
            if (data && typeof data.message === 'string' && data.message.trim() !== '') {
              error.message = data.message;
            } else {
              error.message = `${response.status} ${response.statusText}`;
            }
          } catch {
            error.message = `${response.status} ${response.statusText}`;
          }
        }
        return error;
      },
    ],
  },
});
