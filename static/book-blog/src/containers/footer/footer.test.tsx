import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "./footer";
import { MemoryRouter } from "react-router-dom";

describe("footer test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    ["Impressum", "Kontakt", "instagram-icon.svg", "youtube-icon.svg"].map(
      (linkName) => {
        expect(
          screen.getByRole("link", { name: linkName }),
        ).toBeInTheDocument();
      },
    );
  });
});
