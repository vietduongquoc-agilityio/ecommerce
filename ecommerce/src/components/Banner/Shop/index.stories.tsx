import type { Meta, StoryObj } from "@storybook/react";
import ShopBanner from "./";

const meta: Meta<typeof ShopBanner> = {
  title: "Components/ShopBanner",
  component: ShopBanner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShopBanner>;

export const Default: Story = {
  render: () => <ShopBanner />,
};
