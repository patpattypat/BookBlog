import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NewsList } from "./news-list";

describe("news-list test", () => {
  it("renders list", () => {
    render(<NewsList />);
    expect(screen.getByText("Events und Neuigkeiten")).toBeInTheDocument();
  });
});
