export { userApi } from './domains/user/endpoints';
export { roadmapApi } from './domains/roadmap/endpoints';
export { teamApi } from './domains/team/endpoints';
export { directoryApi } from './domains/directory/endpoints';

export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshTokenResponse,
  UserInfoResponse,
} from './domains/user/types';

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

export { api } from './shared/utils/api';
