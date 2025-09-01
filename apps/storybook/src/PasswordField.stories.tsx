import { PasswordField } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof PasswordField> = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '비밀번호 입력을 위한 특수 텍스트 필드 컴포넌트입니다. 가시성 토글 기능과 보안성을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '비밀번호 필드의 라벨' },
    placeholder: { control: 'text', description: '플레이스홀더 텍스트' },
    error: { control: 'boolean', description: '에러 상태 여부' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    value: { control: 'text', description: '제어된 컴포넌트의 값' },
    defaultValue: { control: 'text', description: '비제어 컴포넌트의 기본값' },
    width: {
      control: 'text',
      description: '필드 너비 (예: "100%", "20rem", 숫자는 px)',
    },
  },
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    error: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    width: '400px',
  },
};

export const WithValue: Story = {
  args: {
    label: '비밀번호',
    placeholder: '8자 이상 입력',
    defaultValue: 'mypassword123',
    width: '400px',
  },
};

export const ErrorState: Story = {
  args: {
    label: '비밀번호',
    defaultValue: '123',
    error: true,
    errorMessage: '비밀번호는 8자 이상이어야 합니다',
    width: '400px',
  },
};

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <PasswordField label='기본' placeholder='비밀번호 입력' width='400px' />
      <PasswordField
        label='값 입력됨'
        placeholder='8자 이상'
        defaultValue='mypassword123'
        width='400px'
      />
      <PasswordField
        label='에러 상태'
        defaultValue='123'
        error
        errorMessage='너무 짧습니다'
        width='400px'
      />
      <PasswordField label='비활성화' placeholder='입력 불가' disabled width='400px' />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '400px',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #dbeafe',
      }}
    >
      <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>로그인</h3>
      <div style={{ display: 'grid', gap: '16px' }}>
        <PasswordField label='비밀번호' placeholder='비밀번호 입력' width='100%' />
        <PasswordField label='비밀번호 확인' placeholder='비밀번호 재입력' width='100%' />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    error: false,
    errorMessage: '',
    disabled: false,
    width: '400px',
  },
};
