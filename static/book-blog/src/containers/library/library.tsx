import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import "./library.scss";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import FilterDropdown, { FilterOption } from "components/filter/filter";

export const Library: React.FC = () => {
  const navigate = useNavigate();

  const filterOptions: FilterOption[] = [
    { label: 'cats', value: 'Cats' },
    { label: 'dogs', value: 'Dogs' },
    { label: 'other', value: 'other projects' },
  ];

  return (
    <div className="library">
      <Header />
      <div className="content">
        <div className="library__title">Kurzgeschichten</div>
        <div className="filter" >
          Filter
          <FilterDropdown filterName={"Projekte"} filterOptions={filterOptions} />
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <img src="home-pictures/vertical-1.jpg" alt="vertical img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() =>
                navigate("/bibliothek/The-Wizard's-Guide-to-Coffee-Brewing")
              }
            >
              <span className="text aktuelles">
                The Wizard's Guide to Coffee Brewing
              </span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/big-1.jpg" alt="big img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() =>
                navigate(
                  "/bibliothek/The-Chronicles-of-Narnia:-The-Wardrobe-Strikes-Back",
                )
              }
            >
              <span className="text stories">
                The Chronicles of Narnia: The Wardrobe Strikes Back
              </span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-3.jpg" alt="small img 3" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() => navigate("/bibliothek/How-to-Train-Your-Human")}
            >
              <span className="text about">How to Train Your Human</span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/horizontal-1.jpg" alt="horizontal img 1" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() =>
                navigate(
                  "/bibliothek/The-Enchanted-Elbow:-A-Tale-of-Magic-and-Awkwardness",
                )
              }
            >
              <span className="text blog">
                The Enchanted Elbow: A Tale of Magic and Awkwardness
              </span>
            </button>
          </div>
          <div className="grid-item">
            <img src="home-pictures/small-5.jpg" alt="small img 5" />
            <button
              type="button"
              className="btn btn-grid"
              onClick={() =>
                navigate(
                  "/bibliothek/The-Sorcerer's-Incredibly-Long-To-Do-List",
                )
              }
            >
              <span className="text cards">
                The Sorcerer's Incredibly Long To-Do List
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};