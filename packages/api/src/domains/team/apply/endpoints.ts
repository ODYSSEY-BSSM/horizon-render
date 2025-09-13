import { api } from '../../../shared/utils/api';
import type {
  AcceptApplicationResponse,
  ApplyToTeamResponse,
  RejectApplicationResponse,
} from './types';

export const teamApplyApi = {
  // 팀 신청 (POST /apply/{teamId})
  apply: (teamId: number): Promise<ApplyToTeamResponse> =>
    api.post(`apply/${teamId}`).json<ApplyToTeamResponse>(),

  // 신청 수락 (PUT /apply/{applyId})
  accept: (applyId: number): Promise<AcceptApplicationResponse> =>
    api.put(`apply/${applyId}`).json<AcceptApplicationResponse>(),

  // 신청 거절 (PATCH /apply/{applyId})
  reject: (applyId: number): Promise<RejectApplicationResponse> =>
    api.patch(`apply/${applyId}`).json<RejectApplicationResponse>(),
};
