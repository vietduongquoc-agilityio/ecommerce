import React from "react";
import { render } from "@testing-library/react";
import Input from "../";

describe("Input Snapshot Test", () => {
  it("renders text input correctly", () => {
    const { asFragment } = render(<Input typeInput="text" placeholder="Enter text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders number input correctly", () => {
    const { asFragment } = render(<Input typeInput="number" placeholder="Enter number" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
