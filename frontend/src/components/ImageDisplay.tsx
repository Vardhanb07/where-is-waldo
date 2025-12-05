import type { ImageDisplayPropTypes } from "../utils/types";
import { useGetImage } from "../utils/hooks";
import { useState } from "react";
import ImageTooltip from "./ImageTooltip";

export default function ImageDisplay({ imageId }: ImageDisplayPropTypes) {
  const { getImage } = useGetImage();
  const image = getImage(imageId);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onClick={() => {
        setShowTooltip(true);
      }}
      onMouseMove={(e) => {
        setMousePosition({
          ...mousePosition,
          x: e.pageX - 15,
          y: e.pageY - 15,
        });
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
    >
      <img src={image} alt="game-image" />
      {showTooltip && <ImageTooltip mousePosition={mousePosition} />}
    </div>
  );
}
