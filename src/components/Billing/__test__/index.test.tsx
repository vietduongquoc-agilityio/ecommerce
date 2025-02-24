import React from "react";
import { render } from "@testing-library/react";
import BillingForm from "../";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockPush = jest.fn();
describe("BillingForm Snapshot Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("renders BillingForm correctly", () => {
    const { asFragment } = render(<BillingForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
