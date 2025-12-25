import { useEffect } from "react";
import type { GamePopupPropTypes } from "../utils/types";
import { useGetImagesToBeFound } from "../utils/hooks";
import ImageToBeFound from "./ImageToBeFound";
import { checkPositions } from "../utils/checkPositions";
import { useScore } from "../utils/hooks";

export default function GamePopup({
  showGamePopup,
  setShowGamePopup,
  className,
  imageId,
  mousePosition,
}: GamePopupPropTypes) {
  const { getImagesToBeFound } = useGetImagesToBeFound();
  const toFindImages = getImagesToBeFound(imageId);
  const { x, y } = mousePosition;
  const { incrementScore } = useScore();
  useEffect(() => {
    if (showGamePopup) {
      setTimeout(() => {
        setShowGamePopup(false);
      }, 20000);
    }
  }, []);
  return (
    <div className={`fixed right-3/7 top-1/9 border p-4 text-xl ${className}`}>
      <p>Choose your image!</p>
      <div className="flex gap-3">
        {toFindImages.map((src, index) => {
          return (
            <ImageToBeFound
              image={src}
              key={index}
              onClick={() => {
                if (checkPositions(imageId, index, x, y)) {
                  incrementScore();
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
