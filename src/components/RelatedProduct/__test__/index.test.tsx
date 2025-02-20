import React from "react";
import { render } from "@testing-library/react";
import Related from "../index";

describe("Related Snapshot Test", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Related />);
    expect(asFragment()).toMatchSnapshot();
  });
});
