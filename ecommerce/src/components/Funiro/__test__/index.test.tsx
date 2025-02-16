import { render } from "@testing-library/react";
import Funiro from "../";

describe("Funiro Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Funiro />);
    expect(asFragment()).toMatchSnapshot();
  });
});
