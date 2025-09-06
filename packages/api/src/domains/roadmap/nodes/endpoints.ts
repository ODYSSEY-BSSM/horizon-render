import type {
  CreateNodeRequest,
  CreateNodeResponse,
  DeleteNodeResponse,
  GetNodeResponse,
  GetNodesResponse,
  UpdateNodeRequest,
  UpdateNodeResponse,
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

export const nodeApi = {
  // 노드 생성 (POST /roadmap/{roadmapId}/nodes)
  create: (roadmapId: number, data: CreateNodeRequest): Promise<CreateNodeResponse> =>
    fetchApi(`/roadmap/${roadmapId}/nodes`, { method: 'POST', data }),

  // 단일 노드 조회 (GET /roadmap/{roadmapId}/nodes/{nodeId})
  getById: (roadmapId: number, nodeId: number): Promise<GetNodeResponse> =>
    fetchApi(`/roadmap/${roadmapId}/nodes/${nodeId}`, { method: 'GET' }),

  // 로드맵의 모든 노드 조회 (GET /roadmap/{roadmapId}/nodes)
  getByRoadmapId: (roadmapId: number): Promise<GetNodesResponse> =>
    fetchApi(`/roadmap/${roadmapId}/nodes`, { method: 'GET' }),

  // 노드 수정 (PUT /roadmap/{roadmapId}/nodes/{nodeId})
  update: (
    roadmapId: number,
    nodeId: number,
    data: UpdateNodeRequest,
  ): Promise<UpdateNodeResponse> =>
    fetchApi(`/roadmap/${roadmapId}/nodes/${nodeId}`, { method: 'PUT', data }),

  // 노드 삭제 (DELETE /roadmap/{roadmapId}/nodes/{nodeId})
  delete: (roadmapId: number, nodeId: number): Promise<DeleteNodeResponse> =>
    fetchApi(`/roadmap/${roadmapId}/nodes/${nodeId}`, { method: 'DELETE' }),
};
