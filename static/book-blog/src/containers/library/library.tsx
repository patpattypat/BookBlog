import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import "./library.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import FilterDropdown, { FilterOption } from "components/filter/filter";
import data from "../../assets/library-data.json";

export const Library: React.FC = () => {
  const navigate = useNavigate();
  const filterOptions = data.filterOptions;
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  // setActiveFilters triggers rerender which updates the filteredItems
  const filteredItems = data.shortStories.filter((item) => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(item.class);
  });

  return (
    <div className="library">
      <Header />
      <div className="content">
        <div className="library__title">Kurzgeschichten</div>
        <div className="filter">
          Filter
          <FilterDropdown
            filterName={"Projekte"}
            filterOptions={filterOptions}
            onChange={handleFilterChange}
          />
        </div>

        <div className="grid-container">
          {filteredItems.map((item, idx) => (
            <div className="grid-item" key={idx}>
              <img src={item.image} alt={item.alt} />
              <button
                type="button"
                className="btn btn-grid"
                onClick={() => navigate(item.path)}
              >
                <span className={`text`}>{item.text}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
