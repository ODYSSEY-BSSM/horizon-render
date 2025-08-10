import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: "text",
      description: "Material Symbols icon name",
    },
    variant: {
      control: "select",
      options: ["XS", "SM", "MD", "LG", "XL"],
      description: "Icon variant",
    },
    filled: {
      control: "boolean",
      description: "Whether icon should be filled",
    },
    size: {
      control: "number",
      description: "Icon size in pixels (overrides variant)",
    },
    color: {
      control: "color",
      description: "Icon color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "home",
    variant: "MD",
    filled: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<Icon name="home" variant="MD" filled={false} />',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    name: "star",
    variant: "MD",
    filled: false,
    color: "#000",
    size: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon 
  name="star" 
  variant="MD" 
  filled={false} 
  color="#000"
/>`,
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="text-center">
        <Icon name="star" variant="XS" />
        <div className="text-xs mt-1">XS</div>
      </div>
      <div className="text-center">
        <Icon name="star" variant="SM" />
        <div className="text-xs mt-1">SM</div>
      </div>
      <div className="text-center">
        <Icon name="star" variant="MD" />
        <div className="text-xs mt-1">MD</div>
      </div>
      <div className="text-center">
        <Icon name="star" variant="LG" />
        <div className="text-xs mt-1">LG</div>
      </div>
      <div className="text-center">
        <Icon name="star" variant="XL" />
        <div className="text-xs mt-1">XL</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Icon name="star" variant="XS" />
<Icon name="star" variant="SM" />
<Icon name="star" variant="MD" />
<Icon name="star" variant="LG" />
<Icon name="star" variant="XL" />`,
      },
    },
  },
};

export const Filled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <div className="text-center">
          <Icon name="favorite" filled={false} />
          <div className="text-xs mt-1">Outline</div>
        </div>
        <div className="text-center">
          <Icon name="favorite" filled={true} />
          <div className="text-xs mt-1">Filled</div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-center">
          <Icon name="star" filled={false} />
          <div className="text-xs mt-1">Outline</div>
        </div>
        <div className="text-center">
          <Icon name="star" filled={true} />
          <div className="text-xs mt-1">Filled</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `{/* Outline icons */}
<Icon name="favorite" filled={false} />
<Icon name="star" filled={false} />

{/* Filled icons */}
<Icon name="favorite" filled={true} />
<Icon name="star" filled={true} />`,
      },
    },
  },
};

export const CustomSizing: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Custom sizes */}
      <div>
        <div className="text-sm mb-2 font-medium">Custom Sizes</div>
        <div className="flex gap-4 items-center">
          <div className="text-center">
            <Icon name="settings" size={16} />
            <div className="text-xs mt-1">16px</div>
          </div>
          <div className="text-center">
            <Icon name="settings" size={24} />
            <div className="text-xs mt-1">24px</div>
          </div>
          <div className="text-center">
            <Icon name="settings" size={32} />
            <div className="text-xs mt-1">32px</div>
          </div>
          <div className="text-center">
            <Icon name="settings" size={48} />
            <div className="text-xs mt-1">48px</div>
          </div>
        </div>
      </div>

      {/* String sizes */}
      <div>
        <div className="text-sm mb-2 font-medium">String Sizes</div>
        <div className="flex gap-4 items-center">
          <div className="text-center">
            <Icon name="settings" size="1rem" />
            <div className="text-xs mt-1">1rem</div>
          </div>
          <div className="text-center">
            <Icon name="settings" size="1.5rem" />
            <div className="text-xs mt-1">1.5rem</div>
          </div>
          <div className="text-center">
            <Icon name="settings" size="2rem" />
            <div className="text-xs mt-1">2rem</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `{/* Number sizes (converts to px) */}
<Icon name="settings" size={16} />
<Icon name="settings" size={24} />
<Icon name="settings" size={32} />

{/* String sizes (use as-is) */}
<Icon name="settings" size="1rem" />
<Icon name="settings" size="1.5rem" />
<Icon name="settings" size="2rem" />`,
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="text-center">
        <Icon name="palette" color="#3b82f6" />
        <div className="text-xs mt-1">Blue</div>
      </div>
      <div className="text-center">
        <Icon name="palette" color="#dc2626" />
        <div className="text-xs mt-1">Red</div>
      </div>
      <div className="text-center">
        <Icon name="palette" color="#059669" />
        <div className="text-xs mt-1">Green</div>
      </div>
      <div className="text-center">
        <Icon name="palette" color="#7c3aed" />
        <div className="text-xs mt-1">Purple</div>
      </div>
      <div className="text-center">
        <Icon name="palette" color="#f59e0b" />
        <div className="text-xs mt-1">Yellow</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Icon name="palette" color="#3b82f6" />
<Icon name="palette" color="#dc2626" />
<Icon name="palette" color="#059669" />
<Icon name="palette" color="#7c3aed" />
<Icon name="palette" color="#f59e0b" />`,
      },
    },
  },
};

export const CommonIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="text-sm mb-3 font-medium">Navigation Icons</div>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <Icon name="home" />
            <div className="text-xs mt-1">home</div>
          </div>
          <div className="text-center">
            <Icon name="search" />
            <div className="text-xs mt-1">search</div>
          </div>
          <div className="text-center">
            <Icon name="menu" />
            <div className="text-xs mt-1">menu</div>
          </div>
          <div className="text-center">
            <Icon name="close" />
            <div className="text-xs mt-1">close</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm mb-3 font-medium">Action Icons</div>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <Icon name="settings" />
            <div className="text-xs mt-1">settings</div>
          </div>
          <div className="text-center">
            <Icon name="favorite" />
            <div className="text-xs mt-1">favorite</div>
          </div>
          <div className="text-center">
            <Icon name="notifications" />
            <div className="text-xs mt-1">notifications</div>
          </div>
          <div className="text-center">
            <Icon name="account_circle" />
            <div className="text-xs mt-1">account_circle</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `{/* Navigation */}
<Icon name="home" />
<Icon name="search" />
<Icon name="menu" />
<Icon name="close" />

{/* Actions */}
<Icon name="settings" />
<Icon name="favorite" />
<Icon name="notifications" />
<Icon name="account_circle" />`,
      },
    },
  },
};
