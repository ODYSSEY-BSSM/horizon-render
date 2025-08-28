import { Text } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography component with variant-based styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['H1', 'H2', 'H3', 'ST', 'B1', 'B2', 'C', 'O'],
      description: 'Typography variant',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'div', 'label'],
      description: 'HTML element to render',
    },
    color: {
      control: 'text',
      description: 'Text color',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    ellipsis: {
      control: 'boolean',
      description: 'Enable text ellipsis',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text',
    variant: 'B1',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text variant='H1'>H1 - Heading 1</Text>
      <Text variant='H2'>H2 - Heading 2</Text>
      <Text variant='H3'>H3 - Heading 3</Text>
      <Text variant='ST'>ST - Subtitle</Text>
      <Text variant='B1'>B1 - Body 1</Text>
      <Text variant='B2'>B2 - Body 2</Text>
      <Text variant='C'>C - Caption</Text>
      <Text variant='O'>O - Overline</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available typography variants',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text color='#3b82f6'>Blue text</Text>
      <Text color='#dc2626'>Red text</Text>
      <Text color='#059669'>Green text</Text>
      <Text color='#7c3aed'>Purple text</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom text colors',
      },
    },
  },
};

export const Alignment: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #e5e7eb', padding: '16px' }}>
      <Text textAlign='left'>Left aligned text</Text>
      <Text textAlign='center'>Center aligned text</Text>
      <Text textAlign='right'>Right aligned text</Text>
      <Text textAlign='justify'>
        Justified text that spans multiple lines to demonstrate the justify alignment behavior.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options',
      },
    },
  },
};

export const Ellipsis: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ width: '200px', border: '1px solid #e5e7eb', padding: '8px' }}>
        <Text ellipsis>This is a very long text that will be truncated with ellipsis</Text>
      </div>
      <div style={{ width: '200px', border: '1px solid #e5e7eb', padding: '8px' }}>
        <Text>This is a very long text that will wrap to multiple lines</Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text overflow handling with ellipsis',
      },
    },
  },
};

export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text as='h1' variant='H1'>
        Heading as h1
      </Text>
      <Text as='label' variant='O' htmlFor='input'>
        Label for input
      </Text>
      <Text as='span' variant='B2'>
        Inline span text
      </Text>
      <Text as='div' variant='B1'>
        Block div text
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different HTML elements with typography variants',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Edit me in the controls panel!',
    variant: 'B1',
    color: '#000000',
    textAlign: 'left',
    ellipsis: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all props',
      },
    },
  },
};
