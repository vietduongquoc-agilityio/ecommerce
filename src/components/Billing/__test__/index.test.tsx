import React from "react";
import { render } from "@testing-library/react";
import BillingForm from "../";

describe("BillingForm Snapshot Test", () => {
  it("renders BillingForm correctly", () => {
    const { asFragment } = render(<BillingForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
