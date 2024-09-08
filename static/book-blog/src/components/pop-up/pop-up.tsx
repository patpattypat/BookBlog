import map1 from "../../assets/map1.jpg";
import "./pop-up.scss";

interface IPopUpProps {
  title: string;
  image: string;
  onClose: () => void;
}

export const PopUp: React.FC<IPopUpProps> = ({ onClose, image, title }) => {
  return (
    <div className="pop-up">
      <h1 className="pop-up-title fs-5">{title}</h1>
      <button
        type="button"
        className="btn btn-close"
        aria-label="Close"
        onClick={() => onClose()}
      >
        x
      </button>
      <img src={image} alt="pop-up of map image" />
    </div>
  );
};
