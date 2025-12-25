import GameNavbar from "../components/GameNavbar";
import { useTheme } from "../utils/hooks";
import ImageDisplay from "../components/ImageDisplay";
import { useParams } from "react-router";
import NoMatch from "./NoMatch";
import { useState } from "react";
import GamePopup from "../components/GamePopup";

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

  const [showGamePopup, setShowGamePopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-950 text-white selection:bg-white selection:text-black"
          : "bg-white text-black selection:bg-black selection:text-white"
      } h-full pt-2 flex flex-col w-full`}
    >
      <GameNavbar imageId={imageId} />
      <ImageDisplay
        imageId={imageId}
        setShowGamePopup={setShowGamePopup}
        mousePosition={mousePosition}
        setMousePosition={setMousePosition}
      />
      {showGamePopup && (
        <GamePopup
          className={`${
            theme === "dark"
              ? "bg-gray-950 text-white selection:bg-white selection:text-black"
              : "bg-white text-black selection:bg-black selection:text-white"
          } font-jbmono`}
          showGamePopup={showGamePopup}
          setShowGamePopup={setShowGamePopup}
          imageId={imageId}
          mousePosition={mousePosition}
        />
      )}
    </div>
  );
}
