import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./header";
import { MemoryRouter } from "react-router-dom";

describe("header test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    ["Homepage", "Autorin", "Blog", "Bibliothek", "Karten"].map((linkName) => {
      expect(screen.getByRole("link", { name: linkName })).toBeInTheDocument();
    });
  });
});
