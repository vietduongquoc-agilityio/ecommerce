import { Meta, StoryObj } from "@storybook/react";
import Hero from "./";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: "fullscreen",
  },

};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
