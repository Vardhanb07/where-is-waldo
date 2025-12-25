import positions from "./positions";

export function checkPositions(
  imageId: number,
  toFindImageId: number,
  xPosition: number,
  yPosition: number
): boolean {
  const { x, y } = positions[imageId][toFindImageId + 1];
  return (
    x - 30 <= xPosition &&
    xPosition <= x + 30 &&
    y - 30 <= yPosition &&
    yPosition <= y + 30
  );
}
