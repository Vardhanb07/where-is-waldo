import ImagePreview from "./ImagePreview";
import { useGameProgress } from "../utils/hooks";

const imageNames = [
  "Space Colony Chaos",
  "The ski slopes of anarchy",
  "Factory",
  "Beach",
];

export default function HomeContent() {
  const { currentNotCompletedImages } = useGameProgress();
  return (
    <div className="flex flex-col p-3 font-jbmono">
      <p className="text-xl text-center mb-3">
        Choose a image and start playing!
      </p>
      {imageNames.map((imageName, index) => {
        return (
          currentNotCompletedImages.includes(index + 1) && (
            <ImagePreview imageName={imageName} id={index + 1} key={index} />
          )
        );
      })}
    </div>
  );
}
