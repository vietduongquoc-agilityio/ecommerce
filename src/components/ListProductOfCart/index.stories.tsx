import { Meta, StoryObj } from "@storybook/react";
import ListProductOfCart from "./";

const meta: Meta<typeof ListProductOfCart> = {
  title: "Components/ListProductOfCart",
  component: ListProductOfCart,
};

export default meta;

type Story = StoryObj<typeof ListProductOfCart>;

export const Default: Story = {};
