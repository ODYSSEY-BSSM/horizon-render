const BASE_URL = '/api';

export async function fetchApi<T>(
  url: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    data?: unknown;
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
  } = {},
): Promise<T> {
  const { method = 'GET', data, headers = {}, params } = options;

  const fullUrl = new URL(url, BASE_URL);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        fullUrl.searchParams.append(key, String(value));
      }
    }
  }

  const config: RequestInit = {
    method,
    headers: {
      ...(!(data instanceof FormData) && { 'Content-Type': 'application/json' }),
      ...headers,
    },
  };

  if (data) {
    config.body = data instanceof FormData ? data : JSON.stringify(data);
  }

  const response = await fetch(fullUrl.toString(), config);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
