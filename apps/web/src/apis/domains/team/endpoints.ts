import { api } from '../../shared/utils/api';
import type {
  CreateTeamRequest,
  CreateTeamResponse,
  DeleteTeamResponse,
  GetTeamResponse,
} from './types';

export const teamApi = {
  // 팀 생성 (POST /teams)
  create: (data: CreateTeamRequest): Promise<CreateTeamResponse> =>
    api.post('teams', { json: data }).json<CreateTeamResponse>(),

  // 팀 정보 조회 (GET /teams/{id})
  getById: (id: number): Promise<GetTeamResponse> => api.get(`teams/${id}`).json<GetTeamResponse>(),

  // 팀 삭제 (DELETE /teams/{id})
  delete: (id: number): Promise<DeleteTeamResponse> =>
    api.delete(`teams/${id}`).json<DeleteTeamResponse>(),
};
