import type {
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  DeleteDirectoryResponse,
  GetRootContentsResponse,
  UpdateDirectoryRequest,
  UpdateDirectoryResponse,
} from './types';

const BASE_URL = '/api';

async function fetchApi<T>(
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

export const directoryApi = {
  // 디렉토리 생성 (POST /directories/create)
  create: (data: CreateDirectoryRequest): Promise<CreateDirectoryResponse> =>
    fetchApi('/directories/create', { method: 'POST', data }),

  // 디렉토리 수정 (PUT /directories/{id})
  update: (id: number, data: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> =>
    fetchApi(`/directories/${id}`, { method: 'PUT', data }),

  // 디렉토리 삭제 (DELETE /directories/{id})
  delete: (id: number): Promise<DeleteDirectoryResponse> =>
    fetchApi(`/directories/${id}`, { method: 'DELETE' }),

  // 루트 컨텐츠 조회 (GET /directories/root-contents)
  getRootContents: (): Promise<GetRootContentsResponse> =>
    fetchApi('/directories/root-contents', { method: 'GET' }),
};
