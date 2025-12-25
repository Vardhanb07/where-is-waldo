import type { ImageDisplayPropTypes } from "../utils/types";
import { useGetImage } from "../utils/hooks";
import { useState } from "react";
import ImageTooltip from "./ImageTooltip";

export default function ImageDisplay({
  imageId,
  setShowGamePopup,
  mousePosition,
  setMousePosition,
}: ImageDisplayPropTypes) {
  const { getImage } = useGetImage();
  const image = getImage(imageId);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="flex-3 p-10">
      <div
        className="flex h-full justify-center items-center"
        onMouseMove={(e) => {
          setMousePosition({
            ...mousePosition,
            x: e.pageX - 15,
            y: e.pageY - 15,
          });
        }}
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
        onClick={() => {
          setShowGamePopup(true);
        }}
      >
        <img src={image} alt="game-image" />
        {showTooltip && <ImageTooltip mousePosition={mousePosition} />}
      </div>
    </div>
  );
}
