import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ListEntry } from "./list-entry";

describe("list-entry test", () => {
  it("renders list", () => {
    const text = "test text";
    render(<ListEntry text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should have optional entries", () => {
    const text = "test text";
    const imageUrl = "imageUrl";
    const date = "10.10.25";
    const title = "title";
    render(
      <ListEntry text={text} imageUrl={imageUrl} date={date} title={title} />,
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", imageUrl);
    expect(screen.getByText(`Date: ${date}`)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
