import type { ImageDisplayPropTypes } from "../utils/types";
import { useGetImage } from "../utils/hooks";

export default function ImageDisplay({ imageId }: ImageDisplayPropTypes) {
  const { getImage } = useGetImage();
  const image = getImage(imageId);
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
}
