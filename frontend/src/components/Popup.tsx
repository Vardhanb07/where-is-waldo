import { useEffect } from "react";
import type { PopupPropTypes } from "@/src/utils/types";
import { useTheme } from "@/src/utils/hooks";
import closeLightModeImage from "@/src/assets/images/theme-images/close_light_mode.svg";
import closeDarkModeImage from "@/src/assets/images/theme-images/close_dark_mode.svg";
import clsx from "clsx";

export default function Popup({
  content,
  showPopup,
  setShowPopup,
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
      className={clsx(
        "fixed right-1/10 bottom-1/7 border p-4 text-xl font-jbmono",
        {
          "bg-gray-950 text-white selection:text-black selection:bg-white":
            theme === "dark",
          "bg-white text-black selection:text-white selection:bg-black":
            theme === "light",
        }
      )}
    >
      <div className="flex flex-row gap-3 items-center">
        <div
          className="flex h-8 w-8 cursor-pointer hover:border"
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
