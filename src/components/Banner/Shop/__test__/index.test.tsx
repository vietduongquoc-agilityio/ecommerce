import { render } from "@testing-library/react";
import ShopBanner from "..";

describe("ShopBanner Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<ShopBanner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
