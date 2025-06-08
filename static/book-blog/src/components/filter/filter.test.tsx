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
        onChange={() => { }}
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
        onChange={() => { }}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "apple");
    const closeButton = screen.getByRole('button', { name: /✕/i });
    const pill = closeButton.closest('.pill');
    expect(pill).toHaveTextContent(/apple/i);
  });

  it("selects the same option again does not duplicate pills", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => { }}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "banana");
    await userEvent.selectOptions(select, "banana");
    expect(screen.getAllByText("banana")).toHaveLength(2);
  });

  test("clicks ✕ removes a pill", async () => {
    render(
      <FilterDropdown
        filterName={"Test"}
        filterOptions={filterOptions}
        onChange={() => { }}
      />,
    );
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "orange");
    const closeButton = screen.getByRole("button", { name: /✕/i });
    await userEvent.click(closeButton);
    expect(screen.queryByRole("button", { name: /✕/i })).not.toBeInTheDocument();
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

    await user.selectOptions(screen.getByRole("combobox"), "apple");

    const closeButton = screen.getByRole('button', { name: /✕/i });
    const pill = closeButton.closest('.pill');
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
    await user.selectOptions(select, "apple");
    await user.selectOptions(select, "apple");

    expect(screen.getAllByText("apple")).toHaveLength(2);
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

    await user.selectOptions(screen.getByRole("combobox"), "apple");
    const closeBtn = screen.getByRole("button", { name: /✕/i });
    await user.click(closeBtn);

    expect(screen.getAllByText("apple")).toHaveLength(1);
    expect(screen.queryByRole("button", { name: /✕/i })).not.toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });
});
