import React, { useCallback, useState } from "react";
import "./filter.scss";

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
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value;
      if (!selectedValues.includes(selectedValue)) {
        const updatedValues = [...selectedValues, selectedValue];
        console.log(selectedValues, selectedValue);
        setSelectedValues(updatedValues);

        const selectedLabels = updatedValues
          .map((val) => filterOptions.find((opt) => opt.value === val)?.label)
          .filter(Boolean) as string[];

        onChange(selectedLabels);
      }

      // Reset select by setting value to the default option
      e.target.selectedIndex = 0;
    },
    [selectedValues, setSelectedValues],
  );

  const removeFilter = (valueToRemove: string) => {
    const updatedValues = selectedValues.filter((val) => val !== valueToRemove);
    setSelectedValues(updatedValues);

    const selectedLabels = updatedValues
      .map((val) => filterOptions.find((opt) => opt.value === val)?.label)
      .filter(Boolean) as string[];

    onChange(selectedLabels);
  };

  const getLabel = (value: string) =>
    filterOptions.find((opt) => opt.value === value)?.label || value;

  return (
    <div className="filter-dropdown">
      <select onChange={handleSelect}>
        <option value="">{filterName}</option>
        {filterOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="selected-filters">
        {selectedValues.map((value) => (
          <span key={value} className="pill">
            {getLabel(value)}
            <button
              onClick={() => removeFilter(value)}
              aria-label={`Remove filter ${getLabel(value)}`}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
