import { Text } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
폴리모픽 텍스트 컴포넌트로 다양한 타이포그래피 스타일과 HTML 요소를 지원합니다.

## 주요 기능

- **8가지 타이포그래피 변형**: h1, h2, h3, subtitle, body, small, caption, overline
- **폴리모픽 렌더링**: \`as\` prop으로 다양한 HTML 요소 렌더링
- **스타일 커스터마이징**: 색상, 너비, 텍스트 정렬, 말줄임표 등
- **접근성**: 시맨틱 HTML 요소와 적절한 기본값
- **TypeScript**: 완전한 타입 지원과 자동 완성
- **디자인 토큰**: @horizon/tokens의 타이포그래피 토큰 활용
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['H1', 'H2', 'H3', 'ST', 'B1', 'B2', 'C', 'O'],
    },
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'label',
        'li',
        'blockquote',
        'caption',
        'legend',
        'figcaption',
        'dt',
        'dd',
        'small',
        'strong',
        'em',
      ],
    },
    color: { control: 'color' },
    width: { control: 'text' },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    whiteSpace: {
      control: 'select',
      options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'],
    },
    ellipsis: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 텍스트 예시입니다',
    variant: 'B1',
  },
  parameters: {
    docs: {
      source: {
        code: '<Text variant="B1">기본 텍스트 예시입니다</Text>',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text variant='H1' as='h1'>
        H1 - 메인 헤딩 (32px, 굵음)
      </Text>
      <Text variant='H2' as='h2'>
        H2 - 섹션 헤딩 (24px, 굵음)
      </Text>
      <Text variant='H3' as='h3'>
        H3 - 서브 헤딩 (20px, 굵음)
      </Text>
      <Text variant='ST' as='h4'>
        ST - 서브타이틀 (18px, 중간)
      </Text>
      <Text variant='B1'>B1 - 본문 텍스트 (16px, 보통)</Text>
      <Text variant='B2'>B2 - 작은 본문 (14px, 보통)</Text>
      <Text variant='C'>C - 캡션 텍스트 (12px, 보통)</Text>
      <Text variant='O'>O - 오버라인 (11px, 보통)</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '디자인 시스템의 8가지 타이포그래피 변형을 보여줍니다. 각 변형은 고유한 크기와 굵기를 가집니다.',
      },
      source: {
        code: `<Text variant="H1" as="h1">메인 헤딩</Text>
<Text variant="H2" as="h2">섹션 헤딩</Text>
<Text variant="ST" as="h4">서브타이틀</Text>
<Text variant="B1">본문 텍스트</Text>
<Text variant="C">캡션 텍스트</Text>`,
      },
    },
  },
};

export const PolymorphicElements: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text as='label' variant='overline' htmlFor='example'>
        폼 라벨 (label 요소)
      </Text>
      <Text as='span' variant='small'>
        인라인 텍스트 (span 요소)
      </Text>
      <Text as='div' variant='body'>
        블록 텍스트 (div 요소)
      </Text>
      <ul className='ml-4'>
        <Text as='li' variant='small'>
          목록 아이템 (li 요소)
        </Text>
      </ul>
      <table>
        <Text as='caption' variant='caption'>
          테이블 캡션 (caption 요소)
        </Text>
      </table>
      <Text as='blockquote' variant='body' className='border-l-4 pl-4'>
        인용구 텍스트 (blockquote 요소)
      </Text>
      <Text as='strong' variant='body'>
        강조된 텍스트 (strong 요소)
      </Text>
      <Text as='em' variant='small'>
        이탤릭 텍스트 (em 요소)
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'as prop을 사용하여 다양한 HTML 요소로 렌더링할 수 있습니다. 타이포그래피 스타일은 유지되면서 시맨틱 요소를 선택할 수 있습니다.',
      },
      source: {
        code: `<Text as="label" variant="O" htmlFor="example">폼 라벨</Text>
<Text as="span" variant="B2">인라인 텍스트</Text>
<Text as="li" variant="B2">목록 아이템</Text>
<Text as="strong" variant="B1">강조된 텍스트</Text>`,
      },
    },
  },
};

export const Styling: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Text variant='subtitle' className='mb-4'>
          색상 커스터마이징
        </Text>
        <div className='space-y-2'>
          <Text color='#3b82f6'>파란색 텍스트</Text>
          <Text color='#dc2626'>빨간색 텍스트</Text>
          <Text color='#059669'>초록색 텍스트</Text>
          <Text color='#7c3aed'>보라색 텍스트</Text>
          <Text color='#ea580c'>주황색 텍스트</Text>
        </div>
      </div>

      <div style={{ width: '300px' }}>
        <Text variant='subtitle' className='mb-4'>
          텍스트 정렬
        </Text>
        <div className='space-y-2 border p-4 rounded bg-gray-50'>
          <Text textAlign='left'>왼쪽 정렬된 텍스트</Text>
          <Text textAlign='center'>가운데 정렬된 텍스트</Text>
          <Text textAlign='right'>오른쪽 정렬된 텍스트</Text>
          <Text textAlign='justify'>
            양쪽 정렬된 텍스트입니다. 이 텍스트는 양쪽 여백에 맞춰 정렬됩니다.
          </Text>
        </div>
      </div>

      <div>
        <Text variant='subtitle' className='mb-4'>
          너비 제한
        </Text>
        <div className='space-y-4'>
          <Text width={200} className='border p-3 rounded bg-blue-50'>
            이 텍스트는 200px 너비로 제한되어 자동으로 줄바꿈됩니다. 긴 내용도 자연스럽게
            처리됩니다.
          </Text>
          <Text width={150} className='border p-3 rounded bg-green-50'>
            더 좁은 150px 너비 제한
          </Text>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'color, textAlign, width props를 사용하여 텍스트 스타일을 커스터마이징할 수 있습니다.',
      },
      source: {
        code: `<Text color="#3b82f6">파란색 텍스트</Text>
