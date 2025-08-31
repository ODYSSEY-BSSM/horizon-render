import { TextField } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
사용자 입력을 위한 텍스트 필드 컴포넌트입니다. 다양한 상태와 스타일링을 지원하며, 디자인 시스템의 일관성을 유지합니다.

## ✨ 주요 특징
- 🏷️ **스마트 라벨링**: 자동 ID 연결로 접근성 지원
- 🎯 **상태별 피드백**: 입력값 유무와 에러 상태에 따른 색상 변화
- 🎨 **아이콘 통합**: Material Symbols와 간격 최적화
- 📐 **유연한 크기**: width prop으로 레이아웃 대응
- ⌨️ **키보드 네비게이션**: 접근성과 사용성 보장
- 🎭 **애니메이션**: 부드러운 상태 전환
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '텍스트 필드의 라벨' },
    placeholder: { control: 'text', description: '플레이스홀더 텍스트' },
    icon: { control: 'text', description: '표시할 아이콘 이름' },
    error: { control: 'boolean', description: '에러 상태 여부' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    value: { control: 'text', description: '제어된 컴포넌트의 값' },
    defaultValue: { control: 'text', description: '비제어 컴포넌트의 기본값' },
    width: {
      control: 'text',
      description: '텍스트 필드 너비 (예: "100%", "20rem", 숫자는 px)',
    },
  },
  args: {
    label: '라벨',
    placeholder: '내용을 입력하세요',
    error: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
  parameters: {
    docs: {
      source: {
        code: '<TextField label="이름" placeholder="이름을 입력하세요" />',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField icon='search' label='검색' placeholder='검색어를 입력하세요' />
      <TextField icon='mail' label='이메일' placeholder='example@email.com' type='email' />
      <TextField icon='lock' label='비밀번호' placeholder='비밀번호 입력' type='password' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '아이콘이 있는 입력 필드는 시각적 구분과 명확한 입력 가이드를 제공합니다. 아이콘과 텍스트 간 간격은 8px로 최적화.',
      },
      source: {
        code: `
<TextField icon="search" label="검색" placeholder="검색어를 입력하세요" />
<TextField icon="mail" label="이메일" placeholder="example@email.com" type="email" />
<TextField icon="lock" label="비밀번호" placeholder="비밀번호 입력" type="password" />
        `,
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField
        label='이메일'
        defaultValue='잘못된이메일'
        error
        errorMessage='올바른 이메일 형식이 아닙니다'
      />
      <TextField icon='warning' label='필수 입력' error errorMessage='필수 입력 항목입니다' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '에러 상태에서는 빨간색 보더와 명확한 에러 메시지가 표시되어 사용자가 문제를 즉시 인식 가능.',
      },
      source: {
        code: `
<TextField
  label="이메일"
  defaultValue="잘못된이메일"
  error
  errorMessage="올바른 이메일 형식이 아닙니다"
/>
        `,
      },
    },
  },
};

export const FilledState: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField label='빈 상태' placeholder='내용을 입력하세요' />
      <TextField label='입력된 상태' defaultValue='홍길동' />
      <TextField label='제어된 상태' value='실시간 값' onChange={() => {}} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '입력된 상태에서는 검정색 라벨과 파란색 보더(1px)가 적용되며, 포커스 시 2px로 강조.',
      },
      source: {
        code: `
<TextField label="빈 상태" placeholder="내용을 입력하세요" />
<TextField label="입력된 상태" defaultValue="홍길동" />
<TextField label="제어된 상태" value="실시간 값" onChange={handleChange} />
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField label='비활성화' placeholder='입력 불가' disabled />
      <TextField label='값 포함 비활성화' defaultValue='읽기 전용' disabled />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<TextField label="비활성화" placeholder="입력 불가" disabled />
<TextField label="값 포함 비활성화" defaultValue="읽기 전용" disabled />
        `,
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '600px',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #dbeafe',
      }}
    >
      <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>회원가입</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <TextField icon='person' label='이름' placeholder='홍길동' />
        <TextField icon='mail' label='이메일' placeholder='example@email.com' type='email' />
        <TextField icon='lock' label='비밀번호' placeholder='8자 이상' type='password' />
        <TextField
          icon='verified_user'
          label='비밀번호 확인'
          placeholder='비밀번호 재입력'
          type='password'
        />
      </div>
      <TextField
        label='주소'
        placeholder='서울시 강남구...'
        width='100%'
        style={{ marginTop: '16px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 폼 구성 예시로, 그룹핑과 아이콘을 활용해 직관적인 사용자 경험 제공.',
      },
      source: {
        code: `
<TextField icon="person" label="이름" placeholder="홍길동" />
<TextField icon="mail" label="이메일" placeholder="example@email.com" type="email" />
<TextField icon="lock" label="비밀번호" placeholder="8자 이상" type="password" />
        `,
      },
    },
  },
};

export const WidthVariations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
      <TextField label='Compact (250px)' placeholder='좁은 필드' width={250} />
      <TextField label='Standard (400px)' placeholder='표준 필드' />
      <TextField label='Full Width' placeholder='전체 너비' width='100%' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'width prop으로 레이아웃에 맞는 크기 조정 가능. 숫자는 px, 문자열은 CSS 값으로 사용.',
      },
      source: {
        code: `
<TextField width={250} label="Compact" placeholder="좁은 필드" />
<TextField label="Standard" placeholder="표준 필드" />
<TextField width="100%" label="Full Width" placeholder="전체 너비" />
        `,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    label: '라벨',
    placeholder: '내용을 입력하세요',
    icon: '',
    error: false,
    errorMessage: '',
    disabled: false,
    width: '400px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<TextField
  label="라벨"
  placeholder="내용을 입력하세요"
  icon=""
  error={false}
  errorMessage=""
  disabled={false}
  width="400px"
/>
        `,
      },
    },
  },
};
