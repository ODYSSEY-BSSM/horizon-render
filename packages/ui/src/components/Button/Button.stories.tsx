import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
    },
    rounded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    iconName: {
      control: 'text',
    },
    asChild: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'contained',
  },
  parameters: {
    docs: {
      source: {
        code: '<Button size="medium" variant="contained">Button</Button>',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
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
          Add Item
        </Button>
        <Button icon='right' iconName='arrow_forward'>
          Next
        </Button>
        <Button icon='only' iconName='search' />
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='outlined' icon='left' iconName='download'>
          Download
        </Button>
        <Button variant='outlined' icon='right' iconName='send'>
          Send
        </Button>
        <Button variant='outlined' icon='only' iconName='favorite' />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button icon="left" iconName="add">Add Item</Button>
<Button icon="right" iconName="arrow_forward">Next</Button>
<Button icon="only" iconName="search" />`,
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

export const AsChild: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button>Regular Button</Button>
      <Button asChild>
        <a href='https://github.com'>Link as Button</a>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button>Regular Button</Button>
<Button asChild>
  <a href="#" role="button">Link as Button</a>
</Button>`,
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Click me!',
    size: 'medium',
    property: 'default',
    icon: 'none',
    variant: 'contained',
    rounded: false,
    disabled: false,
    iconName: 'add',
    asChild: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button 
  size="medium"
  property="default"
  icon="none"
  variant="contained"
  rounded={false}
  disabled={false}
  iconName="add"
  asChild={false}
>
  Click me!
</Button>`,
      },
    },
  },
};
