import { render } from "@testing-library/react";
import OurProduct from "../";

describe("OurProduct Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<OurProduct />);
    expect(asFragment()).toMatchSnapshot();
  });
});
