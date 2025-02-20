import { Meta, StoryObj } from "@storybook/react";
import InformationProduct from "./";

const meta: Meta<typeof InformationProduct> = {
  title: "Components/InformationProduct",
  component: InformationProduct,
};

export default meta;

type Story = StoryObj<typeof InformationProduct>;

export const Default: Story = {};
