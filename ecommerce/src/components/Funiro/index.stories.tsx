import type { Meta, StoryObj } from "@storybook/react";
import Funiro from "./";

const meta: Meta<typeof Funiro> = {
  title: "Components/Funiro",
  component: Funiro,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Funiro>;

export const Default: Story = {};
