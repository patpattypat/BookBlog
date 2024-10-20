import React, { useState, useCallback } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { MapWithPopUp, PopUp } from "../../components";
import map1 from "../../assets/map1.jpg";
import map2 from "../../assets/map2.jpg";
import "./maps.scss";

export const Maps: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>();
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>();

  const selectImage = useCallback((image: string, title: string) => {
    setShowPopUp(true);
    setSelectedImage(image);
    setSelectedImageTitle(title);
  }, []);

  return (
    <div className="maps">
      <Header />

      <div className="content">
        <div className="grid-item">
          <MapWithPopUp
            onClick={() => selectImage(map1, "map 1")}
            image={map1}
          />
        </div>
        <div className="grid-item">
          <MapWithPopUp
            onClick={() => selectImage(map2, "map 2")}
            image={map2}
          />
        </div>
      </div>

      {showPopUp && selectedImage && selectedImageTitle && (
        <PopUp
          onClose={() => setShowPopUp(false)}
          image={selectedImage}
          title={selectedImageTitle}
        />
      )}

      <Footer />
    </div>
  );
};
