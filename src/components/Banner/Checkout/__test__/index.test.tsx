import { render } from "@testing-library/react";
import CheckoutBanner from "..";

describe("CheckoutBanner Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<CheckoutBanner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
