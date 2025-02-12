import React from "react";
import { render } from "@testing-library/react";
import Header from "@/components/Header";
import { Theme } from "@radix-ui/themes"; 
import "@testing-library/jest-dom";

describe("Header component", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <Theme>
        <Header />
      </Theme>
    );
    expect(container).toMatchSnapshot();
  });
});
