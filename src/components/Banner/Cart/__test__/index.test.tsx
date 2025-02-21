import { render } from "@testing-library/react";
import CartBanner from "..";

describe("CartBanner Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<CartBanner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
