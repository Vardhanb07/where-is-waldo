import { createContext } from "react";
/* Space colony images */
import SpaceColonyImageToBeFound1 from "../assets/images/to-find-images/space-colony/space-colony-chaos-to-find-1.jpg";
import SpaceColonyImageToBeFound2 from "../assets/images/to-find-images/space-colony/space-colony-chaos-to-find-2.jpg";
import SpaceColonyImageToBeFound3 from "../assets/images/to-find-images/space-colony/space-colony-chaos-to-find-3.jpg";
/* Beach images */
import BeachImageToBeFound1 from "../assets/images/to-find-images/beach/beach-to-find-1.jpg";
import BeachImageToBeFound2 from "../assets/images/to-find-images/beach/beach-to-find-2.jpg";
import BeachImageToBeFound3 from "../assets/images/to-find-images/beach/beach-to-find-3.jpg";
/* Factory images */
import FactoryImageToBeFound1 from "../assets/images/to-find-images/factory/factory-to-find-1.jpg";
import FactoryImageToBeFound2 from "../assets/images/to-find-images/factory/factory-to-find-2.jpg";
import FactoryImageToBeFound3 from "../assets/images/to-find-images/factory/factory-to-find-3.jpg";
/* Slopes images */
import SlopesImageToBeFound1 from "../assets/images/to-find-images/the-ski-slopes/the-ski-slopes-of-anarchy-to-find-1.jpg";
import SlopesImageToBeFound2 from "../assets/images/to-find-images/the-ski-slopes/the-ski-slopes-of-anarchy-to-find-2.jpg";
import SlopesImageToBeFound3 from "../assets/images/to-find-images/the-ski-slopes/the-ski-slopes-of-anarchy-to-find-3.jpg";

export function getImagesToBeFound(parentImageId: number): string[] {
  const images = [
    [
      SpaceColonyImageToBeFound1,
      SpaceColonyImageToBeFound2,
      SpaceColonyImageToBeFound3,
    ],
    [SlopesImageToBeFound1, SlopesImageToBeFound2, SlopesImageToBeFound3],
    [FactoryImageToBeFound1, FactoryImageToBeFound2, FactoryImageToBeFound3],
    [BeachImageToBeFound1, BeachImageToBeFound2, BeachImageToBeFound3],
  ];
  return images[parentImageId - 1];
}

export const ImagesToBeFoundContext = createContext({
  getImagesToBeFound: getImagesToBeFound,
});
