import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import ItemCard from "..";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ItemCard Component", () => {
  const mockRouter = { push: jest.fn() };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const mockItem = {
    id: 1,
    name: "Test Product",
    description: "This is a test product",
    price: 100000,
    image: "/test-image.jpg",
  };

  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<ItemCard {...mockItem} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display correct product details", () => {
    render(<ItemCard {...mockItem} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("Rp 100.000")).toBeInTheDocument();
  });

  it("should navigate to product detail page when 'Add to Cart' is clicked", () => {
    render(<ItemCard {...mockItem} />);

    fireEvent.mouseEnter(screen.getByText("Test Product")); // Hover effect
    const button = screen.getByText("Add to Cart");
    fireEvent.click(button);

    expect(mockRouter.push).toHaveBeenCalledWith("/detail/1");
  });
});
