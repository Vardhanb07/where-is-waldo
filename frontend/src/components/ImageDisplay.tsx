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
      >
        <img
          src={image}
          alt="game-image"
          style={{
            width: `${window.innerWidth - 130}px`,
            height: `${window.innerHeight - 130}px`,
          }}
          onMouseEnter={() => {
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setShowTooltip(false);
          }}
        />
        {showTooltip && <ImageTooltip mousePosition={mousePosition} />}
      </div>
    </div>
  );
}
