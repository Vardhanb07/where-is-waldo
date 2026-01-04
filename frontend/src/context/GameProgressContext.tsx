import { createContext } from "react";
import type { GameProgressContextTypes } from "../utils/types";

export const GameProgressContext = createContext<GameProgressContextTypes>({
  currentNotCompletedImages: [],
  currentNotCompletedSnapsOfImages: [[], [], [], []],
  updateCurrentNotCompletedImages: () => {},
  updateCurrentNotCompletedSnapsOfImages: () => {},
});
