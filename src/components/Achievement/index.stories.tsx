import { Meta, StoryFn } from "@storybook/react";
import Achievement from "./";
import Quality from "@/assets/Images/Shop-quality.png";
import Protection from "@/assets/Images/Shop-protection.png";
import Shipping from "@/assets/Images/Shop-shipping.png";
import Support from "@/assets/Images/Shop-support.png";

export default {
  title: "Components/Achievement",
  component: Achievement,
  tags: ["autodocs"],
  args: {
    items: [
      {
        image: Quality,
        alt: "quality",
        title: "High Quality",
        description: "crafted from top materials",
      },
      {
        image: Protection,
        alt: "protection",
        title: "Warranty Protection",
        description: "Over 2 years",
      },
      {
        image: Shipping,
        alt: "shipping",
        title: "Free Shipping",
        description: "Order over 150 $",
      },
      {
        image: Support,
        alt: "support",
        title: "24 / 7 Support",
        description: "Dedicated support",
      },
    ],
  },
} as Meta;

const Template: StoryFn = (args) => <Achievement {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      image: Quality,
      alt: "quality",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      image: Protection,
      alt: "protection",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      image: Shipping,
      alt: "shipping",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      image: Support,
      alt: "support",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ],
};
