import map1 from "../../assets/map1.jpg";
import { useState } from "react";

import "./map-with-pop-up.scss";

interface IMapPopUpProps {
  onClick: () => void;
  image: string;
}

export const MapWithPopUp: React.FC<IMapPopUpProps> = ({ onClick, image }) => {
  return (
    <div className="map-with-pop-up">
      <button type="button" className="btn btn-map" onClick={() => onClick()}>
        <img src={image} alt="image of a map" />
      </button>
    </div>
  );
};
