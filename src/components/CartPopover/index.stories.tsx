import { Meta, StoryObj } from "@storybook/react";
import CartPopover from "./";

const meta: Meta<typeof CartPopover> = {
  title: "Components/CartPopover",
  component: CartPopover,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CartPopover>;

export const Default: Story = {};
