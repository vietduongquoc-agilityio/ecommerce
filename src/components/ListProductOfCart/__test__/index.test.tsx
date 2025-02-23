import { render } from "@testing-library/react";
import ListProductOfCard from "../";

describe("ListProductOfCard Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ListProductOfCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
