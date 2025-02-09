import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AboutPage } from "./about-page";
import { MemoryRouter } from "react-router-dom";

describe("about-page test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: "header.svg" }),
    ).toBeInTheDocument();
  });
});
