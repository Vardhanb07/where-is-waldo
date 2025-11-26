import ImagePreview from "./ImagePreview";

const imageNames = [
  "Space Colony Chaos",
  "The ski slopes of anarchy",
  "Factory",
  "Beach",
];

export default function HomeContent() {
  return (
    <div className="flex flex-col p-3 font-jbmono">
      <p className="text-xl text-center mb-3">Choose a image and start playing!</p>
      {imageNames.map((imageName, index) => {
        index++;
        return <ImagePreview imageName={imageName} id={index} key={index} />;
      })}
    </div>
  );
}
