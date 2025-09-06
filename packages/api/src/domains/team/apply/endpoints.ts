import { fetchApi } from '../../../shared/utils/fetchApi';
import type {
  AcceptApplicationResponse,
  ApplyToTeamResponse,
  RejectApplicationResponse,
} from './types';

export const teamApplyApi = {
  // 팀 신청 (POST /apply/{teamId})
  apply: (teamId: number): Promise<ApplyToTeamResponse> =>
    fetchApi(`/apply/${teamId}`, { method: 'POST' }),

  // 신청 수락 (PUT /apply/{applyId})
  accept: (applyId: number): Promise<AcceptApplicationResponse> =>
    fetchApi(`/apply/${applyId}`, { method: 'PUT' }),

  // 신청 거절 (PATCH /apply/{applyId})
  reject: (applyId: number): Promise<RejectApplicationResponse> =>
    fetchApi(`/apply/${applyId}`, { method: 'PATCH' }),
};
