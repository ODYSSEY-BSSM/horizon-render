import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
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
      <Text>Content above</Text>
      <Divider />
      <Text>Content below</Text>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex items-center h-24 space-x-4'>
      <Text>Left content</Text>
      <Divider orientation='vertical' />
      <Text>Right content</Text>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text>Content</Text>
      <Divider />
      <Text>No spacing</Text>

      <Divider spacing={8} />
      <Text>8px spacing</Text>

      <Divider spacing={16} />
      <Text>16px spacing</Text>

      <Divider spacing={24} />
      <Text>24px spacing</Text>

      <Divider spacing={32} />
      <Text>32px spacing</Text>

      <Divider spacing={48} />
      <Text>48px spacing</Text>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <Text variant='H3' as='h4' className='mb-4'>
          Horizontal with Text
        </Text>
        <div className='space-y-4'>
          <Text>Section 1</Text>
          <Divider>OR</Divider>
          <Text>Section 2</Text>
        </div>
      </div>

      <div>
        <Text variant='H3' as='h4' className='mb-4'>
          Vertical with Text
        </Text>
        <div className='flex items-center h-24'>
          <Text>Left section</Text>
          <Divider orientation='vertical'>|</Divider>
          <Text>Right section</Text>
        </div>
      </div>
    </div>
  ),
};
