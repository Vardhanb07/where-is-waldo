import { useEffect } from "react";
import type { PopupPropTypes } from "../utils/types";
import { useTheme } from "../utils/hooks";
import closeLightModeImage from "../assets/images/theme-images/close_light_mode.svg";
import closeDarkModeImage from "../assets/images/theme-images/close_dark_mode.svg";

export default function Popup({
  content,
  showPopup,
  setShowPopup,
  className,
}: PopupPropTypes) {
  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 10000);
    }
  }, []);
  const { theme } = useTheme();
  return (
    <div
      className={`fixed right-1/10 bottom-1/7 border p-4 text-xl ${className}`}
    >
      <div className="flex flex-row gap-3 items-center">
        <div
          className="flex h-8 w-8 cursor-pointer"
          onClick={() => {
            setShowPopup(false);
          }}
        >
          {theme === "light" ? (
            <img src={closeDarkModeImage} alt="close-dark-mode-image" />
          ) : (
            <img src={closeLightModeImage} alt="close-light-mode-image" />
          )}
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}
