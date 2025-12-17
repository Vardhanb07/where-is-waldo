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
        className="flex h-full justify-center items-center"
      >
        <img
          src={image}
          alt="game-image"
          style={{
            width: `${window.innerWidth - 130}px`,
            height: `${window.innerHeight - 130}px`,
          }}
          className=""
        />
        {showTooltip && <ImageTooltip mousePosition={mousePosition} />}
      </div>
    </div>
  );
}
