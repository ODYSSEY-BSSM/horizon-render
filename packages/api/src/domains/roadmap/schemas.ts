import { z } from 'zod';

// User API에서 가져온 공통 응답 스키마
import { ApiResponseSchema } from '../user/schemas';

// 로드맵 정보 스키마
export const RoadmapSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  directoryId: z.number(),
  thumbnailUrl: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// 로드맵 생성 요청 스키마 (JSON 부분)
export const CreateRoadmapRequestSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  description: z.string().min(1, '설명은 필수입니다'),
  categories: z.array(z.string()).min(1, '카테고리는 최소 1개 이상 필요합니다'),
  directoryId: z.number().min(1, '디렉토리 ID는 필수입니다'),
});

// 로드맵 수정 요청 스키마
export const UpdateRoadmapRequestSchema = z.object({
  title: z.string().min(1, '제목은 필수입니다'),
  description: z.string().min(1, '설명은 필수입니다'),
  categories: z.array(z.string()).min(1, '카테고리는 최소 1개 이상 필요합니다'),
  directoryId: z.number().min(1, '디렉토리 ID는 필수입니다'),
});

// 로드맵 개수 스키마
export const RoadmapCountSchema = z.object({
  count: z.number(),
});

// 응답 스키마들
export const CreateRoadmapResponseSchema = ApiResponseSchema(RoadmapSchema);
export const GetRoadmapsResponseSchema = ApiResponseSchema(z.array(RoadmapSchema));
export const GetRoadmapResponseSchema = ApiResponseSchema(RoadmapSchema);
export const UpdateRoadmapResponseSchema = ApiResponseSchema(RoadmapSchema);
export const DeleteRoadmapResponseSchema = ApiResponseSchema(z.null());
export const FavoriteRoadmapResponseSchema = ApiResponseSchema(z.null());
export const LastAccessedRoadmapResponseSchema = ApiResponseSchema(RoadmapSchema);
export const RoadmapCountResponseSchema = ApiResponseSchema(RoadmapCountSchema);
