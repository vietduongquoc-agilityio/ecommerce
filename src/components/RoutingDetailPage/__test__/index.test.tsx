import { render, screen } from "@testing-library/react";
import RoutingDetailPage from "../";

describe("RoutingDetailPage", () => {
  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<RoutingDetailPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Asgaard sofa")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
