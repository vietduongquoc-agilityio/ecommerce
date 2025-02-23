import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import ItemCard from "..";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ItemCard Component", () => {
  const mockRouter = { push: jest.fn() };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const mockItem = {
    name: "Test Product",
    description: "This is a test product",
    price: 100000,
    image: "/test-image.jpg",
  };

  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<ItemCard id={0} {...mockItem} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display correct product details", () => {
    render(<ItemCard id={0} {...mockItem} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("Rp 100.000")).toBeInTheDocument();
  });
});
