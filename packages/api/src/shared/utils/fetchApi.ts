import ky, { type KyInstance, type Options } from 'ky';

const api: KyInstance = ky.create({
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

export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

export async function fetchApi<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', data, headers = {}, params } = options;

  const kyOptions: Options = {
    method: method.toLowerCase() as Options['method'],
    headers,
    searchParams: params,
  };

  if (data) {
    if (data instanceof FormData) {
      kyOptions.body = data;
    } else {
      kyOptions.json = data;
    }
  }

  return api(url, kyOptions).json<T>();
}

export { api };
