import { z } from 'zod';

// User API에서 가져온 공통 응답 스키마
import { ApiResponseSchema } from '../../shared/schemas';

// Directory 정보 스키마 (순환 참조 해결을 위해 lazy 사용)
type DirectoryType = {
  id: number;
  name: string;
  parentId: number | null;
  directories: DirectoryType[];
  roadmaps: DirectoryRoadmapType[];
};

type DirectoryRoadmapType = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export const DirectoryRoadmapSchema: z.ZodType<DirectoryRoadmapType> = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
  thumbnailUrl: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const DirectorySchema: z.ZodType<DirectoryType> = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    parentId: z.number().nullable(),
    directories: z.array(DirectorySchema),
    roadmaps: z.array(DirectoryRoadmapSchema),
  }),
);

// Directory 생성 요청 스키마
export const CreateDirectoryRequestSchema = z.object({
  name: z.string().min(1, '디렉토리 이름은 필수입니다'),
  parentId: z.number().nullable(),
});

// Directory 수정 요청 스키마
export const UpdateDirectoryRequestSchema = z.object({
  name: z.string().min(1, '디렉토리 이름은 필수입니다'),
  parentId: z.number().nullable(),
});

// Root Contents 스키마
export const RootContentsSchema = z.object({
  directories: z.array(DirectorySchema),
  roadmaps: z.array(DirectoryRoadmapSchema),
});

// 응답 스키마들
export const CreateDirectoryResponseSchema = ApiResponseSchema(DirectorySchema);
export const UpdateDirectoryResponseSchema = ApiResponseSchema(DirectorySchema);
export const DeleteDirectoryResponseSchema = ApiResponseSchema(z.null());
export const GetRootContentsResponseSchema = ApiResponseSchema(RootContentsSchema);
