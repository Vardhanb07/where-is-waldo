import { ImageContext } from "../context/ImageContext";
import { getImage } from "../context/ImageContext";
import type { ImageProviderPropTypes } from "../utils/types";

export default function ImageProvider({ children }: ImageProviderPropTypes) {
  return <ImageContext value={{ getImage }}>{children}</ImageContext>;
}
