import { formSchema } from './form';

describe('formSchema', () => {
  it('validates correct data successfully', () => {
    const validData = {
      name: '홍길동',
      email: 'hong@example.com',
      age: 25,
    };

    const result = formSchema.safeParse(validData);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual(validData);
    }
  });

  it('rejects empty name', () => {
    const invalidData = {
      name: '',
      email: 'hong@example.com',
      age: 25,
    };

    const result = formSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('이름은 필수입니다');
    }
  });

  it('rejects invalid email format', () => {
    const invalidData = {
      name: '홍길동',
      email: 'invalid-email',
      age: 25,
    };

    const result = formSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('올바른 이메일 주소를 입력해주세요');
    }
  });

  it('rejects age less than 1', () => {
    const invalidData = {
      name: '홍길동',
      email: 'hong@example.com',
      age: 0,
    };

    const result = formSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('나이는 1 이상이어야 합니다');
    }
  });

  it('rejects negative age', () => {
    const invalidData = {
      name: '홍길동',
      email: 'hong@example.com',
      age: -5,
    };

    const result = formSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('나이는 1 이상이어야 합니다');
    }
  });

  it('handles multiple validation errors', () => {
    const invalidData = {
      name: '',
      email: 'invalid-email',
      age: 0,
    };

    const result = formSchema.safeParse(invalidData);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues).toHaveLength(3);

      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toContain('이름은 필수입니다');
      expect(messages).toContain('올바른 이메일 주소를 입력해주세요');
      expect(messages).toContain('나이는 1 이상이어야 합니다');
    }
  });

  it('accepts valid email formats', () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.co.kr',
      'user+tag@gmail.com',
      '123@numbers.org',
    ];

    for (const email of validEmails) {
      const data = {
        name: '테스트',
        email,
        age: 20,
      };

      const result = formSchema.safeParse(data);
      expect(result.success).toBe(true);
    }
  });
});
