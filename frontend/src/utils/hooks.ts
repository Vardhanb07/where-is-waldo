import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ImageContext } from "../context/ImageContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export function useGetImage() {
  const context = useContext(ImageContext);
  return context;
}
