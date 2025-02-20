import type { Meta, StoryObj } from "@storybook/react";
import { ItemCard } from "..";

const meta: Meta<typeof ItemCard> = {
  title: "Components/ItemCard",
  component: ItemCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {
  render: () => (
    <ItemCard
      name={"Leviosa"}
      description={"Stylist cafa chair"}
      price={2500000}
      image={""}
      id={2}
    />
  ),
};
