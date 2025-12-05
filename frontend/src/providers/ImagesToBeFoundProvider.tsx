import { ImagesToBeFoundContext } from "../context/ImagesToBeFoundContext";
import { getImagesToBeFound } from "../context/ImagesToBeFoundContext";
import type { ImageProviderPropTypes } from "../utils/types";

export default function ImagesToBeFoundProvider({
  children,
}: ImageProviderPropTypes) {
  return (
    <ImagesToBeFoundContext value={{ getImagesToBeFound }}>
      {children}
    </ImagesToBeFoundContext>
  );
}