<Text textAlign="center">가운데 정렬</Text>
<Text width={200}>너비 제한 텍스트</Text>`,
      },
    },
  },
};

export const Ellipsis: Story = {
  render: () => (
    <div className='space-y-6'>
      <Text variant='ST'>말줄임표 예시</Text>

      <div className='space-y-4'>
        <div>
          <Text variant='B2' className='mb-2 text-gray-600'>
            말줄임표 적용 (ellipsis=true)
          </Text>
          <div style={{ width: '250px' }} className='border p-3 rounded bg-yellow-50'>
            <Text ellipsis>
              이것은 매우 긴 텍스트로 컨테이너 너비를 초과하면 말줄임표(...)가 적용됩니다.
            </Text>
          </div>
        </div>

        <div>
          <Text variant='B2' className='mb-2 text-gray-600'>
            자동 줄바꿈 (ellipsis=false)
          </Text>
          <div style={{ width: '250px' }} className='border p-3 rounded bg-green-50'>
            <Text ellipsis={false}>
              이것은 말줄임표 없이 자연스럽게 줄바꿈되는 긴 텍스트입니다. 여러 줄로 표시됩니다.
            </Text>
          </div>
        </div>

        <div>
          <Text variant='B2' className='mb-2 text-gray-600'>
            다양한 너비에서의 말줄임표
          </Text>
          <div className='space-y-2'>
            {[150, 200, 300].map((width) => (
              <div key={width}>
                <Text variant='C' className='text-gray-500'>
                  너비: {width}px
                </Text>
                <div style={{ width }} className='border p-2 rounded bg-gray-50'>
                  <Text ellipsis>프론트엔드 개발자를 위한 디자인 시스템 컴포넌트 라이브러리</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ellipsis prop을 사용하여 텍스트 오버플로우 처리 방식을 제어할 수 있습니다.',
      },
      source: {
        code: `<Text ellipsis>긴 텍스트가 말줄임표로 처리됩니다</Text>
<Text ellipsis={false}>긴 텍스트가 자동으로 줄바꿈됩니다</Text>`,
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Text variant='H2' className='mb-6'>
          실제 사용 예시
        </Text>

        <article className='space-y-4 max-w-2xl'>
          <Text variant='H1' as='h1'>
            새로운 디자인 시스템 출시 소식
          </Text>
          <Text variant='ST' color='#6b7280'>
            2024년 3월 15일 · 5분 읽기
          </Text>
          <Text variant='B1'>
            저희 팀이 오랫동안 준비해온 새로운 디자인 시스템이 드디어 출시되었습니다. 이번
            업데이트에서는 사용성과 접근성을 크게 개선했습니다.
          </Text>
        </article>
      </div>

      <div className='border-t pt-8'>
        <div className='max-w-sm border rounded-lg p-6 bg-white shadow-sm'>
          <Text variant='H3' as='h3' className='mb-2'>
            프로젝트 카드
          </Text>
          <Text variant='C' color='#6b7280' className='mb-4'>
            진행 중 · 마감일: 3월 30일
          </Text>
          <Text variant='B2' ellipsis className='mb-4'>
            이 프로젝트는 새로운 사용자 인터페이스 디자인과 사용자 경험 개선을 목표로 합니다.
          </Text>
          <div className='flex justify-between items-center'>
            <Text variant='O' color='#059669'>
              완료율: 75%
            </Text>
            <Text as='button' variant='B2' color='#3b82f6' className='hover:underline'>
              자세히 보기
            </Text>
          </div>
        </div>
      </div>

      <div className='border-t pt-8'>
        <div className='max-w-md space-y-4'>
          <Text variant='H3' className='mb-4'>
            폼 예시
          </Text>
          <div>
            <Text as='label' variant='O' htmlFor='name' className='mb-1 block'>
              이름 (필수)
            </Text>
            <input id='name' className='w-full border rounded px-3 py-2' />
            <Text variant='C' color='#6b7280'>
              실명을 입력해주세요
            </Text>
          </div>
          <div>
            <Text as='label' variant='O' htmlFor='email' className='mb-1 block'>
              이메일
            </Text>
            <input id='email' type='email' className='w-full border rounded px-3 py-2' />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 웹 애플리케이션에서 Text 컴포넌트가 사용되는 다양한 시나리오를 보여줍니다.',
      },
      source: {
        code: `// Article header
<Text variant="H1" as="h1">제목</Text>
<Text variant="ST" color="#6b7280">메타데이터</Text>
<Text variant="B1">본문 내용</Text>

// Form labels
<Text as="label" variant="O" htmlFor="name">라벨</Text>
<Text variant="C" color="#6b7280">도움말</Text>`,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: '컨트롤 패널에서 수정해보세요!',
    variant: 'B1',
    as: 'p',
    color: '#000000',
    textAlign: 'left',
    ellipsis: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text
  variant="B1"
  as="p"
  color="#000000"
  textAlign="left"
  ellipsis={false}
>
  컨트롤 패널에서 수정해보세요!
</Text>`,
      },
    },
  },
};
