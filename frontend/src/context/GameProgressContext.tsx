import { createContext } from "react";
import type {
  GameProgressContextTypes,
  playerProgressType,
} from "../utils/types";
import instance from "../utils/api";

async function getPlayerProgress(): Promise<playerProgressType[] | null> {
  const playerToken = localStorage.getItem("player-token");
  if (playerToken) {
    const {
      progress,
    }: {
      progress: playerProgressType[];
    } = await instance.get("/progress", {
      headers: {
        Authorization: `Bearer ${playerToken}`,
      },
    });
    return progress;
  }
  return null;
}

const playerProgress = await getPlayerProgress();

function getStoredCompletedImages(): number[] | null {
  if (!playerProgress) return null;
  const images: number[] = [];
  for (let i = 0; i < playerProgress.length; i++) {
    if (
      playerProgress[i]["completedSnaps"]["0"] &&
      playerProgress[i]["completedSnaps"]["1"] &&
      playerProgress[i]["completedSnaps"]["2"]
    )
      images.push(i + 1);
  }
  return images;
}

function getStoredCompletedSnapsOfImages(): number[][] | null {
  if (!playerProgress) return null;
  const snaps: number[][] = [];
  for (let i = 0; i < playerProgress.length; i++) {
    const x: number[] = [];
    if (playerProgress[i]["completedSnaps"]["0"]) x.push(1);
    if (playerProgress[i]["completedSnaps"]["1"]) x.push(2);
    if (playerProgress[i]["completedSnaps"]["2"]) x.push(3);
  }
  return snaps;
}

export const completedImages = getStoredCompletedImages() ?? [];
export const completedSnapsOfImages = getStoredCompletedSnapsOfImages() ?? [
  [],
  [],
  [],
  [],
];

export const GameProgressContext = createContext<GameProgressContextTypes>({
  currentCompletedImages: [],
  currentCompletedSnapsOfImages: [[], [], [], []],
  updateCurrentCompletedImages: () => {},
  updateCurrentCompletedSnapsOfImages: () => {},
});
