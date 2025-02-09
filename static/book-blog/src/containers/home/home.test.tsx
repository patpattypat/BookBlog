import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./home";
import { MemoryRouter, Routes, Route } from "react-router-dom";
const each = require("jest-each").default;

describe("home test", () => {
  const renderHome = () =>
    render(
      <MemoryRouter initialEntries={[`/home`]}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<div>news page</div>} />
          <Route path="/bibliothek" element={<div>bibliothek page</div>} />
          <Route path="/autorin" element={<div>autorin page</div>} />
          <Route path="/blog" element={<div>blog page</div>} />
          <Route path="/karten" element={<div>karten page</div>} />
        </Routes>
      </MemoryRouter>,
    );

  it("renders", () => {
    renderHome();
    expect(screen.getAllByRole("img").length).toEqual(9);
  });

  each([
    ["Events und Neuigkeiten", "news page"],
    ["Kurzgeschichten", "bibliothek page"],
    ["Über mich", "autorin page"],
    ["Blog", "blog page"],
    ["Karten", "karten page"],
  ]).it("should navigate to %buttonName", (buttonName, expectedContent) => {
    renderHome();

    let buttonElement = screen.getByRole("button", {
      name: buttonName,
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText(expectedContent)).toBeInTheDocument;
  });
});
