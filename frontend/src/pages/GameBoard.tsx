import Navbar from "../components/Navbar";
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

  if (imageId < 0 && imageId > 5) {
    return <NoMatch />;
  }

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
      } h-screen pt-2`}
    >
      <Navbar />
      <hr />
      <ImageDisplay imageId={imageId}/>
    </div>
  );
}
