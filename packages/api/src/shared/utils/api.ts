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
      (error) => {
        const { response } = error;
        if (response?.body) {
          error.name = 'APIError';
          error.message = `${response.status} ${response.statusText}`;
        }
        return error;
      },
    ],
  },
});
