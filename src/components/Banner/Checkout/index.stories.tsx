import type { Meta, StoryObj } from "@storybook/react";
import CheckoutBanner from "./";

const meta: Meta<typeof CheckoutBanner> = {
  title: "Components/CheckoutBanner",
  component: CheckoutBanner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckoutBanner>;

export const Default: Story = {
  render: () => <CheckoutBanner />,
};
