import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FilterShowing from ".";

export default {
  title: "Components/FilterShowing",
  component: FilterShowing,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn = () => <FilterShowing />;

export const Default = Template.bind({});
