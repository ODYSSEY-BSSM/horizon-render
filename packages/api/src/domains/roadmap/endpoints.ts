import { fetchApi } from '../../shared/utils/fetchApi';
import type {
  CreateRoadmapRequest,
  CreateRoadmapResponse,
  DeleteRoadmapResponse,
  FavoriteRoadmapResponse,
  GetRoadmapResponse,
  GetRoadmapsResponse,
  LastAccessedRoadmapResponse,
  RoadmapCountResponse,
  UpdateRoadmapRequest,
  UpdateRoadmapResponse,
} from './types';

export const roadmapApi = {
  // 로드맵 생성 (POST /roadmap/create) - multipart
  create: (data: CreateRoadmapRequest): Promise<CreateRoadmapResponse> => {
    const formData = new FormData();

    // JSON 데이터를 문자열로 변환해서 추가
    formData.append('roadmap', JSON.stringify(data.roadmap));

    // 썸네일 파일이 있으면 추가
    if (data.thumbnail) {
      formData.append('thumbnail', data.thumbnail);
    }

    return fetchApi('/roadmap/create', { method: 'POST', data: formData });
  },

  // 전체 로드맵 조회 (GET /roadmap/all)
  getAll: (): Promise<GetRoadmapsResponse> => fetchApi('/roadmap/all', { method: 'GET' }),

  // 단일 로드맵 조회 (GET /roadmap/{id}) - 추정
  getById: (id: number): Promise<GetRoadmapResponse> =>
    fetchApi(`/roadmap/${id}`, { method: 'GET' }),

  // 로드맵 수정 (PUT /roadmap/update/{id})
  update: (id: number, data: UpdateRoadmapRequest): Promise<UpdateRoadmapResponse> =>
    fetchApi(`/roadmap/update/${id}`, { method: 'PUT', data }),

  // 로드맵 삭제 (DELETE /roadmap/delete/{id})
  delete: (id: number): Promise<DeleteRoadmapResponse> =>
    fetchApi(`/roadmap/delete/${id}`, { method: 'DELETE' }),

  // 즐겨찾기 토글 (POST /roadmap/favorite/{id})
  toggleFavorite: (id: number): Promise<FavoriteRoadmapResponse> =>
    fetchApi(`/roadmap/favorite/${id}`, { method: 'POST' }),

  // 마지막 접속 로드맵 조회 (GET /roadmap/last-accessed)
  getLastAccessed: (): Promise<LastAccessedRoadmapResponse> =>
    fetchApi('/roadmap/last-accessed', { method: 'GET' }),

  // 로드맵 개수 조회 (GET /roadmap/count)
  getCount: (): Promise<RoadmapCountResponse> => fetchApi('/roadmap/count', { method: 'GET' }),
};
