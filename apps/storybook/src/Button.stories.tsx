import { Button } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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

- **자동 ARIA 속성**: \`aria-disabled\`, \`aria-label\` 자동 설정
- **아이콘 전용 버튼**: \`iconName\`에서 자동으로 \`aria-label\` 생성
- **폴리모픽**: \`asChild\`를 사용해 다양한 HTML 요소로 렌더링
- **키보드 내비게이션**: 완전한 키보드 지원
- **스크린 리더 친화적**: 모든 상태가 적절히 안내됨

## 주요 기능

- 다양한 크기와 변형
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
    iconLeft: {
      control: 'boolean',
      description: '왼쪽에 아이콘 표시',
    },
    iconRight: {
      control: 'boolean',
      description: '오른쪽에 아이콘 표시',
    },
    iconOnly: {
      control: 'boolean',
      description: '아이콘만 표시 (자동 aria-label 적용)',
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button iconLeft iconName='add'>
          아이템 추가
        </Button>
        <Button iconRight iconName='arrow_forward'>
          다음
        </Button>
        <Button iconOnly iconName='search' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant='outlined' iconLeft iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' iconRight iconName='send'>
          전송
        </Button>
        <Button variant='outlined' iconOnly iconName='favorite' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button iconLeft iconName='star' iconFilled>
          즐겨찾기 (Filled)
        </Button>
        <Button iconLeft iconName='star'>
          즐겨찾기 (Outlined)
        </Button>
        <Button iconOnly iconName='favorite' iconFilled />
        <Button iconOnly iconName='favorite' />
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
        code: `<Button iconLeft iconName="add">아이템 추가</Button>
<Button iconRight iconName="arrow_forward">다음</Button>
<Button iconOnly iconName="search" />
<Button iconLeft iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`,
      },
    },
  },
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button rounded={false}>각진 모서리</Button>
      <Button rounded={true}>둥근 모서리</Button>
      <Button rounded={true} iconOnly iconName='favorite' />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button rounded={false}>각진 모서리</Button>
<Button rounded={true}>둥근 모서리</Button>
<Button rounded={true} iconOnly iconName="favorite" />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button>기본 상태</Button>
        <Button disabled>비활성화</Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant='outlined'>기본 상태</Button>
        <Button variant='outlined' disabled>
          비활성화
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button iconLeft iconName='download'>
          다운로드
        </Button>
        <Button iconLeft iconName='download' disabled>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>채워진 버튼</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '64px', fontSize: '14px' }}>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size}>텍스트</Button>
              <Button size={size} iconLeft iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} iconRight iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} iconOnly iconName='search' />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>테두리 버튼</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '64px', fontSize: '14px' }}>
                {size === 'small' ? '작음' : size === 'medium' ? '보통' : '큼'}
              </span>
              <Button size={size} variant='outlined'>
                텍스트
              </Button>
              <Button size={size} variant='outlined' iconLeft iconName='add'>
                아이콘 왼쪽
              </Button>
              <Button size={size} variant='outlined' iconRight iconName='arrow_forward'>
                아이콘 오른쪽
              </Button>
              <Button size={size} variant='outlined' iconOnly iconName='search' />
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
<Button size="small" iconLeft iconName="add">아이콘 왼쪽</Button>
<Button size="small" iconRight iconName="arrow_forward">아이콘 오른쪽</Button>
<Button size="small" iconOnly iconName="search" />

// 테두리 변형
<Button size="medium" variant="outlined">텍스트</Button>
<Button size="medium" variant="outlined" iconLeft iconName="add">아이콘 왼쪽</Button>`,
      },
    },
  },
};

export const FormButtons: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        maxWidth: '384px',
      }}
    >
      <div>
        <label
          htmlFor='email'
          style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}
        >
          이메일
        </label>
        <input
          id='email'
          type='email'
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
          }}
          placeholder='example@email.com'
        />
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button type='submit' iconRight iconName='send'>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button>일반 버튼</Button>
        <Button asChild>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            GitHub 링크
          </a>
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant='outlined' iconLeft iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' iconLeft iconName='download' asChild>
          <a href='/files/sample.pdf' download>
            파일 다운로드
          </a>
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'asChild prop을 사용하면 앵커 같은 다른 요소에 버튼 스타일을 적용할 수 있습니다. 모든 버튼 기능(아이콘 등)이 asChild와 함께 작동합니다.',
      },
      source: {
        code: `<Button asChild>
  <a href="/page">버튼으로 표시된 링크</a>
</Button>
<Button variant="outlined" iconLeft iconName="download" asChild>
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
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    iconFilled: false,
    type: 'button',
    asChild: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="medium"
  iconLeft={false}
  iconRight={false}
  iconOnly={false}
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
