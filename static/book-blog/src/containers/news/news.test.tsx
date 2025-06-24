import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { News } from "./news";
import { MemoryRouter } from "react-router-dom";

describe("news test", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Homepage" })).toBeInTheDocument;
  });
});
