import { fetchApi } from '../../shared/utils/fetchApi';
import type {
  CreateDirectoryRequest,
  CreateDirectoryResponse,
  DeleteDirectoryResponse,
  GetRootContentsResponse,
  UpdateDirectoryRequest,
  UpdateDirectoryResponse,
} from './types';

export const directoryApi = {
  // 디렉토리 생성 (POST /directories/create)
  create: (data: CreateDirectoryRequest): Promise<CreateDirectoryResponse> =>
    fetchApi('/directories/create', { method: 'POST', data }),

  // 디렉토리 수정 (PUT /directories/{id})
  update: (id: number, data: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> =>
    fetchApi(`/directories/${id}`, { method: 'PUT', data }),

  // 디렉토리 삭제 (DELETE /directories/{id})
  delete: (id: number): Promise<DeleteDirectoryResponse> =>
    fetchApi(`/directories/${id}`, { method: 'DELETE' }),

  // 루트 컨텐츠 조회 (GET /directories/root-contents)
  getRootContents: (): Promise<GetRootContentsResponse> =>
    fetchApi('/directories/root-contents', { method: 'GET' }),
};
