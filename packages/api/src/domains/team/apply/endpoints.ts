import type {
  AcceptApplicationResponse,
  ApplyToTeamResponse,
  RejectApplicationResponse,
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

export const teamApplyApi = {
  // 팀 신청 (POST /apply/{teamId})
  apply: (teamId: number): Promise<ApplyToTeamResponse> =>
    fetchApi(`/apply/${teamId}`, { method: 'POST' }),

  // 신청 수락 (PUT /apply/{applyId})
  accept: (applyId: number): Promise<AcceptApplicationResponse> =>
    fetchApi(`/apply/${applyId}`, { method: 'PUT' }),

  // 신청 거절 (PATCH /apply/{applyId})
  reject: (applyId: number): Promise<RejectApplicationResponse> =>
    fetchApi(`/apply/${applyId}`, { method: 'PATCH' }),
};
