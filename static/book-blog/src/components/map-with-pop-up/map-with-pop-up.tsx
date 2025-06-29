import "./map-with-pop-up.scss";

interface IMapPopUpProps {
  onClick: () => void;
  imageUrl: string;
  imageAlt: string;
}

export const MapWithPopUp: React.FC<IMapPopUpProps> = ({
  onClick,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="map-with-pop-up">
      <button type="button" className="btn btn-map" onClick={() => onClick()}>
        <img src={imageUrl} alt={`image of a ${imageAlt}`} />
      </button>
    </div>
  );
};
