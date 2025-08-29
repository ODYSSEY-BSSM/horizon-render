import { Icon } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon component with Material Symbols support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name',
    },
    variant: {
      control: 'select',
      options: ['XS', 'SM', 'MD', 'LG', 'XL'],
      description: 'Icon size variant',
    },
    filled: {
      control: 'boolean',
      description: 'Filled or outlined style',
    },
    size: {
      control: 'text',
      description: 'Custom size',
    },
    color: {
      control: 'text',
      description: 'Icon color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'home',
    variant: 'MD',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Icon {...args} name='star' variant='XS' />
      <Icon {...args} name='star' variant='SM' />
      <Icon {...args} name='star' variant='MD' />
      <Icon {...args} name='star' variant='LG' />
      <Icon {...args} name='star' variant='XL' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 아이콘 크기 변형 예시',
      },
      source: {
        code: `
<Icon name="star" variant="XS" />
<Icon name="star" variant="SM" />
<Icon name="star" variant="MD" />
<Icon name="star" variant="LG" />
<Icon name="star" variant="XL" />
        `.trim(),
      },
    },
  },
};

export const Filled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Icon {...args} name='favorite' filled={false} />
      <Icon {...args} name='favorite' filled={true} />
      <Icon {...args} name='star' filled={false} />
      <Icon {...args} name='star' filled={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘 채움 스타일',
      },
      source: {
        code: `
<Icon name="favorite" filled={false} />
<Icon name="favorite" filled={true} />
<Icon name="star" filled={false} />
<Icon name="star" filled={true} />
        `.trim(),
      },
    },
  },
};

export const CustomSize: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Icon {...args} name='settings' size={16} />
      <Icon {...args} name='settings' size={24} />
      <Icon {...args} name='settings' size='1rem' />
      <Icon {...args} name='settings' size='2rem' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '커스텀 사이즈 지정',
      },
      source: {
        code: `
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size="1rem" />
<Icon name="settings" size="2rem" />
        `.trim(),
      },
    },
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Icon {...args} name='check_circle' color='#3b82f6' />
      <Icon {...args} name='error' color='#dc2626' />
      <Icon {...args} name='warning' color='#059669' />
      <Icon {...args} name='info' color='#7c3aed' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '커스텀 아이콘 색상',
      },
      source: {
        code: `
<Icon name="check_circle" color="#3b82f6" />
<Icon name="error" color="#dc2626" />
<Icon name="warning" color="#059669" />
<Icon name="info" color="#7c3aed" />
        `.trim(),
      },
    },
  },
};

export const Playground: Story = {
  args: {
    name: 'star',
    variant: 'MD',
    filled: false,
    color: '#000000',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props',
      },
    },
  },
};
