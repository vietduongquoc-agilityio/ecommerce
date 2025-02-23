import { Meta, StoryObj } from "@storybook/react";
import Input from "./";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    className: "",
  },
  argTypes: {
    typeInput: {
      control: "radio",
      options: ["text", "number"],
    },
  },
} as Meta<typeof Input>;

export const TextInput: StoryObj<typeof Input> = {
  args: {
    typeInput: "text",
  },
};

export const NumberInput: StoryObj<typeof Input> = {
  args: {
    typeInput: "number",
    placeholder: "Enter number...",
  },
};
