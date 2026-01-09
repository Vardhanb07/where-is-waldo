import { ImageContext } from "@/src/context/ImageContext";
import { getImage } from "@/src/context/ImageContext";
import type { ImageProviderPropTypes } from "@/src/utils/types";

export default function ImageProvider({ children }: ImageProviderPropTypes) {
  return <ImageContext value={{ getImage }}>{children}</ImageContext>;
}
