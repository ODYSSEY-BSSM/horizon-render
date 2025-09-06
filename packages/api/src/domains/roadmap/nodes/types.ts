import type { ApiResponse } from '../../user/types';

// 노드 정보
export interface Node {
  id: number;
  title: string;
  description: string;
  height: number;
  width: number;
  type: string;
  x: number;
  y: number;
  category: string;
  roadmapId: number;
  parentNodeId: number | null;
  childNode: Node | null;
}

// 노드 생성 요청
export interface CreateNodeRequest {
  title: string;
  description: string;
  height: number;
  width: number;
  type: string;
  x: number;
  y: number;
  category: string;
  parentNodeId: number | null;
}

// 노드 수정 요청
export interface UpdateNodeRequest {
  title: string;
  description: string;
  height: number;
  width: number;
  type: string;
  x: number;
  y: number;
  category: string;
  parentNodeId: number | null;
}

// 응답 타입들
export type CreateNodeResponse = ApiResponse<Node>;
export type GetNodesResponse = ApiResponse<Node[]>;
export type GetNodeResponse = ApiResponse<Node>;
export type UpdateNodeResponse = ApiResponse<Node>;
export type DeleteNodeResponse = ApiResponse<null>;
