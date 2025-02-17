import React from "react";
import { render } from "@testing-library/react";
import Slider from "../index";

describe("Slider component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText } = render(<Slider />);
    expect(
      getByText("50+ Beautiful rooms inspiration")
    ).toBeInTheDocument();
  });

  it("renders image correctly", () => {
    const { getByAltText } = render(<Slider />);
    expect(getByAltText("slide-0")).toBeInTheDocument();
  });
});
