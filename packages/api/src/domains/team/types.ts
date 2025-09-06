import type { ApiResponse } from '../../shared/types';

// Team 정보
export interface Team {
  id: number;
  name: string;
  leader: string;
  members: string[];
}

// Team 생성 요청
export interface CreateTeamRequest {
  name: string;
}

// 응답 타입들
export type CreateTeamResponse = ApiResponse<Team>;
export type GetTeamResponse = ApiResponse<Team>;
export type DeleteTeamResponse = ApiResponse<string>;
