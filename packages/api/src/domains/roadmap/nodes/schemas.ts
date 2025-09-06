import { z } from 'zod';

// User API에서 가져온 공통 응답 스키마
import { ApiResponseSchema } from '../../user/schemas';

// 노드 정보 스키마 (순환 참조 해결을 위해 lazy 사용)
type NodeType = {
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
  childNode: NodeType | null;
};

export const NodeSchema: z.ZodType<NodeType> = z.lazy(() =>
  z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    height: z.number(),
    width: z.number(),
    type: z.string(),
    x: z.number(),
    y: z.number(),
    category: z.string(),
    roadmapId: z.number(),
    parentNodeId: z.number().nullable(),
    childNode: NodeSchema.nullable(),
  }),
);

// 노드 생성 요청 스키마
export const CreateNodeRequestSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  description: z.string().min(1, '설명은 필수입니다'),
  height: z.number().min(1, '높이는 필수입니다'),
  width: z.number().min(1, '너비는 필수입니다'),
  type: z.string().min(1, '타입은 필수입니다'),
  x: z.number(),
  y: z.number(),
  category: z.string().min(1, '카테고리는 필수입니다'),
  parentNodeId: z.number().nullable(),
});

// 노드 수정 요청 스키마
export const UpdateNodeRequestSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  description: z.string().min(1, '설명은 필수입니다'),
  height: z.number().min(1, '높이는 필수입니다'),
  width: z.number().min(1, '너비는 필수입니다'),
  type: z.string().min(1, '타입은 필수입니다'),
  x: z.number(),
  y: z.number(),
  category: z.string().min(1, '카테고리는 필수입니다'),
  parentNodeId: z.number().nullable(),
});

// 응답 스키마들
export const CreateNodeResponseSchema = ApiResponseSchema(NodeSchema);
export const GetNodesResponseSchema = ApiResponseSchema(z.array(NodeSchema));
export const GetNodeResponseSchema = ApiResponseSchema(NodeSchema);
export const UpdateNodeResponseSchema = ApiResponseSchema(NodeSchema);
export const DeleteNodeResponseSchema = ApiResponseSchema(z.null());
