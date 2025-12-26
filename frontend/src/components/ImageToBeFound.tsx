import type { ImageToBeFoundPropTypes } from "../utils/types";

export default function ImageToBeFound({
  image,
  onClick,
  className,
}: ImageToBeFoundPropTypes) {
  return (
    <div className="flex-1 flex" onClick={onClick}>
      <img src={image} alt="to-find-image" className={className} />
    </div>
  );
}
