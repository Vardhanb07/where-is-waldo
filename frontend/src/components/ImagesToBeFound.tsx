import type { ImagesToBeFoundPropTypes } from "@/src/utils/types";
import { useGetImagesToBeFound, useGameProgress } from "@/src/utils/hooks";
import ImageToBeFound from "@/src/components/ImageToBeFound";

export default function ImagesToBeFound({
  parentImageId,
}: ImagesToBeFoundPropTypes) {
  const { getImagesToBeFound } = useGetImagesToBeFound();
  const { currentNotCompletedSnapsOfImages } = useGameProgress();
  const images = getImagesToBeFound(parentImageId);
  return (
    <div className="flex-1 flex gap-2">
      {images.map((image, index) => {
        return (
          currentNotCompletedSnapsOfImages[parentImageId - 1].includes(
            index + 1
          ) && <ImageToBeFound key={index} image={image} />
        );
      })}
    </div>
  );
}
