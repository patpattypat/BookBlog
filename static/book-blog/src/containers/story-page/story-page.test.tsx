import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StoryPage } from "./story-page";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { blogPosts, filterOptions, shortStories } from "mapper";
import { BookProvider } from "context";

describe("story-page test", () => {
  const contextValues = {
    author: {
      description: [],
      imageUrl: "image",
      imageAlt: "image descripton",
    },
    filterOptions,
    shortStories,
    maps: [],
    news: undefined,
    blogPosts: undefined,
  };

  it("should render", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter
          initialEntries={[`/bibliothek/The-Wizard's-Guide-to-Coffee-Brewing`]}
        >
          <Routes>
            <Route path="/bibliothek/:storyId" element={<StoryPage />} />
          </Routes>
        </MemoryRouter>
      </BookProvider>,
    );

    expect(
      screen.getByText("The Wizard's Guide to Coffee Brewing"),
    ).toBeInTheDocument();
  });

  it("should navigate back on click on top back button", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter initialEntries={[`/bibliothek/test-story`]}>
          <Routes>
            <Route path="/bibliothek/:storyId" element={<StoryPage />} />
            <Route
              path="/bibliothek"
              element={<div>test bibliothek page</div>}
            />
          </Routes>
        </MemoryRouter>
      </BookProvider>,
    );

    const buttonElement = screen.getAllByRole("button", {
      name: `Zurück zur Bibliothek`,
    })[0];
    fireEvent.click(buttonElement);

    expect(screen.queryByText("test bibliothek page")).toBeInTheDocument;
  });

  it("should navigate back on click on bottom back button", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter initialEntries={[`/bibliothek/test-story`]}>
          <Routes>
            <Route path="/bibliothek/:storyId" element={<StoryPage />} />
            <Route
              path="/bibliothek"
              element={<div>test bibliothek page</div>}
            />
          </Routes>
        </MemoryRouter>
      </BookProvider>,
    );

    const buttonElement = screen.getAllByRole("button", {
      name: `Zurück zur Bibliothek`,
    })[1];
    fireEvent.click(buttonElement);

    expect(screen.queryByText("test bibliothek page")).toBeInTheDocument;
  });
});
