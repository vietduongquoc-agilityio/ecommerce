import React from "react";
import { render } from "@testing-library/react";
import FilterShowing from "../";

describe("FilterShowing Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<FilterShowing />);
    expect(asFragment()).toMatchSnapshot();
  });
});
