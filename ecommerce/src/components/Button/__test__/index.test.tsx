import React from "react";
import { render } from "@testing-library/react";
import Button from "../index";

describe("Button component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Button variant="primary">Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with correct text", () => {
    const { getByText } = render(<Button variant="primary">Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("renders disabled button correctly", () => {
    const { getByText } = render(<Button variant="disabled">Disabled</Button>);
    expect(getByText("Disabled")).toBeInTheDocument();
    expect(getByText("Disabled")).toHaveStyle("cursor: not-allowed");
  });
});
