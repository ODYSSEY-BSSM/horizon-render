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
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'label',
        'li',
        'blockquote',
        'caption',
        'legend',
        'figcaption',
        'dt',
        'dd',
        'small',
        'strong',
        'em',
      ],
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
};

export const WithCustomElements: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text as='label' variant='O'>
        Label element
      </Text>
      <Text as='span' variant='B2'>
        Span element
      </Text>
      <Text as='div' variant='B1'>
        Div element
      </Text>
      <Text as='li' variant='B2'>
        List item element
      </Text>
      <Text as='caption' variant='C'>
        Table caption
      </Text>
      <Text as='blockquote' variant='B1'>
        Blockquote element
      </Text>
    </div>
  ),
};

export const Styling: Story = {
  render: () => (
    <div className='space-y-6'>
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
};
