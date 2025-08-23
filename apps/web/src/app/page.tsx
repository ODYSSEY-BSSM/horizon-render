'use client';

import { Button, Icon, Text } from '@horizon/ui';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='max-w-md mx-auto text-center space-y-6 p-8'>
        <Text variant='H1' className='text-gray-900'>
          Horizon Render
        </Text>

        <Text variant='B1' className='text-gray-600'>
          NextJS 웹 애플리케이션에 오신 것을 환영합니다.
        </Text>

        <div className='space-y-4'>
          <Button asChild size='medium' variant='contained'>
            <Link href='/about'>소개 페이지로 이동</Link>
          </Button>

          <div className='flex items-center justify-center space-x-2 text-sm text-gray-500'>
            <Icon name='info' size={16} />
            <Text variant='C'>NextJS 환경에서 실행 중</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
