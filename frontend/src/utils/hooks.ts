import { useContext } from "react";
import { ThemeContext } from "@/src/context/ThemeContext"
import { ImageContext } from "@/src/context/ImageContext";
import { ImagesToBeFoundContext } from "@/src/context/ImagesToBeFoundContext";
import { ScoreContext } from "@/src/context/ScoreContext";
import { GameProgressContext } from "@/src/context/GameProgressContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export function useGetImage() {
  const context = useContext(ImageContext);
  return context;
}

export function useGetImagesToBeFound() {
  const context = useContext(ImagesToBeFoundContext);
  return context;
}

export function useScore() {
  const context = useContext(ScoreContext);
  return context;
}

export function useGameProgress() {
  const context = useContext(GameProgressContext);
  return context;
}
