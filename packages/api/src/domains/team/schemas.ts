import { z } from 'zod';

// User API에서 가져온 공통 응답 스키마
import { ApiResponseSchema } from '../user/schemas';

// Team 정보 스키마
export const TeamSchema = z.object({
  id: z.number(),
  name: z.string(),
  leader: z.string(),
  members: z.array(z.string()),
});

// Team 생성 요청 스키마
export const CreateTeamRequestSchema = z.object({
  name: z.string().min(1, '팀 이름은 필수입니다'),
});

// 응답 스키마들
export const CreateTeamResponseSchema = ApiResponseSchema(TeamSchema);
export const GetTeamResponseSchema = ApiResponseSchema(TeamSchema);
export const DeleteTeamResponseSchema = ApiResponseSchema(z.string());
