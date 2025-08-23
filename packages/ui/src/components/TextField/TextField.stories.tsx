import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'holding', 'filled', 'error'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    icon: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: '검색어를 입력하세요',
    icon: 'search',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className='space-y-4 '>
      <TextField label='Default' placeholder='기본 상태' />
      <TextField label='With Value' placeholder='값이 있는 상태' defaultValue='입력된 값' />
      <TextField label='Focused' placeholder='포커스 상태' variant='holding' />
      <TextField label='Error' placeholder='에러 상태' error defaultValue='잘못된 값' />
      <TextField label='Disabled' placeholder='비활성 상태' disabled />
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    variant: 'error',
  },

  render: () => (
    <div className='space-y-4 '>
      <TextField label='Search' placeholder='검색어 입력' icon='search' />
      <TextField label='Email' placeholder='이메일 입력' icon='mail' type='email' />
      <TextField label='Password' placeholder='비밀번호 입력' icon='lock' type='password' />
      <TextField label='Phone' placeholder='전화번호 입력' icon='phone' type='tel' />
    </div>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <div className='space-y-4 '>
      <TextField
        label='Error without icon'
        placeholder='에러 상태'
        error
        defaultValue='잘못된 값'
      />
      <TextField
        label='Error with icon'
        placeholder='에러 상태'
        error
        icon='mail'
        defaultValue='invalid@email'
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: 'Playground',
    placeholder: 'Try different props...',
    variant: 'default',
    error: false,
    disabled: false,
  },
};
