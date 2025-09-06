import type { ApiResponse } from '../user/types';

// Directory 정보
export interface Directory {
  id: number;
  name: string;
  parentId: number | null;
  directories: Directory[];
  roadmaps: DirectoryRoadmap[];
}

// Directory 안의 로드맵 정보 (축약된 형태)
export interface DirectoryRoadmap {
  id: number;
  title: string;
  description: string;
  categories: string[];
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
}

// Directory 생성 요청
export interface CreateDirectoryRequest {
  name: string;
  parentId: number | null;
}

// Directory 수정 요청
export interface UpdateDirectoryRequest {
  name: string;
  parentId: number | null;
}

// Root Contents 응답
export interface RootContents {
  directories: Directory[];
  roadmaps: DirectoryRoadmap[];
}

// 응답 타입들
export type CreateDirectoryResponse = ApiResponse<Directory>;
export type UpdateDirectoryResponse = ApiResponse<Directory>;
export type DeleteDirectoryResponse = ApiResponse<null>;
export type GetRootContentsResponse = ApiResponse<RootContents>;
