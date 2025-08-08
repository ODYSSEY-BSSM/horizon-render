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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default body text',
    variant: "H1"
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="H1">H1 - 헤딩 1</Text>
      <Text variant="H2">H2 - 헤딩 2</Text>
      <Text variant="H3">H3 - 헤딩 3</Text>
      <Text variant="ST">ST - 서브타이틀</Text>
      <Text variant="B1">B1 - 본문 1</Text>
      <Text variant="B2">B2 - 본문 2</Text>
      <Text variant="C">C - 캡션</Text>
      <Text variant="O">O - 오버라인</Text>
    </div>
  ),
};

export const H1: Story = {
  args: {
    variant: 'H1',
    children: '가장 큰 헤딩입니다',
    as: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'H2',
    children: '두 번째 헤딩입니다',
    as: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'H3',
    children: '세 번째 헤딩입니다',
    as: 'h3',
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'ST',
    children: '서브타이틀입니다',
    as: 'h4',
  },
};

export const Body1: Story = {
  args: {
    variant: 'B1',
    children: 'Body 1 텍스트입니다. 기본 본문 텍스트로 사용됩니다.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'B2',
    children: 'Body 2 텍스트입니다. 더 작은 본문 텍스트입니다.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'C',
    children: '캡션 텍스트입니다. 이미지나 도표 설명에 사용됩니다.',
  },
};

export const Overline: Story = {
  args: {
    variant: 'O',
    children: '오버라인 텍스트입니다',
  },
};

export const CustomClassName: Story = {
  args: {
    variant: 'B1',
    children: '사용자 정의 스타일이 적용된 텍스트',
    className: 'text-blue-500 underline',
  },
};

export const LongText: Story = {
  args: {
    variant: 'B1',
    children: `이것은 긴 텍스트 예시입니다. 여러 줄에 걸쳐 표시될 수 있는 긴 문단을 보여주기 위한 목적입니다. 
    텍스트가 자연스럽게 줄바꿈되는 모습과 line-height가 적절히 적용되는 모습을 확인할 수 있습니다. 
    한국어와 영어가 혼재된 텍스트에서도 font-suit 폰트가 잘 적용되는지 확인해볼 수 있습니다. 
    This is a mixed Korean and English text to test the font rendering and line height.`,
  },
};