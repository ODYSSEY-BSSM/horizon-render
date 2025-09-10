import { useMemo } from 'react';

export type LinkType = 'next' | 'react-router' | 'none';

// 캐시된 결과를 저장하여 중복 계산 방지
let cachedLinkType: LinkType | null = null;

const detectLinkType = (): LinkType => {
  // 이미 감지된 경우 캐시된 값 반환
  if (cachedLinkType !== null) {
    return cachedLinkType;
  }

  // 브라우저 환경에서만 감지
  if (typeof window !== 'undefined') {
    // NextJS 환경 감지 - __NEXT_DATA__ 객체 확인
    if ('__NEXT_DATA__' in window) {
      cachedLinkType = 'next';
      return cachedLinkType;
    }

    // 기본적으로 SPA 환경으로 가정 (React Router DOM)
    cachedLinkType = 'react-router';
    return cachedLinkType;
  }

  // 서버 환경에서는 none으로 설정
  cachedLinkType = 'none';
  return cachedLinkType;
};

export const useLinkType = (): LinkType => {
  return useMemo(() => {
    return detectLinkType();
  }, []);
};
