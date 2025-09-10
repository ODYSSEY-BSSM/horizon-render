import { TextField } from '@horizon/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text input component with consistent styles and a11y. Supports labels, helper text, icons (left/right),
and password visibility toggle.

## Features
- Smart labeling: auto-linked label and input id for a11y
- Clear states: filled, focus, disabled, and error
- Icons: leftIcon and rightIcon as Material Symbols names
- Flexible width: support number (px) or any CSS width string
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Field label' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    error: { control: 'boolean', description: 'Error state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    helperText: { control: 'text', description: 'Helper or error message' },
    leftIcon: { control: 'text', description: 'Left icon (Material Symbols name)' },
    rightIcon: { control: 'text', description: 'Right icon (Material Symbols name)' },
    value: { control: 'text', description: 'Controlled value' },
    defaultValue: { control: 'text', description: 'Uncontrolled default value' },
    width: {
      control: 'text',
      description: 'Width (e.g., "100%", "20rem"; number is px)',
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Type something...',
    type: 'text',
    error: false,
    disabled: false,
    helperText: '',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    width: '400px',
  },
  parameters: {
    docs: {
      source: {
        code: '<TextField label="Name" placeholder="Enter your name" />',
      },
    },
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField label='검색' placeholder='검색어를 입력하세요' leftIcon='search' width='400px' />
      <TextField
        label='이메일'
        placeholder='example@email.com'
        type='email'
        leftIcon='mail'
        rightIcon='send'
        width='400px'
      />
      <TextField label='비밀번호' placeholder='비밀번호 입력' type='password' width='400px' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Check default HTML behaviors for types like email and password.',
      },
      source: {
        code: `
<TextField label="Search" placeholder="Search..." />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="Enter password" type="password" />
        `,
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField
        label='Email'
        defaultValue='invalid@email'
        error
        helperText='Invalid email format'
        width='400px'
      />
      <TextField label='Required' error helperText='This field is required' width='400px' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error state shows red border and a clear error message.',
      },
      source: {
        code: `
<TextField label="Email" defaultValue="invalid@email" error helperText="Invalid email" />
        `,
      },
    },
  },
};

export const FilledState: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField label='Empty' placeholder='Type something...' width='400px' />
      <TextField label='With value' defaultValue='John Doe' width='400px' />
      <TextField
        label='Controlled'
        value='Live value'
        onChange={() => {
          /* no-op */
        }}
        width='400px'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Filled shows active label and highlighted border; focus increases border width.',
      },
      source: {
        code: `
<TextField label="Empty" placeholder="Type something..." />
<TextField label="With value" defaultValue="John Doe" />
<TextField label="Controlled" value="Live value" onChange={handleChange} />
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField label='Disabled' placeholder='Not allowed' disabled width='400px' />
      <TextField label='Disabled with value' defaultValue='Read-only' disabled width='400px' />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<TextField label="Disabled" placeholder="Not allowed" disabled />
<TextField label="Disabled with value" defaultValue="Read-only" disabled />
        `,
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        maxWidth: '600px',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #dbeafe',
      }}
    >
      <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Sign Up</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <TextField label='Name' placeholder='John Doe' width='400px' />
        <TextField label='Email' placeholder='example@email.com' type='email' width='400px' />
        <TextField
          label='Password'
          placeholder='At least 8 characters'
          type='password'
          width='400px'
        />
        <TextField
          label='Confirm Password'
          placeholder='Re-enter password'
          type='password'
          width='400px'
        />
      </div>
      <TextField
        label='Address'
        placeholder='123 Main St, ...'
        width='100%'
        style={{ marginTop: '16px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple form example using grouping and clear labeling.',
      },
      source: {
        code: `
<TextField label="Name" placeholder="John Doe" />
<TextField label="Email" placeholder="example@email.com" type="email" />
<TextField label="Password" placeholder="At least 8 characters" type="password" />
        `,
      },
    },
  },
};

export const WidthVariations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '600px' }}>
      <TextField label='Standard (400px)' placeholder='Standard field' width='400px' />
      <TextField label='Full Width' placeholder='Full width' width='100%' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Resize fields with the width prop. Numbers are px; strings are raw CSS values.',
      },
      source: {
        code: `
<TextField width={250} label="Compact" placeholder="Narrow field" />
<TextField label="Standard" placeholder="Standard field" />
<TextField width="100%" label="Full Width" placeholder="Full width" />
        `,
      },
    },
  },
};

export const Password: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
      <TextField type='password' label='Password' placeholder='Enter password' width='400px' />
      <TextField
        type='password'
        label='With value'
        placeholder='At least 8 characters'
        defaultValue='mypassword123'
        width='400px'
      />
      <TextField
        type='password'
        label='Error state'
        defaultValue='123'
        error
        helperText='Password must be at least 8 characters'
        width='400px'
      />
      <TextField
        type='password'
        label='Disabled'
        placeholder='Not allowed'
        disabled
        width='400px'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic password examples using TextField with type="password".',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    label: 'Label',
    placeholder: 'Type something...',
    error: false,
    helperText: '',
    disabled: false,
    width: '400px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<TextField
  label="Label"
  placeholder="Type something..."
  error={false}
  helperText=""
  disabled={false}
  width="400px"
/>
        `,
      },
    },
  },
};
