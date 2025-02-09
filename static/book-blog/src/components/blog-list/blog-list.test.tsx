import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BlogList } from "./blog-list";

describe("blog-list test", () => {
  it("renders list", () => {
    render(<BlogList />);

    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("should have all entries as a single list Entry", () => {
    render(<BlogList />);

    expect(screen.getByText("This is an old entry")).toBeInTheDocument();
  });
});
