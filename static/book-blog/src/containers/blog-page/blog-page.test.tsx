import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BlogPage } from "./blog-page";
import { MemoryRouter } from "react-router-dom";

describe("blog-page test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <BlogPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
