import { z } from 'zod';

export const tokenResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
});

export type TokenResponse = z.infer<typeof tokenResponseSchema>;
