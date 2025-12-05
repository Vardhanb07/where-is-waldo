import type { ImagesToBeFoundPropTypes } from "../utils/types";
import { useGetImagesToBeFound } from "../utils/hooks";
import ImageToBeFound from "./ImageToBeFound";

export default function ImagesToBeFound({
  parentImageId,
}: ImagesToBeFoundPropTypes) {
  const { getImagesToBeFound } = useGetImagesToBeFound();
  const images = getImagesToBeFound(parentImageId);
  return (
    <div className="flex-1 flex gap-2">
      {images.map((image, index) => {
        return <ImageToBeFound key={index} image={image} />;
      })}
    </div>
  );
}
