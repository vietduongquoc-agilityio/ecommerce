import { render } from "@testing-library/react";
import CartPopover from "../index";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
describe("CartPopover Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = render(<CartPopover />);
    expect(asFragment()).toMatchSnapshot();
  });
});
