import { Divider } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Divider> = {
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
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
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

export const CustomSpacing: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>Content</div>
      <Divider {...args} className='my-2' />
      <div>Content with small spacing</div>
      <Divider {...args} className='my-8' />
      <div>Content with large spacing</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'className으로 여백 조정',
      },
      source: {
        code: `
<Divider className="my-2" />
<Divider className="my-8" />
        `.trim(),
      },
    },
  },
};

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props',
      },
    },
  },
};
