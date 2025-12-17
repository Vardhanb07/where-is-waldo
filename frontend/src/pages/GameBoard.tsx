import GameNavbar from "../components/GameNavbar";
import { useTheme } from "../utils/hooks";
import ImageDisplay from "../components/ImageDisplay";
import { useParams } from "react-router";
import NoMatch from "./NoMatch";

export default function GameBoard() {
  const { theme } = useTheme();
  const { id } = useParams();

  if (!id) {
    return <NoMatch />;
  }

  const imageId = parseInt(id);

  if (imageId < 1 || imageId > 5) {
    return <NoMatch />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-full pt-2 flex flex-col w-full`}
    >
      <GameNavbar imageId={imageId}/>
      <hr />
      <ImageDisplay imageId={imageId}/>
    </div>
  );
}
