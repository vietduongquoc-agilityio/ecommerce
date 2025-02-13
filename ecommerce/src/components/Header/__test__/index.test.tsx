import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
