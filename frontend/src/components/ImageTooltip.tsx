import type { ImageTooltipPropTypes } from "@/src/utils/types";

export default function ImageTooltip({ mousePosition }: ImageTooltipPropTypes) {
  const { x, y } = mousePosition;
  return (
    <div style={{ position: "absolute", top: y + "px", left: x + "px" }}>
      <div className="w-[45px] h-[45px] border-2"></div>
    </div>
  );
}
