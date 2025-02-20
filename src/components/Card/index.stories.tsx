import { Meta, StoryFn } from "@storybook/react";
import ItemCard from "./index";

export default {
  title: "Components/ItemCard",
  component: ItemCard,
  argTypes: {
    name: { control: "text" },
    description: { control: "text" },
    price: { control: "number" },
    image: { control: "text" },
  },
} as Meta<typeof ItemCard>;

const Template: StoryFn<typeof ItemCard> = (args) => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Asgaard Sofa",
  description: "A comfortable and stylish sofa",
  price: 1200000,
  image: "/test-image.jpg",
};
