import { useEffect, useState } from "react";
import { ScoreContext } from "../context/ScoreContext";
import type { ScoreProviderPropTypes } from "../utils/types";
import instance from "../utils/api";

export default function ScoreProvider({ children }: ScoreProviderPropTypes) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    async function getStoreScore(): Promise<number | null> {
      const playerToken = localStorage.getItem("player-token");
      if (playerToken) {
        try {
          const response = await instance.get("/player", {
            headers: {
              Authorization: `Bearer ${playerToken}`,
            },
          });
          return response.data.player.score;
        } catch (err: unknown) {
          return null;
        }
      }
      return null;
    }
    async function assignValues(): Promise<void> {
      const storedScore = await getStoreScore();
      setScore(storedScore ?? score);
    }
    assignValues();
  }, []);

  function incrementScore() {
    setScore(score + 1);
  }
  return (
    <ScoreContext value={{ score, incrementScore }}>{children}</ScoreContext>
  );
}
