import React from "react";
import { render } from "@testing-library/react";
import ProductList from "../index";

describe("ProductList Snapshot Test", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<ProductList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
