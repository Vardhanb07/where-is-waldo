import type { ImageDisplayPropTypes } from "../utils/types";
import { useGetImage } from "../utils/hooks";
import { useState } from "react";
import ImageTooltip from "./ImageTooltip";

export default function ImageDisplay({
  imageId,
  setShowGamePopup,
  mouseClickPosition,
  setMouseClickPosition,
}: ImageDisplayPropTypes) {
  const { getImage } = useGetImage();
  const image = getImage(imageId);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
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
        onClick={(e) => {
          console.log("component: ImageDisplay");
          console.log(`x: ${e.pageX}, y: ${e.pageY}`);
          setMouseClickPosition({
            ...mouseClickPosition,
            x: e.pageX,
            y: e.pageY,
          });
          setShowGamePopup(true);
        }}
      >
        <img src={image} alt="game-image" />
        {showTooltip && <ImageTooltip mousePosition={mousePosition} />}
      </div>
    </div>
  );
}
