import { Meta, StoryObj } from "@storybook/react";
import RoutingDetailPage from "./";

const meta: Meta<typeof RoutingDetailPage> = {
  title: "Components/RoutingDetailPage",
  component: RoutingDetailPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RoutingDetailPage>;

export const Default: Story = {};
