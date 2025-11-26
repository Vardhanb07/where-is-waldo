import { createContext } from "react";
import spaceImg from "../assets/images/game-images/space-colony-chaos.jpg";
import slopesImg from "../assets/images/game-images/the-ski-slopes-of-anarchy.jpg";
import beachImg from "../assets/images/game-images/beach.jpg";
import factoryImg from "../assets/images/game-images/factory.jpg";

export function getImage(id: number): string {
  const images = [spaceImg, slopesImg, factoryImg, beachImg];
  return images[id - 1];
}

export const ImageContext = createContext({
  getImage: getImage,
});
