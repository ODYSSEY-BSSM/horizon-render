import type { ApiResponse } from '../../user/types';

// Team Apply 정보
export interface TeamApply {
  id: number;
  teamName: string;
  applyStatus: string;
}

// 응답 타입들
export type ApplyToTeamResponse = ApiResponse<TeamApply>;
export type AcceptApplicationResponse = ApiResponse<TeamApply>;
export type RejectApplicationResponse = ApiResponse<string>;
