import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../";

describe("Pagination Component", () => {
  it("renders correctly with default props", () => {
    const { asFragment } = render(
      <Pagination
        currentPage={1}
        setCurrentPage={() => {}}
        pageSize={10}
        pageCount={5}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with many pages", () => {
    const { asFragment } = render(
      <Pagination
        currentPage={3}
        setCurrentPage={() => {}}
        pageSize={10}
        pageCount={10}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
