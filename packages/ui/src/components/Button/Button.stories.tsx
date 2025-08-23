import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
외부 의존성 없이 구축된 다용도 버튼 컴포넌트로, 포괄적인 접근성 지원을 제공합니다.

## 접근성 기능

- **자동 ARIA 속성**: \`aria-disabled\`, \`aria-busy\`, \`aria-label\` 자동 설정
- **로딩 상태**: 접근성을 고려한 스피너와 상태 안내
- **아이콘 전용 버튼**: \`iconName\`에서 자동으로 \`aria-label\` 생성
- **폴리모픽**: \`asChild\`를 사용해 다양한 HTML 요소로 렌더링
- **키보드 내비게이션**: 완전한 키보드 지원
- **스크린 리더 친화적**: 모든 상태가 적절히 안내됨

## 주요 기능

- 다양한 크기와 변형
- 커스텀 텍스트가 있는 로딩 상태
- 아이콘 위치 지정 (왼쪽, 오른쪽, 아이콘만)
- 채워진/테두리 아이콘 스타일
- 폼 통합 (submit, reset, button 타입)
- 외부 의존성 없음 (Radix 없는 구현)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
      description: '아이콘 위치. "only"는 자동 aria-label이 있는 아이콘 전용 버튼을 생성',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
      description: '시각적 스타일 변형',
    },
    rounded: {
      control: 'boolean',
      description: '둥근 모서리 사용 여부 (알약 모양)',
    },
    disabled: {
      control: 'boolean',
      description: '적절한 접근성 속성이 있는 비활성화 상태',
    },
    iconName: {
      control: 'text',
      description: 'Material Symbol 아이콘 이름. 아이콘 전용 버튼의 aria-label로 사용됨',
    },
    iconFilled: {
      control: 'boolean',
      description: '아이콘의 채워진 버전 사용 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 - 스피너를 표시하고 버튼을 비활성화',
    },
    loadingText: {
      control: 'text',
      description: '로딩 시 표시할 텍스트 (기본값은 children 텍스트)',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: '폼 상호작용을 위한 버튼 타입',
    },
    asChild: {
      control: 'boolean',
      description: '자식 요소로 렌더링 (예: <a> 태그) - 폴리모픽 패턴 사용',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼 텍스트 입력',
    size: 'medium',
    variant: 'contained',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button size="medium" variant="contained">버튼 텍스트 입력</Button>',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='small'>사이즈 스몰</Button>
      <Button size='medium'>사이즈 미디움</Button>
      <Button size='large'>사이즈 라지</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>`,
      },
    },
  },
};

export const Types: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button variant='contained'>채워진 버튼</Button>
      <Button variant='outlined'>테두리 버튼</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button variant="contained">채워진 버튼</Button>
<Button variant="outlined">테두리 버튼</Button>`,
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='add'>
          아이템 추가
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          다음
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          전송
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='star' iconFilled>
          즐겨찾기 (Filled)
        </Button>
        <Button icon='left' iconName='star'>
          즐겨찾기 (Outlined)
        </Button>
        <Button icon='only' iconName='favorite' iconFilled />
        <Button icon='only' iconName='favorite' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'iconFilled prop을 사용하여 아이콘을 채워진 또는 테두리 스타일로 설정할 수 있습니다. 아이콘 전용 버튼은 접근성을 위해 iconName에서 자동으로 aria-label을 받습니다.',
      },
      source: {
        code: `<Button icon="left" iconName="add">아이템 추가</Button>
<Button icon="right" iconName="arrow_forward">다음</Button>
<Button icon="only" iconName="search" />
<Button icon="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`,
      },
    },
  },
};

