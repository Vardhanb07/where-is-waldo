import type { ImageToBeFoundPropTypes } from "../utils/types";

export default function ImageToBeFound({ image }: ImageToBeFoundPropTypes) {
  return (
    <div className="flex-1 flex">
      <img src={image} alt="to-find-image" />
    </div>
  );
}
