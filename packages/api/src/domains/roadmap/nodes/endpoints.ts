import { api } from '../../../shared/utils/api';
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
    api.post(`roadmap/${roadmapId}/nodes`, { json: data }).json<CreateNodeResponse>(),

  // 단일 노드 조회 (GET /roadmap/{roadmapId}/nodes/{nodeId})
  getById: (roadmapId: number, nodeId: number): Promise<GetNodeResponse> =>
    api.get(`roadmap/${roadmapId}/nodes/${nodeId}`).json<GetNodeResponse>(),

  // 로드맵의 모든 노드 조회 (GET /roadmap/{roadmapId}/nodes)
  getByRoadmapId: (roadmapId: number): Promise<GetNodesResponse> =>
    api.get(`roadmap/${roadmapId}/nodes`).json<GetNodesResponse>(),

  // 노드 수정 (PUT /roadmap/{roadmapId}/nodes/{nodeId})
  update: (
    roadmapId: number,
    nodeId: number,
    data: UpdateNodeRequest,
  ): Promise<UpdateNodeResponse> =>
    api.put(`roadmap/${roadmapId}/nodes/${nodeId}`, { json: data }).json<UpdateNodeResponse>(),

  // 노드 삭제 (DELETE /roadmap/{roadmapId}/nodes/{nodeId})
  delete: (roadmapId: number, nodeId: number): Promise<DeleteNodeResponse> =>
    api.delete(`roadmap/${roadmapId}/nodes/${nodeId}`).json<DeleteNodeResponse>(),
};
