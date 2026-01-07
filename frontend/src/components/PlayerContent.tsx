import type { PlayerContentPropTypes } from "../utils/types";

export default function PlayerContent({
  rank,
  name,
  score,
}: PlayerContentPropTypes) {
  return (
    <div>
      <div className="flex flex-row p-3 text-2xl">
        <p className="flex-1 text-center">{rank}</p>
        <p className="flex-1 text-center">{name}</p>
        <p className="flex-1 text-center">{score}</p>
      </div>
      <hr />
    </div>
  );
}
