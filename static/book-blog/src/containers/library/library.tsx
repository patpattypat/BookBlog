import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "components/filter/filter";
import { useBookContext } from "context";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./library.scss";

export const Library: React.FC = () => {
  const navigate = useNavigate();
  const { shortStories, filterOptions } = useBookContext();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  // the setActiveFilters triggers rerender which updates the filteredItems
  const filteredItems = shortStories.filter(
    (item) =>
      activeFilters.length === 0 || activeFilters.includes(item.project),
  );

  return (
    <main className="library" aria-label="Kurzgeschichten Übersicht">
      <h1 className="library__title">Kurzgeschichten</h1>
      <section className="filter">
        <span className="filter__label">Filter:</span>
        <FilterDropdown
          filterName="Projekte"
          filterOptions={filterOptions}
          onChange={handleFilterChange}
        />
      </section>

      <section className="grid-container">
        {filteredItems.map((item, idx) => (
          <div className="grid-item" key={idx}>
            <img
              className="grid-item__image"
              src={item.imageUrl}
              alt={item.imageAlt || item.title}
            />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate(`/bibliothek/${item.id}`)}
              aria-label={`Öffne Kurzgeschichte: ${item.title}`}
            >
              <span className={`text`}>{item.title}</span>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};
