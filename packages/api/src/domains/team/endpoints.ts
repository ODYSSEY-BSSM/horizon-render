import type {
  CreateTeamRequest,
  CreateTeamResponse,
  DeleteTeamResponse,
  GetTeamResponse,
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

export const teamApi = {
  // 팀 생성 (POST /teams)
  create: (data: CreateTeamRequest): Promise<CreateTeamResponse> =>
    fetchApi('/teams', { method: 'POST', data }),

  // 팀 정보 조회 (GET /teams/{id})
  getById: (id: number): Promise<GetTeamResponse> => fetchApi(`/teams/${id}`, { method: 'GET' }),

  // 팀 삭제 (DELETE /teams/{id})
  delete: (id: number): Promise<DeleteTeamResponse> =>
    fetchApi(`/teams/${id}`, { method: 'DELETE' }),
};
