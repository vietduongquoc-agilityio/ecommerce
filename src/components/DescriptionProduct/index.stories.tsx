import { Meta, StoryObj } from "@storybook/react";
import DescriptionProduct from "./";

const meta: Meta<typeof DescriptionProduct> = {
  title: "Components/DescriptionProduct",
  component: DescriptionProduct,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DescriptionProduct>;

export const Default: Story = {};
