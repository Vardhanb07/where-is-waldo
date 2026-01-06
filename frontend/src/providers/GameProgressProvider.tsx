import { useEffect, useState } from "react";
import { GameProgressContext } from "../context/GameProgressContext";
import type {
  GameProgressProviderPropTypes,
  playerProgressType,
} from "../utils/types";
import instance from "../utils/api";

export default function GameProgressProvider({
  children,
}: GameProgressProviderPropTypes) {
  const [currentNotCompletedImages, setCurrentNotCompletedImages] = useState<
    number[]
  >([1, 2, 3, 4]);
  const [
    currentNotCompletedSnapsOfImages,
    setCurrentNotCompletedSnapsOfImages,
  ] = useState<number[][]>([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]);

  useEffect(() => {
    async function getPlayerProgress(): Promise<playerProgressType[] | null> {
      const playerToken = localStorage.getItem("player-token");
      if (playerToken) {
        try {
          const response = await instance.get("/progress", {
            headers: {
              Authorization: `Bearer ${playerToken}`,
            },
          });
          return response.data.progress;
        } catch (err: unknown) {
          return null;
        }
      }
      return null;
    }
    async function getAllNotCompletedImages(): Promise<number[] | null> {
      const playerProgress = await getPlayerProgress();
      if (!playerProgress) return null;
      const images: number[] = [];
      for (let i = 0; i < playerProgress.length; i++) {
        if (
          !(
            playerProgress[i]["completedSnaps"]["0"] &&
            playerProgress[i]["completedSnaps"]["1"] &&
            playerProgress[i]["completedSnaps"]["2"]
          )
        )
          images.push(i + 1);
      }
      return images;
    }
    async function getAllNotCompletedSnapsOfImages(): Promise<
      number[][] | null
    > {
      const playerProgress = await getPlayerProgress();
      if (!playerProgress) return null;
      const snaps: number[][] = [];
      playerProgress.sort((a, b) => a.imageId - b.imageId);
      for (let i = 0; i < playerProgress.length; i++) {
        const x: number[] = [];
        if (!playerProgress[i]["completedSnaps"]["0"]) x.push(1);
        if (!playerProgress[i]["completedSnaps"]["1"]) x.push(2);
        if (!playerProgress[i]["completedSnaps"]["2"]) x.push(3);
        snaps.push(x);
      }
      return snaps;
    }
    async function assignValues(): Promise<void> {
      const images = await getAllNotCompletedImages();
      const snaps = await getAllNotCompletedSnapsOfImages();
      setCurrentNotCompletedImages(images ?? currentNotCompletedImages);
      setCurrentNotCompletedSnapsOfImages(
        snaps ?? currentNotCompletedSnapsOfImages
      );
    }
    assignValues();
  }, []);

  const updateCurrentNotCompletedImages = (imageId: number) => {
    let images = currentNotCompletedImages;
    images = images.filter((image) => image !== imageId);
    setCurrentNotCompletedImages(images);
  };

  const updateCurrentNotCompletedSnapsOfImages = (
    imageId: number,
    snapId: number
  ) => {
    let snaps = currentNotCompletedSnapsOfImages;
    snaps[imageId - 1] = snaps[imageId - 1].filter(
      (snap) => snap !== snapId - 1
    );
    setCurrentNotCompletedSnapsOfImages(snaps);
  };

  return (
    <GameProgressContext
      value={{
        currentNotCompletedImages,
        currentNotCompletedSnapsOfImages,
        updateCurrentNotCompletedImages,
        updateCurrentNotCompletedSnapsOfImages,
      }}
    >
      {children}
    </GameProgressContext>
  );
}
