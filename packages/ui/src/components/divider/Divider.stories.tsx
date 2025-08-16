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
