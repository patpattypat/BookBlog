import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ComingSoonPage } from "./coming-soon";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("coming-soon test", () => {
  it("should render", () => {
    render(
      <MemoryRouter initialEntries={[`/bla`]}>
        <Routes>
          <Route path="/bla" element={<ComingSoonPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByText("Baustelle unter Konstruktion"),
    ).toBeInTheDocument();
  });
});
