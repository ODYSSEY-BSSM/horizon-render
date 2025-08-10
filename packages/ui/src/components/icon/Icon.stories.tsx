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
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon name="star" variant="XS" />
      <Icon name="star" variant="SM" />
      <Icon name="star" variant="MD" />
      <Icon name="star" variant="LG" />
      <Icon name="star" variant="XL" />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon name="favorite" filled={false} />
      <Icon name="favorite" filled={true} />
      <Icon name="star" filled={false} />
      <Icon name="star" filled={true} />
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    name: "favorite",
    size: 32,
  },
};

export const CustomColor: Story = {
  args: {
    name: "star",
    color: "#ff6b35",
  },
};

export const CommonIcons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon name="home" />
      <Icon name="search" />
      <Icon name="settings" />
      <Icon name="favorite" />
      <Icon name="account_circle" />
      <Icon name="notifications" />
      <Icon name="menu" />
      <Icon name="close" />
    </div>
  ),
};
