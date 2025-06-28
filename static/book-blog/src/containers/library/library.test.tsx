import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Library } from "./library";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { BookProvider } from "context";
import { filterOptions, shortStories, author, blogPosts } from "mapper";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const actual = jest.requireActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("library test", () => {
  const contextValues = {
    author,
    filterOptions,
    shortStories,
    maps: [],
    news: undefined,
    blogPosts: undefined,
  };

  it("renders", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter>
          <Library />
        </MemoryRouter>
      </BookProvider>,
    );
    expect(screen.getAllByRole("img").length).toEqual(5);
  });

  it("should navigate to story if clicked", () => {
    render(
      <BookProvider value={contextValues}>
        <MemoryRouter initialEntries={["/bibliothek"]}>
          <Routes>
            <Route path="/bibliothek" element={<Library />} />
          </Routes>
        </MemoryRouter>
      </BookProvider>,
    );

    const button = screen.getByRole("button", {
      name: /Öffne Kurzgeschichte: The Sorcerer's Incredibly Long To-Do List/i,
    });

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith(
      "/bibliothek/The-Sorcerer's-Incredibly-Long-To-Do-List",
    );
  });
});
