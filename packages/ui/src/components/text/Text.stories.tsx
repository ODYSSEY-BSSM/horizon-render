import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['H1', 'H2', 'H3', 'ST', 'B1', 'B2', 'C', 'O'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
    color: { control: 'color' },
    width: { control: 'text' },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    whiteSpace: {
      control: 'select',
      options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'],
    },
    ellipsis: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default text example',
    variant: 'B1',
  },
  parameters: {
    docs: {
      source: {
        code: '<Text variant="B1">Default text example</Text>',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text variant='H1' as='h1'>
        H1 - 헤딩 1
      </Text>
      <Text variant='H2' as='h2'>
        H2 - 헤딩 2
      </Text>
      <Text variant='H3' as='h3'>
        H3 - 헤딩 3
      </Text>
      <Text variant='ST' as='h4'>
        ST - 서브타이틀
      </Text>
      <Text variant='B1'>B1 - 본문 1</Text>
      <Text variant='B2'>B2 - 본문 2</Text>
      <Text variant='C'>C - 캡션</Text>
      <Text variant='O'>O - 오버라인</Text>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Text variant="H1" as="h1">H1 - 헤딩 1</Text>
<Text variant="H2" as="h2">H2 - 헤딩 2</Text>
<Text variant="H3" as="h3">H3 - 헤딩 3</Text>
<Text variant="ST" as="h4">ST - 서브타이틀</Text>
<Text variant="B1">B1 - 본문 1</Text>
<Text variant="B2">B2 - 본문 2</Text>
<Text variant="C">C - 캡션</Text>
<Text variant="O">O - 오버라인</Text>`,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Edit me in the controls panel!',
    variant: 'B1',
    color: '#000',
    width: 'auto',
    textAlign: 'left',
    ellipsis: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Text 
  variant="B1" 
  color="#000" 
  width="auto" 
  textAlign="left" 
  ellipsis={false}
>
  Edit me in the controls panel!
</Text>`,
      },
    },
  },
};

export const Styling: Story = {
  render: () => (
    <div className='space-y-6'>
      {/* Colors */}
      <div>
        <Text variant='ST' className='mb-2'>
          Colors
        </Text>
        <div className='space-y-2'>
          <Text color='#3b82f6'>Blue text</Text>
          <Text color='#dc2626'>Red text</Text>
          <Text color='#059669'>Green text</Text>
        </div>
      </div>

      {/* Text Alignment */}
      <div style={{ width: '300px' }}>
        <Text variant='ST' className='mb-2'>
          Text Alignment
        </Text>
        <div className='space-y-2 border p-2 rounded'>
          <Text textAlign='left'>Left aligned</Text>
          <Text textAlign='center'>Center aligned</Text>
          <Text textAlign='right'>Right aligned</Text>
        </div>
      </div>

      {/* Width Control */}
      <div>
        <Text variant='ST' className='mb-2'>
          Width Control
        </Text>
        <Text width={200} className='border p-2 rounded'>
          이 텍스트는 200px 너비로 제한됩니다. 긴 텍스트가 자연스럽게 줄바꿈됩니다.
        </Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `{/* Colors */}
<Text color="#3b82f6">Blue text</Text>
<Text color="#dc2626">Red text</Text>
<Text color="#059669">Green text</Text>

{/* Text Alignment */}
<Text textAlign="left">Left aligned</Text>
<Text textAlign="center">Center aligned</Text>
<Text textAlign="right">Right aligned</Text>

{/* Width Control */}
<Text width={200}>
  이 텍스트는 200px 너비로 제한됩니다.
</Text>`,
      },
    },
  },
};

export const Ellipsis: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text variant='ST'>Ellipsis Examples</Text>

      <div style={{ width: '200px' }} className='border p-2 rounded'>
        <Text ellipsis>이것은 매우 긴 텍스트로 말줄임표가 적용됩니다.</Text>
      </div>

      <div style={{ width: '200px' }} className='border p-2 rounded'>
        <Text ellipsis={false}>이것은 말줄임표 없이 자연스럽게 줄바꿈되는 긴 텍스트입니다.</Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `{/* With ellipsis */}
<Text ellipsis>매우 긴 텍스트로 말줄임표가 적용됩니다.</Text>

{/* Without ellipsis */}
<Text ellipsis={false}>자연스럽게 줄바꿈되는 긴 텍스트입니다.</Text>`,
      },
    },
  },
};

export const WhiteSpace: Story = {
  render: () => (
    <div className='space-y-4' style={{ width: '250px' }}>
      <Text variant='ST'>White Space Options</Text>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='normal'>
          Normal: 여러 공백과{'\n'}줄바꿈이 있는 텍스트
        </Text>
      </div>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='nowrap'>
          Nowrap: 아무리 길어도 줄바꿈되지 않는 텍스트
        </Text>
      </div>

      <div className='border p-2 rounded'>
        <Text variant='C' whiteSpace='pre'>
          Pre: 여러 공백과{'\n'}줄바꿈이 보존되는 텍스트
        </Text>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Text whiteSpace="normal">Normal: 자동 줄바꿈</Text>
<Text whiteSpace="nowrap">Nowrap: 줄바꿈 안됨</Text>
<Text whiteSpace="pre">Pre: 공백과 줄바꿈 보존</Text>`,
      },
    },
  },
};

export const Accessibility: Story = {
  args: {
    variant: 'B1',
    children: 'Screen reader friendly text',
    'aria-label': 'Alternative text for screen readers',
    role: 'status',
  },
  parameters: {
    docs: {
      source: {
        code: `<Text 
  variant="B1" 
  aria-label="Alternative text for screen readers" 
  role="status"
>
  Screen reader friendly text
</Text>`,
      },
    },
  },
};
