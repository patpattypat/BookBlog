import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PopUp } from "./pop-up";

describe("pop-up test", () => {
  it("renders title and image", () => {
    const mockData = {
      image: "mock-image.json",
      title: "this is a mock title",
      onClose: jest.fn(),
    };
    render(
      <PopUp
        title={mockData.title}
        image={mockData.image}
        onClose={mockData.onClose}
      />,
    );

    const titleElement = screen.getByText(mockData.title);
    expect(titleElement).toBeInTheDocument();
    const imageElement = screen.getByRole("img", { name: mockData.image });
    expect(imageElement).toBeInTheDocument();
  });

  it("should call the onClose function if button is pressed", () => {
    const mockData = {
      image: "mock-image.json",
      title: "this is a mock title",
      onClose: jest.fn(),
    };
    render(
      <PopUp
        title={mockData.title}
        image={mockData.image}
        onClose={mockData.onClose}
      />,
    );

    const buttonElement = screen.getByRole("button", { name: "Close" });
    fireEvent.click(buttonElement);

    expect(mockData.onClose).toBeCalledTimes(1);
  });
});
