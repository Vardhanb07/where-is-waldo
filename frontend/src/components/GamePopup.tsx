import { useEffect } from "react";
import type { GamePopupPropTypes } from "@/src/utils/types";
import {
  useGetImagesToBeFound,
  useTheme,
  useScore,
  useGameProgress,
} from "@/src/utils/hooks";
import ImageToBeFound from "@/src/components/ImageToBeFound";
import { checkPositions } from "@/src/utils/checkPositions";
import closeLightModeImage from "@/src/assets/images/theme-images/close_light_mode.svg";
import closeDarkModeImage from "@/src/assets/images/theme-images/close_dark_mode.svg";
import instance from "@/src/utils/api";
import clsx from "clsx";

export default function GamePopup({
  showGamePopup,
  setShowGamePopup,
  imageId,
  setShowIncorrectMatchPopup,
  mouseClickPosition,
  setShowErrorPopup,
  setShowCorrectPopup,
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
  console.log(currentNotCompletedSnapsOfImages);
  return (
    <div
      className={clsx(
        "fixed right-3/7 top-1/9 border p-4 text-xl font-jbmono",
        {
          "bg-gray-950 text-white selection:bg-white selection:text-black":
            theme === "dark",
          "bg-white text-black selection:bg-gray-950 selection:text-white":
            theme === "light",
        }
      )}
    >
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
            currentNotCompletedSnapsOfImages[imageId - 1].includes(
              index + 1
            ) && (
              <ImageToBeFound
                image={src}
                key={index}
                onClick={() => {
                  if (checkPositions(imageId, index, x, y)) {
                    try {
                      sendUpdateRequest(index);
                      updateCurrentNotCompletedSnapsOfImages(
                        imageId,
                        index + 1
                      );
                      incrementScore();
                      setShowCorrectPopup(true);
                      if (
                        currentNotCompletedSnapsOfImages[imageId - 1].length ==
                        0
                      )
                        updateCurrentNotCompletedImages(imageId);
                    } catch (_err: unknown) {
                      setShowErrorPopup(true);
                    }
                  } else {
                    setShowIncorrectMatchPopup(true);
                  }
                  setShowGamePopup(false);
                }}
                className="hover:border-2"
              />
            )
          );
        })}
      </div>
    </div>
  );
}
