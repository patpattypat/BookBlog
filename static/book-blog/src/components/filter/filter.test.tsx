import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterDropdown, { FilterOption } from "./filter";

describe("FilterDropdown", () => {
  const filterOptions: FilterOption[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ];

  it("renders dropdown with default option", () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => {}}
      />,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Test" })).toBeInTheDocument();
  });

  it("selects an option adds a pill", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => {}}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "Apple");
    const closeButton = screen.getByRole("button", {
      name: "Remove filter Apple",
    });
    const pill = closeButton.closest(".pill");
    expect(pill).toHaveTextContent(/Apple/i);
  });

  it("selects the same option again does not duplicate pills", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => {}}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "Banana");
    await userEvent.selectOptions(select, "Banana");
    expect(screen.getAllByText("Banana")).toHaveLength(2);
  });

  it("clicks ✕ removes a pill", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => {}}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "Orange");
    const closeButton = screen.getByRole("button", {
      name: "Remove filter Orange",
    });
    await userEvent.click(closeButton);
    expect(
      screen.queryByRole("button", { name: "Remove filter Orange" }),
    ).not.toBeInTheDocument();
  });

  it("selects an option adds a pill and calls onChange", async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <FilterDropdown
        filterOptions={filterOptions}
        filterName="Projekte"
        onChange={onChangeMock}
      />,
    );

    await user.selectOptions(screen.getByRole("combobox"), "Apple");

    const closeButton = screen.getByRole("button", {
      name: "Remove filter Apple",
    });
    const pill = closeButton.closest(".pill");
    expect(pill).toHaveTextContent(/apple/i);
    expect(onChangeMock).toHaveBeenCalledWith(["Apple"]);
  });

  it("selects same option twice does not duplicate pill or call onChange again", async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <FilterDropdown
        filterOptions={filterOptions}
        filterName="Projekte"
        onChange={onChangeMock}
      />,
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "Apple");
    await user.selectOptions(select, "Apple");

    expect(screen.getAllByText("Apple")).toHaveLength(2);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("clicks ✕ removes the pill and calls onChange", async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <FilterDropdown
        filterOptions={filterOptions}
        filterName="Projekte"
        onChange={onChangeMock}
      />,
    );

    await user.selectOptions(screen.getByRole("combobox"), "Apple");
    const closeBtn = screen.getByRole("button", {
      name: "Remove filter Apple",
    });
    await user.click(closeBtn);

    expect(screen.getAllByText("Apple")).toHaveLength(1);
    expect(
      screen.queryByRole("button", { name: "Remove filter Apple" }),
    ).not.toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
});
