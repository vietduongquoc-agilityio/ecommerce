import type { Meta, StoryObj } from "@storybook/react";
import OurProduct from "./";

const meta: Meta<typeof OurProduct> = {
  title: "Components/OurProduct",
  component: OurProduct,
  tags: ['autodocs'], 
};

export default meta;

type Story = StoryObj<typeof OurProduct>;

export const Default: Story = {
  render: () => <OurProduct />,
};
