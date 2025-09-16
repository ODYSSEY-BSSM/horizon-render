// API endpoints
export { userApi } from './domains/user/endpoints';
export { roadmapApi } from './domains/roadmap/endpoints';
export { teamApi } from './domains/team/endpoints';
export { directoryApi } from './domains/directory/endpoints';

// User types
export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshTokenResponse,
  UserInfoResponse,
} from './domains/user/types';

// Roadmap types
export type {
  CreateRoadmapRequest,
  CreateRoadmapResponse,
  GetRoadmapResponse,
  GetRoadmapsResponse,
  UpdateRoadmapRequest,
  UpdateRoadmapResponse,
  DeleteRoadmapResponse,
  FavoriteRoadmapResponse,
  LastAccessedRoadmapResponse,
  RoadmapCountResponse,
} from './domains/roadmap/types';

// Shared utilities
export { api } from './shared/utils/api';
