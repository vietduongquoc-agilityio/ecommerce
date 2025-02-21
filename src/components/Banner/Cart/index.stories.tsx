import type { Meta, StoryObj } from "@storybook/react";
import CartBanner from "./";

const meta: Meta<typeof CartBanner> = {
  title: "Components/CartBanner",
  component: CartBanner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CartBanner>;

export const Default: Story = {
  render: () => <CartBanner />,
};
