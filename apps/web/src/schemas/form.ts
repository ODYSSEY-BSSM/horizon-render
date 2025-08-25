import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  age: z.number().min(1, '나이는 1 이상이어야 합니다'),
});

export type FormData = z.infer<typeof formSchema>;
