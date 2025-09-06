import type { ApiResponse } from '../user/types';

// 로드맵 정보
export interface Roadmap {
  id: number;
  title: string;
  description: string;
  categories: string[];
  directoryId: number;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
  // 추가 필드들은 명세서 응답 보고 나중에 추가
}

// 로드맵 생성 요청 (multipart 형태)
export interface CreateRoadmapRequest {
  roadmap: {
    title: string;
    description: string;
    categories: string[];
    directoryId: number;
  };
  thumbnail?: File; // 이미지 파일
}

// 로드맵 수정 요청
export interface UpdateRoadmapRequest {
  title: string;
  description: string;
  categories: string[];
  directoryId: number;
}

// 로드맵 개수 응답
export interface RoadmapCount {
  count: number;
}

// 응답 타입들
export type CreateRoadmapResponse = ApiResponse<Roadmap>;
export type GetRoadmapsResponse = ApiResponse<Roadmap[]>;
export type GetRoadmapResponse = ApiResponse<Roadmap>;
export type UpdateRoadmapResponse = ApiResponse<Roadmap>;
export type DeleteRoadmapResponse = ApiResponse<null>;
export type FavoriteRoadmapResponse = ApiResponse<null>;
export type LastAccessedRoadmapResponse = ApiResponse<Roadmap>;
export type RoadmapCountResponse = ApiResponse<RoadmapCount>;
