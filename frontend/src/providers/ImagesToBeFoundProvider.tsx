import { ImagesToBeFoundContext } from "@/src/context/ImagesToBeFoundContext";
import { getImagesToBeFound } from "@/src/context/ImagesToBeFoundContext";
import type { ImageProviderPropTypes } from "@/src/utils/types";

export default function ImagesToBeFoundProvider({
  children,
}: ImageProviderPropTypes) {
  return (
    <ImagesToBeFoundContext value={{ getImagesToBeFound }}>
      {children}
    </ImagesToBeFoundContext>
  );
}
