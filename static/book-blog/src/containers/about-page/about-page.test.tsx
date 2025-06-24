import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AboutPage } from "./about-page";
import { MemoryRouter } from "react-router-dom";
import { filterOptions, shortStories } from "mapper";
import { BookProvider } from "context";

describe("about-page test", () => {
  const contextValues = {
    author: ["Paragraph 1 about the author.", "Paragraph 2 about the author."],
    filterOptions,
    shortStories,
  };

  it("renders", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter>
          <AboutPage />
        </MemoryRouter>
      </BookProvider>,
    );
    contextValues.author.forEach((authorText) => {
      expect(screen.getByText(authorText)).toBeInTheDocument();
    });
  });

  it("renders author paragraphs from aboutData", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter>
          <AboutPage />
        </MemoryRouter>
      </BookProvider>,
    );

    // Check image alt attribute
    expect(screen.getByAltText("Portrait of the author")).toBeInTheDocument();
  });
});
