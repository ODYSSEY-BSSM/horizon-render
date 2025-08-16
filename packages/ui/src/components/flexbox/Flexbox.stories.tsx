import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flexbox } from "./Flexbox";

const meta: Meta<typeof Flexbox> = {
  title: "Components/Flexbox",
  component: Flexbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "The direction of the flex items.",
    },
    justify: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "The justification of the flex items.",
    },
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      description: "The alignment of the flex items.",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "How flex items wrap.",
    },
    gap: {
      control: "text",
      description: "The gap between flex items.",
    },
    grow: {
      control: "number",
      description: "The grow factor of the flex item.",
    },
    shrink: {
      control: "number",
      description: "The shrink factor of the flex item.",
    },
    basis: {
      control: "text",
      description: "The initial main size of a flex item.",
    },
    inline: {
      control: "boolean",
      description: "Whether to display as an inline-flex container.",
    },
    children: {
      control: false,
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ label, size = 50 }: { label: string; size?: number }) => (
  <div
    className="bg-blue-500 text-white flex items-center justify-center rounded-md"
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
  >
    {label}
  </div>
);

export const Default: Story = {
  args: {
    children: (
      <>
        <Box label="1" />
        <Box label="2" />
        <Box label="3" />
      </>
    ),
    gap: "8px",
    className: "bg-gray-200 p-4 rounded-lg",
  },
  render: (args) => (
    <Flexbox {...args}>
      <Box label="1" />
      <Box label="2" />
      <Box label="3" />
    </Flexbox>
  ),
};

export const Direction: Story = {
  render: () => (
    <div className="flex flex-row gap-4">
      <div>
        <div className="text-sm mb-2 font-medium text-center">row</div>
        <div
          style={{ width: "200px", height: "200px" }}
          className="flex justify-center items-center"
        >
          <Flexbox direction="row" gap="8px" className="bg-gray-200 p-4 rounded-lg">
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className="text-sm mb-2 font-medium text-center">row-reverse</div>
        <div
          style={{ width: "200px", height: "200px" }}
          className="flex justify-center items-center"
        >
          <Flexbox direction="row-reverse" gap="8px" className="bg-gray-200 p-4 rounded-lg">
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className="text-sm mb-2 font-medium text-center">column</div>
        <div
          style={{ width: "200px", height: "200px" }}
          className="flex justify-center items-center"
        >
          <Flexbox direction="column" gap="8px" className="bg-gray-200 p-4 rounded-lg">
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
        </div>
      </div>
      <div>
        <div className="text-sm mb-2 font-medium text-center">column-reverse</div>
        <div
          style={{ width: "200px", height: "200px" }}
          className="flex justify-center items-center"
        >
          <Flexbox direction="column-reverse" gap="8px" className="bg-gray-200 p-4 rounded-lg">
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
        </div>
      </div>
    </div>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-base font-semibold mb-3 capitalize">nowrap</h3>
        <Flexbox wrap="nowrap" gap="8px" className="bg-gray-200 p-4 rounded-lg w-48">
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
          <Box label="4" />
          <Box label="5" />
        </Flexbox>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-3 capitalize">wrap</h3>
        <Flexbox wrap="wrap" gap="8px" className="bg-gray-200 p-4 rounded-lg w-48">
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
          <Box label="4" />
          <Box label="5" />
        </Flexbox>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-3 capitalize">wrap-reverse</h3>
        <Flexbox wrap="wrap-reverse" gap="8px" className="bg-gray-200 p-4 rounded-lg w-48">
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
          <Box label="4" />
          <Box label="5" />
        </Flexbox>
      </div>
    </div>
  ),
};

export const Inline: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <div className="space-y-10">
      {/* inline: false */}
      <div>
        <div className="text-sm mb-2 font-medium">inline : false</div>
        <div>
          Some text before.
          <Flexbox {...args}>
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
          Some text after.
        </div>
      </div>
      {/* inline: true */}
      <div>
        <div className="text-sm mb-2 font-medium">inline : true</div>
        <div>
          Some text before.
          <Flexbox {...args} inline={true}>
            <Box label="1" />
            <Box label="2" />
            <Box label="3" />
          </Flexbox>
          Some text after.
        </div>
      </div>
    </div>
  ),
};

export const WithAndWithoutFlexbox: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <div>
        <h3 className="text-base font-semibold mb-3">Without Flexbox</h3>
        <div className="bg-gray-200 p-4 rounded-lg">
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-3">With Flexbox</h3>
        <Flexbox gap="8px" className="bg-gray-200 p-4 rounded-lg">
          <Box label="1" />
          <Box label="2" />
          <Box label="3" />
        </Flexbox>
      </div>
    </div>
  ),
};
