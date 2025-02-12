import type { Meta, StoryObj } from "@storybook/react";
import Header from "./";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