export const Rounded: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button rounded={false}>각진 모서리</Button>
      <Button rounded={true}>둥근 모서리</Button>
      <Button rounded={true} icon='only' iconName='favorite' />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} icon="only" iconName="favorite" />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>기본 상태</Button>
        <Button disabled>비활성화</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>기본 상태</Button>
        <Button variant='outlined' disabled>
          비활성화
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button>기본 상태</Button>
<Button disabled>비활성화</Button>
<Button variant="outlined">기본 상태</Button>
<Button variant="outlined" disabled>비활성화</Button>`,
      },
    },
  },
};

export const AllCombinations: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>채워진 버튼</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm'>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size}>텍스트</Button>
              <Button size={size} icon='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} icon='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} icon='only' iconName='search' />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>테두리 버튼</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm'>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size} variant='outlined'>
                텍스트
              </Button>
              <Button size={size} variant='outlined' icon='left' iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} variant='outlined' icon='right' iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} variant='outlined' icon='only' iconName='search' />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// 모든 크기와 아이콘 조합
<Button size="small">텍스트</Button>
<Button size="small" icon="left" iconName="add">아이콘 왼쪽</Button>
<Button size="small" icon="right" iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" icon="only" iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">아이콘 왼쪽</Button>`,
      },
    },
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>정상 상태</Button>
        <Button loading>로딩 중</Button>
        <Button loading loadingText='저장 중...'>
          저장하기
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>정상 상태</Button>
        <Button variant='outlined' loading>
          로딩 중
        </Button>
        <Button variant='outlined' loading loadingText='업로드 중...'>
          파일 업로드
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='download'>
          다운로드
        </Button>
        <Button icon='left' iconName='download' loading loadingText='다운로드 중...'>
          다운로드
        </Button>
        <Button icon='only' iconName='refresh' />
        <Button icon='only' iconName='refresh' loading />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '로딩 상태는 자동으로 버튼을 비활성화하고 스피너를 표시합니다. 접근성을 위해 aria-busy가 포함됩니다.',
      },
      source: {
        code: `<Button loading>로딩 중</Button>
<Button loading loadingText="저장 중...">저장하기</Button>
<Button icon="left" iconName="download" loading loadingText="다운로드 중...">다운로드</Button>`,
      },
    },
  },
};

export const FormButtons: Story = {
  render: () => (
    <form className='space-y-4 p-4 border rounded-lg max-w-sm'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          이메일
        </label>
        <input
          id='email'
          type='email'
          className='w-full px-3 py-2 border rounded-md'
          placeholder='example@email.com'
        />
      </div>
      <div className='flex gap-2'>
        <Button type='submit' icon='right' iconName='send'>
          제출
        </Button>
        <Button type='reset' variant='outlined'>
          초기화
        </Button>
        <Button type='button' variant='outlined' onClick={() => alert('취소를 클릭했습니다')}>
          취소
        </Button>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '폼 상호작용을 위한 다양한 버튼 타입을 보여줍니다. Submit과 reset 버튼은 폼 동작과 연동됩니다.',
      },
      source: {
        code: `<Button type="submit">제출</Button>
<Button type="reset" variant="outlined">초기화</Button>
<Button type="button" variant="outlined">취소</Button>`,
      },
    },
  },
};

export const AsChild: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>일반 버튼</Button>
        <Button asChild>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            GitHub 링크
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' icon='left' iconName='download' asChild>
          <a href='/files/sample.pdf' download>
            파일 다운로드
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button loading loadingText='로딩 중...'>
          로딩 버튼
        </Button>
        <Button loading loadingText='페이지 로딩 중...' asChild>
          <a href='/loading-page'>링크 + 로딩</a>
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(로딩, 아이콘 등)이 asChild와 함께 작동합니다.',
      },
      source: {
        code: `<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" icon="left" iconName="download" asChild>
  <a href="/file.pdf" download>파일 다운로드</a>
</Button>`,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: '클릭해보세요!',
    size: 'medium',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    iconFilled: false,
    loading: false,
    loadingText: '',
    type: 'button',
    asChild: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="medium"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  type="button"
  asChild={false}
>
  클릭해보세요!
</Button>`,
      },
    },
  },
};
