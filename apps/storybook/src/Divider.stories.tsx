import { Divider } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<{ orientation?: 'horizontal' | 'vertical'; length?: string }> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Simple divider component with horizontal and vertical orientations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation',
    },
    length: {
      control: 'text',
      description: 'Divider length',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    length: '300px',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Divider {...args} />
    </div>
  ),
};

export const Orientations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ width: '200px' }}>
        <Divider {...args} orientation='horizontal' />
      </div>
      <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
        <Divider {...args} orientation='vertical' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '가로 및 세로 방향 구분선',
      },
      source: {
        code: `
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
        `.trim(),
      },
    },
  },
};

export const WithContent: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>Content above</div>
      <Divider {...args} />
      <div>Content below</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '콘텐츠 사이의 구분선',
      },
      source: {
        code: `
<div>Content above</div>
<Divider />
<div>Content below</div>
        `.trim(),
      },
    },
  },
};

export const Playground: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props',
      },
    },
  },
};
