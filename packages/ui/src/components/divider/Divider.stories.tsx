import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Simple divider component for visual separation with horizontal/vertical orientation, spacing options, and text content support.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
      defaultValue: 'horizontal',
    },
    spacing: {
      control: { type: 'number' },
      description: 'Spacing around the divider in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    spacing: 16,
  },
};

export const Horizontal: Story = {
  render: () => (
    <div className='space-y-4'>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex items-center h-24 space-x-4'>
      <p>Left content</p>
      <Divider orientation='vertical' />
      <p>Right content</p>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className='space-y-4'>
      <p>Content</p>
      <Divider />
      <p>No spacing</p>

      <Divider spacing={8} />
      <p>8px spacing</p>

      <Divider spacing={16} />
      <p>16px spacing</p>

      <Divider spacing={24} />
      <p>24px spacing</p>

      <Divider spacing={32} />
      <p>32px spacing</p>

      <Divider spacing={48} />
      <p>48px spacing</p>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h4 className='font-medium mb-4'>Horizontal with Text</h4>
        <div className='space-y-4'>
          <p>Section 1</p>
          <Divider>OR</Divider>
          <p>Section 2</p>
        </div>
      </div>

      <div>
        <h4 className='font-medium mb-4'>Vertical with Text</h4>
        <div className='flex items-center h-24'>
          <p>Left section</p>
          <Divider orientation='vertical'>|</Divider>
          <p>Right section</p>
        </div>
      </div>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className='max-w-sm mx-auto space-y-6'>
      <div className='text-center'>
        <h2 className='text-xl font-bold'>Sign In</h2>
      </div>

      <button type='button' className='w-full bg-blue-600 text-white py-2 px-4 rounded'>
        Continue with Google
      </button>

      <Divider spacing={32}>OR</Divider>

      <div className='space-y-4'>
        <input
          type='email'
          placeholder='Email'
          className='w-full border border-gray-300 py-2 px-3 rounded'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full border border-gray-300 py-2 px-3 rounded'
        />
        <button type='button' className='w-full bg-gray-800 text-white py-2 px-4 rounded'>
          Sign In
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing divider with text in a login form.',
      },
    },
  },
};
