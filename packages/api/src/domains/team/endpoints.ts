import { fetchApi } from '../../shared/utils/fetchApi';
import type {
  CreateTeamRequest,
  CreateTeamResponse,
  DeleteTeamResponse,
  GetTeamResponse,
} from './types';

export const teamApi = {
  // 팀 생성 (POST /teams)
  create: (data: CreateTeamRequest): Promise<CreateTeamResponse> =>
    fetchApi('/teams', { method: 'POST', data }),

  // 팀 정보 조회 (GET /teams/{id})
  getById: (id: number): Promise<GetTeamResponse> => fetchApi(`/teams/${id}`, { method: 'GET' }),

  // 팀 삭제 (DELETE /teams/{id})
  delete: (id: number): Promise<DeleteTeamResponse> =>
    fetchApi(`/teams/${id}`, { method: 'DELETE' }),
};
