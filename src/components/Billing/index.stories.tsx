import { Meta, StoryFn, StoryObj } from "@storybook/react";
import BillingForm from "./";

export default {
  title: "Components/BillingForm",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: BillingForm,
} as Meta<typeof BillingForm>;

const Template: StoryFn = (args) => <BillingForm {...args} />;
export const Default = Template.bind({});

Default.args = {};

type Story = StoryObj;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1245px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
