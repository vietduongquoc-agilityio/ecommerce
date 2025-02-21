import { render } from "@testing-library/react";
import ListProductOfCart from "../";

describe("ListProductOfCart", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<ListProductOfCart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
