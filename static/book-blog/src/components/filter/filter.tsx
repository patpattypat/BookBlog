import React, { useState } from 'react';

export type FilterOption = {
  label: string;
  value: string;
};

interface IFilterDropdown {
    filterName: string
    filterOptions: FilterOption[]
}

const FilterDropdown: React.FC<IFilterDropdown> = ({filterName, filterOptions}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const option = filterOptions.find(opt => opt.value === selectedValue);
    if (option && !selectedFilters.some(f => f.value === option.value)) {
      setSelectedFilters([...selectedFilters, option]);
    }
    e.target.value = ''; // reset dropdown
  };

  const removeFilter = (value: string) => {
    setSelectedFilters(prev => prev.filter(f => f.value !== value));
  };

  return (
    <div>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          {filterName}
        </option>
        {filterOptions.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '10px' }}>
        {selectedFilters.map(filter => (
          <span
            key={filter.value}
            style={{
              display: 'inline-block',
              padding: '5px 10px',
              backgroundColor: '#e0e0e0',
              borderRadius: '20px',
              marginRight: '8px',
              marginBottom: '8px',
            }}
          >
            {filter.label}
            <button
              onClick={() => removeFilter(filter.value)}
              style={{
                marginLeft: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
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
