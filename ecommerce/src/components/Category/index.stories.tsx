import React from "react";
import Category from "../Category";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Category> = {
  title: "Components/Category",
  component: Category,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  render: () => <Category />,
};
