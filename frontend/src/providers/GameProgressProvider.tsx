import { useState } from "react";
import {
  GameProgressContext,
  completedImages,
  completedSnapsOfImages,
} from "../context/GameProgressContext";
import type { GameProgressProviderPropTypes } from "../utils/types";

export function GameProgressProvider({
  children,
}: GameProgressProviderPropTypes) {
  const [currentCompletedImages, setCurrentCompletedImages] =
    useState(completedImages);
  const [currentCompletedSnapsOfImages, setCurrentCompletedSnapsOfImages] =
    useState(completedSnapsOfImages);

  const updateCurrentCompletedImages = (imageId: number) => {
    const images = currentCompletedImages;
    images.push(imageId);
    setCurrentCompletedImages(images);
  };
  const updateCurrentCompletedSnapsOfImages = (
    imageId: number,
    snapId: number
  ) => {
    const snapsOfImages = currentCompletedSnapsOfImages;
    snapsOfImages[imageId - 1].push(snapId);
    setCurrentCompletedSnapsOfImages(snapsOfImages);
  };
  return (
    <GameProgressContext
      value={{
        currentCompletedImages,
        currentCompletedSnapsOfImages,
        updateCurrentCompletedImages,
        updateCurrentCompletedSnapsOfImages,
      }}
    >
      {children}
    </GameProgressContext>
  );
}
