import ky, { type KyInstance } from 'ky';

export const api: KyInstance = ky.create({
  prefixUrl: '/api',
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
