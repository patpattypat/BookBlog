import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Library } from "./library";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("library test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Library />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("img").length).toEqual(5);
  });
  it("should navigate to story if clicked", () => {
    render(
      <MemoryRouter initialEntries={[`/bibliothek`]}>
        <Routes>
          <Route path="/bibliothek" element={<Library />} />
          <Route
            path="/bibliothek/The-Wizard's-Guide-to-Coffee-Brewing"
            element={<div>test story page</div>}
          />
        </Routes>
      </MemoryRouter>,
    );

    let buttonElement = screen.getByRole("button", {
      name: `The Wizard's Guide to Coffee Brewing`,
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText("test story page")).toBeInTheDocument;
  });
});
