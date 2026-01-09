import type { LeaderboardContentPropTypes } from "@/src/utils/types";
import PlayerContent from "@/src/components/PlayerContent";

export default function LeaderboardContent({
  content,
}: LeaderboardContentPropTypes) {
  return (
    <div>
      <div className="flex flex-row text-2xl p-4">
        <p className="flex-1 text-center">position</p>
        <p className="flex-1 text-center">username</p>
        <p className="flex-1 text-center">score</p>
      </div>
      <hr />
      {content.map(({ username, score, id }, index) => {
        return (
          <PlayerContent
            name={username}
            score={score}
            rank={index + 1}
            key={id}
          />
        );
      })}
    </div>
  );
}
