import React from "react";
import { render } from "@testing-library/react";
import Footer from "@/components/Footer";
import { Theme } from "@radix-ui/themes";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <Theme>
        <Footer />
      </Theme>
    );
    expect(container).toMatchSnapshot();
  });
});
