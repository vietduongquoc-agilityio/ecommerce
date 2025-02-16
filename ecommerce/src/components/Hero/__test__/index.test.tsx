import { render } from "@testing-library/react";
import Hero from "../index";

describe("Hero Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
