import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MapWithPopUp } from "./map-with-pop-up";

describe("map-with-pop-up test", () => {
  it("renders image", () => {
    const mockData = { image: "mock-image.json", onClick: jest.fn() };
    render(<MapWithPopUp image={mockData.image} onClick={mockData.onClick} />);

    const imageElement = screen.getByRole("img", {
      name: `image of a ${mockData.image}`,
    });
    expect(imageElement).toBeInTheDocument();
  });

  it("should call the onClick function if image is pressed", () => {
    const mockData = { image: "mock-image.json", onClick: jest.fn() };
    render(<MapWithPopUp image={mockData.image} onClick={mockData.onClick} />);

    const buttonElement = screen.getByRole("button", {
      name: `image of a ${mockData.image}`,
    });
    fireEvent.click(buttonElement);

    expect(mockData.onClick).toBeCalledTimes(1);
  });
});
