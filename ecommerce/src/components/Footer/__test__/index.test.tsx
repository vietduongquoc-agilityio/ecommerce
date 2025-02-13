import { render } from "@testing-library/react";
import Footer from "../index";

describe("Footer Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
