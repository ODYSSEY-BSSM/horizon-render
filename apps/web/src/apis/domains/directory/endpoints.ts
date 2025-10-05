import { api } from '../../shared/utils/api';
import type {
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  DeleteDirectoryResponse,
  GetRootContentsResponse,
  UpdateDirectoryRequest,
  UpdateDirectoryResponse,
} from './types';

export const directoryApi = {
  // 디렉토리 생성 (POST /directories)
  create: (data: CreateDirectoryRequest): Promise<CreateDirectoryResponse> =>
    api.post('directories', { json: data }).json<CreateDirectoryResponse>(),

  // 디렉토리 수정 (PUT /directories/{id})
  update: (id: number, data: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> =>
    api.put(`directories/${id}`, { json: data }).json<UpdateDirectoryResponse>(),

  // 디렉토리 삭제 (DELETE /directories/{id})
  delete: (id: number): Promise<DeleteDirectoryResponse> =>
    api.delete(`directories/${id}`).json<DeleteDirectoryResponse>(),

  // 팀 디렉토리 생성 (POST /directories/team/{teamId})
  createForTeam: (teamId: number, data: CreateDirectoryRequest): Promise<CreateDirectoryResponse> =>
    api.post(`directories/team/${teamId}`, { json: data }).json<CreateDirectoryResponse>(),

  // 팀 디렉토리 수정 (PUT /directories/{id}/team/{teamId})
  updateForTeam: (
    id: number,
    teamId: number,
    data: UpdateDirectoryRequest,
  ): Promise<UpdateDirectoryResponse> =>
    api.put(`directories/${id}/team/${teamId}`, { json: data }).json<UpdateDirectoryResponse>(),

  // 팀 디렉토리 삭제 (DELETE /directories/{id}/team/{teamId})
  deleteForTeam: (id: number, teamId: number): Promise<DeleteDirectoryResponse> =>
    api.delete(`directories/${id}/team/${teamId}`).json<DeleteDirectoryResponse>(),

  // 루트 컨텐츠 조회 (GET /root)
  getRootContents: (): Promise<GetRootContentsResponse> =>
    api.get('root').json<GetRootContentsResponse>(),
};
