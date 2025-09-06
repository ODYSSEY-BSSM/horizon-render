import { z } from 'zod';

// User API에서 가져온 공통 응답 스키마
import { ApiResponseSchema } from '../../../shared/schemas';

// Team Apply 정보 스키마
export const TeamApplySchema = z.object({
  id: z.number(),
  teamName: z.string(),
  applyStatus: z.string(),
});

// 응답 스키마들
export const ApplyToTeamResponseSchema = ApiResponseSchema(TeamApplySchema);
export const AcceptApplicationResponseSchema = ApiResponseSchema(TeamApplySchema);
export const RejectApplicationResponseSchema = ApiResponseSchema(z.string());
