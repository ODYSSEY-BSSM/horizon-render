import { Icon } from '@/components/Icon/Icon';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the text field.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text.',
    },
    icon: {
      control: 'text',
      description: 'The name of the icon to display.',
    },
    error: {
      control: 'boolean',
      description: 'Whether the text field is in an error state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the text field is disabled.',
    },
    errorMessage: {
      control: 'text',
      description: 'The error message to display.',
    },
    value: {
      control: 'text',
      description: 'The value of the text field (for controlled components).',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value of the text field (for uncontrolled components).',
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  name: 'Default',
  args: {},
};

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    icon: 'search',
    placeholder: 'Search...',
  },
};

export const ErrorState: Story = {
  name: 'Error State',
  args: {
    error: true,
    defaultValue: 'Invalid value',
    icon: 'warning',
    errorMessage: 'This is an error message.',
  },
};

export const Disabled: Story = {
  name: 'Disabled State',
  args: {
    label: 'Disabled',
    defaultValue: 'Cannot edit',
    disabled: true,
  },
};

export const AllStates: Story = {
  name: 'Visual Comparison of All States',
  render: () => (
    <div className='grid grid-cols-2 gap-6 p-4 bg-white rounded-lg shadow-md'>
      <div className='space-y-4'>
        <h3 className='font-bold text-lg text-gray-00'>Default States</h3>
        <TextField label='Default' placeholder='Placeholder' />
        <TextField label='With Value' defaultValue='Some value' />
        <TextField label='Focused' placeholder='I will be focused' autoFocus />
      </div>
      <div className='space-y-4'>
        <h3 className='font-bold text-lg text-red-700'>Error States</h3>
        <TextField label='Error' placeholder='Error state' error errorMessage='Required field' />
        <TextField
          label='Error with Value'
          defaultValue='Invalid input'
          error
          errorMessage='Invalid format'
        />
        <TextField
          label='Error with Icon'
          defaultValue='wrong@email.com'
          icon='warning'
          error
          errorMessage='Please enter a valid email'
        />
      </div>
      <div className='space-y-4 col-span-2'>
        <h3 className='font-bold text-lg text-gray-500'>Disabled States</h3>
        <TextField label='Disabled' placeholder='Disabled' disabled />
        <TextField label='Disabled with Value' defaultValue='Cannot change' disabled />
      </div>
    </div>
  ),
};

export const WithVariousIcons: Story = {
  name: 'Fields with Various Icons',
  render: () => (
    <div className='space-y-4 p-4 bg-white rounded-lg shadow-md w-[450px]'>
      <TextField icon='mail' label='Email' placeholder='your@email.com' type='email' />
      <TextField icon='lock' label='Password' placeholder='Enter your password' type='password' />
      <TextField icon='phone' label='Phone Number' placeholder='+1 234 567 890' type='tel' />
      <TextField icon='person' label='Username' placeholder='Choose a username' />
    </div>
  ),
};
