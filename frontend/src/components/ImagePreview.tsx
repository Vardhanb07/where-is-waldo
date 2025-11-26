import type { ImagePreviewPropTypes } from "../utils/types";
import ArrowOutwardLight from "../assets/images/nav-images/arrow-outward-dark.svg";
import ArrowOutwardDark from "../assets/images/nav-images/arrow-outward-light.svg";
import { useTheme } from "../utils/hooks";
import { useNavigate } from "react-router";

export default function ImagePreview({ imageName, id }: ImagePreviewPropTypes) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-row px-4 py-2 w-full border ${
        theme === "dark" ? "border-white" : "border-black"
      } m-2`}
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
