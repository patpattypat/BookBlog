import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AboutPage } from "./about-page";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../assets/about-data.json", () => ({
  author: ["Paragraph 1 about the author.", "Paragraph 2 about the author."],
}));

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
  it("renders author paragraphs from aboutData", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText("Paragraph 1 about the author."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Paragraph 2 about the author."),
    ).toBeInTheDocument();

    // Check image alt attribute
    expect(screen.getByAltText("author")).toBeInTheDocument();
  });
});
