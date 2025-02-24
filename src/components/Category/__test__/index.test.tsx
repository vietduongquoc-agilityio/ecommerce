import { render } from "@testing-library/react";
import Category from "../index";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
describe("Category Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<Category />);
    expect(asFragment()).toMatchSnapshot();
  });
});
