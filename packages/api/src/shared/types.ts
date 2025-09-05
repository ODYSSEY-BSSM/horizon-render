// 공통 유틸리티 타입들만 남김
export type CreateRequest<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateRequest<T> = Partial<CreateRequest<T>>;
