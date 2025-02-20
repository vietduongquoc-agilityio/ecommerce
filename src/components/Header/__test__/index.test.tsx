import { render } from "@testing-library/react";
import Header from "../";

describe("Header Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
