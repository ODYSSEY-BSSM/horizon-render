// 공통 API 응답 타입
export interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}

// 공통 유틸리티 타입들
export type CreateRequest<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateRequest<T> = Partial<CreateRequest<T>>;
