import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import map1 from "../../assets/map1.jpg";
import map2 from "../../assets/map2.jpg";
import "./maps.scss";

export const Maps: React.FC = () => {
  return (
    <div className="maps">
      <Header />
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <img src={map1} alt="small img" />
          </div>
          <div className="grid-item">
            <img src={map2} alt="small img 2" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
