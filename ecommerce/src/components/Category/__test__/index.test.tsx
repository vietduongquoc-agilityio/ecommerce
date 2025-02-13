import React from "react";
import { render } from "@testing-library/react";
import Category from "../";
import "@testing-library/jest-dom";

describe("Category Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Category />);
    expect(asFragment()).toMatchSnapshot();
  });
});
