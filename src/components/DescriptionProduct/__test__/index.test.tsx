import { render } from "@testing-library/react";
import DescriptionProduct from "../";

describe("DescriptionProduct", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<DescriptionProduct />);
    expect(asFragment()).toMatchSnapshot();
  });
});
