import { useEffect } from "react";
import type { PopupPropTypes } from "../utils/types";

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
  return (
    <div
      className={`fixed right-1/10 bottom-1/7 border p-4 text-xl ${className}`}
    >
      <p>{content}</p>
    </div>
  );
}
