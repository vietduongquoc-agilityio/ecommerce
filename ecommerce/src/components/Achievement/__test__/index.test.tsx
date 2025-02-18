import React from "react";
import { render } from "@testing-library/react";
import Achievement from "../";

describe("Achievement Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Achievement />);
    expect(asFragment()).toMatchSnapshot();
  });
});
