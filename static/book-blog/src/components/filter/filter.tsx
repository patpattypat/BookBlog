import React, { useState } from "react";

export type FilterOption = {
  label: string;
  value: string;
};

interface IFilterDropdown {
  filterName: string;
  filterOptions: FilterOption[];
  onChange: (selected: string[]) => void;
}

const FilterDropdown: React.FC<IFilterDropdown> = ({
  filterName,
  filterOptions,
  onChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!selectedFilters.includes(value)) {
      const updated = [...selectedFilters, value];
      setSelectedFilters(updated);
      onChange(
        updated.map(
          (filterName) =>
            filterOptions.find(
              (filterOption) => filterOption.value === filterName,
            )!!.label,
        ),
      );
    }
    e.target.value = "";
  };

  const removeFilter = (value: string) => {
    const updated = selectedFilters.filter((f) => f !== value);
    setSelectedFilters(updated);
    onChange(
      updated.map(
        (filterName) =>
          filterOptions.find(
            (filterOption) => filterOption.value === filterName,
          )!!.label,
      ),
    );
  };

  return (
    <div>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          {filterName}
        </option>
        {filterOptions.map((opt) => (
          <option key={opt.label} value={opt.value}>
            {opt.value}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "10px" }}>
        {selectedFilters.map((filter) => (
          <span key={filter} className="pill">
            {filter}
            <button onClick={() => removeFilter(filter)}>✕</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
