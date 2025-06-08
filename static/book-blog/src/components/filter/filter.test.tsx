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
    await userEvent.selectOptions(select, "apple");
    expect(screen.getByText("Apple")).toBeInTheDocument();
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
    await userEvent.selectOptions(select, "banana");
    await userEvent.selectOptions(select, "banana");
    expect(screen.getAllByText("Banana")).toHaveLength(1);
  });

  test("clicks ✕ removes a pill", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => {}}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "orange");
    const closeButton = screen.getByRole("button", { name: /✕/i });
    await userEvent.click(closeButton);
    expect(screen.queryByText("Orange")).not.toBeInTheDocument();
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

    await user.selectOptions(screen.getByRole("combobox"), "cards");

    expect(screen.getByText("cards")).toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledWith(["cards"]);
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
    await user.selectOptions(select, "blog");
    await user.selectOptions(select, "blog");

    expect(screen.getAllByText("blog")).toHaveLength(1);
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

    await user.selectOptions(screen.getByRole("combobox"), "stories");
    const closeBtn = screen.getByRole("button", { name: /✕/i });
    await user.click(closeBtn);

    expect(screen.queryByText("stories")).not.toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
});
