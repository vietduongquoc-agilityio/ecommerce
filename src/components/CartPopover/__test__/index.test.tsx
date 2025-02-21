import { render } from "@testing-library/react";
import CartPopover from "../index";

describe("CartPopover Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<CartPopover />);
    expect(asFragment()).toMatchSnapshot();
  });
});
