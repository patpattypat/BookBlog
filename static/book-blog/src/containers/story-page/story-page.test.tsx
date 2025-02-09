import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StoryPage } from "./story-page";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("story-page test", () => {
  it("should render", () => {
    render(
      <MemoryRouter initialEntries={[`/bibliothek/test-story`]}>
        <Routes>
          <Route path="/bibliothek/:storyId" element={<StoryPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("test-story")).toBeInTheDocument();
  });

  it("should navigate back on click on top back button", () => {
    render(
      <MemoryRouter initialEntries={[`/bibliothek/test-story`]}>
        <Routes>
          <Route path="/bibliothek/:storyId" element={<StoryPage />} />
          <Route path="/bibliothek" element={<div>test bibliothek page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const buttonElement = screen.getAllByRole("button", {
      name: `zurück zu allen Kurzgeschichten`,
    })[0];
    fireEvent.click(buttonElement);

    expect(screen.queryByText("test bibliothek page")).toBeInTheDocument;
  });

  it("should navigate back on click on bottom back button", () => {
    render(
      <MemoryRouter initialEntries={[`/bibliothek/test-story`]}>
        <Routes>
          <Route path="/bibliothek/:storyId" element={<StoryPage />} />
          <Route path="/bibliothek" element={<div>test bibliothek page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const buttonElement = screen.getAllByRole("button", {
      name: `zurück zu allen Kurzgeschichten`,
    })[1];
    fireEvent.click(buttonElement);

    expect(screen.queryByText("test bibliothek page")).toBeInTheDocument;
  });
});
