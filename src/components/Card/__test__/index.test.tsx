import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "../index";

// Mocking Next.js Image component
// jest.mock("next/image", () => ({ src, alt }: any) => <img src={src} alt={alt} />);

describe("ItemCard Snapshot Test", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(
      <ItemCard
        name="Syltherine"
        description="Stylish cafe chair"
        price={2500000}
        image="/test-image.jpg"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
