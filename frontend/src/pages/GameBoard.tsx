import GameNavbar from "@/src/components/GameNavbar";
import { useTheme } from "@/src/utils/hooks";
import ImageDisplay from "@/src/components/ImageDisplay";
import { useParams } from "react-router";
import NoMatch from "@/src/pages/NoMatch";
import { useState } from "react";
import GamePopup from "@/src/components/GamePopup";
import Popup from "@/src/components/Popup";
import clsx from "clsx";

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
  const [showIncorrectMatchPopup, setShowIncorrectMatchPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showCorrectMatch, setShowCorrectMatch] = useState(false);
  const [mouseClickPosition, setMouseClickPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      className={clsx(" h-full pt-2 flex flex-col w-full", {
        "bg-gray-950 text-white selection:text-black selection:bg-white":
          theme === "dark",
        "bg-white text-black selection:text-white selection:bg-black":
          theme === "light",
      })}
    >
      <GameNavbar imageId={imageId} />
      <ImageDisplay
        imageId={imageId}
        setShowGamePopup={setShowGamePopup}
        mouseClickPosition={mouseClickPosition}
        setMouseClickPosition={setMouseClickPosition}
      />
      {showGamePopup && (
        <GamePopup
          showGamePopup={showGamePopup}
          setShowGamePopup={setShowGamePopup}
          imageId={imageId}
          setShowIncorrectMatchPopup={setShowIncorrectMatchPopup}
          mouseClickPosition={mouseClickPosition}
          setShowErrorPopup={setShowErrorPopup}
          setShowCorrectPopup={setShowCorrectMatch}
        />
      )}
      {showIncorrectMatchPopup && (
        <Popup
          content="Incorrect match!"
          showPopup={showIncorrectMatchPopup}
          setShowPopup={setShowIncorrectMatchPopup}
        />
      )}
      {showErrorPopup && (
        <Popup
          content="Something went wrong, Please try again!"
          showPopup={showErrorPopup}
          setShowPopup={setShowErrorPopup}
        />
      )}
      {showCorrectMatch && (
        <Popup
          content="Correct match!"
          showPopup={showCorrectMatch}
          setShowPopup={setShowCorrectMatch}
        />
      )}
    </div>
  );
}
