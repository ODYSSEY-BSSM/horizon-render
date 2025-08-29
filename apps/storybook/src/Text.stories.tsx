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
    children: '기본 텍스트',
    variant: 'B1',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text {...args} variant='H1'>
        H1 - 헤딩 1
      </Text>
      <Text {...args} variant='H2'>
        H2 - 헤딩 2
      </Text>
      <Text {...args} variant='H3'>
        H3 - 헤딩 3
      </Text>
      <Text {...args} variant='ST'>
        ST - 서브타이틀
      </Text>
      <Text {...args} variant='B1'>
        B1 - 본문 1
      </Text>
      <Text {...args} variant='B2'>
        B2 - 본문 2
      </Text>
      <Text {...args} variant='C'>
        C - 캡션
      </Text>
      <Text {...args} variant='O'>
        O - 오버라인
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 타이포그래피 변형 예시',
      },
      source: {
        code: `
<Text variant="H1">H1 - 헤딩 1</Text>
<Text variant="H2">H2 - 헤딩 2</Text>
<Text variant="H3">H3 - 헤딩 3</Text>
<Text variant="ST">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>
        `.trim(),
      },
    },
  },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text {...args} color='#3b82f6'>
        파란색 텍스트
      </Text>
      <Text {...args} color='#dc2626'>
        빨간색 텍스트
      </Text>
      <Text {...args} color='#059669'>
        초록색 텍스트
      </Text>
      <Text {...args} color='#7c3aed'>
        보라색 텍스트
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '커스텀 텍스트 색상',
      },
      source: {
        code: `
<Text color="#3b82f6">파란색 텍스트</Text>
<Text color="#dc2626">빨간색 텍스트</Text>
<Text color="#059669">초록색 텍스트</Text>
<Text color="#7c3aed">보라색 텍스트</Text>
        `.trim(),
      },
    },
  },
};

export const Alignment: Story = {
  render: (args) => (
    <div style={{ width: '300px', border: '1px solid #e5e7eb', padding: '16px' }}>
      <Text {...args} textAlign='left'>
        왼쪽 정렬 텍스트
      </Text>
      <Text {...args} textAlign='center'>
        가운데 정렬 텍스트
      </Text>
      <Text {...args} textAlign='right'>
        오른쪽 정렬 텍스트
      </Text>
      <Text {...args} textAlign='justify'>
        여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트 정렬 옵션',
      },
      source: {
        code: `
<Text textAlign="left">왼쪽 정렬 텍스트</Text>
<Text textAlign="center">가운데 정렬 텍스트</Text>
<Text textAlign="right">오른쪽 정렬 텍스트</Text>
<Text textAlign="justify">여러 줄로 표시되는 텍스트로, 양쪽 정렬(Justify) 동작을 보여줍니다.</Text>
        `.trim(),
      },
    },
  },
};

export const Ellipsis: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ width: '200px', border: '1px solid #e5e7eb', padding: '8px' }}>
        <Text {...args} ellipsis>
          너무 긴 텍스트는 말줄임표로 잘립니다
        </Text>
      </div>
      <div style={{ width: '200px', border: '1px solid #e5e7eb', padding: '8px' }}>
        <Text {...args}>너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다</Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '말줄임표(ellipsis) 텍스트 오버플로우 처리',
      },
      source: {
        code: `
<Text ellipsis>너무 긴 텍스트는 말줄임표로 잘립니다</Text>
<Text>너무 긴 텍스트는 여러 줄로 자동 줄바꿈됩니다</Text>
        `.trim(),
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
