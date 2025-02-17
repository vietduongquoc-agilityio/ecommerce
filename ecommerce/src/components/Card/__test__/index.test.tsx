import { render } from "@testing-library/react";
import ItemCard from "../";

describe("ItemCard Component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ItemCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
