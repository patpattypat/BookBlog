import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Maps } from "./maps";
import { MemoryRouter } from "react-router-dom";

describe("maps test", () => {
  it("should open popup on click on map", () => {
    render(
      <MemoryRouter>
        <Maps />
      </MemoryRouter>,
    );
    expect(screen.queryByText("map 1")).not.toBeInTheDocument;
    expect(screen.queryByText("map 2")).not.toBeInTheDocument;

    let buttonElement = screen.getByRole("button", {
      name: `image of a map1.jpg`,
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText("map 1")).toBeInTheDocument;

    buttonElement = screen.getByRole("button", {
      name: `image of a map2.jpg`,
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText("map 2")).toBeInTheDocument;
    expect(screen.queryByText("map 1")).not.toBeInTheDocument;
  });
  it("should close popup on click", () => {
    render(
      <MemoryRouter>
        <Maps />
      </MemoryRouter>,
    );

    let buttonElement = screen.getByRole("button", {
      name: `image of a map1.jpg`,
    });
    fireEvent.click(buttonElement);

    expect(screen.getByText("map 1")).toBeInTheDocument;

    buttonElement = screen.getByRole("button", {
      name: `Close`,
    });
    fireEvent.click(buttonElement);

    expect(screen.queryByText("map 1")).not.toBeInTheDocument;
  });
});
