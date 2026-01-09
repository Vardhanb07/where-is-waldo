import type { ImagePreviewPropTypes } from "@/src/utils/types";
import ArrowOutwardLight from "@/src/assets/images/nav-images/arrow-outward-dark.svg";
import ArrowOutwardDark from "@/src/assets/images/nav-images/arrow-outward-light.svg";
import { useTheme } from "@/src/utils/hooks";
import { useNavigate } from "react-router";
import clsx from "clsx";

export default function ImagePreview({ imageName, id }: ImagePreviewPropTypes) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className={clsx("flex flex-row px-4 py-2 w-full border m-2 hover:border-2", {
        "border-white": theme === "dark",
        "border-black": theme === "light",
      })}
      onClick={() => {
        navigate(`/image/${id}`);
      }}
    >
      <p className="flex-1">{imageName}</p>
      <div>
        {theme === "light" ? (
          <img src={ArrowOutwardLight} alt="arrow-outward-light" />
        ) : (
          <img src={ArrowOutwardDark} alt="arrow-outward-dark" />
        )}
      </div>
    </div>
  );
}
