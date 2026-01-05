import { useEffect } from "react";
import type { GamePopupPropTypes } from "../utils/types";
import {
  useGetImagesToBeFound,
  useTheme,
  useScore,
  useGameProgress,
} from "../utils/hooks";
import ImageToBeFound from "./ImageToBeFound";
import { checkPositions } from "../utils/checkPositions";
import closeLightModeImage from "../assets/images/theme-images/close_light_mode.svg";
import closeDarkModeImage from "../assets/images/theme-images/close_dark_mode.svg";
import instance from "../utils/api";

export default function GamePopup({
  showGamePopup,
  setShowGamePopup,
  className,
  imageId,
  setShowIncorrectMatchPopup,
  mouseClickPosition,
  setShowErrorPopup,
}: GamePopupPropTypes) {
  const { getImagesToBeFound } = useGetImagesToBeFound();
  const toFindImages = getImagesToBeFound(imageId);
  const { x, y } = mouseClickPosition;
  const { score, incrementScore } = useScore();
  const { theme } = useTheme();
  const {
    updateCurrentNotCompletedImages,
    updateCurrentNotCompletedSnapsOfImages,
    currentNotCompletedSnapsOfImages,
  } = useGameProgress();
  useEffect(() => {
    if (showGamePopup) {
      setTimeout(() => {
        setShowGamePopup(false);
      }, 20000);
    }
  }, []);
  const playerToken = localStorage.getItem("player-token");
  async function sendUpdateRequest(snapId: number): Promise<void> {
    await instance.put(
      "/progress",
      {
        score: score + 1,
        imageId: imageId,
        snapId: snapId,
      },
      {
        headers: {
          Authorization: `Bearer ${playerToken}`,
        },
      }
    );
  }
  return (
    <div className={`fixed right-3/7 top-1/9 border p-4 text-xl ${className}`}>
      <div className="flex flex-row gap-3 items-center mb-1">
        <div
          className="flex h-8 w-8 cursor-pointer hover:border"
          onClick={() => {
            setShowGamePopup(false);
          }}
        >
          {theme === "light" ? (
            <img src={closeDarkModeImage} alt="close-dark-mode-image" />
          ) : (
            <img src={closeLightModeImage} alt="close-light-mode-image" />
          )}
        </div>
        <p>Choose your image!</p>
      </div>
      <div className="flex gap-3">
        {toFindImages.map((src, index) => {
          return (
            <ImageToBeFound
              image={src}
              key={index}
              onClick={() => {
                if (checkPositions(imageId, index, x, y)) {
                  incrementScore();
                  try {
                    sendUpdateRequest(index);
                    updateCurrentNotCompletedSnapsOfImages(imageId, index + 1);
                    if (
                      currentNotCompletedSnapsOfImages[imageId - 1].length == 3
                    )
                      updateCurrentNotCompletedImages(imageId);
                  } catch (err: unknown) {
                    setShowErrorPopup(true);
                  }
                } else {
                  setShowIncorrectMatchPopup(true);
                }
                setShowGamePopup(false);
              }}
              className="hover:border-2"
            />
          );
        })}
      </div>
    </div>
  );
}
