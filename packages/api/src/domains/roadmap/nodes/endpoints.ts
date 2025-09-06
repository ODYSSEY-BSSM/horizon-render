import { fetchApi } from '../../../shared/utils/fetchApi';
import type {
  CreateNodeRequest,
  CreateNodeResponse,
  DeleteNodeResponse,
  GetNodeResponse,
  GetNodesResponse,
  UpdateNodeRequest,
  UpdateNodeResponse,
} from './types';

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
