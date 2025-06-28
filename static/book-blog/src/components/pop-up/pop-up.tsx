import React, { useEffect, useRef } from "react";
import "./pop-up.scss";

interface IPopUpProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  onClose: () => void;
}

export const PopUp: React.FC<IPopUpProps> = ({
  onClose,
  imageUrl,
  imageAlt,
  title,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Focus the close button when popup mounts
    closeButtonRef.current?.focus();

    // Close on ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="pop-up"
      role="dialog"
      arial-modal="true"
      aria-labelledby="popup-title"
    >
      <h1 className="pop-up-title fs-5">{title}</h1>
      <button
        type="button"
        className="btn btn-close"
        aria-label="Close popup"
        onClick={onClose}
        ref={closeButtonRef}
      >
        &times;
      </button>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};
