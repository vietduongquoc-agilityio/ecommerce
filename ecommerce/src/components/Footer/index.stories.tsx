import React from "react";
import Footer from "@/components/Footer";
import { Theme } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import "@/components/Footer/style.module.css";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Theme>
      <Footer />
    </Theme>
  ),
};
