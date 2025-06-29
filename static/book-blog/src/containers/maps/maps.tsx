import React, { useState, useCallback } from "react";
import { MapWithPopUp, PopUp } from "../../components";
import { useBookContext } from "context";
import "./maps.scss";

export const Maps: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedMap, setSelectedMap] = useState<{
    imageUrl: string;
    imageAlt: string;
    title: string;
  } | null>(null);
  const { maps } = useBookContext();

  const selectImage = useCallback(
    (imageUrl: string, imageAlt: string, title: string) => {
      setSelectedMap({ imageUrl, imageAlt, title });
      setShowPopUp(true);
    },
    [],
  );

  const closePopUp = useCallback(() => {
    setShowPopUp(false);
    setSelectedMap(null);
  }, []);

  const handleKeyDown = (
    event: React.KeyboardEvent,
    imageUrl: string,
    imageAlt: string,
    title: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectImage(imageUrl, imageAlt, title);
    }
  };

  return (
    <div className="maps">
      <div className="maps__content">
        {maps.map(({ imageUrl, imageAlt, title }, index) => (
          <div
            key={index}
            className="grid-item"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, imageUrl, imageAlt, title)}
            aria-label={`Open popup for ${title}`}
          >
            <MapWithPopUp
              imageUrl={imageUrl}
              imageAlt={imageAlt}
              onClick={() => selectImage(imageUrl, imageAlt, title)}
            />
          </div>
        ))}
      </div>

      {showPopUp && selectedMap && (
        <PopUp
          onClose={closePopUp}
          imageUrl={selectedMap.imageUrl}
          imageAlt={selectedMap.imageAlt}
          title={selectedMap.title}
        />
      )}
    </div>
  );
};
