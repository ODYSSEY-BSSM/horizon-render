import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component built without external dependencies, featuring comprehensive accessibility support.

## Accessibility Features

- **Automatic ARIA attributes**: \`aria-disabled\`, \`aria-busy\`, \`aria-label\` 
- **Loading states**: Shows spinner with proper accessibility
- **Icon-only buttons**: Automatic \`aria-label\` from \`iconName\`
- **Polymorphic**: Use \`asChild\` to render as any element
- **Keyboard navigation**: Full keyboard support
- **Screen reader friendly**: All states properly announced

## Key Features

- Multiple sizes and variants
- Loading states with custom text
- Icon positioning (left, right, only)
- Filled/outlined icons
- Form integration (submit, reset, button types)
- No external dependencies (Radix-free implementation)
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
      description: 'Icon position. "only" creates an icon-only button with automatic aria-label',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
      description: 'Visual style variant',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether to use rounded corners (pill shape)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state with proper accessibility attributes',
    },
    iconName: {
      control: 'text',
      description: 'Material Symbol icon name. Used as aria-label for icon-only buttons',
    },
    iconFilled: {
      control: 'boolean',
      description: 'Whether to use filled version of the icon',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state - shows spinner and disables button',
    },
    loadingText: {
      control: 'text',
      description: 'Text to show when loading (defaults to children text)',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type for form interactions',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element (e.g., <a> tag) using Radix Slot',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼 텍스트 입력',
    size: 'medium',
    variant: 'contained',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button size="medium" variant="contained">버튼 텍스트 입력</Button>',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='small'>사이즈 스몰</Button>
      <Button size='medium'>사이즈 미디움</Button>
      <Button size='large'>사이즈 라지</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button size="small">사이즈 스몰</Button>
<Button size="medium">사이즈 미디움</Button>
<Button size="large">사이즈 라지</Button>`,
      },
    },
  },
};

export const Types: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>`,
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='add'>
          아이템 추가
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          다음
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          다운로드
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          전송
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='star' iconFilled>
          즐겨찾기 (Filled)
        </Button>
        <Button icon='left' iconName='star'>
          즐겨찾기 (Outlined)
        </Button>
        <Button icon='only' iconName='favorite' iconFilled />
        <Button icon='only' iconName='favorite' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icons can be filled or outlined using the iconFilled prop. Icon-only buttons automatically receive aria-label with the iconName for accessibility.',
      },
      source: {
        code: `<Button icon="left" iconName="add">아이템 추가</Button>
<Button icon="right" iconName="arrow_forward">다음</Button>
<Button icon="only" iconName="search" />
<Button icon="left" iconName="star" iconFilled>즐겨찾기 (Filled)</Button>`,
      },
    },
  },
};

export const Rounded: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button rounded={false}>Square</Button>
      <Button rounded={true}>Rounded</Button>
      <Button rounded={true} icon='only' iconName='favorite' />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button rounded={false}>Square</Button>
<Button rounded={true}>Rounded</Button>
<Button rounded={true} icon="only" iconName="favorite" />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>Default</Button>
        <Button variant='outlined' disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button>Default</Button>
<Button property="hover">Hover</Button>
<Button property="pressed">Pressed</Button>
<Button disabled>Disabled</Button>`,
      },
    },
  },
};

export const AllCombinations: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Contained Buttons</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm capitalize'>{size}</span>
              <Button size={size}>Text</Button>
              <Button size={size} icon='left' iconName='add'>
                Icon Left
              </Button>
              <Button size={size} icon='right' iconName='arrow_forward'>
                Icon Right
              </Button>
              <Button size={size} icon='only' iconName='search' />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-4'>Outlined Buttons</h3>
        <div className='space-y-4'>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} className='flex items-center gap-4'>
              <span className='w-16 text-sm capitalize'>{size}</span>
              <Button size={size} variant='outlined'>
                Text
              </Button>
              <Button size={size} variant='outlined' icon='left' iconName='add'>
                Icon Left
              </Button>
              <Button size={size} variant='outlined' icon='right' iconName='arrow_forward'>
                Icon Right
              </Button>
              <Button size={size} variant='outlined' icon='only' iconName='search' />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// All size and icon combinations
<Button size="small">Text</Button>
<Button size="small" icon="left" iconName="add">Icon Left</Button>
<Button size="small" icon="right" iconName="arrow_forward">Icon Right</Button>
<Button size="small" icon="only" iconName="search" />

// Outlined variants
<Button size="medium" variant="outlined">Text</Button>
<Button size="medium" variant="outlined" icon="left" iconName="add">Icon Left</Button>`,
      },
    },
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>정상 상태</Button>
        <Button loading>로딩 중</Button>
        <Button loading loadingText='저장 중...'>
          저장하기
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined'>정상 상태</Button>
        <Button variant='outlined' loading>
          로딩 중
        </Button>
        <Button variant='outlined' loading loadingText='업로드 중...'>
          파일 업로드
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button icon='left' iconName='download'>
          다운로드
        </Button>
        <Button icon='left' iconName='download' loading loadingText='다운로드 중...'>
          다운로드
        </Button>
        <Button icon='only' iconName='refresh' />
        <Button icon='only' iconName='refresh' loading />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Loading states automatically disable the button and show a spinner. The loading state includes aria-busy for accessibility.',
      },
      source: {
        code: `<Button loading>로딩 중</Button>
<Button loading loadingText="저장 중...">저장하기</Button>
<Button icon="left" iconName="download" loading loadingText="다운로드 중...">다운로드</Button>`,
      },
    },
  },
};

export const FormButtons: Story = {
  render: () => (
    <form className='space-y-4 p-4 border rounded-lg max-w-sm'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          Email
        </label>
        <input
          id='email'
          type='email'
          className='w-full px-3 py-2 border rounded-md'
          placeholder='your@email.com'
        />
      </div>
      <div className='flex gap-2'>
        <Button type='submit' icon='right' iconName='send'>
          Submit
        </Button>
        <Button type='reset' variant='outlined'>
          Reset
        </Button>
        <Button type='button' variant='outlined' onClick={() => alert('Cancel clicked')}>
          Cancel
        </Button>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates different button types for form interactions. Submit and reset buttons work with form behavior.',
      },
      source: {
        code: `<Button type="submit">Submit</Button>
<Button type="reset" variant="outlined">Reset</Button>
<Button type="button" variant="outlined">Cancel</Button>`,
      },
    },
  },
};

export const AsChild: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4'>
        <Button>일반 버튼</Button>
        <Button asChild>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            GitHub 링크
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          일반 다운로드
        </Button>
        <Button variant='outlined' icon='left' iconName='download' asChild>
          <a href='/files/sample.pdf' download>
            파일 다운로드
          </a>
        </Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button loading loadingText='로딩 중...'>
          로딩 버튼
        </Button>
        <Button loading loadingText='페이지 로딩 중...' asChild>
          <a href='/loading-page'>링크 + 로딩</a>
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'asChild prop allows rendering button styles on other elements like anchors. All button features (loading, icons, etc.) work with asChild.',
      },
      source: {
        code: `<Button asChild>
  <a href="/page">Link as Button</a>
</Button>
<Button variant="outlined" icon="left" iconName="download" asChild>
  <a href="/file.pdf" download>File Download</a>
</Button>`,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Click me!',
    size: 'medium',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    iconFilled: false,
    loading: false,
    loadingText: '',
    type: 'button',
    asChild: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="medium"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  type="button"
  asChild={false}
>
  Click me!
</Button>`,
      },
    },
  },
};
