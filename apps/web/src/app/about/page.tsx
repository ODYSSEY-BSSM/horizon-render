'use client';

import { Button, Icon, Text } from '@horizon/ui';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center'>
      <div className='max-w-2xl mx-auto text-center space-y-8 p-8'>
        <Text variant='H1' className='text-gray-900'>
          Horizon Render 소개
        </Text>

        <div className='space-y-4'>
          <Text variant='B1' className='text-gray-700'>
            React TypeScript 디자인 시스템 모노레포입니다.
          </Text>

          <Text variant='B2' className='text-gray-600'>
            컴포넌트 라이브러리, 디자인 토큰, 비주얼 에디터 애플리케이션, 그리고 현대적인 개발
            도구를 포함한 종합적인 디자인 시스템을 제공합니다.
          </Text>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          <div className='p-6 bg-gray-50 rounded-lg'>
            <Icon name='palette' size={24} className='mx-auto mb-3 text-blue-600' />
            <Text variant='B2' className='font-medium mb-2'>
              @horizon/tokens
            </Text>
            <Text variant='C' className='text-gray-600'>
              디자인 토큰 시스템
            </Text>
          </div>

          <div className='p-6 bg-gray-50 rounded-lg'>
            <Icon name='widgets' size={24} className='mx-auto mb-3 text-green-600' />
            <Text variant='B2' className='font-medium mb-2'>
              @horizon/ui
            </Text>
            <Text variant='C' className='text-gray-600'>
              React 컴포넌트
            </Text>
          </div>

          <div className='p-6 bg-gray-50 rounded-lg'>
            <Icon name='code' size={24} className='mx-auto mb-3 text-purple-600' />
            <Text variant='B2' className='font-medium mb-2'>
              apps/web
            </Text>
            <Text variant='C' className='text-gray-600'>
              NextJS 웹 애플리케이션
            </Text>
          </div>
        </div>

        <Button as={Link} href='/' size='medium' variant='outlined'>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
