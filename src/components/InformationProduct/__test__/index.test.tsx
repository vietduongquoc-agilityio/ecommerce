import { render } from "@testing-library/react";
import InformationProduct from "../";

describe("InformationProduct", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<InformationProduct />);
    expect(asFragment()).toMatchSnapshot();
  });
});
